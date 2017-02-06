import { Component,ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessageService } from '../services/index';
@Component({
  selector: 'home',
  encapsulation: ViewEncapsulation.None,
  templateUrl: `
  <router-outlet></router-outlet>`,
  styleUrls: ['./home.css'],
  providers: [FlashMessageService ]
})

export class Home implements OnInit {

  constructor(
  private flashMessage : FlashMessageService, private router:Router ){}
  ngOnInit(){

  }


}
