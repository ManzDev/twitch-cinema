import QRCode from "qrcode-esm";
import streamers from "../assets/streamers.json";
import movies from "../assets/movies.json";

const SCREENS_TOTAL = 20;
const SEATS_TOTAL = 80;

const SCHEDULES = [
  "15:00",
  "18:00",
  "21:00",
  "00:00"
];

const PRICES = [
  "$10 (Oferta Junior)",
  "$18 (Precio Senior)"
];

const getRandomNumber = (max) => Math.floor(Math.random() * max);

class CinemaTicket extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --width: 600px;
        --height: calc(var(--width) * 0.38);
      }

      .ticket-container {
        width: var(--width);
        height: var(--height);
        background: #292b30;
        display: grid;
        grid-template-columns: 1fr 128px;
      }

      .main-ticket {
        background: #111;
        display: grid;
        grid-template-rows: 75px 1fr;
        position: relative;
      }

      .title-group {
        text-align: center;
      }

      .title {
        font-family: "Superstar";
        font-size: 2.5rem;
        color: white;
      }

      .subtitle {
        font-family: "Superstar";
        font-size: 1.5rem;
        color: #da35c0;
        line-height: 10%;
      }

      .data li {
        font-family: "Free Pixel";
        font-size: 1.2rem;
        font-weight: normal;
        color: #aaa;
        list-style-type: none;
      }

      .data li:last-child {
        margin-top: 0.5rem;
        padding-top: 0.5rem;
        font-weight: bold;
        border-top: 1px solid #aaa;
      }

      .data span {
        color: #da35c0;
      }

      .manz {
        width: 120px;
        position: absolute;
        bottom: 0;
        right: 15px;
      }

      .sep {
        display: inline-block;
        width: 0.6rem;
      }

      .bar {
        display: grid;
        place-items: start center;
      }

      .qr {
        margin-top: 1em;
        max-width: 75%;
      }

      .bar-ticket {
        background: #f2368a;
        display: flex;
        background-image: url("images/seal.png");
        background-repeat: no-repeat;
        background-size: 90%;
        background-position: 25px 130px;
        background-blend-mode: multiply;
        border-left: 2px dashed #111;
      }
    `;
  }

  init() {
    const randomStreamerIndex = getRandomNumber(streamers.length);
    this.streamer = streamers[randomStreamerIndex];

    const randomMovieIndex = getRandomNumber(movies.length);
    this.movie = movies[randomMovieIndex];

    this.screenNumber = String(1 + getRandomNumber(SCREENS_TOTAL)).padStart(2, "0");
    this.seatNumber = 1 + getRandomNumber(SEATS_TOTAL);

    const randomScheduleIndex = getRandomNumber(SCHEDULES.length);
    this.schedule = SCHEDULES[randomScheduleIndex];

    const randomPriceIndex = getRandomNumber(PRICES.length);
    this.price = PRICES[randomPriceIndex];

    const date = new Date();
    this.date = {
      day: String(date.getDate()).padStart(2, "0"),
      month: String(date.getMonth() + 1).padStart(2, "0"),
      year: date.getFullYear()
    };

    this.url = "https://twitch.tv/" + this.streamer;
  }

  async generateQR() {
    this.qr = await QRCode.toDataURL(this.url, { type: "image/png" });
  }

  async connectedCallback() {
    this.init();
    await this.generateQR();
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${CinemaTicket.styles}</style>
    <div class="ticket-container">
      <div class="main-ticket">
        <div class="title-group">
          <div class="title">CINEMANZ TICKET</div>
          <div class="subtitle">${this.movie}</div>
        </div>
        <div class="data">
          <ul>
            <li>FECHA: <span>${this.date.day}</span>/<span>${this.date.month}</span>/<span>${this.date.year}</span> HORA: <span>${this.schedule}</span></li>
            <li>SALA: <span>${this.screenNumber}</span> <span class="sep"></span>ASIENTO: <span>${this.seatNumber}</span></li>
            <li>STREAMER: <span>${this.streamer}</span></li>
            <li class="price">PRECIO: <span>${this.price}</span></li>
          </ul>
        </div>
        <img class="manz" src="images/manzdev.png" alt="ManzDev">
      </div>
      <div class="bar-ticket">
        <div class="bar">
          <img class="qr" src="${this.qr}" alt="${this.url}">
        </div>
        <div class="bar-number"></div>
      </div>
    </div>`;
  }
}

customElements.define("cinema-ticket", CinemaTicket);
