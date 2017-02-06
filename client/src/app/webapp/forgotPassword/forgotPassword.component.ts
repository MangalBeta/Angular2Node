import {Component, ViewEncapsulation,OnInit} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { AuthService,FlashMessageService } from '../services/index';
import { Router } from '@angular/router';

@Component({
  selector: 'forgot-password',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./forgotPassword.css')],
  template: require('./forgotPassword.html'),
    providers: [FlashMessageService ]
})
export class ForgotPasswordComponent {
  model: any = {};
  error = '';
  success = '';

  constructor( private router: Router,
    private authService: AuthService,private flashMessage : FlashMessageService) { document.body.scrollTop = 0;}

  forgotPass(){
        this.model['role'] = 'EMPLOYER'
    this.authService.forgot(this.model)
    .subscribe(result => {
      this.flashMessage.clearToast();
      if(result.status == "error"){
        this.flashMessage.getToastMessage(result.status,result.message);
      }else{
       this.flashMessage.getToastMessage(result.status,result.message);
       setTimeout( ()=> {
             this.router.navigate(['verify-code'],{ queryParams: { reqId: result.data._id }});
       },2000)
      }
    });
  }
}
