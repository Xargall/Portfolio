import { Component, signal } from '@angular/core';
import { FormField, email, form, required, submit } from '@angular/forms/signals';
import { ContactFormModel } from './contact-form.model';
import { Button } from '../../../../shared/button/button';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-form-component',
  imports: [FormField, Button, TranslatePipe],
  templateUrl: './contact-form-component.html',
  styleUrl: './contact-form-component.scss',
})
export class ContactFormComponent {
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
}
