import { LitElement, html } from 'lit-element';

export class MyTitle extends LitElement {
  static get properties() {
    return {
      subText: { attribute: 'sub-text' },
      myData: { type: Object }
    };
  }

  constructor() {
    super();
    this.data = {};
  }
  render() {
    return html`
      <h1>
        I am another component inside the main component. My color will not be
        red because I am in the shadow dom. Unless I am in IE.
      </h1>
      <h2>${this.subText}</h2>
      <p>
        This is my data's title also passed as a prop using fetch request:
        ${this.myData.title}
      </p>
    `;
  }
}
customElements.define('my-title', MyTitle);
