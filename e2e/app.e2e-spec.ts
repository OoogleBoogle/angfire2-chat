import { Angfire2ChatPage } from './app.po';

describe('angfire2-chat App', function() {
  let page: Angfire2ChatPage;

  beforeEach(() => {
    page = new Angfire2ChatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
