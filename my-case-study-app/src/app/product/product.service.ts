import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { ProductDetail } from './product-detail/product-detail';


@Injectable()
export class ProductService {

  private productUrl = './api/item-data.json';

  constructor(private http: HttpClient) { }

  getProductInfo(): Observable <any> {
    return this.http.get(this.productUrl)
    .map((response: any) => {
      return this.extractData(response);
    }).catch(this.handleError);


  }

  private extractData(body: any) {
    console.log(body);
    const productId = body.CatalogEntryView[0].itemId;
    const productTitle = body.CatalogEntryView[0].title;
    const purchasingChannelCode = Number(body.CatalogEntryView[0].purchasingChannelCode);
    const price = body.CatalogEntryView[0].Offers[0].OfferPrice[0].formattedPriceValue;
    const priceQualifier = body.CatalogEntryView[0].Offers[0].OfferPrice[0].priceQualifier;
    const primaryImage = body.CatalogEntryView[0].Images[0].PrimaryImage[0].image;
    const images = body.CatalogEntryView[0].Images[0].AlternateImages;
    images.unshift(body.CatalogEntryView[0].Images[0].PrimaryImage[0]);
    const description = body.CatalogEntryView[0].ItemDescription[0].features;

    console.log(primaryImage);
    return new ProductDetail(productId, price, priceQualifier, primaryImage, images, productTitle, purchasingChannelCode, description);
  }

  private handleError (response: any) {
    return Observable.throw(response.error || 'Server error');
  }

}
