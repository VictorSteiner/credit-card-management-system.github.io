import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { CreditCard } from 'src/app/models/credit-card.type';
import { CURRENCIES } from 'src/app/models/transaction.type';
import { CreditCardService } from 'src/app/services/credit-card-service.service';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
	selector: 'app-transactionadd',
	templateUrl: './transactionadd.component.html',
	styleUrls: ['./transactionadd.component.css'],
})
export class TransactionaddComponent implements OnInit {
	formGroup = new FormGroup({
		creditCardNumber: new FormControl(null),
		amount: new FormControl(null),
		comment: new FormControl(null),
		date: new FormControl(null),
		currency: new FormControl(null),
	});

	currencies = CURRENCIES;

	$creditCards: Observable<CreditCard[]>;

	constructor(
		private service: TransactionService,
		private creditCardService: CreditCardService
	) {}

	onSubmit = (formGroup: FormGroup): void => {
		this.service.postTransaction({
			date: Date.parse(formGroup.value.date),
			...formGroup.value,
		});
	};

	ngOnInit(): void {
		this.$creditCards = this.creditCardService.creditCards$;
	}
}
