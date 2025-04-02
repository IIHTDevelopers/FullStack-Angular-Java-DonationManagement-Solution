import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: AppComponent;
  beforeEach(() => {
    fixture = new AppComponent();
  });

  //test case:testig title of the app
  it('should have a title AngularFrontEnd', () => {
    expect(fixture.title).toEqual('AngularFrontEnd');
  });
});
