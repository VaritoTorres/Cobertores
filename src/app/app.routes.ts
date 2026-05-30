import { Routes } from '@angular/router';

import { Login } from './login/login';
import { Home } from './home/home';
import { Productos } from './productos/productos';

import { Carrito } from './carrito/carrito';
import { Catalogo } from './catalogo/catalogo';
import { Principal } from './principal/principal';
import { Pago } from './pago/pago';
import { Pagoexito } from './pagoexito/pagoexito';
import { AdministracionBasicaComponent } from './administracion-basica/administracion-basica.component';

export const routes: Routes = [
  { path: '', component: Login },
  { path: 'home', component: Home },
  { path: 'productos', component: Productos },
  { path: 'principal', component: Principal },
  { path: 'catalogo', component: Catalogo },
  { path: 'carrito', component: Carrito },
  { path: 'pago', component: Pago },
  { path: 'pagoexito', component: Pagoexito },
  { path: 'administracion', component: AdministracionBasicaComponent }
];
