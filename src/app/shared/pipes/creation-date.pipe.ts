import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'creationDate'})
export class CreationDatePipe implements PipeTransform {
  transform(value: Date | string): string {
    let date = new Date(value),
      month = '' + (date.getMonth() + 1),
      day = '' + date.getDate(),
      year = date.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return `${day}.${month}.${year}`;
  }
}
