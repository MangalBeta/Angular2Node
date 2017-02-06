import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { ForgotPasswordComponent } from './forgotPassword.component';
import {ToasterModule, ToasterService} from 'angular2-toaster/angular2-toaster';
import { routing }       from './forgotPassword.routing';
// import { Header } from '../elements/header/index';
// import { Footer } from '../elements/footer/index';
@NgModule({
  imports: [ CommonModule,routing,FormsModule,ToasterModule],
  declarations: [ ForgotPasswordComponent ]
})

export  class ForgotModule {}
