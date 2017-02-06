import { Component,ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../../models/user';
import { FlashMessageService, WebAppState, signupService} from '../../../services/index';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'signup-form',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './signupForm.html',
  styleUrls: ['./signupForm.css'],
  providers: [FlashMessageService ]
})

export class SignupFormComponent implements OnInit {
  user: User;
  errorMessage: string = '';
  constructor(private signupservice: signupService, private router: Router,private webappstate: WebAppState,private flashMessage : FlashMessageService){}

  ngOnInit(){
    document.body.scrollTop = 0;
    this.errorMessage = '';
    this.user = {
      email: this.webappstate.getState("signup_email") ||'',
      password: this.webappstate.getState("signup_password") ||'',
      confirmPassword: this.webappstate.getState("signup_confirmPassword") ||''
    }
  }
  submitted = false;

    onSubmit(value: User, isValid: Boolean) {
      this.submitted = true;
      this.errorMessage = '';
      if(isValid){
        this.flashMessage.clearToast();
        if(!value['acceptTC']){
          this.flashMessage.getToastMessage("error","You need to check the terms and conditions to continue");
            return false;
        }
        this.signupservice.register(value)
          .subscribe((result: any) => {
            this.flashMessage.clearToast();
            if(result.status == 'success'){
            this.webappstate.setState('employer_id',result.data.id);
            this.webappstate.setState('resend_attempts_left',2);
              this.flashMessage.getToastMessage(result.status,result.message);
              setTimeout(() => { this.router.navigate(['signup/validate-email'])} ,3000);
            }else if(result.status == 'error'){
              this.flashMessage.getToastMessage(result.status,result.message);
              this.errorMessage = result.message;
            }
          });
      }else{
        this.errorMessage = "Invalid values provided";
      }
     }

     onInputChanged(form){
          for(let key in form){
               this.webappstate.setState("signup_" + key,form[key]);
          }
     }
}
