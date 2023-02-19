(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();class d extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    <style>${d.styles}</style>
    <div class="container">
      <div class="roof-wall">
        <div class="cornice"></div>
        <div class="cornice"></div>
        <div class="cornice"></div>
      </div>
    </div>`}}customElements.define("cinema-roof",d);class c extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}toggle(){this.toggleAttribute("on")}blink(n){this.setAttribute("on",""),setTimeout(()=>this.off(),n)}on(){this.setAttribute("on","")}off(){this.removeAttribute("on")}connectedCallback(){this.render(),this.addEventListener("click",()=>this.toggle())}render(){this.shadowRoot.innerHTML=`
    <style>${c.styles}</style>
    <div class="bulb">
    </div>`}}customElements.define("bulb-image",c);const M=48;let s=0;const v=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,23,25,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,24,22];class l extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render(),this.insertBulbs(),this.startCycleEffect(),[...this.shadowRoot.querySelectorAll("bulb-image")]}insertBulbs(){const n=this.shadowRoot.querySelector(".bulbs-container");for(let o=0;o<M;o++){const i=document.createElement("bulb-image");n.appendChild(i)}}startBlinkEffect(){[...this.shadowRoot.querySelectorAll("bulb-image")].forEach(o=>o.toggle()),setTimeout(()=>this.loop(),1500)}startCycleEffect(){const n=[...this.shadowRoot.querySelectorAll("bulb-image")],o=v[s];s=(s+1)%v.length,n[o].blink(250),setTimeout(()=>this.startCycleEffect(),50)}render(){this.shadowRoot.innerHTML=`
    <style>${l.styles}</style>
    <div class="container">
      <div class="text-container">
        <div class="text">CINEMA<span>NZ</span></div>
        <div class="bulbs-container"></div>
      </div>
    </div>`}}customElements.define("cinema-billboard",l);class h extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    <style>${h.styles}</style>
    <div class="container">

    </div>`}}customElements.define("cinema-window",h);class f extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    <style>${f.styles}</style>
    <div class="container">
      <div class="door door-1"></div>
      <div class="door door-2"></div>
    </div>`}}customElements.define("cinema-door",f);class b extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    <style>${b.styles}</style>
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
    </div>`}}customElements.define("cinema-entrance",b);class p extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        display: block;
        background: url("images/manzdev.png");
        background-size: cover;
        image-rendering: pixelated;
        width: 200px;
        height: 100px;
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${p.styles}</style>
    <div class="container">

    </div>`}}customElements.define("cinema-top",p);class m extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    <style>${m.styles}</style>
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
    </div>`}}customElements.define("cinema-ticket-store",m);class g extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    <style>${g.styles}</style>
    <div class="container">
      <div class="chasis-container">
        <div class="chasis"></div>
        <div class="light"></div>
      </div>
      <div class="base"></div>
    </div>`}}customElements.define("spot-light",g);class u extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    <style>${u.styles}</style>
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
    `}}customElements.define("cinema-building",u);const T=`/* Autor: the_sandok */
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
`,w=["naked","prisoner","child","superman","wednesday","sport1","krillin","homer","shaggy","plomo","blonde","sailor-moon","sailor-marte","sailor-jupiter","sailor-mercurio","sailor-venus","chrisvdev","moda","mike","goose","ghost"];class x extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}init(){this.style.setProperty("--color",this.getAttribute("color")),this.style.setProperty("--delay-jump-time",Math.floor(Math.random()*2)+"s"),this.style.setProperty("--delay-rotate-time",Math.floor(Math.random()*2)+"s"),this.username=this.getAttribute("username")||"Sr. Anónimo"}static get styles(){return`
      .person-container {
        width: 40px;
        height: 100px;
        margin: 0 0.5em;
        position: relative;
        translate: 50px 0;
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
        position: absolute;
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

      ${T}

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
    `}connectedCallback(){this.init(),this.render();const n=~~(Math.random()*w.length),o=this.shadowRoot.querySelector(".person"),i=w[n];o.classList.add(i)}setHeight(){const n=85+Math.floor(Math.random()*20);this.style.setProperty("--height",`${n}px`)}render(){this.shadowRoot.innerHTML=`
    <style>${x.styles}</style>
    <div class="person-container">
      <span class="username">${this.username}</span>
      <div class="person"></div>
    </div>`}}customElements.define("person-viewer",x);const A=document.querySelector(".container"),y=new Set,k=new tmi.Client({channels:["manzdev"]});k.connect();k.on("message",(E,n,o,i)=>{const e=n.username,t=n.color||"#00000077",r=o==="!ticket",L=y.has(e);if(r&&!L){const a=document.createElement("person-viewer");a.setAttribute("username",e),a.setAttribute("color",t),A.insertAdjacentElement("beforeend",a),y.add(e)}});
