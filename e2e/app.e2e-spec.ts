import { TohNtpcCoder2017Page } from './app.po';

describe('toh-ntpc-coder2017 App', () => {
  let page: TohNtpcCoder2017Page;

  beforeEach(() => {
    page = new TohNtpcCoder2017Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
