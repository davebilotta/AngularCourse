import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert',
})
export class ConvertPipe implements PipeTransform {
  //transform(value: number, ...args: unknown[]): unknown {
  transform(value: number, targetUnits: string): any {
    console.log(value, targetUnits);
    if (!value) {
      return '';
    }
    const valueKm = value * 1.60934;
    switch (targetUnits) {
      case 'km':
        return valueKm;
      case 'm':
        return valueKm * 1000;
      case 'cm':
        return valueKm * 1000 * 100;
      default:
        throw new Error('Target Unit not supported');
    }
  }
}
