import { Pipe, PipeTransform } from '@angular/core';
import slug from 'slug';

@Pipe({ name: 'slug' })
export class SlugString implements PipeTransform {
  transform(str: string) {
    if (str && typeof str === 'string') {
      return slug(str);
    }
    return str;
  }
}
