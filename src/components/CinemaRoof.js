class CinemaRoof extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        display: block;
        width: 450px;
        height: 50px;
      }

      .container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
      }

      .roof-wall {
        width: 95%;
        height: 100%;
        background: #a29a8f;
        display: grid;
        align-content: start;
        gap: 6px;
      }

      .cornice {
        background: #c0c0b8;
        width: 100%;
        height: 6px;
        box-shadow: 0 3px 0 #0003;
        position: relative;
      }

      .cornice::before,
      .cornice::after {
        content: "";
        display: block;
        width: 10px;
        height: 6px;
        background: inherit;
        translate: -10px;
      }

      .cornice::after {
        position: absolute;
        top: 0;
        right: 0;
        translate: 10px;
      }

      .cornice:first-child {
        margin-top: 5px;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${CinemaRoof.styles}</style>
    <div class="container">
      <div class="roof-wall">
        <div class="cornice"></div>
        <div class="cornice"></div>
        <div class="cornice"></div>
      </div>
    </div>`;
  }
}

customElements.define("cinema-roof", CinemaRoof);
