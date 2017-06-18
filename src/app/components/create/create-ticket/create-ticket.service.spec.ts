import { TestBed, inject } from '@angular/core/testing';

import { CreateTicketService } from './create-ticket.service';

describe('CreateTicketService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateTicketService]
    });
  });

  it('should ...', inject([CreateTicketService], (service: CreateTicketService) => {
    expect(service).toBeTruthy();
  }));
});
