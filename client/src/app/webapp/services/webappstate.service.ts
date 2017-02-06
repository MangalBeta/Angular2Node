/**
 * Created by avinash on 8/12/16.
 */
import { Injectable } from '@angular/core';

@Injectable()
export class WebAppState {
  constructor(){}

  getState(key){
    return sessionStorage.getItem('web_'+key);
  }

  setState(key, value){
    sessionStorage.setItem('web_'+key, value);
    return true;
  }

  removeState(key){
    sessionStorage.removeItem('web_'+key);
    return true;
  }

  getAll(){
    let i = sessionStorage.length;
    let sessionData = {};
    while(i--){
      let key = sessionStorage.key(i);
      sessionData[key] = sessionStorage.getItem(key);
    }
    return sessionData;
  }

  clear(){
    let i = sessionStorage.length;
    while(i--){
      let key = sessionStorage.key(i);
      sessionStorage.removeItem(key);
    }
  }
}
