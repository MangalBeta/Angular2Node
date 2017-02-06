import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { User } from '../models/user';

@Injectable()
export class signupService {
  constructor(private http: Http){}

  register(body: User): Observable<string>{
    let bodyString = JSON.stringify(body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('/api/auth/register',bodyString,options)
      .map((res: Response) => {
        return res.json();
       })
      .catch((error:any) => Observable.throw(error.json()));
  }

  validateVerificationCode(verificationCode: string): Observable<string>{
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    return this.http.get(`/api/auth/verify-email/?code=${verificationCode}`, options)
    .map((res: Response) => {
      return res.json();
    }).catch((error: any) => Observable.throw(error.json()));
  }

  resendVerificationCode(employer_id: string){
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    return this.http.get(`/api/auth/resendOtp/?reqId=${employer_id}`)
      .map((res: Response) => {
        return res.json();
      });
  }


}
