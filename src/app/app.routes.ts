import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Productos } from './productos/productos';
import { Carrito } from './carrito/carrito';
import { Catalogo } from './catalogo/catalogo';
import { Principal } from './principal/principal';


export const routes: Routes = [
  { path: '', component: Home },
  { path: 'productos', component: Productos },

  { path: 'principal', component: Principal },
  { path: 'catalogo', component: Catalogo },
  { path: 'carrito', component: Carrito }
  { path: 'carrito', component: Carrito }
];