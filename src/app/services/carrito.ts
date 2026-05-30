import { Injectable, signal } from '@angular/core';

export interface CarritoItem {
  id: number;
  nombre: string;
  precio: number;
  cantidad: number;
}

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  // Señales para el estado del carrito
  items = signal<CarritoItem[]>([]);
  subtotal = signal(0);
  envio = signal(0);

  // Computed para el total
  get total(): number {
    return this.subtotal() + this.envio();
  }

  // Método para agregar items
  agregarItem(item: CarritoItem) {
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

  // Limpiar carrito
  limpiar() {
    this.items.set([]);
    this.subtotal.set(0);
  }
}
