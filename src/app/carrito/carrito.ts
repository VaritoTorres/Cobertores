import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoService } from '../services/carrito';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css',
})
export class Carrito {
  private router = inject(Router);
  private carritoService = inject(CarritoService);

  // Exponer el carrito service al template
  carrito = this.carritoService;
  items = this.carritoService.items;
  subtotal = this.carritoService.subtotal;
  envio = this.carritoService.envio;

  get total(): number {
    return this.carritoService.total;
  }

  eliminarItem(id: number) {
    this.carritoService.eliminarItem(id);
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
