import {Component, ViewEncapsulation,OnInit,OnDestroy, Input,Output, EventEmitter, Inject} from '@angular/core';
import { AuthService,WebAppState,FlashMessageService } from '../services/index';
//import { CompanyProfileService,CompanyState } from '../../company/services/index';
import { Router } from '@angular/router';
import { Login } from '../login/index';
declare var Notification: any;
@Component({
  selector: 'header-webapp',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./header.css')],
  template: require('./header.html'),
})
export class HeaderComponent implements OnInit, OnDestroy{

  private isLoggedIn = false;
  private loginSub:any;
  error = '';
  success = ''
  checkLogin:any = false;
  isMobileUser: any;
  isMobileType: any;
 private authenticated:boolean = false;
 // private companystate: CompanyState,
     //   private companyProfileService:CompanyProfileService,
  constructor( private router: Router,
    private authService: AuthService,private webappState : WebAppState,

     private flashMessageService: FlashMessageService) {
             this.authService = authService;
}
ngOnInit(){
    this.authService.check().subscribe((data:any) => {
       this.isLoggedIn  = data;
     });
     this.isMobileUser = this.webappState.getState('mobile_user');
     this.isMobileType = this.webappState.getState('mobile_payment_type');
}

ngOnDestroy() {
 }
  //logout company user
  refresh(){
    window.location.reload();
   this.router.navigateByUrl('/login/login');
  }
  logout(){
         localStorage.clear();
         sessionStorage.clear();
            this.webappState.removeState('company_user');
           this.webappState.removeState('isLoggedIn');
           this.isLoggedIn = false;
           this.refresh();

     }
}
