import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { SnackBarService } from './snackbar.service';

@Injectable({
	providedIn: 'root',
})
export class HttpHandlingService {
	constructor(private snackbarService: SnackBarService) {}

	handleSucces() {
		this.snackbarService.openSnackBarSucces('Succes');
	}

	handleError(error: HttpErrorResponse) {
		this.snackbarService.openSnackBarError(
			`${error.status}: ${error.statusText}`,
			'X'
		);
		return of({ ...error });
	}
}
