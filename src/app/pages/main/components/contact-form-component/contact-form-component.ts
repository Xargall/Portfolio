import { Component, signal, inject, effect } from '@angular/core';
import { FormField, email, form, required } from '@angular/forms/signals';
import { ContactFormModel } from './contact-form.model';
import { Button } from '../../../../shared/button/button';
import { TranslatePipe } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../../../shared/services/language.service';
import { ContactService } from './contact.service';

type SendState = 'idle' | 'sending' | 'success' | 'error';

@Component({
  selector: 'app-contact-form-component',
  imports: [FormField, Button, TranslatePipe, RouterLink],
  templateUrl: './contact-form-component.html',
  styleUrl: './contact-form-component.scss',
})
export class ContactFormComponent {
  langService = inject(LanguageService);
  private contactService = inject(ContactService);
  sendState = signal<SendState>('idle');

  contactModel = signal<ContactFormModel>({
    name: '',
    email: '',
    message: '',
    privacyAccepted: false,
  });

  contactForm = form(this.contactModel, (contactPath) => {
    required(contactPath.name, { message: 'contact.errors.name_required' });
    required(contactPath.email, { message: 'contact.errors.email_required' });
    email(contactPath.email, { message: 'contact.errors.email_invalid' });
    required(contactPath.message, { message: 'contact.errors.message_required' });
    required(contactPath.privacyAccepted, { message: 'contact.errors.privacy_required' });
  });

  constructor() {
    effect(() => {
      document.documentElement.lang = this.langService.currentLang();
    });
  }

  onSubmit(): void {
    if (this.contactForm().invalid()) return;

    this.sendState.set('sending');

    const { name, email, message } = this.contactModel();

    this.contactService.send({ name, email, message }).subscribe({
      next: (res) => {
        if (res.success) {
          this.sendState.set('success');
          this.contactModel.set({ name: '', email: '', message: '', privacyAccepted: false });
        } else {
          this.sendState.set('error');
        }
      },
      error: () => this.sendState.set('error'),
    });
  }
}
