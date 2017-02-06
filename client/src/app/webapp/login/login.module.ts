import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { Login } from './login.component';
import { ValidateEmail } from './component/validateEmail/validateEmail.component';
import { LoginForm } from './component/login/login.component';
import {ToasterModule, ToasterService} from 'angular2-toaster/angular2-toaster';

import { routing } from './login.routing';
@NgModule({
  imports: [ CommonModule,routing,FormsModule,ToasterModule],
  declarations: [ Login,ValidateEmail,LoginForm ],

})

export class LoginModule {}
