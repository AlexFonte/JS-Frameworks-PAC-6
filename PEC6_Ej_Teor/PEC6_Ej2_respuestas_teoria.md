## a) Quina és la diferència entre definir un servei usant el decorador `@Injectable` o `@NgModule`? Referència: https://angular.io/guide/providers

El decorador `@Injectable({ providedIn: 'root' })` permet definir el registre del servei a nivell de l'aplicació. Per tant, serà accessible des dels diferents mòduls que hi hagi.

En el cas que un servei només hagi d'estar en un mòdul en concret, sempre podem limitar el seu registre al mòdul, fent ús del decorador `@NgModule`, definint-lo dins de `providers[]`.

## b) Quines altres opcions admet el decorador `@Injectable` per a la propietat `providedIn`? Per a què serveixen les altres configuracions? Referència: https://dev.to/christiankohler/improved-dependeny-injection-with-the-new-providedin-scopes-any-and-platform-30bb

Sense comptar l'opció `root` de `providedIn`, tenim les següents opcions:

- `any`: Utilitzat en el cas que sigui necessari que un mòdul tingui la seva pròpia instància del servei.

- `platform`: Crea una instància única del servei que serà compartida per diferents aplicacions, ja que ens permet definir el servei a nivell de plataforma.