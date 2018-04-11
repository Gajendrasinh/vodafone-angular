import { GsServingAngularPage } from './app.po';

describe('gs-serving-angular App', () => {
  let page: GsServingAngularPage;

  beforeEach(() => {
    page = new GsServingAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
