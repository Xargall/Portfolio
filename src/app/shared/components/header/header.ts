import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  currentLang = 'en';
  activeLink: string = '';

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
}
