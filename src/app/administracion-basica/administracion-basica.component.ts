import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatFormField, MatLabel, MatError } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { ProductosService, Producto } from '../services/productos';

@Component({
  selector: 'app-administracion-basica',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormField, MatLabel, MatError, MatInput],
  templateUrl: './administracion-basica.component.html',
  styleUrl: './administracion-basica.component.css'
})
export class AdministracionBasicaComponent {
  private fb = inject(FormBuilder);
  private productosService = inject(ProductosService);

  // Referencia a la lista de productos del servicio
  productos = this.productosService.productos;

  // Reportes simulados
  reporteGuanacias: number = 14350;
  productosVendidos: number = 34;

  // Formulario para Altas y Cambios
  formProducto = this.fb.group({
    nombre: ['', [Validators.required]],
    precio: ['', [Validators.required, Validators.min(1)]],
    stock: ['', [Validators.required, Validators.min(0)]]
  });

  obtenerError(campo: string): string {
    const control = this.formProducto.get(campo);
    if (control?.hasError('required')) return 'Este campo es requerido ';
    if (control?.hasError('min')) return 'El valor debe ser mayor o igual a 0';
    return '';
  }

  agregarProducto() {
    if (this.formProducto.valid) {
      const nuevo: Producto = {
        id: Date.now(),
        nombre: this.formProducto.value.nombre!,
        precio: Number(this.formProducto.value.precio),
        stock: Number(this.formProducto.value.stock)
      };
      this.productosService.agregarProducto(nuevo);
      this.formProducto.reset();
    }
  }

  eliminarProducto(id: number) {
    this.productosService.eliminarProducto(id);
  }
}