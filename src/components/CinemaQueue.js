const toggleDoor = (component) => {
  const event = new CustomEvent("CINEMA_DOOR_TOGGLE", { composed: true, bubbles: true });
  component.dispatchEvent(event);
};

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

      person-viewer {
        transition: translate 1s;
      }
    `;
  }

  connectedCallback() {
    this.render();
    this.processQueue();

    document.addEventListener("USER_NO_MONEY", () => this.showNoMoney());
    document.addEventListener("USER_GO_HOME", () => this.goToHome());
    document.addEventListener("USER_GO_CINEMA", () => this.goToCinema());
  }

  async processQueue() {
    const users = this.getTotalUsers();
    if (users > 0) {
      await this.next();
    } else {
      setTimeout(async () => await this.processQueue(), 5000);
    }
  }

  async next() {
    const data = await this.moveNextUser();
    const { target } = data.effect;
    target.classList.remove("move");

    const n = Math.random();

    if (n > 0.5) {
      const event = new CustomEvent("SHOW_RANDOM_TICKET", { composed: true, bubbles: true });
      this.dispatchEvent(event);
    } else {
      this.showNoMoney();
    }
  }

  insertUser(user) {
    const container = this.shadowRoot.querySelector(".container");
    container.insertAdjacentElement("beforeend", user);
  }

  getFirstUser() {
    return this.shadowRoot.querySelector("person-viewer");
  }

  getTotalUsers() {
    return this.shadowRoot.querySelectorAll("person-viewer").length;
  }

  moveNextUser() {
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

  goToCinema() {
    const user = this.shadowRoot.querySelector("person-viewer");
    const pos = getComputedStyle(user).translate;

    setTimeout(() => toggleDoor(this), 1250);

    const { finished } = user.animate([{ translate: `${pos}` }, { translate: "-540px 0" }], { duration: 2000, easing: "ease-in-out", fill: "forwards" });
    finished.then(data => this.enterToCinema(user));
  }

  enterToCinema(user) {
    user.classList.add("noname");
    const keyframes = [
      { scale: "1", opacity: "1", transformOrigin: "50% 75%" },
      { scale: "0.1", opacity: "0", transformOrigin: "50% 75%" }
    ];
    const options = {
      duration: 1500,
      easing: "ease-in-out",
      fill: "forwards"
    };

    const { finished } = user.animate(keyframes, options);
    finished.then(data => {
      toggleDoor(this);
      this.finishStage(user);
    });
  }

  showNoMoney() {
    const user = this.shadowRoot.querySelector("person-viewer");
    const img = document.createElement("img");
    img.src = "images/no-money.gif";
    img.alt = "No money";
    user.setImage(img);
  }

  goToHome() {
    const user = this.shadowRoot.querySelector("person-viewer");
    const pos = getComputedStyle(user).translate;
    const { finished } = user.animate([{ translate: `${pos}` }, { translate: "1920px 0" }], { duration: 2000, easing: "ease-in-out", fill: "forwards" });
    finished.then(data => this.finishStage(user));
  }

  finishStage(user) {
    user.remove();
    this.processQueue();
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
