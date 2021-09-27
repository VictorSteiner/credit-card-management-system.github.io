import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CreditCard } from 'src/app/models/credit-card.type';
import { Transaction } from 'src/app/models/transaction.type';
import { CreditCardService } from 'src/app/services/credit-card-service.service';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-credit-card-list-item',
  templateUrl: './credit-card-list-item.component.html',
  styleUrls: ['./credit-card-list-item.component.css']
})
export class CreditCardListItemComponent implements OnInit {

  creditCard$ : Observable<CreditCard[]>;
  transactions$: Observable<Transaction[]>;
  displayedColumnsCard: string[] = ['card_number', 'cardholder_name','csc_code', 'expiration_date_month','expiration_date_year' ,'issuer']
  displayedColumnsTransaction: string[] = ['date', 'amount', 'currency', 'comment']
  dataSource = new MatTableDataSource()

  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private transactionService: TransactionService, private route : ActivatedRoute, private creditCardService: CreditCardService) { }

  ngOnInit(): void {
    const id : number = Number.parseInt(this.route.snapshot.paramMap.get('id'));

    this.creditCard$ = this.creditCardService.credit_cards$.pipe(
      map(items => items.filter(item => item.card_number === id))
    );

    this.transactionService.transactions$.pipe(
      map(items => items.filter(item => item.credit_card.card_number === id))
      
    ).subscribe(items => {this.dataSource.data = items})
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
