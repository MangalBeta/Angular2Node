import {Component, ViewEncapsulation,OnInit} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { AuthService,WebAppState,FlashMessageService} from '../services/index';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'verify-password',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./verifyPassword.css')],
  template: require('./verifyPassword.html'),
  providers: [FlashMessageService ]
})
export class VerifyPasswordComponent {
  model: any = {};
  error = '';
  success = ''
   resendIcon: string;
   resData ='';
  getIdParam:any='';
   reqId =''
  constructor( private router: Router,
    private authService: AuthService, private _activatedRoute: ActivatedRoute,private flashMessage : FlashMessageService) {
    document.body.scrollTop = 0;
    this.resendIcon = "https://cdn1.iconfinder.com/data/icons/android-ui-2/154/redo-refresh-resend-128.png";
    this.getIdParam  = this._activatedRoute.queryParams.subscribe(
      (queryParam: any) => this.reqId = queryParam['reqId']);
  }

  verifyPass(){
       this.model['role'] = 'EMPLOYER'
    this.authService.verifyCode(this.reqId,this.model)
    .subscribe(result => {
      this.flashMessage.clearToast();
      if(result.status == "error"){
          this.flashMessage.getToastMessage(result.status,result.message);
      }else{
         this.flashMessage.getToastMessage(result.status,result.message);
         this.router.navigate(['changePassword'],{ queryParams: { reqId: result.data._id }});
      }
    });
  }
    resendOtp(){
     //this.model['role'] = 'EMPLOYER'
      this.authService.resendCode(this.reqId)
      .subscribe(result => {
        this.flashMessage.clearToast();
        if(result.status == "error"){
            this.flashMessage.getToastMessage(result.status,result.message);
        }else{
            this.flashMessage.getToastMessage(result.status,result.message);
        }
      });
    }

}
