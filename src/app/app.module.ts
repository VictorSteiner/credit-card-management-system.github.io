import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreditCardPageComponent } from './pages/credit-card-page/credit-card-page.component';
import { TransactionPageComponent } from './pages/transaction-page/transaction-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavComponent } from './shared/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http'
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import { PageWrapperComponent } from './shared/page-wrapper/page-wrapper.component';
import { CreditCardDetailsPageComponent } from './pages/credit-card-details-page/credit-card-details-page.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { LuxonModule } from 'luxon-angular';

@NgModule({
  declarations: [
    AppComponent,
    CreditCardPageComponent,
    TransactionPageComponent,
    HomePageComponent,
    NavComponent,
    PageWrapperComponent,
    CreditCardDetailsPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    HttpClientModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    LuxonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
