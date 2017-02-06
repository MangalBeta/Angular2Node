import { Component, ViewEncapsulation,OnInit } from '@angular/core';
import { AuthService,WebAppState } from './services/index';
import { ToasterService} from 'angular2-toaster/angular2-toaster';
@Component({
  selector: 'webapp',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './webapp.html'
})

export class Webapp {
  checkLogin = false;
  messageSent: Boolean = false;
  userId:any='';
  error ='';
  success ='';
  toast:any=''
  constructor(private authService: AuthService ,
   private webappState : WebAppState, private toasterService: ToasterService){
      this.toasterService = toasterService;
    // this.checkLogin= this.authService.check(); // changed 12-12-16
    this.userId = (this.authService.getUser()) ? this.authService.getUser()._id : '';
    // this.adminState.removeState('checkLogin');
  }

}
