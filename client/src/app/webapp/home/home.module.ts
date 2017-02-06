import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import {ToasterModule, ToasterService} from 'angular2-toaster/angular2-toaster';

import { Home } from './home.component';
import { MyHome } from './component/myhome/myhome.component';
import { routing }       from './home.routing';
//import { contactService } from '../services/contact.service';

@NgModule({
  imports: [
    CommonModule,
    routing,
    FormsModule,
    ToasterModule
  ],
  declarations: [ Home,MyHome ]
})

export class HomeModule {}
