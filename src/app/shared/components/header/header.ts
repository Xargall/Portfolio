import { Component, signal } from '@angular/core';
import { Logo } from '../../logo/logo';

@Component({
  selector: 'app-header',
  imports: [Logo],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  currentLang = 'en';
  activeLink: string = '';
  isMenuOpen = signal(false);

  changeLanguage(lang: 'en' | 'de') {
    this.currentLang = lang;

    // ngx-translate
    // this.translate.use(lang);

    // oder Transloco
    // this.transloco.setActiveLang(lang);
  }

  setActive(link: string) {
    this.activeLink = link;
  }

  toggleMenu() {
    this.isMenuOpen.update((current) => !current);
  }
}
