/**
 * Created by avinash on 30/11/16.
 */
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { Contact } from '../models/contact';

@Injectable()
export class contactService {
  constructor(private http: Http){}

  sendContactEmail(body: Contact){
    let bodyString = JSON.stringify(body);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('/api/employer/auth/contact-email',bodyString,options)
      .map((res: Response) => {
        return res.json();
      })
      .catch((error:any) => Observable.throw(error.json()));
  }
}
