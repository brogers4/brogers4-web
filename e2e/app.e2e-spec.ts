import { Brogers4GithubWebPage } from './app.po';

describe('brogers4-github-web App', () => {
  let page: Brogers4GithubWebPage;

  beforeEach(() => {
    page = new Brogers4GithubWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
