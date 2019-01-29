import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFilter'
})
export class PhoneFilterPipe implements PipeTransform {

  transform(phones: any[], searchText: string): any[] {
    if(!phones)
    return [];
if(!searchText)
return phones.slice(10);


searchText = searchText.toLocaleLowerCase();

    return phones.filter(it => {
      return it.toLocaleLowerCase().includes(searchText);
    });

  }

}
