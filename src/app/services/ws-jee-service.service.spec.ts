import { TestBed } from '@angular/core/testing';

import { WsJeeServiceService } from './ws-jee-service.service';

describe('WsJeeServiceService', () => {
  let service: WsJeeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WsJeeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
