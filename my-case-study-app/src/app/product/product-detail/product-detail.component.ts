import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ProductDetail } from './product-detail';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: ProductDetail;
  data: any;
  sub: any;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.product = this.productService.getProduct();

   /* const productObservable = this.productService.getProductInfo();

    this.sub = Observable.forkJoin(productObservable)
    .subscribe((results: any[]) => {
      this.data = results[0];
      console.log(this.data);
    });*/
    this.productService.getProductInfo()
    .subscribe(r => {
      this.data = r;
      console.log(this.data);
    });

    //console.log(this.data);


  }


}
