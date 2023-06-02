import {LitElement, html, css} from 'lit';

export class ButtonComponent extends LitElement {
  static properties = {
    name: {},
  };

  static styles = css`
  .btn {
    background-color: #808080;
    border: none;
    color: white;
    padding: 16px 32px;
    text-align: center;
    font-size: 16px;
    margin: 4px 2px;
    opacity: 1;
    transition: 0.3s;
    cursor: pointer;
    border-radius: 10px
  }
  
  .btn:hover {opacity: 0.6}
  `;

  constructor() {
    super();
    this.name = 'Click';
  }

  render() {
    return html`
        <button class="btn"><span>${this.name}</span></button>
    `;
  }
}
customElements.define('button-component', ButtonComponent);
