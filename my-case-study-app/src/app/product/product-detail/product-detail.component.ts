import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ProductDetail } from './product-detail';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: ProductDetail;
  data: any;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.product = this.productService.getProduct();
    this.productService.getProductInfo()
    .subscribe(r => {
      this.data = r; });

    console.log(this.data);


  }


}
