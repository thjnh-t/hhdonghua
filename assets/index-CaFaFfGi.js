(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function lv(t,e,n){return(e=uv(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Rf(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,s)}return n}function M(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Rf(Object(n),!0).forEach(function(s){lv(t,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Rf(Object(n)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(n,s))})}return t}function cv(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var s=n.call(t,e);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function uv(t){var e=cv(t,"string");return typeof e=="symbol"?e:e+""}const Pf=()=>{};let Hc={},xp={},wp=null,Cp={mark:Pf,measure:Pf};try{typeof window<"u"&&(Hc=window),typeof document<"u"&&(xp=document),typeof MutationObserver<"u"&&(wp=MutationObserver),typeof performance<"u"&&(Cp=performance)}catch{}const{userAgent:Nf=""}=Hc.navigator||{},ls=Hc,$e=xp,Of=wp,ro=Cp;ls.document;const Ln=!!$e.documentElement&&!!$e.head&&typeof $e.addEventListener=="function"&&typeof $e.createElement=="function",Ip=~Nf.indexOf("MSIE")||~Nf.indexOf("Trident/");var fv=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,dv=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Ep={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},hv={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Sp=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],nt="classic",fa="duotone",pv="sharp",mv="sharp-duotone",Tp=[nt,fa,pv,mv],gv={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},_v={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},vv=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),yv={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},bv=["fak","fa-kit","fakd","fa-kit-duotone"],Mf={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},xv=["kit"],wv={kit:{"fa-kit":"fak"}},Cv=["fak","fakd"],Iv={kit:{fak:"fa-kit"}},Lf={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},oo={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ev=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Sv=["fak","fa-kit","fakd","fa-kit-duotone"],Tv={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},kv={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},Av={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Fl={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},Rv=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],$l=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...Ev,...Rv],Pv=["solid","regular","light","thin","duotone","brands"],kp=[1,2,3,4,5,6,7,8,9,10],Nv=kp.concat([11,12,13,14,15,16,17,18,19,20]),Ov=[...Object.keys(Av),...Pv,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",oo.GROUP,oo.SWAP_OPACITY,oo.PRIMARY,oo.SECONDARY].concat(kp.map(t=>"".concat(t,"x"))).concat(Nv.map(t=>"w-".concat(t))),Mv={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const Rn="___FONT_AWESOME___",Ul=16,Ap="fa",Rp="svg-inline--fa",Fs="data-fa-i2svg",Vl="data-fa-pseudo-element",Lv="data-fa-pseudo-element-pending",Wc="data-prefix",zc="data-icon",Df="fontawesome-i2svg",Dv="async",Fv=["HTML","HEAD","STYLE","SCRIPT"],Pp=(()=>{try{return!0}catch{return!1}})();function Ur(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[nt]}})}const Np=M({},Ep);Np[nt]=M(M(M(M({},{"fa-duotone":"duotone"}),Ep[nt]),Mf.kit),Mf["kit-duotone"]);const $v=Ur(Np),Bl=M({},yv);Bl[nt]=M(M(M(M({},{duotone:"fad"}),Bl[nt]),Lf.kit),Lf["kit-duotone"]);const Ff=Ur(Bl),jl=M({},Fl);jl[nt]=M(M({},jl[nt]),Iv.kit);const Gc=Ur(jl),Hl=M({},kv);Hl[nt]=M(M({},Hl[nt]),wv.kit);Ur(Hl);const Uv=fv,Op="fa-layers-text",Vv=dv,Bv=M({},gv);Ur(Bv);const jv=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ya=hv,Hv=[...xv,...Ov],er=ls.FontAwesomeConfig||{};function Wv(t){var e=$e.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function zv(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}$e&&typeof $e.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,s]=e;const i=zv(Wv(n));i!=null&&(er[s]=i)});const Mp={styleDefault:"solid",familyDefault:nt,cssPrefix:Ap,replacementClass:Rp,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};er.familyPrefix&&(er.cssPrefix=er.familyPrefix);const _i=M(M({},Mp),er);_i.autoReplaceSvg||(_i.observeMutations=!1);const Q={};Object.keys(Mp).forEach(t=>{Object.defineProperty(Q,t,{enumerable:!0,set:function(e){_i[t]=e,tr.forEach(n=>n(Q))},get:function(){return _i[t]}})});Object.defineProperty(Q,"familyPrefix",{enumerable:!0,set:function(t){_i.cssPrefix=t,tr.forEach(e=>e(Q))},get:function(){return _i.cssPrefix}});ls.FontAwesomeConfig=Q;const tr=[];function Gv(t){return tr.push(t),()=>{tr.splice(tr.indexOf(t),1)}}const Bn=Ul,sn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Kv(t){if(!t||!Ln)return;const e=$e.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=$e.head.childNodes;let s=null;for(let i=n.length-1;i>-1;i--){const r=n[i],o=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(s=r)}return $e.head.insertBefore(e,s),t}const qv="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function _r(){let t=12,e="";for(;t-- >0;)e+=qv[Math.random()*62|0];return e}function Oi(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Kc(t){return t.classList?Oi(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Lp(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Yv(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Lp(t[n]),'" '),"").trim()}function da(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function qc(t){return t.size!==sn.size||t.x!==sn.x||t.y!==sn.y||t.rotate!==sn.rotate||t.flipX||t.flipY}function Qv(t){let{transform:e,containerWidth:n,iconWidth:s}=t;const i={transform:"translate(".concat(n/2," 256)")},r="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(r," ").concat(o," ").concat(a)},c={transform:"translate(".concat(s/2*-1," -256)")};return{outer:i,inner:l,path:c}}function Xv(t){let{transform:e,width:n=Ul,height:s=Ul,startCentered:i=!1}=t,r="";return i&&Ip?r+="translate(".concat(e.x/Bn-n/2,"em, ").concat(e.y/Bn-s/2,"em) "):i?r+="translate(calc(-50% + ".concat(e.x/Bn,"em), calc(-50% + ").concat(e.y/Bn,"em)) "):r+="translate(".concat(e.x/Bn,"em, ").concat(e.y/Bn,"em) "),r+="scale(".concat(e.size/Bn*(e.flipX?-1:1),", ").concat(e.size/Bn*(e.flipY?-1:1),") "),r+="rotate(".concat(e.rotate,"deg) "),r}var Jv=`:root, :host {
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
}`;function Dp(){const t=Ap,e=Rp,n=Q.cssPrefix,s=Q.replacementClass;let i=Jv;if(n!==t||s!==e){const r=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(r,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(s))}return i}let $f=!1;function Qa(){Q.autoAddCss&&!$f&&(Kv(Dp()),$f=!0)}var Zv={mixout(){return{dom:{css:Dp,insertCss:Qa}}},hooks(){return{beforeDOMElementCreation(){Qa()},beforeI2svg(){Qa()}}}};const Pn=ls||{};Pn[Rn]||(Pn[Rn]={});Pn[Rn].styles||(Pn[Rn].styles={});Pn[Rn].hooks||(Pn[Rn].hooks={});Pn[Rn].shims||(Pn[Rn].shims=[]);var rn=Pn[Rn];const Fp=[],$p=function(){$e.removeEventListener("DOMContentLoaded",$p),To=1,Fp.map(t=>t())};let To=!1;Ln&&(To=($e.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test($e.readyState),To||$e.addEventListener("DOMContentLoaded",$p));function e1(t){Ln&&(To?setTimeout(t,0):Fp.push(t))}function Vr(t){const{tag:e,attributes:n={},children:s=[]}=t;return typeof t=="string"?Lp(t):"<".concat(e," ").concat(Yv(n),">").concat(s.map(Vr).join(""),"</").concat(e,">")}function Uf(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Xa=function(e,n,s,i){var r=Object.keys(e),o=r.length,a=n,l,c,u;for(s===void 0?(l=1,u=e[r[0]]):(l=0,u=s);l<o;l++)c=r[l],u=a(u,e[c],c,e);return u};function t1(t){const e=[];let n=0;const s=t.length;for(;n<s;){const i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<s){const r=t.charCodeAt(n++);(r&64512)==56320?e.push(((i&1023)<<10)+(r&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Wl(t){const e=t1(t);return e.length===1?e[0].toString(16):null}function n1(t,e){const n=t.length;let s=t.charCodeAt(e),i;return s>=55296&&s<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(s-55296)*1024+i-56320+65536:s}function Vf(t){return Object.keys(t).reduce((e,n)=>{const s=t[n];return!!s.icon?e[s.iconName]=s.icon:e[n]=s,e},{})}function zl(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:s=!1}=n,i=Vf(e);typeof rn.hooks.addPack=="function"&&!s?rn.hooks.addPack(t,Vf(e)):rn.styles[t]=M(M({},rn.styles[t]||{}),i),t==="fas"&&zl("fa",e)}const{styles:vr,shims:s1}=rn,Up=Object.keys(Gc),i1=Up.reduce((t,e)=>(t[e]=Object.keys(Gc[e]),t),{});let Yc=null,Vp={},Bp={},jp={},Hp={},Wp={};function r1(t){return~Hv.indexOf(t)}function o1(t,e){const n=e.split("-"),s=n[0],i=n.slice(1).join("-");return s===t&&i!==""&&!r1(i)?i:null}const zp=()=>{const t=s=>Xa(vr,(i,r,o)=>(i[o]=Xa(r,s,{}),i),{});Vp=t((s,i,r)=>(i[3]&&(s[i[3]]=r),i[2]&&i[2].filter(a=>typeof a=="number").forEach(a=>{s[a.toString(16)]=r}),s)),Bp=t((s,i,r)=>(s[r]=r,i[2]&&i[2].filter(a=>typeof a=="string").forEach(a=>{s[a]=r}),s)),Wp=t((s,i,r)=>{const o=i[2];return s[r]=r,o.forEach(a=>{s[a]=r}),s});const e="far"in vr||Q.autoFetchSvg,n=Xa(s1,(s,i)=>{const r=i[0];let o=i[1];const a=i[2];return o==="far"&&!e&&(o="fas"),typeof r=="string"&&(s.names[r]={prefix:o,iconName:a}),typeof r=="number"&&(s.unicodes[r.toString(16)]={prefix:o,iconName:a}),s},{names:{},unicodes:{}});jp=n.names,Hp=n.unicodes,Yc=ha(Q.styleDefault,{family:Q.familyDefault})};Gv(t=>{Yc=ha(t.styleDefault,{family:Q.familyDefault})});zp();function Qc(t,e){return(Vp[t]||{})[e]}function a1(t,e){return(Bp[t]||{})[e]}function Ps(t,e){return(Wp[t]||{})[e]}function Gp(t){return jp[t]||{prefix:null,iconName:null}}function l1(t){const e=Hp[t],n=Qc("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function cs(){return Yc}const Kp=()=>({prefix:null,iconName:null,rest:[]});function c1(t){let e=nt;const n=Up.reduce((s,i)=>(s[i]="".concat(Q.cssPrefix,"-").concat(i),s),{});return Tp.forEach(s=>{(t.includes(n[s])||t.some(i=>i1[s].includes(i)))&&(e=s)}),e}function ha(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=nt}=e,s=$v[n][t];if(n===fa&&!t)return"fad";const i=Ff[n][t]||Ff[n][s],r=t in rn.styles?t:null;return i||r||null}function u1(t){let e=[],n=null;return t.forEach(s=>{const i=o1(Q.cssPrefix,s);i?n=i:s&&e.push(s)}),{iconName:n,rest:e}}function Bf(t){return t.sort().filter((e,n,s)=>s.indexOf(e)===n)}function pa(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let s=null;const i=$l.concat(Sv),r=Bf(t.filter(f=>i.includes(f))),o=Bf(t.filter(f=>!$l.includes(f))),a=r.filter(f=>(s=f,!Sp.includes(f))),[l=null]=a,c=c1(r),u=M(M({},u1(o)),{},{prefix:ha(l,{family:c})});return M(M(M({},u),p1({values:t,family:c,styles:vr,config:Q,canonical:u,givenPrefix:s})),f1(n,s,u))}function f1(t,e,n){let{prefix:s,iconName:i}=n;if(t||!s||!i)return{prefix:s,iconName:i};const r=e==="fa"?Gp(i):{},o=Ps(s,i);return i=r.iconName||o||i,s=r.prefix||s,s==="far"&&!vr.far&&vr.fas&&!Q.autoFetchSvg&&(s="fas"),{prefix:s,iconName:i}}const d1=Tp.filter(t=>t!==nt||t!==fa),h1=Object.keys(Fl).filter(t=>t!==nt).map(t=>Object.keys(Fl[t])).flat();function p1(t){const{values:e,family:n,canonical:s,givenPrefix:i="",styles:r={},config:o={}}=t,a=n===fa,l=e.includes("fa-duotone")||e.includes("fad"),c=o.familyDefault==="duotone",u=s.prefix==="fad"||s.prefix==="fa-duotone";if(!a&&(l||c||u)&&(s.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(s.prefix="fab"),!s.prefix&&d1.includes(n)&&(Object.keys(r).find(d=>h1.includes(d))||o.autoFetchSvg)){const d=vv.get(n).defaultShortPrefixId;s.prefix=d,s.iconName=Ps(s.prefix,s.iconName)||s.iconName}return(s.prefix==="fa"||i==="fa")&&(s.prefix=cs()||"fas"),s}class m1{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),s=0;s<e;s++)n[s]=arguments[s];const i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(r=>{this.definitions[r]=M(M({},this.definitions[r]||{}),i[r]),zl(r,i[r]);const o=Gc[nt][r];o&&zl(o,i[r]),zp()})}reset(){this.definitions={}}_pullDefinitions(e,n){const s=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(s).map(i=>{const{prefix:r,iconName:o,icon:a}=s[i],l=a[2];e[r]||(e[r]={}),l.length>0&&l.forEach(c=>{typeof c=="string"&&(e[r][c]=a)}),e[r][o]=a}),e}}let jf=[],ii={};const ai={},g1=Object.keys(ai);function _1(t,e){let{mixoutsTo:n}=e;return jf=t,ii={},Object.keys(ai).forEach(s=>{g1.indexOf(s)===-1&&delete ai[s]}),jf.forEach(s=>{const i=s.mixout?s.mixout():{};if(Object.keys(i).forEach(r=>{typeof i[r]=="function"&&(n[r]=i[r]),typeof i[r]=="object"&&Object.keys(i[r]).forEach(o=>{n[r]||(n[r]={}),n[r][o]=i[r][o]})}),s.hooks){const r=s.hooks();Object.keys(r).forEach(o=>{ii[o]||(ii[o]=[]),ii[o].push(r[o])})}s.provides&&s.provides(ai)}),n}function Gl(t,e){for(var n=arguments.length,s=new Array(n>2?n-2:0),i=2;i<n;i++)s[i-2]=arguments[i];return(ii[t]||[]).forEach(o=>{e=o.apply(null,[e,...s])}),e}function $s(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),s=1;s<e;s++)n[s-1]=arguments[s];(ii[t]||[]).forEach(r=>{r.apply(null,n)})}function us(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return ai[t]?ai[t].apply(null,e):void 0}function Kl(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||cs();if(e)return e=Ps(n,e)||e,Uf(qp.definitions,n,e)||Uf(rn.styles,n,e)}const qp=new m1,v1=()=>{Q.autoReplaceSvg=!1,Q.observeMutations=!1,$s("noAuto")},y1={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ln?($s("beforeI2svg",t),us("pseudoElements2svg",t),us("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;Q.autoReplaceSvg===!1&&(Q.autoReplaceSvg=!0),Q.observeMutations=!0,e1(()=>{x1({autoReplaceSvgRoot:e}),$s("watch",t)})}},b1={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Ps(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=ha(t[0]);return{prefix:n,iconName:Ps(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(Q.cssPrefix,"-"))>-1||t.match(Uv))){const e=pa(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||cs(),iconName:Ps(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=cs();return{prefix:e,iconName:Ps(e,t)||t}}}},wt={noAuto:v1,config:Q,dom:y1,parse:b1,library:qp,findIconDefinition:Kl,toHtml:Vr},x1=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=$e}=t;(Object.keys(rn.styles).length>0||Q.autoFetchSvg)&&Ln&&Q.autoReplaceSvg&&wt.dom.i2svg({node:e})};function ma(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>Vr(n))}}),Object.defineProperty(t,"node",{get:function(){if(!Ln)return;const n=$e.createElement("div");return n.innerHTML=t.html,n.children}}),t}function w1(t){let{children:e,main:n,mask:s,attributes:i,styles:r,transform:o}=t;if(qc(o)&&n.found&&!s.found){const{width:a,height:l}=n,c={x:a/l/2,y:.5};i.style=da(M(M({},r),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function C1(t){let{prefix:e,iconName:n,children:s,attributes:i,symbol:r}=t;const o=r===!0?"".concat(e,"-").concat(Q.cssPrefix,"-").concat(n):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:M(M({},i),{},{id:o}),children:s}]}]}function Xc(t){const{icons:{main:e,mask:n},prefix:s,iconName:i,transform:r,symbol:o,title:a,maskId:l,titleId:c,extra:u,watchable:f=!1}=t,{width:d,height:p}=n.found?n:e,y=Cv.includes(s),m=[Q.replacementClass,i?"".concat(Q.cssPrefix,"-").concat(i):""].filter(z=>u.classes.indexOf(z)===-1).filter(z=>z!==""||!!z).concat(u.classes).join(" ");let x={children:[],attributes:M(M({},u.attributes),{},{"data-prefix":s,"data-icon":i,class:m,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(d," ").concat(p)})};const g=y&&!~u.classes.indexOf("fa-fw")?{width:"".concat(d/p*16*.0625,"em")}:{};f&&(x.attributes[Fs]=""),a&&(x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(c||_r())},children:[a]}),delete x.attributes.title);const b=M(M({},x),{},{prefix:s,iconName:i,main:e,mask:n,maskId:l,transform:r,symbol:o,styles:M(M({},g),u.styles)}),{children:A,attributes:O}=n.found&&e.found?us("generateAbstractMask",b)||{children:[],attributes:{}}:us("generateAbstractIcon",b)||{children:[],attributes:{}};return b.children=A,b.attributes=O,o?C1(b):w1(b)}function Hf(t){const{content:e,width:n,height:s,transform:i,title:r,extra:o,watchable:a=!1}=t,l=M(M(M({},o.attributes),r?{title:r}:{}),{},{class:o.classes.join(" ")});a&&(l[Fs]="");const c=M({},o.styles);qc(i)&&(c.transform=Xv({transform:i,startCentered:!0,width:n,height:s}),c["-webkit-transform"]=c.transform);const u=da(c);u.length>0&&(l.style=u);const f=[];return f.push({tag:"span",attributes:l,children:[e]}),r&&f.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),f}function I1(t){const{content:e,title:n,extra:s}=t,i=M(M(M({},s.attributes),n?{title:n}:{}),{},{class:s.classes.join(" ")}),r=da(s.styles);r.length>0&&(i.style=r);const o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:Ja}=rn;function ql(t){const e=t[0],n=t[1],[s]=t.slice(4);let i=null;return Array.isArray(s)?i={tag:"g",attributes:{class:"".concat(Q.cssPrefix,"-").concat(Ya.GROUP)},children:[{tag:"path",attributes:{class:"".concat(Q.cssPrefix,"-").concat(Ya.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(Q.cssPrefix,"-").concat(Ya.PRIMARY),fill:"currentColor",d:s[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:i}}const E1={found:!1,width:512,height:512};function S1(t,e){!Pp&&!Q.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Yl(t,e){let n=e;return e==="fa"&&Q.styleDefault!==null&&(e=cs()),new Promise((s,i)=>{if(n==="fa"){const r=Gp(t)||{};t=r.iconName||t,e=r.prefix||e}if(t&&e&&Ja[e]&&Ja[e][t]){const r=Ja[e][t];return s(ql(r))}S1(t,e),s(M(M({},E1),{},{icon:Q.showMissingIcons&&t?us("missingIconAbstract")||{}:{}}))})}const Wf=()=>{},Ql=Q.measurePerformance&&ro&&ro.mark&&ro.measure?ro:{mark:Wf,measure:Wf},Ji='FA "6.7.2"',T1=t=>(Ql.mark("".concat(Ji," ").concat(t," begins")),()=>Yp(t)),Yp=t=>{Ql.mark("".concat(Ji," ").concat(t," ends")),Ql.measure("".concat(Ji," ").concat(t),"".concat(Ji," ").concat(t," begins"),"".concat(Ji," ").concat(t," ends"))};var Jc={begin:T1,end:Yp};const go=()=>{};function zf(t){return typeof(t.getAttribute?t.getAttribute(Fs):null)=="string"}function k1(t){const e=t.getAttribute?t.getAttribute(Wc):null,n=t.getAttribute?t.getAttribute(zc):null;return e&&n}function A1(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(Q.replacementClass)}function R1(){return Q.autoReplaceSvg===!0?_o.replace:_o[Q.autoReplaceSvg]||_o.replace}function P1(t){return $e.createElementNS("http://www.w3.org/2000/svg",t)}function N1(t){return $e.createElement(t)}function Qp(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?P1:N1}=e;if(typeof t=="string")return $e.createTextNode(t);const s=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(r){s.setAttribute(r,t.attributes[r])}),(t.children||[]).forEach(function(r){s.appendChild(Qp(r,{ceFn:n}))}),s}function O1(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const _o={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(Qp(n),e)}),e.getAttribute(Fs)===null&&Q.keepOriginalSource){let n=$e.createComment(O1(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Kc(e).indexOf(Q.replacementClass))return _o.replace(t);const s=new RegExp("".concat(Q.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const r=n[0].attributes.class.split(" ").reduce((o,a)=>(a===Q.replacementClass||a.match(s)?o.toSvg.push(a):o.toNode.push(a),o),{toNode:[],toSvg:[]});n[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",r.toNode.join(" "))}const i=n.map(r=>Vr(r)).join(`
`);e.setAttribute(Fs,""),e.innerHTML=i}};function Gf(t){t()}function Xp(t,e){const n=typeof e=="function"?e:go;if(t.length===0)n();else{let s=Gf;Q.mutateApproach===Dv&&(s=ls.requestAnimationFrame||Gf),s(()=>{const i=R1(),r=Jc.begin("mutate");t.map(i),r(),n()})}}let Zc=!1;function Jp(){Zc=!0}function Xl(){Zc=!1}let ko=null;function Kf(t){if(!Of||!Q.observeMutations)return;const{treeCallback:e=go,nodeCallback:n=go,pseudoElementsCallback:s=go,observeMutationsRoot:i=$e}=t;ko=new Of(r=>{if(Zc)return;const o=cs();Oi(r).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!zf(a.addedNodes[0])&&(Q.searchPseudoElements&&s(a.target),e(a.target)),a.type==="attributes"&&a.target.parentNode&&Q.searchPseudoElements&&s(a.target.parentNode),a.type==="attributes"&&zf(a.target)&&~jv.indexOf(a.attributeName))if(a.attributeName==="class"&&k1(a.target)){const{prefix:l,iconName:c}=pa(Kc(a.target));a.target.setAttribute(Wc,l||o),c&&a.target.setAttribute(zc,c)}else A1(a.target)&&n(a.target)})}),Ln&&ko.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function M1(){ko&&ko.disconnect()}function L1(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((s,i)=>{const r=i.split(":"),o=r[0],a=r.slice(1);return o&&a.length>0&&(s[o]=a.join(":").trim()),s},{})),n}function D1(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),s=t.innerText!==void 0?t.innerText.trim():"";let i=pa(Kc(t));return i.prefix||(i.prefix=cs()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&s.length>0&&(i.iconName=a1(i.prefix,t.innerText)||Qc(i.prefix,Wl(t.innerText))),!i.iconName&&Q.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function F1(t){const e=Oi(t.attributes).reduce((i,r)=>(i.name!=="class"&&i.name!=="style"&&(i[r.name]=r.value),i),{}),n=t.getAttribute("title"),s=t.getAttribute("data-fa-title-id");return Q.autoA11y&&(n?e["aria-labelledby"]="".concat(Q.replacementClass,"-title-").concat(s||_r()):(e["aria-hidden"]="true",e.focusable="false")),e}function $1(){return{iconName:null,title:null,titleId:null,prefix:null,transform:sn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function qf(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:s,rest:i}=D1(t),r=F1(t),o=Gl("parseNodeAttributes",{},t);let a=e.styleParser?L1(t):[];return M({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:s,transform:sn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:a,attributes:r}},o)}const{styles:U1}=rn;function Zp(t){const e=Q.autoReplaceSvg==="nest"?qf(t,{styleParser:!1}):qf(t);return~e.extra.classes.indexOf(Op)?us("generateLayersText",t,e):us("generateSvgReplacementMutation",t,e)}function V1(){return[...bv,...$l]}function Yf(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ln)return Promise.resolve();const n=$e.documentElement.classList,s=u=>n.add("".concat(Df,"-").concat(u)),i=u=>n.remove("".concat(Df,"-").concat(u)),r=Q.autoFetchSvg?V1():Sp.concat(Object.keys(U1));r.includes("fa")||r.push("fa");const o=[".".concat(Op,":not([").concat(Fs,"])")].concat(r.map(u=>".".concat(u,":not([").concat(Fs,"])"))).join(", ");if(o.length===0)return Promise.resolve();let a=[];try{a=Oi(t.querySelectorAll(o))}catch{}if(a.length>0)s("pending"),i("complete");else return Promise.resolve();const l=Jc.begin("onTree"),c=a.reduce((u,f)=>{try{const d=Zp(f);d&&u.push(d)}catch(d){Pp||d.name==="MissingIcon"&&console.error(d)}return u},[]);return new Promise((u,f)=>{Promise.all(c).then(d=>{Xp(d,()=>{s("active"),s("complete"),i("pending"),typeof e=="function"&&e(),l(),u()})}).catch(d=>{l(),f(d)})})}function B1(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Zp(t).then(n=>{n&&Xp([n],e)})}function j1(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const s=(e||{}).icon?e:Kl(e||{});let{mask:i}=n;return i&&(i=(i||{}).icon?i:Kl(i||{})),t(s,M(M({},n),{},{mask:i}))}}const H1=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=sn,symbol:s=!1,mask:i=null,maskId:r=null,title:o=null,titleId:a=null,classes:l=[],attributes:c={},styles:u={}}=e;if(!t)return;const{prefix:f,iconName:d,icon:p}=t;return ma(M({type:"icon"},t),()=>($s("beforeDOMElementCreation",{iconDefinition:t,params:e}),Q.autoA11y&&(o?c["aria-labelledby"]="".concat(Q.replacementClass,"-title-").concat(a||_r()):(c["aria-hidden"]="true",c.focusable="false")),Xc({icons:{main:ql(p),mask:i?ql(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:f,iconName:d,transform:M(M({},sn),n),symbol:s,title:o,maskId:r,titleId:a,extra:{attributes:c,styles:u,classes:l}})))};var W1={mixout(){return{icon:j1(H1)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Yf,t.nodeCallback=B1,t}}},provides(t){t.i2svg=function(e){const{node:n=$e,callback:s=()=>{}}=e;return Yf(n,s)},t.generateSvgReplacementMutation=function(e,n){const{iconName:s,title:i,titleId:r,prefix:o,transform:a,symbol:l,mask:c,maskId:u,extra:f}=n;return new Promise((d,p)=>{Promise.all([Yl(s,o),c.iconName?Yl(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(y=>{let[m,x]=y;d([e,Xc({icons:{main:m,mask:x},prefix:o,iconName:s,transform:a,symbol:l,maskId:u,title:i,titleId:r,extra:f,watchable:!0})])}).catch(p)})},t.generateAbstractIcon=function(e){let{children:n,attributes:s,main:i,transform:r,styles:o}=e;const a=da(o);a.length>0&&(s.style=a);let l;return qc(r)&&(l=us("generateAbstractTransformGrouping",{main:i,transform:r,containerWidth:i.width,iconWidth:i.width})),n.push(l||i.icon),{children:n,attributes:s}}}},z1={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return ma({type:"layer"},()=>{$s("beforeDOMElementCreation",{assembler:t,params:e});let s=[];return t(i=>{Array.isArray(i)?i.map(r=>{s=s.concat(r.abstract)}):s=s.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(Q.cssPrefix,"-layers"),...n].join(" ")},children:s}]})}}}},G1={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:s=[],attributes:i={},styles:r={}}=e;return ma({type:"counter",content:t},()=>($s("beforeDOMElementCreation",{content:t,params:e}),I1({content:t.toString(),title:n,extra:{attributes:i,styles:r,classes:["".concat(Q.cssPrefix,"-layers-counter"),...s]}})))}}}},K1={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=sn,title:s=null,classes:i=[],attributes:r={},styles:o={}}=e;return ma({type:"text",content:t},()=>($s("beforeDOMElementCreation",{content:t,params:e}),Hf({content:t,transform:M(M({},sn),n),title:s,extra:{attributes:r,styles:o,classes:["".concat(Q.cssPrefix,"-layers-text"),...i]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:s,transform:i,extra:r}=n;let o=null,a=null;if(Ip){const l=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();o=c.width/l,a=c.height/l}return Q.autoA11y&&!s&&(r.attributes["aria-hidden"]="true"),Promise.resolve([e,Hf({content:e.innerHTML,width:o,height:a,transform:i,title:s,extra:r,watchable:!0})])}}};const q1=new RegExp('"',"ug"),Qf=[1105920,1112319],Xf=M(M(M(M({},{FontAwesome:{normal:"fas",400:"fas"}}),_v),Mv),Tv),Jl=Object.keys(Xf).reduce((t,e)=>(t[e.toLowerCase()]=Xf[e],t),{}),Y1=Object.keys(Jl).reduce((t,e)=>{const n=Jl[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function Q1(t){const e=t.replace(q1,""),n=n1(e,0),s=n>=Qf[0]&&n<=Qf[1],i=e.length===2?e[0]===e[1]:!1;return{value:Wl(i?e[0]:e),isSecondary:s||i}}function X1(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),s=parseInt(e),i=isNaN(s)?"normal":s;return(Jl[n]||{})[i]||Y1[n]}function Jf(t,e){const n="".concat(Lv).concat(e.replace(":","-"));return new Promise((s,i)=>{if(t.getAttribute(n)!==null)return s();const o=Oi(t.children).filter(d=>d.getAttribute(Vl)===e)[0],a=ls.getComputedStyle(t,e),l=a.getPropertyValue("font-family"),c=l.match(Vv),u=a.getPropertyValue("font-weight"),f=a.getPropertyValue("content");if(o&&!c)return t.removeChild(o),s();if(c&&f!=="none"&&f!==""){const d=a.getPropertyValue("content");let p=X1(l,u);const{value:y,isSecondary:m}=Q1(d),x=c[0].startsWith("FontAwesome");let g=Qc(p,y),b=g;if(x){const A=l1(y);A.iconName&&A.prefix&&(g=A.iconName,p=A.prefix)}if(g&&!m&&(!o||o.getAttribute(Wc)!==p||o.getAttribute(zc)!==b)){t.setAttribute(n,b),o&&t.removeChild(o);const A=$1(),{extra:O}=A;O.attributes[Vl]=e,Yl(g,p).then(z=>{const q=Xc(M(M({},A),{},{icons:{main:z,mask:Kp()},prefix:p,iconName:b,extra:O,watchable:!0})),S=$e.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(S,t.firstChild):t.appendChild(S),S.outerHTML=q.map(D=>Vr(D)).join(`
`),t.removeAttribute(n),s()}).catch(i)}else s()}else s()})}function J1(t){return Promise.all([Jf(t,"::before"),Jf(t,"::after")])}function Z1(t){return t.parentNode!==document.head&&!~Fv.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Vl)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Zf(t){if(Ln)return new Promise((e,n)=>{const s=Oi(t.querySelectorAll("*")).filter(Z1).map(J1),i=Jc.begin("searchPseudoElements");Jp(),Promise.all(s).then(()=>{i(),Xl(),e()}).catch(()=>{i(),Xl(),n()})})}var ey={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Zf,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=$e}=e;Q.searchPseudoElements&&Zf(n)}}};let ed=!1;var ty={mixout(){return{dom:{unwatch(){Jp(),ed=!0}}}},hooks(){return{bootstrap(){Kf(Gl("mutationObserverCallbacks",{}))},noAuto(){M1()},watch(t){const{observeMutationsRoot:e}=t;ed?Xl():Kf(Gl("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const td=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,s)=>{const i=s.toLowerCase().split("-"),r=i[0];let o=i.slice(1).join("-");if(r&&o==="h")return n.flipX=!0,n;if(r&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(r){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var ny={mixout(){return{parse:{transform:t=>td(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=td(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:s,containerWidth:i,iconWidth:r}=e;const o={transform:"translate(".concat(i/2," 256)")},a="translate(".concat(s.x*32,", ").concat(s.y*32,") "),l="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),c="rotate(".concat(s.rotate," 0 0)"),u={transform:"".concat(a," ").concat(l," ").concat(c)},f={transform:"translate(".concat(r/2*-1," -256)")},d={outer:o,inner:u,path:f};return{tag:"g",attributes:M({},d.outer),children:[{tag:"g",attributes:M({},d.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:M(M({},n.icon.attributes),d.path)}]}]}}}};const Za={x:0,y:0,width:"100%",height:"100%"};function nd(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function sy(t){return t.tag==="g"?t.children:[t]}var iy={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),s=n?pa(n.split(" ").map(i=>i.trim())):Kp();return s.prefix||(s.prefix=cs()),t.mask=s,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:s,main:i,mask:r,maskId:o,transform:a}=e;const{width:l,icon:c}=i,{width:u,icon:f}=r,d=Qv({transform:a,containerWidth:u,iconWidth:l}),p={tag:"rect",attributes:M(M({},Za),{},{fill:"white"})},y=c.children?{children:c.children.map(nd)}:{},m={tag:"g",attributes:M({},d.inner),children:[nd(M({tag:c.tag,attributes:M(M({},c.attributes),d.path)},y))]},x={tag:"g",attributes:M({},d.outer),children:[m]},g="mask-".concat(o||_r()),b="clip-".concat(o||_r()),A={tag:"mask",attributes:M(M({},Za),{},{id:g,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,x]},O={tag:"defs",children:[{tag:"clipPath",attributes:{id:b},children:sy(f)},A]};return n.push(O,{tag:"rect",attributes:M({fill:"currentColor","clip-path":"url(#".concat(b,")"),mask:"url(#".concat(g,")")},Za)}),{children:n,attributes:s}}}},ry={provides(t){let e=!1;ls.matchMedia&&(e=ls.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],s={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:M(M({},s),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const r=M(M({},i),{},{attributeName:"opacity"}),o={tag:"circle",attributes:M(M({},s),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:M(M({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:M(M({},r),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:M(M({},s),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:M(M({},r),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:M(M({},s),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:M(M({},r),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},oy={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),s=n===null?!1:n===""?!0:n;return t.symbol=s,t}}}},ay=[Zv,W1,z1,G1,K1,ey,ty,ny,iy,ry,oy];_1(ay,{mixoutsTo:wt});wt.noAuto;wt.config;const ly=wt.library;wt.dom;const Zl=wt.parse;wt.findIconDefinition;wt.toHtml;const cy=wt.icon;wt.layer;const uy=wt.text;wt.counter;/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const fy={prefix:"fas",iconName:"clock",icon:[512,512,[128339,"clock-four"],"f017","M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]},dy={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},hy=dy;/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function eu(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Re={},li=[],on=()=>{},py=()=>!1,ga=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),tu=t=>t.startsWith("onUpdate:"),Ke=Object.assign,nu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},my=Object.prototype.hasOwnProperty,Ce=(t,e)=>my.call(t,e),J=Array.isArray,ci=t=>Br(t)==="[object Map]",Mi=t=>Br(t)==="[object Set]",sd=t=>Br(t)==="[object Date]",ae=t=>typeof t=="function",He=t=>typeof t=="string",ln=t=>typeof t=="symbol",Ne=t=>t!==null&&typeof t=="object",em=t=>(Ne(t)||ae(t))&&ae(t.then)&&ae(t.catch),tm=Object.prototype.toString,Br=t=>tm.call(t),gy=t=>Br(t).slice(8,-1),nm=t=>Br(t)==="[object Object]",su=t=>He(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,nr=eu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),_a=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},_y=/-(\w)/g,Pt=_a(t=>t.replace(_y,(e,n)=>n?n.toUpperCase():"")),vy=/\B([A-Z])/g,gs=_a(t=>t.replace(vy,"-$1").toLowerCase()),va=_a(t=>t.charAt(0).toUpperCase()+t.slice(1)),el=_a(t=>t?`on${va(t)}`:""),ts=(t,e)=>!Object.is(t,e),vo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},sm=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},Ao=t=>{const e=parseFloat(t);return isNaN(e)?t:e},yy=t=>{const e=He(t)?Number(t):NaN;return isNaN(e)?t:e};let id;const ya=()=>id||(id=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ba(t){if(J(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=He(s)?Cy(s):ba(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(He(t)||Ne(t))return t}const by=/;(?![^(]*\))/g,xy=/:([^]+)/,wy=/\/\*[^]*?\*\//g;function Cy(t){const e={};return t.replace(wy,"").split(by).forEach(n=>{if(n){const s=n.split(xy);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function mt(t){let e="";if(He(t))e=t;else if(J(t))for(let n=0;n<t.length;n++){const s=mt(t[n]);s&&(e+=s+" ")}else if(Ne(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Iy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ey=eu(Iy);function im(t){return!!t||t===""}function Sy(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Us(t[s],e[s]);return n}function Us(t,e){if(t===e)return!0;let n=sd(t),s=sd(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=ln(t),s=ln(e),n||s)return t===e;if(n=J(t),s=J(e),n||s)return n&&s?Sy(t,e):!1;if(n=Ne(t),s=Ne(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Us(t[o],e[o]))return!1}}return String(t)===String(e)}function iu(t,e){return t.findIndex(n=>Us(n,e))}const rm=t=>!!(t&&t.__v_isRef===!0),Y=t=>He(t)?t:t==null?"":J(t)||Ne(t)&&(t.toString===tm||!ae(t.toString))?rm(t)?Y(t.value):JSON.stringify(t,om,2):String(t),om=(t,e)=>rm(e)?om(t,e.value):ci(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[tl(s,r)+" =>"]=i,n),{})}:Mi(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>tl(n))}:ln(e)?tl(e):Ne(e)&&!J(e)&&!nm(e)?String(e):e,tl=(t,e="")=>{var n;return ln(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let rt;class am{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=rt,!e&&rt&&(this.index=(rt.scopes||(rt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=rt;try{return rt=this,e()}finally{rt=n}}}on(){rt=this}off(){rt=this.parent}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function lm(t){return new am(t)}function cm(){return rt}function Ty(t,e=!1){rt&&rt.cleanups.push(t)}let Me;const nl=new WeakSet;class um{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,rt&&rt.active&&rt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,nl.has(this)&&(nl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||dm(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,rd(this),hm(this);const e=Me,n=$t;Me=this,$t=!0;try{return this.fn()}finally{pm(this),Me=e,$t=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)au(e);this.deps=this.depsTail=void 0,rd(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?nl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ec(this)&&this.run()}get dirty(){return ec(this)}}let fm=0,sr,ir;function dm(t,e=!1){if(t.flags|=8,e){t.next=ir,ir=t;return}t.next=sr,sr=t}function ru(){fm++}function ou(){if(--fm>0)return;if(ir){let e=ir;for(ir=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;sr;){let e=sr;for(sr=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function hm(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function pm(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),au(s),ky(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function ec(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(mm(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function mm(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===yr))return;t.globalVersion=yr;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!ec(t)){t.flags&=-3;return}const n=Me,s=$t;Me=t,$t=!0;try{hm(t);const i=t.fn(t._value);(e.version===0||ts(i,t._value))&&(t._value=i,e.version++)}catch(i){throw e.version++,i}finally{Me=n,$t=s,pm(t),t.flags&=-3}}function au(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)au(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function ky(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let $t=!0;const gm=[];function _s(){gm.push($t),$t=!1}function vs(){const t=gm.pop();$t=t===void 0?!0:t}function rd(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Me;Me=void 0;try{e()}finally{Me=n}}}let yr=0;class Ay{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class lu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Me||!$t||Me===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Me)n=this.activeLink=new Ay(Me,this),Me.deps?(n.prevDep=Me.depsTail,Me.depsTail.nextDep=n,Me.depsTail=n):Me.deps=Me.depsTail=n,_m(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=Me.depsTail,n.nextDep=void 0,Me.depsTail.nextDep=n,Me.depsTail=n,Me.deps===n&&(Me.deps=s)}return n}trigger(e){this.version++,yr++,this.notify(e)}notify(e){ru();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{ou()}}}function _m(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)_m(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ro=new WeakMap,Ms=Symbol(""),tc=Symbol(""),br=Symbol("");function et(t,e,n){if($t&&Me){let s=Ro.get(t);s||Ro.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new lu),i.map=s,i.key=n),i.track()}}function _n(t,e,n,s,i,r){const o=Ro.get(t);if(!o){yr++;return}const a=l=>{l&&l.trigger()};if(ru(),e==="clear")o.forEach(a);else{const l=J(t),c=l&&su(n);if(l&&n==="length"){const u=Number(s);o.forEach((f,d)=>{(d==="length"||d===br||!ln(d)&&d>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(br)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Ms)),ci(t)&&a(o.get(tc)));break;case"delete":l||(a(o.get(Ms)),ci(t)&&a(o.get(tc)));break;case"set":ci(t)&&a(o.get(Ms));break}}ou()}function Ry(t,e){const n=Ro.get(t);return n&&n.get(e)}function Xs(t){const e=_e(t);return e===t?e:(et(e,"iterate",br),kt(t)?e:e.map(tt))}function xa(t){return et(t=_e(t),"iterate",br),t}const Py={__proto__:null,[Symbol.iterator](){return sl(this,Symbol.iterator,tt)},concat(...t){return Xs(this).concat(...t.map(e=>J(e)?Xs(e):e))},entries(){return sl(this,"entries",t=>(t[1]=tt(t[1]),t))},every(t,e){return hn(this,"every",t,e,void 0,arguments)},filter(t,e){return hn(this,"filter",t,e,n=>n.map(tt),arguments)},find(t,e){return hn(this,"find",t,e,tt,arguments)},findIndex(t,e){return hn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return hn(this,"findLast",t,e,tt,arguments)},findLastIndex(t,e){return hn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return hn(this,"forEach",t,e,void 0,arguments)},includes(...t){return il(this,"includes",t)},indexOf(...t){return il(this,"indexOf",t)},join(t){return Xs(this).join(t)},lastIndexOf(...t){return il(this,"lastIndexOf",t)},map(t,e){return hn(this,"map",t,e,void 0,arguments)},pop(){return Wi(this,"pop")},push(...t){return Wi(this,"push",t)},reduce(t,...e){return od(this,"reduce",t,e)},reduceRight(t,...e){return od(this,"reduceRight",t,e)},shift(){return Wi(this,"shift")},some(t,e){return hn(this,"some",t,e,void 0,arguments)},splice(...t){return Wi(this,"splice",t)},toReversed(){return Xs(this).toReversed()},toSorted(t){return Xs(this).toSorted(t)},toSpliced(...t){return Xs(this).toSpliced(...t)},unshift(...t){return Wi(this,"unshift",t)},values(){return sl(this,"values",tt)}};function sl(t,e,n){const s=xa(t),i=s[e]();return s!==t&&!kt(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=n(r.value)),r}),i}const Ny=Array.prototype;function hn(t,e,n,s,i,r){const o=xa(t),a=o!==t&&!kt(t),l=o[e];if(l!==Ny[e]){const f=l.apply(t,r);return a?tt(f):f}let c=n;o!==t&&(a?c=function(f,d){return n.call(this,tt(f),d,t)}:n.length>2&&(c=function(f,d){return n.call(this,f,d,t)}));const u=l.call(o,c,s);return a&&i?i(u):u}function od(t,e,n,s){const i=xa(t);let r=n;return i!==t&&(kt(t)?n.length>3&&(r=function(o,a,l){return n.call(this,o,a,l,t)}):r=function(o,a,l){return n.call(this,o,tt(a),l,t)}),i[e](r,...s)}function il(t,e,n){const s=_e(t);et(s,"iterate",br);const i=s[e](...n);return(i===-1||i===!1)&&fu(n[0])?(n[0]=_e(n[0]),s[e](...n)):i}function Wi(t,e,n=[]){_s(),ru();const s=_e(t)[e].apply(t,n);return ou(),vs(),s}const Oy=eu("__proto__,__v_isRef,__isVue"),vm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ln));function My(t){ln(t)||(t=String(t));const e=_e(this);return et(e,"has",t),e.hasOwnProperty(t)}class ym{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?Wy:Cm:r?wm:xm).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=J(e);if(!i){let l;if(o&&(l=Py[n]))return l;if(n==="hasOwnProperty")return My}const a=Reflect.get(e,n,je(e)?e:s);return(ln(n)?vm.has(n):Oy(n))||(i||et(e,"get",n),r)?a:je(a)?o&&su(n)?a:a.value:Ne(a)?i?Em(a):jr(a):a}}class bm extends ym{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const l=Vs(r);if(!kt(s)&&!Vs(s)&&(r=_e(r),s=_e(s)),!J(e)&&je(r)&&!je(s))return l?!1:(r.value=s,!0)}const o=J(e)&&su(n)?Number(n)<e.length:Ce(e,n),a=Reflect.set(e,n,s,je(e)?e:i);return e===_e(i)&&(o?ts(s,r)&&_n(e,"set",n,s):_n(e,"add",n,s)),a}deleteProperty(e,n){const s=Ce(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&_n(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!ln(n)||!vm.has(n))&&et(e,"has",n),s}ownKeys(e){return et(e,"iterate",J(e)?"length":Ms),Reflect.ownKeys(e)}}class Ly extends ym{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Dy=new bm,Fy=new Ly,$y=new bm(!0);const nc=t=>t,ao=t=>Reflect.getPrototypeOf(t);function Uy(t,e,n){return function(...s){const i=this.__v_raw,r=_e(i),o=ci(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?nc:e?sc:tt;return!e&&et(r,"iterate",l?tc:Ms),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function lo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Vy(t,e){const n={get(i){const r=this.__v_raw,o=_e(r),a=_e(i);t||(ts(i,a)&&et(o,"get",i),et(o,"get",a));const{has:l}=ao(o),c=e?nc:t?sc:tt;if(l.call(o,i))return c(r.get(i));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&et(_e(i),"iterate",Ms),Reflect.get(i,"size",i)},has(i){const r=this.__v_raw,o=_e(r),a=_e(i);return t||(ts(i,a)&&et(o,"has",i),et(o,"has",a)),i===a?r.has(i):r.has(i)||r.has(a)},forEach(i,r){const o=this,a=o.__v_raw,l=_e(a),c=e?nc:t?sc:tt;return!t&&et(l,"iterate",Ms),a.forEach((u,f)=>i.call(r,c(u),c(f),o))}};return Ke(n,t?{add:lo("add"),set:lo("set"),delete:lo("delete"),clear:lo("clear")}:{add(i){!e&&!kt(i)&&!Vs(i)&&(i=_e(i));const r=_e(this);return ao(r).has.call(r,i)||(r.add(i),_n(r,"add",i,i)),this},set(i,r){!e&&!kt(r)&&!Vs(r)&&(r=_e(r));const o=_e(this),{has:a,get:l}=ao(o);let c=a.call(o,i);c||(i=_e(i),c=a.call(o,i));const u=l.call(o,i);return o.set(i,r),c?ts(r,u)&&_n(o,"set",i,r):_n(o,"add",i,r),this},delete(i){const r=_e(this),{has:o,get:a}=ao(r);let l=o.call(r,i);l||(i=_e(i),l=o.call(r,i)),a&&a.call(r,i);const c=r.delete(i);return l&&_n(r,"delete",i,void 0),c},clear(){const i=_e(this),r=i.size!==0,o=i.clear();return r&&_n(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=Uy(i,t,e)}),n}function cu(t,e){const n=Vy(t,e);return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(Ce(n,i)&&i in s?n:s,i,r)}const By={get:cu(!1,!1)},jy={get:cu(!1,!0)},Hy={get:cu(!0,!1)};const xm=new WeakMap,wm=new WeakMap,Cm=new WeakMap,Wy=new WeakMap;function zy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Gy(t){return t.__v_skip||!Object.isExtensible(t)?0:zy(gy(t))}function jr(t){return Vs(t)?t:uu(t,!1,Dy,By,xm)}function Im(t){return uu(t,!1,$y,jy,wm)}function Em(t){return uu(t,!0,Fy,Hy,Cm)}function uu(t,e,n,s,i){if(!Ne(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Gy(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function ns(t){return Vs(t)?ns(t.__v_raw):!!(t&&t.__v_isReactive)}function Vs(t){return!!(t&&t.__v_isReadonly)}function kt(t){return!!(t&&t.__v_isShallow)}function fu(t){return t?!!t.__v_raw:!1}function _e(t){const e=t&&t.__v_raw;return e?_e(e):t}function du(t){return!Ce(t,"__v_skip")&&Object.isExtensible(t)&&sm(t,"__v_skip",!0),t}const tt=t=>Ne(t)?jr(t):t,sc=t=>Ne(t)?Em(t):t;function je(t){return t?t.__v_isRef===!0:!1}function se(t){return Sm(t,!1)}function Ky(t){return Sm(t,!0)}function Sm(t,e){return je(t)?t:new qy(t,e)}class qy{constructor(e,n){this.dep=new lu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:_e(e),this._value=n?e:tt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||kt(e)||Vs(e);e=s?e:_e(e),ts(e,n)&&(this._rawValue=e,this._value=s?e:tt(e),this.dep.trigger())}}function I(t){return je(t)?t.value:t}const Yy={get:(t,e,n)=>e==="__v_raw"?t:I(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return je(i)&&!je(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Tm(t){return ns(t)?t:new Proxy(t,Yy)}function Qy(t){const e=J(t)?new Array(t.length):{};for(const n in t)e[n]=Jy(t,n);return e}class Xy{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Ry(_e(this._object),this._key)}}function Jy(t,e,n){const s=t[e];return je(s)?s:new Xy(t,e,n)}class Zy{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new lu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=yr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&Me!==this)return dm(this,!0),!0}get value(){const e=this.dep.track();return mm(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function eb(t,e,n=!1){let s,i;return ae(t)?s=t:(s=t.get,i=t.set),new Zy(s,i,n)}const co={},Po=new WeakMap;let Ts;function tb(t,e=!1,n=Ts){if(n){let s=Po.get(n);s||Po.set(n,s=[]),s.push(t)}}function nb(t,e,n=Re){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:a,call:l}=n,c=O=>i?O:kt(O)||i===!1||i===0?vn(O,1):vn(O);let u,f,d,p,y=!1,m=!1;if(je(t)?(f=()=>t.value,y=kt(t)):ns(t)?(f=()=>c(t),y=!0):J(t)?(m=!0,y=t.some(O=>ns(O)||kt(O)),f=()=>t.map(O=>{if(je(O))return O.value;if(ns(O))return c(O);if(ae(O))return l?l(O,2):O()})):ae(t)?e?f=l?()=>l(t,2):t:f=()=>{if(d){_s();try{d()}finally{vs()}}const O=Ts;Ts=u;try{return l?l(t,3,[p]):t(p)}finally{Ts=O}}:f=on,e&&i){const O=f,z=i===!0?1/0:i;f=()=>vn(O(),z)}const x=cm(),g=()=>{u.stop(),x&&x.active&&nu(x.effects,u)};if(r&&e){const O=e;e=(...z)=>{O(...z),g()}}let b=m?new Array(t.length).fill(co):co;const A=O=>{if(!(!(u.flags&1)||!u.dirty&&!O))if(e){const z=u.run();if(i||y||(m?z.some((q,S)=>ts(q,b[S])):ts(z,b))){d&&d();const q=Ts;Ts=u;try{const S=[z,b===co?void 0:m&&b[0]===co?[]:b,p];l?l(e,3,S):e(...S),b=z}finally{Ts=q}}}else u.run()};return a&&a(A),u=new um(f),u.scheduler=o?()=>o(A,!1):A,p=O=>tb(O,!1,u),d=u.onStop=()=>{const O=Po.get(u);if(O){if(l)l(O,4);else for(const z of O)z();Po.delete(u)}},e?s?A(!0):b=u.run():o?o(A.bind(null,!0),!0):u.run(),g.pause=u.pause.bind(u),g.resume=u.resume.bind(u),g.stop=g,g}function vn(t,e=1/0,n){if(e<=0||!Ne(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,je(t))vn(t.value,e,n);else if(J(t))for(let s=0;s<t.length;s++)vn(t[s],e,n);else if(Mi(t)||ci(t))t.forEach(s=>{vn(s,e,n)});else if(nm(t)){for(const s in t)vn(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&vn(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Hr(t,e,n,s){try{return s?t(...s):t()}catch(i){wa(i,e,n)}}function jt(t,e,n,s){if(ae(t)){const i=Hr(t,e,n,s);return i&&em(i)&&i.catch(r=>{wa(r,e,n)}),i}if(J(t)){const i=[];for(let r=0;r<t.length;r++)i.push(jt(t[r],e,n,s));return i}}function wa(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Re;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,l,c)===!1)return}a=a.parent}if(r){_s(),Hr(r,null,10,[t,l,c]),vs();return}}sb(t,n,i,s,o)}function sb(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const ot=[];let en=-1;const ui=[];let qn=null,ti=0;const km=Promise.resolve();let No=null;function ys(t){const e=No||km;return t?e.then(this?t.bind(this):t):e}function ib(t){let e=en+1,n=ot.length;for(;e<n;){const s=e+n>>>1,i=ot[s],r=xr(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function hu(t){if(!(t.flags&1)){const e=xr(t),n=ot[ot.length-1];!n||!(t.flags&2)&&e>=xr(n)?ot.push(t):ot.splice(ib(e),0,t),t.flags|=1,Am()}}function Am(){No||(No=km.then(Pm))}function rb(t){J(t)?ui.push(...t):qn&&t.id===-1?qn.splice(ti+1,0,t):t.flags&1||(ui.push(t),t.flags|=1),Am()}function ad(t,e,n=en+1){for(;n<ot.length;n++){const s=ot[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;ot.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Rm(t){if(ui.length){const e=[...new Set(ui)].sort((n,s)=>xr(n)-xr(s));if(ui.length=0,qn){qn.push(...e);return}for(qn=e,ti=0;ti<qn.length;ti++){const n=qn[ti];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}qn=null,ti=0}}const xr=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Pm(t){try{for(en=0;en<ot.length;en++){const e=ot[en];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Hr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;en<ot.length;en++){const e=ot[en];e&&(e.flags&=-2)}en=-1,ot.length=0,Rm(),No=null,(ot.length||ui.length)&&Pm()}}let at=null,Nm=null;function Oo(t){const e=at;return at=t,Nm=t&&t.type.__scopeId||null,e}function Pe(t,e=at,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&vd(-1);const r=Oo(e);let o;try{o=t(...i)}finally{Oo(r),s._d&&vd(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Ee(t,e){if(at===null)return t;const n=ka(at),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,a,l=Re]=e[i];r&&(ae(r)&&(r={mounted:r,updated:r}),r.deep&&vn(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Is(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(_s(),jt(l,n,8,[t.el,a,t,e]),vs())}}const ob=Symbol("_vte"),Om=t=>t.__isTeleport,Yn=Symbol("_leaveCb"),uo=Symbol("_enterCb");function Mm(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ct(()=>{t.isMounted=!0}),Bm(()=>{t.isUnmounting=!0}),t}const St=[Function,Array],Lm={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:St,onEnter:St,onAfterEnter:St,onEnterCancelled:St,onBeforeLeave:St,onLeave:St,onAfterLeave:St,onLeaveCancelled:St,onBeforeAppear:St,onAppear:St,onAfterAppear:St,onAppearCancelled:St},Dm=t=>{const e=t.subTree;return e.component?Dm(e.component):e},ab={name:"BaseTransition",props:Lm,setup(t,{slots:e}){const n=lg(),s=Mm();return()=>{const i=e.default&&pu(e.default(),!0);if(!i||!i.length)return;const r=Fm(i),o=_e(t),{mode:a}=o;if(s.isLeaving)return rl(r);const l=ld(r);if(!l)return rl(r);let c=wr(l,o,s,n,f=>c=f);l.type!==pt&&Bs(l,c);let u=n.subTree&&ld(n.subTree);if(u&&u.type!==pt&&!Rs(l,u)&&Dm(n).type!==pt){let f=wr(u,o,s,n);if(Bs(u,f),a==="out-in"&&l.type!==pt)return s.isLeaving=!0,f.afterLeave=()=>{s.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave,u=void 0},rl(r);a==="in-out"&&l.type!==pt?f.delayLeave=(d,p,y)=>{const m=$m(s,u);m[String(u.key)]=u,d[Yn]=()=>{p(),d[Yn]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{y(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function Fm(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==pt){e=n;break}}return e}const lb=ab;function $m(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function wr(t,e,n,s,i){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:d,onLeave:p,onAfterLeave:y,onLeaveCancelled:m,onBeforeAppear:x,onAppear:g,onAfterAppear:b,onAppearCancelled:A}=e,O=String(t.key),z=$m(n,t),q=(P,j)=>{P&&jt(P,s,9,j)},S=(P,j)=>{const re=j[1];q(P,j),J(P)?P.every(U=>U.length<=1)&&re():P.length<=1&&re()},D={mode:o,persisted:a,beforeEnter(P){let j=l;if(!n.isMounted)if(r)j=x||l;else return;P[Yn]&&P[Yn](!0);const re=z[O];re&&Rs(t,re)&&re.el[Yn]&&re.el[Yn](),q(j,[P])},enter(P){let j=c,re=u,U=f;if(!n.isMounted)if(r)j=g||c,re=b||u,U=A||f;else return;let ue=!1;const be=P[uo]=st=>{ue||(ue=!0,st?q(U,[P]):q(re,[P]),D.delayedLeave&&D.delayedLeave(),P[uo]=void 0)};j?S(j,[P,be]):be()},leave(P,j){const re=String(t.key);if(P[uo]&&P[uo](!0),n.isUnmounting)return j();q(d,[P]);let U=!1;const ue=P[Yn]=be=>{U||(U=!0,j(),be?q(m,[P]):q(y,[P]),P[Yn]=void 0,z[re]===t&&delete z[re])};z[re]=t,p?S(p,[P,ue]):ue()},clone(P){const j=wr(P,e,n,s,i);return i&&i(j),j}};return D}function rl(t){if(Ca(t))return t=fs(t),t.children=null,t}function ld(t){if(!Ca(t))return Om(t.type)&&t.children?Fm(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&ae(n.default))return n.default()}}function Bs(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Bs(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function pu(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===le?(o.patchFlag&128&&i++,s=s.concat(pu(o.children,e,a))):(e||o.type!==pt)&&s.push(a!=null?fs(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}/*! #__NO_SIDE_EFFECTS__ */function mu(t,e){return ae(t)?Ke({name:t.name},e,{setup:t}):t}function Um(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Mo(t,e,n,s,i=!1){if(J(t)){t.forEach((y,m)=>Mo(y,e&&(J(e)?e[m]:e),n,s,i));return}if(rr(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Mo(t,e,n,s.component.subTree);return}const r=s.shapeFlag&4?ka(s.component):s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Re?a.refs={}:a.refs,f=a.setupState,d=_e(f),p=f===Re?()=>!1:y=>Ce(d,y);if(c!=null&&c!==l&&(He(c)?(u[c]=null,p(c)&&(f[c]=null)):je(c)&&(c.value=null)),ae(l))Hr(l,a,12,[o,u]);else{const y=He(l),m=je(l);if(y||m){const x=()=>{if(t.f){const g=y?p(l)?f[l]:u[l]:l.value;i?J(g)&&nu(g,r):J(g)?g.includes(r)||g.push(r):y?(u[l]=[r],p(l)&&(f[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else y?(u[l]=o,p(l)&&(f[l]=o)):m&&(l.value=o,t.k&&(u[t.k]=o))};o?(x.id=-1,yt(x,n)):x()}}}ya().requestIdleCallback;ya().cancelIdleCallback;const rr=t=>!!t.type.__asyncLoader,Ca=t=>t.type.__isKeepAlive;function cb(t,e){Vm(t,"a",e)}function ub(t,e){Vm(t,"da",e)}function Vm(t,e,n=Xe){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Ia(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Ca(i.parent.vnode)&&fb(s,e,n,i),i=i.parent}}function fb(t,e,n,s){const i=Ia(e,t,s,!0);Ea(()=>{nu(s[e],i)},n)}function Ia(t,e,n=Xe,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{_s();const a=Wr(n),l=jt(e,n,t,o);return a(),vs(),l});return s?i.unshift(r):i.push(r),r}}const Dn=t=>(e,n=Xe)=>{(!Ir||t==="sp")&&Ia(t,(...s)=>e(...s),n)},db=Dn("bm"),Ct=Dn("m"),hb=Dn("bu"),gu=Dn("u"),Bm=Dn("bum"),Ea=Dn("um"),pb=Dn("sp"),mb=Dn("rtg"),gb=Dn("rtc");function _b(t,e=Xe){Ia("ec",t,e)}const vb="components";function Ht(t,e){return bb(vb,t,!0,e)||t}const yb=Symbol.for("v-ndc");function bb(t,e,n=!0,s=!1){const i=at||Xe;if(i){const r=i.type;{const a=ax(r,!1);if(a&&(a===e||a===Pt(e)||a===va(Pt(e))))return r}const o=cd(i[t]||r[t],e)||cd(i.appContext[t],e);return!o&&s?r:o}}function cd(t,e){return t&&(t[e]||t[Pt(e)]||t[va(Pt(e))])}function Be(t,e,n,s){let i;const r=n,o=J(t);if(o||He(t)){const a=o&&ns(t);let l=!1;a&&(l=!kt(t),t=xa(t)),i=new Array(t.length);for(let c=0,u=t.length;c<u;c++)i[c]=e(l?tt(t[c]):t[c],c,void 0,r)}else if(typeof t=="number"){i=new Array(t);for(let a=0;a<t;a++)i[a]=e(a+1,a,void 0,r)}else if(Ne(t))if(t[Symbol.iterator])i=Array.from(t,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(t);i=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];i[l]=e(t[u],u,l,r)}}else i=[];return i}const ic=t=>t?cg(t)?ka(t):ic(t.parent):null,or=Ke(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ic(t.parent),$root:t=>ic(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Hm(t),$forceUpdate:t=>t.f||(t.f=()=>{hu(t.update)}),$nextTick:t=>t.n||(t.n=ys.bind(t.proxy)),$watch:t=>jb.bind(t)}),ol=(t,e)=>t!==Re&&!t.__isScriptSetup&&Ce(t,e),xb={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(ol(s,e))return o[e]=1,s[e];if(i!==Re&&Ce(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&Ce(c,e))return o[e]=3,r[e];if(n!==Re&&Ce(n,e))return o[e]=4,n[e];rc&&(o[e]=0)}}const u=or[e];let f,d;if(u)return e==="$attrs"&&et(t.attrs,"get",""),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==Re&&Ce(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,Ce(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return ol(i,e)?(i[e]=n,!0):s!==Re&&Ce(s,e)?(s[e]=n,!0):Ce(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==Re&&Ce(t,o)||ol(e,o)||(a=r[0])&&Ce(a,o)||Ce(s,o)||Ce(or,o)||Ce(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ce(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ud(t){return J(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let rc=!0;function wb(t){const e=Hm(t),n=t.proxy,s=t.ctx;rc=!1,e.beforeCreate&&fd(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:p,updated:y,activated:m,deactivated:x,beforeDestroy:g,beforeUnmount:b,destroyed:A,unmounted:O,render:z,renderTracked:q,renderTriggered:S,errorCaptured:D,serverPrefetch:P,expose:j,inheritAttrs:re,components:U,directives:ue,filters:be}=e;if(c&&Cb(c,s,null),o)for(const fe in o){const xe=o[fe];ae(xe)&&(s[fe]=xe.bind(n))}if(i){const fe=i.call(n,n);Ne(fe)&&(t.data=jr(fe))}if(rc=!0,r)for(const fe in r){const xe=r[fe],dn=ae(xe)?xe.bind(n,n):ae(xe.get)?xe.get.bind(n,n):on,Vn=!ae(xe)&&ae(xe.set)?xe.set.bind(n):on,qt=ne({get:dn,set:Vn});Object.defineProperty(s,fe,{enumerable:!0,configurable:!0,get:()=>qt.value,set:ft=>qt.value=ft})}if(a)for(const fe in a)jm(a[fe],s,n,fe);if(l){const fe=ae(l)?l.call(n):l;Reflect.ownKeys(fe).forEach(xe=>{yo(xe,fe[xe])})}u&&fd(u,t,"c");function ke(fe,xe){J(xe)?xe.forEach(dn=>fe(dn.bind(n))):xe&&fe(xe.bind(n))}if(ke(db,f),ke(Ct,d),ke(hb,p),ke(gu,y),ke(cb,m),ke(ub,x),ke(_b,D),ke(gb,q),ke(mb,S),ke(Bm,b),ke(Ea,O),ke(pb,P),J(j))if(j.length){const fe=t.exposed||(t.exposed={});j.forEach(xe=>{Object.defineProperty(fe,xe,{get:()=>n[xe],set:dn=>n[xe]=dn})})}else t.exposed||(t.exposed={});z&&t.render===on&&(t.render=z),re!=null&&(t.inheritAttrs=re),U&&(t.components=U),ue&&(t.directives=ue),P&&Um(t)}function Cb(t,e,n=on){J(t)&&(t=oc(t));for(const s in t){const i=t[s];let r;Ne(i)?"default"in i?r=At(i.from||s,i.default,!0):r=At(i.from||s):r=At(i),je(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function fd(t,e,n){jt(J(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function jm(t,e,n,s){let i=s.includes(".")?sg(n,s):()=>n[s];if(He(t)){const r=e[t];ae(r)&&kn(i,r)}else if(ae(t))kn(i,t.bind(n));else if(Ne(t))if(J(t))t.forEach(r=>jm(r,e,n,s));else{const r=ae(t.handler)?t.handler.bind(n):e[t.handler];ae(r)&&kn(i,r,t)}}function Hm(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>Lo(l,c,o,!0)),Lo(l,e,o)),Ne(e)&&r.set(e,l),l}function Lo(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Lo(t,r,n,!0),i&&i.forEach(o=>Lo(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Ib[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Ib={data:dd,props:hd,emits:hd,methods:Zi,computed:Zi,beforeCreate:it,created:it,beforeMount:it,mounted:it,beforeUpdate:it,updated:it,beforeDestroy:it,beforeUnmount:it,destroyed:it,unmounted:it,activated:it,deactivated:it,errorCaptured:it,serverPrefetch:it,components:Zi,directives:Zi,watch:Sb,provide:dd,inject:Eb};function dd(t,e){return e?t?function(){return Ke(ae(t)?t.call(this,this):t,ae(e)?e.call(this,this):e)}:e:t}function Eb(t,e){return Zi(oc(t),oc(e))}function oc(t){if(J(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function it(t,e){return t?[...new Set([].concat(t,e))]:e}function Zi(t,e){return t?Ke(Object.create(null),t,e):e}function hd(t,e){return t?J(t)&&J(e)?[...new Set([...t,...e])]:Ke(Object.create(null),ud(t),ud(e??{})):e}function Sb(t,e){if(!t)return e;if(!e)return t;const n=Ke(Object.create(null),t);for(const s in e)n[s]=it(t[s],e[s]);return n}function Wm(){return{app:null,config:{isNativeTag:py,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Tb=0;function kb(t,e){return function(s,i=null){ae(s)||(s=Ke({},s)),i!=null&&!Ne(i)&&(i=null);const r=Wm(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Tb++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:cx,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&ae(u.install)?(o.add(u),u.install(c,...f)):ae(u)&&(o.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,d){if(!l){const p=c._ceVNode||$(s,i);return p.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),t(p,u,d),l=!0,c._container=u,u.__vue_app__=c,ka(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(jt(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=Ls;Ls=c;try{return u()}finally{Ls=f}}};return c}}let Ls=null;function yo(t,e){if(Xe){let n=Xe.provides;const s=Xe.parent&&Xe.parent.provides;s===n&&(n=Xe.provides=Object.create(s)),n[t]=e}}function At(t,e,n=!1){const s=Xe||at;if(s||Ls){const i=Ls?Ls._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&ae(e)?e.call(s&&s.proxy):e}}function Ab(){return!!(Xe||at||Ls)}const zm={},Gm=()=>Object.create(zm),Km=t=>Object.getPrototypeOf(t)===zm;function Rb(t,e,n,s=!1){const i={},r=Gm();t.propsDefaults=Object.create(null),qm(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Im(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Pb(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=_e(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Sa(t.emitsOptions,d))continue;const p=e[d];if(l)if(Ce(r,d))p!==r[d]&&(r[d]=p,c=!0);else{const y=Pt(d);i[y]=ac(l,a,y,p,t,!1)}else p!==r[d]&&(r[d]=p,c=!0)}}}else{qm(t,e,i,r)&&(c=!0);let u;for(const f in a)(!e||!Ce(e,f)&&((u=gs(f))===f||!Ce(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(i[f]=ac(l,a,f,void 0,t,!0)):delete i[f]);if(r!==a)for(const f in r)(!e||!Ce(e,f))&&(delete r[f],c=!0)}c&&_n(t.attrs,"set","")}function qm(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(nr(l))continue;const c=e[l];let u;i&&Ce(i,u=Pt(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Sa(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=_e(n),c=a||Re;for(let u=0;u<r.length;u++){const f=r[u];n[f]=ac(i,l,f,c[f],t,!Ce(c,f))}}return o}function ac(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=Ce(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ae(l)){const{propsDefaults:c}=i;if(n in c)s=c[n];else{const u=Wr(i);s=c[n]=l.call(null,e),u()}}else s=l;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===gs(n))&&(s=!0))}return s}const Nb=new WeakMap;function Ym(t,e,n=!1){const s=n?Nb:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!ae(t)){const u=f=>{l=!0;const[d,p]=Ym(f,e,!0);Ke(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return Ne(t)&&s.set(t,li),li;if(J(r))for(let u=0;u<r.length;u++){const f=Pt(r[u]);pd(f)&&(o[f]=Re)}else if(r)for(const u in r){const f=Pt(u);if(pd(f)){const d=r[u],p=o[f]=J(d)||ae(d)?{type:d}:Ke({},d),y=p.type;let m=!1,x=!0;if(J(y))for(let g=0;g<y.length;++g){const b=y[g],A=ae(b)&&b.name;if(A==="Boolean"){m=!0;break}else A==="String"&&(x=!1)}else m=ae(y)&&y.name==="Boolean";p[0]=m,p[1]=x,(m||Ce(p,"default"))&&a.push(f)}}const c=[o,a];return Ne(t)&&s.set(t,c),c}function pd(t){return t[0]!=="$"&&!nr(t)}const Qm=t=>t[0]==="_"||t==="$stable",_u=t=>J(t)?t.map(tn):[tn(t)],Ob=(t,e,n)=>{if(e._n)return e;const s=Pe((...i)=>_u(e(...i)),n);return s._c=!1,s},Xm=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Qm(i))continue;const r=t[i];if(ae(r))e[i]=Ob(i,r,s);else if(r!=null){const o=_u(r);e[i]=()=>o}}},Jm=(t,e)=>{const n=_u(e);t.slots.default=()=>n},Zm=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},Mb=(t,e,n)=>{const s=t.slots=Gm();if(t.vnode.shapeFlag&32){const i=e._;i?(Zm(s,e,n),n&&sm(s,"_",i,!0)):Xm(e,s)}else e&&Jm(t,e)},Lb=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Re;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:Zm(i,e,n):(r=!e.$stable,Xm(e,i)),o=e}else e&&(Jm(t,e),o={default:1});if(r)for(const a in i)!Qm(a)&&o[a]==null&&delete i[a]},yt=Yb;function Db(t){return Fb(t)}function Fb(t,e){const n=ya();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:p=on,insertStaticContent:y}=t,m=(_,v,w,T=null,N=null,R=null,H=void 0,B=null,V=!!v.dynamicChildren)=>{if(_===v)return;_&&!Rs(_,v)&&(T=k(_),ft(_,N,R,!0),_=null),v.patchFlag===-2&&(V=!1,v.dynamicChildren=null);const{type:L,ref:ee,shapeFlag:G}=v;switch(L){case Ta:x(_,v,w,T);break;case pt:g(_,v,w,T);break;case ll:_==null&&b(v,w,T,H);break;case le:U(_,v,w,T,N,R,H,B,V);break;default:G&1?z(_,v,w,T,N,R,H,B,V):G&6?ue(_,v,w,T,N,R,H,B,V):(G&64||G&128)&&L.process(_,v,w,T,N,R,H,B,V,X)}ee!=null&&N&&Mo(ee,_&&_.ref,R,v||_,!v)},x=(_,v,w,T)=>{if(_==null)s(v.el=a(v.children),w,T);else{const N=v.el=_.el;v.children!==_.children&&c(N,v.children)}},g=(_,v,w,T)=>{_==null?s(v.el=l(v.children||""),w,T):v.el=_.el},b=(_,v,w,T)=>{[_.el,_.anchor]=y(_.children,v,w,T,_.el,_.anchor)},A=({el:_,anchor:v},w,T)=>{let N;for(;_&&_!==v;)N=d(_),s(_,w,T),_=N;s(v,w,T)},O=({el:_,anchor:v})=>{let w;for(;_&&_!==v;)w=d(_),i(_),_=w;i(v)},z=(_,v,w,T,N,R,H,B,V)=>{v.type==="svg"?H="svg":v.type==="math"&&(H="mathml"),_==null?q(v,w,T,N,R,H,B,V):P(_,v,N,R,H,B,V)},q=(_,v,w,T,N,R,H,B)=>{let V,L;const{props:ee,shapeFlag:G,transition:Z,dirs:oe}=_;if(V=_.el=o(_.type,R,ee&&ee.is,ee),G&8?u(V,_.children):G&16&&D(_.children,V,null,T,N,al(_,R),H,B),oe&&Is(_,null,T,"created"),S(V,_,_.scopeId,H,T),ee){for(const Oe in ee)Oe!=="value"&&!nr(Oe)&&r(V,Oe,null,ee[Oe],R,T);"value"in ee&&r(V,"value",null,ee.value,R),(L=ee.onVnodeBeforeMount)&&Jt(L,T,_)}oe&&Is(_,null,T,"beforeMount");const ge=$b(N,Z);ge&&Z.beforeEnter(V),s(V,v,w),((L=ee&&ee.onVnodeMounted)||ge||oe)&&yt(()=>{L&&Jt(L,T,_),ge&&Z.enter(V),oe&&Is(_,null,T,"mounted")},N)},S=(_,v,w,T,N)=>{if(w&&p(_,w),T)for(let R=0;R<T.length;R++)p(_,T[R]);if(N){let R=N.subTree;if(v===R||rg(R.type)&&(R.ssContent===v||R.ssFallback===v)){const H=N.vnode;S(_,H,H.scopeId,H.slotScopeIds,N.parent)}}},D=(_,v,w,T,N,R,H,B,V=0)=>{for(let L=V;L<_.length;L++){const ee=_[L]=B?Qn(_[L]):tn(_[L]);m(null,ee,v,w,T,N,R,H,B)}},P=(_,v,w,T,N,R,H)=>{const B=v.el=_.el;let{patchFlag:V,dynamicChildren:L,dirs:ee}=v;V|=_.patchFlag&16;const G=_.props||Re,Z=v.props||Re;let oe;if(w&&Es(w,!1),(oe=Z.onVnodeBeforeUpdate)&&Jt(oe,w,v,_),ee&&Is(v,_,w,"beforeUpdate"),w&&Es(w,!0),(G.innerHTML&&Z.innerHTML==null||G.textContent&&Z.textContent==null)&&u(B,""),L?j(_.dynamicChildren,L,B,w,T,al(v,N),R):H||xe(_,v,B,null,w,T,al(v,N),R,!1),V>0){if(V&16)re(B,G,Z,w,N);else if(V&2&&G.class!==Z.class&&r(B,"class",null,Z.class,N),V&4&&r(B,"style",G.style,Z.style,N),V&8){const ge=v.dynamicProps;for(let Oe=0;Oe<ge.length;Oe++){const Ie=ge[Oe],_t=G[Ie],dt=Z[Ie];(dt!==_t||Ie==="value")&&r(B,Ie,_t,dt,N,w)}}V&1&&_.children!==v.children&&u(B,v.children)}else!H&&L==null&&re(B,G,Z,w,N);((oe=Z.onVnodeUpdated)||ee)&&yt(()=>{oe&&Jt(oe,w,v,_),ee&&Is(v,_,w,"updated")},T)},j=(_,v,w,T,N,R,H)=>{for(let B=0;B<v.length;B++){const V=_[B],L=v[B],ee=V.el&&(V.type===le||!Rs(V,L)||V.shapeFlag&70)?f(V.el):w;m(V,L,ee,null,T,N,R,H,!0)}},re=(_,v,w,T,N)=>{if(v!==w){if(v!==Re)for(const R in v)!nr(R)&&!(R in w)&&r(_,R,v[R],null,N,T);for(const R in w){if(nr(R))continue;const H=w[R],B=v[R];H!==B&&R!=="value"&&r(_,R,B,H,N,T)}"value"in w&&r(_,"value",v.value,w.value,N)}},U=(_,v,w,T,N,R,H,B,V)=>{const L=v.el=_?_.el:a(""),ee=v.anchor=_?_.anchor:a("");let{patchFlag:G,dynamicChildren:Z,slotScopeIds:oe}=v;oe&&(B=B?B.concat(oe):oe),_==null?(s(L,w,T),s(ee,w,T),D(v.children||[],w,ee,N,R,H,B,V)):G>0&&G&64&&Z&&_.dynamicChildren?(j(_.dynamicChildren,Z,w,N,R,H,B),(v.key!=null||N&&v===N.subTree)&&eg(_,v,!0)):xe(_,v,w,ee,N,R,H,B,V)},ue=(_,v,w,T,N,R,H,B,V)=>{v.slotScopeIds=B,_==null?v.shapeFlag&512?N.ctx.activate(v,w,T,H,V):be(v,w,T,N,R,H,V):st(_,v,V)},be=(_,v,w,T,N,R,H)=>{const B=_.component=nx(_,T,N);if(Ca(_)&&(B.ctx.renderer=X),sx(B,!1,H),B.asyncDep){if(N&&N.registerDep(B,ke,H),!_.el){const V=B.subTree=$(pt);g(null,V,v,w)}}else ke(B,_,v,w,N,R,H)},st=(_,v,w)=>{const T=v.component=_.component;if(Kb(_,v,w))if(T.asyncDep&&!T.asyncResolved){fe(T,v,w);return}else T.next=v,T.update();else v.el=_.el,T.vnode=v},ke=(_,v,w,T,N,R,H)=>{const B=()=>{if(_.isMounted){let{next:G,bu:Z,u:oe,parent:ge,vnode:Oe}=_;{const Qt=tg(_);if(Qt){G&&(G.el=Oe.el,fe(_,G,H)),Qt.asyncDep.then(()=>{_.isUnmounted||B()});return}}let Ie=G,_t;Es(_,!1),G?(G.el=Oe.el,fe(_,G,H)):G=Oe,Z&&vo(Z),(_t=G.props&&G.props.onVnodeBeforeUpdate)&&Jt(_t,ge,G,Oe),Es(_,!0);const dt=gd(_),Yt=_.subTree;_.subTree=dt,m(Yt,dt,f(Yt.el),k(Yt),_,N,R),G.el=dt.el,Ie===null&&qb(_,dt.el),oe&&yt(oe,N),(_t=G.props&&G.props.onVnodeUpdated)&&yt(()=>Jt(_t,ge,G,Oe),N)}else{let G;const{el:Z,props:oe}=v,{bm:ge,m:Oe,parent:Ie,root:_t,type:dt}=_,Yt=rr(v);Es(_,!1),ge&&vo(ge),!Yt&&(G=oe&&oe.onVnodeBeforeMount)&&Jt(G,Ie,v),Es(_,!0);{_t.ce&&_t.ce._injectChildStyle(dt);const Qt=_.subTree=gd(_);m(null,Qt,w,T,_,N,R),v.el=Qt.el}if(Oe&&yt(Oe,N),!Yt&&(G=oe&&oe.onVnodeMounted)){const Qt=v;yt(()=>Jt(G,Ie,Qt),N)}(v.shapeFlag&256||Ie&&rr(Ie.vnode)&&Ie.vnode.shapeFlag&256)&&_.a&&yt(_.a,N),_.isMounted=!0,v=w=T=null}};_.scope.on();const V=_.effect=new um(B);_.scope.off();const L=_.update=V.run.bind(V),ee=_.job=V.runIfDirty.bind(V);ee.i=_,ee.id=_.uid,V.scheduler=()=>hu(ee),Es(_,!0),L()},fe=(_,v,w)=>{v.component=_;const T=_.vnode.props;_.vnode=v,_.next=null,Pb(_,v.props,T,w),Lb(_,v.children,w),_s(),ad(_),vs()},xe=(_,v,w,T,N,R,H,B,V=!1)=>{const L=_&&_.children,ee=_?_.shapeFlag:0,G=v.children,{patchFlag:Z,shapeFlag:oe}=v;if(Z>0){if(Z&128){Vn(L,G,w,T,N,R,H,B,V);return}else if(Z&256){dn(L,G,w,T,N,R,H,B,V);return}}oe&8?(ee&16&&Et(L,N,R),G!==L&&u(w,G)):ee&16?oe&16?Vn(L,G,w,T,N,R,H,B,V):Et(L,N,R,!0):(ee&8&&u(w,""),oe&16&&D(G,w,T,N,R,H,B,V))},dn=(_,v,w,T,N,R,H,B,V)=>{_=_||li,v=v||li;const L=_.length,ee=v.length,G=Math.min(L,ee);let Z;for(Z=0;Z<G;Z++){const oe=v[Z]=V?Qn(v[Z]):tn(v[Z]);m(_[Z],oe,w,null,N,R,H,B,V)}L>ee?Et(_,N,R,!0,!1,G):D(v,w,T,N,R,H,B,V,G)},Vn=(_,v,w,T,N,R,H,B,V)=>{let L=0;const ee=v.length;let G=_.length-1,Z=ee-1;for(;L<=G&&L<=Z;){const oe=_[L],ge=v[L]=V?Qn(v[L]):tn(v[L]);if(Rs(oe,ge))m(oe,ge,w,null,N,R,H,B,V);else break;L++}for(;L<=G&&L<=Z;){const oe=_[G],ge=v[Z]=V?Qn(v[Z]):tn(v[Z]);if(Rs(oe,ge))m(oe,ge,w,null,N,R,H,B,V);else break;G--,Z--}if(L>G){if(L<=Z){const oe=Z+1,ge=oe<ee?v[oe].el:T;for(;L<=Z;)m(null,v[L]=V?Qn(v[L]):tn(v[L]),w,ge,N,R,H,B,V),L++}}else if(L>Z)for(;L<=G;)ft(_[L],N,R,!0),L++;else{const oe=L,ge=L,Oe=new Map;for(L=ge;L<=Z;L++){const vt=v[L]=V?Qn(v[L]):tn(v[L]);vt.key!=null&&Oe.set(vt.key,L)}let Ie,_t=0;const dt=Z-ge+1;let Yt=!1,Qt=0;const Hi=new Array(dt);for(L=0;L<dt;L++)Hi[L]=0;for(L=oe;L<=G;L++){const vt=_[L];if(_t>=dt){ft(vt,N,R,!0);continue}let Xt;if(vt.key!=null)Xt=Oe.get(vt.key);else for(Ie=ge;Ie<=Z;Ie++)if(Hi[Ie-ge]===0&&Rs(vt,v[Ie])){Xt=Ie;break}Xt===void 0?ft(vt,N,R,!0):(Hi[Xt-ge]=L+1,Xt>=Qt?Qt=Xt:Yt=!0,m(vt,v[Xt],w,null,N,R,H,B,V),_t++)}const kf=Yt?Ub(Hi):li;for(Ie=kf.length-1,L=dt-1;L>=0;L--){const vt=ge+L,Xt=v[vt],Af=vt+1<ee?v[vt+1].el:T;Hi[L]===0?m(null,Xt,w,Af,N,R,H,B,V):Yt&&(Ie<0||L!==kf[Ie]?qt(Xt,w,Af,2):Ie--)}}},qt=(_,v,w,T,N=null)=>{const{el:R,type:H,transition:B,children:V,shapeFlag:L}=_;if(L&6){qt(_.component.subTree,v,w,T);return}if(L&128){_.suspense.move(v,w,T);return}if(L&64){H.move(_,v,w,X);return}if(H===le){s(R,v,w);for(let G=0;G<V.length;G++)qt(V[G],v,w,T);s(_.anchor,v,w);return}if(H===ll){A(_,v,w);return}if(T!==2&&L&1&&B)if(T===0)B.beforeEnter(R),s(R,v,w),yt(()=>B.enter(R),N);else{const{leave:G,delayLeave:Z,afterLeave:oe}=B,ge=()=>s(R,v,w),Oe=()=>{G(R,()=>{ge(),oe&&oe()})};Z?Z(R,ge,Oe):Oe()}else s(R,v,w)},ft=(_,v,w,T=!1,N=!1)=>{const{type:R,props:H,ref:B,children:V,dynamicChildren:L,shapeFlag:ee,patchFlag:G,dirs:Z,cacheIndex:oe}=_;if(G===-2&&(N=!1),B!=null&&Mo(B,null,w,_,!0),oe!=null&&(v.renderCache[oe]=void 0),ee&256){v.ctx.deactivate(_);return}const ge=ee&1&&Z,Oe=!rr(_);let Ie;if(Oe&&(Ie=H&&H.onVnodeBeforeUnmount)&&Jt(Ie,v,_),ee&6)io(_.component,w,T);else{if(ee&128){_.suspense.unmount(w,T);return}ge&&Is(_,null,v,"beforeUnmount"),ee&64?_.type.remove(_,v,w,X,T):L&&!L.hasOnce&&(R!==le||G>0&&G&64)?Et(L,v,w,!1,!0):(R===le&&G&384||!N&&ee&16)&&Et(V,v,w),T&&Ys(_)}(Oe&&(Ie=H&&H.onVnodeUnmounted)||ge)&&yt(()=>{Ie&&Jt(Ie,v,_),ge&&Is(_,null,v,"unmounted")},w)},Ys=_=>{const{type:v,el:w,anchor:T,transition:N}=_;if(v===le){Qs(w,T);return}if(v===ll){O(_);return}const R=()=>{i(w),N&&!N.persisted&&N.afterLeave&&N.afterLeave()};if(_.shapeFlag&1&&N&&!N.persisted){const{leave:H,delayLeave:B}=N,V=()=>H(w,R);B?B(_.el,R,V):V()}else R()},Qs=(_,v)=>{let w;for(;_!==v;)w=d(_),i(_),_=w;i(v)},io=(_,v,w)=>{const{bum:T,scope:N,job:R,subTree:H,um:B,m:V,a:L}=_;md(V),md(L),T&&vo(T),N.stop(),R&&(R.flags|=8,ft(H,_,v,w)),B&&yt(B,v),yt(()=>{_.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},Et=(_,v,w,T=!1,N=!1,R=0)=>{for(let H=R;H<_.length;H++)ft(_[H],v,w,T,N)},k=_=>{if(_.shapeFlag&6)return k(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const v=d(_.anchor||_.el),w=v&&v[ob];return w?d(w):v};let K=!1;const W=(_,v,w)=>{_==null?v._vnode&&ft(v._vnode,null,null,!0):m(v._vnode||null,_,v,null,null,null,w),v._vnode=_,K||(K=!0,ad(),Rm(),K=!1)},X={p:m,um:ft,m:qt,r:Ys,mt:be,mc:D,pc:xe,pbc:j,n:k,o:t};return{render:W,hydrate:void 0,createApp:kb(W)}}function al({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Es({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function $b(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function eg(t,e,n=!1){const s=t.children,i=e.children;if(J(s)&&J(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Qn(i[r]),a.el=o.el),!n&&a.patchFlag!==-2&&eg(o,a)),a.type===Ta&&(a.el=o.el)}}function Ub(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function tg(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:tg(e)}function md(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Vb=Symbol.for("v-scx"),Bb=()=>At(Vb);function kn(t,e,n){return ng(t,e,n)}function ng(t,e,n=Re){const{immediate:s,deep:i,flush:r,once:o}=n,a=Ke({},n),l=e&&s||!e&&r!=="post";let c;if(Ir){if(r==="sync"){const p=Bb();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=on,p.resume=on,p.pause=on,p}}const u=Xe;a.call=(p,y,m)=>jt(p,u,y,m);let f=!1;r==="post"?a.scheduler=p=>{yt(p,u&&u.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(p,y)=>{y?p():hu(p)}),a.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const d=nb(t,e,a);return Ir&&(c?c.push(d):l&&d()),d}function jb(t,e,n){const s=this.proxy,i=He(t)?t.includes(".")?sg(s,t):()=>s[t]:t.bind(s,s);let r;ae(e)?r=e:(r=e.handler,n=e);const o=Wr(this),a=ng(i,r.bind(s),n);return o(),a}function sg(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const Hb=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Pt(e)}Modifiers`]||t[`${gs(e)}Modifiers`];function Wb(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Re;let i=n;const r=e.startsWith("update:"),o=r&&Hb(s,e.slice(7));o&&(o.trim&&(i=n.map(u=>He(u)?u.trim():u)),o.number&&(i=n.map(Ao)));let a,l=s[a=el(e)]||s[a=el(Pt(e))];!l&&r&&(l=s[a=el(gs(e))]),l&&jt(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,jt(c,t,6,i)}}function ig(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!ae(t)){const l=c=>{const u=ig(c,e,!0);u&&(a=!0,Ke(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(Ne(t)&&s.set(t,null),null):(J(r)?r.forEach(l=>o[l]=null):Ke(o,r),Ne(t)&&s.set(t,o),o)}function Sa(t,e){return!t||!ga(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ce(t,e[0].toLowerCase()+e.slice(1))||Ce(t,gs(e))||Ce(t,e))}function gd(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:p,ctx:y,inheritAttrs:m}=t,x=Oo(t);let g,b;try{if(n.shapeFlag&4){const O=i||s,z=O;g=tn(c.call(z,O,u,f,p,d,y)),b=a}else{const O=e;g=tn(O.length>1?O(f,{attrs:a,slots:o,emit:l}):O(f,null)),b=e.props?a:zb(a)}}catch(O){ar.length=0,wa(O,t,1),g=$(pt)}let A=g;if(b&&m!==!1){const O=Object.keys(b),{shapeFlag:z}=A;O.length&&z&7&&(r&&O.some(tu)&&(b=Gb(b,r)),A=fs(A,b,!1,!0))}return n.dirs&&(A=fs(A,null,!1,!0),A.dirs=A.dirs?A.dirs.concat(n.dirs):n.dirs),n.transition&&Bs(A,n.transition),g=A,Oo(x),g}const zb=t=>{let e;for(const n in t)(n==="class"||n==="style"||ga(n))&&((e||(e={}))[n]=t[n]);return e},Gb=(t,e)=>{const n={};for(const s in t)(!tu(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Kb(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?_d(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==s[d]&&!Sa(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?_d(s,o,c):!0:!!o;return!1}function _d(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Sa(n,r))return!0}return!1}function qb({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const rg=t=>t.__isSuspense;function Yb(t,e){e&&e.pendingBranch?J(t)?e.effects.push(...t):e.effects.push(t):rb(t)}const le=Symbol.for("v-fgt"),Ta=Symbol.for("v-txt"),pt=Symbol.for("v-cmt"),ll=Symbol.for("v-stc"),ar=[];let xt=null;function C(t=!1){ar.push(xt=t?null:[])}function Qb(){ar.pop(),xt=ar[ar.length-1]||null}let Cr=1;function vd(t,e=!1){Cr+=t,t<0&&xt&&e&&(xt.hasOnce=!0)}function og(t){return t.dynamicChildren=Cr>0?xt||li:null,Qb(),Cr>0&&xt&&xt.push(t),t}function E(t,e,n,s,i,r){return og(h(t,e,n,s,i,r,!0))}function qe(t,e,n,s,i){return og($(t,e,n,s,i,!0))}function Do(t){return t?t.__v_isVNode===!0:!1}function Rs(t,e){return t.type===e.type&&t.key===e.key}const ag=({key:t})=>t??null,bo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?He(t)||je(t)||ae(t)?{i:at,r:t,k:e,f:!!n}:t:null);function h(t,e=null,n=null,s=0,i=null,r=t===le?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ag(e),ref:e&&bo(e),scopeId:Nm,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:at};return a?(vu(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=He(n)?8:16),Cr>0&&!o&&xt&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&xt.push(l),l}const $=Xb;function Xb(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===yb)&&(t=pt),Do(t)){const a=fs(t,e,!0);return n&&vu(a,n),Cr>0&&!r&&xt&&(a.shapeFlag&6?xt[xt.indexOf(t)]=a:xt.push(a)),a.patchFlag=-2,a}if(lx(t)&&(t=t.__vccOpts),e){e=Jb(e);let{class:a,style:l}=e;a&&!He(a)&&(e.class=mt(a)),Ne(l)&&(fu(l)&&!J(l)&&(l=Ke({},l)),e.style=ba(l))}const o=He(t)?1:rg(t)?128:Om(t)?64:Ne(t)?4:ae(t)?2:0;return h(t,e,n,s,i,o,r,!0)}function Jb(t){return t?fu(t)||Km(t)?Ke({},t):t:null}function fs(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:a,transition:l}=t,c=e?Zb(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&ag(c),ref:e&&e.ref?n&&r?J(r)?r.concat(bo(e)):[r,bo(e)]:bo(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==le?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&fs(t.ssContent),ssFallback:t.ssFallback&&fs(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&s&&Bs(u,l.clone(u)),u}function Fe(t=" ",e=0){return $(Ta,null,t,e)}function Ut(t="",e=!1){return e?(C(),qe(pt,null,t)):$(pt,null,t)}function tn(t){return t==null||typeof t=="boolean"?$(pt):J(t)?$(le,null,t.slice()):Do(t)?Qn(t):$(Ta,null,String(t))}function Qn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:fs(t)}function vu(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(J(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),vu(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!Km(e)?e._ctx=at:i===3&&at&&(at.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ae(e)?(e={default:e,_ctx:at},n=32):(e=String(e),s&64?(n=16,e=[Fe(e)]):n=8);t.children=e,t.shapeFlag|=n}function Zb(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=mt([e.class,s.class]));else if(i==="style")e.style=ba([e.style,s.style]);else if(ga(i)){const r=e[i],o=s[i];o&&r!==o&&!(J(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Jt(t,e,n,s=null){jt(t,e,7,[n,s])}const ex=Wm();let tx=0;function nx(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||ex,r={uid:tx++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new am(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ym(s,i),emitsOptions:ig(s,i),emit:null,emitted:null,propsDefaults:Re,inheritAttrs:s.inheritAttrs,ctx:Re,data:Re,props:Re,attrs:Re,slots:Re,refs:Re,setupState:Re,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Wb.bind(null,r),t.ce&&t.ce(r),r}let Xe=null;const lg=()=>Xe||at;let Fo,lc;{const t=ya(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};Fo=e("__VUE_INSTANCE_SETTERS__",n=>Xe=n),lc=e("__VUE_SSR_SETTERS__",n=>Ir=n)}const Wr=t=>{const e=Xe;return Fo(t),t.scope.on(),()=>{t.scope.off(),Fo(e)}},yd=()=>{Xe&&Xe.scope.off(),Fo(null)};function cg(t){return t.vnode.shapeFlag&4}let Ir=!1;function sx(t,e=!1,n=!1){e&&lc(e);const{props:s,children:i}=t.vnode,r=cg(t);Rb(t,s,r,e),Mb(t,i,n);const o=r?ix(t,e):void 0;return e&&lc(!1),o}function ix(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,xb);const{setup:s}=n;if(s){_s();const i=t.setupContext=s.length>1?ox(t):null,r=Wr(t),o=Hr(s,t,0,[t.props,i]),a=em(o);if(vs(),r(),(a||t.sp)&&!rr(t)&&Um(t),a){if(o.then(yd,yd),e)return o.then(l=>{bd(t,l)}).catch(l=>{wa(l,t,0)});t.asyncDep=o}else bd(t,o)}else ug(t)}function bd(t,e,n){ae(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ne(e)&&(t.setupState=Tm(e)),ug(t)}function ug(t,e,n){const s=t.type;t.render||(t.render=s.render||on);{const i=Wr(t);_s();try{wb(t)}finally{vs(),i()}}}const rx={get(t,e){return et(t,"get",""),t[e]}};function ox(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,rx),slots:t.slots,emit:t.emit,expose:e}}function ka(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Tm(du(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in or)return or[n](t)},has(e,n){return n in e||n in or}})):t.proxy}function ax(t,e=!0){return ae(t)?t.displayName||t.name:t.name||e&&t.__name}function lx(t){return ae(t)&&"__vccOpts"in t}const ne=(t,e)=>eb(t,e,Ir);function Aa(t,e,n){const s=arguments.length;return s===2?Ne(e)&&!J(e)?Do(e)?$(t,null,[e]):$(t,e):$(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Do(n)&&(n=[n]),$(t,e,n))}const cx="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let cc;const xd=typeof window<"u"&&window.trustedTypes;if(xd)try{cc=xd.createPolicy("vue",{createHTML:t=>t})}catch{}const fg=cc?t=>cc.createHTML(t):t=>t,ux="http://www.w3.org/2000/svg",fx="http://www.w3.org/1998/Math/MathML",mn=typeof document<"u"?document:null,wd=mn&&mn.createElement("template"),dx={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?mn.createElementNS(ux,t):e==="mathml"?mn.createElementNS(fx,t):n?mn.createElement(t,{is:n}):mn.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>mn.createTextNode(t),createComment:t=>mn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>mn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{wd.innerHTML=fg(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const a=wd.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},jn="transition",zi="animation",vi=Symbol("_vtc"),dg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},hg=Ke({},Lm,dg),hx=t=>(t.displayName="Transition",t.props=hg,t),yu=hx((t,{slots:e})=>Aa(lb,pg(t),e)),Ss=(t,e=[])=>{J(t)?t.forEach(n=>n(...e)):t&&t(...e)},Cd=t=>t?J(t)?t.some(e=>e.length>1):t.length>1:!1;function pg(t){const e={};for(const U in t)U in dg||(e[U]=t[U]);if(t.css===!1)return e;const{name:n="v",type:s,duration:i,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,y=px(i),m=y&&y[0],x=y&&y[1],{onBeforeEnter:g,onEnter:b,onEnterCancelled:A,onLeave:O,onLeaveCancelled:z,onBeforeAppear:q=g,onAppear:S=b,onAppearCancelled:D=A}=e,P=(U,ue,be,st)=>{U._enterCancelled=st,Gn(U,ue?u:a),Gn(U,ue?c:o),be&&be()},j=(U,ue)=>{U._isLeaving=!1,Gn(U,f),Gn(U,p),Gn(U,d),ue&&ue()},re=U=>(ue,be)=>{const st=U?S:b,ke=()=>P(ue,U,be);Ss(st,[ue,ke]),Id(()=>{Gn(ue,U?l:r),Zt(ue,U?u:a),Cd(st)||Ed(ue,s,m,ke)})};return Ke(e,{onBeforeEnter(U){Ss(g,[U]),Zt(U,r),Zt(U,o)},onBeforeAppear(U){Ss(q,[U]),Zt(U,l),Zt(U,c)},onEnter:re(!1),onAppear:re(!0),onLeave(U,ue){U._isLeaving=!0;const be=()=>j(U,ue);Zt(U,f),U._enterCancelled?(Zt(U,d),uc()):(uc(),Zt(U,d)),Id(()=>{U._isLeaving&&(Gn(U,f),Zt(U,p),Cd(O)||Ed(U,s,x,be))}),Ss(O,[U,be])},onEnterCancelled(U){P(U,!1,void 0,!0),Ss(A,[U])},onAppearCancelled(U){P(U,!0,void 0,!0),Ss(D,[U])},onLeaveCancelled(U){j(U),Ss(z,[U])}})}function px(t){if(t==null)return null;if(Ne(t))return[cl(t.enter),cl(t.leave)];{const e=cl(t);return[e,e]}}function cl(t){return yy(t)}function Zt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[vi]||(t[vi]=new Set)).add(e)}function Gn(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const n=t[vi];n&&(n.delete(e),n.size||(t[vi]=void 0))}function Id(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let mx=0;function Ed(t,e,n,s){const i=t._endId=++mx,r=()=>{i===t._endId&&s()};if(n!=null)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=mg(t,e);if(!o)return s();const c=o+"end";let u=0;const f=()=>{t.removeEventListener(c,d),r()},d=p=>{p.target===t&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),t.addEventListener(c,d)}function mg(t,e){const n=window.getComputedStyle(t),s=y=>(n[y]||"").split(", "),i=s(`${jn}Delay`),r=s(`${jn}Duration`),o=Sd(i,r),a=s(`${zi}Delay`),l=s(`${zi}Duration`),c=Sd(a,l);let u=null,f=0,d=0;e===jn?o>0&&(u=jn,f=o,d=r.length):e===zi?c>0&&(u=zi,f=c,d=l.length):(f=Math.max(o,c),u=f>0?o>c?jn:zi:null,d=u?u===jn?r.length:l.length:0);const p=u===jn&&/\b(transform|all)(,|$)/.test(s(`${jn}Property`).toString());return{type:u,timeout:f,propCount:d,hasTransform:p}}function Sd(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>Td(n)+Td(t[s])))}function Td(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function uc(){return document.body.offsetHeight}function gx(t,e,n){const s=t[vi];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const $o=Symbol("_vod"),gg=Symbol("_vsh"),_x={beforeMount(t,{value:e},{transition:n}){t[$o]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Gi(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Gi(t,!0),s.enter(t)):s.leave(t,()=>{Gi(t,!1)}):Gi(t,e))},beforeUnmount(t,{value:e}){Gi(t,e)}};function Gi(t,e){t.style.display=e?t[$o]:"none",t[gg]=!e}const vx=Symbol(""),yx=/(^|;)\s*display\s*:/;function bx(t,e,n){const s=t.style,i=He(n);let r=!1;if(n&&!i){if(e)if(He(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&xo(s,a,"")}else for(const o in e)n[o]==null&&xo(s,o,"");for(const o in n)o==="display"&&(r=!0),xo(s,o,n[o])}else if(i){if(e!==n){const o=s[vx];o&&(n+=";"+o),s.cssText=n,r=yx.test(n)}}else e&&t.removeAttribute("style");$o in t&&(t[$o]=r?s.display:"",t[gg]&&(s.display="none"))}const kd=/\s*!important$/;function xo(t,e,n){if(J(n))n.forEach(s=>xo(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=xx(t,e);kd.test(n)?t.setProperty(gs(s),n.replace(kd,""),"important"):t[s]=n}}const Ad=["Webkit","Moz","ms"],ul={};function xx(t,e){const n=ul[e];if(n)return n;let s=Pt(e);if(s!=="filter"&&s in t)return ul[e]=s;s=va(s);for(let i=0;i<Ad.length;i++){const r=Ad[i]+s;if(r in t)return ul[e]=r}return e}const Rd="http://www.w3.org/1999/xlink";function Pd(t,e,n,s,i,r=Ey(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Rd,e.slice(6,e.length)):t.setAttributeNS(Rd,e,n):n==null||r&&!im(n)?t.removeAttribute(e):t.setAttribute(e,r?"":ln(n)?String(n):n)}function Nd(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?fg(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=im(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function yn(t,e,n,s){t.addEventListener(e,n,s)}function wx(t,e,n,s){t.removeEventListener(e,n,s)}const Od=Symbol("_vei");function Cx(t,e,n,s,i=null){const r=t[Od]||(t[Od]={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=Ix(e);if(s){const c=r[e]=Tx(s,i);yn(t,a,c,l)}else o&&(wx(t,a,o,l),r[e]=void 0)}}const Md=/(?:Once|Passive|Capture)$/;function Ix(t){let e;if(Md.test(t)){e={};let s;for(;s=t.match(Md);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):gs(t.slice(2)),e]}let fl=0;const Ex=Promise.resolve(),Sx=()=>fl||(Ex.then(()=>fl=0),fl=Date.now());function Tx(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;jt(kx(s,n.value),e,5,[s])};return n.value=t,n.attached=Sx(),n}function kx(t,e){if(J(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Ld=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Ax=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?gx(t,s,o):e==="style"?bx(t,n,s):ga(e)?tu(e)||Cx(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Rx(t,e,s,o))?(Nd(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Pd(t,e,s,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!He(s))?Nd(t,Pt(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Pd(t,e,s,o))};function Rx(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Ld(e)&&ae(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Ld(e)&&He(n)?!1:e in t}const _g=new WeakMap,vg=new WeakMap,Uo=Symbol("_moveCb"),Dd=Symbol("_enterCb"),Px=t=>(delete t.props.mode,t),Nx=Px({name:"TransitionGroup",props:Ke({},hg,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=lg(),s=Mm();let i,r;return gu(()=>{if(!i.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!Dx(i[0].el,n.vnode.el,o))return;i.forEach(Ox),i.forEach(Mx);const a=i.filter(Lx);uc(),a.forEach(l=>{const c=l.el,u=c.style;Zt(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const f=c[Uo]=d=>{d&&d.target!==c||(!d||/transform$/.test(d.propertyName))&&(c.removeEventListener("transitionend",f),c[Uo]=null,Gn(c,o))};c.addEventListener("transitionend",f)})}),()=>{const o=_e(t),a=pg(o);let l=o.tag||le;if(i=[],r)for(let c=0;c<r.length;c++){const u=r[c];u.el&&u.el instanceof Element&&(i.push(u),Bs(u,wr(u,a,s,n)),_g.set(u,u.el.getBoundingClientRect()))}r=e.default?pu(e.default()):[];for(let c=0;c<r.length;c++){const u=r[c];u.key!=null&&Bs(u,wr(u,a,s,n))}return $(l,null,r)}}}),yg=Nx;function Ox(t){const e=t.el;e[Uo]&&e[Uo](),e[Dd]&&e[Dd]()}function Mx(t){vg.set(t,t.el.getBoundingClientRect())}function Lx(t){const e=_g.get(t),n=vg.get(t),s=e.left-n.left,i=e.top-n.top;if(s||i){const r=t.el.style;return r.transform=r.webkitTransform=`translate(${s}px,${i}px)`,r.transitionDuration="0s",t}}function Dx(t,e,n){const s=t.cloneNode(),i=t[vi];i&&i.forEach(a=>{a.split(/\s+/).forEach(l=>l&&s.classList.remove(l))}),n.split(/\s+/).forEach(a=>a&&s.classList.add(a)),s.style.display="none";const r=e.nodeType===1?e:e.parentNode;r.appendChild(s);const{hasTransform:o}=mg(s);return r.removeChild(s),o}const ds=t=>{const e=t.props["onUpdate:modelValue"]||!1;return J(e)?n=>vo(e,n):e};function Fx(t){t.target.composing=!0}function Fd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Rt=Symbol("_assign"),We={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[Rt]=ds(i);const r=s||i.props&&i.props.type==="number";yn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=Ao(a)),t[Rt](a)}),n&&yn(t,"change",()=>{t.value=t.value.trim()}),e||(yn(t,"compositionstart",Fx),yn(t,"compositionend",Fd),yn(t,"change",Fd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(t[Rt]=ds(o),t.composing)return;const a=(r||t.type==="number")&&!/^0\d/.test(t.value)?Ao(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===l)||(t.value=l))}},bu={deep:!0,created(t,e,n){t[Rt]=ds(n),yn(t,"change",()=>{const s=t._modelValue,i=yi(t),r=t.checked,o=t[Rt];if(J(s)){const a=iu(s,i),l=a!==-1;if(r&&!l)o(s.concat(i));else if(!r&&l){const c=[...s];c.splice(a,1),o(c)}}else if(Mi(s)){const a=new Set(s);r?a.add(i):a.delete(i),o(a)}else o(bg(t,r))})},mounted:$d,beforeUpdate(t,e,n){t[Rt]=ds(n),$d(t,e,n)}};function $d(t,{value:e,oldValue:n},s){t._modelValue=e;let i;if(J(e))i=iu(e,s.props.value)>-1;else if(Mi(e))i=e.has(s.props.value);else{if(e===n)return;i=Us(e,bg(t,!0))}t.checked!==i&&(t.checked=i)}const $x={created(t,{value:e},n){t.checked=Us(e,n.props.value),t[Rt]=ds(n),yn(t,"change",()=>{t[Rt](yi(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t[Rt]=ds(s),e!==n&&(t.checked=Us(e,s.props.value))}},ri={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const i=Mi(e);yn(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Ao(yi(o)):yi(o));t[Rt](t.multiple?i?new Set(r):r:r[0]),t._assigning=!0,ys(()=>{t._assigning=!1})}),t[Rt]=ds(s)},mounted(t,{value:e}){Ud(t,e)},beforeUpdate(t,e,n){t[Rt]=ds(n)},updated(t,{value:e}){t._assigning||Ud(t,e)}};function Ud(t,e){const n=t.multiple,s=J(e);if(!(n&&!s&&!Mi(e))){for(let i=0,r=t.options.length;i<r;i++){const o=t.options[i],a=yi(o);if(n)if(s){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=iu(e,a)>-1}else o.selected=e.has(a);else if(Us(yi(o),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function yi(t){return"_value"in t?t._value:t.value}function bg(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const dl={created(t,e,n){fo(t,e,n,null,"created")},mounted(t,e,n){fo(t,e,n,null,"mounted")},beforeUpdate(t,e,n,s){fo(t,e,n,s,"beforeUpdate")},updated(t,e,n,s){fo(t,e,n,s,"updated")}};function Ux(t,e){switch(t){case"SELECT":return ri;case"TEXTAREA":return We;default:switch(e){case"checkbox":return bu;case"radio":return $x;default:return We}}}function fo(t,e,n,s,i){const o=Ux(t.tagName,n.props&&n.props.type)[i];o&&o(t,e,n,s)}const Vx={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},bi=(t,e)=>{const n=t._withKeys||(t._withKeys={}),s=e.join(".");return n[s]||(n[s]=i=>{if(!("key"in i))return;const r=gs(i.key);if(e.some(o=>o===r||Vx[o]===r))return t(i)})},Bx=Ke({patchProp:Ax},dx);let Vd;function jx(){return Vd||(Vd=Db(Bx))}const Hx=(...t)=>{const e=jx().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=zx(s);if(!i)return;const r=e._component;!ae(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,Wx(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Wx(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function zx(t){return He(t)?document.querySelector(t):t}function Bd(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,s)}return n}function bn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Bd(Object(n),!0).forEach(function(s){ht(t,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Bd(Object(n)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(n,s))})}return t}function Gx(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var s=n.call(t,e);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Kx(t){var e=Gx(t,"string");return typeof e=="symbol"?e:e+""}function Vo(t){"@babel/helpers - typeof";return Vo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Vo(t)}function ht(t,e,n){return e=Kx(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function qx(t,e){if(t==null)return{};var n={};for(var s in t)if(Object.prototype.hasOwnProperty.call(t,s)){if(e.indexOf(s)>=0)continue;n[s]=t[s]}return n}function Yx(t,e){if(t==null)return{};var n=qx(t,e),s,i;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)s=r[i],!(e.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(t,s)&&(n[s]=t[s])}return n}var Qx=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},xg={exports:{}};(function(t){(function(e){var n=function(g,b,A){if(!c(b)||f(b)||d(b)||p(b)||l(b))return b;var O,z=0,q=0;if(u(b))for(O=[],q=b.length;z<q;z++)O.push(n(g,b[z],A));else{O={};for(var S in b)Object.prototype.hasOwnProperty.call(b,S)&&(O[g(S,A)]=n(g,b[S],A))}return O},s=function(g,b){b=b||{};var A=b.separator||"_",O=b.split||/(?=[A-Z])/;return g.split(O).join(A)},i=function(g){return y(g)?g:(g=g.replace(/[\-_\s]+(.)?/g,function(b,A){return A?A.toUpperCase():""}),g.substr(0,1).toLowerCase()+g.substr(1))},r=function(g){var b=i(g);return b.substr(0,1).toUpperCase()+b.substr(1)},o=function(g,b){return s(g,b).toLowerCase()},a=Object.prototype.toString,l=function(g){return typeof g=="function"},c=function(g){return g===Object(g)},u=function(g){return a.call(g)=="[object Array]"},f=function(g){return a.call(g)=="[object Date]"},d=function(g){return a.call(g)=="[object RegExp]"},p=function(g){return a.call(g)=="[object Boolean]"},y=function(g){return g=g-0,g===g},m=function(g,b){var A=b&&"process"in b?b.process:b;return typeof A!="function"?g:function(O,z){return A(O,g,z)}},x={camelize:i,decamelize:o,pascalize:r,depascalize:o,camelizeKeys:function(g,b){return n(m(i,b),g)},decamelizeKeys:function(g,b){return n(m(o,b),g,b)},pascalizeKeys:function(g,b){return n(m(r,b),g)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=x:e.humps=x})(Qx)})(xg);var Xx=xg.exports,Jx=["class","style"];function Zx(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var s=n.indexOf(":"),i=Xx.camelize(n.slice(0,s)),r=n.slice(s+1).trim();return e[i]=r,e},{})}function ew(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function wg(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var s=(t.children||[]).map(function(l){return wg(l)}),i=Object.keys(t.attributes||{}).reduce(function(l,c){var u=t.attributes[c];switch(c){case"class":l.class=ew(u);break;case"style":l.style=Zx(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var r=n.style,o=r===void 0?{}:r,a=Yx(n,Jx);return Aa(t.tag,bn(bn(bn({},e),{},{class:i.class,style:bn(bn({},i.style),o)},i.attrs),a),s)}var Cg=!1;try{Cg=!0}catch{}function tw(){if(!Cg&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function hl(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?ht({},t,e):{}}function nw(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},ht(ht(ht(ht(ht(ht(ht(ht(ht(ht(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),ht(ht(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(s){return n[s]?s:null}).filter(function(s){return s})}function jd(t){if(t&&Vo(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Zl.icon)return Zl.icon(t);if(t===null)return null;if(Vo(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var sw=mu({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var s=n.attrs,i=ne(function(){return jd(e.icon)}),r=ne(function(){return hl("classes",nw(e))}),o=ne(function(){return hl("transform",typeof e.transform=="string"?Zl.transform(e.transform):e.transform)}),a=ne(function(){return hl("mask",jd(e.mask))}),l=ne(function(){return cy(i.value,bn(bn(bn(bn({},r.value),o.value),a.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});kn(l,function(u){if(!u)return tw("Could not find one or more icon(s)",i.value,a.value)},{immediate:!0});var c=ne(function(){return l.value?wg(l.value.abstract[0],{},s):null});return function(){return c.value}}});/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Ig;const Ra=t=>Ig=t,Eg=Symbol();function fc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var lr;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(lr||(lr={}));function iw(){const t=lm(!0),e=t.run(()=>se({}));let n=[],s=[];const i=du({install(r){Ra(i),i._a=r,r.provide(Eg,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return this._a?n.push(r):s.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const Sg=()=>{};function Hd(t,e,n,s=Sg){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&cm()&&Ty(i),i}function Js(t,...e){t.slice().forEach(n=>{n(...e)})}const rw=t=>t(),Wd=Symbol(),pl=Symbol();function dc(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,s)=>t.set(s,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];fc(i)&&fc(s)&&t.hasOwnProperty(n)&&!je(s)&&!ns(s)?t[n]=dc(i,s):t[n]=s}return t}const ow=Symbol();function aw(t){return!fc(t)||!t.hasOwnProperty(ow)}const{assign:Kn}=Object;function lw(t){return!!(je(t)&&t.effect)}function cw(t,e,n,s){const{state:i,actions:r,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=i?i():{});const u=Qy(n.state.value[t]);return Kn(u,r,Object.keys(o||{}).reduce((f,d)=>(f[d]=du(ne(()=>{Ra(n);const p=n._s.get(t);return o[d].call(p,p)})),f),{}))}return l=Tg(t,c,e,n,s,!0),l}function Tg(t,e,n={},s,i,r){let o;const a=Kn({actions:{}},n),l={deep:!0};let c,u,f=[],d=[],p;const y=s.state.value[t];!r&&!y&&(s.state.value[t]={}),se({});let m;function x(D){let P;c=u=!1,typeof D=="function"?(D(s.state.value[t]),P={type:lr.patchFunction,storeId:t,events:p}):(dc(s.state.value[t],D),P={type:lr.patchObject,payload:D,storeId:t,events:p});const j=m=Symbol();ys().then(()=>{m===j&&(c=!0)}),u=!0,Js(f,P,s.state.value[t])}const g=r?function(){const{state:P}=n,j=P?P():{};this.$patch(re=>{Kn(re,j)})}:Sg;function b(){o.stop(),f=[],d=[],s._s.delete(t)}const A=(D,P="")=>{if(Wd in D)return D[pl]=P,D;const j=function(){Ra(s);const re=Array.from(arguments),U=[],ue=[];function be(fe){U.push(fe)}function st(fe){ue.push(fe)}Js(d,{args:re,name:j[pl],store:z,after:be,onError:st});let ke;try{ke=D.apply(this&&this.$id===t?this:z,re)}catch(fe){throw Js(ue,fe),fe}return ke instanceof Promise?ke.then(fe=>(Js(U,fe),fe)).catch(fe=>(Js(ue,fe),Promise.reject(fe))):(Js(U,ke),ke)};return j[Wd]=!0,j[pl]=P,j},O={_p:s,$id:t,$onAction:Hd.bind(null,d),$patch:x,$reset:g,$subscribe(D,P={}){const j=Hd(f,D,P.detached,()=>re()),re=o.run(()=>kn(()=>s.state.value[t],U=>{(P.flush==="sync"?u:c)&&D({storeId:t,type:lr.direct,events:p},U)},Kn({},l,P)));return j},$dispose:b},z=jr(O);s._s.set(t,z);const S=(s._a&&s._a.runWithContext||rw)(()=>s._e.run(()=>(o=lm()).run(()=>e({action:A}))));for(const D in S){const P=S[D];if(je(P)&&!lw(P)||ns(P))r||(y&&aw(P)&&(je(P)?P.value=y[D]:dc(P,y[D])),s.state.value[t][D]=P);else if(typeof P=="function"){const j=A(P,D);S[D]=j,a.actions[D]=P}}return Kn(z,S),Kn(_e(z),S),Object.defineProperty(z,"$state",{get:()=>s.state.value[t],set:D=>{x(P=>{Kn(P,D)})}}),s._p.forEach(D=>{Kn(z,o.run(()=>D({store:z,app:s._a,pinia:s,options:a})))}),y&&r&&n.hydrate&&n.hydrate(z.$state,y),c=!0,u=!0,z}/*! #__NO_SIDE_EFFECTS__ */function bs(t,e,n){let s,i;const r=typeof e=="function";typeof t=="string"?(s=t,i=r?n:e):(i=t,s=t.id);function o(a,l){const c=Ab();return a=a||(c?At(Eg,null):null),a&&Ra(a),a=Ig,a._s.has(s)||(r?Tg(s,e,i,a):cw(s,i,a)),a._s.get(s)}return o.$id=s,o}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const ni=typeof document<"u";function kg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function uw(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&kg(t.default)}const we=Object.assign;function ml(t,e){const n={};for(const s in e){const i=e[s];n[s]=Wt(i)?i.map(t):t(i)}return n}const cr=()=>{},Wt=Array.isArray,Ag=/#/g,fw=/&/g,dw=/\//g,hw=/=/g,pw=/\?/g,Rg=/\+/g,mw=/%5B/g,gw=/%5D/g,Pg=/%5E/g,_w=/%60/g,Ng=/%7B/g,vw=/%7C/g,Og=/%7D/g,yw=/%20/g;function xu(t){return encodeURI(""+t).replace(vw,"|").replace(mw,"[").replace(gw,"]")}function bw(t){return xu(t).replace(Ng,"{").replace(Og,"}").replace(Pg,"^")}function hc(t){return xu(t).replace(Rg,"%2B").replace(yw,"+").replace(Ag,"%23").replace(fw,"%26").replace(_w,"`").replace(Ng,"{").replace(Og,"}").replace(Pg,"^")}function xw(t){return hc(t).replace(hw,"%3D")}function ww(t){return xu(t).replace(Ag,"%23").replace(pw,"%3F")}function Cw(t){return t==null?"":ww(t).replace(dw,"%2F")}function Er(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Iw=/\/$/,Ew=t=>t.replace(Iw,"");function gl(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=Aw(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:Er(o)}}function Sw(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function zd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Tw(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&xi(e.matched[s],n.matched[i])&&Mg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function xi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Mg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!kw(t[n],e[n]))return!1;return!0}function kw(t,e){return Wt(t)?Gd(t,e):Wt(e)?Gd(e,t):t===e}function Gd(t,e){return Wt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Aw(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o).join("/")}const Hn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Sr;(function(t){t.pop="pop",t.push="push"})(Sr||(Sr={}));var ur;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ur||(ur={}));function Rw(t){if(!t)if(ni){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Ew(t)}const Pw=/^[^#]+#/;function Nw(t,e){return t.replace(Pw,"#")+e}function Ow(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Pa=()=>({left:window.scrollX,top:window.scrollY});function Mw(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=Ow(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Kd(t,e){return(history.state?history.state.position-e:-1)+t}const pc=new Map;function Lw(t,e){pc.set(t,e)}function Dw(t){const e=pc.get(t);return pc.delete(t),e}let Fw=()=>location.protocol+"//"+location.host;function Lg(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),zd(l,"")}return zd(n,t)+s+i}function $w(t,e,n,s){let i=[],r=[],o=null;const a=({state:d})=>{const p=Lg(t,location),y=n.value,m=e.value;let x=0;if(d){if(n.value=p,e.value=d,o&&o===y){o=null;return}x=m?d.position-m.position:0}else s(p);i.forEach(g=>{g(n.value,y,{delta:x,type:Sr.pop,direction:x?x>0?ur.forward:ur.back:ur.unknown})})};function l(){o=n.value}function c(d){i.push(d);const p=()=>{const y=i.indexOf(d);y>-1&&i.splice(y,1)};return r.push(p),p}function u(){const{history:d}=window;d.state&&d.replaceState(we({},d.state,{scroll:Pa()}),"")}function f(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function qd(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?Pa():null}}function Uw(t){const{history:e,location:n}=window,s={value:Lg(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const f=t.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:Fw()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),i.value=c}catch(p){console.error(p),n[u?"replace":"assign"](d)}}function o(l,c){const u=we({},e.state,qd(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=we({},i.value,e.state,{forward:l,scroll:Pa()});r(u.current,u,!0);const f=we({},qd(s.value,l,null),{position:u.position+1},c);r(l,f,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function Vw(t){t=Rw(t);const e=Uw(t),n=$w(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=we({location:"",base:t,go:s,createHref:Nw.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function Bw(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),Vw(t)}function jw(t){return typeof t=="string"||t&&typeof t=="object"}function Dg(t){return typeof t=="string"||typeof t=="symbol"}const Fg=Symbol("");var Yd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Yd||(Yd={}));function wi(t,e){return we(new Error,{type:t,[Fg]:!0},e)}function pn(t,e){return t instanceof Error&&Fg in t&&(e==null||!!(t.type&e))}const Qd="[^/]+?",Hw={sensitive:!1,strict:!1,start:!0,end:!0},Ww=/[.+*?^${}()[\]/\\]/g;function zw(t,e){const n=we({},Hw,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let f=0;f<c.length;f++){const d=c[f];let p=40+(n.sensitive?.25:0);if(d.type===0)f||(i+="/"),i+=d.value.replace(Ww,"\\$&"),p+=40;else if(d.type===1){const{value:y,repeatable:m,optional:x,regexp:g}=d;r.push({name:y,repeatable:m,optional:x});const b=g||Qd;if(b!==Qd){p+=10;try{new RegExp(`(${b})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${y}" (${b}): `+O.message)}}let A=m?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;f||(A=x&&c.length<2?`(?:/${A})`:"/"+A),x&&(A+="?"),i+=A,p+=20,x&&(p+=-8),m&&(p+=-20),b===".*"&&(p+=-50)}u.push(p)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",y=r[d-1];f[y.name]=p&&y.repeatable?p.split("/"):p}return f}function l(c){let u="",f=!1;for(const d of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:y,repeatable:m,optional:x}=p,g=y in c?c[y]:"";if(Wt(g)&&!m)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const b=Wt(g)?g.join("/"):g;if(!b)if(x)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${y}"`);u+=b}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function Gw(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function $g(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=Gw(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Xd(s))return 1;if(Xd(i))return-1}return i.length-s.length}function Xd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Kw={type:0,value:""},qw=/[a-zA-Z0-9_]/;function Yw(t){if(!t)return[[]];if(t==="/")return[[Kw]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function f(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),n=1):d();break;case 4:d(),n=s;break;case 1:l==="("?n=2:qw.test(l)?d():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),i}function Qw(t,e,n){const s=zw(Yw(t.path),n),i=we(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function Xw(t,e){const n=[],s=new Map;e=th({strict:!1,end:!0,sensitive:!1},e);function i(f){return s.get(f)}function r(f,d,p){const y=!p,m=Zd(f);m.aliasOf=p&&p.record;const x=th(e,f),g=[m];if("alias"in f){const O=typeof f.alias=="string"?[f.alias]:f.alias;for(const z of O)g.push(Zd(we({},m,{components:p?p.record.components:m.components,path:z,aliasOf:p?p.record:m})))}let b,A;for(const O of g){const{path:z}=O;if(d&&z[0]!=="/"){const q=d.record.path,S=q[q.length-1]==="/"?"":"/";O.path=d.record.path+(z&&S+z)}if(b=Qw(O,d,x),p?p.alias.push(b):(A=A||b,A!==b&&A.alias.push(b),y&&f.name&&!eh(b)&&o(f.name)),Ug(b)&&l(b),m.children){const q=m.children;for(let S=0;S<q.length;S++)r(q[S],b,p&&p.children[S])}p=p||b}return A?()=>{o(A)}:cr}function o(f){if(Dg(f)){const d=s.get(f);d&&(s.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&s.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function l(f){const d=eC(f,n);n.splice(d,0,f),f.record.name&&!eh(f)&&s.set(f.record.name,f)}function c(f,d){let p,y={},m,x;if("name"in f&&f.name){if(p=s.get(f.name),!p)throw wi(1,{location:f});x=p.record.name,y=we(Jd(d.params,p.keys.filter(A=>!A.optional).concat(p.parent?p.parent.keys.filter(A=>A.optional):[]).map(A=>A.name)),f.params&&Jd(f.params,p.keys.map(A=>A.name))),m=p.stringify(y)}else if(f.path!=null)m=f.path,p=n.find(A=>A.re.test(m)),p&&(y=p.parse(m),x=p.record.name);else{if(p=d.name?s.get(d.name):n.find(A=>A.re.test(d.path)),!p)throw wi(1,{location:f,currentLocation:d});x=p.record.name,y=we({},d.params,f.params),m=p.stringify(y)}const g=[];let b=p;for(;b;)g.unshift(b.record),b=b.parent;return{name:x,path:m,params:y,matched:g,meta:Zw(g)}}t.forEach(f=>r(f));function u(){n.length=0,s.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:i}}function Jd(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Zd(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Jw(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Jw(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function eh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Zw(t){return t.reduce((e,n)=>we(e,n.meta),{})}function th(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function eC(t,e){let n=0,s=e.length;for(;n!==s;){const r=n+s>>1;$g(t,e[r])<0?s=r:n=r+1}const i=tC(t);return i&&(s=e.lastIndexOf(i,s-1)),s}function tC(t){let e=t;for(;e=e.parent;)if(Ug(e)&&$g(t,e)===0)return e}function Ug({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function nC(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(Rg," "),o=r.indexOf("="),a=Er(o<0?r:r.slice(0,o)),l=o<0?null:Er(r.slice(o+1));if(a in e){let c=e[a];Wt(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function nh(t){let e="";for(let n in t){const s=t[n];if(n=xw(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Wt(s)?s.map(r=>r&&hc(r)):[s&&hc(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function sC(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Wt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const iC=Symbol(""),sh=Symbol(""),Na=Symbol(""),wu=Symbol(""),mc=Symbol("");function Ki(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Xn(t,e,n,s,i,r=o=>o()){const o=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(wi(4,{from:n,to:e})):d instanceof Error?l(d):jw(d)?l(wi(2,{from:e,to:d})):(o&&s.enterCallbacks[i]===o&&typeof d=="function"&&o.push(d),a())},u=r(()=>t.call(s&&s.instances[i],e,n,c));let f=Promise.resolve(u);t.length<3&&(f=f.then(c)),f.catch(d=>l(d))})}function _l(t,e,n,s,i=r=>r()){const r=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(kg(l)){const u=(l.__vccOpts||l)[e];u&&r.push(Xn(u,n,s,o,a,i))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=uw(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const p=(f.__vccOpts||f)[e];return p&&Xn(p,n,s,o,a,i)()}))}}return r}function ih(t){const e=At(Na),n=At(wu),s=ne(()=>{const l=I(t.to);return e.resolve(l)}),i=ne(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(xi.bind(null,u));if(d>-1)return d;const p=rh(l[c-2]);return c>1&&rh(u)===p&&f[f.length-1].path!==p?f.findIndex(xi.bind(null,l[c-2])):d}),r=ne(()=>i.value>-1&&lC(n.params,s.value.params)),o=ne(()=>i.value>-1&&i.value===n.matched.length-1&&Mg(n.params,s.value.params));function a(l={}){if(aC(l)){const c=e[I(t.replace)?"replace":"push"](I(t.to)).catch(cr);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:s,href:ne(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}function rC(t){return t.length===1?t[0]:t}const oC=mu({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ih,setup(t,{slots:e}){const n=jr(ih(t)),{options:s}=At(Na),i=ne(()=>({[oh(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[oh(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&rC(e.default(n));return t.custom?r:Aa("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),nn=oC;function aC(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function lC(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!Wt(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function rh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const oh=(t,e,n)=>t??e??n,cC=mu({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=At(mc),i=ne(()=>t.route||s.value),r=At(sh,0),o=ne(()=>{let c=I(r);const{matched:u}=i.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=ne(()=>i.value.matched[o.value]);yo(sh,ne(()=>o.value+1)),yo(iC,a),yo(mc,i);const l=se();return kn(()=>[l.value,a.value,t.name],([c,u,f],[d,p,y])=>{u&&(u.instances[f]=c,p&&p!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!xi(u,p)||!d)&&(u.enterCallbacks[f]||[]).forEach(m=>m(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,f=a.value,d=f&&f.components[u];if(!d)return ah(n.default,{Component:d,route:c});const p=f.props[u],y=p?p===!0?c.params:typeof p=="function"?p(c):p:null,x=Aa(d,we({},y,e,{onVnodeUnmounted:g=>{g.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return ah(n.default,{Component:x,route:c})||x}}});function ah(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Vg=cC;function uC(t){const e=Xw(t.routes,t),n=t.parseQuery||nC,s=t.stringifyQuery||nh,i=t.history,r=Ki(),o=Ki(),a=Ki(),l=Ky(Hn);let c=Hn;ni&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ml.bind(null,k=>""+k),f=ml.bind(null,Cw),d=ml.bind(null,Er);function p(k,K){let W,X;return Dg(k)?(W=e.getRecordMatcher(k),X=K):X=k,e.addRoute(X,W)}function y(k){const K=e.getRecordMatcher(k);K&&e.removeRoute(K)}function m(){return e.getRoutes().map(k=>k.record)}function x(k){return!!e.getRecordMatcher(k)}function g(k,K){if(K=we({},K||l.value),typeof k=="string"){const w=gl(n,k,K.path),T=e.resolve({path:w.path},K),N=i.createHref(w.fullPath);return we(w,T,{params:d(T.params),hash:Er(w.hash),redirectedFrom:void 0,href:N})}let W;if(k.path!=null)W=we({},k,{path:gl(n,k.path,K.path).path});else{const w=we({},k.params);for(const T in w)w[T]==null&&delete w[T];W=we({},k,{params:f(w)}),K.params=f(K.params)}const X=e.resolve(W,K),Ae=k.hash||"";X.params=u(d(X.params));const _=Sw(s,we({},k,{hash:bw(Ae),path:X.path})),v=i.createHref(_);return we({fullPath:_,hash:Ae,query:s===nh?sC(k.query):k.query||{}},X,{redirectedFrom:void 0,href:v})}function b(k){return typeof k=="string"?gl(n,k,l.value.path):we({},k)}function A(k,K){if(c!==k)return wi(8,{from:K,to:k})}function O(k){return S(k)}function z(k){return O(we(b(k),{replace:!0}))}function q(k){const K=k.matched[k.matched.length-1];if(K&&K.redirect){const{redirect:W}=K;let X=typeof W=="function"?W(k):W;return typeof X=="string"&&(X=X.includes("?")||X.includes("#")?X=b(X):{path:X},X.params={}),we({query:k.query,hash:k.hash,params:X.path!=null?{}:k.params},X)}}function S(k,K){const W=c=g(k),X=l.value,Ae=k.state,_=k.force,v=k.replace===!0,w=q(W);if(w)return S(we(b(w),{state:typeof w=="object"?we({},Ae,w.state):Ae,force:_,replace:v}),K||W);const T=W;T.redirectedFrom=K;let N;return!_&&Tw(s,X,W)&&(N=wi(16,{to:T,from:X}),qt(X,X,!0,!1)),(N?Promise.resolve(N):j(T,X)).catch(R=>pn(R)?pn(R,2)?R:Vn(R):xe(R,T,X)).then(R=>{if(R){if(pn(R,2))return S(we({replace:v},b(R.to),{state:typeof R.to=="object"?we({},Ae,R.to.state):Ae,force:_}),K||T)}else R=U(T,X,!0,v,Ae);return re(T,X,R),R})}function D(k,K){const W=A(k,K);return W?Promise.reject(W):Promise.resolve()}function P(k){const K=Qs.values().next().value;return K&&typeof K.runWithContext=="function"?K.runWithContext(k):k()}function j(k,K){let W;const[X,Ae,_]=fC(k,K);W=_l(X.reverse(),"beforeRouteLeave",k,K);for(const w of X)w.leaveGuards.forEach(T=>{W.push(Xn(T,k,K))});const v=D.bind(null,k,K);return W.push(v),Et(W).then(()=>{W=[];for(const w of r.list())W.push(Xn(w,k,K));return W.push(v),Et(W)}).then(()=>{W=_l(Ae,"beforeRouteUpdate",k,K);for(const w of Ae)w.updateGuards.forEach(T=>{W.push(Xn(T,k,K))});return W.push(v),Et(W)}).then(()=>{W=[];for(const w of _)if(w.beforeEnter)if(Wt(w.beforeEnter))for(const T of w.beforeEnter)W.push(Xn(T,k,K));else W.push(Xn(w.beforeEnter,k,K));return W.push(v),Et(W)}).then(()=>(k.matched.forEach(w=>w.enterCallbacks={}),W=_l(_,"beforeRouteEnter",k,K,P),W.push(v),Et(W))).then(()=>{W=[];for(const w of o.list())W.push(Xn(w,k,K));return W.push(v),Et(W)}).catch(w=>pn(w,8)?w:Promise.reject(w))}function re(k,K,W){a.list().forEach(X=>P(()=>X(k,K,W)))}function U(k,K,W,X,Ae){const _=A(k,K);if(_)return _;const v=K===Hn,w=ni?history.state:{};W&&(X||v?i.replace(k.fullPath,we({scroll:v&&w&&w.scroll},Ae)):i.push(k.fullPath,Ae)),l.value=k,qt(k,K,W,v),Vn()}let ue;function be(){ue||(ue=i.listen((k,K,W)=>{if(!io.listening)return;const X=g(k),Ae=q(X);if(Ae){S(we(Ae,{replace:!0,force:!0}),X).catch(cr);return}c=X;const _=l.value;ni&&Lw(Kd(_.fullPath,W.delta),Pa()),j(X,_).catch(v=>pn(v,12)?v:pn(v,2)?(S(we(b(v.to),{force:!0}),X).then(w=>{pn(w,20)&&!W.delta&&W.type===Sr.pop&&i.go(-1,!1)}).catch(cr),Promise.reject()):(W.delta&&i.go(-W.delta,!1),xe(v,X,_))).then(v=>{v=v||U(X,_,!1),v&&(W.delta&&!pn(v,8)?i.go(-W.delta,!1):W.type===Sr.pop&&pn(v,20)&&i.go(-1,!1)),re(X,_,v)}).catch(cr)}))}let st=Ki(),ke=Ki(),fe;function xe(k,K,W){Vn(k);const X=ke.list();return X.length?X.forEach(Ae=>Ae(k,K,W)):console.error(k),Promise.reject(k)}function dn(){return fe&&l.value!==Hn?Promise.resolve():new Promise((k,K)=>{st.add([k,K])})}function Vn(k){return fe||(fe=!k,be(),st.list().forEach(([K,W])=>k?W(k):K()),st.reset()),k}function qt(k,K,W,X){const{scrollBehavior:Ae}=t;if(!ni||!Ae)return Promise.resolve();const _=!W&&Dw(Kd(k.fullPath,0))||(X||!W)&&history.state&&history.state.scroll||null;return ys().then(()=>Ae(k,K,_)).then(v=>v&&Mw(v)).catch(v=>xe(v,k,K))}const ft=k=>i.go(k);let Ys;const Qs=new Set,io={currentRoute:l,listening:!0,addRoute:p,removeRoute:y,clearRoutes:e.clearRoutes,hasRoute:x,getRoutes:m,resolve:g,options:t,push:O,replace:z,go:ft,back:()=>ft(-1),forward:()=>ft(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:ke.add,isReady:dn,install(k){const K=this;k.component("RouterLink",nn),k.component("RouterView",Vg),k.config.globalProperties.$router=K,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>I(l)}),ni&&!Ys&&l.value===Hn&&(Ys=!0,O(i.location).catch(Ae=>{}));const W={};for(const Ae in Hn)Object.defineProperty(W,Ae,{get:()=>l.value[Ae],enumerable:!0});k.provide(Na,K),k.provide(wu,Im(W)),k.provide(mc,l);const X=k.unmount;Qs.add(k),k.unmount=function(){Qs.delete(k),Qs.size<1&&(c=Hn,ue&&ue(),ue=null,l.value=Hn,Ys=!1,fe=!1),X()}}};function Et(k){return k.reduce((K,W)=>K.then(()=>P(W)),Promise.resolve())}return io}function fC(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>xi(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>xi(c,l))||i.push(l))}return[n,s,i]}function Cu(){return At(Na)}function Iu(t){return At(wu)}const dC={__name:"App",setup(t){return(e,n)=>(C(),E(le,null,[n[0]||(n[0]=h("header",null,null,-1)),$(I(Vg))],64))}},ve=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},hC={},pC={class:"footer-container"};function mC(t,e){return C(),E("div",pC,e[0]||(e[0]=[h("span",null," Web design by thjnh ",-1)]))}const Fn=ve(hC,[["render",mC],["__scopeId","data-v-373a2f5d"]]),Bg="/hhdonghua/assets/logo-CdjVZ2et.png";var lh={};/**
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
 */const jg={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const F=function(t,e){if(!t)throw Li(e)},Li=function(t){return new Error("Firebase Database ("+jg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Hg=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},gC=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Eu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,f=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(d=64)),s.push(n[u],n[f],n[d],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Hg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):gC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||f==null)throw new _C;const d=r<<2|a>>4;if(s.push(d),c!==64){const p=a<<4&240|c>>2;if(s.push(p),f!==64){const y=c<<6&192|f;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class _C extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Wg=function(t){const e=Hg(t);return Eu.encodeByteArray(e,!0)},Bo=function(t){return Wg(t).replace(/\./g,"")},jo=function(t){try{return Eu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function vC(t){return zg(void 0,t)}function zg(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!yC(n)||(t[n]=zg(t[n],e[n]));return t}function yC(t){return t!=="__proto__"}/**
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
 */function bC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const xC=()=>bC().__FIREBASE_DEFAULTS__,wC=()=>{if(typeof process>"u"||typeof lh>"u")return;const t=lh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},CC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&jo(t[1]);return e&&JSON.parse(e)},Su=()=>{try{return xC()||wC()||CC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Gg=t=>{var e,n;return(n=(e=Su())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},IC=t=>{const e=Gg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Kg=()=>{var t;return(t=Su())===null||t===void 0?void 0:t.config},qg=t=>{var e;return(e=Su())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class zr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function EC(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Bo(JSON.stringify(n)),Bo(JSON.stringify(o)),""].join(".")}/**
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
 */function ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Tu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ut())}function SC(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function TC(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Yg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function kC(){const t=ut();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function AC(){return jg.NODE_ADMIN===!0}function RC(){try{return typeof indexedDB=="object"}catch{return!1}}function PC(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const NC="FirebaseError";class xs extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=NC,Object.setPrototypeOf(this,xs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gr.prototype.create)}}class Gr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?OC(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new xs(i,a,s)}}function OC(t,e){return t.replace(MC,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const MC=/\{\$([^}]+)}/g;/**
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
 */function Tr(t){return JSON.parse(t)}function Ge(t){return JSON.stringify(t)}/**
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
 */const Qg=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Tr(jo(r[0])||""),n=Tr(jo(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},LC=function(t){const e=Qg(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},DC=function(t){const e=Qg(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function un(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ci(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function gc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ho(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Wo(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(ch(r)&&ch(o)){if(!Wo(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function ch(t){return t!==null&&typeof t=="object"}/**
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
 */function Di(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class FC{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)s[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)s[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const d=s[f-3]^s[f-8]^s[f-14]^s[f-16];s[f]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let f=0;f<80;f++){f<40?f<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):f<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[f]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function $C(t,e){const n=new UC(t,e);return n.subscribe.bind(n)}class UC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");VC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=vl),i.error===void 0&&(i.error=vl),i.complete===void 0&&(i.complete=vl);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function VC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function vl(){}function Oa(t,e){return`${t} failed: ${e} argument `}/**
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
 */const BC=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,F(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ma=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function It(t){return t&&t._delegate?t._delegate:t}class js{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ks="[DEFAULT]";/**
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
 */class jC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new zr;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(WC(e))try{this.getOrInitializeService({instanceIdentifier:ks})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=ks){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ks){return this.instances.has(e)}getOptions(e=ks){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:HC(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ks){return this.component?this.component.multipleInstances?e:ks:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function HC(t){return t===ks?void 0:t}function WC(t){return t.instantiationMode==="EAGER"}/**
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
 */class zC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new jC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Se||(Se={}));const GC={debug:Se.DEBUG,verbose:Se.VERBOSE,info:Se.INFO,warn:Se.WARN,error:Se.ERROR,silent:Se.SILENT},KC=Se.INFO,qC={[Se.DEBUG]:"log",[Se.VERBOSE]:"log",[Se.INFO]:"info",[Se.WARN]:"warn",[Se.ERROR]:"error"},YC=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=qC[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ku{constructor(e){this.name=e,this._logLevel=KC,this._logHandler=YC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?GC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Se.DEBUG,...e),this._logHandler(this,Se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Se.VERBOSE,...e),this._logHandler(this,Se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Se.INFO,...e),this._logHandler(this,Se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Se.WARN,...e),this._logHandler(this,Se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Se.ERROR,...e),this._logHandler(this,Se.ERROR,...e)}}const QC=(t,e)=>e.some(n=>t instanceof n);let uh,fh;function XC(){return uh||(uh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function JC(){return fh||(fh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xg=new WeakMap,_c=new WeakMap,Jg=new WeakMap,yl=new WeakMap,Au=new WeakMap;function ZC(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(ss(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Xg.set(n,t)}).catch(()=>{}),Au.set(e,t),e}function eI(t){if(_c.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});_c.set(t,e)}let vc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return _c.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Jg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ss(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function tI(t){vc=t(vc)}function nI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(bl(this),e,...n);return Jg.set(s,e.sort?e.sort():[e]),ss(s)}:JC().includes(t)?function(...e){return t.apply(bl(this),e),ss(Xg.get(this))}:function(...e){return ss(t.apply(bl(this),e))}}function sI(t){return typeof t=="function"?nI(t):(t instanceof IDBTransaction&&eI(t),QC(t,XC())?new Proxy(t,vc):t)}function ss(t){if(t instanceof IDBRequest)return ZC(t);if(yl.has(t))return yl.get(t);const e=sI(t);return e!==t&&(yl.set(t,e),Au.set(e,t)),e}const bl=t=>Au.get(t);function iI(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=ss(o);return s&&o.addEventListener("upgradeneeded",l=>{s(ss(o.result),l.oldVersion,l.newVersion,ss(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const rI=["get","getKey","getAll","getAllKeys","count"],oI=["put","add","delete","clear"],xl=new Map;function dh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(xl.get(e))return xl.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=oI.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||rI.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return xl.set(e,r),r}tI(t=>({...t,get:(e,n,s)=>dh(e,n)||t.get(e,n,s),has:(e,n)=>!!dh(e,n)||t.has(e,n)}));/**
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
 */class aI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(lI(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function lI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const yc="@firebase/app",hh="0.11.1";/**
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
 */const Nn=new ku("@firebase/app"),cI="@firebase/app-compat",uI="@firebase/analytics-compat",fI="@firebase/analytics",dI="@firebase/app-check-compat",hI="@firebase/app-check",pI="@firebase/auth",mI="@firebase/auth-compat",gI="@firebase/database",_I="@firebase/data-connect",vI="@firebase/database-compat",yI="@firebase/functions",bI="@firebase/functions-compat",xI="@firebase/installations",wI="@firebase/installations-compat",CI="@firebase/messaging",II="@firebase/messaging-compat",EI="@firebase/performance",SI="@firebase/performance-compat",TI="@firebase/remote-config",kI="@firebase/remote-config-compat",AI="@firebase/storage",RI="@firebase/storage-compat",PI="@firebase/firestore",NI="@firebase/vertexai",OI="@firebase/firestore-compat",MI="firebase",LI="11.3.1";/**
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
 */const bc="[DEFAULT]",DI={[yc]:"fire-core",[cI]:"fire-core-compat",[fI]:"fire-analytics",[uI]:"fire-analytics-compat",[hI]:"fire-app-check",[dI]:"fire-app-check-compat",[pI]:"fire-auth",[mI]:"fire-auth-compat",[gI]:"fire-rtdb",[_I]:"fire-data-connect",[vI]:"fire-rtdb-compat",[yI]:"fire-fn",[bI]:"fire-fn-compat",[xI]:"fire-iid",[wI]:"fire-iid-compat",[CI]:"fire-fcm",[II]:"fire-fcm-compat",[EI]:"fire-perf",[SI]:"fire-perf-compat",[TI]:"fire-rc",[kI]:"fire-rc-compat",[AI]:"fire-gcs",[RI]:"fire-gcs-compat",[PI]:"fire-fst",[OI]:"fire-fst-compat",[NI]:"fire-vertex","fire-js":"fire-js",[MI]:"fire-js-all"};/**
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
 */const zo=new Map,FI=new Map,xc=new Map;function ph(t,e){try{t.container.addComponent(e)}catch(n){Nn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ii(t){const e=t.name;if(xc.has(e))return Nn.debug(`There were multiple attempts to register component ${e}.`),!1;xc.set(e,t);for(const n of zo.values())ph(n,t);for(const n of FI.values())ph(n,t);return!0}function Ru(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Mt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const $I={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},is=new Gr("app","Firebase",$I);/**
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
 */class UI{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new js("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw is.create("app-deleted",{appName:this._name})}}/**
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
 */const Fi=LI;function Zg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:bc,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw is.create("bad-app-name",{appName:String(i)});if(n||(n=Kg()),!n)throw is.create("no-options");const r=zo.get(i);if(r){if(Wo(n,r.options)&&Wo(s,r.config))return r;throw is.create("duplicate-app",{appName:i})}const o=new zC(i);for(const l of xc.values())o.addComponent(l);const a=new UI(n,s,o);return zo.set(i,a),a}function e0(t=bc){const e=zo.get(t);if(!e&&t===bc&&Kg())return Zg();if(!e)throw is.create("no-app",{appName:t});return e}function rs(t,e,n){var s;let i=(s=DI[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Nn.warn(a.join(" "));return}Ii(new js(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const VI="firebase-heartbeat-database",BI=1,kr="firebase-heartbeat-store";let wl=null;function t0(){return wl||(wl=iI(VI,BI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(kr)}catch(n){console.warn(n)}}}}).catch(t=>{throw is.create("idb-open",{originalErrorMessage:t.message})})),wl}async function jI(t){try{const n=(await t0()).transaction(kr),s=await n.objectStore(kr).get(n0(t));return await n.done,s}catch(e){if(e instanceof xs)Nn.warn(e.message);else{const n=is.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Nn.warn(n.message)}}}async function mh(t,e){try{const s=(await t0()).transaction(kr,"readwrite");await s.objectStore(kr).put(e,n0(t)),await s.done}catch(n){if(n instanceof xs)Nn.warn(n.message);else{const s=is.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Nn.warn(s.message)}}}function n0(t){return`${t.name}!${t.options.appId}`}/**
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
 */const HI=1024,WI=30;class zI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new KI(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=gh();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>WI){const o=qI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Nn.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=gh(),{heartbeatsToSend:s,unsentEntries:i}=GI(this._heartbeatsCache.heartbeats),r=Bo(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return Nn.warn(n),""}}}function gh(){return new Date().toISOString().substring(0,10)}function GI(t,e=HI){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),_h(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),_h(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class KI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return RC()?PC().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await jI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return mh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return mh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function _h(t){return Bo(JSON.stringify({version:2,heartbeats:t})).length}function qI(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function YI(t){Ii(new js("platform-logger",e=>new aI(e),"PRIVATE")),Ii(new js("heartbeat",e=>new zI(e),"PRIVATE")),rs(yc,hh,t),rs(yc,hh,"esm2017"),rs("fire-js","")}YI("");var QI="firebase",XI="11.3.1";/**
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
 */rs(QI,XI,"app");var vh={};const yh="@firebase/database",bh="1.0.12";/**
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
 */let s0="";function JI(t){s0=t}/**
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
 */class ZI{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ge(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Tr(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class e2{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return un(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const i0=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new ZI(e)}}catch{}return new e2},Ns=i0("localStorage"),t2=i0("sessionStorage");/**
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
 */const fi=new ku("@firebase/database"),n2=function(){let t=1;return function(){return t++}}(),r0=function(t){const e=BC(t),n=new FC;n.update(e);const s=n.digest();return Eu.encodeByteArray(s)},Kr=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Kr.apply(null,s):typeof s=="object"?e+=Ge(s):e+=s,e+=" "}return e};let fr=null,xh=!0;const s2=function(t,e){F(!0,"Can't turn on custom loggers persistently."),fi.logLevel=Se.VERBOSE,fr=fi.log.bind(fi)},Je=function(...t){if(xh===!0&&(xh=!1,fr===null&&t2.get("logging_enabled")===!0&&s2()),fr){const e=Kr.apply(null,t);fr(e)}},qr=function(t){return function(...e){Je(t,...e)}},wc=function(...t){const e="FIREBASE INTERNAL ERROR: "+Kr(...t);fi.error(e)},On=function(...t){const e=`FIREBASE FATAL ERROR: ${Kr(...t)}`;throw fi.error(e),new Error(e)},ct=function(...t){const e="FIREBASE WARNING: "+Kr(...t);fi.warn(e)},i2=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ct("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Pu=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},r2=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ei="[MIN_NAME]",Hs="[MAX_NAME]",Ks=function(t,e){if(t===e)return 0;if(t===Ei||e===Hs)return-1;if(e===Ei||t===Hs)return 1;{const n=wh(t),s=wh(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},o2=function(t,e){return t===e?0:t<e?-1:1},qi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ge(e))},Nu=function(t){if(typeof t!="object"||t===null)return Ge(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Ge(e[s]),n+=":",n+=Nu(t[e[s]]);return n+="}",n},o0=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Ze(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const a0=function(t){F(!Pu(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let f="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),f=f+d}return f.toLowerCase()},a2=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},l2=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function c2(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const u2=new RegExp("^-?(0*)\\d{1,10}$"),f2=-2147483648,d2=2147483647,wh=function(t){if(u2.test(t)){const e=Number(t);if(e>=f2&&e<=d2)return e}return null},$i=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ct("Exception was thrown by user callback.",n),e},Math.floor(0))}},h2=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},dr=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class p2{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,Mt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){ct(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class m2{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Je("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ct(e)}}class wo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}wo.OWNER="owner";/**
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
 */const Ou="5",l0="v",c0="s",u0="r",f0="f",d0=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,h0="ls",p0="p",Cc="ac",m0="websocket",g0="long_polling";/**
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
 */class _0{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ns.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ns.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function g2(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function v0(t,e,n){F(typeof e=="string","typeof type must == string"),F(typeof n=="object","typeof params must == object");let s;if(e===m0)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===g0)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);g2(t)&&(n.ns=t.namespace);const i=[];return Ze(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class _2{constructor(){this.counters_={}}incrementCounter(e,n=1){un(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return vC(this.counters_)}}/**
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
 */const Cl={},Il={};function Mu(t){const e=t.toString();return Cl[e]||(Cl[e]=new _2),Cl[e]}function v2(t,e){const n=t.toString();return Il[n]||(Il[n]=e()),Il[n]}/**
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
 */class y2{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&$i(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Ch="start",b2="close",x2="pLPCommand",w2="pRTLPCB",y0="id",b0="pw",x0="ser",C2="cb",I2="seg",E2="ts",S2="d",T2="dframe",w0=1870,C0=30,k2=w0-C0,A2=25e3,R2=3e4;class oi{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=qr(e),this.stats_=Mu(n),this.urlFn=l=>(this.appCheckToken&&(l[Cc]=this.appCheckToken),v0(n,g0,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new y2(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(R2)),r2(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Lu((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Ch)this.id=a,this.password=l;else if(o===b2)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Ch]="t",s[x0]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[C2]=this.scriptTagHolder.uniqueCallbackIdentifier),s[l0]=Ou,this.transportSessionId&&(s[c0]=this.transportSessionId),this.lastSessionId&&(s[h0]=this.lastSessionId),this.applicationId&&(s[p0]=this.applicationId),this.appCheckToken&&(s[Cc]=this.appCheckToken),typeof location<"u"&&location.hostname&&d0.test(location.hostname)&&(s[u0]=f0);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){oi.forceAllow_=!0}static forceDisallow(){oi.forceDisallow_=!0}static isAvailable(){return oi.forceAllow_?!0:!oi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!a2()&&!l2()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ge(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Wg(n),i=o0(s,k2);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[T2]="t",s[y0]=e,s[b0]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ge(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Lu{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=n2(),window[x2+this.uniqueCallbackIdentifier]=e,window[w2+this.uniqueCallbackIdentifier]=n,this.myIFrame=Lu.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Je("frame writing exception"),a.stack&&Je(a.stack),Je(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Je("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[y0]=this.myID,e[b0]=this.myPW,e[x0]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+C0+s.length<=w0;){const o=this.pendingSegs.shift();s=s+"&"+I2+i+"="+o.seg+"&"+E2+i+"="+o.ts+"&"+S2+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(A2)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Je("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const P2=16384,N2=45e3;let Go=null;typeof MozWebSocket<"u"?Go=MozWebSocket:typeof WebSocket<"u"&&(Go=WebSocket);class Lt{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=qr(this.connId),this.stats_=Mu(n),this.connURL=Lt.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[l0]=Ou,typeof location<"u"&&location.hostname&&d0.test(location.hostname)&&(o[u0]=f0),n&&(o[c0]=n),s&&(o[h0]=s),i&&(o[Cc]=i),r&&(o[p0]=r),v0(e,m0,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ns.set("previous_websocket_failure",!0);try{let s;AC(),this.mySock=new Go(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Lt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Go!==null&&!Lt.forceDisallow_}static previouslyFailed(){return Ns.isInMemoryStorage||Ns.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ns.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Tr(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(F(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Ge(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=o0(n,P2);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(N2))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Lt.responsesRequiredToBeHealthy=2;Lt.healthyTimeout=3e4;/**
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
 */class Ar{static get ALL_TRANSPORTS(){return[oi,Lt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Lt&&Lt.isAvailable();let s=n&&!Lt.previouslyFailed();if(e.webSocketOnly&&(n||ct("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Lt];else{const i=this.transports_=[];for(const r of Ar.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Ar.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ar.globalTransportInitialized_=!1;/**
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
 */const O2=6e4,M2=5e3,L2=10*1024,D2=100*1024,El="t",Ih="d",F2="s",Eh="r",$2="e",Sh="o",Th="a",kh="n",Ah="p",U2="h";class V2{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=qr("c:"+this.id+":"),this.transportManager_=new Ar(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=dr(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>D2?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>L2?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(El in e){const n=e[El];n===Th?this.upgradeIfSecondaryHealthy_():n===Eh?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Sh&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=qi("t",e),s=qi("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ah,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Th,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:kh,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=qi("t",e),s=qi("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=qi(El,e);if(Ih in e){const s=e[Ih];if(n===U2){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===kh){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===F2?this.onConnectionShutdown_(s):n===Eh?this.onReset_(s):n===$2?wc("Server Error: "+s):n===Sh?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):wc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Ou!==s&&ct("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),dr(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(O2))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):dr(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(M2))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ah,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ns.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class I0{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class E0{constructor(e){this.allowedEvents_=e,this.listeners_={},F(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){F(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Ko extends E0{static getInstance(){return new Ko}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Tu()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return F(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Rh=32,Ph=768;class Te{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ye(){return new Te("")}function he(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function hs(t){return t.pieces_.length-t.pieceNum_}function De(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Te(t.pieces_,e)}function Du(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function B2(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Rr(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function S0(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Te(e,0)}function Ue(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Te)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new Te(n,0)}function me(t){return t.pieceNum_>=t.pieces_.length}function lt(t,e){const n=he(t),s=he(e);if(n===null)return e;if(n===s)return lt(De(t),De(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function j2(t,e){const n=Rr(t,0),s=Rr(e,0);for(let i=0;i<n.length&&i<s.length;i++){const r=Ks(n[i],s[i]);if(r!==0)return r}return n.length===s.length?0:n.length<s.length?-1:1}function Fu(t,e){if(hs(t)!==hs(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Tt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(hs(t)>hs(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class H2{constructor(e,n){this.errorPrefix_=n,this.parts_=Rr(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Ma(this.parts_[s]);T0(this)}}function W2(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Ma(e),T0(t)}function z2(t){const e=t.parts_.pop();t.byteLength_-=Ma(e),t.parts_.length>0&&(t.byteLength_-=1)}function T0(t){if(t.byteLength_>Ph)throw new Error(t.errorPrefix_+"has a key path longer than "+Ph+" bytes ("+t.byteLength_+").");if(t.parts_.length>Rh)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Rh+") or object contains a cycle "+As(t))}function As(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class $u extends E0{static getInstance(){return new $u}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return F(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Yi=1e3,G2=60*5*1e3,Nh=30*1e3,K2=1.3,q2=3e4,Y2="server_kill",Oh=3;class An extends I0{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=An.nextPersistentConnectionId_++,this.log_=qr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Yi,this.maxReconnectDelay_=G2,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");$u.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ko.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Ge(r)),F(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new zr,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),F(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),F(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;An.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&un(e,"w")){const s=Ci(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();ct(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||DC(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Nh)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=LC(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),F(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ge(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):wc("Unrecognized action received from server: "+Ge(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){F(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Yi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Yi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>q2&&(this.reconnectDelay_=Yi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*K2)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+An.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(f){F(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Je("getToken() completed but was canceled"):(Je("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=d&&d.token,a=new V2(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,p=>{ct(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(Y2)},r))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&ct(f),l())}}}interrupt(e){Je("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Je("Resuming connection for reason: "+e),delete this.interruptReasons_[e],gc(this.interruptReasons_)&&(this.reconnectDelay_=Yi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Nu(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new Te(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Je("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Oh&&(this.reconnectDelay_=Nh,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Je("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Oh&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+s0.replace(/\./g,"-")]=1,Tu()?e["framework.cordova"]=1:Yg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ko.getInstance().currentlyOnline();return gc(this.interruptReasons_)&&e}}An.nextPersistentConnectionId_=0;An.nextConnectionId_=0;/**
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
 */class pe{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new pe(e,n)}}/**
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
 */class La{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new pe(Ei,e),i=new pe(Ei,n);return this.compare(s,i)!==0}minPost(){return pe.MIN}}/**
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
 */let ho;class k0 extends La{static get __EMPTY_NODE(){return ho}static set __EMPTY_NODE(e){ho=e}compare(e,n){return Ks(e.name,n.name)}isDefinedOn(e){throw Li("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return pe.MIN}maxPost(){return new pe(Hs,ho)}makePost(e,n){return F(typeof e=="string","KeyIndex indexValue must always be a string."),new pe(e,ho)}toString(){return".key"}}const di=new k0;/**
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
 */class po{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Qe{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Qe.RED,this.left=i??gt.EMPTY_NODE,this.right=r??gt.EMPTY_NODE}copy(e,n,s,i,r){return new Qe(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return gt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return gt.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Qe.RED=!0;Qe.BLACK=!1;class Q2{copy(e,n,s,i,r){return this}insert(e,n,s){return new Qe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class gt{constructor(e,n=gt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new gt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Qe.BLACK,null,null))}remove(e){return new gt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Qe.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new po(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new po(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new po(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new po(this.root_,null,this.comparator_,!0,e)}}gt.EMPTY_NODE=new Q2;/**
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
 */function X2(t,e){return Ks(t.name,e.name)}function Uu(t,e){return Ks(t,e)}/**
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
 */let Ic;function J2(t){Ic=t}const A0=function(t){return typeof t=="number"?"number:"+a0(t):"string:"+t},R0=function(t){if(t.isLeafNode()){const e=t.val();F(typeof e=="string"||typeof e=="number"||typeof e=="object"&&un(e,".sv"),"Priority must be a string or number.")}else F(t===Ic||t.isEmpty(),"priority of unexpected type.");F(t===Ic||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Mh;class Ye{static set __childrenNodeConstructor(e){Mh=e}static get __childrenNodeConstructor(){return Mh}constructor(e,n=Ye.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,F(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),R0(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ye(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ye.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return me(e)?this:he(e)===".priority"?this.priorityNode_:Ye.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ye.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=he(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(F(s!==".priority"||hs(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ye.__childrenNodeConstructor.EMPTY_NODE.updateChild(De(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+A0(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=a0(this.value_):e+=this.value_,this.lazyHash_=r0(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ye.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ye.__childrenNodeConstructor?-1:(F(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Ye.VALUE_TYPE_ORDER.indexOf(n),r=Ye.VALUE_TYPE_ORDER.indexOf(s);return F(i>=0,"Unknown leaf type: "+n),F(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ye.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let P0,N0;function Z2(t){P0=t}function eE(t){N0=t}class tE extends La{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Ks(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return pe.MIN}maxPost(){return new pe(Hs,new Ye("[PRIORITY-POST]",N0))}makePost(e,n){const s=P0(e);return new pe(n,new Ye("[PRIORITY-POST]",s))}toString(){return".priority"}}const Ve=new tE;/**
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
 */const nE=Math.log(2);class sE{constructor(e){const n=r=>parseInt(Math.log(r)/nE,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const qo=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let f,d;if(u===0)return null;if(u===1)return f=t[l],d=n?n(f):f,new Qe(d,f.node,Qe.BLACK,null,null);{const p=parseInt(u/2,10)+l,y=i(l,p),m=i(p+1,c);return f=t[p],d=n?n(f):f,new Qe(d,f.node,Qe.BLACK,y,m)}},r=function(l){let c=null,u=null,f=t.length;const d=function(y,m){const x=f-y,g=f;f-=y;const b=i(x+1,g),A=t[x],O=n?n(A):A;p(new Qe(O,A.node,m,null,b))},p=function(y){c?(c.left=y,c=y):(u=y,c=y)};for(let y=0;y<l.count;++y){const m=l.nextBitIsOne(),x=Math.pow(2,l.count-(y+1));m?d(x,Qe.BLACK):(d(x,Qe.BLACK),d(x,Qe.RED))}return u},o=new sE(t.length),a=r(o);return new gt(s||e,a)};/**
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
 */let Sl;const Zs={};class Cn{static get Default(){return F(Zs&&Ve,"ChildrenNode.ts has not been loaded"),Sl=Sl||new Cn({".priority":Zs},{".priority":Ve}),Sl}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Ci(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof gt?n:null}hasIndex(e){return un(this.indexSet_,e.toString())}addIndex(e,n){F(e!==di,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(pe.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=qo(s,e.getCompare()):a=Zs;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Cn(u,c)}addToIndexes(e,n){const s=Ho(this.indexes_,(i,r)=>{const o=Ci(this.indexSet_,r);if(F(o,"Missing index implementation for "+r),i===Zs)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(pe.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),qo(a,o.getCompare())}else return Zs;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new pe(e.name,a))),l.insert(e,e.node)}});return new Cn(s,this.indexSet_)}removeFromIndexes(e,n){const s=Ho(this.indexes_,i=>{if(i===Zs)return i;{const r=n.get(e.name);return r?i.remove(new pe(e.name,r)):i}});return new Cn(s,this.indexSet_)}}/**
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
 */let Qi;class te{static get EMPTY_NODE(){return Qi||(Qi=new te(new gt(Uu),null,Cn.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&R0(this.priorityNode_),this.children_.isEmpty()&&F(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Qi}updatePriority(e){return this.children_.isEmpty()?this:new te(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Qi:n}}getChild(e){const n=he(e);return n===null?this:this.getImmediateChild(n).getChild(De(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(F(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new pe(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Qi:this.priorityNode_;return new te(i,o,r)}}updateChild(e,n){const s=he(e);if(s===null)return n;{F(he(e)!==".priority"||hs(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(De(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(Ve,(o,a)=>{n[o]=a.val(e),s++,r&&te.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+A0(this.getPriority().val())+":"),this.forEachChild(Ve,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":r0(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new pe(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new pe(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new pe(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,pe.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,pe.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Yr?-1:0}withIndex(e){if(e===di||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new te(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===di||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Ve),i=n.getIterator(Ve);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===di?null:this.indexMap_.get(e.toString())}}te.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class iE extends te{constructor(){super(new gt(Uu),te.EMPTY_NODE,Cn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return te.EMPTY_NODE}isEmpty(){return!1}}const Yr=new iE;Object.defineProperties(pe,{MIN:{value:new pe(Ei,te.EMPTY_NODE)},MAX:{value:new pe(Hs,Yr)}});k0.__EMPTY_NODE=te.EMPTY_NODE;Ye.__childrenNodeConstructor=te;J2(Yr);eE(Yr);/**
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
 */const rE=!0;function ze(t,e=null){if(t===null)return te.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),F(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ye(n,ze(e))}if(!(t instanceof Array)&&rE){const n=[];let s=!1;if(Ze(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=ze(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new pe(o,l)))}}),n.length===0)return te.EMPTY_NODE;const r=qo(n,X2,o=>o.name,Uu);if(s){const o=qo(n,Ve.getCompare());return new te(r,ze(e),new Cn({".priority":o},{".priority":Ve}))}else return new te(r,ze(e),Cn.Default)}else{let n=te.EMPTY_NODE;return Ze(t,(s,i)=>{if(un(t,s)&&s.substring(0,1)!=="."){const r=ze(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(ze(e))}}Z2(ze);/**
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
 */class oE extends La{constructor(e){super(),this.indexPath_=e,F(!me(e)&&he(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Ks(e.name,n.name):r}makePost(e,n){const s=ze(e),i=te.EMPTY_NODE.updateChild(this.indexPath_,s);return new pe(n,i)}maxPost(){const e=te.EMPTY_NODE.updateChild(this.indexPath_,Yr);return new pe(Hs,e)}toString(){return Rr(this.indexPath_,0).join("/")}}/**
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
 */class aE extends La{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Ks(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return pe.MIN}maxPost(){return pe.MAX}makePost(e,n){const s=ze(e);return new pe(n,s)}toString(){return".value"}}const lE=new aE;/**
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
 */function O0(t){return{type:"value",snapshotNode:t}}function Si(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Pr(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Nr(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function cE(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Vu{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){F(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Pr(n,a)):F(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Si(n,s)):o.trackChildChange(Nr(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Ve,(i,r)=>{n.hasChild(i)||s.trackChildChange(Pr(i,r))}),n.isLeafNode()||n.forEachChild(Ve,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Nr(i,r,o))}else s.trackChildChange(Si(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?te.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Or{constructor(e){this.indexedFilter_=new Vu(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Or.getStartPost_(e),this.endPost_=Or.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new pe(n,s))||(s=te.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=te.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(te.EMPTY_NODE);const r=this;return n.forEachChild(Ve,(o,a)=>{r.matches(new pe(o,a))||(i=i.updateImmediateChild(o,te.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class uE{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Or(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new pe(n,s))||(s=te.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=te.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=te.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(te.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,te.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const f=this.index_.getCompare();o=(d,p)=>f(p,d)}else o=this.index_.getCompare();const a=e;F(a.numChildren()===this.limit_,"");const l=new pe(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const f=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const p=d==null?1:o(d,l);if(u&&!s.isEmpty()&&p>=0)return r!=null&&r.trackChildChange(Nr(n,s,f)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(Pr(n,f));const m=a.updateImmediateChild(n,te.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(Si(d.name,d.node)),m.updateImmediateChild(d.name,d.node)):m}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Pr(c.name,c.node)),r.trackChildChange(Si(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,te.EMPTY_NODE)):e}}/**
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
 */class Bu{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ve}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return F(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return F(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ei}hasEnd(){return this.endSet_}getIndexEndValue(){return F(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return F(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Hs}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return F(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ve}copy(){const e=new Bu;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function fE(t){return t.loadsAllData()?new Vu(t.getIndex()):t.hasLimit()?new uE(t):new Or(t)}function Lh(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ve?n="$priority":t.index_===lE?n="$value":t.index_===di?n="$key":(F(t.index_ instanceof oE,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ge(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Ge(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Ge(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Ge(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Ge(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Dh(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ve&&(e.i=t.index_.toString()),e}/**
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
 */class Yo extends I0{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(F(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=qr("p:rest:"),this.listens_={}}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Yo.getListenId_(e,s),a={};this.listens_[o]=a;const l=Lh(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let f=u;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(r,f,!1,s),Ci(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=Yo.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Lh(e._queryParams),s=e._path.toString(),i=new zr;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Di(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Tr(a.responseText)}catch{ct("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&ct("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class dE{constructor(){this.rootNode_=te.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Qo(){return{value:null,children:new Map}}function M0(t,e,n){if(me(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=he(e);t.children.has(s)||t.children.set(s,Qo());const i=t.children.get(s);e=De(e),M0(i,e,n)}}function Ec(t,e,n){t.value!==null?n(e,t.value):hE(t,(s,i)=>{const r=new Te(e.toString()+"/"+s);Ec(i,r,n)})}function hE(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class pE{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ze(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const Fh=10*1e3,mE=30*1e3,gE=5*60*1e3;class _E{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new pE(e);const s=Fh+(mE-Fh)*Math.random();dr(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Ze(e,(i,r)=>{r>0&&un(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),dr(this.reportStats_.bind(this),Math.floor(Math.random()*2*gE))}}/**
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
 */var Dt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Dt||(Dt={}));function ju(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Hu(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Wu(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Xo{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Dt.ACK_USER_WRITE,this.source=ju()}operationForChild(e){if(me(this.path)){if(this.affectedTree.value!=null)return F(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Te(e));return new Xo(ye(),n,this.revert)}}else return F(he(this.path)===e,"operationForChild called for unrelated child."),new Xo(De(this.path),this.affectedTree,this.revert)}}/**
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
 */class Mr{constructor(e,n){this.source=e,this.path=n,this.type=Dt.LISTEN_COMPLETE}operationForChild(e){return me(this.path)?new Mr(this.source,ye()):new Mr(this.source,De(this.path))}}/**
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
 */class Ws{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Dt.OVERWRITE}operationForChild(e){return me(this.path)?new Ws(this.source,ye(),this.snap.getImmediateChild(e)):new Ws(this.source,De(this.path),this.snap)}}/**
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
 */class Ti{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Dt.MERGE}operationForChild(e){if(me(this.path)){const n=this.children.subtree(new Te(e));return n.isEmpty()?null:n.value?new Ws(this.source,ye(),n.value):new Ti(this.source,ye(),n)}else return F(he(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ti(this.source,De(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class ps{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(me(e))return this.isFullyInitialized()&&!this.filtered_;const n=he(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class vE{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function yE(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(cE(o.childName,o.snapshotNode))}),Xi(t,i,"child_removed",e,s,n),Xi(t,i,"child_added",e,s,n),Xi(t,i,"child_moved",r,s,n),Xi(t,i,"child_changed",e,s,n),Xi(t,i,"value",e,s,n),i}function Xi(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>xE(t,a,l)),o.forEach(a=>{const l=bE(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function bE(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function xE(t,e,n){if(e.childName==null||n.childName==null)throw Li("Should only compare child_ events.");const s=new pe(e.childName,e.snapshotNode),i=new pe(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function Da(t,e){return{eventCache:t,serverCache:e}}function hr(t,e,n,s){return Da(new ps(e,n,s),t.serverCache)}function L0(t,e,n,s){return Da(t.eventCache,new ps(e,n,s))}function Jo(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function zs(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Tl;const wE=()=>(Tl||(Tl=new gt(o2)),Tl);class Le{static fromObject(e){let n=new Le(null);return Ze(e,(s,i)=>{n=n.set(new Te(s),i)}),n}constructor(e,n=wE()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ye(),value:this.value};if(me(e))return null;{const s=he(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(De(e),n);return r!=null?{path:Ue(new Te(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(me(e))return this;{const n=he(e),s=this.children.get(n);return s!==null?s.subtree(De(e)):new Le(null)}}set(e,n){if(me(e))return new Le(n,this.children);{const s=he(e),r=(this.children.get(s)||new Le(null)).set(De(e),n),o=this.children.insert(s,r);return new Le(this.value,o)}}remove(e){if(me(e))return this.children.isEmpty()?new Le(null):new Le(null,this.children);{const n=he(e),s=this.children.get(n);if(s){const i=s.remove(De(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new Le(null):new Le(this.value,r)}else return this}}get(e){if(me(e))return this.value;{const n=he(e),s=this.children.get(n);return s?s.get(De(e)):null}}setTree(e,n){if(me(e))return n;{const s=he(e),r=(this.children.get(s)||new Le(null)).setTree(De(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new Le(this.value,o)}}fold(e){return this.fold_(ye(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Ue(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,ye(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(me(e))return null;{const r=he(e),o=this.children.get(r);return o?o.findOnPath_(De(e),Ue(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ye(),n)}foreachOnPath_(e,n,s){if(me(e))return this;{this.value&&s(n,this.value);const i=he(e),r=this.children.get(i);return r?r.foreachOnPath_(De(e),Ue(n,i),s):new Le(null)}}foreach(e){this.foreach_(ye(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(Ue(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class Vt{constructor(e){this.writeTree_=e}static empty(){return new Vt(new Le(null))}}function pr(t,e,n){if(me(e))return new Vt(new Le(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=lt(i,e);return r=r.updateChild(o,n),new Vt(t.writeTree_.set(i,r))}else{const i=new Le(n),r=t.writeTree_.setTree(e,i);return new Vt(r)}}}function Sc(t,e,n){let s=t;return Ze(n,(i,r)=>{s=pr(s,Ue(e,i),r)}),s}function $h(t,e){if(me(e))return Vt.empty();{const n=t.writeTree_.setTree(e,new Le(null));return new Vt(n)}}function Tc(t,e){return qs(t,e)!=null}function qs(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(lt(n.path,e)):null}function Uh(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ve,(s,i)=>{e.push(new pe(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new pe(s,i.value))}),e}function os(t,e){if(me(e))return t;{const n=qs(t,e);return n!=null?new Vt(new Le(n)):new Vt(t.writeTree_.subtree(e))}}function kc(t){return t.writeTree_.isEmpty()}function ki(t,e){return D0(ye(),t.writeTree_,e)}function D0(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(F(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=D0(Ue(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Ue(t,".priority"),s)),n}}/**
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
 */function Fa(t,e){return V0(e,t)}function CE(t,e,n,s,i){F(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=pr(t.visibleWrites,e,n)),t.lastWriteId=s}function IE(t,e,n,s){F(s>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:s,visible:!0}),t.visibleWrites=Sc(t.visibleWrites,e,n),t.lastWriteId=s}function EE(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function SE(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);F(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&TE(a,s.path)?i=!1:Tt(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return kE(t),!0;if(s.snap)t.visibleWrites=$h(t.visibleWrites,s.path);else{const a=s.children;Ze(a,l=>{t.visibleWrites=$h(t.visibleWrites,Ue(s.path,l))})}return!0}else return!1}function TE(t,e){if(t.snap)return Tt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Tt(Ue(t.path,n),e))return!0;return!1}function kE(t){t.visibleWrites=F0(t.allWrites,AE,ye()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function AE(t){return t.visible}function F0(t,e,n){let s=Vt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)Tt(n,o)?(a=lt(n,o),s=pr(s,a,r.snap)):Tt(o,n)&&(a=lt(o,n),s=pr(s,ye(),r.snap.getChild(a)));else if(r.children){if(Tt(n,o))a=lt(n,o),s=Sc(s,a,r.children);else if(Tt(o,n))if(a=lt(o,n),me(a))s=Sc(s,ye(),r.children);else{const l=Ci(r.children,he(a));if(l){const c=l.getChild(De(a));s=pr(s,ye(),c)}}}else throw Li("WriteRecord should have .snap or .children")}}return s}function $0(t,e,n,s,i){if(!s&&!i){const r=qs(t.visibleWrites,e);if(r!=null)return r;{const o=os(t.visibleWrites,e);if(kc(o))return n;if(n==null&&!Tc(o,ye()))return null;{const a=n||te.EMPTY_NODE;return ki(o,a)}}}else{const r=os(t.visibleWrites,e);if(!i&&kc(r))return n;if(!i&&n==null&&!Tc(r,ye()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Tt(c.path,e)||Tt(e,c.path))},a=F0(t.allWrites,o,e),l=n||te.EMPTY_NODE;return ki(a,l)}}}function RE(t,e,n){let s=te.EMPTY_NODE;const i=qs(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Ve,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=os(t.visibleWrites,e);return n.forEachChild(Ve,(o,a)=>{const l=ki(os(r,new Te(o)),a);s=s.updateImmediateChild(o,l)}),Uh(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=os(t.visibleWrites,e);return Uh(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function PE(t,e,n,s,i){F(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Ue(e,n);if(Tc(t.visibleWrites,r))return null;{const o=os(t.visibleWrites,r);return kc(o)?i.getChild(n):ki(o,i.getChild(n))}}function NE(t,e,n,s){const i=Ue(e,n),r=qs(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=os(t.visibleWrites,i);return ki(o,s.getNode().getImmediateChild(n))}else return null}function OE(t,e){return qs(t.visibleWrites,e)}function ME(t,e,n,s,i,r,o){let a;const l=os(t.visibleWrites,e),c=qs(l,ye());if(c!=null)a=c;else if(n!=null)a=ki(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],f=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let p=d.getNext();for(;p&&u.length<i;)f(p,s)!==0&&u.push(p),p=d.getNext();return u}else return[]}function LE(){return{visibleWrites:Vt.empty(),allWrites:[],lastWriteId:-1}}function Zo(t,e,n,s){return $0(t.writeTree,t.treePath,e,n,s)}function zu(t,e){return RE(t.writeTree,t.treePath,e)}function Vh(t,e,n,s){return PE(t.writeTree,t.treePath,e,n,s)}function ea(t,e){return OE(t.writeTree,Ue(t.treePath,e))}function DE(t,e,n,s,i,r){return ME(t.writeTree,t.treePath,e,n,s,i,r)}function Gu(t,e,n){return NE(t.writeTree,t.treePath,e,n)}function U0(t,e){return V0(Ue(t.treePath,e),t.writeTree)}function V0(t,e){return{treePath:t,writeTree:e}}/**
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
 */class FE{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;F(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),F(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Nr(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Pr(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Si(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Nr(s,e.snapshotNode,i.oldSnap));else throw Li("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class $E{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const B0=new $E;class Ku{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new ps(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Gu(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:zs(this.viewCache_),r=DE(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function UE(t){return{filter:t}}function VE(t,e){F(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),F(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function BE(t,e,n,s,i){const r=new FE;let o,a;if(n.type===Dt.OVERWRITE){const c=n;c.source.fromUser?o=Ac(t,e,c.path,c.snap,s,i,r):(F(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!me(c.path),o=ta(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===Dt.MERGE){const c=n;c.source.fromUser?o=HE(t,e,c.path,c.children,s,i,r):(F(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Rc(t,e,c.path,c.children,s,i,a,r))}else if(n.type===Dt.ACK_USER_WRITE){const c=n;c.revert?o=GE(t,e,c.path,s,i,r):o=WE(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===Dt.LISTEN_COMPLETE)o=zE(t,e,n.path,s,r);else throw Li("Unknown operation type: "+n.type);const l=r.getChanges();return jE(e,o,l),{viewCache:o,changes:l}}function jE(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Jo(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(O0(Jo(e)))}}function j0(t,e,n,s,i,r){const o=e.eventCache;if(ea(s,n)!=null)return e;{let a,l;if(me(n))if(F(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=zs(e),u=c instanceof te?c:te.EMPTY_NODE,f=zu(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),f,r)}else{const c=Zo(s,zs(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=he(n);if(c===".priority"){F(hs(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const f=Vh(s,n,u,l);f!=null?a=t.filter.updatePriority(u,f):a=o.getNode()}else{const u=De(n);let f;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=Vh(s,n,o.getNode(),l);d!=null?f=o.getNode().getImmediateChild(c).updateChild(u,d):f=o.getNode().getImmediateChild(c)}else f=Gu(s,c,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),c,f,u,i,r):a=o.getNode()}}return hr(e,a,o.isFullyInitialized()||me(n),t.filter.filtersNodes())}}function ta(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(me(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),p,null)}else{const p=he(n);if(!l.isCompleteForPath(n)&&hs(n)>1)return e;const y=De(n),x=l.getNode().getImmediateChild(p).updateChild(y,s);p===".priority"?c=u.updatePriority(l.getNode(),x):c=u.updateChild(l.getNode(),p,x,y,B0,null)}const f=L0(e,c,l.isFullyInitialized()||me(n),u.filtersNodes()),d=new Ku(i,f,r);return j0(t,f,n,i,d,a)}function Ac(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new Ku(i,e,r);if(me(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=hr(e,c,!0,t.filter.filtersNodes());else{const f=he(n);if(f===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=hr(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=De(n),p=a.getNode().getImmediateChild(f);let y;if(me(d))y=s;else{const m=u.getCompleteChild(f);m!=null?Du(d)===".priority"&&m.getChild(S0(d)).isEmpty()?y=m:y=m.updateChild(d,s):y=te.EMPTY_NODE}if(p.equals(y))l=e;else{const m=t.filter.updateChild(a.getNode(),f,y,d,u,o);l=hr(e,m,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Bh(t,e){return t.eventCache.isCompleteForChild(e)}function HE(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=Ue(n,l);Bh(e,he(u))&&(a=Ac(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=Ue(n,l);Bh(e,he(u))||(a=Ac(t,a,u,c,i,r,o))}),a}function jh(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Rc(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;me(n)?c=s:c=new Le(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((f,d)=>{if(u.hasChild(f)){const p=e.serverCache.getNode().getImmediateChild(f),y=jh(t,p,d);l=ta(t,l,new Te(f),y,i,r,o,a)}}),c.children.inorderTraversal((f,d)=>{const p=!e.serverCache.isCompleteForChild(f)&&d.value===null;if(!u.hasChild(f)&&!p){const y=e.serverCache.getNode().getImmediateChild(f),m=jh(t,y,d);l=ta(t,l,new Te(f),m,i,r,o,a)}}),l}function WE(t,e,n,s,i,r,o){if(ea(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(me(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return ta(t,e,n,l.getNode().getChild(n),i,r,a,o);if(me(n)){let c=new Le(null);return l.getNode().forEachChild(di,(u,f)=>{c=c.set(new Te(u),f)}),Rc(t,e,n,c,i,r,a,o)}else return e}else{let c=new Le(null);return s.foreach((u,f)=>{const d=Ue(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),Rc(t,e,n,c,i,r,a,o)}}function zE(t,e,n,s,i){const r=e.serverCache,o=L0(e,r.getNode(),r.isFullyInitialized()||me(n),r.isFiltered());return j0(t,o,n,s,B0,i)}function GE(t,e,n,s,i,r){let o;if(ea(s,n)!=null)return e;{const a=new Ku(s,e,i),l=e.eventCache.getNode();let c;if(me(n)||he(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Zo(s,zs(e));else{const f=e.serverCache.getNode();F(f instanceof te,"serverChildren would be complete if leaf node"),u=zu(s,f)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=he(n);let f=Gu(s,u,e.serverCache);f==null&&e.serverCache.isCompleteForChild(u)&&(f=l.getImmediateChild(u)),f!=null?c=t.filter.updateChild(l,u,f,De(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,te.EMPTY_NODE,De(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Zo(s,zs(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||ea(s,ye())!=null,hr(e,c,o,t.filter.filtersNodes())}}/**
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
 */class KE{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Vu(s.getIndex()),r=fE(s);this.processor_=UE(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(te.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(te.EMPTY_NODE,a.getNode(),null),u=new ps(l,o.isFullyInitialized(),i.filtersNodes()),f=new ps(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Da(f,u),this.eventGenerator_=new vE(this.query_)}get query(){return this.query_}}function qE(t){return t.viewCache_.serverCache.getNode()}function YE(t){return Jo(t.viewCache_)}function QE(t,e){const n=zs(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!me(e)&&!n.getImmediateChild(he(e)).isEmpty())?n.getChild(e):null}function Hh(t){return t.eventRegistrations_.length===0}function XE(t,e){t.eventRegistrations_.push(e)}function Wh(t,e,n){const s=[];if(n){F(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function zh(t,e,n,s){e.type===Dt.MERGE&&e.source.queryId!==null&&(F(zs(t.viewCache_),"We should always have a full cache before handling merges"),F(Jo(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=BE(t.processor_,i,e,n,s);return VE(t.processor_,r.viewCache),F(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,H0(t,r.changes,r.viewCache.eventCache.getNode(),null)}function JE(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ve,(r,o)=>{s.push(Si(r,o))}),n.isFullyInitialized()&&s.push(O0(n.getNode())),H0(t,s,n.getNode(),e)}function H0(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return yE(t.eventGenerator_,e,n,i)}/**
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
 */let na;class W0{constructor(){this.views=new Map}}function ZE(t){F(!na,"__referenceConstructor has already been defined"),na=t}function eS(){return F(na,"Reference.ts has not been loaded"),na}function tS(t){return t.views.size===0}function qu(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return F(r!=null,"SyncTree gave us an op for an invalid query."),zh(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(zh(o,e,n,s));return r}}function z0(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=Zo(n,i?s:null),l=!1;a?l=!0:s instanceof te?(a=zu(n,s),l=!1):(a=te.EMPTY_NODE,l=!1);const c=Da(new ps(a,l,!1),new ps(s,i,!1));return new KE(e,c)}return o}function nS(t,e,n,s,i,r){const o=z0(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),XE(o,n),JE(o,n)}function sS(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=ms(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(Wh(c,n,s)),Hh(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(Wh(l,n,s)),Hh(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!ms(t)&&r.push(new(eS())(e._repo,e._path)),{removed:r,events:o}}function G0(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function as(t,e){let n=null;for(const s of t.views.values())n=n||QE(s,e);return n}function K0(t,e){if(e._queryParams.loadsAllData())return $a(t);{const s=e._queryIdentifier;return t.views.get(s)}}function q0(t,e){return K0(t,e)!=null}function ms(t){return $a(t)!=null}function $a(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let sa;function iS(t){F(!sa,"__referenceConstructor has already been defined"),sa=t}function rS(){return F(sa,"Reference.ts has not been loaded"),sa}let oS=1;class Gh{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Le(null),this.pendingWriteTree_=LE(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Y0(t,e,n,s,i){return CE(t.pendingWriteTree_,e,n,s,i),i?Ui(t,new Ws(ju(),e,n)):[]}function aS(t,e,n,s){IE(t.pendingWriteTree_,e,n,s);const i=Le.fromObject(n);return Ui(t,new Ti(ju(),e,i))}function es(t,e,n=!1){const s=EE(t.pendingWriteTree_,e);if(SE(t.pendingWriteTree_,e)){let r=new Le(null);return s.snap!=null?r=r.set(ye(),!0):Ze(s.children,o=>{r=r.set(new Te(o),!0)}),Ui(t,new Xo(s.path,r,n))}else return[]}function Qr(t,e,n){return Ui(t,new Ws(Hu(),e,n))}function lS(t,e,n){const s=Le.fromObject(n);return Ui(t,new Ti(Hu(),e,s))}function cS(t,e){return Ui(t,new Mr(Hu(),e))}function uS(t,e,n){const s=Qu(t,n);if(s){const i=Xu(s),r=i.path,o=i.queryId,a=lt(r,e),l=new Mr(Wu(o),a);return Ju(t,r,l)}else return[]}function ia(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||q0(o,e))){const l=sS(o,e,n,s);tS(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(r,(d,p)=>ms(p));if(u&&!f){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const p=hS(d);for(let y=0;y<p.length;++y){const m=p[y],x=m.query,g=Z0(t,m);t.listenProvider_.startListening(mr(x),Lr(t,x),g.hashFn,g.onComplete)}}}!f&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(mr(e),null):c.forEach(d=>{const p=t.queryToTagMap.get(Ua(d));t.listenProvider_.stopListening(mr(d),p)}))}pS(t,c)}return a}function Q0(t,e,n,s){const i=Qu(t,s);if(i!=null){const r=Xu(i),o=r.path,a=r.queryId,l=lt(o,e),c=new Ws(Wu(a),l,n);return Ju(t,o,c)}else return[]}function fS(t,e,n,s){const i=Qu(t,s);if(i){const r=Xu(i),o=r.path,a=r.queryId,l=lt(o,e),c=Le.fromObject(n),u=new Ti(Wu(a),l,c);return Ju(t,o,u)}else return[]}function Pc(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,p)=>{const y=lt(d,i);r=r||as(p,y),o=o||ms(p)});let a=t.syncPointTree_.get(i);a?(o=o||ms(a),r=r||as(a,ye())):(a=new W0,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=te.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((p,y)=>{const m=as(y,ye());m&&(r=r.updateImmediateChild(p,m))}));const c=q0(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=Ua(e);F(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const p=mS();t.queryToTagMap.set(d,p),t.tagToQueryMap.set(p,d)}const u=Fa(t.pendingWriteTree_,i);let f=nS(a,e,n,u,r,l);if(!c&&!o&&!s){const d=K0(a,e);f=f.concat(gS(t,e,d))}return f}function Yu(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=lt(o,e),c=as(a,l);if(c)return c});return $0(i,e,r,n,!0)}function dS(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const f=lt(c,n);s=s||as(u,f)});let i=t.syncPointTree_.get(n);i?s=s||as(i,ye()):(i=new W0,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new ps(s,!0,!1):null,a=Fa(t.pendingWriteTree_,e._path),l=z0(i,e,a,r?o.getNode():te.EMPTY_NODE,r);return YE(l)}function Ui(t,e){return X0(e,t.syncPointTree_,null,Fa(t.pendingWriteTree_,ye()))}function X0(t,e,n,s){if(me(t.path))return J0(t,e,n,s);{const i=e.get(ye());n==null&&i!=null&&(n=as(i,ye()));let r=[];const o=he(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=U0(s,o);r=r.concat(X0(a,l,c,u))}return i&&(r=r.concat(qu(i,t,s,n))),r}}function J0(t,e,n,s){const i=e.get(ye());n==null&&i!=null&&(n=as(i,ye()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=U0(s,o),u=t.operationForChild(o);u&&(r=r.concat(J0(u,a,l,c)))}),i&&(r=r.concat(qu(i,t,s,n))),r}function Z0(t,e){const n=e.query,s=Lr(t,n);return{hashFn:()=>(qE(e)||te.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?uS(t,n._path,s):cS(t,n._path);{const r=c2(i,n);return ia(t,n,null,r)}}}}function Lr(t,e){const n=Ua(e);return t.queryToTagMap.get(n)}function Ua(t){return t._path.toString()+"$"+t._queryIdentifier}function Qu(t,e){return t.tagToQueryMap.get(e)}function Xu(t){const e=t.indexOf("$");return F(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Te(t.substr(0,e))}}function Ju(t,e,n){const s=t.syncPointTree_.get(e);F(s,"Missing sync point for query tag that we're tracking");const i=Fa(t.pendingWriteTree_,e);return qu(s,n,i,null)}function hS(t){return t.fold((e,n,s)=>{if(n&&ms(n))return[$a(n)];{let i=[];return n&&(i=G0(n)),Ze(s,(r,o)=>{i=i.concat(o)}),i}})}function mr(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(rS())(t._repo,t._path):t}function pS(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Ua(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function mS(){return oS++}function gS(t,e,n){const s=e._path,i=Lr(t,e),r=Z0(t,n),o=t.listenProvider_.startListening(mr(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)F(!ms(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,f)=>{if(!me(c)&&u&&ms(u))return[$a(u).query];{let d=[];return u&&(d=d.concat(G0(u).map(p=>p.query))),Ze(f,(p,y)=>{d=d.concat(y)}),d}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(mr(u),Lr(t,u))}}return o}/**
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
 */class Zu{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Zu(n)}node(){return this.node_}}class ef{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ue(this.path_,e);return new ef(this.syncTree_,n)}node(){return Yu(this.syncTree_,this.path_)}}const _S=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Kh=function(t,e,n){if(!t||typeof t!="object")return t;if(F(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return vS(t[".sv"],e,n);if(typeof t[".sv"]=="object")return yS(t[".sv"],e);F(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},vS=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:F(!1,"Unexpected server value: "+t)}},yS=function(t,e,n){t.hasOwnProperty("increment")||F(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&F(!1,"Unexpected increment value: "+s);const i=e.node();if(F(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},e_=function(t,e,n,s){return tf(e,new ef(n,t),s)},t_=function(t,e,n){return tf(t,new Zu(e),n)};function tf(t,e,n){const s=t.getPriority().val(),i=Kh(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Kh(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ye(a,ze(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Ye(i))),o.forEachChild(Ve,(a,l)=>{const c=tf(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class nf{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function sf(t,e){let n=e instanceof Te?e:new Te(e),s=t,i=he(n);for(;i!==null;){const r=Ci(s.node.children,i)||{children:{},childCount:0};s=new nf(i,s,r),n=De(n),i=he(n)}return s}function Vi(t){return t.node.value}function n_(t,e){t.node.value=e,Nc(t)}function s_(t){return t.node.childCount>0}function bS(t){return Vi(t)===void 0&&!s_(t)}function Va(t,e){Ze(t.node.children,(n,s)=>{e(new nf(n,t,s))})}function i_(t,e,n,s){n&&e(t),Va(t,i=>{i_(i,e,!0)})}function xS(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Xr(t){return new Te(t.parent===null?t.name:Xr(t.parent)+"/"+t.name)}function Nc(t){t.parent!==null&&wS(t.parent,t.name,t)}function wS(t,e,n){const s=bS(n),i=un(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Nc(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Nc(t))}/**
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
 */const CS=/[\[\].#$\/\u0000-\u001F\u007F]/,IS=/[\[\].#$\u0000-\u001F\u007F]/,kl=10*1024*1024,rf=function(t){return typeof t=="string"&&t.length!==0&&!CS.test(t)},r_=function(t){return typeof t=="string"&&t.length!==0&&!IS.test(t)},ES=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),r_(t)},SS=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Pu(t)||t&&typeof t=="object"&&un(t,".sv")},o_=function(t,e,n,s){s&&e===void 0||Ba(Oa(t,"value"),e,n)},Ba=function(t,e,n){const s=n instanceof Te?new H2(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+As(s));if(typeof e=="function")throw new Error(t+"contains a function "+As(s)+" with contents = "+e.toString());if(Pu(e))throw new Error(t+"contains "+e.toString()+" "+As(s));if(typeof e=="string"&&e.length>kl/3&&Ma(e)>kl)throw new Error(t+"contains a string greater than "+kl+" utf8 bytes "+As(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Ze(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!rf(o)))throw new Error(t+" contains an invalid key ("+o+") "+As(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);W2(s,o),Ba(t,a,s),z2(s)}),i&&r)throw new Error(t+' contains ".value" child '+As(s)+" in addition to actual children.")}},TS=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const r=Rr(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!rf(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(j2);let i=null;for(n=0;n<e.length;n++){if(s=e[n],i!==null&&Tt(i,s))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},kS=function(t,e,n,s){const i=Oa(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];Ze(e,(o,a)=>{const l=new Te(o);if(Ba(i,a,Ue(n,l)),Du(l)===".priority"&&!SS(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),TS(i,r)},a_=function(t,e,n,s){if(!r_(n))throw new Error(Oa(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},AS=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),a_(t,e,n)},of=function(t,e){if(he(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},RS=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!rf(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!ES(n))throw new Error(Oa(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class PS{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ja(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Fu(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function l_(t,e,n){ja(t,n),c_(t,s=>Fu(s,e))}function Nt(t,e,n){ja(t,n),c_(t,s=>Tt(s,e)||Tt(e,s))}function c_(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(NS(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function NS(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();fr&&Je("event: "+n.toString()),$i(s)}}}/**
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
 */const OS="repo_interrupt",MS=25;class LS{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new PS,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Qo(),this.transactionQueueTree_=new nf,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function DS(t,e,n){if(t.stats_=Mu(t.repoInfo_),t.forceRestClient_||h2())t.server_=new Yo(t.repoInfo_,(s,i,r,o)=>{qh(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Yh(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ge(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new An(t.repoInfo_,e,(s,i,r,o)=>{qh(t,s,i,r,o)},s=>{Yh(t,s)},s=>{FS(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=v2(t.repoInfo_,()=>new _E(t.stats_,t.server_)),t.infoData_=new dE,t.infoSyncTree_=new Gh({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=Qr(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),af(t,"connected",!1),t.serverSyncTree_=new Gh({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);Nt(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function u_(t){const n=t.infoData_.getNode(new Te(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Ha(t){return _S({timestamp:u_(t)})}function qh(t,e,n,s,i){t.dataUpdateCount++;const r=new Te(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=Ho(n,c=>ze(c));o=fS(t.serverSyncTree_,r,l,i)}else{const l=ze(n);o=Q0(t.serverSyncTree_,r,l,i)}else if(s){const l=Ho(n,c=>ze(c));o=lS(t.serverSyncTree_,r,l)}else{const l=ze(n);o=Qr(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Ai(t,r)),Nt(t.eventQueue_,a,o)}function Yh(t,e){af(t,"connected",e),e===!1&&BS(t)}function FS(t,e){Ze(e,(n,s)=>{af(t,n,s)})}function af(t,e,n){const s=new Te("/.info/"+e),i=ze(n);t.infoData_.updateSnapshot(s,i);const r=Qr(t.infoSyncTree_,s,i);Nt(t.eventQueue_,s,r)}function lf(t){return t.nextWriteId_++}function $S(t,e,n){const s=dS(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=ze(i).withIndex(e._queryParams.getIndex());Pc(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Qr(t.serverSyncTree_,e._path,r);else{const a=Lr(t.serverSyncTree_,e);o=Q0(t.serverSyncTree_,e._path,r,a)}return Nt(t.eventQueue_,e._path,o),ia(t.serverSyncTree_,e,n,null,!0),r},i=>(Jr(t,"get for query "+Ge(e)+" failed: "+i),Promise.reject(new Error(i))))}function US(t,e,n,s,i){Jr(t,"set",{path:e.toString(),value:n,priority:s});const r=Ha(t),o=ze(n,s),a=Yu(t.serverSyncTree_,e),l=t_(o,a,r),c=lf(t),u=Y0(t.serverSyncTree_,e,l,c,!0);ja(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,p)=>{const y=d==="ok";y||ct("set at "+e+" failed: "+d);const m=es(t.serverSyncTree_,c,!y);Nt(t.eventQueue_,e,m),Oc(t,i,d,p)});const f=uf(t,e);Ai(t,f),Nt(t.eventQueue_,f,[])}function VS(t,e,n,s){Jr(t,"update",{path:e.toString(),value:n});let i=!0;const r=Ha(t),o={};if(Ze(n,(a,l)=>{i=!1,o[a]=e_(Ue(e,a),ze(l),t.serverSyncTree_,r)}),i)Je("update() called with empty data.  Don't do anything."),Oc(t,s,"ok",void 0);else{const a=lf(t),l=aS(t.serverSyncTree_,e,o,a);ja(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const f=c==="ok";f||ct("update at "+e+" failed: "+c);const d=es(t.serverSyncTree_,a,!f),p=d.length>0?Ai(t,e):e;Nt(t.eventQueue_,p,d),Oc(t,s,c,u)}),Ze(n,c=>{const u=uf(t,Ue(e,c));Ai(t,u)}),Nt(t.eventQueue_,e,[])}}function BS(t){Jr(t,"onDisconnectEvents");const e=Ha(t),n=Qo();Ec(t.onDisconnect_,ye(),(i,r)=>{const o=e_(i,r,t.serverSyncTree_,e);M0(n,i,o)});let s=[];Ec(n,ye(),(i,r)=>{s=s.concat(Qr(t.serverSyncTree_,i,r));const o=uf(t,i);Ai(t,o)}),t.onDisconnect_=Qo(),Nt(t.eventQueue_,ye(),s)}function jS(t,e,n){let s;he(e._path)===".info"?s=Pc(t.infoSyncTree_,e,n):s=Pc(t.serverSyncTree_,e,n),l_(t.eventQueue_,e._path,s)}function f_(t,e,n){let s;he(e._path)===".info"?s=ia(t.infoSyncTree_,e,n):s=ia(t.serverSyncTree_,e,n),l_(t.eventQueue_,e._path,s)}function HS(t){t.persistentConnection_&&t.persistentConnection_.interrupt(OS)}function Jr(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Je(n,...e)}function Oc(t,e,n,s){e&&$i(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function d_(t,e,n){return Yu(t.serverSyncTree_,e,n)||te.EMPTY_NODE}function cf(t,e=t.transactionQueueTree_){if(e||Wa(t,e),Vi(e)){const n=p_(t,e);F(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&WS(t,Xr(e),n)}else s_(e)&&Va(e,n=>{cf(t,n)})}function WS(t,e,n){const s=n.map(c=>c.currentWriteId),i=d_(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];F(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const f=lt(e,u.path);r=r.updateChild(f,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Jr(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const f=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(es(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&f.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Wa(t,sf(t.transactionQueueTree_,e)),cf(t,t.transactionQueueTree_),Nt(t.eventQueue_,e,u);for(let d=0;d<f.length;d++)$i(f[d])}else{if(c==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{ct("transaction at "+l.toString()+" failed: "+c);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=c}Ai(t,e)}},o)}function Ai(t,e){const n=h_(t,e),s=Xr(n),i=p_(t,n);return zS(t,i,s),s}function zS(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=lt(n,l.path);let u=!1,f;if(F(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,f=l.abortReason,i=i.concat(es(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=MS)u=!0,f="maxretry",i=i.concat(es(t.serverSyncTree_,l.currentWriteId,!0));else{const d=d_(t,l.path,o);l.currentInputSnapshot=d;const p=e[a].update(d.val());if(p!==void 0){Ba("transaction failed: Data returned ",p,l.path);let y=ze(p);typeof p=="object"&&p!=null&&un(p,".priority")||(y=y.updatePriority(d.getPriority()));const x=l.currentWriteId,g=Ha(t),b=t_(y,d,g);l.currentOutputSnapshotRaw=y,l.currentOutputSnapshotResolved=b,l.currentWriteId=lf(t),o.splice(o.indexOf(x),1),i=i.concat(Y0(t.serverSyncTree_,l.path,b,l.currentWriteId,l.applyLocally)),i=i.concat(es(t.serverSyncTree_,x,!0))}else u=!0,f="nodata",i=i.concat(es(t.serverSyncTree_,l.currentWriteId,!0))}Nt(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(f),!1,null))))}Wa(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)$i(s[a]);cf(t,t.transactionQueueTree_)}function h_(t,e){let n,s=t.transactionQueueTree_;for(n=he(e);n!==null&&Vi(s)===void 0;)s=sf(s,n),e=De(e),n=he(e);return s}function p_(t,e){const n=[];return m_(t,e,n),n.sort((s,i)=>s.order-i.order),n}function m_(t,e,n){const s=Vi(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Va(e,i=>{m_(t,i,n)})}function Wa(t,e){const n=Vi(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,n_(e,n.length>0?n:void 0)}Va(e,s=>{Wa(t,s)})}function uf(t,e){const n=Xr(h_(t,e)),s=sf(t.transactionQueueTree_,e);return xS(s,i=>{Al(t,i)}),Al(t,s),i_(s,i=>{Al(t,i)}),n}function Al(t,e){const n=Vi(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(F(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(F(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(es(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?n_(e,void 0):n.length=r+1,Nt(t.eventQueue_,Xr(e),i);for(let o=0;o<s.length;o++)$i(s[o])}}/**
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
 */function GS(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function KS(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):ct(`Invalid query segment '${n}' in query '${t}'`)}return e}const Qh=function(t,e){const n=qS(t),s=n.namespace;n.domain==="firebase.com"&&On(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&On("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||i2();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new _0(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new Te(n.pathString)}},qS=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(u,f)),u<f&&(i=GS(t.substring(u,f)));const d=KS(t.substring(Math.min(t.length,f)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const y=e.indexOf(".");s=e.substring(0,y).toLowerCase(),n=e.substring(y+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */const Xh="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",YS=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=Xh.charAt(n%64),n=Math.floor(n/64);F(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Xh.charAt(e[i]);return F(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class g_{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ge(this.snapshot.exportVal())}}class __{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class v_{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return F(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class ff{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return me(this._path)?null:Du(this._path)}get ref(){return new fn(this._repo,this._path)}get _queryIdentifier(){const e=Dh(this._queryParams),n=Nu(e);return n==="{}"?"default":n}get _queryObject(){return Dh(this._queryParams)}isEqual(e){if(e=It(e),!(e instanceof ff))return!1;const n=this._repo===e._repo,s=Fu(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+B2(this._path)}}class fn extends ff{constructor(e,n){super(e,n,new Bu,!1)}get parent(){const e=S0(this._path);return e===null?null:new fn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ri{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Te(e),s=Pi(this.ref,e);return new Ri(this._node.getChild(n),s,Ve)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Ri(i,Pi(this.ref,s),Ve)))}hasChild(e){const n=new Te(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ce(t,e){return t=It(t),t._checkNotDeleted("ref"),e!==void 0?Pi(t._root,e):t._root}function Pi(t,e){return t=It(t),he(t._path)===null?AS("child","path",e):a_("child","path",e),new fn(t._repo,Ue(t._path,e))}function In(t,e){t=It(t),of("push",t._path),o_("push",e,t._path,!0);const n=u_(t._repo),s=YS(n),i=Pi(t,s),r=Pi(t,s);let o;return e!=null?o=gn(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function hi(t){return of("remove",t._path),gn(t,null)}function gn(t,e){t=It(t),of("set",t._path),o_("set",e,t._path,!1);const n=new zr;return US(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function bt(t,e){kS("update",e,t._path);const n=new zr;return VS(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function Ot(t){t=It(t);const e=new v_(()=>{}),n=new Zr(e);return $S(t._repo,t,n).then(s=>new Ri(s,new fn(t._repo,t._path),t._queryParams.getIndex()))}class Zr{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new g_("value",this,new Ri(e.snapshotNode,new fn(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new __(this,e,n):null}matches(e){return e instanceof Zr?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class df{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new __(this,e,n):null}createEvent(e,n){F(e.childName!=null,"Child events should have a childName.");const s=Pi(new fn(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new g_(e.type,this,new Ri(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof df?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function QS(t,e,n,s,i){const r=new v_(n,void 0),o=new Zr(r);return jS(t._repo,t,o),()=>f_(t._repo,t,o)}function Mc(t,e,n,s){return QS(t,"value",e)}function XS(t,e,n){let s=null;const i=null;e==="value"?s=new Zr(i):e&&(s=new df(e,i)),f_(t._repo,t,s)}ZE(fn);iS(fn);/**
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
 */const JS="FIREBASE_DATABASE_EMULATOR_HOST",Lc={};let ZS=!1;function eT(t,e,n,s){t.repoInfo_=new _0(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function tT(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||On("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Je("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Qh(r,i),a=o.repoInfo,l;typeof process<"u"&&vh&&(l=vh[JS]),l?(r=`http://${l}?ns=${a.namespace}`,o=Qh(r,i),a=o.repoInfo):o.repoInfo.secure;const c=new m2(t.name,t.options,e);RS("Invalid Firebase Database URL",o),me(o.path)||On("Database URL must point to the root of a Firebase Database (not including a child path).");const u=sT(a,t,c,new p2(t,n));return new iT(u,t)}function nT(t,e){const n=Lc[e];(!n||n[t.key]!==t)&&On(`Database ${e}(${t.repoInfo_}) has already been deleted.`),HS(t),delete n[t.key]}function sT(t,e,n,s){let i=Lc[e.name];i||(i={},Lc[e.name]=i);let r=i[t.toURLString()];return r&&On("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new LS(t,ZS,n,s),i[t.toURLString()]=r,r}class iT{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(DS(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new fn(this._repo,ye())),this._rootInternal}_delete(){return this._rootInternal!==null&&(nT(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&On("Cannot call "+e+" on a deleted database.")}}function y_(t=e0(),e){const n=Ru(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=IC("database");s&&rT(n,...s)}return n}function rT(t,e,n,s={}){t=It(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&On("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&On('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new wo(wo.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:EC(s.mockUserToken,t.app.options.projectId);r=new wo(o)}eT(i,e,n,r)}/**
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
 */function oT(t){JI(Fi),Ii(new js("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return tT(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),rs(yh,bh,t),rs(yh,bh,"esm2017")}An.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};An.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};oT();function hf(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function b_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const aT=b_,x_=new Gr("auth","Firebase",b_());/**
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
 */const ra=new ku("@firebase/auth");function lT(t,...e){ra.logLevel<=Se.WARN&&ra.warn(`Auth (${Fi}): ${t}`,...e)}function Co(t,...e){ra.logLevel<=Se.ERROR&&ra.error(`Auth (${Fi}): ${t}`,...e)}/**
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
 */function cn(t,...e){throw mf(t,...e)}function Bt(t,...e){return mf(t,...e)}function pf(t,e,n){const s=Object.assign(Object.assign({},aT()),{[e]:n});return new Gr("auth","Firebase",s).create(e,{appName:t.name})}function Ds(t){return pf(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function cT(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&cn(t,"argument-error"),pf(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function mf(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return x_.create(t,...e)}function ie(t,e,...n){if(!t)throw mf(e,...n)}function En(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Co(e),new Error(e)}function Mn(t,e){t||En(e)}/**
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
 */function Dc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function uT(){return Jh()==="http:"||Jh()==="https:"}function Jh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function fT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(uT()||TC()||"connection"in navigator)?navigator.onLine:!0}function dT(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class eo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Mn(n>e,"Short delay should be less than long delay!"),this.isMobile=Tu()||Yg()}get(){return fT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function gf(t,e){Mn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class w_{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;En("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;En("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;En("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const hT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const pT=new eo(3e4,6e4);function _f(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Bi(t,e,n,s,i={}){return C_(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Di(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},r);return SC()||(c.referrerPolicy="no-referrer"),w_.fetch()(I_(t,t.config.apiHost,n,a),c)})}async function C_(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},hT),e);try{const i=new gT(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw mo(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw mo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw mo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw mo(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw pf(t,u,c);cn(t,u)}}catch(i){if(i instanceof xs)throw i;cn(t,"network-request-failed",{message:String(i)})}}async function mT(t,e,n,s,i={}){const r=await Bi(t,e,n,s,i);return"mfaPendingCredential"in r&&cn(t,"multi-factor-auth-required",{_serverResponse:r}),r}function I_(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?gf(t.config,i):`${t.config.apiScheme}://${i}`}class gT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Bt(this.auth,"network-request-failed")),pT.get())})}}function mo(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Bt(t,e,s);return i.customData._tokenResponse=n,i}/**
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
 */async function _T(t,e){return Bi(t,"POST","/v1/accounts:delete",e)}async function E_(t,e){return Bi(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function gr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function vT(t,e=!1){const n=It(t),s=await n.getIdToken(e),i=vf(s);ie(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:gr(Rl(i.auth_time)),issuedAtTime:gr(Rl(i.iat)),expirationTime:gr(Rl(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Rl(t){return Number(t)*1e3}function vf(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Co("JWT malformed, contained fewer than 3 sections"),null;try{const i=jo(n);return i?JSON.parse(i):(Co("Failed to decode base64 JWT payload"),null)}catch(i){return Co("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Zh(t){const e=vf(t);return ie(e,"internal-error"),ie(typeof e.exp<"u","internal-error"),ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Dr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof xs&&yT(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function yT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class bT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Fc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=gr(this.lastLoginAt),this.creationTime=gr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function oa(t){var e;const n=t.auth,s=await t.getIdToken(),i=await Dr(t,E_(n,{idToken:s}));ie(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?S_(r.providerUserInfo):[],a=wT(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Fc(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function xT(t){const e=It(t);await oa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function wT(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function S_(t){return t.map(e=>{var{providerId:n}=e,s=hf(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function CT(t,e){const n=await C_(t,{},async()=>{const s=Di({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=I_(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",w_.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function IT(t,e){return Bi(t,"POST","/v2/accounts:revokeToken",_f(t,e))}/**
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
 */class pi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ie(e.idToken,"internal-error"),ie(typeof e.idToken<"u","internal-error"),ie(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Zh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ie(e.length!==0,"internal-error");const n=Zh(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await CT(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new pi;return s&&(ie(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(ie(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(ie(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new pi,this.toJSON())}_performRefresh(){return En("not implemented")}}/**
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
 */function Wn(t,e){ie(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Sn{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=hf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new bT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Fc(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Dr(this,this.stsTokenManager.getToken(this.auth,e));return ie(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return vT(this,e)}reload(){return xT(this)}_assign(e){this!==e&&(ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Sn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await oa(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Mt(this.auth.app))return Promise.reject(Ds(this.auth));const e=await this.getIdToken();return await Dr(this,_T(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const f=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,p=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,m=(a=n.tenantId)!==null&&a!==void 0?a:void 0,x=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(c=n.createdAt)!==null&&c!==void 0?c:void 0,b=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:A,emailVerified:O,isAnonymous:z,providerData:q,stsTokenManager:S}=n;ie(A&&S,e,"internal-error");const D=pi.fromJSON(this.name,S);ie(typeof A=="string",e,"internal-error"),Wn(f,e.name),Wn(d,e.name),ie(typeof O=="boolean",e,"internal-error"),ie(typeof z=="boolean",e,"internal-error"),Wn(p,e.name),Wn(y,e.name),Wn(m,e.name),Wn(x,e.name),Wn(g,e.name),Wn(b,e.name);const P=new Sn({uid:A,auth:e,email:d,emailVerified:O,displayName:f,isAnonymous:z,photoURL:y,phoneNumber:p,tenantId:m,stsTokenManager:D,createdAt:g,lastLoginAt:b});return q&&Array.isArray(q)&&(P.providerData=q.map(j=>Object.assign({},j))),x&&(P._redirectEventId=x),P}static async _fromIdTokenResponse(e,n,s=!1){const i=new pi;i.updateFromServerResponse(n);const r=new Sn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await oa(r),r}static async _fromGetAccountInfoResponse(e,n,s){const i=n.users[0];ie(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?S_(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),a=new pi;a.updateFromIdToken(s);const l=new Sn({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new Fc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,c),l}}/**
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
 */const ep=new Map;function Tn(t){Mn(t instanceof Function,"Expected a class definition");let e=ep.get(t);return e?(Mn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ep.set(t,e),e)}/**
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
 */class T_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}T_.type="NONE";const tp=T_;/**
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
 */function Io(t,e,n){return`firebase:${t}:${e}:${n}`}class mi{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Io(this.userKey,i.apiKey,r),this.fullPersistenceKey=Io("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Sn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new mi(Tn(tp),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||Tn(tp);const o=Io(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const f=Sn._fromJSON(e,u);c!==r&&(a=f),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new mi(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new mi(r,e,s))}}/**
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
 */function np(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(P_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(k_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(O_(e))return"Blackberry";if(M_(e))return"Webos";if(A_(e))return"Safari";if((e.includes("chrome/")||R_(e))&&!e.includes("edge/"))return"Chrome";if(N_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function k_(t=ut()){return/firefox\//i.test(t)}function A_(t=ut()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function R_(t=ut()){return/crios\//i.test(t)}function P_(t=ut()){return/iemobile/i.test(t)}function N_(t=ut()){return/android/i.test(t)}function O_(t=ut()){return/blackberry/i.test(t)}function M_(t=ut()){return/webos/i.test(t)}function yf(t=ut()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ET(t=ut()){var e;return yf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ST(){return kC()&&document.documentMode===10}function L_(t=ut()){return yf(t)||N_(t)||M_(t)||O_(t)||/windows phone/i.test(t)||P_(t)}/**
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
 */function D_(t,e=[]){let n;switch(t){case"Browser":n=np(ut());break;case"Worker":n=`${np(ut())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Fi}/${s}`}/**
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
 */class TT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function kT(t,e={}){return Bi(t,"GET","/v2/passwordPolicy",_f(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const AT=6;class RT{constructor(e){var n,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:AT,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,i,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class PT{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new sp(this),this.idTokenSubscription=new sp(this),this.beforeStateQueue=new TT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=x_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Tn(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await mi.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await E_(this,{idToken:e}),s=await Sn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Mt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await oa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=dT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Mt(this.app))return Promise.reject(Ds(this));const n=e?It(e):null;return n&&ie(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Mt(this.app)?Promise.reject(Ds(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Mt(this.app)?Promise.reject(Ds(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Tn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await kT(this),n=new RT(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Gr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await IT(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Tn(e)||this._popupRedirectResolver;ie(n,this,"argument-error"),this.redirectPersistenceManager=await mi.create(this,[Tn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ie(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=D_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;if(Mt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&lT(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function za(t){return It(t)}class sp{constructor(e){this.auth=e,this.observer=null,this.addObserver=$C(n=>this.observer=n)}get next(){return ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let bf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function NT(t){bf=t}function OT(t){return bf.loadJS(t)}function MT(){return bf.gapiScript}function LT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function DT(t,e){const n=Ru(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(Wo(r,e??{}))return i;cn(i,"already-initialized")}return n.initialize({options:e})}function FT(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Tn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function $T(t,e,n){const s=za(t);ie(s._canInitEmulator,s,"emulator-config-failed"),ie(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=F_(e),{host:o,port:a}=UT(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),VT()}function F_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function UT(t){const e=F_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:ip(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:ip(o)}}}function ip(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function VT(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class $_{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return En("not implemented")}_getIdTokenResponse(e){return En("not implemented")}_linkToIdToken(e,n){return En("not implemented")}_getReauthenticationResolver(e){return En("not implemented")}}/**
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
 */async function gi(t,e){return mT(t,"POST","/v1/accounts:signInWithIdp",_f(t,e))}/**
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
 */const BT="http://localhost";class Gs extends $_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Gs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):cn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=hf(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Gs(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return gi(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,gi(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,gi(e,n)}buildRequest(){const e={requestUri:BT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Di(n)}return e}}/**
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
 */class xf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class to extends xf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class xn extends to{constructor(){super("facebook.com")}static credential(e){return Gs._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xn.credential(e.oauthAccessToken)}catch{return null}}}xn.FACEBOOK_SIGN_IN_METHOD="facebook.com";xn.PROVIDER_ID="facebook.com";/**
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
 */class wn extends to{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Gs._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return wn.credential(n,s)}catch{return null}}}wn.GOOGLE_SIGN_IN_METHOD="google.com";wn.PROVIDER_ID="google.com";/**
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
 */class Jn extends to{constructor(){super("github.com")}static credential(e){return Gs._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jn.credential(e.oauthAccessToken)}catch{return null}}}Jn.GITHUB_SIGN_IN_METHOD="github.com";Jn.PROVIDER_ID="github.com";/**
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
 */class Zn extends to{constructor(){super("twitter.com")}static credential(e,n){return Gs._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Zn.credential(n,s)}catch{return null}}}Zn.TWITTER_SIGN_IN_METHOD="twitter.com";Zn.PROVIDER_ID="twitter.com";/**
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
 */class Ni{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await Sn._fromIdTokenResponse(e,s,i),o=rp(s);return new Ni({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=rp(s);return new Ni({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function rp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class aa extends xs{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,aa.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new aa(e,n,s,i)}}function U_(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?aa._fromErrorAndOperation(t,r,e,s):r})}async function jT(t,e,n=!1){const s=await Dr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ni._forOperation(t,"link",s)}/**
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
 */async function HT(t,e,n=!1){const{auth:s}=t;if(Mt(s.app))return Promise.reject(Ds(s));const i="reauthenticate";try{const r=await Dr(t,U_(s,i,e,t),n);ie(r.idToken,s,"internal-error");const o=vf(r.idToken);ie(o,s,"internal-error");const{sub:a}=o;return ie(t.uid===a,s,"user-mismatch"),Ni._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&cn(s,"user-mismatch"),r}}/**
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
 */async function WT(t,e,n=!1){if(Mt(t.app))return Promise.reject(Ds(t));const s="signIn",i=await U_(t,s,e),r=await Ni._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}function zT(t,e,n,s){return It(t).onIdTokenChanged(e,n,s)}function GT(t,e,n){return It(t).beforeAuthStateChanged(e,n)}const la="__sak";/**
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
 */class V_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(la,"1"),this.storage.removeItem(la),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const KT=1e3,qT=10;class B_ extends V_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=L_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);ST()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,qT):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},KT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}B_.type="LOCAL";const YT=B_;/**
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
 */class j_ extends V_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}j_.type="SESSION";const H_=j_;/**
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
 */function QT(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ga{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Ga(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await QT(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ga.receivers=[];/**
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
 */function wf(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class XT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=wf("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(f){const d=f;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function an(){return window}function JT(t){an().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function W_(){return typeof an().WorkerGlobalScope<"u"&&typeof an().importScripts=="function"}async function ZT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function e6(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function t6(){return W_()?self:null}/**
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
 */const z_="firebaseLocalStorageDb",n6=1,ca="firebaseLocalStorage",G_="fbase_key";class no{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ka(t,e){return t.transaction([ca],e?"readwrite":"readonly").objectStore(ca)}function s6(){const t=indexedDB.deleteDatabase(z_);return new no(t).toPromise()}function $c(){const t=indexedDB.open(z_,n6);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(ca,{keyPath:G_})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(ca)?e(s):(s.close(),await s6(),e(await $c()))})})}async function op(t,e,n){const s=Ka(t,!0).put({[G_]:e,value:n});return new no(s).toPromise()}async function i6(t,e){const n=Ka(t,!1).get(e),s=await new no(n).toPromise();return s===void 0?null:s.value}function ap(t,e){const n=Ka(t,!0).delete(e);return new no(n).toPromise()}const r6=800,o6=3;class K_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await $c(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>o6)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return W_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ga._getInstance(t6()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await ZT(),!this.activeServiceWorker)return;this.sender=new XT(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||e6()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await $c();return await op(e,la,"1"),await ap(e,la),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>op(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>i6(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ap(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Ka(i,!1).getAll();return new no(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),r6)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}K_.type="LOCAL";const a6=K_;new eo(3e4,6e4);/**
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
 */function q_(t,e){return e?Tn(e):(ie(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Cf extends $_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return gi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return gi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return gi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function l6(t){return WT(t.auth,new Cf(t),t.bypassAuthState)}function c6(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),HT(n,new Cf(t),t.bypassAuthState)}async function u6(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),jT(n,new Cf(t),t.bypassAuthState)}/**
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
 */class Y_{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return l6;case"linkViaPopup":case"linkViaRedirect":return u6;case"reauthViaPopup":case"reauthViaRedirect":return c6;default:cn(this.auth,"internal-error")}}resolve(e){Mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const f6=new eo(2e3,1e4);async function lp(t,e,n){if(Mt(t.app))return Promise.reject(Bt(t,"operation-not-supported-in-this-environment"));const s=za(t);cT(t,e,xf);const i=q_(s,n);return new Os(s,"signInViaPopup",e,i).executeNotNull()}class Os extends Y_{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Os.currentPopupAction&&Os.currentPopupAction.cancel(),Os.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ie(e,this.auth,"internal-error"),e}async onExecution(){Mn(this.filter.length===1,"Popup operations only handle one event");const e=wf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Bt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Bt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Os.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Bt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,f6.get())};e()}}Os.currentPopupAction=null;/**
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
 */const d6="pendingRedirect",Eo=new Map;class h6 extends Y_{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Eo.get(this.auth._key());if(!e){try{const s=await p6(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Eo.set(this.auth._key(),e)}return this.bypassAuthState||Eo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function p6(t,e){const n=_6(e),s=g6(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function m6(t,e){Eo.set(t._key(),e)}function g6(t){return Tn(t._redirectPersistence)}function _6(t){return Io(d6,t.config.apiKey,t.name)}async function v6(t,e,n=!1){if(Mt(t.app))return Promise.reject(Ds(t));const s=za(t),i=q_(s,e),o=await new h6(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const y6=10*60*1e3;class b6{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!x6(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Q_(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Bt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=y6&&this.cachedEventUids.clear(),this.cachedEventUids.has(cp(e))}saveEventToCache(e){this.cachedEventUids.add(cp(e)),this.lastProcessedEventTime=Date.now()}}function cp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Q_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function x6(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Q_(t);default:return!1}}/**
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
 */async function w6(t,e={}){return Bi(t,"GET","/v1/projects",e)}/**
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
 */const C6=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,I6=/^https?/;async function E6(t){if(t.config.emulator)return;const{authorizedDomains:e}=await w6(t);for(const n of e)try{if(S6(n))return}catch{}cn(t,"unauthorized-domain")}function S6(t){const e=Dc(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!I6.test(n))return!1;if(C6.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const T6=new eo(3e4,6e4);function up(){const t=an().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function k6(t){return new Promise((e,n)=>{var s,i,r;function o(){up(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{up(),n(Bt(t,"network-request-failed"))},timeout:T6.get()})}if(!((i=(s=an().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=an().gapi)===null||r===void 0)&&r.load)o();else{const a=LT("iframefcb");return an()[a]=()=>{gapi.load?o():n(Bt(t,"network-request-failed"))},OT(`${MT()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw So=null,e})}let So=null;function A6(t){return So=So||k6(t),So}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const R6=new eo(5e3,15e3),P6="__/auth/iframe",N6="emulator/auth/iframe",O6={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},M6=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function L6(t){const e=t.config;ie(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?gf(e,N6):`https://${t.config.authDomain}/${P6}`,s={apiKey:e.apiKey,appName:t.name,v:Fi},i=M6.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Di(s).slice(1)}`}async function D6(t){const e=await A6(t),n=an().gapi;return ie(n,t,"internal-error"),e.open({where:document.body,url:L6(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:O6,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Bt(t,"network-request-failed"),a=an().setTimeout(()=>{r(o)},R6.get());function l(){an().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const F6={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$6=500,U6=600,V6="_blank",B6="http://localhost";class fp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function j6(t,e,n,s=$6,i=U6){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},F6),{width:s.toString(),height:i.toString(),top:r,left:o}),c=ut().toLowerCase();n&&(a=R_(c)?V6:n),k_(c)&&(e=e||B6,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[p,y])=>`${d}${p}=${y},`,"");if(ET(c)&&a!=="_self")return H6(e||"",a),new fp(null);const f=window.open(e||"",a,u);ie(f,t,"popup-blocked");try{f.focus()}catch{}return new fp(f)}function H6(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const W6="__/auth/handler",z6="emulator/auth/handler",G6=encodeURIComponent("fac");async function dp(t,e,n,s,i,r){ie(t.config.authDomain,t,"auth-domain-config-required"),ie(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Fi,eventId:i};if(e instanceof xf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",gc(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,f]of Object.entries({}))o[u]=f}if(e instanceof to){const u=e.getScopes().filter(f=>f!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${G6}=${encodeURIComponent(l)}`:"";return`${K6(t)}?${Di(a).slice(1)}${c}`}function K6({config:t}){return t.emulator?gf(t,z6):`https://${t.authDomain}/${W6}`}/**
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
 */const Pl="webStorageSupport";class q6{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=H_,this._completeRedirectFn=v6,this._overrideRedirectResult=m6}async _openPopup(e,n,s,i){var r;Mn((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await dp(e,n,s,Dc(),i);return j6(e,o,wf())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await dp(e,n,s,Dc(),i);return JT(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Mn(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await D6(e),s=new b6(e);return n.register("authEvent",i=>(ie(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Pl,{type:Pl},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Pl];o!==void 0&&n(!!o),cn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=E6(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return L_()||A_()||yf()}}const Y6=q6;var hp="@firebase/auth",pp="1.9.0";/**
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
 */class Q6{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function X6(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function J6(t){Ii(new js("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;ie(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:D_(t)},c=new PT(s,i,r,l);return FT(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Ii(new js("auth-internal",e=>{const n=za(e.getProvider("auth").getImmediate());return(s=>new Q6(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),rs(hp,pp,X6(t)),rs(hp,pp,"esm2017")}/**
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
 */const Z6=5*60,e3=qg("authIdTokenMaxAge")||Z6;let mp=null;const t3=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>e3)return;const i=n==null?void 0:n.token;mp!==i&&(mp=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Uc(t=e0()){const e=Ru(t,"auth");if(e.isInitialized())return e.getImmediate();const n=DT(t,{popupRedirectResolver:Y6,persistence:[a6,YT,H_]}),s=qg("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=t3(r.toString());GT(n,o,()=>o(n.currentUser)),zT(n,a=>o(a))}}const i=Gg("auth");return i&&$T(n,`http://${i}`),n}function n3(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}NT({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=Bt("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",n3().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});J6("Browser");const s3={apiKey:"AIzaSyDReE9mw5-7NXaoCIdc4sVNfF_EgqxW93s",authDomain:"donghuaapi.firebaseapp.com",databaseURL:"https://donghuaapi-default-rtdb.firebaseio.com",projectId:"donghuaapi",storageBucket:"donghuaapi.firebasestorage.app",messagingSenderId:"621954846745",appId:"1:621954846745:web:2ce4962cbe1836a81c9a88",measurementId:"G-RM00X5VKRN"},X_=Zg(s3);Uc(X_);const de=y_(X_),zt=bs("load",()=>{const t=se(!1),e=Cu();return e.beforeEach((n,s,i)=>{t.value=!0,setTimeout(()=>i(),100)}),e.afterEach(()=>{setTimeout(()=>{t.value=!1},100)}),{loading:t}}),i3={};var Vc=null;function r3(t){try{return crypto.getRandomValues(new Uint8Array(t))}catch{}try{return i3.randomBytes(t)}catch{}if(!Vc)throw Error("Neither WebCryptoAPI nor a crypto module is available. Use bcrypt.setRandomFallback to set an alternative");return Vc(t)}function o3(t){Vc=t}function If(t,e){if(t=t||Ef,typeof t!="number")throw Error("Illegal arguments: "+typeof t+", "+typeof e);t<4?t=4:t>31&&(t=31);var n=[];return n.push("$2b$"),t<10&&n.push("0"),n.push(t.toString()),n.push("$"),n.push(ua(r3(Fr),Fr)),n.join("")}function J_(t,e,n){if(typeof e=="function"&&(n=e,e=void 0),typeof t=="function"&&(n=t,t=void 0),typeof t>"u")t=Ef;else if(typeof t!="number")throw Error("illegal arguments: "+typeof t);function s(i){Ft(function(){try{i(null,If(t))}catch(r){i(r)}})}if(n){if(typeof n!="function")throw Error("Illegal callback: "+typeof n);s(n)}else return new Promise(function(i,r){s(function(o,a){if(o){r(o);return}i(a)})})}function Z_(t,e){if(typeof e>"u"&&(e=Ef),typeof e=="number"&&(e=If(e)),typeof t!="string"||typeof e!="string")throw Error("Illegal arguments: "+typeof t+", "+typeof e);return Bc(t,e)}function ev(t,e,n,s){function i(r){typeof t=="string"&&typeof e=="number"?J_(e,function(o,a){Bc(t,a,r,s)}):typeof t=="string"&&typeof e=="string"?Bc(t,e,r,s):Ft(r.bind(this,Error("Illegal arguments: "+typeof t+", "+typeof e)))}if(n){if(typeof n!="function")throw Error("Illegal callback: "+typeof n);i(n)}else return new Promise(function(r,o){i(function(a,l){if(a){o(a);return}r(l)})})}function tv(t,e){for(var n=t.length^e.length,s=0;s<t.length;++s)n|=t.charCodeAt(s)^e.charCodeAt(s);return n===0}function a3(t,e){if(typeof t!="string"||typeof e!="string")throw Error("Illegal arguments: "+typeof t+", "+typeof e);return e.length!==60?!1:tv(Z_(t,e.substring(0,e.length-31)),e)}function l3(t,e,n,s){function i(r){if(typeof t!="string"||typeof e!="string"){Ft(r.bind(this,Error("Illegal arguments: "+typeof t+", "+typeof e)));return}if(e.length!==60){Ft(r.bind(this,null,!1));return}ev(t,e.substring(0,29),function(o,a){o?r(o):r(null,tv(a,e))},s)}if(n){if(typeof n!="function")throw Error("Illegal callback: "+typeof n);i(n)}else return new Promise(function(r,o){i(function(a,l){if(a){o(a);return}r(l)})})}function c3(t){if(typeof t!="string")throw Error("Illegal arguments: "+typeof t);return parseInt(t.split("$")[2],10)}function u3(t){if(typeof t!="string")throw Error("Illegal arguments: "+typeof t);if(t.length!==60)throw Error("Illegal hash length: "+t.length+" != 60");return t.substring(0,29)}function f3(t){if(typeof t!="string")throw Error("Illegal arguments: "+typeof t);return nv(t)>72}var Ft=typeof process<"u"&&process&&typeof process.nextTick=="function"?typeof setImmediate=="function"?setImmediate:process.nextTick:setTimeout;function nv(t){for(var e=0,n=0,s=0;s<t.length;++s)n=t.charCodeAt(s),n<128?e+=1:n<2048?e+=2:(n&64512)===55296&&(t.charCodeAt(s+1)&64512)===56320?(++s,e+=4):e+=3;return e}function d3(t){for(var e=0,n,s,i=new Array(nv(t)),r=0,o=t.length;r<o;++r)n=t.charCodeAt(r),n<128?i[e++]=n:n<2048?(i[e++]=n>>6|192,i[e++]=n&63|128):(n&64512)===55296&&((s=t.charCodeAt(r+1))&64512)===56320?(n=65536+((n&1023)<<10)+(s&1023),++r,i[e++]=n>>18|240,i[e++]=n>>12&63|128,i[e++]=n>>6&63|128,i[e++]=n&63|128):(i[e++]=n>>12|224,i[e++]=n>>6&63|128,i[e++]=n&63|128);return i}var ei="./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),zn=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,54,55,56,57,58,59,60,61,62,63,-1,-1,-1,-1,-1,-1,-1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,-1,-1,-1,-1,-1,-1,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,-1,-1,-1,-1,-1];function ua(t,e){var n=0,s=[],i,r;if(e<=0||e>t.length)throw Error("Illegal len: "+e);for(;n<e;){if(i=t[n++]&255,s.push(ei[i>>2&63]),i=(i&3)<<4,n>=e){s.push(ei[i&63]);break}if(r=t[n++]&255,i|=r>>4&15,s.push(ei[i&63]),i=(r&15)<<2,n>=e){s.push(ei[i&63]);break}r=t[n++]&255,i|=r>>6&3,s.push(ei[i&63]),s.push(ei[r&63])}return s.join("")}function sv(t,e){var n=0,s=t.length,i=0,r=[],o,a,l,c,u,f;if(e<=0)throw Error("Illegal len: "+e);for(;n<s-1&&i<e&&(f=t.charCodeAt(n++),o=f<zn.length?zn[f]:-1,f=t.charCodeAt(n++),a=f<zn.length?zn[f]:-1,!(o==-1||a==-1||(u=o<<2>>>0,u|=(a&48)>>4,r.push(String.fromCharCode(u)),++i>=e||n>=s)||(f=t.charCodeAt(n++),l=f<zn.length?zn[f]:-1,l==-1)||(u=(a&15)<<4>>>0,u|=(l&60)>>2,r.push(String.fromCharCode(u)),++i>=e||n>=s)));)f=t.charCodeAt(n++),c=f<zn.length?zn[f]:-1,u=(l&3)<<6>>>0,u|=c,r.push(String.fromCharCode(u)),++i;var d=[];for(n=0;n<i;n++)d.push(r[n].charCodeAt(0));return d}var Fr=16,Ef=10,h3=16,p3=100,gp=[608135816,2242054355,320440878,57701188,2752067618,698298832,137296536,3964562569,1160258022,953160567,3193202383,887688300,3232508343,3380367581,1065670069,3041331479,2450970073,2306472731],_p=[3509652390,2564797868,805139163,3491422135,3101798381,1780907670,3128725573,4046225305,614570311,3012652279,134345442,2240740374,1667834072,1901547113,2757295779,4103290238,227898511,1921955416,1904987480,2182433518,2069144605,3260701109,2620446009,720527379,3318853667,677414384,3393288472,3101374703,2390351024,1614419982,1822297739,2954791486,3608508353,3174124327,2024746970,1432378464,3864339955,2857741204,1464375394,1676153920,1439316330,715854006,3033291828,289532110,2706671279,2087905683,3018724369,1668267050,732546397,1947742710,3462151702,2609353502,2950085171,1814351708,2050118529,680887927,999245976,1800124847,3300911131,1713906067,1641548236,4213287313,1216130144,1575780402,4018429277,3917837745,3693486850,3949271944,596196993,3549867205,258830323,2213823033,772490370,2760122372,1774776394,2652871518,566650946,4142492826,1728879713,2882767088,1783734482,3629395816,2517608232,2874225571,1861159788,326777828,3124490320,2130389656,2716951837,967770486,1724537150,2185432712,2364442137,1164943284,2105845187,998989502,3765401048,2244026483,1075463327,1455516326,1322494562,910128902,469688178,1117454909,936433444,3490320968,3675253459,1240580251,122909385,2157517691,634681816,4142456567,3825094682,3061402683,2540495037,79693498,3249098678,1084186820,1583128258,426386531,1761308591,1047286709,322548459,995290223,1845252383,2603652396,3431023940,2942221577,3202600964,3727903485,1712269319,422464435,3234572375,1170764815,3523960633,3117677531,1434042557,442511882,3600875718,1076654713,1738483198,4213154764,2393238008,3677496056,1014306527,4251020053,793779912,2902807211,842905082,4246964064,1395751752,1040244610,2656851899,3396308128,445077038,3742853595,3577915638,679411651,2892444358,2354009459,1767581616,3150600392,3791627101,3102740896,284835224,4246832056,1258075500,768725851,2589189241,3069724005,3532540348,1274779536,3789419226,2764799539,1660621633,3471099624,4011903706,913787905,3497959166,737222580,2514213453,2928710040,3937242737,1804850592,3499020752,2949064160,2386320175,2390070455,2415321851,4061277028,2290661394,2416832540,1336762016,1754252060,3520065937,3014181293,791618072,3188594551,3933548030,2332172193,3852520463,3043980520,413987798,3465142937,3030929376,4245938359,2093235073,3534596313,375366246,2157278981,2479649556,555357303,3870105701,2008414854,3344188149,4221384143,3956125452,2067696032,3594591187,2921233993,2428461,544322398,577241275,1471733935,610547355,4027169054,1432588573,1507829418,2025931657,3646575487,545086370,48609733,2200306550,1653985193,298326376,1316178497,3007786442,2064951626,458293330,2589141269,3591329599,3164325604,727753846,2179363840,146436021,1461446943,4069977195,705550613,3059967265,3887724982,4281599278,3313849956,1404054877,2845806497,146425753,1854211946,1266315497,3048417604,3681880366,3289982499,290971e4,1235738493,2632868024,2414719590,3970600049,1771706367,1449415276,3266420449,422970021,1963543593,2690192192,3826793022,1062508698,1531092325,1804592342,2583117782,2714934279,4024971509,1294809318,4028980673,1289560198,2221992742,1669523910,35572830,157838143,1052438473,1016535060,1802137761,1753167236,1386275462,3080475397,2857371447,1040679964,2145300060,2390574316,1461121720,2956646967,4031777805,4028374788,33600511,2920084762,1018524850,629373528,3691585981,3515945977,2091462646,2486323059,586499841,988145025,935516892,3367335476,2599673255,2839830854,265290510,3972581182,2759138881,3795373465,1005194799,847297441,406762289,1314163512,1332590856,1866599683,4127851711,750260880,613907577,1450815602,3165620655,3734664991,3650291728,3012275730,3704569646,1427272223,778793252,1343938022,2676280711,2052605720,1946737175,3164576444,3914038668,3967478842,3682934266,1661551462,3294938066,4011595847,840292616,3712170807,616741398,312560963,711312465,1351876610,322626781,1910503582,271666773,2175563734,1594956187,70604529,3617834859,1007753275,1495573769,4069517037,2549218298,2663038764,504708206,2263041392,3941167025,2249088522,1514023603,1998579484,1312622330,694541497,2582060303,2151582166,1382467621,776784248,2618340202,3323268794,2497899128,2784771155,503983604,4076293799,907881277,423175695,432175456,1378068232,4145222326,3954048622,3938656102,3820766613,2793130115,2977904593,26017576,3274890735,3194772133,1700274565,1756076034,4006520079,3677328699,720338349,1533947780,354530856,688349552,3973924725,1637815568,332179504,3949051286,53804574,2852348879,3044236432,1282449977,3583942155,3416972820,4006381244,1617046695,2628476075,3002303598,1686838959,431878346,2686675385,1700445008,1080580658,1009431731,832498133,3223435511,2605976345,2271191193,2516031870,1648197032,4164389018,2548247927,300782431,375919233,238389289,3353747414,2531188641,2019080857,1475708069,455242339,2609103871,448939670,3451063019,1395535956,2413381860,1841049896,1491858159,885456874,4264095073,4001119347,1565136089,3898914787,1108368660,540939232,1173283510,2745871338,3681308437,4207628240,3343053890,4016749493,1699691293,1103962373,3625875870,2256883143,3830138730,1031889488,3479347698,1535977030,4236805024,3251091107,2132092099,1774941330,1199868427,1452454533,157007616,2904115357,342012276,595725824,1480756522,206960106,497939518,591360097,863170706,2375253569,3596610801,1814182875,2094937945,3421402208,1082520231,3463918190,2785509508,435703966,3908032597,1641649973,2842273706,3305899714,1510255612,2148256476,2655287854,3276092548,4258621189,236887753,3681803219,274041037,1734335097,3815195456,3317970021,1899903192,1026095262,4050517792,356393447,2410691914,3873677099,3682840055,3913112168,2491498743,4132185628,2489919796,1091903735,1979897079,3170134830,3567386728,3557303409,857797738,1136121015,1342202287,507115054,2535736646,337727348,3213592640,1301675037,2528481711,1895095763,1721773893,3216771564,62756741,2142006736,835421444,2531993523,1442658625,3659876326,2882144922,676362277,1392781812,170690266,3921047035,1759253602,3611846912,1745797284,664899054,1329594018,3901205900,3045908486,2062866102,2865634940,3543621612,3464012697,1080764994,553557557,3656615353,3996768171,991055499,499776247,1265440854,648242737,3940784050,980351604,3713745714,1749149687,3396870395,4211799374,3640570775,1161844396,3125318951,1431517754,545492359,4268468663,3499529547,1437099964,2702547544,3433638243,2581715763,2787789398,1060185593,1593081372,2418618748,4260947970,69676912,2159744348,86519011,2512459080,3838209314,1220612927,3339683548,133810670,1090789135,1078426020,1569222167,845107691,3583754449,4072456591,1091646820,628848692,1613405280,3757631651,526609435,236106946,48312990,2942717905,3402727701,1797494240,859738849,992217954,4005476642,2243076622,3870952857,3732016268,765654824,3490871365,2511836413,1685915746,3888969200,1414112111,2273134842,3281911079,4080962846,172450625,2569994100,980381355,4109958455,2819808352,2716589560,2568741196,3681446669,3329971472,1835478071,660984891,3704678404,4045999559,3422617507,3040415634,1762651403,1719377915,3470491036,2693910283,3642056355,3138596744,1364962596,2073328063,1983633131,926494387,3423689081,2150032023,4096667949,1749200295,3328846651,309677260,2016342300,1779581495,3079819751,111262694,1274766160,443224088,298511866,1025883608,3806446537,1145181785,168956806,3641502830,3584813610,1689216846,3666258015,3200248200,1692713982,2646376535,4042768518,1618508792,1610833997,3523052358,4130873264,2001055236,3610705100,2202168115,4028541809,2961195399,1006657119,2006996926,3186142756,1430667929,3210227297,1314452623,4074634658,4101304120,2273951170,1399257539,3367210612,3027628629,1190975929,2062231137,2333990788,2221543033,2438960610,1181637006,548689776,2362791313,3372408396,3104550113,3145860560,296247880,1970579870,3078560182,3769228297,1714227617,3291629107,3898220290,166772364,1251581989,493813264,448347421,195405023,2709975567,677966185,3703036547,1463355134,2715995803,1338867538,1343315457,2802222074,2684532164,233230375,2599980071,2000651841,3277868038,1638401717,4028070440,3237316320,6314154,819756386,300326615,590932579,1405279636,3267499572,3150704214,2428286686,3959192993,3461946742,1862657033,1266418056,963775037,2089974820,2263052895,1917689273,448879540,3550394620,3981727096,150775221,3627908307,1303187396,508620638,2975983352,2726630617,1817252668,1876281319,1457606340,908771278,3720792119,3617206836,2455994898,1729034894,1080033504,976866871,3556439503,2881648439,1522871579,1555064734,1336096578,3548522304,2579274686,3574697629,3205460757,3593280638,3338716283,3079412587,564236357,2993598910,1781952180,1464380207,3163844217,3332601554,1699332808,1393555694,1183702653,3581086237,1288719814,691649499,2847557200,2895455976,3193889540,2717570544,1781354906,1676643554,2592534050,3230253752,1126444790,2770207658,2633158820,2210423226,2615765581,2414155088,3127139286,673620729,2805611233,1269405062,4015350505,3341807571,4149409754,1057255273,2012875353,2162469141,2276492801,2601117357,993977747,3918593370,2654263191,753973209,36408145,2530585658,25011837,3520020182,2088578344,530523599,2918365339,1524020338,1518925132,3760827505,3759777254,1202760957,3985898139,3906192525,674977740,4174734889,2031300136,2019492241,3983892565,4153806404,3822280332,352677332,2297720250,60907813,90501309,3286998549,1016092578,2535922412,2839152426,457141659,509813237,4120667899,652014361,1966332200,2975202805,55981186,2327461051,676427537,3255491064,2882294119,3433927263,1307055953,942726286,933058658,2468411793,3933900994,4215176142,1361170020,2001714738,2830558078,3274259782,1222529897,1679025792,2729314320,3714953764,1770335741,151462246,3013232138,1682292957,1483529935,471910574,1539241949,458788160,3436315007,1807016891,3718408830,978976581,1043663428,3165965781,1927990952,4200891579,2372276910,3208408903,3533431907,1412390302,2931980059,4132332400,1947078029,3881505623,4168226417,2941484381,1077988104,1320477388,886195818,18198404,3786409e3,2509781533,112762804,3463356488,1866414978,891333506,18488651,661792760,1628790961,3885187036,3141171499,876946877,2693282273,1372485963,791857591,2686433993,3759982718,3167212022,3472953795,2716379847,445679433,3561995674,3504004811,3574258232,54117162,3331405415,2381918588,3769707343,4154350007,1140177722,4074052095,668550556,3214352940,367459370,261225585,2610173221,4209349473,3468074219,3265815641,314222801,3066103646,3808782860,282218597,3406013506,3773591054,379116347,1285071038,846784868,2669647154,3771962079,3550491691,2305946142,453669953,1268987020,3317592352,3279303384,3744833421,2610507566,3859509063,266596637,3847019092,517658769,3462560207,3443424879,370717030,4247526661,2224018117,4143653529,4112773975,2788324899,2477274417,1456262402,2901442914,1517677493,1846949527,2295493580,3734397586,2176403920,1280348187,1908823572,3871786941,846861322,1172426758,3287448474,3383383037,1655181056,3139813346,901632758,1897031941,2986607138,3066810236,3447102507,1393639104,373351379,950779232,625454576,3124240540,4148612726,2007998917,544563296,2244738638,2330496472,2058025392,1291430526,424198748,50039436,29584100,3605783033,2429876329,2791104160,1057563949,3255363231,3075367218,3463963227,1469046755,985887462],iv=[1332899944,1700884034,1701343084,1684370003,1668446532,1869963892];function $r(t,e,n,s){var i,r=t[e],o=t[e+1];return r^=n[0],i=s[r>>>24],i+=s[256|r>>16&255],i^=s[512|r>>8&255],i+=s[768|r&255],o^=i^n[1],i=s[o>>>24],i+=s[256|o>>16&255],i^=s[512|o>>8&255],i+=s[768|o&255],r^=i^n[2],i=s[r>>>24],i+=s[256|r>>16&255],i^=s[512|r>>8&255],i+=s[768|r&255],o^=i^n[3],i=s[o>>>24],i+=s[256|o>>16&255],i^=s[512|o>>8&255],i+=s[768|o&255],r^=i^n[4],i=s[r>>>24],i+=s[256|r>>16&255],i^=s[512|r>>8&255],i+=s[768|r&255],o^=i^n[5],i=s[o>>>24],i+=s[256|o>>16&255],i^=s[512|o>>8&255],i+=s[768|o&255],r^=i^n[6],i=s[r>>>24],i+=s[256|r>>16&255],i^=s[512|r>>8&255],i+=s[768|r&255],o^=i^n[7],i=s[o>>>24],i+=s[256|o>>16&255],i^=s[512|o>>8&255],i+=s[768|o&255],r^=i^n[8],i=s[r>>>24],i+=s[256|r>>16&255],i^=s[512|r>>8&255],i+=s[768|r&255],o^=i^n[9],i=s[o>>>24],i+=s[256|o>>16&255],i^=s[512|o>>8&255],i+=s[768|o&255],r^=i^n[10],i=s[r>>>24],i+=s[256|r>>16&255],i^=s[512|r>>8&255],i+=s[768|r&255],o^=i^n[11],i=s[o>>>24],i+=s[256|o>>16&255],i^=s[512|o>>8&255],i+=s[768|o&255],r^=i^n[12],i=s[r>>>24],i+=s[256|r>>16&255],i^=s[512|r>>8&255],i+=s[768|r&255],o^=i^n[13],i=s[o>>>24],i+=s[256|o>>16&255],i^=s[512|o>>8&255],i+=s[768|o&255],r^=i^n[14],i=s[r>>>24],i+=s[256|r>>16&255],i^=s[512|r>>8&255],i+=s[768|r&255],o^=i^n[15],i=s[o>>>24],i+=s[256|o>>16&255],i^=s[512|o>>8&255],i+=s[768|o&255],r^=i^n[16],t[e]=o^n[h3+1],t[e+1]=r,t}function si(t,e){for(var n=0,s=0;n<4;++n)s=s<<8|t[e]&255,e=(e+1)%t.length;return{key:s,offp:e}}function vp(t,e,n){for(var s=0,i=[0,0],r=e.length,o=n.length,a,l=0;l<r;l++)a=si(t,s),s=a.offp,e[l]=e[l]^a.key;for(l=0;l<r;l+=2)i=$r(i,0,e,n),e[l]=i[0],e[l+1]=i[1];for(l=0;l<o;l+=2)i=$r(i,0,e,n),n[l]=i[0],n[l+1]=i[1]}function m3(t,e,n,s){for(var i=0,r=[0,0],o=n.length,a=s.length,l,c=0;c<o;c++)l=si(e,i),i=l.offp,n[c]=n[c]^l.key;for(i=0,c=0;c<o;c+=2)l=si(t,i),i=l.offp,r[0]^=l.key,l=si(t,i),i=l.offp,r[1]^=l.key,r=$r(r,0,n,s),n[c]=r[0],n[c+1]=r[1];for(c=0;c<a;c+=2)l=si(t,i),i=l.offp,r[0]^=l.key,l=si(t,i),i=l.offp,r[1]^=l.key,r=$r(r,0,n,s),s[c]=r[0],s[c+1]=r[1]}function yp(t,e,n,s,i){var r=iv.slice(),o=r.length,a;if(n<4||n>31)if(a=Error("Illegal number of rounds (4-31): "+n),s){Ft(s.bind(this,a));return}else throw a;if(e.length!==Fr)if(a=Error("Illegal salt length: "+e.length+" != "+Fr),s){Ft(s.bind(this,a));return}else throw a;n=1<<n>>>0;var l,c,u=0,f;typeof Int32Array=="function"?(l=new Int32Array(gp),c=new Int32Array(_p)):(l=gp.slice(),c=_p.slice()),m3(e,t,l,c);function d(){if(i&&i(u/n),u<n)for(var y=Date.now();u<n&&(u=u+1,vp(t,l,c),vp(e,l,c),!(Date.now()-y>p3)););else{for(u=0;u<64;u++)for(f=0;f<o>>1;f++)$r(r,f<<1,l,c);var m=[];for(u=0;u<o;u++)m.push((r[u]>>24&255)>>>0),m.push((r[u]>>16&255)>>>0),m.push((r[u]>>8&255)>>>0),m.push((r[u]&255)>>>0);if(s){s(null,m);return}else return m}s&&Ft(d)}if(typeof s<"u")d();else for(var p;;)if(typeof(p=d())<"u")return p||[]}function Bc(t,e,n,s){var i;if(typeof t!="string"||typeof e!="string")if(i=Error("Invalid string / salt: Not a string"),n){Ft(n.bind(this,i));return}else throw i;var r,o;if(e.charAt(0)!=="$"||e.charAt(1)!=="2")if(i=Error("Invalid salt version: "+e.substring(0,2)),n){Ft(n.bind(this,i));return}else throw i;if(e.charAt(2)==="$")r="\0",o=3;else{if(r=e.charAt(2),r!=="a"&&r!=="b"&&r!=="y"||e.charAt(3)!=="$")if(i=Error("Invalid salt revision: "+e.substring(2,4)),n){Ft(n.bind(this,i));return}else throw i;o=4}if(e.charAt(o+2)>"$")if(i=Error("Missing salt rounds"),n){Ft(n.bind(this,i));return}else throw i;var a=parseInt(e.substring(o,o+1),10)*10,l=parseInt(e.substring(o+1,o+2),10),c=a+l,u=e.substring(o+3,o+25);t+=r>="a"?"\0":"";var f=d3(t),d=sv(u,Fr);function p(y){var m=[];return m.push("$2"),r>="a"&&m.push(r),m.push("$"),c<10&&m.push("0"),m.push(c.toString()),m.push("$"),m.push(ua(d,d.length)),m.push(ua(y,iv.length*4-1)),m.join("")}if(typeof n>"u")return p(yp(f,d,c));yp(f,d,c,function(y,m){y?n(y,null):n(null,p(m))},s)}function g3(t,e){return ua(t,e)}function _3(t,e){return sv(t,e)}const bp={setRandomFallback:o3,genSaltSync:If,genSalt:J_,hashSync:Z_,hash:ev,compareSync:a3,compare:l3,getRounds:c3,getSalt:u3,truncates:f3,encodeBase64:g3,decodeBase64:_3},Gt=bs("login",()=>{const t=Cu(),e=se(""),n=se(""),s=se(""),i=se(""),r=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,o=se([]),a=se(null),l=ws(),c=async()=>{try{const S=await Ot(ce(de,"users"));if(S.exists()){const D=S.val();o.value=Object.entries(D).map(([P,j])=>({firebaseId:P,...j}))}}catch(S){console.error("Lỗi khi lấy dữ liệu users:",S)}},u=async S=>{const D=Date.now().toString(),P=navigator.userAgent;return await gn(ce(de,`users/${S}/sessions/${D}`),{device:P,lastLogin:new Date().toISOString()}),D},f=async()=>{if(!e.value.trim()||!n.value.trim()){g("Vui lòng nhập tài khoản / mật khẩu");return}if(!r.test(e.value)){g("Email không hợp lệ");return}const S=o.value.find(P=>P.email===e.value.trim());if(!S){g("Tài khoản không tồn tại");return}if(!await bp.compare(n.value.trim(),S.passwordHash)){g("Sai mật khẩu");return}g("Đăng nhập thành công");try{const P=await u(S.firebaseId);localStorage.setItem("sessionId",P),localStorage.setItem("userId",S.firebaseId),a.value=S,await t.push(S.role==="admin"?"/admin/danh-muc":"/")}catch(P){console.error("Lỗi khi lưu session:",P),g("Lỗi khi đăng nhập, vui lòng thử lại")}},d=async()=>{const S=localStorage.getItem("sessionId"),D=localStorage.getItem("userId");if(!S||!D)return a.value=null,!1;try{if((await Ot(ce(de,`users/${D}/sessions/${S}`))).exists()){const j=await Ot(ce(de,`users/${D}`));return j.exists()?(a.value={firebaseId:D,...j.val()},!0):(localStorage.removeItem("sessionId"),localStorage.removeItem("userId"),a.value=null,!1)}else return localStorage.removeItem("sessionId"),localStorage.removeItem("userId"),a.value=null,!1}catch{return a.value=null,!1}},p=async()=>{if(!e.value.trim()){g("Vui lòng nhập email");return}if(!r.test(e.value)){g("Email không hợp lệ");return}if(!n.value.trim()||!s.value.trim()){g("Vui lòng nhập mật khẩu và xác nhận mật khẩu");return}if(n.value.length<6){g("Mật khẩu phải có ít nhất 6 ký tự");return}if(n.value!==s.value){g("Vui lòng nhập trùng mật khẩu");return}try{const S=await Ot(ce(de,"users"));if(S.exists()){const j=S.val();if(Object.values(j).some(U=>U.email===e.value.trim())){g("Tài khoản đã tồn tại");return}}const D=await bp.hash(n.value.trim(),10),P={email:e.value.trim(),passwordHash:D,role:"user",sessions:{},favorites:[]};await In(ce(de,"users"),P),g("Đăng ký thành công"),await c()}catch(S){console.error("Lỗi khi đăng ký:",S),g("Lỗi khi đăng ký, vui lòng thử lại")}},y=async()=>{const S=localStorage.getItem("sessionId"),D=localStorage.getItem("userId");if(S&&D)try{await gn(ce(de,`users/${D}/sessions/${S}`),null),await gn(ce(de,`users/${D}/messagesAi`),null),localStorage.removeItem("sessionId"),localStorage.removeItem("userId"),a.value=null,await t.push("/")}catch(P){console.error("Lỗi khi đăng xuất:",P)}},m=async()=>{const S=localStorage.getItem("userId");if(S)try{await gn(ce(de,`users/${S}/sessions`),{}),localStorage.removeItem("sessionId"),localStorage.removeItem("userId"),a.value=null,await t.push("/")}catch(D){console.error("Lỗi khi đăng xuất tất cả thiết bị:",D)}};let x=null;const g=S=>{i.value=S,x&&clearTimeout(x),x=setTimeout(()=>{i.value=""},1e3)},b=async S=>{var P,j;if(!a.value){g("Vui lòng đăng nhập để thêm vào yêu thích!");return}const D=localStorage.getItem("userId");if(D)try{let re=a.value.favorites||[];const U=re.includes(S);await bt(ce(de,`users/${D}`),{favorites:U?re.filter(be=>be!==S):[...re,S]}),await bt(ce(de,`movies/${S}`),{favorite:U?Math.max(0,(((P=l.movies.find(be=>be.firebaseId===S))==null?void 0:P.favorite)||0)-1):(((j=l.movies.find(be=>be.firebaseId===S))==null?void 0:j.favorite)||0)+1}),U?a.value.favorites=re.filter(be=>be!==S):a.value.favorites.push(S);const ue=l.movies.find(be=>be.firebaseId===S);ue&&(ue.favorite=U?ue.favorite-1:ue.favorite+1)}catch(re){console.error("Lỗi khi cập nhật danh sách yêu thích:",re),g("Đã xảy ra lỗi, vui lòng thử lại")}};return Ct(()=>{c(),d()}),{fetchUsers:c,getUserAvatar:S=>{const D=o.value.find(P=>P.firebaseId==S);return D==null?void 0:D.avatarUrl},getUserName:S=>{const D=o.value.find(P=>P.firebaseId==S);return D==null?void 0:D.name},user:o,currentUser:a,checkLogin:f,checkRegister:p,emailValue:e,passValue:n,checkPassValue:s,alert:i,logout:y,logoutAllDevices:m,toggleFavorite:b,googleSignIn:async()=>{const S=Uc(),D=new wn;try{const j=(await lp(S,D)).user,re=await Ot(ce(de,`users/${j.uid}`));let U=re.val();re.exists()||(U={email:j.email,name:j.displayName,avatarUrl:j.photoURL||"",role:"user",sessions:{},favorites:[]},await gn(ce(de,`users/${j.uid}`),U));const ue=await u(j.uid);localStorage.setItem("sessionId",ue),localStorage.setItem("userId",j.uid),a.value={firebaseId:j.uid,...U},await ys(),await t.push(U.role==="admin"?"/admin/danh-muc":"/")}catch(P){console.error("Lỗi khi đăng nhập Google:",P)}},checkSession:d,facebookSignIn:async()=>{const S=Uc(),D=new xn;try{const j=(await lp(S,D)).user;(await Ot(ce(de,`users/${j.uid}`))).exists()||await gn(ce(de,`users/${j.uid}`),{email:j.email,name:j.displayName,avatarUrl:j.photoURL||"",role:"user",sessions:{},favorites:[]});const U=await u(j.uid);localStorage.setItem("sessionId",U),localStorage.setItem("userId",j.uid),a.value={firebaseId:j.uid,email:j.email,name:j.displayName,avatarUrl:j.photoURL||""},g("Đăng nhập Facebook thành công"),await t.push("/")}catch(P){console.error("Lỗi khi đăng nhập Facebook:",P),g("Đăng nhập Facebook thất bại")}}}}),ws=bs("Movie",()=>{const t=se([]),e=zt(),n=Gt(),s=async()=>{try{e.loading=!0;const m=await Ot(ce(de,"movies"));m.exists()&&(t.value=Object.entries(m.val()).map(([x,g])=>({...g,firebaseId:x})).sort((x,g)=>g.timestamp-x.timestamp))}catch(m){console.error("Lỗi khi lấy dữ liệu:",m)}finally{e.loading=!1}},i=async(m,x,g,b,A)=>{try{const O=In(ce(de,"movies")),z={name:m,genre:x,description:g,favorite:0,image:b,day:A,timestamp:Date.now()};await bt(O,z),t.value.unshift({...z,firebaseId:O.key})}catch(O){console.error("Lỗi khi thêm phim:",O)}},r=async(m,x)=>{try{if(!(await Ot(ce(de,`movies/${m}`))).exists())return;await bt(ce(de,`movies/${m}`),x);const b=t.value.findIndex(A=>A.firebaseId===m);b!==-1&&(t.value[b]={...t.value[b],...x})}catch(g){console.error("Lỗi khi cập nhật phim:",g)}},o=async m=>{try{await hi(ce(de,`movies/${m}`)),t.value=t.value.filter(x=>x.firebaseId!==m)}catch(x){console.error("Lỗi khi xóa phim:",x)}},a=async(m,x,g)=>{try{const b=ce(de,`movies/${m}/chapters/${x}`);await bt(b,{url:g});const A=ce(de,`movies/${m}`),O=await Ot(A);if(O.exists()){const z=O.val();await bt(A,{...z,timestamp:Date.now()}),s()}}catch(b){console.error("Lỗi khi thêm tập:",b)}},l=async()=>{if(!selectedMovie.value||newChap.value.tap===""||!newChap.value.url.trim()){alert("Vui lòng nhập đầy đủ thông tin!");return}await movieStore.addChapToMovie(selectedMovie.value.firebaseId,newChap.value.tap,newChap.value.url),newChap.value={tap:Number(newChap.value.tap)+1,url:""}},c=async(m,x,g)=>{try{const b=ce(de,`movies/${m}/chapters/${x}`);await bt(b,{url:g});const A=t.value.find(O=>O.firebaseId===m);A&&(A.chapters[x].url=g)}catch(b){console.error("Lỗi khi cập nhật tập:",b)}},u=async(m,x)=>{try{await hi(ce(de,`movies/${m}/chapters/${x}`));const g=t.value.find(b=>b.firebaseId===m);g&&delete g.chapters[x]}catch(g){console.error("Lỗi khi xóa tập:",g)}},f=ne(()=>!n.currentUser||!n.currentUser.favorites?[]:t.value.filter(m=>n.currentUser.favorites.includes(m.firebaseId))),d=ne(()=>(t.value||[]).filter(m=>m.favorite>0).sort((m,x)=>x.favorite-m.favorite));return{movies:t,filterFavorite:f,filterBestFavorite:d,fetchMovies:s,addMovie:i,updateMovie:r,deleteMovie:o,addChapToMovie:a,addNewChap:l,updateChapInMovie:c,deleteChap:u,addComment:async(m,x,g)=>{try{const b=In(ce(de,`movies/${m}/comments`)),A={userId:x,content:g,timestamp:Date.now()};await bt(b,A)}catch(b){console.error("Lỗi khi thêm bình luận:",b)}},deleteComment:async(m,x)=>{try{await hi(ce(de,`movies/${m}/comments/${x}`))}catch(g){console.error("Lỗi khi xóa bình luận:",g)}}}}),Sf=bs("DanhMuc",()=>{const t=se([]),e=se("");return{danhMucs:t,fetchDanhMucs:async()=>{try{const o=await Ot(ce(de,"categories"));if(o.exists()){const a=o.val();t.value=Object.keys(a).map(l=>{var c;return{id:l,name:typeof a[l]=="string"?a[l]:((c=a[l])==null?void 0:c.name)||"Chưa đặt tên"}})}else t.value=[]}catch(o){console.error("Lỗi khi lấy dữ liệu danh mục:",o)}},addDanhMuc:async o=>{if(o.trim())try{const a=In(ce(de,"categories"));await gn(a,{name:o}),t.value.push({id:a.key,name:o}),t.value.sort((l,c)=>l.name.localeCompare(c.name)),e.value=""}catch(a){console.error("Lỗi khi thêm danh mục:",a)}},updateDanhMuc:async(o,a)=>{if(a.trim())try{await bt(ce(de,`categories/${o}`),{name:a});const l=t.value.findIndex(c=>c.id===o);l!==-1&&(t.value[l].name=a,t.value.sort((c,u)=>c.name.localeCompare(u.name)))}catch(l){console.error("Lỗi khi cập nhật danh mục:",l)}},deleteDanhMuc:async o=>{try{await hi(ce(de,`categories/${o}`)),t.value=t.value.filter(a=>a.id!==o)}catch(a){console.error("Lỗi khi xóa danh mục:",a)}},nameValue:e}}),Kt=bs("product",()=>{const t=Iu(),e=se(""),n=Sf();n.fetchDanhMucs();const s=ne(()=>n.danhMucs),i=ws();i.fetchMovies();const r=ne(()=>i.movies),o=q=>r.value.find(S=>S.name===q),a=q=>s.value.find(S=>S.name==q),l=(q,S)=>chap.value.find(D=>D.name===q&&D.tap==S),c=q=>chap.value.filter(S=>S.name===q).sort((S,D)=>D.tap-S.tap),u=ne(()=>a(t.params.name)||{}),f=ne(()=>o(t.params.name)||{}),d=ne(()=>f.value.chapters?Object.entries(f.value.chapters):[]),p=ne(()=>d.value.length?Math.max(...d.value.map(([q])=>Number(q)||0)):"0"),y=ne(()=>{var S;const q=Number(t.params.id);return isNaN(q)?null:((S=f.value.chapters)==null?void 0:S[q])||null}),m=q=>{const S=o(q);if(!S||!S.chapters)return"Sắp ra mắt";const D=Object.keys(S.chapters).map(Number),P=D.length?Math.max(...D):"Sắp ra mắt";return P=="0"?"Tập Full":"Tập "+P},x=ne(()=>r.value.filter(q=>q.genre.toLowerCase()==u.value.name.toLowerCase())),g=q=>{e.value=q,jc.push({name:"SearchResults",query:{timKiem:e.value}})},b=ne(()=>{const q=e.value.trim().toLowerCase();return q?r.value.filter(S=>S.name.toLowerCase().includes(q)):[]}),A=new Date().getDay(),O=ne(()=>r.value.filter(q=>q.day==A));return{products:r,txtSearch:e,handleSearch:g,filterProduct:b,detailProduct:o,danhMuc:s,danhMucChoose:a,getDanhMuc:u,filterDanhMuc:x,getDetail:f,numberChap:c,getChaps:d,maxChap:p,getMaxChap:m,getChap:l,chapChoose:y,getCartoonDay:O,fetchData:async q=>{r.value.find(D=>D.name===q)||jc.push({name:"404"})}}}),v3={class:"header-container"},y3={class:"logo"},b3={class:"search"},x3={class:"container-input"},w3={class:"Btn"},C3={class:"likeCount"},I3={class:"login"},E3={class:"hamburger"},S3={class:"menu-sign"},T3={__name:"HeaderView",setup(t){const e=se(""),n=Kt(),s=ws(),i=Gt(),r=se(!1);return(o,a)=>{const l=Ht("RouterLink");return C(),E("div",v3,[h("div",y3,[$(l,{to:"/"},{default:Pe(()=>a[5]||(a[5]=[h("img",{src:Bg},null,-1)])),_:1})]),h("div",b3,[h("div",x3,[Ee(h("input",{type:"text",placeholder:"Nhập tên phim cần tìm...","onUpdate:modelValue":a[0]||(a[0]=c=>e.value=c),name:"text",class:"input",onKeyup:a[1]||(a[1]=bi(c=>I(n).handleSearch(c.target.value.trim()),["enter"]))},null,544),[[We,e.value]]),(C(),E("svg",{onClick:a[2]||(a[2]=c=>I(n).handleSearch(e.value)),fill:"#ffffff",width:"20px",height:"20px",viewBox:"0 0 1920 1920",xmlns:"http://www.w3.org/2000/svg"},a[6]||(a[6]=[h("path",{d:"M790.588 1468.235c-373.722 0-677.647-303.924-677.647-677.647 0-373.722 303.925-677.647 677.647-677.647 373.723 0 677.647 303.925 677.647 677.647 0 373.723-303.924 677.647-677.647 677.647Zm596.781-160.715c120.396-138.692 193.807-319.285 193.807-516.932C1581.176 354.748 1226.428 0 790.588 0S0 354.748 0 790.588s354.748 790.588 790.588 790.588c197.647 0 378.24-73.411 516.932-193.807l516.028 516.142 79.963-79.963-516.142-516.028Z","fill-rule":"evenodd"},null,-1)])))])]),$(l,{to:"/favorite",class:"favorite"},{default:Pe(()=>[h("button",w3,[a[7]||(a[7]=h("span",{class:"leftContainer"},[h("svg",{fill:"white",viewBox:"0 0 512 512",height:"1em",xmlns:"http://www.w3.org/2000/svg"},[h("path",{d:"M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"})]),h("span",{class:"like"},"Yêu thích")],-1)),h("span",C3,Y(I(s).filterFavorite.length),1)])]),_:1}),h("div",I3,[h("label",E3,[Ee(h("input",{type:"checkbox","onUpdate:modelValue":a[3]||(a[3]=c=>r.value=c)},null,512),[[bu,r.value]]),a[8]||(a[8]=h("svg",{viewBox:"0 0 32 32"},[h("path",{class:"line line-top-bottom",d:"M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"}),h("path",{class:"line",d:"M7 16 27 16"})],-1))]),$(yu,{name:"fade-slide"},{default:Pe(()=>[Ee(h("div",S3,[I(i).currentUser?(C(),E("a",{key:1,onClick:a[4]||(a[4]=(...c)=>I(i).logout&&I(i).logout(...c))}," Đăng xuất ")):(C(),qe(l,{key:0,to:"/login"},{default:Pe(()=>a[9]||(a[9]=[Fe(" Đăng nhập ")])),_:1})),I(i).currentUser?(C(),qe(l,{key:2,to:"/profile"},{default:Pe(()=>a[10]||(a[10]=[Fe("Profile")])),_:1})):Ut("",!0),$(l,{to:"/chatGroup",class:"chat"},{default:Pe(()=>a[11]||(a[11]=[Fe("Chat group")])),_:1})],512),[[_x,r.value]])]),_:1})])])}}},$n=ve(T3,[["__scopeId","data-v-8027d8bb"]]),k3={},A3={class:"loader-container"};function R3(t,e){return C(),E("div",A3,e[0]||(e[0]=[h("div",{class:"loader"},null,-1)]))}const Cs=ve(k3,[["render",R3],["__scopeId","data-v-35a23ea6"]]),P3={style:{"background-color":"#23232a"}},N3={class:"nav-container"},O3={class:"menu-menu"},M3={__name:"Navigation",setup(t){const e=Kt();return(n,s)=>{const i=Ht("RouterLink");return C(),E("div",P3,[h("div",N3,[h("ul",O3,[(C(!0),E(le,null,Be(I(e).danhMuc,(r,o)=>(C(),E("li",{key:o},[$(i,{to:"/danhMuc/"+r.name+"/"+r.id},{default:Pe(()=>[Fe(Y(r.name),1)]),_:2},1032,["to"])]))),128))])])])}}},Un=ve(M3,[["__scopeId","data-v-2c8ddad8"]]),L3=bs("banner",()=>{const t=se([]),e=async()=>{try{const r=await Ot(ce(de,"banner"));r.exists()&&(t.value=Object.entries(r.val()).map(([o,a])=>({...a,firebaseId:o})))}catch(r){console.error("Lỗi khi lấy dữ liệu:",r)}};return{banners:t,fetchBanners:e,addBanner:async r=>{try{const o=In(ce(de,"banner"));await bt(o,r),e()}catch(o){console.error("Lỗi khi thêm banner:",o)}},updateBanner:async(r,o)=>{try{await bt(ce(de,`banner/${r}`),o),e()}catch(a){console.error("Lỗi khi cập nhật banner:",a)}},deleteBanner:async r=>{try{await hi(ce(de,`banner/${r}`)),e()}catch(o){console.error("Lỗi khi xoá banner:",o)}}}}),D3={class:"banner"},F3={class:"carousel-container"},$3=["src","alt"],U3={class:"carousel-content"},V3={class:"indicators"},B3=["onClick"],j3={__name:"about",setup(t){const e=L3(),n=se(0);let s=null;const i=()=>{n.value=(n.value+1)%e.banners.length},r=()=>{n.value=(n.value-1+e.banners.length)%e.banners.length},o=l=>{n.value=l},a=()=>{s=setInterval(i,3e3)};return Ct(async()=>{await e.fetchBanners(),a()}),Ea(()=>{clearInterval(s)}),kn(()=>e.banners,()=>{n.value=0}),(l,c)=>{const u=Ht("RouterLink");return C(),E("div",D3,[h("div",F3,[h("div",{class:"carousel",style:ba({transform:`translateX(${-n.value*100}%)`,transition:"transform 0.8s ease"})},[(C(!0),E(le,null,Be(I(e).banners,f=>(C(),E("div",{key:f.firebaseId,class:"carousel-item"},[$(u,{to:"/cartoon/"+f.title},{default:Pe(()=>[h("img",{src:f.image,alt:f.title},null,8,$3),h("div",U3,[h("h2",null,Y(f.title),1),h("p",null,Y(f.subtitle),1)])]),_:2},1032,["to"])]))),128))],4),h("button",{class:"prev",onClick:r},"❮"),h("button",{class:"next",onClick:i},"❯"),h("div",V3,[(C(!0),E(le,null,Be(I(e).banners,(f,d)=>(C(),E("span",{key:f.firebaseId,class:mt({active:d===n.value}),onClick:p=>o(d)},null,10,B3))),128))])])])}}},H3=ve(j3,[["__scopeId","data-v-73fdd8fa"]]),W3={class:"product-main"},z3=["src"],G3={class:"tap"},K3={class:"name-cartoon"},q3={__name:"cardProduct",props:{product:Array},setup(t){const e=Kt();return(n,s)=>(C(),E("div",W3,[(C(!0),E(le,null,Be(t.product,i=>(C(),E("div",{class:"product-product",key:i.id},[$(I(nn),{to:"/cartoon/"+i.name},{default:Pe(()=>[h("div",null,[h("img",{src:i.image,alt:"Poster"},null,8,z3),h("span",G3,Y(I(e).getMaxChap(i.name)),1),h("span",K3,Y(i.name),1)])]),_:2},1032,["to"])]))),128))]))}},so=ve(q3,[["__scopeId","data-v-ab282b6c"]]),Tf=bs("day",()=>{const t=new Date,e=["Chủ Nhật","Thứ Hai","Thứ Ba","Thứ Tư","Thứ Năm","Thứ Sáu","Thứ Bảy","END"],n=["0","1","2","3","4","5","6","7"],s=ne(()=>e[t.getDay()]);return{days:e,dayOfWeek:s,day:n}}),Y3={class:"product-container"},Q3={class:"fb-title"},X3={key:1,style:{color:"white",padding:"20px"}},J3={__name:"day",setup(t){const e=Kt(),n=Tf();return(s,i)=>(C(),E("div",Y3,[h("span",Q3," Lịch Chiếu Hôm Nay - "+Y(I(n).dayOfWeek),1),I(e).getCartoonDay.length>0?(C(),qe(so,{key:0,product:I(e).getCartoonDay},null,8,["product"])):(C(),E("span",X3,"Chưa có lịch chiếu phim vào hôm nay !"))]))}},Z3=ve(J3,[["__scopeId","data-v-b2626ce4"]]),ek={class:"product-container"},tk={key:0,class:"pagination"},nk=["disabled"],sk={key:0},ik=["onClick"],rk={key:1},ok=["disabled"],ak={key:1,class:"pagination"},Nl=9,lk={__name:"product",setup(t){const e=Kt(),n=se(1),s=ne(()=>Math.ceil(e.products.length/Nl)),i=ne(()=>Math.max(2,n.value-2)),r=ne(()=>Math.min(s.value-1,n.value+2)),o=ne(()=>{const f=[];for(let d=i.value;d<=r.value;d++)f.push(d);return f}),a=ne(()=>{const f=(n.value-1)*Nl;return e.products.slice(f,f+Nl)}),l=f=>{n.value=f},c=()=>{n.value<s.value&&n.value++},u=()=>{n.value>1&&n.value--};return(f,d)=>(C(),E("div",ek,[d[3]||(d[3]=h("span",{class:"fb-title"},"Mới Nhất",-1)),$(yu,{name:"slide",mode:"out-in"},{default:Pe(()=>[(C(),E("div",{class:"product-main",key:n.value},[$(so,{product:a.value},null,8,["product"])]))]),_:1}),s.value>1?(C(),E("div",tk,[h("button",{onClick:u,disabled:n.value===1},"←",8,nk),h("button",{onClick:d[0]||(d[0]=p=>l(1)),class:mt({active:n.value===1})},"1",2),i.value>2?(C(),E("span",sk,"...")):Ut("",!0),(C(!0),E(le,null,Be(o.value,p=>(C(),E("button",{key:p,onClick:y=>l(p),class:mt({active:n.value===p})},Y(p),11,ik))),128)),r.value<s.value-1?(C(),E("span",rk,"...")):Ut("",!0),h("button",{onClick:d[1]||(d[1]=p=>l(s.value)),class:mt({active:n.value===s.value})},Y(s.value),3),h("button",{onClick:c,disabled:n.value===s.value},"→",8,ok)])):(C(),E("div",ak,d[2]||(d[2]=[h("button",{class:"active"},"1",-1)])))]))}},ck=ve(lk,[["__scopeId","data-v-26576a0c"]]),uk={class:"see-container"},fk={class:"favo"},dk=["src"],hk={__name:"see",setup(t){const e=ws();return(n,s)=>{const i=Ht("RouterLink");return C(),E("div",uk,[s[0]||(s[0]=h("span",{class:"fb-title"}," Yêu thích nhất ",-1)),h("div",fk,[$(yg,{name:"slide",tag:"div"},{default:Pe(()=>[(C(!0),E(le,null,Be(I(e).filterBestFavorite.slice(0,5),r=>(C(),E("div",{class:"see-view",key:r.id},[$(i,{to:"/cartoon/"+r.name},{default:Pe(()=>[h("div",null,[h("img",{src:r.image},null,8,dk),h("span",null,Y(r.name),1)])]),_:2},1032,["to"])]))),128))]),_:1})])])}}},ji=ve(hk,[["__scopeId","data-v-b4d0874e"]]),pk={class:"mainmain"},mk={class:"main"},gk={key:1,class:"main-container"},_k={class:"main-right-container"},vk={__name:"HomeView",setup(t){const e=zt();return(n,s)=>(C(),E(le,null,[$($n),$(Un),h("div",pk,[h("div",mk,[h("main",null,[I(e).loading?(C(),qe(Cs,{key:0})):(C(),E("div",gk,[$(H3),$(ck),$(Z3)]))]),h("div",_k,[$(ji)])])]),h("footer",null,[$(Fn)])],64))}},yk=ve(vk,[["__scopeId","data-v-3e7c9dbd"]]),bk={class:"chap-container"},xk={key:0,class:"chap-content"},wk={key:1,class:"chap-content"},Ck={key:2,class:"chap-content"},Ik={class:"des-section"},Ek={class:"toggle-btn"},Sk={key:0,class:"des"},Tk={__name:"Chap",setup(t){const e=Kt(),n=se(!1),s=()=>{n.value=!n.value};return(i,r)=>(C(),E("div",bk,[r[4]||(r[4]=h("span",{class:"tit"},"Tập",-1)),I(e).getChaps.length===0?(C(),E("div",xk,[$(I(nn),{to:"/",class:"chap"},{default:Pe(()=>r[0]||(r[0]=[Fe("Chưa có tập")])),_:1})])):I(e).maxChap===0?(C(),E("div",wk,[$(I(nn),{to:"/chap/"+I(e).getDetail.name+"/0",class:"chap"},{default:Pe(()=>r[1]||(r[1]=[Fe("Tập Full")])),_:1},8,["to"])])):(C(),E("div",Ck,[(C(!0),E(le,null,Be(I(e).getChaps.sort((o,a)=>a[0]-o[0]),o=>(C(),qe(I(nn),{key:o[0],to:"/chap/"+I(e).getDetail.name+"/"+o[0],class:"chap"},{default:Pe(()=>[Fe(Y("Tập "+o[0]),1)]),_:2},1032,["to"]))),128))])),h("div",Ik,[h("span",{class:"des-title",onClick:s},[r[2]||(r[2]=Fe(" Mô tả : ")),h("span",Ek,Y(n.value?"Thu gọn":"Mở rộng"),1)]),r[3]||(r[3]=h("br",null,null,-1)),$(yu,{name:"fade"},{default:Pe(()=>[n.value?(C(),E("span",Sk,Y(I(e).getDetail.description||"Chưa có mô tả."),1)):Ut("",!0)]),_:1})])]))}},rv=ve(Tk,[["__scopeId","data-v-de7246c2"]]),kk={class:"cmt-container"},Ak={class:"head-cmt"},Rk={key:0,class:"noUserCmt"},Pk={key:1,class:"cmt-input"},Nk=["src"],Ok={class:"messageBox"},Mk={class:"avt"},Lk=["src"],Dk={class:"cmt-item"},Fk={class:"name-cmt"},$k={class:"cmt-ct"},Uk=["onClick"],Vk={class:"pagination"},Bk=["disabled"],jk=["onClick"],Hk=["disabled"],Ol=5,Wk={__name:"CmtView",setup(t){const e=Gt(),n=ws(),s=Kt(),i=se(""),r=se([]),o=se(1),a=y_(),l=()=>{var p;i.value.trim()&&(n.addComment(s.getDetail.firebaseId,(p=e.currentUser)==null?void 0:p.firebaseId,i.value),i.value="")};Ct(()=>{var y;if(!((y=s.getDetail)!=null&&y.firebaseId))return;const p=ce(a,`movies/${s.getDetail.firebaseId}/comments`);Mc(p,m=>{const x=m.val();r.value=x?Object.entries(x).map(([g,b])=>({cmtId:g,...b})).sort((g,b)=>b.timestamp-g.timestamp):[]})});const c=ne(()=>{const p=(o.value-1)*Ol,y=p+Ol;return r.value.slice(p,y)}),u=ne(()=>{let p=Math.max(1,o.value-1),y=Math.min(f.value,p+1);return Array.from({length:y-p+1},(m,x)=>p+x)}),f=ne(()=>Math.ceil(r.value.length/Ol)),d=p=>{p>=1&&p<=f.value&&(o.value=p)};return(p,y)=>{var x;const m=Ht("RouterLink");return C(),E("div",kk,[h("div",Ak,[y[6]||(y[6]=h("span",{class:"fb-title"},"comments",-1)),I(e).currentUser?(C(),E("div",Pk,[h("img",{src:(x=I(e).currentUser)==null?void 0:x.avatarUrl,alt:"avatar"},null,8,Nk),h("div",Ok,[Ee(h("input",{id:"messageInput","onUpdate:modelValue":y[0]||(y[0]=g=>i.value=g),type:"text",placeholder:"Nhập bình luận..",required:"",onKeyup:bi(l,["enter"])},null,544),[[We,i.value]]),h("button",{id:"sendButton",onClick:l},y[5]||(y[5]=[h("svg",{viewBox:"0 0 664 663",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[h("path",{d:"M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888",stroke:"#6c6c6c","stroke-width":"33.67","stroke-linecap":"round","stroke-linejoin":"round"})],-1)]))])])):(C(),E("div",Rk,[$(m,{to:"/login"},{default:Pe(()=>y[3]||(y[3]=[Fe(Y(" Đăng nhập "))])),_:1}),y[4]||(y[4]=Fe(" để bình luận! "))]))]),$(yg,{name:"fade",tag:"div",class:"cmt-content"},{default:Pe(()=>[h("p",null,Y(r.value.length)+" bình luận",1),(C(!0),E(le,null,Be(c.value,g=>{var b;return C(),E("div",{class:"cmt",key:g.cmtId},[h("div",Mk,[h("img",{src:I(e).getUserAvatar(g.userId)},null,8,Lk)]),h("div",Dk,[h("span",Fk,Y(I(e).getUserName(g.userId)),1),y[7]||(y[7]=h("br",null,null,-1)),h("span",$k,Y(g.content),1)]),g.userId===((b=I(e).currentUser)==null?void 0:b.firebaseId)?(C(),E("div",{key:0,class:"delete",onClick:A=>I(n).deleteComment(I(s).getDetail.firebaseId,g.cmtId)},"🗑️",8,Uk)):Ut("",!0)])}),128))]),_:1}),h("div",Vk,[h("button",{onClick:y[1]||(y[1]=g=>d(o.value-1)),disabled:o.value===1},Y("<"),8,Bk),(C(!0),E(le,null,Be(u.value,g=>(C(),E("button",{key:g,onClick:b=>d(g),class:mt({active:g===o.value})},Y(g),11,jk))),128)),h("button",{onClick:y[2]||(y[2]=g=>d(o.value+1)),disabled:o.value===f.value},Y(">"),8,Hk)])])}}},zk=ve(Wk,[["__scopeId","data-v-03d75ab5"]]),Gk={class:"product-container"},Kk={class:"product-main"},qk={class:"product-product"},Yk=["src"],Qk={class:"favorite"},Xk={class:"container"},Jk=["checked"],Zk={class:"countLove"},e4={class:"product-detail-right"},t4={class:"name-cartoon"},n4={class:"tap"},s4={class:"danhMuc"},i4={class:"danhMuc"},r4={__name:"ProductView",setup(t){const e=Tf(),n=Kt(),s=Gt(),i=ne(()=>{var l,c;return(c=(l=s.currentUser)==null?void 0:l.favorites)==null?void 0:c.includes(n.getDetail.firebaseId)}),r=Cu(),o=async()=>{if(!s.currentUser)return alert("Vui lòng đăng nhập để thêm vào yêu thích!"),r.push("/login");const l=n.getDetail.firebaseId;if(!l){console.error("Lỗi: Không tìm thấy firebaseId của phim!");return}await s.toggleFavorite(l),await s.checkSession()},a=Iu();return Ct(()=>{n.fetchData(a.params.name)}),(l,c)=>{const u=Ht("RouterLink"),f=Ht("font-awesome-icon");return C(),E("div",Gk,[h("div",Kk,[h("div",qk,[h("div",null,[h("img",{src:I(n).getDetail.image},null,8,Yk),h("span",Qk,[h("label",Xk,[h("input",{type:"checkbox",checked:i.value,onClick:o},null,8,Jk),c[0]||(c[0]=h("div",{class:"checkmark"},[h("svg",{viewBox:"0 0 256 256"},[h("rect",{fill:"none",height:"256",width:"256"}),h("path",{d:"M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z","stroke-width":"20px",stroke:"#fff",fill:"none"})])],-1))])]),h("span",Zk," Yêu thích: "+Y(I(n).getDetail.favorite||0)+" ❤",1),$(u,{to:"/chap/"+I(n).getDetail.name+"/"+I(n).maxChap,class:"xemPhim"},{default:Pe(()=>c[1]||(c[1]=[Fe("Xem phim ")])),_:1},8,["to"])])]),h("div",e4,[h("span",t4,Y(I(n).getDetail.name),1),c[2]||(c[2]=h("br",null,null,-1)),h("span",n4,"Tập "+Y(I(n).maxChap==0?"Full":isFinite(I(n).maxChap)?I(n).maxChap:"chưa ra mắt"),1),c[3]||(c[3]=h("br",null,null,-1)),c[4]||(c[4]=Fe()),h("span",s4,[$(f,{icon:["fas","clock"],class:"text-blue-500 text-2xl"}),Fe(" "+Y(I(e).days[I(n).getDetail.day]=="END"?"Đã kết thúc":I(e).days[I(n).getDetail.day]+" Hàng Tuần"),1)]),c[5]||(c[5]=h("br",null,null,-1)),h("span",i4,"Thể loại : "+Y(I(n).getDetail.genre),1),c[6]||(c[6]=h("br",null,null,-1))])]),$(rv),$(zk)])}}},o4=ve(r4,[["__scopeId","data-v-6d6145da"]]),a4={class:"mainmain"},l4={class:"main"},c4={class:"main-container"},u4={class:"main-right-container"},f4={__name:"ChooseView",setup(t){const e=zt();return(n,s)=>(C(),E(le,null,[$($n),$(Un),h("div",a4,[h("div",l4,[h("main",null,[h("div",c4,[I(e).loading?(C(),qe(Cs,{key:0})):(C(),qe(o4,{key:1}))])]),h("div",u4,[$(ji)])])]),h("footer",null,[$(Fn)])],64))}},d4=ve(f4,[["__scopeId","data-v-23d1c58e"]]),h4={class:"product-container"},p4={class:"fb-title"},m4={__name:"SearchProduct",setup(t){const e=Kt();return(n,s)=>(C(),E("div",h4,[h("span",p4," Bạn đã tìm kiếm : "+Y(I(e).txtSearch),1),$(so,{product:I(e).filterProduct},null,8,["product"])]))}},g4=ve(m4,[["__scopeId","data-v-4581f7db"]]),_4={class:"mainmain"},v4={class:"main"},y4={class:"main-container"},b4={class:"main-right-container"},x4={__name:"SearchView",setup(t){const e=zt();return(n,s)=>(C(),E(le,null,[$($n),$(Un),h("div",_4,[h("div",v4,[h("main",null,[h("div",y4,[I(e).loading?(C(),qe(Cs,{key:0})):(C(),qe(g4,{key:1}))])]),h("div",b4,[$(ji)])])]),h("footer",null,[$(Fn)])],64))}},w4=ve(x4,[["__scopeId","data-v-01e9bfb3"]]),C4={class:"product-container"},I4={class:"fb-title"},E4={__name:"danhMucView",setup(t){const e=zt(),n=Kt();return(s,i)=>(C(),E("div",C4,[h("span",I4,Y(I(n).getDanhMuc.name),1),I(e).loading?(C(),qe(Cs,{key:0})):(C(),qe(so,{key:1,product:I(n).filterDanhMuc},null,8,["product"]))]))}},S4=ve(E4,[["__scopeId","data-v-e99d1c94"]]),T4={class:"mainmain"},k4={class:"main"},A4={class:"main-container"},R4={class:"main-right-container"},P4={__name:"danhMucView",setup(t){return(e,n)=>(C(),E(le,null,[$($n),$(Un),h("div",T4,[h("div",k4,[h("main",null,[h("div",A4,[$(S4)])]),h("div",R4,[$(ji)])])]),h("footer",null,[$(Fn)])],64))}},N4=ve(P4,[["__scopeId","data-v-67d23c71"]]),O4={class:"video-container"},M4={key:0},L4={key:1},D4={class:"video-wrapper"},F4=["src"],$4={__name:"videoView",setup(t){const e=Iu(),n=Kt();return(s,i)=>(C(),E("div",O4,[I(n).chapChoose?(C(),E("div",L4,[h("div",D4,[h("iframe",{src:I(n).chapChoose.url,class:"video-player",allowfullscreen:"",title:"Dailymotion Video Player",allow:"web-share"},null,8,F4)]),h("span",null,Y(I(e).params.name)+" - "+Y(I(e).params.id==="0"?"Full":"Tập "+I(e).params.id),1)])):(C(),E("span",M4," Tập "+Y(I(e).params.id==="0"?"Full":I(e).params.id)+' của phim "'+Y(I(e).params.name)+'" sẽ được cập nhật sớm nhất! ',1))]))}},U4=ve($4,[["__scopeId","data-v-67b896fb"]]),V4={class:"mainmain"},B4={class:"main"},j4={class:"main-container"},H4={class:"main-right-container"},W4={__name:"ChapView",setup(t){return(e,n)=>(C(),E(le,null,[$($n),$(Un),h("div",V4,[h("div",B4,[h("main",null,[h("div",j4,[$(U4),$(rv)])]),h("div",H4,[$(ji)])])]),h("footer",null,[$(Fn)])],64))}},z4=ve(W4,[["__scopeId","data-v-4fedebe3"]]),ov=bs("chat",()=>{const t=Gt(),e=se([]),n=se([]),s=se(""),i=se(""),r=se(null),o=ce(de,"messages"),a=()=>{Mc(o,m=>{if(m.exists()){const x=m.val();e.value=Object.keys(x).map(g=>({msgId:g,...x[g]}))}else e.value=[],console.log("⚠ Không có tin nhắn nào.")})},l=ce(de,"messagesAi"),c=()=>{var m,x;return(m=t.currentUser)!=null&&m.firebaseId?ce(de,`users/${(x=t.currentUser)==null?void 0:x.firebaseId}/messagesAi`):null},u=()=>{const m=c();if(!m){n.value=[];return}Mc(m,x=>{if(x.exists()){const g=x.val();n.value=Object.keys(g).map(b=>({msgId:b,...g[b]}))}else n.value=[]})},f=async()=>{if(!i.value.trim())return;if(!t.currentUser){alert("❌ Lỗi: Chưa có user đăng nhập!");return}const m=c();if(!m)return;const x={senderId:t.currentUser.firebaseId,senderName:t.currentUser.name||"Ẩn danh",text:i.value,timestamp:new Date().toISOString()};try{await In(m,x);const z={senderId:"AI",senderName:"Gemini AI",text:(await(await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyD4PSqbLRPf3mpshFjdJHd0_wdrEKlERg4",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:[{text:i.value}]}]})})).json()).candidates[0].content.parts[0].text,timestamp:new Date().toISOString()};await In(m,z),i.value="",y()}catch{const b={senderId:"AI",senderName:"Gemini AI",text:"Có lỗi xảy ra, thử lại sau!",timestamp:new Date().toISOString()};await In(m,b)}},d=async()=>{if(!s.value.trim())return;if(!t.currentUser){alert("❌ Lỗi: Chưa có user đăng nhập!");return}if(!t.currentUser.firebaseId){console.error("❌ Lỗi: FirebaseId không tồn tại!");return}const m={senderId:t.currentUser.firebaseId,senderName:t.currentUser.name||"Ẩn danh",text:s.value,timestamp:new Date().toISOString()};try{await In(ce(de,"messages"),m),s.value="",y()}catch(x){console.error("❌ Lỗi khi gửi tin nhắn:",x)}},p=async m=>{try{console.log(`🗑 Đang xóa tin nhắn ID: ${m}`),await hi(ce(de,`messages/${m}`)),e.value=e.value.filter(x=>x.msgId!==m),console.log("✅ Tin nhắn đã bị xóa!")}catch(x){console.error("❌ Lỗi khi xóa tin nhắn:",x)}},y=()=>{ys(()=>{r.value&&(r.value.scrollTop=r.value.scrollHeight)})};return Ct(a,u),Ea(()=>{XS(o,l)}),{fetchMessages:a,fetchMessagesAi:u,messages:e,messagesAi:n,messageInput:s,messageAiInput:i,chatContent:r,sendMessage:d,sendMessageAi:f,deleteMessage:p}}),G4={key:0,class:"chat-container"},K4={class:"chat-group-container"},q4={class:"name-mess"},Y4={class:"messageBox"},Q4={key:1,class:"chat-container"},X4={__name:"ChatAI",setup(t){const e=ov(),n=Gt(),s=se(null),i=()=>{ys(()=>{s.value?s.value.scrollTop=s.value.scrollHeight:console.error("chatContent không tồn tại")})};return Ct(async()=>{await n.checkSession()&&e.fetchMessagesAi()}),kn(()=>n.currentUser,r=>{r?e.fetchMessagesAi():e.messagesAi=[]},{immediate:!0}),kn(()=>e.messagesAi,r=>{r&&r.length>0&&i()},{deep:!0}),(r,o)=>{const a=Ht("RouterLink");return I(n).currentUser?(C(),E("div",G4,[h("div",K4,[o[5]||(o[5]=h("h3",null,"Chat AI",-1)),h("div",{class:"chat-content",ref_key:"chatContent",ref:s},[o[3]||(o[3]=h("p",{class:"name-mess",style:{display:"flex","justify-content":"center"}},"Xin chào hôm nay bạn cần gì !",-1)),(C(!0),E(le,null,Be(I(e).messagesAi,l=>{var c;return C(),E("div",{key:l.msgId,class:mt(["message",l.senderId===((c=I(n).currentUser)==null?void 0:c.firebaseId)?"mine":"other",l.senderId==="AI"?"AI":"","new"])},[h("div",q4,[h("p",null,Y(l.text),1)])],2)}),128))],512),h("div",Y4,[Ee(h("input",{"onUpdate:modelValue":o[0]||(o[0]=l=>I(e).messageAiInput=l),placeholder:"Nhập để nhắn với AI",type:"text",onKeyup:o[1]||(o[1]=bi((...l)=>I(e).sendMessageAi&&I(e).sendMessageAi(...l),["enter"])),id:"messageInput"},null,544),[[We,I(e).messageAiInput]]),h("button",{onClick:o[2]||(o[2]=(...l)=>I(e).sendMessageAi&&I(e).sendMessageAi(...l)),id:"sendButton"},o[4]||(o[4]=[h("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 664 663"},[h("path",{fill:"none",d:"M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"}),h("path",{"stroke-linejoin":"round","stroke-linecap":"round","stroke-width":"33.67",stroke:"#6c6c6c",d:"M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"})],-1)]))])])])):(C(),E("div",Q4,[h("p",null,[o[7]||(o[7]=Fe("Vui lòng")),$(a,{style:{color:"yellow"},to:"/login"},{default:Pe(()=>o[6]||(o[6]=[Fe(Y(" đăng nhập "))])),_:1}),o[8]||(o[8]=Fe(" để sử dụng Chat AI"))])]))}}},J4=ve(X4,[["__scopeId","data-v-56af273a"]]),Z4={class:"chat-container"},e5={class:"chat-group-container"},t5=["onClick"],n5={class:"avt"},s5=["src"],i5={class:"name-mess"},r5={class:"avt"},o5=["src"],a5={class:"messageBox"},l5={__name:"chatGroup",setup(t){const e=ov(),n=Gt(),s=se(null),i=()=>{ys(()=>{s.value&&(s.value.scrollTop=s.value.scrollHeight)})};return Ct(e.fetchMessages),gu(()=>{i()}),(r,o)=>(C(),E("div",Z4,[h("div",e5,[o[4]||(o[4]=h("h3",null,"Group Chat",-1)),h("div",{class:"chat-content",ref_key:"chatContent",ref:s},[(C(!0),E(le,null,Be(I(e).messages,a=>{var l,c,u,f,d;return C(),E("div",{key:a.msgId,class:mt(["message",a.senderId===((l=I(n).currentUser)==null?void 0:l.firebaseId)?"mine":"other","new"])},[a.senderId===((c=I(n).currentUser)==null?void 0:c.firebaseId)?(C(),E("span",{key:0,onClick:p=>I(e).deleteMessage(a.msgId),class:"delete-btn"}," 🗑 ",8,t5)):Ut("",!0),h("div",n5,[a.senderId!==((u=I(n).currentUser)==null?void 0:u.firebaseId)?(C(),E("img",{key:0,src:I(n).getUserAvatar(a.senderId)||"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWN5C5TKjjkdbFK_9W59jVqfrzfgCFKrtc3g&s"},null,8,s5)):Ut("",!0)]),h("div",i5,[h("strong",null,Y(I(n).getUserName(a.senderId)||"ẩn danh"),1),h("p",null,Y(a.text),1)]),h("div",r5,[a.senderId===((f=I(n).currentUser)==null?void 0:f.firebaseId)?(C(),E("img",{key:0,src:((d=I(n).currentUser)==null?void 0:d.avatarUrl)||"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWN5C5TKjjkdbFK_9W59jVqfrzfgCFKrtc3g&s"},null,8,o5)):Ut("",!0)])],2)}),128))],512),h("div",a5,[Ee(h("input",{"onUpdate:modelValue":o[0]||(o[0]=a=>I(e).messageInput=a),placeholder:"Nhập tin nhắn...",type:"text",onKeyup:o[1]||(o[1]=bi((...a)=>I(e).sendMessage&&I(e).sendMessage(...a),["enter"])),id:"messageInput"},null,544),[[We,I(e).messageInput]]),h("button",{onClick:o[2]||(o[2]=(...a)=>I(e).sendMessage&&I(e).sendMessage(...a)),id:"sendButton"},o[3]||(o[3]=[h("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 664 663"},[h("path",{fill:"none",d:"M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"}),h("path",{"stroke-linejoin":"round","stroke-linecap":"round","stroke-width":"33.67",stroke:"#6c6c6c",d:"M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"})],-1)]))])])]))}},c5=ve(l5,[["__scopeId","data-v-74e9ee78"]]),u5={class:"mainmain"},f5={class:"main"},d5={key:0},h5={class:"main-container"},p5={key:1,class:"main-right-container"},m5={class:"btn-ai"},g5={class:"switch"},_5={__name:"ChatView",setup(t){const e=zt(),n=se(!1);return(s,i)=>(C(),E(le,null,[$($n),$(Un),h("div",u5,[h("div",f5,[n.value?(C(),E("div",p5,[$(J4)])):(C(),E("main",d5,[h("div",h5,[I(e).loading?(C(),qe(Cs,{key:0})):(C(),qe(c5,{key:1}))])])),h("div",m5,[i[3]||(i[3]=Fe(" Chế độ AI ")),h("label",g5,[Ee(h("input",{checked:"",type:"checkbox","onUpdate:modelValue":i[0]||(i[0]=r=>n.value=r),class:"toggle"},null,512),[[bu,n.value]]),i[1]||(i[1]=h("span",{class:"slider"},null,-1)),i[2]||(i[2]=h("span",{class:"card-side"},null,-1))])])])]),h("footer",null,[$(Fn)])],64))}},v5=ve(_5,[["__scopeId","data-v-60fe39eb"]]),y5={class:"alert"},b5={key:0,class:"form"},x5={class:"inputForm"},w5={class:"inputForm"},C5=["type"],I5={class:"p"},E5={class:"flex-row"},S5={version:"1.1",width:"20",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512",style:{"enable-background":"new 0 0 512 512"},"xml:space":"preserve"},T5={key:1,class:"form"},k5={class:"inputForm"},A5={class:"inputForm"},R5=["type"],P5={class:"inputForm"},N5=["type"],O5={class:"p"},M5={__name:"loginCo",setup(t){const e=Gt(),n=se(!0),s=se("password"),i=se("password");return(r,o)=>(C(),E(le,null,[h("span",y5,Y(I(e).alert),1),n.value?(C(),E("form",b5,[o[20]||(o[20]=h("div",{class:"flex-column"},[h("label",null,"Email ")],-1)),h("div",x5,[o[14]||(o[14]=h("svg",{height:"20",viewBox:"0 0 32 32",width:"20",xmlns:"http://www.w3.org/2000/svg"},[h("g",{id:"Layer_3","data-name":"Layer 3"},[h("path",{d:"m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"})])],-1)),Ee(h("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=a=>I(e).emailValue=a),class:"input",placeholder:"Nhập email của bạn "},null,512),[[We,I(e).emailValue]])]),o[21]||(o[21]=h("div",{class:"flex-column"},[h("label",null,"Mật khẩu ")],-1)),h("div",w5,[o[16]||(o[16]=h("svg",{height:"20",viewBox:"-64 0 512 512",width:"20",xmlns:"http://www.w3.org/2000/svg"},[h("path",{d:"m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"}),h("path",{d:"m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"})],-1)),Ee(h("input",{type:s.value,"onUpdate:modelValue":o[1]||(o[1]=a=>I(e).passValue=a),class:"input",placeholder:"Nhập mật khẩu của bạn"},null,8,C5),[[dl,I(e).passValue]]),(C(),E("svg",{onClick:o[2]||(o[2]=a=>s.value=="password"?s.value="text":s.value="password"),viewBox:"0 0 576 512",height:"1em",xmlns:"http://www.w3.org/2000/svg"},o[15]||(o[15]=[h("path",{d:"M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"},null,-1)])))]),o[22]||(o[22]=h("div",{class:"flex-row"},[h("div",null,[h("input",{type:"checkbox"}),h("label",null,"Remember me ")]),h("span",{class:"span"},"Quên mật khẩu?")],-1)),h("button",{class:"button-submit",onClick:o[3]||(o[3]=a=>I(e).checkLogin())},"Đăng nhập"),h("p",I5,[o[17]||(o[17]=Fe("Bạn chưa có tài khoản? ")),h("span",{class:"span",onClick:o[4]||(o[4]=a=>n.value=!n.value)},"Đăng kí")]),o[23]||(o[23]=h("p",{class:"p line"},"hoặc",-1)),h("div",E5,[h("button",{class:"btn google",onClick:o[5]||(o[5]=(...a)=>I(e).googleSignIn&&I(e).googleSignIn(...a))},[(C(),E("svg",S5,o[18]||(o[18]=[h("path",{style:{fill:"#FBBB00"},d:`M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256\r
	c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456\r
	C103.821,274.792,107.225,292.797,113.47,309.408z`},null,-1),h("path",{style:{fill:"#518EF8"},d:`M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451\r
	c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535\r
	c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z`},null,-1),h("path",{style:{fill:"#28B446"},d:`M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512\r
	c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771\r
	c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z`},null,-1),h("path",{style:{fill:"#F14336"},d:`M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012\r
	c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0\r
	C318.115,0,375.068,22.126,419.404,58.936z`},null,-1)]))),o[19]||(o[19]=Fe(" Google "))]),h("button",{class:"btn apple",onClick:o[6]||(o[6]=(...a)=>I(e).facebookSignIn&&I(e).facebookSignIn(...a))}," Facebook ")])])):(C(),E("form",T5,[o[30]||(o[30]=h("div",{class:"flex-column"},[h("label",null,"Email ")],-1)),h("div",k5,[o[24]||(o[24]=h("svg",{height:"20",viewBox:"0 0 32 32",width:"20",xmlns:"http://www.w3.org/2000/svg"},[h("g",{id:"Layer_3","data-name":"Layer 3"},[h("path",{d:"m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"})])],-1)),Ee(h("input",{type:"text","onUpdate:modelValue":o[7]||(o[7]=a=>I(e).emailValue=a),class:"input",placeholder:"Nhập email của bạn "},null,512),[[We,I(e).emailValue]])]),o[31]||(o[31]=h("div",{class:"flex-column"},[h("label",null,"Mật khẩu ")],-1)),h("div",A5,[o[26]||(o[26]=h("svg",{height:"20",viewBox:"-64 0 512 512",width:"20",xmlns:"http://www.w3.org/2000/svg"},[h("path",{d:"m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"}),h("path",{d:"m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"})],-1)),Ee(h("input",{type:s.value,"onUpdate:modelValue":o[8]||(o[8]=a=>I(e).passValue=a),class:"input",placeholder:"Nhập mật khẩu của bạn"},null,8,R5),[[dl,I(e).passValue]]),(C(),E("svg",{onClick:o[9]||(o[9]=a=>s.value=="password"?s.value=I(uy):s.value="password"),viewBox:"0 0 576 512",height:"1em",xmlns:"http://www.w3.org/2000/svg"},o[25]||(o[25]=[h("path",{d:"M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"},null,-1)])))]),o[32]||(o[32]=h("div",{class:"flex-column"},[h("label",null,"Nhập lại mật khẩu ")],-1)),h("div",P5,[o[28]||(o[28]=h("svg",{height:"20",viewBox:"-64 0 512 512",width:"20",xmlns:"http://www.w3.org/2000/svg"},[h("path",{d:"m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"}),h("path",{d:"m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"})],-1)),Ee(h("input",{type:i.value,"onUpdate:modelValue":o[10]||(o[10]=a=>I(e).checkPassValue=a),class:"input",placeholder:"Nhập lại mật khẩu của bạn"},null,8,N5),[[dl,I(e).checkPassValue]]),(C(),E("svg",{onClick:o[11]||(o[11]=a=>i.value=="password"?i.value="text":i.value="password"),viewBox:"0 0 576 512",height:"1em",xmlns:"http://www.w3.org/2000/svg"},o[27]||(o[27]=[h("path",{d:"M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"},null,-1)])))]),o[33]||(o[33]=h("div",{class:"flex-row"},[h("div",null,[h("input",{type:"checkbox"}),h("label",null,"Remember me ")]),h("span",{class:"span"},"Quên mật khẩu?")],-1)),h("button",{class:"button-submit",onClick:o[12]||(o[12]=a=>I(e).checkRegister())},"Đăng kí"),h("p",O5,[o[29]||(o[29]=Fe("Bạn đã có tài khoản? ")),h("span",{class:"span",onClick:o[13]||(o[13]=a=>n.value=!n.value)},"Đăng Nhập")])]))],64))}},L5=ve(M5,[["__scopeId","data-v-6efb6d45"]]),D5={class:"mainmain"},F5={class:"main"},$5={class:"main-container"},U5={__name:"LoginView",setup(t){return(e,n)=>(C(),E(le,null,[$($n),$(Un),h("div",D5,[h("div",F5,[h("main",null,[h("div",$5,[$(L5)])])])]),h("footer",null,[$(Fn)])],64))}},V5=ve(U5,[["__scopeId","data-v-f31f00e7"]]),B5={class:"mainmain"},j5={class:"main"},H5={class:"main-container"},W5={key:1},z5={key:3},G5={key:4,class:"pagination"},K5=["disabled"],q5={key:0},Y5=["onClick"],Q5={key:1},X5=["disabled"],J5={key:5,class:"pagination"},Ml=6,Z5={__name:"FavoriteView",setup(t){const e=zt(),n=ws(),s=Gt(),i=se(1),r=ne(()=>Math.ceil(n.filterFavorite.length/Ml)),o=ne(()=>Math.max(2,i.value-2)),a=ne(()=>Math.min(r.value-1,i.value+2)),l=ne(()=>{const p=[];for(let y=o.value;y<=a.value;y++)p.push(y);return p}),c=ne(()=>{const p=(i.value-1)*Ml;return n.filterFavorite.slice(p,p+Ml)}),u=p=>{i.value=p},f=()=>{i.value<r.value&&i.value++},d=()=>{i.value>1&&i.value--};return(p,y)=>(C(),E(le,null,[$($n),$(Un),h("div",B5,[h("div",j5,[h("main",null,[h("div",H5,[y[5]||(y[5]=h("span",{class:"fb-title"}," Mục yêu thích ❤️ ",-1)),I(e).loading?(C(),qe(Cs,{key:0})):Ut("",!0),I(s).currentUser?c.value.length>0?(C(),qe(so,{key:2,product:c.value},null,8,["product"])):(C(),E("div",z5,y[3]||(y[3]=[h("p",{class:"alert"},"Bạn chưa có phim yêu thích nào.",-1)]))):(C(),E("div",W5,y[2]||(y[2]=[h("p",{class:"alert"},"Vui lòng đăng nhập để xem danh sách yêu thích!",-1)]))),r.value>1?(C(),E("div",G5,[h("button",{onClick:d,disabled:i.value===1},"←",8,K5),h("button",{onClick:y[0]||(y[0]=m=>u(1)),class:mt({active:i.value===1})},"1",2),o.value>2?(C(),E("span",q5,"...")):Ut("",!0),(C(!0),E(le,null,Be(l.value,m=>(C(),E("button",{key:m,onClick:x=>u(m),class:mt({active:i.value===m})},Y(m),11,Y5))),128)),a.value<r.value-1?(C(),E("span",Q5,"...")):Ut("",!0),h("button",{onClick:y[1]||(y[1]=m=>u(r.value)),class:mt({active:i.value===r.value})},Y(r.value),3),h("button",{onClick:f,disabled:i.value===r.value},"→",8,X5)])):(C(),E("div",J5,y[4]||(y[4]=[h("button",{class:"active"},"1",-1)])))])]),h("div",{class:mt(["main-right-container",{active:!I(e).loading}])},[$(ji,{class:"see"})],2)])]),h("footer",null,[$(Fn)])],64))}},eA=ve(Z5,[["__scopeId","data-v-57930e5c"]]),tA={},nA={class:"body"},sA={class:"container"},iA={class:"go-back"};function rA(t,e){const n=Ht("RouterLink");return C(),E("div",nA,[h("div",sA,[e[1]||(e[1]=h("h2",null,"404",-1)),e[2]||(e[2]=h("h1",null,"Page not found.",-1)),e[3]||(e[3]=h("p",null,"Rất tiếc, có vẻ như chúng tôi không thể tìm thấy trang bạn đang tìm kiếm. Thông thường điều này xảy ra vì của một trang tồn tại trước đó đã bị xóa hoặc bạn đã nhập sai địa chỉ.",-1)),e[4]||(e[4]=h("p",null,"hoặc",-1)),e[5]||(e[5]=h("p",null,"Bạn chưa có quyền để vào các trang quản trị khác",-1)),h("span",iA,[$(n,{to:"/"},{default:Pe(()=>e[0]||(e[0]=[Fe("Go back")])),_:1})])])])}const av=ve(tA,[["render",rA],["__scopeId","data-v-2c526770"]]),oA={class:"allContainer-admin"},aA={key:0},lA={class:"header-container"},cA={class:"logo"},uA={class:"admin-container"},fA={class:"admin-container-left"},dA={class:"list"},hA={class:"admin-container-right"},pA={key:1},mA={__name:"AdminView",setup(t){const e=Gt(),n=zt();return n.loading=!0,Ct(async()=>{await e.fetchCurrentUsers(),n.loading=!1,/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)&&screen.orientation&&screen.orientation.lock("landscape").catch(i=>{console.warn("Không thể xoay màn hình:",i)})}),(s,i)=>{var o;const r=Ht("RouterView");return C(),E("div",oA,[((o=I(e).currentUser)==null?void 0:o.role)==="admin"?(C(),E("div",aA,[h("div",lA,[h("div",cA,[$(I(nn),{to:"/"},{default:Pe(()=>i[0]||(i[0]=[h("img",{src:Bg},null,-1)])),_:1})])]),h("div",uA,[h("div",fA,[h("div",dA,[$(I(nn),{to:"/admin/danh-muc"},{default:Pe(()=>i[1]||(i[1]=[Fe(" Quản lý danh mục ")])),_:1}),$(I(nn),{to:"/admin/product"},{default:Pe(()=>i[2]||(i[2]=[Fe(" Quản lý phim ")])),_:1}),$(I(nn),{to:"/admin/chap"},{default:Pe(()=>i[3]||(i[3]=[Fe(" Quản lý tập phim ")])),_:1}),$(I(nn),{to:"/admin/user"},{default:Pe(()=>i[4]||(i[4]=[Fe(" Quản lý tài khoản ")])),_:1})])]),h("div",hA,[$(r)])])])):(C(),E("div",pA,[$(av)]))])}}},gA=ve(mA,[["__scopeId","data-v-de86279d"]]),_A={class:"admin-container"},vA={class:"table"},yA=["onUpdate:modelValue","onKeyup"],bA={key:1},xA=["onClick"],wA=["onClick"],CA={class:"addContainer"},IA={__name:"danhMucAdmin",setup(t){const e=Sf();Ct(()=>{e.fetchDanhMucs()});const n=async r=>{r.isEditing?await s(r):r.tempName=r.name,r.isEditing=!r.isEditing},s=async r=>{r.tempName.trim()!=""&&r.tempName!=r.name&&await e.updateDanhMuc(r.id,r.tempName)},i=()=>{if(!e.nameValue||e.nameValue.trim()===""){alert("Tên danh mục không được để trống!");return}e.addDanhMuc(e.nameValue)};return(r,o)=>(C(),E("div",_A,[o[3]||(o[3]=h("span",{class:"fb-title"},"Quản lý danh mục",-1)),h("div",vA,[h("ul",null,[o[1]||(o[1]=h("span",null,"Tên danh mục",-1)),(C(!0),E(le,null,Be(I(e).danhMucs,a=>(C(),E("li",{key:a.id},[a.isEditing?Ee((C(),E("input",{key:0,"onUpdate:modelValue":l=>a.tempName=l,onKeyup:bi(l=>s(a),["enter"])},null,40,yA)),[[We,a.tempName]]):(C(),E("p",bA,Y(a.name),1))]))),128))]),h("ul",null,[o[2]||(o[2]=h("span",null,"Chức năng",-1)),(C(!0),E(le,null,Be(I(e).danhMucs,a=>(C(),E("li",{key:a.id},[h("button",{onClick:l=>n(a)},Y(a.isEditing?"Lưu":"Sửa"),9,xA),h("button",{onClick:l=>I(e).deleteDanhMuc(a.id)},"Xoá",8,wA)]))),128))])]),h("div",CA,[Ee(h("input",{type:"text",placeholder:"Tên danh mục","onUpdate:modelValue":o[0]||(o[0]=a=>I(e).nameValue=a),onKeyup:bi(i,["enter"])},null,544),[[We,I(e).nameValue]]),h("button",{class:"addTable",onClick:i},"Thêm")])]))}},EA=ve(IA,[["__scopeId","data-v-db155937"]]),SA={key:1,class:"admin-container"},TA={class:"addContainer"},kA=["value"],AA=["value"],RA={class:"movie-table"},PA=["onUpdate:modelValue"],NA={key:1},OA=["onUpdate:modelValue"],MA=["value"],LA={key:1},DA=["onUpdate:modelValue"],FA={key:1,class:"p"},$A=["onUpdate:modelValue"],UA=["src"],VA=["onUpdate:modelValue"],BA=["value"],jA={key:1},HA=["onClick"],WA=["onClick"],zA={class:"pagination"},GA=["disabled"],KA=["disabled"],Ll=3,qA={__name:"productAdmin",setup(t){const e=ws(),n=Sf(),s=Tf(),i=zt(),r=se(1),o=se(""),a=se(""),l=se(""),c=se(""),u=se("1"),f=async()=>{if(o.value.trim()===""||a.value.trim()===""||l.value.trim()===""||c.value.trim()===""||u.value.trim()===""){alert("Vui lòng điền đầy đủ thông tin phim!");return}await e.addMovie(o.value,a.value,l.value,c.value,u.value),o.value="",a.value="",l.value="",c.value="",u.value=""},d=m=>{m.isEditing?e.updateMovie(m.firebaseId,{name:m.tempName,genre:m.tempTheLoai,description:m.tempDes,image:m.tempImage,day:m.tempDay}):(m.tempName=m.name,m.tempTheLoai=m.genre,m.tempDes=m.description,m.tempImage=m.image,m.tempDay=m.day),m.isEditing=!m.isEditing};Ct(()=>{e.fetchMovies(),n.fetchDanhMucs()});const p=ne(()=>{const m=[...e.movies].sort((b,A)=>A.firebaseId.localeCompare(b.firebaseId)),x=(r.value-1)*Ll,g=x+Ll;return m.slice(x,g)}),y=ne(()=>Math.ceil(e.movies.length/Ll));return(m,x)=>I(i).loading?(C(),qe(Cs,{key:0})):(C(),E("div",SA,[x[9]||(x[9]=h("span",{class:"fb-title"},"Quản lý phim",-1)),h("div",TA,[Ee(h("input",{type:"text",placeholder:"Tên phim","onUpdate:modelValue":x[0]||(x[0]=g=>o.value=g)},null,512),[[We,o.value]]),Ee(h("select",{"onUpdate:modelValue":x[1]||(x[1]=g=>a.value=g)},[(C(!0),E(le,null,Be(I(n).danhMucs,g=>(C(),E("option",{key:g.firebaseId,value:g.name},Y(g.name),9,kA))),128))],512),[[ri,a.value]]),Ee(h("input",{type:"text",placeholder:"Mô tả","onUpdate:modelValue":x[2]||(x[2]=g=>l.value=g)},null,512),[[We,l.value]]),Ee(h("input",{type:"text",placeholder:"Hình ảnh (URL)","onUpdate:modelValue":x[3]||(x[3]=g=>c.value=g)},null,512),[[We,c.value]]),Ee(h("select",{"onUpdate:modelValue":x[4]||(x[4]=g=>u.value=g)},[(C(!0),E(le,null,Be(I(s).day,g=>(C(),E("option",{key:g,value:g},Y(I(s).days[g]),9,AA))),128))],512),[[ri,u.value]]),h("button",{class:"addTable",onClick:x[5]||(x[5]=g=>f())},"Thêm")]),h("table",RA,[x[8]||(x[8]=h("thead",null,[h("tr",null,[h("th",null,"Tên phim"),h("th",null,"Thể loại"),h("th",null,"Mô tả"),h("th",null,"Hình ảnh"),h("th",null,"Ngày chiếu"),h("th",null,"Yêu thích"),h("th",null,"Chức năng")])],-1)),h("tbody",null,[(C(!0),E(le,null,Be(p.value,g=>(C(),E("tr",{key:g.firebaseId},[h("td",null,[g.isEditing?Ee((C(),E("input",{key:0,"onUpdate:modelValue":b=>g.tempName=b},null,8,PA)),[[We,g.tempName]]):(C(),E("p",NA,Y(g.name),1))]),h("td",null,[g.isEditing?Ee((C(),E("select",{key:0,"onUpdate:modelValue":b=>g.tempTheLoai=b},[(C(!0),E(le,null,Be(I(n).danhMucs,b=>(C(),E("option",{key:b.firebaseId,value:b.name},Y(b.name),9,MA))),128))],8,OA)),[[ri,g.tempTheLoai]]):(C(),E("p",LA,Y(g.genre),1))]),h("td",null,[g.isEditing?Ee((C(),E("input",{key:0,"onUpdate:modelValue":b=>g.tempDes=b},null,8,DA)),[[We,g.tempDes]]):(C(),E("p",FA,Y(g.description),1))]),h("td",null,[g.isEditing?Ee((C(),E("input",{key:0,"onUpdate:modelValue":b=>g.tempImage=b,placeholder:"Nhập URL hình ảnh mới"},null,8,$A)),[[We,g.tempImage]]):(C(),E("img",{key:1,src:g.image,alt:"Hình ảnh phim",class:"movie-img"},null,8,UA))]),h("td",null,[g.isEditing?Ee((C(),E("select",{key:0,"onUpdate:modelValue":b=>g.tempDay=b},[(C(!0),E(le,null,Be(I(s).day,b=>(C(),E("option",{key:b,value:b},Y(I(s).days[b]),9,BA))),128))],8,VA)),[[ri,g.tempDay]]):(C(),E("p",jA,Y(I(s).days[g.day]),1))]),h("td",null,[h("p",null,Y(g.favorite||0),1)]),h("td",null,[h("button",{onClick:b=>d(g)},Y(g.isEditing?"Lưu":"Sửa"),9,HA),h("button",{onClick:b=>I(e).deleteMovie(g.firebaseId)},"Xoá",8,WA)])]))),128))])]),h("div",zA,[h("button",{onClick:x[6]||(x[6]=g=>r.value--),disabled:r.value===1},"Trang trước",8,GA),h("span",null,"Trang "+Y(r.value)+" / "+Y(y.value),1),h("button",{onClick:x[7]||(x[7]=g=>r.value++),disabled:r.value>=y.value},"Trang sau",8,KA)])]))}},YA=ve(qA,[["__scopeId","data-v-54282bcd"]]),QA={key:1,class:"admin-container"},XA={class:"addContainer"},JA=["value"],ZA={class:"movie-table"},e8=["onUpdate:modelValue"],t8=["href"],n8=["onClick"],s8=["onClick"],i8={class:"pagination"},r8=["disabled"],o8=["disabled"],Dl=5,a8={__name:"chapAdmin",setup(t){const e=ws(),n=zt(),s=se(null),i=se({tap:"",url:""}),r=se({}),o=se(1);Ct(()=>{e.fetchMovies()});const a=()=>{if(s.value&&s.value.chapters){r.value=Object.fromEntries(Object.entries(s.value.chapters).map(([p,y])=>[p,{...y,isEditing:!1,tempUrl:y.url}]));const d=Math.max(...Object.keys(r.value).map(Number),0);i.value.tap=d+1}else r.value={},i.value.tap=1},l=async()=>{if(!s.value||i.value.tap===""||!i.value.url.trim()){alert("Vui lòng nhập đầy đủ thông tin!");return}await e.addChapToMovie(s.value.firebaseId,i.value.tap,i.value.url),r.value[i.value.tap]={url:i.value.url},i.value.tap=Number(i.value.tap)+1,i.value.url=""},c=async d=>{if(!s.value)return;await e.deleteChap(s.value.firebaseId,d),delete r.value[d];const p=Math.max(...Object.keys(r.value).map(Number),0);i.value.tap=p+1},u=d=>{d.isEditing?e.updateChapInMovie(s.value.firebaseId,d.id,d.tempUrl).then(()=>{d.url=d.tempUrl,alert("Cập nhật tập thành công!")}).catch(p=>{console.error("Lỗi khi cập nhật tập:",p),alert("Có lỗi xảy ra khi cập nhật tập!")}):d.tempUrl=d.url,d.isEditing=!d.isEditing},f=ne(()=>{const d=(o.value-1)*Dl,p=d+Dl;return Object.entries(r.value).slice(d,p).map(([y,m])=>({tap:y,...m}))});return(d,p)=>{const y=Ht("Loading");return I(n).loading?(C(),qe(y,{key:0})):(C(),E("div",QA,[p[7]||(p[7]=h("span",{class:"fb-title"},"Quản lý tập",-1)),h("div",XA,[p[5]||(p[5]=h("h3",null,"Thêm tập mới",-1)),Ee(h("select",{"onUpdate:modelValue":p[0]||(p[0]=m=>s.value=m),onChange:a},[(C(!0),E(le,null,Be(I(e).movies,m=>(C(),E("option",{key:m.firebaseId,value:m},Y(m.name),9,JA))),128))],544),[[ri,s.value]]),Ee(h("input",{type:"number",placeholder:"Số tập","onUpdate:modelValue":p[1]||(p[1]=m=>i.value.tap=m),min:"1"},null,512),[[We,i.value.tap]]),Ee(h("input",{type:"text",placeholder:"URL","onUpdate:modelValue":p[2]||(p[2]=m=>i.value.url=m)},null,512),[[We,i.value.url]]),h("button",{onClick:l},"Thêm tập")]),h("table",ZA,[p[6]||(p[6]=h("thead",null,[h("tr",null,[h("th",null,"Tập"),h("th",null,"URL"),h("th",null,"Chức năng")])],-1)),h("tbody",null,[(C(!0),E(le,null,Be(f.value,(m,x)=>(C(),E("tr",{key:x},[h("td",null,Y(m.tap),1),h("td",null,[m.isEditing?Ee((C(),E("input",{key:0,"onUpdate:modelValue":g=>m.tempUrl=g},null,8,e8)),[[We,m.tempUrl]]):(C(),E("a",{key:1,href:m.url,target:"_blank",style:{color:"deepskyblue"}},Y(m.url),9,t8))]),h("td",null,[h("button",{onClick:g=>u(x)},Y(m.isEditing?"Lưu":"Sửa"),9,n8),h("button",{onClick:g=>c(m.tap)},"Xoá",8,s8)])]))),128))])]),h("div",i8,[h("button",{onClick:p[3]||(p[3]=m=>o.value--),disabled:o.value===1},"Trước",8,r8),h("span",null,"Trang "+Y(o.value),1),h("button",{onClick:p[4]||(p[4]=m=>o.value++),disabled:o.value*Dl>=Object.keys(r.value).length},"Tiếp",8,o8)])]))}}},l8=ve(a8,[["__scopeId","data-v-4ea35293"]]),c8={},u8={class:"admin-container"};function f8(t,e){return C(),E("div",u8,e[0]||(e[0]=[h("span",{class:"fb-title"},"Quản lý tài khoản ",-1)]))}const d8=ve(c8,[["render",f8],["__scopeId","data-v-9599cb7d"]]),h8={class:"mainmain"},p8={class:"main"},m8={class:"main-container"},g8={key:1,class:"profile-container"},_8={class:"edit-profile"},v8={class:"avt"},y8=["src"],b8={key:1},x8={class:"file-upload"},w8={__name:"ProfileView",setup(t){var c,u;const e=zt(),n=Gt(),s=se(!1),i=se(((c=n.currentUser)==null?void 0:c.name)??""),r=se(((u=n.currentUser)==null?void 0:u.avatarUrl)??""),o=async()=>{s.value&&await a(i.value),s.value=!s.value},a=async f=>{var d;try{const p=(d=n.currentUser)==null?void 0:d.firebaseId;if(!p){console.error("Không tìm thấy ID người dùng.");return}await bt(ce(de,`users/${p}`),{name:f}),n.currentUser.name=f,await n.fetchUsers(),console.log("Tên đã được cập nhật!")}catch(p){console.error("Lỗi khi cập nhật tên:",p)}},l=async f=>{const d=f.target.files[0];if(!d){alert("Vui lòng chọn một tệp.");return}const p=new FileReader;p.onload=async()=>{var y;try{const m=(y=n.currentUser)==null?void 0:y.firebaseId;if(!m){alert("Không tìm thấy ID người dùng.");return}const x=p.result;await bt(ce(de,`users/${m}`),{avatarUrl:x}),n.currentUser.avatarUrl=x,r.value=x,console.log("Avatar đã được cập nhật!")}catch(m){console.error("Lỗi khi upload avatar:",m)}},p.readAsDataURL(d)};return(f,d)=>{var p,y;return C(),E(le,null,[$($n),$(Un),h("div",h8,[h("div",p8,[h("main",null,[h("div",m8,[I(e).loading?(C(),qe(Cs,{key:0})):(C(),E("div",g8,[d[2]||(d[2]=h("span",null,"Thông tin tài khoản",-1)),h("div",_8,[h("div",v8,[h("img",{src:((p=I(n).currentUser)==null?void 0:p.avatarUrl)||"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrY7dJj0QnImGcypj9oBdr9u9joHrxgaKY_g&s",alt:"Avatar",class:"avatar"},null,8,y8),h("p",null,[s.value?Ee((C(),E("input",{key:0,type:"text","onUpdate:modelValue":d[0]||(d[0]=m=>i.value=m)},null,512)),[[We,i.value]]):(C(),E("b",b8,Y(((y=I(n).currentUser)==null?void 0:y.name)??"Chưa có tên"),1)),h("button",{onClick:o,class:"btn-editName"},Y(s.value?"Lưu":"✏️"),1)]),h("div",x8,[d[1]||(d[1]=h("label",{for:"fileInput",class:"custom-upload-btn"}," Chọn ảnh ",-1)),h("input",{id:"fileInput",type:"file",onChange:l,accept:"image/*",class:"hidden-input"},null,32)])])])]))])])])]),h("footer",null,[$(Fn)])],64)}}},C8=ve(w8,[["__scopeId","data-v-8c6f9163"]]),jc=uC({history:Bw(),scrollBehavior(t,e,n){return n||{top:0,behavior:"smooth"}},routes:[{path:"/",name:"home",component:yk},{path:"/cartoon/:name/",name:"phim",component:d4},{path:"/search",name:"SearchResults",component:w4},{path:"/danhMuc/:name/:id",name:"danhMuc",component:N4},{path:"/chap/:name/:id",name:"chap",component:z4},{path:"/chatGroup/",name:"chat",component:v5},{path:"/login/",name:"login",component:V5},{path:"/favorite/",name:"favorite",component:eA},{path:"/admin/",name:"admin",component:gA,children:[{path:"danh-muc",component:EA},{path:"product",component:YA},{path:"chap",component:l8},{path:"user",component:d8}]},{path:"/:pathMatch(.*)*",name:"404",component:av},{path:"/profile",name:"profile",component:C8}]}),qa=Hx(dC);ly.add(hy,fy);qa.component("font-awesome-icon",sw);qa.use(iw());qa.use(jc);qa.mount("#app");
