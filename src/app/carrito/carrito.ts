import { Component, inject, signal } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { Router,RouterLink } from '@angular/router';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [NgIf, NgFor, RouterLink],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css',
})

export class Carrito {
  router = inject(Router);
   constructor() {
     // Ítem ficticio para pruebas: permite probar la navegación al pago
     this.agregarItem({ id: 999, nombre: 'Cobertor de prueba', precio: 49.9, cantidad: 1 });
   }
  // Señales para el estado del carrito
  items = signal<any[]>([]);
  subtotal = signal(0);
  envio = signal(0);

  // Computed para el total
  get total(): number {
    return this.subtotal() + this.envio();
  }

  // Método para agregar items (se usará desde catálogo)
  agregarItem(item: any) {
    const itemsActuales = this.items();
    const existe = itemsActuales.find(i => i.id === item.id);

    if (existe) {
      existe.cantidad += item.cantidad;
    } else {
      itemsActuales.push(item);
    }

    this.items.set([...itemsActuales]);
    this.actualizarTotal();
  }

  // Método para eliminar items
  eliminarItem(id: number) {
    const itemsActuales = this.items().filter(i => i.id !== id);
    this.items.set(itemsActuales);
    this.actualizarTotal();
  }

  // Actualizar total
  private actualizarTotal() {
    const total = this.items().reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
    this.subtotal.set(total);
  }

  procederAlPago() {
    console.log('[Carrito] procederAlPago clicked, items length=', this.items().length);

    if (this.items().length === 0) {
      console.warn('[Carrito] carrito vacío, navegación cancelada');
      return;
    }

    // AÑADIDO: Pasamos el total en el "state" de la navegación
    this.router.navigateByUrl('/pago', { state: { totalAPagar: this.total } })
      .then(ok => console.log('[Carrito] navegación a /pago ok=', ok))
      .catch(err => console.error('[Carrito] error al navegar a /pago', err));
  }
}
