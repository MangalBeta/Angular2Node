import { Component,ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user';
import { signupService } from '../services/signup.service';
import { FlashMessageService, WebAppState} from '../services/index';
import {Observable} from 'rxjs/Rx';


@Component({
  selector: 'signup',
  encapsulation: ViewEncapsulation.None,
  templateUrl: `
  <router-outlet></router-outlet>`,
  styleUrls: ['./signup.css'],
    providers: [FlashMessageService]
})

export class Signup {
  user: User;
  constructor(private signupservice: signupService, private router: Router,
       private flashMessage : FlashMessageService, private state: WebAppState){}

  ngOnInit(){
    document.body.scrollTop = 0;
    this.user = {
      email: '',
      password: '',
      confirmPassword: ''
    }
  }
  submitted = false;
    onSubmit(value: User, isValid: Boolean) {
      this.submitted = true;
      if(isValid){
        this.signupservice.register(value)
          .subscribe((data: any) => {
            if(data.status == 'success'){
              this.router.navigate(['signup/validate-email']);
                this.flashMessage.getToastMessage(data.status,data.message);
            }else if(data.status == 'error'){
              this.flashMessage.getToastMessage(data.status,data.message);
            }
          });
      }else{
      }
     }
}
