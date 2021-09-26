import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'milsToDate'
})
export class MilsToDatePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    const date = new Date(value);
    return date.toLocaleDateString('en-GB') + " " + date.toLocaleTimeString('de-DE');
  }
}
