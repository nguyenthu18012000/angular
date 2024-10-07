import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from '../input/input.component';
import { CommonModule } from '@angular/common';
import { RegisterModel } from '../../models/register';
import { AppDB } from '../../services/dexie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, InputComponent, FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  constructor(private db: AppDB, private router: Router) {}

  model = new RegisterModel();

  async onSubmit() {
    const newModel = { ...this.model };
    delete newModel['id'];
    const result = await this.db.createNewUser(newModel);
    if (result === 'success') {
      this.router.navigate(['/login']);
    }
  }
}
