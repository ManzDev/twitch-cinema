class CinemaQueue extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        display: block;
      }

      .container {
        display: flex;
      }
    `;
  }

  connectedCallback() {
    this.render();
    this.addEventListener("click", async () => {
      const data = await this.next();
      const { target } = data.effect;
      target.classList.remove("move");
      const event = new CustomEvent("SHOW_RANDOM_TICKET", { composed: true, bubbles: true });
      this.dispatchEvent(event);
    });

    document.addEventListener("USER_RANDOM_ACTION", () => {
      this.randomAction();
    });
  }

  insertUser(user) {
    const container = this.shadowRoot.querySelector(".container");
    container.insertAdjacentElement("beforeend", user);
  }

  getFirstUser() {
    return this.shadowRoot.querySelector("person-viewer");
  }

  next() {
    const user = this.getFirstUser();
    const keyframes = [
      { translate: "0" },
      { translate: "-200px" }
    ];
    const options = {
      duration: 1500,
      easing: "ease-in-out",
      fill: "forwards"
    };

    const animation = user.animate(keyframes, options);
    return animation.finished;
  }

  randomAction() {
    const n = Math.random();
    if (n > 0.5) this.goToCinema();
    else this.goToHome();
  }

  goToCinema() {
    const user = this.shadowRoot.querySelector("person-viewer");
    const pos = getComputedStyle(user).translate;
    console.log("pos", pos);
    const { finished } = user.animate([{ translate: `${pos}` }, { translate: "-520px 0" }], { duration: 2000, easing: "ease-in-out", fill: "forwards" });
    finished.then(data => user.remove());
  }

  goToHome() {
    const user = this.shadowRoot.querySelector("person-viewer");
    const pos = getComputedStyle(user).translate;
    const { finished } = user.animate([{ translate: `${pos}` }, { translate: "1920px 0" }], { duration: 2000, easing: "ease-in-out", fill: "forwards" });
    finished.then(data => user.remove());
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${CinemaQueue.styles}</style>
    <div class="container">
      <person-viewer username="blursoul_"></person-viewer>
      <person-viewer username="jualianvelez1"></person-viewer>
      <person-viewer username="barikoki"></person-viewer>
      <person-viewer username="snowdrive1"></person-viewer>
      <person-viewer username="carlosta18"></person-viewer>
    </div>`;
  }
}

customElements.define("cinema-queue", CinemaQueue);
