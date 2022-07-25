import { Component, OnInit } from '@angular/core';
import {DataService } from "src/app/services/data.service";
import {ApiService  } from "src/app/services/api.service";
import {Router} from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchPolno:string;
  searchCustno:string;
  title:string;
  ErrorMessage:string;
 

  constructor(private fb: FormBuilder,
              private router:Router,
              private apiService:ApiService,
              private dataService:DataService,
              ) {
         
                //set title 
                //dataService.SetTitle("Member Search");
                this.searchPolno="";
                this.searchCustno="";
                this.title="Member Search";
                this.ErrorMessage="";
     }


    //set the reactive form
    SearchForm = this.fb.group({
      serviceDate:[formatDate(Date(), 'yyyy-MM-dd', 'en'),],
      custno:[''],
      polno: ['',  Validators.pattern("^[0-9]*$")]
      // polno: ['', Validators.required],
      
    });

    // get control from form
    get f(){
      return this.SearchForm.controls;
    }

    //reset the form values
    OnReset(): void {
      this.SearchForm.reset();
     }


     
   searchCustomer(){

    //console.log(this.searchPolno);

     // To search based on policynumber & customer number & get matched results
     // use the dataservice to add results in common 
      this.apiService.getCustomerinfo(this.searchPolno ,this.searchCustno ).subscribe({
        next:(data) => {
          const items = Object.keys(data).map( key => data[key]);
          this.dataService.addToSearchResults(items[0] );
        },
        error: (err) => this.ErrorMessage =err
      });

      // redirect to result page
        this.router.navigate(['/ResultComponent']);

   }
     ngOnInit(): void {  }
    

}
