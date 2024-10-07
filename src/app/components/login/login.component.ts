import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from '../input/input.component';
import { LoginModel } from '../../models/login';
import { AppDB } from '../../services/dexie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, InputComponent, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private db: AppDB, private router: Router) {}

  model = new LoginModel();

  async onLogin() {
    const result = await this.db.getUser(this.model);
    console.log(result);
    if (result) {
      this.router.navigate(['/']);
    }
  }
}
