import { Component, signal, output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Carrito } from '../carrito/carrito';
import { AdminPasswordComponent } from '../admin-password/admin-password.component';

@Component({
  selector: 'app-menu',
  imports: [CommonModule, Carrito, AdminPasswordComponent],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  @ViewChild(AdminPasswordComponent) adminPassword!: AdminPasswordComponent;

  mostrarCarrito = signal(false);
  // Output para cambiar de vista
  vistaChange = output<'inicio' | 'catalogo' | 'contacto'>();

  irAVista(vista: 'inicio' | 'catalogo' | 'contacto') {
    this.vistaChange.emit(vista);
  }

  toggleCarrito() {
    this.mostrarCarrito.update(valor => !valor);
  }

  abrirAdminPassword() {
    this.adminPassword.abrirModal();
  }

  cerrarCarritoSiEsOverlay(event: MouseEvent) {
    // Cierra el carrito solo si se hace clic en el overlay (fondo oscuro)
    if (event.target === event.currentTarget) {
      this.mostrarCarrito.set(false);
    }
  }
}
