import { browser, by, $, $$, element, protractor } from 'protractor';
import { setTimeout } from 'timers';

export class ProductDetailPage {

  EC = protractor.ExpectedConditions;
  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css('h4')).getText();
  }

  clickCarouselButton(selector) {
    const arrow = $(selector);
    arrow.click();
    browser.wait(this.EC.invisibilityOf($('.carousel-item img')), 5000).then(f => {
      browser.waitForAngular();
    });
  }

  getActiveCarouselImage() {
    const activeImage = $('.carousel-item.active img');
    return activeImage;
  }

  addToQuantity() {
    const add = $('.input-group-prepend button');
    add.click();
  }
}
