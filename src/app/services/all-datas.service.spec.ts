import { TestBed } from '@angular/core/testing';

import { AllDatasService } from './all-datas.service';

describe('AllDatasService', () => {
  let service: AllDatasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllDatasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
