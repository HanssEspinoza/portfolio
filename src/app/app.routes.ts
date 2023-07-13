import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('@pages/layout-page').then(c => c.LayoutPageComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
