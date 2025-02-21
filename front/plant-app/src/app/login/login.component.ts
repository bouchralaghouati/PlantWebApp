import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AuthGoogleService } from '../services/auth-google.service';

const MODULES: any[] = [
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  FormsModule,
  ReactiveFormsModule,
];

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [...MODULES], // ✅ Ensure this is inside an array
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'], // ✅ Correct property name
})
export class LoginComponent {
  private authService = inject(AuthGoogleService);

  signInWithGoogle() {
    this.authService.login();
  }
}
