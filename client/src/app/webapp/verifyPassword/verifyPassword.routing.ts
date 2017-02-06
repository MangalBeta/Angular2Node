import { Routes, RouterModule }  from '@angular/router';

import { VerifyPasswordComponent } from './verifyPassword.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: VerifyPasswordComponent,
    children: [
      //{ path: 'treeview', component: TreeViewComponent }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
