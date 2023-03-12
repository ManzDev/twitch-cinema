(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();const xe=[125,175],Xe=[2,3],et=[40,70];class le extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        background: linear-gradient(to top, #225, #111);
        position: absolute;
        height: 100%;
        width: 100%;
        z-index: -1;
        top: 0;
        display: block;
      }

      .container {
        display: flex;
        gap: 0 0px;
        width: 100%;
        height: 100%;
        align-items: end;
      }

      .building {
        background:
          linear-gradient(#0006, #000d),
          linear-gradient(to right, #0005 15px, transparent 15px);
        width: var(--width);
        height: var(--height);
        clip-path: polygon(0 10px, 15px 0, 100% 0, 100% 100%, 0 100%);
        display: grid;
        grid-template-columns: repeat(var(--windows-number), 10px);
        justify-content: space-evenly;
        padding-top: 25px;
        padding-left: 7px;
        box-sizing: border-box;
      }

      .window {
        background: black;
        width: 15px;
        height: 15px;
      }

      .window.on {
        background: linear-gradient(#382f07, #151201);
        box-shadow: 0 0 2px #ffb90082;
      }

      .window.on::after {
        content: "";
        display: block;
        background: radial-gradient(#e8e82511 60%, #e8e82500 80% 100%);
        width: 100%;
        height: 100%;
        border-radius: 50%;
        scale: 2;
        opacity: 1;
        animation: light 0.1s ease-out infinite alternate;
        z-index: 5;
      }

      @keyframes light {
        0% {
          opacity: 0.75;
          scale: 2.5;
        }

        100% {
          opacity: 0.5;
          scale: 2.6;
        }
      }

      .fog-container {
        width: 100%;
        height: 100%;
        position: absolute;
      }

      .fog {
        width: 50%;
        height: 25%;
        background: #333;
        border-radius: 70%;
        filter: blur(30px);
        mix-blend-mode: hue;
      }
    `}generateWindows(e,i){for(let r=0;r<i;r++){const t=document.createElement("div");t.classList.add("window"),Math.random()<.05&&t.classList.add("on"),e.appendChild(t)}}generateBuildings(){const e=this.shadowRoot.querySelector(".container");for(let i=0;i<20;i++){const r=document.createElement("div");r.classList.add("building");const t=Math.floor(Math.random()*xe.length),o=xe[t],a=Xe[t],l=600+Math.floor(Math.random()*300);r.style.setProperty("--width",`${o}px`),r.style.setProperty("--height",`${l}px`),r.style.setProperty("--windows-number",a),this.generateWindows(r,et[t]),e.appendChild(r)}}connectedCallback(){this.render(),this.generateBuildings()}render(){this.shadowRoot.innerHTML=`
    <style>${le.styles}</style>
    <div class="fog-container">
      <div class="fog"></div>
    </div>
    <div class="container">
    </div>`}}customElements.define("background-street",le);class ce extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    </div>`}}customElements.define("cinema-roof",ce);class de extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    <style>${de.styles}</style>
    <div class="bulb">
    </div>`}}customElements.define("bulb-image",de);const tt=48;let Q=0;const Me=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,23,25,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,24,22];class ue extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render(),this.insertBulbs(),this.startCycleEffect(),[...this.shadowRoot.querySelectorAll("bulb-image")]}insertBulbs(){const e=this.shadowRoot.querySelector(".bulbs-container");for(let i=0;i<tt;i++){const r=document.createElement("bulb-image");e.appendChild(r)}}startBlinkEffect(){[...this.shadowRoot.querySelectorAll("bulb-image")].forEach(i=>i.toggle()),setTimeout(()=>this.loop(),1500)}startCycleEffect(){const e=[...this.shadowRoot.querySelectorAll("bulb-image")],i=Me[Q];Q=(Q+1)%Me.length,e[i].blink(250),setTimeout(()=>this.startCycleEffect(),50)}render(){this.shadowRoot.innerHTML=`
    <style>${ue.styles}</style>
    <div class="container">
      <div class="text-container">
        <div class="text">CINEMA<span>NZ</span></div>
        <div class="bulbs-container"></div>
      </div>
    </div>`}}customElements.define("cinema-billboard",ue);class fe extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    <style>${fe.styles}</style>
    <div class="container">

    </div>`}}customElements.define("cinema-window",fe);class he extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    <style>${he.styles}</style>
    <div class="container">
      <div class="door door-1"></div>
      <div class="door door-2"></div>
    </div>`}}customElements.define("cinema-door",he);class ge extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    <style>${ge.styles}</style>
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
    </div>`}}customElements.define("cinema-entrance",ge);class me extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        display: block;
        background: url("images/manzdev.png");
        background-size: cover;
        image-rendering: pixelated;
        width: 200px;
        height: 100px;
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${me.styles}</style>
    <div class="container">

    </div>`}}customElements.define("cinema-top",me);class pe extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    <style>${pe.styles}</style>
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
    </div>`}}customElements.define("cinema-ticket-store",pe);class be extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    <style>${be.styles}</style>
    <div class="container">
      <div class="chasis-container">
        <div class="chasis"></div>
        <div class="light"></div>
      </div>
      <div class="base"></div>
    </div>`}}customElements.define("spot-light",be);class we extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    <style>${we.styles}</style>
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
    `}}customElements.define("cinema-building",we);var _={},nt=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},He={},S={};let ye;const ot=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];S.getSymbolSize=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return e*4+17};S.getSymbolTotalCodewords=function(e){return ot[e]};S.getBCHDigit=function(n){let e=0;for(;n!==0;)e++,n>>>=1;return e};S.setToSJISFunction=function(e){if(typeof e!="function")throw new Error('"toSJISFunc" is not a valid function.');ye=e};S.isKanjiModeEnabled=function(){return typeof ye<"u"};S.toSJIS=function(e){return ye(e)};var q={};(function(n){n.L={bit:1},n.M={bit:0},n.Q={bit:3},n.H={bit:2};function e(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"l":case"low":return n.L;case"m":case"medium":return n.M;case"q":case"quartile":return n.Q;case"h":case"high":return n.H;default:throw new Error("Unknown EC Level: "+i)}}n.isValid=function(r){return r&&typeof r.bit<"u"&&r.bit>=0&&r.bit<4},n.from=function(r,t){if(n.isValid(r))return r;try{return e(r)}catch{return t}}})(q);function Fe(){this.buffer=[],this.length=0}Fe.prototype={get:function(n){const e=Math.floor(n/8);return(this.buffer[e]>>>7-n%8&1)===1},put:function(n,e){for(let i=0;i<e;i++)this.putBit((n>>>e-i-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(n){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),n&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var rt=Fe;function $(n){if(!n||n<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=n,this.data=new Uint8Array(n*n),this.reservedBit=new Uint8Array(n*n)}$.prototype.set=function(n,e,i,r){const t=n*this.size+e;this.data[t]=i,r&&(this.reservedBit[t]=!0)};$.prototype.get=function(n,e){return this.data[n*this.size+e]};$.prototype.xor=function(n,e,i){this.data[n*this.size+e]^=i};$.prototype.isReserved=function(n,e){return this.reservedBit[n*this.size+e]};var it=$,Ue={};(function(n){const e=S.getSymbolSize;n.getRowColCoords=function(r){if(r===1)return[];const t=Math.floor(r/7)+2,o=e(r),a=o===145?26:Math.ceil((o-13)/(2*t-2))*2,l=[o-7];for(let s=1;s<t-1;s++)l[s]=l[s-1]-a;return l.push(6),l.reverse()},n.getPositions=function(r){const t=[],o=n.getRowColCoords(r),a=o.length;for(let l=0;l<a;l++)for(let s=0;s<a;s++)l===0&&s===0||l===0&&s===a-1||l===a-1&&s===0||t.push([o[l],o[s]]);return t}})(Ue);var _e={};const at=S.getSymbolSize,Ae=7;_e.getPositions=function(e){const i=at(e);return[[0,0],[i-Ae,0],[0,i-Ae]]};var $e={};(function(n){n.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};n.isValid=function(t){return t!=null&&t!==""&&!isNaN(t)&&t>=0&&t<=7},n.from=function(t){return n.isValid(t)?parseInt(t,10):void 0},n.getPenaltyN1=function(t){const o=t.size;let a=0,l=0,s=0,c=null,d=null;for(let v=0;v<o;v++){l=s=0,c=d=null;for(let m=0;m<o;m++){let u=t.get(v,m);u===c?l++:(l>=5&&(a+=e.N1+(l-5)),c=u,l=1),u=t.get(m,v),u===d?s++:(s>=5&&(a+=e.N1+(s-5)),d=u,s=1)}l>=5&&(a+=e.N1+(l-5)),s>=5&&(a+=e.N1+(s-5))}return a},n.getPenaltyN2=function(t){const o=t.size;let a=0;for(let l=0;l<o-1;l++)for(let s=0;s<o-1;s++){const c=t.get(l,s)+t.get(l,s+1)+t.get(l+1,s)+t.get(l+1,s+1);(c===4||c===0)&&a++}return a*e.N2},n.getPenaltyN3=function(t){const o=t.size;let a=0,l=0,s=0;for(let c=0;c<o;c++){l=s=0;for(let d=0;d<o;d++)l=l<<1&2047|t.get(c,d),d>=10&&(l===1488||l===93)&&a++,s=s<<1&2047|t.get(d,c),d>=10&&(s===1488||s===93)&&a++}return a*e.N3},n.getPenaltyN4=function(t){let o=0;const a=t.data.length;for(let s=0;s<a;s++)o+=t.data[s];return Math.abs(Math.ceil(o*100/a/5)-10)*e.N4};function i(r,t,o){switch(r){case n.Patterns.PATTERN000:return(t+o)%2===0;case n.Patterns.PATTERN001:return t%2===0;case n.Patterns.PATTERN010:return o%3===0;case n.Patterns.PATTERN011:return(t+o)%3===0;case n.Patterns.PATTERN100:return(Math.floor(t/2)+Math.floor(o/3))%2===0;case n.Patterns.PATTERN101:return t*o%2+t*o%3===0;case n.Patterns.PATTERN110:return(t*o%2+t*o%3)%2===0;case n.Patterns.PATTERN111:return(t*o%3+(t+o)%2)%2===0;default:throw new Error("bad maskPattern:"+r)}}n.applyMask=function(t,o){const a=o.size;for(let l=0;l<a;l++)for(let s=0;s<a;s++)o.isReserved(s,l)||o.xor(s,l,i(t,s,l))},n.getBestMask=function(t,o){const a=Object.keys(n.Patterns).length;let l=0,s=1/0;for(let c=0;c<a;c++){o(c),n.applyMask(c,t);const d=n.getPenaltyN1(t)+n.getPenaltyN2(t)+n.getPenaltyN3(t)+n.getPenaltyN4(t);n.applyMask(c,t),d<s&&(s=d,l=c)}return l}})($e);var K={};const L=q,J=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],j=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];K.getBlocksCount=function(e,i){switch(i){case L.L:return J[(e-1)*4+0];case L.M:return J[(e-1)*4+1];case L.Q:return J[(e-1)*4+2];case L.H:return J[(e-1)*4+3];default:return}};K.getTotalCodewordsCount=function(e,i){switch(i){case L.L:return j[(e-1)*4+0];case L.M:return j[(e-1)*4+1];case L.Q:return j[(e-1)*4+2];case L.H:return j[(e-1)*4+3];default:return}};var Je={},Y={};const F=new Uint8Array(512),O=new Uint8Array(256);(function(){let e=1;for(let i=0;i<255;i++)F[i]=e,O[e]=i,e<<=1,e&256&&(e^=285);for(let i=255;i<512;i++)F[i]=F[i-255]})();Y.log=function(e){if(e<1)throw new Error("log("+e+")");return O[e]};Y.exp=function(e){return F[e]};Y.mul=function(e,i){return e===0||i===0?0:F[O[e]+O[i]]};(function(n){const e=Y;n.mul=function(r,t){const o=new Uint8Array(r.length+t.length-1);for(let a=0;a<r.length;a++)for(let l=0;l<t.length;l++)o[a+l]^=e.mul(r[a],t[l]);return o},n.mod=function(r,t){let o=new Uint8Array(r);for(;o.length-t.length>=0;){const a=o[0];for(let s=0;s<t.length;s++)o[s]^=e.mul(t[s],a);let l=0;for(;l<o.length&&o[l]===0;)l++;o=o.slice(l)}return o},n.generateECPolynomial=function(r){let t=new Uint8Array([1]);for(let o=0;o<r;o++)t=n.mul(t,new Uint8Array([1,e.exp(o)]));return t}})(Je);const je=Je;function ve(n){this.genPoly=void 0,this.degree=n,this.degree&&this.initialize(this.degree)}ve.prototype.initialize=function(e){this.degree=e,this.genPoly=je.generateECPolynomial(this.degree)};ve.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");const i=new Uint8Array(e.length+this.degree);i.set(e);const r=je.mod(i,this.genPoly),t=this.degree-r.length;if(t>0){const o=new Uint8Array(this.degree);return o.set(r,t),o}return r};var st=ve,Oe={},N={},Ee={};Ee.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40};var M={};const Ve="[0-9]+",lt="[A-Z $%*+\\-./:]+";let U="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";U=U.replace(/u/g,"\\u");const ct="(?:(?![A-Z0-9 $%*+\\-./:]|"+U+`)(?:.|[\r
]))+`;M.KANJI=new RegExp(U,"g");M.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");M.BYTE=new RegExp(ct,"g");M.NUMERIC=new RegExp(Ve,"g");M.ALPHANUMERIC=new RegExp(lt,"g");const dt=new RegExp("^"+U+"$"),ut=new RegExp("^"+Ve+"$"),ft=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");M.testKanji=function(e){return dt.test(e)};M.testNumeric=function(e){return ut.test(e)};M.testAlphanumeric=function(e){return ft.test(e)};(function(n){const e=Ee,i=M;n.NUMERIC={id:"Numeric",bit:1<<0,ccBits:[10,12,14]},n.ALPHANUMERIC={id:"Alphanumeric",bit:1<<1,ccBits:[9,11,13]},n.BYTE={id:"Byte",bit:1<<2,ccBits:[8,16,16]},n.KANJI={id:"Kanji",bit:1<<3,ccBits:[8,10,12]},n.MIXED={bit:-1},n.getCharCountIndicator=function(o,a){if(!o.ccBits)throw new Error("Invalid mode: "+o);if(!e.isValid(a))throw new Error("Invalid version: "+a);return a>=1&&a<10?o.ccBits[0]:a<27?o.ccBits[1]:o.ccBits[2]},n.getBestModeForData=function(o){return i.testNumeric(o)?n.NUMERIC:i.testAlphanumeric(o)?n.ALPHANUMERIC:i.testKanji(o)?n.KANJI:n.BYTE},n.toString=function(o){if(o&&o.id)return o.id;throw new Error("Invalid mode")},n.isValid=function(o){return o&&o.bit&&o.ccBits};function r(t){if(typeof t!="string")throw new Error("Param is not a string");switch(t.toLowerCase()){case"numeric":return n.NUMERIC;case"alphanumeric":return n.ALPHANUMERIC;case"kanji":return n.KANJI;case"byte":return n.BYTE;default:throw new Error("Unknown mode: "+t)}}n.from=function(o,a){if(n.isValid(o))return o;try{return r(o)}catch{return a}}})(N);(function(n){const e=S,i=K,r=q,t=N,o=Ee,a=1<<12|1<<11|1<<10|1<<9|1<<8|1<<5|1<<2|1<<0,l=e.getBCHDigit(a);function s(m,u,p){for(let b=1;b<=40;b++)if(u<=n.getCapacity(b,p,m))return b}function c(m,u){return t.getCharCountIndicator(m,u)+4}function d(m,u){let p=0;return m.forEach(function(b){const k=c(b.mode,u);p+=k+b.getBitsLength()}),p}function v(m,u){for(let p=1;p<=40;p++)if(d(m,p)<=n.getCapacity(p,u,t.MIXED))return p}n.from=function(u,p){return o.isValid(u)?parseInt(u,10):p},n.getCapacity=function(u,p,b){if(!o.isValid(u))throw new Error("Invalid QR Code version");typeof b>"u"&&(b=t.BYTE);const k=e.getSymbolTotalCodewords(u),g=i.getTotalCodewordsCount(u,p),w=(k-g)*8;if(b===t.MIXED)return w;const h=w-c(b,u);switch(b){case t.NUMERIC:return Math.floor(h/10*3);case t.ALPHANUMERIC:return Math.floor(h/11*2);case t.KANJI:return Math.floor(h/13);case t.BYTE:default:return Math.floor(h/8)}},n.getBestVersionForData=function(u,p){let b;const k=r.from(p,r.M);if(Array.isArray(u)){if(u.length>1)return v(u,k);if(u.length===0)return 1;b=u[0]}else b=u;return s(b.mode,b.getLength(),k)},n.getEncodedBits=function(u){if(!o.isValid(u)||u<7)throw new Error("Invalid QR Code version");let p=u<<12;for(;e.getBCHDigit(p)-l>=0;)p^=a<<e.getBCHDigit(p)-l;return u<<12|p}})(Oe);var qe={};const oe=S,Ke=1<<10|1<<8|1<<5|1<<4|1<<2|1<<1|1<<0,ht=1<<14|1<<12|1<<10|1<<4|1<<1,Be=oe.getBCHDigit(Ke);qe.getEncodedBits=function(e,i){const r=e.bit<<3|i;let t=r<<10;for(;oe.getBCHDigit(t)-Be>=0;)t^=Ke<<oe.getBCHDigit(t)-Be;return(r<<10|t)^ht};var Ye={};const gt=N;function P(n){this.mode=gt.NUMERIC,this.data=n.toString()}P.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)};P.prototype.getLength=function(){return this.data.length};P.prototype.getBitsLength=function(){return P.getBitsLength(this.data.length)};P.prototype.write=function(e){let i,r,t;for(i=0;i+3<=this.data.length;i+=3)r=this.data.substr(i,3),t=parseInt(r,10),e.put(t,10);const o=this.data.length-i;o>0&&(r=this.data.substr(i),t=parseInt(r,10),e.put(t,o*3+1))};var mt=P;const pt=N,Z=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function R(n){this.mode=pt.ALPHANUMERIC,this.data=n}R.getBitsLength=function(e){return 11*Math.floor(e/2)+6*(e%2)};R.prototype.getLength=function(){return this.data.length};R.prototype.getBitsLength=function(){return R.getBitsLength(this.data.length)};R.prototype.write=function(e){let i;for(i=0;i+2<=this.data.length;i+=2){let r=Z.indexOf(this.data[i])*45;r+=Z.indexOf(this.data[i+1]),e.put(r,11)}this.data.length%2&&e.put(Z.indexOf(this.data[i]),6)};var bt=R,wt=function(e){for(var i=[],r=e.length,t=0;t<r;t++){var o=e.charCodeAt(t);if(o>=55296&&o<=56319&&r>t+1){var a=e.charCodeAt(t+1);a>=56320&&a<=57343&&(o=(o-55296)*1024+a-56320+65536,t+=1)}if(o<128){i.push(o);continue}if(o<2048){i.push(o>>6|192),i.push(o&63|128);continue}if(o<55296||o>=57344&&o<65536){i.push(o>>12|224),i.push(o>>6&63|128),i.push(o&63|128);continue}if(o>=65536&&o<=1114111){i.push(o>>18|240),i.push(o>>12&63|128),i.push(o>>6&63|128),i.push(o&63|128);continue}i.push(239,191,189)}return new Uint8Array(i).buffer};const yt=wt,vt=N;function D(n){this.mode=vt.BYTE,typeof n=="string"&&(n=yt(n)),this.data=new Uint8Array(n)}D.getBitsLength=function(e){return e*8};D.prototype.getLength=function(){return this.data.length};D.prototype.getBitsLength=function(){return D.getBitsLength(this.data.length)};D.prototype.write=function(n){for(let e=0,i=this.data.length;e<i;e++)n.put(this.data[e],8)};var Et=D;const Ct=N,kt=S;function z(n){this.mode=Ct.KANJI,this.data=n}z.getBitsLength=function(e){return e*13};z.prototype.getLength=function(){return this.data.length};z.prototype.getBitsLength=function(){return z.getBitsLength(this.data.length)};z.prototype.write=function(n){let e;for(e=0;e<this.data.length;e++){let i=kt.toSJIS(this.data[e]);if(i>=33088&&i<=40956)i-=33088;else if(i>=57408&&i<=60351)i-=49472;else throw new Error("Invalid SJIS character: "+this.data[e]+`
Make sure your charset is UTF-8`);i=(i>>>8&255)*192+(i&255),n.put(i,13)}};var St=z,re={},Tt={get exports(){return re},set exports(n){re=n}};(function(n){var e={single_source_shortest_paths:function(i,r,t){var o={},a={};a[r]=0;var l=e.PriorityQueue.make();l.push(r,0);for(var s,c,d,v,m,u,p,b,k;!l.empty();){s=l.pop(),c=s.value,v=s.cost,m=i[c]||{};for(d in m)m.hasOwnProperty(d)&&(u=m[d],p=v+u,b=a[d],k=typeof a[d]>"u",(k||b>p)&&(a[d]=p,l.push(d,p),o[d]=c))}if(typeof t<"u"&&typeof a[t]>"u"){var g=["Could not find a path from ",r," to ",t,"."].join("");throw new Error(g)}return o},extract_shortest_path_from_predecessor_list:function(i,r){for(var t=[],o=r;o;)t.push(o),i[o],o=i[o];return t.reverse(),t},find_path:function(i,r,t){var o=e.single_source_shortest_paths(i,r,t);return e.extract_shortest_path_from_predecessor_list(o,t)},PriorityQueue:{make:function(i){var r=e.PriorityQueue,t={},o;i=i||{};for(o in r)r.hasOwnProperty(o)&&(t[o]=r[o]);return t.queue=[],t.sorter=i.sorter||r.default_sorter,t},default_sorter:function(i,r){return i.cost-r.cost},push:function(i,r){var t={value:i,cost:r};this.queue.push(t),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};n.exports=e})(Tt);(function(n){const e=N,i=mt,r=bt,t=Et,o=St,a=M,l=S,s=re;function c(g){return unescape(encodeURIComponent(g)).length}function d(g,w,h){const f=[];let y;for(;(y=g.exec(h))!==null;)f.push({data:y[0],index:y.index,mode:w,length:y[0].length});return f}function v(g){const w=d(a.NUMERIC,e.NUMERIC,g),h=d(a.ALPHANUMERIC,e.ALPHANUMERIC,g);let f,y;return l.isKanjiModeEnabled()?(f=d(a.BYTE,e.BYTE,g),y=d(a.KANJI,e.KANJI,g)):(f=d(a.BYTE_KANJI,e.BYTE,g),y=[]),w.concat(h,f,y).sort(function(C,T){return C.index-T.index}).map(function(C){return{data:C.data,mode:C.mode,length:C.length}})}function m(g,w){switch(w){case e.NUMERIC:return i.getBitsLength(g);case e.ALPHANUMERIC:return r.getBitsLength(g);case e.KANJI:return o.getBitsLength(g);case e.BYTE:return t.getBitsLength(g)}}function u(g){return g.reduce(function(w,h){const f=w.length-1>=0?w[w.length-1]:null;return f&&f.mode===h.mode?(w[w.length-1].data+=h.data,w):(w.push(h),w)},[])}function p(g){const w=[];for(let h=0;h<g.length;h++){const f=g[h];switch(f.mode){case e.NUMERIC:w.push([f,{data:f.data,mode:e.ALPHANUMERIC,length:f.length},{data:f.data,mode:e.BYTE,length:f.length}]);break;case e.ALPHANUMERIC:w.push([f,{data:f.data,mode:e.BYTE,length:f.length}]);break;case e.KANJI:w.push([f,{data:f.data,mode:e.BYTE,length:c(f.data)}]);break;case e.BYTE:w.push([{data:f.data,mode:e.BYTE,length:c(f.data)}])}}return w}function b(g,w){const h={},f={start:{}};let y=["start"];for(let E=0;E<g.length;E++){const C=g[E],T=[];for(let B=0;B<C.length;B++){const x=C[B],H=""+E+B;T.push(H),h[H]={node:x,lastCount:0},f[H]={};for(let W=0;W<y.length;W++){const A=y[W];h[A]&&h[A].node.mode===x.mode?(f[A][H]=m(h[A].lastCount+x.length,x.mode)-m(h[A].lastCount,x.mode),h[A].lastCount+=x.length):(h[A]&&(h[A].lastCount=x.length),f[A][H]=m(x.length,x.mode)+4+e.getCharCountIndicator(x.mode,w))}}y=T}for(let E=0;E<y.length;E++)f[y[E]].end=0;return{map:f,table:h}}function k(g,w){let h;const f=e.getBestModeForData(g);if(h=e.from(w,f),h!==e.BYTE&&h.bit<f.bit)throw new Error('"'+g+'" cannot be encoded with mode '+e.toString(h)+`.
 Suggested mode is: `+e.toString(f));switch(h===e.KANJI&&!l.isKanjiModeEnabled()&&(h=e.BYTE),h){case e.NUMERIC:return new i(g);case e.ALPHANUMERIC:return new r(g);case e.KANJI:return new o(g);case e.BYTE:return new t(g)}}n.fromArray=function(w){return w.reduce(function(h,f){return typeof f=="string"?h.push(k(f,null)):f.data&&h.push(k(f.data,f.mode)),h},[])},n.fromString=function(w,h){const f=v(w,l.isKanjiModeEnabled()),y=p(f),E=b(y,h),C=s.find_path(E.map,"start","end"),T=[];for(let B=1;B<C.length-1;B++)T.push(E.table[C[B]].node);return n.fromArray(u(T))},n.rawSplit=function(w){return n.fromArray(v(w,l.isKanjiModeEnabled()))}})(Ye);const G=S,X=q,xt=rt,Mt=it,At=Ue,Bt=_e,ie=$e,ae=K,Lt=st,V=Oe,Nt=qe,It=N,ee=Ye;function Pt(n,e){const i=n.size,r=Bt.getPositions(e);for(let t=0;t<r.length;t++){const o=r[t][0],a=r[t][1];for(let l=-1;l<=7;l++)if(!(o+l<=-1||i<=o+l))for(let s=-1;s<=7;s++)a+s<=-1||i<=a+s||(l>=0&&l<=6&&(s===0||s===6)||s>=0&&s<=6&&(l===0||l===6)||l>=2&&l<=4&&s>=2&&s<=4?n.set(o+l,a+s,!0,!0):n.set(o+l,a+s,!1,!0))}}function Rt(n){const e=n.size;for(let i=8;i<e-8;i++){const r=i%2===0;n.set(i,6,r,!0),n.set(6,i,r,!0)}}function Dt(n,e){const i=At.getPositions(e);for(let r=0;r<i.length;r++){const t=i[r][0],o=i[r][1];for(let a=-2;a<=2;a++)for(let l=-2;l<=2;l++)a===-2||a===2||l===-2||l===2||a===0&&l===0?n.set(t+a,o+l,!0,!0):n.set(t+a,o+l,!1,!0)}}function zt(n,e){const i=n.size,r=V.getEncodedBits(e);let t,o,a;for(let l=0;l<18;l++)t=Math.floor(l/3),o=l%3+i-8-3,a=(r>>l&1)===1,n.set(t,o,a,!0),n.set(o,t,a,!0)}function te(n,e,i){const r=n.size,t=Nt.getEncodedBits(e,i);let o,a;for(o=0;o<15;o++)a=(t>>o&1)===1,o<6?n.set(o,8,a,!0):o<8?n.set(o+1,8,a,!0):n.set(r-15+o,8,a,!0),o<8?n.set(8,r-o-1,a,!0):o<9?n.set(8,15-o-1+1,a,!0):n.set(8,15-o-1,a,!0);n.set(r-8,8,1,!0)}function Ht(n,e){const i=n.size;let r=-1,t=i-1,o=7,a=0;for(let l=i-1;l>0;l-=2)for(l===6&&l--;;){for(let s=0;s<2;s++)if(!n.isReserved(t,l-s)){let c=!1;a<e.length&&(c=(e[a]>>>o&1)===1),n.set(t,l-s,c),o--,o===-1&&(a++,o=7)}if(t+=r,t<0||i<=t){t-=r,r=-r;break}}}function Ft(n,e,i){const r=new xt;i.forEach(function(s){r.put(s.mode.bit,4),r.put(s.getLength(),It.getCharCountIndicator(s.mode,n)),s.write(r)});const t=G.getSymbolTotalCodewords(n),o=ae.getTotalCodewordsCount(n,e),a=(t-o)*8;for(r.getLengthInBits()+4<=a&&r.put(0,4);r.getLengthInBits()%8!==0;)r.putBit(0);const l=(a-r.getLengthInBits())/8;for(let s=0;s<l;s++)r.put(s%2?17:236,8);return Ut(r,n,e)}function Ut(n,e,i){const r=G.getSymbolTotalCodewords(e),t=ae.getTotalCodewordsCount(e,i),o=r-t,a=ae.getBlocksCount(e,i),l=r%a,s=a-l,c=Math.floor(r/a),d=Math.floor(o/a),v=d+1,m=c-d,u=new Lt(m);let p=0;const b=new Array(a),k=new Array(a);let g=0;const w=new Uint8Array(n.buffer);for(let C=0;C<a;C++){const T=C<s?d:v;b[C]=w.slice(p,p+T),k[C]=u.encode(b[C]),p+=T,g=Math.max(g,T)}const h=new Uint8Array(r);let f=0,y,E;for(y=0;y<g;y++)for(E=0;E<a;E++)y<b[E].length&&(h[f++]=b[E][y]);for(y=0;y<m;y++)for(E=0;E<a;E++)h[f++]=k[E][y];return h}function _t(n,e,i,r){let t;if(Array.isArray(n))t=ee.fromArray(n);else if(typeof n=="string"){let c=e;if(!c){const d=ee.rawSplit(n);c=V.getBestVersionForData(d,i)}t=ee.fromString(n,c||40)}else throw new Error("Invalid data");const o=V.getBestVersionForData(t,i);if(!o)throw new Error("The amount of data is too big to be stored in a QR Code");if(!e)e=o;else if(e<o)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+o+`.
`);const a=Ft(e,i,t),l=G.getSymbolSize(e),s=new Mt(l);return Pt(s,e),Rt(s),Dt(s,e),te(s,i,0),e>=7&&zt(s,e),Ht(s,a),isNaN(r)&&(r=ie.getBestMask(s,te.bind(null,s,i))),ie.applyMask(r,s),te(s,i,r),{modules:s,version:e,errorCorrectionLevel:i,maskPattern:r,segments:t}}He.create=function(e,i){if(typeof e>"u"||e==="")throw new Error("No input text");let r=X.M,t,o;return typeof i<"u"&&(r=X.from(i.errorCorrectionLevel,X.M),t=V.from(i.version),o=ie.from(i.maskPattern),i.toSJISFunc&&G.setToSJISFunction(i.toSJISFunc)),_t(e,t,r,o)};var Ge={},Ce={};(function(n){function e(i){if(typeof i=="number"&&(i=i.toString()),typeof i!="string")throw new Error("Color should be defined as hex string");let r=i.slice().replace("#","").split("");if(r.length<3||r.length===5||r.length>8)throw new Error("Invalid hex color: "+i);(r.length===3||r.length===4)&&(r=Array.prototype.concat.apply([],r.map(function(o){return[o,o]}))),r.length===6&&r.push("F","F");const t=parseInt(r.join(""),16);return{r:t>>24&255,g:t>>16&255,b:t>>8&255,a:t&255,hex:"#"+r.slice(0,6).join("")}}n.getOptions=function(r){r||(r={}),r.color||(r.color={});const t=typeof r.margin>"u"||r.margin===null||r.margin<0?4:r.margin,o=r.width&&r.width>=21?r.width:void 0,a=r.scale||4;return{width:o,scale:o?4:a,margin:t,color:{dark:e(r.color.dark||"#000000ff"),light:e(r.color.light||"#ffffffff")},type:r.type,rendererOpts:r.rendererOpts||{}}},n.getScale=function(r,t){return t.width&&t.width>=r+t.margin*2?t.width/(r+t.margin*2):t.scale},n.getImageWidth=function(r,t){const o=n.getScale(r,t);return Math.floor((r+t.margin*2)*o)},n.qrToImageData=function(r,t,o){const a=t.modules.size,l=t.modules.data,s=n.getScale(a,o),c=Math.floor((a+o.margin*2)*s),d=o.margin*s,v=[o.color.light,o.color.dark];for(let m=0;m<c;m++)for(let u=0;u<c;u++){let p=(m*c+u)*4,b=o.color.light;if(m>=d&&u>=d&&m<c-d&&u<c-d){const k=Math.floor((m-d)/s),g=Math.floor((u-d)/s);b=v[l[k*a+g]?1:0]}r[p++]=b.r,r[p++]=b.g,r[p++]=b.b,r[p]=b.a}}})(Ce);(function(n){const e=Ce;function i(t,o,a){t.clearRect(0,0,o.width,o.height),o.style||(o.style={}),o.height=a,o.width=a,o.style.height=a+"px",o.style.width=a+"px"}function r(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}n.render=function(o,a,l){let s=l,c=a;typeof s>"u"&&(!a||!a.getContext)&&(s=a,a=void 0),a||(c=r()),s=e.getOptions(s);const d=e.getImageWidth(o.modules.size,s),v=c.getContext("2d"),m=v.createImageData(d,d);return e.qrToImageData(m.data,o,s),i(v,c,d),v.putImageData(m,0,0),c},n.renderToDataURL=function(o,a,l){let s=l;typeof s>"u"&&(!a||!a.getContext)&&(s=a,a=void 0),s||(s={});const c=n.render(o,a,s),d=s.type||"image/png",v=s.rendererOpts||{};return c.toDataURL(d,v.quality)}})(Ge);var We={};const $t=Ce;function Le(n,e){const i=n.a/255,r=e+'="'+n.hex+'"';return i<1?r+" "+e+'-opacity="'+i.toFixed(2).slice(1)+'"':r}function ne(n,e,i){let r=n+e;return typeof i<"u"&&(r+=" "+i),r}function Jt(n,e,i){let r="",t=0,o=!1,a=0;for(let l=0;l<n.length;l++){const s=Math.floor(l%e),c=Math.floor(l/e);!s&&!o&&(o=!0),n[l]?(a++,l>0&&s>0&&n[l-1]||(r+=o?ne("M",s+i,.5+c+i):ne("m",t,0),t=0,o=!1),s+1<e&&n[l+1]||(r+=ne("h",a),a=0)):t++}return r}We.render=function(e,i,r){const t=$t.getOptions(i),o=e.modules.size,a=e.modules.data,l=o+t.margin*2,s=t.color.light.a?"<path "+Le(t.color.light,"fill")+' d="M0 0h'+l+"v"+l+'H0z"/>':"",c="<path "+Le(t.color.dark,"stroke")+' d="'+Jt(a,o,t.margin)+'"/>',d='viewBox="0 0 '+l+" "+l+'"',m='<svg xmlns="http://www.w3.org/2000/svg" '+(t.width?'width="'+t.width+'" height="'+t.width+'" ':"")+d+' shape-rendering="crispEdges">'+s+c+`</svg>
`;return typeof r=="function"&&r(null,m),m};const jt=nt,se=He,Qe=Ge,Ot=We;function ke(n,e,i,r,t){const o=[].slice.call(arguments,1),a=o.length,l=typeof o[a-1]=="function";if(!l&&!jt())throw new Error("Callback required as last argument");if(l){if(a<2)throw new Error("Too few arguments provided");a===2?(t=i,i=e,e=r=void 0):a===3&&(e.getContext&&typeof t>"u"?(t=r,r=void 0):(t=r,r=i,i=e,e=void 0))}else{if(a<1)throw new Error("Too few arguments provided");return a===1?(i=e,e=r=void 0):a===2&&!e.getContext&&(r=i,i=e,e=void 0),new Promise(function(s,c){try{const d=se.create(i,r);s(n(d,e,r))}catch(d){c(d)}})}try{const s=se.create(i,r);t(null,n(s,e,r))}catch(s){t(s)}}_.create=se.create;_.toCanvas=ke.bind(null,Qe.render);_.toDataURL=ke.bind(null,Qe.renderToDataURL);_.toString=ke.bind(null,function(n,e,i){return Ot.render(n,i)});const Ne=["manzdev","midudev","eduardofierropro","s4vitaar","afor_digital","vamoacodear","todocode","chrisvdev","carmenansio","goncypozzo","padawanstrainer","mouredev","malpicado","niv3k_el_pato","rafalagoon","altaskur","bluuweb","fpiaggio","gentleman_programming","matiasbaldanza","gabus19","fazt","luisllamas_es","heynau","garageideas","desarrolloutil","carlosazaustre","giuscaminiti","danirod_","codigodemarras","nategentile7","verownika","applecoding","guillermorodas","5ro4","guinxu","charditronic","konypyon","ari_reinventada","fmontes83","nucliweb","ikurotime","codelytv","carlosgamedeveloper","stackthepile","miriamgonp","dotcsv","hardware360","shelldredd","hitheart","elrincondeldev","serudda","melenitasdev","zatge","programacion_en_esp","ciw1c","snvfyy","hdeleonnet","emoporemilio","hache_raw","codingiscaring","tarmop"],Ie=["Lo que el hacker se llevó","1, 2, 3... el kukoro inglés","Lluvia de hamburguesas","Un tranvía llamado CSS","IT, un dev asesino","Cazadores de bots","Dockerina, la ballena CSS","Quién tiene Linux, tiene un tesoro","Webpack, una odisea de despacio","Manz, el autoestopista galactico","John «Manzick»","Lluvia de bugs","Picando hasta el amanecer","Centrando a Nemo, con CSS","Android y yo","InCSSption","Debug in the shell","Ciudadano JSON","Moviendo las manitas","Lo que tailwind se llevó","Your code","Afor, la encuestadora","JSON Bourne","Javamanji","Typescript, mi villano favorito","Piratas del FullStack Valley","Bug Hunter","Dev a los 40","#fff nieves","Mi vecino Kukoro","Tengo más estilos que CSS","JSON 13","The Dark Mode Rises","Toma el código y corre","Postman: el superhéroe","El lobo de Await Sync","Agente CSS","El día que el terminal se detuvo",".addEvent('Horizon')","The parent script","Colega donde esta mi repo?","Afor, la encuestadora 2","The CSSMask","CTRL+C CTRL+V","Indiana Node y el terminal maldito","Sea #","Manz in the middle","No me hagas un display none","La reina de Javascript","Superagente x386","El bueno, el malo y el framework","Afor, la última encuesta","EduardoFierro Manostijeras","DevDependencies Day","Indiana Node: el regreso de ChatGPT","El diario de PHP Jones","Indiana Node y los tipos perdidos","Jurassic Webpack","Soy tan div-ertido","Nodebusters","La chica de rgb(255, 0, 0)","Gulp Fiction","La sociedad de los PHP muertos","jQuery, el regreso","Me, myself and this","El señor de los códigos","iTerm-nator","Kill -9 bill","Cómo conocí a vuestro Linux","#tower-of-pisa { font-style: italic; }","Pesadilla en testing","Borrando a system32","The Incredible Bugs","Regreso al kukoro","Kernel Panic: Cuando la terminal se murió","Stack Wars: El ataque de los Chromes","El CSS viste a la moda","Sé lo que hicieron el release pasado","Rápidos y debugeadores","Un dev a prueba de bugs","El último hacker en La Tierra","Hijos de los frameworks","La bella y Java","Hackéalo como puedas 33 1/3","Entrenando a mi Junior","Ant-Manz","HansTML y grelCSS: Cazadores de BruJaS","Refactoriza como puedas","Piratas del caribe: En el fin de Cobol","Moulin #F00","Back to the commit","Stack Wars: new Hope()","#000 panter","Indiana Afor: La encuesta perdida","Stack Wars: La venganza de NextJS","Mi abuelo Fortran","PHP: Duro de compilar","Harry Potter and the Laravel Artisan","Sólo en ~","James Funciona 404","SpiderManz","El último commit","Algo pasa con Java","The Clip-Path","Dos frameworks muy tontos","Stack Wars: La guerra de los Coboles","El extraño caso de Afor y Laravel","Foreach Gump","El junior con el pijama de Senior","Javanator: El día del release final","The Promise()","Varmanz: El caballero del dark mode","Transpilar nunca, tipar jamás","VIM y el día que pude salir","Manz y la fábrica de dibujos con CSS","En mi local funciona","Frameworks fantásticos","Commitear nunca, pushear jamás","Back add-ons","Colega, ¿dónde está mi copilot?","ID Astra: Hacia los selectores","El curioso caso de DivRole Button","Instinto BASIC","Flutter Club","Alto o mi madre mergea","Mi primer trabajo: Legacy code","La quinta 'Hola Mundo'","La venganza del código fuente","El objeto sin fin","Call of Duty: DevOps","James Bond: El Java nunca muere","Rescatando al soldado VIM","Error 404: La aventura recién comienza","Javatar","Super BASIC Bros","NPM Gun","Typescript, la gata rompehogares","Aladiv","Codemor","XML vs JSON","3px sobre el cielo","Kunfu pandas","Los códigos de Narnia","Terminator: La rebelión del código fuente","Sliderman","Clojure, encerrado y atrapado","DEVastado","Guardians of the legacy","Guerra Mundial z-index","Cincuenta sombras de CSS","Go busters","Scary Bug","Dos bugs rebeldes","Big integer in Little China","Api driver","El hombre opacity: 0","Asembler de bits","Javagueddon","La princesa Mongonode","Los programadores de la mesa cuadrada","Sharp: Un tiburón pragmático","The Full Stack Avengers","El hombre que susurraba a los viewers","Las vacaciones de Mr Vim","Deno saur: el renacer","Los hombres de #000","CSSpíritu salvaje","Como conocí a vuestra you.parent()","El día que hice un DELETE sin WHERE","Div, ul, button y otros códigos del montón","Jurassic Dev","Apocalypse Node","El Gran Devowski","La pesadilla del deploy del viernes","CSSnicienta","American History XML","El eCSSorsista","nth-last-man on earth","Amazonia, una nueva experiencia","Fantastic Fortran","Misión imposible: Protocolo no permitido","V de Visual Studio","The ul of Schindler","C#anibal","Perl Harbor","Magento","Tablas, tiempos difíciles","El código da Vinci.js","Polyfill de guardería","The CORS","Const int n","Programa que no es poco","Princess Monokai","C#3PO: Una historia de Java Wars","Cariño, encogí a los divs","Mavenrick","El array león","Tira a MySQL del tren","El bug de Truman","Windows: Actualiza como puedas"],Vt=20,qt=80,Pe=["15:00","18:00","21:00","00:00"],Re=["$10 (Oferta Junior)","$18 (Precio Senior)"],I=n=>Math.floor(Math.random()*n);class Se extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}init(){const e=I(Ne.length);this.streamer=Ne[e];const i=I(Ie.length);this.movie=Ie[i],this.screenNumber=String(1+I(Vt)).padStart(2,"0"),this.seatNumber=1+I(qt);const r=I(Pe.length);this.schedule=Pe[r];const t=I(Re.length);this.price=Re[t];const o=new Date;this.date={day:String(o.getDate()).padStart(2,"0"),month:String(o.getMonth()+1).padStart(2,"0"),year:o.getFullYear()},this.url="https://twitch.tv/"+this.streamer}async generateQR(){this.qr=await _.toDataURL(this.url,{type:"image/png"})}async connectedCallback(){this.init(),await this.generateQR(),this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${Se.styles}</style>
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
    </div>`}}customElements.define("cinema-ticket",Se);const Kt=`/* Autor: the_sandok */
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

/* Tortugas ninja (maxi83c) */
.leonardo {
  background:
    linear-gradient(
      to bottom,
      #4ea54f 0% 5%,
      #0081bf 5% 10%,
      #4ea54f 10% 20%,
      transparent 20% 45%,
      #624242 45% 50%,
      transparent 50% 65%,
      #4ea54f 65% 80%,
      #0081bf 80% 85%,
      #4ea54f 85% 100%
    ),
    linear-gradient(
      to right,
      #bc7200 0 15%,
      #4ea54f 16% 50%,
      #4b4217 11%
    );
}

.michelangelo {
  background:
    linear-gradient(
      to bottom,
      #4ea54f 0% 5%,
      #e08022 5% 10%,
      #4ea54f 10% 20%,
      transparent 20% 45%,
      #624242 45% 50%,
      transparent 50% 65%,
      #4ea54f 65% 80%,
      #e08022 80% 85%,
      #4ea54f 85% 100%
    ),
    linear-gradient(
      to right,
      #bc7200 0 15%,
      #4ea54f 16% 50%,
      #4b4217 11%
    );
}

.donatello {
  background:
    linear-gradient(
      to bottom,
      #4ea54f 0% 5%,
      #5b2375 5% 10%,
      #4ea54f 10% 20%,
      transparent 20% 45%,
      #624242 45% 50%,
      transparent 50% 65%,
      #4ea54f 65% 80%,
      #5b2375 80% 85%,
      #4ea54f 85% 100%
    ),
    linear-gradient(
      to right,
      #bc7200 0 15%,
      #4ea54f 16% 50%,
      #4b4217 11%
    );
}

.raphael {
  background:
    linear-gradient(
      to bottom,
      #4ea54f 0% 5%,
      #d51b1e 5% 10%,
      #4ea54f 10% 20%,
      transparent 20% 45%,
      #624242 45% 50%,
      transparent 50% 65%,
      #4ea54f 65% 80%,
      #d51b1e 80% 85%,
      #4ea54f 85% 100%
    ),
    linear-gradient(
      to right,
      #bc7200 0 15%,
      #4ea54f 16% 50%,
      #4b4217 11%
    );
}

/* (Maikcol) */
.medieval-soldier {
  background:
    linear-gradient(
      to bottom,
      #8a939a 0% 20%,
      transparent 20% 45%,
      #8a939a 45% 50%,
      #8a939a 50% 65%,
      #442a09 65% 68%,
      #8a939a 67% 90%,
      #442a09 90% 100%
    ),
    linear-gradient(
      to right,
      #8a939a 0 15%,
      #ffd9b1 16% 85%,
      #8a939a 85% 100%
    );
}
`,De=["naked","prisoner","child","superman","wednesday","sport1","krillin","homer","shaggy","plomo","blonde","sailor-moon","sailor-marte","sailor-jupiter","sailor-mercurio","sailor-venus","chrisvdev","moda","mike","goose","ghost","police","joker","security","sheldon-doppler","hulk","leonardo","donatello","michelangelo","raphael","medieval-soldier"];class Te extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}init(){this.style.setProperty("--color",this.getAttribute("color")),this.style.setProperty("--delay-jump-time",Math.floor(Math.random()*2)+"s"),this.style.setProperty("--delay-rotate-time",Math.floor(Math.random()*2)+"s"),this.username=this.getAttribute("username")||"Sr. Anónimo"}static get styles(){return`
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

      ${Kt}

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
    `}connectedCallback(){this.init(),this.render();const e=~~(Math.random()*De.length),i=this.shadowRoot.querySelector(".person"),r=De[e];i.classList.add(r)}setHeight(){const e=85+Math.floor(Math.random()*20);this.style.setProperty("--height",`${e}px`)}render(){this.shadowRoot.innerHTML=`
    <style>${Te.styles}</style>
    <div class="person-container">
      <span class="username">${this.username}</span>
      <div class="person"></div>
    </div>`}}customElements.define("person-viewer",Te);document.querySelector(".container");const Yt=document.querySelector(".cinema-queue"),ze=new Set,Ze=new tmi.Client({channels:["manzdev"]});Ze.connect();Ze.on("message",(n,e,i,r)=>{const t=e.username,o=e.color||"#00000077",a=i==="!ticket",l=ze.has(t);if(a&&!l){const s=document.createElement("person-viewer");s.setAttribute("username",t),s.setAttribute("color",o),Yt.insertAdjacentElement("beforeend",s),ze.add(t)}});
