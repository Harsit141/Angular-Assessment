import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('.navbar-brand')).getText() as Promise<string>;
  }

  getForm() {
    return element(by.tagName('form'));
  }

  getName() {
    return element(by.id("bookname"));
  }
  getAuthor() {
    return element(by.id("author"));
  }
  getYear() {
    return element(by.id("year"));
  }
  getLanguage() {
    return element(by.id("language"));
  }
}
