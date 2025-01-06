import { Injectable } from '@angular/core';
import { Article } from '../model/article';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private articlesList: Article[];

  constructor() {
    this.articlesList = [{
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
    }]
  }

  getArticles(): Observable<Article[]> {
    return of(this.articlesList);
  }

  changeQuantity(articleID: number, chagenInQuantity: number): Observable<Article> {
    let article = this.articlesList.find(article => article.id === articleID);
    article.quantityInCart += chagenInQuantity;
    return of(article);
  }

  create(article: Article): Observable<any> {
    article.id = this.articlesList.length + 1;
    article.quantityInCart = 0;
    this.articlesList.push(article);
    return of(article);

  }

}
