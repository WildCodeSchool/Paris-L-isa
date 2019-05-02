import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {

    if (!searchText) { return []; }

    searchText = searchText.toLowerCase();

    return items.filter(it => {

      if (it.name.toLowerCase().includes(searchText)) {
        return it.name;
      }

      if (it.title.toLowerCase().includes(searchText)) {
        return it.title;
      }

      if (it.article.toLowerCase().includes(searchText)) {
        return it.article;
      }

    });
  }
}
