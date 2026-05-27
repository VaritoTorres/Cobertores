import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-pago',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pago.html',
  styleUrl: './pago.css',
})
export class Pago {
  totalAmount: number = 0;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.totalAmount = navigation.extras.state['totalAPagar'];
    } else {
      this.totalAmount = history.state?.totalAPagar || 0;
    }
  }

  // NUEVO MÉTODO: Navega de regreso al catálogo
  cancelar() {
    this.router.navigate(['/principal']); 
  }
  // En pago.ts, añade este método:
// Asegúrate de que esta función esté dentro de tu clase Pago
  confirmarPago() {
    this.router.navigate(['/pagoexito'], { 
      state: { 
        total: this.totalAmount, // Mandamos el total al componente de éxito
        producto: 'Cobertor Premium' 
      } 
    });
  }
}