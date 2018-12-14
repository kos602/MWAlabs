import { TestBed, async, inject } from '@angular/core/testing';

import { UserinfoGuard } from './userinfo.guard';

describe('UserinfoGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserinfoGuard]
    });
  });

  it('should ...', inject([UserinfoGuard], (guard: UserinfoGuard) => {
    expect(guard).toBeTruthy();
  }));
});
