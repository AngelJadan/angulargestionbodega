import { TestBed } from '@angular/core/testing';

import { WsJeeServicePedidoService } from './ws-jee-service-pedido.service';

describe('WsJeeServicePedidoService', () => {
  let service: WsJeeServicePedidoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WsJeeServicePedidoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
