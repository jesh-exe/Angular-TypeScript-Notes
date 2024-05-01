/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LoggedUserService } from './LoggedUser.service';

describe('Service: LoggedUser', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoggedUserService]
    });
  });

  it('should ...', inject([LoggedUserService], (service: LoggedUserService) => {
    expect(service).toBeTruthy();
  }));
});
