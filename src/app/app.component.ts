import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  host: {
    style: 'height: 100vh; display: block;',
  },
})
export class AppComponent {
  title = 'base-angular';
  favoriteColorControl = new FormControl('');
}
