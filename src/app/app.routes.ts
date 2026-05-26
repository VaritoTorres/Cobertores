import { Routes } from '@angular/router';

import { Carrito } from './carrito/carrito';
import { Catalogo } from './catalogo/catalogo';
import { Principal } from './principal/principal';

export const routes: Routes = [
  { path: 'principal', component: Principal },
  { path: 'catalogo', component: Catalogo },
  { path: 'carrito', component: Carrito },

];
