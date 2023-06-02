import {LitElement, html, css} from 'lit';

export class CardComponent extends LitElement {
  static properties = {
    name: { type: String },
    desc: { type: String },
    avatar: { type: String },
  };

  static styles = css`
    .card {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        width: 100%;
        background: white
    }
    
    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
    
    .container {
        padding: 2px 16px;
        overflow-x: scroll;
        height: 200px;
    }
  `;

  constructor() {
    super();
    this.name = 'Jhon';
    this.desc = 'Descripcion';
    this.avatar = 'ImageUrl'
  }

  render() {
    return html`
        <div class="card">
            <img src="${this.avatar}" alt="Avatar" style="width:100%">
            <div class="container">
                <h4><b>${this.name}</b></h4> 
                <p>${this.desc}</p> 
            </div>
        </div>
    `;
  }
}
customElements.define('card-component', CardComponent);
