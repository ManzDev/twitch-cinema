class CinemaDoor extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        width: 100%;
        height: 100%;
        display: grid;
        align-items: end;
      }

      .container {
        display: flex;

        width: 95%;
        height: 75%;
        background: black;
        border: 4px solid #c9b8b1;
        border-bottom-width: 0;
        border-top-width: 8px;
      }

      .door {
        box-sizing: border-box;
        width: 50%;
        height: 100%;
        border: 4px solid #c9b8b1;
        border-bottom-width: 0;
        background: linear-gradient(
          140deg,
          #30aa9d 50%,
          #4cd3bf 51% 60%,
          #30aa9d 61% 65%,
          #4cd3bf 66%
        );
        transition: all 0.5s ease;
      }

      .door-2 {
        z-index: 15;
        position: relative;
      }

      :host([open]) .door-2 {
        translate: -100% 0;
      }
    `;
  }

  open() {
    this.toggleAttribute("open");
  }

  connectedCallback() {
    this.render();
    this.addEventListener("click", () => this.open());
    document.addEventListener("CINEMA_DOOR_TOGGLE", () => this.open());
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${CinemaDoor.styles}</style>
    <div class="container">
      <div class="door door-1"></div>
      <div class="door door-2"></div>
    </div>`;
  }
}

customElements.define("cinema-door", CinemaDoor);
