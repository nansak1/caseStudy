import { ProductDetailPage } from './product-detail.po';
import { browser, by, $, $$, element, protractor } from 'protractor';

describe('my-case-study-app App', () => {
  let page: ProductDetailPage;

  beforeEach(() => {
    page = new ProductDetailPage();
  });

  it('should display product title', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Ninja™ Professional Blender with Single Serve Blending Cups');
  });

  it('should display previous image when previous arrow clicked on carousel', () => {
    page.navigateTo();
    const image1 = page.getActiveCarouselImage();
    image1.getAttribute('alt').then(function (description) {
      expect(description).toBe('slide 1');
    });
    page.clickCarouselButton('.carousel-control-prev');

    const image2 = page.getActiveCarouselImage();
    image2.getAttribute('alt').then(function (description) {
      expect(description).toBe('slide 7');

    });
  });
});
