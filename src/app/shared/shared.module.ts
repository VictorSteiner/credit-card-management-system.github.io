import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageWrapperComponent } from './page-wrapper/page-wrapper.component';
import { NavComponent } from './nav/nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  declarations: [PageWrapperComponent, NavComponent],
  imports: [
    MatToolbarModule,
    CommonModule
  ],
  exports: [PageWrapperComponent, NavComponent]
})
export class SharedModule { }
