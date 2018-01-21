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

 /* getProduct(): ProductDetail {
    return {
      'productId': 1840,
      'productTitle': 'Ninja\u2122 Professional Blender with Single Serve Blending Cups',
      //'productPrice': '$139.99',
      //'primaryImage': 'http:\/\/target.scene7.com\/is\/image\/Target\/14263758',
      'purchasingChannelCode': 0,
      //'productDescription': '',
      'promotionsDescription': [
        '$25 gift card with purchase of a select Ninja Blender',
        '$25 gift card with purchase of a select Ninja Blender'
       ]
    };
  }*/

  getProductInfo(): Observable <any> {
    return this.http.get(this.productUrl)
    //.do(data => console.log('All: ' + JSON.stringify(data)));
    .map((response: any) => {
      return this.extractData(response);
    }).catch(this.handleError);


  }

  /*private extractEncounterData(body: any): CaseLogEncounterDto {
    const detailbyRank = [];
    const detailAll = [];
    body.caseLogSummaryDetailDtosByRank.map(d => {
      detailbyRank.push(new CaseLogEncounterDetailDto(d.summaryId, d.rankId, d.summaryName, d.total));
    });
    body.caseLogSummaryDetailDtosByAll.map(d => {
      detailAll.push(new CaseLogEncounterDetailDto(d.summaryId, d.rankId, d.summaryName, d.total));
    });
    const summary = new CaseLogEncounterDto(detailbyRank, detailAll);
    return summary;
  }*/

  private extractData(body: any) {
    console.log(body);
    const productId = body.CatalogEntryView[0].itemId;
    const productTitle = body.CatalogEntryView[0].title;
    const purchasingChanelCode = Number(body.CatalogEntryView[0].purchasingChannelCode);
    const price = body.CatalogEntryView[0].Offers[0].OfferPrice[0].formattedPriceValue;
    const priceQualifier = body.CatalogEntryView[0].Offers[0].OfferPrice[0].priceQualifier;
    const primaryImage = body.CatalogEntryView[0].Images[0].PrimaryImage[0].image;
    const images = body.CatalogEntryView[0].Images[0].AlternateImages;

    console.log(primaryImage);
    return new ProductDetail(productId, price, primaryImage, images, productTitle, purchasingChanelCode);
  }

  private handleError (response: any) {
    return Observable.throw(response.error || 'Server error');
  }

}
