import "./CinemaWindow.js";
import "./CinemaDoor.js";

class CinemaEntrance extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        display: block;
        width: 475px;
        height: 125px;
        background: linear-gradient(
          to bottom,
          #741414 6px,
          #d32424 6px 38px,
          #e0514d 38px 48px,
          #d32424 48px 58px,
          #e0514d 58px 78px,
          #d32424 78px
        );
      }

      .container {
        height: 100%;
        display: flex;
        justify-content: center;
      }

      .window-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        place-items: center;
        gap: 10px;
        padding: 0 10px;
      }

      .door-container {
        width: 150px;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${CinemaEntrance.styles}</style>
    <div class="container">
      <div class="window-container">
        <cinema-window></cinema-window>
        <cinema-window></cinema-window>
      </div>
      <div class="door-container">
        <cinema-door></cinema-door>
      </div>
      <div class="window-container">
        <cinema-window></cinema-window>
        <cinema-window></cinema-window>
      </div>
    </div>`;
  }
}

customElements.define("cinema-entrance", CinemaEntrance);
