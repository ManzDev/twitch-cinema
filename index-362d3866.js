(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function i(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=i(o);fetch(o.href,n)}})();class ce extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    <style>${ce.styles}</style>
    <div class="container">
      <div class="roof-wall">
        <div class="cornice"></div>
        <div class="cornice"></div>
        <div class="cornice"></div>
      </div>
    </div>`}}customElements.define("cinema-roof",ce);class le extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}toggle(){this.toggleAttribute("on")}blink(e){this.setAttribute("on",""),setTimeout(()=>this.off(),e)}on(){this.setAttribute("on","")}off(){this.removeAttribute("on")}connectedCallback(){this.render(),this.addEventListener("click",()=>this.toggle())}render(){this.shadowRoot.innerHTML=`
    <style>${le.styles}</style>
    <div class="bulb">
    </div>`}}customElements.define("bulb-image",le);const We=48;let W=0;const Ae=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,23,25,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,24,22];class de extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
        transition: opacity 0.5s;
      }

      .text span {
        color: #222;
        text-shadow: 0 0 0 #fff0;
        animation: lightoff 6s linear infinite;
      }

      @keyframes lightoff {
        0%, 50%, 56%, 63%, 100% {
          color: #222;
          text-shadow: 0 0 0 #fff0;
        }

        51%, 55%,
        60%, 62% {
          color: #fff;
          text-shadow: 0 0 5px #fff;
        }
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
    `}connectedCallback(){this.render(),this.insertBulbs(),this.startCycleEffect(),[...this.shadowRoot.querySelectorAll("bulb-image")]}insertBulbs(){const e=this.shadowRoot.querySelector(".bulbs-container");for(let i=0;i<We;i++){const r=document.createElement("bulb-image");e.appendChild(r)}}startBlinkEffect(){[...this.shadowRoot.querySelectorAll("bulb-image")].forEach(i=>i.toggle()),setTimeout(()=>this.loop(),1500)}startCycleEffect(){const e=[...this.shadowRoot.querySelectorAll("bulb-image")],i=Ae[W];W=(W+1)%Ae.length,e[i].blink(250),setTimeout(()=>this.startCycleEffect(),50)}render(){this.shadowRoot.innerHTML=`
    <style>${de.styles}</style>
    <div class="container">
      <div class="text-container">
        <div class="text">CINEMA<span>NZ</span></div>
        <div class="bulbs-container"></div>
      </div>
    </div>`}}customElements.define("cinema-billboard",de);class ue extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    <style>${ue.styles}</style>
    <div class="container">

    </div>`}}customElements.define("cinema-window",ue);class fe extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    <style>${fe.styles}</style>
    <div class="container">
      <div class="door door-1"></div>
      <div class="door door-2"></div>
    </div>`}}customElements.define("cinema-door",fe);class he extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    <style>${he.styles}</style>
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
    </div>`}}customElements.define("cinema-entrance",he);class ge extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        display: block;
        background: url("images/manzdev.png");
        background-size: cover;
        image-rendering: pixelated;
        width: 200px;
        height: 100px;
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${ge.styles}</style>
    <div class="container">

    </div>`}}customElements.define("cinema-top",ge);class me extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${me.styles}</style>
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
    </div>`}}customElements.define("cinema-ticket-store",me);class pe extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
      :host {

      }

      .chasis-container {
        width: 20px;
        transform-origin: 50% 100%;
        animation: move-light 2s linear alternate infinite;
      }

      .chasis {
        width: 20px;
        height: 30px;
        background: #000;
        position: relative;
        z-index: 5;

        translate: 0 5px;
      }

      .base {
        width: 40px;
        height: 15px;
        background: #111;
        position: relative;
        z-index: 5;
        translate: -10px 0;
      }

      .light {
        width: 150px;
        height: 300px;
        background: linear-gradient(transparent, #d1c481 90%);
        position: absolute;
        bottom: 0;
        translate: -65px 0;
        z-index: 1;
        clip-path: polygon(0 0, 50% 100%, 100% 0);
      }

      :host([right]) .chasis-container {
        animation-direction: alternate-reverse;
      }

      @keyframes move-light {
        0% {
          transform: rotate(-20deg);
        }

        100% {
          transform: rotate(20deg);
        }
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${pe.styles}</style>
    <div class="container">
      <div class="chasis-container">
        <div class="chasis"></div>
        <div class="light"></div>
      </div>
      <div class="base"></div>
    </div>`}}customElements.define("spot-light",pe);class be extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${be.styles}</style>
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
    `}}customElements.define("cinema-building",be);const Ze=`/* Autor: the_sandok */
.naked {
  background:
    linear-gradient(
      to bottom,
      #000 8%,
      #cb9661 9% 30%,
      #f2c30f 31% 33%,
      #cb9661 34% 60%,
      #7e8c8d 61% 64%,
      #fff 65% 79%,
      #cb9661 80% 94%,
      #6e4111 95%
    );
}

.prisoner {
  background:
    linear-gradient(
      to bottom,
      #6e4111 2%,
      #cb9661 3% 28%,
      #fff 29% 35%,
      #000 36% 42%,
      #fff 43% 49%,
      #000 50% 56%,
      #fff 57% 63%,
      #000 64% 70%,
      #fff 71% 77%,
      #000 78% 85%,
      #fff 86% 92%,
      #1a2f35 93%
    );
}

.child {
  background:
    linear-gradient(
      to bottom,
      transparent 30%,
      #813b15 31% 38%,
      #cb9661 39% 55%,
      #f1c20c 56% 70%,
      #1689ff 71% 82%,
      #cb9661 83% 89%,
      #fff 90% 94%,
      #000 95%
    );
}

.superman {
  background:
    linear-gradient(
      to bottom,
      #813b15 6%,
      #cb9661 7% 30%,
      #0152b8 31% 60%,
      #f2e506 61% 62%,
      #cb0503 63% 72%,
      #0152b8 73% 90%,
      #cb0503 91%
    );
}

.wednesday {
  background:
    linear-gradient(
      to bottom,
      #000 17%,
      #cb9661 18% 30%,
      #fff 31% 33%,
      #000 34% 82%,
      #cb9661 83% 89%,
      #fff 90% 94%,
      #000 95%
    );
}

.goose {
  background:
    linear-gradient(
      to bottom,
      transparent 50%,
      #d8d3c4 51% 59%,
      #e96522 60% 64%,
      #d8d3c4 65% 94%,
      #e96522 95%
    );
}

/* Autor: davidd */
.sport1 {
  background:
    linear-gradient(
      to bottom,
      #242726 5%,
      #f7be81 6% 25%,
      #fff 26% 60%,
      #000 61% 90%,
      #f00 91%
    );
}

