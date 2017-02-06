/**
 * Created by avinash on 3/12/16.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivacyPolicy } from './privacyPolicy.component';

import { routing }  from './privacyPolicy.routing';

@NgModule({
  imports: [ CommonModule,routing],
  declarations: [ PrivacyPolicy ]
})

export default class PrivacyPolicyModule {}
