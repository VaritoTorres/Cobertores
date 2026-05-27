import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  stock: number;
}

@Component({
  selector: 'app-administracion-basica',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './administracion-basica.component.html',
  styleUrl: './administracion-basica.component.css'
})
export class AdministracionBasicaComponent {
  private fb = inject(FormBuilder);

  // Lista simulada de productos (Inventario)
  productos: Producto[] = [
    { id: 1, nombre: 'Disco de Vinilo Vintage', precio: 450, stock: 12 },
    { id: 2, nombre: 'Audífonos Retro Pink', precio: 890, stock: 5 }
  ];

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
      this.productos.push(nuevo);
      this.formProducto.reset(); // Limpia el formulario
    }
  }

  eliminarProducto(id: number) {
    this.productos = this.productos.filter(p => p.id !== id);
  }
}