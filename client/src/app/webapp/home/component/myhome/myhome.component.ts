import { Component,ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessageService } from '../../../services/index';
@Component({
  selector: 'myhome',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './myhome.component.html',
  // styleUrls: ['./myhome.component.css'],
  providers: [FlashMessageService ]
})

export class MyHome implements OnInit {
  constructor(
  private flashMessage : FlashMessageService, private router:Router ){}
  ngOnInit(){

  }


}
