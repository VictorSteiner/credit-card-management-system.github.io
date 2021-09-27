import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from '../pages/home-page/home-page.component';
import { CreditCardListItemComponent } from './credit-card-list-item/credit-card-list-item.component';

const routes: Routes = [
	{ path: '', component: HomePageComponent },
	{ path: 'credit-card/:id', component: CreditCardListItemComponent },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class CreditCardRoutingModule {}
