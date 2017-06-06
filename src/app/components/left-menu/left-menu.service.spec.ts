import { TestBed, inject } from '@angular/core/testing';

import { LeftMenuService } from './left-menu.service';

describe('LeftMenuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeftMenuService]
    });
  });

  it('should ...', inject([LeftMenuService], (service: LeftMenuService) => {
    expect(service).toBeTruthy();
  }));
});
