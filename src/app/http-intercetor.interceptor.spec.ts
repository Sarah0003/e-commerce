import { TestBed } from '@angular/core/testing';

import { HttpIntercetorInterceptor } from './http-intercetor.interceptor';

describe('HttpIntercetorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpIntercetorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpIntercetorInterceptor = TestBed.inject(HttpIntercetorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
