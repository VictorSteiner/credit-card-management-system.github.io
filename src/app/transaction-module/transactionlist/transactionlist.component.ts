import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-transactionlist',
  templateUrl: './transactionlist.component.html',
  styleUrls: ['./transactionlist.component.css']
})
export class TransactionlistComponent implements OnInit, AfterViewInit {

  @Input() id : number | undefined;
  displayedColumnsTransaction: string[] = [
		'date',
		'amount',
		'currency',
    'card_number',
    'cardholder_name',
		'comment',
    'delete'
	];
	dataSource = new MatTableDataSource();

	@ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private transactionService : TransactionService, private router : Router) { }

  ngOnInit(): void {
    this.transactionService.transactions$
			.pipe(
        map((items) => {
          return this.id ? items.filter((item) => item.credit_card.card_number === this.id) : items.sort((a,b) => a.credit_card.card_number.toLocaleString().localeCompare(b.credit_card.card_number.toLocaleString()))
        }
          )
			)
			.subscribe((items) => {
				this.dataSource.data = items;
			});
  }

  ngAfterViewInit(): void {
		this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort
	}

  rowClick(id: number): void {

    if (!this.id) {
      this.router.navigate(['/credit-card', id]);
    }

	}

  transactionDelete(id: number): void {

    console.log(id)

	}

}
