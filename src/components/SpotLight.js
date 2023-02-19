class SpotLight extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {

      }

      .chasis-container {
        width: 20px;
        transform-origin: 50% 100%;
        animation: move-light 2s linear alternate infinite;
      }

      .chasis {
        width: 20px;
        height: 30px;
        background: #000;
        position: relative;
        z-index: 5;

        translate: 0 5px;
      }

      .base {
        width: 40px;
        height: 15px;
        background: #111;
        position: relative;
        z-index: 5;
        translate: -10px 0;
      }

      .light {
        width: 150px;
        height: 300px;
        background: linear-gradient(transparent, #d1c481 90%);
        position: absolute;
        bottom: 0;
        translate: -65px 0;
        z-index: 1;
        clip-path: polygon(0 0, 50% 100%, 100% 0);
      }

      :host([right]) .chasis-container {
        animation-direction: alternate-reverse;
      }

      @keyframes move-light {
        0% {
          transform: rotate(-20deg);
        }

        100% {
          transform: rotate(20deg);
        }
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${SpotLight.styles}</style>
    <div class="container">
      <div class="chasis-container">
        <div class="chasis"></div>
        <div class="light"></div>
      </div>
      <div class="base"></div>
    </div>`;
  }
}

customElements.define("spot-light", SpotLight);
