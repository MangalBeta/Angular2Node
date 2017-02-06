import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {routing} from './app.routing';
/**************** Header Footer **************/
import { HeaderComponent } from './webapp/Header/header.component';
import { FooterComponent } from './webapp/Footer/footer.component';

/************ All App Module Import Here *****************/
import { WebappModule } from './webapp/webapp.module';
import { HomeModule } from './webapp//home/home.module';
import { LoginModule } from './webapp/login/login.module';
import { SignupModule } from './webapp/signup/signup.module';
import { ForgotModule } from './webapp/forgotPassword/forgotPassword.module';
import { VerifyModule } from './webapp/verifyPassword/verifyPassword.module';
import { ChangePasswordModule } from './webapp/changePassword/changePassword.module';
import { DashboardModule } from './webapp/dashboard/dashboard.module';
/********************* End     **************************/
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    BrowserModule,routing,HttpModule,RouterModule,
    HomeModule,WebappModule,LoginModule,
    SignupModule,ForgotModule,VerifyModule,ChangePasswordModule,DashboardModule
  ],
  declarations: [
    AppComponent,HeaderComponent,FooterComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
