import { TestBed } from '@angular/core/testing';

import { ApDashboardLibService } from './ap-dashboard-lib.service';

describe('ApDashboardLibService', () => {
  let service: ApDashboardLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApDashboardLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
