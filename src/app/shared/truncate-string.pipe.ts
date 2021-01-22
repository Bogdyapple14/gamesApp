import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateString',
})
export class TruncateStringPipe implements PipeTransform {
  transform(value: string, length: number) {
    if (value.length <= length) return value;
    else return value.slice(0, length) + '...';
  }
}
