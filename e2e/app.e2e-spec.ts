import { Week3t5Page } from './app.po';

describe('week3t5 App', function() {
  let page: Week3t5Page;

  beforeEach(() => {
    page = new Week3t5Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
