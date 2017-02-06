import { Routes, RouterModule }  from '@angular/router';

import { ChangePasswordComponent } from './changePassword.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: ChangePasswordComponent,
    children: [
      //{ path: 'treeview', component: TreeViewComponent }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
