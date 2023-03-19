const WIDTHS = [125, 175];
const WINDOWS = [2, 3];
const TOTAL_WINDOWS = [40, 70];

class BackgroundStreet extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        background: linear-gradient(to top, #225, #111);
        position: absolute;
        height: 100%;
        width: 100%;
        z-index: -1;
        top: 0;
        display: block;
      }

      .container {
        display: flex;
        gap: 0 0px;
        width: 100%;
        height: 100%;
        align-items: end;
      }

      .building {
        background:
          linear-gradient(#0006, #000d),
          linear-gradient(to right, #0005 15px, transparent 15px);
        width: var(--width);
        height: var(--height);
        clip-path: polygon(0 10px, 15px 0, 100% 0, 100% 100%, 0 100%);
        display: grid;
        grid-template-columns: repeat(var(--windows-number), 10px);
        justify-content: space-evenly;
        padding-top: 25px;
        padding-left: 7px;
        box-sizing: border-box;
      }

      .window {
        background: black;
        width: 15px;
        height: 15px;
      }

      .window.on {
        background: linear-gradient(#382f07, #151201);
        box-shadow: 0 0 2px #ffb90082;
      }

      .window.on::after {
        content: "";
        display: block;
        background: radial-gradient(#e8e82511 60%, #e8e82500 80% 100%);
        width: 100%;
        height: 100%;
        border-radius: 50%;
        scale: 2;
        opacity: 1;
        animation: light 0.1s ease-out infinite alternate;
        z-index: 5;
      }

      @keyframes light {
        0% {
          opacity: 0.75;
          scale: 2.5;
        }

        100% {
          opacity: 0.5;
          scale: 2.6;
        }
      }

      .fog-container {
        width: 100%;
        height: 100%;
        position: absolute;
      }

      .fog {
        width: 50%;
        height: 25%;
        background: #333;
        border-radius: 70%;
        filter: blur(30px);
        mix-blend-mode: hue;
      }
    `;
  }

  generateWindows(building, totalWindows) {
    for (let i = 0; i < totalWindows; i++) {
      const win = document.createElement("div");
      win.classList.add("window");
      const isOn = Math.random() < 0.05;
      if (isOn) { win.classList.add("on"); }
      building.appendChild(win);
    }
  }

  generateBuildings() {
    const container = this.shadowRoot.querySelector(".container");
    for (let i = 0; i < 20; i++) {
      const building = document.createElement("div");
      building.classList.add("building");
      const widthIndex = Math.floor(Math.random() * WIDTHS.length);
      const width = WIDTHS[widthIndex];
      const windowsNumber = WINDOWS[widthIndex];
      const height = 600 + Math.floor(Math.random() * 300);
      building.style.setProperty("--width", `${width}px`);
      building.style.setProperty("--height", `${height}px`);
      building.style.setProperty("--windows-number", windowsNumber);
      this.generateWindows(building, TOTAL_WINDOWS[widthIndex]);
      container.appendChild(building);
    }
  }

  connectedCallback() {
    this.render();
    this.generateBuildings();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${BackgroundStreet.styles}</style>
    <div class="fog-container">
      <div class="fog"></div>
    </div>
    <div class="container">
    </div>`;
  }
}

customElements.define("background-street", BackgroundStreet);
