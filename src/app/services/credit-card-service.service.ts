import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators'
import { CreditCardResult } from '../models/credit-card-result.type';
import { CreditCard } from '../models/credit-card.type';


@Injectable({
  providedIn: 'root'
})
export class CreditCardServiceService {
  rootUrl = `http://localhost:3000`

  constructor(private http: HttpClient) { }


  getClients(): Observable<CreditCard[]> {
    return this.http.get<CreditCard[]>(`${this.rootUrl}/credit_cards`)
  }

  createClient(creditCard: CreditCard) {
    this.http.post<CreditCardResult>(`${this.rootUrl}/credit_cards`, creditCard).pipe(
      catchError((e : HttpErrorResponse) => {
        return of({messeage: e.message, status: e.status})
      })
    )
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
