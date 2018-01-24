import { browser, by, element } from 'protractor';

export class ProductDetailPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css('h4')).getText();
  }
}
