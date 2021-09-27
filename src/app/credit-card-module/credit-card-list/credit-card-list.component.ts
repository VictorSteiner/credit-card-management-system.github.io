import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CreditCard } from 'src/app/models/credit-card.type';
import { CreditCardService } from 'src/app/services/credit-card-service.service';

@Component({
  selector: 'app-credit-card-list',
  templateUrl: './credit-card-list.component.html',
  styleUrls: ['./credit-card-list.component.css']
})
export class CreditCardListComponent implements OnInit {

  creditCards$ : Observable<CreditCard[]> | null = null;
  displayedColumns: string[] = ['position','card_number', 'cardholder_name', 'issuer']
  dataSource = new MatTableDataSource()

  @ViewChild(MatPaginator) paginator: MatPaginator;
   @ViewChild(MatSort) sort: MatSort
  constructor(private creditCardService : CreditCardService, private router: Router) { }

  ngOnInit(): void {
    this.creditCardService.credit_cards$.subscribe(creditCards => {this.dataSource.data = creditCards});
  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  rowClick(id: number): void {
    this.router.navigate(['/credit-card', id]);
  }

}
