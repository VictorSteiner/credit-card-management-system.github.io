import {
	AfterViewInit,
	Component,
	Input,
	OnInit,
	ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Transaction } from 'src/app/models/transaction.type';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
	selector: 'app-transactionlist',
	templateUrl: './transactionlist.component.html',
	styleUrls: ['./transactionlist.component.css'],
})
export class TransactionlistComponent implements OnInit, AfterViewInit {
	@Input() id: number | undefined;
	displayedColumnsTransaction: string[] = [
		'date',
		'amount',
		'currency',
		'card_number',
		'cardholder_name',
		'comment',
		'delete',
	];
	dataSource = new MatTableDataSource();

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

	constructor(
		private transactionService: TransactionService,
		private router: Router
	) {}

	ngOnInit(): void {
		this.loadData();
    this.dataSource.sortingDataAccessor = (item : Transaction, property) => {
      switch(property) {
        case 'credit_card.card_number': return item.credit_card.card_number;
        case 'credit_card.cardholder_name': return item.credit_card.cardholder_name;
        default: return item[property];
      }
    };
    this.dataSource.filterPredicate = (data : Transaction, filter) => {
      const dataStr = data.credit_card.cardholder_name + data.credit_card.card_number;
      return dataStr.indexOf(filter) != -1;
    }

	}
  public doFilter = (value: string) => {
    this.dataSource.filter = value;
  }

	ngAfterViewInit(): void {
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	}

  update(event: Transaction) {
    this.loadData();
  }

  loadData(): void {
    this.transactionService.transactions$
			.pipe(
				map((items) => {
					return this.id
						? items.filter((item) => item.credit_card.card_number === this.id)
						: items.sort((a, b) =>
								a.credit_card.card_number
									.toLocaleString()
									.localeCompare(b.credit_card.card_number.toLocaleString())
						  );
				})
			)
			.subscribe((items) => {
				this.dataSource.data = items;
			});
  }

	transactionDelete(id: string): void {
    console.log(id)
		this.transactionService.deleteTransaction(id)
    this.dataSource.data = this.dataSource.data.filter(
			(item: Transaction) => item.uid != id
		);
		this.dataSource._updateChangeSubscription();
	}
}
