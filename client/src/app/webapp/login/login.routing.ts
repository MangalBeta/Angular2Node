import { Routes, RouterModule }  from '@angular/router';

import { Login } from './login.component';
import { ValidateEmail } from './component/validateEmail/validateEmail.component';
import { LoginForm } from './component/login/login.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: 'login',
    component: Login,
    children: [
      {
        path: 'login',
        component: LoginForm
      },
      {
        path: 'validate-email',
        component: ValidateEmail
      }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
