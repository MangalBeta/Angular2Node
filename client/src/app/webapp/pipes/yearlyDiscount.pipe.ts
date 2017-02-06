import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'yearlydiscount'})
export class yearlyDiscountPipe implements PipeTransform {
  transform(amount: string): number {
       let amountNum = parseFloat(amount) || 0;
       return amountNum * 0.8;
  }
}
