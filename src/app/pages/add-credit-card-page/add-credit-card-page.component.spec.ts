import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCreditCardPageComponent } from './add-credit-card-page.component';

describe('CreditCardPageComponent', () => {
  let component: AddCreditCardPageComponent;
  let fixture: ComponentFixture<AddCreditCardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCreditCardPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCreditCardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
