import { TestBed } from '@angular/core/testing';

import { NgxMBootstrapService } from './ngx-m-bootstrap.service';

describe('NgxMBootstrapService', () => {
  let service: NgxMBootstrapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxMBootstrapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
