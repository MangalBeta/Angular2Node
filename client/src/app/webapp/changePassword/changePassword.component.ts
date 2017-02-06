import {Component, ViewEncapsulation,OnInit} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { AuthService,WebAppState,FlashMessageService} from '../services/index';

import { Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'change-password',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./changePassword.css')],
  template: require('./changePassword.html'),
  providers: [FlashMessageService ]
})
export class ChangePasswordComponent {
  model:any = {};
  error = '';
  success = '';
  reqId = '';
  getIdParam:any='';
  toast:any = '';
  constructor( private router: Router,private _activatedRoute: ActivatedRoute,
    private authService: AuthService,private flashMessage : FlashMessageService) {
    this.getIdParam  = this._activatedRoute.queryParams.subscribe(
        (queryParam: any) => this.reqId = queryParam['reqId']);
  }

  changePass(){
       this.model['role'] = 'EMPLOYER';
    this.authService.changePassword(this.reqId,this.model)
    .subscribe(result => {
      this.flashMessage.clearToast();
      if(result.status == "error"){
        this.flashMessage.getToastMessage(result.status,result.message);
      }else{
        this.flashMessage.getToastMessage(result.status,result.message);
        setTimeout(()=> { this.router.navigate(['login/login']),3000 } );
      }
    });
  }



}
//
