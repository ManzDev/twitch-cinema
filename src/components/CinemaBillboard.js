import "./BulbImage.js";

class CinemaBillboard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --bulb-size: 12px;

        width: 500px;
        height: 110px;
      }

      .container {
        width: 100%;
        height: 100%;
        background: #d32424;
        display: grid;
        place-items: center;
      }

      .text-container {
        border: 3px solid #721514;
        background: #961a1a;
        width: 95%;
        height: 75%;
        display: grid;
        place-items: center;
        position: relative;
      }

      .text {
        font-family: "The Bold", sans-serif;
        font-weight: bold;
        font-size: 3rem;
        color: #fff;
        text-shadow: 0 0 5px #fff;
        translate: 0 -4px;
      }

      .text span {
        color: #222;
        text-shadow: none;
      }

      .text-container::before,
      .text-container::after {
        content: "";
        background: #ffc09e;
        width: 75px;
        height: 5px;
        display: block;
        position: absolute;
        translate: 0 -1px;
      }

      .text-container::before {
        left: 25px;
      }

      .text-container::after {
        right: 25px;
      }

      .bulbs-container {
        width: 98%;
        height: 90%;
        display: grid;
        grid-template-columns: repeat(22, 1fr);
        grid-template-rows: repeat(4, 1fr);
        gap: 8px;
        position: absolute;
      }

      bulb-image:nth-child(23),
      bulb-image:nth-child(25) {
        grid-column-start: 21 span;
      }

      .top, .left, .right, .bottom {
        background: #000;
      }
    `;
  }

  connectedCallback() {
    this.render();
    this.insertBulbs();
    const bulbs = [...this.shadowRoot.querySelectorAll("bulb-image")];
  }

  insertBulbs() {
    const container = this.shadowRoot.querySelector(".bulbs-container");
    for (let i = 0; i < 48; i++) {
      const bulb = document.createElement("bulb-image");
      container.appendChild(bulb);
    }
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${CinemaBillboard.styles}</style>
    <div class="container">
      <div class="text-container">
        <div class="text">CINEMA<span>NZ</span></div>
        <div class="bulbs-container"></div>
      </div>
    </div>`;
  }
}

customElements.define("cinema-billboard", CinemaBillboard);
