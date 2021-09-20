import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})

export class SnackBarService {
  constructor(private snackBar:MatSnackBar) { }

  
  openSnackBarSucces(message: string, action: string) {
    this.snackBar.open(message, action, {
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
      duration: 2000,
    });
  }

  openSnackBarError(message: string, action: string) {
    this.snackBar.open(message, action,{
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
    });
  }
  }