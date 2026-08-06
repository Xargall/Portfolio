import { Component } from '@angular/core';
import { Button } from '../../../../shared/button/button';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-hero-component',
  imports: [Button, TranslatePipe],
  templateUrl: './hero-component.html',
  styleUrl: './hero-component.scss',
})
export class HeroComponent {
  items = ['hero.marquee.remote', 'hero.marquee.role', 'hero.marquee.location', 'hero.marquee.open'];
  doubled = [...this.items, ...this.items, ...this.items];
}
