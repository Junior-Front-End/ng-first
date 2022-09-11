import { Component, Output, EventEmitter } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-add',
  templateUrl: './add.html' 
})
export class Add {

  // icon 
  faPlus = faPlus

  // show/hide 
  showForm: boolean;
  constructor() { 
    this.showForm = true;
  } 
  toggle_method(){
    this.showForm = !this.showForm;
  } 

  // submit

  @Output() sub_add = new EventEmitter();

  submit_method(form: any){

    // get new one 
    const newItem: object = {
      petName:    form.value.petName,
      ownerName:  form.value.ownerName,
      aptDate:    form.value.aptDate + ' ' + form.value.aptTime,
      aptNotes:   form.value.aptNotes
    }

    // send new one
    this.sub_add.emit(newItem);

    // hide form
    this.showForm = !this.showForm;
    
    // reset
    form.reset();

  } 


}
