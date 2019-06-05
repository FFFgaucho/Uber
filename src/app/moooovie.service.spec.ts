import { TestBed } from '@angular/core/testing';

import { MoooovieService } from './moooovie.service';

describe('MoooovieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoooovieService = TestBed.get(MoooovieService);
    expect(service).toBeTruthy();
  });
});
