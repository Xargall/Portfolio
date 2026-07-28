import { Component } from '@angular/core';
import { HeroComponent } from './components/hero-component/hero-component';
import { AboutMeComponent } from './components/about-me-component/about-me-component';

@Component({
  selector: 'app-main',
  imports: [HeroComponent, AboutMeComponent],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {}
