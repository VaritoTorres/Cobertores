import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-password',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="password-modal" [class.active]="mostrarModal()" (click)="cerrarModal()">
      <div class="password-modal-content" (click)="$event.stopPropagation()">
        <button class="btn-cerrar" (click)="cerrarModal()">✕</button>
        <h2>Acceso a Administración</h2>
        <p class="modal-desc">Ingresa la contraseña para acceder al panel de administración</p>
        
        <div class="password-form">
          <input
            type="password"
            [(ngModel)]="contrasena"
            placeholder="Ingresa la contraseña"
            (keyup.enter)="verificarContrasena()"
            class="password-input"
          />
          @if (error()) {
            <p class="error-message">{{ error() }}</p>
          }
        </div>

        <div class="password-buttons">
          <button class="btn-cancelar" (click)="cerrarModal()">Cancelar</button>
          <button class="btn-ingresar" (click)="verificarContrasena()" [disabled]="!contrasena">
            Ingresar
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .password-modal {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 1000;
    }

    .password-modal.active {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .password-modal-content {
      background: white;
      border-radius: 15px;
      padding: 40px;
      max-width: 400px;
      width: 90%;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
      position: relative;
    }

    .btn-cerrar {
      position: absolute;
      top: 15px;
      right: 15px;
      background: none;
      border: none;
      font-size: 24px;
      cursor: pointer;
      color: #999;
    }

    .btn-cerrar:hover {
      color: #333;
    }

    h2 {
      color: #01579b;
      margin: 0 0 10px 0;
      font-size: 1.5em;
    }

    .modal-desc {
      color: #666;
      margin: 0 0 25px 0;
      font-size: 0.95em;
    }

    .password-form {
      margin-bottom: 25px;
    }

    .password-input {
      width: 100%;
      padding: 12px 15px;
      border: 2px solid #e0e0e0;
      border-radius: 8px;
      font-size: 1em;
      box-sizing: border-box;
      transition: all 0.3s ease;
    }

    .password-input:focus {
      outline: none;
      border-color: #0288d1;
      box-shadow: 0 0 0 3px rgba(2, 136, 209, 0.1);
    }

    .error-message {
      color: #d32f2f;
      font-size: 0.9em;
      margin-top: 10px;
      margin-bottom: 0;
    }

    .password-buttons {
      display: flex;
      gap: 10px;
      justify-content: flex-end;
    }

    button {
      padding: 10px 20px;
      border: none;
      border-radius: 6px;
      font-size: 0.95em;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .btn-cancelar {
      background: #f0f0f0;
      color: #333;
    }

    .btn-cancelar:hover {
      background: #e0e0e0;
    }

    .btn-ingresar {
      background: linear-gradient(135deg, #0288d1, #0097a7);
      color: white;
      min-width: 120px;
    }

    .btn-ingresar:hover:not(:disabled) {
      background: linear-gradient(135deg, #0097a7, #00838f);
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(2, 136, 209, 0.3);
    }

    .btn-ingresar:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `]
})
export class AdminPasswordComponent {
  private router = inject(Router);

  mostrarModal = signal(false);
  contrasena = '';
  error = signal('');

  abrirModal() {
    this.contrasena = '';
    this.error.set('');
    this.mostrarModal.set(true);
  }

  cerrarModal() {
    this.mostrarModal.set(false);
    this.contrasena = '';
    this.error.set('');
  }

  verificarContrasena() {
    // Simulación: cualquier contraseña funciona (podría ser "admin", "123456", etc.)
    if (this.contrasena.length > 0) {
      this.cerrarModal();
      this.router.navigate(['/administracion']);
    } else {
      this.error.set('Por favor ingresa la contraseña');
    }
  }
}
