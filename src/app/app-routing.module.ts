import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreditCardAddComponent } from './credit-card-module/credit-card-add/credit-card-add.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
	{
		path: '', component: HomePageComponent

	},
	{ path: 'add-credit-card', component: CreditCardAddComponent },
	{ path: 'transaction', loadChildren: () =>
			import('./transaction-module/transaction.module').then(
				(m) => m.TransactionModule
			), },
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
	exports: [RouterModule],
})
export class AppRoutingModule {}
