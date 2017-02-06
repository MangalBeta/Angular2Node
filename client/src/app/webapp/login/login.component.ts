import {Component, ViewEncapsulation,OnInit, Input,Output, EventEmitter} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { AuthService,WebAppState,FlashMessageService } from '../services/index';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./login.css')],
  templateUrl: `
  <router-outlet></router-outlet>`,
  providers: [FlashMessageService ]
})
export class Login implements OnInit {

  model: any = {};
  loading = false;
  error = '';
  success = '';
  checkLogin = false;
  toast:any = '';
  errorData:any = '';

  constructor( private router: Router,
    private authService: AuthService ,
   
   private webappState : WebAppState,private flashMessage : FlashMessageService) {
  // this.authService.check().subscribe(data => {
  //      if(data){
  //       this.router.navigate(['home']);
  //      }
  //    });

    }
    ngOnInit() {
      document.body.scrollTop = 0;
    }
    login() {
      this.loading = true;
      this.authService.login(this.model)
      .subscribe(result => {
        this.flashMessage.clearToast();
     //    if(result.status == "error"){
           //    this.router.navigate(['/'])
     //    }
        if(result.status == "error"){
             this.errorData = result.data.user;
          this.flashMessage.getToastMessage(result.status,result.message);
          this.flashMessage.setTime(this.router.navigate(['login/validate-email']));
        }else{
           if(result.data.user.isSubscribed == false){
            this.checkLogin = true;
            this.webappState.setState('isLoggedIn',true);
            this.flashMessage.getToastMessage(result.status,result.message);
            this.flashMessage.setTime(this.router.navigate(['subscription']));
          }else{
            this.checkLogin = true;
            this.webappState.setState('isLoggedIn',true);
            this.flashMessage.getToastMessage(result.status,result.message);
            this.flashMessage.setTime(this.router.navigate(['/employer/company']));
          }
        }
      });
    }

}
