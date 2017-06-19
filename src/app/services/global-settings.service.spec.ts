import { TestBed, inject } from '@angular/core/testing';

import { GlobalSettingsService } from './global-settings.service';

describe('GlobalSettingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalSettingsService]
    });
  });

  it('should ...', inject([GlobalSettingsService], (service: GlobalSettingsService) => {
    expect(service).toBeTruthy();
  }));
});
