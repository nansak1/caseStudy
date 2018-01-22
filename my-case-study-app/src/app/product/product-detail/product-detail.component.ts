import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ProductDetail } from './product-detail';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/Rx';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: ProductDetail;
  data: any;
  images: Array<string>;
  primaryImage: string;
  sub: any;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProductInfo()
    .subscribe(result => {
      this.data = result;
      this.images = result.productImages;
      this.primaryImage = result.primaryImage;
      // console.log(this.data);
    });

  }


}
