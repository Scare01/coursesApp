import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'duration'})
export class DurationPipe implements PipeTransform {
  transform(value: number | string): string {
    let duration = Number(value);
    let minutes = duration % 60;
    let hours = (duration-minutes)/60;
    let result = (hours < 10 ? "0" : "") + hours.toString() + ":" + (minutes < 10 ? "0" : "") + minutes.toString() + " hours";
    return result;
  }
}
