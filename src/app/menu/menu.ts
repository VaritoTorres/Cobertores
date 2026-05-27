import { Component, signal } from '@angular/core';
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
