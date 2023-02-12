class BulbImage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --on: gold;
        --off: #674c14;
      }

      .bulb {
        width: var(--bulb-size);
        height: var(--bulb-size);
        background: var(--off);
        box-shadow: 0 0 0 #000;
        border-radius: 50%;
        transition: background 0.5s;
      }

      :host([on]) .bulb {
        background: var(--on);
        box-shadow: 0 0 5px var(--on);
      }
    `;
  }

  toggle() {
    this.toggleAttribute("on");
  }

  connectedCallback() {
    this.render();
    this.addEventListener("click", () => this.toggle());
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${BulbImage.styles}</style>
    <div class="bulb">
    </div>`;
  }
}

customElements.define("bulb-image", BulbImage);
