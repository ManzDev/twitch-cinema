class CinemaWindow extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --size: 42px;
      }

      .container {
        width: calc(var(--size) + calc(var(--size) * 0.4));
        height: var(--size);
        border: 5px solid #dbdbdb;
        background: #4cd3bf;
        background-image: linear-gradient(
          140deg,
          #30aa9d 37%,
          transparent 38% 45%,
          #30aa9d 46% 70%,
          transparent 71%
        );
        box-shadow: 0 4px 0 #0006;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${CinemaWindow.styles}</style>
    <div class="container">

    </div>`;
  }
}

customElements.define("cinema-window", CinemaWindow);
