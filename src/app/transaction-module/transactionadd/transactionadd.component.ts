import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { CreditCard } from 'src/app/models/credit-card.type';
import { CURRENCIES } from 'src/app/models/transaction.type';
import { CreditCardService } from 'src/app/services/credit-card-service.service';
import { TransactionService } from 'src/app/services/transaction.service';
import { Transaction } from 'src/app/models/transaction.type';
import { TouchSequence } from 'selenium-webdriver';

@Component({
	selector: 'app-transactionadd',
	templateUrl: './transactionadd.component.html',
	styleUrls: ['./transactionadd.component.css'],
})
export class TransactionaddComponent implements OnInit {
  @Output() Add : EventEmitter<string> = new EventEmitter

	formGroup = new FormGroup({
		creditCard: new FormControl(null,[Validators.required]),
		amount: new FormControl(null,[Validators.required]),
		comment: new FormControl(null,[Validators.required]),
		date: new FormControl(null,[Validators.required]),
		currency: new FormControl(null,[Validators.required]),
	});

	currencies = CURRENCIES;

	$creditCards: Observable<CreditCard[]>;
	constructor(
		private service: TransactionService,
		private creditCardService: CreditCardService
	) {this.$creditCards = this.creditCardService.creditCards$}

	onSubmit = (formGroup: FormGroup): void => {


    const transaction: Transaction = {
      amount: parseInt(formGroup.value.amount, 10),
      credit_card: formGroup.value.creditCard,
      comment: formGroup.value.comment,
      date: Date.parse(formGroup.value.date),
      currency: formGroup.value.currency
    }

    this.service.postTransaction(transaction);
    this.Add.emit("Add");
	};

	ngOnInit(): void {
		this.$creditCards = this.creditCardService.creditCards$;
	}
}
