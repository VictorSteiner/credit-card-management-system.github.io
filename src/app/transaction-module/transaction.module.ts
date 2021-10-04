import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { TransactionlistComponent } from './transactionlist/transactionlist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SharedModule } from '../shared/shared.module';
import { MilsToDatePipe } from '../pipe/mils-to-date.pipe';
import { TransactionaddComponent } from './transactionadd/transactionadd.component';


@NgModule({
  declarations: [
    TransactionlistComponent,		MilsToDatePipe, TransactionaddComponent,
  ],
  imports: [
    CommonModule,
    TransactionRoutingModule,
    MatTableModule,
		MatPaginatorModule,
		SharedModule,
		FormsModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatSelectModule,
		MatRadioModule,
		MatCardModule,
		MatButtonModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatSortModule,
    MatIconModule,
    MatSidenavModule
  ],
  exports: [TransactionlistComponent]
})
export class TransactionModule { }
