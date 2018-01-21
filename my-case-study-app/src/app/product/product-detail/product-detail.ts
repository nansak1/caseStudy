export interface IProductDetail {
  productId: number;
  productPrice: string;
  priceQualifier: string;
  primaryImage: string;
  productImages: Array<string>;
  productTitle: string;
  purchasingChannelCode: number;
  //productDescription: string;
  //promotionsDescription: Array<string>;
}

export class ProductDetail implements IProductDetail {
  constructor (
      public productId: number,
      public productPrice: string,
      public priceQualifier: string,
      public primaryImage: string,
      public productImages: Array<string>,
      public productTitle: string,
      public purchasingChannelCode: number,
      //public productDescription: string,
      //public promotionsDescription: Array<string>

      ) {}
}
