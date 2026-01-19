import { Routes } from '@angular/router';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { HomeComponent } from './pages/home/home/home';


export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Bilel Chniti • Executive Digital Proposal' },
  { path: 'privacy', component: PrivacyComponent, title: 'Privacy' },
  { path: '**', redirectTo: '' }
];
