import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { catchError,  Observable, retry, throwError } from 'rxjs';
import {Customer } from "src/app/data-model/customer.model";


@Injectable({
  providedIn: 'root'
})
export class ApiService {

             constructor(private httpClient:HttpClient) { }


            // call external API for data
            // url has been hardcoded here... should be moveout to config
              public getCustomerinfo(polno:string,custno:string):Observable<any>{
                let apiUrl = `http://localhost:58123/api/Customer?polno=${polno}&custno=${custno}`;
                return this.httpClient.get<Customer[]>(apiUrl).pipe(
                retry(1),
                catchError(this.handleError));
              }


            //custom error handler
            public handleError(error:any){
              
                let errMessage : string;

                    if (error.error instanceof ErrorEvent) {
                        // Get client-side error
                        errMessage = error.error.message;
                      } else {
                        // Get server-side error
                        errMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
                      }
                      return throwError(() => {
                        return errMessage;
                      });

            }


}
