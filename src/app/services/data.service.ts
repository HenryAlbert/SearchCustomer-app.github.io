import { Injectable } from '@angular/core';
import {Customer } from "src/app/data-model/customer.model";


@Injectable({
  providedIn: 'root'
})
export class DataService {

  _data: Customer[] = [];
  _title:string;
 
    constructor() {
      this._title="";
    }

    //this method  appends a searched customer infor  to an array of Search results
    addToSearchResults(item: Customer) {
      this._data.push(item );
    }

    //this method return the all added results
    getSearchResults() {
      return this._data;
    }

    // this method to clear the array
    clearSearchResults() {
      this._data = [];
      return this._data;
    }

    //this method to set tile from compoenents
    SetTitle(title:string){
      this._title=title;
    }

    //this method to return the current title
    GetTitle():string{
      return this._title;
    }

  
}
