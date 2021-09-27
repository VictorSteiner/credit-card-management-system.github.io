import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CreditCard } from 'src/app/models/credit-card.type';
import { Transaction } from 'src/app/models/transaction.type';
import { CreditCardService } from 'src/app/services/credit-card-service.service';

@Component({
	selector: 'app-credit-card-list-item',
	templateUrl: './credit-card-list-item.component.html',
	styleUrls: ['./credit-card-list-item.component.css'],
})
export class CreditCardListItemComponent implements OnInit {
	creditCard$: Observable<CreditCard[]>;
  id : number
	transactions$: Observable<Transaction[]>;
	displayedColumnsCard: string[] = [
		'card_number',
		'cardholder_name',
		'csc_code',
		'expiration_date_month',
		'expiration_date_year',
		'issuer',
	];


	constructor(
		private route: ActivatedRoute,
		private creditCardService: CreditCardService
	) {}

	ngOnInit(): void {
	  this.id = Number.parseInt(
			this.route.snapshot.paramMap.get('id'),
			10
		);

		this.creditCard$ = this.creditCardService.creditCards$.pipe(
			map((items) => items.filter((item) => item.card_number === this.id))
		);
	}


}
