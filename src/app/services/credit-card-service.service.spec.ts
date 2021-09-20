import { TestBed } from '@angular/core/testing';

import { CreditCardService } from './credit-card-service.service';

describe('CreditCardServiceService', () => {
  let service: CreditCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreditCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
