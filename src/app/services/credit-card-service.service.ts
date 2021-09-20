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

    )
  }
}
