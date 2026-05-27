import { Component } from '@angular/core';
import { Menu } from '../menu/menu';
import { Catalogo } from '../catalogo/catalogo';

@Component({
  selector: 'app-principal',
  imports: [Menu, Catalogo],
  templateUrl: './principal.html',
  styleUrl: './principal.css',
})
export class Principal {}
