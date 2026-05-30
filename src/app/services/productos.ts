import { Injectable, signal } from '@angular/core';

export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  stock?: number;
  descripcion?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  // Signal para mantener la lista de productos reactiva
  productos = signal<Producto[]>([
    {
      id: 1,
      nombre: 'Cobertor Premium',
      precio: 99.99,
      stock: 12,
      descripcion: 'Cobertor de algodón 100% premium'
    },
    {
      id: 2,
      nombre: 'Cobertor Estándar',
      precio: 59.99,
      stock: 20,
      descripcion: 'Excelente relación precio-calidad'
    },
    {
      id: 3,
      nombre: 'Cobertor Deluxe',
      precio: 79.99,
      stock: 15,
      descripcion: 'La opción más elegida del año'
    },
    {
      id: 4,
      nombre: 'Cobertor Eco',
      precio: 89.99,
      stock: 8,
      descripcion: 'Sostenible y ecológico'
    }
  ]);

  agregarProducto(producto: Producto) {
    const productosActuales = this.productos();
    this.productos.set([...productosActuales, producto]);
  }

  eliminarProducto(id: number) {
    const productosActuales = this.productos();
    const filtrados = productosActuales.filter(p => p.id !== id);
    this.productos.set(filtrados);
  }

  obtenerProductos() {
    return this.productos();
  }
}
