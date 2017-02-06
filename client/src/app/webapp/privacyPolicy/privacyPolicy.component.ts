/**
 * Created by avinash on 3/12/16.
 */
import { Component, ViewEncapsulation } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'privacy-policy',
  encapsulation: ViewEncapsulation.None,
  template: `
  <div class="inner-wrap">
<div class="container">
<div class="pp-area">
<a href="javascript:void(0);" (click)="backClicked()" class="btn btn-success back">GO BACK</a>
<h2>Privacy Policy</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam elementum arcu at odio laoreet, ac elementum ipsum iaculis. Nullam lacinia, odio vel commodo cursus, leo nisl viverra magna, a malesuada sapien ante non lacus. Fusce ligula nisi, volutpat eget consequat sit amet, mollis a quam. Sed nec volutpat nulla, eu blandit quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam nibh ligula, posuere sed lacus ac, congue mattis augue. Proin laoreet sapien et ligula luctus, quis laoreet nibh pellentesque. Duis ex magna, interdum id ligula a, mollis luctus enim. Nullam sit amet erat imperdiet, iaculis ex vitae, tristique dui. Integer vitae pretium eros. Suspendisse potenti. Sed vestibulum eget sapien ac tincidunt. Proin leo est, scelerisque vel maximus et, tincidunt id dui. Duis malesuada ante sapien, ac tincidunt eros porta ut. Aenean libero dolor, euismod at nisi id, euismod tincidunt odio.</p> 
<p>Vivamus quis ligula erat. Nullam rutrum eget mi vitae sagittis. Suspendisse iaculis egestas pulvinar. Donec a tortor in diam porta congue ut at ipsum. Cras ac dignissim metus. Curabitur scelerisque, eros at aliquam tempor, turpis libero suscipit sapien, id sodales magna magna in risus. Etiam arcu ante, mollis id libero vel, elementum hendrerit dui. Praesent aliquet lacus nulla. Proin vitae lobortis arcu. Sed pretium nisi cursus tortor vulputate viverra. Sed maximus maximus tincidunt.</p> 
<p>Proin faucibus sodales orci nec varius. Proin blandit nisl ac enim dictum, molestie sollicitudin ex ultrices. Proin faucibus elit eu orci cursus, et dictum ex maximus. Mauris tempus placerat ligula, non dignissim sapien molestie sed. In eu ultrices ipsum. Etiam ultrices laoreet lacus at condimentum. Sed ut rhoncus turpis, vitae sodales ligula.</p>
</div>
</div> 
</div>

<style>
.inner-wrap{ width:100%; padding:30px 0 30px 0; margin:90px 0 0 0;}
.inner-wrap .pp-area{ border:#dcdcdc 1px solid; padding:15px;}
.inner-wrap .pp-area .back{ background:#0275d8; border:0px;}
.inner-wrap .pp-area h2{ background:#f5f5f5; border:#dcdcdc 1px solid; padding:10px 15px; font-size:16px; margin:10px 0 15px 0;}
.inner-wrap .pp-area p{ font-size:14px; line-height:20px; margin:15px 0 0 0; text-align:justify;}
</style>

  `,
})

export class PrivacyPolicy {
  constructor(private _location: Location){
    document.body.scrollTop = 0;
  }

  backClicked(){
    this._location.back();
  }
}
