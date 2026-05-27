import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-pagoexito',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './pagoexito.html',
  styleUrl: './pagoexito.css'
})
// AQUÍ ESTÁ LA CLAVE: Debe decir exactamente Pagoexito
export class Pagoexito { 
  datos: any;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.datos = navigation?.extras.state || { total: 0, producto: 'Producto' };
  }
}