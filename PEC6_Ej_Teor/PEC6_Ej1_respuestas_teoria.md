## a) Quina és la funció dels components i serveis? (i.e. quan s'ha d'utilitzar cadascun)

En Angular, els components estan orientats més cap a la construcció i definició de la interfície d'usuari, és a dir, la capa de presentació. Cada component té associada una plantilla HTML com a part de l'estructura de presentació. Els components són els responsables de mostrar, visualitzar i renderitzar les dades cap a l'usuari final de l'aplicació. També són els responsables de permetre la interacció amb l'usuari, ja sigui un cercador, un botó, etc.

Per altra banda, els serveis són els responsables de la lògica del programa i del lloc web. Són els responsables de proveir les dades necessàries, gestionar la lògica i els processos per als components. Normalment es sol separar la lògica del component quan aquesta no depèn d'un component en concret, i així tenir un servei destinat i reutilitzable per al futur, on tenir la lògica necessària d'un CRUD.

## b) Què és la <<injecció de dependències>>? Per què serveix el decorador @Injectable?

La injecció de dependències és un patró de disseny que permet a una classe instanciar una altra sense la necessitat de crear-les, ja que les rep com a paràmetre.

El decorador `@Injectable` indica a Angular que la classe en la qual s'utilitza pot ser injectada des de diferents punts de l'aplicació.

## c) Explica els conceptes següents de la programació reactiva que es fan servir a RxJS:

- **Observable**: col·lecció de futurs esdeveniments, esdeveniments que es poden emetre.

- **Subscription**: representa l'execució d'un observable, i permet ser cancel·lada.

- **Operators**: funció que s'utilitza per a la manipulació d'esdeveniments.

- **Subject**: funciona com un observable, però aquest permet el multicast o emetre a diferents observables al mateix moment, cosa que no pot fer un observable.

- **Schedulers**: encarregat de controlar quan una subscripció ha de començar i enviar les notificacions dels observables o subjects.

## d) Quina és la diferència entre promeses i observables?

Els observables permeten emetre múltiples dades d'una sola vegada, cosa que les promeses no poden fer per si soles. Solament emeten un únic valor. Per altra banda, les promeses tampoc poden ser cancel·lades, mentre que els observables poden cancel·lar la seva subscripció.

## e) Quina és la funció de la tuberia (pipe) async?

La funció del pipe `async` és subscriure's a un observable i retornar l'últim valor emès. Sempre que hi hagi un nou valor emès, aquest s'encarrega de notificar al component perquè faci les comprovacions de canvis.