/* Autor: dhardysd */
.krillin {
  background:
    linear-gradient(
      to bottom,
      #f2cddb 6% 25%,
      #ed5420 26% 55%,
      #184aef 26% 60%,
      #ed5420 61% 90%,
      #184aef 91%
    );
}

.homer {
  background:
    linear-gradient(
      to bottom,
      #f0d101 10% 25%,
      #f2f2f2 30% 55%,
      #f0d101 26% 60%,
      #6ac6f1 63% 90%,
      #6c697b 91%
    );
}

.shaggy {
  background:
    linear-gradient(
      to bottom,
      #e59e3e 10%,
      #f2d1c3 10% 25%,
      #8eb25e 30% 65%,
      #a33f35 63% 90%,
      #435155 91%
    );
}

.plomo {
  background:
    linear-gradient(
      to bottom,
      #b9bab2 10%,
      #d2b1a2 10% 25%,
      #232125 30% 65%,
      #546771 63% 90%,
      #d4d4d4 91%
    );
}

.blonde {
  background:
    linear-gradient(
      to bottom,
      #fffa15 0%,
      #fcdcfa 20% 35%,
      #000 0% 50%,
      #fcdcfa 0% 60%,
      #000 55% 70%,
      #fcdcfa 5% 85%,
      #d32423 0% 95%
    );
}

/* Author: nayuhi */
.sailor-moon {
  background:
    linear-gradient(
      to bottom,
      #fde024 10%,
      #fce3cd 10% 25%,
      #fd3653 25% 25.5%,
      #fce3cd 10% 28%,
      #3e499b 28% 34%,
      #fd3653 34% 40%,
      #f2f2f2 41% 55%,
      #3e499b 26% 66%,
      #fce3cd 65% 84%,
      #fd3653 85%
    );
}

.sailor-marte {
  background:
    linear-gradient(
      to bottom,
      #000 10%,
      #fce3cd 10% 25%,
      #d84631 25% 25.5%,
      #fce3cd 10% 28%,
      #d84631 28% 34%,
      #362763 34% 40%,
      #f2f2f2 41% 55%,
      #d84631 26% 66%,
      #fce3cd 65% 92%,
      #d84631 92%
    );
}

.sailor-jupiter {
  background:
    linear-gradient(
      to bottom,
      #5e3c1b 10%,
      #fce3cd 10% 25%,
      #73ab33 25% 25.5%,
      #fce3cd 10% 28%,
      #73ab33 28% 34%,
      #de8dc5 34% 40%,
      #f2f2f2 41% 55%,
      #73ab33 26% 66%,
      #fce3cd 65% 84%,
      #73ab33 85%
    );
}

.sailor-mercurio {
  background:
    linear-gradient(
      to bottom,
      #486361 10%,
      #fce3cd 10% 25%,
      #7da0db 25% 25.5%,
      #fce3cd 10% 28%,
      #7da0db 28% 34%,
      #cde2f9 34% 40%,
      #f2f2f2 41% 55%,
      #7da0db 26% 66%,
      #fce3cd 65% 84%,
      #7da0db 85%
    );
}

.sailor-venus {
  background:
    linear-gradient(
      to bottom,
      #fde024 10%,
      #fce3cd 10% 25%,
      #e19136 25% 25.5%,
      #fce3cd 10% 28%,
      #e19136 28% 34%,
      #362763 34% 40%,
      #f2f2f2 41% 55%,
      #e19136 26% 66%,
      #fce3cd 65% 88%,
      #e19136 88% 90%,
      #fce3cd 65% 92%,
      #e19136 92%
    );
}

/* Autor: Chrisvdev */
.chrisvdev {
  background:
    linear-gradient(
      to bottom,
      #ce8f8a 25%,
      #292f31 26% 60%,
      #2b5566 61% 90%,
      #3b1e07 91%
    );
}

.ghost {
  background:
    linear-gradient(
      to bottom,
      rgb(240 240 240 / 100%) 0%,
      rgb(187 187 187 / 50%) 65%,
      rgb(103 103 103 / 10%) 100%
    );
}

/* Autor: GariCarandai */
.mike {
  background:
    linear-gradient(
      to bottom,
      transparent 65%,
      #a7da3d 66%
    );
}

/* Autor: Enrique */
.moda {
  background:
    linear-gradient(
      to bottom,
      #303018 0%,
      #fcdcfa 10% 35%,
      #241e24 35% 60%,
      #000 55% 85%,
      #f0f7f7 0% 95%
    );
}

.police {
  background:
    linear-gradient(
      to bottom,
      #041643 0% 10%,
      #6c6a15 11% 13%,
      #fcdcfa 14% 35%,
      #041643 35% 60%,
      #000 61% 63%,
      #041643 55% 85%,
      #000 0% 95%
    );
}

.security {
  width: 40px;
  height: 95px;
  background:
    linear-gradient(
      to bottom,
      #cca356 0% 35%,
      #fcf60a 35% 60%,
      #141413 61% 85%,
      #000 0% 95%
    );
}

/* Autor: Gordon_F */
.joker {
  background:
    linear-gradient(
      to bottom,
      #538f1c 5%,
      #ffff 6% 18%,
      #e50914 19% 22%,
      #ffff 23% 25%,
      #511847 26% 58%,
      #3b1e07 59% 60%,
      #511847 61% 90%,
      #3b1e07 91%
    );
}

.sheldon-doppler {
  background:
    linear-gradient(
      to right,
      #000 4%,
      #ffff 5% 10%,
      #000 11% 19%,
      #ffff 20% 29%,
      #000 30% 41%,
      #ffff 42% 59%,
      #000 60% 71%,
      #ffff 72% 81%,
      #000 82% 90%,
      #ffff 91% 96%,
      #000 100%
    );
}

