import { Component, signal, DestroyRef, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/components/header/header';
import { Footer } from './shared/components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('Mathias Mayer');
  private destroyRef = inject(DestroyRef);

  mouseX = signal(0);
  mouseY = signal(0);

  constructor() {
    const handler = (event: MouseEvent) => {
      this.mouseX.set(event.clientX);
      this.mouseY.set(event.clientY);
    };

    document.addEventListener('mousemove', handler);

    this.destroyRef.onDestroy(() => {
      document.removeEventListener('mousemove', handler);
    });
  }
}
