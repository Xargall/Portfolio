import { Component, signal, inject } from '@angular/core';
import { Logo } from '../../logo/logo';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-header',
  imports: [Logo, TranslatePipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  langService = inject(LanguageService);
  activeLink: string = '';
  isMenuOpen = signal(false);

  setActive(link: string) {
    this.activeLink = link;
  }

  toggleMenu() {
    this.isMenuOpen.update((current) => !current);
  }
}
