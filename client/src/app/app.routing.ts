import { Routes, RouterModule } from '@angular/router';

import { Webapp } from './webapp/webapp.component';

export const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
  { path: '', component: Webapp }
];

export const routing = RouterModule.forRoot(routes, { useHash: true });
