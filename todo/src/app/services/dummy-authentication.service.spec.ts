import { TestBed } from '@angular/core/testing';

import { DummyAuthenticationService } from './dummy-authentication.service';

describe('DummyAuthenticationService', () => {
  let service: DummyAuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DummyAuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
