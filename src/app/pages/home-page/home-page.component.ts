import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CreditCard } from 'src/app/models/credit-card.type';
import { CreditCardService } from 'src/app/services/credit-card-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  creditCards$ : Observable<CreditCard[]> | null = null;
  displayedColumns: string[] = ['position','card_number', 'cardholder_name', 'issuer']
  constructor(private creditCardService : CreditCardService) { }

  ngOnInit(): void {
    this.creditCards$ = this.creditCardService.getCreditCards();
  }

  rowClick(row: number): void {
    console.log(row);
  }

}
