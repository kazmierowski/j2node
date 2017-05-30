import { TestBed, inject } from '@angular/core/testing';

import { ProjectDashboardService } from './project-dashboard.service';

describe('ProjectDashboardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectDashboardService]
    });
  });

  it('should ...', inject([ProjectDashboardService], (service: ProjectDashboardService) => {
    expect(service).toBeTruthy();
  }));
});
