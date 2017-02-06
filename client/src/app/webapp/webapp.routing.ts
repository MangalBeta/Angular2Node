import { Routes, RouterModule } from '@angular/router';
import { Webapp } from './webapp.component';
import { AuthGuard } from './_guards/index';
import { Home } from './home/home.component';
import { Signup } from './signup/signup.component';
import { Login } from './login/login.component';
import { VerifyPasswordComponent } from './verifyPassword/verifyPassword.component';
import { ChangePasswordComponent } from './changePassword/changePassword.component';
import { ForgotPasswordComponent } from './forgotPassword/forgotPassword.component';
import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes = [
{
      path:'',
      component: Webapp,
      children: [
         {  path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', component : Home },
        { path: 'signup', component : Signup },
        { path: 'login', component : Login },
        { path: 'forgot', component : ForgotPasswordComponent },
        { path: 'verify-code',component : VerifyPasswordComponent},
        { path: 'changePassword', component : ChangePasswordComponent },
        { path: 'dashboard',component : DashboardComponent,canActivate:[AuthGuard]},
    ]
},
];

export const routing = RouterModule.forChild(routes);
