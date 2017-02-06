import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { EqualValidator } from '../directives/equal-validator.directive';

import { Signup } from './signup.component';
import { routing }       from './signup.routing';
import { ValidateEmail } from './components/validateEmail/validateEmail.component';
import { SignupFormComponent } from './components/signupForm/signupForm.component';
import {ToasterModule, ToasterService} from 'angular2-toaster/angular2-toaster';

@NgModule({
  imports: [ CommonModule,routing, FormsModule,ToasterModule ],
  declarations: [ Signup, EqualValidator, ValidateEmail,SignupFormComponent ]
})

export class SignupModule {}
