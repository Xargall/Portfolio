import { Component, inject, signal } from '@angular/core';
import { RouterLink, Router, NavigationEnd } from '@angular/router';
import { Logo } from '../../logo/logo';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, Logo],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  private router = inject(Router);
  currentUrl = signal(this.router.url);

  constructor() {
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.currentUrl.set(e.urlAfterRedirects);
      }
    });
  }

  isLegalPage() {
    return this.currentUrl().includes('privacy-policy') ||
           this.currentUrl().includes('legal-notice');
  }
}