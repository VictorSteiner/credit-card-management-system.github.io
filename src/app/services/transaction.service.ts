import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators'
import { Transaction } from '../models/transaction/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  transactions$: Observable<Transaction[]>;
  url = "http://localhost:3000/transactions";

  constructor(private httpClient: HttpClient, private snackbar: MatSnackBar) {
    this.transactions$ = this.getTransactions()
  }

  private handleSucces() {
    this.snackbar.open("Succes", undefined, { duration: 2000 });
  }

  private handleError(error: HttpErrorResponse) {
    this.snackbar.open(`${error.status}: ${error.statusText}`, "Close");
    return of({ ...error });
  }

  getTransactions(): Observable<Transaction[]> {
    return this.httpClient.get<Transaction[]>(this.url).pipe(
      tap((t: Transaction[]) => this.handleSucces()),
    )
  }

  postTransaction(transaction: Transaction) {
    this.httpClient.post<Transaction>(this.url, transaction).pipe(
      tap((t: Transaction) => this.handleSucces()),
      catchError((e: HttpErrorResponse) => {
        return this.handleError(e);
      })
    )
  }

}
