import { Component } from '@angular/core';
import { Button } from '../../../../shared/button/button';

@Component({
  selector: 'app-hero-component',
  imports: [Button],
  templateUrl: './hero-component.html',
  styleUrl: './hero-component.scss',
})
export class HeroComponent {
  items = ['Available for remote work', 'Fullstack Developer', 'Based in Leipzig', 'Open to work'];
  doubled = [...this.items, ...this.items, ...this.items];
}
