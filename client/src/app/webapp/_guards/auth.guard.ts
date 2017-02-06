import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRoute } from '@angular/router';
import { AuthService,WebAppState,signupService } from '../services/index';

@Injectable()
export class AuthGuard implements CanActivate {
     constructor(private router: Router,private webAppState:WebAppState,
          private authService: AuthService,
          private activatedRoute: ActivatedRoute,private SignupService: signupService
     ) {
          //this.checkActivePlan();
     }

     isLoggedIn = false;
     authToken = {};
     token = '';

     canActivate() {
               if (!this.isLoggedIn && !this.webAppState.getState('company_user')){
                    this.router.navigate(['/login/login']);
                    return false;
               }
               return true;
          }
     }
