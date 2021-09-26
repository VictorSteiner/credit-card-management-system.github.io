import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'createArrayOfValues'
})
export class CreateArrayOfValuesPipe implements PipeTransform {

  public transform(qty: number): number[] {
    if (!qty || isNaN(qty)) return [];
    return new Array(qty).fill(0).map((v, i) => i + 1);
  }

}
