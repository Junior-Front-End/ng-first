import { Component,OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {without,sortBy} from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.html' 
})
 
export class App implements OnInit{
  
  // title
  title = 'pet store';
  app_list: object[];
  app_displayList: object[];
  sort: string;
  asc: string;
  lastIndex: number;

  // path data 1/4
    
  constructor(private http: HttpClient) { 
    this.sort = 'petName'
    this.asc = 'asc' 
   } 

  ngOnInit(): void {
    
    this.lastIndex = 0 

    this.http.get<Object[]>('../assets/data.json')
    .subscribe(data => {

      this.app_list = data.map((item: any) => { 

        item.id = this.lastIndex++
        return item
        
      })

      this.app_displayList = data
      this.sortItHoney()
    })

  }

  // delete
  app_del(y: object){ 
    this.app_list = without(this.app_list, y) 
    this.app_displayList = without(this.app_displayList, y) 
  }

  // add
  app_add(y: object){
    y['id'] = this.lastIndex++
    this.app_list.unshift(y)
    this.app_displayList.unshift(y)
    this.lastIndex++
  }

  // search
  app_search(y: string){
    
    this.app_displayList = this.app_list.filter(item => {

      return (
        item['petName'].toLowerCase().match(y.toLowerCase()) ||
        item['ownerName'].toLowerCase().match(y.toLowerCase()) ||
        item['aptNotes'].toLowerCase().match(y.toLowerCase()) 
      )

    })
  
  }

  // sort
  app_sort(y: object){ 
    this.asc = y['asc'];
    this.sort = y['sort']; 
    this.sortItHoney()
  }
  
  sortItHoney(){
    this.app_displayList = sortBy(this.app_list, this.sort)
    if (this.asc == 'desc'){
      this.app_displayList.reverse()
    } 
  }

  // edit 
  app_edit(y: object){
    
    // update list

    let index: number = this.app_list.findIndex(function({id}: any) {
      return y['id'] == id
    })

    this.app_list[index][y['field']] = y['value']

    // update displayList

    let index2: number = this.app_displayList.findIndex(function({id}: any) {
      return y['id'] == id
    })
  
    this.app_displayList[index2][y['field']] = y['value'] 
       

  }


}
