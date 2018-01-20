export interface IProductDetail {
  productId: number;
  //productPrice: string;
  //primaryImage: string;
  // productImages: Image
  productTitle: string;
  purchasingChannelCode: number;
  //productDescription: string;
  //promotionsDescription: Array<string>;
}

export class ProductDetail implements IProductDetail {
  constructor (
      public productId: number,
      //public productPrice: string,
      //public primaryImage: string,
      public productTitle: string,
      public purchasingChannelCode: number,
      //public productDescription: string,
      //public promotionsDescription: Array<string>

      ) {}
}
