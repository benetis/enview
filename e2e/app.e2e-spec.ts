import { EnviewPage } from './app.po';

describe('enview App', function() {
  let page: EnviewPage;

  beforeEach(() => {
    page = new EnviewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
