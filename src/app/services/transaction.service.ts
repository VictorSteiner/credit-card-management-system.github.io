import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Transaction } from '../models/transaction.type';
import { HttpHandlingService } from './http-handling.service';
import { SnackBarService } from './snackbar.service';

@Injectable({
	providedIn: 'root',
})
export class TransactionService {
	transactions$: Observable<Transaction[]>;
	url = 'http://localhost:3000/transactions';

	constructor(
		private httpClient: HttpClient,
		private httpHandling: HttpHandlingService<Transaction>,
    private snackBarService : SnackBarService
	) {
		this.getTransactions();
	}

	getTransactions(): void {
		this.transactions$ = this.httpClient
			.get<Transaction[]>(`${this.url}`)
			.pipe(tap((t: Transaction[]) => this.httpHandling.handleSucces()));
	}

	postTransaction(transaction: Transaction): void {
		this.httpClient.post<Transaction>(`${this.url}`, transaction).subscribe(
      (res) => {
				this.snackBarService.openSnackBarSucces('Succeeded');
        this.getTransactions();
				console.log(res);
			},
			// Operation failed; error is an HttpErrorResponse
			(error) => this.handleError(error)
    )
	}

	deleteTransaction(uid: string): void {
		this.httpClient.delete(`${this.url}/${uid}`).subscribe(
			// Succeeds when there is a response; ignore other events
			(res) => {
				this.getTransactions();
				this.httpHandling.handleSucces();
			},
			// Operation failed; error is an HttpErrorResponse
			(error) => this.httpHandling.handleError(error)
		);
	}

  private handleError(error: HttpErrorResponse): Observable<Transaction[]> {
		this.snackBarService.openSnackBarError(
			`Failed with error: ${error.status}`,
			'close'
		);
      return;
    }
}
