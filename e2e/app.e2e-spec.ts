import { CuratorTypescriptPage } from './app.po';

describe('curator-typescript App', () => {
  let page: CuratorTypescriptPage;

  beforeEach(() => {
    page = new CuratorTypescriptPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
