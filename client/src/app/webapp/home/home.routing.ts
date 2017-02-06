import { Routes, RouterModule }  from '@angular/router';

import { Home } from './home.component';
import { MyHome } from './component/myhome/myhome.component';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Home,
    children: [
      { path: '', component: MyHome }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
