import { J2nodePage } from './app.po';

describe('j2node App', () => {
  let page: J2nodePage;

  beforeEach(() => {
    page = new J2nodePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
