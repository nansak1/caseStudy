import { TestBed, inject } from '@angular/core/testing';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';

import { ProductService } from './product.service';

describe('ProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        ProductService
      ]
    });
  });

  it('should be created', inject([ProductService], (service: ProductService) => {
    expect(service).toBeTruthy();
  }));
});
