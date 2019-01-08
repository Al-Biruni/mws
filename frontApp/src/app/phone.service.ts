import { Injectable } from '@angular/core';
import {Phone } from './phone';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class PhoneService {
  private apiUrl = 'http://localhost:3000';

  constructor(  private http: HttpClient,
                private messageService: MessageService) {}

  getPhones():  Observable<Phone[]>{
    const url = `${this.apiUrl}/getPhones`;
    return  this.http.get<Phone[]>(url)
    .pipe(
       tap(_ => this.log('fetched heroes')),
catchError(this.handleError('getPhones', []))
);
  }
  getPhone(id: number): Observable<Phone> {
    const urlId = `${this.apiUrl}/${id}`;
    return this.http.get<Phone>(urlId)
    .pipe(
       tap(_ => this.log(`PhoneService: fetched phoneid=${id}`)),
catchError(this.handleError<Phone>(`getPhone id = ${id}`))
);
  }

  private log(message: string) {
  this.messageService.add(`HeroService:${message}`);

}

/**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

}