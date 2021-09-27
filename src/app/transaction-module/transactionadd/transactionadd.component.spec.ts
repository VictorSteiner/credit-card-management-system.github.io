import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionaddComponent } from './transactionadd.component';

describe('TransactionaddComponent', () => {
  let component: TransactionaddComponent;
  let fixture: ComponentFixture<TransactionaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
