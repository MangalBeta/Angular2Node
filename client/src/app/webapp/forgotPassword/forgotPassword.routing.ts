import { Routes, RouterModule }  from '@angular/router';

import { ForgotPasswordComponent } from './forgotPassword.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: ForgotPasswordComponent,
    children: [
      //{ path: 'treeview', component: TreeViewComponent }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
