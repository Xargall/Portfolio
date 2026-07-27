import { Routes } from '@angular/router';
import { Main } from './pages/main/main';
import { LegalNotice } from './pages/legal-notice/legal-notice';

export const routes: Routes = [
  { path: '', component: Main },
  { path: 'legal-notice', component: LegalNotice },
];
