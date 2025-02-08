import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "My card";
    this.image = "https://platform.polygon.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/22512212/shrek4_disneyscreencaps.com_675.jpg?quality=90&strip=all&crop=44.127604166667,30.392156862745,36.953125,57.96568627451";
    this.cardTitle = "Shrek";
    this.cardDescription = "This is a picture of shrek. It is a wonderful picture. Don't go near his swamp.";
  }


  static get styles() {
    return css`
      :host {
        display: inline-flex;
      }

      #card {
        background-color: blue;
        border: 5px solid;
        border-radius: 12px;
        width: 300px;
        padding: 8px;
        text-align: center;
      }
      .cardTitleDesign {
        font-size: 30px;
        color: #FF5733;
        margin-top: 10px;
        margin-bottom: 12px;
      }
      img {
        border-radius: 16px;
        border: 2px solid yellow;
        display: block;
        margin: 0px auto 12px auto;
        max-width: 100%;
        height: auto;
      }
      .cardDescriptionDesign {
        font-size: 20px;
        color: #FF5733;
      }
   `;
  }

  render() {
    return html`
    <div id="card">
      <h1 class="cardTitleDesign">${this.cardTitle}</h1>
      <img src="${this.image}" alt="${this.title}"/>
      <p1 class="cardDescriptionDesign">${this.cardDescription}</p1>
    </div>`;
  }

  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      cardTitle: { type: String },
      cardDescription: { type: String }
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
