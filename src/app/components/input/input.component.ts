import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterModel } from '../../models/register';

@Component({
  selector: 'common-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  @Input() label = '';
  @Input() model = new RegisterModel();
  @Input() name = '';
  @Input() modelFieldName = '';
  @Input() type = 'text';
}
