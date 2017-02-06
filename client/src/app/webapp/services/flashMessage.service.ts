
import { Injectable } from '@angular/core';
import {ToasterModule, ToasterService} from 'angular2-toaster/angular2-toaster'

@Injectable()
export class FlashMessageService {
    toast:any ={};
  constructor(private toasterService :ToasterService){
    this.toasterService = toasterService;
  }

  getToastMessage(type,title){
    this.toast = {
      type:  type,
      title: title,
      showCloseButton: true
    }
   this.toasterService.pop(this.toast);
   return this.toast;
  }
setTime(red){
  setTimeout(function(red){ return red; },7000);
}

clearToast(){
  this.toasterService.clear(this.toast.id);
}

}
