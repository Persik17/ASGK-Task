import { Pipe, PipeTransform } from '@angular/core';

import { Pass } from '../models';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(array: Pass[], args: any[]): any[] {
    const field = args[0];
    const direction = args[1];

    let change = 1;

    if (!Array.isArray(array)) {
      return array;
    }

    if (direction === 'desc') {
      change = -1;
    }

    array.sort((a: any, b: any) => {
      if (a[field] < b[field]) {
        return -1 * change;
      } else if (a[field] > b[field]) {
        return 1 * change;
      } else {
        return 0;
      }
    });

    return array;
  }
}
