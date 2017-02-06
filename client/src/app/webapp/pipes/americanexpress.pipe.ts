import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'iconpipe'})
export class IconPipe implements PipeTransform {
  transform(value: string): string {

    // let strArr = value.toString().split("");
    // for(var i = 0; i <= 12;i++){
    //   strArr[i] = 'X';
    // }
    // return strArr.join('');
    return  value.replace(/-|\s/g,"");
  }
}
