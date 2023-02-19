import "./BulbImage.js";

const BULBS_TOTAL = 48;

// const range = (number) => [...Array(number)].map((item, index) => index);

let currentCycleBulb = 0;

const BULBS_PATH = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  23, 25,
  47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26,
  24, 22
];

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
        transition: opacity 0.5s;
      }

      .text span {
        color: #222;
        text-shadow: 0 0 0 #fff0;
        animation: lightoff 6s linear infinite;
      }

      @keyframes lightoff {
        0%, 50%, 56%, 63%, 100% {
          color: #222;
          text-shadow: 0 0 0 #fff0;
        }

        51%, 55%,
        60%, 62% {
          color: #fff;
          text-shadow: 0 0 5px #fff;
        }
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
    // this.startBlinkEffect();
    this.startCycleEffect();
    const bulbs = [...this.shadowRoot.querySelectorAll("bulb-image")];
  }

  insertBulbs() {
    const container = this.shadowRoot.querySelector(".bulbs-container");
    for (let i = 0; i < BULBS_TOTAL; i++) {
      const bulb = document.createElement("bulb-image");
      container.appendChild(bulb);
    }
  }

  startBlinkEffect() {
    const bulbs = [...this.shadowRoot.querySelectorAll("bulb-image")];
    bulbs.forEach(bulb => bulb.toggle());
    setTimeout(() => this.loop(), 1500);
  }

  startCycleEffect() {
    const bulbs = [...this.shadowRoot.querySelectorAll("bulb-image")];
    const currentBulb = BULBS_PATH[currentCycleBulb];
    currentCycleBulb = (currentCycleBulb + 1) % BULBS_PATH.length;
    bulbs[currentBulb].blink(250);
    setTimeout(() => this.startCycleEffect(), 50);
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
