(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();class r extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        display: block;
        width: 450px;
        height: 50px;
      }

      .container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
      }

      .roof-wall {
        width: 95%;
        height: 100%;
        background: #a29a8f;
        display: grid;
        align-content: start;
        gap: 6px;
      }

      .cornice {
        background: #c0c0b8;
        width: 100%;
        height: 6px;
        box-shadow: 0 3px 0 #0003;
        position: relative;
      }

      .cornice::before,
      .cornice::after {
        content: "";
        display: block;
        width: 10px;
        height: 6px;
        background: inherit;
        translate: -10px;
      }

      .cornice::after {
        position: absolute;
        top: 0;
        right: 0;
        translate: 10px;
      }

      .cornice:first-child {
        margin-top: 5px;
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${r.styles}</style>
    <div class="container">
      <div class="roof-wall">
        <div class="cornice"></div>
        <div class="cornice"></div>
        <div class="cornice"></div>
      </div>
    </div>`}}customElements.define("cinema-roof",r);class a extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}toggle(){this.toggleAttribute("on")}connectedCallback(){this.render(),this.addEventListener("click",()=>this.toggle())}render(){this.shadowRoot.innerHTML=`
    <style>${a.styles}</style>
    <div class="bulb">
    </div>`}}customElements.define("bulb-image",a);class d extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        --bulb-size: 12px;

        width: 500px;
        height: 110px;
      }

      .container {
        width: 100%;
        height: 100%;
        background: #d32424;
        display: grid;
        place-items: center;
      }

      .text-container {
        border: 3px solid #721514;
        background: #961a1a;
        width: 95%;
        height: 75%;
        display: grid;
        place-items: center;
        position: relative;
      }

      .text {
        font-family: "The Bold", sans-serif;
        font-weight: bold;
        font-size: 3rem;
        color: #fff;
        text-shadow: 0 0 5px #fff;
        translate: 0 -4px;
      }

      .text span {
        color: #222;
        text-shadow: none;
      }

      .text-container::before,
      .text-container::after {
        content: "";
        background: #ffc09e;
        width: 75px;
        height: 5px;
        display: block;
        position: absolute;
        translate: 0 -1px;
      }

      .text-container::before {
        left: 25px;
      }

      .text-container::after {
        right: 25px;
      }

      .bulbs-container {
        width: 98%;
        height: 90%;
        display: grid;
        grid-template-columns: repeat(22, 1fr);
        grid-template-rows: repeat(4, 1fr);
        gap: 8px;
        position: absolute;
      }

      bulb-image:nth-child(23),
      bulb-image:nth-child(25) {
        grid-column-start: 21 span;
      }

      .top, .left, .right, .bottom {
        background: #000;
      }
    `}connectedCallback(){this.render(),this.insertBulbs(),[...this.shadowRoot.querySelectorAll("bulb-image")]}insertBulbs(){const i=this.shadowRoot.querySelector(".bulbs-container");for(let n=0;n<48;n++){const o=document.createElement("bulb-image");i.appendChild(o)}}render(){this.shadowRoot.innerHTML=`
    <style>${d.styles}</style>
    <div class="container">
      <div class="text-container">
        <div class="text">CINEMA<span>NZ</span></div>
        <div class="bulbs-container"></div>
      </div>
    </div>`}}customElements.define("cinema-billboard",d);class c extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${c.styles}</style>
    <div class="container">

    </div>`}}customElements.define("cinema-window",c);class l extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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

      :host([open]) .door-2 {
        translate: -100% 0;
      }
    `}open(){this.toggleAttribute("open")}connectedCallback(){this.render(),this.addEventListener("click",()=>this.open())}render(){this.shadowRoot.innerHTML=`
    <style>${l.styles}</style>
    <div class="container">
      <div class="door door-1"></div>
      <div class="door door-2"></div>
    </div>`}}customElements.define("cinema-door",l);class h extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        display: block;
        width: 475px;
        height: 125px;
        background: linear-gradient(
          to bottom,
          #741414 6px,
          #d32424 6px 38px,
          #e0514d 38px 48px,
          #d32424 48px 58px,
          #e0514d 58px 78px,
          #d32424 78px
        );
      }

      .container {
        height: 100%;
        display: flex;
        justify-content: center;
      }

      .window-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        place-items: center;
        gap: 10px;
        padding: 0 10px;
      }

      .door-container {
        width: 150px;
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${h.styles}</style>
    <div class="container">
      <div class="window-container">
        <cinema-window></cinema-window>
        <cinema-window></cinema-window>
      </div>
      <div class="door-container">
        <cinema-door></cinema-door>
      </div>
      <div class="window-container">
        <cinema-window></cinema-window>
        <cinema-window></cinema-window>
      </div>
    </div>`}}customElements.define("cinema-entrance",h);class p extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        display: block;
        background: black;
        width: 200px;
        height: 100px;
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${p.styles}</style>
    <div class="container">

    </div>`}}customElements.define("cinema-top",p);class b extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        --width: 600px;
        --cinema-film-height: 100px /* calc(var(--width) / 6); */
        --cinema-roof-height: 50px; /* calc(var(--width) / 12); */
        --cinema-billboard-height: 110px; /* calc(var(--width) / 5.45); */
        --cinema-entrance-height: 125px; /* calc(var(--width) / 5.25); */
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${b.styles}</style>
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
    </div>`}}customElements.define("cinema-building",b);
