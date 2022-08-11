import { AppPage } from './app.po';

describe('Book App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display App Title', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('BookApp');
  });

  it('form should be invalid if any of its field is invalid', () => {
    page.navigateTo();
    page.getName().sendKeys("");
    page.getAuthor().sendKeys("");
    page.getYear().sendKeys(12);
    page.getLanguage().sendKeys("");
    let classText = page.getForm().getAttribute("class");
    expect(classText).not.toContain("ng-valid");
  });

  it('form should be valid when all of its fields are provided with valid values', () => {
    page.navigateTo();
    page.getName().sendKeys("Dummy");
    page.getAuthor().sendKeys("XYZ");
    page.getYear().sendKeys(2014);
    page.getLanguage().sendKeys("English");
    let classText = page.getForm().getAttribute("class");
    expect(classText).not.toContain("ng-invalid");
  });

  // afterEach(async () => {
  //   // Assert that there are no errors emitted from the browser
  //   const logs = await browser.manage().logs().get(logging.Type.BROWSER);
  //   expect(logs).not.toContain(jasmine.objectContaining({
  //     level: logging.Level.SEVERE,
  //   } as logging.Entry));
  // });
});
