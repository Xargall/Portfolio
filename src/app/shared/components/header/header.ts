import { Component, signal, inject } from '@angular/core';
import { Logo } from '../../logo/logo';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [Logo, TranslatePipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private translate = inject(TranslateService);
  currentLang = signal<'en' | 'de'>('en');
  activeLink: string = '';
  isMenuOpen = signal(false);

  changeLanguage(lang: 'en' | 'de') {
    this.currentLang.set(lang);
    this.translate.use(lang);
  }

  setActive(link: string) {
    this.activeLink = link;
  }

  toggleMenu() {
    this.isMenuOpen.update((current) => !current);
  }
}
