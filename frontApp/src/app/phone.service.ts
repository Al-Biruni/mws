import { Injectable } from '@angular/core';
import {Phone } from './phone';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import {Comparison} from './comparison'
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class PhoneService {
  private apiUrl = 'http://localhost:3000';

  err : any;

  msg : string;

  constructor(  private http: HttpClient,
                private messageService: MessageService) {}

  getAllPhones():  Observable<Phone[]>{
    const url = `${this.apiUrl}/getPhones`;

return this.http.get<Phone[]>(url)
.pipe(
   tap(_ => this.log('fetched phones')),
catchError(this.handleError('getPhones', []))
);

  }
  getPhones(reg:string):  Observable<Phone[]>{
    const url = `${this.apiUrl}/getPhones-${reg}`;

return this.http.get<Phone[]>(url)
.pipe(
   tap(_ => this.log('fetched phones')),
catchError(this.handleError('getPhones', []))
);

  }
  getPhone(id: number): Observable<Phone> {
    const urlId = `${this.apiUrl}/Smartphones/getPhone/${id}`;
    return this.http.get<Phone>(urlId)
    .pipe(
       tap(_ => this.log(`PhoneService: fetched phoneid=${id}`)),
catchError(this.handleError<Phone>(`getPhone id = ${id}`))
);
  }

  private log(message: string) {
  this.messageService.add(`PhoneService:${message}`);

}
getPopularComp():Observable<Comparison[]>{
  var urlPopular = `${this.apiUrl}/Smartphones/comparePhones/popularComp`;
  return this.http.get<Comparison[]>(urlPopular)
  .pipe(
     tap(_ => this.log('fetched Popular Comparisons')),
  catchError(this.handleError('getPhones', []))
);
}
comparePhones(phns):Observable<Phone[]>{

    var urlCompare = `${this.apiUrl}/Smartphones/comparePhones/${phns.firstPhone}-vs-${phns.secondPhone}`;
    if(phns.thirdPhone!="")
    urlCompare+=`vs${phns.thirdPhone}`;

    if(phns.forthPhone!="")
    urlCompare+=`vs${phns.forthPhone}`;
    console.log(urlCompare);
    return this.http.get<Phone[]>(urlCompare)
    .pipe(
       tap(_ => this.log('fetched Comaper phones')),
    catchError(this.handleError('getPhones', []))
  );

}


/**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (err: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(err); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${err.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

}