.hulk {
  width: 50px;
  height: 115px;
  background:
    linear-gradient(
      to bottom,
      #391f07 5%,
      #23830e 6% 61%,
      #895508 62% 80%,
      #198908 90%
    );
}
`,Te=["naked","prisoner","child","superman","wednesday","sport1","krillin","homer","shaggy","plomo","blonde","sailor-moon","sailor-marte","sailor-jupiter","sailor-mercurio","sailor-venus","chrisvdev","moda","mike","goose","ghost","police","joker","security","sheldon-doppler","hulk"];class we extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}init(){this.style.setProperty("--color",this.getAttribute("color")),this.style.setProperty("--delay-jump-time",Math.floor(Math.random()*2)+"s"),this.style.setProperty("--delay-rotate-time",Math.floor(Math.random()*2)+"s"),this.username=this.getAttribute("username")||"Sr. Anónimo"}static get styles(){return`
      :host {
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
        animation:
          jump 0.3s infinite steps(3) alternate var(--delay-jump-time, 0s),
          rotate 0.4s infinite steps(9) alternate var(--delay-rotate-time, 0s);
        /*position: absolute;*/
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

      ${Ze}

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
    `}connectedCallback(){this.init(),this.render();const e=~~(Math.random()*Te.length),i=this.shadowRoot.querySelector(".person"),r=Te[e];i.classList.add(r)}setHeight(){const e=85+Math.floor(Math.random()*20);this.style.setProperty("--height",`${e}px`)}render(){this.shadowRoot.innerHTML=`
    <style>${we.styles}</style>
    <div class="person-container">
      <span class="username">${this.username}</span>
      <div class="person"></div>
    </div>`}}customElements.define("person-viewer",we);var _={},Xe=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},De={},k={};let ye;const et=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];k.getSymbolSize=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return e*4+17};k.getSymbolTotalCodewords=function(e){return et[e]};k.getBCHDigit=function(t){let e=0;for(;t!==0;)e++,t>>>=1;return e};k.setToSJISFunction=function(e){if(typeof e!="function")throw new Error('"toSJISFunc" is not a valid function.');ye=e};k.isKanjiModeEnabled=function(){return typeof ye<"u"};k.toSJIS=function(e){return ye(e)};var q={};(function(t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2};function e(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw new Error("Unknown EC Level: "+i)}}t.isValid=function(r){return r&&typeof r.bit<"u"&&r.bit>=0&&r.bit<4},t.from=function(r,o){if(t.isValid(r))return r;try{return e(r)}catch{return o}}})(q);function ze(){this.buffer=[],this.length=0}ze.prototype={get:function(t){const e=Math.floor(t/8);return(this.buffer[e]>>>7-t%8&1)===1},put:function(t,e){for(let i=0;i<e;i++)this.putBit((t>>>e-i-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(t){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var tt=ze;function J(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}J.prototype.set=function(t,e,i,r){const o=t*this.size+e;this.data[o]=i,r&&(this.reservedBit[o]=!0)};J.prototype.get=function(t,e){return this.data[t*this.size+e]};J.prototype.xor=function(t,e,i){this.data[t*this.size+e]^=i};J.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]};var nt=J,Fe={};(function(t){const e=k.getSymbolSize;t.getRowColCoords=function(r){if(r===1)return[];const o=Math.floor(r/7)+2,n=e(r),a=n===145?26:Math.ceil((n-13)/(2*o-2))*2,c=[n-7];for(let s=1;s<o-1;s++)c[s]=c[s-1]-a;return c.push(6),c.reverse()},t.getPositions=function(r){const o=[],n=t.getRowColCoords(r),a=n.length;for(let c=0;c<a;c++)for(let s=0;s<a;s++)c===0&&s===0||c===0&&s===a-1||c===a-1&&s===0||o.push([n[c],n[s]]);return o}})(Fe);var He={};const ot=k.getSymbolSize,Me=7;He.getPositions=function(e){const i=ot(e);return[[0,0],[i-Me,0],[0,i-Me]]};var Ue={};(function(t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};t.isValid=function(o){return o!=null&&o!==""&&!isNaN(o)&&o>=0&&o<=7},t.from=function(o){return t.isValid(o)?parseInt(o,10):void 0},t.getPenaltyN1=function(o){const n=o.size;let a=0,c=0,s=0,l=null,d=null;for(let v=0;v<n;v++){c=s=0,l=d=null;for(let m=0;m<n;m++){let u=o.get(v,m);u===l?c++:(c>=5&&(a+=e.N1+(c-5)),l=u,c=1),u=o.get(m,v),u===d?s++:(s>=5&&(a+=e.N1+(s-5)),d=u,s=1)}c>=5&&(a+=e.N1+(c-5)),s>=5&&(a+=e.N1+(s-5))}return a},t.getPenaltyN2=function(o){const n=o.size;let a=0;for(let c=0;c<n-1;c++)for(let s=0;s<n-1;s++){const l=o.get(c,s)+o.get(c,s+1)+o.get(c+1,s)+o.get(c+1,s+1);(l===4||l===0)&&a++}return a*e.N2},t.getPenaltyN3=function(o){const n=o.size;let a=0,c=0,s=0;for(let l=0;l<n;l++){c=s=0;for(let d=0;d<n;d++)c=c<<1&2047|o.get(l,d),d>=10&&(c===1488||c===93)&&a++,s=s<<1&2047|o.get(d,l),d>=10&&(s===1488||s===93)&&a++}return a*e.N3},t.getPenaltyN4=function(o){let n=0;const a=o.data.length;for(let s=0;s<a;s++)n+=o.data[s];return Math.abs(Math.ceil(n*100/a/5)-10)*e.N4};function i(r,o,n){switch(r){case t.Patterns.PATTERN000:return(o+n)%2===0;case t.Patterns.PATTERN001:return o%2===0;case t.Patterns.PATTERN010:return n%3===0;case t.Patterns.PATTERN011:return(o+n)%3===0;case t.Patterns.PATTERN100:return(Math.floor(o/2)+Math.floor(n/3))%2===0;case t.Patterns.PATTERN101:return o*n%2+o*n%3===0;case t.Patterns.PATTERN110:return(o*n%2+o*n%3)%2===0;case t.Patterns.PATTERN111:return(o*n%3+(o+n)%2)%2===0;default:throw new Error("bad maskPattern:"+r)}}t.applyMask=function(o,n){const a=n.size;for(let c=0;c<a;c++)for(let s=0;s<a;s++)n.isReserved(s,c)||n.xor(s,c,i(o,s,c))},t.getBestMask=function(o,n){const a=Object.keys(t.Patterns).length;let c=0,s=1/0;for(let l=0;l<a;l++){n(l),t.applyMask(l,o);const d=t.getPenaltyN1(o)+t.getPenaltyN2(o)+t.getPenaltyN3(o)+t.getPenaltyN4(o);t.applyMask(l,o),d<s&&(s=d,c=l)}return c}})(Ue);var K={};const L=q,$=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],j=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];K.getBlocksCount=function(e,i){switch(i){case L.L:return $[(e-1)*4+0];case L.M:return $[(e-1)*4+1];case L.Q:return $[(e-1)*4+2];case L.H:return $[(e-1)*4+3];default:return}};K.getTotalCodewordsCount=function(e,i){switch(i){case L.L:return j[(e-1)*4+0];case L.M:return j[(e-1)*4+1];case L.Q:return j[(e-1)*4+2];case L.H:return j[(e-1)*4+3];default:return}};var _e={},Y={};const H=new Uint8Array(512),V=new Uint8Array(256);(function(){let e=1;for(let i=0;i<255;i++)H[i]=e,V[e]=i,e<<=1,e&256&&(e^=285);for(let i=255;i<512;i++)H[i]=H[i-255]})();Y.log=function(e){if(e<1)throw new Error("log("+e+")");return V[e]};Y.exp=function(e){return H[e]};Y.mul=function(e,i){return e===0||i===0?0:H[V[e]+V[i]]};(function(t){const e=Y;t.mul=function(r,o){const n=new Uint8Array(r.length+o.length-1);for(let a=0;a<r.length;a++)for(let c=0;c<o.length;c++)n[a+c]^=e.mul(r[a],o[c]);return n},t.mod=function(r,o){let n=new Uint8Array(r);for(;n.length-o.length>=0;){const a=n[0];for(let s=0;s<o.length;s++)n[s]^=e.mul(o[s],a);let c=0;for(;c<n.length&&n[c]===0;)c++;n=n.slice(c)}return n},t.generateECPolynomial=function(r){let o=new Uint8Array([1]);for(let n=0;n<r;n++)o=t.mul(o,new Uint8Array([1,e.exp(n)]));return o}})(_e);const Je=_e;function ve(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}ve.prototype.initialize=function(e){this.degree=e,this.genPoly=Je.generateECPolynomial(this.degree)};ve.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");const i=new Uint8Array(e.length+this.degree);i.set(e);const r=Je.mod(i,this.genPoly),o=this.degree-r.length;if(o>0){const n=new Uint8Array(this.degree);return n.set(r,o),n}return r};var rt=ve,$e={},N={},Ee={};Ee.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40};var M={};const je="[0-9]+",it="[A-Z $%*+\\-./:]+";let U="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";U=U.replace(/u/g,"\\u");const at="(?:(?![A-Z0-9 $%*+\\-./:]|"+U+`)(?:.|[\r
]))+`;M.KANJI=new RegExp(U,"g");M.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");M.BYTE=new RegExp(at,"g");M.NUMERIC=new RegExp(je,"g");M.ALPHANUMERIC=new RegExp(it,"g");const st=new RegExp("^"+U+"$"),ct=new RegExp("^"+je+"$"),lt=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");M.testKanji=function(e){return st.test(e)};M.testNumeric=function(e){return ct.test(e)};M.testAlphanumeric=function(e){return lt.test(e)};(function(t){const e=Ee,i=M;t.NUMERIC={id:"Numeric",bit:1<<0,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:1<<1,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:1<<2,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:1<<3,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(n,a){if(!n.ccBits)throw new Error("Invalid mode: "+n);if(!e.isValid(a))throw new Error("Invalid version: "+a);return a>=1&&a<10?n.ccBits[0]:a<27?n.ccBits[1]:n.ccBits[2]},t.getBestModeForData=function(n){return i.testNumeric(n)?t.NUMERIC:i.testAlphanumeric(n)?t.ALPHANUMERIC:i.testKanji(n)?t.KANJI:t.BYTE},t.toString=function(n){if(n&&n.id)return n.id;throw new Error("Invalid mode")},t.isValid=function(n){return n&&n.bit&&n.ccBits};function r(o){if(typeof o!="string")throw new Error("Param is not a string");switch(o.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+o)}}t.from=function(n,a){if(t.isValid(n))return n;try{return r(n)}catch{return a}}})(N);(function(t){const e=k,i=K,r=q,o=N,n=Ee,a=1<<12|1<<11|1<<10|1<<9|1<<8|1<<5|1<<2|1<<0,c=e.getBCHDigit(a);function s(m,u,p){for(let b=1;b<=40;b++)if(u<=t.getCapacity(b,p,m))return b}function l(m,u){return o.getCharCountIndicator(m,u)+4}function d(m,u){let p=0;return m.forEach(function(b){const S=l(b.mode,u);p+=S+b.getBitsLength()}),p}function v(m,u){for(let p=1;p<=40;p++)if(d(m,p)<=t.getCapacity(p,u,o.MIXED))return p}t.from=function(u,p){return n.isValid(u)?parseInt(u,10):p},t.getCapacity=function(u,p,b){if(!n.isValid(u))throw new Error("Invalid QR Code version");typeof b>"u"&&(b=o.BYTE);const S=e.getSymbolTotalCodewords(u),g=i.getTotalCodewordsCount(u,p),w=(S-g)*8;if(b===o.MIXED)return w;const h=w-l(b,u);switch(b){case o.NUMERIC:return Math.floor(h/10*3);case o.ALPHANUMERIC:return Math.floor(h/11*2);case o.KANJI:return Math.floor(h/13);case o.BYTE:default:return Math.floor(h/8)}},t.getBestVersionForData=function(u,p){let b;const S=r.from(p,r.M);if(Array.isArray(u)){if(u.length>1)return v(u,S);if(u.length===0)return 1;b=u[0]}else b=u;return s(b.mode,b.getLength(),S)},t.getEncodedBits=function(u){if(!n.isValid(u)||u<7)throw new Error("Invalid QR Code version");let p=u<<12;for(;e.getBCHDigit(p)-c>=0;)p^=a<<e.getBCHDigit(p)-c;return u<<12|p}})($e);var Ve={};const oe=k,Oe=1<<10|1<<8|1<<5|1<<4|1<<2|1<<1|1<<0,dt=1<<14|1<<12|1<<10|1<<4|1<<1,Be=oe.getBCHDigit(Oe);Ve.getEncodedBits=function(e,i){const r=e.bit<<3|i;let o=r<<10;for(;oe.getBCHDigit(o)-Be>=0;)o^=Oe<<oe.getBCHDigit(o)-Be;return(r<<10|o)^dt};var qe={};const ut=N;function P(t){this.mode=ut.NUMERIC,this.data=t.toString()}P.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)};P.prototype.getLength=function(){return this.data.length};P.prototype.getBitsLength=function(){return P.getBitsLength(this.data.length)};P.prototype.write=function(e){let i,r,o;for(i=0;i+3<=this.data.length;i+=3)r=this.data.substr(i,3),o=parseInt(r,10),e.put(o,10);const n=this.data.length-i;n>0&&(r=this.data.substr(i),o=parseInt(r,10),e.put(o,n*3+1))};var ft=P;const ht=N,Z=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function R(t){this.mode=ht.ALPHANUMERIC,this.data=t}R.getBitsLength=function(e){return 11*Math.floor(e/2)+6*(e%2)};R.prototype.getLength=function(){return this.data.length};R.prototype.getBitsLength=function(){return R.getBitsLength(this.data.length)};R.prototype.write=function(e){let i;for(i=0;i+2<=this.data.length;i+=2){let r=Z.indexOf(this.data[i])*45;r+=Z.indexOf(this.data[i+1]),e.put(r,11)}this.data.length%2&&e.put(Z.indexOf(this.data[i]),6)};var gt=R,mt=function(e){for(var i=[],r=e.length,o=0;o<r;o++){var n=e.charCodeAt(o);if(n>=55296&&n<=56319&&r>o+1){var a=e.charCodeAt(o+1);a>=56320&&a<=57343&&(n=(n-55296)*1024+a-56320+65536,o+=1)}if(n<128){i.push(n);continue}if(n<2048){i.push(n>>6|192),i.push(n&63|128);continue}if(n<55296||n>=57344&&n<65536){i.push(n>>12|224),i.push(n>>6&63|128),i.push(n&63|128);continue}if(n>=65536&&n<=1114111){i.push(n>>18|240),i.push(n>>12&63|128),i.push(n>>6&63|128),i.push(n&63|128);continue}i.push(239,191,189)}return new Uint8Array(i).buffer};const pt=mt,bt=N;function D(t){this.mode=bt.BYTE,typeof t=="string"&&(t=pt(t)),this.data=new Uint8Array(t)}D.getBitsLength=function(e){return e*8};D.prototype.getLength=function(){return this.data.length};D.prototype.getBitsLength=function(){return D.getBitsLength(this.data.length)};D.prototype.write=function(t){for(let e=0,i=this.data.length;e<i;e++)t.put(this.data[e],8)};var wt=D;const yt=N,vt=k;function z(t){this.mode=yt.KANJI,this.data=t}z.getBitsLength=function(e){return e*13};z.prototype.getLength=function(){return this.data.length};z.prototype.getBitsLength=function(){return z.getBitsLength(this.data.length)};z.prototype.write=function(t){let e;for(e=0;e<this.data.length;e++){let i=vt.toSJIS(this.data[e]);if(i>=33088&&i<=40956)i-=33088;else if(i>=57408&&i<=60351)i-=49472;else throw new Error("Invalid SJIS character: "+this.data[e]+`
Make sure your charset is UTF-8`);i=(i>>>8&255)*192+(i&255),t.put(i,13)}};var Et=z,re={},Ct={get exports(){return re},set exports(t){re=t}};(function(t){var e={single_source_shortest_paths:function(i,r,o){var n={},a={};a[r]=0;var c=e.PriorityQueue.make();c.push(r,0);for(var s,l,d,v,m,u,p,b,S;!c.empty();){s=c.pop(),l=s.value,v=s.cost,m=i[l]||{};for(d in m)m.hasOwnProperty(d)&&(u=m[d],p=v+u,b=a[d],S=typeof a[d]>"u",(S||b>p)&&(a[d]=p,c.push(d,p),n[d]=l))}if(typeof o<"u"&&typeof a[o]>"u"){var g=["Could not find a path from ",r," to ",o,"."].join("");throw new Error(g)}return n},extract_shortest_path_from_predecessor_list:function(i,r){for(var o=[],n=r;n;)o.push(n),i[n],n=i[n];return o.reverse(),o},find_path:function(i,r,o){var n=e.single_source_shortest_paths(i,r,o);return e.extract_shortest_path_from_predecessor_list(n,o)},PriorityQueue:{make:function(i){var r=e.PriorityQueue,o={},n;i=i||{};for(n in r)r.hasOwnProperty(n)&&(o[n]=r[n]);return o.queue=[],o.sorter=i.sorter||r.default_sorter,o},default_sorter:function(i,r){return i.cost-r.cost},push:function(i,r){var o={value:i,cost:r};this.queue.push(o),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};t.exports=e})(Ct);(function(t){const e=N,i=ft,r=gt,o=wt,n=Et,a=M,c=k,s=re;function l(g){return unescape(encodeURIComponent(g)).length}function d(g,w,h){const f=[];let y;for(;(y=g.exec(h))!==null;)f.push({data:y[0],index:y.index,mode:w,length:y[0].length});return f}function v(g){const w=d(a.NUMERIC,e.NUMERIC,g),h=d(a.ALPHANUMERIC,e.ALPHANUMERIC,g);let f,y;return c.isKanjiModeEnabled()?(f=d(a.BYTE,e.BYTE,g),y=d(a.KANJI,e.KANJI,g)):(f=d(a.BYTE_KANJI,e.BYTE,g),y=[]),w.concat(h,f,y).sort(function(C,A){return C.index-A.index}).map(function(C){return{data:C.data,mode:C.mode,length:C.length}})}function m(g,w){switch(w){case e.NUMERIC:return i.getBitsLength(g);case e.ALPHANUMERIC:return r.getBitsLength(g);case e.KANJI:return n.getBitsLength(g);case e.BYTE:return o.getBitsLength(g)}}function u(g){return g.reduce(function(w,h){const f=w.length-1>=0?w[w.length-1]:null;return f&&f.mode===h.mode?(w[w.length-1].data+=h.data,w):(w.push(h),w)},[])}function p(g){const w=[];for(let h=0;h<g.length;h++){const f=g[h];switch(f.mode){case e.NUMERIC:w.push([f,{data:f.data,mode:e.ALPHANUMERIC,length:f.length},{data:f.data,mode:e.BYTE,length:f.length}]);break;case e.ALPHANUMERIC:w.push([f,{data:f.data,mode:e.BYTE,length:f.length}]);break;case e.KANJI:w.push([f,{data:f.data,mode:e.BYTE,length:l(f.data)}]);break;case e.BYTE:w.push([{data:f.data,mode:e.BYTE,length:l(f.data)}])}}return w}function b(g,w){const h={},f={start:{}};let y=["start"];for(let E=0;E<g.length;E++){const C=g[E],A=[];for(let x=0;x<C.length;x++){const T=C[x],F=""+E+x;A.push(F),h[F]={node:T,lastCount:0},f[F]={};for(let Q=0;Q<y.length;Q++){const B=y[Q];h[B]&&h[B].node.mode===T.mode?(f[B][F]=m(h[B].lastCount+T.length,T.mode)-m(h[B].lastCount,T.mode),h[B].lastCount+=T.length):(h[B]&&(h[B].lastCount=T.length),f[B][F]=m(T.length,T.mode)+4+e.getCharCountIndicator(T.mode,w))}}y=A}for(let E=0;E<y.length;E++)f[y[E]].end=0;return{map:f,table:h}}function S(g,w){let h;const f=e.getBestModeForData(g);if(h=e.from(w,f),h!==e.BYTE&&h.bit<f.bit)throw new Error('"'+g+'" cannot be encoded with mode '+e.toString(h)+`.
 Suggested mode is: `+e.toString(f));switch(h===e.KANJI&&!c.isKanjiModeEnabled()&&(h=e.BYTE),h){case e.NUMERIC:return new i(g);case e.ALPHANUMERIC:return new r(g);case e.KANJI:return new n(g);case e.BYTE:return new o(g)}}t.fromArray=function(w){return w.reduce(function(h,f){return typeof f=="string"?h.push(S(f,null)):f.data&&h.push(S(f.data,f.mode)),h},[])},t.fromString=function(w,h){const f=v(w,c.isKanjiModeEnabled()),y=p(f),E=b(y,h),C=s.find_path(E.map,"start","end"),A=[];for(let x=1;x<C.length-1;x++)A.push(E.table[C[x]].node);return t.fromArray(u(A))},t.rawSplit=function(w){return t.fromArray(v(w,c.isKanjiModeEnabled()))}})(qe);const G=k,X=q,St=tt,kt=nt,At=Fe,Tt=He,ie=Ue,ae=K,Mt=rt,O=$e,Bt=Ve,xt=N,ee=qe;function Lt(t,e){const i=t.size,r=Tt.getPositions(e);for(let o=0;o<r.length;o++){const n=r[o][0],a=r[o][1];for(let c=-1;c<=7;c++)if(!(n+c<=-1||i<=n+c))for(let s=-1;s<=7;s++)a+s<=-1||i<=a+s||(c>=0&&c<=6&&(s===0||s===6)||s>=0&&s<=6&&(c===0||c===6)||c>=2&&c<=4&&s>=2&&s<=4?t.set(n+c,a+s,!0,!0):t.set(n+c,a+s,!1,!0))}}function Nt(t){const e=t.size;for(let i=8;i<e-8;i++){const r=i%2===0;t.set(i,6,r,!0),t.set(6,i,r,!0)}}function It(t,e){const i=At.getPositions(e);for(let r=0;r<i.length;r++){const o=i[r][0],n=i[r][1];for(let a=-2;a<=2;a++)for(let c=-2;c<=2;c++)a===-2||a===2||c===-2||c===2||a===0&&c===0?t.set(o+a,n+c,!0,!0):t.set(o+a,n+c,!1,!0)}}function Pt(t,e){const i=t.size,r=O.getEncodedBits(e);let o,n,a;for(let c=0;c<18;c++)o=Math.floor(c/3),n=c%3+i-8-3,a=(r>>c&1)===1,t.set(o,n,a,!0),t.set(n,o,a,!0)}function te(t,e,i){const r=t.size,o=Bt.getEncodedBits(e,i);let n,a;for(n=0;n<15;n++)a=(o>>n&1)===1,n<6?t.set(n,8,a,!0):n<8?t.set(n+1,8,a,!0):t.set(r-15+n,8,a,!0),n<8?t.set(8,r-n-1,a,!0):n<9?t.set(8,15-n-1+1,a,!0):t.set(8,15-n-1,a,!0);t.set(r-8,8,1,!0)}function Rt(t,e){const i=t.size;let r=-1,o=i-1,n=7,a=0;for(let c=i-1;c>0;c-=2)for(c===6&&c--;;){for(let s=0;s<2;s++)if(!t.isReserved(o,c-s)){let l=!1;a<e.length&&(l=(e[a]>>>n&1)===1),t.set(o,c-s,l),n--,n===-1&&(a++,n=7)}if(o+=r,o<0||i<=o){o-=r,r=-r;break}}}function Dt(t,e,i){const r=new St;i.forEach(function(s){r.put(s.mode.bit,4),r.put(s.getLength(),xt.getCharCountIndicator(s.mode,t)),s.write(r)});const o=G.getSymbolTotalCodewords(t),n=ae.getTotalCodewordsCount(t,e),a=(o-n)*8;for(r.getLengthInBits()+4<=a&&r.put(0,4);r.getLengthInBits()%8!==0;)r.putBit(0);const c=(a-r.getLengthInBits())/8;for(let s=0;s<c;s++)r.put(s%2?17:236,8);return zt(r,t,e)}function zt(t,e,i){const r=G.getSymbolTotalCodewords(e),o=ae.getTotalCodewordsCount(e,i),n=r-o,a=ae.getBlocksCount(e,i),c=r%a,s=a-c,l=Math.floor(r/a),d=Math.floor(n/a),v=d+1,m=l-d,u=new Mt(m);let p=0;const b=new Array(a),S=new Array(a);let g=0;const w=new Uint8Array(t.buffer);for(let C=0;C<a;C++){const A=C<s?d:v;b[C]=w.slice(p,p+A),S[C]=u.encode(b[C]),p+=A,g=Math.max(g,A)}const h=new Uint8Array(r);let f=0,y,E;for(y=0;y<g;y++)for(E=0;E<a;E++)y<b[E].length&&(h[f++]=b[E][y]);for(y=0;y<m;y++)for(E=0;E<a;E++)h[f++]=S[E][y];return h}function Ft(t,e,i,r){let o;if(Array.isArray(t))o=ee.fromArray(t);else if(typeof t=="string"){let l=e;if(!l){const d=ee.rawSplit(t);l=O.getBestVersionForData(d,i)}o=ee.fromString(t,l||40)}else throw new Error("Invalid data");const n=O.getBestVersionForData(o,i);if(!n)throw new Error("The amount of data is too big to be stored in a QR Code");if(!e)e=n;else if(e<n)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+n+`.
