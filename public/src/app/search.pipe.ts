import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(list: Array<any>, searchTerms: String): any {
    if(searchTerms == null) {
      return list
    }
    var results = [];
    for(let x of list) {
      if(x.date.toLowerCase().includes(searchTerms.toLowerCase()) || x.time.includes(searchTerms) || x.patient.toLowerCase().includes(searchTerms.toLowerCase()) || x.complain.toLowerCase().includes(searchTerms.toLowerCase())) {
        results.push(x);
      }
    }
    return results;
  }

}
