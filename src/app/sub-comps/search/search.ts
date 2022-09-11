import { Component, Input, Output, EventEmitter} from '@angular/core';

// define component
@Component({
  selector: 'app-search',
  templateUrl: './search.html'
})

// define class component
export class Search{

  // search
  
  @Output() sub_search = new EventEmitter<string>();

  keyup_method(word: any){ 
    this.sub_search.emit(word.target.value); 
  }

  // sort 
  @Input() sort 
  @Input() asc
  @Output() sub_sort = new EventEmitter(); 

  sort_method(x: object){
    this.sub_sort.emit(x) 
  }
 

}
