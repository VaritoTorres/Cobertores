import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosService } from '../services/productos';
import { CarritoService } from '../services/carrito';

@Component({
  selector: 'app-catalogo',
  imports: [CommonModule],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css',
})
export class Catalogo {
  private carritoService = inject(CarritoService);
  private productosService = inject(ProductosService);

  // Referencia a los productos del servicio
  cobertores = this.productosService.productos;

  agregarAlCarrito(cobertor: any) {
    this.carritoService.agregarItem({
      id: cobertor.id,
      nombre: cobertor.nombre,
      precio: cobertor.precio,
      cantidad: 1
    });
  }
}
