import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'callback',
  standalone: true,
})
export class CallbackPipe implements PipeTransform {
  transform<T, R>(
    value: T,
    callback: (value: T, ...rest: any[]) => R,
    ...rest: any[]
  ): R {
    return callback(value, ...rest);
  }
}
