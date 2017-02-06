import { Routes, RouterModule }  from '@angular/router';

import { Signup } from './signup.component';

import { ValidateEmail } from './components/validateEmail/validateEmail.component';
import { SignupFormComponent } from './components/signupForm/signupForm.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/signup',
  //   pathMatch: 'full'
  // },
  {
    path: 'signup',
    component: Signup,
    children: [
      {
        path: 'signup',
        component: SignupFormComponent
      },
      {
        path: 'validate-email',
        component: ValidateEmail
      }
    ]
  }
]

export const routing = RouterModule.forChild(routes);
