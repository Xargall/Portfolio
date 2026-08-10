import { Service, signal, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Service()
export class LanguageService {
  currentLang = signal<'en' | 'de'>((localStorage.getItem('lang') as 'en' | 'de') ?? 'en');
  private translate = inject(TranslateService);

  changeLanguage(lang: 'en' | 'de') {
    this.currentLang.set(lang);
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }
}
