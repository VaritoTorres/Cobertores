import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private router = inject(Router);

  logout() {
    this.router.navigate(['/']);
  }
}
