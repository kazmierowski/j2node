import { TestBed, inject } from '@angular/core/testing';

import { BoardTicketService } from './board-ticket.service';

describe('BoardTicketService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BoardTicketService]
    });
  });

  it('should ...', inject([BoardTicketService], (service: BoardTicketService) => {
    expect(service).toBeTruthy();
  }));
});
