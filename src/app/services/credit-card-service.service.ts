import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { CreditCard } from '../models/credit-card.type';
import { SnackBarService } from './snackbar.service';

@Injectable({
	providedIn: 'root',
})
export class CreditCardService {
	rootUrl = `http://localhost:3000`;
	creditCards$: Observable<CreditCard[]>;
	constructor(
		private snackBarService: SnackBarService,
		private http: HttpClient
	) {
		this.getCreditCards();
	}

	getCreditCards(): void {
		this.creditCards$ = this.http.get<CreditCard[]>(`${this.rootUrl}/credit_cards`).pipe(
			tap(() => this.snackBarService.openSnackBarSucces('Succeeded')),
			catchError(this.handleError)
		);
	}

	createCreditCard(creditCard: CreditCard): void {
		this.http.post<any>(`${this.rootUrl}/credit_cards`, creditCard).subscribe(
			// Succeeds when there is a response; ignore other events
			(res) => {
				this.snackBarService.openSnackBarSucces('Succeeded');
				console.log(res);
			},
			// Operation failed; error is an HttpErrorResponse
			(error) => this.handleError(error)
		);
	}

  deleteCreditCard(creditCardNumber: number): void {
		this.http.delete(`${this.rootUrl}/credit_cards/${creditCardNumber}`)
    .subscribe(
			// Succeeds when there is a response; ignore other events
			(res) => {
				this.snackBarService.openSnackBarSucces('Succeeded');
				console.log(res);
        this.getCreditCards()
			},
			// Operation failed; error is an HttpErrorResponse
			(error) => this.handleError(error)
		);

	}

	private handleError(error: HttpErrorResponse): Observable<CreditCard[]> {
		this.snackBarService.openSnackBarError(
			`Failed with error: ${error.status}`,
			'close'
		);

		return;
	}
}
