import { Component, signal } from '@angular/core';
import { NgIf } from '@angular/common';
import { Menu } from '../menu/menu';
import { Catalogo } from '../catalogo/catalogo';
import { Contacto } from '../contacto/contacto';

@Component({
  selector: 'app-principal',
  imports: [Menu, Catalogo, Contacto, NgIf],
  templateUrl: './principal.html',
  styleUrl: './principal.css',
})
export class Principal {
  vistaActual = signal<'inicio' | 'catalogo' | 'contacto'>('inicio');

  cambiarVista(vista: 'inicio' | 'catalogo' | 'contacto') {
    this.vistaActual.set(vista);
  }
}
