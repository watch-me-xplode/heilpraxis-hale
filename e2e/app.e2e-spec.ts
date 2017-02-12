import { HeilpraxisHalePage } from './app.po';

describe('heilpraxis-hale App', function() {
  let page: HeilpraxisHalePage;

  beforeEach(() => {
    page = new HeilpraxisHalePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
