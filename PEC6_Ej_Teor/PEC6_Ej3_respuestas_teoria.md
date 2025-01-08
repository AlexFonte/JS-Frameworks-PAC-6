### a) Què són els interceptors?

Els interceptors són una forma d'interceptar peticions HTTP, és a dir, sol·licituds i respostes, per tal de poder transformar i/o modificar el contingut en cas que sigui necessari, abans que arribin al destí, com per exemple al backend o frontend. Un exemple seria autenticar les peticions amb un JWT per saber si aquella petició té permisos.

## b) Analitza la següent cadena d'operadors de RxJS, explica cadascun dels passos que s'estan desenvolupant i explica en quin cas faries servir aquest codi:

```typescript
(1)    this.wines$ = this.searchSubject
(2)         .startWith(this.searchTerm)
(3)         .debounceTime(300)
(4)         .distinctUntilChanged()
(5)         .merge(this.reloadProductsList)
(6)         .switchMap((query) => this.wineService.getWine(this.searchTerm));
```
Per `this.searchSubject` és del tipus `Subject` i actua com a Observer i Observable al mateix temps.

Per `.startWith(this.searchTerm)` defineix el valor per defecte abans que siguin emesos els elements de l'observable.

Per `.debounceTime(300)` estableix un retard de 300 mil·lisegons entre cada notificació o sobre l'últim valor observable que s'hauria d'emetre.

Per `.distinctUntilChanged()` emet un valor observable només quan els valors siguin diferents als actuals, i així evitar peticions que siguin iguals.

Per `.merge(this.reloadProductsList)` combina valors emesos de l'observable principal juntament amb els valors de `this.reloadProductsList`.

Per `.switchMap((query) => this.wineService.getWine(this.searchTerm));` emet un observable de sortida per cada vi segons la consulta de cerca. Bàsicament funciona com una cerca d'una llista.




