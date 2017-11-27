import { LitterPage } from './app.po';

describe('litter App', () => {
  let page: LitterPage;

  beforeEach(() => {
    page = new LitterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
