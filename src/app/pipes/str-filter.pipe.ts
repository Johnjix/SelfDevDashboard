import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strFilter',
})
export class StrFilterPipe implements PipeTransform {
  transform(array: any[], filterTerm: string, filterKey: string): any[] {
    if (!filterTerm || filterTerm == '') {
      return array;
    }

    filterTerm = filterTerm.toLocaleLowerCase();
    array = array.filter((x) =>
      x[filterKey].toLocaleLowerCase().includes(filterTerm)
    );

    return array;
  }
}
