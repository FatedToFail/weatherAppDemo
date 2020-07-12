import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'temprature'
})
export class TempraturePipe implements PipeTransform {
  transform(value: number): string {
    return value ? value.toFixed(1) : '';
  }
}
