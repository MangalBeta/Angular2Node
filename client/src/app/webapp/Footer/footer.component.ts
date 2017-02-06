import {Component, ViewEncapsulation,OnInit} from '@angular/core';
import { AuthService,WebAppState } from '../services/index';
import { Router } from '@angular/router';

@Component({
  selector: 'footer-webapp',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./footer.css')],
  template: require('./footer.html'),
})
export class FooterComponent {
  error = '';
  success = ''

   currentYear:any;
  constructor( private router: Router,
    private authService: AuthService,private webappState : WebAppState) {
         let d  = new Date();
        let n = d.getFullYear();
        this.currentYear = n;

  }


}
