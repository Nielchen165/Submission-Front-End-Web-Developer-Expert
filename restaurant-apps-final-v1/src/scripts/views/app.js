/* eslint-disable require-jsdoc */
import routes from '../routes/routes';
import UrlParser from '../routes/UrlParser';
import DrawerInitiator from '../utils/DrawerInitiator';

class App {
  constructor({button, drawer, content, navLink}) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._navLink = navLink;
    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
      navLink: this._navLink,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
