

import { Injectable,Input,Output, EventEmitter,NgZone} from '@angular/core';
import { Http,Response,Headers } from '@angular/http';

import { WebAppState } from './webappstate.service';
import { Router } from '@angular/router';
import {tokenNotExpired} from 'angular2-jwt';
import {Observable} from "rxjs/Observable";
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/Rx';

@Injectable()
export class AuthService {
    isLoggedIn:boolean = !!this.webAppstate.getState('company_user');
    logIn$: Subject<boolean> = new BehaviorSubject<boolean>(this.isLoggedIn);
    externalBS:any;
    loggedIn = false;
constructor( private _http: Http,private router: Router,private webAppstate: WebAppState, private zone: NgZone) {
       this.logIn$.asObservable();
       this.externalBS = this.logIn$;

}
  //user login function
  login(credentials) {
     let myHeader = new Headers();
     myHeader.append('Content-Type', 'application/json');
     myHeader.append('Cache-Control', 'no-cache');
     myHeader.append('Pragma', 'no-cache');

    return this._http
      .post('/api//auth/login', JSON.stringify(credentials), { headers: myHeader })
      .map((response: Response) => {
          // login successful if there's a jwt token in the response
                let user = response.json();
                if (user.status == "success") {
                     this.webAppstate.removeState('company_user');
                    this.webAppstate.removeState('isLoggedIn');
                   // store user details and jwt token in local  to keep user logged in between page refreshes
                  this.webAppstate.setState('company_user', JSON.stringify(user));
                  this.isLoggedIn = true;
                  this.logIn$.next(this.isLoggedIn);
               }
                  return user;
            });
  }
//use logout function
  logout() {
    this.webAppstate.removeState('company_user')
    this.isLoggedIn = false;
    this.logIn$.next(this.isLoggedIn);
  }

  //check user is login or not
  check() {
     return this.externalBS.asObservable().startWith(this.isLoggedIn)
                .map((data:any)  =>{
                  var isLoggedIn  =   data;
                  return  isLoggedIn;
      });

   }

  //ForgotPassword
  forgot(credentials) {
    let myHeader = new Headers();
    myHeader.append('Content-Type', 'application/json');
    myHeader.append('Cache-Control', 'no-cache');
    myHeader.append('Pragma', 'no-cache');

   return this._http
     .post('/api//auth/forgot', JSON.stringify(credentials), { headers: myHeader })
     .map((response: Response) => {
      // login successful if there's a jwt token in the response
               let user = response.json();
                 return user;
  })
}
//verif code send to email
verifyCode(id,credentials) {
  let myHeader = new Headers();
  myHeader.append('Content-Type', 'application/json');
  myHeader.append('Cache-Control', 'no-cache');
  myHeader.append('Pragma', 'no-cache');
 return this._http
   .post('/api//auth/verifycode?reqId='+ id, JSON.stringify(credentials), { headers: myHeader })
   .map((response: Response) => {
       // login successful if there's a jwt token in the response
             let user = response.json();
               return user;
})
}
//resend otp
resendCode(id) {
  return this._http
   .get('/api/auth/resendOtp?reqId='+id +'&role=EMPLOYER')
   .map((response: Response) => {
       // login successful if there's a jwt token in the response
             let user = response.json();
               return user;
  })
}
//get user is login or not
getUser() {
  if(this.webAppstate.getState('company_user')){
      return JSON.parse(this.webAppstate.getState('company_user')).data;
  }
}
//set the new password services
changePassword(id,credentials) {
  let myHeader = new Headers();
  myHeader.append('Content-Type', 'application/json');
  myHeader.append('Cache-Control', 'no-cache');
  myHeader.append('Pragma', 'no-cache');
 return this._http
   .post('/api/auth/resetPassword?reqId='+id, JSON.stringify(credentials), { headers: myHeader })
   .map((response: Response) => {
             let user = response.json();
               return user;
})
}
}
