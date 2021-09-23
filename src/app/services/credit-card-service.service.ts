import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError, EMPTY } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators'
import { CreditCardResult } from '../models/credit-card-result.type';
import { CreditCard } from '../models/credit-card.type';
import { SnackBarService } from './snackbar.service';


@Injectable({
  providedIn: 'root'
})
export class CreditCardService {
  rootUrl = `http://localhost:3000`
  credit_cards$: Observable<CreditCard[]>;
  constructor(private snackBarService: SnackBarService,private http: HttpClient) {
    this.credit_cards$ = this.getCreditCards();
  }


  getCreditCards(): Observable<CreditCard[]> {
    return this.http.get<CreditCard[]>(`${this.rootUrl}/credit_cards`).pipe(
      tap(() => this.snackBarService.openSnackBarSucces("succeeded")),
      catchError(this.handleError)
    )
  }

  createCreditCard(creditCard: CreditCard) {
    this.http.post<CreditCardResult>(`${this.rootUrl}/credit_cards`, creditCard).pipe(
      tap(() => this.snackBarService.openSnackBarSucces("succeeded")),
      catchError(this.handleError)
      )
  }

  private handleError(error: HttpErrorResponse) {
    this.snackBarService.openSnackBarError(`Failed with error: ${error.status}`,'close');
    return EMPTY;
  }
}
