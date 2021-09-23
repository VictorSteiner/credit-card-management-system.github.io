import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from 'src/app/models/transaction/transaction.model';
import { TransactionService } from 'src/app/services/transaction.service';


@Component({
  selector: 'app-transaction-page',
  templateUrl: './transaction-page.component.html',
  styleUrls: ['./transaction-page.component.css']
})
export class TransactionPageComponent implements OnInit {
  transactions$: Observable<Transaction[]>

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.transactions$ = this.transactionService.transactions$;
  }

}