`);const a=Dt(e,i,o),c=G.getSymbolSize(e),s=new kt(c);return Lt(s,e),Nt(s),It(s,e),te(s,i,0),e>=7&&Pt(s,e),Rt(s,a),isNaN(r)&&(r=ie.getBestMask(s,te.bind(null,s,i))),ie.applyMask(r,s),te(s,i,r),{modules:s,version:e,errorCorrectionLevel:i,maskPattern:r,segments:o}}De.create=function(e,i){if(typeof e>"u"||e==="")throw new Error("No input text");let r=X.M,o,n;return typeof i<"u"&&(r=X.from(i.errorCorrectionLevel,X.M),o=O.from(i.version),n=ie.from(i.maskPattern),i.toSJISFunc&&G.setToSJISFunction(i.toSJISFunc)),Ft(e,o,r,n)};var Ke={},Ce={};(function(t){function e(i){if(typeof i=="number"&&(i=i.toString()),typeof i!="string")throw new Error("Color should be defined as hex string");let r=i.slice().replace("#","").split("");if(r.length<3||r.length===5||r.length>8)throw new Error("Invalid hex color: "+i);(r.length===3||r.length===4)&&(r=Array.prototype.concat.apply([],r.map(function(n){return[n,n]}))),r.length===6&&r.push("F","F");const o=parseInt(r.join(""),16);return{r:o>>24&255,g:o>>16&255,b:o>>8&255,a:o&255,hex:"#"+r.slice(0,6).join("")}}t.getOptions=function(r){r||(r={}),r.color||(r.color={});const o=typeof r.margin>"u"||r.margin===null||r.margin<0?4:r.margin,n=r.width&&r.width>=21?r.width:void 0,a=r.scale||4;return{width:n,scale:n?4:a,margin:o,color:{dark:e(r.color.dark||"#000000ff"),light:e(r.color.light||"#ffffffff")},type:r.type,rendererOpts:r.rendererOpts||{}}},t.getScale=function(r,o){return o.width&&o.width>=r+o.margin*2?o.width/(r+o.margin*2):o.scale},t.getImageWidth=function(r,o){const n=t.getScale(r,o);return Math.floor((r+o.margin*2)*n)},t.qrToImageData=function(r,o,n){const a=o.modules.size,c=o.modules.data,s=t.getScale(a,n),l=Math.floor((a+n.margin*2)*s),d=n.margin*s,v=[n.color.light,n.color.dark];for(let m=0;m<l;m++)for(let u=0;u<l;u++){let p=(m*l+u)*4,b=n.color.light;if(m>=d&&u>=d&&m<l-d&&u<l-d){const S=Math.floor((m-d)/s),g=Math.floor((u-d)/s);b=v[c[S*a+g]?1:0]}r[p++]=b.r,r[p++]=b.g,r[p++]=b.b,r[p]=b.a}}})(Ce);(function(t){const e=Ce;function i(o,n,a){o.clearRect(0,0,n.width,n.height),n.style||(n.style={}),n.height=a,n.width=a,n.style.height=a+"px",n.style.width=a+"px"}function r(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}t.render=function(n,a,c){let s=c,l=a;typeof s>"u"&&(!a||!a.getContext)&&(s=a,a=void 0),a||(l=r()),s=e.getOptions(s);const d=e.getImageWidth(n.modules.size,s),v=l.getContext("2d"),m=v.createImageData(d,d);return e.qrToImageData(m.data,n,s),i(v,l,d),v.putImageData(m,0,0),l},t.renderToDataURL=function(n,a,c){let s=c;typeof s>"u"&&(!a||!a.getContext)&&(s=a,a=void 0),s||(s={});const l=t.render(n,a,s),d=s.type||"image/png",v=s.rendererOpts||{};return l.toDataURL(d,v.quality)}})(Ke);var Ye={};const Ht=Ce;function xe(t,e){const i=t.a/255,r=e+'="'+t.hex+'"';return i<1?r+" "+e+'-opacity="'+i.toFixed(2).slice(1)+'"':r}function ne(t,e,i){let r=t+e;return typeof i<"u"&&(r+=" "+i),r}function Ut(t,e,i){let r="",o=0,n=!1,a=0;for(let c=0;c<t.length;c++){const s=Math.floor(c%e),l=Math.floor(c/e);!s&&!n&&(n=!0),t[c]?(a++,c>0&&s>0&&t[c-1]||(r+=n?ne("M",s+i,.5+l+i):ne("m",o,0),o=0,n=!1),s+1<e&&t[c+1]||(r+=ne("h",a),a=0)):o++}return r}Ye.render=function(e,i,r){const o=Ht.getOptions(i),n=e.modules.size,a=e.modules.data,c=n+o.margin*2,s=o.color.light.a?"<path "+xe(o.color.light,"fill")+' d="M0 0h'+c+"v"+c+'H0z"/>':"",l="<path "+xe(o.color.dark,"stroke")+' d="'+Ut(a,n,o.margin)+'"/>',d='viewBox="0 0 '+c+" "+c+'"',m='<svg xmlns="http://www.w3.org/2000/svg" '+(o.width?'width="'+o.width+'" height="'+o.width+'" ':"")+d+' shape-rendering="crispEdges">'+s+l+`</svg>
`;return typeof r=="function"&&r(null,m),m};const _t=Xe,se=De,Ge=Ke,Jt=Ye;function Se(t,e,i,r,o){const n=[].slice.call(arguments,1),a=n.length,c=typeof n[a-1]=="function";if(!c&&!_t())throw new Error("Callback required as last argument");if(c){if(a<2)throw new Error("Too few arguments provided");a===2?(o=i,i=e,e=r=void 0):a===3&&(e.getContext&&typeof o>"u"?(o=r,r=void 0):(o=r,r=i,i=e,e=void 0))}else{if(a<1)throw new Error("Too few arguments provided");return a===1?(i=e,e=r=void 0):a===2&&!e.getContext&&(r=i,i=e,e=void 0),new Promise(function(s,l){try{const d=se.create(i,r);s(t(d,e,r))}catch(d){l(d)}})}try{const s=se.create(i,r);o(null,t(s,e,r))}catch(s){o(s)}}_.create=se.create;_.toCanvas=Se.bind(null,Ge.render);_.toDataURL=Se.bind(null,Ge.renderToDataURL);_.toString=Se.bind(null,function(t,e,i){return Jt.render(t,i)});const Le=["manzdev","midudev","eduardofierropro","s4vitaar","afor_digital","vamoacodear","todocode","chrisvdev","carmenansio","goncypozzo","padawanstrainer","mouredev","malpicado","niv3k_el_pato","rafalagoon","altaskur","bluuweb","fpiaggio","gentleman_programming","matiasbaldanza","gabus19","fazt","luisllamas_es","heynau","garageideas","desarrolloutil","carlosazaustre","giuscaminiti","danirod_","codigodemarras","nategentile7","verownika","applecoding","guillermorodas","5ro4","guinxu","charditronic","konypyon","ari_reinventada","fmontes83","nucliweb","ikurotime","codelytv","carlosgamedeveloper","stackthepile","miriamgonp","dotcsv","hardware360","shelldredd","hitheart","elrincondeldev","serudda","melenitasdev","zatge","programacion_en_esp","ciw1c","snvfyy","hdeleonnet","emoporemilio","hache_raw","codingiscaring","tarmop"],Ne=["Lo que el hacker se llevó","1, 2, 3... el kukoro inglés","Lluvia de hamburguesas","Un tranvía llamado CSS","IT, un dev asesino","Cazadores de bots","Dockerina, la ballena CSS","Quién tiene Linux, tiene un tesoro","Webpack, una odisea de despacio","Manz, el autoestopista galactico","John «Manzick»","Lluvia de bugs","Picando hasta el amanecer","Centrando a Nemo, con CSS","Android y yo","InCSSption","Debug in the shell","Ciudadano JSON","Moviendo las manitas","Lo que tailwind se llevó","Your code","Afor, la encuestadora","JSON Bourne","Javamanji","Typescript, mi villano favorito","Piratas del FullStack Valley","Bug Hunter","Dev a los 40","#fff nieves","Mi vecino Kukoro","Tengo más estilos que CSS","JSON 13","The Dark Mode Rises","Toma el código y corre","Postman: el superhéroe","El lobo de Await Sync","Agente CSS","El día que el terminal se detuvo",".addEvent('Horizon')","The parent script","Colega donde esta mi repo?","Afor, la encuestadora 2","The CSSMask","CTRL+C CTRL+V","Indiana Node y el terminal maldito","Sea #","Manz in the middle","No me hagas un display none","La reina de Javascript","Superagente x386","El bueno, el malo y el framework","Afor, la última encuesta","EduardoFierro Manostijeras","DevDependencies Day","Indiana Node: el regreso de ChatGPT","El diario de PHP Jones","Indiana Node y los tipos perdidos","Jurassic Webpack","Soy tan div-ertido","Nodebusters","La chica de rgb(255, 0, 0)","Gulp Fiction","La sociedad de los PHP muertos","jQuery, el regreso","Me, myself and this","El señor de los códigos","iTerm-nator","Kill -9 bill","Cómo conocí a vuestro Linux","#tower-of-pisa { font-style: italic; }","Pesadilla en testing","Borrando a system32","The Incredible Bugs","Regreso al kukoro","Kernel Panic: Cuando la terminal se murió","Stack Wars: El ataque de los Chromes","El CSS viste a la moda","Sé lo que hicieron el release pasado","Rápidos y debugeadores","Un dev a prueba de bugs","El último hacker en La Tierra","Hijos de los frameworks","La bella y Java","Hackéalo como puedas 33 1/3","Entrenando a mi Junior","Ant-Manz","HansTML y grelCSS: Cazadores de BruJaS","Refactoriza como puedas","Piratas del caribe: En el fin de Cobol","Moulin #F00","Back to the commit","Stack Wars: new Hope()","#000 panter","Indiana Afor: La encuesta perdida","Stack Wars: La venganza de NextJS","Mi abuelo Fortran","PHP: Duro de compilar","Harry Potter and the Laravel Artisan","Sólo en ~","James Funciona 404","SpiderManz","El último commit","Algo pasa con Java","The Clip-Path","Dos frameworks muy tontos","Stack Wars: La guerra de los Coboles","El extraño caso de Afor y Laravel","Foreach Gump","El junior con el pijama de Senior","Javanator: El día del release final","The Promise()","Varmanz: El caballero del dark mode","Transpilar nunca, tipar jamás","VIM y el día que pude salir","Manz y la fábrica de dibujos con CSS","En mi local funciona","Frameworks fantásticos","Commitear nunca, pushear jamás","Back add-ons","Colega, ¿dónde está mi copilot?","ID Astra: Hacia los selectores","El curioso caso de DivRole Button","Instinto BASIC","Flutter Club","Alto o mi madre mergea","Mi primer trabajo: Legacy code","La quinta 'Hola Mundo'","La venganza del código fuente","El objeto sin fin","Call of Duty: DevOps","James Bond: El Java nunca muere","Rescatando al soldado VIM","Error 404: La aventura recién comienza","Javatar","Super BASIC Bros","NPM Gun","Typescript, la gata rompehogares","Aladiv","Codemor","XML vs JSON","3px sobre el cielo","Kunfu pandas","Los códigos de Narnia","Terminator: La rebelión del código fuente","Sliderman","Clojure, encerrado y atrapado","DEVastado","Guardians of the legacy","Guerra Mundial z-index","Cincuenta sombras de CSS","Go busters","Scary Bug","Dos bugs rebeldes","Big integer in Little China","Api driver","El hombre opacity: 0","Asembler de bits","Javagueddon","La princesa Mongonode","Los programadores de la mesa cuadrada","Sharp: Un tiburón pragmático","The Full Stack Avengers","El hombre que susurraba a los viewers","Las vacaciones de Mr Vim","Deno saur: el renacer","Los hombres de #000","CSSpíritu salvaje","Como conocí a vuestra you.parent()","El día que hice un DELETE sin WHERE","Div, ul, button y otros códigos del montón","Jurassic Dev","Apocalypse Node","El Gran Devowski","La pesadilla del deploy del viernes","CSSnicienta","American History XML","El eCSSorsista","nth-last-man on earth","Amazonia, una nueva experiencia","Fantastic Fortran","Misión imposible: Protocolo no permitido","V de Visual Studio","The ul of Schindler","C#anibal","Perl Harbor","Magento","Tablas, tiempos difíciles","El código da Vinci.js","Polyfill de guardería","The CORS","Const int n","Programa que no es poco","Princess Monokai","C#3PO: Una historia de Java Wars","Cariño, encogí a los divs","Mavenrick","El array león","Tira a MySQL del tren","El bug de Truman","Windows: Actualiza como puedas"],$t=20,jt=80,Ie=["15:00","18:00","21:00","00:00"],Pe=["$ (Oferta Junior)","4 (Precio Senior)"],I=t=>Math.floor(Math.random()*t);class ke extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}init(){const e=I(Le.length);this.streamer=Le[e];const i=I(Ne.length);this.movie=Ne[i],this.screenNumber=String(I($t)).padStart(2,"0"),this.seatNumber=I(jt);const r=I(Ie.length);this.schedule=Ie[r];const o=I(Pe.length);this.price=Pe[o];const n=new Date;this.date={day:String(n.getDate()).padStart(2,"0"),month:String(n.getMonth()+1).padStart(2,"0"),year:n.getFullYear()},this.url="https://twitch.tv/"+this.streamer}async generateQR(){this.qr=await _.toDataURL(this.url,{type:"image/png"})}async connectedCallback(){this.init(),await this.generateQR(),this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${ke.styles}</style>
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
            <li class="price">PRECIO: <span>$ ${this.price}</span></li>
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
    </div>`}}customElements.define("cinema-ticket",ke);document.querySelector(".container");const Vt=document.querySelector(".cinema-queue"),Re=new Set,Qe=new tmi.Client({channels:["manzdev"]});Qe.connect();Qe.on("message",(t,e,i,r)=>{const o=e.username,n=e.color||"#00000077",a=i==="!ticket",c=Re.has(o);if(a&&!c){const s=document.createElement("person-viewer");s.setAttribute("username",o),s.setAttribute("color",n),Vt.insertAdjacentElement("beforeend",s),Re.add(o)}});
