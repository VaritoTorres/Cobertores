import { Component, signal, output } from '@angular/core';
import { NgIf } from '@angular/common';
import { Carrito } from '../carrito/carrito';

@Component({
  selector: 'app-menu',
  imports: [NgIf, Carrito],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  mostrarCarrito = signal(false);
  // Output para cambiar de vista
  vistaChange = output<'inicio' | 'catalogo' | 'contacto'>();

  irAVista(vista: 'inicio' | 'catalogo' | 'contacto') {
    this.vistaChange.emit(vista);
  }

  toggleCarrito() {
    this.mostrarCarrito.update(valor => !valor);
  }

  cerrarCarritoSiEsOverlay(event: MouseEvent) {
    // Cierra el carrito solo si se hace clic en el overlay (fondo oscuro)
    if (event.target === event.currentTarget) {
      this.mostrarCarrito.set(false);
    }
  }
}
