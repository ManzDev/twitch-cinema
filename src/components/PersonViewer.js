import personTemplate from "./PersonViewer.css?raw";

const SKINS = [
  "naked",
  "prisoner",
  "child",
  "superman",
  "wednesday",
  "sport1",
  "krillin",
  "homer",
  "shaggy",
  "plomo",
  "blonde",
  "sailor-moon",
  "sailor-marte",
  "sailor-jupiter",
  "sailor-mercurio",
  "sailor-venus",
  "chrisvdev",
  "moda",
  "mike",
  "goose",
  "ghost",
  "police",
  "joker",
  "security",
  "sheldon-doppler",
  "hulk",
  "leonardo",
  "donatello",
  "michelangelo",
  "raphael",
  "medieval-soldier",
  "lego",
  "mario",
  "invisible-man",
  "manzdev",
  "padawanstrainer"
];

class PersonViewer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  init() {
    this.style.setProperty("--color", this.getAttribute("color"));
    this.style.setProperty("--delay-jump-time", Math.floor(Math.random() * 2) + "s");
    this.style.setProperty("--delay-rotate-time", Math.floor(Math.random() * 2) + "s");
    this.username = this.getAttribute("username") || "Sr. Anónimo";
  }

  static get styles() {
    return /* css */`
      :host {
        position: relative;
        z-index: 10;
      }

      .person-container {
        width: 40px;
        height: 175px;
        margin: 0 0.5em;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: end;
      }

      .image {
        position: absolute;
        translate: -40px -250px;
      }

      .person {
        width: 30px;
        height: var(--height, 85px);
        background:
          linear-gradient(
            to bottom,
            #000 5%,
            #cb9661 6% 25%,
            #fff 26% 60%,
            #030360 61% 90%,
            #3b1e07 91%
          );
      }

      :host(.move) .person {
        animation:
          jump 0.3s infinite steps(3) alternate var(--delay-jump-time, 0s),
          rotate 0.4s infinite steps(9) alternate var(--delay-rotate-time, 0s);
      }

      .username {
        font-family: "Enter Command";
        font-size: 1.5rem;
        color: #fff;
        display: block;
        transform: translate(5%, -125%) rotate(299deg);
        text-shadow:
          0 0 5px var(--color),
          1px 1px 0 #000;
      }

      :host(.noname) .username {
        display: none;
      }

      ${personTemplate}

      @keyframes jump {
        from {
          transform: translateY(-3px);
        }

        to {
          transform: translateY(3px);
        }
      }

      @keyframes rotate {
        from {
          rotate: 8deg;
        }

        to {
          rotate: -8deg;
        }
      }
    `;
  }

  connectedCallback() {
    this.init();
    this.render();
    this.classList.add("move");
    // this.setHeight();
    const skinIndex = ~~(Math.random() * SKINS.length);
    const person = this.shadowRoot.querySelector(".person");
    const skinName = SKINS[skinIndex];
    person.classList.add(skinName);
  }

  setImage(img) {
    const image = this.shadowRoot.querySelector(".image");
    image.insertAdjacentElement("afterbegin", img);
    setTimeout(() => this.removeImage(), 3000);
  }

  removeImage() {
    const img = this.shadowRoot.querySelector(".image img");
    img.remove();
    const event = new CustomEvent("USER_GO_HOME", { composed: true, bubbles: true });
    this.dispatchEvent(event);
  }

  setHeight() {
    const size = 85 + Math.floor(Math.random() * 20);
    this.style.setProperty("--height", `${size}px`);
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${PersonViewer.styles}</style>
    <div class="image">
    </div>
    <div class="person-container">
      <span class="username">${this.username}</span>
      <div class="person"></div>
    </div>`;
  }
}

customElements.define("person-viewer", PersonViewer);
