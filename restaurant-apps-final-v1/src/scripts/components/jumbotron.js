/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
class Jumbotron extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="jumbotron">
    <picture>
    <source media="(max-width: 600px)" srcset="./images/hero-image_4-small.jpg">
    <img src='./images/hero-image_4-large.jpg' 
         alt="Large Image For Restaurant">
    </picture>
    </div>
  `;
  }
}

customElements.define('jumbotron-element', Jumbotron);
