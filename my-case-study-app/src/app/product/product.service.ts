import { Injectable } from '@angular/core';
import { ProductDetail } from './product-detail/product-detail';

@Injectable()
export class ProductService {

  constructor() { }

  getProduct(): ProductDetail {
    return {
      'productId': 1840,
      'productTitle': 'Ninja\u2122 Professional Blender with Single Serve Blending Cups',
      'productPrice': '$139.99',
      'primaryImage': 'http:\/\/target.scene7.com\/is\/image\/Target\/14263758'
    };
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
  }

  private extractData(body: any) {
    return new CaseLogsDto(body.caseLogId, body.portfolioSectionId, body.caseLogSectionTypeId, body.caseLogItemId, body.isVisible);
  }

  private handleError (response: any) {
    return Observable.throw(response.error || 'Server error');
  }*/

}
