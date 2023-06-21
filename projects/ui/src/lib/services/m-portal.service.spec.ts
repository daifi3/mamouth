import { TestBed } from '@angular/core/testing';

import { MPortalService } from './m-portal.service';

describe('MPortalService', () => {
  let service: MPortalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MPortalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
