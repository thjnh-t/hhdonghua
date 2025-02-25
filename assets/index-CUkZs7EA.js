(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function iv(t,e,n){return(e=ov(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Tf(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,s)}return n}function M(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Tf(Object(n),!0).forEach(function(s){iv(t,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Tf(Object(n)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(n,s))})}return t}function rv(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var s=n.call(t,e);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function ov(t){var e=rv(t,"string");return typeof e=="symbol"?e:e+""}const kf=()=>{};let jc={},vp={},yp=null,bp={mark:kf,measure:kf};try{typeof window<"u"&&(jc=window),typeof document<"u"&&(vp=document),typeof MutationObserver<"u"&&(yp=MutationObserver),typeof performance<"u"&&(bp=performance)}catch{}const{userAgent:Af=""}=jc.navigator||{},os=jc,Fe=vp,Rf=yp,io=bp;os.document;const Pn=!!Fe.documentElement&&!!Fe.head&&typeof Fe.addEventListener=="function"&&typeof Fe.createElement=="function",xp=~Af.indexOf("MSIE")||~Af.indexOf("Trident/");var av=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,lv=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,wp={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},cv={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Cp=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],nt="classic",ua="duotone",uv="sharp",fv="sharp-duotone",Ip=[nt,ua,uv,fv],dv={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},hv={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},pv=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),mv={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},gv=["fak","fa-kit","fakd","fa-kit-duotone"],Pf={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},_v=["kit"],vv={kit:{"fa-kit":"fak"}},yv=["fak","fakd"],bv={kit:{fak:"fa-kit"}},Nf={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},ro={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},xv=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],wv=["fak","fa-kit","fakd","fa-kit-duotone"],Cv={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Iv={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},Ev={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Fl={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},Sv=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],$l=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...xv,...Sv],Tv=["solid","regular","light","thin","duotone","brands"],Ep=[1,2,3,4,5,6,7,8,9,10],kv=Ep.concat([11,12,13,14,15,16,17,18,19,20]),Av=[...Object.keys(Ev),...Tv,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ro.GROUP,ro.SWAP_OPACITY,ro.PRIMARY,ro.SECONDARY].concat(Ep.map(t=>"".concat(t,"x"))).concat(kv.map(t=>"w-".concat(t))),Rv={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const Sn="___FONT_AWESOME___",Ul=16,Sp="fa",Tp="svg-inline--fa",Ds="data-fa-i2svg",Vl="data-fa-pseudo-element",Pv="data-fa-pseudo-element-pending",Hc="data-prefix",Wc="data-icon",Of="fontawesome-i2svg",Nv="async",Ov=["HTML","HEAD","STYLE","SCRIPT"],kp=(()=>{try{return!0}catch{return!1}})();function Ur(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[nt]}})}const Ap=M({},wp);Ap[nt]=M(M(M(M({},{"fa-duotone":"duotone"}),wp[nt]),Pf.kit),Pf["kit-duotone"]);const Mv=Ur(Ap),Bl=M({},mv);Bl[nt]=M(M(M(M({},{duotone:"fad"}),Bl[nt]),Nf.kit),Nf["kit-duotone"]);const Mf=Ur(Bl),jl=M({},Fl);jl[nt]=M(M({},jl[nt]),bv.kit);const zc=Ur(jl),Hl=M({},Iv);Hl[nt]=M(M({},Hl[nt]),vv.kit);Ur(Hl);const Dv=av,Rp="fa-layers-text",Lv=lv,Fv=M({},dv);Ur(Fv);const $v=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ya=cv,Uv=[..._v,...Av],Xi=os.FontAwesomeConfig||{};function Vv(t){var e=Fe.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Bv(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}Fe&&typeof Fe.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,s]=e;const i=Bv(Vv(n));i!=null&&(Xi[s]=i)});const Pp={styleDefault:"solid",familyDefault:nt,cssPrefix:Sp,replacementClass:Tp,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Xi.familyPrefix&&(Xi.cssPrefix=Xi.familyPrefix);const gi=M(M({},Pp),Xi);gi.autoReplaceSvg||(gi.observeMutations=!1);const Y={};Object.keys(Pp).forEach(t=>{Object.defineProperty(Y,t,{enumerable:!0,set:function(e){gi[t]=e,Ji.forEach(n=>n(Y))},get:function(){return gi[t]}})});Object.defineProperty(Y,"familyPrefix",{enumerable:!0,set:function(t){gi.cssPrefix=t,Ji.forEach(e=>e(Y))},get:function(){return gi.cssPrefix}});os.FontAwesomeConfig=Y;const Ji=[];function jv(t){return Ji.push(t),()=>{Ji.splice(Ji.indexOf(t),1)}}const $n=Ul,tn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Hv(t){if(!t||!Pn)return;const e=Fe.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=Fe.head.childNodes;let s=null;for(let i=n.length-1;i>-1;i--){const r=n[i],o=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(s=r)}return Fe.head.insertBefore(e,s),t}const Wv="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function pr(){let t=12,e="";for(;t-- >0;)e+=Wv[Math.random()*62|0];return e}function Ri(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Gc(t){return t.classList?Ri(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Np(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function zv(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Np(t[n]),'" '),"").trim()}function fa(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Kc(t){return t.size!==tn.size||t.x!==tn.x||t.y!==tn.y||t.rotate!==tn.rotate||t.flipX||t.flipY}function Gv(t){let{transform:e,containerWidth:n,iconWidth:s}=t;const i={transform:"translate(".concat(n/2," 256)")},r="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(r," ").concat(o," ").concat(a)},c={transform:"translate(".concat(s/2*-1," -256)")};return{outer:i,inner:l,path:c}}function Kv(t){let{transform:e,width:n=Ul,height:s=Ul,startCentered:i=!1}=t,r="";return i&&xp?r+="translate(".concat(e.x/$n-n/2,"em, ").concat(e.y/$n-s/2,"em) "):i?r+="translate(calc(-50% + ".concat(e.x/$n,"em), calc(-50% + ").concat(e.y/$n,"em)) "):r+="translate(".concat(e.x/$n,"em, ").concat(e.y/$n,"em) "),r+="scale(".concat(e.size/$n*(e.flipX?-1:1),", ").concat(e.size/$n*(e.flipY?-1:1),") "),r+="rotate(".concat(e.rotate,"deg) "),r}var qv=`:root, :host {
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
}`;function Op(){const t=Sp,e=Tp,n=Y.cssPrefix,s=Y.replacementClass;let i=qv;if(n!==t||s!==e){const r=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(r,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(s))}return i}let Df=!1;function Qa(){Y.autoAddCss&&!Df&&(Hv(Op()),Df=!0)}var Yv={mixout(){return{dom:{css:Op,insertCss:Qa}}},hooks(){return{beforeDOMElementCreation(){Qa()},beforeI2svg(){Qa()}}}};const Tn=os||{};Tn[Sn]||(Tn[Sn]={});Tn[Sn].styles||(Tn[Sn].styles={});Tn[Sn].hooks||(Tn[Sn].hooks={});Tn[Sn].shims||(Tn[Sn].shims=[]);var nn=Tn[Sn];const Mp=[],Dp=function(){Fe.removeEventListener("DOMContentLoaded",Dp),So=1,Mp.map(t=>t())};let So=!1;Pn&&(So=(Fe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Fe.readyState),So||Fe.addEventListener("DOMContentLoaded",Dp));function Qv(t){Pn&&(So?setTimeout(t,0):Mp.push(t))}function Vr(t){const{tag:e,attributes:n={},children:s=[]}=t;return typeof t=="string"?Np(t):"<".concat(e," ").concat(zv(n),">").concat(s.map(Vr).join(""),"</").concat(e,">")}function Lf(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Xa=function(e,n,s,i){var r=Object.keys(e),o=r.length,a=n,l,c,u;for(s===void 0?(l=1,u=e[r[0]]):(l=0,u=s);l<o;l++)c=r[l],u=a(u,e[c],c,e);return u};function Xv(t){const e=[];let n=0;const s=t.length;for(;n<s;){const i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<s){const r=t.charCodeAt(n++);(r&64512)==56320?e.push(((i&1023)<<10)+(r&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Wl(t){const e=Xv(t);return e.length===1?e[0].toString(16):null}function Jv(t,e){const n=t.length;let s=t.charCodeAt(e),i;return s>=55296&&s<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(s-55296)*1024+i-56320+65536:s}function Ff(t){return Object.keys(t).reduce((e,n)=>{const s=t[n];return!!s.icon?e[s.iconName]=s.icon:e[n]=s,e},{})}function zl(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:s=!1}=n,i=Ff(e);typeof nn.hooks.addPack=="function"&&!s?nn.hooks.addPack(t,Ff(e)):nn.styles[t]=M(M({},nn.styles[t]||{}),i),t==="fas"&&zl("fa",e)}const{styles:mr,shims:Zv}=nn,Lp=Object.keys(zc),e1=Lp.reduce((t,e)=>(t[e]=Object.keys(zc[e]),t),{});let qc=null,Fp={},$p={},Up={},Vp={},Bp={};function t1(t){return~Uv.indexOf(t)}function n1(t,e){const n=e.split("-"),s=n[0],i=n.slice(1).join("-");return s===t&&i!==""&&!t1(i)?i:null}const jp=()=>{const t=s=>Xa(mr,(i,r,o)=>(i[o]=Xa(r,s,{}),i),{});Fp=t((s,i,r)=>(i[3]&&(s[i[3]]=r),i[2]&&i[2].filter(a=>typeof a=="number").forEach(a=>{s[a.toString(16)]=r}),s)),$p=t((s,i,r)=>(s[r]=r,i[2]&&i[2].filter(a=>typeof a=="string").forEach(a=>{s[a]=r}),s)),Bp=t((s,i,r)=>{const o=i[2];return s[r]=r,o.forEach(a=>{s[a]=r}),s});const e="far"in mr||Y.autoFetchSvg,n=Xa(Zv,(s,i)=>{const r=i[0];let o=i[1];const a=i[2];return o==="far"&&!e&&(o="fas"),typeof r=="string"&&(s.names[r]={prefix:o,iconName:a}),typeof r=="number"&&(s.unicodes[r.toString(16)]={prefix:o,iconName:a}),s},{names:{},unicodes:{}});Up=n.names,Vp=n.unicodes,qc=da(Y.styleDefault,{family:Y.familyDefault})};jv(t=>{qc=da(t.styleDefault,{family:Y.familyDefault})});jp();function Yc(t,e){return(Fp[t]||{})[e]}function s1(t,e){return($p[t]||{})[e]}function ks(t,e){return(Bp[t]||{})[e]}function Hp(t){return Up[t]||{prefix:null,iconName:null}}function i1(t){const e=Vp[t],n=Yc("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function as(){return qc}const Wp=()=>({prefix:null,iconName:null,rest:[]});function r1(t){let e=nt;const n=Lp.reduce((s,i)=>(s[i]="".concat(Y.cssPrefix,"-").concat(i),s),{});return Ip.forEach(s=>{(t.includes(n[s])||t.some(i=>e1[s].includes(i)))&&(e=s)}),e}function da(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=nt}=e,s=Mv[n][t];if(n===ua&&!t)return"fad";const i=Mf[n][t]||Mf[n][s],r=t in nn.styles?t:null;return i||r||null}function o1(t){let e=[],n=null;return t.forEach(s=>{const i=n1(Y.cssPrefix,s);i?n=i:s&&e.push(s)}),{iconName:n,rest:e}}function $f(t){return t.sort().filter((e,n,s)=>s.indexOf(e)===n)}function ha(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let s=null;const i=$l.concat(wv),r=$f(t.filter(f=>i.includes(f))),o=$f(t.filter(f=>!$l.includes(f))),a=r.filter(f=>(s=f,!Cp.includes(f))),[l=null]=a,c=r1(r),u=M(M({},o1(o)),{},{prefix:da(l,{family:c})});return M(M(M({},u),u1({values:t,family:c,styles:mr,config:Y,canonical:u,givenPrefix:s})),a1(n,s,u))}function a1(t,e,n){let{prefix:s,iconName:i}=n;if(t||!s||!i)return{prefix:s,iconName:i};const r=e==="fa"?Hp(i):{},o=ks(s,i);return i=r.iconName||o||i,s=r.prefix||s,s==="far"&&!mr.far&&mr.fas&&!Y.autoFetchSvg&&(s="fas"),{prefix:s,iconName:i}}const l1=Ip.filter(t=>t!==nt||t!==ua),c1=Object.keys(Fl).filter(t=>t!==nt).map(t=>Object.keys(Fl[t])).flat();function u1(t){const{values:e,family:n,canonical:s,givenPrefix:i="",styles:r={},config:o={}}=t,a=n===ua,l=e.includes("fa-duotone")||e.includes("fad"),c=o.familyDefault==="duotone",u=s.prefix==="fad"||s.prefix==="fa-duotone";if(!a&&(l||c||u)&&(s.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(s.prefix="fab"),!s.prefix&&l1.includes(n)&&(Object.keys(r).find(d=>c1.includes(d))||o.autoFetchSvg)){const d=pv.get(n).defaultShortPrefixId;s.prefix=d,s.iconName=ks(s.prefix,s.iconName)||s.iconName}return(s.prefix==="fa"||i==="fa")&&(s.prefix=as()||"fas"),s}class f1{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),s=0;s<e;s++)n[s]=arguments[s];const i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(r=>{this.definitions[r]=M(M({},this.definitions[r]||{}),i[r]),zl(r,i[r]);const o=zc[nt][r];o&&zl(o,i[r]),jp()})}reset(){this.definitions={}}_pullDefinitions(e,n){const s=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(s).map(i=>{const{prefix:r,iconName:o,icon:a}=s[i],l=a[2];e[r]||(e[r]={}),l.length>0&&l.forEach(c=>{typeof c=="string"&&(e[r][c]=a)}),e[r][o]=a}),e}}let Uf=[],si={};const oi={},d1=Object.keys(oi);function h1(t,e){let{mixoutsTo:n}=e;return Uf=t,si={},Object.keys(oi).forEach(s=>{d1.indexOf(s)===-1&&delete oi[s]}),Uf.forEach(s=>{const i=s.mixout?s.mixout():{};if(Object.keys(i).forEach(r=>{typeof i[r]=="function"&&(n[r]=i[r]),typeof i[r]=="object"&&Object.keys(i[r]).forEach(o=>{n[r]||(n[r]={}),n[r][o]=i[r][o]})}),s.hooks){const r=s.hooks();Object.keys(r).forEach(o=>{si[o]||(si[o]=[]),si[o].push(r[o])})}s.provides&&s.provides(oi)}),n}function Gl(t,e){for(var n=arguments.length,s=new Array(n>2?n-2:0),i=2;i<n;i++)s[i-2]=arguments[i];return(si[t]||[]).forEach(o=>{e=o.apply(null,[e,...s])}),e}function Ls(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),s=1;s<e;s++)n[s-1]=arguments[s];(si[t]||[]).forEach(r=>{r.apply(null,n)})}function ls(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return oi[t]?oi[t].apply(null,e):void 0}function Kl(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||as();if(e)return e=ks(n,e)||e,Lf(zp.definitions,n,e)||Lf(nn.styles,n,e)}const zp=new f1,p1=()=>{Y.autoReplaceSvg=!1,Y.observeMutations=!1,Ls("noAuto")},m1={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Pn?(Ls("beforeI2svg",t),ls("pseudoElements2svg",t),ls("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;Y.autoReplaceSvg===!1&&(Y.autoReplaceSvg=!0),Y.observeMutations=!0,Qv(()=>{_1({autoReplaceSvgRoot:e}),Ls("watch",t)})}},g1={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ks(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=da(t[0]);return{prefix:n,iconName:ks(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(Y.cssPrefix,"-"))>-1||t.match(Dv))){const e=ha(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||as(),iconName:ks(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=as();return{prefix:e,iconName:ks(e,t)||t}}}},wt={noAuto:p1,config:Y,dom:m1,parse:g1,library:zp,findIconDefinition:Kl,toHtml:Vr},_1=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=Fe}=t;(Object.keys(nn.styles).length>0||Y.autoFetchSvg)&&Pn&&Y.autoReplaceSvg&&wt.dom.i2svg({node:e})};function pa(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>Vr(n))}}),Object.defineProperty(t,"node",{get:function(){if(!Pn)return;const n=Fe.createElement("div");return n.innerHTML=t.html,n.children}}),t}function v1(t){let{children:e,main:n,mask:s,attributes:i,styles:r,transform:o}=t;if(Kc(o)&&n.found&&!s.found){const{width:a,height:l}=n,c={x:a/l/2,y:.5};i.style=fa(M(M({},r),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function y1(t){let{prefix:e,iconName:n,children:s,attributes:i,symbol:r}=t;const o=r===!0?"".concat(e,"-").concat(Y.cssPrefix,"-").concat(n):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:M(M({},i),{},{id:o}),children:s}]}]}function Qc(t){const{icons:{main:e,mask:n},prefix:s,iconName:i,transform:r,symbol:o,title:a,maskId:l,titleId:c,extra:u,watchable:f=!1}=t,{width:d,height:h}=n.found?n:e,y=yv.includes(s),_=[Y.replacementClass,i?"".concat(Y.cssPrefix,"-").concat(i):""].filter(G=>u.classes.indexOf(G)===-1).filter(G=>G!==""||!!G).concat(u.classes).join(" ");let w={children:[],attributes:M(M({},u.attributes),{},{"data-prefix":s,"data-icon":i,class:_,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(d," ").concat(h)})};const m=y&&!~u.classes.indexOf("fa-fw")?{width:"".concat(d/h*16*.0625,"em")}:{};f&&(w.attributes[Ds]=""),a&&(w.children.push({tag:"title",attributes:{id:w.attributes["aria-labelledby"]||"title-".concat(c||pr())},children:[a]}),delete w.attributes.title);const b=M(M({},w),{},{prefix:s,iconName:i,main:e,mask:n,maskId:l,transform:r,symbol:o,styles:M(M({},m),u.styles)}),{children:R,attributes:O}=n.found&&e.found?ls("generateAbstractMask",b)||{children:[],attributes:{}}:ls("generateAbstractIcon",b)||{children:[],attributes:{}};return b.children=R,b.attributes=O,o?y1(b):v1(b)}function Vf(t){const{content:e,width:n,height:s,transform:i,title:r,extra:o,watchable:a=!1}=t,l=M(M(M({},o.attributes),r?{title:r}:{}),{},{class:o.classes.join(" ")});a&&(l[Ds]="");const c=M({},o.styles);Kc(i)&&(c.transform=Kv({transform:i,startCentered:!0,width:n,height:s}),c["-webkit-transform"]=c.transform);const u=fa(c);u.length>0&&(l.style=u);const f=[];return f.push({tag:"span",attributes:l,children:[e]}),r&&f.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),f}function b1(t){const{content:e,title:n,extra:s}=t,i=M(M(M({},s.attributes),n?{title:n}:{}),{},{class:s.classes.join(" ")}),r=fa(s.styles);r.length>0&&(i.style=r);const o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:Ja}=nn;function ql(t){const e=t[0],n=t[1],[s]=t.slice(4);let i=null;return Array.isArray(s)?i={tag:"g",attributes:{class:"".concat(Y.cssPrefix,"-").concat(Ya.GROUP)},children:[{tag:"path",attributes:{class:"".concat(Y.cssPrefix,"-").concat(Ya.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(Y.cssPrefix,"-").concat(Ya.PRIMARY),fill:"currentColor",d:s[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:i}}const x1={found:!1,width:512,height:512};function w1(t,e){!kp&&!Y.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Yl(t,e){let n=e;return e==="fa"&&Y.styleDefault!==null&&(e=as()),new Promise((s,i)=>{if(n==="fa"){const r=Hp(t)||{};t=r.iconName||t,e=r.prefix||e}if(t&&e&&Ja[e]&&Ja[e][t]){const r=Ja[e][t];return s(ql(r))}w1(t,e),s(M(M({},x1),{},{icon:Y.showMissingIcons&&t?ls("missingIconAbstract")||{}:{}}))})}const Bf=()=>{},Ql=Y.measurePerformance&&io&&io.mark&&io.measure?io:{mark:Bf,measure:Bf},Yi='FA "6.7.2"',C1=t=>(Ql.mark("".concat(Yi," ").concat(t," begins")),()=>Gp(t)),Gp=t=>{Ql.mark("".concat(Yi," ").concat(t," ends")),Ql.measure("".concat(Yi," ").concat(t),"".concat(Yi," ").concat(t," begins"),"".concat(Yi," ").concat(t," ends"))};var Xc={begin:C1,end:Gp};const mo=()=>{};function jf(t){return typeof(t.getAttribute?t.getAttribute(Ds):null)=="string"}function I1(t){const e=t.getAttribute?t.getAttribute(Hc):null,n=t.getAttribute?t.getAttribute(Wc):null;return e&&n}function E1(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(Y.replacementClass)}function S1(){return Y.autoReplaceSvg===!0?go.replace:go[Y.autoReplaceSvg]||go.replace}function T1(t){return Fe.createElementNS("http://www.w3.org/2000/svg",t)}function k1(t){return Fe.createElement(t)}function Kp(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?T1:k1}=e;if(typeof t=="string")return Fe.createTextNode(t);const s=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(r){s.setAttribute(r,t.attributes[r])}),(t.children||[]).forEach(function(r){s.appendChild(Kp(r,{ceFn:n}))}),s}function A1(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const go={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(Kp(n),e)}),e.getAttribute(Ds)===null&&Y.keepOriginalSource){let n=Fe.createComment(A1(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Gc(e).indexOf(Y.replacementClass))return go.replace(t);const s=new RegExp("".concat(Y.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const r=n[0].attributes.class.split(" ").reduce((o,a)=>(a===Y.replacementClass||a.match(s)?o.toSvg.push(a):o.toNode.push(a),o),{toNode:[],toSvg:[]});n[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",r.toNode.join(" "))}const i=n.map(r=>Vr(r)).join(`
`);e.setAttribute(Ds,""),e.innerHTML=i}};function Hf(t){t()}function qp(t,e){const n=typeof e=="function"?e:mo;if(t.length===0)n();else{let s=Hf;Y.mutateApproach===Nv&&(s=os.requestAnimationFrame||Hf),s(()=>{const i=S1(),r=Xc.begin("mutate");t.map(i),r(),n()})}}let Jc=!1;function Yp(){Jc=!0}function Xl(){Jc=!1}let To=null;function Wf(t){if(!Rf||!Y.observeMutations)return;const{treeCallback:e=mo,nodeCallback:n=mo,pseudoElementsCallback:s=mo,observeMutationsRoot:i=Fe}=t;To=new Rf(r=>{if(Jc)return;const o=as();Ri(r).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!jf(a.addedNodes[0])&&(Y.searchPseudoElements&&s(a.target),e(a.target)),a.type==="attributes"&&a.target.parentNode&&Y.searchPseudoElements&&s(a.target.parentNode),a.type==="attributes"&&jf(a.target)&&~$v.indexOf(a.attributeName))if(a.attributeName==="class"&&I1(a.target)){const{prefix:l,iconName:c}=ha(Gc(a.target));a.target.setAttribute(Hc,l||o),c&&a.target.setAttribute(Wc,c)}else E1(a.target)&&n(a.target)})}),Pn&&To.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function R1(){To&&To.disconnect()}function P1(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((s,i)=>{const r=i.split(":"),o=r[0],a=r.slice(1);return o&&a.length>0&&(s[o]=a.join(":").trim()),s},{})),n}function N1(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),s=t.innerText!==void 0?t.innerText.trim():"";let i=ha(Gc(t));return i.prefix||(i.prefix=as()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&s.length>0&&(i.iconName=s1(i.prefix,t.innerText)||Yc(i.prefix,Wl(t.innerText))),!i.iconName&&Y.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function O1(t){const e=Ri(t.attributes).reduce((i,r)=>(i.name!=="class"&&i.name!=="style"&&(i[r.name]=r.value),i),{}),n=t.getAttribute("title"),s=t.getAttribute("data-fa-title-id");return Y.autoA11y&&(n?e["aria-labelledby"]="".concat(Y.replacementClass,"-title-").concat(s||pr()):(e["aria-hidden"]="true",e.focusable="false")),e}function M1(){return{iconName:null,title:null,titleId:null,prefix:null,transform:tn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function zf(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:s,rest:i}=N1(t),r=O1(t),o=Gl("parseNodeAttributes",{},t);let a=e.styleParser?P1(t):[];return M({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:s,transform:tn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:a,attributes:r}},o)}const{styles:D1}=nn;function Qp(t){const e=Y.autoReplaceSvg==="nest"?zf(t,{styleParser:!1}):zf(t);return~e.extra.classes.indexOf(Rp)?ls("generateLayersText",t,e):ls("generateSvgReplacementMutation",t,e)}function L1(){return[...gv,...$l]}function Gf(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Pn)return Promise.resolve();const n=Fe.documentElement.classList,s=u=>n.add("".concat(Of,"-").concat(u)),i=u=>n.remove("".concat(Of,"-").concat(u)),r=Y.autoFetchSvg?L1():Cp.concat(Object.keys(D1));r.includes("fa")||r.push("fa");const o=[".".concat(Rp,":not([").concat(Ds,"])")].concat(r.map(u=>".".concat(u,":not([").concat(Ds,"])"))).join(", ");if(o.length===0)return Promise.resolve();let a=[];try{a=Ri(t.querySelectorAll(o))}catch{}if(a.length>0)s("pending"),i("complete");else return Promise.resolve();const l=Xc.begin("onTree"),c=a.reduce((u,f)=>{try{const d=Qp(f);d&&u.push(d)}catch(d){kp||d.name==="MissingIcon"&&console.error(d)}return u},[]);return new Promise((u,f)=>{Promise.all(c).then(d=>{qp(d,()=>{s("active"),s("complete"),i("pending"),typeof e=="function"&&e(),l(),u()})}).catch(d=>{l(),f(d)})})}function F1(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Qp(t).then(n=>{n&&qp([n],e)})}function $1(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const s=(e||{}).icon?e:Kl(e||{});let{mask:i}=n;return i&&(i=(i||{}).icon?i:Kl(i||{})),t(s,M(M({},n),{},{mask:i}))}}const U1=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=tn,symbol:s=!1,mask:i=null,maskId:r=null,title:o=null,titleId:a=null,classes:l=[],attributes:c={},styles:u={}}=e;if(!t)return;const{prefix:f,iconName:d,icon:h}=t;return pa(M({type:"icon"},t),()=>(Ls("beforeDOMElementCreation",{iconDefinition:t,params:e}),Y.autoA11y&&(o?c["aria-labelledby"]="".concat(Y.replacementClass,"-title-").concat(a||pr()):(c["aria-hidden"]="true",c.focusable="false")),Qc({icons:{main:ql(h),mask:i?ql(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:f,iconName:d,transform:M(M({},tn),n),symbol:s,title:o,maskId:r,titleId:a,extra:{attributes:c,styles:u,classes:l}})))};var V1={mixout(){return{icon:$1(U1)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Gf,t.nodeCallback=F1,t}}},provides(t){t.i2svg=function(e){const{node:n=Fe,callback:s=()=>{}}=e;return Gf(n,s)},t.generateSvgReplacementMutation=function(e,n){const{iconName:s,title:i,titleId:r,prefix:o,transform:a,symbol:l,mask:c,maskId:u,extra:f}=n;return new Promise((d,h)=>{Promise.all([Yl(s,o),c.iconName?Yl(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(y=>{let[_,w]=y;d([e,Qc({icons:{main:_,mask:w},prefix:o,iconName:s,transform:a,symbol:l,maskId:u,title:i,titleId:r,extra:f,watchable:!0})])}).catch(h)})},t.generateAbstractIcon=function(e){let{children:n,attributes:s,main:i,transform:r,styles:o}=e;const a=fa(o);a.length>0&&(s.style=a);let l;return Kc(r)&&(l=ls("generateAbstractTransformGrouping",{main:i,transform:r,containerWidth:i.width,iconWidth:i.width})),n.push(l||i.icon),{children:n,attributes:s}}}},B1={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return pa({type:"layer"},()=>{Ls("beforeDOMElementCreation",{assembler:t,params:e});let s=[];return t(i=>{Array.isArray(i)?i.map(r=>{s=s.concat(r.abstract)}):s=s.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(Y.cssPrefix,"-layers"),...n].join(" ")},children:s}]})}}}},j1={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:s=[],attributes:i={},styles:r={}}=e;return pa({type:"counter",content:t},()=>(Ls("beforeDOMElementCreation",{content:t,params:e}),b1({content:t.toString(),title:n,extra:{attributes:i,styles:r,classes:["".concat(Y.cssPrefix,"-layers-counter"),...s]}})))}}}},H1={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=tn,title:s=null,classes:i=[],attributes:r={},styles:o={}}=e;return pa({type:"text",content:t},()=>(Ls("beforeDOMElementCreation",{content:t,params:e}),Vf({content:t,transform:M(M({},tn),n),title:s,extra:{attributes:r,styles:o,classes:["".concat(Y.cssPrefix,"-layers-text"),...i]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:s,transform:i,extra:r}=n;let o=null,a=null;if(xp){const l=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();o=c.width/l,a=c.height/l}return Y.autoA11y&&!s&&(r.attributes["aria-hidden"]="true"),Promise.resolve([e,Vf({content:e.innerHTML,width:o,height:a,transform:i,title:s,extra:r,watchable:!0})])}}};const W1=new RegExp('"',"ug"),Kf=[1105920,1112319],qf=M(M(M(M({},{FontAwesome:{normal:"fas",400:"fas"}}),hv),Rv),Cv),Jl=Object.keys(qf).reduce((t,e)=>(t[e.toLowerCase()]=qf[e],t),{}),z1=Object.keys(Jl).reduce((t,e)=>{const n=Jl[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function G1(t){const e=t.replace(W1,""),n=Jv(e,0),s=n>=Kf[0]&&n<=Kf[1],i=e.length===2?e[0]===e[1]:!1;return{value:Wl(i?e[0]:e),isSecondary:s||i}}function K1(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),s=parseInt(e),i=isNaN(s)?"normal":s;return(Jl[n]||{})[i]||z1[n]}function Yf(t,e){const n="".concat(Pv).concat(e.replace(":","-"));return new Promise((s,i)=>{if(t.getAttribute(n)!==null)return s();const o=Ri(t.children).filter(d=>d.getAttribute(Vl)===e)[0],a=os.getComputedStyle(t,e),l=a.getPropertyValue("font-family"),c=l.match(Lv),u=a.getPropertyValue("font-weight"),f=a.getPropertyValue("content");if(o&&!c)return t.removeChild(o),s();if(c&&f!=="none"&&f!==""){const d=a.getPropertyValue("content");let h=K1(l,u);const{value:y,isSecondary:_}=G1(d),w=c[0].startsWith("FontAwesome");let m=Yc(h,y),b=m;if(w){const R=i1(y);R.iconName&&R.prefix&&(m=R.iconName,h=R.prefix)}if(m&&!_&&(!o||o.getAttribute(Hc)!==h||o.getAttribute(Wc)!==b)){t.setAttribute(n,b),o&&t.removeChild(o);const R=M1(),{extra:O}=R;O.attributes[Vl]=e,Yl(m,h).then(G=>{const q=Qc(M(M({},R),{},{icons:{main:G,mask:Wp()},prefix:h,iconName:b,extra:O,watchable:!0})),S=Fe.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(S,t.firstChild):t.appendChild(S),S.outerHTML=q.map(L=>Vr(L)).join(`
`),t.removeAttribute(n),s()}).catch(i)}else s()}else s()})}function q1(t){return Promise.all([Yf(t,"::before"),Yf(t,"::after")])}function Y1(t){return t.parentNode!==document.head&&!~Ov.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Vl)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Qf(t){if(Pn)return new Promise((e,n)=>{const s=Ri(t.querySelectorAll("*")).filter(Y1).map(q1),i=Xc.begin("searchPseudoElements");Yp(),Promise.all(s).then(()=>{i(),Xl(),e()}).catch(()=>{i(),Xl(),n()})})}var Q1={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Qf,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=Fe}=e;Y.searchPseudoElements&&Qf(n)}}};let Xf=!1;var X1={mixout(){return{dom:{unwatch(){Yp(),Xf=!0}}}},hooks(){return{bootstrap(){Wf(Gl("mutationObserverCallbacks",{}))},noAuto(){R1()},watch(t){const{observeMutationsRoot:e}=t;Xf?Xl():Wf(Gl("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Jf=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,s)=>{const i=s.toLowerCase().split("-"),r=i[0];let o=i.slice(1).join("-");if(r&&o==="h")return n.flipX=!0,n;if(r&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(r){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var J1={mixout(){return{parse:{transform:t=>Jf(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=Jf(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:s,containerWidth:i,iconWidth:r}=e;const o={transform:"translate(".concat(i/2," 256)")},a="translate(".concat(s.x*32,", ").concat(s.y*32,") "),l="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),c="rotate(".concat(s.rotate," 0 0)"),u={transform:"".concat(a," ").concat(l," ").concat(c)},f={transform:"translate(".concat(r/2*-1," -256)")},d={outer:o,inner:u,path:f};return{tag:"g",attributes:M({},d.outer),children:[{tag:"g",attributes:M({},d.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:M(M({},n.icon.attributes),d.path)}]}]}}}};const Za={x:0,y:0,width:"100%",height:"100%"};function Zf(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Z1(t){return t.tag==="g"?t.children:[t]}var ey={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),s=n?ha(n.split(" ").map(i=>i.trim())):Wp();return s.prefix||(s.prefix=as()),t.mask=s,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:s,main:i,mask:r,maskId:o,transform:a}=e;const{width:l,icon:c}=i,{width:u,icon:f}=r,d=Gv({transform:a,containerWidth:u,iconWidth:l}),h={tag:"rect",attributes:M(M({},Za),{},{fill:"white"})},y=c.children?{children:c.children.map(Zf)}:{},_={tag:"g",attributes:M({},d.inner),children:[Zf(M({tag:c.tag,attributes:M(M({},c.attributes),d.path)},y))]},w={tag:"g",attributes:M({},d.outer),children:[_]},m="mask-".concat(o||pr()),b="clip-".concat(o||pr()),R={tag:"mask",attributes:M(M({},Za),{},{id:m,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[h,w]},O={tag:"defs",children:[{tag:"clipPath",attributes:{id:b},children:Z1(f)},R]};return n.push(O,{tag:"rect",attributes:M({fill:"currentColor","clip-path":"url(#".concat(b,")"),mask:"url(#".concat(m,")")},Za)}),{children:n,attributes:s}}}},ty={provides(t){let e=!1;os.matchMedia&&(e=os.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],s={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:M(M({},s),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const r=M(M({},i),{},{attributeName:"opacity"}),o={tag:"circle",attributes:M(M({},s),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:M(M({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:M(M({},r),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:M(M({},s),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:M(M({},r),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:M(M({},s),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:M(M({},r),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},ny={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),s=n===null?!1:n===""?!0:n;return t.symbol=s,t}}}},sy=[Yv,V1,B1,j1,H1,Q1,X1,J1,ey,ty,ny];h1(sy,{mixoutsTo:wt});wt.noAuto;wt.config;const iy=wt.library;wt.dom;const Zl=wt.parse;wt.findIconDefinition;wt.toHtml;const ry=wt.icon;wt.layer;const oy=wt.text;wt.counter;/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const ay={prefix:"fas",iconName:"clock",icon:[512,512,[128339,"clock-four"],"f017","M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]},ly={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},cy=ly;/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Zc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Re={},ai=[],sn=()=>{},uy=()=>!1,ma=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),eu=t=>t.startsWith("onUpdate:"),Ke=Object.assign,tu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},fy=Object.prototype.hasOwnProperty,Ce=(t,e)=>fy.call(t,e),J=Array.isArray,li=t=>Br(t)==="[object Map]",Pi=t=>Br(t)==="[object Set]",ed=t=>Br(t)==="[object Date]",oe=t=>typeof t=="function",je=t=>typeof t=="string",on=t=>typeof t=="symbol",Pe=t=>t!==null&&typeof t=="object",Xp=t=>(Pe(t)||oe(t))&&oe(t.then)&&oe(t.catch),Jp=Object.prototype.toString,Br=t=>Jp.call(t),dy=t=>Br(t).slice(8,-1),Zp=t=>Br(t)==="[object Object]",nu=t=>je(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Zi=Zc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ga=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},hy=/-(\w)/g,Rt=ga(t=>t.replace(hy,(e,n)=>n?n.toUpperCase():"")),py=/\B([A-Z])/g,ps=ga(t=>t.replace(py,"-$1").toLowerCase()),_a=ga(t=>t.charAt(0).toUpperCase()+t.slice(1)),el=ga(t=>t?`on${_a(t)}`:""),Zn=(t,e)=>!Object.is(t,e),_o=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},em=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},ko=t=>{const e=parseFloat(t);return isNaN(e)?t:e},my=t=>{const e=je(t)?Number(t):NaN;return isNaN(e)?t:e};let td;const va=()=>td||(td=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ya(t){if(J(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=je(s)?yy(s):ya(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(je(t)||Pe(t))return t}const gy=/;(?![^(]*\))/g,_y=/:([^]+)/,vy=/\/\*[^]*?\*\//g;function yy(t){const e={};return t.replace(vy,"").split(gy).forEach(n=>{if(n){const s=n.split(_y);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function bt(t){let e="";if(je(t))e=t;else if(J(t))for(let n=0;n<t.length;n++){const s=bt(t[n]);s&&(e+=s+" ")}else if(Pe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const by="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",xy=Zc(by);function tm(t){return!!t||t===""}function wy(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Fs(t[s],e[s]);return n}function Fs(t,e){if(t===e)return!0;let n=ed(t),s=ed(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=on(t),s=on(e),n||s)return t===e;if(n=J(t),s=J(e),n||s)return n&&s?wy(t,e):!1;if(n=Pe(t),s=Pe(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Fs(t[o],e[o]))return!1}}return String(t)===String(e)}function su(t,e){return t.findIndex(n=>Fs(n,e))}const nm=t=>!!(t&&t.__v_isRef===!0),X=t=>je(t)?t:t==null?"":J(t)||Pe(t)&&(t.toString===Jp||!oe(t.toString))?nm(t)?X(t.value):JSON.stringify(t,sm,2):String(t),sm=(t,e)=>nm(e)?sm(t,e.value):li(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[tl(s,r)+" =>"]=i,n),{})}:Pi(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>tl(n))}:on(e)?tl(e):Pe(e)&&!J(e)&&!Zp(e)?String(e):e,tl=(t,e="")=>{var n;return on(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let rt;class im{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=rt,!e&&rt&&(this.index=(rt.scopes||(rt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=rt;try{return rt=this,e()}finally{rt=n}}}on(){rt=this}off(){rt=this.parent}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function rm(t){return new im(t)}function om(){return rt}function Cy(t,e=!1){rt&&rt.cleanups.push(t)}let Oe;const nl=new WeakSet;class am{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,rt&&rt.active&&rt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,nl.has(this)&&(nl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||cm(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,nd(this),um(this);const e=Oe,n=$t;Oe=this,$t=!0;try{return this.fn()}finally{fm(this),Oe=e,$t=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ou(e);this.deps=this.depsTail=void 0,nd(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?nl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ec(this)&&this.run()}get dirty(){return ec(this)}}let lm=0,er,tr;function cm(t,e=!1){if(t.flags|=8,e){t.next=tr,tr=t;return}t.next=er,er=t}function iu(){lm++}function ru(){if(--lm>0)return;if(tr){let e=tr;for(tr=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;er;){let e=er;for(er=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function um(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function fm(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),ou(s),Iy(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function ec(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(dm(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function dm(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===gr))return;t.globalVersion=gr;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!ec(t)){t.flags&=-3;return}const n=Oe,s=$t;Oe=t,$t=!0;try{um(t);const i=t.fn(t._value);(e.version===0||Zn(i,t._value))&&(t._value=i,e.version++)}catch(i){throw e.version++,i}finally{Oe=n,$t=s,fm(t),t.flags&=-3}}function ou(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)ou(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Iy(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let $t=!0;const hm=[];function ms(){hm.push($t),$t=!1}function gs(){const t=hm.pop();$t=t===void 0?!0:t}function nd(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Oe;Oe=void 0;try{e()}finally{Oe=n}}}let gr=0;class Ey{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class au{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Oe||!$t||Oe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Oe)n=this.activeLink=new Ey(Oe,this),Oe.deps?(n.prevDep=Oe.depsTail,Oe.depsTail.nextDep=n,Oe.depsTail=n):Oe.deps=Oe.depsTail=n,pm(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=Oe.depsTail,n.nextDep=void 0,Oe.depsTail.nextDep=n,Oe.depsTail=n,Oe.deps===n&&(Oe.deps=s)}return n}trigger(e){this.version++,gr++,this.notify(e)}notify(e){iu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{ru()}}}function pm(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)pm(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ao=new WeakMap,Ps=Symbol(""),tc=Symbol(""),_r=Symbol("");function et(t,e,n){if($t&&Oe){let s=Ao.get(t);s||Ao.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new au),i.map=s,i.key=n),i.track()}}function mn(t,e,n,s,i,r){const o=Ao.get(t);if(!o){gr++;return}const a=l=>{l&&l.trigger()};if(iu(),e==="clear")o.forEach(a);else{const l=J(t),c=l&&nu(n);if(l&&n==="length"){const u=Number(s);o.forEach((f,d)=>{(d==="length"||d===_r||!on(d)&&d>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(_r)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Ps)),li(t)&&a(o.get(tc)));break;case"delete":l||(a(o.get(Ps)),li(t)&&a(o.get(tc)));break;case"set":li(t)&&a(o.get(Ps));break}}ru()}function Sy(t,e){const n=Ao.get(t);return n&&n.get(e)}function Qs(t){const e=_e(t);return e===t?e:(et(e,"iterate",_r),Tt(t)?e:e.map(tt))}function ba(t){return et(t=_e(t),"iterate",_r),t}const Ty={__proto__:null,[Symbol.iterator](){return sl(this,Symbol.iterator,tt)},concat(...t){return Qs(this).concat(...t.map(e=>J(e)?Qs(e):e))},entries(){return sl(this,"entries",t=>(t[1]=tt(t[1]),t))},every(t,e){return dn(this,"every",t,e,void 0,arguments)},filter(t,e){return dn(this,"filter",t,e,n=>n.map(tt),arguments)},find(t,e){return dn(this,"find",t,e,tt,arguments)},findIndex(t,e){return dn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return dn(this,"findLast",t,e,tt,arguments)},findLastIndex(t,e){return dn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return dn(this,"forEach",t,e,void 0,arguments)},includes(...t){return il(this,"includes",t)},indexOf(...t){return il(this,"indexOf",t)},join(t){return Qs(this).join(t)},lastIndexOf(...t){return il(this,"lastIndexOf",t)},map(t,e){return dn(this,"map",t,e,void 0,arguments)},pop(){return Bi(this,"pop")},push(...t){return Bi(this,"push",t)},reduce(t,...e){return sd(this,"reduce",t,e)},reduceRight(t,...e){return sd(this,"reduceRight",t,e)},shift(){return Bi(this,"shift")},some(t,e){return dn(this,"some",t,e,void 0,arguments)},splice(...t){return Bi(this,"splice",t)},toReversed(){return Qs(this).toReversed()},toSorted(t){return Qs(this).toSorted(t)},toSpliced(...t){return Qs(this).toSpliced(...t)},unshift(...t){return Bi(this,"unshift",t)},values(){return sl(this,"values",tt)}};function sl(t,e,n){const s=ba(t),i=s[e]();return s!==t&&!Tt(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=n(r.value)),r}),i}const ky=Array.prototype;function dn(t,e,n,s,i,r){const o=ba(t),a=o!==t&&!Tt(t),l=o[e];if(l!==ky[e]){const f=l.apply(t,r);return a?tt(f):f}let c=n;o!==t&&(a?c=function(f,d){return n.call(this,tt(f),d,t)}:n.length>2&&(c=function(f,d){return n.call(this,f,d,t)}));const u=l.call(o,c,s);return a&&i?i(u):u}function sd(t,e,n,s){const i=ba(t);let r=n;return i!==t&&(Tt(t)?n.length>3&&(r=function(o,a,l){return n.call(this,o,a,l,t)}):r=function(o,a,l){return n.call(this,o,tt(a),l,t)}),i[e](r,...s)}function il(t,e,n){const s=_e(t);et(s,"iterate",_r);const i=s[e](...n);return(i===-1||i===!1)&&uu(n[0])?(n[0]=_e(n[0]),s[e](...n)):i}function Bi(t,e,n=[]){ms(),iu();const s=_e(t)[e].apply(t,n);return ru(),gs(),s}const Ay=Zc("__proto__,__v_isRef,__isVue"),mm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(on));function Ry(t){on(t)||(t=String(t));const e=_e(this);return et(e,"has",t),e.hasOwnProperty(t)}class gm{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?Vy:bm:r?ym:vm).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=J(e);if(!i){let l;if(o&&(l=Ty[n]))return l;if(n==="hasOwnProperty")return Ry}const a=Reflect.get(e,n,Be(e)?e:s);return(on(n)?mm.has(n):Ay(n))||(i||et(e,"get",n),r)?a:Be(a)?o&&nu(n)?a:a.value:Pe(a)?i?wm(a):jr(a):a}}class _m extends gm{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const l=$s(r);if(!Tt(s)&&!$s(s)&&(r=_e(r),s=_e(s)),!J(e)&&Be(r)&&!Be(s))return l?!1:(r.value=s,!0)}const o=J(e)&&nu(n)?Number(n)<e.length:Ce(e,n),a=Reflect.set(e,n,s,Be(e)?e:i);return e===_e(i)&&(o?Zn(s,r)&&mn(e,"set",n,s):mn(e,"add",n,s)),a}deleteProperty(e,n){const s=Ce(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&mn(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!on(n)||!mm.has(n))&&et(e,"has",n),s}ownKeys(e){return et(e,"iterate",J(e)?"length":Ps),Reflect.ownKeys(e)}}class Py extends gm{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Ny=new _m,Oy=new Py,My=new _m(!0);const nc=t=>t,oo=t=>Reflect.getPrototypeOf(t);function Dy(t,e,n){return function(...s){const i=this.__v_raw,r=_e(i),o=li(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?nc:e?sc:tt;return!e&&et(r,"iterate",l?tc:Ps),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function ao(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Ly(t,e){const n={get(i){const r=this.__v_raw,o=_e(r),a=_e(i);t||(Zn(i,a)&&et(o,"get",i),et(o,"get",a));const{has:l}=oo(o),c=e?nc:t?sc:tt;if(l.call(o,i))return c(r.get(i));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&et(_e(i),"iterate",Ps),Reflect.get(i,"size",i)},has(i){const r=this.__v_raw,o=_e(r),a=_e(i);return t||(Zn(i,a)&&et(o,"has",i),et(o,"has",a)),i===a?r.has(i):r.has(i)||r.has(a)},forEach(i,r){const o=this,a=o.__v_raw,l=_e(a),c=e?nc:t?sc:tt;return!t&&et(l,"iterate",Ps),a.forEach((u,f)=>i.call(r,c(u),c(f),o))}};return Ke(n,t?{add:ao("add"),set:ao("set"),delete:ao("delete"),clear:ao("clear")}:{add(i){!e&&!Tt(i)&&!$s(i)&&(i=_e(i));const r=_e(this);return oo(r).has.call(r,i)||(r.add(i),mn(r,"add",i,i)),this},set(i,r){!e&&!Tt(r)&&!$s(r)&&(r=_e(r));const o=_e(this),{has:a,get:l}=oo(o);let c=a.call(o,i);c||(i=_e(i),c=a.call(o,i));const u=l.call(o,i);return o.set(i,r),c?Zn(r,u)&&mn(o,"set",i,r):mn(o,"add",i,r),this},delete(i){const r=_e(this),{has:o,get:a}=oo(r);let l=o.call(r,i);l||(i=_e(i),l=o.call(r,i)),a&&a.call(r,i);const c=r.delete(i);return l&&mn(r,"delete",i,void 0),c},clear(){const i=_e(this),r=i.size!==0,o=i.clear();return r&&mn(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=Dy(i,t,e)}),n}function lu(t,e){const n=Ly(t,e);return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(Ce(n,i)&&i in s?n:s,i,r)}const Fy={get:lu(!1,!1)},$y={get:lu(!1,!0)},Uy={get:lu(!0,!1)};const vm=new WeakMap,ym=new WeakMap,bm=new WeakMap,Vy=new WeakMap;function By(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function jy(t){return t.__v_skip||!Object.isExtensible(t)?0:By(dy(t))}function jr(t){return $s(t)?t:cu(t,!1,Ny,Fy,vm)}function xm(t){return cu(t,!1,My,$y,ym)}function wm(t){return cu(t,!0,Oy,Uy,bm)}function cu(t,e,n,s,i){if(!Pe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=jy(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function es(t){return $s(t)?es(t.__v_raw):!!(t&&t.__v_isReactive)}function $s(t){return!!(t&&t.__v_isReadonly)}function Tt(t){return!!(t&&t.__v_isShallow)}function uu(t){return t?!!t.__v_raw:!1}function _e(t){const e=t&&t.__v_raw;return e?_e(e):t}function fu(t){return!Ce(t,"__v_skip")&&Object.isExtensible(t)&&em(t,"__v_skip",!0),t}const tt=t=>Pe(t)?jr(t):t,sc=t=>Pe(t)?wm(t):t;function Be(t){return t?t.__v_isRef===!0:!1}function ae(t){return Cm(t,!1)}function Hy(t){return Cm(t,!0)}function Cm(t,e){return Be(t)?t:new Wy(t,e)}class Wy{constructor(e,n){this.dep=new au,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:_e(e),this._value=n?e:tt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||Tt(e)||$s(e);e=s?e:_e(e),Zn(e,n)&&(this._rawValue=e,this._value=s?e:tt(e),this.dep.trigger())}}function I(t){return Be(t)?t.value:t}const zy={get:(t,e,n)=>e==="__v_raw"?t:I(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Be(i)&&!Be(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Im(t){return es(t)?t:new Proxy(t,zy)}function Gy(t){const e=J(t)?new Array(t.length):{};for(const n in t)e[n]=qy(t,n);return e}class Ky{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Sy(_e(this._object),this._key)}}function qy(t,e,n){const s=t[e];return Be(s)?s:new Ky(t,e,n)}class Yy{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new au(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=gr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&Oe!==this)return cm(this,!0),!0}get value(){const e=this.dep.track();return dm(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Qy(t,e,n=!1){let s,i;return oe(t)?s=t:(s=t.get,i=t.set),new Yy(s,i,n)}const lo={},Ro=new WeakMap;let Is;function Xy(t,e=!1,n=Is){if(n){let s=Ro.get(n);s||Ro.set(n,s=[]),s.push(t)}}function Jy(t,e,n=Re){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:a,call:l}=n,c=O=>i?O:Tt(O)||i===!1||i===0?gn(O,1):gn(O);let u,f,d,h,y=!1,_=!1;if(Be(t)?(f=()=>t.value,y=Tt(t)):es(t)?(f=()=>c(t),y=!0):J(t)?(_=!0,y=t.some(O=>es(O)||Tt(O)),f=()=>t.map(O=>{if(Be(O))return O.value;if(es(O))return c(O);if(oe(O))return l?l(O,2):O()})):oe(t)?e?f=l?()=>l(t,2):t:f=()=>{if(d){ms();try{d()}finally{gs()}}const O=Is;Is=u;try{return l?l(t,3,[h]):t(h)}finally{Is=O}}:f=sn,e&&i){const O=f,G=i===!0?1/0:i;f=()=>gn(O(),G)}const w=om(),m=()=>{u.stop(),w&&w.active&&tu(w.effects,u)};if(r&&e){const O=e;e=(...G)=>{O(...G),m()}}let b=_?new Array(t.length).fill(lo):lo;const R=O=>{if(!(!(u.flags&1)||!u.dirty&&!O))if(e){const G=u.run();if(i||y||(_?G.some((q,S)=>Zn(q,b[S])):Zn(G,b))){d&&d();const q=Is;Is=u;try{const S=[G,b===lo?void 0:_&&b[0]===lo?[]:b,h];l?l(e,3,S):e(...S),b=G}finally{Is=q}}}else u.run()};return a&&a(R),u=new am(f),u.scheduler=o?()=>o(R,!1):R,h=O=>Xy(O,!1,u),d=u.onStop=()=>{const O=Ro.get(u);if(O){if(l)l(O,4);else for(const G of O)G();Ro.delete(u)}},e?s?R(!0):b=u.run():o?o(R.bind(null,!0),!0):u.run(),m.pause=u.pause.bind(u),m.resume=u.resume.bind(u),m.stop=m,m}function gn(t,e=1/0,n){if(e<=0||!Pe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Be(t))gn(t.value,e,n);else if(J(t))for(let s=0;s<t.length;s++)gn(t[s],e,n);else if(Pi(t)||li(t))t.forEach(s=>{gn(s,e,n)});else if(Zp(t)){for(const s in t)gn(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&gn(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Hr(t,e,n,s){try{return s?t(...s):t()}catch(i){xa(i,e,n)}}function jt(t,e,n,s){if(oe(t)){const i=Hr(t,e,n,s);return i&&Xp(i)&&i.catch(r=>{xa(r,e,n)}),i}if(J(t)){const i=[];for(let r=0;r<t.length;r++)i.push(jt(t[r],e,n,s));return i}}function xa(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Re;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,l,c)===!1)return}a=a.parent}if(r){ms(),Hr(r,null,10,[t,l,c]),gs();return}}Zy(t,n,i,s,o)}function Zy(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const ot=[];let Jt=-1;const ci=[];let zn=null,ei=0;const Em=Promise.resolve();let Po=null;function zs(t){const e=Po||Em;return t?e.then(this?t.bind(this):t):e}function eb(t){let e=Jt+1,n=ot.length;for(;e<n;){const s=e+n>>>1,i=ot[s],r=vr(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function du(t){if(!(t.flags&1)){const e=vr(t),n=ot[ot.length-1];!n||!(t.flags&2)&&e>=vr(n)?ot.push(t):ot.splice(eb(e),0,t),t.flags|=1,Sm()}}function Sm(){Po||(Po=Em.then(km))}function tb(t){J(t)?ci.push(...t):zn&&t.id===-1?zn.splice(ei+1,0,t):t.flags&1||(ci.push(t),t.flags|=1),Sm()}function id(t,e,n=Jt+1){for(;n<ot.length;n++){const s=ot[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;ot.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Tm(t){if(ci.length){const e=[...new Set(ci)].sort((n,s)=>vr(n)-vr(s));if(ci.length=0,zn){zn.push(...e);return}for(zn=e,ei=0;ei<zn.length;ei++){const n=zn[ei];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}zn=null,ei=0}}const vr=t=>t.id==null?t.flags&2?-1:1/0:t.id;function km(t){try{for(Jt=0;Jt<ot.length;Jt++){const e=ot[Jt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Hr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Jt<ot.length;Jt++){const e=ot[Jt];e&&(e.flags&=-2)}Jt=-1,ot.length=0,Tm(),Po=null,(ot.length||ci.length)&&km()}}let at=null,Am=null;function No(t){const e=at;return at=t,Am=t&&t.type.__scopeId||null,e}function Le(t,e=at,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&md(-1);const r=No(e);let o;try{o=t(...i)}finally{No(r),s._d&&md(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Ae(t,e){if(at===null)return t;const n=Ta(at),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,a,l=Re]=e[i];r&&(oe(r)&&(r={mounted:r,updated:r}),r.deep&&gn(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function xs(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(ms(),jt(l,n,8,[t.el,a,t,e]),gs())}}const nb=Symbol("_vte"),Rm=t=>t.__isTeleport,Gn=Symbol("_leaveCb"),co=Symbol("_enterCb");function Pm(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Nt(()=>{t.isMounted=!0}),$m(()=>{t.isUnmounting=!0}),t}const Et=[Function,Array],Nm={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Et,onEnter:Et,onAfterEnter:Et,onEnterCancelled:Et,onBeforeLeave:Et,onLeave:Et,onAfterLeave:Et,onLeaveCancelled:Et,onBeforeAppear:Et,onAppear:Et,onAfterAppear:Et,onAppearCancelled:Et},Om=t=>{const e=t.subTree;return e.component?Om(e.component):e},sb={name:"BaseTransition",props:Nm,setup(t,{slots:e}){const n=rg(),s=Pm();return()=>{const i=e.default&&hu(e.default(),!0);if(!i||!i.length)return;const r=Mm(i),o=_e(t),{mode:a}=o;if(s.isLeaving)return rl(r);const l=rd(r);if(!l)return rl(r);let c=yr(l,o,s,n,f=>c=f);l.type!==pt&&Us(l,c);let u=n.subTree&&rd(n.subTree);if(u&&u.type!==pt&&!Ts(l,u)&&Om(n).type!==pt){let f=yr(u,o,s,n);if(Us(u,f),a==="out-in"&&l.type!==pt)return s.isLeaving=!0,f.afterLeave=()=>{s.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave,u=void 0},rl(r);a==="in-out"&&l.type!==pt?f.delayLeave=(d,h,y)=>{const _=Dm(s,u);_[String(u.key)]=u,d[Gn]=()=>{h(),d[Gn]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{y(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function Mm(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==pt){e=n;break}}return e}const ib=sb;function Dm(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function yr(t,e,n,s,i){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:d,onLeave:h,onAfterLeave:y,onLeaveCancelled:_,onBeforeAppear:w,onAppear:m,onAfterAppear:b,onAppearCancelled:R}=e,O=String(t.key),G=Dm(n,t),q=(P,j)=>{P&&jt(P,s,9,j)},S=(P,j)=>{const ie=j[1];q(P,j),J(P)?P.every(U=>U.length<=1)&&ie():P.length<=1&&ie()},L={mode:o,persisted:a,beforeEnter(P){let j=l;if(!n.isMounted)if(r)j=w||l;else return;P[Gn]&&P[Gn](!0);const ie=G[O];ie&&Ts(t,ie)&&ie.el[Gn]&&ie.el[Gn](),q(j,[P])},enter(P){let j=c,ie=u,U=f;if(!n.isMounted)if(r)j=m||c,ie=b||u,U=R||f;else return;let ce=!1;const be=P[co]=st=>{ce||(ce=!0,st?q(U,[P]):q(ie,[P]),L.delayedLeave&&L.delayedLeave(),P[co]=void 0)};j?S(j,[P,be]):be()},leave(P,j){const ie=String(t.key);if(P[co]&&P[co](!0),n.isUnmounting)return j();q(d,[P]);let U=!1;const ce=P[Gn]=be=>{U||(U=!0,j(),be?q(_,[P]):q(y,[P]),P[Gn]=void 0,G[ie]===t&&delete G[ie])};G[ie]=t,h?S(h,[P,ce]):ce()},clone(P){const j=yr(P,e,n,s,i);return i&&i(j),j}};return L}function rl(t){if(wa(t))return t=cs(t),t.children=null,t}function rd(t){if(!wa(t))return Rm(t.type)&&t.children?Mm(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&oe(n.default))return n.default()}}function Us(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Us(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function hu(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===le?(o.patchFlag&128&&i++,s=s.concat(hu(o.children,e,a))):(e||o.type!==pt)&&s.push(a!=null?cs(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}/*! #__NO_SIDE_EFFECTS__ */function pu(t,e){return oe(t)?Ke({name:t.name},e,{setup:t}):t}function Lm(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Oo(t,e,n,s,i=!1){if(J(t)){t.forEach((y,_)=>Oo(y,e&&(J(e)?e[_]:e),n,s,i));return}if(nr(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Oo(t,e,n,s.component.subTree);return}const r=s.shapeFlag&4?Ta(s.component):s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Re?a.refs={}:a.refs,f=a.setupState,d=_e(f),h=f===Re?()=>!1:y=>Ce(d,y);if(c!=null&&c!==l&&(je(c)?(u[c]=null,h(c)&&(f[c]=null)):Be(c)&&(c.value=null)),oe(l))Hr(l,a,12,[o,u]);else{const y=je(l),_=Be(l);if(y||_){const w=()=>{if(t.f){const m=y?h(l)?f[l]:u[l]:l.value;i?J(m)&&tu(m,r):J(m)?m.includes(r)||m.push(r):y?(u[l]=[r],h(l)&&(f[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else y?(u[l]=o,h(l)&&(f[l]=o)):_&&(l.value=o,t.k&&(u[t.k]=o))};o?(w.id=-1,vt(w,n)):w()}}}va().requestIdleCallback;va().cancelIdleCallback;const nr=t=>!!t.type.__asyncLoader,wa=t=>t.type.__isKeepAlive;function rb(t,e){Fm(t,"a",e)}function ob(t,e){Fm(t,"da",e)}function Fm(t,e,n=Xe){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Ca(e,s,n),n){let i=n.parent;for(;i&&i.parent;)wa(i.parent.vnode)&&ab(s,e,n,i),i=i.parent}}function ab(t,e,n,s){const i=Ca(e,t,s,!0);Ia(()=>{tu(s[e],i)},n)}function Ca(t,e,n=Xe,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{ms();const a=Wr(n),l=jt(e,n,t,o);return a(),gs(),l});return s?i.unshift(r):i.push(r),r}}const Nn=t=>(e,n=Xe)=>{(!xr||t==="sp")&&Ca(t,(...s)=>e(...s),n)},lb=Nn("bm"),Nt=Nn("m"),cb=Nn("bu"),mu=Nn("u"),$m=Nn("bum"),Ia=Nn("um"),ub=Nn("sp"),fb=Nn("rtg"),db=Nn("rtc");function hb(t,e=Xe){Ca("ec",t,e)}const pb="components";function an(t,e){return gb(pb,t,!0,e)||t}const mb=Symbol.for("v-ndc");function gb(t,e,n=!0,s=!1){const i=at||Xe;if(i){const r=i.type;{const a=sx(r,!1);if(a&&(a===e||a===Rt(e)||a===_a(Rt(e))))return r}const o=od(i[t]||r[t],e)||od(i.appContext[t],e);return!o&&s?r:o}}function od(t,e){return t&&(t[e]||t[Rt(e)]||t[_a(Rt(e))])}function He(t,e,n,s){let i;const r=n,o=J(t);if(o||je(t)){const a=o&&es(t);let l=!1;a&&(l=!Tt(t),t=ba(t)),i=new Array(t.length);for(let c=0,u=t.length;c<u;c++)i[c]=e(l?tt(t[c]):t[c],c,void 0,r)}else if(typeof t=="number"){i=new Array(t);for(let a=0;a<t;a++)i[a]=e(a+1,a,void 0,r)}else if(Pe(t))if(t[Symbol.iterator])i=Array.from(t,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(t);i=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];i[l]=e(t[u],u,l,r)}}else i=[];return i}const ic=t=>t?og(t)?Ta(t):ic(t.parent):null,sr=Ke(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ic(t.parent),$root:t=>ic(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Vm(t),$forceUpdate:t=>t.f||(t.f=()=>{du(t.update)}),$nextTick:t=>t.n||(t.n=zs.bind(t.proxy)),$watch:t=>$b.bind(t)}),ol=(t,e)=>t!==Re&&!t.__isScriptSetup&&Ce(t,e),_b={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(ol(s,e))return o[e]=1,s[e];if(i!==Re&&Ce(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&Ce(c,e))return o[e]=3,r[e];if(n!==Re&&Ce(n,e))return o[e]=4,n[e];rc&&(o[e]=0)}}const u=sr[e];let f,d;if(u)return e==="$attrs"&&et(t.attrs,"get",""),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==Re&&Ce(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,Ce(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return ol(i,e)?(i[e]=n,!0):s!==Re&&Ce(s,e)?(s[e]=n,!0):Ce(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==Re&&Ce(t,o)||ol(e,o)||(a=r[0])&&Ce(a,o)||Ce(s,o)||Ce(sr,o)||Ce(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ce(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ad(t){return J(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let rc=!0;function vb(t){const e=Vm(t),n=t.proxy,s=t.ctx;rc=!1,e.beforeCreate&&ld(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:h,updated:y,activated:_,deactivated:w,beforeDestroy:m,beforeUnmount:b,destroyed:R,unmounted:O,render:G,renderTracked:q,renderTriggered:S,errorCaptured:L,serverPrefetch:P,expose:j,inheritAttrs:ie,components:U,directives:ce,filters:be}=e;if(c&&yb(c,s,null),o)for(const ue in o){const xe=o[ue];oe(xe)&&(s[ue]=xe.bind(n))}if(i){const ue=i.call(n,n);Pe(ue)&&(t.data=jr(ue))}if(rc=!0,r)for(const ue in r){const xe=r[ue],fn=oe(xe)?xe.bind(n,n):oe(xe.get)?xe.get.bind(n,n):sn,Fn=!oe(xe)&&oe(xe.set)?xe.set.bind(n):sn,Gt=ne({get:fn,set:Fn});Object.defineProperty(s,ue,{enumerable:!0,configurable:!0,get:()=>Gt.value,set:ft=>Gt.value=ft})}if(a)for(const ue in a)Um(a[ue],s,n,ue);if(l){const ue=oe(l)?l.call(n):l;Reflect.ownKeys(ue).forEach(xe=>{vo(xe,ue[xe])})}u&&ld(u,t,"c");function Te(ue,xe){J(xe)?xe.forEach(fn=>ue(fn.bind(n))):xe&&ue(xe.bind(n))}if(Te(lb,f),Te(Nt,d),Te(cb,h),Te(mu,y),Te(rb,_),Te(ob,w),Te(hb,L),Te(db,q),Te(fb,S),Te($m,b),Te(Ia,O),Te(ub,P),J(j))if(j.length){const ue=t.exposed||(t.exposed={});j.forEach(xe=>{Object.defineProperty(ue,xe,{get:()=>n[xe],set:fn=>n[xe]=fn})})}else t.exposed||(t.exposed={});G&&t.render===sn&&(t.render=G),ie!=null&&(t.inheritAttrs=ie),U&&(t.components=U),ce&&(t.directives=ce),P&&Lm(t)}function yb(t,e,n=sn){J(t)&&(t=oc(t));for(const s in t){const i=t[s];let r;Pe(i)?"default"in i?r=kt(i.from||s,i.default,!0):r=kt(i.from||s):r=kt(i),Be(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function ld(t,e,n){jt(J(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Um(t,e,n,s){let i=s.includes(".")?eg(n,s):()=>n[s];if(je(t)){const r=e[t];oe(r)&&Os(i,r)}else if(oe(t))Os(i,t.bind(n));else if(Pe(t))if(J(t))t.forEach(r=>Um(r,e,n,s));else{const r=oe(t.handler)?t.handler.bind(n):e[t.handler];oe(r)&&Os(i,r,t)}}function Vm(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>Mo(l,c,o,!0)),Mo(l,e,o)),Pe(e)&&r.set(e,l),l}function Mo(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Mo(t,r,n,!0),i&&i.forEach(o=>Mo(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=bb[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const bb={data:cd,props:ud,emits:ud,methods:Qi,computed:Qi,beforeCreate:it,created:it,beforeMount:it,mounted:it,beforeUpdate:it,updated:it,beforeDestroy:it,beforeUnmount:it,destroyed:it,unmounted:it,activated:it,deactivated:it,errorCaptured:it,serverPrefetch:it,components:Qi,directives:Qi,watch:wb,provide:cd,inject:xb};function cd(t,e){return e?t?function(){return Ke(oe(t)?t.call(this,this):t,oe(e)?e.call(this,this):e)}:e:t}function xb(t,e){return Qi(oc(t),oc(e))}function oc(t){if(J(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function it(t,e){return t?[...new Set([].concat(t,e))]:e}function Qi(t,e){return t?Ke(Object.create(null),t,e):e}function ud(t,e){return t?J(t)&&J(e)?[...new Set([...t,...e])]:Ke(Object.create(null),ad(t),ad(e??{})):e}function wb(t,e){if(!t)return e;if(!e)return t;const n=Ke(Object.create(null),t);for(const s in e)n[s]=it(t[s],e[s]);return n}function Bm(){return{app:null,config:{isNativeTag:uy,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Cb=0;function Ib(t,e){return function(s,i=null){oe(s)||(s=Ke({},s)),i!=null&&!Pe(i)&&(i=null);const r=Bm(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Cb++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:rx,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&oe(u.install)?(o.add(u),u.install(c,...f)):oe(u)&&(o.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,d){if(!l){const h=c._ceVNode||$(s,i);return h.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),t(h,u,d),l=!0,c._container=u,u.__vue_app__=c,Ta(h.component)}},onUnmount(u){a.push(u)},unmount(){l&&(jt(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=Ns;Ns=c;try{return u()}finally{Ns=f}}};return c}}let Ns=null;function vo(t,e){if(Xe){let n=Xe.provides;const s=Xe.parent&&Xe.parent.provides;s===n&&(n=Xe.provides=Object.create(s)),n[t]=e}}function kt(t,e,n=!1){const s=Xe||at;if(s||Ns){const i=Ns?Ns._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&oe(e)?e.call(s&&s.proxy):e}}function Eb(){return!!(Xe||at||Ns)}const jm={},Hm=()=>Object.create(jm),Wm=t=>Object.getPrototypeOf(t)===jm;function Sb(t,e,n,s=!1){const i={},r=Hm();t.propsDefaults=Object.create(null),zm(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:xm(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Tb(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=_e(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Ea(t.emitsOptions,d))continue;const h=e[d];if(l)if(Ce(r,d))h!==r[d]&&(r[d]=h,c=!0);else{const y=Rt(d);i[y]=ac(l,a,y,h,t,!1)}else h!==r[d]&&(r[d]=h,c=!0)}}}else{zm(t,e,i,r)&&(c=!0);let u;for(const f in a)(!e||!Ce(e,f)&&((u=ps(f))===f||!Ce(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(i[f]=ac(l,a,f,void 0,t,!0)):delete i[f]);if(r!==a)for(const f in r)(!e||!Ce(e,f))&&(delete r[f],c=!0)}c&&mn(t.attrs,"set","")}function zm(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Zi(l))continue;const c=e[l];let u;i&&Ce(i,u=Rt(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Ea(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=_e(n),c=a||Re;for(let u=0;u<r.length;u++){const f=r[u];n[f]=ac(i,l,f,c[f],t,!Ce(c,f))}}return o}function ac(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=Ce(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&oe(l)){const{propsDefaults:c}=i;if(n in c)s=c[n];else{const u=Wr(i);s=c[n]=l.call(null,e),u()}}else s=l;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===ps(n))&&(s=!0))}return s}const kb=new WeakMap;function Gm(t,e,n=!1){const s=n?kb:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!oe(t)){const u=f=>{l=!0;const[d,h]=Gm(f,e,!0);Ke(o,d),h&&a.push(...h)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return Pe(t)&&s.set(t,ai),ai;if(J(r))for(let u=0;u<r.length;u++){const f=Rt(r[u]);fd(f)&&(o[f]=Re)}else if(r)for(const u in r){const f=Rt(u);if(fd(f)){const d=r[u],h=o[f]=J(d)||oe(d)?{type:d}:Ke({},d),y=h.type;let _=!1,w=!0;if(J(y))for(let m=0;m<y.length;++m){const b=y[m],R=oe(b)&&b.name;if(R==="Boolean"){_=!0;break}else R==="String"&&(w=!1)}else _=oe(y)&&y.name==="Boolean";h[0]=_,h[1]=w,(_||Ce(h,"default"))&&a.push(f)}}const c=[o,a];return Pe(t)&&s.set(t,c),c}function fd(t){return t[0]!=="$"&&!Zi(t)}const Km=t=>t[0]==="_"||t==="$stable",gu=t=>J(t)?t.map(Zt):[Zt(t)],Ab=(t,e,n)=>{if(e._n)return e;const s=Le((...i)=>gu(e(...i)),n);return s._c=!1,s},qm=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Km(i))continue;const r=t[i];if(oe(r))e[i]=Ab(i,r,s);else if(r!=null){const o=gu(r);e[i]=()=>o}}},Ym=(t,e)=>{const n=gu(e);t.slots.default=()=>n},Qm=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},Rb=(t,e,n)=>{const s=t.slots=Hm();if(t.vnode.shapeFlag&32){const i=e._;i?(Qm(s,e,n),n&&em(s,"_",i,!0)):qm(e,s)}else e&&Ym(t,e)},Pb=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Re;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:Qm(i,e,n):(r=!e.$stable,qm(e,i)),o=e}else e&&(Ym(t,e),o={default:1});if(r)for(const a in i)!Km(a)&&o[a]==null&&delete i[a]},vt=zb;function Nb(t){return Ob(t)}function Ob(t,e){const n=va();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:h=sn,insertStaticContent:y}=t,_=(g,v,x,T=null,N=null,A=null,H=void 0,B=null,V=!!v.dynamicChildren)=>{if(g===v)return;g&&!Ts(g,v)&&(T=k(g),ft(g,N,A,!0),g=null),v.patchFlag===-2&&(V=!1,v.dynamicChildren=null);const{type:D,ref:ee,shapeFlag:z}=v;switch(D){case Sa:w(g,v,x,T);break;case pt:m(g,v,x,T);break;case ll:g==null&&b(v,x,T,H);break;case le:U(g,v,x,T,N,A,H,B,V);break;default:z&1?G(g,v,x,T,N,A,H,B,V):z&6?ce(g,v,x,T,N,A,H,B,V):(z&64||z&128)&&D.process(g,v,x,T,N,A,H,B,V,Q)}ee!=null&&N&&Oo(ee,g&&g.ref,A,v||g,!v)},w=(g,v,x,T)=>{if(g==null)s(v.el=a(v.children),x,T);else{const N=v.el=g.el;v.children!==g.children&&c(N,v.children)}},m=(g,v,x,T)=>{g==null?s(v.el=l(v.children||""),x,T):v.el=g.el},b=(g,v,x,T)=>{[g.el,g.anchor]=y(g.children,v,x,T,g.el,g.anchor)},R=({el:g,anchor:v},x,T)=>{let N;for(;g&&g!==v;)N=d(g),s(g,x,T),g=N;s(v,x,T)},O=({el:g,anchor:v})=>{let x;for(;g&&g!==v;)x=d(g),i(g),g=x;i(v)},G=(g,v,x,T,N,A,H,B,V)=>{v.type==="svg"?H="svg":v.type==="math"&&(H="mathml"),g==null?q(v,x,T,N,A,H,B,V):P(g,v,N,A,H,B,V)},q=(g,v,x,T,N,A,H,B)=>{let V,D;const{props:ee,shapeFlag:z,transition:Z,dirs:re}=g;if(V=g.el=o(g.type,A,ee&&ee.is,ee),z&8?u(V,g.children):z&16&&L(g.children,V,null,T,N,al(g,A),H,B),re&&xs(g,null,T,"created"),S(V,g,g.scopeId,H,T),ee){for(const Ne in ee)Ne!=="value"&&!Zi(Ne)&&r(V,Ne,null,ee[Ne],A,T);"value"in ee&&r(V,"value",null,ee.value,A),(D=ee.onVnodeBeforeMount)&&Qt(D,T,g)}re&&xs(g,null,T,"beforeMount");const ge=Mb(N,Z);ge&&Z.beforeEnter(V),s(V,v,x),((D=ee&&ee.onVnodeMounted)||ge||re)&&vt(()=>{D&&Qt(D,T,g),ge&&Z.enter(V),re&&xs(g,null,T,"mounted")},N)},S=(g,v,x,T,N)=>{if(x&&h(g,x),T)for(let A=0;A<T.length;A++)h(g,T[A]);if(N){let A=N.subTree;if(v===A||ng(A.type)&&(A.ssContent===v||A.ssFallback===v)){const H=N.vnode;S(g,H,H.scopeId,H.slotScopeIds,N.parent)}}},L=(g,v,x,T,N,A,H,B,V=0)=>{for(let D=V;D<g.length;D++){const ee=g[D]=B?Kn(g[D]):Zt(g[D]);_(null,ee,v,x,T,N,A,H,B)}},P=(g,v,x,T,N,A,H)=>{const B=v.el=g.el;let{patchFlag:V,dynamicChildren:D,dirs:ee}=v;V|=g.patchFlag&16;const z=g.props||Re,Z=v.props||Re;let re;if(x&&ws(x,!1),(re=Z.onVnodeBeforeUpdate)&&Qt(re,x,v,g),ee&&xs(v,g,x,"beforeUpdate"),x&&ws(x,!0),(z.innerHTML&&Z.innerHTML==null||z.textContent&&Z.textContent==null)&&u(B,""),D?j(g.dynamicChildren,D,B,x,T,al(v,N),A):H||xe(g,v,B,null,x,T,al(v,N),A,!1),V>0){if(V&16)ie(B,z,Z,x,N);else if(V&2&&z.class!==Z.class&&r(B,"class",null,Z.class,N),V&4&&r(B,"style",z.style,Z.style,N),V&8){const ge=v.dynamicProps;for(let Ne=0;Ne<ge.length;Ne++){const Ie=ge[Ne],gt=z[Ie],dt=Z[Ie];(dt!==gt||Ie==="value")&&r(B,Ie,gt,dt,N,x)}}V&1&&g.children!==v.children&&u(B,v.children)}else!H&&D==null&&ie(B,z,Z,x,N);((re=Z.onVnodeUpdated)||ee)&&vt(()=>{re&&Qt(re,x,v,g),ee&&xs(v,g,x,"updated")},T)},j=(g,v,x,T,N,A,H)=>{for(let B=0;B<v.length;B++){const V=g[B],D=v[B],ee=V.el&&(V.type===le||!Ts(V,D)||V.shapeFlag&70)?f(V.el):x;_(V,D,ee,null,T,N,A,H,!0)}},ie=(g,v,x,T,N)=>{if(v!==x){if(v!==Re)for(const A in v)!Zi(A)&&!(A in x)&&r(g,A,v[A],null,N,T);for(const A in x){if(Zi(A))continue;const H=x[A],B=v[A];H!==B&&A!=="value"&&r(g,A,B,H,N,T)}"value"in x&&r(g,"value",v.value,x.value,N)}},U=(g,v,x,T,N,A,H,B,V)=>{const D=v.el=g?g.el:a(""),ee=v.anchor=g?g.anchor:a("");let{patchFlag:z,dynamicChildren:Z,slotScopeIds:re}=v;re&&(B=B?B.concat(re):re),g==null?(s(D,x,T),s(ee,x,T),L(v.children||[],x,ee,N,A,H,B,V)):z>0&&z&64&&Z&&g.dynamicChildren?(j(g.dynamicChildren,Z,x,N,A,H,B),(v.key!=null||N&&v===N.subTree)&&Xm(g,v,!0)):xe(g,v,x,ee,N,A,H,B,V)},ce=(g,v,x,T,N,A,H,B,V)=>{v.slotScopeIds=B,g==null?v.shapeFlag&512?N.ctx.activate(v,x,T,H,V):be(v,x,T,N,A,H,V):st(g,v,V)},be=(g,v,x,T,N,A,H)=>{const B=g.component=Jb(g,T,N);if(wa(g)&&(B.ctx.renderer=Q),Zb(B,!1,H),B.asyncDep){if(N&&N.registerDep(B,Te,H),!g.el){const V=B.subTree=$(pt);m(null,V,v,x)}}else Te(B,g,v,x,N,A,H)},st=(g,v,x)=>{const T=v.component=g.component;if(Hb(g,v,x))if(T.asyncDep&&!T.asyncResolved){ue(T,v,x);return}else T.next=v,T.update();else v.el=g.el,T.vnode=v},Te=(g,v,x,T,N,A,H)=>{const B=()=>{if(g.isMounted){let{next:z,bu:Z,u:re,parent:ge,vnode:Ne}=g;{const qt=Jm(g);if(qt){z&&(z.el=Ne.el,ue(g,z,H)),qt.asyncDep.then(()=>{g.isUnmounted||B()});return}}let Ie=z,gt;ws(g,!1),z?(z.el=Ne.el,ue(g,z,H)):z=Ne,Z&&_o(Z),(gt=z.props&&z.props.onVnodeBeforeUpdate)&&Qt(gt,ge,z,Ne),ws(g,!0);const dt=hd(g),Kt=g.subTree;g.subTree=dt,_(Kt,dt,f(Kt.el),k(Kt),g,N,A),z.el=dt.el,Ie===null&&Wb(g,dt.el),re&&vt(re,N),(gt=z.props&&z.props.onVnodeUpdated)&&vt(()=>Qt(gt,ge,z,Ne),N)}else{let z;const{el:Z,props:re}=v,{bm:ge,m:Ne,parent:Ie,root:gt,type:dt}=g,Kt=nr(v);ws(g,!1),ge&&_o(ge),!Kt&&(z=re&&re.onVnodeBeforeMount)&&Qt(z,Ie,v),ws(g,!0);{gt.ce&&gt.ce._injectChildStyle(dt);const qt=g.subTree=hd(g);_(null,qt,x,T,g,N,A),v.el=qt.el}if(Ne&&vt(Ne,N),!Kt&&(z=re&&re.onVnodeMounted)){const qt=v;vt(()=>Qt(z,Ie,qt),N)}(v.shapeFlag&256||Ie&&nr(Ie.vnode)&&Ie.vnode.shapeFlag&256)&&g.a&&vt(g.a,N),g.isMounted=!0,v=x=T=null}};g.scope.on();const V=g.effect=new am(B);g.scope.off();const D=g.update=V.run.bind(V),ee=g.job=V.runIfDirty.bind(V);ee.i=g,ee.id=g.uid,V.scheduler=()=>du(ee),ws(g,!0),D()},ue=(g,v,x)=>{v.component=g;const T=g.vnode.props;g.vnode=v,g.next=null,Tb(g,v.props,T,x),Pb(g,v.children,x),ms(),id(g),gs()},xe=(g,v,x,T,N,A,H,B,V=!1)=>{const D=g&&g.children,ee=g?g.shapeFlag:0,z=v.children,{patchFlag:Z,shapeFlag:re}=v;if(Z>0){if(Z&128){Fn(D,z,x,T,N,A,H,B,V);return}else if(Z&256){fn(D,z,x,T,N,A,H,B,V);return}}re&8?(ee&16&&It(D,N,A),z!==D&&u(x,z)):ee&16?re&16?Fn(D,z,x,T,N,A,H,B,V):It(D,N,A,!0):(ee&8&&u(x,""),re&16&&L(z,x,T,N,A,H,B,V))},fn=(g,v,x,T,N,A,H,B,V)=>{g=g||ai,v=v||ai;const D=g.length,ee=v.length,z=Math.min(D,ee);let Z;for(Z=0;Z<z;Z++){const re=v[Z]=V?Kn(v[Z]):Zt(v[Z]);_(g[Z],re,x,null,N,A,H,B,V)}D>ee?It(g,N,A,!0,!1,z):L(v,x,T,N,A,H,B,V,z)},Fn=(g,v,x,T,N,A,H,B,V)=>{let D=0;const ee=v.length;let z=g.length-1,Z=ee-1;for(;D<=z&&D<=Z;){const re=g[D],ge=v[D]=V?Kn(v[D]):Zt(v[D]);if(Ts(re,ge))_(re,ge,x,null,N,A,H,B,V);else break;D++}for(;D<=z&&D<=Z;){const re=g[z],ge=v[Z]=V?Kn(v[Z]):Zt(v[Z]);if(Ts(re,ge))_(re,ge,x,null,N,A,H,B,V);else break;z--,Z--}if(D>z){if(D<=Z){const re=Z+1,ge=re<ee?v[re].el:T;for(;D<=Z;)_(null,v[D]=V?Kn(v[D]):Zt(v[D]),x,ge,N,A,H,B,V),D++}}else if(D>Z)for(;D<=z;)ft(g[D],N,A,!0),D++;else{const re=D,ge=D,Ne=new Map;for(D=ge;D<=Z;D++){const _t=v[D]=V?Kn(v[D]):Zt(v[D]);_t.key!=null&&Ne.set(_t.key,D)}let Ie,gt=0;const dt=Z-ge+1;let Kt=!1,qt=0;const Vi=new Array(dt);for(D=0;D<dt;D++)Vi[D]=0;for(D=re;D<=z;D++){const _t=g[D];if(gt>=dt){ft(_t,N,A,!0);continue}let Yt;if(_t.key!=null)Yt=Ne.get(_t.key);else for(Ie=ge;Ie<=Z;Ie++)if(Vi[Ie-ge]===0&&Ts(_t,v[Ie])){Yt=Ie;break}Yt===void 0?ft(_t,N,A,!0):(Vi[Yt-ge]=D+1,Yt>=qt?qt=Yt:Kt=!0,_(_t,v[Yt],x,null,N,A,H,B,V),gt++)}const Ef=Kt?Db(Vi):ai;for(Ie=Ef.length-1,D=dt-1;D>=0;D--){const _t=ge+D,Yt=v[_t],Sf=_t+1<ee?v[_t+1].el:T;Vi[D]===0?_(null,Yt,x,Sf,N,A,H,B,V):Kt&&(Ie<0||D!==Ef[Ie]?Gt(Yt,x,Sf,2):Ie--)}}},Gt=(g,v,x,T,N=null)=>{const{el:A,type:H,transition:B,children:V,shapeFlag:D}=g;if(D&6){Gt(g.component.subTree,v,x,T);return}if(D&128){g.suspense.move(v,x,T);return}if(D&64){H.move(g,v,x,Q);return}if(H===le){s(A,v,x);for(let z=0;z<V.length;z++)Gt(V[z],v,x,T);s(g.anchor,v,x);return}if(H===ll){R(g,v,x);return}if(T!==2&&D&1&&B)if(T===0)B.beforeEnter(A),s(A,v,x),vt(()=>B.enter(A),N);else{const{leave:z,delayLeave:Z,afterLeave:re}=B,ge=()=>s(A,v,x),Ne=()=>{z(A,()=>{ge(),re&&re()})};Z?Z(A,ge,Ne):Ne()}else s(A,v,x)},ft=(g,v,x,T=!1,N=!1)=>{const{type:A,props:H,ref:B,children:V,dynamicChildren:D,shapeFlag:ee,patchFlag:z,dirs:Z,cacheIndex:re}=g;if(z===-2&&(N=!1),B!=null&&Oo(B,null,x,g,!0),re!=null&&(v.renderCache[re]=void 0),ee&256){v.ctx.deactivate(g);return}const ge=ee&1&&Z,Ne=!nr(g);let Ie;if(Ne&&(Ie=H&&H.onVnodeBeforeUnmount)&&Qt(Ie,v,g),ee&6)so(g.component,x,T);else{if(ee&128){g.suspense.unmount(x,T);return}ge&&xs(g,null,v,"beforeUnmount"),ee&64?g.type.remove(g,v,x,Q,T):D&&!D.hasOnce&&(A!==le||z>0&&z&64)?It(D,v,x,!1,!0):(A===le&&z&384||!N&&ee&16)&&It(V,v,x),T&&qs(g)}(Ne&&(Ie=H&&H.onVnodeUnmounted)||ge)&&vt(()=>{Ie&&Qt(Ie,v,g),ge&&xs(g,null,v,"unmounted")},x)},qs=g=>{const{type:v,el:x,anchor:T,transition:N}=g;if(v===le){Ys(x,T);return}if(v===ll){O(g);return}const A=()=>{i(x),N&&!N.persisted&&N.afterLeave&&N.afterLeave()};if(g.shapeFlag&1&&N&&!N.persisted){const{leave:H,delayLeave:B}=N,V=()=>H(x,A);B?B(g.el,A,V):V()}else A()},Ys=(g,v)=>{let x;for(;g!==v;)x=d(g),i(g),g=x;i(v)},so=(g,v,x)=>{const{bum:T,scope:N,job:A,subTree:H,um:B,m:V,a:D}=g;dd(V),dd(D),T&&_o(T),N.stop(),A&&(A.flags|=8,ft(H,g,v,x)),B&&vt(B,v),vt(()=>{g.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},It=(g,v,x,T=!1,N=!1,A=0)=>{for(let H=A;H<g.length;H++)ft(g[H],v,x,T,N)},k=g=>{if(g.shapeFlag&6)return k(g.component.subTree);if(g.shapeFlag&128)return g.suspense.next();const v=d(g.anchor||g.el),x=v&&v[nb];return x?d(x):v};let K=!1;const W=(g,v,x)=>{g==null?v._vnode&&ft(v._vnode,null,null,!0):_(v._vnode||null,g,v,null,null,null,x),v._vnode=g,K||(K=!0,id(),Tm(),K=!1)},Q={p:_,um:ft,m:Gt,r:qs,mt:be,mc:L,pc:xe,pbc:j,n:k,o:t};return{render:W,hydrate:void 0,createApp:Ib(W)}}function al({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function ws({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Mb(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Xm(t,e,n=!1){const s=t.children,i=e.children;if(J(s)&&J(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Kn(i[r]),a.el=o.el),!n&&a.patchFlag!==-2&&Xm(o,a)),a.type===Sa&&(a.el=o.el)}}function Db(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Jm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Jm(e)}function dd(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Lb=Symbol.for("v-scx"),Fb=()=>kt(Lb);function Os(t,e,n){return Zm(t,e,n)}function Zm(t,e,n=Re){const{immediate:s,deep:i,flush:r,once:o}=n,a=Ke({},n),l=e&&s||!e&&r!=="post";let c;if(xr){if(r==="sync"){const h=Fb();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=sn,h.resume=sn,h.pause=sn,h}}const u=Xe;a.call=(h,y,_)=>jt(h,u,y,_);let f=!1;r==="post"?a.scheduler=h=>{vt(h,u&&u.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(h,y)=>{y?h():du(h)}),a.augmentJob=h=>{e&&(h.flags|=4),f&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const d=Jy(t,e,a);return xr&&(c?c.push(d):l&&d()),d}function $b(t,e,n){const s=this.proxy,i=je(t)?t.includes(".")?eg(s,t):()=>s[t]:t.bind(s,s);let r;oe(e)?r=e:(r=e.handler,n=e);const o=Wr(this),a=Zm(i,r.bind(s),n);return o(),a}function eg(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const Ub=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Rt(e)}Modifiers`]||t[`${ps(e)}Modifiers`];function Vb(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Re;let i=n;const r=e.startsWith("update:"),o=r&&Ub(s,e.slice(7));o&&(o.trim&&(i=n.map(u=>je(u)?u.trim():u)),o.number&&(i=n.map(ko)));let a,l=s[a=el(e)]||s[a=el(Rt(e))];!l&&r&&(l=s[a=el(ps(e))]),l&&jt(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,jt(c,t,6,i)}}function tg(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!oe(t)){const l=c=>{const u=tg(c,e,!0);u&&(a=!0,Ke(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(Pe(t)&&s.set(t,null),null):(J(r)?r.forEach(l=>o[l]=null):Ke(o,r),Pe(t)&&s.set(t,o),o)}function Ea(t,e){return!t||!ma(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ce(t,e[0].toLowerCase()+e.slice(1))||Ce(t,ps(e))||Ce(t,e))}function hd(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:h,ctx:y,inheritAttrs:_}=t,w=No(t);let m,b;try{if(n.shapeFlag&4){const O=i||s,G=O;m=Zt(c.call(G,O,u,f,h,d,y)),b=a}else{const O=e;m=Zt(O.length>1?O(f,{attrs:a,slots:o,emit:l}):O(f,null)),b=e.props?a:Bb(a)}}catch(O){ir.length=0,xa(O,t,1),m=$(pt)}let R=m;if(b&&_!==!1){const O=Object.keys(b),{shapeFlag:G}=R;O.length&&G&7&&(r&&O.some(eu)&&(b=jb(b,r)),R=cs(R,b,!1,!0))}return n.dirs&&(R=cs(R,null,!1,!0),R.dirs=R.dirs?R.dirs.concat(n.dirs):n.dirs),n.transition&&Us(R,n.transition),m=R,No(w),m}const Bb=t=>{let e;for(const n in t)(n==="class"||n==="style"||ma(n))&&((e||(e={}))[n]=t[n]);return e},jb=(t,e)=>{const n={};for(const s in t)(!eu(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Hb(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?pd(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==s[d]&&!Ea(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?pd(s,o,c):!0:!!o;return!1}function pd(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Ea(n,r))return!0}return!1}function Wb({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const ng=t=>t.__isSuspense;function zb(t,e){e&&e.pendingBranch?J(t)?e.effects.push(...t):e.effects.push(t):tb(t)}const le=Symbol.for("v-fgt"),Sa=Symbol.for("v-txt"),pt=Symbol.for("v-cmt"),ll=Symbol.for("v-stc"),ir=[];let xt=null;function C(t=!1){ir.push(xt=t?null:[])}function Gb(){ir.pop(),xt=ir[ir.length-1]||null}let br=1;function md(t,e=!1){br+=t,t<0&&xt&&e&&(xt.hasOnce=!0)}function sg(t){return t.dynamicChildren=br>0?xt||ai:null,Gb(),br>0&&xt&&xt.push(t),t}function E(t,e,n,s,i,r){return sg(p(t,e,n,s,i,r,!0))}function qe(t,e,n,s,i){return sg($(t,e,n,s,i,!0))}function Do(t){return t?t.__v_isVNode===!0:!1}function Ts(t,e){return t.type===e.type&&t.key===e.key}const ig=({key:t})=>t??null,yo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?je(t)||Be(t)||oe(t)?{i:at,r:t,k:e,f:!!n}:t:null);function p(t,e=null,n=null,s=0,i=null,r=t===le?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ig(e),ref:e&&yo(e),scopeId:Am,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:at};return a?(_u(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=je(n)?8:16),br>0&&!o&&xt&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&xt.push(l),l}const $=Kb;function Kb(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===mb)&&(t=pt),Do(t)){const a=cs(t,e,!0);return n&&_u(a,n),br>0&&!r&&xt&&(a.shapeFlag&6?xt[xt.indexOf(t)]=a:xt.push(a)),a.patchFlag=-2,a}if(ix(t)&&(t=t.__vccOpts),e){e=qb(e);let{class:a,style:l}=e;a&&!je(a)&&(e.class=bt(a)),Pe(l)&&(uu(l)&&!J(l)&&(l=Ke({},l)),e.style=ya(l))}const o=je(t)?1:ng(t)?128:Rm(t)?64:Pe(t)?4:oe(t)?2:0;return p(t,e,n,s,i,o,r,!0)}function qb(t){return t?uu(t)||Wm(t)?Ke({},t):t:null}function cs(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:a,transition:l}=t,c=e?Yb(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&ig(c),ref:e&&e.ref?n&&r?J(r)?r.concat(yo(e)):[r,yo(e)]:yo(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==le?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&cs(t.ssContent),ssFallback:t.ssFallback&&cs(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&s&&Us(u,l.clone(u)),u}function Ue(t=" ",e=0){return $(Sa,null,t,e)}function Ut(t="",e=!1){return e?(C(),qe(pt,null,t)):$(pt,null,t)}function Zt(t){return t==null||typeof t=="boolean"?$(pt):J(t)?$(le,null,t.slice()):Do(t)?Kn(t):$(Sa,null,String(t))}function Kn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:cs(t)}function _u(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(J(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),_u(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!Wm(e)?e._ctx=at:i===3&&at&&(at.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else oe(e)?(e={default:e,_ctx:at},n=32):(e=String(e),s&64?(n=16,e=[Ue(e)]):n=8);t.children=e,t.shapeFlag|=n}function Yb(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=bt([e.class,s.class]));else if(i==="style")e.style=ya([e.style,s.style]);else if(ma(i)){const r=e[i],o=s[i];o&&r!==o&&!(J(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Qt(t,e,n,s=null){jt(t,e,7,[n,s])}const Qb=Bm();let Xb=0;function Jb(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Qb,r={uid:Xb++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new im(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Gm(s,i),emitsOptions:tg(s,i),emit:null,emitted:null,propsDefaults:Re,inheritAttrs:s.inheritAttrs,ctx:Re,data:Re,props:Re,attrs:Re,slots:Re,refs:Re,setupState:Re,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Vb.bind(null,r),t.ce&&t.ce(r),r}let Xe=null;const rg=()=>Xe||at;let Lo,lc;{const t=va(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};Lo=e("__VUE_INSTANCE_SETTERS__",n=>Xe=n),lc=e("__VUE_SSR_SETTERS__",n=>xr=n)}const Wr=t=>{const e=Xe;return Lo(t),t.scope.on(),()=>{t.scope.off(),Lo(e)}},gd=()=>{Xe&&Xe.scope.off(),Lo(null)};function og(t){return t.vnode.shapeFlag&4}let xr=!1;function Zb(t,e=!1,n=!1){e&&lc(e);const{props:s,children:i}=t.vnode,r=og(t);Sb(t,s,r,e),Rb(t,i,n);const o=r?ex(t,e):void 0;return e&&lc(!1),o}function ex(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,_b);const{setup:s}=n;if(s){ms();const i=t.setupContext=s.length>1?nx(t):null,r=Wr(t),o=Hr(s,t,0,[t.props,i]),a=Xp(o);if(gs(),r(),(a||t.sp)&&!nr(t)&&Lm(t),a){if(o.then(gd,gd),e)return o.then(l=>{_d(t,l)}).catch(l=>{xa(l,t,0)});t.asyncDep=o}else _d(t,o)}else ag(t)}function _d(t,e,n){oe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Pe(e)&&(t.setupState=Im(e)),ag(t)}function ag(t,e,n){const s=t.type;t.render||(t.render=s.render||sn);{const i=Wr(t);ms();try{vb(t)}finally{gs(),i()}}}const tx={get(t,e){return et(t,"get",""),t[e]}};function nx(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,tx),slots:t.slots,emit:t.emit,expose:e}}function Ta(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Im(fu(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in sr)return sr[n](t)},has(e,n){return n in e||n in sr}})):t.proxy}function sx(t,e=!0){return oe(t)?t.displayName||t.name:t.name||e&&t.__name}function ix(t){return oe(t)&&"__vccOpts"in t}const ne=(t,e)=>Qy(t,e,xr);function ka(t,e,n){const s=arguments.length;return s===2?Pe(e)&&!J(e)?Do(e)?$(t,null,[e]):$(t,e):$(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Do(n)&&(n=[n]),$(t,e,n))}const rx="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let cc;const vd=typeof window<"u"&&window.trustedTypes;if(vd)try{cc=vd.createPolicy("vue",{createHTML:t=>t})}catch{}const lg=cc?t=>cc.createHTML(t):t=>t,ox="http://www.w3.org/2000/svg",ax="http://www.w3.org/1998/Math/MathML",pn=typeof document<"u"?document:null,yd=pn&&pn.createElement("template"),lx={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?pn.createElementNS(ox,t):e==="mathml"?pn.createElementNS(ax,t):n?pn.createElement(t,{is:n}):pn.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>pn.createTextNode(t),createComment:t=>pn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>pn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{yd.innerHTML=lg(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const a=yd.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Un="transition",ji="animation",_i=Symbol("_vtc"),cg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},ug=Ke({},Nm,cg),cx=t=>(t.displayName="Transition",t.props=ug,t),vu=cx((t,{slots:e})=>ka(ib,fg(t),e)),Cs=(t,e=[])=>{J(t)?t.forEach(n=>n(...e)):t&&t(...e)},bd=t=>t?J(t)?t.some(e=>e.length>1):t.length>1:!1;function fg(t){const e={};for(const U in t)U in cg||(e[U]=t[U]);if(t.css===!1)return e;const{name:n="v",type:s,duration:i,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:h=`${n}-leave-to`}=t,y=ux(i),_=y&&y[0],w=y&&y[1],{onBeforeEnter:m,onEnter:b,onEnterCancelled:R,onLeave:O,onLeaveCancelled:G,onBeforeAppear:q=m,onAppear:S=b,onAppearCancelled:L=R}=e,P=(U,ce,be,st)=>{U._enterCancelled=st,Hn(U,ce?u:a),Hn(U,ce?c:o),be&&be()},j=(U,ce)=>{U._isLeaving=!1,Hn(U,f),Hn(U,h),Hn(U,d),ce&&ce()},ie=U=>(ce,be)=>{const st=U?S:b,Te=()=>P(ce,U,be);Cs(st,[ce,Te]),xd(()=>{Hn(ce,U?l:r),Xt(ce,U?u:a),bd(st)||wd(ce,s,_,Te)})};return Ke(e,{onBeforeEnter(U){Cs(m,[U]),Xt(U,r),Xt(U,o)},onBeforeAppear(U){Cs(q,[U]),Xt(U,l),Xt(U,c)},onEnter:ie(!1),onAppear:ie(!0),onLeave(U,ce){U._isLeaving=!0;const be=()=>j(U,ce);Xt(U,f),U._enterCancelled?(Xt(U,d),uc()):(uc(),Xt(U,d)),xd(()=>{U._isLeaving&&(Hn(U,f),Xt(U,h),bd(O)||wd(U,s,w,be))}),Cs(O,[U,be])},onEnterCancelled(U){P(U,!1,void 0,!0),Cs(R,[U])},onAppearCancelled(U){P(U,!0,void 0,!0),Cs(L,[U])},onLeaveCancelled(U){j(U),Cs(G,[U])}})}function ux(t){if(t==null)return null;if(Pe(t))return[cl(t.enter),cl(t.leave)];{const e=cl(t);return[e,e]}}function cl(t){return my(t)}function Xt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[_i]||(t[_i]=new Set)).add(e)}function Hn(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const n=t[_i];n&&(n.delete(e),n.size||(t[_i]=void 0))}function xd(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let fx=0;function wd(t,e,n,s){const i=t._endId=++fx,r=()=>{i===t._endId&&s()};if(n!=null)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=dg(t,e);if(!o)return s();const c=o+"end";let u=0;const f=()=>{t.removeEventListener(c,d),r()},d=h=>{h.target===t&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),t.addEventListener(c,d)}function dg(t,e){const n=window.getComputedStyle(t),s=y=>(n[y]||"").split(", "),i=s(`${Un}Delay`),r=s(`${Un}Duration`),o=Cd(i,r),a=s(`${ji}Delay`),l=s(`${ji}Duration`),c=Cd(a,l);let u=null,f=0,d=0;e===Un?o>0&&(u=Un,f=o,d=r.length):e===ji?c>0&&(u=ji,f=c,d=l.length):(f=Math.max(o,c),u=f>0?o>c?Un:ji:null,d=u?u===Un?r.length:l.length:0);const h=u===Un&&/\b(transform|all)(,|$)/.test(s(`${Un}Property`).toString());return{type:u,timeout:f,propCount:d,hasTransform:h}}function Cd(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>Id(n)+Id(t[s])))}function Id(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function uc(){return document.body.offsetHeight}function dx(t,e,n){const s=t[_i];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Fo=Symbol("_vod"),hg=Symbol("_vsh"),hx={beforeMount(t,{value:e},{transition:n}){t[Fo]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Hi(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Hi(t,!0),s.enter(t)):s.leave(t,()=>{Hi(t,!1)}):Hi(t,e))},beforeUnmount(t,{value:e}){Hi(t,e)}};function Hi(t,e){t.style.display=e?t[Fo]:"none",t[hg]=!e}const px=Symbol(""),mx=/(^|;)\s*display\s*:/;function gx(t,e,n){const s=t.style,i=je(n);let r=!1;if(n&&!i){if(e)if(je(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&bo(s,a,"")}else for(const o in e)n[o]==null&&bo(s,o,"");for(const o in n)o==="display"&&(r=!0),bo(s,o,n[o])}else if(i){if(e!==n){const o=s[px];o&&(n+=";"+o),s.cssText=n,r=mx.test(n)}}else e&&t.removeAttribute("style");Fo in t&&(t[Fo]=r?s.display:"",t[hg]&&(s.display="none"))}const Ed=/\s*!important$/;function bo(t,e,n){if(J(n))n.forEach(s=>bo(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=_x(t,e);Ed.test(n)?t.setProperty(ps(s),n.replace(Ed,""),"important"):t[s]=n}}const Sd=["Webkit","Moz","ms"],ul={};function _x(t,e){const n=ul[e];if(n)return n;let s=Rt(e);if(s!=="filter"&&s in t)return ul[e]=s;s=_a(s);for(let i=0;i<Sd.length;i++){const r=Sd[i]+s;if(r in t)return ul[e]=r}return e}const Td="http://www.w3.org/1999/xlink";function kd(t,e,n,s,i,r=xy(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Td,e.slice(6,e.length)):t.setAttributeNS(Td,e,n):n==null||r&&!tm(n)?t.removeAttribute(e):t.setAttribute(e,r?"":on(n)?String(n):n)}function Ad(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?lg(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=tm(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function _n(t,e,n,s){t.addEventListener(e,n,s)}function vx(t,e,n,s){t.removeEventListener(e,n,s)}const Rd=Symbol("_vei");function yx(t,e,n,s,i=null){const r=t[Rd]||(t[Rd]={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=bx(e);if(s){const c=r[e]=Cx(s,i);_n(t,a,c,l)}else o&&(vx(t,a,o,l),r[e]=void 0)}}const Pd=/(?:Once|Passive|Capture)$/;function bx(t){let e;if(Pd.test(t)){e={};let s;for(;s=t.match(Pd);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ps(t.slice(2)),e]}let fl=0;const xx=Promise.resolve(),wx=()=>fl||(xx.then(()=>fl=0),fl=Date.now());function Cx(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;jt(Ix(s,n.value),e,5,[s])};return n.value=t,n.attached=wx(),n}function Ix(t,e){if(J(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Nd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Ex=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?dx(t,s,o):e==="style"?gx(t,n,s):ma(e)?eu(e)||yx(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Sx(t,e,s,o))?(Ad(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&kd(t,e,s,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!je(s))?Ad(t,Rt(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),kd(t,e,s,o))};function Sx(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Nd(e)&&oe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Nd(e)&&je(n)?!1:e in t}const pg=new WeakMap,mg=new WeakMap,$o=Symbol("_moveCb"),Od=Symbol("_enterCb"),Tx=t=>(delete t.props.mode,t),kx=Tx({name:"TransitionGroup",props:Ke({},ug,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=rg(),s=Pm();let i,r;return mu(()=>{if(!i.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!Nx(i[0].el,n.vnode.el,o))return;i.forEach(Ax),i.forEach(Rx);const a=i.filter(Px);uc(),a.forEach(l=>{const c=l.el,u=c.style;Xt(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const f=c[$o]=d=>{d&&d.target!==c||(!d||/transform$/.test(d.propertyName))&&(c.removeEventListener("transitionend",f),c[$o]=null,Hn(c,o))};c.addEventListener("transitionend",f)})}),()=>{const o=_e(t),a=fg(o);let l=o.tag||le;if(i=[],r)for(let c=0;c<r.length;c++){const u=r[c];u.el&&u.el instanceof Element&&(i.push(u),Us(u,yr(u,a,s,n)),pg.set(u,u.el.getBoundingClientRect()))}r=e.default?hu(e.default()):[];for(let c=0;c<r.length;c++){const u=r[c];u.key!=null&&Us(u,yr(u,a,s,n))}return $(l,null,r)}}}),gg=kx;function Ax(t){const e=t.el;e[$o]&&e[$o](),e[Od]&&e[Od]()}function Rx(t){mg.set(t,t.el.getBoundingClientRect())}function Px(t){const e=pg.get(t),n=mg.get(t),s=e.left-n.left,i=e.top-n.top;if(s||i){const r=t.el.style;return r.transform=r.webkitTransform=`translate(${s}px,${i}px)`,r.transitionDuration="0s",t}}function Nx(t,e,n){const s=t.cloneNode(),i=t[_i];i&&i.forEach(a=>{a.split(/\s+/).forEach(l=>l&&s.classList.remove(l))}),n.split(/\s+/).forEach(a=>a&&s.classList.add(a)),s.style.display="none";const r=e.nodeType===1?e:e.parentNode;r.appendChild(s);const{hasTransform:o}=dg(s);return r.removeChild(s),o}const us=t=>{const e=t.props["onUpdate:modelValue"]||!1;return J(e)?n=>_o(e,n):e};function Ox(t){t.target.composing=!0}function Md(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const At=Symbol("_assign"),We={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[At]=us(i);const r=s||i.props&&i.props.type==="number";_n(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=ko(a)),t[At](a)}),n&&_n(t,"change",()=>{t.value=t.value.trim()}),e||(_n(t,"compositionstart",Ox),_n(t,"compositionend",Md),_n(t,"change",Md))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(t[At]=us(o),t.composing)return;const a=(r||t.type==="number")&&!/^0\d/.test(t.value)?ko(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===l)||(t.value=l))}},_g={deep:!0,created(t,e,n){t[At]=us(n),_n(t,"change",()=>{const s=t._modelValue,i=vi(t),r=t.checked,o=t[At];if(J(s)){const a=su(s,i),l=a!==-1;if(r&&!l)o(s.concat(i));else if(!r&&l){const c=[...s];c.splice(a,1),o(c)}}else if(Pi(s)){const a=new Set(s);r?a.add(i):a.delete(i),o(a)}else o(vg(t,r))})},mounted:Dd,beforeUpdate(t,e,n){t[At]=us(n),Dd(t,e,n)}};function Dd(t,{value:e,oldValue:n},s){t._modelValue=e;let i;if(J(e))i=su(e,s.props.value)>-1;else if(Pi(e))i=e.has(s.props.value);else{if(e===n)return;i=Fs(e,vg(t,!0))}t.checked!==i&&(t.checked=i)}const Mx={created(t,{value:e},n){t.checked=Fs(e,n.props.value),t[At]=us(n),_n(t,"change",()=>{t[At](vi(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t[At]=us(s),e!==n&&(t.checked=Fs(e,s.props.value))}},ii={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const i=Pi(e);_n(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?ko(vi(o)):vi(o));t[At](t.multiple?i?new Set(r):r:r[0]),t._assigning=!0,zs(()=>{t._assigning=!1})}),t[At]=us(s)},mounted(t,{value:e}){Ld(t,e)},beforeUpdate(t,e,n){t[At]=us(n)},updated(t,{value:e}){t._assigning||Ld(t,e)}};function Ld(t,e){const n=t.multiple,s=J(e);if(!(n&&!s&&!Pi(e))){for(let i=0,r=t.options.length;i<r;i++){const o=t.options[i],a=vi(o);if(n)if(s){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=su(e,a)>-1}else o.selected=e.has(a);else if(Fs(vi(o),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function vi(t){return"_value"in t?t._value:t.value}function vg(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const dl={created(t,e,n){uo(t,e,n,null,"created")},mounted(t,e,n){uo(t,e,n,null,"mounted")},beforeUpdate(t,e,n,s){uo(t,e,n,s,"beforeUpdate")},updated(t,e,n,s){uo(t,e,n,s,"updated")}};function Dx(t,e){switch(t){case"SELECT":return ii;case"TEXTAREA":return We;default:switch(e){case"checkbox":return _g;case"radio":return Mx;default:return We}}}function uo(t,e,n,s,i){const o=Dx(t.tagName,n.props&&n.props.type)[i];o&&o(t,e,n,s)}const Lx={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},wr=(t,e)=>{const n=t._withKeys||(t._withKeys={}),s=e.join(".");return n[s]||(n[s]=i=>{if(!("key"in i))return;const r=ps(i.key);if(e.some(o=>o===r||Lx[o]===r))return t(i)})},Fx=Ke({patchProp:Ex},lx);let Fd;function $x(){return Fd||(Fd=Nb(Fx))}const Ux=(...t)=>{const e=$x().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Bx(s);if(!i)return;const r=e._component;!oe(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,Vx(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Vx(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Bx(t){return je(t)?document.querySelector(t):t}function $d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,s)}return n}function vn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?$d(Object(n),!0).forEach(function(s){ht(t,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):$d(Object(n)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(n,s))})}return t}function jx(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var s=n.call(t,e);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Hx(t){var e=jx(t,"string");return typeof e=="symbol"?e:e+""}function Uo(t){"@babel/helpers - typeof";return Uo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Uo(t)}function ht(t,e,n){return e=Hx(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Wx(t,e){if(t==null)return{};var n={};for(var s in t)if(Object.prototype.hasOwnProperty.call(t,s)){if(e.indexOf(s)>=0)continue;n[s]=t[s]}return n}function zx(t,e){if(t==null)return{};var n=Wx(t,e),s,i;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)s=r[i],!(e.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(t,s)&&(n[s]=t[s])}return n}var Gx=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},yg={exports:{}};(function(t){(function(e){var n=function(m,b,R){if(!c(b)||f(b)||d(b)||h(b)||l(b))return b;var O,G=0,q=0;if(u(b))for(O=[],q=b.length;G<q;G++)O.push(n(m,b[G],R));else{O={};for(var S in b)Object.prototype.hasOwnProperty.call(b,S)&&(O[m(S,R)]=n(m,b[S],R))}return O},s=function(m,b){b=b||{};var R=b.separator||"_",O=b.split||/(?=[A-Z])/;return m.split(O).join(R)},i=function(m){return y(m)?m:(m=m.replace(/[\-_\s]+(.)?/g,function(b,R){return R?R.toUpperCase():""}),m.substr(0,1).toLowerCase()+m.substr(1))},r=function(m){var b=i(m);return b.substr(0,1).toUpperCase()+b.substr(1)},o=function(m,b){return s(m,b).toLowerCase()},a=Object.prototype.toString,l=function(m){return typeof m=="function"},c=function(m){return m===Object(m)},u=function(m){return a.call(m)=="[object Array]"},f=function(m){return a.call(m)=="[object Date]"},d=function(m){return a.call(m)=="[object RegExp]"},h=function(m){return a.call(m)=="[object Boolean]"},y=function(m){return m=m-0,m===m},_=function(m,b){var R=b&&"process"in b?b.process:b;return typeof R!="function"?m:function(O,G){return R(O,m,G)}},w={camelize:i,decamelize:o,pascalize:r,depascalize:o,camelizeKeys:function(m,b){return n(_(i,b),m)},decamelizeKeys:function(m,b){return n(_(o,b),m,b)},pascalizeKeys:function(m,b){return n(_(r,b),m)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=w:e.humps=w})(Gx)})(yg);var Kx=yg.exports,qx=["class","style"];function Yx(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var s=n.indexOf(":"),i=Kx.camelize(n.slice(0,s)),r=n.slice(s+1).trim();return e[i]=r,e},{})}function Qx(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function bg(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var s=(t.children||[]).map(function(l){return bg(l)}),i=Object.keys(t.attributes||{}).reduce(function(l,c){var u=t.attributes[c];switch(c){case"class":l.class=Qx(u);break;case"style":l.style=Yx(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var r=n.style,o=r===void 0?{}:r,a=zx(n,qx);return ka(t.tag,vn(vn(vn({},e),{},{class:i.class,style:vn(vn({},i.style),o)},i.attrs),a),s)}var xg=!1;try{xg=!0}catch{}function Xx(){if(!xg&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function hl(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?ht({},t,e):{}}function Jx(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},ht(ht(ht(ht(ht(ht(ht(ht(ht(ht(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),ht(ht(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(s){return n[s]?s:null}).filter(function(s){return s})}function Ud(t){if(t&&Uo(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Zl.icon)return Zl.icon(t);if(t===null)return null;if(Uo(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var Zx=pu({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var s=n.attrs,i=ne(function(){return Ud(e.icon)}),r=ne(function(){return hl("classes",Jx(e))}),o=ne(function(){return hl("transform",typeof e.transform=="string"?Zl.transform(e.transform):e.transform)}),a=ne(function(){return hl("mask",Ud(e.mask))}),l=ne(function(){return ry(i.value,vn(vn(vn(vn({},r.value),o.value),a.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});Os(l,function(u){if(!u)return Xx("Could not find one or more icon(s)",i.value,a.value)},{immediate:!0});var c=ne(function(){return l.value?bg(l.value.abstract[0],{},s):null});return function(){return c.value}}});/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let wg;const Aa=t=>wg=t,Cg=Symbol();function fc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var rr;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(rr||(rr={}));function ew(){const t=rm(!0),e=t.run(()=>ae({}));let n=[],s=[];const i=fu({install(r){Aa(i),i._a=r,r.provide(Cg,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return this._a?n.push(r):s.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const Ig=()=>{};function Vd(t,e,n,s=Ig){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&om()&&Cy(i),i}function Xs(t,...e){t.slice().forEach(n=>{n(...e)})}const tw=t=>t(),Bd=Symbol(),pl=Symbol();function dc(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,s)=>t.set(s,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];fc(i)&&fc(s)&&t.hasOwnProperty(n)&&!Be(s)&&!es(s)?t[n]=dc(i,s):t[n]=s}return t}const nw=Symbol();function sw(t){return!fc(t)||!t.hasOwnProperty(nw)}const{assign:Wn}=Object;function iw(t){return!!(Be(t)&&t.effect)}function rw(t,e,n,s){const{state:i,actions:r,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=i?i():{});const u=Gy(n.state.value[t]);return Wn(u,r,Object.keys(o||{}).reduce((f,d)=>(f[d]=fu(ne(()=>{Aa(n);const h=n._s.get(t);return o[d].call(h,h)})),f),{}))}return l=Eg(t,c,e,n,s,!0),l}function Eg(t,e,n={},s,i,r){let o;const a=Wn({actions:{}},n),l={deep:!0};let c,u,f=[],d=[],h;const y=s.state.value[t];!r&&!y&&(s.state.value[t]={}),ae({});let _;function w(L){let P;c=u=!1,typeof L=="function"?(L(s.state.value[t]),P={type:rr.patchFunction,storeId:t,events:h}):(dc(s.state.value[t],L),P={type:rr.patchObject,payload:L,storeId:t,events:h});const j=_=Symbol();zs().then(()=>{_===j&&(c=!0)}),u=!0,Xs(f,P,s.state.value[t])}const m=r?function(){const{state:P}=n,j=P?P():{};this.$patch(ie=>{Wn(ie,j)})}:Ig;function b(){o.stop(),f=[],d=[],s._s.delete(t)}const R=(L,P="")=>{if(Bd in L)return L[pl]=P,L;const j=function(){Aa(s);const ie=Array.from(arguments),U=[],ce=[];function be(ue){U.push(ue)}function st(ue){ce.push(ue)}Xs(d,{args:ie,name:j[pl],store:G,after:be,onError:st});let Te;try{Te=L.apply(this&&this.$id===t?this:G,ie)}catch(ue){throw Xs(ce,ue),ue}return Te instanceof Promise?Te.then(ue=>(Xs(U,ue),ue)).catch(ue=>(Xs(ce,ue),Promise.reject(ue))):(Xs(U,Te),Te)};return j[Bd]=!0,j[pl]=P,j},O={_p:s,$id:t,$onAction:Vd.bind(null,d),$patch:w,$reset:m,$subscribe(L,P={}){const j=Vd(f,L,P.detached,()=>ie()),ie=o.run(()=>Os(()=>s.state.value[t],U=>{(P.flush==="sync"?u:c)&&L({storeId:t,type:rr.direct,events:h},U)},Wn({},l,P)));return j},$dispose:b},G=jr(O);s._s.set(t,G);const S=(s._a&&s._a.runWithContext||tw)(()=>s._e.run(()=>(o=rm()).run(()=>e({action:R}))));for(const L in S){const P=S[L];if(Be(P)&&!iw(P)||es(P))r||(y&&sw(P)&&(Be(P)?P.value=y[L]:dc(P,y[L])),s.state.value[t][L]=P);else if(typeof P=="function"){const j=R(P,L);S[L]=j,a.actions[L]=P}}return Wn(G,S),Wn(_e(G),S),Object.defineProperty(G,"$state",{get:()=>s.state.value[t],set:L=>{w(P=>{Wn(P,L)})}}),s._p.forEach(L=>{Wn(G,o.run(()=>L({store:G,app:s._a,pinia:s,options:a})))}),y&&r&&n.hydrate&&n.hydrate(G.$state,y),c=!0,u=!0,G}/*! #__NO_SIDE_EFFECTS__ */function _s(t,e,n){let s,i;const r=typeof e=="function";typeof t=="string"?(s=t,i=r?n:e):(i=t,s=t.id);function o(a,l){const c=Eb();return a=a||(c?kt(Cg,null):null),a&&Aa(a),a=wg,a._s.has(s)||(r?Eg(s,e,i,a):rw(s,i,a)),a._s.get(s)}return o.$id=s,o}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const ti=typeof document<"u";function Sg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ow(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Sg(t.default)}const we=Object.assign;function ml(t,e){const n={};for(const s in e){const i=e[s];n[s]=Ht(i)?i.map(t):t(i)}return n}const or=()=>{},Ht=Array.isArray,Tg=/#/g,aw=/&/g,lw=/\//g,cw=/=/g,uw=/\?/g,kg=/\+/g,fw=/%5B/g,dw=/%5D/g,Ag=/%5E/g,hw=/%60/g,Rg=/%7B/g,pw=/%7C/g,Pg=/%7D/g,mw=/%20/g;function yu(t){return encodeURI(""+t).replace(pw,"|").replace(fw,"[").replace(dw,"]")}function gw(t){return yu(t).replace(Rg,"{").replace(Pg,"}").replace(Ag,"^")}function hc(t){return yu(t).replace(kg,"%2B").replace(mw,"+").replace(Tg,"%23").replace(aw,"%26").replace(hw,"`").replace(Rg,"{").replace(Pg,"}").replace(Ag,"^")}function _w(t){return hc(t).replace(cw,"%3D")}function vw(t){return yu(t).replace(Tg,"%23").replace(uw,"%3F")}function yw(t){return t==null?"":vw(t).replace(lw,"%2F")}function Cr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const bw=/\/$/,xw=t=>t.replace(bw,"");function gl(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=Ew(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:Cr(o)}}function ww(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function jd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Cw(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&yi(e.matched[s],n.matched[i])&&Ng(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function yi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Ng(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Iw(t[n],e[n]))return!1;return!0}function Iw(t,e){return Ht(t)?Hd(t,e):Ht(e)?Hd(e,t):t===e}function Hd(t,e){return Ht(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Ew(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o).join("/")}const Vn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Ir;(function(t){t.pop="pop",t.push="push"})(Ir||(Ir={}));var ar;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ar||(ar={}));function Sw(t){if(!t)if(ti){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),xw(t)}const Tw=/^[^#]+#/;function kw(t,e){return t.replace(Tw,"#")+e}function Aw(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Ra=()=>({left:window.scrollX,top:window.scrollY});function Rw(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=Aw(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Wd(t,e){return(history.state?history.state.position-e:-1)+t}const pc=new Map;function Pw(t,e){pc.set(t,e)}function Nw(t){const e=pc.get(t);return pc.delete(t),e}let Ow=()=>location.protocol+"//"+location.host;function Og(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),jd(l,"")}return jd(n,t)+s+i}function Mw(t,e,n,s){let i=[],r=[],o=null;const a=({state:d})=>{const h=Og(t,location),y=n.value,_=e.value;let w=0;if(d){if(n.value=h,e.value=d,o&&o===y){o=null;return}w=_?d.position-_.position:0}else s(h);i.forEach(m=>{m(n.value,y,{delta:w,type:Ir.pop,direction:w?w>0?ar.forward:ar.back:ar.unknown})})};function l(){o=n.value}function c(d){i.push(d);const h=()=>{const y=i.indexOf(d);y>-1&&i.splice(y,1)};return r.push(h),h}function u(){const{history:d}=window;d.state&&d.replaceState(we({},d.state,{scroll:Ra()}),"")}function f(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function zd(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?Ra():null}}function Dw(t){const{history:e,location:n}=window,s={value:Og(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const f=t.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:Ow()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),i.value=c}catch(h){console.error(h),n[u?"replace":"assign"](d)}}function o(l,c){const u=we({},e.state,zd(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=we({},i.value,e.state,{forward:l,scroll:Ra()});r(u.current,u,!0);const f=we({},zd(s.value,l,null),{position:u.position+1},c);r(l,f,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function Lw(t){t=Sw(t);const e=Dw(t),n=Mw(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=we({location:"",base:t,go:s,createHref:kw.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function Fw(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),Lw(t)}function $w(t){return typeof t=="string"||t&&typeof t=="object"}function Mg(t){return typeof t=="string"||typeof t=="symbol"}const Dg=Symbol("");var Gd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Gd||(Gd={}));function bi(t,e){return we(new Error,{type:t,[Dg]:!0},e)}function hn(t,e){return t instanceof Error&&Dg in t&&(e==null||!!(t.type&e))}const Kd="[^/]+?",Uw={sensitive:!1,strict:!1,start:!0,end:!0},Vw=/[.+*?^${}()[\]/\\]/g;function Bw(t,e){const n=we({},Uw,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let f=0;f<c.length;f++){const d=c[f];let h=40+(n.sensitive?.25:0);if(d.type===0)f||(i+="/"),i+=d.value.replace(Vw,"\\$&"),h+=40;else if(d.type===1){const{value:y,repeatable:_,optional:w,regexp:m}=d;r.push({name:y,repeatable:_,optional:w});const b=m||Kd;if(b!==Kd){h+=10;try{new RegExp(`(${b})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${y}" (${b}): `+O.message)}}let R=_?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;f||(R=w&&c.length<2?`(?:/${R})`:"/"+R),w&&(R+="?"),i+=R,h+=20,w&&(h+=-8),_&&(h+=-20),b===".*"&&(h+=-50)}u.push(h)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const h=u[d]||"",y=r[d-1];f[y.name]=h&&y.repeatable?h.split("/"):h}return f}function l(c){let u="",f=!1;for(const d of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const h of d)if(h.type===0)u+=h.value;else if(h.type===1){const{value:y,repeatable:_,optional:w}=h,m=y in c?c[y]:"";if(Ht(m)&&!_)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const b=Ht(m)?m.join("/"):m;if(!b)if(w)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${y}"`);u+=b}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function jw(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Lg(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=jw(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(qd(s))return 1;if(qd(i))return-1}return i.length-s.length}function qd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Hw={type:0,value:""},Ww=/[a-zA-Z0-9_]/;function zw(t){if(!t)return[[]];if(t==="/")return[[Hw]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(h){throw new Error(`ERR (${n})/"${c}": ${h}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function f(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),n=1):d();break;case 4:d(),n=s;break;case 1:l==="("?n=2:Ww.test(l)?d():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),i}function Gw(t,e,n){const s=Bw(zw(t.path),n),i=we(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function Kw(t,e){const n=[],s=new Map;e=Jd({strict:!1,end:!0,sensitive:!1},e);function i(f){return s.get(f)}function r(f,d,h){const y=!h,_=Qd(f);_.aliasOf=h&&h.record;const w=Jd(e,f),m=[_];if("alias"in f){const O=typeof f.alias=="string"?[f.alias]:f.alias;for(const G of O)m.push(Qd(we({},_,{components:h?h.record.components:_.components,path:G,aliasOf:h?h.record:_})))}let b,R;for(const O of m){const{path:G}=O;if(d&&G[0]!=="/"){const q=d.record.path,S=q[q.length-1]==="/"?"":"/";O.path=d.record.path+(G&&S+G)}if(b=Gw(O,d,w),h?h.alias.push(b):(R=R||b,R!==b&&R.alias.push(b),y&&f.name&&!Xd(b)&&o(f.name)),Fg(b)&&l(b),_.children){const q=_.children;for(let S=0;S<q.length;S++)r(q[S],b,h&&h.children[S])}h=h||b}return R?()=>{o(R)}:or}function o(f){if(Mg(f)){const d=s.get(f);d&&(s.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&s.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function l(f){const d=Qw(f,n);n.splice(d,0,f),f.record.name&&!Xd(f)&&s.set(f.record.name,f)}function c(f,d){let h,y={},_,w;if("name"in f&&f.name){if(h=s.get(f.name),!h)throw bi(1,{location:f});w=h.record.name,y=we(Yd(d.params,h.keys.filter(R=>!R.optional).concat(h.parent?h.parent.keys.filter(R=>R.optional):[]).map(R=>R.name)),f.params&&Yd(f.params,h.keys.map(R=>R.name))),_=h.stringify(y)}else if(f.path!=null)_=f.path,h=n.find(R=>R.re.test(_)),h&&(y=h.parse(_),w=h.record.name);else{if(h=d.name?s.get(d.name):n.find(R=>R.re.test(d.path)),!h)throw bi(1,{location:f,currentLocation:d});w=h.record.name,y=we({},d.params,f.params),_=h.stringify(y)}const m=[];let b=h;for(;b;)m.unshift(b.record),b=b.parent;return{name:w,path:_,params:y,matched:m,meta:Yw(m)}}t.forEach(f=>r(f));function u(){n.length=0,s.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:i}}function Yd(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Qd(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:qw(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function qw(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function Xd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Yw(t){return t.reduce((e,n)=>we(e,n.meta),{})}function Jd(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Qw(t,e){let n=0,s=e.length;for(;n!==s;){const r=n+s>>1;Lg(t,e[r])<0?s=r:n=r+1}const i=Xw(t);return i&&(s=e.lastIndexOf(i,s-1)),s}function Xw(t){let e=t;for(;e=e.parent;)if(Fg(e)&&Lg(t,e)===0)return e}function Fg({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Jw(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(kg," "),o=r.indexOf("="),a=Cr(o<0?r:r.slice(0,o)),l=o<0?null:Cr(r.slice(o+1));if(a in e){let c=e[a];Ht(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Zd(t){let e="";for(let n in t){const s=t[n];if(n=_w(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ht(s)?s.map(r=>r&&hc(r)):[s&&hc(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function Zw(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Ht(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const eC=Symbol(""),eh=Symbol(""),Pa=Symbol(""),bu=Symbol(""),mc=Symbol("");function Wi(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function qn(t,e,n,s,i,r=o=>o()){const o=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(bi(4,{from:n,to:e})):d instanceof Error?l(d):$w(d)?l(bi(2,{from:e,to:d})):(o&&s.enterCallbacks[i]===o&&typeof d=="function"&&o.push(d),a())},u=r(()=>t.call(s&&s.instances[i],e,n,c));let f=Promise.resolve(u);t.length<3&&(f=f.then(c)),f.catch(d=>l(d))})}function _l(t,e,n,s,i=r=>r()){const r=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Sg(l)){const u=(l.__vccOpts||l)[e];u&&r.push(qn(u,n,s,o,a,i))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=ow(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const h=(f.__vccOpts||f)[e];return h&&qn(h,n,s,o,a,i)()}))}}return r}function th(t){const e=kt(Pa),n=kt(bu),s=ne(()=>{const l=I(t.to);return e.resolve(l)}),i=ne(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(yi.bind(null,u));if(d>-1)return d;const h=nh(l[c-2]);return c>1&&nh(u)===h&&f[f.length-1].path!==h?f.findIndex(yi.bind(null,l[c-2])):d}),r=ne(()=>i.value>-1&&iC(n.params,s.value.params)),o=ne(()=>i.value>-1&&i.value===n.matched.length-1&&Ng(n.params,s.value.params));function a(l={}){if(sC(l)){const c=e[I(t.replace)?"replace":"push"](I(t.to)).catch(or);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:s,href:ne(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}function tC(t){return t.length===1?t[0]:t}const nC=pu({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:th,setup(t,{slots:e}){const n=jr(th(t)),{options:s}=kt(Pa),i=ne(()=>({[sh(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[sh(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&tC(e.default(n));return t.custom?r:ka("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),en=nC;function sC(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function iC(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!Ht(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function nh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const sh=(t,e,n)=>t??e??n,rC=pu({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=kt(mc),i=ne(()=>t.route||s.value),r=kt(eh,0),o=ne(()=>{let c=I(r);const{matched:u}=i.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=ne(()=>i.value.matched[o.value]);vo(eh,ne(()=>o.value+1)),vo(eC,a),vo(mc,i);const l=ae();return Os(()=>[l.value,a.value,t.name],([c,u,f],[d,h,y])=>{u&&(u.instances[f]=c,h&&h!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),c&&u&&(!h||!yi(u,h)||!d)&&(u.enterCallbacks[f]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,f=a.value,d=f&&f.components[u];if(!d)return ih(n.default,{Component:d,route:c});const h=f.props[u],y=h?h===!0?c.params:typeof h=="function"?h(c):h:null,w=ka(d,we({},y,e,{onVnodeUnmounted:m=>{m.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return ih(n.default,{Component:w,route:c})||w}}});function ih(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const $g=rC;function oC(t){const e=Kw(t.routes,t),n=t.parseQuery||Jw,s=t.stringifyQuery||Zd,i=t.history,r=Wi(),o=Wi(),a=Wi(),l=Hy(Vn);let c=Vn;ti&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ml.bind(null,k=>""+k),f=ml.bind(null,yw),d=ml.bind(null,Cr);function h(k,K){let W,Q;return Mg(k)?(W=e.getRecordMatcher(k),Q=K):Q=k,e.addRoute(Q,W)}function y(k){const K=e.getRecordMatcher(k);K&&e.removeRoute(K)}function _(){return e.getRoutes().map(k=>k.record)}function w(k){return!!e.getRecordMatcher(k)}function m(k,K){if(K=we({},K||l.value),typeof k=="string"){const x=gl(n,k,K.path),T=e.resolve({path:x.path},K),N=i.createHref(x.fullPath);return we(x,T,{params:d(T.params),hash:Cr(x.hash),redirectedFrom:void 0,href:N})}let W;if(k.path!=null)W=we({},k,{path:gl(n,k.path,K.path).path});else{const x=we({},k.params);for(const T in x)x[T]==null&&delete x[T];W=we({},k,{params:f(x)}),K.params=f(K.params)}const Q=e.resolve(W,K),ke=k.hash||"";Q.params=u(d(Q.params));const g=ww(s,we({},k,{hash:gw(ke),path:Q.path})),v=i.createHref(g);return we({fullPath:g,hash:ke,query:s===Zd?Zw(k.query):k.query||{}},Q,{redirectedFrom:void 0,href:v})}function b(k){return typeof k=="string"?gl(n,k,l.value.path):we({},k)}function R(k,K){if(c!==k)return bi(8,{from:K,to:k})}function O(k){return S(k)}function G(k){return O(we(b(k),{replace:!0}))}function q(k){const K=k.matched[k.matched.length-1];if(K&&K.redirect){const{redirect:W}=K;let Q=typeof W=="function"?W(k):W;return typeof Q=="string"&&(Q=Q.includes("?")||Q.includes("#")?Q=b(Q):{path:Q},Q.params={}),we({query:k.query,hash:k.hash,params:Q.path!=null?{}:k.params},Q)}}function S(k,K){const W=c=m(k),Q=l.value,ke=k.state,g=k.force,v=k.replace===!0,x=q(W);if(x)return S(we(b(x),{state:typeof x=="object"?we({},ke,x.state):ke,force:g,replace:v}),K||W);const T=W;T.redirectedFrom=K;let N;return!g&&Cw(s,Q,W)&&(N=bi(16,{to:T,from:Q}),Gt(Q,Q,!0,!1)),(N?Promise.resolve(N):j(T,Q)).catch(A=>hn(A)?hn(A,2)?A:Fn(A):xe(A,T,Q)).then(A=>{if(A){if(hn(A,2))return S(we({replace:v},b(A.to),{state:typeof A.to=="object"?we({},ke,A.to.state):ke,force:g}),K||T)}else A=U(T,Q,!0,v,ke);return ie(T,Q,A),A})}function L(k,K){const W=R(k,K);return W?Promise.reject(W):Promise.resolve()}function P(k){const K=Ys.values().next().value;return K&&typeof K.runWithContext=="function"?K.runWithContext(k):k()}function j(k,K){let W;const[Q,ke,g]=aC(k,K);W=_l(Q.reverse(),"beforeRouteLeave",k,K);for(const x of Q)x.leaveGuards.forEach(T=>{W.push(qn(T,k,K))});const v=L.bind(null,k,K);return W.push(v),It(W).then(()=>{W=[];for(const x of r.list())W.push(qn(x,k,K));return W.push(v),It(W)}).then(()=>{W=_l(ke,"beforeRouteUpdate",k,K);for(const x of ke)x.updateGuards.forEach(T=>{W.push(qn(T,k,K))});return W.push(v),It(W)}).then(()=>{W=[];for(const x of g)if(x.beforeEnter)if(Ht(x.beforeEnter))for(const T of x.beforeEnter)W.push(qn(T,k,K));else W.push(qn(x.beforeEnter,k,K));return W.push(v),It(W)}).then(()=>(k.matched.forEach(x=>x.enterCallbacks={}),W=_l(g,"beforeRouteEnter",k,K,P),W.push(v),It(W))).then(()=>{W=[];for(const x of o.list())W.push(qn(x,k,K));return W.push(v),It(W)}).catch(x=>hn(x,8)?x:Promise.reject(x))}function ie(k,K,W){a.list().forEach(Q=>P(()=>Q(k,K,W)))}function U(k,K,W,Q,ke){const g=R(k,K);if(g)return g;const v=K===Vn,x=ti?history.state:{};W&&(Q||v?i.replace(k.fullPath,we({scroll:v&&x&&x.scroll},ke)):i.push(k.fullPath,ke)),l.value=k,Gt(k,K,W,v),Fn()}let ce;function be(){ce||(ce=i.listen((k,K,W)=>{if(!so.listening)return;const Q=m(k),ke=q(Q);if(ke){S(we(ke,{replace:!0,force:!0}),Q).catch(or);return}c=Q;const g=l.value;ti&&Pw(Wd(g.fullPath,W.delta),Ra()),j(Q,g).catch(v=>hn(v,12)?v:hn(v,2)?(S(we(b(v.to),{force:!0}),Q).then(x=>{hn(x,20)&&!W.delta&&W.type===Ir.pop&&i.go(-1,!1)}).catch(or),Promise.reject()):(W.delta&&i.go(-W.delta,!1),xe(v,Q,g))).then(v=>{v=v||U(Q,g,!1),v&&(W.delta&&!hn(v,8)?i.go(-W.delta,!1):W.type===Ir.pop&&hn(v,20)&&i.go(-1,!1)),ie(Q,g,v)}).catch(or)}))}let st=Wi(),Te=Wi(),ue;function xe(k,K,W){Fn(k);const Q=Te.list();return Q.length?Q.forEach(ke=>ke(k,K,W)):console.error(k),Promise.reject(k)}function fn(){return ue&&l.value!==Vn?Promise.resolve():new Promise((k,K)=>{st.add([k,K])})}function Fn(k){return ue||(ue=!k,be(),st.list().forEach(([K,W])=>k?W(k):K()),st.reset()),k}function Gt(k,K,W,Q){const{scrollBehavior:ke}=t;if(!ti||!ke)return Promise.resolve();const g=!W&&Nw(Wd(k.fullPath,0))||(Q||!W)&&history.state&&history.state.scroll||null;return zs().then(()=>ke(k,K,g)).then(v=>v&&Rw(v)).catch(v=>xe(v,k,K))}const ft=k=>i.go(k);let qs;const Ys=new Set,so={currentRoute:l,listening:!0,addRoute:h,removeRoute:y,clearRoutes:e.clearRoutes,hasRoute:w,getRoutes:_,resolve:m,options:t,push:O,replace:G,go:ft,back:()=>ft(-1),forward:()=>ft(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:Te.add,isReady:fn,install(k){const K=this;k.component("RouterLink",en),k.component("RouterView",$g),k.config.globalProperties.$router=K,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>I(l)}),ti&&!qs&&l.value===Vn&&(qs=!0,O(i.location).catch(ke=>{}));const W={};for(const ke in Vn)Object.defineProperty(W,ke,{get:()=>l.value[ke],enumerable:!0});k.provide(Pa,K),k.provide(bu,xm(W)),k.provide(mc,l);const Q=k.unmount;Ys.add(k),k.unmount=function(){Ys.delete(k),Ys.size<1&&(c=Vn,ce&&ce(),ce=null,l.value=Vn,qs=!1,ue=!1),Q()}}};function It(k){return k.reduce((K,W)=>K.then(()=>P(W)),Promise.resolve())}return so}function aC(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>yi(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>yi(c,l))||i.push(l))}return[n,s,i]}function xu(){return kt(Pa)}function wu(t){return kt(bu)}const lC={__name:"App",setup(t){return(e,n)=>(C(),E(le,null,[n[0]||(n[0]=p("header",null,null,-1)),$(I($g))],64))}},ye=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},cC={},uC={class:"footer-container"};function fC(t,e){return C(),E("div",uC,e[0]||(e[0]=[p("span",null," Web design by thjnh ",-1)]))}const On=ye(cC,[["render",fC],["__scopeId","data-v-373a2f5d"]]),Ug="/hhdonghua/assets/logo-CdjVZ2et.png";var rh={};/**
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
 */const Vg={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const F=function(t,e){if(!t)throw Ni(e)},Ni=function(t){return new Error("Firebase Database ("+Vg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Bg=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},dC=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Cu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,f=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,h=c&63;l||(h=64,o||(d=64)),s.push(n[u],n[f],n[d],n[h])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Bg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):dC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||f==null)throw new hC;const d=r<<2|a>>4;if(s.push(d),c!==64){const h=a<<4&240|c>>2;if(s.push(h),f!==64){const y=c<<6&192|f;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class hC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const jg=function(t){const e=Bg(t);return Cu.encodeByteArray(e,!0)},Vo=function(t){return jg(t).replace(/\./g,"")},Bo=function(t){try{return Cu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function pC(t){return Hg(void 0,t)}function Hg(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!mC(n)||(t[n]=Hg(t[n],e[n]));return t}function mC(t){return t!=="__proto__"}/**
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
 */function gC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const _C=()=>gC().__FIREBASE_DEFAULTS__,vC=()=>{if(typeof process>"u"||typeof rh>"u")return;const t=rh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},yC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Bo(t[1]);return e&&JSON.parse(e)},Iu=()=>{try{return _C()||vC()||yC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Wg=t=>{var e,n;return(n=(e=Iu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},bC=t=>{const e=Wg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},zg=()=>{var t;return(t=Iu())===null||t===void 0?void 0:t.config},Gg=t=>{var e;return(e=Iu())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */function xC(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Vo(JSON.stringify(n)),Vo(JSON.stringify(o)),""].join(".")}/**
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
 */function ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Eu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ut())}function wC(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function CC(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Kg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function IC(){const t=ut();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function EC(){return Vg.NODE_ADMIN===!0}function SC(){try{return typeof indexedDB=="object"}catch{return!1}}function TC(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const kC="FirebaseError";class vs extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=kC,Object.setPrototypeOf(this,vs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gr.prototype.create)}}class Gr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?AC(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new vs(i,a,s)}}function AC(t,e){return t.replace(RC,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const RC=/\{\$([^}]+)}/g;/**
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
 */function Er(t){return JSON.parse(t)}function Ge(t){return JSON.stringify(t)}/**
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
 */const qg=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Er(Bo(r[0])||""),n=Er(Bo(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},PC=function(t){const e=qg(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},NC=function(t){const e=qg(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function cn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function xi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function gc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function jo(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Ho(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(oh(r)&&oh(o)){if(!Ho(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function oh(t){return t!==null&&typeof t=="object"}/**
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
 */function Oi(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class OC{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)s[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)s[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const d=s[f-3]^s[f-8]^s[f-14]^s[f-16];s[f]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let f=0;f<80;f++){f<40?f<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):f<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[f]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function MC(t,e){const n=new DC(t,e);return n.subscribe.bind(n)}class DC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");LC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=vl),i.error===void 0&&(i.error=vl),i.complete===void 0&&(i.complete=vl);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function LC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function vl(){}function Na(t,e){return`${t} failed: ${e} argument `}/**
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
 */const FC=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,F(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Oa=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Ct(t){return t&&t._delegate?t._delegate:t}class Vs{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Es="[DEFAULT]";/**
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
 */class $C{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new zr;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(VC(e))try{this.getOrInitializeService({instanceIdentifier:Es})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Es){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Es){return this.instances.has(e)}getOptions(e=Es){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:UC(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Es){return this.component?this.component.multipleInstances?e:Es:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function UC(t){return t===Es?void 0:t}function VC(t){return t.instantiationMode==="EAGER"}/**
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
 */class BC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new $C(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ee||(Ee={}));const jC={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},HC=Ee.INFO,WC={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},zC=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=WC[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Su{constructor(e){this.name=e,this._logLevel=HC,this._logHandler=zC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?jC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}}const GC=(t,e)=>e.some(n=>t instanceof n);let ah,lh;function KC(){return ah||(ah=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function qC(){return lh||(lh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Yg=new WeakMap,_c=new WeakMap,Qg=new WeakMap,yl=new WeakMap,Tu=new WeakMap;function YC(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(ts(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Yg.set(n,t)}).catch(()=>{}),Tu.set(e,t),e}function QC(t){if(_c.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});_c.set(t,e)}let vc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return _c.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Qg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ts(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function XC(t){vc=t(vc)}function JC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(bl(this),e,...n);return Qg.set(s,e.sort?e.sort():[e]),ts(s)}:qC().includes(t)?function(...e){return t.apply(bl(this),e),ts(Yg.get(this))}:function(...e){return ts(t.apply(bl(this),e))}}function ZC(t){return typeof t=="function"?JC(t):(t instanceof IDBTransaction&&QC(t),GC(t,KC())?new Proxy(t,vc):t)}function ts(t){if(t instanceof IDBRequest)return YC(t);if(yl.has(t))return yl.get(t);const e=ZC(t);return e!==t&&(yl.set(t,e),Tu.set(e,t)),e}const bl=t=>Tu.get(t);function e2(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=ts(o);return s&&o.addEventListener("upgradeneeded",l=>{s(ts(o.result),l.oldVersion,l.newVersion,ts(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const t2=["get","getKey","getAll","getAllKeys","count"],n2=["put","add","delete","clear"],xl=new Map;function ch(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(xl.get(e))return xl.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=n2.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||t2.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return xl.set(e,r),r}XC(t=>({...t,get:(e,n,s)=>ch(e,n)||t.get(e,n,s),has:(e,n)=>!!ch(e,n)||t.has(e,n)}));/**
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
 */class s2{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(i2(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function i2(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const yc="@firebase/app",uh="0.11.1";/**
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
 */const kn=new Su("@firebase/app"),r2="@firebase/app-compat",o2="@firebase/analytics-compat",a2="@firebase/analytics",l2="@firebase/app-check-compat",c2="@firebase/app-check",u2="@firebase/auth",f2="@firebase/auth-compat",d2="@firebase/database",h2="@firebase/data-connect",p2="@firebase/database-compat",m2="@firebase/functions",g2="@firebase/functions-compat",_2="@firebase/installations",v2="@firebase/installations-compat",y2="@firebase/messaging",b2="@firebase/messaging-compat",x2="@firebase/performance",w2="@firebase/performance-compat",C2="@firebase/remote-config",I2="@firebase/remote-config-compat",E2="@firebase/storage",S2="@firebase/storage-compat",T2="@firebase/firestore",k2="@firebase/vertexai",A2="@firebase/firestore-compat",R2="firebase",P2="11.3.1";/**
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
 */const bc="[DEFAULT]",N2={[yc]:"fire-core",[r2]:"fire-core-compat",[a2]:"fire-analytics",[o2]:"fire-analytics-compat",[c2]:"fire-app-check",[l2]:"fire-app-check-compat",[u2]:"fire-auth",[f2]:"fire-auth-compat",[d2]:"fire-rtdb",[h2]:"fire-data-connect",[p2]:"fire-rtdb-compat",[m2]:"fire-fn",[g2]:"fire-fn-compat",[_2]:"fire-iid",[v2]:"fire-iid-compat",[y2]:"fire-fcm",[b2]:"fire-fcm-compat",[x2]:"fire-perf",[w2]:"fire-perf-compat",[C2]:"fire-rc",[I2]:"fire-rc-compat",[E2]:"fire-gcs",[S2]:"fire-gcs-compat",[T2]:"fire-fst",[A2]:"fire-fst-compat",[k2]:"fire-vertex","fire-js":"fire-js",[R2]:"fire-js-all"};/**
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
 */const Wo=new Map,O2=new Map,xc=new Map;function fh(t,e){try{t.container.addComponent(e)}catch(n){kn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function wi(t){const e=t.name;if(xc.has(e))return kn.debug(`There were multiple attempts to register component ${e}.`),!1;xc.set(e,t);for(const n of Wo.values())fh(n,t);for(const n of O2.values())fh(n,t);return!0}function ku(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Mt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const M2={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ns=new Gr("app","Firebase",M2);/**
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
 */class D2{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Vs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ns.create("app-deleted",{appName:this._name})}}/**
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
 */const Mi=P2;function Xg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:bc,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw ns.create("bad-app-name",{appName:String(i)});if(n||(n=zg()),!n)throw ns.create("no-options");const r=Wo.get(i);if(r){if(Ho(n,r.options)&&Ho(s,r.config))return r;throw ns.create("duplicate-app",{appName:i})}const o=new BC(i);for(const l of xc.values())o.addComponent(l);const a=new D2(n,s,o);return Wo.set(i,a),a}function Jg(t=bc){const e=Wo.get(t);if(!e&&t===bc&&zg())return Xg();if(!e)throw ns.create("no-app",{appName:t});return e}function ss(t,e,n){var s;let i=(s=N2[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),kn.warn(a.join(" "));return}wi(new Vs(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const L2="firebase-heartbeat-database",F2=1,Sr="firebase-heartbeat-store";let wl=null;function Zg(){return wl||(wl=e2(L2,F2,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Sr)}catch(n){console.warn(n)}}}}).catch(t=>{throw ns.create("idb-open",{originalErrorMessage:t.message})})),wl}async function $2(t){try{const n=(await Zg()).transaction(Sr),s=await n.objectStore(Sr).get(e0(t));return await n.done,s}catch(e){if(e instanceof vs)kn.warn(e.message);else{const n=ns.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});kn.warn(n.message)}}}async function dh(t,e){try{const s=(await Zg()).transaction(Sr,"readwrite");await s.objectStore(Sr).put(e,e0(t)),await s.done}catch(n){if(n instanceof vs)kn.warn(n.message);else{const s=ns.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});kn.warn(s.message)}}}function e0(t){return`${t.name}!${t.options.appId}`}/**
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
 */const U2=1024,V2=30;class B2{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new H2(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=hh();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>V2){const o=W2(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){kn.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=hh(),{heartbeatsToSend:s,unsentEntries:i}=j2(this._heartbeatsCache.heartbeats),r=Vo(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return kn.warn(n),""}}}function hh(){return new Date().toISOString().substring(0,10)}function j2(t,e=U2){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),ph(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ph(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class H2{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return SC()?TC().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await $2(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return dh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return dh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ph(t){return Vo(JSON.stringify({version:2,heartbeats:t})).length}function W2(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function z2(t){wi(new Vs("platform-logger",e=>new s2(e),"PRIVATE")),wi(new Vs("heartbeat",e=>new B2(e),"PRIVATE")),ss(yc,uh,t),ss(yc,uh,"esm2017"),ss("fire-js","")}z2("");var G2="firebase",K2="11.3.1";/**
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
 */ss(G2,K2,"app");var mh={};const gh="@firebase/database",_h="1.0.12";/**
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
 */let t0="";function q2(t){t0=t}/**
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
 */class Y2{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ge(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Er(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Q2{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return cn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const n0=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Y2(e)}}catch{}return new Q2},As=n0("localStorage"),X2=n0("sessionStorage");/**
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
 */const ui=new Su("@firebase/database"),J2=function(){let t=1;return function(){return t++}}(),s0=function(t){const e=FC(t),n=new OC;n.update(e);const s=n.digest();return Cu.encodeByteArray(s)},Kr=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Kr.apply(null,s):typeof s=="object"?e+=Ge(s):e+=s,e+=" "}return e};let lr=null,vh=!0;const Z2=function(t,e){F(!0,"Can't turn on custom loggers persistently."),ui.logLevel=Ee.VERBOSE,lr=ui.log.bind(ui)},Je=function(...t){if(vh===!0&&(vh=!1,lr===null&&X2.get("logging_enabled")===!0&&Z2()),lr){const e=Kr.apply(null,t);lr(e)}},qr=function(t){return function(...e){Je(t,...e)}},wc=function(...t){const e="FIREBASE INTERNAL ERROR: "+Kr(...t);ui.error(e)},An=function(...t){const e=`FIREBASE FATAL ERROR: ${Kr(...t)}`;throw ui.error(e),new Error(e)},ct=function(...t){const e="FIREBASE WARNING: "+Kr(...t);ui.warn(e)},eI=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ct("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Au=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},tI=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ci="[MIN_NAME]",Bs="[MAX_NAME]",Gs=function(t,e){if(t===e)return 0;if(t===Ci||e===Bs)return-1;if(e===Ci||t===Bs)return 1;{const n=yh(t),s=yh(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},nI=function(t,e){return t===e?0:t<e?-1:1},zi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ge(e))},Ru=function(t){if(typeof t!="object"||t===null)return Ge(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Ge(e[s]),n+=":",n+=Ru(t[e[s]]);return n+="}",n},i0=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Ze(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const r0=function(t){F(!Au(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let f="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),f=f+d}return f.toLowerCase()},sI=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},iI=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function rI(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const oI=new RegExp("^-?(0*)\\d{1,10}$"),aI=-2147483648,lI=2147483647,yh=function(t){if(oI.test(t)){const e=Number(t);if(e>=aI&&e<=lI)return e}return null},Di=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ct("Exception was thrown by user callback.",n),e},Math.floor(0))}},cI=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},cr=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class uI{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,Mt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){ct(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class fI{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Je("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ct(e)}}class xo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}xo.OWNER="owner";/**
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
 */const Pu="5",o0="v",a0="s",l0="r",c0="f",u0=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,f0="ls",d0="p",Cc="ac",h0="websocket",p0="long_polling";/**
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
 */class m0{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=As.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&As.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function dI(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function g0(t,e,n){F(typeof e=="string","typeof type must == string"),F(typeof n=="object","typeof params must == object");let s;if(e===h0)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===p0)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);dI(t)&&(n.ns=t.namespace);const i=[];return Ze(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class hI{constructor(){this.counters_={}}incrementCounter(e,n=1){cn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return pC(this.counters_)}}/**
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
 */const Cl={},Il={};function Nu(t){const e=t.toString();return Cl[e]||(Cl[e]=new hI),Cl[e]}function pI(t,e){const n=t.toString();return Il[n]||(Il[n]=e()),Il[n]}/**
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
 */class mI{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Di(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const bh="start",gI="close",_I="pLPCommand",vI="pRTLPCB",_0="id",v0="pw",y0="ser",yI="cb",bI="seg",xI="ts",wI="d",CI="dframe",b0=1870,x0=30,II=b0-x0,EI=25e3,SI=3e4;class ri{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=qr(e),this.stats_=Nu(n),this.urlFn=l=>(this.appCheckToken&&(l[Cc]=this.appCheckToken),g0(n,p0,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new mI(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(SI)),tI(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ou((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===bh)this.id=a,this.password=l;else if(o===gI)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[bh]="t",s[y0]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[yI]=this.scriptTagHolder.uniqueCallbackIdentifier),s[o0]=Pu,this.transportSessionId&&(s[a0]=this.transportSessionId),this.lastSessionId&&(s[f0]=this.lastSessionId),this.applicationId&&(s[d0]=this.applicationId),this.appCheckToken&&(s[Cc]=this.appCheckToken),typeof location<"u"&&location.hostname&&u0.test(location.hostname)&&(s[l0]=c0);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ri.forceAllow_=!0}static forceDisallow(){ri.forceDisallow_=!0}static isAvailable(){return ri.forceAllow_?!0:!ri.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!sI()&&!iI()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ge(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=jg(n),i=i0(s,II);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[CI]="t",s[_0]=e,s[v0]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ge(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Ou{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=J2(),window[_I+this.uniqueCallbackIdentifier]=e,window[vI+this.uniqueCallbackIdentifier]=n,this.myIFrame=Ou.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Je("frame writing exception"),a.stack&&Je(a.stack),Je(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Je("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[_0]=this.myID,e[v0]=this.myPW,e[y0]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+x0+s.length<=b0;){const o=this.pendingSegs.shift();s=s+"&"+bI+i+"="+o.seg+"&"+xI+i+"="+o.ts+"&"+wI+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(EI)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Je("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const TI=16384,kI=45e3;let zo=null;typeof MozWebSocket<"u"?zo=MozWebSocket:typeof WebSocket<"u"&&(zo=WebSocket);class Dt{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=qr(this.connId),this.stats_=Nu(n),this.connURL=Dt.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[o0]=Pu,typeof location<"u"&&location.hostname&&u0.test(location.hostname)&&(o[l0]=c0),n&&(o[a0]=n),s&&(o[f0]=s),i&&(o[Cc]=i),r&&(o[d0]=r),g0(e,h0,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,As.set("previous_websocket_failure",!0);try{let s;EC(),this.mySock=new zo(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Dt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&zo!==null&&!Dt.forceDisallow_}static previouslyFailed(){return As.isInMemoryStorage||As.get("previous_websocket_failure")===!0}markConnectionHealthy(){As.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Er(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(F(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Ge(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=i0(n,TI);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(kI))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Dt.responsesRequiredToBeHealthy=2;Dt.healthyTimeout=3e4;/**
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
 */class Tr{static get ALL_TRANSPORTS(){return[ri,Dt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Dt&&Dt.isAvailable();let s=n&&!Dt.previouslyFailed();if(e.webSocketOnly&&(n||ct("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Dt];else{const i=this.transports_=[];for(const r of Tr.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Tr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Tr.globalTransportInitialized_=!1;/**
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
 */const AI=6e4,RI=5e3,PI=10*1024,NI=100*1024,El="t",xh="d",OI="s",wh="r",MI="e",Ch="o",Ih="a",Eh="n",Sh="p",DI="h";class LI{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=qr("c:"+this.id+":"),this.transportManager_=new Tr(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=cr(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>NI?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>PI?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(El in e){const n=e[El];n===Ih?this.upgradeIfSecondaryHealthy_():n===wh?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Ch&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=zi("t",e),s=zi("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Sh,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ih,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Eh,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=zi("t",e),s=zi("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=zi(El,e);if(xh in e){const s=e[xh];if(n===DI){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Eh){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===OI?this.onConnectionShutdown_(s):n===wh?this.onReset_(s):n===MI?wc("Server Error: "+s):n===Ch?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):wc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Pu!==s&&ct("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),cr(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(AI))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):cr(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(RI))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Sh,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(As.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class w0{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class C0{constructor(e){this.allowedEvents_=e,this.listeners_={},F(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){F(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Go extends C0{static getInstance(){return new Go}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Eu()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return F(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Th=32,kh=768;class Se{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ve(){return new Se("")}function he(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function fs(t){return t.pieces_.length-t.pieceNum_}function De(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Se(t.pieces_,e)}function Mu(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function FI(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function kr(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function I0(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Se(e,0)}function $e(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Se)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new Se(n,0)}function me(t){return t.pieceNum_>=t.pieces_.length}function lt(t,e){const n=he(t),s=he(e);if(n===null)return e;if(n===s)return lt(De(t),De(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function $I(t,e){const n=kr(t,0),s=kr(e,0);for(let i=0;i<n.length&&i<s.length;i++){const r=Gs(n[i],s[i]);if(r!==0)return r}return n.length===s.length?0:n.length<s.length?-1:1}function Du(t,e){if(fs(t)!==fs(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function St(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(fs(t)>fs(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class UI{constructor(e,n){this.errorPrefix_=n,this.parts_=kr(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Oa(this.parts_[s]);E0(this)}}function VI(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Oa(e),E0(t)}function BI(t){const e=t.parts_.pop();t.byteLength_-=Oa(e),t.parts_.length>0&&(t.byteLength_-=1)}function E0(t){if(t.byteLength_>kh)throw new Error(t.errorPrefix_+"has a key path longer than "+kh+" bytes ("+t.byteLength_+").");if(t.parts_.length>Th)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Th+") or object contains a cycle "+Ss(t))}function Ss(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Lu extends C0{static getInstance(){return new Lu}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return F(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Gi=1e3,jI=60*5*1e3,Ah=30*1e3,HI=1.3,WI=3e4,zI="server_kill",Rh=3;class En extends w0{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=En.nextPersistentConnectionId_++,this.log_=qr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Gi,this.maxReconnectDelay_=jI,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Lu.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Go.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Ge(r)),F(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new zr,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),F(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),F(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;En.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&cn(e,"w")){const s=xi(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();ct(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||NC(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ah)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=PC(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),F(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ge(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):wc("Unrecognized action received from server: "+Ge(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){F(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Gi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Gi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>WI&&(this.reconnectDelay_=Gi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*HI)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+En.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(f){F(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Je("getToken() completed but was canceled"):(Je("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=d&&d.token,a=new LI(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,h=>{ct(h+" ("+this.repoInfo_.toString()+")"),this.interrupt(zI)},r))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&ct(f),l())}}}interrupt(e){Je("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Je("Resuming connection for reason: "+e),delete this.interruptReasons_[e],gc(this.interruptReasons_)&&(this.reconnectDelay_=Gi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Ru(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new Se(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Je("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Rh&&(this.reconnectDelay_=Ah,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Je("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Rh&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+t0.replace(/\./g,"-")]=1,Eu()?e["framework.cordova"]=1:Kg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Go.getInstance().currentlyOnline();return gc(this.interruptReasons_)&&e}}En.nextPersistentConnectionId_=0;En.nextConnectionId_=0;/**
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
 */class Ma{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new pe(Ci,e),i=new pe(Ci,n);return this.compare(s,i)!==0}minPost(){return pe.MIN}}/**
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
 */let fo;class S0 extends Ma{static get __EMPTY_NODE(){return fo}static set __EMPTY_NODE(e){fo=e}compare(e,n){return Gs(e.name,n.name)}isDefinedOn(e){throw Ni("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return pe.MIN}maxPost(){return new pe(Bs,fo)}makePost(e,n){return F(typeof e=="string","KeyIndex indexValue must always be a string."),new pe(e,fo)}toString(){return".key"}}const fi=new S0;/**
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
 */class ho{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Qe{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Qe.RED,this.left=i??mt.EMPTY_NODE,this.right=r??mt.EMPTY_NODE}copy(e,n,s,i,r){return new Qe(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return mt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return mt.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Qe.RED=!0;Qe.BLACK=!1;class GI{copy(e,n,s,i,r){return this}insert(e,n,s){return new Qe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class mt{constructor(e,n=mt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new mt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Qe.BLACK,null,null))}remove(e){return new mt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Qe.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ho(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ho(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ho(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ho(this.root_,null,this.comparator_,!0,e)}}mt.EMPTY_NODE=new GI;/**
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
 */function KI(t,e){return Gs(t.name,e.name)}function Fu(t,e){return Gs(t,e)}/**
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
 */let Ic;function qI(t){Ic=t}const T0=function(t){return typeof t=="number"?"number:"+r0(t):"string:"+t},k0=function(t){if(t.isLeafNode()){const e=t.val();F(typeof e=="string"||typeof e=="number"||typeof e=="object"&&cn(e,".sv"),"Priority must be a string or number.")}else F(t===Ic||t.isEmpty(),"priority of unexpected type.");F(t===Ic||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Ph;class Ye{static set __childrenNodeConstructor(e){Ph=e}static get __childrenNodeConstructor(){return Ph}constructor(e,n=Ye.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,F(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),k0(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ye(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ye.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return me(e)?this:he(e)===".priority"?this.priorityNode_:Ye.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ye.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=he(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(F(s!==".priority"||fs(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ye.__childrenNodeConstructor.EMPTY_NODE.updateChild(De(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+T0(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=r0(this.value_):e+=this.value_,this.lazyHash_=s0(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ye.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ye.__childrenNodeConstructor?-1:(F(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Ye.VALUE_TYPE_ORDER.indexOf(n),r=Ye.VALUE_TYPE_ORDER.indexOf(s);return F(i>=0,"Unknown leaf type: "+n),F(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ye.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let A0,R0;function YI(t){A0=t}function QI(t){R0=t}class XI extends Ma{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Gs(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return pe.MIN}maxPost(){return new pe(Bs,new Ye("[PRIORITY-POST]",R0))}makePost(e,n){const s=A0(e);return new pe(n,new Ye("[PRIORITY-POST]",s))}toString(){return".priority"}}const Ve=new XI;/**
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
 */const JI=Math.log(2);class ZI{constructor(e){const n=r=>parseInt(Math.log(r)/JI,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ko=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let f,d;if(u===0)return null;if(u===1)return f=t[l],d=n?n(f):f,new Qe(d,f.node,Qe.BLACK,null,null);{const h=parseInt(u/2,10)+l,y=i(l,h),_=i(h+1,c);return f=t[h],d=n?n(f):f,new Qe(d,f.node,Qe.BLACK,y,_)}},r=function(l){let c=null,u=null,f=t.length;const d=function(y,_){const w=f-y,m=f;f-=y;const b=i(w+1,m),R=t[w],O=n?n(R):R;h(new Qe(O,R.node,_,null,b))},h=function(y){c?(c.left=y,c=y):(u=y,c=y)};for(let y=0;y<l.count;++y){const _=l.nextBitIsOne(),w=Math.pow(2,l.count-(y+1));_?d(w,Qe.BLACK):(d(w,Qe.BLACK),d(w,Qe.RED))}return u},o=new ZI(t.length),a=r(o);return new mt(s||e,a)};/**
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
 */let Sl;const Js={};class xn{static get Default(){return F(Js&&Ve,"ChildrenNode.ts has not been loaded"),Sl=Sl||new xn({".priority":Js},{".priority":Ve}),Sl}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=xi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof mt?n:null}hasIndex(e){return cn(this.indexSet_,e.toString())}addIndex(e,n){F(e!==fi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(pe.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Ko(s,e.getCompare()):a=Js;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new xn(u,c)}addToIndexes(e,n){const s=jo(this.indexes_,(i,r)=>{const o=xi(this.indexSet_,r);if(F(o,"Missing index implementation for "+r),i===Js)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(pe.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Ko(a,o.getCompare())}else return Js;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new pe(e.name,a))),l.insert(e,e.node)}});return new xn(s,this.indexSet_)}removeFromIndexes(e,n){const s=jo(this.indexes_,i=>{if(i===Js)return i;{const r=n.get(e.name);return r?i.remove(new pe(e.name,r)):i}});return new xn(s,this.indexSet_)}}/**
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
 */let Ki;class te{static get EMPTY_NODE(){return Ki||(Ki=new te(new mt(Fu),null,xn.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&k0(this.priorityNode_),this.children_.isEmpty()&&F(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ki}updatePriority(e){return this.children_.isEmpty()?this:new te(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ki:n}}getChild(e){const n=he(e);return n===null?this:this.getImmediateChild(n).getChild(De(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(F(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new pe(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Ki:this.priorityNode_;return new te(i,o,r)}}updateChild(e,n){const s=he(e);if(s===null)return n;{F(he(e)!==".priority"||fs(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(De(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(Ve,(o,a)=>{n[o]=a.val(e),s++,r&&te.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+T0(this.getPriority().val())+":"),this.forEachChild(Ve,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":s0(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new pe(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new pe(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new pe(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,pe.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,pe.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Yr?-1:0}withIndex(e){if(e===fi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new te(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===fi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Ve),i=n.getIterator(Ve);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===fi?null:this.indexMap_.get(e.toString())}}te.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class eE extends te{constructor(){super(new mt(Fu),te.EMPTY_NODE,xn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return te.EMPTY_NODE}isEmpty(){return!1}}const Yr=new eE;Object.defineProperties(pe,{MIN:{value:new pe(Ci,te.EMPTY_NODE)},MAX:{value:new pe(Bs,Yr)}});S0.__EMPTY_NODE=te.EMPTY_NODE;Ye.__childrenNodeConstructor=te;qI(Yr);QI(Yr);/**
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
 */const tE=!0;function ze(t,e=null){if(t===null)return te.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),F(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ye(n,ze(e))}if(!(t instanceof Array)&&tE){const n=[];let s=!1;if(Ze(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=ze(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new pe(o,l)))}}),n.length===0)return te.EMPTY_NODE;const r=Ko(n,KI,o=>o.name,Fu);if(s){const o=Ko(n,Ve.getCompare());return new te(r,ze(e),new xn({".priority":o},{".priority":Ve}))}else return new te(r,ze(e),xn.Default)}else{let n=te.EMPTY_NODE;return Ze(t,(s,i)=>{if(cn(t,s)&&s.substring(0,1)!=="."){const r=ze(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(ze(e))}}YI(ze);/**
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
 */class nE extends Ma{constructor(e){super(),this.indexPath_=e,F(!me(e)&&he(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Gs(e.name,n.name):r}makePost(e,n){const s=ze(e),i=te.EMPTY_NODE.updateChild(this.indexPath_,s);return new pe(n,i)}maxPost(){const e=te.EMPTY_NODE.updateChild(this.indexPath_,Yr);return new pe(Bs,e)}toString(){return kr(this.indexPath_,0).join("/")}}/**
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
 */class sE extends Ma{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Gs(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return pe.MIN}maxPost(){return pe.MAX}makePost(e,n){const s=ze(e);return new pe(n,s)}toString(){return".value"}}const iE=new sE;/**
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
 */function P0(t){return{type:"value",snapshotNode:t}}function Ii(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ar(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Rr(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function rE(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class $u{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){F(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Ar(n,a)):F(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ii(n,s)):o.trackChildChange(Rr(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Ve,(i,r)=>{n.hasChild(i)||s.trackChildChange(Ar(i,r))}),n.isLeafNode()||n.forEachChild(Ve,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Rr(i,r,o))}else s.trackChildChange(Ii(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?te.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Pr{constructor(e){this.indexedFilter_=new $u(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Pr.getStartPost_(e),this.endPost_=Pr.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new pe(n,s))||(s=te.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=te.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(te.EMPTY_NODE);const r=this;return n.forEachChild(Ve,(o,a)=>{r.matches(new pe(o,a))||(i=i.updateImmediateChild(o,te.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class oE{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Pr(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new pe(n,s))||(s=te.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=te.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=te.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(te.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,te.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const f=this.index_.getCompare();o=(d,h)=>f(h,d)}else o=this.index_.getCompare();const a=e;F(a.numChildren()===this.limit_,"");const l=new pe(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const f=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const h=d==null?1:o(d,l);if(u&&!s.isEmpty()&&h>=0)return r!=null&&r.trackChildChange(Rr(n,s,f)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(Ar(n,f));const _=a.updateImmediateChild(n,te.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(Ii(d.name,d.node)),_.updateImmediateChild(d.name,d.node)):_}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Ar(c.name,c.node)),r.trackChildChange(Ii(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,te.EMPTY_NODE)):e}}/**
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
 */class Uu{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ve}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return F(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return F(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ci}hasEnd(){return this.endSet_}getIndexEndValue(){return F(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return F(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Bs}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return F(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ve}copy(){const e=new Uu;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function aE(t){return t.loadsAllData()?new $u(t.getIndex()):t.hasLimit()?new oE(t):new Pr(t)}function Nh(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ve?n="$priority":t.index_===iE?n="$value":t.index_===fi?n="$key":(F(t.index_ instanceof nE,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ge(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Ge(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Ge(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Ge(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Ge(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Oh(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ve&&(e.i=t.index_.toString()),e}/**
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
 */class qo extends w0{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(F(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=qr("p:rest:"),this.listens_={}}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=qo.getListenId_(e,s),a={};this.listens_[o]=a;const l=Nh(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let f=u;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(r,f,!1,s),xi(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=qo.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Nh(e._queryParams),s=e._path.toString(),i=new zr;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Oi(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Er(a.responseText)}catch{ct("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&ct("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class lE{constructor(){this.rootNode_=te.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Yo(){return{value:null,children:new Map}}function N0(t,e,n){if(me(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=he(e);t.children.has(s)||t.children.set(s,Yo());const i=t.children.get(s);e=De(e),N0(i,e,n)}}function Ec(t,e,n){t.value!==null?n(e,t.value):cE(t,(s,i)=>{const r=new Se(e.toString()+"/"+s);Ec(i,r,n)})}function cE(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class uE{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ze(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const Mh=10*1e3,fE=30*1e3,dE=5*60*1e3;class hE{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new uE(e);const s=Mh+(fE-Mh)*Math.random();cr(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Ze(e,(i,r)=>{r>0&&cn(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),cr(this.reportStats_.bind(this),Math.floor(Math.random()*2*dE))}}/**
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
 */var Lt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Lt||(Lt={}));function Vu(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Bu(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ju(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Qo{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Lt.ACK_USER_WRITE,this.source=Vu()}operationForChild(e){if(me(this.path)){if(this.affectedTree.value!=null)return F(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Se(e));return new Qo(ve(),n,this.revert)}}else return F(he(this.path)===e,"operationForChild called for unrelated child."),new Qo(De(this.path),this.affectedTree,this.revert)}}/**
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
 */class Nr{constructor(e,n){this.source=e,this.path=n,this.type=Lt.LISTEN_COMPLETE}operationForChild(e){return me(this.path)?new Nr(this.source,ve()):new Nr(this.source,De(this.path))}}/**
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
 */class js{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Lt.OVERWRITE}operationForChild(e){return me(this.path)?new js(this.source,ve(),this.snap.getImmediateChild(e)):new js(this.source,De(this.path),this.snap)}}/**
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
 */class Ei{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Lt.MERGE}operationForChild(e){if(me(this.path)){const n=this.children.subtree(new Se(e));return n.isEmpty()?null:n.value?new js(this.source,ve(),n.value):new Ei(this.source,ve(),n)}else return F(he(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ei(this.source,De(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class ds{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(me(e))return this.isFullyInitialized()&&!this.filtered_;const n=he(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class pE{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function mE(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(rE(o.childName,o.snapshotNode))}),qi(t,i,"child_removed",e,s,n),qi(t,i,"child_added",e,s,n),qi(t,i,"child_moved",r,s,n),qi(t,i,"child_changed",e,s,n),qi(t,i,"value",e,s,n),i}function qi(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>_E(t,a,l)),o.forEach(a=>{const l=gE(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function gE(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function _E(t,e,n){if(e.childName==null||n.childName==null)throw Ni("Should only compare child_ events.");const s=new pe(e.childName,e.snapshotNode),i=new pe(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function Da(t,e){return{eventCache:t,serverCache:e}}function ur(t,e,n,s){return Da(new ds(e,n,s),t.serverCache)}function O0(t,e,n,s){return Da(t.eventCache,new ds(e,n,s))}function Xo(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Hs(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Tl;const vE=()=>(Tl||(Tl=new mt(nI)),Tl);class Me{static fromObject(e){let n=new Me(null);return Ze(e,(s,i)=>{n=n.set(new Se(s),i)}),n}constructor(e,n=vE()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ve(),value:this.value};if(me(e))return null;{const s=he(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(De(e),n);return r!=null?{path:$e(new Se(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(me(e))return this;{const n=he(e),s=this.children.get(n);return s!==null?s.subtree(De(e)):new Me(null)}}set(e,n){if(me(e))return new Me(n,this.children);{const s=he(e),r=(this.children.get(s)||new Me(null)).set(De(e),n),o=this.children.insert(s,r);return new Me(this.value,o)}}remove(e){if(me(e))return this.children.isEmpty()?new Me(null):new Me(null,this.children);{const n=he(e),s=this.children.get(n);if(s){const i=s.remove(De(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new Me(null):new Me(this.value,r)}else return this}}get(e){if(me(e))return this.value;{const n=he(e),s=this.children.get(n);return s?s.get(De(e)):null}}setTree(e,n){if(me(e))return n;{const s=he(e),r=(this.children.get(s)||new Me(null)).setTree(De(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new Me(this.value,o)}}fold(e){return this.fold_(ve(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_($e(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,ve(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(me(e))return null;{const r=he(e),o=this.children.get(r);return o?o.findOnPath_(De(e),$e(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ve(),n)}foreachOnPath_(e,n,s){if(me(e))return this;{this.value&&s(n,this.value);const i=he(e),r=this.children.get(i);return r?r.foreachOnPath_(De(e),$e(n,i),s):new Me(null)}}foreach(e){this.foreach_(ve(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_($e(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class Vt{constructor(e){this.writeTree_=e}static empty(){return new Vt(new Me(null))}}function fr(t,e,n){if(me(e))return new Vt(new Me(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=lt(i,e);return r=r.updateChild(o,n),new Vt(t.writeTree_.set(i,r))}else{const i=new Me(n),r=t.writeTree_.setTree(e,i);return new Vt(r)}}}function Sc(t,e,n){let s=t;return Ze(n,(i,r)=>{s=fr(s,$e(e,i),r)}),s}function Dh(t,e){if(me(e))return Vt.empty();{const n=t.writeTree_.setTree(e,new Me(null));return new Vt(n)}}function Tc(t,e){return Ks(t,e)!=null}function Ks(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(lt(n.path,e)):null}function Lh(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ve,(s,i)=>{e.push(new pe(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new pe(s,i.value))}),e}function is(t,e){if(me(e))return t;{const n=Ks(t,e);return n!=null?new Vt(new Me(n)):new Vt(t.writeTree_.subtree(e))}}function kc(t){return t.writeTree_.isEmpty()}function Si(t,e){return M0(ve(),t.writeTree_,e)}function M0(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(F(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=M0($e(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild($e(t,".priority"),s)),n}}/**
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
 */function La(t,e){return $0(e,t)}function yE(t,e,n,s,i){F(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=fr(t.visibleWrites,e,n)),t.lastWriteId=s}function bE(t,e,n,s){F(s>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:s,visible:!0}),t.visibleWrites=Sc(t.visibleWrites,e,n),t.lastWriteId=s}function xE(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function wE(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);F(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&CE(a,s.path)?i=!1:St(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return IE(t),!0;if(s.snap)t.visibleWrites=Dh(t.visibleWrites,s.path);else{const a=s.children;Ze(a,l=>{t.visibleWrites=Dh(t.visibleWrites,$e(s.path,l))})}return!0}else return!1}function CE(t,e){if(t.snap)return St(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&St($e(t.path,n),e))return!0;return!1}function IE(t){t.visibleWrites=D0(t.allWrites,EE,ve()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function EE(t){return t.visible}function D0(t,e,n){let s=Vt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)St(n,o)?(a=lt(n,o),s=fr(s,a,r.snap)):St(o,n)&&(a=lt(o,n),s=fr(s,ve(),r.snap.getChild(a)));else if(r.children){if(St(n,o))a=lt(n,o),s=Sc(s,a,r.children);else if(St(o,n))if(a=lt(o,n),me(a))s=Sc(s,ve(),r.children);else{const l=xi(r.children,he(a));if(l){const c=l.getChild(De(a));s=fr(s,ve(),c)}}}else throw Ni("WriteRecord should have .snap or .children")}}return s}function L0(t,e,n,s,i){if(!s&&!i){const r=Ks(t.visibleWrites,e);if(r!=null)return r;{const o=is(t.visibleWrites,e);if(kc(o))return n;if(n==null&&!Tc(o,ve()))return null;{const a=n||te.EMPTY_NODE;return Si(o,a)}}}else{const r=is(t.visibleWrites,e);if(!i&&kc(r))return n;if(!i&&n==null&&!Tc(r,ve()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(St(c.path,e)||St(e,c.path))},a=D0(t.allWrites,o,e),l=n||te.EMPTY_NODE;return Si(a,l)}}}function SE(t,e,n){let s=te.EMPTY_NODE;const i=Ks(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Ve,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=is(t.visibleWrites,e);return n.forEachChild(Ve,(o,a)=>{const l=Si(is(r,new Se(o)),a);s=s.updateImmediateChild(o,l)}),Lh(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=is(t.visibleWrites,e);return Lh(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function TE(t,e,n,s,i){F(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=$e(e,n);if(Tc(t.visibleWrites,r))return null;{const o=is(t.visibleWrites,r);return kc(o)?i.getChild(n):Si(o,i.getChild(n))}}function kE(t,e,n,s){const i=$e(e,n),r=Ks(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=is(t.visibleWrites,i);return Si(o,s.getNode().getImmediateChild(n))}else return null}function AE(t,e){return Ks(t.visibleWrites,e)}function RE(t,e,n,s,i,r,o){let a;const l=is(t.visibleWrites,e),c=Ks(l,ve());if(c!=null)a=c;else if(n!=null)a=Si(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],f=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let h=d.getNext();for(;h&&u.length<i;)f(h,s)!==0&&u.push(h),h=d.getNext();return u}else return[]}function PE(){return{visibleWrites:Vt.empty(),allWrites:[],lastWriteId:-1}}function Jo(t,e,n,s){return L0(t.writeTree,t.treePath,e,n,s)}function Hu(t,e){return SE(t.writeTree,t.treePath,e)}function Fh(t,e,n,s){return TE(t.writeTree,t.treePath,e,n,s)}function Zo(t,e){return AE(t.writeTree,$e(t.treePath,e))}function NE(t,e,n,s,i,r){return RE(t.writeTree,t.treePath,e,n,s,i,r)}function Wu(t,e,n){return kE(t.writeTree,t.treePath,e,n)}function F0(t,e){return $0($e(t.treePath,e),t.writeTree)}function $0(t,e){return{treePath:t,writeTree:e}}/**
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
 */class OE{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;F(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),F(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Rr(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Ar(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Ii(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Rr(s,e.snapshotNode,i.oldSnap));else throw Ni("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class ME{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const U0=new ME;class zu{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new ds(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Wu(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Hs(this.viewCache_),r=NE(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function DE(t){return{filter:t}}function LE(t,e){F(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),F(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function FE(t,e,n,s,i){const r=new OE;let o,a;if(n.type===Lt.OVERWRITE){const c=n;c.source.fromUser?o=Ac(t,e,c.path,c.snap,s,i,r):(F(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!me(c.path),o=ea(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===Lt.MERGE){const c=n;c.source.fromUser?o=UE(t,e,c.path,c.children,s,i,r):(F(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Rc(t,e,c.path,c.children,s,i,a,r))}else if(n.type===Lt.ACK_USER_WRITE){const c=n;c.revert?o=jE(t,e,c.path,s,i,r):o=VE(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===Lt.LISTEN_COMPLETE)o=BE(t,e,n.path,s,r);else throw Ni("Unknown operation type: "+n.type);const l=r.getChanges();return $E(e,o,l),{viewCache:o,changes:l}}function $E(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Xo(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(P0(Xo(e)))}}function V0(t,e,n,s,i,r){const o=e.eventCache;if(Zo(s,n)!=null)return e;{let a,l;if(me(n))if(F(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Hs(e),u=c instanceof te?c:te.EMPTY_NODE,f=Hu(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),f,r)}else{const c=Jo(s,Hs(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=he(n);if(c===".priority"){F(fs(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const f=Fh(s,n,u,l);f!=null?a=t.filter.updatePriority(u,f):a=o.getNode()}else{const u=De(n);let f;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=Fh(s,n,o.getNode(),l);d!=null?f=o.getNode().getImmediateChild(c).updateChild(u,d):f=o.getNode().getImmediateChild(c)}else f=Wu(s,c,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),c,f,u,i,r):a=o.getNode()}}return ur(e,a,o.isFullyInitialized()||me(n),t.filter.filtersNodes())}}function ea(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(me(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const h=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),h,null)}else{const h=he(n);if(!l.isCompleteForPath(n)&&fs(n)>1)return e;const y=De(n),w=l.getNode().getImmediateChild(h).updateChild(y,s);h===".priority"?c=u.updatePriority(l.getNode(),w):c=u.updateChild(l.getNode(),h,w,y,U0,null)}const f=O0(e,c,l.isFullyInitialized()||me(n),u.filtersNodes()),d=new zu(i,f,r);return V0(t,f,n,i,d,a)}function Ac(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new zu(i,e,r);if(me(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=ur(e,c,!0,t.filter.filtersNodes());else{const f=he(n);if(f===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=ur(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=De(n),h=a.getNode().getImmediateChild(f);let y;if(me(d))y=s;else{const _=u.getCompleteChild(f);_!=null?Mu(d)===".priority"&&_.getChild(I0(d)).isEmpty()?y=_:y=_.updateChild(d,s):y=te.EMPTY_NODE}if(h.equals(y))l=e;else{const _=t.filter.updateChild(a.getNode(),f,y,d,u,o);l=ur(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function $h(t,e){return t.eventCache.isCompleteForChild(e)}function UE(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=$e(n,l);$h(e,he(u))&&(a=Ac(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=$e(n,l);$h(e,he(u))||(a=Ac(t,a,u,c,i,r,o))}),a}function Uh(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Rc(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;me(n)?c=s:c=new Me(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((f,d)=>{if(u.hasChild(f)){const h=e.serverCache.getNode().getImmediateChild(f),y=Uh(t,h,d);l=ea(t,l,new Se(f),y,i,r,o,a)}}),c.children.inorderTraversal((f,d)=>{const h=!e.serverCache.isCompleteForChild(f)&&d.value===null;if(!u.hasChild(f)&&!h){const y=e.serverCache.getNode().getImmediateChild(f),_=Uh(t,y,d);l=ea(t,l,new Se(f),_,i,r,o,a)}}),l}function VE(t,e,n,s,i,r,o){if(Zo(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(me(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return ea(t,e,n,l.getNode().getChild(n),i,r,a,o);if(me(n)){let c=new Me(null);return l.getNode().forEachChild(fi,(u,f)=>{c=c.set(new Se(u),f)}),Rc(t,e,n,c,i,r,a,o)}else return e}else{let c=new Me(null);return s.foreach((u,f)=>{const d=$e(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),Rc(t,e,n,c,i,r,a,o)}}function BE(t,e,n,s,i){const r=e.serverCache,o=O0(e,r.getNode(),r.isFullyInitialized()||me(n),r.isFiltered());return V0(t,o,n,s,U0,i)}function jE(t,e,n,s,i,r){let o;if(Zo(s,n)!=null)return e;{const a=new zu(s,e,i),l=e.eventCache.getNode();let c;if(me(n)||he(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Jo(s,Hs(e));else{const f=e.serverCache.getNode();F(f instanceof te,"serverChildren would be complete if leaf node"),u=Hu(s,f)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=he(n);let f=Wu(s,u,e.serverCache);f==null&&e.serverCache.isCompleteForChild(u)&&(f=l.getImmediateChild(u)),f!=null?c=t.filter.updateChild(l,u,f,De(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,te.EMPTY_NODE,De(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Jo(s,Hs(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Zo(s,ve())!=null,ur(e,c,o,t.filter.filtersNodes())}}/**
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
 */class HE{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new $u(s.getIndex()),r=aE(s);this.processor_=DE(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(te.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(te.EMPTY_NODE,a.getNode(),null),u=new ds(l,o.isFullyInitialized(),i.filtersNodes()),f=new ds(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Da(f,u),this.eventGenerator_=new pE(this.query_)}get query(){return this.query_}}function WE(t){return t.viewCache_.serverCache.getNode()}function zE(t){return Xo(t.viewCache_)}function GE(t,e){const n=Hs(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!me(e)&&!n.getImmediateChild(he(e)).isEmpty())?n.getChild(e):null}function Vh(t){return t.eventRegistrations_.length===0}function KE(t,e){t.eventRegistrations_.push(e)}function Bh(t,e,n){const s=[];if(n){F(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function jh(t,e,n,s){e.type===Lt.MERGE&&e.source.queryId!==null&&(F(Hs(t.viewCache_),"We should always have a full cache before handling merges"),F(Xo(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=FE(t.processor_,i,e,n,s);return LE(t.processor_,r.viewCache),F(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,B0(t,r.changes,r.viewCache.eventCache.getNode(),null)}function qE(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ve,(r,o)=>{s.push(Ii(r,o))}),n.isFullyInitialized()&&s.push(P0(n.getNode())),B0(t,s,n.getNode(),e)}function B0(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return mE(t.eventGenerator_,e,n,i)}/**
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
 */let ta;class j0{constructor(){this.views=new Map}}function YE(t){F(!ta,"__referenceConstructor has already been defined"),ta=t}function QE(){return F(ta,"Reference.ts has not been loaded"),ta}function XE(t){return t.views.size===0}function Gu(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return F(r!=null,"SyncTree gave us an op for an invalid query."),jh(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(jh(o,e,n,s));return r}}function H0(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=Jo(n,i?s:null),l=!1;a?l=!0:s instanceof te?(a=Hu(n,s),l=!1):(a=te.EMPTY_NODE,l=!1);const c=Da(new ds(a,l,!1),new ds(s,i,!1));return new HE(e,c)}return o}function JE(t,e,n,s,i,r){const o=H0(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),KE(o,n),qE(o,n)}function ZE(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=hs(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(Bh(c,n,s)),Vh(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(Bh(l,n,s)),Vh(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!hs(t)&&r.push(new(QE())(e._repo,e._path)),{removed:r,events:o}}function W0(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function rs(t,e){let n=null;for(const s of t.views.values())n=n||GE(s,e);return n}function z0(t,e){if(e._queryParams.loadsAllData())return Fa(t);{const s=e._queryIdentifier;return t.views.get(s)}}function G0(t,e){return z0(t,e)!=null}function hs(t){return Fa(t)!=null}function Fa(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let na;function eS(t){F(!na,"__referenceConstructor has already been defined"),na=t}function tS(){return F(na,"Reference.ts has not been loaded"),na}let nS=1;class Hh{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Me(null),this.pendingWriteTree_=PE(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function K0(t,e,n,s,i){return yE(t.pendingWriteTree_,e,n,s,i),i?Li(t,new js(Vu(),e,n)):[]}function sS(t,e,n,s){bE(t.pendingWriteTree_,e,n,s);const i=Me.fromObject(n);return Li(t,new Ei(Vu(),e,i))}function Jn(t,e,n=!1){const s=xE(t.pendingWriteTree_,e);if(wE(t.pendingWriteTree_,e)){let r=new Me(null);return s.snap!=null?r=r.set(ve(),!0):Ze(s.children,o=>{r=r.set(new Se(o),!0)}),Li(t,new Qo(s.path,r,n))}else return[]}function Qr(t,e,n){return Li(t,new js(Bu(),e,n))}function iS(t,e,n){const s=Me.fromObject(n);return Li(t,new Ei(Bu(),e,s))}function rS(t,e){return Li(t,new Nr(Bu(),e))}function oS(t,e,n){const s=qu(t,n);if(s){const i=Yu(s),r=i.path,o=i.queryId,a=lt(r,e),l=new Nr(ju(o),a);return Qu(t,r,l)}else return[]}function sa(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||G0(o,e))){const l=ZE(o,e,n,s);XE(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(r,(d,h)=>hs(h));if(u&&!f){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const h=cS(d);for(let y=0;y<h.length;++y){const _=h[y],w=_.query,m=X0(t,_);t.listenProvider_.startListening(dr(w),Or(t,w),m.hashFn,m.onComplete)}}}!f&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(dr(e),null):c.forEach(d=>{const h=t.queryToTagMap.get($a(d));t.listenProvider_.stopListening(dr(d),h)}))}uS(t,c)}return a}function q0(t,e,n,s){const i=qu(t,s);if(i!=null){const r=Yu(i),o=r.path,a=r.queryId,l=lt(o,e),c=new js(ju(a),l,n);return Qu(t,o,c)}else return[]}function aS(t,e,n,s){const i=qu(t,s);if(i){const r=Yu(i),o=r.path,a=r.queryId,l=lt(o,e),c=Me.fromObject(n),u=new Ei(ju(a),l,c);return Qu(t,o,u)}else return[]}function Pc(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,h)=>{const y=lt(d,i);r=r||rs(h,y),o=o||hs(h)});let a=t.syncPointTree_.get(i);a?(o=o||hs(a),r=r||rs(a,ve())):(a=new j0,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=te.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((h,y)=>{const _=rs(y,ve());_&&(r=r.updateImmediateChild(h,_))}));const c=G0(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=$a(e);F(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const h=fS();t.queryToTagMap.set(d,h),t.tagToQueryMap.set(h,d)}const u=La(t.pendingWriteTree_,i);let f=JE(a,e,n,u,r,l);if(!c&&!o&&!s){const d=z0(a,e);f=f.concat(dS(t,e,d))}return f}function Ku(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=lt(o,e),c=rs(a,l);if(c)return c});return L0(i,e,r,n,!0)}function lS(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const f=lt(c,n);s=s||rs(u,f)});let i=t.syncPointTree_.get(n);i?s=s||rs(i,ve()):(i=new j0,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new ds(s,!0,!1):null,a=La(t.pendingWriteTree_,e._path),l=H0(i,e,a,r?o.getNode():te.EMPTY_NODE,r);return zE(l)}function Li(t,e){return Y0(e,t.syncPointTree_,null,La(t.pendingWriteTree_,ve()))}function Y0(t,e,n,s){if(me(t.path))return Q0(t,e,n,s);{const i=e.get(ve());n==null&&i!=null&&(n=rs(i,ve()));let r=[];const o=he(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=F0(s,o);r=r.concat(Y0(a,l,c,u))}return i&&(r=r.concat(Gu(i,t,s,n))),r}}function Q0(t,e,n,s){const i=e.get(ve());n==null&&i!=null&&(n=rs(i,ve()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=F0(s,o),u=t.operationForChild(o);u&&(r=r.concat(Q0(u,a,l,c)))}),i&&(r=r.concat(Gu(i,t,s,n))),r}function X0(t,e){const n=e.query,s=Or(t,n);return{hashFn:()=>(WE(e)||te.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?oS(t,n._path,s):rS(t,n._path);{const r=rI(i,n);return sa(t,n,null,r)}}}}function Or(t,e){const n=$a(e);return t.queryToTagMap.get(n)}function $a(t){return t._path.toString()+"$"+t._queryIdentifier}function qu(t,e){return t.tagToQueryMap.get(e)}function Yu(t){const e=t.indexOf("$");return F(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Se(t.substr(0,e))}}function Qu(t,e,n){const s=t.syncPointTree_.get(e);F(s,"Missing sync point for query tag that we're tracking");const i=La(t.pendingWriteTree_,e);return Gu(s,n,i,null)}function cS(t){return t.fold((e,n,s)=>{if(n&&hs(n))return[Fa(n)];{let i=[];return n&&(i=W0(n)),Ze(s,(r,o)=>{i=i.concat(o)}),i}})}function dr(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(tS())(t._repo,t._path):t}function uS(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=$a(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function fS(){return nS++}function dS(t,e,n){const s=e._path,i=Or(t,e),r=X0(t,n),o=t.listenProvider_.startListening(dr(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)F(!hs(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,f)=>{if(!me(c)&&u&&hs(u))return[Fa(u).query];{let d=[];return u&&(d=d.concat(W0(u).map(h=>h.query))),Ze(f,(h,y)=>{d=d.concat(y)}),d}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(dr(u),Or(t,u))}}return o}/**
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
 */class Xu{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Xu(n)}node(){return this.node_}}class Ju{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=$e(this.path_,e);return new Ju(this.syncTree_,n)}node(){return Ku(this.syncTree_,this.path_)}}const hS=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Wh=function(t,e,n){if(!t||typeof t!="object")return t;if(F(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return pS(t[".sv"],e,n);if(typeof t[".sv"]=="object")return mS(t[".sv"],e);F(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},pS=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:F(!1,"Unexpected server value: "+t)}},mS=function(t,e,n){t.hasOwnProperty("increment")||F(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&F(!1,"Unexpected increment value: "+s);const i=e.node();if(F(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},J0=function(t,e,n,s){return Zu(e,new Ju(n,t),s)},Z0=function(t,e,n){return Zu(t,new Xu(e),n)};function Zu(t,e,n){const s=t.getPriority().val(),i=Wh(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Wh(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ye(a,ze(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Ye(i))),o.forEachChild(Ve,(a,l)=>{const c=Zu(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class ef{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function tf(t,e){let n=e instanceof Se?e:new Se(e),s=t,i=he(n);for(;i!==null;){const r=xi(s.node.children,i)||{children:{},childCount:0};s=new ef(i,s,r),n=De(n),i=he(n)}return s}function Fi(t){return t.node.value}function e_(t,e){t.node.value=e,Nc(t)}function t_(t){return t.node.childCount>0}function gS(t){return Fi(t)===void 0&&!t_(t)}function Ua(t,e){Ze(t.node.children,(n,s)=>{e(new ef(n,t,s))})}function n_(t,e,n,s){n&&e(t),Ua(t,i=>{n_(i,e,!0)})}function _S(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Xr(t){return new Se(t.parent===null?t.name:Xr(t.parent)+"/"+t.name)}function Nc(t){t.parent!==null&&vS(t.parent,t.name,t)}function vS(t,e,n){const s=gS(n),i=cn(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Nc(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Nc(t))}/**
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
 */const yS=/[\[\].#$\/\u0000-\u001F\u007F]/,bS=/[\[\].#$\u0000-\u001F\u007F]/,kl=10*1024*1024,nf=function(t){return typeof t=="string"&&t.length!==0&&!yS.test(t)},s_=function(t){return typeof t=="string"&&t.length!==0&&!bS.test(t)},xS=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),s_(t)},wS=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Au(t)||t&&typeof t=="object"&&cn(t,".sv")},i_=function(t,e,n,s){s&&e===void 0||Va(Na(t,"value"),e,n)},Va=function(t,e,n){const s=n instanceof Se?new UI(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ss(s));if(typeof e=="function")throw new Error(t+"contains a function "+Ss(s)+" with contents = "+e.toString());if(Au(e))throw new Error(t+"contains "+e.toString()+" "+Ss(s));if(typeof e=="string"&&e.length>kl/3&&Oa(e)>kl)throw new Error(t+"contains a string greater than "+kl+" utf8 bytes "+Ss(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Ze(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!nf(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ss(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);VI(s,o),Va(t,a,s),BI(s)}),i&&r)throw new Error(t+' contains ".value" child '+Ss(s)+" in addition to actual children.")}},CS=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const r=kr(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!nf(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort($I);let i=null;for(n=0;n<e.length;n++){if(s=e[n],i!==null&&St(i,s))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},IS=function(t,e,n,s){const i=Na(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];Ze(e,(o,a)=>{const l=new Se(o);if(Va(i,a,$e(n,l)),Mu(l)===".priority"&&!wS(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),CS(i,r)},r_=function(t,e,n,s){if(!s_(n))throw new Error(Na(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},ES=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),r_(t,e,n)},sf=function(t,e){if(he(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},SS=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!nf(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!xS(n))throw new Error(Na(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class TS{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ba(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Du(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function o_(t,e,n){Ba(t,n),a_(t,s=>Du(s,e))}function Pt(t,e,n){Ba(t,n),a_(t,s=>St(s,e)||St(e,s))}function a_(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(kS(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function kS(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();lr&&Je("event: "+n.toString()),Di(s)}}}/**
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
 */const AS="repo_interrupt",RS=25;class PS{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new TS,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Yo(),this.transactionQueueTree_=new ef,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function NS(t,e,n){if(t.stats_=Nu(t.repoInfo_),t.forceRestClient_||cI())t.server_=new qo(t.repoInfo_,(s,i,r,o)=>{zh(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Gh(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ge(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new En(t.repoInfo_,e,(s,i,r,o)=>{zh(t,s,i,r,o)},s=>{Gh(t,s)},s=>{OS(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=pI(t.repoInfo_,()=>new hE(t.stats_,t.server_)),t.infoData_=new lE,t.infoSyncTree_=new Hh({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=Qr(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),rf(t,"connected",!1),t.serverSyncTree_=new Hh({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);Pt(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function l_(t){const n=t.infoData_.getNode(new Se(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function ja(t){return hS({timestamp:l_(t)})}function zh(t,e,n,s,i){t.dataUpdateCount++;const r=new Se(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=jo(n,c=>ze(c));o=aS(t.serverSyncTree_,r,l,i)}else{const l=ze(n);o=q0(t.serverSyncTree_,r,l,i)}else if(s){const l=jo(n,c=>ze(c));o=iS(t.serverSyncTree_,r,l)}else{const l=ze(n);o=Qr(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Ti(t,r)),Pt(t.eventQueue_,a,o)}function Gh(t,e){rf(t,"connected",e),e===!1&&FS(t)}function OS(t,e){Ze(e,(n,s)=>{rf(t,n,s)})}function rf(t,e,n){const s=new Se("/.info/"+e),i=ze(n);t.infoData_.updateSnapshot(s,i);const r=Qr(t.infoSyncTree_,s,i);Pt(t.eventQueue_,s,r)}function of(t){return t.nextWriteId_++}function MS(t,e,n){const s=lS(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=ze(i).withIndex(e._queryParams.getIndex());Pc(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Qr(t.serverSyncTree_,e._path,r);else{const a=Or(t.serverSyncTree_,e);o=q0(t.serverSyncTree_,e._path,r,a)}return Pt(t.eventQueue_,e._path,o),sa(t.serverSyncTree_,e,n,null,!0),r},i=>(Jr(t,"get for query "+Ge(e)+" failed: "+i),Promise.reject(new Error(i))))}function DS(t,e,n,s,i){Jr(t,"set",{path:e.toString(),value:n,priority:s});const r=ja(t),o=ze(n,s),a=Ku(t.serverSyncTree_,e),l=Z0(o,a,r),c=of(t),u=K0(t.serverSyncTree_,e,l,c,!0);Ba(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,h)=>{const y=d==="ok";y||ct("set at "+e+" failed: "+d);const _=Jn(t.serverSyncTree_,c,!y);Pt(t.eventQueue_,e,_),Oc(t,i,d,h)});const f=lf(t,e);Ti(t,f),Pt(t.eventQueue_,f,[])}function LS(t,e,n,s){Jr(t,"update",{path:e.toString(),value:n});let i=!0;const r=ja(t),o={};if(Ze(n,(a,l)=>{i=!1,o[a]=J0($e(e,a),ze(l),t.serverSyncTree_,r)}),i)Je("update() called with empty data.  Don't do anything."),Oc(t,s,"ok",void 0);else{const a=of(t),l=sS(t.serverSyncTree_,e,o,a);Ba(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const f=c==="ok";f||ct("update at "+e+" failed: "+c);const d=Jn(t.serverSyncTree_,a,!f),h=d.length>0?Ti(t,e):e;Pt(t.eventQueue_,h,d),Oc(t,s,c,u)}),Ze(n,c=>{const u=lf(t,$e(e,c));Ti(t,u)}),Pt(t.eventQueue_,e,[])}}function FS(t){Jr(t,"onDisconnectEvents");const e=ja(t),n=Yo();Ec(t.onDisconnect_,ve(),(i,r)=>{const o=J0(i,r,t.serverSyncTree_,e);N0(n,i,o)});let s=[];Ec(n,ve(),(i,r)=>{s=s.concat(Qr(t.serverSyncTree_,i,r));const o=lf(t,i);Ti(t,o)}),t.onDisconnect_=Yo(),Pt(t.eventQueue_,ve(),s)}function $S(t,e,n){let s;he(e._path)===".info"?s=Pc(t.infoSyncTree_,e,n):s=Pc(t.serverSyncTree_,e,n),o_(t.eventQueue_,e._path,s)}function c_(t,e,n){let s;he(e._path)===".info"?s=sa(t.infoSyncTree_,e,n):s=sa(t.serverSyncTree_,e,n),o_(t.eventQueue_,e._path,s)}function US(t){t.persistentConnection_&&t.persistentConnection_.interrupt(AS)}function Jr(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Je(n,...e)}function Oc(t,e,n,s){e&&Di(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function u_(t,e,n){return Ku(t.serverSyncTree_,e,n)||te.EMPTY_NODE}function af(t,e=t.transactionQueueTree_){if(e||Ha(t,e),Fi(e)){const n=d_(t,e);F(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&VS(t,Xr(e),n)}else t_(e)&&Ua(e,n=>{af(t,n)})}function VS(t,e,n){const s=n.map(c=>c.currentWriteId),i=u_(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];F(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const f=lt(e,u.path);r=r.updateChild(f,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Jr(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const f=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(Jn(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&f.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Ha(t,tf(t.transactionQueueTree_,e)),af(t,t.transactionQueueTree_),Pt(t.eventQueue_,e,u);for(let d=0;d<f.length;d++)Di(f[d])}else{if(c==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{ct("transaction at "+l.toString()+" failed: "+c);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=c}Ti(t,e)}},o)}function Ti(t,e){const n=f_(t,e),s=Xr(n),i=d_(t,n);return BS(t,i,s),s}function BS(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=lt(n,l.path);let u=!1,f;if(F(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,f=l.abortReason,i=i.concat(Jn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=RS)u=!0,f="maxretry",i=i.concat(Jn(t.serverSyncTree_,l.currentWriteId,!0));else{const d=u_(t,l.path,o);l.currentInputSnapshot=d;const h=e[a].update(d.val());if(h!==void 0){Va("transaction failed: Data returned ",h,l.path);let y=ze(h);typeof h=="object"&&h!=null&&cn(h,".priority")||(y=y.updatePriority(d.getPriority()));const w=l.currentWriteId,m=ja(t),b=Z0(y,d,m);l.currentOutputSnapshotRaw=y,l.currentOutputSnapshotResolved=b,l.currentWriteId=of(t),o.splice(o.indexOf(w),1),i=i.concat(K0(t.serverSyncTree_,l.path,b,l.currentWriteId,l.applyLocally)),i=i.concat(Jn(t.serverSyncTree_,w,!0))}else u=!0,f="nodata",i=i.concat(Jn(t.serverSyncTree_,l.currentWriteId,!0))}Pt(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(f),!1,null))))}Ha(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Di(s[a]);af(t,t.transactionQueueTree_)}function f_(t,e){let n,s=t.transactionQueueTree_;for(n=he(e);n!==null&&Fi(s)===void 0;)s=tf(s,n),e=De(e),n=he(e);return s}function d_(t,e){const n=[];return h_(t,e,n),n.sort((s,i)=>s.order-i.order),n}function h_(t,e,n){const s=Fi(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Ua(e,i=>{h_(t,i,n)})}function Ha(t,e){const n=Fi(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,e_(e,n.length>0?n:void 0)}Ua(e,s=>{Ha(t,s)})}function lf(t,e){const n=Xr(f_(t,e)),s=tf(t.transactionQueueTree_,e);return _S(s,i=>{Al(t,i)}),Al(t,s),n_(s,i=>{Al(t,i)}),n}function Al(t,e){const n=Fi(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(F(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(F(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Jn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?e_(e,void 0):n.length=r+1,Pt(t.eventQueue_,Xr(e),i);for(let o=0;o<s.length;o++)Di(s[o])}}/**
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
 */function jS(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function HS(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):ct(`Invalid query segment '${n}' in query '${t}'`)}return e}const Kh=function(t,e){const n=WS(t),s=n.namespace;n.domain==="firebase.com"&&An(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&An("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||eI();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new m0(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new Se(n.pathString)}},WS=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(u,f)),u<f&&(i=jS(t.substring(u,f)));const d=HS(t.substring(Math.min(t.length,f)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const h=e.slice(0,c);if(h.toLowerCase()==="localhost")n="localhost";else if(h.split(".").length<=2)n=h;else{const y=e.indexOf(".");s=e.substring(0,y).toLowerCase(),n=e.substring(y+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */const qh="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",zS=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=qh.charAt(n%64),n=Math.floor(n/64);F(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=qh.charAt(e[i]);return F(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class GS{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ge(this.snapshot.exportVal())}}class KS{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class p_{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return F(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class cf{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return me(this._path)?null:Mu(this._path)}get ref(){return new Mn(this._repo,this._path)}get _queryIdentifier(){const e=Oh(this._queryParams),n=Ru(e);return n==="{}"?"default":n}get _queryObject(){return Oh(this._queryParams)}isEqual(e){if(e=Ct(e),!(e instanceof cf))return!1;const n=this._repo===e._repo,s=Du(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+FI(this._path)}}class Mn extends cf{constructor(e,n){super(e,n,new Uu,!1)}get parent(){const e=I0(this._path);return e===null?null:new Mn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Mr{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Se(e),s=Dr(this.ref,e);return new Mr(this._node.getChild(n),s,Ve)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Mr(i,Dr(this.ref,s),Ve)))}hasChild(e){const n=new Se(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function fe(t,e){return t=Ct(t),t._checkNotDeleted("ref"),e!==void 0?Dr(t._root,e):t._root}function Dr(t,e){return t=Ct(t),he(t._path)===null?ES("child","path",e):r_("child","path",e),new Mn(t._repo,$e(t._path,e))}function ki(t,e){t=Ct(t),sf("push",t._path),i_("push",e,t._path,!0);const n=l_(t._repo),s=zS(n),i=Dr(t,s),r=Dr(t,s);let o;return e!=null?o=Yn(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function di(t){return sf("remove",t._path),Yn(t,null)}function Yn(t,e){t=Ct(t),sf("set",t._path),i_("set",e,t._path,!1);const n=new zr;return DS(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function yt(t,e){IS("update",e,t._path);const n=new zr;return LS(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function Ot(t){t=Ct(t);const e=new p_(()=>{}),n=new Wa(e);return MS(t._repo,t,n).then(s=>new Mr(s,new Mn(t._repo,t._path),t._queryParams.getIndex()))}class Wa{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new GS("value",this,new Mr(e.snapshotNode,new Mn(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new KS(this,e,n):null}matches(e){return e instanceof Wa?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function qS(t,e,n,s,i){const r=new p_(n,void 0),o=new Wa(r);return $S(t._repo,t,o),()=>c_(t._repo,t,o)}function m_(t,e,n,s){return qS(t,"value",e)}function YS(t,e,n){c_(t._repo,t,null)}YE(Mn);eS(Mn);/**
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
 */const QS="FIREBASE_DATABASE_EMULATOR_HOST",Mc={};let XS=!1;function JS(t,e,n,s){t.repoInfo_=new m0(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function ZS(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||An("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Je("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Kh(r,i),a=o.repoInfo,l;typeof process<"u"&&mh&&(l=mh[QS]),l?(r=`http://${l}?ns=${a.namespace}`,o=Kh(r,i),a=o.repoInfo):o.repoInfo.secure;const c=new fI(t.name,t.options,e);SS("Invalid Firebase Database URL",o),me(o.path)||An("Database URL must point to the root of a Firebase Database (not including a child path).");const u=tT(a,t,c,new uI(t,n));return new nT(u,t)}function eT(t,e){const n=Mc[e];(!n||n[t.key]!==t)&&An(`Database ${e}(${t.repoInfo_}) has already been deleted.`),US(t),delete n[t.key]}function tT(t,e,n,s){let i=Mc[e.name];i||(i={},Mc[e.name]=i);let r=i[t.toURLString()];return r&&An("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new PS(t,XS,n,s),i[t.toURLString()]=r,r}class nT{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(NS(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Mn(this._repo,ve())),this._rootInternal}_delete(){return this._rootInternal!==null&&(eT(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&An("Cannot call "+e+" on a deleted database.")}}function g_(t=Jg(),e){const n=ku(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=bC("database");s&&sT(n,...s)}return n}function sT(t,e,n,s={}){t=Ct(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&An("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&An('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new xo(xo.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:xC(s.mockUserToken,t.app.options.projectId);r=new xo(o)}JS(i,e,n,r)}/**
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
 */function iT(t){q2(Mi),wi(new Vs("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return ZS(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),ss(gh,_h,t),ss(gh,_h,"esm2017")}En.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};En.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};iT();function uf(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function __(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const rT=__,v_=new Gr("auth","Firebase",__());/**
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
 */const ia=new Su("@firebase/auth");function oT(t,...e){ia.logLevel<=Ee.WARN&&ia.warn(`Auth (${Mi}): ${t}`,...e)}function wo(t,...e){ia.logLevel<=Ee.ERROR&&ia.error(`Auth (${Mi}): ${t}`,...e)}/**
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
 */function ln(t,...e){throw df(t,...e)}function Bt(t,...e){return df(t,...e)}function ff(t,e,n){const s=Object.assign(Object.assign({},rT()),{[e]:n});return new Gr("auth","Firebase",s).create(e,{appName:t.name})}function Ms(t){return ff(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function aT(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&ln(t,"argument-error"),ff(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function df(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return v_.create(t,...e)}function se(t,e,...n){if(!t)throw df(e,...n)}function wn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw wo(e),new Error(e)}function Rn(t,e){t||wn(e)}/**
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
 */function Dc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function lT(){return Yh()==="http:"||Yh()==="https:"}function Yh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function cT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(lT()||CC()||"connection"in navigator)?navigator.onLine:!0}function uT(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Zr{constructor(e,n){this.shortDelay=e,this.longDelay=n,Rn(n>e,"Short delay should be less than long delay!"),this.isMobile=Eu()||Kg()}get(){return cT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function hf(t,e){Rn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class y_{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;wn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;wn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;wn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const fT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const dT=new Zr(3e4,6e4);function pf(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function $i(t,e,n,s,i={}){return b_(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Oi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},r);return wC()||(c.referrerPolicy="no-referrer"),y_.fetch()(x_(t,t.config.apiHost,n,a),c)})}async function b_(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},fT),e);try{const i=new pT(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw po(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw po(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw po(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw po(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw ff(t,u,c);ln(t,u)}}catch(i){if(i instanceof vs)throw i;ln(t,"network-request-failed",{message:String(i)})}}async function hT(t,e,n,s,i={}){const r=await $i(t,e,n,s,i);return"mfaPendingCredential"in r&&ln(t,"multi-factor-auth-required",{_serverResponse:r}),r}function x_(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?hf(t.config,i):`${t.config.apiScheme}://${i}`}class pT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Bt(this.auth,"network-request-failed")),dT.get())})}}function po(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Bt(t,e,s);return i.customData._tokenResponse=n,i}/**
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
 */async function mT(t,e){return $i(t,"POST","/v1/accounts:delete",e)}async function w_(t,e){return $i(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function hr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function gT(t,e=!1){const n=Ct(t),s=await n.getIdToken(e),i=mf(s);se(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:hr(Rl(i.auth_time)),issuedAtTime:hr(Rl(i.iat)),expirationTime:hr(Rl(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Rl(t){return Number(t)*1e3}function mf(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return wo("JWT malformed, contained fewer than 3 sections"),null;try{const i=Bo(n);return i?JSON.parse(i):(wo("Failed to decode base64 JWT payload"),null)}catch(i){return wo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Qh(t){const e=mf(t);return se(e,"internal-error"),se(typeof e.exp<"u","internal-error"),se(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Lr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof vs&&_T(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function _T({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class vT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Lc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=hr(this.lastLoginAt),this.creationTime=hr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ra(t){var e;const n=t.auth,s=await t.getIdToken(),i=await Lr(t,w_(n,{idToken:s}));se(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?C_(r.providerUserInfo):[],a=bT(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Lc(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function yT(t){const e=Ct(t);await ra(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bT(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function C_(t){return t.map(e=>{var{providerId:n}=e,s=uf(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function xT(t,e){const n=await b_(t,{},async()=>{const s=Oi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=x_(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",y_.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function wT(t,e){return $i(t,"POST","/v2/accounts:revokeToken",pf(t,e))}/**
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
 */class hi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){se(e.idToken,"internal-error"),se(typeof e.idToken<"u","internal-error"),se(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Qh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){se(e.length!==0,"internal-error");const n=Qh(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(se(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await xT(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new hi;return s&&(se(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(se(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(se(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new hi,this.toJSON())}_performRefresh(){return wn("not implemented")}}/**
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
 */function Bn(t,e){se(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Cn{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=uf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new vT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Lc(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Lr(this,this.stsTokenManager.getToken(this.auth,e));return se(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return gT(this,e)}reload(){return yT(this)}_assign(e){this!==e&&(se(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Cn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){se(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await ra(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Mt(this.auth.app))return Promise.reject(Ms(this.auth));const e=await this.getIdToken();return await Lr(this,mT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const f=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,h=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(c=n.createdAt)!==null&&c!==void 0?c:void 0,b=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:R,emailVerified:O,isAnonymous:G,providerData:q,stsTokenManager:S}=n;se(R&&S,e,"internal-error");const L=hi.fromJSON(this.name,S);se(typeof R=="string",e,"internal-error"),Bn(f,e.name),Bn(d,e.name),se(typeof O=="boolean",e,"internal-error"),se(typeof G=="boolean",e,"internal-error"),Bn(h,e.name),Bn(y,e.name),Bn(_,e.name),Bn(w,e.name),Bn(m,e.name),Bn(b,e.name);const P=new Cn({uid:R,auth:e,email:d,emailVerified:O,displayName:f,isAnonymous:G,photoURL:y,phoneNumber:h,tenantId:_,stsTokenManager:L,createdAt:m,lastLoginAt:b});return q&&Array.isArray(q)&&(P.providerData=q.map(j=>Object.assign({},j))),w&&(P._redirectEventId=w),P}static async _fromIdTokenResponse(e,n,s=!1){const i=new hi;i.updateFromServerResponse(n);const r=new Cn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await ra(r),r}static async _fromGetAccountInfoResponse(e,n,s){const i=n.users[0];se(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?C_(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),a=new hi;a.updateFromIdToken(s);const l=new Cn({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new Lc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,c),l}}/**
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
 */const Xh=new Map;function In(t){Rn(t instanceof Function,"Expected a class definition");let e=Xh.get(t);return e?(Rn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Xh.set(t,e),e)}/**
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
 */class I_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}I_.type="NONE";const Jh=I_;/**
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
 */function Co(t,e,n){return`firebase:${t}:${e}:${n}`}class pi{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Co(this.userKey,i.apiKey,r),this.fullPersistenceKey=Co("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Cn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new pi(In(Jh),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||In(Jh);const o=Co(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const f=Cn._fromJSON(e,u);c!==r&&(a=f),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new pi(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new pi(r,e,s))}}/**
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
 */function Zh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(k_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(E_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(R_(e))return"Blackberry";if(P_(e))return"Webos";if(S_(e))return"Safari";if((e.includes("chrome/")||T_(e))&&!e.includes("edge/"))return"Chrome";if(A_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function E_(t=ut()){return/firefox\//i.test(t)}function S_(t=ut()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function T_(t=ut()){return/crios\//i.test(t)}function k_(t=ut()){return/iemobile/i.test(t)}function A_(t=ut()){return/android/i.test(t)}function R_(t=ut()){return/blackberry/i.test(t)}function P_(t=ut()){return/webos/i.test(t)}function gf(t=ut()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function CT(t=ut()){var e;return gf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function IT(){return IC()&&document.documentMode===10}function N_(t=ut()){return gf(t)||A_(t)||P_(t)||R_(t)||/windows phone/i.test(t)||k_(t)}/**
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
 */function O_(t,e=[]){let n;switch(t){case"Browser":n=Zh(ut());break;case"Worker":n=`${Zh(ut())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Mi}/${s}`}/**
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
 */class ET{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function ST(t,e={}){return $i(t,"GET","/v2/passwordPolicy",pf(t,e))}/**
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
 */const TT=6;class kT{constructor(e){var n,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:TT,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,i,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class AT{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ep(this),this.idTokenSubscription=new ep(this),this.beforeStateQueue=new ET(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=v_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=In(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await pi.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await w_(this,{idToken:e}),s=await Cn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Mt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return se(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ra(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=uT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Mt(this.app))return Promise.reject(Ms(this));const n=e?Ct(e):null;return n&&se(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&se(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Mt(this.app)?Promise.reject(Ms(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Mt(this.app)?Promise.reject(Ms(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(In(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ST(this),n=new kT(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Gr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await wT(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&In(e)||this._popupRedirectResolver;se(n,this,"argument-error"),this.redirectPersistenceManager=await pi.create(this,[In(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(se(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return se(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=O_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;if(Mt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&oT(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function za(t){return Ct(t)}class ep{constructor(e){this.auth=e,this.observer=null,this.addObserver=MC(n=>this.observer=n)}get next(){return se(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let _f={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function RT(t){_f=t}function PT(t){return _f.loadJS(t)}function NT(){return _f.gapiScript}function OT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function MT(t,e){const n=ku(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(Ho(r,e??{}))return i;ln(i,"already-initialized")}return n.initialize({options:e})}function DT(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(In);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function LT(t,e,n){const s=za(t);se(s._canInitEmulator,s,"emulator-config-failed"),se(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=M_(e),{host:o,port:a}=FT(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),$T()}function M_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function FT(t){const e=M_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:tp(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:tp(o)}}}function tp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function $T(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class D_{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return wn("not implemented")}_getIdTokenResponse(e){return wn("not implemented")}_linkToIdToken(e,n){return wn("not implemented")}_getReauthenticationResolver(e){return wn("not implemented")}}/**
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
 */async function mi(t,e){return hT(t,"POST","/v1/accounts:signInWithIdp",pf(t,e))}/**
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
 */const UT="http://localhost";class Ws extends D_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ws(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ln("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=uf(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Ws(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return mi(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,mi(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,mi(e,n)}buildRequest(){const e={requestUri:UT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Oi(n)}return e}}/**
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
 */class vf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class eo extends vf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class yn extends eo{constructor(){super("facebook.com")}static credential(e){return Ws._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yn.credential(e.oauthAccessToken)}catch{return null}}}yn.FACEBOOK_SIGN_IN_METHOD="facebook.com";yn.PROVIDER_ID="facebook.com";/**
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
 */class bn extends eo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ws._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return bn.credential(n,s)}catch{return null}}}bn.GOOGLE_SIGN_IN_METHOD="google.com";bn.PROVIDER_ID="google.com";/**
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
 */class Qn extends eo{constructor(){super("github.com")}static credential(e){return Ws._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qn.credential(e.oauthAccessToken)}catch{return null}}}Qn.GITHUB_SIGN_IN_METHOD="github.com";Qn.PROVIDER_ID="github.com";/**
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
 */class Xn extends eo{constructor(){super("twitter.com")}static credential(e,n){return Ws._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Xn.credential(n,s)}catch{return null}}}Xn.TWITTER_SIGN_IN_METHOD="twitter.com";Xn.PROVIDER_ID="twitter.com";/**
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
 */class Ai{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await Cn._fromIdTokenResponse(e,s,i),o=np(s);return new Ai({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=np(s);return new Ai({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function np(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class oa extends vs{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,oa.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new oa(e,n,s,i)}}function L_(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?oa._fromErrorAndOperation(t,r,e,s):r})}async function VT(t,e,n=!1){const s=await Lr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ai._forOperation(t,"link",s)}/**
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
 */async function BT(t,e,n=!1){const{auth:s}=t;if(Mt(s.app))return Promise.reject(Ms(s));const i="reauthenticate";try{const r=await Lr(t,L_(s,i,e,t),n);se(r.idToken,s,"internal-error");const o=mf(r.idToken);se(o,s,"internal-error");const{sub:a}=o;return se(t.uid===a,s,"user-mismatch"),Ai._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&ln(s,"user-mismatch"),r}}/**
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
 */async function jT(t,e,n=!1){if(Mt(t.app))return Promise.reject(Ms(t));const s="signIn",i=await L_(t,s,e),r=await Ai._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}function HT(t,e,n,s){return Ct(t).onIdTokenChanged(e,n,s)}function WT(t,e,n){return Ct(t).beforeAuthStateChanged(e,n)}const aa="__sak";/**
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
 */class F_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(aa,"1"),this.storage.removeItem(aa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const zT=1e3,GT=10;class $_ extends F_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=N_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);IT()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,GT):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},zT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}$_.type="LOCAL";const KT=$_;/**
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
 */class U_ extends F_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}U_.type="SESSION";const V_=U_;/**
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
 */function qT(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ga{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Ga(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await qT(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ga.receivers=[];/**
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
 */function yf(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class YT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=yf("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(f){const d=f;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function rn(){return window}function QT(t){rn().location.href=t}/**
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
 */function B_(){return typeof rn().WorkerGlobalScope<"u"&&typeof rn().importScripts=="function"}async function XT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function JT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function ZT(){return B_()?self:null}/**
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
 */const j_="firebaseLocalStorageDb",e6=1,la="firebaseLocalStorage",H_="fbase_key";class to{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ka(t,e){return t.transaction([la],e?"readwrite":"readonly").objectStore(la)}function t6(){const t=indexedDB.deleteDatabase(j_);return new to(t).toPromise()}function Fc(){const t=indexedDB.open(j_,e6);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(la,{keyPath:H_})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(la)?e(s):(s.close(),await t6(),e(await Fc()))})})}async function sp(t,e,n){const s=Ka(t,!0).put({[H_]:e,value:n});return new to(s).toPromise()}async function n6(t,e){const n=Ka(t,!1).get(e),s=await new to(n).toPromise();return s===void 0?null:s.value}function ip(t,e){const n=Ka(t,!0).delete(e);return new to(n).toPromise()}const s6=800,i6=3;class W_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Fc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>i6)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return B_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ga._getInstance(ZT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await XT(),!this.activeServiceWorker)return;this.sender=new YT(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||JT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Fc();return await sp(e,aa,"1"),await ip(e,aa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>sp(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>n6(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ip(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Ka(i,!1).getAll();return new to(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),s6)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}W_.type="LOCAL";const r6=W_;new Zr(3e4,6e4);/**
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
 */function z_(t,e){return e?In(e):(se(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class bf extends D_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return mi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return mi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return mi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function o6(t){return jT(t.auth,new bf(t),t.bypassAuthState)}function a6(t){const{auth:e,user:n}=t;return se(n,e,"internal-error"),BT(n,new bf(t),t.bypassAuthState)}async function l6(t){const{auth:e,user:n}=t;return se(n,e,"internal-error"),VT(n,new bf(t),t.bypassAuthState)}/**
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
 */class G_{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return o6;case"linkViaPopup":case"linkViaRedirect":return l6;case"reauthViaPopup":case"reauthViaRedirect":return a6;default:ln(this.auth,"internal-error")}}resolve(e){Rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const c6=new Zr(2e3,1e4);async function rp(t,e,n){if(Mt(t.app))return Promise.reject(Bt(t,"operation-not-supported-in-this-environment"));const s=za(t);aT(t,e,vf);const i=z_(s,n);return new Rs(s,"signInViaPopup",e,i).executeNotNull()}class Rs extends G_{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Rs.currentPopupAction&&Rs.currentPopupAction.cancel(),Rs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return se(e,this.auth,"internal-error"),e}async onExecution(){Rn(this.filter.length===1,"Popup operations only handle one event");const e=yf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Bt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Bt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Rs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Bt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,c6.get())};e()}}Rs.currentPopupAction=null;/**
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
 */const u6="pendingRedirect",Io=new Map;class f6 extends G_{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Io.get(this.auth._key());if(!e){try{const s=await d6(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Io.set(this.auth._key(),e)}return this.bypassAuthState||Io.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function d6(t,e){const n=m6(e),s=p6(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function h6(t,e){Io.set(t._key(),e)}function p6(t){return In(t._redirectPersistence)}function m6(t){return Co(u6,t.config.apiKey,t.name)}async function g6(t,e,n=!1){if(Mt(t.app))return Promise.reject(Ms(t));const s=za(t),i=z_(s,e),o=await new f6(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const _6=10*60*1e3;class v6{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!y6(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!K_(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Bt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=_6&&this.cachedEventUids.clear(),this.cachedEventUids.has(op(e))}saveEventToCache(e){this.cachedEventUids.add(op(e)),this.lastProcessedEventTime=Date.now()}}function op(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function K_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function y6(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return K_(t);default:return!1}}/**
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
 */async function b6(t,e={}){return $i(t,"GET","/v1/projects",e)}/**
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
 */const x6=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,w6=/^https?/;async function C6(t){if(t.config.emulator)return;const{authorizedDomains:e}=await b6(t);for(const n of e)try{if(I6(n))return}catch{}ln(t,"unauthorized-domain")}function I6(t){const e=Dc(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!w6.test(n))return!1;if(x6.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const E6=new Zr(3e4,6e4);function ap(){const t=rn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function S6(t){return new Promise((e,n)=>{var s,i,r;function o(){ap(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ap(),n(Bt(t,"network-request-failed"))},timeout:E6.get()})}if(!((i=(s=rn().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=rn().gapi)===null||r===void 0)&&r.load)o();else{const a=OT("iframefcb");return rn()[a]=()=>{gapi.load?o():n(Bt(t,"network-request-failed"))},PT(`${NT()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Eo=null,e})}let Eo=null;function T6(t){return Eo=Eo||S6(t),Eo}/**
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
 */const k6=new Zr(5e3,15e3),A6="__/auth/iframe",R6="emulator/auth/iframe",P6={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},N6=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function O6(t){const e=t.config;se(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?hf(e,R6):`https://${t.config.authDomain}/${A6}`,s={apiKey:e.apiKey,appName:t.name,v:Mi},i=N6.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Oi(s).slice(1)}`}async function M6(t){const e=await T6(t),n=rn().gapi;return se(n,t,"internal-error"),e.open({where:document.body,url:O6(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:P6,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Bt(t,"network-request-failed"),a=rn().setTimeout(()=>{r(o)},k6.get());function l(){rn().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const D6={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},L6=500,F6=600,$6="_blank",U6="http://localhost";class lp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function V6(t,e,n,s=L6,i=F6){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},D6),{width:s.toString(),height:i.toString(),top:r,left:o}),c=ut().toLowerCase();n&&(a=T_(c)?$6:n),E_(c)&&(e=e||U6,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[h,y])=>`${d}${h}=${y},`,"");if(CT(c)&&a!=="_self")return B6(e||"",a),new lp(null);const f=window.open(e||"",a,u);se(f,t,"popup-blocked");try{f.focus()}catch{}return new lp(f)}function B6(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const j6="__/auth/handler",H6="emulator/auth/handler",W6=encodeURIComponent("fac");async function cp(t,e,n,s,i,r){se(t.config.authDomain,t,"auth-domain-config-required"),se(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Mi,eventId:i};if(e instanceof vf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",gc(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,f]of Object.entries({}))o[u]=f}if(e instanceof eo){const u=e.getScopes().filter(f=>f!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${W6}=${encodeURIComponent(l)}`:"";return`${z6(t)}?${Oi(a).slice(1)}${c}`}function z6({config:t}){return t.emulator?hf(t,H6):`https://${t.authDomain}/${j6}`}/**
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
 */const Pl="webStorageSupport";class G6{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=V_,this._completeRedirectFn=g6,this._overrideRedirectResult=h6}async _openPopup(e,n,s,i){var r;Rn((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await cp(e,n,s,Dc(),i);return V6(e,o,yf())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await cp(e,n,s,Dc(),i);return QT(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Rn(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await M6(e),s=new v6(e);return n.register("authEvent",i=>(se(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Pl,{type:Pl},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Pl];o!==void 0&&n(!!o),ln(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=C6(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return N_()||S_()||gf()}}const K6=G6;var up="@firebase/auth",fp="1.9.0";/**
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
 */class q6{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){se(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Y6(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Q6(t){wi(new Vs("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;se(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:O_(t)},c=new AT(s,i,r,l);return DT(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),wi(new Vs("auth-internal",e=>{const n=za(e.getProvider("auth").getImmediate());return(s=>new q6(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ss(up,fp,Y6(t)),ss(up,fp,"esm2017")}/**
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
 */const X6=5*60,J6=Gg("authIdTokenMaxAge")||X6;let dp=null;const Z6=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>J6)return;const i=n==null?void 0:n.token;dp!==i&&(dp=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function $c(t=Jg()){const e=ku(t,"auth");if(e.isInitialized())return e.getImmediate();const n=MT(t,{popupRedirectResolver:K6,persistence:[r6,KT,V_]}),s=Gg("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=Z6(r.toString());WT(n,o,()=>o(n.currentUser)),HT(n,a=>o(a))}}const i=Wg("auth");return i&&LT(n,`http://${i}`),n}function e3(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}RT({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=Bt("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",e3().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Q6("Browser");const t3={apiKey:"AIzaSyDReE9mw5-7NXaoCIdc4sVNfF_EgqxW93s",authDomain:"donghuaapi.firebaseapp.com",databaseURL:"https://donghuaapi-default-rtdb.firebaseio.com",projectId:"donghuaapi",storageBucket:"donghuaapi.firebasestorage.app",messagingSenderId:"621954846745",appId:"1:621954846745:web:2ce4962cbe1836a81c9a88",measurementId:"G-RM00X5VKRN"},q_=Xg(t3);$c(q_);const de=g_(q_),Wt=_s("load",()=>{const t=ae(!1),e=xu();return e.beforeEach((n,s,i)=>{t.value=!0,setTimeout(()=>i(),100)}),e.afterEach(()=>{setTimeout(()=>{t.value=!1},100)}),{loading:t}}),n3={};var Uc=null;function s3(t){try{return crypto.getRandomValues(new Uint8Array(t))}catch{}try{return n3.randomBytes(t)}catch{}if(!Uc)throw Error("Neither WebCryptoAPI nor a crypto module is available. Use bcrypt.setRandomFallback to set an alternative");return Uc(t)}function i3(t){Uc=t}function xf(t,e){if(t=t||wf,typeof t!="number")throw Error("Illegal arguments: "+typeof t+", "+typeof e);t<4?t=4:t>31&&(t=31);var n=[];return n.push("$2b$"),t<10&&n.push("0"),n.push(t.toString()),n.push("$"),n.push(ca(s3(Fr),Fr)),n.join("")}function Y_(t,e,n){if(typeof e=="function"&&(n=e,e=void 0),typeof t=="function"&&(n=t,t=void 0),typeof t>"u")t=wf;else if(typeof t!="number")throw Error("illegal arguments: "+typeof t);function s(i){Ft(function(){try{i(null,xf(t))}catch(r){i(r)}})}if(n){if(typeof n!="function")throw Error("Illegal callback: "+typeof n);s(n)}else return new Promise(function(i,r){s(function(o,a){if(o){r(o);return}i(a)})})}function Q_(t,e){if(typeof e>"u"&&(e=wf),typeof e=="number"&&(e=xf(e)),typeof t!="string"||typeof e!="string")throw Error("Illegal arguments: "+typeof t+", "+typeof e);return Vc(t,e)}function X_(t,e,n,s){function i(r){typeof t=="string"&&typeof e=="number"?Y_(e,function(o,a){Vc(t,a,r,s)}):typeof t=="string"&&typeof e=="string"?Vc(t,e,r,s):Ft(r.bind(this,Error("Illegal arguments: "+typeof t+", "+typeof e)))}if(n){if(typeof n!="function")throw Error("Illegal callback: "+typeof n);i(n)}else return new Promise(function(r,o){i(function(a,l){if(a){o(a);return}r(l)})})}function J_(t,e){for(var n=t.length^e.length,s=0;s<t.length;++s)n|=t.charCodeAt(s)^e.charCodeAt(s);return n===0}function r3(t,e){if(typeof t!="string"||typeof e!="string")throw Error("Illegal arguments: "+typeof t+", "+typeof e);return e.length!==60?!1:J_(Q_(t,e.substring(0,e.length-31)),e)}function o3(t,e,n,s){function i(r){if(typeof t!="string"||typeof e!="string"){Ft(r.bind(this,Error("Illegal arguments: "+typeof t+", "+typeof e)));return}if(e.length!==60){Ft(r.bind(this,null,!1));return}X_(t,e.substring(0,29),function(o,a){o?r(o):r(null,J_(a,e))},s)}if(n){if(typeof n!="function")throw Error("Illegal callback: "+typeof n);i(n)}else return new Promise(function(r,o){i(function(a,l){if(a){o(a);return}r(l)})})}function a3(t){if(typeof t!="string")throw Error("Illegal arguments: "+typeof t);return parseInt(t.split("$")[2],10)}function l3(t){if(typeof t!="string")throw Error("Illegal arguments: "+typeof t);if(t.length!==60)throw Error("Illegal hash length: "+t.length+" != 60");return t.substring(0,29)}function c3(t){if(typeof t!="string")throw Error("Illegal arguments: "+typeof t);return Z_(t)>72}var Ft=typeof process<"u"&&process&&typeof process.nextTick=="function"?typeof setImmediate=="function"?setImmediate:process.nextTick:setTimeout;function Z_(t){for(var e=0,n=0,s=0;s<t.length;++s)n=t.charCodeAt(s),n<128?e+=1:n<2048?e+=2:(n&64512)===55296&&(t.charCodeAt(s+1)&64512)===56320?(++s,e+=4):e+=3;return e}function u3(t){for(var e=0,n,s,i=new Array(Z_(t)),r=0,o=t.length;r<o;++r)n=t.charCodeAt(r),n<128?i[e++]=n:n<2048?(i[e++]=n>>6|192,i[e++]=n&63|128):(n&64512)===55296&&((s=t.charCodeAt(r+1))&64512)===56320?(n=65536+((n&1023)<<10)+(s&1023),++r,i[e++]=n>>18|240,i[e++]=n>>12&63|128,i[e++]=n>>6&63|128,i[e++]=n&63|128):(i[e++]=n>>12|224,i[e++]=n>>6&63|128,i[e++]=n&63|128);return i}var Zs="./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),jn=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,54,55,56,57,58,59,60,61,62,63,-1,-1,-1,-1,-1,-1,-1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,-1,-1,-1,-1,-1,-1,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,-1,-1,-1,-1,-1];function ca(t,e){var n=0,s=[],i,r;if(e<=0||e>t.length)throw Error("Illegal len: "+e);for(;n<e;){if(i=t[n++]&255,s.push(Zs[i>>2&63]),i=(i&3)<<4,n>=e){s.push(Zs[i&63]);break}if(r=t[n++]&255,i|=r>>4&15,s.push(Zs[i&63]),i=(r&15)<<2,n>=e){s.push(Zs[i&63]);break}r=t[n++]&255,i|=r>>6&3,s.push(Zs[i&63]),s.push(Zs[r&63])}return s.join("")}function ev(t,e){var n=0,s=t.length,i=0,r=[],o,a,l,c,u,f;if(e<=0)throw Error("Illegal len: "+e);for(;n<s-1&&i<e&&(f=t.charCodeAt(n++),o=f<jn.length?jn[f]:-1,f=t.charCodeAt(n++),a=f<jn.length?jn[f]:-1,!(o==-1||a==-1||(u=o<<2>>>0,u|=(a&48)>>4,r.push(String.fromCharCode(u)),++i>=e||n>=s)||(f=t.charCodeAt(n++),l=f<jn.length?jn[f]:-1,l==-1)||(u=(a&15)<<4>>>0,u|=(l&60)>>2,r.push(String.fromCharCode(u)),++i>=e||n>=s)));)f=t.charCodeAt(n++),c=f<jn.length?jn[f]:-1,u=(l&3)<<6>>>0,u|=c,r.push(String.fromCharCode(u)),++i;var d=[];for(n=0;n<i;n++)d.push(r[n].charCodeAt(0));return d}var Fr=16,wf=10,f3=16,d3=100,hp=[608135816,2242054355,320440878,57701188,2752067618,698298832,137296536,3964562569,1160258022,953160567,3193202383,887688300,3232508343,3380367581,1065670069,3041331479,2450970073,2306472731],pp=[3509652390,2564797868,805139163,3491422135,3101798381,1780907670,3128725573,4046225305,614570311,3012652279,134345442,2240740374,1667834072,1901547113,2757295779,4103290238,227898511,1921955416,1904987480,2182433518,2069144605,3260701109,2620446009,720527379,3318853667,677414384,3393288472,3101374703,2390351024,1614419982,1822297739,2954791486,3608508353,3174124327,2024746970,1432378464,3864339955,2857741204,1464375394,1676153920,1439316330,715854006,3033291828,289532110,2706671279,2087905683,3018724369,1668267050,732546397,1947742710,3462151702,2609353502,2950085171,1814351708,2050118529,680887927,999245976,1800124847,3300911131,1713906067,1641548236,4213287313,1216130144,1575780402,4018429277,3917837745,3693486850,3949271944,596196993,3549867205,258830323,2213823033,772490370,2760122372,1774776394,2652871518,566650946,4142492826,1728879713,2882767088,1783734482,3629395816,2517608232,2874225571,1861159788,326777828,3124490320,2130389656,2716951837,967770486,1724537150,2185432712,2364442137,1164943284,2105845187,998989502,3765401048,2244026483,1075463327,1455516326,1322494562,910128902,469688178,1117454909,936433444,3490320968,3675253459,1240580251,122909385,2157517691,634681816,4142456567,3825094682,3061402683,2540495037,79693498,3249098678,1084186820,1583128258,426386531,1761308591,1047286709,322548459,995290223,1845252383,2603652396,3431023940,2942221577,3202600964,3727903485,1712269319,422464435,3234572375,1170764815,3523960633,3117677531,1434042557,442511882,3600875718,1076654713,1738483198,4213154764,2393238008,3677496056,1014306527,4251020053,793779912,2902807211,842905082,4246964064,1395751752,1040244610,2656851899,3396308128,445077038,3742853595,3577915638,679411651,2892444358,2354009459,1767581616,3150600392,3791627101,3102740896,284835224,4246832056,1258075500,768725851,2589189241,3069724005,3532540348,1274779536,3789419226,2764799539,1660621633,3471099624,4011903706,913787905,3497959166,737222580,2514213453,2928710040,3937242737,1804850592,3499020752,2949064160,2386320175,2390070455,2415321851,4061277028,2290661394,2416832540,1336762016,1754252060,3520065937,3014181293,791618072,3188594551,3933548030,2332172193,3852520463,3043980520,413987798,3465142937,3030929376,4245938359,2093235073,3534596313,375366246,2157278981,2479649556,555357303,3870105701,2008414854,3344188149,4221384143,3956125452,2067696032,3594591187,2921233993,2428461,544322398,577241275,1471733935,610547355,4027169054,1432588573,1507829418,2025931657,3646575487,545086370,48609733,2200306550,1653985193,298326376,1316178497,3007786442,2064951626,458293330,2589141269,3591329599,3164325604,727753846,2179363840,146436021,1461446943,4069977195,705550613,3059967265,3887724982,4281599278,3313849956,1404054877,2845806497,146425753,1854211946,1266315497,3048417604,3681880366,3289982499,290971e4,1235738493,2632868024,2414719590,3970600049,1771706367,1449415276,3266420449,422970021,1963543593,2690192192,3826793022,1062508698,1531092325,1804592342,2583117782,2714934279,4024971509,1294809318,4028980673,1289560198,2221992742,1669523910,35572830,157838143,1052438473,1016535060,1802137761,1753167236,1386275462,3080475397,2857371447,1040679964,2145300060,2390574316,1461121720,2956646967,4031777805,4028374788,33600511,2920084762,1018524850,629373528,3691585981,3515945977,2091462646,2486323059,586499841,988145025,935516892,3367335476,2599673255,2839830854,265290510,3972581182,2759138881,3795373465,1005194799,847297441,406762289,1314163512,1332590856,1866599683,4127851711,750260880,613907577,1450815602,3165620655,3734664991,3650291728,3012275730,3704569646,1427272223,778793252,1343938022,2676280711,2052605720,1946737175,3164576444,3914038668,3967478842,3682934266,1661551462,3294938066,4011595847,840292616,3712170807,616741398,312560963,711312465,1351876610,322626781,1910503582,271666773,2175563734,1594956187,70604529,3617834859,1007753275,1495573769,4069517037,2549218298,2663038764,504708206,2263041392,3941167025,2249088522,1514023603,1998579484,1312622330,694541497,2582060303,2151582166,1382467621,776784248,2618340202,3323268794,2497899128,2784771155,503983604,4076293799,907881277,423175695,432175456,1378068232,4145222326,3954048622,3938656102,3820766613,2793130115,2977904593,26017576,3274890735,3194772133,1700274565,1756076034,4006520079,3677328699,720338349,1533947780,354530856,688349552,3973924725,1637815568,332179504,3949051286,53804574,2852348879,3044236432,1282449977,3583942155,3416972820,4006381244,1617046695,2628476075,3002303598,1686838959,431878346,2686675385,1700445008,1080580658,1009431731,832498133,3223435511,2605976345,2271191193,2516031870,1648197032,4164389018,2548247927,300782431,375919233,238389289,3353747414,2531188641,2019080857,1475708069,455242339,2609103871,448939670,3451063019,1395535956,2413381860,1841049896,1491858159,885456874,4264095073,4001119347,1565136089,3898914787,1108368660,540939232,1173283510,2745871338,3681308437,4207628240,3343053890,4016749493,1699691293,1103962373,3625875870,2256883143,3830138730,1031889488,3479347698,1535977030,4236805024,3251091107,2132092099,1774941330,1199868427,1452454533,157007616,2904115357,342012276,595725824,1480756522,206960106,497939518,591360097,863170706,2375253569,3596610801,1814182875,2094937945,3421402208,1082520231,3463918190,2785509508,435703966,3908032597,1641649973,2842273706,3305899714,1510255612,2148256476,2655287854,3276092548,4258621189,236887753,3681803219,274041037,1734335097,3815195456,3317970021,1899903192,1026095262,4050517792,356393447,2410691914,3873677099,3682840055,3913112168,2491498743,4132185628,2489919796,1091903735,1979897079,3170134830,3567386728,3557303409,857797738,1136121015,1342202287,507115054,2535736646,337727348,3213592640,1301675037,2528481711,1895095763,1721773893,3216771564,62756741,2142006736,835421444,2531993523,1442658625,3659876326,2882144922,676362277,1392781812,170690266,3921047035,1759253602,3611846912,1745797284,664899054,1329594018,3901205900,3045908486,2062866102,2865634940,3543621612,3464012697,1080764994,553557557,3656615353,3996768171,991055499,499776247,1265440854,648242737,3940784050,980351604,3713745714,1749149687,3396870395,4211799374,3640570775,1161844396,3125318951,1431517754,545492359,4268468663,3499529547,1437099964,2702547544,3433638243,2581715763,2787789398,1060185593,1593081372,2418618748,4260947970,69676912,2159744348,86519011,2512459080,3838209314,1220612927,3339683548,133810670,1090789135,1078426020,1569222167,845107691,3583754449,4072456591,1091646820,628848692,1613405280,3757631651,526609435,236106946,48312990,2942717905,3402727701,1797494240,859738849,992217954,4005476642,2243076622,3870952857,3732016268,765654824,3490871365,2511836413,1685915746,3888969200,1414112111,2273134842,3281911079,4080962846,172450625,2569994100,980381355,4109958455,2819808352,2716589560,2568741196,3681446669,3329971472,1835478071,660984891,3704678404,4045999559,3422617507,3040415634,1762651403,1719377915,3470491036,2693910283,3642056355,3138596744,1364962596,2073328063,1983633131,926494387,3423689081,2150032023,4096667949,1749200295,3328846651,309677260,2016342300,1779581495,3079819751,111262694,1274766160,443224088,298511866,1025883608,3806446537,1145181785,168956806,3641502830,3584813610,1689216846,3666258015,3200248200,1692713982,2646376535,4042768518,1618508792,1610833997,3523052358,4130873264,2001055236,3610705100,2202168115,4028541809,2961195399,1006657119,2006996926,3186142756,1430667929,3210227297,1314452623,4074634658,4101304120,2273951170,1399257539,3367210612,3027628629,1190975929,2062231137,2333990788,2221543033,2438960610,1181637006,548689776,2362791313,3372408396,3104550113,3145860560,296247880,1970579870,3078560182,3769228297,1714227617,3291629107,3898220290,166772364,1251581989,493813264,448347421,195405023,2709975567,677966185,3703036547,1463355134,2715995803,1338867538,1343315457,2802222074,2684532164,233230375,2599980071,2000651841,3277868038,1638401717,4028070440,3237316320,6314154,819756386,300326615,590932579,1405279636,3267499572,3150704214,2428286686,3959192993,3461946742,1862657033,1266418056,963775037,2089974820,2263052895,1917689273,448879540,3550394620,3981727096,150775221,3627908307,1303187396,508620638,2975983352,2726630617,1817252668,1876281319,1457606340,908771278,3720792119,3617206836,2455994898,1729034894,1080033504,976866871,3556439503,2881648439,1522871579,1555064734,1336096578,3548522304,2579274686,3574697629,3205460757,3593280638,3338716283,3079412587,564236357,2993598910,1781952180,1464380207,3163844217,3332601554,1699332808,1393555694,1183702653,3581086237,1288719814,691649499,2847557200,2895455976,3193889540,2717570544,1781354906,1676643554,2592534050,3230253752,1126444790,2770207658,2633158820,2210423226,2615765581,2414155088,3127139286,673620729,2805611233,1269405062,4015350505,3341807571,4149409754,1057255273,2012875353,2162469141,2276492801,2601117357,993977747,3918593370,2654263191,753973209,36408145,2530585658,25011837,3520020182,2088578344,530523599,2918365339,1524020338,1518925132,3760827505,3759777254,1202760957,3985898139,3906192525,674977740,4174734889,2031300136,2019492241,3983892565,4153806404,3822280332,352677332,2297720250,60907813,90501309,3286998549,1016092578,2535922412,2839152426,457141659,509813237,4120667899,652014361,1966332200,2975202805,55981186,2327461051,676427537,3255491064,2882294119,3433927263,1307055953,942726286,933058658,2468411793,3933900994,4215176142,1361170020,2001714738,2830558078,3274259782,1222529897,1679025792,2729314320,3714953764,1770335741,151462246,3013232138,1682292957,1483529935,471910574,1539241949,458788160,3436315007,1807016891,3718408830,978976581,1043663428,3165965781,1927990952,4200891579,2372276910,3208408903,3533431907,1412390302,2931980059,4132332400,1947078029,3881505623,4168226417,2941484381,1077988104,1320477388,886195818,18198404,3786409e3,2509781533,112762804,3463356488,1866414978,891333506,18488651,661792760,1628790961,3885187036,3141171499,876946877,2693282273,1372485963,791857591,2686433993,3759982718,3167212022,3472953795,2716379847,445679433,3561995674,3504004811,3574258232,54117162,3331405415,2381918588,3769707343,4154350007,1140177722,4074052095,668550556,3214352940,367459370,261225585,2610173221,4209349473,3468074219,3265815641,314222801,3066103646,3808782860,282218597,3406013506,3773591054,379116347,1285071038,846784868,2669647154,3771962079,3550491691,2305946142,453669953,1268987020,3317592352,3279303384,3744833421,2610507566,3859509063,266596637,3847019092,517658769,3462560207,3443424879,370717030,4247526661,2224018117,4143653529,4112773975,2788324899,2477274417,1456262402,2901442914,1517677493,1846949527,2295493580,3734397586,2176403920,1280348187,1908823572,3871786941,846861322,1172426758,3287448474,3383383037,1655181056,3139813346,901632758,1897031941,2986607138,3066810236,3447102507,1393639104,373351379,950779232,625454576,3124240540,4148612726,2007998917,544563296,2244738638,2330496472,2058025392,1291430526,424198748,50039436,29584100,3605783033,2429876329,2791104160,1057563949,3255363231,3075367218,3463963227,1469046755,985887462],tv=[1332899944,1700884034,1701343084,1684370003,1668446532,1869963892];function $r(t,e,n,s){var i,r=t[e],o=t[e+1];return r^=n[0],i=s[r>>>24],i+=s[256|r>>16&255],i^=s[512|r>>8&255],i+=s[768|r&255],o^=i^n[1],i=s[o>>>24],i+=s[256|o>>16&255],i^=s[512|o>>8&255],i+=s[768|o&255],r^=i^n[2],i=s[r>>>24],i+=s[256|r>>16&255],i^=s[512|r>>8&255],i+=s[768|r&255],o^=i^n[3],i=s[o>>>24],i+=s[256|o>>16&255],i^=s[512|o>>8&255],i+=s[768|o&255],r^=i^n[4],i=s[r>>>24],i+=s[256|r>>16&255],i^=s[512|r>>8&255],i+=s[768|r&255],o^=i^n[5],i=s[o>>>24],i+=s[256|o>>16&255],i^=s[512|o>>8&255],i+=s[768|o&255],r^=i^n[6],i=s[r>>>24],i+=s[256|r>>16&255],i^=s[512|r>>8&255],i+=s[768|r&255],o^=i^n[7],i=s[o>>>24],i+=s[256|o>>16&255],i^=s[512|o>>8&255],i+=s[768|o&255],r^=i^n[8],i=s[r>>>24],i+=s[256|r>>16&255],i^=s[512|r>>8&255],i+=s[768|r&255],o^=i^n[9],i=s[o>>>24],i+=s[256|o>>16&255],i^=s[512|o>>8&255],i+=s[768|o&255],r^=i^n[10],i=s[r>>>24],i+=s[256|r>>16&255],i^=s[512|r>>8&255],i+=s[768|r&255],o^=i^n[11],i=s[o>>>24],i+=s[256|o>>16&255],i^=s[512|o>>8&255],i+=s[768|o&255],r^=i^n[12],i=s[r>>>24],i+=s[256|r>>16&255],i^=s[512|r>>8&255],i+=s[768|r&255],o^=i^n[13],i=s[o>>>24],i+=s[256|o>>16&255],i^=s[512|o>>8&255],i+=s[768|o&255],r^=i^n[14],i=s[r>>>24],i+=s[256|r>>16&255],i^=s[512|r>>8&255],i+=s[768|r&255],o^=i^n[15],i=s[o>>>24],i+=s[256|o>>16&255],i^=s[512|o>>8&255],i+=s[768|o&255],r^=i^n[16],t[e]=o^n[f3+1],t[e+1]=r,t}function ni(t,e){for(var n=0,s=0;n<4;++n)s=s<<8|t[e]&255,e=(e+1)%t.length;return{key:s,offp:e}}function mp(t,e,n){for(var s=0,i=[0,0],r=e.length,o=n.length,a,l=0;l<r;l++)a=ni(t,s),s=a.offp,e[l]=e[l]^a.key;for(l=0;l<r;l+=2)i=$r(i,0,e,n),e[l]=i[0],e[l+1]=i[1];for(l=0;l<o;l+=2)i=$r(i,0,e,n),n[l]=i[0],n[l+1]=i[1]}function h3(t,e,n,s){for(var i=0,r=[0,0],o=n.length,a=s.length,l,c=0;c<o;c++)l=ni(e,i),i=l.offp,n[c]=n[c]^l.key;for(i=0,c=0;c<o;c+=2)l=ni(t,i),i=l.offp,r[0]^=l.key,l=ni(t,i),i=l.offp,r[1]^=l.key,r=$r(r,0,n,s),n[c]=r[0],n[c+1]=r[1];for(c=0;c<a;c+=2)l=ni(t,i),i=l.offp,r[0]^=l.key,l=ni(t,i),i=l.offp,r[1]^=l.key,r=$r(r,0,n,s),s[c]=r[0],s[c+1]=r[1]}function gp(t,e,n,s,i){var r=tv.slice(),o=r.length,a;if(n<4||n>31)if(a=Error("Illegal number of rounds (4-31): "+n),s){Ft(s.bind(this,a));return}else throw a;if(e.length!==Fr)if(a=Error("Illegal salt length: "+e.length+" != "+Fr),s){Ft(s.bind(this,a));return}else throw a;n=1<<n>>>0;var l,c,u=0,f;typeof Int32Array=="function"?(l=new Int32Array(hp),c=new Int32Array(pp)):(l=hp.slice(),c=pp.slice()),h3(e,t,l,c);function d(){if(i&&i(u/n),u<n)for(var y=Date.now();u<n&&(u=u+1,mp(t,l,c),mp(e,l,c),!(Date.now()-y>d3)););else{for(u=0;u<64;u++)for(f=0;f<o>>1;f++)$r(r,f<<1,l,c);var _=[];for(u=0;u<o;u++)_.push((r[u]>>24&255)>>>0),_.push((r[u]>>16&255)>>>0),_.push((r[u]>>8&255)>>>0),_.push((r[u]&255)>>>0);if(s){s(null,_);return}else return _}s&&Ft(d)}if(typeof s<"u")d();else for(var h;;)if(typeof(h=d())<"u")return h||[]}function Vc(t,e,n,s){var i;if(typeof t!="string"||typeof e!="string")if(i=Error("Invalid string / salt: Not a string"),n){Ft(n.bind(this,i));return}else throw i;var r,o;if(e.charAt(0)!=="$"||e.charAt(1)!=="2")if(i=Error("Invalid salt version: "+e.substring(0,2)),n){Ft(n.bind(this,i));return}else throw i;if(e.charAt(2)==="$")r="\0",o=3;else{if(r=e.charAt(2),r!=="a"&&r!=="b"&&r!=="y"||e.charAt(3)!=="$")if(i=Error("Invalid salt revision: "+e.substring(2,4)),n){Ft(n.bind(this,i));return}else throw i;o=4}if(e.charAt(o+2)>"$")if(i=Error("Missing salt rounds"),n){Ft(n.bind(this,i));return}else throw i;var a=parseInt(e.substring(o,o+1),10)*10,l=parseInt(e.substring(o+1,o+2),10),c=a+l,u=e.substring(o+3,o+25);t+=r>="a"?"\0":"";var f=u3(t),d=ev(u,Fr);function h(y){var _=[];return _.push("$2"),r>="a"&&_.push(r),_.push("$"),c<10&&_.push("0"),_.push(c.toString()),_.push("$"),_.push(ca(d,d.length)),_.push(ca(y,tv.length*4-1)),_.join("")}if(typeof n>"u")return h(gp(f,d,c));gp(f,d,c,function(y,_){y?n(y,null):n(null,h(_))},s)}function p3(t,e){return ca(t,e)}function m3(t,e){return ev(t,e)}const _p={setRandomFallback:i3,genSaltSync:xf,genSalt:Y_,hashSync:Q_,hash:X_,compareSync:r3,compare:o3,getRounds:a3,getSalt:l3,truncates:c3,encodeBase64:p3,decodeBase64:m3},un=_s("login",()=>{const t=xu(),e=ae(""),n=ae(""),s=ae(""),i=ae(""),r=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,o=ae([]),a=ae(null),l=ys(),c=async()=>{try{const S=await Ot(fe(de,"users"));if(S.exists()){const L=S.val();o.value=Object.entries(L).map(([P,j])=>({firebaseId:P,...j}))}}catch(S){console.error("❌ Lỗi khi lấy dữ liệu users:",S)}},u=async S=>{const L=Date.now().toString(),P=navigator.userAgent;return await Yn(fe(de,`users/${S}/sessions/${L}`),{device:P,lastLogin:new Date().toISOString()}),L},f=async()=>{if(!e.value.trim()||!n.value.trim()){m("Vui lòng nhập tài khoản / mật khẩu");return}if(!r.test(e.value)){m("Email không hợp lệ");return}const S=o.value.find(P=>P.email===e.value.trim());if(!S){m("Tài khoản không tồn tại");return}if(!await _p.compare(n.value.trim(),S.passwordHash)){m("Sai mật khẩu");return}m("Đăng nhập thành công");try{const P=await u(S.firebaseId);localStorage.setItem("sessionId",P),localStorage.setItem("userId",S.firebaseId),a.value=S,await t.push(S.role==="admin"?"/admin/danh-muc":"/")}catch(P){console.error("Lỗi khi lưu session:",P),m("Lỗi khi đăng nhập, vui lòng thử lại")}},d=async()=>{const S=localStorage.getItem("sessionId"),L=localStorage.getItem("userId");if(!S||!L){a.value=null;return}try{if((await Ot(fe(de,`users/${L}/sessions/${S}`))).exists()){const j=await Ot(fe(de,`users/${L}`));j.exists()?a.value={firebaseId:L,...j.val()}:(localStorage.removeItem("sessionId"),localStorage.removeItem("userId"),a.value=null)}else localStorage.removeItem("sessionId"),localStorage.removeItem("userId"),a.value=null}catch(P){console.error("Lỗi khi kiểm tra session:",P)}},h=async()=>{if(!e.value.trim()){m("Vui lòng nhập email");return}if(!r.test(e.value)){m("Email không hợp lệ");return}if(!n.value.trim()||!s.value.trim()){m("Vui lòng nhập mật khẩu và xác nhận mật khẩu");return}if(n.value.length<6){m("Mật khẩu phải có ít nhất 6 ký tự");return}if(n.value!==s.value){m("Vui lòng nhập trùng mật khẩu");return}try{const S=await Ot(fe(de,"users"));if(S.exists()){const j=S.val();if(Object.values(j).some(U=>U.email===e.value.trim())){m("Tài khoản đã tồn tại");return}}const L=await _p.hash(n.value.trim(),10),P={email:e.value.trim(),passwordHash:L,role:"user",sessions:{},favorites:[]};await ki(fe(de,"users"),P),m("Đăng ký thành công"),await c()}catch(S){console.error("Lỗi khi đăng ký:",S),m("Lỗi khi đăng ký, vui lòng thử lại")}},y=async()=>{const S=localStorage.getItem("sessionId"),L=localStorage.getItem("userId");if(S&&L)try{await Yn(fe(de,`users/${L}/sessions/${S}`),null),localStorage.removeItem("sessionId"),localStorage.removeItem("userId"),a.value=null,await t.push("/")}catch(P){console.error("Lỗi khi đăng xuất:",P)}},_=async()=>{const S=localStorage.getItem("userId");if(S)try{await Yn(fe(de,`users/${S}/sessions`),{}),localStorage.removeItem("sessionId"),localStorage.removeItem("userId"),a.value=null,await t.push("/")}catch(L){console.error("Lỗi khi đăng xuất tất cả thiết bị:",L)}};let w=null;const m=S=>{i.value=S,w&&clearTimeout(w),w=setTimeout(()=>{i.value=""},1e3)},b=async S=>{var P,j;if(!a.value){m("Vui lòng đăng nhập để thêm vào yêu thích!");return}const L=localStorage.getItem("userId");if(L)try{let ie=a.value.favorites||[];const U=ie.includes(S);await yt(fe(de,`users/${L}`),{favorites:U?ie.filter(be=>be!==S):[...ie,S]}),await yt(fe(de,`movies/${S}`),{favorite:U?Math.max(0,(((P=l.movies.find(be=>be.firebaseId===S))==null?void 0:P.favorite)||0)-1):(((j=l.movies.find(be=>be.firebaseId===S))==null?void 0:j.favorite)||0)+1}),U?a.value.favorites=ie.filter(be=>be!==S):a.value.favorites.push(S);const ce=l.movies.find(be=>be.firebaseId===S);ce&&(ce.favorite=U?ce.favorite-1:ce.favorite+1)}catch(ie){console.error("Lỗi khi cập nhật danh sách yêu thích:",ie),m("Đã xảy ra lỗi, vui lòng thử lại")}};return Nt(()=>{c(),d()}),{fetchUsers:c,getUserAvatar:S=>{const L=o.value.find(P=>P.firebaseId==S);return L==null?void 0:L.avatarUrl},getUserName:S=>{const L=o.value.find(P=>P.firebaseId==S);return L==null?void 0:L.name},user:o,currentUser:a,checkLogin:f,checkRegister:h,emailValue:e,passValue:n,checkPassValue:s,alert:i,logout:y,logoutAllDevices:_,toggleFavorite:b,googleSignIn:async()=>{const S=$c(),L=new bn;try{const j=(await rp(S,L)).user,ie=await Ot(fe(de,`users/${j.uid}`));let U=ie.val();ie.exists()||(U={email:j.email,name:j.displayName,avatarUrl:j.photoURL||"",role:"user",sessions:{},favorites:[]},await Yn(fe(de,`users/${j.uid}`),U));const ce=await u(j.uid);localStorage.setItem("sessionId",ce),localStorage.setItem("userId",j.uid),a.value={firebaseId:j.uid,...U},await zs(),await t.push(U.role==="admin"?"/admin/danh-muc":"/")}catch(P){console.error("Lỗi khi đăng nhập Google:",P)}},facebookSignIn:async()=>{const S=$c(),L=new yn;try{const j=(await rp(S,L)).user;(await Ot(fe(de,`users/${j.uid}`))).exists()||await Yn(fe(de,`users/${j.uid}`),{email:j.email,name:j.displayName,avatarUrl:j.photoURL||"",role:"user",sessions:{},favorites:[]});const U=await u(j.uid);localStorage.setItem("sessionId",U),localStorage.setItem("userId",j.uid),a.value={firebaseId:j.uid,email:j.email,name:j.displayName,avatarUrl:j.photoURL||""},m("Đăng nhập Facebook thành công"),await t.push("/")}catch(P){console.error("Lỗi khi đăng nhập Facebook:",P),m("Đăng nhập Facebook thất bại")}}}}),ys=_s("Movie",()=>{const t=ae([]),e=Wt(),n=un(),s=async()=>{try{e.loading=!0;const _=await Ot(fe(de,"movies"));_.exists()&&(t.value=Object.entries(_.val()).map(([w,m])=>({...m,firebaseId:w})).sort((w,m)=>m.timestamp-w.timestamp))}catch(_){console.error("Lỗi khi lấy dữ liệu:",_)}finally{e.loading=!1}},i=async(_,w,m,b,R)=>{try{const O=ki(fe(de,"movies")),G={name:_,genre:w,description:m,favorite:0,image:b,day:R,timestamp:Date.now()};await yt(O,G),t.value.unshift({...G,firebaseId:O.key})}catch(O){console.error("Lỗi khi thêm phim:",O)}},r=async(_,w)=>{try{if(!(await Ot(fe(de,`movies/${_}`))).exists())return;await yt(fe(de,`movies/${_}`),w);const b=t.value.findIndex(R=>R.firebaseId===_);b!==-1&&(t.value[b]={...t.value[b],...w})}catch(m){console.error("Lỗi khi cập nhật phim:",m)}},o=async _=>{try{await di(fe(de,`movies/${_}`)),t.value=t.value.filter(w=>w.firebaseId!==_)}catch(w){console.error("Lỗi khi xóa phim:",w)}},a=async(_,w,m)=>{try{const b=fe(de,`movies/${_}/chapters/${w}`);await yt(b,{url:m});const R=fe(de,`movies/${_}`),O=await Ot(R);if(O.exists()){const G=O.val();await yt(R,{...G,timestamp:Date.now()}),s()}}catch(b){console.error("Lỗi khi thêm tập:",b)}},l=async()=>{if(!selectedMovie.value||newChap.value.tap===""||!newChap.value.url.trim()){alert("Vui lòng nhập đầy đủ thông tin!");return}await movieStore.addChapToMovie(selectedMovie.value.firebaseId,newChap.value.tap,newChap.value.url),newChap.value={tap:Number(newChap.value.tap)+1,url:""}},c=async(_,w,m)=>{try{const b=fe(de,`movies/${_}/chapters/${w}`);await yt(b,{url:m});const R=t.value.find(O=>O.firebaseId===_);R&&(R.chapters[w].url=m)}catch(b){console.error("Lỗi khi cập nhật tập:",b)}},u=async(_,w)=>{try{await di(fe(de,`movies/${_}/chapters/${w}`));const m=t.value.find(b=>b.firebaseId===_);m&&delete m.chapters[w]}catch(m){console.error("Lỗi khi xóa tập:",m)}},f=ne(()=>!n.currentUser||!n.currentUser.favorites?[]:t.value.filter(_=>n.currentUser.favorites.includes(_.firebaseId))),d=ne(()=>(t.value||[]).filter(_=>_.favorite>0).sort((_,w)=>w.favorite-_.favorite));return{movies:t,filterFavorite:f,filterBestFavorite:d,fetchMovies:s,addMovie:i,updateMovie:r,deleteMovie:o,addChapToMovie:a,addNewChap:l,updateChapInMovie:c,deleteChap:u,addComment:async(_,w,m)=>{try{const b=ki(fe(de,`movies/${_}/comments`)),R={userId:w,content:m,timestamp:Date.now()};await yt(b,R)}catch(b){console.error("Lỗi khi thêm bình luận:",b)}},deleteComment:async(_,w)=>{try{await di(fe(de,`movies/${_}/comments/${w}`))}catch(m){console.error("Lỗi khi xóa bình luận:",m)}}}}),Cf=_s("DanhMuc",()=>{const t=ae([]),e=ae("");return{danhMucs:t,fetchDanhMucs:async()=>{try{const o=await Ot(fe(de,"categories"));if(o.exists()){const a=o.val();t.value=Object.keys(a).map(l=>{var c;return{id:l,name:typeof a[l]=="string"?a[l]:((c=a[l])==null?void 0:c.name)||"Chưa đặt tên"}})}else t.value=[]}catch(o){console.error("Lỗi khi lấy dữ liệu danh mục:",o)}},addDanhMuc:async o=>{if(o.trim())try{const a=ki(fe(de,"categories"));await Yn(a,{name:o}),t.value.push({id:a.key,name:o}),t.value.sort((l,c)=>l.name.localeCompare(c.name)),e.value=""}catch(a){console.error("Lỗi khi thêm danh mục:",a)}},updateDanhMuc:async(o,a)=>{if(a.trim())try{await yt(fe(de,`categories/${o}`),{name:a});const l=t.value.findIndex(c=>c.id===o);l!==-1&&(t.value[l].name=a,t.value.sort((c,u)=>c.name.localeCompare(u.name)))}catch(l){console.error("Lỗi khi cập nhật danh mục:",l)}},deleteDanhMuc:async o=>{try{await di(fe(de,`categories/${o}`)),t.value=t.value.filter(a=>a.id!==o)}catch(a){console.error("Lỗi khi xóa danh mục:",a)}},nameValue:e}}),zt=_s("product",()=>{const t=wu(),e=ae(""),n=Cf();n.fetchDanhMucs();const s=ne(()=>n.danhMucs),i=ys();i.fetchMovies();const r=ne(()=>i.movies),o=q=>r.value.find(S=>S.name===q),a=q=>s.value.find(S=>S.name==q),l=(q,S)=>chap.value.find(L=>L.name===q&&L.tap==S),c=q=>chap.value.filter(S=>S.name===q).sort((S,L)=>L.tap-S.tap),u=ne(()=>a(t.params.name)||{}),f=ne(()=>o(t.params.name)||{}),d=ne(()=>f.value.chapters?Object.entries(f.value.chapters):[]),h=ne(()=>d.value.length?Math.max(...d.value.map(([q])=>Number(q)||0)):"0"),y=ne(()=>{var S;const q=Number(t.params.id);return isNaN(q)?null:((S=f.value.chapters)==null?void 0:S[q])||null}),_=q=>{const S=o(q);if(!S||!S.chapters)return"Sắp ra mắt";const L=Object.keys(S.chapters).map(Number),P=L.length?Math.max(...L):"Sắp ra mắt";return P=="0"?"Tập Full":"Tập "+P},w=ne(()=>r.value.filter(q=>q.genre.toLowerCase()==u.value.name.toLowerCase())),m=q=>{e.value=q,Bc.push({name:"SearchResults",query:{timKiem:e.value}})},b=ne(()=>{const q=e.value.trim().toLowerCase();return q?r.value.filter(S=>S.name.toLowerCase().includes(q)):[]}),R=new Date().getDay(),O=ne(()=>r.value.filter(q=>q.day==R));return{products:r,txtSearch:e,handleSearch:m,filterProduct:b,detailProduct:o,danhMuc:s,danhMucChoose:a,getDanhMuc:u,filterDanhMuc:w,getDetail:f,numberChap:c,getChaps:d,maxChap:h,getMaxChap:_,getChap:l,chapChoose:y,getCartoonDay:O,fetchData:async q=>{r.value.find(L=>L.name===q)||Bc.push({name:"404"})}}}),g3={class:"header-container"},_3={class:"logo"},v3={class:"search"},y3={class:"container-input"},b3={class:"Btn"},x3={class:"likeCount"},w3={class:"login"},C3={class:"hamburger"},I3={class:"menu-sign"},E3={__name:"HeaderView",setup(t){const e=ae(""),n=zt(),s=ys(),i=un(),r=ae(!1);return(o,a)=>{const l=an("RouterLink");return C(),E("div",g3,[p("div",_3,[$(l,{to:"/"},{default:Le(()=>a[5]||(a[5]=[p("img",{src:Ug},null,-1)])),_:1})]),p("div",v3,[p("div",y3,[Ae(p("input",{type:"text",placeholder:"Nhập tên phim cần tìm...","onUpdate:modelValue":a[0]||(a[0]=c=>e.value=c),name:"text",class:"input",onKeyup:a[1]||(a[1]=wr(c=>I(n).handleSearch(c.target.value.trim()),["enter"]))},null,544),[[We,e.value]]),(C(),E("svg",{onClick:a[2]||(a[2]=c=>I(n).handleSearch(e.value)),fill:"#ffffff",width:"20px",height:"20px",viewBox:"0 0 1920 1920",xmlns:"http://www.w3.org/2000/svg"},a[6]||(a[6]=[p("path",{d:"M790.588 1468.235c-373.722 0-677.647-303.924-677.647-677.647 0-373.722 303.925-677.647 677.647-677.647 373.723 0 677.647 303.925 677.647 677.647 0 373.723-303.924 677.647-677.647 677.647Zm596.781-160.715c120.396-138.692 193.807-319.285 193.807-516.932C1581.176 354.748 1226.428 0 790.588 0S0 354.748 0 790.588s354.748 790.588 790.588 790.588c197.647 0 378.24-73.411 516.932-193.807l516.028 516.142 79.963-79.963-516.142-516.028Z","fill-rule":"evenodd"},null,-1)])))])]),$(l,{to:"/favorite",class:"favorite"},{default:Le(()=>[p("button",b3,[a[7]||(a[7]=p("span",{class:"leftContainer"},[p("svg",{fill:"white",viewBox:"0 0 512 512",height:"1em",xmlns:"http://www.w3.org/2000/svg"},[p("path",{d:"M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"})]),p("span",{class:"like"},"Yêu thích")],-1)),p("span",x3,X(I(s).filterFavorite.length),1)])]),_:1}),p("div",w3,[p("label",C3,[Ae(p("input",{type:"checkbox","onUpdate:modelValue":a[3]||(a[3]=c=>r.value=c)},null,512),[[_g,r.value]]),a[8]||(a[8]=p("svg",{viewBox:"0 0 32 32"},[p("path",{class:"line line-top-bottom",d:"M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"}),p("path",{class:"line",d:"M7 16 27 16"})],-1))]),$(vu,{name:"fade-slide"},{default:Le(()=>[Ae(p("div",I3,[I(i).currentUser?(C(),E("a",{key:1,onClick:a[4]||(a[4]=(...c)=>I(i).logout&&I(i).logout(...c))}," Đăng xuất ")):(C(),qe(l,{key:0,to:"/login"},{default:Le(()=>a[9]||(a[9]=[Ue(" Đăng nhập ")])),_:1})),I(i).currentUser?(C(),qe(l,{key:2,to:"/profile"},{default:Le(()=>a[10]||(a[10]=[Ue("Profile")])),_:1})):Ut("",!0),$(l,{to:"/chatGroup",class:"chat"},{default:Le(()=>a[11]||(a[11]=[Ue("Chat group")])),_:1})],512),[[hx,r.value]])]),_:1})])])}}},Dn=ye(E3,[["__scopeId","data-v-8027d8bb"]]),S3={},T3={class:"loader-container"};function k3(t,e){return C(),E("div",T3,e[0]||(e[0]=[p("div",{class:"loader"},null,-1)]))}const bs=ye(S3,[["render",k3],["__scopeId","data-v-35a23ea6"]]),A3={style:{"background-color":"#23232a"}},R3={class:"nav-container"},P3={class:"menu-menu"},N3={__name:"Navigation",setup(t){const e=zt();return(n,s)=>{const i=an("RouterLink");return C(),E("div",A3,[p("div",R3,[p("ul",P3,[(C(!0),E(le,null,He(I(e).danhMuc,(r,o)=>(C(),E("li",{key:o},[$(i,{to:"/danhMuc/"+r.name+"/"+r.id},{default:Le(()=>[Ue(X(r.name),1)]),_:2},1032,["to"])]))),128))])])])}}},Ln=ye(N3,[["__scopeId","data-v-2c8ddad8"]]),O3=_s("banner",()=>{const t=ae([]),e=async()=>{try{const r=await Ot(fe(de,"banner"));r.exists()&&(t.value=Object.entries(r.val()).map(([o,a])=>({...a,firebaseId:o})))}catch(r){console.error("Lỗi khi lấy dữ liệu:",r)}};return{banners:t,fetchBanners:e,addBanner:async r=>{try{const o=ki(fe(de,"banner"));await yt(o,r),e()}catch(o){console.error("Lỗi khi thêm banner:",o)}},updateBanner:async(r,o)=>{try{await yt(fe(de,`banner/${r}`),o),e()}catch(a){console.error("Lỗi khi cập nhật banner:",a)}},deleteBanner:async r=>{try{await di(fe(de,`banner/${r}`)),e()}catch(o){console.error("Lỗi khi xoá banner:",o)}}}}),M3={class:"banner"},D3={class:"carousel-container"},L3=["src","alt"],F3={class:"carousel-content"},$3={class:"indicators"},U3=["onClick"],V3={__name:"about",setup(t){const e=O3(),n=ae(0);let s=null;const i=()=>{n.value=(n.value+1)%e.banners.length},r=()=>{n.value=(n.value-1+e.banners.length)%e.banners.length},o=l=>{n.value=l},a=()=>{s=setInterval(i,3e3)};return Nt(async()=>{await e.fetchBanners(),a()}),Ia(()=>{clearInterval(s)}),Os(()=>e.banners,()=>{n.value=0}),(l,c)=>{const u=an("RouterLink");return C(),E("div",M3,[p("div",D3,[p("div",{class:"carousel",style:ya({transform:`translateX(${-n.value*100}%)`,transition:"transform 0.8s ease"})},[(C(!0),E(le,null,He(I(e).banners,f=>(C(),E("div",{key:f.firebaseId,class:"carousel-item"},[$(u,{to:"/cartoon/"+f.title},{default:Le(()=>[p("img",{src:f.image,alt:f.title},null,8,L3),p("div",F3,[p("h2",null,X(f.title),1),p("p",null,X(f.subtitle),1)])]),_:2},1032,["to"])]))),128))],4),p("button",{class:"prev",onClick:r},"❮"),p("button",{class:"next",onClick:i},"❯"),p("div",$3,[(C(!0),E(le,null,He(I(e).banners,(f,d)=>(C(),E("span",{key:f.firebaseId,class:bt({active:d===n.value}),onClick:h=>o(d)},null,10,U3))),128))])])])}}},B3=ye(V3,[["__scopeId","data-v-73fdd8fa"]]),j3={class:"product-main"},H3=["src"],W3={class:"tap"},z3={class:"name-cartoon"},G3={__name:"cardProduct",props:{product:Array},setup(t){const e=zt();return(n,s)=>(C(),E("div",j3,[(C(!0),E(le,null,He(t.product,i=>(C(),E("div",{class:"product-product",key:i.id},[$(I(en),{to:"/cartoon/"+i.name},{default:Le(()=>[p("div",null,[p("img",{src:i.image,alt:"Poster"},null,8,H3),p("span",W3,X(I(e).getMaxChap(i.name)),1),p("span",z3,X(i.name),1)])]),_:2},1032,["to"])]))),128))]))}},no=ye(G3,[["__scopeId","data-v-ab282b6c"]]),If=_s("day",()=>{const t=new Date,e=["Chủ Nhật","Thứ Hai","Thứ Ba","Thứ Tư","Thứ Năm","Thứ Sáu","Thứ Bảy","END"],n=["0","1","2","3","4","5","6","7"],s=ne(()=>e[t.getDay()]);return{days:e,dayOfWeek:s,day:n}}),K3={class:"product-container"},q3={class:"fb-title"},Y3={key:1,style:{color:"white",padding:"20px"}},Q3={__name:"day",setup(t){const e=zt(),n=If();return(s,i)=>(C(),E("div",K3,[p("span",q3," Lịch Chiếu Hôm Nay - "+X(I(n).dayOfWeek),1),I(e).getCartoonDay.length>0?(C(),qe(no,{key:0,product:I(e).getCartoonDay},null,8,["product"])):(C(),E("span",Y3,"Chưa có lịch chiếu phim vào hôm nay !"))]))}},X3=ye(Q3,[["__scopeId","data-v-b2626ce4"]]),J3={class:"product-container"},Z3={key:0,class:"pagination"},e4=["disabled"],t4={key:0},n4=["onClick"],s4={key:1},i4=["disabled"],r4={key:1,class:"pagination"},Nl=9,o4={__name:"product",setup(t){const e=zt(),n=ae(1),s=ne(()=>Math.ceil(e.products.length/Nl)),i=ne(()=>Math.max(2,n.value-2)),r=ne(()=>Math.min(s.value-1,n.value+2)),o=ne(()=>{const f=[];for(let d=i.value;d<=r.value;d++)f.push(d);return f}),a=ne(()=>{const f=(n.value-1)*Nl;return e.products.slice(f,f+Nl)}),l=f=>{n.value=f},c=()=>{n.value<s.value&&n.value++},u=()=>{n.value>1&&n.value--};return(f,d)=>(C(),E("div",J3,[d[3]||(d[3]=p("span",{class:"fb-title"},"Mới Nhất",-1)),$(vu,{name:"slide",mode:"out-in"},{default:Le(()=>[(C(),E("div",{class:"product-main",key:n.value},[$(no,{product:a.value},null,8,["product"])]))]),_:1}),s.value>1?(C(),E("div",Z3,[p("button",{onClick:u,disabled:n.value===1},"←",8,e4),p("button",{onClick:d[0]||(d[0]=h=>l(1)),class:bt({active:n.value===1})},"1",2),i.value>2?(C(),E("span",t4,"...")):Ut("",!0),(C(!0),E(le,null,He(o.value,h=>(C(),E("button",{key:h,onClick:y=>l(h),class:bt({active:n.value===h})},X(h),11,n4))),128)),r.value<s.value-1?(C(),E("span",s4,"...")):Ut("",!0),p("button",{onClick:d[1]||(d[1]=h=>l(s.value)),class:bt({active:n.value===s.value})},X(s.value),3),p("button",{onClick:c,disabled:n.value===s.value},"→",8,i4)])):(C(),E("div",r4,d[2]||(d[2]=[p("button",{class:"active"},"1",-1)])))]))}},a4=ye(o4,[["__scopeId","data-v-26576a0c"]]),l4={class:"see-container"},c4={class:"favo"},u4=["src"],f4={__name:"see",setup(t){const e=ys();return(n,s)=>{const i=an("RouterLink");return C(),E("div",l4,[s[0]||(s[0]=p("span",{class:"fb-title"}," Yêu thích nhất ",-1)),p("div",c4,[$(gg,{name:"slide",tag:"div"},{default:Le(()=>[(C(!0),E(le,null,He(I(e).filterBestFavorite.slice(0,5),r=>(C(),E("div",{class:"see-view",key:r.id},[$(i,{to:"/cartoon/"+r.name},{default:Le(()=>[p("div",null,[p("img",{src:r.image},null,8,u4),p("span",null,X(r.name),1)])]),_:2},1032,["to"])]))),128))]),_:1})])])}}},Ui=ye(f4,[["__scopeId","data-v-b4d0874e"]]),d4={class:"mainmain"},h4={class:"main"},p4={key:1,class:"main-container"},m4={class:"main-right-container"},g4={__name:"HomeView",setup(t){const e=Wt();return(n,s)=>(C(),E(le,null,[$(Dn),$(Ln),p("div",d4,[p("div",h4,[p("main",null,[I(e).loading?(C(),qe(bs,{key:0})):(C(),E("div",p4,[$(B3),$(a4),$(X3)]))]),p("div",m4,[$(Ui)])])]),p("footer",null,[$(On)])],64))}},_4=ye(g4,[["__scopeId","data-v-3e7c9dbd"]]),v4={class:"chap-container"},y4={key:0,class:"chap-content"},b4={key:1,class:"chap-content"},x4={key:2,class:"chap-content"},w4={class:"des-section"},C4={class:"toggle-btn"},I4={key:0,class:"des"},E4={__name:"Chap",setup(t){const e=zt(),n=ae(!1),s=()=>{n.value=!n.value};return(i,r)=>(C(),E("div",v4,[r[4]||(r[4]=p("span",{class:"tit"},"Tập",-1)),I(e).getChaps.length===0?(C(),E("div",y4,[$(I(en),{to:"/",class:"chap"},{default:Le(()=>r[0]||(r[0]=[Ue("Chưa có tập")])),_:1})])):I(e).maxChap===0?(C(),E("div",b4,[$(I(en),{to:"/chap/"+I(e).getDetail.name+"/0",class:"chap"},{default:Le(()=>r[1]||(r[1]=[Ue("Tập Full")])),_:1},8,["to"])])):(C(),E("div",x4,[(C(!0),E(le,null,He(I(e).getChaps.sort((o,a)=>a[0]-o[0]),o=>(C(),qe(I(en),{key:o[0],to:"/chap/"+I(e).getDetail.name+"/"+o[0],class:"chap"},{default:Le(()=>[Ue(X("Tập "+o[0]),1)]),_:2},1032,["to"]))),128))])),p("div",w4,[p("span",{class:"des-title",onClick:s},[r[2]||(r[2]=Ue(" Mô tả : ")),p("span",C4,X(n.value?"Thu gọn":"Mở rộng"),1)]),r[3]||(r[3]=p("br",null,null,-1)),$(vu,{name:"fade"},{default:Le(()=>[n.value?(C(),E("span",I4,X(I(e).getDetail.description||"Chưa có mô tả."),1)):Ut("",!0)]),_:1})])]))}},nv=ye(E4,[["__scopeId","data-v-de7246c2"]]),S4={class:"cmt-container"},T4={class:"head-cmt"},k4={key:0,class:"noUserCmt"},A4={key:1,class:"cmt-input"},R4=["src"],P4={class:"messageBox"},N4={class:"avt"},O4=["src"],M4={class:"cmt-item"},D4={class:"name-cmt"},L4={class:"cmt-ct"},F4=["onClick"],$4={class:"pagination"},U4=["disabled"],V4=["onClick"],B4=["disabled"],Ol=5,j4={__name:"CmtView",setup(t){const e=un(),n=ys(),s=zt(),i=ae(""),r=ae([]),o=ae(1),a=g_(),l=()=>{var h;i.value.trim()&&(n.addComment(s.getDetail.firebaseId,(h=e.currentUser)==null?void 0:h.firebaseId,i.value),i.value="")};Nt(()=>{var y;if(!((y=s.getDetail)!=null&&y.firebaseId))return;const h=fe(a,`movies/${s.getDetail.firebaseId}/comments`);m_(h,_=>{const w=_.val();r.value=w?Object.entries(w).map(([m,b])=>({cmtId:m,...b})).sort((m,b)=>b.timestamp-m.timestamp):[]})});const c=ne(()=>{const h=(o.value-1)*Ol,y=h+Ol;return r.value.slice(h,y)}),u=ne(()=>{let h=Math.max(1,o.value-1),y=Math.min(f.value,h+1);return Array.from({length:y-h+1},(_,w)=>h+w)}),f=ne(()=>Math.ceil(r.value.length/Ol)),d=h=>{h>=1&&h<=f.value&&(o.value=h)};return(h,y)=>{var w;const _=an("RouterLink");return C(),E("div",S4,[p("div",T4,[y[6]||(y[6]=p("span",{class:"fb-title"},"comments",-1)),I(e).currentUser?(C(),E("div",A4,[p("img",{src:(w=I(e).currentUser)==null?void 0:w.avatarUrl,alt:"avatar"},null,8,R4),p("div",P4,[Ae(p("input",{id:"messageInput","onUpdate:modelValue":y[0]||(y[0]=m=>i.value=m),type:"text",placeholder:"Nhập bình luận..",required:"",onKeyup:wr(l,["enter"])},null,544),[[We,i.value]]),p("button",{id:"sendButton",onClick:l},y[5]||(y[5]=[p("svg",{viewBox:"0 0 664 663",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[p("path",{d:"M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888",stroke:"#6c6c6c","stroke-width":"33.67","stroke-linecap":"round","stroke-linejoin":"round"})],-1)]))])])):(C(),E("div",k4,[$(_,{to:"/login"},{default:Le(()=>y[3]||(y[3]=[Ue("Đăng nhập")])),_:1}),y[4]||(y[4]=Ue(" để bình luận! "))]))]),$(gg,{name:"fade",tag:"div",class:"cmt-content"},{default:Le(()=>[p("p",null,X(r.value.length)+" bình luận",1),(C(!0),E(le,null,He(c.value,m=>{var b;return C(),E("div",{class:"cmt",key:m.cmtId},[p("div",N4,[p("img",{src:I(e).getUserAvatar(m.userId)},null,8,O4)]),p("div",M4,[p("span",D4,X(I(e).getUserName(m.userId)),1),y[7]||(y[7]=p("br",null,null,-1)),p("span",L4,X(m.content),1)]),m.userId===((b=I(e).currentUser)==null?void 0:b.firebaseId)?(C(),E("div",{key:0,class:"delete",onClick:R=>I(n).deleteComment(I(s).getDetail.firebaseId,m.cmtId)},"🗑️",8,F4)):Ut("",!0)])}),128))]),_:1}),p("div",$4,[p("button",{onClick:y[1]||(y[1]=m=>d(o.value-1)),disabled:o.value===1},X("<"),8,U4),(C(!0),E(le,null,He(u.value,m=>(C(),E("button",{key:m,onClick:b=>d(m),class:bt({active:m===o.value})},X(m),11,V4))),128)),p("button",{onClick:y[2]||(y[2]=m=>d(o.value+1)),disabled:o.value===f.value},X(">"),8,B4)])])}}},H4=ye(j4,[["__scopeId","data-v-51935909"]]),W4={class:"product-container"},z4={class:"product-main"},G4={class:"product-product"},K4=["src"],q4={class:"favorite"},Y4={class:"container"},Q4=["checked"],X4={class:"countLove"},J4={class:"product-detail-right"},Z4={class:"name-cartoon"},ek={class:"tap"},tk={class:"danhMuc"},nk={class:"danhMuc"},sk={__name:"ProductView",setup(t){const e=If(),n=zt(),s=un(),i=ne(()=>{var l,c;return(c=(l=s.currentUser)==null?void 0:l.favorites)==null?void 0:c.includes(n.getDetail.firebaseId)}),r=xu(),o=async()=>{if(!s.currentUser)return alert("Vui lòng đăng nhập để thêm vào yêu thích!"),r.push("/login");const l=n.getDetail.firebaseId;if(!l){console.error("Lỗi: Không tìm thấy firebaseId của phim!");return}await s.toggleFavorite(l),await s.checkSession()},a=wu();return Nt(()=>{n.fetchData(a.params.name)}),(l,c)=>{const u=an("RouterLink"),f=an("font-awesome-icon");return C(),E("div",W4,[p("div",z4,[p("div",G4,[p("div",null,[p("img",{src:I(n).getDetail.image},null,8,K4),p("span",q4,[p("label",Y4,[p("input",{type:"checkbox",checked:i.value,onClick:o},null,8,Q4),c[0]||(c[0]=p("div",{class:"checkmark"},[p("svg",{viewBox:"0 0 256 256"},[p("rect",{fill:"none",height:"256",width:"256"}),p("path",{d:"M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z","stroke-width":"20px",stroke:"#fff",fill:"none"})])],-1))])]),p("span",X4," Yêu thích: "+X(I(n).getDetail.favorite||0)+" ❤",1),$(u,{to:"/chap/"+I(n).getDetail.name+"/"+I(n).maxChap,class:"xemPhim"},{default:Le(()=>c[1]||(c[1]=[Ue("Xem phim ")])),_:1},8,["to"])])]),p("div",J4,[p("span",Z4,X(I(n).getDetail.name),1),c[2]||(c[2]=p("br",null,null,-1)),p("span",ek,"Tập "+X(I(n).maxChap==0?"Full":isFinite(I(n).maxChap)?I(n).maxChap:"chưa ra mắt"),1),c[3]||(c[3]=p("br",null,null,-1)),c[4]||(c[4]=Ue()),p("span",tk,[$(f,{icon:["fas","clock"],class:"text-blue-500 text-2xl"}),Ue(" "+X(I(e).days[I(n).getDetail.day]=="END"?"Đã kết thúc":I(e).days[I(n).getDetail.day]+" Hàng Tuần"),1)]),c[5]||(c[5]=p("br",null,null,-1)),p("span",nk,"Thể loại : "+X(I(n).getDetail.genre),1),c[6]||(c[6]=p("br",null,null,-1))])]),$(nv),$(H4)])}}},ik=ye(sk,[["__scopeId","data-v-421eb790"]]),rk={class:"mainmain"},ok={class:"main"},ak={class:"main-container"},lk={class:"main-right-container"},ck={__name:"ChooseView",setup(t){const e=Wt();return(n,s)=>(C(),E(le,null,[$(Dn),$(Ln),p("div",rk,[p("div",ok,[p("main",null,[p("div",ak,[I(e).loading?(C(),qe(bs,{key:0})):(C(),qe(ik,{key:1}))])]),p("div",lk,[$(Ui)])])]),p("footer",null,[$(On)])],64))}},uk=ye(ck,[["__scopeId","data-v-23d1c58e"]]),fk={class:"product-container"},dk={class:"fb-title"},hk={__name:"SearchProduct",setup(t){const e=zt();return(n,s)=>(C(),E("div",fk,[p("span",dk," Bạn đã tìm kiếm : "+X(I(e).txtSearch),1),$(no,{product:I(e).filterProduct},null,8,["product"])]))}},pk=ye(hk,[["__scopeId","data-v-4581f7db"]]),mk={class:"mainmain"},gk={class:"main"},_k={class:"main-container"},vk={class:"main-right-container"},yk={__name:"SearchView",setup(t){const e=Wt();return(n,s)=>(C(),E(le,null,[$(Dn),$(Ln),p("div",mk,[p("div",gk,[p("main",null,[p("div",_k,[I(e).loading?(C(),qe(bs,{key:0})):(C(),qe(pk,{key:1}))])]),p("div",vk,[$(Ui)])])]),p("footer",null,[$(On)])],64))}},bk=ye(yk,[["__scopeId","data-v-01e9bfb3"]]),xk={class:"product-container"},wk={class:"fb-title"},Ck={__name:"danhMucView",setup(t){const e=Wt(),n=zt();return(s,i)=>(C(),E("div",xk,[p("span",wk,X(I(n).getDanhMuc.name),1),I(e).loading?(C(),qe(bs,{key:0})):(C(),qe(no,{key:1,product:I(n).filterDanhMuc},null,8,["product"]))]))}},Ik=ye(Ck,[["__scopeId","data-v-e99d1c94"]]),Ek={class:"mainmain"},Sk={class:"main"},Tk={class:"main-container"},kk={class:"main-right-container"},Ak={__name:"danhMucView",setup(t){return(e,n)=>(C(),E(le,null,[$(Dn),$(Ln),p("div",Ek,[p("div",Sk,[p("main",null,[p("div",Tk,[$(Ik)])]),p("div",kk,[$(Ui)])])]),p("footer",null,[$(On)])],64))}},Rk=ye(Ak,[["__scopeId","data-v-67d23c71"]]),Pk={class:"video-container"},Nk={key:0},Ok={key:1},Mk={class:"video-wrapper"},Dk=["src"],Lk={__name:"videoView",setup(t){const e=wu(),n=zt();return(s,i)=>(C(),E("div",Pk,[I(n).chapChoose?(C(),E("div",Ok,[p("div",Mk,[p("iframe",{src:I(n).chapChoose.url,class:"video-player",allowfullscreen:"",title:"Dailymotion Video Player",allow:"web-share"},null,8,Dk)]),p("span",null,X(I(e).params.name)+" - "+X(I(e).params.id==="0"?"Full":"Tập "+I(e).params.id),1)])):(C(),E("span",Nk," Tập "+X(I(e).params.id==="0"?"Full":I(e).params.id)+' của phim "'+X(I(e).params.name)+'" sẽ được cập nhật sớm nhất! ',1))]))}},Fk=ye(Lk,[["__scopeId","data-v-67b896fb"]]),$k={class:"mainmain"},Uk={class:"main"},Vk={class:"main-container"},Bk={class:"main-right-container"},jk={__name:"ChapView",setup(t){return(e,n)=>(C(),E(le,null,[$(Dn),$(Ln),p("div",$k,[p("div",Uk,[p("main",null,[p("div",Vk,[$(Fk),$(nv)])]),p("div",Bk,[$(Ui)])])]),p("footer",null,[$(On)])],64))}},Hk=ye(jk,[["__scopeId","data-v-4fedebe3"]]),Wk=_s("chat",()=>{const t=un(),e=ae([]),n=ae(""),s=ae(null),i=fe(de,"messages"),r=()=>{m_(i,c=>{if(c.exists()){const u=c.val();e.value=Object.keys(u).map(f=>({msgId:f,...u[f]}))}else e.value=[],console.log("⚠ Không có tin nhắn nào.")})},o=async()=>{if(!n.value.trim())return;if(!t.currentUser){alert("❌ Lỗi: Chưa có user đăng nhập!");return}if(!t.currentUser.firebaseId){console.error("❌ Lỗi: FirebaseId không tồn tại!");return}const c={senderId:t.currentUser.firebaseId,senderName:t.currentUser.name||"Ẩn danh",text:n.value,timestamp:new Date().toISOString()};try{await ki(fe(de,"messages"),c),n.value="",l()}catch(u){console.error("❌ Lỗi khi gửi tin nhắn:",u)}},a=async c=>{try{console.log(`🗑 Đang xóa tin nhắn ID: ${c}`),await di(fe(de,`messages/${c}`)),e.value=e.value.filter(u=>u.msgId!==c),console.log("✅ Tin nhắn đã bị xóa!")}catch(u){console.error("❌ Lỗi khi xóa tin nhắn:",u)}},l=()=>{zs(()=>{s.value&&(s.value.scrollTop=s.value.scrollHeight)})};return Nt(r),Ia(()=>{YS(i)}),{fetchMessages:r,messages:e,messageInput:n,chatContent:s,sendMessage:o,deleteMessage:a}}),zk={class:"chat-container"},Gk={class:"chat-group-container"},Kk=["onClick"],qk={class:"avt"},Yk=["src"],Qk={class:"name-mess"},Xk={class:"avt"},Jk=["src"],Zk={class:"messageBox"},e5={__name:"chatGroup",setup(t){const e=Wk(),n=un(),s=ae(null),i=()=>{zs(()=>{s.value&&(s.value.scrollTop=s.value.scrollHeight)})};return Nt(e.fetchMessages),mu(()=>{i()}),(r,o)=>(C(),E("div",zk,[p("div",Gk,[o[4]||(o[4]=p("h3",null,"Group Chat",-1)),p("div",{class:"chat-content",ref_key:"chatContent",ref:s},[(C(!0),E(le,null,He(I(e).messages,a=>{var l,c,u,f,d;return C(),E("div",{key:a.msgId,class:bt(["message",a.senderId===((l=I(n).currentUser)==null?void 0:l.firebaseId)?"mine":"other","new"])},[a.senderId===((c=I(n).currentUser)==null?void 0:c.firebaseId)?(C(),E("span",{key:0,onClick:h=>I(e).deleteMessage(a.msgId),class:"delete-btn"}," 🗑 ",8,Kk)):Ut("",!0),p("div",qk,[a.senderId!==((u=I(n).currentUser)==null?void 0:u.firebaseId)?(C(),E("img",{key:0,src:I(n).getUserAvatar(a.senderId)||"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWN5C5TKjjkdbFK_9W59jVqfrzfgCFKrtc3g&s"},null,8,Yk)):Ut("",!0)]),p("div",Qk,[p("strong",null,X(I(n).getUserName(a.senderId)||"ẩn danh"),1),p("p",null,X(a.text),1)]),p("div",Xk,[a.senderId===((f=I(n).currentUser)==null?void 0:f.firebaseId)?(C(),E("img",{key:0,src:((d=I(n).currentUser)==null?void 0:d.avatarUrl)||"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWN5C5TKjjkdbFK_9W59jVqfrzfgCFKrtc3g&s"},null,8,Jk)):Ut("",!0)])],2)}),128))],512),p("div",Zk,[Ae(p("input",{"onUpdate:modelValue":o[0]||(o[0]=a=>I(e).messageInput=a),placeholder:"Nhập tin nhắn...",type:"text",onKeyup:o[1]||(o[1]=wr((...a)=>I(e).sendMessage&&I(e).sendMessage(...a),["enter"])),id:"messageInput"},null,544),[[We,I(e).messageInput]]),p("button",{onClick:o[2]||(o[2]=(...a)=>I(e).sendMessage&&I(e).sendMessage(...a)),id:"sendButton"},o[3]||(o[3]=[p("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 664 663"},[p("path",{fill:"none",d:"M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"}),p("path",{"stroke-linejoin":"round","stroke-linecap":"round","stroke-width":"33.67",stroke:"#6c6c6c",d:"M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"})],-1)]))])])]))}},t5=ye(e5,[["__scopeId","data-v-1cd95846"]]),n5={class:"mainmain"},s5={class:"main"},i5={class:"main-container"},r5={__name:"ChatView",setup(t){const e=Wt();return(n,s)=>(C(),E(le,null,[$(Dn),$(Ln),p("div",n5,[p("div",s5,[p("main",null,[p("div",i5,[I(e).loading?(C(),qe(bs,{key:0})):(C(),qe(t5,{key:1}))])])])]),p("footer",null,[$(On)])],64))}},o5=ye(r5,[["__scopeId","data-v-d4e57beb"]]),a5={class:"alert"},l5={key:0,class:"form"},c5={class:"inputForm"},u5={class:"inputForm"},f5=["type"],d5={class:"p"},h5={class:"flex-row"},p5={version:"1.1",width:"20",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512",style:{"enable-background":"new 0 0 512 512"},"xml:space":"preserve"},m5={key:1,class:"form"},g5={class:"inputForm"},_5={class:"inputForm"},v5=["type"],y5={class:"inputForm"},b5=["type"],x5={class:"p"},w5={__name:"loginCo",setup(t){const e=un(),n=ae(!0),s=ae("password"),i=ae("password");return(r,o)=>(C(),E(le,null,[p("span",a5,X(I(e).alert),1),n.value?(C(),E("form",l5,[o[20]||(o[20]=p("div",{class:"flex-column"},[p("label",null,"Email ")],-1)),p("div",c5,[o[14]||(o[14]=p("svg",{height:"20",viewBox:"0 0 32 32",width:"20",xmlns:"http://www.w3.org/2000/svg"},[p("g",{id:"Layer_3","data-name":"Layer 3"},[p("path",{d:"m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"})])],-1)),Ae(p("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=a=>I(e).emailValue=a),class:"input",placeholder:"Nhập email của bạn "},null,512),[[We,I(e).emailValue]])]),o[21]||(o[21]=p("div",{class:"flex-column"},[p("label",null,"Mật khẩu ")],-1)),p("div",u5,[o[16]||(o[16]=p("svg",{height:"20",viewBox:"-64 0 512 512",width:"20",xmlns:"http://www.w3.org/2000/svg"},[p("path",{d:"m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"}),p("path",{d:"m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"})],-1)),Ae(p("input",{type:s.value,"onUpdate:modelValue":o[1]||(o[1]=a=>I(e).passValue=a),class:"input",placeholder:"Nhập mật khẩu của bạn"},null,8,f5),[[dl,I(e).passValue]]),(C(),E("svg",{onClick:o[2]||(o[2]=a=>s.value=="password"?s.value="text":s.value="password"),viewBox:"0 0 576 512",height:"1em",xmlns:"http://www.w3.org/2000/svg"},o[15]||(o[15]=[p("path",{d:"M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"},null,-1)])))]),o[22]||(o[22]=p("div",{class:"flex-row"},[p("div",null,[p("input",{type:"checkbox"}),p("label",null,"Remember me ")]),p("span",{class:"span"},"Quên mật khẩu?")],-1)),p("button",{class:"button-submit",onClick:o[3]||(o[3]=a=>I(e).checkLogin())},"Đăng nhập"),p("p",d5,[o[17]||(o[17]=Ue("Bạn chưa có tài khoản? ")),p("span",{class:"span",onClick:o[4]||(o[4]=a=>n.value=!n.value)},"Đăng kí")]),o[23]||(o[23]=p("p",{class:"p line"},"hoặc",-1)),p("div",h5,[p("button",{class:"btn google",onClick:o[5]||(o[5]=(...a)=>I(e).googleSignIn&&I(e).googleSignIn(...a))},[(C(),E("svg",p5,o[18]||(o[18]=[p("path",{style:{fill:"#FBBB00"},d:`M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256\r
	c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456\r
	C103.821,274.792,107.225,292.797,113.47,309.408z`},null,-1),p("path",{style:{fill:"#518EF8"},d:`M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451\r
	c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535\r
	c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z`},null,-1),p("path",{style:{fill:"#28B446"},d:`M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512\r
	c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771\r
	c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z`},null,-1),p("path",{style:{fill:"#F14336"},d:`M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012\r
	c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0\r
	C318.115,0,375.068,22.126,419.404,58.936z`},null,-1)]))),o[19]||(o[19]=Ue(" Google "))]),p("button",{class:"btn apple",onClick:o[6]||(o[6]=(...a)=>I(e).facebookSignIn&&I(e).facebookSignIn(...a))}," Facebook ")])])):(C(),E("form",m5,[o[30]||(o[30]=p("div",{class:"flex-column"},[p("label",null,"Email ")],-1)),p("div",g5,[o[24]||(o[24]=p("svg",{height:"20",viewBox:"0 0 32 32",width:"20",xmlns:"http://www.w3.org/2000/svg"},[p("g",{id:"Layer_3","data-name":"Layer 3"},[p("path",{d:"m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"})])],-1)),Ae(p("input",{type:"text","onUpdate:modelValue":o[7]||(o[7]=a=>I(e).emailValue=a),class:"input",placeholder:"Nhập email của bạn "},null,512),[[We,I(e).emailValue]])]),o[31]||(o[31]=p("div",{class:"flex-column"},[p("label",null,"Mật khẩu ")],-1)),p("div",_5,[o[26]||(o[26]=p("svg",{height:"20",viewBox:"-64 0 512 512",width:"20",xmlns:"http://www.w3.org/2000/svg"},[p("path",{d:"m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"}),p("path",{d:"m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"})],-1)),Ae(p("input",{type:s.value,"onUpdate:modelValue":o[8]||(o[8]=a=>I(e).passValue=a),class:"input",placeholder:"Nhập mật khẩu của bạn"},null,8,v5),[[dl,I(e).passValue]]),(C(),E("svg",{onClick:o[9]||(o[9]=a=>s.value=="password"?s.value=I(oy):s.value="password"),viewBox:"0 0 576 512",height:"1em",xmlns:"http://www.w3.org/2000/svg"},o[25]||(o[25]=[p("path",{d:"M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"},null,-1)])))]),o[32]||(o[32]=p("div",{class:"flex-column"},[p("label",null,"Nhập lại mật khẩu ")],-1)),p("div",y5,[o[28]||(o[28]=p("svg",{height:"20",viewBox:"-64 0 512 512",width:"20",xmlns:"http://www.w3.org/2000/svg"},[p("path",{d:"m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"}),p("path",{d:"m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"})],-1)),Ae(p("input",{type:i.value,"onUpdate:modelValue":o[10]||(o[10]=a=>I(e).checkPassValue=a),class:"input",placeholder:"Nhập lại mật khẩu của bạn"},null,8,b5),[[dl,I(e).checkPassValue]]),(C(),E("svg",{onClick:o[11]||(o[11]=a=>i.value=="password"?i.value="text":i.value="password"),viewBox:"0 0 576 512",height:"1em",xmlns:"http://www.w3.org/2000/svg"},o[27]||(o[27]=[p("path",{d:"M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"},null,-1)])))]),o[33]||(o[33]=p("div",{class:"flex-row"},[p("div",null,[p("input",{type:"checkbox"}),p("label",null,"Remember me ")]),p("span",{class:"span"},"Quên mật khẩu?")],-1)),p("button",{class:"button-submit",onClick:o[12]||(o[12]=a=>I(e).checkRegister())},"Đăng kí"),p("p",x5,[o[29]||(o[29]=Ue("Bạn đã có tài khoản? ")),p("span",{class:"span",onClick:o[13]||(o[13]=a=>n.value=!n.value)},"Đăng Nhập")])]))],64))}},C5=ye(w5,[["__scopeId","data-v-6efb6d45"]]),I5={class:"mainmain"},E5={class:"main"},S5={class:"main-container"},T5={__name:"LoginView",setup(t){return(e,n)=>(C(),E(le,null,[$(Dn),$(Ln),p("div",I5,[p("div",E5,[p("main",null,[p("div",S5,[$(C5)])])])]),p("footer",null,[$(On)])],64))}},k5=ye(T5,[["__scopeId","data-v-f31f00e7"]]),A5={class:"mainmain"},R5={class:"main"},P5={class:"main-container"},N5={key:1},O5={key:3},M5={key:4,class:"pagination"},D5=["disabled"],L5={key:0},F5=["onClick"],$5={key:1},U5=["disabled"],V5={key:5,class:"pagination"},Ml=6,B5={__name:"FavoriteView",setup(t){const e=Wt(),n=ys(),s=un(),i=ae(1),r=ne(()=>Math.ceil(n.filterFavorite.length/Ml)),o=ne(()=>Math.max(2,i.value-2)),a=ne(()=>Math.min(r.value-1,i.value+2)),l=ne(()=>{const h=[];for(let y=o.value;y<=a.value;y++)h.push(y);return h}),c=ne(()=>{const h=(i.value-1)*Ml;return n.filterFavorite.slice(h,h+Ml)}),u=h=>{i.value=h},f=()=>{i.value<r.value&&i.value++},d=()=>{i.value>1&&i.value--};return(h,y)=>(C(),E(le,null,[$(Dn),$(Ln),p("div",A5,[p("div",R5,[p("main",null,[p("div",P5,[y[5]||(y[5]=p("span",{class:"fb-title"}," Mục yêu thích ❤️ ",-1)),I(e).loading?(C(),qe(bs,{key:0})):Ut("",!0),I(s).currentUser?c.value.length>0?(C(),qe(no,{key:2,product:c.value},null,8,["product"])):(C(),E("div",O5,y[3]||(y[3]=[p("p",{class:"alert"},"Bạn chưa có phim yêu thích nào.",-1)]))):(C(),E("div",N5,y[2]||(y[2]=[p("p",{class:"alert"},"Vui lòng đăng nhập để xem danh sách yêu thích!",-1)]))),r.value>1?(C(),E("div",M5,[p("button",{onClick:d,disabled:i.value===1},"←",8,D5),p("button",{onClick:y[0]||(y[0]=_=>u(1)),class:bt({active:i.value===1})},"1",2),o.value>2?(C(),E("span",L5,"...")):Ut("",!0),(C(!0),E(le,null,He(l.value,_=>(C(),E("button",{key:_,onClick:w=>u(_),class:bt({active:i.value===_})},X(_),11,F5))),128)),a.value<r.value-1?(C(),E("span",$5,"...")):Ut("",!0),p("button",{onClick:y[1]||(y[1]=_=>u(r.value)),class:bt({active:i.value===r.value})},X(r.value),3),p("button",{onClick:f,disabled:i.value===r.value},"→",8,U5)])):(C(),E("div",V5,y[4]||(y[4]=[p("button",{class:"active"},"1",-1)])))])]),p("div",{class:bt(["main-right-container",{active:!I(e).loading}])},[$(Ui,{class:"see"})],2)])]),p("footer",null,[$(On)])],64))}},j5=ye(B5,[["__scopeId","data-v-57930e5c"]]),H5={},W5={class:"body"},z5={class:"container"},G5={class:"go-back"};function K5(t,e){const n=an("RouterLink");return C(),E("div",W5,[p("div",z5,[e[1]||(e[1]=p("h2",null,"404",-1)),e[2]||(e[2]=p("h1",null,"Page not found.",-1)),e[3]||(e[3]=p("p",null,"Rất tiếc, có vẻ như chúng tôi không thể tìm thấy trang bạn đang tìm kiếm. Thông thường điều này xảy ra vì của một trang tồn tại trước đó đã bị xóa hoặc bạn đã nhập sai địa chỉ.",-1)),e[4]||(e[4]=p("p",null,"hoặc",-1)),e[5]||(e[5]=p("p",null,"Bạn chưa có quyền để vào các trang quản trị khác",-1)),p("span",G5,[$(n,{to:"/"},{default:Le(()=>e[0]||(e[0]=[Ue("Go back")])),_:1})])])])}const sv=ye(H5,[["render",K5],["__scopeId","data-v-2c526770"]]),q5={class:"allContainer-admin"},Y5={key:0},Q5={class:"header-container"},X5={class:"logo"},J5={class:"admin-container"},Z5={class:"admin-container-left"},eA={class:"list"},tA={class:"admin-container-right"},nA={key:1},sA={__name:"AdminView",setup(t){const e=un(),n=Wt();return n.loading=!0,Nt(async()=>{await e.fetchCurrentUsers(),n.loading=!1,/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)&&screen.orientation&&screen.orientation.lock("landscape").catch(i=>{console.warn("Không thể xoay màn hình:",i)})}),(s,i)=>{var o;const r=an("RouterView");return C(),E("div",q5,[((o=I(e).currentUser)==null?void 0:o.role)==="admin"?(C(),E("div",Y5,[p("div",Q5,[p("div",X5,[$(I(en),{to:"/"},{default:Le(()=>i[0]||(i[0]=[p("img",{src:Ug},null,-1)])),_:1})])]),p("div",J5,[p("div",Z5,[p("div",eA,[$(I(en),{to:"/admin/danh-muc"},{default:Le(()=>i[1]||(i[1]=[Ue(" Quản lý danh mục ")])),_:1}),$(I(en),{to:"/admin/product"},{default:Le(()=>i[2]||(i[2]=[Ue(" Quản lý phim ")])),_:1}),$(I(en),{to:"/admin/chap"},{default:Le(()=>i[3]||(i[3]=[Ue(" Quản lý tập phim ")])),_:1}),$(I(en),{to:"/admin/user"},{default:Le(()=>i[4]||(i[4]=[Ue(" Quản lý tài khoản ")])),_:1})])]),p("div",tA,[$(r)])])])):(C(),E("div",nA,[$(sv)]))])}}},iA=ye(sA,[["__scopeId","data-v-de86279d"]]),rA={class:"admin-container"},oA={class:"table"},aA=["onUpdate:modelValue","onKeyup"],lA={key:1},cA=["onClick"],uA=["onClick"],fA={class:"addContainer"},dA={__name:"danhMucAdmin",setup(t){const e=Cf();Nt(()=>{e.fetchDanhMucs()});const n=async r=>{r.isEditing?await s(r):r.tempName=r.name,r.isEditing=!r.isEditing},s=async r=>{r.tempName.trim()!=""&&r.tempName!=r.name&&await e.updateDanhMuc(r.id,r.tempName)},i=()=>{if(!e.nameValue||e.nameValue.trim()===""){alert("Tên danh mục không được để trống!");return}e.addDanhMuc(e.nameValue)};return(r,o)=>(C(),E("div",rA,[o[3]||(o[3]=p("span",{class:"fb-title"},"Quản lý danh mục",-1)),p("div",oA,[p("ul",null,[o[1]||(o[1]=p("span",null,"Tên danh mục",-1)),(C(!0),E(le,null,He(I(e).danhMucs,a=>(C(),E("li",{key:a.id},[a.isEditing?Ae((C(),E("input",{key:0,"onUpdate:modelValue":l=>a.tempName=l,onKeyup:wr(l=>s(a),["enter"])},null,40,aA)),[[We,a.tempName]]):(C(),E("p",lA,X(a.name),1))]))),128))]),p("ul",null,[o[2]||(o[2]=p("span",null,"Chức năng",-1)),(C(!0),E(le,null,He(I(e).danhMucs,a=>(C(),E("li",{key:a.id},[p("button",{onClick:l=>n(a)},X(a.isEditing?"Lưu":"Sửa"),9,cA),p("button",{onClick:l=>I(e).deleteDanhMuc(a.id)},"Xoá",8,uA)]))),128))])]),p("div",fA,[Ae(p("input",{type:"text",placeholder:"Tên danh mục","onUpdate:modelValue":o[0]||(o[0]=a=>I(e).nameValue=a),onKeyup:wr(i,["enter"])},null,544),[[We,I(e).nameValue]]),p("button",{class:"addTable",onClick:i},"Thêm")])]))}},hA=ye(dA,[["__scopeId","data-v-db155937"]]),pA={key:1,class:"admin-container"},mA={class:"addContainer"},gA=["value"],_A=["value"],vA={class:"movie-table"},yA=["onUpdate:modelValue"],bA={key:1},xA=["onUpdate:modelValue"],wA=["value"],CA={key:1},IA=["onUpdate:modelValue"],EA={key:1,class:"p"},SA=["onUpdate:modelValue"],TA=["src"],kA=["onUpdate:modelValue"],AA=["value"],RA={key:1},PA=["onClick"],NA=["onClick"],OA={class:"pagination"},MA=["disabled"],DA=["disabled"],Dl=3,LA={__name:"productAdmin",setup(t){const e=ys(),n=Cf(),s=If(),i=Wt(),r=ae(1),o=ae(""),a=ae(""),l=ae(""),c=ae(""),u=ae("1"),f=async()=>{if(o.value.trim()===""||a.value.trim()===""||l.value.trim()===""||c.value.trim()===""||u.value.trim()===""){alert("Vui lòng điền đầy đủ thông tin phim!");return}await e.addMovie(o.value,a.value,l.value,c.value,u.value),o.value="",a.value="",l.value="",c.value="",u.value=""},d=_=>{_.isEditing?e.updateMovie(_.firebaseId,{name:_.tempName,genre:_.tempTheLoai,description:_.tempDes,image:_.tempImage,day:_.tempDay}):(_.tempName=_.name,_.tempTheLoai=_.genre,_.tempDes=_.description,_.tempImage=_.image,_.tempDay=_.day),_.isEditing=!_.isEditing};Nt(()=>{e.fetchMovies(),n.fetchDanhMucs()});const h=ne(()=>{const _=[...e.movies].sort((b,R)=>R.firebaseId.localeCompare(b.firebaseId)),w=(r.value-1)*Dl,m=w+Dl;return _.slice(w,m)}),y=ne(()=>Math.ceil(e.movies.length/Dl));return(_,w)=>I(i).loading?(C(),qe(bs,{key:0})):(C(),E("div",pA,[w[9]||(w[9]=p("span",{class:"fb-title"},"Quản lý phim",-1)),p("div",mA,[Ae(p("input",{type:"text",placeholder:"Tên phim","onUpdate:modelValue":w[0]||(w[0]=m=>o.value=m)},null,512),[[We,o.value]]),Ae(p("select",{"onUpdate:modelValue":w[1]||(w[1]=m=>a.value=m)},[(C(!0),E(le,null,He(I(n).danhMucs,m=>(C(),E("option",{key:m.firebaseId,value:m.name},X(m.name),9,gA))),128))],512),[[ii,a.value]]),Ae(p("input",{type:"text",placeholder:"Mô tả","onUpdate:modelValue":w[2]||(w[2]=m=>l.value=m)},null,512),[[We,l.value]]),Ae(p("input",{type:"text",placeholder:"Hình ảnh (URL)","onUpdate:modelValue":w[3]||(w[3]=m=>c.value=m)},null,512),[[We,c.value]]),Ae(p("select",{"onUpdate:modelValue":w[4]||(w[4]=m=>u.value=m)},[(C(!0),E(le,null,He(I(s).day,m=>(C(),E("option",{key:m,value:m},X(I(s).days[m]),9,_A))),128))],512),[[ii,u.value]]),p("button",{class:"addTable",onClick:w[5]||(w[5]=m=>f())},"Thêm")]),p("table",vA,[w[8]||(w[8]=p("thead",null,[p("tr",null,[p("th",null,"Tên phim"),p("th",null,"Thể loại"),p("th",null,"Mô tả"),p("th",null,"Hình ảnh"),p("th",null,"Ngày chiếu"),p("th",null,"Yêu thích"),p("th",null,"Chức năng")])],-1)),p("tbody",null,[(C(!0),E(le,null,He(h.value,m=>(C(),E("tr",{key:m.firebaseId},[p("td",null,[m.isEditing?Ae((C(),E("input",{key:0,"onUpdate:modelValue":b=>m.tempName=b},null,8,yA)),[[We,m.tempName]]):(C(),E("p",bA,X(m.name),1))]),p("td",null,[m.isEditing?Ae((C(),E("select",{key:0,"onUpdate:modelValue":b=>m.tempTheLoai=b},[(C(!0),E(le,null,He(I(n).danhMucs,b=>(C(),E("option",{key:b.firebaseId,value:b.name},X(b.name),9,wA))),128))],8,xA)),[[ii,m.tempTheLoai]]):(C(),E("p",CA,X(m.genre),1))]),p("td",null,[m.isEditing?Ae((C(),E("input",{key:0,"onUpdate:modelValue":b=>m.tempDes=b},null,8,IA)),[[We,m.tempDes]]):(C(),E("p",EA,X(m.description),1))]),p("td",null,[m.isEditing?Ae((C(),E("input",{key:0,"onUpdate:modelValue":b=>m.tempImage=b,placeholder:"Nhập URL hình ảnh mới"},null,8,SA)),[[We,m.tempImage]]):(C(),E("img",{key:1,src:m.image,alt:"Hình ảnh phim",class:"movie-img"},null,8,TA))]),p("td",null,[m.isEditing?Ae((C(),E("select",{key:0,"onUpdate:modelValue":b=>m.tempDay=b},[(C(!0),E(le,null,He(I(s).day,b=>(C(),E("option",{key:b,value:b},X(I(s).days[b]),9,AA))),128))],8,kA)),[[ii,m.tempDay]]):(C(),E("p",RA,X(I(s).days[m.day]),1))]),p("td",null,[p("p",null,X(m.favorite||0),1)]),p("td",null,[p("button",{onClick:b=>d(m)},X(m.isEditing?"Lưu":"Sửa"),9,PA),p("button",{onClick:b=>I(e).deleteMovie(m.firebaseId)},"Xoá",8,NA)])]))),128))])]),p("div",OA,[p("button",{onClick:w[6]||(w[6]=m=>r.value--),disabled:r.value===1},"Trang trước",8,MA),p("span",null,"Trang "+X(r.value)+" / "+X(y.value),1),p("button",{onClick:w[7]||(w[7]=m=>r.value++),disabled:r.value>=y.value},"Trang sau",8,DA)])]))}},FA=ye(LA,[["__scopeId","data-v-54282bcd"]]),$A={key:1,class:"admin-container"},UA={class:"addContainer"},VA=["value"],BA={class:"movie-table"},jA=["onUpdate:modelValue"],HA=["href"],WA=["onClick"],zA=["onClick"],GA={class:"pagination"},KA=["disabled"],qA=["disabled"],Ll=5,YA={__name:"chapAdmin",setup(t){const e=ys(),n=Wt(),s=ae(null),i=ae({tap:"",url:""}),r=ae({}),o=ae(1);Nt(()=>{e.fetchMovies()});const a=()=>{if(s.value&&s.value.chapters){r.value=Object.fromEntries(Object.entries(s.value.chapters).map(([h,y])=>[h,{...y,isEditing:!1,tempUrl:y.url}]));const d=Math.max(...Object.keys(r.value).map(Number),0);i.value.tap=d+1}else r.value={},i.value.tap=1},l=async()=>{if(!s.value||i.value.tap===""||!i.value.url.trim()){alert("Vui lòng nhập đầy đủ thông tin!");return}await e.addChapToMovie(s.value.firebaseId,i.value.tap,i.value.url),r.value[i.value.tap]={url:i.value.url},i.value.tap=Number(i.value.tap)+1,i.value.url=""},c=async d=>{if(!s.value)return;await e.deleteChap(s.value.firebaseId,d),delete r.value[d];const h=Math.max(...Object.keys(r.value).map(Number),0);i.value.tap=h+1},u=d=>{d.isEditing?e.updateChapInMovie(s.value.firebaseId,d.id,d.tempUrl).then(()=>{d.url=d.tempUrl,alert("Cập nhật tập thành công!")}).catch(h=>{console.error("Lỗi khi cập nhật tập:",h),alert("Có lỗi xảy ra khi cập nhật tập!")}):d.tempUrl=d.url,d.isEditing=!d.isEditing},f=ne(()=>{const d=(o.value-1)*Ll,h=d+Ll;return Object.entries(r.value).slice(d,h).map(([y,_])=>({tap:y,..._}))});return(d,h)=>{const y=an("Loading");return I(n).loading?(C(),qe(y,{key:0})):(C(),E("div",$A,[h[7]||(h[7]=p("span",{class:"fb-title"},"Quản lý tập",-1)),p("div",UA,[h[5]||(h[5]=p("h3",null,"Thêm tập mới",-1)),Ae(p("select",{"onUpdate:modelValue":h[0]||(h[0]=_=>s.value=_),onChange:a},[(C(!0),E(le,null,He(I(e).movies,_=>(C(),E("option",{key:_.firebaseId,value:_},X(_.name),9,VA))),128))],544),[[ii,s.value]]),Ae(p("input",{type:"number",placeholder:"Số tập","onUpdate:modelValue":h[1]||(h[1]=_=>i.value.tap=_),min:"1"},null,512),[[We,i.value.tap]]),Ae(p("input",{type:"text",placeholder:"URL","onUpdate:modelValue":h[2]||(h[2]=_=>i.value.url=_)},null,512),[[We,i.value.url]]),p("button",{onClick:l},"Thêm tập")]),p("table",BA,[h[6]||(h[6]=p("thead",null,[p("tr",null,[p("th",null,"Tập"),p("th",null,"URL"),p("th",null,"Chức năng")])],-1)),p("tbody",null,[(C(!0),E(le,null,He(f.value,(_,w)=>(C(),E("tr",{key:w},[p("td",null,X(_.tap),1),p("td",null,[_.isEditing?Ae((C(),E("input",{key:0,"onUpdate:modelValue":m=>_.tempUrl=m},null,8,jA)),[[We,_.tempUrl]]):(C(),E("a",{key:1,href:_.url,target:"_blank",style:{color:"deepskyblue"}},X(_.url),9,HA))]),p("td",null,[p("button",{onClick:m=>u(w)},X(_.isEditing?"Lưu":"Sửa"),9,WA),p("button",{onClick:m=>c(_.tap)},"Xoá",8,zA)])]))),128))])]),p("div",GA,[p("button",{onClick:h[3]||(h[3]=_=>o.value--),disabled:o.value===1},"Trước",8,KA),p("span",null,"Trang "+X(o.value),1),p("button",{onClick:h[4]||(h[4]=_=>o.value++),disabled:o.value*Ll>=Object.keys(r.value).length},"Tiếp",8,qA)])]))}}},QA=ye(YA,[["__scopeId","data-v-4ea35293"]]),XA={},JA={class:"admin-container"};function ZA(t,e){return C(),E("div",JA,e[0]||(e[0]=[p("span",{class:"fb-title"},"Quản lý tài khoản ",-1)]))}const e8=ye(XA,[["render",ZA],["__scopeId","data-v-9599cb7d"]]),t8={class:"mainmain"},n8={class:"main"},s8={class:"main-container"},i8={key:1,class:"profile-container"},r8={class:"edit-profile"},o8={class:"avt"},a8=["src"],l8={key:1},c8={class:"file-upload"},u8={__name:"ProfileView",setup(t){var c,u;const e=Wt(),n=un(),s=ae(!1),i=ae(((c=n.currentUser)==null?void 0:c.name)??""),r=ae(((u=n.currentUser)==null?void 0:u.avatarUrl)??""),o=async()=>{s.value&&await a(i.value),s.value=!s.value},a=async f=>{var d;try{const h=(d=n.currentUser)==null?void 0:d.firebaseId;if(!h){console.error("Không tìm thấy ID người dùng.");return}await yt(fe(de,`users/${h}`),{name:f}),n.currentUser.name=f,await n.fetchUsers(),console.log("Tên đã được cập nhật!")}catch(h){console.error("Lỗi khi cập nhật tên:",h)}},l=async f=>{const d=f.target.files[0];if(!d){alert("Vui lòng chọn một tệp.");return}const h=new FileReader;h.onload=async()=>{var y;try{const _=(y=n.currentUser)==null?void 0:y.firebaseId;if(!_){alert("Không tìm thấy ID người dùng.");return}const w=h.result;await yt(fe(de,`users/${_}`),{avatarUrl:w}),n.currentUser.avatarUrl=w,r.value=w,console.log("Avatar đã được cập nhật!")}catch(_){console.error("Lỗi khi upload avatar:",_)}},h.readAsDataURL(d)};return(f,d)=>{var h,y;return C(),E(le,null,[$(Dn),$(Ln),p("div",t8,[p("div",n8,[p("main",null,[p("div",s8,[I(e).loading?(C(),qe(bs,{key:0})):(C(),E("div",i8,[d[2]||(d[2]=p("span",null,"Thông tin tài khoản",-1)),p("div",r8,[p("div",o8,[p("img",{src:((h=I(n).currentUser)==null?void 0:h.avatarUrl)||"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrY7dJj0QnImGcypj9oBdr9u9joHrxgaKY_g&s",alt:"Avatar",class:"avatar"},null,8,a8),p("p",null,[s.value?Ae((C(),E("input",{key:0,type:"text","onUpdate:modelValue":d[0]||(d[0]=_=>i.value=_)},null,512)),[[We,i.value]]):(C(),E("b",l8,X(((y=I(n).currentUser)==null?void 0:y.name)??"Chưa có tên"),1)),p("button",{onClick:o,class:"btn-editName"},X(s.value?"Lưu":"✏️"),1)]),p("div",c8,[d[1]||(d[1]=p("label",{for:"fileInput",class:"custom-upload-btn"}," Chọn ảnh ",-1)),p("input",{id:"fileInput",type:"file",onChange:l,accept:"image/*",class:"hidden-input"},null,32)])])])]))])])])]),p("footer",null,[$(On)])],64)}}},f8=ye(u8,[["__scopeId","data-v-66872497"]]),Bc=oC({history:Fw(),scrollBehavior(t,e,n){return n||{top:0,behavior:"smooth"}},routes:[{path:"/",name:"home",component:_4},{path:"/cartoon/:name/",name:"phim",component:uk},{path:"/search",name:"SearchResults",component:bk},{path:"/danhMuc/:name/:id",name:"danhMuc",component:Rk},{path:"/chap/:name/:id",name:"chap",component:Hk},{path:"/chatGroup/",name:"chat",component:o5},{path:"/login/",name:"login",component:k5},{path:"/favorite/",name:"favorite",component:j5},{path:"/admin/",name:"admin",component:iA,children:[{path:"danh-muc",component:hA},{path:"product",component:FA},{path:"chap",component:QA},{path:"user",component:e8}]},{path:"/:pathMatch(.*)*",name:"404",component:sv},{path:"/profile",name:"profile",component:f8}]}),qa=Ux(lC);iy.add(cy,ay);qa.component("font-awesome-icon",Zx);qa.use(ew());qa.use(Bc);qa.mount("#app");
