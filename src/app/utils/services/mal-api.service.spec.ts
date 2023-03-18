import { TestBed } from '@angular/core/testing';

import { MalApiService } from './mal-api.service';

describe('MalApiService', () => {
  let service: MalApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MalApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
