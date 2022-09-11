// -------------------------------
// Modules
// -------------------------------
import { NgModule } from '@angular/core'; // Mother of below Modules

import { BrowserModule } from '@angular/platform-browser';
// module > path data 0/4
import {HttpClientModule} from '@angular/common/http';
// module > fontawesome 0/2
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
// module > forms
import { FormsModule } from '@angular/forms';


// -------------------------------
// Components - Added Automaticaly
// -------------------------------
import { App }     from './app/app';

import { Add }     from './sub-comps/add/add';
import { Search }  from './sub-comps/search/search';
import { List }    from './sub-comps/list/list';

// -------------------------------
// NgModule
// -------------------------------
@NgModule({

  // Added Automaticaly
  declarations: [ App, Add, Search, List ],

  // Added manualy
  imports: [ BrowserModule, FormsModule, HttpClientModule, FontAwesomeModule ],

  providers: [],

  bootstrap: [App]

})

export class AppModule { }
