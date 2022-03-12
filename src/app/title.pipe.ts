import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title'
})
export class TitlePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    if (value.length) {
      if (value.length === 1) {
        return value.toUpperCase();
      }

      return `${value[0].toUpperCase()}${value.substring(1).toLowerCase()}`;
    }

    return value;
  }

}
