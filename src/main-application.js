import { LitElement, html } from 'lit-element';
import 'whatwg-fetch';

export class MainApplication extends LitElement {
  constructor() {
    super();
    this.data = {};
  }

  static get properties() {
    return {
      data: { type: Object }
    };
  }

  getData() {
    window
      .fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {
        this.data = json;
      })
      .catch(error => console.log(error));
  }

  render() {
    return html`
      <h1>This is a polymer lit-element project</h1>
      <section>
        <div>
          <my-title sub-text="I am a prop being passed down from the main app" .myData="${
            this.data
          }"></my-title>
        <div>
      </section>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this.getData();
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define('main-application', MainApplication);
