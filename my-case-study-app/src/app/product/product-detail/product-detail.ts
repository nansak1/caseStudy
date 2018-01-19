export interface IProductDetail {
  productId: number;
  productPrice: string;
  primaryImage: string;
  // productImages: Image
  productTitle: string;
}

export class ProductDetail implements IProductDetail {
  constructor (
      public productId: number,
      public productPrice: string,
      public primaryImage: string,
      public productTitle: string,
      ) {}
}
