import { Component, signal } from '@angular/core';
import { FormField, email, form, required, submit } from '@angular/forms/signals';
import { ContactFormModel } from './contact-form.model';
import { Button } from '../../../../shared/button/button';

@Component({
  selector: 'app-contact-form-component',
  imports: [FormField, Button],
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
    required(contactPath.name, { message: 'Oops! It seems your name is missing' });
    required(contactPath.email, { message: 'Hoppla! Your email is required' });
    email(contactPath.email, { message: 'Please enter a valid email address' });
    required(contactPath.message, { message: 'What do you need to develop?' });
    required(contactPath.privacyAccepted, { message: 'Please accept the privacy policy.' });
  });
}
