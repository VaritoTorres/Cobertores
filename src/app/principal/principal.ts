import { Component, inject, signal } from '@angular/core';
import { Menu } from '../menu/menu';
import { Catalogo } from '../catalogo/catalogo';
import { Contacto } from '../contacto/contacto';
import { Auth } from '../services/auth';

@Component({
  selector: 'app-principal',
  imports: [Menu, Catalogo, Contacto],
  templateUrl: './principal.html',
  styleUrl: './principal.css',
})
export class Principal {
  private auth = inject(Auth);
  vistaActual = signal<'inicio' | 'catalogo' | 'contacto'>('catalogo');

  cambiarVista(vista: 'inicio' | 'catalogo' | 'contacto') {
    if (vista === 'inicio') {
      this.auth.logout();
    } else {
      this.vistaActual.set(vista);
    }
  }
}
