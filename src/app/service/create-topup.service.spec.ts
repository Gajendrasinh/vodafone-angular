import { TestBed, inject } from '@angular/core/testing';

import { CreateTopupService } from './create-topup.service';

describe('CreateTopupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateTopupService]
    });
  });

  it('should be created', inject([CreateTopupService], (service: CreateTopupService) => {
    expect(service).toBeTruthy();
  }));
});
