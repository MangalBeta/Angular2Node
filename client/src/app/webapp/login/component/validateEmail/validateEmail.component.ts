import { Component, OnInit } from '@angular/core';
import { signupService } from '../../../services/signup.service';
import { Router } from '@angular/router';
import { WebAppState } from '../../../services/webappstate.service';
import { FlashMessageService} from '../../../services/index';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'validate-email',
  templateUrl: './validateEmail.html',
  styleUrls: ['./validateEmail.css'],
  providers: [FlashMessageService ]

})

export class ValidateEmail implements OnInit {
  code: any = {};
  submitted: boolean = false;
  errorMessage: string = '';
  successMessage: string = '';
  resendIcon: string;
  attemptsLeft: number;
  constructor(private SignupService: signupService, private router: Router, private webappstate: WebAppState,
  private authService: AuthService,private flashMessage : FlashMessageService){ }

  ngOnInit(){
    document.body.scrollTop = 0;
    this.code = {
      verificationCode: ''
    };
    this.resendIcon = "https://cdn1.iconfinder.com/data/icons/android-ui-2/154/redo-refresh-resend-128.png";
    this.attemptsLeft = parseInt(this.webappstate.getState('resend_attempts_left'));
  }

  onSubmit(verification: any, isValid: Boolean) {
    this.flashMessage.clearToast();
    this.submitted = true;
    if(isValid){
      let employer_id = this.webappstate.getState('employer_id');
      if(!employer_id){
        this.errorMessage = "You are not allowed to send verification code";
        setTimeout(() => {
          this.errorMessage = "";
        },3000);
        return false;
      }

      this.errorMessage = '';
      this.successMessage = '';
      this.SignupService.validateVerificationCode(verification.code)
      .subscribe((data: any) => {
        this.flashMessage.clearToast();
        if(data.status == 'success'){
          this.flashMessage.getToastMessage(data.status,data.message);
          setTimeout(() => {
            this.router.navigate(['login']);
          },3000);

        }else{
          this.flashMessage.clearToast();
          this.flashMessage.getToastMessage(data.status,data.message);
        }
      });
    }else{
    }
   }

   sendCode(){
     if(this.attemptsLeft){
       let employer_id = this.webappstate.getState('employer_id');
       this.flashMessage.clearToast();
       this.attemptsLeft = --this.attemptsLeft;
       this.webappstate.setState('resend_attempts_left',this.attemptsLeft);
       this.authService.resendCode(employer_id)
         .subscribe(result => {
           this.flashMessage.clearToast();
           if(result.status == "error"){
             setTimeout(() => {
               this.flashMessage.getToastMessage(result.status,result.message);
             },3000);
           }else{
             setTimeout(() => {
               this.flashMessage.getToastMessage(result.status,result.message);
             },3000);
           }
         });
     }else{
       this.flashMessage.clearToast();
       this.flashMessage.getToastMessage("error","You cannot re-send code now");
     }
   }
}
