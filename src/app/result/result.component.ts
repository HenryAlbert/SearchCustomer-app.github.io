import { Component, Input, OnInit } from '@angular/core';
import {DataService  } from "src/app/services/data.service";
import {Customer } from "src/app/data-model/customer.model";
import {Router} from '@angular/router';



@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

//@Input():title
  title:string;
  items: Customer[] = [];


  constructor(private router:Router, private dataService:DataService) { 
    this.title="Search Results";
  }

  ngOnInit(): void {
    this.items = this.dataService.getSearchResults();
    //console.log(this.items);
  }

  //called by back button in result page
  public OnBack(event:any){
    this.router.navigate(['/SearchComponent']);
  }


  //called by clear button in result page
  public OnClear(event:any){
    this.dataService.clearSearchResults();
    this.items = this.dataService.getSearchResults();
  }

}
