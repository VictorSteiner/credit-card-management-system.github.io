import { TestBed } from '@angular/core/testing';

import { SnackBarService } from './snackbar.service';

describe('SnackbarserviceService', () => {
  let service: SnackBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SnackBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
