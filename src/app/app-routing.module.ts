import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreditCardAddComponent } from './credit-card-module/credit-card-add/credit-card-add.component';
import { TransactionPageComponent } from './pages/transaction-page/transaction-page.component';

const routes: Routes = [
  { path: "", loadChildren: () => import('./credit-card-module/credit-card.module').then(m => m.CreditCardModule), },
  { path: "add-credit-card", component: CreditCardAddComponent },
  { path: "transaction", component: TransactionPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
