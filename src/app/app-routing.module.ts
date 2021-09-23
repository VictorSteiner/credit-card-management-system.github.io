import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreditCardDetailsPageComponent } from './pages/credit-card-details-page/credit-card-details-page.component';
import { CreditCardPageComponent } from './pages/credit-card-page/credit-card-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TransactionPageComponent } from './pages/transaction-page/transaction-page.component';

const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "credit-card", component: CreditCardPageComponent },
  { path: "transaction", component: TransactionPageComponent },
  { path: "credit-card/:id", component: CreditCardDetailsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
