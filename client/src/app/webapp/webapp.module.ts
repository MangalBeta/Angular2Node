import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ToasterModule, ToasterService} from 'angular2-toaster/angular2-toaster'
import { ReactiveFormsModule,FormsModule}from '@angular/forms';
import { routing } from './webapp.routing';
import { Webapp } from './webapp.component';
import { AuthGuard } from './_guards/index';

import { signupService } from './services/signup.service';
import { AuthService,WebAppState,FlashMessageService} from './services/index';

@NgModule({
  imports: [ CommonModule,routing,FormsModule,ToasterModule],
  declarations: [ Webapp],
  providers: [ signupService,AuthService,AuthGuard,WebAppState,FlashMessageService ]
})

export  class WebappModule {

}
