class CinemaTicketStore extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        translate: -63px 0;
      }

      .container {
        display: grid;
        grid-template-rows: 10fr 45fr 5fr 40fr;
        height: 125px;
      }

      .top-store {
        background: #d32424;
      }

      .window-store-container {
        display: grid;
        grid-template-columns: 3fr 1fr;
      }

      .window-store {
        background: linear-gradient(#5e1111 0 5px, #961a1a 5px);
        font-family: "The Bold";
        font-size: 0.65rem;
        color: #e2524e;
        display: grid;
        place-items: center;
        text-align: center;
      }

      .window {
        width: 50%;
        background: linear-gradient(140deg, #23897a 0 15px, #4cd3bf 16px);
      }

      .medium-store {
        background: #d32424;
      }

      .bottom-store {
        width: 75%;
        background: linear-gradient(#5e1111 0 5px, #961a1a 5px);
        position: relative;
      }

      .bottom-store::after {
        content: "";
        display: block;
        position: absolute;
        height: 50%;
        width: 25px;
        background: linear-gradient(135deg, #863d2f 0 30%, #c1604d 31%);
        right: -25px;
        clip-path: polygon(0 0, 0 100%, 100% 0);
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${CinemaTicketStore.styles}</style>
    <div class="container">
      <div class="top-store"></div>
      <div class="window-store-container">
        <div class="window-store">
          <span>Compre sus tickets ➜</span>
        </div>
        <div class="window"></div>
      </div>
      <div class="medium-store"></div>
      <div class="bottom-store"></div>
    </div>`;
  }
}

customElements.define("cinema-ticket-store", CinemaTicketStore);
