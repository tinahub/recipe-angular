import { RecipeAngularPage } from './app.po';

describe('recipe-angular App', () => {
  let page: RecipeAngularPage;

  beforeEach(() => {
    page = new RecipeAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
