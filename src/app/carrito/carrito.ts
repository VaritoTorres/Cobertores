import { Component, signal } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-carrito',
  imports: [NgIf, NgFor],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css',
})
export class Carrito {
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
}
