import { TestBed, inject } from '@angular/core/testing';

import { BoardColumnService } from './board-column.service';

describe('BoardColumnService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BoardColumnService]
    });
  });

  it('should ...', inject([BoardColumnService], (service: BoardColumnService) => {
    expect(service).toBeTruthy();
  }));
});
