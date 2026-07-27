import { Component } from '@angular/core';
import { HeroComponent } from './components/hero-component/hero-component';

@Component({
  selector: 'app-main',
  imports: [HeroComponent],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {}
