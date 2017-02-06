import {Component, ViewEncapsulation,OnInit} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { AuthService,WebAppState,FlashMessageService} from '../services/index';
import { Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'dashboard',
  encapsulation: ViewEncapsulation.None,
  template: require('./dashboard.component.html'),
  providers: [FlashMessageService ]
})
export class DashboardComponent {
  model:any = {};
  error = '';
  success = '';
  reqId = '';
  toast:any = '';
  constructor( private router: Router,private _activatedRoute: ActivatedRoute,
    private authService: AuthService,private flashMessage : FlashMessageService) {

  }


}
