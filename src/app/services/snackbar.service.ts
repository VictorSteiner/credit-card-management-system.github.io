import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})

export class SnackBarService {
  constructor(private snackBar: MatSnackBar) { }


  openSnackBarSucces(message: string, action?: string) {
    this.snackBar.open(message, action, {
      horizontalPosition: 'start',
      verticalPosition: 'bottom',
      panelClass: ['snackbar', 'snackbar-succes'],
      duration: 2000,
    });
  }

  openSnackBarError(message: string, action?: string) {
    this.snackBar.open(message, action, {
      panelClass: ['snackbar', 'snackbar-error'],
      horizontalPosition: 'start',
      verticalPosition: 'bottom',
    });
  }

  openSnackBarWarning(message: string, action?: string) {
    this.snackBar.open(message, action, {
      panelClass: ['snackbar', 'snackbar-warning'],
      horizontalPosition: 'start',
      verticalPosition: 'bottom'
    });
  }
}
