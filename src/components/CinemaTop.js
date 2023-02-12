class CinemaTop extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        display: block;
        background: black;
        width: 200px;
        height: 100px;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${CinemaTop.styles}</style>
    <div class="container">

    </div>`;
  }
}

customElements.define("cinema-top", CinemaTop);
