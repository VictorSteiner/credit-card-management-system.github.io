import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators'
import { Transaction } from '../models/transaction/transaction.model';
import { HttpHandlingService } from './http-handling.service';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  transactions$: Observable<Transaction[]>;
  url = "http://localhost:3000/transactions";

  constructor(private httpClient: HttpClient, private httpHandling: HttpHandlingService) {
    this.transactions$ = this.getTransactions()
  }

  getTransactions(): Observable<Transaction[]> {
    return this.httpClient.get<Transaction[]>(`${this.url}`).pipe(
      tap((t: Transaction[]) => this.httpHandling.handleSucces()),
    )
  }

  postTransaction(transaction: Transaction) {
    this.httpClient.post<Transaction>(`${this.url}`, transaction).pipe(
      tap((t: Transaction) => this.httpHandling.handleSucces()),
      catchError((e: HttpErrorResponse) => {
        return this.httpHandling.handleError(e);
      })
    )
  }

}
