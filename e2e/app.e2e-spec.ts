import { MyAngular2mediadatabasePage } from './app.po';

describe('my-angular2mediadatabase App', () => {
  let page: MyAngular2mediadatabasePage;

  beforeEach(() => {
    page = new MyAngular2mediadatabasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
