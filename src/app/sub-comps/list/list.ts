import { Component, Input, Output, EventEmitter } from '@angular/core';

import {faTimes} from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-list',
  templateUrl: './list.html'
})

export class List {

  // path data 3/4
  @Input() sub_list
  @Output() sub_del = new EventEmitter()

  // fontawesome 1/2
  faTimes = faTimes

  // method > delete
  del_method(x: object){ 
    this.sub_del.emit(x) 
  }

  // edit

  @Output() sub_edit = new EventEmitter()

  blur_method(x: object){
    this.sub_edit.emit(x)
  }

}
