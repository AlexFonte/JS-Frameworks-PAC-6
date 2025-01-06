import { Component, OnInit } from '@angular/core';
import { Article } from "../../model/article";
import { ArticleQuantityChange } from "../../model/article-quantity-change";
import { debounceTime, distinctUntilChanged, merge, Observable, startWith, Subject, switchMap } from 'rxjs';
import { ArticleService } from '../../services/article-service.service';

@Component({
  selector: 'app-article-list',
  template: `

<div>
      <input type="text"
             placeholder="Buscar article"
             name="searchBox"
             [(ngModel)]="searchText"
             (keyup)="search()"/>
    </div>
    <app-article-item
      *ngFor="let item of articlesList$ | async"
      [article]="item"
      (quantityChange)="onQuantityChange($event)">
    </app-article-item>
  `,
  styles: []
})
export class ArticleListComponent implements OnInit {

  public articlesList$: Observable<Article[]>;

  public searchText: string = '';
  private searchTerms: Subject<string> = new Subject();
  private reloadArticleList : Subject <void> = new Subject();

  constructor(private articleService: ArticleService) {
  }

  ngOnInit() {
    this.articlesList$ = this.searchTerms.pipe(
      startWith(this.searchText),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((q) => this.articleService.getArticles(this.searchText)));
    // this.articlesList$ = this.articleService.getArticles();
    /* this.articlesList = [{
      id: 1,
      name: "Agua Font Vella 1,5 l.",
      imageUrl: "https://static.carrefour.es/hd_150x_/img_pim_food/000127_00_1.jpg",
      price: 0.64,
      isOnSale: true,
      quantityInCart: 0
    }, {
      id: 2,
      name: "Agua Carrefour 1,5 l.",
      imageUrl: "https://static.carrefour.es/hd_150x_/img_pim_food/609744_00_1.jpg",
      price: 0.39,
      isOnSale: false,
      quantityInCart: 0
    }, {
      id: 3,
      name: "Agua Solán de Cabras 1,5 l.",
      imageUrl: "https://static.carrefour.es/hd_150x_/img_pim_food/492590_00_1.jpg",
      price: 0.87,
      isOnSale: true,
      quantityInCart: 0
    }] */
  }

  onQuantityChange(articleQuantityChange: ArticleQuantityChange): void {
    this.articleService.changeQuantity(articleQuantityChange.article.id, articleQuantityChange.quantityChange)
  }

  search(){
    this.searchTerms.next(this.searchText);
  }
}
