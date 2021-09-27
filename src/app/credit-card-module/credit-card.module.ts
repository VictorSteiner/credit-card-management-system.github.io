import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCardRoutingModule } from './credit-card-routing.module';
import { CreditCardListItemComponent } from './credit-card-list-item/credit-card-list-item.component';
import { CreditCardAddComponent } from './credit-card-add/credit-card-add.component';
import { CreditCardListComponent } from './credit-card-list/credit-card-list.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { CreateArrayOfValuesPipe } from '../pipe/create-array-of-values.pipe';
import { MatSortModule } from '@angular/material/sort';
import { TransactionModule } from '../transaction-module/transaction.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
	declarations: [
		CreditCardListItemComponent,
		CreditCardAddComponent,
		CreditCardListComponent,
		CreateArrayOfValuesPipe,
	],
	imports: [
		CommonModule,
		CreditCardRoutingModule,
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
    TransactionModule,
    MatIconModule
	],
	exports: [
		CreditCardListItemComponent,
		CreditCardAddComponent,
		CreditCardListComponent,
	],
})
export class CreditCardModule {}
