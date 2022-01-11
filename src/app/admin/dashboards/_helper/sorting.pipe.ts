import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortingPipe implements PipeTransform {

  transform(value: Array<string>, ...args: any[]): any {
   const sortfield =  args[0];

   value.sort((a : any , b : any)=> {
     if(a[sortfield] < b[sortfield]) {
       return -1 ;
     }else if (a[sortfield] > b[sortfield]){
       return 1;
     }else{
       return 0;
     }
   })
   
    return value;

  }

}
