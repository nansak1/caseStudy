import { ProductDetailPage } from './product-detail.po';

describe('my-case-study-app App', () => {
  let page: ProductDetailPage;

  beforeEach(() => {
    page = new ProductDetailPage();
  });

  it('should display product title', () => {
    page.navigateTo();
     expect(page.getTitleText()).toEqual('Ninja™ Professional Blender with Single Serve Blending Cups');
  });
});
