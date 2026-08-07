import { Component, input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  label = input<string>('');
  href = input<string>('');
  showIcon = input<boolean>(false);
  disabled = input<boolean>(false);
  type = input<'link' | 'submit'>('link');
  target = input<string>('_self');
}
