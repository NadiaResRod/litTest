import {LitElement, html, css} from 'lit';
import {YugiohDm} from '../dms/yugioh-dm';
import './card-component';
import './button-component';
import './my-spinner'

export class MyBody extends LitElement {
  static properties = {
    itemsDm: { type: Array },
    loading: { type: Boolean }
  };

  static styles = css`
    * {
        box-sizing: border-box;
    }

    .container{
        width: 75%;
        margin: auto
    }

    .row::after {
        content: "";
        clear: both;
        display: table;
    }

    [class*="col-"] {
        float: left;
        padding: 15px;
    }

    .col-1 {width: 8.33%;}
    .col-2 {width: 16.66%;}
    .col-3 {width: 25%;}
    .col-4 {width: 33.33%;}
    .col-5 {width: 41.66%;}
    .col-6 {width: 50%;}
    .col-7 {width: 58.33%;}
    .col-8 {width: 66.66%;}
    .col-9 {width: 75%;}
    .col-10 {width: 83.33%;}
    .col-11 {width: 91.66%;}
    .col-12 {width: 100%;}

    .header{
        display: flex;
        justify-content: space-between;
    }

    .h1Header{
        font-family: fantasy;
    }
  `;

  constructor() {
    super();
    this.itemsDm = [];
    this.ygoDm = new YugiohDm();
    this.loading = false;
  }

  get spinnerTemplate(){
    return html`
        <my-spinner></my-spinner>
    `
  }

  get mainTemplate(){
    return html`
        <div class="container">
            <div class="header">
                <h2 class="h1Header">!Crea tu deck Yu-Gi-Oh!</h2>
                <button-component @click="${() => this.getCards()}" name="¡Crear!"></button-component>
            </div>
            
            <div class="row">
                ${this.itemsDm.map(item => html`
                    <div class="col-4">
                        <card-component name="${item.name}" desc="${item.desc}" avatar="${item.card_images[0].image_url}"></card-component>
                    </div>
                    
                `)}
            </div>
        </div>
        
    `;
  }

  render() {
    return html`
        ${this.loading ? this.spinnerTemplate : this.mainTemplate}
        
    `;
  }

  async getCards(){
    this.loading = true;
    let cards = await this.ygoDm.getAllCards();
    let shuffled = cards.data
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
    this.itemsDm = shuffled.slice(0, 42);
    this.loading = false;
  }
}
customElements.define('my-body', MyBody);
