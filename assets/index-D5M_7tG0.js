(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function bg(t,e,n){return(e=wg(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function qc(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,s)}return n}function P(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?qc(Object(n),!0).forEach(function(s){bg(t,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):qc(Object(n)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(n,s))})}return t}function Cg(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var s=n.call(t,e);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function wg(t){var e=Cg(t,"string");return typeof e=="symbol"?e:e+""}const Yc=()=>{};let Tl={},vd={},yd=null,bd={mark:Yc,measure:Yc};try{typeof window<"u"&&(Tl=window),typeof document<"u"&&(vd=document),typeof MutationObserver<"u"&&(yd=MutationObserver),typeof performance<"u"&&(bd=performance)}catch{}const{userAgent:Qc=""}=Tl.navigator||{},Pn=Tl,Re=vd,Xc=yd,gr=bd;Pn.document;const cn=!!Re.documentElement&&!!Re.head&&typeof Re.addEventListener=="function"&&typeof Re.createElement=="function",Cd=~Qc.indexOf("MSIE")||~Qc.indexOf("Trident/");var Eg=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Sg=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,wd={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},xg={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Ed=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],et="classic",uo="duotone",Ig="sharp",Tg="sharp-duotone",Sd=[et,uo,Ig,Tg],kg={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},Ag={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},Pg=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Rg={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Ng=["fak","fa-kit","fakd","fa-kit-duotone"],Jc={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Og=["kit"],Mg={kit:{"fa-kit":"fak"}},Dg=["fak","fakd"],Lg={kit:{fak:"fa-kit"}},Zc={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},_r={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Fg=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],$g=["fak","fa-kit","fakd","fa-kit-duotone"],Bg={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Vg={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},Ug={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},ka={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},Hg=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Aa=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...Fg,...Hg],jg=["solid","regular","light","thin","duotone","brands"],xd=[1,2,3,4,5,6,7,8,9,10],Wg=xd.concat([11,12,13,14,15,16,17,18,19,20]),zg=[...Object.keys(Ug),...jg,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",_r.GROUP,_r.SWAP_OPACITY,_r.PRIMARY,_r.SECONDARY].concat(xd.map(t=>"".concat(t,"x"))).concat(Wg.map(t=>"w-".concat(t))),Gg={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const rn="___FONT_AWESOME___",Pa=16,Id="fa",Td="svg-inline--fa",is="data-fa-i2svg",Ra="data-fa-pseudo-element",Kg="data-fa-pseudo-element-pending",kl="data-prefix",Al="data-icon",eu="fontawesome-i2svg",qg="async",Yg=["HTML","HEAD","STYLE","SCRIPT"],kd=(()=>{try{return!0}catch{return!1}})();function Xi(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[et]}})}const Ad=P({},wd);Ad[et]=P(P(P(P({},{"fa-duotone":"duotone"}),wd[et]),Jc.kit),Jc["kit-duotone"]);const Qg=Xi(Ad),Na=P({},Rg);Na[et]=P(P(P(P({},{duotone:"fad"}),Na[et]),Zc.kit),Zc["kit-duotone"]);const tu=Xi(Na),Oa=P({},ka);Oa[et]=P(P({},Oa[et]),Lg.kit);const Pl=Xi(Oa),Ma=P({},Vg);Ma[et]=P(P({},Ma[et]),Mg.kit);Xi(Ma);const Xg=Eg,Pd="fa-layers-text",Jg=Sg,Zg=P({},kg);Xi(Zg);const e_=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Go=xg,t_=[...Og,...zg],di=Pn.FontAwesomeConfig||{};function n_(t){var e=Re.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function s_(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}Re&&typeof Re.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,s]=e;const i=s_(n_(n));i!=null&&(di[s]=i)});const Rd={styleDefault:"solid",familyDefault:et,cssPrefix:Id,replacementClass:Td,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};di.familyPrefix&&(di.cssPrefix=di.familyPrefix);const Ms=P(P({},Rd),di);Ms.autoReplaceSvg||(Ms.observeMutations=!1);const G={};Object.keys(Rd).forEach(t=>{Object.defineProperty(G,t,{enumerable:!0,set:function(e){Ms[t]=e,hi.forEach(n=>n(G))},get:function(){return Ms[t]}})});Object.defineProperty(G,"familyPrefix",{enumerable:!0,set:function(t){Ms.cssPrefix=t,hi.forEach(e=>e(G))},get:function(){return Ms.cssPrefix}});Pn.FontAwesomeConfig=G;const hi=[];function i_(t){return hi.push(t),()=>{hi.splice(hi.indexOf(t),1)}}const hn=Pa,Ht={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function r_(t){if(!t||!cn)return;const e=Re.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=Re.head.childNodes;let s=null;for(let i=n.length-1;i>-1;i--){const r=n[i],o=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(s=r)}return Re.head.insertBefore(e,s),t}const o_="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ki(){let t=12,e="";for(;t-- >0;)e+=o_[Math.random()*62|0];return e}function zs(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Rl(t){return t.classList?zs(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Nd(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function a_(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Nd(t[n]),'" '),"").trim()}function fo(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Nl(t){return t.size!==Ht.size||t.x!==Ht.x||t.y!==Ht.y||t.rotate!==Ht.rotate||t.flipX||t.flipY}function l_(t){let{transform:e,containerWidth:n,iconWidth:s}=t;const i={transform:"translate(".concat(n/2," 256)")},r="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(r," ").concat(o," ").concat(a)},c={transform:"translate(".concat(s/2*-1," -256)")};return{outer:i,inner:l,path:c}}function c_(t){let{transform:e,width:n=Pa,height:s=Pa,startCentered:i=!1}=t,r="";return i&&Cd?r+="translate(".concat(e.x/hn-n/2,"em, ").concat(e.y/hn-s/2,"em) "):i?r+="translate(calc(-50% + ".concat(e.x/hn,"em), calc(-50% + ").concat(e.y/hn,"em)) "):r+="translate(".concat(e.x/hn,"em, ").concat(e.y/hn,"em) "),r+="scale(".concat(e.size/hn*(e.flipX?-1:1),", ").concat(e.size/hn*(e.flipY?-1:1),") "),r+="rotate(".concat(e.rotate,"deg) "),r}var u_=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function Od(){const t=Id,e=Td,n=G.cssPrefix,s=G.replacementClass;let i=u_;if(n!==t||s!==e){const r=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(r,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(s))}return i}let nu=!1;function Ko(){G.autoAddCss&&!nu&&(r_(Od()),nu=!0)}var f_={mixout(){return{dom:{css:Od,insertCss:Ko}}},hooks(){return{beforeDOMElementCreation(){Ko()},beforeI2svg(){Ko()}}}};const on=Pn||{};on[rn]||(on[rn]={});on[rn].styles||(on[rn].styles={});on[rn].hooks||(on[rn].hooks={});on[rn].shims||(on[rn].shims=[]);var jt=on[rn];const Md=[],Dd=function(){Re.removeEventListener("DOMContentLoaded",Dd),Nr=1,Md.map(t=>t())};let Nr=!1;cn&&(Nr=(Re.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Re.readyState),Nr||Re.addEventListener("DOMContentLoaded",Dd));function d_(t){cn&&(Nr?setTimeout(t,0):Md.push(t))}function Ji(t){const{tag:e,attributes:n={},children:s=[]}=t;return typeof t=="string"?Nd(t):"<".concat(e," ").concat(a_(n),">").concat(s.map(Ji).join(""),"</").concat(e,">")}function su(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var qo=function(e,n,s,i){var r=Object.keys(e),o=r.length,a=n,l,c,u;for(s===void 0?(l=1,u=e[r[0]]):(l=0,u=s);l<o;l++)c=r[l],u=a(u,e[c],c,e);return u};function h_(t){const e=[];let n=0;const s=t.length;for(;n<s;){const i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<s){const r=t.charCodeAt(n++);(r&64512)==56320?e.push(((i&1023)<<10)+(r&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Da(t){const e=h_(t);return e.length===1?e[0].toString(16):null}function p_(t,e){const n=t.length;let s=t.charCodeAt(e),i;return s>=55296&&s<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(s-55296)*1024+i-56320+65536:s}function iu(t){return Object.keys(t).reduce((e,n)=>{const s=t[n];return!!s.icon?e[s.iconName]=s.icon:e[n]=s,e},{})}function La(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:s=!1}=n,i=iu(e);typeof jt.hooks.addPack=="function"&&!s?jt.hooks.addPack(t,iu(e)):jt.styles[t]=P(P({},jt.styles[t]||{}),i),t==="fas"&&La("fa",e)}const{styles:Ai,shims:m_}=jt,Ld=Object.keys(Pl),g_=Ld.reduce((t,e)=>(t[e]=Object.keys(Pl[e]),t),{});let Ol=null,Fd={},$d={},Bd={},Vd={},Ud={};function __(t){return~t_.indexOf(t)}function v_(t,e){const n=e.split("-"),s=n[0],i=n.slice(1).join("-");return s===t&&i!==""&&!__(i)?i:null}const Hd=()=>{const t=s=>qo(Ai,(i,r,o)=>(i[o]=qo(r,s,{}),i),{});Fd=t((s,i,r)=>(i[3]&&(s[i[3]]=r),i[2]&&i[2].filter(a=>typeof a=="number").forEach(a=>{s[a.toString(16)]=r}),s)),$d=t((s,i,r)=>(s[r]=r,i[2]&&i[2].filter(a=>typeof a=="string").forEach(a=>{s[a]=r}),s)),Ud=t((s,i,r)=>{const o=i[2];return s[r]=r,o.forEach(a=>{s[a]=r}),s});const e="far"in Ai||G.autoFetchSvg,n=qo(m_,(s,i)=>{const r=i[0];let o=i[1];const a=i[2];return o==="far"&&!e&&(o="fas"),typeof r=="string"&&(s.names[r]={prefix:o,iconName:a}),typeof r=="number"&&(s.unicodes[r.toString(16)]={prefix:o,iconName:a}),s},{names:{},unicodes:{}});Bd=n.names,Vd=n.unicodes,Ol=ho(G.styleDefault,{family:G.familyDefault})};i_(t=>{Ol=ho(t.styleDefault,{family:G.familyDefault})});Hd();function Ml(t,e){return(Fd[t]||{})[e]}function y_(t,e){return($d[t]||{})[e]}function Jn(t,e){return(Ud[t]||{})[e]}function jd(t){return Bd[t]||{prefix:null,iconName:null}}function b_(t){const e=Vd[t],n=Ml("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Rn(){return Ol}const Wd=()=>({prefix:null,iconName:null,rest:[]});function C_(t){let e=et;const n=Ld.reduce((s,i)=>(s[i]="".concat(G.cssPrefix,"-").concat(i),s),{});return Sd.forEach(s=>{(t.includes(n[s])||t.some(i=>g_[s].includes(i)))&&(e=s)}),e}function ho(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=et}=e,s=Qg[n][t];if(n===uo&&!t)return"fad";const i=tu[n][t]||tu[n][s],r=t in jt.styles?t:null;return i||r||null}function w_(t){let e=[],n=null;return t.forEach(s=>{const i=v_(G.cssPrefix,s);i?n=i:s&&e.push(s)}),{iconName:n,rest:e}}function ru(t){return t.sort().filter((e,n,s)=>s.indexOf(e)===n)}function po(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let s=null;const i=Aa.concat($g),r=ru(t.filter(f=>i.includes(f))),o=ru(t.filter(f=>!Aa.includes(f))),a=r.filter(f=>(s=f,!Ed.includes(f))),[l=null]=a,c=C_(r),u=P(P({},w_(o)),{},{prefix:ho(l,{family:c})});return P(P(P({},u),I_({values:t,family:c,styles:Ai,config:G,canonical:u,givenPrefix:s})),E_(n,s,u))}function E_(t,e,n){let{prefix:s,iconName:i}=n;if(t||!s||!i)return{prefix:s,iconName:i};const r=e==="fa"?jd(i):{},o=Jn(s,i);return i=r.iconName||o||i,s=r.prefix||s,s==="far"&&!Ai.far&&Ai.fas&&!G.autoFetchSvg&&(s="fas"),{prefix:s,iconName:i}}const S_=Sd.filter(t=>t!==et||t!==uo),x_=Object.keys(ka).filter(t=>t!==et).map(t=>Object.keys(ka[t])).flat();function I_(t){const{values:e,family:n,canonical:s,givenPrefix:i="",styles:r={},config:o={}}=t,a=n===uo,l=e.includes("fa-duotone")||e.includes("fad"),c=o.familyDefault==="duotone",u=s.prefix==="fad"||s.prefix==="fa-duotone";if(!a&&(l||c||u)&&(s.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(s.prefix="fab"),!s.prefix&&S_.includes(n)&&(Object.keys(r).find(d=>x_.includes(d))||o.autoFetchSvg)){const d=Pg.get(n).defaultShortPrefixId;s.prefix=d,s.iconName=Jn(s.prefix,s.iconName)||s.iconName}return(s.prefix==="fa"||i==="fa")&&(s.prefix=Rn()||"fas"),s}class T_{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),s=0;s<e;s++)n[s]=arguments[s];const i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(r=>{this.definitions[r]=P(P({},this.definitions[r]||{}),i[r]),La(r,i[r]);const o=Pl[et][r];o&&La(o,i[r]),Hd()})}reset(){this.definitions={}}_pullDefinitions(e,n){const s=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(s).map(i=>{const{prefix:r,iconName:o,icon:a}=s[i],l=a[2];e[r]||(e[r]={}),l.length>0&&l.forEach(c=>{typeof c=="string"&&(e[r][c]=a)}),e[r][o]=a}),e}}let ou=[],Es={};const Is={},k_=Object.keys(Is);function A_(t,e){let{mixoutsTo:n}=e;return ou=t,Es={},Object.keys(Is).forEach(s=>{k_.indexOf(s)===-1&&delete Is[s]}),ou.forEach(s=>{const i=s.mixout?s.mixout():{};if(Object.keys(i).forEach(r=>{typeof i[r]=="function"&&(n[r]=i[r]),typeof i[r]=="object"&&Object.keys(i[r]).forEach(o=>{n[r]||(n[r]={}),n[r][o]=i[r][o]})}),s.hooks){const r=s.hooks();Object.keys(r).forEach(o=>{Es[o]||(Es[o]=[]),Es[o].push(r[o])})}s.provides&&s.provides(Is)}),n}function Fa(t,e){for(var n=arguments.length,s=new Array(n>2?n-2:0),i=2;i<n;i++)s[i-2]=arguments[i];return(Es[t]||[]).forEach(o=>{e=o.apply(null,[e,...s])}),e}function rs(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),s=1;s<e;s++)n[s-1]=arguments[s];(Es[t]||[]).forEach(r=>{r.apply(null,n)})}function Nn(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Is[t]?Is[t].apply(null,e):void 0}function $a(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||Rn();if(e)return e=Jn(n,e)||e,su(zd.definitions,n,e)||su(jt.styles,n,e)}const zd=new T_,P_=()=>{G.autoReplaceSvg=!1,G.observeMutations=!1,rs("noAuto")},R_={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return cn?(rs("beforeI2svg",t),Nn("pseudoElements2svg",t),Nn("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;G.autoReplaceSvg===!1&&(G.autoReplaceSvg=!0),G.observeMutations=!0,d_(()=>{O_({autoReplaceSvgRoot:e}),rs("watch",t)})}},N_={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Jn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=ho(t[0]);return{prefix:n,iconName:Jn(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(G.cssPrefix,"-"))>-1||t.match(Xg))){const e=po(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||Rn(),iconName:Jn(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=Rn();return{prefix:e,iconName:Jn(e,t)||t}}}},yt={noAuto:P_,config:G,dom:R_,parse:N_,library:zd,findIconDefinition:$a,toHtml:Ji},O_=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=Re}=t;(Object.keys(jt.styles).length>0||G.autoFetchSvg)&&cn&&G.autoReplaceSvg&&yt.dom.i2svg({node:e})};function mo(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>Ji(n))}}),Object.defineProperty(t,"node",{get:function(){if(!cn)return;const n=Re.createElement("div");return n.innerHTML=t.html,n.children}}),t}function M_(t){let{children:e,main:n,mask:s,attributes:i,styles:r,transform:o}=t;if(Nl(o)&&n.found&&!s.found){const{width:a,height:l}=n,c={x:a/l/2,y:.5};i.style=fo(P(P({},r),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function D_(t){let{prefix:e,iconName:n,children:s,attributes:i,symbol:r}=t;const o=r===!0?"".concat(e,"-").concat(G.cssPrefix,"-").concat(n):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:P(P({},i),{},{id:o}),children:s}]}]}function Dl(t){const{icons:{main:e,mask:n},prefix:s,iconName:i,transform:r,symbol:o,title:a,maskId:l,titleId:c,extra:u,watchable:f=!1}=t,{width:d,height:p}=n.found?n:e,y=Dg.includes(s),_=[G.replacementClass,i?"".concat(G.cssPrefix,"-").concat(i):""].filter(z=>u.classes.indexOf(z)===-1).filter(z=>z!==""||!!z).concat(u.classes).join(" ");let w={children:[],attributes:P(P({},u.attributes),{},{"data-prefix":s,"data-icon":i,class:_,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(d," ").concat(p)})};const C=y&&!~u.classes.indexOf("fa-fw")?{width:"".concat(d/p*16*.0625,"em")}:{};f&&(w.attributes[is]=""),a&&(w.children.push({tag:"title",attributes:{id:w.attributes["aria-labelledby"]||"title-".concat(c||ki())},children:[a]}),delete w.attributes.title);const v=P(P({},w),{},{prefix:s,iconName:i,main:e,mask:n,maskId:l,transform:r,symbol:o,styles:P(P({},C),u.styles)}),{children:T,attributes:O}=n.found&&e.found?Nn("generateAbstractMask",v)||{children:[],attributes:{}}:Nn("generateAbstractIcon",v)||{children:[],attributes:{}};return v.children=T,v.attributes=O,o?D_(v):M_(v)}function au(t){const{content:e,width:n,height:s,transform:i,title:r,extra:o,watchable:a=!1}=t,l=P(P(P({},o.attributes),r?{title:r}:{}),{},{class:o.classes.join(" ")});a&&(l[is]="");const c=P({},o.styles);Nl(i)&&(c.transform=c_({transform:i,startCentered:!0,width:n,height:s}),c["-webkit-transform"]=c.transform);const u=fo(c);u.length>0&&(l.style=u);const f=[];return f.push({tag:"span",attributes:l,children:[e]}),r&&f.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),f}function L_(t){const{content:e,title:n,extra:s}=t,i=P(P(P({},s.attributes),n?{title:n}:{}),{},{class:s.classes.join(" ")}),r=fo(s.styles);r.length>0&&(i.style=r);const o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:Yo}=jt;function Ba(t){const e=t[0],n=t[1],[s]=t.slice(4);let i=null;return Array.isArray(s)?i={tag:"g",attributes:{class:"".concat(G.cssPrefix,"-").concat(Go.GROUP)},children:[{tag:"path",attributes:{class:"".concat(G.cssPrefix,"-").concat(Go.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(G.cssPrefix,"-").concat(Go.PRIMARY),fill:"currentColor",d:s[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:i}}const F_={found:!1,width:512,height:512};function $_(t,e){!kd&&!G.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Va(t,e){let n=e;return e==="fa"&&G.styleDefault!==null&&(e=Rn()),new Promise((s,i)=>{if(n==="fa"){const r=jd(t)||{};t=r.iconName||t,e=r.prefix||e}if(t&&e&&Yo[e]&&Yo[e][t]){const r=Yo[e][t];return s(Ba(r))}$_(t,e),s(P(P({},F_),{},{icon:G.showMissingIcons&&t?Nn("missingIconAbstract")||{}:{}}))})}const lu=()=>{},Ua=G.measurePerformance&&gr&&gr.mark&&gr.measure?gr:{mark:lu,measure:lu},ci='FA "6.7.2"',B_=t=>(Ua.mark("".concat(ci," ").concat(t," begins")),()=>Gd(t)),Gd=t=>{Ua.mark("".concat(ci," ").concat(t," ends")),Ua.measure("".concat(ci," ").concat(t),"".concat(ci," ").concat(t," begins"),"".concat(ci," ").concat(t," ends"))};var Ll={begin:B_,end:Gd};const Sr=()=>{};function cu(t){return typeof(t.getAttribute?t.getAttribute(is):null)=="string"}function V_(t){const e=t.getAttribute?t.getAttribute(kl):null,n=t.getAttribute?t.getAttribute(Al):null;return e&&n}function U_(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(G.replacementClass)}function H_(){return G.autoReplaceSvg===!0?xr.replace:xr[G.autoReplaceSvg]||xr.replace}function j_(t){return Re.createElementNS("http://www.w3.org/2000/svg",t)}function W_(t){return Re.createElement(t)}function Kd(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?j_:W_}=e;if(typeof t=="string")return Re.createTextNode(t);const s=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(r){s.setAttribute(r,t.attributes[r])}),(t.children||[]).forEach(function(r){s.appendChild(Kd(r,{ceFn:n}))}),s}function z_(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const xr={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(Kd(n),e)}),e.getAttribute(is)===null&&G.keepOriginalSource){let n=Re.createComment(z_(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Rl(e).indexOf(G.replacementClass))return xr.replace(t);const s=new RegExp("".concat(G.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const r=n[0].attributes.class.split(" ").reduce((o,a)=>(a===G.replacementClass||a.match(s)?o.toSvg.push(a):o.toNode.push(a),o),{toNode:[],toSvg:[]});n[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",r.toNode.join(" "))}const i=n.map(r=>Ji(r)).join(`
`);e.setAttribute(is,""),e.innerHTML=i}};function uu(t){t()}function qd(t,e){const n=typeof e=="function"?e:Sr;if(t.length===0)n();else{let s=uu;G.mutateApproach===qg&&(s=Pn.requestAnimationFrame||uu),s(()=>{const i=H_(),r=Ll.begin("mutate");t.map(i),r(),n()})}}let Fl=!1;function Yd(){Fl=!0}function Ha(){Fl=!1}let Or=null;function fu(t){if(!Xc||!G.observeMutations)return;const{treeCallback:e=Sr,nodeCallback:n=Sr,pseudoElementsCallback:s=Sr,observeMutationsRoot:i=Re}=t;Or=new Xc(r=>{if(Fl)return;const o=Rn();zs(r).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!cu(a.addedNodes[0])&&(G.searchPseudoElements&&s(a.target),e(a.target)),a.type==="attributes"&&a.target.parentNode&&G.searchPseudoElements&&s(a.target.parentNode),a.type==="attributes"&&cu(a.target)&&~e_.indexOf(a.attributeName))if(a.attributeName==="class"&&V_(a.target)){const{prefix:l,iconName:c}=po(Rl(a.target));a.target.setAttribute(kl,l||o),c&&a.target.setAttribute(Al,c)}else U_(a.target)&&n(a.target)})}),cn&&Or.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function G_(){Or&&Or.disconnect()}function K_(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((s,i)=>{const r=i.split(":"),o=r[0],a=r.slice(1);return o&&a.length>0&&(s[o]=a.join(":").trim()),s},{})),n}function q_(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),s=t.innerText!==void 0?t.innerText.trim():"";let i=po(Rl(t));return i.prefix||(i.prefix=Rn()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&s.length>0&&(i.iconName=y_(i.prefix,t.innerText)||Ml(i.prefix,Da(t.innerText))),!i.iconName&&G.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function Y_(t){const e=zs(t.attributes).reduce((i,r)=>(i.name!=="class"&&i.name!=="style"&&(i[r.name]=r.value),i),{}),n=t.getAttribute("title"),s=t.getAttribute("data-fa-title-id");return G.autoA11y&&(n?e["aria-labelledby"]="".concat(G.replacementClass,"-title-").concat(s||ki()):(e["aria-hidden"]="true",e.focusable="false")),e}function Q_(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ht,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function du(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:s,rest:i}=q_(t),r=Y_(t),o=Fa("parseNodeAttributes",{},t);let a=e.styleParser?K_(t):[];return P({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:s,transform:Ht,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:a,attributes:r}},o)}const{styles:X_}=jt;function Qd(t){const e=G.autoReplaceSvg==="nest"?du(t,{styleParser:!1}):du(t);return~e.extra.classes.indexOf(Pd)?Nn("generateLayersText",t,e):Nn("generateSvgReplacementMutation",t,e)}function J_(){return[...Ng,...Aa]}function hu(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!cn)return Promise.resolve();const n=Re.documentElement.classList,s=u=>n.add("".concat(eu,"-").concat(u)),i=u=>n.remove("".concat(eu,"-").concat(u)),r=G.autoFetchSvg?J_():Ed.concat(Object.keys(X_));r.includes("fa")||r.push("fa");const o=[".".concat(Pd,":not([").concat(is,"])")].concat(r.map(u=>".".concat(u,":not([").concat(is,"])"))).join(", ");if(o.length===0)return Promise.resolve();let a=[];try{a=zs(t.querySelectorAll(o))}catch{}if(a.length>0)s("pending"),i("complete");else return Promise.resolve();const l=Ll.begin("onTree"),c=a.reduce((u,f)=>{try{const d=Qd(f);d&&u.push(d)}catch(d){kd||d.name==="MissingIcon"&&console.error(d)}return u},[]);return new Promise((u,f)=>{Promise.all(c).then(d=>{qd(d,()=>{s("active"),s("complete"),i("pending"),typeof e=="function"&&e(),l(),u()})}).catch(d=>{l(),f(d)})})}function Z_(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Qd(t).then(n=>{n&&qd([n],e)})}function ev(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const s=(e||{}).icon?e:$a(e||{});let{mask:i}=n;return i&&(i=(i||{}).icon?i:$a(i||{})),t(s,P(P({},n),{},{mask:i}))}}const tv=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Ht,symbol:s=!1,mask:i=null,maskId:r=null,title:o=null,titleId:a=null,classes:l=[],attributes:c={},styles:u={}}=e;if(!t)return;const{prefix:f,iconName:d,icon:p}=t;return mo(P({type:"icon"},t),()=>(rs("beforeDOMElementCreation",{iconDefinition:t,params:e}),G.autoA11y&&(o?c["aria-labelledby"]="".concat(G.replacementClass,"-title-").concat(a||ki()):(c["aria-hidden"]="true",c.focusable="false")),Dl({icons:{main:Ba(p),mask:i?Ba(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:f,iconName:d,transform:P(P({},Ht),n),symbol:s,title:o,maskId:r,titleId:a,extra:{attributes:c,styles:u,classes:l}})))};var nv={mixout(){return{icon:ev(tv)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=hu,t.nodeCallback=Z_,t}}},provides(t){t.i2svg=function(e){const{node:n=Re,callback:s=()=>{}}=e;return hu(n,s)},t.generateSvgReplacementMutation=function(e,n){const{iconName:s,title:i,titleId:r,prefix:o,transform:a,symbol:l,mask:c,maskId:u,extra:f}=n;return new Promise((d,p)=>{Promise.all([Va(s,o),c.iconName?Va(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(y=>{let[_,w]=y;d([e,Dl({icons:{main:_,mask:w},prefix:o,iconName:s,transform:a,symbol:l,maskId:u,title:i,titleId:r,extra:f,watchable:!0})])}).catch(p)})},t.generateAbstractIcon=function(e){let{children:n,attributes:s,main:i,transform:r,styles:o}=e;const a=fo(o);a.length>0&&(s.style=a);let l;return Nl(r)&&(l=Nn("generateAbstractTransformGrouping",{main:i,transform:r,containerWidth:i.width,iconWidth:i.width})),n.push(l||i.icon),{children:n,attributes:s}}}},sv={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return mo({type:"layer"},()=>{rs("beforeDOMElementCreation",{assembler:t,params:e});let s=[];return t(i=>{Array.isArray(i)?i.map(r=>{s=s.concat(r.abstract)}):s=s.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(G.cssPrefix,"-layers"),...n].join(" ")},children:s}]})}}}},iv={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:s=[],attributes:i={},styles:r={}}=e;return mo({type:"counter",content:t},()=>(rs("beforeDOMElementCreation",{content:t,params:e}),L_({content:t.toString(),title:n,extra:{attributes:i,styles:r,classes:["".concat(G.cssPrefix,"-layers-counter"),...s]}})))}}}},rv={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Ht,title:s=null,classes:i=[],attributes:r={},styles:o={}}=e;return mo({type:"text",content:t},()=>(rs("beforeDOMElementCreation",{content:t,params:e}),au({content:t,transform:P(P({},Ht),n),title:s,extra:{attributes:r,styles:o,classes:["".concat(G.cssPrefix,"-layers-text"),...i]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:s,transform:i,extra:r}=n;let o=null,a=null;if(Cd){const l=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();o=c.width/l,a=c.height/l}return G.autoA11y&&!s&&(r.attributes["aria-hidden"]="true"),Promise.resolve([e,au({content:e.innerHTML,width:o,height:a,transform:i,title:s,extra:r,watchable:!0})])}}};const ov=new RegExp('"',"ug"),pu=[1105920,1112319],mu=P(P(P(P({},{FontAwesome:{normal:"fas",400:"fas"}}),Ag),Gg),Bg),ja=Object.keys(mu).reduce((t,e)=>(t[e.toLowerCase()]=mu[e],t),{}),av=Object.keys(ja).reduce((t,e)=>{const n=ja[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function lv(t){const e=t.replace(ov,""),n=p_(e,0),s=n>=pu[0]&&n<=pu[1],i=e.length===2?e[0]===e[1]:!1;return{value:Da(i?e[0]:e),isSecondary:s||i}}function cv(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),s=parseInt(e),i=isNaN(s)?"normal":s;return(ja[n]||{})[i]||av[n]}function gu(t,e){const n="".concat(Kg).concat(e.replace(":","-"));return new Promise((s,i)=>{if(t.getAttribute(n)!==null)return s();const o=zs(t.children).filter(d=>d.getAttribute(Ra)===e)[0],a=Pn.getComputedStyle(t,e),l=a.getPropertyValue("font-family"),c=l.match(Jg),u=a.getPropertyValue("font-weight"),f=a.getPropertyValue("content");if(o&&!c)return t.removeChild(o),s();if(c&&f!=="none"&&f!==""){const d=a.getPropertyValue("content");let p=cv(l,u);const{value:y,isSecondary:_}=lv(d),w=c[0].startsWith("FontAwesome");let C=Ml(p,y),v=C;if(w){const T=b_(y);T.iconName&&T.prefix&&(C=T.iconName,p=T.prefix)}if(C&&!_&&(!o||o.getAttribute(kl)!==p||o.getAttribute(Al)!==v)){t.setAttribute(n,v),o&&t.removeChild(o);const T=Q_(),{extra:O}=T;O.attributes[Ra]=e,Va(C,p).then(z=>{const le=Dl(P(P({},T),{},{icons:{main:z,mask:Wd()},prefix:p,iconName:v,extra:O,watchable:!0})),W=Re.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(W,t.firstChild):t.appendChild(W),W.outerHTML=le.map(K=>Ji(K)).join(`
`),t.removeAttribute(n),s()}).catch(i)}else s()}else s()})}function uv(t){return Promise.all([gu(t,"::before"),gu(t,"::after")])}function fv(t){return t.parentNode!==document.head&&!~Yg.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Ra)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function _u(t){if(cn)return new Promise((e,n)=>{const s=zs(t.querySelectorAll("*")).filter(fv).map(uv),i=Ll.begin("searchPseudoElements");Yd(),Promise.all(s).then(()=>{i(),Ha(),e()}).catch(()=>{i(),Ha(),n()})})}var dv={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=_u,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=Re}=e;G.searchPseudoElements&&_u(n)}}};let vu=!1;var hv={mixout(){return{dom:{unwatch(){Yd(),vu=!0}}}},hooks(){return{bootstrap(){fu(Fa("mutationObserverCallbacks",{}))},noAuto(){G_()},watch(t){const{observeMutationsRoot:e}=t;vu?Ha():fu(Fa("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const yu=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,s)=>{const i=s.toLowerCase().split("-"),r=i[0];let o=i.slice(1).join("-");if(r&&o==="h")return n.flipX=!0,n;if(r&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(r){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var pv={mixout(){return{parse:{transform:t=>yu(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=yu(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:s,containerWidth:i,iconWidth:r}=e;const o={transform:"translate(".concat(i/2," 256)")},a="translate(".concat(s.x*32,", ").concat(s.y*32,") "),l="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),c="rotate(".concat(s.rotate," 0 0)"),u={transform:"".concat(a," ").concat(l," ").concat(c)},f={transform:"translate(".concat(r/2*-1," -256)")},d={outer:o,inner:u,path:f};return{tag:"g",attributes:P({},d.outer),children:[{tag:"g",attributes:P({},d.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:P(P({},n.icon.attributes),d.path)}]}]}}}};const Qo={x:0,y:0,width:"100%",height:"100%"};function bu(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function mv(t){return t.tag==="g"?t.children:[t]}var gv={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),s=n?po(n.split(" ").map(i=>i.trim())):Wd();return s.prefix||(s.prefix=Rn()),t.mask=s,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:s,main:i,mask:r,maskId:o,transform:a}=e;const{width:l,icon:c}=i,{width:u,icon:f}=r,d=l_({transform:a,containerWidth:u,iconWidth:l}),p={tag:"rect",attributes:P(P({},Qo),{},{fill:"white"})},y=c.children?{children:c.children.map(bu)}:{},_={tag:"g",attributes:P({},d.inner),children:[bu(P({tag:c.tag,attributes:P(P({},c.attributes),d.path)},y))]},w={tag:"g",attributes:P({},d.outer),children:[_]},C="mask-".concat(o||ki()),v="clip-".concat(o||ki()),T={tag:"mask",attributes:P(P({},Qo),{},{id:C,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,w]},O={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:mv(f)},T]};return n.push(O,{tag:"rect",attributes:P({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(C,")")},Qo)}),{children:n,attributes:s}}}},_v={provides(t){let e=!1;Pn.matchMedia&&(e=Pn.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],s={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:P(P({},s),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const r=P(P({},i),{},{attributeName:"opacity"}),o={tag:"circle",attributes:P(P({},s),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:P(P({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:P(P({},r),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:P(P({},s),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:P(P({},r),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:P(P({},s),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:P(P({},r),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},vv={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),s=n===null?!1:n===""?!0:n;return t.symbol=s,t}}}},yv=[f_,nv,sv,iv,rv,dv,hv,pv,gv,_v,vv];A_(yv,{mixoutsTo:yt});yt.noAuto;yt.config;const bv=yt.library;yt.dom;const Wa=yt.parse;yt.findIconDefinition;yt.toHtml;const Cv=yt.icon;yt.layer;yt.text;yt.counter;/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const wv={prefix:"fas",iconName:"clock",icon:[512,512,[128339,"clock-four"],"f017","M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]},Ev={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},Sv=Ev;/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function $l(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Se={},Ts=[],Wt=()=>{},xv=()=>!1,go=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Bl=t=>t.startsWith("onUpdate:"),We=Object.assign,Vl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Iv=Object.prototype.hasOwnProperty,ve=(t,e)=>Iv.call(t,e),Y=Array.isArray,ks=t=>Zi(t)==="[object Map]",Gs=t=>Zi(t)==="[object Set]",Cu=t=>Zi(t)==="[object Date]",te=t=>typeof t=="function",$e=t=>typeof t=="string",zt=t=>typeof t=="symbol",xe=t=>t!==null&&typeof t=="object",Xd=t=>(xe(t)||te(t))&&te(t.then)&&te(t.catch),Jd=Object.prototype.toString,Zi=t=>Jd.call(t),Tv=t=>Zi(t).slice(8,-1),Zd=t=>Zi(t)==="[object Object]",Ul=t=>$e(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,pi=$l(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),_o=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},kv=/-(\w)/g,xt=_o(t=>t.replace(kv,(e,n)=>n?n.toUpperCase():"")),Av=/\B([A-Z])/g,Fn=_o(t=>t.replace(Av,"-$1").toLowerCase()),vo=_o(t=>t.charAt(0).toUpperCase()+t.slice(1)),Xo=_o(t=>t?`on${vo(t)}`:""),Sn=(t,e)=>!Object.is(t,e),Ir=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},eh=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},Mr=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Pv=t=>{const e=$e(t)?Number(t):NaN;return isNaN(e)?t:e};let wu;const yo=()=>wu||(wu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Hl(t){if(Y(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=$e(s)?Mv(s):Hl(s);if(i)for(const r in i)e[r]=i[r]}return e}else if($e(t)||xe(t))return t}const Rv=/;(?![^(]*\))/g,Nv=/:([^]+)/,Ov=/\/\*[^]*?\*\//g;function Mv(t){const e={};return t.replace(Ov,"").split(Rv).forEach(n=>{if(n){const s=n.split(Nv);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function er(t){let e="";if($e(t))e=t;else if(Y(t))for(let n=0;n<t.length;n++){const s=er(t[n]);s&&(e+=s+" ")}else if(xe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Dv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Lv=$l(Dv);function th(t){return!!t||t===""}function Fv(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=tr(t[s],e[s]);return n}function tr(t,e){if(t===e)return!0;let n=Cu(t),s=Cu(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=zt(t),s=zt(e),n||s)return t===e;if(n=Y(t),s=Y(e),n||s)return n&&s?Fv(t,e):!1;if(n=xe(t),s=xe(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!tr(t[o],e[o]))return!1}}return String(t)===String(e)}function jl(t,e){return t.findIndex(n=>tr(n,e))}const nh=t=>!!(t&&t.__v_isRef===!0),ne=t=>$e(t)?t:t==null?"":Y(t)||xe(t)&&(t.toString===Jd||!te(t.toString))?nh(t)?ne(t.value):JSON.stringify(t,sh,2):String(t),sh=(t,e)=>nh(e)?sh(t,e.value):ks(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[Jo(s,r)+" =>"]=i,n),{})}:Gs(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Jo(n))}:zt(e)?Jo(e):xe(e)&&!Y(e)&&!Zd(e)?String(e):e,Jo=(t,e="")=>{var n;return zt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let st;class ih{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=st,!e&&st&&(this.index=(st.scopes||(st.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=st;try{return st=this,e()}finally{st=n}}}on(){st=this}off(){st=this.parent}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function rh(t){return new ih(t)}function oh(){return st}function $v(t,e=!1){st&&st.cleanups.push(t)}let Te;const Zo=new WeakSet;class ah{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,st&&st.active&&st.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Zo.has(this)&&(Zo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ch(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Eu(this),uh(this);const e=Te,n=Pt;Te=this,Pt=!0;try{return this.fn()}finally{fh(this),Te=e,Pt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Gl(e);this.deps=this.depsTail=void 0,Eu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Zo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){za(this)&&this.run()}get dirty(){return za(this)}}let lh=0,mi,gi;function ch(t,e=!1){if(t.flags|=8,e){t.next=gi,gi=t;return}t.next=mi,mi=t}function Wl(){lh++}function zl(){if(--lh>0)return;if(gi){let e=gi;for(gi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;mi;){let e=mi;for(mi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function uh(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function fh(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),Gl(s),Bv(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function za(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(dh(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function dh(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Pi))return;t.globalVersion=Pi;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!za(t)){t.flags&=-3;return}const n=Te,s=Pt;Te=t,Pt=!0;try{uh(t);const i=t.fn(t._value);(e.version===0||Sn(i,t._value))&&(t._value=i,e.version++)}catch(i){throw e.version++,i}finally{Te=n,Pt=s,fh(t),t.flags&=-3}}function Gl(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)Gl(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Bv(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Pt=!0;const hh=[];function $n(){hh.push(Pt),Pt=!1}function Bn(){const t=hh.pop();Pt=t===void 0?!0:t}function Eu(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Te;Te=void 0;try{e()}finally{Te=n}}}let Pi=0;class Vv{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Kl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Te||!Pt||Te===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Te)n=this.activeLink=new Vv(Te,this),Te.deps?(n.prevDep=Te.depsTail,Te.depsTail.nextDep=n,Te.depsTail=n):Te.deps=Te.depsTail=n,ph(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=Te.depsTail,n.nextDep=void 0,Te.depsTail.nextDep=n,Te.depsTail=n,Te.deps===n&&(Te.deps=s)}return n}trigger(e){this.version++,Pi++,this.notify(e)}notify(e){Wl();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{zl()}}}function ph(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)ph(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Dr=new WeakMap,es=Symbol(""),Ga=Symbol(""),Ri=Symbol("");function Je(t,e,n){if(Pt&&Te){let s=Dr.get(t);s||Dr.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new Kl),i.map=s,i.key=n),i.track()}}function Jt(t,e,n,s,i,r){const o=Dr.get(t);if(!o){Pi++;return}const a=l=>{l&&l.trigger()};if(Wl(),e==="clear")o.forEach(a);else{const l=Y(t),c=l&&Ul(n);if(l&&n==="length"){const u=Number(s);o.forEach((f,d)=>{(d==="length"||d===Ri||!zt(d)&&d>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(Ri)),e){case"add":l?c&&a(o.get("length")):(a(o.get(es)),ks(t)&&a(o.get(Ga)));break;case"delete":l||(a(o.get(es)),ks(t)&&a(o.get(Ga)));break;case"set":ks(t)&&a(o.get(es));break}}zl()}function Uv(t,e){const n=Dr.get(t);return n&&n.get(e)}function vs(t){const e=de(t);return e===t?e:(Je(e,"iterate",Ri),Et(t)?e:e.map(Ze))}function bo(t){return Je(t=de(t),"iterate",Ri),t}const Hv={__proto__:null,[Symbol.iterator](){return ea(this,Symbol.iterator,Ze)},concat(...t){return vs(this).concat(...t.map(e=>Y(e)?vs(e):e))},entries(){return ea(this,"entries",t=>(t[1]=Ze(t[1]),t))},every(t,e){return Yt(this,"every",t,e,void 0,arguments)},filter(t,e){return Yt(this,"filter",t,e,n=>n.map(Ze),arguments)},find(t,e){return Yt(this,"find",t,e,Ze,arguments)},findIndex(t,e){return Yt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Yt(this,"findLast",t,e,Ze,arguments)},findLastIndex(t,e){return Yt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Yt(this,"forEach",t,e,void 0,arguments)},includes(...t){return ta(this,"includes",t)},indexOf(...t){return ta(this,"indexOf",t)},join(t){return vs(this).join(t)},lastIndexOf(...t){return ta(this,"lastIndexOf",t)},map(t,e){return Yt(this,"map",t,e,void 0,arguments)},pop(){return ti(this,"pop")},push(...t){return ti(this,"push",t)},reduce(t,...e){return Su(this,"reduce",t,e)},reduceRight(t,...e){return Su(this,"reduceRight",t,e)},shift(){return ti(this,"shift")},some(t,e){return Yt(this,"some",t,e,void 0,arguments)},splice(...t){return ti(this,"splice",t)},toReversed(){return vs(this).toReversed()},toSorted(t){return vs(this).toSorted(t)},toSpliced(...t){return vs(this).toSpliced(...t)},unshift(...t){return ti(this,"unshift",t)},values(){return ea(this,"values",Ze)}};function ea(t,e,n){const s=bo(t),i=s[e]();return s!==t&&!Et(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=n(r.value)),r}),i}const jv=Array.prototype;function Yt(t,e,n,s,i,r){const o=bo(t),a=o!==t&&!Et(t),l=o[e];if(l!==jv[e]){const f=l.apply(t,r);return a?Ze(f):f}let c=n;o!==t&&(a?c=function(f,d){return n.call(this,Ze(f),d,t)}:n.length>2&&(c=function(f,d){return n.call(this,f,d,t)}));const u=l.call(o,c,s);return a&&i?i(u):u}function Su(t,e,n,s){const i=bo(t);let r=n;return i!==t&&(Et(t)?n.length>3&&(r=function(o,a,l){return n.call(this,o,a,l,t)}):r=function(o,a,l){return n.call(this,o,Ze(a),l,t)}),i[e](r,...s)}function ta(t,e,n){const s=de(t);Je(s,"iterate",Ri);const i=s[e](...n);return(i===-1||i===!1)&&Ql(n[0])?(n[0]=de(n[0]),s[e](...n)):i}function ti(t,e,n=[]){$n(),Wl();const s=de(t)[e].apply(t,n);return zl(),Bn(),s}const Wv=$l("__proto__,__v_isRef,__isVue"),mh=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(zt));function zv(t){zt(t)||(t=String(t));const e=de(this);return Je(e,"has",t),e.hasOwnProperty(t)}class gh{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?t1:bh:r?yh:vh).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=Y(e);if(!i){let l;if(o&&(l=Hv[n]))return l;if(n==="hasOwnProperty")return zv}const a=Reflect.get(e,n,Fe(e)?e:s);return(zt(n)?mh.has(n):Wv(n))||(i||Je(e,"get",n),r)?a:Fe(a)?o&&Ul(n)?a:a.value:xe(a)?i?wh(a):nr(a):a}}class _h extends gh{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const l=os(r);if(!Et(s)&&!os(s)&&(r=de(r),s=de(s)),!Y(e)&&Fe(r)&&!Fe(s))return l?!1:(r.value=s,!0)}const o=Y(e)&&Ul(n)?Number(n)<e.length:ve(e,n),a=Reflect.set(e,n,s,Fe(e)?e:i);return e===de(i)&&(o?Sn(s,r)&&Jt(e,"set",n,s):Jt(e,"add",n,s)),a}deleteProperty(e,n){const s=ve(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&Jt(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!zt(n)||!mh.has(n))&&Je(e,"has",n),s}ownKeys(e){return Je(e,"iterate",Y(e)?"length":es),Reflect.ownKeys(e)}}class Gv extends gh{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Kv=new _h,qv=new Gv,Yv=new _h(!0);const Ka=t=>t,vr=t=>Reflect.getPrototypeOf(t);function Qv(t,e,n){return function(...s){const i=this.__v_raw,r=de(i),o=ks(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?Ka:e?qa:Ze;return!e&&Je(r,"iterate",l?Ga:es),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function yr(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Xv(t,e){const n={get(i){const r=this.__v_raw,o=de(r),a=de(i);t||(Sn(i,a)&&Je(o,"get",i),Je(o,"get",a));const{has:l}=vr(o),c=e?Ka:t?qa:Ze;if(l.call(o,i))return c(r.get(i));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&Je(de(i),"iterate",es),Reflect.get(i,"size",i)},has(i){const r=this.__v_raw,o=de(r),a=de(i);return t||(Sn(i,a)&&Je(o,"has",i),Je(o,"has",a)),i===a?r.has(i):r.has(i)||r.has(a)},forEach(i,r){const o=this,a=o.__v_raw,l=de(a),c=e?Ka:t?qa:Ze;return!t&&Je(l,"iterate",es),a.forEach((u,f)=>i.call(r,c(u),c(f),o))}};return We(n,t?{add:yr("add"),set:yr("set"),delete:yr("delete"),clear:yr("clear")}:{add(i){!e&&!Et(i)&&!os(i)&&(i=de(i));const r=de(this);return vr(r).has.call(r,i)||(r.add(i),Jt(r,"add",i,i)),this},set(i,r){!e&&!Et(r)&&!os(r)&&(r=de(r));const o=de(this),{has:a,get:l}=vr(o);let c=a.call(o,i);c||(i=de(i),c=a.call(o,i));const u=l.call(o,i);return o.set(i,r),c?Sn(r,u)&&Jt(o,"set",i,r):Jt(o,"add",i,r),this},delete(i){const r=de(this),{has:o,get:a}=vr(r);let l=o.call(r,i);l||(i=de(i),l=o.call(r,i)),a&&a.call(r,i);const c=r.delete(i);return l&&Jt(r,"delete",i,void 0),c},clear(){const i=de(this),r=i.size!==0,o=i.clear();return r&&Jt(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=Qv(i,t,e)}),n}function ql(t,e){const n=Xv(t,e);return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(ve(n,i)&&i in s?n:s,i,r)}const Jv={get:ql(!1,!1)},Zv={get:ql(!1,!0)},e1={get:ql(!0,!1)};const vh=new WeakMap,yh=new WeakMap,bh=new WeakMap,t1=new WeakMap;function n1(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function s1(t){return t.__v_skip||!Object.isExtensible(t)?0:n1(Tv(t))}function nr(t){return os(t)?t:Yl(t,!1,Kv,Jv,vh)}function Ch(t){return Yl(t,!1,Yv,Zv,yh)}function wh(t){return Yl(t,!0,qv,e1,bh)}function Yl(t,e,n,s,i){if(!xe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=s1(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function xn(t){return os(t)?xn(t.__v_raw):!!(t&&t.__v_isReactive)}function os(t){return!!(t&&t.__v_isReadonly)}function Et(t){return!!(t&&t.__v_isShallow)}function Ql(t){return t?!!t.__v_raw:!1}function de(t){const e=t&&t.__v_raw;return e?de(e):t}function Xl(t){return!ve(t,"__v_skip")&&Object.isExtensible(t)&&eh(t,"__v_skip",!0),t}const Ze=t=>xe(t)?nr(t):t,qa=t=>xe(t)?wh(t):t;function Fe(t){return t?t.__v_isRef===!0:!1}function pe(t){return Eh(t,!1)}function i1(t){return Eh(t,!0)}function Eh(t,e){return Fe(t)?t:new r1(t,e)}class r1{constructor(e,n){this.dep=new Kl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:de(e),this._value=n?e:Ze(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||Et(e)||os(e);e=s?e:de(e),Sn(e,n)&&(this._rawValue=e,this._value=s?e:Ze(e),this.dep.trigger())}}function S(t){return Fe(t)?t.value:t}const o1={get:(t,e,n)=>e==="__v_raw"?t:S(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Fe(i)&&!Fe(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Sh(t){return xn(t)?t:new Proxy(t,o1)}function a1(t){const e=Y(t)?new Array(t.length):{};for(const n in t)e[n]=c1(t,n);return e}class l1{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Uv(de(this._object),this._key)}}function c1(t,e,n){const s=t[e];return Fe(s)?s:new l1(t,e,n)}class u1{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Kl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Pi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&Te!==this)return ch(this,!0),!0}get value(){const e=this.dep.track();return dh(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function f1(t,e,n=!1){let s,i;return te(t)?s=t:(s=t.get,i=t.set),new u1(s,i,n)}const br={},Lr=new WeakMap;let qn;function d1(t,e=!1,n=qn){if(n){let s=Lr.get(n);s||Lr.set(n,s=[]),s.push(t)}}function h1(t,e,n=Se){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:a,call:l}=n,c=O=>i?O:Et(O)||i===!1||i===0?Zt(O,1):Zt(O);let u,f,d,p,y=!1,_=!1;if(Fe(t)?(f=()=>t.value,y=Et(t)):xn(t)?(f=()=>c(t),y=!0):Y(t)?(_=!0,y=t.some(O=>xn(O)||Et(O)),f=()=>t.map(O=>{if(Fe(O))return O.value;if(xn(O))return c(O);if(te(O))return l?l(O,2):O()})):te(t)?e?f=l?()=>l(t,2):t:f=()=>{if(d){$n();try{d()}finally{Bn()}}const O=qn;qn=u;try{return l?l(t,3,[p]):t(p)}finally{qn=O}}:f=Wt,e&&i){const O=f,z=i===!0?1/0:i;f=()=>Zt(O(),z)}const w=oh(),C=()=>{u.stop(),w&&w.active&&Vl(w.effects,u)};if(r&&e){const O=e;e=(...z)=>{O(...z),C()}}let v=_?new Array(t.length).fill(br):br;const T=O=>{if(!(!(u.flags&1)||!u.dirty&&!O))if(e){const z=u.run();if(i||y||(_?z.some((le,W)=>Sn(le,v[W])):Sn(z,v))){d&&d();const le=qn;qn=u;try{const W=[z,v===br?void 0:_&&v[0]===br?[]:v,p];l?l(e,3,W):e(...W),v=z}finally{qn=le}}}else u.run()};return a&&a(T),u=new ah(f),u.scheduler=o?()=>o(T,!1):T,p=O=>d1(O,!1,u),d=u.onStop=()=>{const O=Lr.get(u);if(O){if(l)l(O,4);else for(const z of O)z();Lr.delete(u)}},e?s?T(!0):v=u.run():o?o(T.bind(null,!0),!0):u.run(),C.pause=u.pause.bind(u),C.resume=u.resume.bind(u),C.stop=C,C}function Zt(t,e=1/0,n){if(e<=0||!xe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Fe(t))Zt(t.value,e,n);else if(Y(t))for(let s=0;s<t.length;s++)Zt(t[s],e,n);else if(Gs(t)||ks(t))t.forEach(s=>{Zt(s,e,n)});else if(Zd(t)){for(const s in t)Zt(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&Zt(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function sr(t,e,n,s){try{return s?t(...s):t()}catch(i){Co(i,e,n)}}function Nt(t,e,n,s){if(te(t)){const i=sr(t,e,n,s);return i&&Xd(i)&&i.catch(r=>{Co(r,e,n)}),i}if(Y(t)){const i=[];for(let r=0;r<t.length;r++)i.push(Nt(t[r],e,n,s));return i}}function Co(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Se;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,l,c)===!1)return}a=a.parent}if(r){$n(),sr(r,null,10,[t,l,c]),Bn();return}}p1(t,n,i,s,o)}function p1(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const it=[];let Vt=-1;const As=[];let vn=null,Cs=0;const xh=Promise.resolve();let Fr=null;function Ks(t){const e=Fr||xh;return t?e.then(this?t.bind(this):t):e}function m1(t){let e=Vt+1,n=it.length;for(;e<n;){const s=e+n>>>1,i=it[s],r=Ni(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function Jl(t){if(!(t.flags&1)){const e=Ni(t),n=it[it.length-1];!n||!(t.flags&2)&&e>=Ni(n)?it.push(t):it.splice(m1(e),0,t),t.flags|=1,Ih()}}function Ih(){Fr||(Fr=xh.then(kh))}function g1(t){Y(t)?As.push(...t):vn&&t.id===-1?vn.splice(Cs+1,0,t):t.flags&1||(As.push(t),t.flags|=1),Ih()}function xu(t,e,n=Vt+1){for(;n<it.length;n++){const s=it[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;it.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Th(t){if(As.length){const e=[...new Set(As)].sort((n,s)=>Ni(n)-Ni(s));if(As.length=0,vn){vn.push(...e);return}for(vn=e,Cs=0;Cs<vn.length;Cs++){const n=vn[Cs];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}vn=null,Cs=0}}const Ni=t=>t.id==null?t.flags&2?-1:1/0:t.id;function kh(t){try{for(Vt=0;Vt<it.length;Vt++){const e=it[Vt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),sr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Vt<it.length;Vt++){const e=it[Vt];e&&(e.flags&=-2)}Vt=-1,it.length=0,Th(),Fr=null,(it.length||As.length)&&kh()}}let rt=null,Ah=null;function $r(t){const e=rt;return rt=t,Ah=t&&t.type.__scopeId||null,e}function Ue(t,e=rt,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Lu(-1);const r=$r(e);let o;try{o=t(...i)}finally{$r(r),s._d&&Lu(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Ne(t,e){if(rt===null)return t;const n=Io(rt),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,a,l=Se]=e[i];r&&(te(r)&&(r={mounted:r,updated:r}),r.deep&&Zt(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function zn(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&($n(),Nt(l,n,8,[t.el,a,t,e]),Bn())}}const _1=Symbol("_vte"),Ph=t=>t.__isTeleport,yn=Symbol("_leaveCb"),Cr=Symbol("_enterCb");function Rh(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Vn(()=>{t.isMounted=!0}),$h(()=>{t.isUnmounting=!0}),t}const Ct=[Function,Array],Nh={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ct,onEnter:Ct,onAfterEnter:Ct,onEnterCancelled:Ct,onBeforeLeave:Ct,onLeave:Ct,onAfterLeave:Ct,onLeaveCancelled:Ct,onBeforeAppear:Ct,onAppear:Ct,onAfterAppear:Ct,onAppearCancelled:Ct},Oh=t=>{const e=t.subTree;return e.component?Oh(e.component):e},v1={name:"BaseTransition",props:Nh,setup(t,{slots:e}){const n=op(),s=Rh();return()=>{const i=e.default&&Zl(e.default(),!0);if(!i||!i.length)return;const r=Mh(i),o=de(t),{mode:a}=o;if(s.isLeaving)return na(r);const l=Iu(r);if(!l)return na(r);let c=Oi(l,o,s,n,f=>c=f);l.type!==dt&&as(l,c);let u=n.subTree&&Iu(n.subTree);if(u&&u.type!==dt&&!Xn(l,u)&&Oh(n).type!==dt){let f=Oi(u,o,s,n);if(as(u,f),a==="out-in"&&l.type!==dt)return s.isLeaving=!0,f.afterLeave=()=>{s.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave,u=void 0},na(r);a==="in-out"&&l.type!==dt?f.delayLeave=(d,p,y)=>{const _=Dh(s,u);_[String(u.key)]=u,d[yn]=()=>{p(),d[yn]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{y(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function Mh(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==dt){e=n;break}}return e}const y1=v1;function Dh(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Oi(t,e,n,s,i){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:d,onLeave:p,onAfterLeave:y,onLeaveCancelled:_,onBeforeAppear:w,onAppear:C,onAfterAppear:v,onAppearCancelled:T}=e,O=String(t.key),z=Dh(n,t),le=(L,ee)=>{L&&Nt(L,s,9,ee)},W=(L,ee)=>{const he=ee[1];le(L,ee),Y(L)?L.every(H=>H.length<=1)&&he():L.length<=1&&he()},K={mode:o,persisted:a,beforeEnter(L){let ee=l;if(!n.isMounted)if(r)ee=w||l;else return;L[yn]&&L[yn](!0);const he=z[O];he&&Xn(t,he)&&he.el[yn]&&he.el[yn](),le(ee,[L])},enter(L){let ee=c,he=u,H=f;if(!n.isMounted)if(r)ee=C||c,he=v||u,H=T||f;else return;let ue=!1;const Be=L[Cr]=tt=>{ue||(ue=!0,tt?le(H,[L]):le(he,[L]),K.delayedLeave&&K.delayedLeave(),L[Cr]=void 0)};ee?W(ee,[L,Be]):Be()},leave(L,ee){const he=String(t.key);if(L[Cr]&&L[Cr](!0),n.isUnmounting)return ee();le(d,[L]);let H=!1;const ue=L[yn]=Be=>{H||(H=!0,ee(),Be?le(_,[L]):le(y,[L]),L[yn]=void 0,z[he]===t&&delete z[he])};z[he]=t,p?W(p,[L,ue]):ue()},clone(L){const ee=Oi(L,e,n,s,i);return i&&i(ee),ee}};return K}function na(t){if(wo(t))return t=On(t),t.children=null,t}function Iu(t){if(!wo(t))return Ph(t.type)&&t.children?Mh(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&te(n.default))return n.default()}}function as(t,e){t.shapeFlag&6&&t.component?(t.transition=e,as(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Zl(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===ce?(o.patchFlag&128&&i++,s=s.concat(Zl(o.children,e,a))):(e||o.type!==dt)&&s.push(a!=null?On(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}/*! #__NO_SIDE_EFFECTS__ */function ec(t,e){return te(t)?We({name:t.name},e,{setup:t}):t}function Lh(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Br(t,e,n,s,i=!1){if(Y(t)){t.forEach((y,_)=>Br(y,e&&(Y(e)?e[_]:e),n,s,i));return}if(_i(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Br(t,e,n,s.component.subTree);return}const r=s.shapeFlag&4?Io(s.component):s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Se?a.refs={}:a.refs,f=a.setupState,d=de(f),p=f===Se?()=>!1:y=>ve(d,y);if(c!=null&&c!==l&&($e(c)?(u[c]=null,p(c)&&(f[c]=null)):Fe(c)&&(c.value=null)),te(l))sr(l,a,12,[o,u]);else{const y=$e(l),_=Fe(l);if(y||_){const w=()=>{if(t.f){const C=y?p(l)?f[l]:u[l]:l.value;i?Y(C)&&Vl(C,r):Y(C)?C.includes(r)||C.push(r):y?(u[l]=[r],p(l)&&(f[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else y?(u[l]=o,p(l)&&(f[l]=o)):_&&(l.value=o,t.k&&(u[t.k]=o))};o?(w.id=-1,_t(w,n)):w()}}}yo().requestIdleCallback;yo().cancelIdleCallback;const _i=t=>!!t.type.__asyncLoader,wo=t=>t.type.__isKeepAlive;function b1(t,e){Fh(t,"a",e)}function C1(t,e){Fh(t,"da",e)}function Fh(t,e,n=Ke){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Eo(e,s,n),n){let i=n.parent;for(;i&&i.parent;)wo(i.parent.vnode)&&w1(s,e,n,i),i=i.parent}}function w1(t,e,n,s){const i=Eo(e,t,s,!0);nc(()=>{Vl(s[e],i)},n)}function Eo(t,e,n=Ke,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{$n();const a=ir(n),l=Nt(e,n,t,o);return a(),Bn(),l});return s?i.unshift(r):i.push(r),r}}const un=t=>(e,n=Ke)=>{(!Di||t==="sp")&&Eo(t,(...s)=>e(...s),n)},E1=un("bm"),Vn=un("m"),S1=un("bu"),tc=un("u"),$h=un("bum"),nc=un("um"),x1=un("sp"),I1=un("rtg"),T1=un("rtc");function k1(t,e=Ke){Eo("ec",t,e)}const A1="components";function ls(t,e){return R1(A1,t,!0,e)||t}const P1=Symbol.for("v-ndc");function R1(t,e,n=!0,s=!1){const i=rt||Ke;if(i){const r=i.type;{const a=v0(r,!1);if(a&&(a===e||a===xt(e)||a===vo(xt(e))))return r}const o=Tu(i[t]||r[t],e)||Tu(i.appContext[t],e);return!o&&s?r:o}}function Tu(t,e){return t&&(t[e]||t[xt(e)]||t[vo(xt(e))])}function ft(t,e,n,s){let i;const r=n,o=Y(t);if(o||$e(t)){const a=o&&xn(t);let l=!1;a&&(l=!Et(t),t=bo(t)),i=new Array(t.length);for(let c=0,u=t.length;c<u;c++)i[c]=e(l?Ze(t[c]):t[c],c,void 0,r)}else if(typeof t=="number"){i=new Array(t);for(let a=0;a<t;a++)i[a]=e(a+1,a,void 0,r)}else if(xe(t))if(t[Symbol.iterator])i=Array.from(t,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(t);i=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];i[l]=e(t[u],u,l,r)}}else i=[];return i}const Ya=t=>t?ap(t)?Io(t):Ya(t.parent):null,vi=We(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ya(t.parent),$root:t=>Ya(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Vh(t),$forceUpdate:t=>t.f||(t.f=()=>{Jl(t.update)}),$nextTick:t=>t.n||(t.n=Ks.bind(t.proxy)),$watch:t=>Z1.bind(t)}),sa=(t,e)=>t!==Se&&!t.__isScriptSetup&&ve(t,e),N1={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(sa(s,e))return o[e]=1,s[e];if(i!==Se&&ve(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&ve(c,e))return o[e]=3,r[e];if(n!==Se&&ve(n,e))return o[e]=4,n[e];Qa&&(o[e]=0)}}const u=vi[e];let f,d;if(u)return e==="$attrs"&&Je(t.attrs,"get",""),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==Se&&ve(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,ve(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return sa(i,e)?(i[e]=n,!0):s!==Se&&ve(s,e)?(s[e]=n,!0):ve(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==Se&&ve(t,o)||sa(e,o)||(a=r[0])&&ve(a,o)||ve(s,o)||ve(vi,o)||ve(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ve(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ku(t){return Y(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Qa=!0;function O1(t){const e=Vh(t),n=t.proxy,s=t.ctx;Qa=!1,e.beforeCreate&&Au(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:p,updated:y,activated:_,deactivated:w,beforeDestroy:C,beforeUnmount:v,destroyed:T,unmounted:O,render:z,renderTracked:le,renderTriggered:W,errorCaptured:K,serverPrefetch:L,expose:ee,inheritAttrs:he,components:H,directives:ue,filters:Be}=e;if(c&&M1(c,s,null),o)for(const se in o){const ge=o[se];te(ge)&&(s[se]=ge.bind(n))}if(i){const se=i.call(n,n);xe(se)&&(t.data=nr(se))}if(Qa=!0,r)for(const se in r){const ge=r[se],qt=te(ge)?ge.bind(n,n):te(ge.get)?ge.get.bind(n,n):Wt,dn=!te(ge)&&te(ge.set)?ge.set.bind(n):Wt,Mt=ie({get:qt,set:dn});Object.defineProperty(s,se,{enumerable:!0,configurable:!0,get:()=>Mt.value,set:lt=>Mt.value=lt})}if(a)for(const se in a)Bh(a[se],s,n,se);if(l){const se=te(l)?l.call(n):l;Reflect.ownKeys(se).forEach(ge=>{Tr(ge,se[ge])})}u&&Au(u,t,"c");function we(se,ge){Y(ge)?ge.forEach(qt=>se(qt.bind(n))):ge&&se(ge.bind(n))}if(we(E1,f),we(Vn,d),we(S1,p),we(tc,y),we(b1,_),we(C1,w),we(k1,K),we(T1,le),we(I1,W),we($h,v),we(nc,O),we(x1,L),Y(ee))if(ee.length){const se=t.exposed||(t.exposed={});ee.forEach(ge=>{Object.defineProperty(se,ge,{get:()=>n[ge],set:qt=>n[ge]=qt})})}else t.exposed||(t.exposed={});z&&t.render===Wt&&(t.render=z),he!=null&&(t.inheritAttrs=he),H&&(t.components=H),ue&&(t.directives=ue),L&&Lh(t)}function M1(t,e,n=Wt){Y(t)&&(t=Xa(t));for(const s in t){const i=t[s];let r;xe(i)?"default"in i?r=St(i.from||s,i.default,!0):r=St(i.from||s):r=St(i),Fe(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function Au(t,e,n){Nt(Y(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Bh(t,e,n,s){let i=s.includes(".")?ep(n,s):()=>n[s];if($e(t)){const r=e[t];te(r)&&Ps(i,r)}else if(te(t))Ps(i,t.bind(n));else if(xe(t))if(Y(t))t.forEach(r=>Bh(r,e,n,s));else{const r=te(t.handler)?t.handler.bind(n):e[t.handler];te(r)&&Ps(i,r,t)}}function Vh(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>Vr(l,c,o,!0)),Vr(l,e,o)),xe(e)&&r.set(e,l),l}function Vr(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Vr(t,r,n,!0),i&&i.forEach(o=>Vr(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=D1[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const D1={data:Pu,props:Ru,emits:Ru,methods:ui,computed:ui,beforeCreate:nt,created:nt,beforeMount:nt,mounted:nt,beforeUpdate:nt,updated:nt,beforeDestroy:nt,beforeUnmount:nt,destroyed:nt,unmounted:nt,activated:nt,deactivated:nt,errorCaptured:nt,serverPrefetch:nt,components:ui,directives:ui,watch:F1,provide:Pu,inject:L1};function Pu(t,e){return e?t?function(){return We(te(t)?t.call(this,this):t,te(e)?e.call(this,this):e)}:e:t}function L1(t,e){return ui(Xa(t),Xa(e))}function Xa(t){if(Y(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function nt(t,e){return t?[...new Set([].concat(t,e))]:e}function ui(t,e){return t?We(Object.create(null),t,e):e}function Ru(t,e){return t?Y(t)&&Y(e)?[...new Set([...t,...e])]:We(Object.create(null),ku(t),ku(e??{})):e}function F1(t,e){if(!t)return e;if(!e)return t;const n=We(Object.create(null),t);for(const s in e)n[s]=nt(t[s],e[s]);return n}function Uh(){return{app:null,config:{isNativeTag:xv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $1=0;function B1(t,e){return function(s,i=null){te(s)||(s=We({},s)),i!=null&&!xe(i)&&(i=null);const r=Uh(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:$1++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:b0,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&te(u.install)?(o.add(u),u.install(c,...f)):te(u)&&(o.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,d){if(!l){const p=c._ceVNode||$(s,i);return p.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),t(p,u,d),l=!0,c._container=u,u.__vue_app__=c,Io(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Nt(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=ts;ts=c;try{return u()}finally{ts=f}}};return c}}let ts=null;function Tr(t,e){if(Ke){let n=Ke.provides;const s=Ke.parent&&Ke.parent.provides;s===n&&(n=Ke.provides=Object.create(s)),n[t]=e}}function St(t,e,n=!1){const s=Ke||rt;if(s||ts){const i=ts?ts._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&te(e)?e.call(s&&s.proxy):e}}function V1(){return!!(Ke||rt||ts)}const Hh={},jh=()=>Object.create(Hh),Wh=t=>Object.getPrototypeOf(t)===Hh;function U1(t,e,n,s=!1){const i={},r=jh();t.propsDefaults=Object.create(null),zh(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Ch(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function H1(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=de(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(So(t.emitsOptions,d))continue;const p=e[d];if(l)if(ve(r,d))p!==r[d]&&(r[d]=p,c=!0);else{const y=xt(d);i[y]=Ja(l,a,y,p,t,!1)}else p!==r[d]&&(r[d]=p,c=!0)}}}else{zh(t,e,i,r)&&(c=!0);let u;for(const f in a)(!e||!ve(e,f)&&((u=Fn(f))===f||!ve(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(i[f]=Ja(l,a,f,void 0,t,!0)):delete i[f]);if(r!==a)for(const f in r)(!e||!ve(e,f))&&(delete r[f],c=!0)}c&&Jt(t.attrs,"set","")}function zh(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(pi(l))continue;const c=e[l];let u;i&&ve(i,u=xt(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:So(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=de(n),c=a||Se;for(let u=0;u<r.length;u++){const f=r[u];n[f]=Ja(i,l,f,c[f],t,!ve(c,f))}}return o}function Ja(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=ve(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&te(l)){const{propsDefaults:c}=i;if(n in c)s=c[n];else{const u=ir(i);s=c[n]=l.call(null,e),u()}}else s=l;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Fn(n))&&(s=!0))}return s}const j1=new WeakMap;function Gh(t,e,n=!1){const s=n?j1:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!te(t)){const u=f=>{l=!0;const[d,p]=Gh(f,e,!0);We(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return xe(t)&&s.set(t,Ts),Ts;if(Y(r))for(let u=0;u<r.length;u++){const f=xt(r[u]);Nu(f)&&(o[f]=Se)}else if(r)for(const u in r){const f=xt(u);if(Nu(f)){const d=r[u],p=o[f]=Y(d)||te(d)?{type:d}:We({},d),y=p.type;let _=!1,w=!0;if(Y(y))for(let C=0;C<y.length;++C){const v=y[C],T=te(v)&&v.name;if(T==="Boolean"){_=!0;break}else T==="String"&&(w=!1)}else _=te(y)&&y.name==="Boolean";p[0]=_,p[1]=w,(_||ve(p,"default"))&&a.push(f)}}const c=[o,a];return xe(t)&&s.set(t,c),c}function Nu(t){return t[0]!=="$"&&!pi(t)}const Kh=t=>t[0]==="_"||t==="$stable",sc=t=>Y(t)?t.map(Ut):[Ut(t)],W1=(t,e,n)=>{if(e._n)return e;const s=Ue((...i)=>sc(e(...i)),n);return s._c=!1,s},qh=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Kh(i))continue;const r=t[i];if(te(r))e[i]=W1(i,r,s);else if(r!=null){const o=sc(r);e[i]=()=>o}}},Yh=(t,e)=>{const n=sc(e);t.slots.default=()=>n},Qh=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},z1=(t,e,n)=>{const s=t.slots=jh();if(t.vnode.shapeFlag&32){const i=e._;i?(Qh(s,e,n),n&&eh(s,"_",i,!0)):qh(e,s)}else e&&Yh(t,e)},G1=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Se;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:Qh(i,e,n):(r=!e.$stable,qh(e,i)),o=e}else e&&(Yh(t,e),o={default:1});if(r)for(const a in i)!Kh(a)&&o[a]==null&&delete i[a]},_t=o0;function K1(t){return q1(t)}function q1(t,e){const n=yo();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:p=Wt,insertStaticContent:y}=t,_=(m,g,b,E=null,A=null,I=null,B=void 0,F=null,D=!!g.dynamicChildren)=>{if(m===g)return;m&&!Xn(m,g)&&(E=x(m),lt(m,A,I,!0),m=null),g.patchFlag===-2&&(D=!1,g.dynamicChildren=null);const{type:R,ref:X,shapeFlag:U}=g;switch(R){case xo:w(m,g,b,E);break;case dt:C(m,g,b,E);break;case kr:m==null&&v(g,b,E,B);break;case ce:H(m,g,b,E,A,I,B,F,D);break;default:U&1?z(m,g,b,E,A,I,B,F,D):U&6?ue(m,g,b,E,A,I,B,F,D):(U&64||U&128)&&R.process(m,g,b,E,A,I,B,F,D,q)}X!=null&&A&&Br(X,m&&m.ref,I,g||m,!g)},w=(m,g,b,E)=>{if(m==null)s(g.el=a(g.children),b,E);else{const A=g.el=m.el;g.children!==m.children&&c(A,g.children)}},C=(m,g,b,E)=>{m==null?s(g.el=l(g.children||""),b,E):g.el=m.el},v=(m,g,b,E)=>{[m.el,m.anchor]=y(m.children,g,b,E,m.el,m.anchor)},T=({el:m,anchor:g},b,E)=>{let A;for(;m&&m!==g;)A=d(m),s(m,b,E),m=A;s(g,b,E)},O=({el:m,anchor:g})=>{let b;for(;m&&m!==g;)b=d(m),i(m),m=b;i(g)},z=(m,g,b,E,A,I,B,F,D)=>{g.type==="svg"?B="svg":g.type==="math"&&(B="mathml"),m==null?le(g,b,E,A,I,B,F,D):L(m,g,A,I,B,F,D)},le=(m,g,b,E,A,I,B,F)=>{let D,R;const{props:X,shapeFlag:U,transition:Q,dirs:Z}=m;if(D=m.el=o(m.type,I,X&&X.is,X),U&8?u(D,m.children):U&16&&K(m.children,D,null,E,A,ia(m,I),B,F),Z&&zn(m,null,E,"created"),W(D,m,m.scopeId,B,E),X){for(const Ie in X)Ie!=="value"&&!pi(Ie)&&r(D,Ie,null,X[Ie],I,E);"value"in X&&r(D,"value",null,X.value,I),(R=X.onVnodeBeforeMount)&&$t(R,E,m)}Z&&zn(m,null,E,"beforeMount");const fe=Y1(A,Q);fe&&Q.beforeEnter(D),s(D,g,b),((R=X&&X.onVnodeMounted)||fe||Z)&&_t(()=>{R&&$t(R,E,m),fe&&Q.enter(D),Z&&zn(m,null,E,"mounted")},A)},W=(m,g,b,E,A)=>{if(b&&p(m,b),E)for(let I=0;I<E.length;I++)p(m,E[I]);if(A){let I=A.subTree;if(g===I||np(I.type)&&(I.ssContent===g||I.ssFallback===g)){const B=A.vnode;W(m,B,B.scopeId,B.slotScopeIds,A.parent)}}},K=(m,g,b,E,A,I,B,F,D=0)=>{for(let R=D;R<m.length;R++){const X=m[R]=F?bn(m[R]):Ut(m[R]);_(null,X,g,b,E,A,I,B,F)}},L=(m,g,b,E,A,I,B)=>{const F=g.el=m.el;let{patchFlag:D,dynamicChildren:R,dirs:X}=g;D|=m.patchFlag&16;const U=m.props||Se,Q=g.props||Se;let Z;if(b&&Gn(b,!1),(Z=Q.onVnodeBeforeUpdate)&&$t(Z,b,g,m),X&&zn(g,m,b,"beforeUpdate"),b&&Gn(b,!0),(U.innerHTML&&Q.innerHTML==null||U.textContent&&Q.textContent==null)&&u(F,""),R?ee(m.dynamicChildren,R,F,b,E,ia(g,A),I):B||ge(m,g,F,null,b,E,ia(g,A),I,!1),D>0){if(D&16)he(F,U,Q,b,A);else if(D&2&&U.class!==Q.class&&r(F,"class",null,Q.class,A),D&4&&r(F,"style",U.style,Q.style,A),D&8){const fe=g.dynamicProps;for(let Ie=0;Ie<fe.length;Ie++){const be=fe[Ie],mt=U[be],ct=Q[be];(ct!==mt||be==="value")&&r(F,be,mt,ct,A,b)}}D&1&&m.children!==g.children&&u(F,g.children)}else!B&&R==null&&he(F,U,Q,b,A);((Z=Q.onVnodeUpdated)||X)&&_t(()=>{Z&&$t(Z,b,g,m),X&&zn(g,m,b,"updated")},E)},ee=(m,g,b,E,A,I,B)=>{for(let F=0;F<g.length;F++){const D=m[F],R=g[F],X=D.el&&(D.type===ce||!Xn(D,R)||D.shapeFlag&70)?f(D.el):b;_(D,R,X,null,E,A,I,B,!0)}},he=(m,g,b,E,A)=>{if(g!==b){if(g!==Se)for(const I in g)!pi(I)&&!(I in b)&&r(m,I,g[I],null,A,E);for(const I in b){if(pi(I))continue;const B=b[I],F=g[I];B!==F&&I!=="value"&&r(m,I,F,B,A,E)}"value"in b&&r(m,"value",g.value,b.value,A)}},H=(m,g,b,E,A,I,B,F,D)=>{const R=g.el=m?m.el:a(""),X=g.anchor=m?m.anchor:a("");let{patchFlag:U,dynamicChildren:Q,slotScopeIds:Z}=g;Z&&(F=F?F.concat(Z):Z),m==null?(s(R,b,E),s(X,b,E),K(g.children||[],b,X,A,I,B,F,D)):U>0&&U&64&&Q&&m.dynamicChildren?(ee(m.dynamicChildren,Q,b,A,I,B,F),(g.key!=null||A&&g===A.subTree)&&Xh(m,g,!0)):ge(m,g,b,X,A,I,B,F,D)},ue=(m,g,b,E,A,I,B,F,D)=>{g.slotScopeIds=F,m==null?g.shapeFlag&512?A.ctx.activate(g,b,E,B,D):Be(g,b,E,A,I,B,D):tt(m,g,D)},Be=(m,g,b,E,A,I,B)=>{const F=m.component=h0(m,E,A);if(wo(m)&&(F.ctx.renderer=q),p0(F,!1,B),F.asyncDep){if(A&&A.registerDep(F,we,B),!m.el){const D=F.subTree=$(dt);C(null,D,g,b)}}else we(F,m,g,b,A,I,B)},tt=(m,g,b)=>{const E=g.component=m.component;if(i0(m,g,b))if(E.asyncDep&&!E.asyncResolved){se(E,g,b);return}else E.next=g,E.update();else g.el=m.el,E.vnode=g},we=(m,g,b,E,A,I,B)=>{const F=()=>{if(m.isMounted){let{next:U,bu:Q,u:Z,parent:fe,vnode:Ie}=m;{const Lt=Jh(m);if(Lt){U&&(U.el=Ie.el,se(m,U,B)),Lt.asyncDep.then(()=>{m.isUnmounted||F()});return}}let be=U,mt;Gn(m,!1),U?(U.el=Ie.el,se(m,U,B)):U=Ie,Q&&Ir(Q),(mt=U.props&&U.props.onVnodeBeforeUpdate)&&$t(mt,fe,U,Ie),Gn(m,!0);const ct=Mu(m),Dt=m.subTree;m.subTree=ct,_(Dt,ct,f(Dt.el),x(Dt),m,A,I),U.el=ct.el,be===null&&r0(m,ct.el),Z&&_t(Z,A),(mt=U.props&&U.props.onVnodeUpdated)&&_t(()=>$t(mt,fe,U,Ie),A)}else{let U;const{el:Q,props:Z}=g,{bm:fe,m:Ie,parent:be,root:mt,type:ct}=m,Dt=_i(g);Gn(m,!1),fe&&Ir(fe),!Dt&&(U=Z&&Z.onVnodeBeforeMount)&&$t(U,be,g),Gn(m,!0);{mt.ce&&mt.ce._injectChildStyle(ct);const Lt=m.subTree=Mu(m);_(null,Lt,b,E,m,A,I),g.el=Lt.el}if(Ie&&_t(Ie,A),!Dt&&(U=Z&&Z.onVnodeMounted)){const Lt=g;_t(()=>$t(U,be,Lt),A)}(g.shapeFlag&256||be&&_i(be.vnode)&&be.vnode.shapeFlag&256)&&m.a&&_t(m.a,A),m.isMounted=!0,g=b=E=null}};m.scope.on();const D=m.effect=new ah(F);m.scope.off();const R=m.update=D.run.bind(D),X=m.job=D.runIfDirty.bind(D);X.i=m,X.id=m.uid,D.scheduler=()=>Jl(X),Gn(m,!0),R()},se=(m,g,b)=>{g.component=m;const E=m.vnode.props;m.vnode=g,m.next=null,H1(m,g.props,E,b),G1(m,g.children,b),$n(),xu(m),Bn()},ge=(m,g,b,E,A,I,B,F,D=!1)=>{const R=m&&m.children,X=m?m.shapeFlag:0,U=g.children,{patchFlag:Q,shapeFlag:Z}=g;if(Q>0){if(Q&128){dn(R,U,b,E,A,I,B,F,D);return}else if(Q&256){qt(R,U,b,E,A,I,B,F,D);return}}Z&8?(X&16&&bt(R,A,I),U!==R&&u(b,U)):X&16?Z&16?dn(R,U,b,E,A,I,B,F,D):bt(R,A,I,!0):(X&8&&u(b,""),Z&16&&K(U,b,E,A,I,B,F,D))},qt=(m,g,b,E,A,I,B,F,D)=>{m=m||Ts,g=g||Ts;const R=m.length,X=g.length,U=Math.min(R,X);let Q;for(Q=0;Q<U;Q++){const Z=g[Q]=D?bn(g[Q]):Ut(g[Q]);_(m[Q],Z,b,null,A,I,B,F,D)}R>X?bt(m,A,I,!0,!1,U):K(g,b,E,A,I,B,F,D,U)},dn=(m,g,b,E,A,I,B,F,D)=>{let R=0;const X=g.length;let U=m.length-1,Q=X-1;for(;R<=U&&R<=Q;){const Z=m[R],fe=g[R]=D?bn(g[R]):Ut(g[R]);if(Xn(Z,fe))_(Z,fe,b,null,A,I,B,F,D);else break;R++}for(;R<=U&&R<=Q;){const Z=m[U],fe=g[Q]=D?bn(g[Q]):Ut(g[Q]);if(Xn(Z,fe))_(Z,fe,b,null,A,I,B,F,D);else break;U--,Q--}if(R>U){if(R<=Q){const Z=Q+1,fe=Z<X?g[Z].el:E;for(;R<=Q;)_(null,g[R]=D?bn(g[R]):Ut(g[R]),b,fe,A,I,B,F,D),R++}}else if(R>Q)for(;R<=U;)lt(m[R],A,I,!0),R++;else{const Z=R,fe=R,Ie=new Map;for(R=fe;R<=Q;R++){const gt=g[R]=D?bn(g[R]):Ut(g[R]);gt.key!=null&&Ie.set(gt.key,R)}let be,mt=0;const ct=Q-fe+1;let Dt=!1,Lt=0;const ei=new Array(ct);for(R=0;R<ct;R++)ei[R]=0;for(R=Z;R<=U;R++){const gt=m[R];if(mt>=ct){lt(gt,A,I,!0);continue}let Ft;if(gt.key!=null)Ft=Ie.get(gt.key);else for(be=fe;be<=Q;be++)if(ei[be-fe]===0&&Xn(gt,g[be])){Ft=be;break}Ft===void 0?lt(gt,A,I,!0):(ei[Ft-fe]=R+1,Ft>=Lt?Lt=Ft:Dt=!0,_(gt,g[Ft],b,null,A,I,B,F,D),mt++)}const Gc=Dt?Q1(ei):Ts;for(be=Gc.length-1,R=ct-1;R>=0;R--){const gt=fe+R,Ft=g[gt],Kc=gt+1<X?g[gt+1].el:E;ei[R]===0?_(null,Ft,b,Kc,A,I,B,F,D):Dt&&(be<0||R!==Gc[be]?Mt(Ft,b,Kc,2):be--)}}},Mt=(m,g,b,E,A=null)=>{const{el:I,type:B,transition:F,children:D,shapeFlag:R}=m;if(R&6){Mt(m.component.subTree,g,b,E);return}if(R&128){m.suspense.move(g,b,E);return}if(R&64){B.move(m,g,b,q);return}if(B===ce){s(I,g,b);for(let U=0;U<D.length;U++)Mt(D[U],g,b,E);s(m.anchor,g,b);return}if(B===kr){T(m,g,b);return}if(E!==2&&R&1&&F)if(E===0)F.beforeEnter(I),s(I,g,b),_t(()=>F.enter(I),A);else{const{leave:U,delayLeave:Q,afterLeave:Z}=F,fe=()=>s(I,g,b),Ie=()=>{U(I,()=>{fe(),Z&&Z()})};Q?Q(I,fe,Ie):Ie()}else s(I,g,b)},lt=(m,g,b,E=!1,A=!1)=>{const{type:I,props:B,ref:F,children:D,dynamicChildren:R,shapeFlag:X,patchFlag:U,dirs:Q,cacheIndex:Z}=m;if(U===-2&&(A=!1),F!=null&&Br(F,null,b,m,!0),Z!=null&&(g.renderCache[Z]=void 0),X&256){g.ctx.deactivate(m);return}const fe=X&1&&Q,Ie=!_i(m);let be;if(Ie&&(be=B&&B.onVnodeBeforeUnmount)&&$t(be,g,m),X&6)mr(m.component,b,E);else{if(X&128){m.suspense.unmount(b,E);return}fe&&zn(m,null,g,"beforeUnmount"),X&64?m.type.remove(m,g,b,q,E):R&&!R.hasOnce&&(I!==ce||U>0&&U&64)?bt(R,g,b,!1,!0):(I===ce&&U&384||!A&&X&16)&&bt(D,g,b),E&&gs(m)}(Ie&&(be=B&&B.onVnodeUnmounted)||fe)&&_t(()=>{be&&$t(be,g,m),fe&&zn(m,null,g,"unmounted")},b)},gs=m=>{const{type:g,el:b,anchor:E,transition:A}=m;if(g===ce){_s(b,E);return}if(g===kr){O(m);return}const I=()=>{i(b),A&&!A.persisted&&A.afterLeave&&A.afterLeave()};if(m.shapeFlag&1&&A&&!A.persisted){const{leave:B,delayLeave:F}=A,D=()=>B(b,I);F?F(m.el,I,D):D()}else I()},_s=(m,g)=>{let b;for(;m!==g;)b=d(m),i(m),m=b;i(g)},mr=(m,g,b)=>{const{bum:E,scope:A,job:I,subTree:B,um:F,m:D,a:R}=m;Ou(D),Ou(R),E&&Ir(E),A.stop(),I&&(I.flags|=8,lt(B,m,g,b)),F&&_t(F,g),_t(()=>{m.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},bt=(m,g,b,E=!1,A=!1,I=0)=>{for(let B=I;B<m.length;B++)lt(m[B],g,b,E,A)},x=m=>{if(m.shapeFlag&6)return x(m.component.subTree);if(m.shapeFlag&128)return m.suspense.next();const g=d(m.anchor||m.el),b=g&&g[_1];return b?d(b):g};let j=!1;const V=(m,g,b)=>{m==null?g._vnode&&lt(g._vnode,null,null,!0):_(g._vnode||null,m,g,null,null,null,b),g._vnode=m,j||(j=!0,xu(),Th(),j=!1)},q={p:_,um:lt,m:Mt,r:gs,mt:Be,mc:K,pc:ge,pbc:ee,n:x,o:t};return{render:V,hydrate:void 0,createApp:B1(V)}}function ia({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Gn({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Y1(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Xh(t,e,n=!1){const s=t.children,i=e.children;if(Y(s)&&Y(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=bn(i[r]),a.el=o.el),!n&&a.patchFlag!==-2&&Xh(o,a)),a.type===xo&&(a.el=o.el)}}function Q1(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Jh(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Jh(e)}function Ou(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const X1=Symbol.for("v-scx"),J1=()=>St(X1);function Ps(t,e,n){return Zh(t,e,n)}function Zh(t,e,n=Se){const{immediate:s,deep:i,flush:r,once:o}=n,a=We({},n),l=e&&s||!e&&r!=="post";let c;if(Di){if(r==="sync"){const p=J1();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=Wt,p.resume=Wt,p.pause=Wt,p}}const u=Ke;a.call=(p,y,_)=>Nt(p,u,y,_);let f=!1;r==="post"?a.scheduler=p=>{_t(p,u&&u.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(p,y)=>{y?p():Jl(p)}),a.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const d=h1(t,e,a);return Di&&(c?c.push(d):l&&d()),d}function Z1(t,e,n){const s=this.proxy,i=$e(t)?t.includes(".")?ep(s,t):()=>s[t]:t.bind(s,s);let r;te(e)?r=e:(r=e.handler,n=e);const o=ir(this),a=Zh(i,r.bind(s),n);return o(),a}function ep(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const e0=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${xt(e)}Modifiers`]||t[`${Fn(e)}Modifiers`];function t0(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Se;let i=n;const r=e.startsWith("update:"),o=r&&e0(s,e.slice(7));o&&(o.trim&&(i=n.map(u=>$e(u)?u.trim():u)),o.number&&(i=n.map(Mr)));let a,l=s[a=Xo(e)]||s[a=Xo(xt(e))];!l&&r&&(l=s[a=Xo(Fn(e))]),l&&Nt(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Nt(c,t,6,i)}}function tp(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!te(t)){const l=c=>{const u=tp(c,e,!0);u&&(a=!0,We(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(xe(t)&&s.set(t,null),null):(Y(r)?r.forEach(l=>o[l]=null):We(o,r),xe(t)&&s.set(t,o),o)}function So(t,e){return!t||!go(e)?!1:(e=e.slice(2).replace(/Once$/,""),ve(t,e[0].toLowerCase()+e.slice(1))||ve(t,Fn(e))||ve(t,e))}function Mu(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:p,ctx:y,inheritAttrs:_}=t,w=$r(t);let C,v;try{if(n.shapeFlag&4){const O=i||s,z=O;C=Ut(c.call(z,O,u,f,p,d,y)),v=a}else{const O=e;C=Ut(O.length>1?O(f,{attrs:a,slots:o,emit:l}):O(f,null)),v=e.props?a:n0(a)}}catch(O){yi.length=0,Co(O,t,1),C=$(dt)}let T=C;if(v&&_!==!1){const O=Object.keys(v),{shapeFlag:z}=T;O.length&&z&7&&(r&&O.some(Bl)&&(v=s0(v,r)),T=On(T,v,!1,!0))}return n.dirs&&(T=On(T,null,!1,!0),T.dirs=T.dirs?T.dirs.concat(n.dirs):n.dirs),n.transition&&as(T,n.transition),C=T,$r(w),C}const n0=t=>{let e;for(const n in t)(n==="class"||n==="style"||go(n))&&((e||(e={}))[n]=t[n]);return e},s0=(t,e)=>{const n={};for(const s in t)(!Bl(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function i0(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Du(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==s[d]&&!So(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Du(s,o,c):!0:!!o;return!1}function Du(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!So(n,r))return!0}return!1}function r0({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const np=t=>t.__isSuspense;function o0(t,e){e&&e.pendingBranch?Y(t)?e.effects.push(...t):e.effects.push(t):g1(t)}const ce=Symbol.for("v-fgt"),xo=Symbol.for("v-txt"),dt=Symbol.for("v-cmt"),kr=Symbol.for("v-stc"),yi=[];let vt=null;function k(t=!1){yi.push(vt=t?null:[])}function a0(){yi.pop(),vt=yi[yi.length-1]||null}let Mi=1;function Lu(t,e=!1){Mi+=t,t<0&&vt&&e&&(vt.hasOnce=!0)}function sp(t){return t.dynamicChildren=Mi>0?vt||Ts:null,a0(),Mi>0&&vt&&vt.push(t),t}function N(t,e,n,s,i,r){return sp(h(t,e,n,s,i,r,!0))}function qe(t,e,n,s,i){return sp($(t,e,n,s,i,!0))}function Ur(t){return t?t.__v_isVNode===!0:!1}function Xn(t,e){return t.type===e.type&&t.key===e.key}const ip=({key:t})=>t??null,Ar=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?$e(t)||Fe(t)||te(t)?{i:rt,r:t,k:e,f:!!n}:t:null);function h(t,e=null,n=null,s=0,i=null,r=t===ce?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ip(e),ref:e&&Ar(e),scopeId:Ah,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:rt};return a?(ic(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=$e(n)?8:16),Mi>0&&!o&&vt&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&vt.push(l),l}const $=l0;function l0(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===P1)&&(t=dt),Ur(t)){const a=On(t,e,!0);return n&&ic(a,n),Mi>0&&!r&&vt&&(a.shapeFlag&6?vt[vt.indexOf(t)]=a:vt.push(a)),a.patchFlag=-2,a}if(y0(t)&&(t=t.__vccOpts),e){e=c0(e);let{class:a,style:l}=e;a&&!$e(a)&&(e.class=er(a)),xe(l)&&(Ql(l)&&!Y(l)&&(l=We({},l)),e.style=Hl(l))}const o=$e(t)?1:np(t)?128:Ph(t)?64:xe(t)?4:te(t)?2:0;return h(t,e,n,s,i,o,r,!0)}function c0(t){return t?Ql(t)||Wh(t)?We({},t):t:null}function On(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:a,transition:l}=t,c=e?u0(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&ip(c),ref:e&&e.ref?n&&r?Y(r)?r.concat(Ar(e)):[r,Ar(e)]:Ar(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ce?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&On(t.ssContent),ssFallback:t.ssFallback&&On(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&s&&as(u,l.clone(u)),u}function Ve(t=" ",e=0){return $(xo,null,t,e)}function rp(t,e){const n=$(kr,null,t);return n.staticCount=e,n}function ra(t="",e=!1){return e?(k(),qe(dt,null,t)):$(dt,null,t)}function Ut(t){return t==null||typeof t=="boolean"?$(dt):Y(t)?$(ce,null,t.slice()):Ur(t)?bn(t):$(xo,null,String(t))}function bn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:On(t)}function ic(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(Y(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),ic(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!Wh(e)?e._ctx=rt:i===3&&rt&&(rt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else te(e)?(e={default:e,_ctx:rt},n=32):(e=String(e),s&64?(n=16,e=[Ve(e)]):n=8);t.children=e,t.shapeFlag|=n}function u0(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=er([e.class,s.class]));else if(i==="style")e.style=Hl([e.style,s.style]);else if(go(i)){const r=e[i],o=s[i];o&&r!==o&&!(Y(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function $t(t,e,n,s=null){Nt(t,e,7,[n,s])}const f0=Uh();let d0=0;function h0(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||f0,r={uid:d0++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ih(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Gh(s,i),emitsOptions:tp(s,i),emit:null,emitted:null,propsDefaults:Se,inheritAttrs:s.inheritAttrs,ctx:Se,data:Se,props:Se,attrs:Se,slots:Se,refs:Se,setupState:Se,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=t0.bind(null,r),t.ce&&t.ce(r),r}let Ke=null;const op=()=>Ke||rt;let Hr,Za;{const t=yo(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};Hr=e("__VUE_INSTANCE_SETTERS__",n=>Ke=n),Za=e("__VUE_SSR_SETTERS__",n=>Di=n)}const ir=t=>{const e=Ke;return Hr(t),t.scope.on(),()=>{t.scope.off(),Hr(e)}},Fu=()=>{Ke&&Ke.scope.off(),Hr(null)};function ap(t){return t.vnode.shapeFlag&4}let Di=!1;function p0(t,e=!1,n=!1){e&&Za(e);const{props:s,children:i}=t.vnode,r=ap(t);U1(t,s,r,e),z1(t,i,n);const o=r?m0(t,e):void 0;return e&&Za(!1),o}function m0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,N1);const{setup:s}=n;if(s){$n();const i=t.setupContext=s.length>1?_0(t):null,r=ir(t),o=sr(s,t,0,[t.props,i]),a=Xd(o);if(Bn(),r(),(a||t.sp)&&!_i(t)&&Lh(t),a){if(o.then(Fu,Fu),e)return o.then(l=>{$u(t,l)}).catch(l=>{Co(l,t,0)});t.asyncDep=o}else $u(t,o)}else lp(t)}function $u(t,e,n){te(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:xe(e)&&(t.setupState=Sh(e)),lp(t)}function lp(t,e,n){const s=t.type;t.render||(t.render=s.render||Wt);{const i=ir(t);$n();try{O1(t)}finally{Bn(),i()}}}const g0={get(t,e){return Je(t,"get",""),t[e]}};function _0(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,g0),slots:t.slots,emit:t.emit,expose:e}}function Io(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Sh(Xl(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in vi)return vi[n](t)},has(e,n){return n in e||n in vi}})):t.proxy}function v0(t,e=!0){return te(t)?t.displayName||t.name:t.name||e&&t.__name}function y0(t){return te(t)&&"__vccOpts"in t}const ie=(t,e)=>f1(t,e,Di);function To(t,e,n){const s=arguments.length;return s===2?xe(e)&&!Y(e)?Ur(e)?$(t,null,[e]):$(t,e):$(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Ur(n)&&(n=[n]),$(t,e,n))}const b0="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let el;const Bu=typeof window<"u"&&window.trustedTypes;if(Bu)try{el=Bu.createPolicy("vue",{createHTML:t=>t})}catch{}const cp=el?t=>el.createHTML(t):t=>t,C0="http://www.w3.org/2000/svg",w0="http://www.w3.org/1998/Math/MathML",Xt=typeof document<"u"?document:null,Vu=Xt&&Xt.createElement("template"),E0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?Xt.createElementNS(C0,t):e==="mathml"?Xt.createElementNS(w0,t):n?Xt.createElement(t,{is:n}):Xt.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Xt.createTextNode(t),createComment:t=>Xt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Xt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Vu.innerHTML=cp(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const a=Vu.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},pn="transition",ni="animation",Ds=Symbol("_vtc"),up={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},fp=We({},Nh,up),S0=t=>(t.displayName="Transition",t.props=fp,t),x0=S0((t,{slots:e})=>To(y1,dp(t),e)),Kn=(t,e=[])=>{Y(t)?t.forEach(n=>n(...e)):t&&t(...e)},Uu=t=>t?Y(t)?t.some(e=>e.length>1):t.length>1:!1;function dp(t){const e={};for(const H in t)H in up||(e[H]=t[H]);if(t.css===!1)return e;const{name:n="v",type:s,duration:i,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,y=I0(i),_=y&&y[0],w=y&&y[1],{onBeforeEnter:C,onEnter:v,onEnterCancelled:T,onLeave:O,onLeaveCancelled:z,onBeforeAppear:le=C,onAppear:W=v,onAppearCancelled:K=T}=e,L=(H,ue,Be,tt)=>{H._enterCancelled=tt,gn(H,ue?u:a),gn(H,ue?c:o),Be&&Be()},ee=(H,ue)=>{H._isLeaving=!1,gn(H,f),gn(H,p),gn(H,d),ue&&ue()},he=H=>(ue,Be)=>{const tt=H?W:v,we=()=>L(ue,H,Be);Kn(tt,[ue,we]),Hu(()=>{gn(ue,H?l:r),Bt(ue,H?u:a),Uu(tt)||ju(ue,s,_,we)})};return We(e,{onBeforeEnter(H){Kn(C,[H]),Bt(H,r),Bt(H,o)},onBeforeAppear(H){Kn(le,[H]),Bt(H,l),Bt(H,c)},onEnter:he(!1),onAppear:he(!0),onLeave(H,ue){H._isLeaving=!0;const Be=()=>ee(H,ue);Bt(H,f),H._enterCancelled?(Bt(H,d),tl()):(tl(),Bt(H,d)),Hu(()=>{H._isLeaving&&(gn(H,f),Bt(H,p),Uu(O)||ju(H,s,w,Be))}),Kn(O,[H,Be])},onEnterCancelled(H){L(H,!1,void 0,!0),Kn(T,[H])},onAppearCancelled(H){L(H,!0,void 0,!0),Kn(K,[H])},onLeaveCancelled(H){ee(H),Kn(z,[H])}})}function I0(t){if(t==null)return null;if(xe(t))return[oa(t.enter),oa(t.leave)];{const e=oa(t);return[e,e]}}function oa(t){return Pv(t)}function Bt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Ds]||(t[Ds]=new Set)).add(e)}function gn(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const n=t[Ds];n&&(n.delete(e),n.size||(t[Ds]=void 0))}function Hu(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let T0=0;function ju(t,e,n,s){const i=t._endId=++T0,r=()=>{i===t._endId&&s()};if(n!=null)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=hp(t,e);if(!o)return s();const c=o+"end";let u=0;const f=()=>{t.removeEventListener(c,d),r()},d=p=>{p.target===t&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),t.addEventListener(c,d)}function hp(t,e){const n=window.getComputedStyle(t),s=y=>(n[y]||"").split(", "),i=s(`${pn}Delay`),r=s(`${pn}Duration`),o=Wu(i,r),a=s(`${ni}Delay`),l=s(`${ni}Duration`),c=Wu(a,l);let u=null,f=0,d=0;e===pn?o>0&&(u=pn,f=o,d=r.length):e===ni?c>0&&(u=ni,f=c,d=l.length):(f=Math.max(o,c),u=f>0?o>c?pn:ni:null,d=u?u===pn?r.length:l.length:0);const p=u===pn&&/\b(transform|all)(,|$)/.test(s(`${pn}Property`).toString());return{type:u,timeout:f,propCount:d,hasTransform:p}}function Wu(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>zu(n)+zu(t[s])))}function zu(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function tl(){return document.body.offsetHeight}function k0(t,e,n){const s=t[Ds];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const jr=Symbol("_vod"),pp=Symbol("_vsh"),A0={beforeMount(t,{value:e},{transition:n}){t[jr]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):si(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),si(t,!0),s.enter(t)):s.leave(t,()=>{si(t,!1)}):si(t,e))},beforeUnmount(t,{value:e}){si(t,e)}};function si(t,e){t.style.display=e?t[jr]:"none",t[pp]=!e}const P0=Symbol(""),R0=/(^|;)\s*display\s*:/;function N0(t,e,n){const s=t.style,i=$e(n);let r=!1;if(n&&!i){if(e)if($e(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Pr(s,a,"")}else for(const o in e)n[o]==null&&Pr(s,o,"");for(const o in n)o==="display"&&(r=!0),Pr(s,o,n[o])}else if(i){if(e!==n){const o=s[P0];o&&(n+=";"+o),s.cssText=n,r=R0.test(n)}}else e&&t.removeAttribute("style");jr in t&&(t[jr]=r?s.display:"",t[pp]&&(s.display="none"))}const Gu=/\s*!important$/;function Pr(t,e,n){if(Y(n))n.forEach(s=>Pr(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=O0(t,e);Gu.test(n)?t.setProperty(Fn(s),n.replace(Gu,""),"important"):t[s]=n}}const Ku=["Webkit","Moz","ms"],aa={};function O0(t,e){const n=aa[e];if(n)return n;let s=xt(e);if(s!=="filter"&&s in t)return aa[e]=s;s=vo(s);for(let i=0;i<Ku.length;i++){const r=Ku[i]+s;if(r in t)return aa[e]=r}return e}const qu="http://www.w3.org/1999/xlink";function Yu(t,e,n,s,i,r=Lv(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(qu,e.slice(6,e.length)):t.setAttributeNS(qu,e,n):n==null||r&&!th(n)?t.removeAttribute(e):t.setAttribute(e,r?"":zt(n)?String(n):n)}function Qu(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?cp(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=th(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function wn(t,e,n,s){t.addEventListener(e,n,s)}function M0(t,e,n,s){t.removeEventListener(e,n,s)}const Xu=Symbol("_vei");function D0(t,e,n,s,i=null){const r=t[Xu]||(t[Xu]={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=L0(e);if(s){const c=r[e]=B0(s,i);wn(t,a,c,l)}else o&&(M0(t,a,o,l),r[e]=void 0)}}const Ju=/(?:Once|Passive|Capture)$/;function L0(t){let e;if(Ju.test(t)){e={};let s;for(;s=t.match(Ju);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Fn(t.slice(2)),e]}let la=0;const F0=Promise.resolve(),$0=()=>la||(F0.then(()=>la=0),la=Date.now());function B0(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Nt(V0(s,n.value),e,5,[s])};return n.value=t,n.attached=$0(),n}function V0(t,e){if(Y(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Zu=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,U0=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?k0(t,s,o):e==="style"?N0(t,n,s):go(e)?Bl(e)||D0(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):H0(t,e,s,o))?(Qu(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Yu(t,e,s,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!$e(s))?Qu(t,xt(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Yu(t,e,s,o))};function H0(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Zu(e)&&te(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Zu(e)&&$e(n)?!1:e in t}const mp=new WeakMap,gp=new WeakMap,Wr=Symbol("_moveCb"),ef=Symbol("_enterCb"),j0=t=>(delete t.props.mode,t),W0=j0({name:"TransitionGroup",props:We({},fp,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=op(),s=Rh();let i,r;return tc(()=>{if(!i.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!Y0(i[0].el,n.vnode.el,o))return;i.forEach(G0),i.forEach(K0);const a=i.filter(q0);tl(),a.forEach(l=>{const c=l.el,u=c.style;Bt(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const f=c[Wr]=d=>{d&&d.target!==c||(!d||/transform$/.test(d.propertyName))&&(c.removeEventListener("transitionend",f),c[Wr]=null,gn(c,o))};c.addEventListener("transitionend",f)})}),()=>{const o=de(t),a=dp(o);let l=o.tag||ce;if(i=[],r)for(let c=0;c<r.length;c++){const u=r[c];u.el&&u.el instanceof Element&&(i.push(u),as(u,Oi(u,a,s,n)),mp.set(u,u.el.getBoundingClientRect()))}r=e.default?Zl(e.default()):[];for(let c=0;c<r.length;c++){const u=r[c];u.key!=null&&as(u,Oi(u,a,s,n))}return $(l,null,r)}}}),z0=W0;function G0(t){const e=t.el;e[Wr]&&e[Wr](),e[ef]&&e[ef]()}function K0(t){gp.set(t,t.el.getBoundingClientRect())}function q0(t){const e=mp.get(t),n=gp.get(t),s=e.left-n.left,i=e.top-n.top;if(s||i){const r=t.el.style;return r.transform=r.webkitTransform=`translate(${s}px,${i}px)`,r.transitionDuration="0s",t}}function Y0(t,e,n){const s=t.cloneNode(),i=t[Ds];i&&i.forEach(a=>{a.split(/\s+/).forEach(l=>l&&s.classList.remove(l))}),n.split(/\s+/).forEach(a=>a&&s.classList.add(a)),s.style.display="none";const r=e.nodeType===1?e:e.parentNode;r.appendChild(s);const{hasTransform:o}=hp(s);return r.removeChild(s),o}const Ls=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Y(e)?n=>Ir(e,n):e};function Q0(t){t.target.composing=!0}function tf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const nn=Symbol("_assign"),Qe={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[nn]=Ls(i);const r=s||i.props&&i.props.type==="number";wn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=Mr(a)),t[nn](a)}),n&&wn(t,"change",()=>{t.value=t.value.trim()}),e||(wn(t,"compositionstart",Q0),wn(t,"compositionend",tf),wn(t,"change",tf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(t[nn]=Ls(o),t.composing)return;const a=(r||t.type==="number")&&!/^0\d/.test(t.value)?Mr(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===l)||(t.value=l))}},X0={deep:!0,created(t,e,n){t[nn]=Ls(n),wn(t,"change",()=>{const s=t._modelValue,i=Li(t),r=t.checked,o=t[nn];if(Y(s)){const a=jl(s,i),l=a!==-1;if(r&&!l)o(s.concat(i));else if(!r&&l){const c=[...s];c.splice(a,1),o(c)}}else if(Gs(s)){const a=new Set(s);r?a.add(i):a.delete(i),o(a)}else o(_p(t,r))})},mounted:nf,beforeUpdate(t,e,n){t[nn]=Ls(n),nf(t,e,n)}};function nf(t,{value:e,oldValue:n},s){t._modelValue=e;let i;if(Y(e))i=jl(e,s.props.value)>-1;else if(Gs(e))i=e.has(s.props.value);else{if(e===n)return;i=tr(e,_p(t,!0))}t.checked!==i&&(t.checked=i)}const fi={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const i=Gs(e);wn(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Mr(Li(o)):Li(o));t[nn](t.multiple?i?new Set(r):r:r[0]),t._assigning=!0,Ks(()=>{t._assigning=!1})}),t[nn]=Ls(s)},mounted(t,{value:e}){sf(t,e)},beforeUpdate(t,e,n){t[nn]=Ls(n)},updated(t,{value:e}){t._assigning||sf(t,e)}};function sf(t,e){const n=t.multiple,s=Y(e);if(!(n&&!s&&!Gs(e))){for(let i=0,r=t.options.length;i<r;i++){const o=t.options[i],a=Li(o);if(n)if(s){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=jl(e,a)>-1}else o.selected=e.has(a);else if(tr(Li(o),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Li(t){return"_value"in t?t._value:t.value}function _p(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const J0={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},zr=(t,e)=>{const n=t._withKeys||(t._withKeys={}),s=e.join(".");return n[s]||(n[s]=i=>{if(!("key"in i))return;const r=Fn(i.key);if(e.some(o=>o===r||J0[o]===r))return t(i)})},Z0=We({patchProp:U0},E0);let rf;function ey(){return rf||(rf=K1(Z0))}const ty=(...t)=>{const e=ey().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=sy(s);if(!i)return;const r=e._component;!te(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,ny(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function ny(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function sy(t){return $e(t)?document.querySelector(t):t}function of(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,s)}return n}function en(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?of(Object(n),!0).forEach(function(s){ut(t,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):of(Object(n)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(n,s))})}return t}function iy(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var s=n.call(t,e);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function ry(t){var e=iy(t,"string");return typeof e=="symbol"?e:e+""}function Gr(t){"@babel/helpers - typeof";return Gr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Gr(t)}function ut(t,e,n){return e=ry(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function oy(t,e){if(t==null)return{};var n={};for(var s in t)if(Object.prototype.hasOwnProperty.call(t,s)){if(e.indexOf(s)>=0)continue;n[s]=t[s]}return n}function ay(t,e){if(t==null)return{};var n=oy(t,e),s,i;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)s=r[i],!(e.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(t,s)&&(n[s]=t[s])}return n}var ly=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},vp={exports:{}};(function(t){(function(e){var n=function(C,v,T){if(!c(v)||f(v)||d(v)||p(v)||l(v))return v;var O,z=0,le=0;if(u(v))for(O=[],le=v.length;z<le;z++)O.push(n(C,v[z],T));else{O={};for(var W in v)Object.prototype.hasOwnProperty.call(v,W)&&(O[C(W,T)]=n(C,v[W],T))}return O},s=function(C,v){v=v||{};var T=v.separator||"_",O=v.split||/(?=[A-Z])/;return C.split(O).join(T)},i=function(C){return y(C)?C:(C=C.replace(/[\-_\s]+(.)?/g,function(v,T){return T?T.toUpperCase():""}),C.substr(0,1).toLowerCase()+C.substr(1))},r=function(C){var v=i(C);return v.substr(0,1).toUpperCase()+v.substr(1)},o=function(C,v){return s(C,v).toLowerCase()},a=Object.prototype.toString,l=function(C){return typeof C=="function"},c=function(C){return C===Object(C)},u=function(C){return a.call(C)=="[object Array]"},f=function(C){return a.call(C)=="[object Date]"},d=function(C){return a.call(C)=="[object RegExp]"},p=function(C){return a.call(C)=="[object Boolean]"},y=function(C){return C=C-0,C===C},_=function(C,v){var T=v&&"process"in v?v.process:v;return typeof T!="function"?C:function(O,z){return T(O,C,z)}},w={camelize:i,decamelize:o,pascalize:r,depascalize:o,camelizeKeys:function(C,v){return n(_(i,v),C)},decamelizeKeys:function(C,v){return n(_(o,v),C,v)},pascalizeKeys:function(C,v){return n(_(r,v),C)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=w:e.humps=w})(ly)})(vp);var cy=vp.exports,uy=["class","style"];function fy(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var s=n.indexOf(":"),i=cy.camelize(n.slice(0,s)),r=n.slice(s+1).trim();return e[i]=r,e},{})}function dy(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function yp(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var s=(t.children||[]).map(function(l){return yp(l)}),i=Object.keys(t.attributes||{}).reduce(function(l,c){var u=t.attributes[c];switch(c){case"class":l.class=dy(u);break;case"style":l.style=fy(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var r=n.style,o=r===void 0?{}:r,a=ay(n,uy);return To(t.tag,en(en(en({},e),{},{class:i.class,style:en(en({},i.style),o)},i.attrs),a),s)}var bp=!1;try{bp=!0}catch{}function hy(){if(!bp&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function ca(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?ut({},t,e):{}}function py(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},ut(ut(ut(ut(ut(ut(ut(ut(ut(ut(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),ut(ut(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(s){return n[s]?s:null}).filter(function(s){return s})}function af(t){if(t&&Gr(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Wa.icon)return Wa.icon(t);if(t===null)return null;if(Gr(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var my=ec({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var s=n.attrs,i=ie(function(){return af(e.icon)}),r=ie(function(){return ca("classes",py(e))}),o=ie(function(){return ca("transform",typeof e.transform=="string"?Wa.transform(e.transform):e.transform)}),a=ie(function(){return ca("mask",af(e.mask))}),l=ie(function(){return Cv(i.value,en(en(en(en({},r.value),o.value),a.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});Ps(l,function(u){if(!u)return hy("Could not find one or more icon(s)",i.value,a.value)},{immediate:!0});var c=ie(function(){return l.value?yp(l.value.abstract[0],{},s):null});return function(){return c.value}}});/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Cp;const ko=t=>Cp=t,wp=Symbol();function nl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var bi;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(bi||(bi={}));function gy(){const t=rh(!0),e=t.run(()=>pe({}));let n=[],s=[];const i=Xl({install(r){ko(i),i._a=r,r.provide(wp,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return this._a?n.push(r):s.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const Ep=()=>{};function lf(t,e,n,s=Ep){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&oh()&&$v(i),i}function ys(t,...e){t.slice().forEach(n=>{n(...e)})}const _y=t=>t(),cf=Symbol(),ua=Symbol();function sl(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,s)=>t.set(s,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];nl(i)&&nl(s)&&t.hasOwnProperty(n)&&!Fe(s)&&!xn(s)?t[n]=sl(i,s):t[n]=s}return t}const vy=Symbol();function yy(t){return!nl(t)||!t.hasOwnProperty(vy)}const{assign:_n}=Object;function by(t){return!!(Fe(t)&&t.effect)}function Cy(t,e,n,s){const{state:i,actions:r,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=i?i():{});const u=a1(n.state.value[t]);return _n(u,r,Object.keys(o||{}).reduce((f,d)=>(f[d]=Xl(ie(()=>{ko(n);const p=n._s.get(t);return o[d].call(p,p)})),f),{}))}return l=Sp(t,c,e,n,s,!0),l}function Sp(t,e,n={},s,i,r){let o;const a=_n({actions:{}},n),l={deep:!0};let c,u,f=[],d=[],p;const y=s.state.value[t];!r&&!y&&(s.state.value[t]={}),pe({});let _;function w(K){let L;c=u=!1,typeof K=="function"?(K(s.state.value[t]),L={type:bi.patchFunction,storeId:t,events:p}):(sl(s.state.value[t],K),L={type:bi.patchObject,payload:K,storeId:t,events:p});const ee=_=Symbol();Ks().then(()=>{_===ee&&(c=!0)}),u=!0,ys(f,L,s.state.value[t])}const C=r?function(){const{state:L}=n,ee=L?L():{};this.$patch(he=>{_n(he,ee)})}:Ep;function v(){o.stop(),f=[],d=[],s._s.delete(t)}const T=(K,L="")=>{if(cf in K)return K[ua]=L,K;const ee=function(){ko(s);const he=Array.from(arguments),H=[],ue=[];function Be(se){H.push(se)}function tt(se){ue.push(se)}ys(d,{args:he,name:ee[ua],store:z,after:Be,onError:tt});let we;try{we=K.apply(this&&this.$id===t?this:z,he)}catch(se){throw ys(ue,se),se}return we instanceof Promise?we.then(se=>(ys(H,se),se)).catch(se=>(ys(ue,se),Promise.reject(se))):(ys(H,we),we)};return ee[cf]=!0,ee[ua]=L,ee},O={_p:s,$id:t,$onAction:lf.bind(null,d),$patch:w,$reset:C,$subscribe(K,L={}){const ee=lf(f,K,L.detached,()=>he()),he=o.run(()=>Ps(()=>s.state.value[t],H=>{(L.flush==="sync"?u:c)&&K({storeId:t,type:bi.direct,events:p},H)},_n({},l,L)));return ee},$dispose:v},z=nr(O);s._s.set(t,z);const W=(s._a&&s._a.runWithContext||_y)(()=>s._e.run(()=>(o=rh()).run(()=>e({action:T}))));for(const K in W){const L=W[K];if(Fe(L)&&!by(L)||xn(L))r||(y&&yy(L)&&(Fe(L)?L.value=y[K]:sl(L,y[K])),s.state.value[t][K]=L);else if(typeof L=="function"){const ee=T(L,K);W[K]=ee,a.actions[K]=L}}return _n(z,W),_n(de(z),W),Object.defineProperty(z,"$state",{get:()=>s.state.value[t],set:K=>{w(L=>{_n(L,K)})}}),s._p.forEach(K=>{_n(z,o.run(()=>K({store:z,app:s._a,pinia:s,options:a})))}),y&&r&&n.hydrate&&n.hydrate(z.$state,y),c=!0,u=!0,z}/*! #__NO_SIDE_EFFECTS__ */function Un(t,e,n){let s,i;const r=typeof e=="function";typeof t=="string"?(s=t,i=r?n:e):(i=t,s=t.id);function o(a,l){const c=V1();return a=a||(c?St(wp,null):null),a&&ko(a),a=Cp,a._s.has(s)||(r?Sp(s,e,i,a):Cy(s,i,a)),a._s.get(s)}return o.$id=s,o}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const ws=typeof document<"u";function xp(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function wy(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&xp(t.default)}const _e=Object.assign;function fa(t,e){const n={};for(const s in e){const i=e[s];n[s]=Ot(i)?i.map(t):t(i)}return n}const Ci=()=>{},Ot=Array.isArray,Ip=/#/g,Ey=/&/g,Sy=/\//g,xy=/=/g,Iy=/\?/g,Tp=/\+/g,Ty=/%5B/g,ky=/%5D/g,kp=/%5E/g,Ay=/%60/g,Ap=/%7B/g,Py=/%7C/g,Pp=/%7D/g,Ry=/%20/g;function rc(t){return encodeURI(""+t).replace(Py,"|").replace(Ty,"[").replace(ky,"]")}function Ny(t){return rc(t).replace(Ap,"{").replace(Pp,"}").replace(kp,"^")}function il(t){return rc(t).replace(Tp,"%2B").replace(Ry,"+").replace(Ip,"%23").replace(Ey,"%26").replace(Ay,"`").replace(Ap,"{").replace(Pp,"}").replace(kp,"^")}function Oy(t){return il(t).replace(xy,"%3D")}function My(t){return rc(t).replace(Ip,"%23").replace(Iy,"%3F")}function Dy(t){return t==null?"":My(t).replace(Sy,"%2F")}function Fi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Ly=/\/$/,Fy=t=>t.replace(Ly,"");function da(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=Uy(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:Fi(o)}}function $y(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function uf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function By(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Fs(e.matched[s],n.matched[i])&&Rp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Fs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Rp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Vy(t[n],e[n]))return!1;return!0}function Vy(t,e){return Ot(t)?ff(t,e):Ot(e)?ff(e,t):t===e}function ff(t,e){return Ot(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Uy(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o).join("/")}const mn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var $i;(function(t){t.pop="pop",t.push="push"})($i||($i={}));var wi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(wi||(wi={}));function Hy(t){if(!t)if(ws){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Fy(t)}const jy=/^[^#]+#/;function Wy(t,e){return t.replace(jy,"#")+e}function zy(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Ao=()=>({left:window.scrollX,top:window.scrollY});function Gy(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=zy(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function df(t,e){return(history.state?history.state.position-e:-1)+t}const rl=new Map;function Ky(t,e){rl.set(t,e)}function qy(t){const e=rl.get(t);return rl.delete(t),e}let Yy=()=>location.protocol+"//"+location.host;function Np(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),uf(l,"")}return uf(n,t)+s+i}function Qy(t,e,n,s){let i=[],r=[],o=null;const a=({state:d})=>{const p=Np(t,location),y=n.value,_=e.value;let w=0;if(d){if(n.value=p,e.value=d,o&&o===y){o=null;return}w=_?d.position-_.position:0}else s(p);i.forEach(C=>{C(n.value,y,{delta:w,type:$i.pop,direction:w?w>0?wi.forward:wi.back:wi.unknown})})};function l(){o=n.value}function c(d){i.push(d);const p=()=>{const y=i.indexOf(d);y>-1&&i.splice(y,1)};return r.push(p),p}function u(){const{history:d}=window;d.state&&d.replaceState(_e({},d.state,{scroll:Ao()}),"")}function f(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function hf(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?Ao():null}}function Xy(t){const{history:e,location:n}=window,s={value:Np(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const f=t.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:Yy()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),i.value=c}catch(p){console.error(p),n[u?"replace":"assign"](d)}}function o(l,c){const u=_e({},e.state,hf(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=_e({},i.value,e.state,{forward:l,scroll:Ao()});r(u.current,u,!0);const f=_e({},hf(s.value,l,null),{position:u.position+1},c);r(l,f,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function Jy(t){t=Hy(t);const e=Xy(t),n=Qy(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=_e({location:"",base:t,go:s,createHref:Wy.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function Zy(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),Jy(t)}function eb(t){return typeof t=="string"||t&&typeof t=="object"}function Op(t){return typeof t=="string"||typeof t=="symbol"}const Mp=Symbol("");var pf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(pf||(pf={}));function $s(t,e){return _e(new Error,{type:t,[Mp]:!0},e)}function Qt(t,e){return t instanceof Error&&Mp in t&&(e==null||!!(t.type&e))}const mf="[^/]+?",tb={sensitive:!1,strict:!1,start:!0,end:!0},nb=/[.+*?^${}()[\]/\\]/g;function sb(t,e){const n=_e({},tb,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let f=0;f<c.length;f++){const d=c[f];let p=40+(n.sensitive?.25:0);if(d.type===0)f||(i+="/"),i+=d.value.replace(nb,"\\$&"),p+=40;else if(d.type===1){const{value:y,repeatable:_,optional:w,regexp:C}=d;r.push({name:y,repeatable:_,optional:w});const v=C||mf;if(v!==mf){p+=10;try{new RegExp(`(${v})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${y}" (${v}): `+O.message)}}let T=_?`((?:${v})(?:/(?:${v}))*)`:`(${v})`;f||(T=w&&c.length<2?`(?:/${T})`:"/"+T),w&&(T+="?"),i+=T,p+=20,w&&(p+=-8),_&&(p+=-20),v===".*"&&(p+=-50)}u.push(p)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",y=r[d-1];f[y.name]=p&&y.repeatable?p.split("/"):p}return f}function l(c){let u="",f=!1;for(const d of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:y,repeatable:_,optional:w}=p,C=y in c?c[y]:"";if(Ot(C)&&!_)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const v=Ot(C)?C.join("/"):C;if(!v)if(w)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${y}"`);u+=v}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function ib(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Dp(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=ib(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(gf(s))return 1;if(gf(i))return-1}return i.length-s.length}function gf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const rb={type:0,value:""},ob=/[a-zA-Z0-9_]/;function ab(t){if(!t)return[[]];if(t==="/")return[[rb]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function f(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),n=1):d();break;case 4:d(),n=s;break;case 1:l==="("?n=2:ob.test(l)?d():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),i}function lb(t,e,n){const s=sb(ab(t.path),n),i=_e(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function cb(t,e){const n=[],s=new Map;e=bf({strict:!1,end:!0,sensitive:!1},e);function i(f){return s.get(f)}function r(f,d,p){const y=!p,_=vf(f);_.aliasOf=p&&p.record;const w=bf(e,f),C=[_];if("alias"in f){const O=typeof f.alias=="string"?[f.alias]:f.alias;for(const z of O)C.push(vf(_e({},_,{components:p?p.record.components:_.components,path:z,aliasOf:p?p.record:_})))}let v,T;for(const O of C){const{path:z}=O;if(d&&z[0]!=="/"){const le=d.record.path,W=le[le.length-1]==="/"?"":"/";O.path=d.record.path+(z&&W+z)}if(v=lb(O,d,w),p?p.alias.push(v):(T=T||v,T!==v&&T.alias.push(v),y&&f.name&&!yf(v)&&o(f.name)),Lp(v)&&l(v),_.children){const le=_.children;for(let W=0;W<le.length;W++)r(le[W],v,p&&p.children[W])}p=p||v}return T?()=>{o(T)}:Ci}function o(f){if(Op(f)){const d=s.get(f);d&&(s.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&s.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function l(f){const d=db(f,n);n.splice(d,0,f),f.record.name&&!yf(f)&&s.set(f.record.name,f)}function c(f,d){let p,y={},_,w;if("name"in f&&f.name){if(p=s.get(f.name),!p)throw $s(1,{location:f});w=p.record.name,y=_e(_f(d.params,p.keys.filter(T=>!T.optional).concat(p.parent?p.parent.keys.filter(T=>T.optional):[]).map(T=>T.name)),f.params&&_f(f.params,p.keys.map(T=>T.name))),_=p.stringify(y)}else if(f.path!=null)_=f.path,p=n.find(T=>T.re.test(_)),p&&(y=p.parse(_),w=p.record.name);else{if(p=d.name?s.get(d.name):n.find(T=>T.re.test(d.path)),!p)throw $s(1,{location:f,currentLocation:d});w=p.record.name,y=_e({},d.params,f.params),_=p.stringify(y)}const C=[];let v=p;for(;v;)C.unshift(v.record),v=v.parent;return{name:w,path:_,params:y,matched:C,meta:fb(C)}}t.forEach(f=>r(f));function u(){n.length=0,s.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:i}}function _f(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function vf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:ub(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function ub(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function yf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function fb(t){return t.reduce((e,n)=>_e(e,n.meta),{})}function bf(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function db(t,e){let n=0,s=e.length;for(;n!==s;){const r=n+s>>1;Dp(t,e[r])<0?s=r:n=r+1}const i=hb(t);return i&&(s=e.lastIndexOf(i,s-1)),s}function hb(t){let e=t;for(;e=e.parent;)if(Lp(e)&&Dp(t,e)===0)return e}function Lp({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function pb(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(Tp," "),o=r.indexOf("="),a=Fi(o<0?r:r.slice(0,o)),l=o<0?null:Fi(r.slice(o+1));if(a in e){let c=e[a];Ot(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Cf(t){let e="";for(let n in t){const s=t[n];if(n=Oy(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ot(s)?s.map(r=>r&&il(r)):[s&&il(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function mb(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Ot(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const gb=Symbol(""),wf=Symbol(""),Po=Symbol(""),oc=Symbol(""),ol=Symbol("");function ii(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Cn(t,e,n,s,i,r=o=>o()){const o=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l($s(4,{from:n,to:e})):d instanceof Error?l(d):eb(d)?l($s(2,{from:e,to:d})):(o&&s.enterCallbacks[i]===o&&typeof d=="function"&&o.push(d),a())},u=r(()=>t.call(s&&s.instances[i],e,n,c));let f=Promise.resolve(u);t.length<3&&(f=f.then(c)),f.catch(d=>l(d))})}function ha(t,e,n,s,i=r=>r()){const r=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(xp(l)){const u=(l.__vccOpts||l)[e];u&&r.push(Cn(u,n,s,o,a,i))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=wy(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const p=(f.__vccOpts||f)[e];return p&&Cn(p,n,s,o,a,i)()}))}}return r}function Ef(t){const e=St(Po),n=St(oc),s=ie(()=>{const l=S(t.to);return e.resolve(l)}),i=ie(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(Fs.bind(null,u));if(d>-1)return d;const p=Sf(l[c-2]);return c>1&&Sf(u)===p&&f[f.length-1].path!==p?f.findIndex(Fs.bind(null,l[c-2])):d}),r=ie(()=>i.value>-1&&bb(n.params,s.value.params)),o=ie(()=>i.value>-1&&i.value===n.matched.length-1&&Rp(n.params,s.value.params));function a(l={}){if(yb(l)){const c=e[S(t.replace)?"replace":"push"](S(t.to)).catch(Ci);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:s,href:ie(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}function _b(t){return t.length===1?t[0]:t}const vb=ec({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ef,setup(t,{slots:e}){const n=nr(Ef(t)),{options:s}=St(Po),i=ie(()=>({[xf(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[xf(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&_b(e.default(n));return t.custom?r:To("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),ht=vb;function yb(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function bb(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!Ot(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Sf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const xf=(t,e,n)=>t??e??n,Cb=ec({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=St(ol),i=ie(()=>t.route||s.value),r=St(wf,0),o=ie(()=>{let c=S(r);const{matched:u}=i.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=ie(()=>i.value.matched[o.value]);Tr(wf,ie(()=>o.value+1)),Tr(gb,a),Tr(ol,i);const l=pe();return Ps(()=>[l.value,a.value,t.name],([c,u,f],[d,p,y])=>{u&&(u.instances[f]=c,p&&p!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!Fs(u,p)||!d)&&(u.enterCallbacks[f]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,f=a.value,d=f&&f.components[u];if(!d)return If(n.default,{Component:d,route:c});const p=f.props[u],y=p?p===!0?c.params:typeof p=="function"?p(c):p:null,w=To(d,_e({},y,e,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return If(n.default,{Component:w,route:c})||w}}});function If(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Fp=Cb;function wb(t){const e=cb(t.routes,t),n=t.parseQuery||pb,s=t.stringifyQuery||Cf,i=t.history,r=ii(),o=ii(),a=ii(),l=i1(mn);let c=mn;ws&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=fa.bind(null,x=>""+x),f=fa.bind(null,Dy),d=fa.bind(null,Fi);function p(x,j){let V,q;return Op(x)?(V=e.getRecordMatcher(x),q=j):q=x,e.addRoute(q,V)}function y(x){const j=e.getRecordMatcher(x);j&&e.removeRoute(j)}function _(){return e.getRoutes().map(x=>x.record)}function w(x){return!!e.getRecordMatcher(x)}function C(x,j){if(j=_e({},j||l.value),typeof x=="string"){const b=da(n,x,j.path),E=e.resolve({path:b.path},j),A=i.createHref(b.fullPath);return _e(b,E,{params:d(E.params),hash:Fi(b.hash),redirectedFrom:void 0,href:A})}let V;if(x.path!=null)V=_e({},x,{path:da(n,x.path,j.path).path});else{const b=_e({},x.params);for(const E in b)b[E]==null&&delete b[E];V=_e({},x,{params:f(b)}),j.params=f(j.params)}const q=e.resolve(V,j),Ee=x.hash||"";q.params=u(d(q.params));const m=$y(s,_e({},x,{hash:Ny(Ee),path:q.path})),g=i.createHref(m);return _e({fullPath:m,hash:Ee,query:s===Cf?mb(x.query):x.query||{}},q,{redirectedFrom:void 0,href:g})}function v(x){return typeof x=="string"?da(n,x,l.value.path):_e({},x)}function T(x,j){if(c!==x)return $s(8,{from:j,to:x})}function O(x){return W(x)}function z(x){return O(_e(v(x),{replace:!0}))}function le(x){const j=x.matched[x.matched.length-1];if(j&&j.redirect){const{redirect:V}=j;let q=typeof V=="function"?V(x):V;return typeof q=="string"&&(q=q.includes("?")||q.includes("#")?q=v(q):{path:q},q.params={}),_e({query:x.query,hash:x.hash,params:q.path!=null?{}:x.params},q)}}function W(x,j){const V=c=C(x),q=l.value,Ee=x.state,m=x.force,g=x.replace===!0,b=le(V);if(b)return W(_e(v(b),{state:typeof b=="object"?_e({},Ee,b.state):Ee,force:m,replace:g}),j||V);const E=V;E.redirectedFrom=j;let A;return!m&&By(s,q,V)&&(A=$s(16,{to:E,from:q}),Mt(q,q,!0,!1)),(A?Promise.resolve(A):ee(E,q)).catch(I=>Qt(I)?Qt(I,2)?I:dn(I):ge(I,E,q)).then(I=>{if(I){if(Qt(I,2))return W(_e({replace:g},v(I.to),{state:typeof I.to=="object"?_e({},Ee,I.to.state):Ee,force:m}),j||E)}else I=H(E,q,!0,g,Ee);return he(E,q,I),I})}function K(x,j){const V=T(x,j);return V?Promise.reject(V):Promise.resolve()}function L(x){const j=_s.values().next().value;return j&&typeof j.runWithContext=="function"?j.runWithContext(x):x()}function ee(x,j){let V;const[q,Ee,m]=Eb(x,j);V=ha(q.reverse(),"beforeRouteLeave",x,j);for(const b of q)b.leaveGuards.forEach(E=>{V.push(Cn(E,x,j))});const g=K.bind(null,x,j);return V.push(g),bt(V).then(()=>{V=[];for(const b of r.list())V.push(Cn(b,x,j));return V.push(g),bt(V)}).then(()=>{V=ha(Ee,"beforeRouteUpdate",x,j);for(const b of Ee)b.updateGuards.forEach(E=>{V.push(Cn(E,x,j))});return V.push(g),bt(V)}).then(()=>{V=[];for(const b of m)if(b.beforeEnter)if(Ot(b.beforeEnter))for(const E of b.beforeEnter)V.push(Cn(E,x,j));else V.push(Cn(b.beforeEnter,x,j));return V.push(g),bt(V)}).then(()=>(x.matched.forEach(b=>b.enterCallbacks={}),V=ha(m,"beforeRouteEnter",x,j,L),V.push(g),bt(V))).then(()=>{V=[];for(const b of o.list())V.push(Cn(b,x,j));return V.push(g),bt(V)}).catch(b=>Qt(b,8)?b:Promise.reject(b))}function he(x,j,V){a.list().forEach(q=>L(()=>q(x,j,V)))}function H(x,j,V,q,Ee){const m=T(x,j);if(m)return m;const g=j===mn,b=ws?history.state:{};V&&(q||g?i.replace(x.fullPath,_e({scroll:g&&b&&b.scroll},Ee)):i.push(x.fullPath,Ee)),l.value=x,Mt(x,j,V,g),dn()}let ue;function Be(){ue||(ue=i.listen((x,j,V)=>{if(!mr.listening)return;const q=C(x),Ee=le(q);if(Ee){W(_e(Ee,{replace:!0,force:!0}),q).catch(Ci);return}c=q;const m=l.value;ws&&Ky(df(m.fullPath,V.delta),Ao()),ee(q,m).catch(g=>Qt(g,12)?g:Qt(g,2)?(W(_e(v(g.to),{force:!0}),q).then(b=>{Qt(b,20)&&!V.delta&&V.type===$i.pop&&i.go(-1,!1)}).catch(Ci),Promise.reject()):(V.delta&&i.go(-V.delta,!1),ge(g,q,m))).then(g=>{g=g||H(q,m,!1),g&&(V.delta&&!Qt(g,8)?i.go(-V.delta,!1):V.type===$i.pop&&Qt(g,20)&&i.go(-1,!1)),he(q,m,g)}).catch(Ci)}))}let tt=ii(),we=ii(),se;function ge(x,j,V){dn(x);const q=we.list();return q.length?q.forEach(Ee=>Ee(x,j,V)):console.error(x),Promise.reject(x)}function qt(){return se&&l.value!==mn?Promise.resolve():new Promise((x,j)=>{tt.add([x,j])})}function dn(x){return se||(se=!x,Be(),tt.list().forEach(([j,V])=>x?V(x):j()),tt.reset()),x}function Mt(x,j,V,q){const{scrollBehavior:Ee}=t;if(!ws||!Ee)return Promise.resolve();const m=!V&&qy(df(x.fullPath,0))||(q||!V)&&history.state&&history.state.scroll||null;return Ks().then(()=>Ee(x,j,m)).then(g=>g&&Gy(g)).catch(g=>ge(g,x,j))}const lt=x=>i.go(x);let gs;const _s=new Set,mr={currentRoute:l,listening:!0,addRoute:p,removeRoute:y,clearRoutes:e.clearRoutes,hasRoute:w,getRoutes:_,resolve:C,options:t,push:O,replace:z,go:lt,back:()=>lt(-1),forward:()=>lt(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:we.add,isReady:qt,install(x){const j=this;x.component("RouterLink",ht),x.component("RouterView",Fp),x.config.globalProperties.$router=j,Object.defineProperty(x.config.globalProperties,"$route",{enumerable:!0,get:()=>S(l)}),ws&&!gs&&l.value===mn&&(gs=!0,O(i.location).catch(Ee=>{}));const V={};for(const Ee in mn)Object.defineProperty(V,Ee,{get:()=>l.value[Ee],enumerable:!0});x.provide(Po,j),x.provide(oc,Ch(V)),x.provide(ol,l);const q=x.unmount;_s.add(x),x.unmount=function(){_s.delete(x),_s.size<1&&(c=mn,ue&&ue(),ue=null,l.value=mn,gs=!1,se=!1),q()}}};function bt(x){return x.reduce((j,V)=>j.then(()=>L(V)),Promise.resolve())}return mr}function Eb(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>Fs(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Fs(c,l))||i.push(l))}return[n,s,i]}function $p(){return St(Po)}function Bp(t){return St(oc)}const Sb={__name:"App",setup(t){return(e,n)=>(k(),N(ce,null,[n[0]||(n[0]=h("header",null,null,-1)),$(S(Fp))],64))}},ye=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},xb={},Ib={class:"footer-container"};function Tb(t,e){return k(),N("div",Ib,e[0]||(e[0]=[h("span",null," Web design by thjnh ",-1)]))}const Hn=ye(xb,[["render",Tb],["__scopeId","data-v-373a2f5d"]]),Vp="/hhdonghua/assets/logo-zIJYuCRr.png";var Tf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Up={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M=function(t,e){if(!t)throw qs(e)},qs=function(t){return new Error("Firebase Database ("+Up.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hp=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},kb=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},ac={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,f=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(d=64)),s.push(n[u],n[f],n[d],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Hp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):kb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||f==null)throw new Ab;const d=r<<2|a>>4;if(s.push(d),c!==64){const p=a<<4&240|c>>2;if(s.push(p),f!==64){const y=c<<6&192|f;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Ab extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const jp=function(t){const e=Hp(t);return ac.encodeByteArray(e,!0)},Kr=function(t){return jp(t).replace(/\./g,"")},al=function(t){try{return ac.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pb(t){return Wp(void 0,t)}function Wp(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Rb(n)||(t[n]=Wp(t[n],e[n]));return t}function Rb(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ob=()=>Nb().__FIREBASE_DEFAULTS__,Mb=()=>{if(typeof process>"u"||typeof Tf>"u")return;const t=Tf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Db=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&al(t[1]);return e&&JSON.parse(e)},zp=()=>{try{return Ob()||Mb()||Db()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Lb=t=>{var e,n;return(n=(e=zp())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Fb=t=>{const e=Lb(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Gp=()=>{var t;return(t=zp())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $b(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Kr(JSON.stringify(n)),Kr(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bb(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Kp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Bb())}function Vb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ub(){return Up.NODE_ADMIN===!0}function Hb(){try{return typeof indexedDB=="object"}catch{return!1}}function jb(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wb="FirebaseError";class or extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Wb,Object.setPrototypeOf(this,or.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qp.prototype.create)}}class qp{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?zb(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new or(i,a,s)}}function zb(t,e){return t.replace(Gb,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Gb=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi(t){return JSON.parse(t)}function je(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yp=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Bi(al(r[0])||""),n=Bi(al(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},Kb=function(t){const e=Yp(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},qb=function(t){const e=Yp(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Bs(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function kf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function qr(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function ll(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Af(r)&&Af(o)){if(!ll(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Af(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yb(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)s[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)s[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const d=s[f-3]^s[f-8]^s[f-14]^s[f-16];s[f]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let f=0;f<80;f++){f<40?f<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):f<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[f]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Ro(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xb=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,M(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},No=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ds(t){return t&&t._delegate?t._delegate:t}class Vi{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new rr;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(eC(e))try{this.getOrInitializeService({instanceIdentifier:Yn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Yn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yn){return this.instances.has(e)}getOptions(e=Yn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Zb(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Yn){return this.component?this.component.multipleInstances?e:Yn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Zb(t){return t===Yn?void 0:t}function eC(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Jb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ae||(Ae={}));const nC={debug:Ae.DEBUG,verbose:Ae.VERBOSE,info:Ae.INFO,warn:Ae.WARN,error:Ae.ERROR,silent:Ae.SILENT},sC=Ae.INFO,iC={[Ae.DEBUG]:"log",[Ae.VERBOSE]:"log",[Ae.INFO]:"info",[Ae.WARN]:"warn",[Ae.ERROR]:"error"},rC=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=iC[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Qp{constructor(e){this.name=e,this._logLevel=sC,this._logHandler=rC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?nC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ae.DEBUG,...e),this._logHandler(this,Ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ae.VERBOSE,...e),this._logHandler(this,Ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ae.INFO,...e),this._logHandler(this,Ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ae.WARN,...e),this._logHandler(this,Ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ae.ERROR,...e),this._logHandler(this,Ae.ERROR,...e)}}const oC=(t,e)=>e.some(n=>t instanceof n);let Pf,Rf;function aC(){return Pf||(Pf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lC(){return Rf||(Rf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xp=new WeakMap,cl=new WeakMap,Jp=new WeakMap,pa=new WeakMap,lc=new WeakMap;function cC(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(In(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Xp.set(n,t)}).catch(()=>{}),lc.set(e,t),e}function uC(t){if(cl.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});cl.set(t,e)}let ul={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return cl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Jp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return In(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function fC(t){ul=t(ul)}function dC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ma(this),e,...n);return Jp.set(s,e.sort?e.sort():[e]),In(s)}:lC().includes(t)?function(...e){return t.apply(ma(this),e),In(Xp.get(this))}:function(...e){return In(t.apply(ma(this),e))}}function hC(t){return typeof t=="function"?dC(t):(t instanceof IDBTransaction&&uC(t),oC(t,aC())?new Proxy(t,ul):t)}function In(t){if(t instanceof IDBRequest)return cC(t);if(pa.has(t))return pa.get(t);const e=hC(t);return e!==t&&(pa.set(t,e),lc.set(e,t)),e}const ma=t=>lc.get(t);function pC(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=In(o);return s&&o.addEventListener("upgradeneeded",l=>{s(In(o.result),l.oldVersion,l.newVersion,In(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const mC=["get","getKey","getAll","getAllKeys","count"],gC=["put","add","delete","clear"],ga=new Map;function Nf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ga.get(e))return ga.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=gC.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||mC.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return ga.set(e,r),r}fC(t=>({...t,get:(e,n,s)=>Nf(e,n)||t.get(e,n,s),has:(e,n)=>!!Nf(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(vC(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function vC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const fl="@firebase/app",Of="0.11.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an=new Qp("@firebase/app"),yC="@firebase/app-compat",bC="@firebase/analytics-compat",CC="@firebase/analytics",wC="@firebase/app-check-compat",EC="@firebase/app-check",SC="@firebase/auth",xC="@firebase/auth-compat",IC="@firebase/database",TC="@firebase/data-connect",kC="@firebase/database-compat",AC="@firebase/functions",PC="@firebase/functions-compat",RC="@firebase/installations",NC="@firebase/installations-compat",OC="@firebase/messaging",MC="@firebase/messaging-compat",DC="@firebase/performance",LC="@firebase/performance-compat",FC="@firebase/remote-config",$C="@firebase/remote-config-compat",BC="@firebase/storage",VC="@firebase/storage-compat",UC="@firebase/firestore",HC="@firebase/vertexai",jC="@firebase/firestore-compat",WC="firebase",zC="11.3.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dl="[DEFAULT]",GC={[fl]:"fire-core",[yC]:"fire-core-compat",[CC]:"fire-analytics",[bC]:"fire-analytics-compat",[EC]:"fire-app-check",[wC]:"fire-app-check-compat",[SC]:"fire-auth",[xC]:"fire-auth-compat",[IC]:"fire-rtdb",[TC]:"fire-data-connect",[kC]:"fire-rtdb-compat",[AC]:"fire-fn",[PC]:"fire-fn-compat",[RC]:"fire-iid",[NC]:"fire-iid-compat",[OC]:"fire-fcm",[MC]:"fire-fcm-compat",[DC]:"fire-perf",[LC]:"fire-perf-compat",[FC]:"fire-rc",[$C]:"fire-rc-compat",[BC]:"fire-gcs",[VC]:"fire-gcs-compat",[UC]:"fire-fst",[jC]:"fire-fst-compat",[HC]:"fire-vertex","fire-js":"fire-js",[WC]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr=new Map,KC=new Map,hl=new Map;function Mf(t,e){try{t.container.addComponent(e)}catch(n){an.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Qr(t){const e=t.name;if(hl.has(e))return an.debug(`There were multiple attempts to register component ${e}.`),!1;hl.set(e,t);for(const n of Yr.values())Mf(n,t);for(const n of KC.values())Mf(n,t);return!0}function qC(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function YC(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Tn=new qp("app","Firebase",QC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Vi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Tn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JC=zC;function Zp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:dl,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Tn.create("bad-app-name",{appName:String(i)});if(n||(n=Gp()),!n)throw Tn.create("no-options");const r=Yr.get(i);if(r){if(ll(n,r.options)&&ll(s,r.config))return r;throw Tn.create("duplicate-app",{appName:i})}const o=new tC(i);for(const l of hl.values())o.addComponent(l);const a=new XC(n,s,o);return Yr.set(i,a),a}function ZC(t=dl){const e=Yr.get(t);if(!e&&t===dl&&Gp())return Zp();if(!e)throw Tn.create("no-app",{appName:t});return e}function Rs(t,e,n){var s;let i=(s=GC[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),an.warn(a.join(" "));return}Qr(new Vi(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ew="firebase-heartbeat-database",tw=1,Ui="firebase-heartbeat-store";let _a=null;function em(){return _a||(_a=pC(ew,tw,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ui)}catch(n){console.warn(n)}}}}).catch(t=>{throw Tn.create("idb-open",{originalErrorMessage:t.message})})),_a}async function nw(t){try{const n=(await em()).transaction(Ui),s=await n.objectStore(Ui).get(tm(t));return await n.done,s}catch(e){if(e instanceof or)an.warn(e.message);else{const n=Tn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});an.warn(n.message)}}}async function Df(t,e){try{const s=(await em()).transaction(Ui,"readwrite");await s.objectStore(Ui).put(e,tm(t)),await s.done}catch(n){if(n instanceof or)an.warn(n.message);else{const s=Tn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});an.warn(s.message)}}}function tm(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sw=1024,iw=30;class rw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new aw(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Lf();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>iw){const o=lw(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){an.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Lf(),{heartbeatsToSend:s,unsentEntries:i}=ow(this._heartbeatsCache.heartbeats),r=Kr(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return an.warn(n),""}}}function Lf(){return new Date().toISOString().substring(0,10)}function ow(t,e=sw){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Ff(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ff(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class aw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Hb()?jb().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await nw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Df(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Df(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ff(t){return Kr(JSON.stringify({version:2,heartbeats:t})).length}function lw(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cw(t){Qr(new Vi("platform-logger",e=>new _C(e),"PRIVATE")),Qr(new Vi("heartbeat",e=>new rw(e),"PRIVATE")),Rs(fl,Of,t),Rs(fl,Of,"esm2017"),Rs("fire-js","")}cw("");var uw="firebase",fw="11.3.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rs(uw,fw,"app");var $f={};const Bf="@firebase/database",Vf="1.0.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nm="";function dw(t){nm=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),je(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Bi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Gt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sm=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new hw(e)}}catch{}return new pw},Zn=sm("localStorage"),mw=sm("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns=new Qp("@firebase/database"),gw=function(){let t=1;return function(){return t++}}(),im=function(t){const e=Xb(t),n=new Qb;n.update(e);const s=n.digest();return ac.encodeByteArray(s)},ar=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=ar.apply(null,s):typeof s=="object"?e+=je(s):e+=s,e+=" "}return e};let Ei=null,Uf=!0;const _w=function(t,e){M(!0,"Can't turn on custom loggers persistently."),Ns.logLevel=Ae.VERBOSE,Ei=Ns.log.bind(Ns)},Ye=function(...t){if(Uf===!0&&(Uf=!1,Ei===null&&mw.get("logging_enabled")===!0&&_w()),Ei){const e=ar.apply(null,t);Ei(e)}},lr=function(t){return function(...e){Ye(t,...e)}},pl=function(...t){const e="FIREBASE INTERNAL ERROR: "+ar(...t);Ns.error(e)},ln=function(...t){const e=`FIREBASE FATAL ERROR: ${ar(...t)}`;throw Ns.error(e),new Error(e)},at=function(...t){const e="FIREBASE WARNING: "+ar(...t);Ns.warn(e)},vw=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&at("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},cc=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},yw=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Vs="[MIN_NAME]",cs="[MAX_NAME]",hs=function(t,e){if(t===e)return 0;if(t===Vs||e===cs)return-1;if(e===Vs||t===cs)return 1;{const n=Hf(t),s=Hf(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},bw=function(t,e){return t===e?0:t<e?-1:1},ri=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+je(e))},uc=function(t){if(typeof t!="object"||t===null)return je(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=je(e[s]),n+=":",n+=uc(t[e[s]]);return n+="}",n},rm=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Xe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const om=function(t){M(!cc(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let f="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),f=f+d}return f.toLowerCase()},Cw=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},ww=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Ew(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const Sw=new RegExp("^-?(0*)\\d{1,10}$"),xw=-2147483648,Iw=2147483647,Hf=function(t){if(Sw.test(t)){const e=Number(t);if(e>=xw&&e<=Iw)return e}return null},Ys=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw at("Exception was thrown by user callback.",n),e},Math.floor(0))}},Tw=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Si=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,YC(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){at(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ye("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',at(e)}}class Rr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Rr.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fc="5",am="v",lm="s",cm="r",um="f",fm=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,dm="ls",hm="p",ml="ac",pm="websocket",mm="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Zn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Zn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Pw(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function _m(t,e,n){M(typeof e=="string","typeof type must == string"),M(typeof n=="object","typeof params must == object");let s;if(e===pm)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===mm)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Pw(t)&&(n.ns=t.namespace);const i=[];return Xe(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(){this.counters_={}}incrementCounter(e,n=1){Gt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Pb(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const va={},ya={};function dc(t){const e=t.toString();return va[e]||(va[e]=new Rw),va[e]}function Nw(t,e){const n=t.toString();return ya[n]||(ya[n]=e()),ya[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Ys(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jf="start",Mw="close",Dw="pLPCommand",Lw="pRTLPCB",vm="id",ym="pw",bm="ser",Fw="cb",$w="seg",Bw="ts",Vw="d",Uw="dframe",Cm=1870,wm=30,Hw=Cm-wm,jw=25e3,Ww=3e4;class Ss{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=lr(e),this.stats_=dc(n),this.urlFn=l=>(this.appCheckToken&&(l[ml]=this.appCheckToken),_m(n,mm,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Ow(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Ww)),yw(()=>{if(this.isClosed_)return;this.scriptTagHolder=new hc((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===jf)this.id=a,this.password=l;else if(o===Mw)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[jf]="t",s[bm]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Fw]=this.scriptTagHolder.uniqueCallbackIdentifier),s[am]=fc,this.transportSessionId&&(s[lm]=this.transportSessionId),this.lastSessionId&&(s[dm]=this.lastSessionId),this.applicationId&&(s[hm]=this.applicationId),this.appCheckToken&&(s[ml]=this.appCheckToken),typeof location<"u"&&location.hostname&&fm.test(location.hostname)&&(s[cm]=um);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ss.forceAllow_=!0}static forceDisallow(){Ss.forceDisallow_=!0}static isAvailable(){return Ss.forceAllow_?!0:!Ss.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Cw()&&!ww()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=je(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=jp(n),i=rm(s,Hw);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Uw]="t",s[vm]=e,s[ym]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=je(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class hc{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=gw(),window[Dw+this.uniqueCallbackIdentifier]=e,window[Lw+this.uniqueCallbackIdentifier]=n,this.myIFrame=hc.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ye("frame writing exception"),a.stack&&Ye(a.stack),Ye(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ye("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[vm]=this.myID,e[ym]=this.myPW,e[bm]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+wm+s.length<=Cm;){const o=this.pendingSegs.shift();s=s+"&"+$w+i+"="+o.seg+"&"+Bw+i+"="+o.ts+"&"+Vw+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(jw)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Ye("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zw=16384,Gw=45e3;let Xr=null;typeof MozWebSocket<"u"?Xr=MozWebSocket:typeof WebSocket<"u"&&(Xr=WebSocket);class kt{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=lr(this.connId),this.stats_=dc(n),this.connURL=kt.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[am]=fc,typeof location<"u"&&location.hostname&&fm.test(location.hostname)&&(o[cm]=um),n&&(o[lm]=n),s&&(o[dm]=s),i&&(o[ml]=i),r&&(o[hm]=r),_m(e,pm,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Zn.set("previous_websocket_failure",!0);try{let s;Ub(),this.mySock=new Xr(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){kt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Xr!==null&&!kt.forceDisallow_}static previouslyFailed(){return Zn.isInMemoryStorage||Zn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Zn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Bi(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(M(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=je(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=rm(n,zw);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Gw))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}kt.responsesRequiredToBeHealthy=2;kt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{static get ALL_TRANSPORTS(){return[Ss,kt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=kt&&kt.isAvailable();let s=n&&!kt.previouslyFailed();if(e.webSocketOnly&&(n||at("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[kt];else{const i=this.transports_=[];for(const r of Hi.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Hi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Hi.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kw=6e4,qw=5e3,Yw=10*1024,Qw=100*1024,ba="t",Wf="d",Xw="s",zf="r",Jw="e",Gf="o",Kf="a",qf="n",Yf="p",Zw="h";class eE{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=lr("c:"+this.id+":"),this.transportManager_=new Hi(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Si(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Qw?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Yw?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ba in e){const n=e[ba];n===Kf?this.upgradeIfSecondaryHealthy_():n===zf?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Gf&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ri("t",e),s=ri("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Yf,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Kf,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:qf,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ri("t",e),s=ri("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ri(ba,e);if(Wf in e){const s=e[Wf];if(n===Zw){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===qf){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Xw?this.onConnectionShutdown_(s):n===zf?this.onReset_(s):n===Jw?pl("Server Error: "+s):n===Gf?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):pl("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),fc!==s&&at("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Si(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Kw))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Si(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(qw))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Yf,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Zn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(e){this.allowedEvents_=e,this.listeners_={},M(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){M(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr extends Sm{static getInstance(){return new Jr}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Kp()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return M(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qf=32,Xf=768;class Ce{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function me(){return new Ce("")}function re(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Mn(t){return t.pieces_.length-t.pieceNum_}function Pe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Ce(t.pieces_,e)}function pc(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function tE(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ji(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function xm(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Ce(e,0)}function De(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Ce)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new Ce(n,0)}function ae(t){return t.pieceNum_>=t.pieces_.length}function ot(t,e){const n=re(t),s=re(e);if(n===null)return e;if(n===s)return ot(Pe(t),Pe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function nE(t,e){const n=ji(t,0),s=ji(e,0);for(let i=0;i<n.length&&i<s.length;i++){const r=hs(n[i],s[i]);if(r!==0)return r}return n.length===s.length?0:n.length<s.length?-1:1}function mc(t,e){if(Mn(t)!==Mn(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function wt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Mn(t)>Mn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class sE{constructor(e,n){this.errorPrefix_=n,this.parts_=ji(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=No(this.parts_[s]);Im(this)}}function iE(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=No(e),Im(t)}function rE(t){const e=t.parts_.pop();t.byteLength_-=No(e),t.parts_.length>0&&(t.byteLength_-=1)}function Im(t){if(t.byteLength_>Xf)throw new Error(t.errorPrefix_+"has a key path longer than "+Xf+" bytes ("+t.byteLength_+").");if(t.parts_.length>Qf)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Qf+") or object contains a cycle "+Qn(t))}function Qn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc extends Sm{static getInstance(){return new gc}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return M(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi=1e3,oE=60*5*1e3,Jf=30*1e3,aE=1.3,lE=3e4,cE="server_kill",Zf=3;class sn extends Em{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=sn.nextPersistentConnectionId_++,this.log_=lr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=oi,this.maxReconnectDelay_=oE,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");gc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Jr.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(je(r)),M(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new rr,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),M(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),M(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;sn.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Gt(e,"w")){const s=Bs(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();at(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||qb(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Jf)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Kb(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),M(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+je(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):pl("Unrecognized action received from server: "+je(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){M(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=oi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=oi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>lE&&(this.reconnectDelay_=oi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*aE)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+sn.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(f){M(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ye("getToken() completed but was canceled"):(Ye("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=d&&d.token,a=new eE(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,p=>{at(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(cE)},r))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&at(f),l())}}}interrupt(e){Ye("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ye("Resuming connection for reason: "+e),delete this.interruptReasons_[e],kf(this.interruptReasons_)&&(this.reconnectDelay_=oi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>uc(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new Ce(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Ye("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Zf&&(this.reconnectDelay_=Jf,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ye("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Zf&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+nm.replace(/\./g,"-")]=1,Kp()?e["framework.cordova"]=1:Vb()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Jr.getInstance().currentlyOnline();return kf(this.interruptReasons_)&&e}}sn.nextPersistentConnectionId_=0;sn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new oe(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new oe(Vs,e),i=new oe(Vs,n);return this.compare(s,i)!==0}minPost(){return oe.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wr;class Tm extends Oo{static get __EMPTY_NODE(){return wr}static set __EMPTY_NODE(e){wr=e}compare(e,n){return hs(e.name,n.name)}isDefinedOn(e){throw qs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return oe.MIN}maxPost(){return new oe(cs,wr)}makePost(e,n){return M(typeof e=="string","KeyIndex indexValue must always be a string."),new oe(e,wr)}toString(){return".key"}}const Os=new Tm;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ge{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Ge.RED,this.left=i??pt.EMPTY_NODE,this.right=r??pt.EMPTY_NODE}copy(e,n,s,i,r){return new Ge(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return pt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return pt.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ge.RED=!0;Ge.BLACK=!1;class uE{copy(e,n,s,i,r){return this}insert(e,n,s){return new Ge(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class pt{constructor(e,n=pt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new pt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ge.BLACK,null,null))}remove(e){return new pt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ge.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Er(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Er(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Er(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Er(this.root_,null,this.comparator_,!0,e)}}pt.EMPTY_NODE=new uE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fE(t,e){return hs(t.name,e.name)}function _c(t,e){return hs(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gl;function dE(t){gl=t}const km=function(t){return typeof t=="number"?"number:"+om(t):"string:"+t},Am=function(t){if(t.isLeafNode()){const e=t.val();M(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Gt(e,".sv"),"Priority must be a string or number.")}else M(t===gl||t.isEmpty(),"priority of unexpected type.");M(t===gl||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ed;class ze{static set __childrenNodeConstructor(e){ed=e}static get __childrenNodeConstructor(){return ed}constructor(e,n=ze.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,M(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Am(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ze(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ze.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ae(e)?this:re(e)===".priority"?this.priorityNode_:ze.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ze.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=re(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(M(s!==".priority"||Mn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ze.__childrenNodeConstructor.EMPTY_NODE.updateChild(Pe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+km(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=om(this.value_):e+=this.value_,this.lazyHash_=im(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ze.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ze.__childrenNodeConstructor?-1:(M(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=ze.VALUE_TYPE_ORDER.indexOf(n),r=ze.VALUE_TYPE_ORDER.indexOf(s);return M(i>=0,"Unknown leaf type: "+n),M(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ze.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pm,Rm;function hE(t){Pm=t}function pE(t){Rm=t}class mE extends Oo{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?hs(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return oe.MIN}maxPost(){return new oe(cs,new ze("[PRIORITY-POST]",Rm))}makePost(e,n){const s=Pm(e);return new oe(n,new ze("[PRIORITY-POST]",s))}toString(){return".priority"}}const Le=new mE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gE=Math.log(2);class _E{constructor(e){const n=r=>parseInt(Math.log(r)/gE,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Zr=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let f,d;if(u===0)return null;if(u===1)return f=t[l],d=n?n(f):f,new Ge(d,f.node,Ge.BLACK,null,null);{const p=parseInt(u/2,10)+l,y=i(l,p),_=i(p+1,c);return f=t[p],d=n?n(f):f,new Ge(d,f.node,Ge.BLACK,y,_)}},r=function(l){let c=null,u=null,f=t.length;const d=function(y,_){const w=f-y,C=f;f-=y;const v=i(w+1,C),T=t[w],O=n?n(T):T;p(new Ge(O,T.node,_,null,v))},p=function(y){c?(c.left=y,c=y):(u=y,c=y)};for(let y=0;y<l.count;++y){const _=l.nextBitIsOne(),w=Math.pow(2,l.count-(y+1));_?d(w,Ge.BLACK):(d(w,Ge.BLACK),d(w,Ge.RED))}return u},o=new _E(t.length),a=r(o);return new pt(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ca;const bs={};class tn{static get Default(){return M(bs&&Le,"ChildrenNode.ts has not been loaded"),Ca=Ca||new tn({".priority":bs},{".priority":Le}),Ca}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Bs(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof pt?n:null}hasIndex(e){return Gt(this.indexSet_,e.toString())}addIndex(e,n){M(e!==Os,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(oe.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Zr(s,e.getCompare()):a=bs;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new tn(u,c)}addToIndexes(e,n){const s=qr(this.indexes_,(i,r)=>{const o=Bs(this.indexSet_,r);if(M(o,"Missing index implementation for "+r),i===bs)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(oe.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Zr(a,o.getCompare())}else return bs;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new oe(e.name,a))),l.insert(e,e.node)}});return new tn(s,this.indexSet_)}removeFromIndexes(e,n){const s=qr(this.indexes_,i=>{if(i===bs)return i;{const r=n.get(e.name);return r?i.remove(new oe(e.name,r)):i}});return new tn(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ai;class J{static get EMPTY_NODE(){return ai||(ai=new J(new pt(_c),null,tn.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Am(this.priorityNode_),this.children_.isEmpty()&&M(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ai}updatePriority(e){return this.children_.isEmpty()?this:new J(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ai:n}}getChild(e){const n=re(e);return n===null?this:this.getImmediateChild(n).getChild(Pe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(M(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new oe(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?ai:this.priorityNode_;return new J(i,o,r)}}updateChild(e,n){const s=re(e);if(s===null)return n;{M(re(e)!==".priority"||Mn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Pe(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(Le,(o,a)=>{n[o]=a.val(e),s++,r&&J.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+km(this.getPriority().val())+":"),this.forEachChild(Le,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":im(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new oe(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new oe(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new oe(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,oe.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,oe.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===cr?-1:0}withIndex(e){if(e===Os||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new J(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Os||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Le),i=n.getIterator(Le);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Os?null:this.indexMap_.get(e.toString())}}J.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class vE extends J{constructor(){super(new pt(_c),J.EMPTY_NODE,tn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return J.EMPTY_NODE}isEmpty(){return!1}}const cr=new vE;Object.defineProperties(oe,{MIN:{value:new oe(Vs,J.EMPTY_NODE)},MAX:{value:new oe(cs,cr)}});Tm.__EMPTY_NODE=J.EMPTY_NODE;ze.__childrenNodeConstructor=J;dE(cr);pE(cr);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yE=!0;function He(t,e=null){if(t===null)return J.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),M(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ze(n,He(e))}if(!(t instanceof Array)&&yE){const n=[];let s=!1;if(Xe(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=He(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new oe(o,l)))}}),n.length===0)return J.EMPTY_NODE;const r=Zr(n,fE,o=>o.name,_c);if(s){const o=Zr(n,Le.getCompare());return new J(r,He(e),new tn({".priority":o},{".priority":Le}))}else return new J(r,He(e),tn.Default)}else{let n=J.EMPTY_NODE;return Xe(t,(s,i)=>{if(Gt(t,s)&&s.substring(0,1)!=="."){const r=He(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(He(e))}}hE(He);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE extends Oo{constructor(e){super(),this.indexPath_=e,M(!ae(e)&&re(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?hs(e.name,n.name):r}makePost(e,n){const s=He(e),i=J.EMPTY_NODE.updateChild(this.indexPath_,s);return new oe(n,i)}maxPost(){const e=J.EMPTY_NODE.updateChild(this.indexPath_,cr);return new oe(cs,e)}toString(){return ji(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE extends Oo{compare(e,n){const s=e.node.compareTo(n.node);return s===0?hs(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return oe.MIN}maxPost(){return oe.MAX}makePost(e,n){const s=He(e);return new oe(n,s)}toString(){return".value"}}const wE=new CE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nm(t){return{type:"value",snapshotNode:t}}function Us(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Wi(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function zi(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function EE(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){M(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Wi(n,a)):M(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Us(n,s)):o.trackChildChange(zi(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Le,(i,r)=>{n.hasChild(i)||s.trackChildChange(Wi(i,r))}),n.isLeafNode()||n.forEachChild(Le,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(zi(i,r,o))}else s.trackChildChange(Us(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?J.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e){this.indexedFilter_=new vc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Gi.getStartPost_(e),this.endPost_=Gi.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new oe(n,s))||(s=J.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=J.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(J.EMPTY_NODE);const r=this;return n.forEachChild(Le,(o,a)=>{r.matches(new oe(o,a))||(i=i.updateImmediateChild(o,J.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Gi(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new oe(n,s))||(s=J.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=J.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=J.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(J.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,J.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const f=this.index_.getCompare();o=(d,p)=>f(p,d)}else o=this.index_.getCompare();const a=e;M(a.numChildren()===this.limit_,"");const l=new oe(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const f=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const p=d==null?1:o(d,l);if(u&&!s.isEmpty()&&p>=0)return r!=null&&r.trackChildChange(zi(n,s,f)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(Wi(n,f));const _=a.updateImmediateChild(n,J.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(Us(d.name,d.node)),_.updateImmediateChild(d.name,d.node)):_}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Wi(c.name,c.node)),r.trackChildChange(Us(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,J.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Le}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return M(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return M(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Vs}hasEnd(){return this.endSet_}getIndexEndValue(){return M(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return M(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:cs}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return M(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Le}copy(){const e=new yc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function xE(t){return t.loadsAllData()?new vc(t.getIndex()):t.hasLimit()?new SE(t):new Gi(t)}function td(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Le?n="$priority":t.index_===wE?n="$value":t.index_===Os?n="$key":(M(t.index_ instanceof bE,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=je(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=je(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+je(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=je(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+je(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function nd(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Le&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo extends Em{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(M(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=lr("p:rest:"),this.listens_={}}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=eo.getListenId_(e,s),a={};this.listens_[o]=a;const l=td(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let f=u;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(r,f,!1,s),Bs(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=eo.getListenId_(e,n);delete this.listens_[s]}get(e){const n=td(e._queryParams),s=e._path.toString(),i=new rr;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Yb(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Bi(a.responseText)}catch{at("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&at("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE{constructor(){this.rootNode_=J.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(){return{value:null,children:new Map}}function Om(t,e,n){if(ae(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=re(e);t.children.has(s)||t.children.set(s,to());const i=t.children.get(s);e=Pe(e),Om(i,e,n)}}function _l(t,e,n){t.value!==null?n(e,t.value):TE(t,(s,i)=>{const r=new Ce(e.toString()+"/"+s);_l(i,r,n)})}function TE(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kE{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Xe(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sd=10*1e3,AE=30*1e3,PE=5*60*1e3;class RE{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new kE(e);const s=sd+(AE-sd)*Math.random();Si(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Xe(e,(i,r)=>{r>0&&Gt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Si(this.reportStats_.bind(this),Math.floor(Math.random()*2*PE))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var At;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(At||(At={}));function bc(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Cc(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function wc(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=At.ACK_USER_WRITE,this.source=bc()}operationForChild(e){if(ae(this.path)){if(this.affectedTree.value!=null)return M(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ce(e));return new no(me(),n,this.revert)}}else return M(re(this.path)===e,"operationForChild called for unrelated child."),new no(Pe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e,n){this.source=e,this.path=n,this.type=At.LISTEN_COMPLETE}operationForChild(e){return ae(this.path)?new Ki(this.source,me()):new Ki(this.source,Pe(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=At.OVERWRITE}operationForChild(e){return ae(this.path)?new us(this.source,me(),this.snap.getImmediateChild(e)):new us(this.source,Pe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=At.MERGE}operationForChild(e){if(ae(this.path)){const n=this.children.subtree(new Ce(e));return n.isEmpty()?null:n.value?new us(this.source,me(),n.value):new Hs(this.source,me(),n)}else return M(re(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Hs(this.source,Pe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ae(e))return this.isFullyInitialized()&&!this.filtered_;const n=re(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function OE(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(EE(o.childName,o.snapshotNode))}),li(t,i,"child_removed",e,s,n),li(t,i,"child_added",e,s,n),li(t,i,"child_moved",r,s,n),li(t,i,"child_changed",e,s,n),li(t,i,"value",e,s,n),i}function li(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>DE(t,a,l)),o.forEach(a=>{const l=ME(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function ME(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function DE(t,e,n){if(e.childName==null||n.childName==null)throw qs("Should only compare child_ events.");const s=new oe(e.childName,e.snapshotNode),i=new oe(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(t,e){return{eventCache:t,serverCache:e}}function xi(t,e,n,s){return Mo(new Dn(e,n,s),t.serverCache)}function Mm(t,e,n,s){return Mo(t.eventCache,new Dn(e,n,s))}function so(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function fs(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wa;const LE=()=>(wa||(wa=new pt(bw)),wa);class ke{static fromObject(e){let n=new ke(null);return Xe(e,(s,i)=>{n=n.set(new Ce(s),i)}),n}constructor(e,n=LE()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:me(),value:this.value};if(ae(e))return null;{const s=re(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Pe(e),n);return r!=null?{path:De(new Ce(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ae(e))return this;{const n=re(e),s=this.children.get(n);return s!==null?s.subtree(Pe(e)):new ke(null)}}set(e,n){if(ae(e))return new ke(n,this.children);{const s=re(e),r=(this.children.get(s)||new ke(null)).set(Pe(e),n),o=this.children.insert(s,r);return new ke(this.value,o)}}remove(e){if(ae(e))return this.children.isEmpty()?new ke(null):new ke(null,this.children);{const n=re(e),s=this.children.get(n);if(s){const i=s.remove(Pe(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new ke(null):new ke(this.value,r)}else return this}}get(e){if(ae(e))return this.value;{const n=re(e),s=this.children.get(n);return s?s.get(Pe(e)):null}}setTree(e,n){if(ae(e))return n;{const s=re(e),r=(this.children.get(s)||new ke(null)).setTree(Pe(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new ke(this.value,o)}}fold(e){return this.fold_(me(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(De(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,me(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(ae(e))return null;{const r=re(e),o=this.children.get(r);return o?o.findOnPath_(Pe(e),De(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,me(),n)}foreachOnPath_(e,n,s){if(ae(e))return this;{this.value&&s(n,this.value);const i=re(e),r=this.children.get(i);return r?r.foreachOnPath_(Pe(e),De(n,i),s):new ke(null)}}foreach(e){this.foreach_(me(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(De(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.writeTree_=e}static empty(){return new Rt(new ke(null))}}function Ii(t,e,n){if(ae(e))return new Rt(new ke(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=ot(i,e);return r=r.updateChild(o,n),new Rt(t.writeTree_.set(i,r))}else{const i=new ke(n),r=t.writeTree_.setTree(e,i);return new Rt(r)}}}function vl(t,e,n){let s=t;return Xe(n,(i,r)=>{s=Ii(s,De(e,i),r)}),s}function id(t,e){if(ae(e))return Rt.empty();{const n=t.writeTree_.setTree(e,new ke(null));return new Rt(n)}}function yl(t,e){return ps(t,e)!=null}function ps(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ot(n.path,e)):null}function rd(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Le,(s,i)=>{e.push(new oe(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new oe(s,i.value))}),e}function kn(t,e){if(ae(e))return t;{const n=ps(t,e);return n!=null?new Rt(new ke(n)):new Rt(t.writeTree_.subtree(e))}}function bl(t){return t.writeTree_.isEmpty()}function js(t,e){return Dm(me(),t.writeTree_,e)}function Dm(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(M(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Dm(De(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(De(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Do(t,e){return Bm(e,t)}function FE(t,e,n,s,i){M(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Ii(t.visibleWrites,e,n)),t.lastWriteId=s}function $E(t,e,n,s){M(s>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:s,visible:!0}),t.visibleWrites=vl(t.visibleWrites,e,n),t.lastWriteId=s}function BE(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function VE(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);M(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&UE(a,s.path)?i=!1:wt(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return HE(t),!0;if(s.snap)t.visibleWrites=id(t.visibleWrites,s.path);else{const a=s.children;Xe(a,l=>{t.visibleWrites=id(t.visibleWrites,De(s.path,l))})}return!0}else return!1}function UE(t,e){if(t.snap)return wt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&wt(De(t.path,n),e))return!0;return!1}function HE(t){t.visibleWrites=Lm(t.allWrites,jE,me()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function jE(t){return t.visible}function Lm(t,e,n){let s=Rt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)wt(n,o)?(a=ot(n,o),s=Ii(s,a,r.snap)):wt(o,n)&&(a=ot(o,n),s=Ii(s,me(),r.snap.getChild(a)));else if(r.children){if(wt(n,o))a=ot(n,o),s=vl(s,a,r.children);else if(wt(o,n))if(a=ot(o,n),ae(a))s=vl(s,me(),r.children);else{const l=Bs(r.children,re(a));if(l){const c=l.getChild(Pe(a));s=Ii(s,me(),c)}}}else throw qs("WriteRecord should have .snap or .children")}}return s}function Fm(t,e,n,s,i){if(!s&&!i){const r=ps(t.visibleWrites,e);if(r!=null)return r;{const o=kn(t.visibleWrites,e);if(bl(o))return n;if(n==null&&!yl(o,me()))return null;{const a=n||J.EMPTY_NODE;return js(o,a)}}}else{const r=kn(t.visibleWrites,e);if(!i&&bl(r))return n;if(!i&&n==null&&!yl(r,me()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(wt(c.path,e)||wt(e,c.path))},a=Lm(t.allWrites,o,e),l=n||J.EMPTY_NODE;return js(a,l)}}}function WE(t,e,n){let s=J.EMPTY_NODE;const i=ps(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Le,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=kn(t.visibleWrites,e);return n.forEachChild(Le,(o,a)=>{const l=js(kn(r,new Ce(o)),a);s=s.updateImmediateChild(o,l)}),rd(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=kn(t.visibleWrites,e);return rd(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function zE(t,e,n,s,i){M(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=De(e,n);if(yl(t.visibleWrites,r))return null;{const o=kn(t.visibleWrites,r);return bl(o)?i.getChild(n):js(o,i.getChild(n))}}function GE(t,e,n,s){const i=De(e,n),r=ps(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=kn(t.visibleWrites,i);return js(o,s.getNode().getImmediateChild(n))}else return null}function KE(t,e){return ps(t.visibleWrites,e)}function qE(t,e,n,s,i,r,o){let a;const l=kn(t.visibleWrites,e),c=ps(l,me());if(c!=null)a=c;else if(n!=null)a=js(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],f=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let p=d.getNext();for(;p&&u.length<i;)f(p,s)!==0&&u.push(p),p=d.getNext();return u}else return[]}function YE(){return{visibleWrites:Rt.empty(),allWrites:[],lastWriteId:-1}}function io(t,e,n,s){return Fm(t.writeTree,t.treePath,e,n,s)}function Ec(t,e){return WE(t.writeTree,t.treePath,e)}function od(t,e,n,s){return zE(t.writeTree,t.treePath,e,n,s)}function ro(t,e){return KE(t.writeTree,De(t.treePath,e))}function QE(t,e,n,s,i,r){return qE(t.writeTree,t.treePath,e,n,s,i,r)}function Sc(t,e,n){return GE(t.writeTree,t.treePath,e,n)}function $m(t,e){return Bm(De(t.treePath,e),t.writeTree)}function Bm(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;M(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),M(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,zi(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Wi(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Us(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,zi(s,e.snapshotNode,i.oldSnap));else throw qs("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Vm=new JE;class xc{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Dn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Sc(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:fs(this.viewCache_),r=QE(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZE(t){return{filter:t}}function e2(t,e){M(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),M(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function t2(t,e,n,s,i){const r=new XE;let o,a;if(n.type===At.OVERWRITE){const c=n;c.source.fromUser?o=Cl(t,e,c.path,c.snap,s,i,r):(M(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!ae(c.path),o=oo(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===At.MERGE){const c=n;c.source.fromUser?o=s2(t,e,c.path,c.children,s,i,r):(M(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=wl(t,e,c.path,c.children,s,i,a,r))}else if(n.type===At.ACK_USER_WRITE){const c=n;c.revert?o=o2(t,e,c.path,s,i,r):o=i2(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===At.LISTEN_COMPLETE)o=r2(t,e,n.path,s,r);else throw qs("Unknown operation type: "+n.type);const l=r.getChanges();return n2(e,o,l),{viewCache:o,changes:l}}function n2(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=so(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Nm(so(e)))}}function Um(t,e,n,s,i,r){const o=e.eventCache;if(ro(s,n)!=null)return e;{let a,l;if(ae(n))if(M(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=fs(e),u=c instanceof J?c:J.EMPTY_NODE,f=Ec(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),f,r)}else{const c=io(s,fs(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=re(n);if(c===".priority"){M(Mn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const f=od(s,n,u,l);f!=null?a=t.filter.updatePriority(u,f):a=o.getNode()}else{const u=Pe(n);let f;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=od(s,n,o.getNode(),l);d!=null?f=o.getNode().getImmediateChild(c).updateChild(u,d):f=o.getNode().getImmediateChild(c)}else f=Sc(s,c,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),c,f,u,i,r):a=o.getNode()}}return xi(e,a,o.isFullyInitialized()||ae(n),t.filter.filtersNodes())}}function oo(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(ae(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),p,null)}else{const p=re(n);if(!l.isCompleteForPath(n)&&Mn(n)>1)return e;const y=Pe(n),w=l.getNode().getImmediateChild(p).updateChild(y,s);p===".priority"?c=u.updatePriority(l.getNode(),w):c=u.updateChild(l.getNode(),p,w,y,Vm,null)}const f=Mm(e,c,l.isFullyInitialized()||ae(n),u.filtersNodes()),d=new xc(i,f,r);return Um(t,f,n,i,d,a)}function Cl(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new xc(i,e,r);if(ae(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=xi(e,c,!0,t.filter.filtersNodes());else{const f=re(n);if(f===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=xi(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=Pe(n),p=a.getNode().getImmediateChild(f);let y;if(ae(d))y=s;else{const _=u.getCompleteChild(f);_!=null?pc(d)===".priority"&&_.getChild(xm(d)).isEmpty()?y=_:y=_.updateChild(d,s):y=J.EMPTY_NODE}if(p.equals(y))l=e;else{const _=t.filter.updateChild(a.getNode(),f,y,d,u,o);l=xi(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function ad(t,e){return t.eventCache.isCompleteForChild(e)}function s2(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=De(n,l);ad(e,re(u))&&(a=Cl(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=De(n,l);ad(e,re(u))||(a=Cl(t,a,u,c,i,r,o))}),a}function ld(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function wl(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;ae(n)?c=s:c=new ke(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((f,d)=>{if(u.hasChild(f)){const p=e.serverCache.getNode().getImmediateChild(f),y=ld(t,p,d);l=oo(t,l,new Ce(f),y,i,r,o,a)}}),c.children.inorderTraversal((f,d)=>{const p=!e.serverCache.isCompleteForChild(f)&&d.value===null;if(!u.hasChild(f)&&!p){const y=e.serverCache.getNode().getImmediateChild(f),_=ld(t,y,d);l=oo(t,l,new Ce(f),_,i,r,o,a)}}),l}function i2(t,e,n,s,i,r,o){if(ro(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(ae(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return oo(t,e,n,l.getNode().getChild(n),i,r,a,o);if(ae(n)){let c=new ke(null);return l.getNode().forEachChild(Os,(u,f)=>{c=c.set(new Ce(u),f)}),wl(t,e,n,c,i,r,a,o)}else return e}else{let c=new ke(null);return s.foreach((u,f)=>{const d=De(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),wl(t,e,n,c,i,r,a,o)}}function r2(t,e,n,s,i){const r=e.serverCache,o=Mm(e,r.getNode(),r.isFullyInitialized()||ae(n),r.isFiltered());return Um(t,o,n,s,Vm,i)}function o2(t,e,n,s,i,r){let o;if(ro(s,n)!=null)return e;{const a=new xc(s,e,i),l=e.eventCache.getNode();let c;if(ae(n)||re(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=io(s,fs(e));else{const f=e.serverCache.getNode();M(f instanceof J,"serverChildren would be complete if leaf node"),u=Ec(s,f)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=re(n);let f=Sc(s,u,e.serverCache);f==null&&e.serverCache.isCompleteForChild(u)&&(f=l.getImmediateChild(u)),f!=null?c=t.filter.updateChild(l,u,f,Pe(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,J.EMPTY_NODE,Pe(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=io(s,fs(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||ro(s,me())!=null,xi(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a2{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new vc(s.getIndex()),r=xE(s);this.processor_=ZE(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(J.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(J.EMPTY_NODE,a.getNode(),null),u=new Dn(l,o.isFullyInitialized(),i.filtersNodes()),f=new Dn(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Mo(f,u),this.eventGenerator_=new NE(this.query_)}get query(){return this.query_}}function l2(t){return t.viewCache_.serverCache.getNode()}function c2(t){return so(t.viewCache_)}function u2(t,e){const n=fs(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ae(e)&&!n.getImmediateChild(re(e)).isEmpty())?n.getChild(e):null}function cd(t){return t.eventRegistrations_.length===0}function f2(t,e){t.eventRegistrations_.push(e)}function ud(t,e,n){const s=[];if(n){M(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function fd(t,e,n,s){e.type===At.MERGE&&e.source.queryId!==null&&(M(fs(t.viewCache_),"We should always have a full cache before handling merges"),M(so(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=t2(t.processor_,i,e,n,s);return e2(t.processor_,r.viewCache),M(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Hm(t,r.changes,r.viewCache.eventCache.getNode(),null)}function d2(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Le,(r,o)=>{s.push(Us(r,o))}),n.isFullyInitialized()&&s.push(Nm(n.getNode())),Hm(t,s,n.getNode(),e)}function Hm(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return OE(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ao;class jm{constructor(){this.views=new Map}}function h2(t){M(!ao,"__referenceConstructor has already been defined"),ao=t}function p2(){return M(ao,"Reference.ts has not been loaded"),ao}function m2(t){return t.views.size===0}function Ic(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return M(r!=null,"SyncTree gave us an op for an invalid query."),fd(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(fd(o,e,n,s));return r}}function Wm(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=io(n,i?s:null),l=!1;a?l=!0:s instanceof J?(a=Ec(n,s),l=!1):(a=J.EMPTY_NODE,l=!1);const c=Mo(new Dn(a,l,!1),new Dn(s,i,!1));return new a2(e,c)}return o}function g2(t,e,n,s,i,r){const o=Wm(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),f2(o,n),d2(o,n)}function _2(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=Ln(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(ud(c,n,s)),cd(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(ud(l,n,s)),cd(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Ln(t)&&r.push(new(p2())(e._repo,e._path)),{removed:r,events:o}}function zm(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function An(t,e){let n=null;for(const s of t.views.values())n=n||u2(s,e);return n}function Gm(t,e){if(e._queryParams.loadsAllData())return Lo(t);{const s=e._queryIdentifier;return t.views.get(s)}}function Km(t,e){return Gm(t,e)!=null}function Ln(t){return Lo(t)!=null}function Lo(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lo;function v2(t){M(!lo,"__referenceConstructor has already been defined"),lo=t}function y2(){return M(lo,"Reference.ts has not been loaded"),lo}let b2=1;class dd{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ke(null),this.pendingWriteTree_=YE(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function qm(t,e,n,s,i){return FE(t.pendingWriteTree_,e,n,s,i),i?Qs(t,new us(bc(),e,n)):[]}function C2(t,e,n,s){$E(t.pendingWriteTree_,e,n,s);const i=ke.fromObject(n);return Qs(t,new Hs(bc(),e,i))}function En(t,e,n=!1){const s=BE(t.pendingWriteTree_,e);if(VE(t.pendingWriteTree_,e)){let r=new ke(null);return s.snap!=null?r=r.set(me(),!0):Xe(s.children,o=>{r=r.set(new Ce(o),!0)}),Qs(t,new no(s.path,r,n))}else return[]}function ur(t,e,n){return Qs(t,new us(Cc(),e,n))}function w2(t,e,n){const s=ke.fromObject(n);return Qs(t,new Hs(Cc(),e,s))}function E2(t,e){return Qs(t,new Ki(Cc(),e))}function S2(t,e,n){const s=kc(t,n);if(s){const i=Ac(s),r=i.path,o=i.queryId,a=ot(r,e),l=new Ki(wc(o),a);return Pc(t,r,l)}else return[]}function co(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||Km(o,e))){const l=_2(o,e,n,s);m2(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(r,(d,p)=>Ln(p));if(u&&!f){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const p=T2(d);for(let y=0;y<p.length;++y){const _=p[y],w=_.query,C=Jm(t,_);t.listenProvider_.startListening(Ti(w),qi(t,w),C.hashFn,C.onComplete)}}}!f&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(Ti(e),null):c.forEach(d=>{const p=t.queryToTagMap.get(Fo(d));t.listenProvider_.stopListening(Ti(d),p)}))}k2(t,c)}return a}function Ym(t,e,n,s){const i=kc(t,s);if(i!=null){const r=Ac(i),o=r.path,a=r.queryId,l=ot(o,e),c=new us(wc(a),l,n);return Pc(t,o,c)}else return[]}function x2(t,e,n,s){const i=kc(t,s);if(i){const r=Ac(i),o=r.path,a=r.queryId,l=ot(o,e),c=ke.fromObject(n),u=new Hs(wc(a),l,c);return Pc(t,o,u)}else return[]}function El(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,p)=>{const y=ot(d,i);r=r||An(p,y),o=o||Ln(p)});let a=t.syncPointTree_.get(i);a?(o=o||Ln(a),r=r||An(a,me())):(a=new jm,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=J.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((p,y)=>{const _=An(y,me());_&&(r=r.updateImmediateChild(p,_))}));const c=Km(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=Fo(e);M(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const p=A2();t.queryToTagMap.set(d,p),t.tagToQueryMap.set(p,d)}const u=Do(t.pendingWriteTree_,i);let f=g2(a,e,n,u,r,l);if(!c&&!o&&!s){const d=Gm(a,e);f=f.concat(P2(t,e,d))}return f}function Tc(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=ot(o,e),c=An(a,l);if(c)return c});return Fm(i,e,r,n,!0)}function I2(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const f=ot(c,n);s=s||An(u,f)});let i=t.syncPointTree_.get(n);i?s=s||An(i,me()):(i=new jm,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new Dn(s,!0,!1):null,a=Do(t.pendingWriteTree_,e._path),l=Wm(i,e,a,r?o.getNode():J.EMPTY_NODE,r);return c2(l)}function Qs(t,e){return Qm(e,t.syncPointTree_,null,Do(t.pendingWriteTree_,me()))}function Qm(t,e,n,s){if(ae(t.path))return Xm(t,e,n,s);{const i=e.get(me());n==null&&i!=null&&(n=An(i,me()));let r=[];const o=re(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=$m(s,o);r=r.concat(Qm(a,l,c,u))}return i&&(r=r.concat(Ic(i,t,s,n))),r}}function Xm(t,e,n,s){const i=e.get(me());n==null&&i!=null&&(n=An(i,me()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=$m(s,o),u=t.operationForChild(o);u&&(r=r.concat(Xm(u,a,l,c)))}),i&&(r=r.concat(Ic(i,t,s,n))),r}function Jm(t,e){const n=e.query,s=qi(t,n);return{hashFn:()=>(l2(e)||J.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?S2(t,n._path,s):E2(t,n._path);{const r=Ew(i,n);return co(t,n,null,r)}}}}function qi(t,e){const n=Fo(e);return t.queryToTagMap.get(n)}function Fo(t){return t._path.toString()+"$"+t._queryIdentifier}function kc(t,e){return t.tagToQueryMap.get(e)}function Ac(t){const e=t.indexOf("$");return M(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Ce(t.substr(0,e))}}function Pc(t,e,n){const s=t.syncPointTree_.get(e);M(s,"Missing sync point for query tag that we're tracking");const i=Do(t.pendingWriteTree_,e);return Ic(s,n,i,null)}function T2(t){return t.fold((e,n,s)=>{if(n&&Ln(n))return[Lo(n)];{let i=[];return n&&(i=zm(n)),Xe(s,(r,o)=>{i=i.concat(o)}),i}})}function Ti(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(y2())(t._repo,t._path):t}function k2(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Fo(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function A2(){return b2++}function P2(t,e,n){const s=e._path,i=qi(t,e),r=Jm(t,n),o=t.listenProvider_.startListening(Ti(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)M(!Ln(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,f)=>{if(!ae(c)&&u&&Ln(u))return[Lo(u).query];{let d=[];return u&&(d=d.concat(zm(u).map(p=>p.query))),Xe(f,(p,y)=>{d=d.concat(y)}),d}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(Ti(u),qi(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Rc(n)}node(){return this.node_}}class Nc{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=De(this.path_,e);return new Nc(this.syncTree_,n)}node(){return Tc(this.syncTree_,this.path_)}}const R2=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},hd=function(t,e,n){if(!t||typeof t!="object")return t;if(M(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return N2(t[".sv"],e,n);if(typeof t[".sv"]=="object")return O2(t[".sv"],e);M(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},N2=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:M(!1,"Unexpected server value: "+t)}},O2=function(t,e,n){t.hasOwnProperty("increment")||M(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&M(!1,"Unexpected increment value: "+s);const i=e.node();if(M(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Zm=function(t,e,n,s){return Oc(e,new Nc(n,t),s)},eg=function(t,e,n){return Oc(t,new Rc(e),n)};function Oc(t,e,n){const s=t.getPriority().val(),i=hd(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=hd(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new ze(a,He(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new ze(i))),o.forEachChild(Le,(a,l)=>{const c=Oc(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Dc(t,e){let n=e instanceof Ce?e:new Ce(e),s=t,i=re(n);for(;i!==null;){const r=Bs(s.node.children,i)||{children:{},childCount:0};s=new Mc(i,s,r),n=Pe(n),i=re(n)}return s}function Xs(t){return t.node.value}function tg(t,e){t.node.value=e,Sl(t)}function ng(t){return t.node.childCount>0}function M2(t){return Xs(t)===void 0&&!ng(t)}function $o(t,e){Xe(t.node.children,(n,s)=>{e(new Mc(n,t,s))})}function sg(t,e,n,s){n&&e(t),$o(t,i=>{sg(i,e,!0)})}function D2(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function fr(t){return new Ce(t.parent===null?t.name:fr(t.parent)+"/"+t.name)}function Sl(t){t.parent!==null&&L2(t.parent,t.name,t)}function L2(t,e,n){const s=M2(n),i=Gt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Sl(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Sl(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F2=/[\[\].#$\/\u0000-\u001F\u007F]/,$2=/[\[\].#$\u0000-\u001F\u007F]/,Ea=10*1024*1024,Lc=function(t){return typeof t=="string"&&t.length!==0&&!F2.test(t)},ig=function(t){return typeof t=="string"&&t.length!==0&&!$2.test(t)},B2=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),ig(t)},V2=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!cc(t)||t&&typeof t=="object"&&Gt(t,".sv")},rg=function(t,e,n,s){s&&e===void 0||Bo(Ro(t,"value"),e,n)},Bo=function(t,e,n){const s=n instanceof Ce?new sE(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Qn(s));if(typeof e=="function")throw new Error(t+"contains a function "+Qn(s)+" with contents = "+e.toString());if(cc(e))throw new Error(t+"contains "+e.toString()+" "+Qn(s));if(typeof e=="string"&&e.length>Ea/3&&No(e)>Ea)throw new Error(t+"contains a string greater than "+Ea+" utf8 bytes "+Qn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Xe(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Lc(o)))throw new Error(t+" contains an invalid key ("+o+") "+Qn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);iE(s,o),Bo(t,a,s),rE(s)}),i&&r)throw new Error(t+' contains ".value" child '+Qn(s)+" in addition to actual children.")}},U2=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const r=ji(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Lc(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(nE);let i=null;for(n=0;n<e.length;n++){if(s=e[n],i!==null&&wt(i,s))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},H2=function(t,e,n,s){const i=Ro(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];Xe(e,(o,a)=>{const l=new Ce(o);if(Bo(i,a,De(n,l)),pc(l)===".priority"&&!V2(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),U2(i,r)},og=function(t,e,n,s){if(!ig(n))throw new Error(Ro(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},j2=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),og(t,e,n)},Fc=function(t,e){if(re(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},W2=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Lc(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!B2(n))throw new Error(Ro(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z2{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Vo(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!mc(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function ag(t,e,n){Vo(t,n),lg(t,s=>mc(s,e))}function It(t,e,n){Vo(t,n),lg(t,s=>wt(s,e)||wt(e,s))}function lg(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(G2(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function G2(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Ei&&Ye("event: "+n.toString()),Ys(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K2="repo_interrupt",q2=25;class Y2{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new z2,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=to(),this.transactionQueueTree_=new Mc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Q2(t,e,n){if(t.stats_=dc(t.repoInfo_),t.forceRestClient_||Tw())t.server_=new eo(t.repoInfo_,(s,i,r,o)=>{pd(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>md(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{je(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new sn(t.repoInfo_,e,(s,i,r,o)=>{pd(t,s,i,r,o)},s=>{md(t,s)},s=>{X2(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=Nw(t.repoInfo_,()=>new RE(t.stats_,t.server_)),t.infoData_=new IE,t.infoSyncTree_=new dd({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=ur(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),$c(t,"connected",!1),t.serverSyncTree_=new dd({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);It(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function cg(t){const n=t.infoData_.getNode(new Ce(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Uo(t){return R2({timestamp:cg(t)})}function pd(t,e,n,s,i){t.dataUpdateCount++;const r=new Ce(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=qr(n,c=>He(c));o=x2(t.serverSyncTree_,r,l,i)}else{const l=He(n);o=Ym(t.serverSyncTree_,r,l,i)}else if(s){const l=qr(n,c=>He(c));o=w2(t.serverSyncTree_,r,l)}else{const l=He(n);o=ur(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Ws(t,r)),It(t.eventQueue_,a,o)}function md(t,e){$c(t,"connected",e),e===!1&&tS(t)}function X2(t,e){Xe(e,(n,s)=>{$c(t,n,s)})}function $c(t,e,n){const s=new Ce("/.info/"+e),i=He(n);t.infoData_.updateSnapshot(s,i);const r=ur(t.infoSyncTree_,s,i);It(t.eventQueue_,s,r)}function Bc(t){return t.nextWriteId_++}function J2(t,e,n){const s=I2(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=He(i).withIndex(e._queryParams.getIndex());El(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=ur(t.serverSyncTree_,e._path,r);else{const a=qi(t.serverSyncTree_,e);o=Ym(t.serverSyncTree_,e._path,r,a)}return It(t.eventQueue_,e._path,o),co(t.serverSyncTree_,e,n,null,!0),r},i=>(dr(t,"get for query "+je(e)+" failed: "+i),Promise.reject(new Error(i))))}function Z2(t,e,n,s,i){dr(t,"set",{path:e.toString(),value:n,priority:s});const r=Uo(t),o=He(n,s),a=Tc(t.serverSyncTree_,e),l=eg(o,a,r),c=Bc(t),u=qm(t.serverSyncTree_,e,l,c,!0);Vo(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,p)=>{const y=d==="ok";y||at("set at "+e+" failed: "+d);const _=En(t.serverSyncTree_,c,!y);It(t.eventQueue_,e,_),xl(t,i,d,p)});const f=Uc(t,e);Ws(t,f),It(t.eventQueue_,f,[])}function eS(t,e,n,s){dr(t,"update",{path:e.toString(),value:n});let i=!0;const r=Uo(t),o={};if(Xe(n,(a,l)=>{i=!1,o[a]=Zm(De(e,a),He(l),t.serverSyncTree_,r)}),i)Ye("update() called with empty data.  Don't do anything."),xl(t,s,"ok",void 0);else{const a=Bc(t),l=C2(t.serverSyncTree_,e,o,a);Vo(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const f=c==="ok";f||at("update at "+e+" failed: "+c);const d=En(t.serverSyncTree_,a,!f),p=d.length>0?Ws(t,e):e;It(t.eventQueue_,p,d),xl(t,s,c,u)}),Xe(n,c=>{const u=Uc(t,De(e,c));Ws(t,u)}),It(t.eventQueue_,e,[])}}function tS(t){dr(t,"onDisconnectEvents");const e=Uo(t),n=to();_l(t.onDisconnect_,me(),(i,r)=>{const o=Zm(i,r,t.serverSyncTree_,e);Om(n,i,o)});let s=[];_l(n,me(),(i,r)=>{s=s.concat(ur(t.serverSyncTree_,i,r));const o=Uc(t,i);Ws(t,o)}),t.onDisconnect_=to(),It(t.eventQueue_,me(),s)}function nS(t,e,n){let s;re(e._path)===".info"?s=El(t.infoSyncTree_,e,n):s=El(t.serverSyncTree_,e,n),ag(t.eventQueue_,e._path,s)}function ug(t,e,n){let s;re(e._path)===".info"?s=co(t.infoSyncTree_,e,n):s=co(t.serverSyncTree_,e,n),ag(t.eventQueue_,e._path,s)}function sS(t){t.persistentConnection_&&t.persistentConnection_.interrupt(K2)}function dr(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ye(n,...e)}function xl(t,e,n,s){e&&Ys(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function fg(t,e,n){return Tc(t.serverSyncTree_,e,n)||J.EMPTY_NODE}function Vc(t,e=t.transactionQueueTree_){if(e||Ho(t,e),Xs(e)){const n=hg(t,e);M(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&iS(t,fr(e),n)}else ng(e)&&$o(e,n=>{Vc(t,n)})}function iS(t,e,n){const s=n.map(c=>c.currentWriteId),i=fg(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];M(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const f=ot(e,u.path);r=r.updateChild(f,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{dr(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const f=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(En(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&f.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Ho(t,Dc(t.transactionQueueTree_,e)),Vc(t,t.transactionQueueTree_),It(t.eventQueue_,e,u);for(let d=0;d<f.length;d++)Ys(f[d])}else{if(c==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{at("transaction at "+l.toString()+" failed: "+c);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=c}Ws(t,e)}},o)}function Ws(t,e){const n=dg(t,e),s=fr(n),i=hg(t,n);return rS(t,i,s),s}function rS(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=ot(n,l.path);let u=!1,f;if(M(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,f=l.abortReason,i=i.concat(En(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=q2)u=!0,f="maxretry",i=i.concat(En(t.serverSyncTree_,l.currentWriteId,!0));else{const d=fg(t,l.path,o);l.currentInputSnapshot=d;const p=e[a].update(d.val());if(p!==void 0){Bo("transaction failed: Data returned ",p,l.path);let y=He(p);typeof p=="object"&&p!=null&&Gt(p,".priority")||(y=y.updatePriority(d.getPriority()));const w=l.currentWriteId,C=Uo(t),v=eg(y,d,C);l.currentOutputSnapshotRaw=y,l.currentOutputSnapshotResolved=v,l.currentWriteId=Bc(t),o.splice(o.indexOf(w),1),i=i.concat(qm(t.serverSyncTree_,l.path,v,l.currentWriteId,l.applyLocally)),i=i.concat(En(t.serverSyncTree_,w,!0))}else u=!0,f="nodata",i=i.concat(En(t.serverSyncTree_,l.currentWriteId,!0))}It(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(f),!1,null))))}Ho(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Ys(s[a]);Vc(t,t.transactionQueueTree_)}function dg(t,e){let n,s=t.transactionQueueTree_;for(n=re(e);n!==null&&Xs(s)===void 0;)s=Dc(s,n),e=Pe(e),n=re(e);return s}function hg(t,e){const n=[];return pg(t,e,n),n.sort((s,i)=>s.order-i.order),n}function pg(t,e,n){const s=Xs(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);$o(e,i=>{pg(t,i,n)})}function Ho(t,e){const n=Xs(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,tg(e,n.length>0?n:void 0)}$o(e,s=>{Ho(t,s)})}function Uc(t,e){const n=fr(dg(t,e)),s=Dc(t.transactionQueueTree_,e);return D2(s,i=>{Sa(t,i)}),Sa(t,s),sg(s,i=>{Sa(t,i)}),n}function Sa(t,e){const n=Xs(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(M(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(M(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(En(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?tg(e,void 0):n.length=r+1,It(t.eventQueue_,fr(e),i);for(let o=0;o<s.length;o++)Ys(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oS(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function aS(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):at(`Invalid query segment '${n}' in query '${t}'`)}return e}const gd=function(t,e){const n=lS(t),s=n.namespace;n.domain==="firebase.com"&&ln(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&ln("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||vw();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new gm(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new Ce(n.pathString)}},lS=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(u,f)),u<f&&(i=oS(t.substring(u,f)));const d=aS(t.substring(Math.min(t.length,f)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const y=e.indexOf(".");s=e.substring(0,y).toLowerCase(),n=e.substring(y+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _d="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",cS=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=_d.charAt(n%64),n=Math.floor(n/64);M(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=_d.charAt(e[i]);return M(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uS{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+je(this.snapshot.exportVal())}}class fS{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return M(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return ae(this._path)?null:pc(this._path)}get ref(){return new fn(this._repo,this._path)}get _queryIdentifier(){const e=nd(this._queryParams),n=uc(e);return n==="{}"?"default":n}get _queryObject(){return nd(this._queryParams)}isEqual(e){if(e=ds(e),!(e instanceof Hc))return!1;const n=this._repo===e._repo,s=mc(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+tE(this._path)}}class fn extends Hc{constructor(e,n){super(e,n,new yc,!1)}get parent(){const e=xm(this._path);return e===null?null:new fn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Yi{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Ce(e),s=Qi(this.ref,e);return new Yi(this._node.getChild(n),s,Le)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Yi(i,Qi(this.ref,s),Le)))}hasChild(e){const n=new Ce(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Oe(t,e){return t=ds(t),t._checkNotDeleted("ref"),e!==void 0?Qi(t._root,e):t._root}function Qi(t,e){return t=ds(t),re(t._path)===null?j2("child","path",e):og("child","path",e),new fn(t._repo,De(t._path,e))}function hr(t,e){t=ds(t),Fc("push",t._path),rg("push",e,t._path,!0);const n=cg(t._repo),s=cS(n),i=Qi(t,s),r=Qi(t,s);let o;return e!=null?o=ns(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function jc(t){return Fc("remove",t._path),ns(t,null)}function ns(t,e){t=ds(t),Fc("set",t._path),rg("set",e,t._path,!1);const n=new rr;return Z2(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function xs(t,e){H2("update",e,t._path);const n=new rr;return eS(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function ss(t){t=ds(t);const e=new mg(()=>{}),n=new jo(e);return J2(t._repo,t,n).then(s=>new Yi(s,new fn(t._repo,t._path),t._queryParams.getIndex()))}class jo{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new uS("value",this,new Yi(e.snapshotNode,new fn(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new fS(this,e,n):null}matches(e){return e instanceof jo?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function dS(t,e,n,s,i){const r=new mg(n,void 0),o=new jo(r);return nS(t._repo,t,o),()=>ug(t._repo,t,o)}function hS(t,e,n,s){return dS(t,"value",e)}function pS(t,e,n){ug(t._repo,t,null)}h2(fn);v2(fn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mS="FIREBASE_DATABASE_EMULATOR_HOST",Il={};let gS=!1;function _S(t,e,n,s){t.repoInfo_=new gm(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function vS(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||ln("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ye("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=gd(r,i),a=o.repoInfo,l;typeof process<"u"&&$f&&(l=$f[mS]),l?(r=`http://${l}?ns=${a.namespace}`,o=gd(r,i),a=o.repoInfo):o.repoInfo.secure;const c=new Aw(t.name,t.options,e);W2("Invalid Firebase Database URL",o),ae(o.path)||ln("Database URL must point to the root of a Firebase Database (not including a child path).");const u=bS(a,t,c,new kw(t,n));return new CS(u,t)}function yS(t,e){const n=Il[e];(!n||n[t.key]!==t)&&ln(`Database ${e}(${t.repoInfo_}) has already been deleted.`),sS(t),delete n[t.key]}function bS(t,e,n,s){let i=Il[e.name];i||(i={},Il[e.name]=i);let r=i[t.toURLString()];return r&&ln("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Y2(t,gS,n,s),i[t.toURLString()]=r,r}class CS{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Q2(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new fn(this._repo,me())),this._rootInternal}_delete(){return this._rootInternal!==null&&(yS(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ln("Cannot call "+e+" on a deleted database.")}}function wS(t=ZC(),e){const n=qC(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=Fb("database");s&&ES(n,...s)}return n}function ES(t,e,n,s={}){t=ds(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&ln("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&ln('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Rr(Rr.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:$b(s.mockUserToken,t.app.options.projectId);r=new Rr(o)}_S(i,e,n,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SS(t){dw(JC),Qr(new Vi("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return vS(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Rs(Bf,Vf,t),Rs(Bf,Vf,"esm2017")}sn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};sn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};SS();const xS={apiKey:"AIzaSyDReE9mw5-7NXaoCIdc4sVNfF_EgqxW93s",authDomain:"donghuaapi.firebaseapp.com",databaseURL:"https://donghuaapi-default-rtdb.firebaseio.com",projectId:"donghuaapi",storageBucket:"donghuaapi.firebasestorage.app",messagingSenderId:"621954846745",appId:"1:621954846745:web:2ce4962cbe1836a81c9a88",measurementId:"G-RM00X5VKRN"},IS=Zp(xS),Me=wS(IS),Tt=Un("load",()=>{const t=pe(!1),e=$p();return e.beforeEach((n,s,i)=>{t.value=!0,setTimeout(()=>i(),100)}),e.afterEach(()=>{setTimeout(()=>{t.value=!1},100)}),{loading:t}}),Js=Un("Movie",()=>{const t=pe([]),e=Tt(),n=async()=>{try{e.loading=!0;const l=await ss(Oe(Me,"movies"));l.exists()&&(t.value=Object.entries(l.val()).map(([c,u])=>({...u,firebaseId:c})))}catch(l){console.error("Lỗi khi lấy dữ liệu:",l)}finally{e.loading=!1}},s=async(l,c,u,f,d,p)=>{try{const y=hr(Oe(Me,"movies"));await xs(y,{name:l,theLoai:c,des:u,img:f,day:d,favorite:p}),n(),t.value.sort((_,w)=>w.firebaseId.localeCompare(_.firebaseId))}catch(y){console.error("Lỗi khi thêm phim:",y)}},i=async(l,c)=>{try{const u=await ss(Oe(Me,`movies/${l}`));if(!u.exists())return;const f=u.val();if(await xs(Oe(Me,`movies/${l}`),c),c.name&&c.name!==f.name){const d=await ss(Oe(Me,"chaps"));if(d.exists()){const p={};Object.entries(d.val()).forEach(([y,_])=>{_.name===f.name&&(p[`chaps/${y}/name`]=c.name)}),Object.keys(p).length>0&&await xs(Oe(Me),p)}}n()}catch(u){console.error("Lỗi khi cập nhật phim:",u)}},r=async l=>{try{await jc(Oe(Me,`movies/${l}`)),n()}catch(c){console.error("Lỗi khi xóa phim:",c)}},o=ie(()=>t.value.filter(l=>l.favorite));return{movies:t,filterFavorite:o,toggleFavorite:async l=>{const c=t.value.find(u=>u.name===l);if(c){c.favorite=!c.favorite;try{await xs(Oe(Me,`movies/${c.firebaseId}`),{favorite:c.favorite})}catch(u){console.error("Lỗi khi cập nhật favorite:",u)}}},fetchMovies:n,addMovie:s,updateMovie:i,deleteMovie:r}}),gg=Un("Chap",()=>{const t=pe([]),e=Tt(),n=async()=>{try{e.loading=!0;const o=await ss(Oe(Me,"/chaps"));if(o.exists()){const a=o.val();t.value=Object.entries(a).map(([l,c])=>({...c,firebaseId:l}))}}catch(o){console.error("Lỗi khi lấy dữ liệu:",o)}finally{e.loading=!1}};return{chaps:t,fetchChaps:n,addChap:async o=>{try{const a=hr(Oe(Me,"/chaps"));await ns(a,o),n()}catch(a){console.error("Lỗi khi thêm tập:",a)}},updateChap:async(o,a)=>{try{await xs(Oe(Me,`/chaps/${o}`),a),n()}catch(l){console.error("Lỗi khi cập nhật tập:",l)}},deleteChap:async o=>{try{await jc(Oe(Me,`/chaps/${o}`)),n()}catch(a){console.error("Lỗi khi xóa tập:",a)}}}}),Wc=Un("DanhMuc",()=>{const t=pe([]),e=pe(""),n=async()=>{try{const o=await ss(Oe(Me,"danhMucs"));o.exists()?t.value=Object.entries(o.val()).map(([a,l])=>({id:a,name:l.name})):t.value=[]}catch(o){console.error("Lỗi khi lấy dữ liệu:",o)}};return{danhMucs:t,fetchDanhMucs:n,addDanhMuc:async o=>{try{const a=hr(Oe(Me,"danhMucs"));await ns(a,{name:o}),e.value="",n()}catch(a){console.error("Lỗi khi thêm danh mục:",a)}},updateDanhMuc:async(o,a)=>{try{await xs(Oe(Me,`danhMucs/${o}`),{name:a}),n()}catch(l){console.error("Lỗi khi cập nhật danh mục:",l)}},deleteDanhMuc:async o=>{try{await jc(Oe(Me,`danhMucs/${o}`)),n()}catch(a){console.error("Lỗi khi xóa danh mục:",a)}},nameValue:e}}),Kt=Un("product",()=>{const t=Bp(),e=pe(""),n=Wc();n.fetchDanhMucs();const s=ie(()=>n.danhMucs),i=Js();i.fetchMovies();const r=ie(()=>i.movies),o=gg();o.fetchChaps();const a=ie(()=>o.chaps),l=W=>r.value.find(K=>K.name===W),c=W=>s.value.find(K=>K.id==W),u=(W,K)=>a.value.find(L=>L.name===W&&L.tap==K),f=W=>a.value.filter(K=>K.name===W).sort((K,L)=>L.tap-K.tap),d=ie(()=>c(t.params.id)||{}),p=ie(()=>l(t.params.name)||{}),y=ie(()=>f(t.params.name)),_=ie(()=>y.value.length?Math.max(...y.value.map(W=>Number(W.tap)||0)):"Full"),w=ie(()=>u(t.params.name,t.params.id)),C=W=>{const K=a.value.filter(L=>L.name===W);return K.length?Math.max(...K.map(L=>Number(L.tap)||0)):"Full"},v=ie(()=>r.value.filter(W=>d.value.name&&W.theLoai.toUpperCase().includes(d.value.name.toUpperCase()))),T=W=>{e.value=W,yg.push({name:"SearchResults",query:{timKiem:e.value}})},O=ie(()=>r.value.filter(W=>W.name.toUpperCase().includes(e.value.toUpperCase()))),z=new Date().getDay(),le=ie(()=>r.value.filter(W=>W.day==z));return{products:r,txtSearch:e,handleSearch:T,filterProduct:O,detailProduct:l,danhMuc:s,danhMucChoose:c,getDanhMuc:d,filterDanhMuc:v,getDetail:p,chap:a,numberChap:f,getChaps:y,maxChap:_,getMaxChap:C,getChap:u,chapChoose:w,getCartoonDay:le}}),Wo=Un("login",()=>{const t=$p(),e=pe(""),n=pe(""),s=pe(""),i=pe(""),r=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,o=pe([]),a=pe([]),l=async()=>{try{const _=await ss(Oe(Me,"users"));if(_.exists()){const w=_.val();o.value=Object.entries(w).map(([C,v])=>({...v,firebaseId:C}))}}catch(_){console.error("Lỗi khi lấy dữ liệu:",_)}},c=async()=>{try{const _=await ss(Oe(Me,"using"));_.exists()&&(a.value=_.val())}catch(_){console.error("Lỗi khi lấy dữ liệu:",_)}},u=async()=>{var _,w;if(((_=a.value)==null?void 0:_.user)===0&&((w=a.value)==null?void 0:w.password)===0)await c();else try{await ns(Oe(Me,"using"),{user:0,password:0,rule:"user"}),await c()}catch(C){console.error("Lỗi khi lưu tài khoản đăng nhập:",C)}};let f=null;const d=_=>{i.value=_,f&&clearTimeout(f),f=setTimeout(()=>{i.value=""},1e3)},p=async()=>{if(!e.value.trim()||!n.value.trim()){d("Vui lòng nhập tài khoản / mật khẩu");return}if(!r.test(e.value)){d("Email không hợp lệ");return}const _=o.value.find(w=>w.user===e.value.trim()&&w.password===n.value.trim()&&w.rule==="admin");if(_){d("Đăng nhập vào trang quản trị");try{await ns(Oe(Me,"using"),{user:_.user,password:_.password,rule:"admin"}),a.value=_,await t.push("/admin/danh-muc")}catch(w){console.error("Lỗi khi lưu tài khoản đăng nhập:",w),d("Lỗi khi đăng nhập, vui lòng thử lại")}}else{const w=o.value.find(C=>C.user===e.value.trim()&&C.password===n.value.trim());if(w){d("Đăng nhập thành công");try{await ns(Oe(Me,"using"),{user:w.user,password:w.password,rule:"user"}),a.value=w,await t.push("/")}catch(C){console.error("Lỗi khi lưu tài khoản đăng nhập:",C),d("Lỗi khi đăng nhập, vui lòng thử lại")}}else d("Đăng nhập thất bại")}},y=async()=>{if(!e.value.trim()){d("Vui lòng nhập email");return}if(!r.test(e.value)){d("Email không hợp lệ");return}if(!n.value.trim()||!s.value.trim()){d("Vui lòng nhập mật khẩu và xác nhận mật khẩu");return}if(n.value.length<6){d("Mật khẩu phải có ít nhất 6 ký tự");return}if(n.value!==s.value){d("Vui lòng nhập trùng mật khẩu");return}if(o.value.some(w=>w.user===e.value.trim())){d("Tài khoản đã tồn tại");return}try{const w={user:e.value.trim(),password:n.value.trim(),rule:"user"};await hr(Oe(Me,"users"),w),d("Đăng ký thành công"),await l()}catch(w){console.error("Lỗi khi đăng ký:",w),d("Lỗi khi đăng ký, vui lòng thử lại")}};return Vn(()=>{l(),c()}),{user:o,checkLogin:p,emailValue:e,passValue:n,checkPassValue:s,checkRegister:y,alert:i,fetchUsers:l,fetchCurrentUsers:c,currentUser:a,checkCurrent:u}}),TS={class:"header-container"},kS={class:"logo"},AS={class:"search"},PS={class:"container-input"},RS={to:"/login",class:"login"},NS={class:"hamburger"},OS={class:"menu-sign"},MS={__name:"HeaderView",setup(t){const e=Kt(),n=Wo(),s=pe(!1);return(i,r)=>(k(),N("div",TS,[h("div",kS,[$(S(ht),{to:"/"},{default:Ue(()=>r[3]||(r[3]=[h("img",{src:Vp},null,-1)])),_:1})]),h("div",AS,[h("div",PS,[h("input",{type:"text",placeholder:"Nhập tên phim cần tìm...",name:"text",class:"input",onKeyup:r[0]||(r[0]=zr(o=>S(e).handleSearch(o.target.value.trim()),["enter"]))},null,32),r[4]||(r[4]=h("svg",{fill:"#ffffff",width:"20px",height:"20px",viewBox:"0 0 1920 1920",xmlns:"http://www.w3.org/2000/svg"},[h("path",{d:"M790.588 1468.235c-373.722 0-677.647-303.924-677.647-677.647 0-373.722 303.925-677.647 677.647-677.647 373.723 0 677.647 303.925 677.647 677.647 0 373.723-303.924 677.647-677.647 677.647Zm596.781-160.715c120.396-138.692 193.807-319.285 193.807-516.932C1581.176 354.748 1226.428 0 790.588 0S0 354.748 0 790.588s354.748 790.588 790.588 790.588c197.647 0 378.24-73.411 516.932-193.807l516.028 516.142 79.963-79.963-516.142-516.028Z","fill-rule":"evenodd"})],-1))])]),$(S(ht),{to:"/favorite",class:"favorite"},{default:Ue(()=>r[5]||(r[5]=[h("div",null,[h("input",{type:"checkbox",checked:"checked",id:"favorite",name:"favorite-checkbox",value:"favorite-button"}),h("label",{for:"favorite",class:"container"},[h("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-heart"},[h("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})]),h("div",{class:"action"},[h("span",{class:"option-1"},"Phim yêu thích"),h("span",{class:"option-2"},"Phim yêu thích")])])],-1)])),_:1}),h("div",RS,[h("label",NS,[Ne(h("input",{type:"checkbox","onUpdate:modelValue":r[1]||(r[1]=o=>s.value=o)},null,512),[[X0,s.value]]),r[6]||(r[6]=h("svg",{viewBox:"0 0 32 32"},[h("path",{class:"line line-top-bottom",d:"M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"}),h("path",{class:"line",d:"M7 16 27 16"})],-1))]),$(x0,{name:"fade-slide"},{default:Ue(()=>[Ne(h("div",OS,[S(n).currentUser&&S(n).currentUser.user==0&&S(n).currentUser.password==0?(k(),qe(S(ht),{key:0,to:"/login"},{default:Ue(()=>r[7]||(r[7]=[Ve(" Đăng nhập ")])),_:1})):(k(),N("a",{key:1,onClick:r[2]||(r[2]=(...o)=>S(n).checkCurrent&&S(n).checkCurrent(...o))}," Đăng xuất ")),$(S(ht),{to:"/chatGroup"},{default:Ue(()=>r[8]||(r[8]=[Ve("Profile")])),_:1}),$(S(ht),{to:"/chatGroup",class:"chat"},{default:Ue(()=>r[9]||(r[9]=[Ve(" Chat group ")])),_:1})],512),[[A0,s.value]])]),_:1})])]))}},jn=ye(MS,[["__scopeId","data-v-cd5fdf2b"]]),DS={},LS={class:"loader-container"};function FS(t,e){return k(),N("div",LS,e[0]||(e[0]=[h("div",{class:"loader"},null,-1)]))}const ms=ye(DS,[["render",FS],["__scopeId","data-v-35a23ea6"]]),$S={class:"nav-container"},BS={class:"menu-menu"},VS={__name:"Navigation",setup(t){const e=Kt();return(n,s)=>{const i=ls("RouterLink");return k(),N("div",$S,[h("ul",BS,[(k(!0),N(ce,null,ft(S(e).danhMuc,r=>(k(),N("li",{class:"menu",key:r.id},[$(i,{to:"/danhMuc/"+r.name+"/"+r.id},{default:Ue(()=>[Ve(ne(r.name),1)]),_:2},1032,["to"])]))),128))])])}}},Wn=ye(VS,[["__scopeId","data-v-3b5426ab"]]),US={class:"about-container"},HS={__name:"about",setup(t){return(e,n)=>(k(),N("div",US,n[0]||(n[0]=[h("span",{class:"fb-title"}," Fanpage Facebook ",-1),h("div",{class:"fb"},null,-1)])))}},jS=ye(HS,[["__scopeId","data-v-c63b2f22"]]),WS={class:"product-main"},zS=["src"],GS={class:"tap"},KS={class:"name-cartoon"},qS={__name:"cardProduct",props:{product:Object},setup(t){const e=Kt();return(n,s)=>(k(),N("div",WS,[(k(!0),N(ce,null,ft(t.product,i=>(k(),N("div",{class:"product-product",key:i.id},[$(S(ht),{to:"/cartoon/"+i.name},{default:Ue(()=>[h("div",null,[h("img",{src:i.img},null,8,zS),h("span",GS,ne(S(e).getMaxChap(i.name)==0?"Full":isFinite(S(e).getMaxChap(i.name))?"Tập "+S(e).getMaxChap(i.name):"Sắp ra mắt"),1),h("span",KS,ne(i.name),1)])]),_:2},1032,["to"])]))),128))]))}},pr=ye(qS,[["__scopeId","data-v-42e33f1b"]]),zc=Un("day",()=>{const t=new Date,e=["Chủ Nhật","Thứ Hai","Thứ Ba","Thứ Tư","Thứ Năm","Thứ Sáu","Thứ Bảy","END"],n=["0","1","2","3","4","5","6","7"],s=ie(()=>e[t.getDay()]);return{days:e,dayOfWeek:s,day:n}}),YS={class:"product-container"},QS={class:"fb-title"},XS={key:1,style:{color:"white",padding:"20px"}},JS={__name:"day",setup(t){const e=Kt(),n=zc();return(s,i)=>(k(),N("div",YS,[h("span",QS," Lịch Chiếu Hôm Nay - "+ne(S(n).dayOfWeek),1),S(e).getCartoonDay.length>0?(k(),qe(pr,{key:0,product:S(e).getCartoonDay},null,8,["product"])):(k(),N("span",XS,"Chưa có lịch chiếu phim vào hôm nay !"))]))}},ZS=ye(JS,[["__scopeId","data-v-b2626ce4"]]),ex={class:"product-container"},tx={class:"product-main"},nx={class:"pagination"},sx=["disabled"],ix=["disabled"],xa=9,rx={__name:"product",setup(t){const e=Kt(),n=pe(1),s=ie(()=>Math.ceil(e.products.length/xa)),i=ie(()=>{const a=(n.value-1)*xa;return e.products.slice(a,a+xa)}),r=()=>{n.value<s.value&&n.value++},o=()=>{n.value>1&&n.value--};return(a,l)=>(k(),N("div",ex,[l[0]||(l[0]=h("span",{class:"fb-title"},"Mới Nhất",-1)),h("div",tx,[$(pr,{product:i.value},null,8,["product"])]),h("div",nx,[h("button",{onClick:o,disabled:n.value===1},"←",8,sx),h("span",null,"Trang "+ne(n.value)+" / "+ne(s.value),1),h("button",{onClick:r,disabled:n.value===s.value},"→",8,ix)])]))}},ox=ye(rx,[["__scopeId","data-v-4c48cb64"]]),ax={class:"see-container"},lx={class:"favo"},cx=["src"],ux={__name:"see",setup(t){const e=Js();return(n,s)=>{const i=ls("RouterLink");return k(),N("div",ax,[s[0]||(s[0]=h("span",{class:"fb-title"}," Yêu thích nhất ",-1)),h("div",lx,[$(z0,{name:"slide",tag:"div"},{default:Ue(()=>[(k(!0),N(ce,null,ft(S(e).filterFavorite.slice(0,10),r=>(k(),N("div",{class:"see-view",key:r.id},[$(i,{to:"/cartoon/"+r.name},{default:Ue(()=>[h("div",null,[h("img",{src:r.img},null,8,cx),h("span",null,ne(r.name),1)])]),_:2},1032,["to"])]))),128))]),_:1})])])}}},Zs=ye(ux,[["__scopeId","data-v-f0e77256"]]),fx={class:"mainmain"},dx={class:"main"},hx={key:1,class:"main-container"},px={class:"main-right-container"},mx={__name:"HomeView",setup(t){const e=Tt();return(n,s)=>(k(),N(ce,null,[$(jn),$(Wn),h("div",fx,[h("div",dx,[h("main",null,[S(e).loading?(k(),qe(ms,{key:0})):(k(),N("div",hx,[$(jS),$(ox),$(ZS)]))]),h("div",px,[$(Zs)])])]),h("footer",null,[$(Hn)])],64))}},gx=ye(mx,[["__scopeId","data-v-8ab0217e"]]),_x={class:"chap-container"},vx={key:0,class:"chap-content"},yx={key:1,class:"chap-content"},bx={class:"des"},Cx={__name:"Chap",setup(t){const e=Kt();return(n,s)=>(k(),N("div",_x,[s[1]||(s[1]=h("span",{class:"tit"},"FULL",-1)),isNaN(S(e).maxChap)||S(e).maxChap==0?(k(),N("div",vx,[$(S(ht),{to:"/chap/"+S(e).getDetail.name+"/"+S(e).maxChap,class:"chap"},{default:Ue(()=>s[0]||(s[0]=[Ve("Tập full")])),_:1},8,["to"])])):(k(),N("div",yx,[(k(!0),N(ce,null,ft(S(e).getChaps,i=>(k(),qe(S(ht),{to:"/chap/"+i.name+"/"+i.tap,class:"chap"},{default:Ue(()=>[Ve(ne("Tập "+i.tap),1)]),_:2},1032,["to"]))),256))])),s[2]||(s[2]=h("span",{class:"des-title"},"Mô tả . . .",-1)),s[3]||(s[3]=h("br",null,null,-1)),h("span",bx,ne(S(e).getDetail.des),1)]))}},_g=ye(Cx,[["__scopeId","data-v-70e124f6"]]),wx={class:"product-container"},Ex={class:"product-main"},Sx={class:"product-product"},xx=["src"],Ix={class:"favorite"},Tx={class:"container"},kx=["checked"],Ax={class:"product-detail-right"},Px={class:"name-cartoon"},Rx={class:"tap"},Nx={class:"danhMuc"},Ox={class:"danhMuc"},Mx={__name:"ProductView",setup(t){const e=zc(),n=Kt(),s=Js(),i=ie(()=>n.getDetail.favorite),r=async()=>{await s.toggleFavorite(n.getDetail.name)};return(o,a)=>{const l=ls("RouterLink"),c=ls("font-awesome-icon");return k(),N("div",wx,[h("div",Ex,[h("div",Sx,[h("div",null,[h("img",{src:S(n).getDetail.img},null,8,xx),h("span",Ix,[h("label",Tx,[h("input",{checked:i.value,type:"checkbox",onClick:r},null,8,kx),a[0]||(a[0]=h("div",{class:"checkmark"},[h("svg",{viewBox:"0 0 256 256"},[h("rect",{fill:"none",height:"256",width:"256"}),h("path",{d:"M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z","stroke-width":"20px",stroke:"#fff",fill:"none"})])],-1))])]),$(l,{to:"/chap/"+S(n).getDetail.name+"/"+S(n).maxChap,class:"xemPhim"},{default:Ue(()=>a[1]||(a[1]=[Ve("Xem phim ")])),_:1},8,["to"])])]),h("div",Ax,[h("span",Px,ne(S(n).getDetail.name),1),a[2]||(a[2]=h("br",null,null,-1)),h("span",Rx,"Tập "+ne(S(n).maxChap==0?"Full":isFinite(S(n).maxChap)?S(n).maxChap:"chưa ra mắt"),1),a[3]||(a[3]=h("br",null,null,-1)),a[4]||(a[4]=Ve()),h("span",Nx,[$(c,{icon:["fas","clock"],class:"text-blue-500 text-2xl"}),Ve(" "+ne(S(e).days[S(n).getDetail.day]=="END"?"Đã kết thúc":S(e).days[S(n).getDetail.day]+" Hàng Tuần"),1)]),a[5]||(a[5]=h("br",null,null,-1)),h("span",Ox,"Thể loại : "+ne(S(n).getDetail.theLoai),1)])]),$(_g)])}}},Dx=ye(Mx,[["__scopeId","data-v-6d2bb99f"]]),Lx={class:"mainmain"},Fx={class:"main"},$x={class:"main-container"},Bx={class:"main-right-container"},Vx={__name:"ChooseView",setup(t){const e=Tt();return(n,s)=>(k(),N(ce,null,[$(jn),$(Wn),h("div",Lx,[h("div",Fx,[h("main",null,[h("div",$x,[S(e).loading?(k(),qe(ms,{key:0})):(k(),qe(Dx,{key:1}))])]),h("div",Bx,[$(Zs)])])]),h("footer",null,[$(Hn)])],64))}},Ux=ye(Vx,[["__scopeId","data-v-cfedd511"]]),Hx={class:"product-container"},jx={class:"fb-title"},Wx={__name:"SearchProduct",setup(t){const e=Kt();return(n,s)=>(k(),N("div",Hx,[h("span",jx," Bạn đã tìm kiếm : "+ne(S(e).txtSearch),1),$(pr,{product:S(e).filterProduct},null,8,["product"])]))}},zx=ye(Wx,[["__scopeId","data-v-4581f7db"]]),Gx={class:"mainmain"},Kx={class:"main"},qx={class:"main-container"},Yx={class:"main-right-container"},Qx={__name:"SearchView",setup(t){const e=Tt();return(n,s)=>(k(),N(ce,null,[$(jn),$(Wn),h("div",Gx,[h("div",Kx,[h("main",null,[h("div",qx,[S(e).loading?(k(),qe(ms,{key:0})):(k(),qe(zx,{key:1}))])]),h("div",Yx,[$(Zs)])])]),h("footer",null,[$(Hn)])],64))}},Xx=ye(Qx,[["__scopeId","data-v-0c889cc7"]]),Jx={class:"product-container"},Zx={class:"fb-title"},eI={__name:"danhMucView",setup(t){const e=Tt(),n=Kt();return(s,i)=>(k(),N("div",Jx,[h("span",Zx,ne(S(n).getDanhMuc.name),1),S(e).loading?(k(),qe(ms,{key:0})):(k(),qe(pr,{key:1,product:S(n).filterDanhMuc},null,8,["product"]))]))}},tI=ye(eI,[["__scopeId","data-v-a24d2401"]]),nI={class:"mainmain"},sI={class:"main"},iI={class:"main-container"},rI={class:"main-right-container"},oI={__name:"danhMucView",setup(t){return(e,n)=>(k(),N(ce,null,[$(jn),$(Wn),h("div",nI,[h("div",sI,[h("main",null,[h("div",iI,[$(tI)])]),h("div",rI,[$(Zs)])])]),h("footer",null,[$(Hn)])],64))}},aI=ye(oI,[["__scopeId","data-v-ea403003"]]),lI={class:"video-container"},cI={key:0},uI={key:1},fI={style:{position:"relative","padding-bottom":"56.25%",height:"0",overflow:"hidden"}},dI=["src"],hI={__name:"videoView",setup(t){const e=Bp(),n=Kt();return(s,i)=>(k(),N("div",lI,[S(n).chapChoose==null?(k(),N("span",cI,"Tập "+ne("phim")+" sẽ được cập nhật sớm nhất ! ",1)):(k(),N("div",uI,[h("div",fI,[h("iframe",{src:S(n).chapChoose.url,style:{width:"100%",height:"100%",position:"absolute",left:"0px",top:"0px",overflow:"hidden",border:"none"},allowfullscreen:"",title:"Dailymotion Video Player",allow:"web-share"},null,8,dI)]),h("span",null,ne(S(e).params.name)+" - "+ne(S(e).params.id==0?"Full":"Tập "+S(e).params.id),1)]))]))}},pI=ye(hI,[["__scopeId","data-v-0e7eb063"]]),mI={class:"mainmain"},gI={class:"main"},_I={class:"main-container"},vI={class:"main-right-container"},yI={__name:"ChapView",setup(t){return(e,n)=>(k(),N(ce,null,[$(jn),$(Wn),h("div",mI,[h("div",gI,[h("main",null,[h("div",_I,[$(pI),$(_g)])]),h("div",vI,[$(Zs)])])]),h("footer",null,[$(Hn)])],64))}},bI=ye(yI,[["__scopeId","data-v-7107fe76"]]),CI=Un("chat",()=>{const t=pe([]),e=pe(""),n=pe(null),s=Oe(Me,"messages"),i=()=>{hS(s,a=>{const l=a.val();t.value=l?Object.values(l):[],o()})},r=async()=>{if(!e.value.trim())return;const a={sender:"You",text:e.value,isMine:!0,timestamp:new Date().toISOString()};await hr(s,a),e.value="",o()},o=()=>{Ks(()=>{n.value&&(n.value.scrollTop=n.value.scrollHeight)})};return Vn(i),nc(()=>{pS(s)}),{messages:t,messageInput:e,chatContent:n,sendMessage:r}}),wI={class:"chat-container"},EI={class:"chat-group-container"},SI={class:"content"},xI={class:"avt"},II={key:0,src:"https://i.pinimg.com/736x/f5/70/c3/f570c3f50c80a58c45330c17c5289d0e.jpg"},TI={class:"name-mess"},kI={class:"avt"},AI={key:0,src:"https://i.pinimg.com/736x/f5/70/c3/f570c3f50c80a58c45330c17c5289d0e.jpg"},PI={class:"messageBox"},RI={class:"chat-about-container"},NI={key:0},OI={__name:"chatGroup",setup(t){const e=CI(),n=Wo(),s=pe(null);return tc(()=>{Ks(()=>{s.value&&(s.value.scrollTop=s.value.scrollHeight)})}),(r,o)=>{var a,l,c;return k(),N("div",wI,[h("div",EI,[o[5]||(o[5]=h("span",null,"Group chat",-1)),h("div",{class:"chat-content",ref_key:"chatContent",ref:s},[h("div",SI,[(k(!0),N(ce,null,ft(S(e).messages,(u,f)=>(k(),N("div",{key:f,class:er(["message",u.isMine?"mine":"other"])},[h("div",xI,[u.isMine?ra("",!0):(k(),N("img",II))]),h("div",TI,[h("strong",null,ne(u.sender),1),h("p",null,ne(u.text),1)]),h("div",kI,[u.isMine?(k(),N("img",AI)):ra("",!0)])],2))),128))])],512),h("div",PI,[o[4]||(o[4]=rp('<div class="fileUploadWrapper" data-v-27eff452><label for="file" data-v-27eff452><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 337 337" data-v-27eff452><circle stroke-width="20" stroke="#6c6c6c" fill="none" r="158.5" cy="168.5" cx="168.5" data-v-27eff452></circle><path stroke-linecap="round" stroke-width="25" stroke="#6c6c6c" d="M167.759 79V259" data-v-27eff452></path><path stroke-linecap="round" stroke-width="25" stroke="#6c6c6c" d="M79 167.138H259" data-v-27eff452></path></svg><span class="tooltip" data-v-27eff452>Add an image</span></label><input type="file" id="file" name="file" data-v-27eff452></div>',1)),Ne(h("input",{"onUpdate:modelValue":o[0]||(o[0]=u=>S(e).messageInput=u),placeholder:"Message...",type:"text",onKeyup:o[1]||(o[1]=zr((...u)=>S(e).sendMessage&&S(e).sendMessage(...u),["enter"])),id:"messageInput"},null,544),[[Qe,S(e).messageInput]]),h("button",{onClick:o[2]||(o[2]=(...u)=>S(e).sendMessage&&S(e).sendMessage(...u)),id:"sendButton"},o[3]||(o[3]=[h("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 664 663"},[h("path",{fill:"none",d:"M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"}),h("path",{"stroke-linejoin":"round","stroke-linecap":"round","stroke-width":"33.67",stroke:"#6c6c6c",d:"M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"})],-1)]))])]),h("div",RI,[o[6]||(o[6]=h("span",null,"About",-1)),o[7]||(o[7]=h("br",null,null,-1)),(a=S(n).currentUser)!=null&&a.length&&((l=S(n).currentUser[0])==null?void 0:l.user)!=0?(k(),N("span",NI," Email: "+ne((c=S(n).currentUser[0])==null?void 0:c.user),1)):ra("",!0)])])}}},MI=ye(OI,[["__scopeId","data-v-27eff452"]]),DI={class:"mainmain"},LI={class:"main"},FI={class:"main-container"},$I={__name:"ChatView",setup(t){const e=Tt();return(n,s)=>(k(),N(ce,null,[$(jn),$(Wn),h("div",DI,[h("div",LI,[h("main",null,[h("div",FI,[S(e).loading?(k(),qe(ms,{key:0})):(k(),qe(MI,{key:1}))])]),s[0]||(s[0]=h("div",{class:"main-right-container"},null,-1))])]),h("footer",null,[$(Hn)])],64))}},BI=ye($I,[["__scopeId","data-v-2feb23b9"]]),VI={class:"alert"},UI={key:0,class:"form"},HI={class:"inputForm"},jI={class:"inputForm"},WI={class:"p"},zI={class:"flex-row"},GI={class:"btn google"},KI={version:"1.1",width:"20",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512",style:{"enable-background":"new 0 0 512 512"},"xml:space":"preserve"},qI={class:"btn apple"},YI={version:"1.1",height:"20",width:"20",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 22.773 22.773",style:{"enable-background":"new 0 0 22.773 22.773"},"xml:space":"preserve"},QI={key:1,class:"form"},XI={class:"inputForm"},JI={class:"inputForm"},ZI={class:"inputForm"},eT={class:"p"},tT={class:"flex-row"},nT={class:"btn google"},sT={version:"1.1",width:"20",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512",style:{"enable-background":"new 0 0 512 512"},"xml:space":"preserve"},iT={class:"btn apple"},rT={version:"1.1",height:"20",width:"20",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 22.773 22.773",style:{"enable-background":"new 0 0 22.773 22.773"},"xml:space":"preserve"},oT={__name:"loginCo",setup(t){const e=Wo(),n=pe(!0);return(s,i)=>(k(),N(ce,null,[h("span",VI,ne(S(e).alert),1),n.value?(k(),N("form",UI,[i[17]||(i[17]=h("div",{class:"flex-column"},[h("label",null,"Email ")],-1)),h("div",HI,[i[9]||(i[9]=h("svg",{height:"20",viewBox:"0 0 32 32",width:"20",xmlns:"http://www.w3.org/2000/svg"},[h("g",{id:"Layer_3","data-name":"Layer 3"},[h("path",{d:"m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"})])],-1)),Ne(h("input",{type:"text","onUpdate:modelValue":i[0]||(i[0]=r=>S(e).emailValue=r),class:"input",placeholder:"Nhập email của bạn "},null,512),[[Qe,S(e).emailValue]])]),i[18]||(i[18]=h("div",{class:"flex-column"},[h("label",null,"Mật khẩu ")],-1)),h("div",jI,[i[10]||(i[10]=h("svg",{height:"20",viewBox:"-64 0 512 512",width:"20",xmlns:"http://www.w3.org/2000/svg"},[h("path",{d:"m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"}),h("path",{d:"m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"})],-1)),Ne(h("input",{type:"password","onUpdate:modelValue":i[1]||(i[1]=r=>S(e).passValue=r),class:"input",placeholder:"Nhập mật khẩu của bạn"},null,512),[[Qe,S(e).passValue]]),i[11]||(i[11]=h("svg",{viewBox:"0 0 576 512",height:"1em",xmlns:"http://www.w3.org/2000/svg"},[h("path",{d:"M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"})],-1))]),i[19]||(i[19]=h("div",{class:"flex-row"},[h("div",null,[h("input",{type:"checkbox"}),h("label",null,"Remember me ")]),h("span",{class:"span"},"Quên mật khẩu?")],-1)),h("button",{class:"button-submit",onClick:i[2]||(i[2]=r=>S(e).checkLogin())},"Đăng nhập"),h("p",WI,[i[12]||(i[12]=Ve("Bạn chưa có tài khoản? ")),h("span",{class:"span",onClick:i[3]||(i[3]=r=>n.value=!n.value)},"Đăng kí")]),i[20]||(i[20]=h("p",{class:"p line"},"hoặc",-1)),h("div",zI,[h("button",GI,[(k(),N("svg",KI,i[13]||(i[13]=[h("path",{style:{fill:"#FBBB00"},d:`M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256\r
	c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456\r
	C103.821,274.792,107.225,292.797,113.47,309.408z`},null,-1),h("path",{style:{fill:"#518EF8"},d:`M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451\r
	c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535\r
	c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z`},null,-1),h("path",{style:{fill:"#28B446"},d:`M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512\r
	c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771\r
	c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z`},null,-1),h("path",{style:{fill:"#F14336"},d:`M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012\r
	c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0\r
	C318.115,0,375.068,22.126,419.404,58.936z`},null,-1)]))),i[14]||(i[14]=Ve(" Google "))]),h("button",qI,[(k(),N("svg",YI,i[15]||(i[15]=[h("g",null,[h("g",null,[h("path",{d:"M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573 c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z"}),h("path",{d:"M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334 c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0 c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019 c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464 c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648 c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z"})])],-1)]))),i[16]||(i[16]=Ve(" Apple "))])])])):(k(),N("form",QI,[i[31]||(i[31]=h("div",{class:"flex-column"},[h("label",null,"Email ")],-1)),h("div",XI,[i[21]||(i[21]=h("svg",{height:"20",viewBox:"0 0 32 32",width:"20",xmlns:"http://www.w3.org/2000/svg"},[h("g",{id:"Layer_3","data-name":"Layer 3"},[h("path",{d:"m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"})])],-1)),Ne(h("input",{type:"text","onUpdate:modelValue":i[4]||(i[4]=r=>S(e).emailValue=r),class:"input",placeholder:"Nhập email của bạn "},null,512),[[Qe,S(e).emailValue]])]),i[32]||(i[32]=h("div",{class:"flex-column"},[h("label",null,"Mật khẩu ")],-1)),h("div",JI,[i[22]||(i[22]=h("svg",{height:"20",viewBox:"-64 0 512 512",width:"20",xmlns:"http://www.w3.org/2000/svg"},[h("path",{d:"m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"}),h("path",{d:"m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"})],-1)),Ne(h("input",{type:"password","onUpdate:modelValue":i[5]||(i[5]=r=>S(e).passValue=r),class:"input",placeholder:"Nhập mật khẩu của bạn"},null,512),[[Qe,S(e).passValue]]),i[23]||(i[23]=h("svg",{viewBox:"0 0 576 512",height:"1em",xmlns:"http://www.w3.org/2000/svg"},[h("path",{d:"M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"})],-1))]),i[33]||(i[33]=h("div",{class:"flex-column"},[h("label",null,"Nhập lại mật khẩu ")],-1)),h("div",ZI,[i[24]||(i[24]=h("svg",{height:"20",viewBox:"-64 0 512 512",width:"20",xmlns:"http://www.w3.org/2000/svg"},[h("path",{d:"m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"}),h("path",{d:"m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"})],-1)),Ne(h("input",{type:"password","onUpdate:modelValue":i[6]||(i[6]=r=>S(e).checkPassValue=r),class:"input",placeholder:"Nhập lại mật khẩu của bạn"},null,512),[[Qe,S(e).checkPassValue]]),i[25]||(i[25]=h("svg",{viewBox:"0 0 576 512",height:"1em",xmlns:"http://www.w3.org/2000/svg"},[h("path",{d:"M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"})],-1))]),i[34]||(i[34]=h("div",{class:"flex-row"},[h("div",null,[h("input",{type:"checkbox"}),h("label",null,"Remember me ")]),h("span",{class:"span"},"Quên mật khẩu?")],-1)),h("button",{class:"button-submit",onClick:i[7]||(i[7]=r=>S(e).checkRegister())},"Đăng kí"),h("p",eT,[i[26]||(i[26]=Ve("Bạn đã có tài khoản? ")),h("span",{class:"span",onClick:i[8]||(i[8]=r=>n.value=!n.value)},"Đăng Nhập")]),i[35]||(i[35]=h("p",{class:"p line"},"hoặc",-1)),h("div",tT,[h("button",nT,[(k(),N("svg",sT,i[27]||(i[27]=[h("path",{style:{fill:"#FBBB00"},d:`M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256\r
	c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456\r
	C103.821,274.792,107.225,292.797,113.47,309.408z`},null,-1),h("path",{style:{fill:"#518EF8"},d:`M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451\r
	c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535\r
	c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z`},null,-1),h("path",{style:{fill:"#28B446"},d:`M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512\r
	c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771\r
	c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z`},null,-1),h("path",{style:{fill:"#F14336"},d:`M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012\r
	c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0\r
	C318.115,0,375.068,22.126,419.404,58.936z`},null,-1)]))),i[28]||(i[28]=Ve(" Google "))]),h("button",iT,[(k(),N("svg",rT,i[29]||(i[29]=[h("g",null,[h("g",null,[h("path",{d:"M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573 c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z"}),h("path",{d:"M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334 c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0 c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019 c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464 c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648 c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z"})])],-1)]))),i[30]||(i[30]=Ve(" Apple "))])])]))],64))}},aT=ye(oT,[["__scopeId","data-v-ce0f5623"]]),lT={class:"mainmain"},cT={class:"main"},uT={class:"main-container"},fT={__name:"LoginView",setup(t){return(e,n)=>(k(),N(ce,null,[$(jn),$(Wn),h("div",lT,[h("div",cT,[h("main",null,[h("div",uT,[$(aT)])])])]),h("footer",null,[$(Hn)])],64))}},dT=ye(fT,[["__scopeId","data-v-07d5b19b"]]),hT={class:"mainmain"},pT={class:"main"},mT={class:"main-container"},gT={__name:"FavoriteView",setup(t){const e=Tt(),n=Js();return(s,i)=>(k(),N(ce,null,[$(jn),$(Wn),h("div",hT,[h("div",pT,[h("main",null,[h("div",mT,[i[0]||(i[0]=h("span",{class:"fb-title"}," Mục yêu thích ❤️ ",-1)),S(e).loading?(k(),qe(ms,{key:0})):(k(),qe(pr,{key:1,product:S(n).filterFavorite},null,8,["product"]))])]),h("div",{class:er(["main-right-container",{active:!S(e).loading}])},[$(Zs,{class:"see"})],2)])]),h("footer",null,[$(Hn)])],64))}},_T=ye(gT,[["__scopeId","data-v-0c2b3a39"]]),vT={},yT={class:"body"};function bT(t,e){return k(),N("div",yT,e[0]||(e[0]=[h("div",{class:"container"},[h("h2",null,"404"),h("h1",null,"Page not found."),h("p",null,"Rất tiếc, có vẻ như chúng tôi không thể tìm thấy trang bạn đang tìm kiếm. Thông thường điều này xảy ra vì của một trang tồn tại trước đó đã bị xóa hoặc bạn đã nhập sai địa chỉ."),h("p",null,"hoặc"),h("p",null,"Bạn chưa có quyền để vào các trang quản trị khác"),h("span",{class:"go-back"},[h("a",{href:"/"},"Go back")])],-1)]))}const vg=ye(vT,[["render",bT],["__scopeId","data-v-d432d9dd"]]),CT={key:0,class:"404"},wT={key:1},ET={class:"header-container"},ST={class:"logo"},xT={class:"admin-container"},IT={class:"admin-container-left"},TT={class:"list"},kT={class:"admin-container-right"},AT={__name:"AdminView",setup(t){const e=Wo(),n=Tt();return n.loading=!0,Vn(async()=>{await e.fetchCurrentUsers(),n.loading=!1}),(s,i)=>{const r=ls("RouterView");return S(e).currentUser.rule=="user"?(k(),N("div",CT,[$(vg)])):(k(),N("div",wT,[h("div",ET,[h("div",ST,[$(S(ht),{to:"/"},{default:Ue(()=>i[0]||(i[0]=[h("img",{src:Vp},null,-1)])),_:1})])]),h("div",xT,[h("div",IT,[i[5]||(i[5]=rp('<button class="btn" data-v-503d815c><span class="icon" data-v-503d815c><svg viewBox="0 0 175 80" width="40" height="40" data-v-503d815c><rect width="80" height="15" fill="#f0f0f0" rx="10" data-v-503d815c></rect><rect y="30" width="80" height="15" fill="#f0f0f0" rx="10" data-v-503d815c></rect><rect y="60" width="80" height="15" fill="#f0f0f0" rx="10" data-v-503d815c></rect></svg></span><span class="text" data-v-503d815c>MENU</span></button>',1)),h("div",TT,[$(S(ht),{to:"/admin/danh-muc"},{default:Ue(()=>i[1]||(i[1]=[Ve(" Quản lý danh mục ")])),_:1}),$(S(ht),{to:"/admin/product"},{default:Ue(()=>i[2]||(i[2]=[Ve(" Quản lý phim ")])),_:1}),$(S(ht),{to:"/admin/chap"},{default:Ue(()=>i[3]||(i[3]=[Ve(" Quản lý tập phim ")])),_:1}),$(S(ht),{to:"/admin/user"},{default:Ue(()=>i[4]||(i[4]=[Ve(" Quản lý tài khoản ")])),_:1})])]),h("div",kT,[$(r)])])]))}}},PT=ye(AT,[["__scopeId","data-v-503d815c"]]),RT={key:1,class:"admin-container"},NT={class:"table"},OT=["onUpdate:modelValue","onKeyup"],MT={key:1},DT=["onClick"],LT=["onClick"],FT={class:"addContainer"},$T={__name:"danhMucAdmin",setup(t){const e=Wc(),n=Tt();Vn(()=>{e.fetchDanhMucs()});const s=o=>{o.isEditing?i(o):o.tempName=o.name,o.isEditing=!o.isEditing},i=async o=>{o.tempName.trim()!==""&&o.tempName!==o.name&&await e.updateDanhMuc(o.id,o.tempName)},r=()=>{if(e.nameValue.trim()===""){alert("Tên danh mục không được để trống!");return}e.addDanhMuc(e.nameValue)};return(o,a)=>{const l=ls("Loading");return S(n).loading?(k(),qe(l,{key:0})):(k(),N("div",RT,[a[3]||(a[3]=h("span",{class:"fb-title"},"Quản lý danh mục",-1)),h("div",NT,[h("ul",null,[a[1]||(a[1]=h("span",null,"Tên danh mục",-1)),(k(!0),N(ce,null,ft(S(e).danhMucs,c=>(k(),N("li",{key:c.id},[c.isEditing?Ne((k(),N("input",{key:0,"onUpdate:modelValue":u=>c.tempName=u,onKeyup:zr(u=>i(c),["enter"])},null,40,OT)),[[Qe,c.tempName]]):(k(),N("p",MT,ne(c.name),1))]))),128))]),h("ul",null,[a[2]||(a[2]=h("span",null,"Chức năng",-1)),(k(!0),N(ce,null,ft(S(e).danhMucs,c=>(k(),N("li",{key:c.id},[h("button",{onClick:u=>s(c)},ne(c.isEditing?"Lưu":"Sửa"),9,DT),h("button",{onClick:u=>S(e).deleteDanhMuc(c.id)},"Xoá",8,LT)]))),128))])]),h("div",FT,[Ne(h("input",{type:"text",placeholder:"Tên danh mục","onUpdate:modelValue":a[0]||(a[0]=c=>S(e).nameValue=c),onKeyup:zr(r,["enter"])},null,544),[[Qe,S(e).nameValue]]),h("button",{class:"addTable",onClick:r},"Thêm")])]))}}},BT=ye($T,[["__scopeId","data-v-1990cbba"]]),VT={key:1,class:"admin-container"},UT={class:"addContainer"},HT=["value"],jT=["value"],WT={class:"movie-table"},zT=["onUpdate:modelValue"],GT={key:1},KT=["onUpdate:modelValue"],qT=["value"],YT={key:1},QT=["onUpdate:modelValue"],XT={key:1},JT=["src"],ZT=["onUpdate:modelValue"],e6=["value"],t6={key:1},n6=["onClick"],s6=["onClick"],i6={class:"pagination"},r6=["disabled"],o6=["disabled"],Ia=3,a6={__name:"productAdmin",setup(t){const e=Js(),n=Wc(),s=zc(),i=Tt(),r=pe(1),o=pe(""),a=pe(""),l=pe(""),c=pe(""),u=pe("1"),f=pe(!1),d=async()=>{if(o.value.trim()===""||a.value.trim()===""||l.value.trim()===""||c.value.trim()===""||u.value.trim()===""){alert("Vui lòng điền đầy đủ thông tin phim!");return}await e.addMovie(o.value,a.value,l.value,c.value,u.value,f.value),o.value="",a.value="",l.value="",c.value="",u.value=""},p=w=>{w.isEditing?e.updateMovie(w.firebaseId,{name:w.tempName,theLoai:w.tempTheLoai,des:w.tempDes,img:w.img,day:w.tempDay}):(w.tempName=w.name,w.tempTheLoai=w.theLoai,w.tempDes=w.des,w.tempDay=w.day),w.isEditing=!w.isEditing};Vn(()=>{e.fetchMovies(),n.fetchDanhMucs()});const y=ie(()=>{const w=[...e.movies].sort((T,O)=>O.firebaseId.localeCompare(T.firebaseId)),C=(r.value-1)*Ia,v=C+Ia;return w.slice(C,v)}),_=ie(()=>Math.ceil(e.movies.length/Ia));return(w,C)=>S(i).loading?(k(),qe(ms,{key:0})):(k(),N("div",VT,[C[9]||(C[9]=h("span",{class:"fb-title"},"Quản lý phim",-1)),h("div",UT,[Ne(h("input",{type:"text",placeholder:"Tên phim","onUpdate:modelValue":C[0]||(C[0]=v=>o.value=v)},null,512),[[Qe,o.value]]),Ne(h("select",{"onUpdate:modelValue":C[1]||(C[1]=v=>a.value=v)},[(k(!0),N(ce,null,ft(S(n).danhMucs,v=>(k(),N("option",{key:v.firebaseId,value:v.name},ne(v.name),9,HT))),128))],512),[[fi,a.value]]),Ne(h("input",{type:"text",placeholder:"Mô tả","onUpdate:modelValue":C[2]||(C[2]=v=>l.value=v)},null,512),[[Qe,l.value]]),Ne(h("input",{type:"text",placeholder:"Hình ảnh (URL)","onUpdate:modelValue":C[3]||(C[3]=v=>c.value=v)},null,512),[[Qe,c.value]]),Ne(h("select",{"onUpdate:modelValue":C[4]||(C[4]=v=>u.value=v)},[(k(!0),N(ce,null,ft(S(s).day,v=>(k(),N("option",{key:v,value:v},ne(S(s).days[v]),9,jT))),128))],512),[[fi,u.value]]),h("button",{class:"addTable",onClick:C[5]||(C[5]=v=>d())},"Thêm")]),h("table",WT,[C[8]||(C[8]=h("thead",null,[h("tr",null,[h("th",null,"Tên phim"),h("th",null,"Thể loại"),h("th",null,"Mô tả"),h("th",null,"Hình ảnh"),h("th",null,"Ngày chiếu"),h("th",null,"Yêu thích"),h("th",null,"Chức năng")])],-1)),h("tbody",null,[(k(!0),N(ce,null,ft(y.value,v=>(k(),N("tr",{key:v.firebaseId},[h("td",null,[v.isEditing?Ne((k(),N("input",{key:0,"onUpdate:modelValue":T=>v.tempName=T},null,8,zT)),[[Qe,v.tempName]]):(k(),N("p",GT,ne(v.name),1))]),h("td",null,[v.isEditing?Ne((k(),N("select",{key:0,"onUpdate:modelValue":T=>v.tempTheLoai=T},[(k(!0),N(ce,null,ft(S(n).danhMucs,T=>(k(),N("option",{key:T.firebaseId,value:T.name},ne(T.name),9,qT))),128))],8,KT)),[[fi,v.tempTheLoai]]):(k(),N("p",YT,ne(v.theLoai),1))]),h("td",null,[v.isEditing?Ne((k(),N("input",{key:0,"onUpdate:modelValue":T=>v.tempDes=T},null,8,QT)),[[Qe,v.tempDes]]):(k(),N("p",XT,ne(v.des),1))]),h("td",null,[h("img",{src:v.img,alt:"Hình ảnh phim",class:"movie-img"},null,8,JT)]),h("td",null,[v.isEditing?Ne((k(),N("select",{key:0,"onUpdate:modelValue":T=>v.tempDay=T},[(k(!0),N(ce,null,ft(S(s).day,T=>(k(),N("option",{key:T,value:T},ne(S(s).days[T]),9,e6))),128))],8,ZT)),[[fi,v.tempDay]]):(k(),N("p",t6,ne(S(s).days[v.day]),1))]),h("td",null,[h("p",null,ne(v.favorite?"Có":"Không"),1)]),h("td",null,[h("button",{onClick:T=>p(v)},ne(v.isEditing?"Lưu":"Sửa"),9,n6),h("button",{onClick:T=>S(e).deleteMovie(v.firebaseId)},"Xoá",8,s6)])]))),128))])]),h("div",i6,[h("button",{onClick:C[6]||(C[6]=v=>r.value--),disabled:r.value===1},"Trang trước",8,r6),h("span",null,"Trang "+ne(r.value)+" / "+ne(_.value),1),h("button",{onClick:C[7]||(C[7]=v=>r.value++),disabled:r.value>=_.value},"Trang sau",8,o6)])]))}},l6=ye(a6,[["__scopeId","data-v-64fc7083"]]),c6={key:1,class:"admin-container"},u6={class:"addContainer"},f6=["value"],d6={class:"movie-table"},h6=["onUpdate:modelValue"],p6={key:1},m6=["onUpdate:modelValue"],g6=["href"],_6=["onClick"],v6=["onClick"],y6={class:"pagination"},b6=["disabled"],C6=["disabled"],Ta=5,w6={__name:"chapAdmin",setup(t){const e=gg(),n=Js(),s=pe(null),i=pe({tap:"",url:""}),r=Tt();Vn(()=>{e.fetchChaps(),n.fetchMovies()});const o=()=>{if(s.value){const d=e.chaps.filter(y=>y.name===s.value.name),p=d.length>0?Math.max(...d.map(y=>parseInt(y.tap))):0;i.value.tap=p+1}else i.value.tap=""},a=()=>{if(!s.value||i.value.tap===""||!i.value.url.trim()){alert("Vui lòng nhập đầy đủ thông tin!");return}e.addChap({name:s.value.name,tap:i.value.tap,url:i.value.url}),i.value={tap:"",url:""},s.value=null},l=(d,p)=>{d.isEditing?e.updateChap(d.firebaseId,{tap:d.tempTap,url:d.tempUrl}):(d.tempTap=d.tap,d.tempUrl=d.url),d.isEditing=!d.isEditing},c=pe(1),u=ie(()=>[...e.chaps].sort((d,p)=>p.name.localeCompare(d.name))),f=ie(()=>{const d=(c.value-1)*Ta,p=d+Ta;return u.value.slice(d,p)});return(d,p)=>{const y=ls("Loading");return S(r).loading?(k(),qe(y,{key:0})):(k(),N("div",c6,[p[7]||(p[7]=h("span",{class:"fb-title"},"Quản lý tập",-1)),h("div",u6,[p[5]||(p[5]=h("h3",null,"Thêm tập mới",-1)),Ne(h("select",{"onUpdate:modelValue":p[0]||(p[0]=_=>s.value=_),onChange:o},[(k(!0),N(ce,null,ft(S(n).movies,_=>(k(),N("option",{key:_.firebaseId,value:_},ne(_.name),9,f6))),128))],544),[[fi,s.value]]),Ne(h("input",{type:"number",placeholder:"Số tập","onUpdate:modelValue":p[1]||(p[1]=_=>i.value.tap=_),min:"1"},null,512),[[Qe,i.value.tap]]),Ne(h("input",{type:"text",placeholder:"URL","onUpdate:modelValue":p[2]||(p[2]=_=>i.value.url=_)},null,512),[[Qe,i.value.url]]),h("button",{onClick:a},"Thêm tập")]),h("table",d6,[p[6]||(p[6]=h("thead",null,[h("tr",null,[h("th",null,"Tên phim"),h("th",null,"Tập"),h("th",null,"URL"),h("th",null,"Chức năng")])],-1)),h("tbody",null,[(k(!0),N(ce,null,ft(f.value,(_,w)=>(k(),N("tr",{key:w},[h("td",null,ne(_.name),1),h("td",null,[_.isEditing?Ne((k(),N("input",{key:0,"onUpdate:modelValue":C=>_.tempTap=C},null,8,h6)),[[Qe,_.tempTap]]):(k(),N("p",p6,ne(_.tap),1))]),h("td",null,[_.isEditing?Ne((k(),N("input",{key:0,"onUpdate:modelValue":C=>_.tempUrl=C},null,8,m6)),[[Qe,_.tempUrl]]):(k(),N("a",{key:1,href:_.url,target:"_blank",style:{color:"green"}},ne(_.url),9,g6))]),h("td",null,[h("button",{onClick:C=>l(_)},ne(_.isEditing?"Lưu":"Sửa"),9,_6),h("button",{onClick:C=>S(e).deleteChap(_.firebaseId)},"Xoá",8,v6)])]))),128))])]),h("div",y6,[h("button",{onClick:p[3]||(p[3]=_=>c.value--),disabled:c.value===1},"Trước",8,b6),h("span",null,"Trang "+ne(c.value),1),h("button",{onClick:p[4]||(p[4]=_=>c.value++),disabled:c.value*Ta>=S(e).chaps.length},"Tiếp",8,C6)])]))}}},E6=ye(w6,[["__scopeId","data-v-8d486acb"]]),S6={},x6={class:"admin-container"};function I6(t,e){return k(),N("div",x6,e[0]||(e[0]=[h("span",{class:"fb-title"},"Quản lý tài khoản ",-1)]))}const T6=ye(S6,[["render",I6],["__scopeId","data-v-9599cb7d"]]),yg=wb({history:Zy(),scrollBehavior(t,e,n){return n||{top:0,behavior:"smooth"}},routes:[{path:"/",name:"home",component:gx},{path:"/cartoon/:name/",name:"phim",component:Ux},{path:"/search",name:"SearchResults",component:Xx},{path:"/danhMuc/:name/:id",name:"danhMuc",component:aI},{path:"/chap/:name/:id",name:"chap",component:bI},{path:"/chatGroup/",name:"chat",component:BI},{path:"/login/",name:"login",component:dT},{path:"/favorite/",name:"favorite",component:_T},{path:"/admin/",name:"admin",component:PT,children:[{path:"danh-muc",component:BT},{path:"product",component:l6},{path:"chap",component:E6},{path:"user",component:T6}]},{path:"/:pathMatch(.*)*",name:"404",component:vg}]}),zo=ty(Sb);bv.add(Sv,wv);zo.component("font-awesome-icon",my);zo.use(gy());zo.use(yg);zo.mount("#app");
