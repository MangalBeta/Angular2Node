import {Component, ViewEncapsulation,OnInit, Input,Output, EventEmitter} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { AuthService,WebAppState,FlashMessageService } from '../../../services/index';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./login.css')],
  template: require('./login.html'),
  providers: [FlashMessageService ]
})
export class LoginForm implements OnInit {

  model: any = {};
  loading = false;
  error = '';
  success = '';
  checkLogin = false;
  toast:any = '';
  errorData:any = '';
  errorStatus:any = '';

  constructor( private router: Router,
    private authService: AuthService ,

   private webappState : WebAppState,private flashMessage : FlashMessageService) {
    }
    ngOnInit() {
      document.body.scrollTop = 0;
      this.authService.check().subscribe(data => {
       if(data){
        this.router.navigate(['dashboard']);
       }
     });
    }
    login() {
      sessionStorage.clear();
      localStorage.clear();

      this.loading = true;
      this.authService.login(this.model)
      .subscribe(result => {
        this.flashMessage.clearToast();
     //    if(result.status == "error"){
           //    this.router.navigate(['/'])
     //    }
        if(result.status == "error"){
             if(result.data == "notvarified"){
                  this.flashMessage.getToastMessage(result.status,result.message);
                  setTimeout(() => { this.router.navigate(['/login/login/validate-email'])},3000 );
             }else{
             this.flashMessage.getToastMessage(result.status,result.message);
               }
        }else{

            this.checkLogin = true;
            this.webappState.setState('isLoggedIn',true);
            this.flashMessage.getToastMessage(result.status,result.message);
            setTimeout(() => {
               this.router.navigate(['/dashboard']);
          }, 3000);
          //   this.flashMessage.setTimeout( this.router.navigate(['/employer/company']));
        }
      });
    }

}
