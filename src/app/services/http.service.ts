import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseUrl = "https://jsonplaceholder.typicode.com/"


  constructor(private http:HttpClient) { }

  get(url:string, params?:any){
    const data = {params};
    return this.http.get(this.baseUrl + url).pipe(catchError(this.errorHandler.bind(this)))
  }

  private errorHandler(response:any){
    const error = response.error;
    const keys = Object.keys(error);
    const  key = keys[0];
    let message = error[key];

    if (response.status == 401){
      // Auth token
    }

    if(error[key] instanceof  Array){
      message = error[key][0];
    }

    if(key === 'isTrusted'){

    } else {

    }

    // Call Snackbar
    return throwError({messages: message, error});
  }
}
