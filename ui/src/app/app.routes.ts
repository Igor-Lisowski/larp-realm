import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('@larp-realm/home').then((m) => m.HomeComponent),
  },
  {
    path: 'larp-page',
    loadComponent: () =>
      import('@larp-realm/larp-page').then((m) => m.LarpPageComponent),
  },
];
