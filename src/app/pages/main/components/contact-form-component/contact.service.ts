import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactFormModel } from './contact-form.model';

export interface ContactResponse {
  success: boolean;
  error?: string;
}

@Service()
export class ContactService {
  private http = inject(HttpClient);

  private readonly apiUrl = 'https://www.mathias-mayer.de/send_mail.php';

  send(data: Omit<ContactFormModel, 'privacyAccepted'>): Observable<ContactResponse> {
    return this.http.post<ContactResponse>(this.apiUrl, {
      name: data.name,
      email: data.email,
      message: data.message,
    });
  }
}
