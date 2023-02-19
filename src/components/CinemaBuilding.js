import "./CinemaRoof.js";
import "./CinemaBillboard.js";
import "./CinemaEntrance.js";
import "./CinemaTop.js";
import "./CinemaTicketStore.js";
import "./SpotLight.js";

class CinemaBuilding extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --width: 600px;
        --cinema-film-height: 100px /* calc(var(--width) / 6); */
        --cinema-roof-height: 50px; /* calc(var(--width) / 12); */
        --cinema-billboard-height: 110px; /* calc(var(--width) / 5.45); */
        --cinema-entrance-height: 125px; /* calc(var(--width) / 5.25); */

        display: grid;
        grid-template-columns: var(--width) 100px;
        align-items: end;
      }

      .container {
        display: grid;
        grid-template-rows:
          var(--cinema-film-height)
          var(--cinema-roof-height)
          var(--cinema-billboard-height)
          var(--cinema-entrance-height);
        width: var(--width);
      }

      .container > div {
        display: grid;
        justify-content: center;
      }

      spot-light {
        position: absolute;
        translate: 45px 0;
        z-index: 5;
      }

      spot-light[right] {
        translate: 525px 0;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${CinemaBuilding.styles}</style>
    <spot-light></spot-light>
    <div class="container">
      <div class="top-container">
        <cinema-top></cinema-top>
      </div>
      <div class="roof-container">
        <cinema-roof></cinema-roof>
      </div>
      <div class="billboard-container">
        <cinema-billboard></cinema-billboard>
      </div>
      <div class="entrance-container">
        <cinema-entrance></cinema-entrance>
      </div>
    </div>
    <spot-light right></spot-light>
    <cinema-ticket-store></cinema-ticket-store>
    `;
  }
}

customElements.define("cinema-building", CinemaBuilding);
