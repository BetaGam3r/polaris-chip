import { LitElement, html, css } from 'lit';
import "@haxtheweb/meme-maker/meme-maker.js";

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
    this.fancy = false;
  }


  static get styles() {
    return css`
      :host {
        display: inline-block;
      }
      :host([fancy]) #card { 
        background-color: green;
        color: red;
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
      details summary {
        text-align: left;
        font-size: 20px;
        padding: 8px 0;
      }
      details[open] summary {
        font-weight: bold;
      }
      details div {
      border: 2px solid black;
      text-align: left;
      padding: 8px;
      height: 70px;
      overflow: auto;
      }
      img {
        border-radius: 16px;
        border: 2px solid yellow;
        display: block;
        margin: 0px auto 12px auto;
        max-width: 100%;
        height: auto;
      }
      button {
        background-color: yellow;
        font-weight: bold;
        padding: 8px 16px;
        border-radius: 16px;
      }
      button:hover {
        color: red;
      }
   `;
  }

 // put this anywhere on the MyCard class; just above render() is probably good
openChanged(e) {
  console.log(e);
  if (e.target.getAttribute('open') !== null) {
    this.fancy = true;
  }
  else {
    this.fancy = false;
  }
}

  render() {
    return html`
    <div id="card">
      <h1 class="cardTitleDesign">${this.cardTitle}</h1>
      <img src="${this.image}" alt="${this.title}"/>
      <details ?open="${this.fancy}" @toggle="${this.openChanged}">
        <summary>Description</summary>
        <div>
          <slot></slot>
          <a href="https://hax.psu.edu/">
            <button>Details</button>
          </a>
        </div>
      </details>
    </div>`;
  }



  static get properties() {
    return {
      fancy: { type: Boolean, reflect: true },
      title: { type: String },
      image: { type: String },
      cardTitle: { type: String }
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
