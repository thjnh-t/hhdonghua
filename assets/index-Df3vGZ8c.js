(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function tv(t,e,n){return(e=sv(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ef(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,s)}return n}function M(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ef(Object(n),!0).forEach(function(s){tv(t,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ef(Object(n)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(n,s))})}return t}function nv(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var s=n.call(t,e);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function sv(t){var e=nv(t,"string");return typeof e=="symbol"?e:e+""}const Sf=()=>{};let Vc={},gp={},_p=null,vp={mark:Sf,measure:Sf};try{typeof window<"u"&&(Vc=window),typeof document<"u"&&(gp=document),typeof MutationObserver<"u"&&(_p=MutationObserver),typeof performance<"u"&&(vp=performance)}catch{}const{userAgent:Tf=""}=Vc.navigator||{},os=Vc,Fe=gp,kf=_p,io=vp;os.document;const Rn=!!Fe.documentElement&&!!Fe.head&&typeof Fe.addEventListener=="function"&&typeof Fe.createElement=="function",yp=~Tf.indexOf("MSIE")||~Tf.indexOf("Trident/");var iv=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,rv=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,bp={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},ov={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},xp=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],nt="classic",ua="duotone",av="sharp",lv="sharp-duotone",wp=[nt,ua,av,lv],cv={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},uv={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},fv=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),dv={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},hv=["fak","fa-kit","fakd","fa-kit-duotone"],Af={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},pv=["kit"],mv={kit:{"fa-kit":"fak"}},gv=["fak","fakd"],_v={kit:{fak:"fa-kit"}},Rf={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},ro={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},vv=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],yv=["fak","fa-kit","fakd","fa-kit-duotone"],bv={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},xv={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},wv={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Dl={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},Cv=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Ll=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...vv,...Cv],Iv=["solid","regular","light","thin","duotone","brands"],Cp=[1,2,3,4,5,6,7,8,9,10],Ev=Cp.concat([11,12,13,14,15,16,17,18,19,20]),Sv=[...Object.keys(wv),...Iv,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ro.GROUP,ro.SWAP_OPACITY,ro.PRIMARY,ro.SECONDARY].concat(Cp.map(t=>"".concat(t,"x"))).concat(Ev.map(t=>"w-".concat(t))),Tv={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const En="___FONT_AWESOME___",Fl=16,Ip="fa",Ep="svg-inline--fa",Ms="data-fa-i2svg",$l="data-fa-pseudo-element",kv="data-fa-pseudo-element-pending",Bc="data-prefix",jc="data-icon",Pf="fontawesome-i2svg",Av="async",Rv=["HTML","HEAD","STYLE","SCRIPT"],Sp=(()=>{try{return!0}catch{return!1}})();function Ur(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[nt]}})}const Tp=M({},bp);Tp[nt]=M(M(M(M({},{"fa-duotone":"duotone"}),bp[nt]),Af.kit),Af["kit-duotone"]);const Pv=Ur(Tp),Ul=M({},dv);Ul[nt]=M(M(M(M({},{duotone:"fad"}),Ul[nt]),Rf.kit),Rf["kit-duotone"]);const Nf=Ur(Ul),Vl=M({},Dl);Vl[nt]=M(M({},Vl[nt]),_v.kit);const Hc=Ur(Vl),Bl=M({},xv);Bl[nt]=M(M({},Bl[nt]),mv.kit);Ur(Bl);const Nv=iv,kp="fa-layers-text",Ov=rv,Mv=M({},cv);Ur(Mv);const Dv=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ya=ov,Lv=[...pv,...Sv],Xi=os.FontAwesomeConfig||{};function Fv(t){var e=Fe.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function $v(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}Fe&&typeof Fe.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,s]=e;const i=$v(Fv(n));i!=null&&(Xi[s]=i)});const Ap={styleDefault:"solid",familyDefault:nt,cssPrefix:Ip,replacementClass:Ep,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Xi.familyPrefix&&(Xi.cssPrefix=Xi.familyPrefix);const mi=M(M({},Ap),Xi);mi.autoReplaceSvg||(mi.observeMutations=!1);const Y={};Object.keys(Ap).forEach(t=>{Object.defineProperty(Y,t,{enumerable:!0,set:function(e){mi[t]=e,Ji.forEach(n=>n(Y))},get:function(){return mi[t]}})});Object.defineProperty(Y,"familyPrefix",{enumerable:!0,set:function(t){mi.cssPrefix=t,Ji.forEach(e=>e(Y))},get:function(){return mi.cssPrefix}});os.FontAwesomeConfig=Y;const Ji=[];function Uv(t){return Ji.push(t),()=>{Ji.splice(Ji.indexOf(t),1)}}const Fn=Fl,Zt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Vv(t){if(!t||!Rn)return;const e=Fe.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=Fe.head.childNodes;let s=null;for(let i=n.length-1;i>-1;i--){const r=n[i],o=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(s=r)}return Fe.head.insertBefore(e,s),t}const Bv="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function pr(){let t=12,e="";for(;t-- >0;)e+=Bv[Math.random()*62|0];return e}function Ai(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Wc(t){return t.classList?Ai(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Rp(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function jv(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Rp(t[n]),'" '),"").trim()}function fa(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function zc(t){return t.size!==Zt.size||t.x!==Zt.x||t.y!==Zt.y||t.rotate!==Zt.rotate||t.flipX||t.flipY}function Hv(t){let{transform:e,containerWidth:n,iconWidth:s}=t;const i={transform:"translate(".concat(n/2," 256)")},r="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(r," ").concat(o," ").concat(a)},c={transform:"translate(".concat(s/2*-1," -256)")};return{outer:i,inner:l,path:c}}function Wv(t){let{transform:e,width:n=Fl,height:s=Fl,startCentered:i=!1}=t,r="";return i&&yp?r+="translate(".concat(e.x/Fn-n/2,"em, ").concat(e.y/Fn-s/2,"em) "):i?r+="translate(calc(-50% + ".concat(e.x/Fn,"em), calc(-50% + ").concat(e.y/Fn,"em)) "):r+="translate(".concat(e.x/Fn,"em, ").concat(e.y/Fn,"em) "),r+="scale(".concat(e.size/Fn*(e.flipX?-1:1),", ").concat(e.size/Fn*(e.flipY?-1:1),") "),r+="rotate(".concat(e.rotate,"deg) "),r}var zv=`:root, :host {
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
}`;function Pp(){const t=Ip,e=Ep,n=Y.cssPrefix,s=Y.replacementClass;let i=zv;if(n!==t||s!==e){const r=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(r,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(s))}return i}let Of=!1;function Qa(){Y.autoAddCss&&!Of&&(Vv(Pp()),Of=!0)}var Gv={mixout(){return{dom:{css:Pp,insertCss:Qa}}},hooks(){return{beforeDOMElementCreation(){Qa()},beforeI2svg(){Qa()}}}};const Sn=os||{};Sn[En]||(Sn[En]={});Sn[En].styles||(Sn[En].styles={});Sn[En].hooks||(Sn[En].hooks={});Sn[En].shims||(Sn[En].shims=[]);var en=Sn[En];const Np=[],Op=function(){Fe.removeEventListener("DOMContentLoaded",Op),So=1,Np.map(t=>t())};let So=!1;Rn&&(So=(Fe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Fe.readyState),So||Fe.addEventListener("DOMContentLoaded",Op));function Kv(t){Rn&&(So?setTimeout(t,0):Np.push(t))}function Vr(t){const{tag:e,attributes:n={},children:s=[]}=t;return typeof t=="string"?Rp(t):"<".concat(e," ").concat(jv(n),">").concat(s.map(Vr).join(""),"</").concat(e,">")}function Mf(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Xa=function(e,n,s,i){var r=Object.keys(e),o=r.length,a=n,l,c,u;for(s===void 0?(l=1,u=e[r[0]]):(l=0,u=s);l<o;l++)c=r[l],u=a(u,e[c],c,e);return u};function qv(t){const e=[];let n=0;const s=t.length;for(;n<s;){const i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<s){const r=t.charCodeAt(n++);(r&64512)==56320?e.push(((i&1023)<<10)+(r&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function jl(t){const e=qv(t);return e.length===1?e[0].toString(16):null}function Yv(t,e){const n=t.length;let s=t.charCodeAt(e),i;return s>=55296&&s<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(s-55296)*1024+i-56320+65536:s}function Df(t){return Object.keys(t).reduce((e,n)=>{const s=t[n];return!!s.icon?e[s.iconName]=s.icon:e[n]=s,e},{})}function Hl(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:s=!1}=n,i=Df(e);typeof en.hooks.addPack=="function"&&!s?en.hooks.addPack(t,Df(e)):en.styles[t]=M(M({},en.styles[t]||{}),i),t==="fas"&&Hl("fa",e)}const{styles:mr,shims:Qv}=en,Mp=Object.keys(Hc),Xv=Mp.reduce((t,e)=>(t[e]=Object.keys(Hc[e]),t),{});let Gc=null,Dp={},Lp={},Fp={},$p={},Up={};function Jv(t){return~Lv.indexOf(t)}function Zv(t,e){const n=e.split("-"),s=n[0],i=n.slice(1).join("-");return s===t&&i!==""&&!Jv(i)?i:null}const Vp=()=>{const t=s=>Xa(mr,(i,r,o)=>(i[o]=Xa(r,s,{}),i),{});Dp=t((s,i,r)=>(i[3]&&(s[i[3]]=r),i[2]&&i[2].filter(a=>typeof a=="number").forEach(a=>{s[a.toString(16)]=r}),s)),Lp=t((s,i,r)=>(s[r]=r,i[2]&&i[2].filter(a=>typeof a=="string").forEach(a=>{s[a]=r}),s)),Up=t((s,i,r)=>{const o=i[2];return s[r]=r,o.forEach(a=>{s[a]=r}),s});const e="far"in mr||Y.autoFetchSvg,n=Xa(Qv,(s,i)=>{const r=i[0];let o=i[1];const a=i[2];return o==="far"&&!e&&(o="fas"),typeof r=="string"&&(s.names[r]={prefix:o,iconName:a}),typeof r=="number"&&(s.unicodes[r.toString(16)]={prefix:o,iconName:a}),s},{names:{},unicodes:{}});Fp=n.names,$p=n.unicodes,Gc=da(Y.styleDefault,{family:Y.familyDefault})};Uv(t=>{Gc=da(t.styleDefault,{family:Y.familyDefault})});Vp();function Kc(t,e){return(Dp[t]||{})[e]}function e1(t,e){return(Lp[t]||{})[e]}function Ts(t,e){return(Up[t]||{})[e]}function Bp(t){return Fp[t]||{prefix:null,iconName:null}}function t1(t){const e=$p[t],n=Kc("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function as(){return Gc}const jp=()=>({prefix:null,iconName:null,rest:[]});function n1(t){let e=nt;const n=Mp.reduce((s,i)=>(s[i]="".concat(Y.cssPrefix,"-").concat(i),s),{});return wp.forEach(s=>{(t.includes(n[s])||t.some(i=>Xv[s].includes(i)))&&(e=s)}),e}function da(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=nt}=e,s=Pv[n][t];if(n===ua&&!t)return"fad";const i=Nf[n][t]||Nf[n][s],r=t in en.styles?t:null;return i||r||null}function s1(t){let e=[],n=null;return t.forEach(s=>{const i=Zv(Y.cssPrefix,s);i?n=i:s&&e.push(s)}),{iconName:n,rest:e}}function Lf(t){return t.sort().filter((e,n,s)=>s.indexOf(e)===n)}function ha(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let s=null;const i=Ll.concat(yv),r=Lf(t.filter(f=>i.includes(f))),o=Lf(t.filter(f=>!Ll.includes(f))),a=r.filter(f=>(s=f,!xp.includes(f))),[l=null]=a,c=n1(r),u=M(M({},s1(o)),{},{prefix:da(l,{family:c})});return M(M(M({},u),a1({values:t,family:c,styles:mr,config:Y,canonical:u,givenPrefix:s})),i1(n,s,u))}function i1(t,e,n){let{prefix:s,iconName:i}=n;if(t||!s||!i)return{prefix:s,iconName:i};const r=e==="fa"?Bp(i):{},o=Ts(s,i);return i=r.iconName||o||i,s=r.prefix||s,s==="far"&&!mr.far&&mr.fas&&!Y.autoFetchSvg&&(s="fas"),{prefix:s,iconName:i}}const r1=wp.filter(t=>t!==nt||t!==ua),o1=Object.keys(Dl).filter(t=>t!==nt).map(t=>Object.keys(Dl[t])).flat();function a1(t){const{values:e,family:n,canonical:s,givenPrefix:i="",styles:r={},config:o={}}=t,a=n===ua,l=e.includes("fa-duotone")||e.includes("fad"),c=o.familyDefault==="duotone",u=s.prefix==="fad"||s.prefix==="fa-duotone";if(!a&&(l||c||u)&&(s.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(s.prefix="fab"),!s.prefix&&r1.includes(n)&&(Object.keys(r).find(d=>o1.includes(d))||o.autoFetchSvg)){const d=fv.get(n).defaultShortPrefixId;s.prefix=d,s.iconName=Ts(s.prefix,s.iconName)||s.iconName}return(s.prefix==="fa"||i==="fa")&&(s.prefix=as()||"fas"),s}class l1{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),s=0;s<e;s++)n[s]=arguments[s];const i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(r=>{this.definitions[r]=M(M({},this.definitions[r]||{}),i[r]),Hl(r,i[r]);const o=Hc[nt][r];o&&Hl(o,i[r]),Vp()})}reset(){this.definitions={}}_pullDefinitions(e,n){const s=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(s).map(i=>{const{prefix:r,iconName:o,icon:a}=s[i],l=a[2];e[r]||(e[r]={}),l.length>0&&l.forEach(c=>{typeof c=="string"&&(e[r][c]=a)}),e[r][o]=a}),e}}let Ff=[],ni={};const ri={},c1=Object.keys(ri);function u1(t,e){let{mixoutsTo:n}=e;return Ff=t,ni={},Object.keys(ri).forEach(s=>{c1.indexOf(s)===-1&&delete ri[s]}),Ff.forEach(s=>{const i=s.mixout?s.mixout():{};if(Object.keys(i).forEach(r=>{typeof i[r]=="function"&&(n[r]=i[r]),typeof i[r]=="object"&&Object.keys(i[r]).forEach(o=>{n[r]||(n[r]={}),n[r][o]=i[r][o]})}),s.hooks){const r=s.hooks();Object.keys(r).forEach(o=>{ni[o]||(ni[o]=[]),ni[o].push(r[o])})}s.provides&&s.provides(ri)}),n}function Wl(t,e){for(var n=arguments.length,s=new Array(n>2?n-2:0),i=2;i<n;i++)s[i-2]=arguments[i];return(ni[t]||[]).forEach(o=>{e=o.apply(null,[e,...s])}),e}function Ds(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),s=1;s<e;s++)n[s-1]=arguments[s];(ni[t]||[]).forEach(r=>{r.apply(null,n)})}function ls(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return ri[t]?ri[t].apply(null,e):void 0}function zl(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||as();if(e)return e=Ts(n,e)||e,Mf(Hp.definitions,n,e)||Mf(en.styles,n,e)}const Hp=new l1,f1=()=>{Y.autoReplaceSvg=!1,Y.observeMutations=!1,Ds("noAuto")},d1={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Rn?(Ds("beforeI2svg",t),ls("pseudoElements2svg",t),ls("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;Y.autoReplaceSvg===!1&&(Y.autoReplaceSvg=!0),Y.observeMutations=!0,Kv(()=>{p1({autoReplaceSvgRoot:e}),Ds("watch",t)})}},h1={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Ts(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=da(t[0]);return{prefix:n,iconName:Ts(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(Y.cssPrefix,"-"))>-1||t.match(Nv))){const e=ha(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||as(),iconName:Ts(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=as();return{prefix:e,iconName:Ts(e,t)||t}}}},xt={noAuto:f1,config:Y,dom:d1,parse:h1,library:Hp,findIconDefinition:zl,toHtml:Vr},p1=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=Fe}=t;(Object.keys(en.styles).length>0||Y.autoFetchSvg)&&Rn&&Y.autoReplaceSvg&&xt.dom.i2svg({node:e})};function pa(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>Vr(n))}}),Object.defineProperty(t,"node",{get:function(){if(!Rn)return;const n=Fe.createElement("div");return n.innerHTML=t.html,n.children}}),t}function m1(t){let{children:e,main:n,mask:s,attributes:i,styles:r,transform:o}=t;if(zc(o)&&n.found&&!s.found){const{width:a,height:l}=n,c={x:a/l/2,y:.5};i.style=fa(M(M({},r),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function g1(t){let{prefix:e,iconName:n,children:s,attributes:i,symbol:r}=t;const o=r===!0?"".concat(e,"-").concat(Y.cssPrefix,"-").concat(n):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:M(M({},i),{},{id:o}),children:s}]}]}function qc(t){const{icons:{main:e,mask:n},prefix:s,iconName:i,transform:r,symbol:o,title:a,maskId:l,titleId:c,extra:u,watchable:f=!1}=t,{width:d,height:p}=n.found?n:e,y=gv.includes(s),_=[Y.replacementClass,i?"".concat(Y.cssPrefix,"-").concat(i):""].filter(G=>u.classes.indexOf(G)===-1).filter(G=>G!==""||!!G).concat(u.classes).join(" ");let w={children:[],attributes:M(M({},u.attributes),{},{"data-prefix":s,"data-icon":i,class:_,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(d," ").concat(p)})};const v=y&&!~u.classes.indexOf("fa-fw")?{width:"".concat(d/p*16*.0625,"em")}:{};f&&(w.attributes[Ms]=""),a&&(w.children.push({tag:"title",attributes:{id:w.attributes["aria-labelledby"]||"title-".concat(c||pr())},children:[a]}),delete w.attributes.title);const b=M(M({},w),{},{prefix:s,iconName:i,main:e,mask:n,maskId:l,transform:r,symbol:o,styles:M(M({},v),u.styles)}),{children:R,attributes:O}=n.found&&e.found?ls("generateAbstractMask",b)||{children:[],attributes:{}}:ls("generateAbstractIcon",b)||{children:[],attributes:{}};return b.children=R,b.attributes=O,o?g1(b):m1(b)}function $f(t){const{content:e,width:n,height:s,transform:i,title:r,extra:o,watchable:a=!1}=t,l=M(M(M({},o.attributes),r?{title:r}:{}),{},{class:o.classes.join(" ")});a&&(l[Ms]="");const c=M({},o.styles);zc(i)&&(c.transform=Wv({transform:i,startCentered:!0,width:n,height:s}),c["-webkit-transform"]=c.transform);const u=fa(c);u.length>0&&(l.style=u);const f=[];return f.push({tag:"span",attributes:l,children:[e]}),r&&f.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),f}function _1(t){const{content:e,title:n,extra:s}=t,i=M(M(M({},s.attributes),n?{title:n}:{}),{},{class:s.classes.join(" ")}),r=fa(s.styles);r.length>0&&(i.style=r);const o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:Ja}=en;function Gl(t){const e=t[0],n=t[1],[s]=t.slice(4);let i=null;return Array.isArray(s)?i={tag:"g",attributes:{class:"".concat(Y.cssPrefix,"-").concat(Ya.GROUP)},children:[{tag:"path",attributes:{class:"".concat(Y.cssPrefix,"-").concat(Ya.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(Y.cssPrefix,"-").concat(Ya.PRIMARY),fill:"currentColor",d:s[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:i}}const v1={found:!1,width:512,height:512};function y1(t,e){!Sp&&!Y.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Kl(t,e){let n=e;return e==="fa"&&Y.styleDefault!==null&&(e=as()),new Promise((s,i)=>{if(n==="fa"){const r=Bp(t)||{};t=r.iconName||t,e=r.prefix||e}if(t&&e&&Ja[e]&&Ja[e][t]){const r=Ja[e][t];return s(Gl(r))}y1(t,e),s(M(M({},v1),{},{icon:Y.showMissingIcons&&t?ls("missingIconAbstract")||{}:{}}))})}const Uf=()=>{},ql=Y.measurePerformance&&io&&io.mark&&io.measure?io:{mark:Uf,measure:Uf},Yi='FA "6.7.2"',b1=t=>(ql.mark("".concat(Yi," ").concat(t," begins")),()=>Wp(t)),Wp=t=>{ql.mark("".concat(Yi," ").concat(t," ends")),ql.measure("".concat(Yi," ").concat(t),"".concat(Yi," ").concat(t," begins"),"".concat(Yi," ").concat(t," ends"))};var Yc={begin:b1,end:Wp};const mo=()=>{};function Vf(t){return typeof(t.getAttribute?t.getAttribute(Ms):null)=="string"}function x1(t){const e=t.getAttribute?t.getAttribute(Bc):null,n=t.getAttribute?t.getAttribute(jc):null;return e&&n}function w1(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(Y.replacementClass)}function C1(){return Y.autoReplaceSvg===!0?go.replace:go[Y.autoReplaceSvg]||go.replace}function I1(t){return Fe.createElementNS("http://www.w3.org/2000/svg",t)}function E1(t){return Fe.createElement(t)}function zp(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?I1:E1}=e;if(typeof t=="string")return Fe.createTextNode(t);const s=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(r){s.setAttribute(r,t.attributes[r])}),(t.children||[]).forEach(function(r){s.appendChild(zp(r,{ceFn:n}))}),s}function S1(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const go={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(zp(n),e)}),e.getAttribute(Ms)===null&&Y.keepOriginalSource){let n=Fe.createComment(S1(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Wc(e).indexOf(Y.replacementClass))return go.replace(t);const s=new RegExp("".concat(Y.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const r=n[0].attributes.class.split(" ").reduce((o,a)=>(a===Y.replacementClass||a.match(s)?o.toSvg.push(a):o.toNode.push(a),o),{toNode:[],toSvg:[]});n[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",r.toNode.join(" "))}const i=n.map(r=>Vr(r)).join(`
`);e.setAttribute(Ms,""),e.innerHTML=i}};function Bf(t){t()}function Gp(t,e){const n=typeof e=="function"?e:mo;if(t.length===0)n();else{let s=Bf;Y.mutateApproach===Av&&(s=os.requestAnimationFrame||Bf),s(()=>{const i=C1(),r=Yc.begin("mutate");t.map(i),r(),n()})}}let Qc=!1;function Kp(){Qc=!0}function Yl(){Qc=!1}let To=null;function jf(t){if(!kf||!Y.observeMutations)return;const{treeCallback:e=mo,nodeCallback:n=mo,pseudoElementsCallback:s=mo,observeMutationsRoot:i=Fe}=t;To=new kf(r=>{if(Qc)return;const o=as();Ai(r).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!Vf(a.addedNodes[0])&&(Y.searchPseudoElements&&s(a.target),e(a.target)),a.type==="attributes"&&a.target.parentNode&&Y.searchPseudoElements&&s(a.target.parentNode),a.type==="attributes"&&Vf(a.target)&&~Dv.indexOf(a.attributeName))if(a.attributeName==="class"&&x1(a.target)){const{prefix:l,iconName:c}=ha(Wc(a.target));a.target.setAttribute(Bc,l||o),c&&a.target.setAttribute(jc,c)}else w1(a.target)&&n(a.target)})}),Rn&&To.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function T1(){To&&To.disconnect()}function k1(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((s,i)=>{const r=i.split(":"),o=r[0],a=r.slice(1);return o&&a.length>0&&(s[o]=a.join(":").trim()),s},{})),n}function A1(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),s=t.innerText!==void 0?t.innerText.trim():"";let i=ha(Wc(t));return i.prefix||(i.prefix=as()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&s.length>0&&(i.iconName=e1(i.prefix,t.innerText)||Kc(i.prefix,jl(t.innerText))),!i.iconName&&Y.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function R1(t){const e=Ai(t.attributes).reduce((i,r)=>(i.name!=="class"&&i.name!=="style"&&(i[r.name]=r.value),i),{}),n=t.getAttribute("title"),s=t.getAttribute("data-fa-title-id");return Y.autoA11y&&(n?e["aria-labelledby"]="".concat(Y.replacementClass,"-title-").concat(s||pr()):(e["aria-hidden"]="true",e.focusable="false")),e}function P1(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Zt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Hf(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:s,rest:i}=A1(t),r=R1(t),o=Wl("parseNodeAttributes",{},t);let a=e.styleParser?k1(t):[];return M({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:s,transform:Zt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:a,attributes:r}},o)}const{styles:N1}=en;function qp(t){const e=Y.autoReplaceSvg==="nest"?Hf(t,{styleParser:!1}):Hf(t);return~e.extra.classes.indexOf(kp)?ls("generateLayersText",t,e):ls("generateSvgReplacementMutation",t,e)}function O1(){return[...hv,...Ll]}function Wf(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Rn)return Promise.resolve();const n=Fe.documentElement.classList,s=u=>n.add("".concat(Pf,"-").concat(u)),i=u=>n.remove("".concat(Pf,"-").concat(u)),r=Y.autoFetchSvg?O1():xp.concat(Object.keys(N1));r.includes("fa")||r.push("fa");const o=[".".concat(kp,":not([").concat(Ms,"])")].concat(r.map(u=>".".concat(u,":not([").concat(Ms,"])"))).join(", ");if(o.length===0)return Promise.resolve();let a=[];try{a=Ai(t.querySelectorAll(o))}catch{}if(a.length>0)s("pending"),i("complete");else return Promise.resolve();const l=Yc.begin("onTree"),c=a.reduce((u,f)=>{try{const d=qp(f);d&&u.push(d)}catch(d){Sp||d.name==="MissingIcon"&&console.error(d)}return u},[]);return new Promise((u,f)=>{Promise.all(c).then(d=>{Gp(d,()=>{s("active"),s("complete"),i("pending"),typeof e=="function"&&e(),l(),u()})}).catch(d=>{l(),f(d)})})}function M1(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;qp(t).then(n=>{n&&Gp([n],e)})}function D1(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const s=(e||{}).icon?e:zl(e||{});let{mask:i}=n;return i&&(i=(i||{}).icon?i:zl(i||{})),t(s,M(M({},n),{},{mask:i}))}}const L1=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Zt,symbol:s=!1,mask:i=null,maskId:r=null,title:o=null,titleId:a=null,classes:l=[],attributes:c={},styles:u={}}=e;if(!t)return;const{prefix:f,iconName:d,icon:p}=t;return pa(M({type:"icon"},t),()=>(Ds("beforeDOMElementCreation",{iconDefinition:t,params:e}),Y.autoA11y&&(o?c["aria-labelledby"]="".concat(Y.replacementClass,"-title-").concat(a||pr()):(c["aria-hidden"]="true",c.focusable="false")),qc({icons:{main:Gl(p),mask:i?Gl(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:f,iconName:d,transform:M(M({},Zt),n),symbol:s,title:o,maskId:r,titleId:a,extra:{attributes:c,styles:u,classes:l}})))};var F1={mixout(){return{icon:D1(L1)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Wf,t.nodeCallback=M1,t}}},provides(t){t.i2svg=function(e){const{node:n=Fe,callback:s=()=>{}}=e;return Wf(n,s)},t.generateSvgReplacementMutation=function(e,n){const{iconName:s,title:i,titleId:r,prefix:o,transform:a,symbol:l,mask:c,maskId:u,extra:f}=n;return new Promise((d,p)=>{Promise.all([Kl(s,o),c.iconName?Kl(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(y=>{let[_,w]=y;d([e,qc({icons:{main:_,mask:w},prefix:o,iconName:s,transform:a,symbol:l,maskId:u,title:i,titleId:r,extra:f,watchable:!0})])}).catch(p)})},t.generateAbstractIcon=function(e){let{children:n,attributes:s,main:i,transform:r,styles:o}=e;const a=fa(o);a.length>0&&(s.style=a);let l;return zc(r)&&(l=ls("generateAbstractTransformGrouping",{main:i,transform:r,containerWidth:i.width,iconWidth:i.width})),n.push(l||i.icon),{children:n,attributes:s}}}},$1={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return pa({type:"layer"},()=>{Ds("beforeDOMElementCreation",{assembler:t,params:e});let s=[];return t(i=>{Array.isArray(i)?i.map(r=>{s=s.concat(r.abstract)}):s=s.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(Y.cssPrefix,"-layers"),...n].join(" ")},children:s}]})}}}},U1={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:s=[],attributes:i={},styles:r={}}=e;return pa({type:"counter",content:t},()=>(Ds("beforeDOMElementCreation",{content:t,params:e}),_1({content:t.toString(),title:n,extra:{attributes:i,styles:r,classes:["".concat(Y.cssPrefix,"-layers-counter"),...s]}})))}}}},V1={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Zt,title:s=null,classes:i=[],attributes:r={},styles:o={}}=e;return pa({type:"text",content:t},()=>(Ds("beforeDOMElementCreation",{content:t,params:e}),$f({content:t,transform:M(M({},Zt),n),title:s,extra:{attributes:r,styles:o,classes:["".concat(Y.cssPrefix,"-layers-text"),...i]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:s,transform:i,extra:r}=n;let o=null,a=null;if(yp){const l=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();o=c.width/l,a=c.height/l}return Y.autoA11y&&!s&&(r.attributes["aria-hidden"]="true"),Promise.resolve([e,$f({content:e.innerHTML,width:o,height:a,transform:i,title:s,extra:r,watchable:!0})])}}};const B1=new RegExp('"',"ug"),zf=[1105920,1112319],Gf=M(M(M(M({},{FontAwesome:{normal:"fas",400:"fas"}}),uv),Tv),bv),Ql=Object.keys(Gf).reduce((t,e)=>(t[e.toLowerCase()]=Gf[e],t),{}),j1=Object.keys(Ql).reduce((t,e)=>{const n=Ql[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function H1(t){const e=t.replace(B1,""),n=Yv(e,0),s=n>=zf[0]&&n<=zf[1],i=e.length===2?e[0]===e[1]:!1;return{value:jl(i?e[0]:e),isSecondary:s||i}}function W1(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),s=parseInt(e),i=isNaN(s)?"normal":s;return(Ql[n]||{})[i]||j1[n]}function Kf(t,e){const n="".concat(kv).concat(e.replace(":","-"));return new Promise((s,i)=>{if(t.getAttribute(n)!==null)return s();const o=Ai(t.children).filter(d=>d.getAttribute($l)===e)[0],a=os.getComputedStyle(t,e),l=a.getPropertyValue("font-family"),c=l.match(Ov),u=a.getPropertyValue("font-weight"),f=a.getPropertyValue("content");if(o&&!c)return t.removeChild(o),s();if(c&&f!=="none"&&f!==""){const d=a.getPropertyValue("content");let p=W1(l,u);const{value:y,isSecondary:_}=H1(d),w=c[0].startsWith("FontAwesome");let v=Kc(p,y),b=v;if(w){const R=t1(y);R.iconName&&R.prefix&&(v=R.iconName,p=R.prefix)}if(v&&!_&&(!o||o.getAttribute(Bc)!==p||o.getAttribute(jc)!==b)){t.setAttribute(n,b),o&&t.removeChild(o);const R=P1(),{extra:O}=R;O.attributes[$l]=e,Kl(v,p).then(G=>{const q=qc(M(M({},R),{},{icons:{main:G,mask:jp()},prefix:p,iconName:b,extra:O,watchable:!0})),E=Fe.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(E,t.firstChild):t.appendChild(E),E.outerHTML=q.map(L=>Vr(L)).join(`
`),t.removeAttribute(n),s()}).catch(i)}else s()}else s()})}function z1(t){return Promise.all([Kf(t,"::before"),Kf(t,"::after")])}function G1(t){return t.parentNode!==document.head&&!~Rv.indexOf(t.tagName.toUpperCase())&&!t.getAttribute($l)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function qf(t){if(Rn)return new Promise((e,n)=>{const s=Ai(t.querySelectorAll("*")).filter(G1).map(z1),i=Yc.begin("searchPseudoElements");Kp(),Promise.all(s).then(()=>{i(),Yl(),e()}).catch(()=>{i(),Yl(),n()})})}var K1={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=qf,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=Fe}=e;Y.searchPseudoElements&&qf(n)}}};let Yf=!1;var q1={mixout(){return{dom:{unwatch(){Kp(),Yf=!0}}}},hooks(){return{bootstrap(){jf(Wl("mutationObserverCallbacks",{}))},noAuto(){T1()},watch(t){const{observeMutationsRoot:e}=t;Yf?Yl():jf(Wl("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Qf=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,s)=>{const i=s.toLowerCase().split("-"),r=i[0];let o=i.slice(1).join("-");if(r&&o==="h")return n.flipX=!0,n;if(r&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(r){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var Y1={mixout(){return{parse:{transform:t=>Qf(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=Qf(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:s,containerWidth:i,iconWidth:r}=e;const o={transform:"translate(".concat(i/2," 256)")},a="translate(".concat(s.x*32,", ").concat(s.y*32,") "),l="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),c="rotate(".concat(s.rotate," 0 0)"),u={transform:"".concat(a," ").concat(l," ").concat(c)},f={transform:"translate(".concat(r/2*-1," -256)")},d={outer:o,inner:u,path:f};return{tag:"g",attributes:M({},d.outer),children:[{tag:"g",attributes:M({},d.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:M(M({},n.icon.attributes),d.path)}]}]}}}};const Za={x:0,y:0,width:"100%",height:"100%"};function Xf(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Q1(t){return t.tag==="g"?t.children:[t]}var X1={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),s=n?ha(n.split(" ").map(i=>i.trim())):jp();return s.prefix||(s.prefix=as()),t.mask=s,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:s,main:i,mask:r,maskId:o,transform:a}=e;const{width:l,icon:c}=i,{width:u,icon:f}=r,d=Hv({transform:a,containerWidth:u,iconWidth:l}),p={tag:"rect",attributes:M(M({},Za),{},{fill:"white"})},y=c.children?{children:c.children.map(Xf)}:{},_={tag:"g",attributes:M({},d.inner),children:[Xf(M({tag:c.tag,attributes:M(M({},c.attributes),d.path)},y))]},w={tag:"g",attributes:M({},d.outer),children:[_]},v="mask-".concat(o||pr()),b="clip-".concat(o||pr()),R={tag:"mask",attributes:M(M({},Za),{},{id:v,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,w]},O={tag:"defs",children:[{tag:"clipPath",attributes:{id:b},children:Q1(f)},R]};return n.push(O,{tag:"rect",attributes:M({fill:"currentColor","clip-path":"url(#".concat(b,")"),mask:"url(#".concat(v,")")},Za)}),{children:n,attributes:s}}}},J1={provides(t){let e=!1;os.matchMedia&&(e=os.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],s={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:M(M({},s),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const r=M(M({},i),{},{attributeName:"opacity"}),o={tag:"circle",attributes:M(M({},s),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:M(M({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:M(M({},r),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:M(M({},s),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:M(M({},r),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:M(M({},s),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:M(M({},r),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Z1={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),s=n===null?!1:n===""?!0:n;return t.symbol=s,t}}}},ey=[Gv,F1,$1,U1,V1,K1,q1,Y1,X1,J1,Z1];u1(ey,{mixoutsTo:xt});xt.noAuto;xt.config;const ty=xt.library;xt.dom;const Xl=xt.parse;xt.findIconDefinition;xt.toHtml;const ny=xt.icon;xt.layer;const sy=xt.text;xt.counter;/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const iy={prefix:"fas",iconName:"clock",icon:[512,512,[128339,"clock-four"],"f017","M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]},ry={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},oy=ry;/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Xc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Re={},oi=[],tn=()=>{},ay=()=>!1,ma=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Jc=t=>t.startsWith("onUpdate:"),Ge=Object.assign,Zc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ly=Object.prototype.hasOwnProperty,Ce=(t,e)=>ly.call(t,e),X=Array.isArray,ai=t=>Br(t)==="[object Map]",Ri=t=>Br(t)==="[object Set]",Jf=t=>Br(t)==="[object Date]",ie=t=>typeof t=="function",je=t=>typeof t=="string",sn=t=>typeof t=="symbol",Pe=t=>t!==null&&typeof t=="object",Yp=t=>(Pe(t)||ie(t))&&ie(t.then)&&ie(t.catch),Qp=Object.prototype.toString,Br=t=>Qp.call(t),cy=t=>Br(t).slice(8,-1),Xp=t=>Br(t)==="[object Object]",eu=t=>je(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Zi=Xc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ga=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},uy=/-(\w)/g,At=ga(t=>t.replace(uy,(e,n)=>n?n.toUpperCase():"")),fy=/\B([A-Z])/g,ps=ga(t=>t.replace(fy,"-$1").toLowerCase()),_a=ga(t=>t.charAt(0).toUpperCase()+t.slice(1)),el=ga(t=>t?`on${_a(t)}`:""),Jn=(t,e)=>!Object.is(t,e),_o=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Jp=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},ko=t=>{const e=parseFloat(t);return isNaN(e)?t:e},dy=t=>{const e=je(t)?Number(t):NaN;return isNaN(e)?t:e};let Zf;const va=()=>Zf||(Zf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ya(t){if(X(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=je(s)?gy(s):ya(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(je(t)||Pe(t))return t}const hy=/;(?![^(]*\))/g,py=/:([^]+)/,my=/\/\*[^]*?\*\//g;function gy(t){const e={};return t.replace(my,"").split(hy).forEach(n=>{if(n){const s=n.split(py);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Cn(t){let e="";if(je(t))e=t;else if(X(t))for(let n=0;n<t.length;n++){const s=Cn(t[n]);s&&(e+=s+" ")}else if(Pe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const _y="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",vy=Xc(_y);function Zp(t){return!!t||t===""}function yy(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Ls(t[s],e[s]);return n}function Ls(t,e){if(t===e)return!0;let n=Jf(t),s=Jf(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=sn(t),s=sn(e),n||s)return t===e;if(n=X(t),s=X(e),n||s)return n&&s?yy(t,e):!1;if(n=Pe(t),s=Pe(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Ls(t[o],e[o]))return!1}}return String(t)===String(e)}function tu(t,e){return t.findIndex(n=>Ls(n,e))}const em=t=>!!(t&&t.__v_isRef===!0),Z=t=>je(t)?t:t==null?"":X(t)||Pe(t)&&(t.toString===Qp||!ie(t.toString))?em(t)?Z(t.value):JSON.stringify(t,tm,2):String(t),tm=(t,e)=>em(e)?tm(t,e.value):ai(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[tl(s,r)+" =>"]=i,n),{})}:Ri(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>tl(n))}:sn(e)?tl(e):Pe(e)&&!X(e)&&!Xp(e)?String(e):e,tl=(t,e="")=>{var n;return sn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let rt;class nm{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=rt,!e&&rt&&(this.index=(rt.scopes||(rt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=rt;try{return rt=this,e()}finally{rt=n}}}on(){rt=this}off(){rt=this.parent}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function sm(t){return new nm(t)}function im(){return rt}function by(t,e=!1){rt&&rt.cleanups.push(t)}let Oe;const nl=new WeakSet;class rm{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,rt&&rt.active&&rt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,nl.has(this)&&(nl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||am(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ed(this),lm(this);const e=Oe,n=Ft;Oe=this,Ft=!0;try{return this.fn()}finally{cm(this),Oe=e,Ft=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)iu(e);this.deps=this.depsTail=void 0,ed(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?nl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Jl(this)&&this.run()}get dirty(){return Jl(this)}}let om=0,er,tr;function am(t,e=!1){if(t.flags|=8,e){t.next=tr,tr=t;return}t.next=er,er=t}function nu(){om++}function su(){if(--om>0)return;if(tr){let e=tr;for(tr=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;er;){let e=er;for(er=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function lm(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function cm(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),iu(s),xy(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function Jl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(um(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function um(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===gr))return;t.globalVersion=gr;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Jl(t)){t.flags&=-3;return}const n=Oe,s=Ft;Oe=t,Ft=!0;try{lm(t);const i=t.fn(t._value);(e.version===0||Jn(i,t._value))&&(t._value=i,e.version++)}catch(i){throw e.version++,i}finally{Oe=n,Ft=s,cm(t),t.flags&=-3}}function iu(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)iu(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function xy(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Ft=!0;const fm=[];function ms(){fm.push(Ft),Ft=!1}function gs(){const t=fm.pop();Ft=t===void 0?!0:t}function ed(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Oe;Oe=void 0;try{e()}finally{Oe=n}}}let gr=0;class wy{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ru{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Oe||!Ft||Oe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Oe)n=this.activeLink=new wy(Oe,this),Oe.deps?(n.prevDep=Oe.depsTail,Oe.depsTail.nextDep=n,Oe.depsTail=n):Oe.deps=Oe.depsTail=n,dm(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=Oe.depsTail,n.nextDep=void 0,Oe.depsTail.nextDep=n,Oe.depsTail=n,Oe.deps===n&&(Oe.deps=s)}return n}trigger(e){this.version++,gr++,this.notify(e)}notify(e){nu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{su()}}}function dm(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)dm(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ao=new WeakMap,Rs=Symbol(""),Zl=Symbol(""),_r=Symbol("");function et(t,e,n){if(Ft&&Oe){let s=Ao.get(t);s||Ao.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new ru),i.map=s,i.key=n),i.track()}}function hn(t,e,n,s,i,r){const o=Ao.get(t);if(!o){gr++;return}const a=l=>{l&&l.trigger()};if(nu(),e==="clear")o.forEach(a);else{const l=X(t),c=l&&eu(n);if(l&&n==="length"){const u=Number(s);o.forEach((f,d)=>{(d==="length"||d===_r||!sn(d)&&d>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(_r)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Rs)),ai(t)&&a(o.get(Zl)));break;case"delete":l||(a(o.get(Rs)),ai(t)&&a(o.get(Zl)));break;case"set":ai(t)&&a(o.get(Rs));break}}su()}function Cy(t,e){const n=Ao.get(t);return n&&n.get(e)}function Ys(t){const e=_e(t);return e===t?e:(et(e,"iterate",_r),St(t)?e:e.map(tt))}function ba(t){return et(t=_e(t),"iterate",_r),t}const Iy={__proto__:null,[Symbol.iterator](){return sl(this,Symbol.iterator,tt)},concat(...t){return Ys(this).concat(...t.map(e=>X(e)?Ys(e):e))},entries(){return sl(this,"entries",t=>(t[1]=tt(t[1]),t))},every(t,e){return un(this,"every",t,e,void 0,arguments)},filter(t,e){return un(this,"filter",t,e,n=>n.map(tt),arguments)},find(t,e){return un(this,"find",t,e,tt,arguments)},findIndex(t,e){return un(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return un(this,"findLast",t,e,tt,arguments)},findLastIndex(t,e){return un(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return un(this,"forEach",t,e,void 0,arguments)},includes(...t){return il(this,"includes",t)},indexOf(...t){return il(this,"indexOf",t)},join(t){return Ys(this).join(t)},lastIndexOf(...t){return il(this,"lastIndexOf",t)},map(t,e){return un(this,"map",t,e,void 0,arguments)},pop(){return Bi(this,"pop")},push(...t){return Bi(this,"push",t)},reduce(t,...e){return td(this,"reduce",t,e)},reduceRight(t,...e){return td(this,"reduceRight",t,e)},shift(){return Bi(this,"shift")},some(t,e){return un(this,"some",t,e,void 0,arguments)},splice(...t){return Bi(this,"splice",t)},toReversed(){return Ys(this).toReversed()},toSorted(t){return Ys(this).toSorted(t)},toSpliced(...t){return Ys(this).toSpliced(...t)},unshift(...t){return Bi(this,"unshift",t)},values(){return sl(this,"values",tt)}};function sl(t,e,n){const s=ba(t),i=s[e]();return s!==t&&!St(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=n(r.value)),r}),i}const Ey=Array.prototype;function un(t,e,n,s,i,r){const o=ba(t),a=o!==t&&!St(t),l=o[e];if(l!==Ey[e]){const f=l.apply(t,r);return a?tt(f):f}let c=n;o!==t&&(a?c=function(f,d){return n.call(this,tt(f),d,t)}:n.length>2&&(c=function(f,d){return n.call(this,f,d,t)}));const u=l.call(o,c,s);return a&&i?i(u):u}function td(t,e,n,s){const i=ba(t);let r=n;return i!==t&&(St(t)?n.length>3&&(r=function(o,a,l){return n.call(this,o,a,l,t)}):r=function(o,a,l){return n.call(this,o,tt(a),l,t)}),i[e](r,...s)}function il(t,e,n){const s=_e(t);et(s,"iterate",_r);const i=s[e](...n);return(i===-1||i===!1)&&lu(n[0])?(n[0]=_e(n[0]),s[e](...n)):i}function Bi(t,e,n=[]){ms(),nu();const s=_e(t)[e].apply(t,n);return su(),gs(),s}const Sy=Xc("__proto__,__v_isRef,__isVue"),hm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(sn));function Ty(t){sn(t)||(t=String(t));const e=_e(this);return et(e,"has",t),e.hasOwnProperty(t)}class pm{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?Fy:vm:r?_m:gm).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=X(e);if(!i){let l;if(o&&(l=Iy[n]))return l;if(n==="hasOwnProperty")return Ty}const a=Reflect.get(e,n,Be(e)?e:s);return(sn(n)?hm.has(n):Sy(n))||(i||et(e,"get",n),r)?a:Be(a)?o&&eu(n)?a:a.value:Pe(a)?i?bm(a):jr(a):a}}class mm extends pm{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const l=Fs(r);if(!St(s)&&!Fs(s)&&(r=_e(r),s=_e(s)),!X(e)&&Be(r)&&!Be(s))return l?!1:(r.value=s,!0)}const o=X(e)&&eu(n)?Number(n)<e.length:Ce(e,n),a=Reflect.set(e,n,s,Be(e)?e:i);return e===_e(i)&&(o?Jn(s,r)&&hn(e,"set",n,s):hn(e,"add",n,s)),a}deleteProperty(e,n){const s=Ce(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&hn(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!sn(n)||!hm.has(n))&&et(e,"has",n),s}ownKeys(e){return et(e,"iterate",X(e)?"length":Rs),Reflect.ownKeys(e)}}class ky extends pm{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Ay=new mm,Ry=new ky,Py=new mm(!0);const ec=t=>t,oo=t=>Reflect.getPrototypeOf(t);function Ny(t,e,n){return function(...s){const i=this.__v_raw,r=_e(i),o=ai(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?ec:e?tc:tt;return!e&&et(r,"iterate",l?Zl:Rs),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function ao(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Oy(t,e){const n={get(i){const r=this.__v_raw,o=_e(r),a=_e(i);t||(Jn(i,a)&&et(o,"get",i),et(o,"get",a));const{has:l}=oo(o),c=e?ec:t?tc:tt;if(l.call(o,i))return c(r.get(i));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&et(_e(i),"iterate",Rs),Reflect.get(i,"size",i)},has(i){const r=this.__v_raw,o=_e(r),a=_e(i);return t||(Jn(i,a)&&et(o,"has",i),et(o,"has",a)),i===a?r.has(i):r.has(i)||r.has(a)},forEach(i,r){const o=this,a=o.__v_raw,l=_e(a),c=e?ec:t?tc:tt;return!t&&et(l,"iterate",Rs),a.forEach((u,f)=>i.call(r,c(u),c(f),o))}};return Ge(n,t?{add:ao("add"),set:ao("set"),delete:ao("delete"),clear:ao("clear")}:{add(i){!e&&!St(i)&&!Fs(i)&&(i=_e(i));const r=_e(this);return oo(r).has.call(r,i)||(r.add(i),hn(r,"add",i,i)),this},set(i,r){!e&&!St(r)&&!Fs(r)&&(r=_e(r));const o=_e(this),{has:a,get:l}=oo(o);let c=a.call(o,i);c||(i=_e(i),c=a.call(o,i));const u=l.call(o,i);return o.set(i,r),c?Jn(r,u)&&hn(o,"set",i,r):hn(o,"add",i,r),this},delete(i){const r=_e(this),{has:o,get:a}=oo(r);let l=o.call(r,i);l||(i=_e(i),l=o.call(r,i)),a&&a.call(r,i);const c=r.delete(i);return l&&hn(r,"delete",i,void 0),c},clear(){const i=_e(this),r=i.size!==0,o=i.clear();return r&&hn(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=Ny(i,t,e)}),n}function ou(t,e){const n=Oy(t,e);return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(Ce(n,i)&&i in s?n:s,i,r)}const My={get:ou(!1,!1)},Dy={get:ou(!1,!0)},Ly={get:ou(!0,!1)};const gm=new WeakMap,_m=new WeakMap,vm=new WeakMap,Fy=new WeakMap;function $y(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Uy(t){return t.__v_skip||!Object.isExtensible(t)?0:$y(cy(t))}function jr(t){return Fs(t)?t:au(t,!1,Ay,My,gm)}function ym(t){return au(t,!1,Py,Dy,_m)}function bm(t){return au(t,!0,Ry,Ly,vm)}function au(t,e,n,s,i){if(!Pe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Uy(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function Zn(t){return Fs(t)?Zn(t.__v_raw):!!(t&&t.__v_isReactive)}function Fs(t){return!!(t&&t.__v_isReadonly)}function St(t){return!!(t&&t.__v_isShallow)}function lu(t){return t?!!t.__v_raw:!1}function _e(t){const e=t&&t.__v_raw;return e?_e(e):t}function cu(t){return!Ce(t,"__v_skip")&&Object.isExtensible(t)&&Jp(t,"__v_skip",!0),t}const tt=t=>Pe(t)?jr(t):t,tc=t=>Pe(t)?bm(t):t;function Be(t){return t?t.__v_isRef===!0:!1}function oe(t){return xm(t,!1)}function Vy(t){return xm(t,!0)}function xm(t,e){return Be(t)?t:new By(t,e)}class By{constructor(e,n){this.dep=new ru,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:_e(e),this._value=n?e:tt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||St(e)||Fs(e);e=s?e:_e(e),Jn(e,n)&&(this._rawValue=e,this._value=s?e:tt(e),this.dep.trigger())}}function I(t){return Be(t)?t.value:t}const jy={get:(t,e,n)=>e==="__v_raw"?t:I(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Be(i)&&!Be(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function wm(t){return Zn(t)?t:new Proxy(t,jy)}function Hy(t){const e=X(t)?new Array(t.length):{};for(const n in t)e[n]=zy(t,n);return e}class Wy{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Cy(_e(this._object),this._key)}}function zy(t,e,n){const s=t[e];return Be(s)?s:new Wy(t,e,n)}class Gy{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new ru(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=gr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&Oe!==this)return am(this,!0),!0}get value(){const e=this.dep.track();return um(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Ky(t,e,n=!1){let s,i;return ie(t)?s=t:(s=t.get,i=t.set),new Gy(s,i,n)}const lo={},Ro=new WeakMap;let Cs;function qy(t,e=!1,n=Cs){if(n){let s=Ro.get(n);s||Ro.set(n,s=[]),s.push(t)}}function Yy(t,e,n=Re){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:a,call:l}=n,c=O=>i?O:St(O)||i===!1||i===0?pn(O,1):pn(O);let u,f,d,p,y=!1,_=!1;if(Be(t)?(f=()=>t.value,y=St(t)):Zn(t)?(f=()=>c(t),y=!0):X(t)?(_=!0,y=t.some(O=>Zn(O)||St(O)),f=()=>t.map(O=>{if(Be(O))return O.value;if(Zn(O))return c(O);if(ie(O))return l?l(O,2):O()})):ie(t)?e?f=l?()=>l(t,2):t:f=()=>{if(d){ms();try{d()}finally{gs()}}const O=Cs;Cs=u;try{return l?l(t,3,[p]):t(p)}finally{Cs=O}}:f=tn,e&&i){const O=f,G=i===!0?1/0:i;f=()=>pn(O(),G)}const w=im(),v=()=>{u.stop(),w&&w.active&&Zc(w.effects,u)};if(r&&e){const O=e;e=(...G)=>{O(...G),v()}}let b=_?new Array(t.length).fill(lo):lo;const R=O=>{if(!(!(u.flags&1)||!u.dirty&&!O))if(e){const G=u.run();if(i||y||(_?G.some((q,E)=>Jn(q,b[E])):Jn(G,b))){d&&d();const q=Cs;Cs=u;try{const E=[G,b===lo?void 0:_&&b[0]===lo?[]:b,p];l?l(e,3,E):e(...E),b=G}finally{Cs=q}}}else u.run()};return a&&a(R),u=new rm(f),u.scheduler=o?()=>o(R,!1):R,p=O=>qy(O,!1,u),d=u.onStop=()=>{const O=Ro.get(u);if(O){if(l)l(O,4);else for(const G of O)G();Ro.delete(u)}},e?s?R(!0):b=u.run():o?o(R.bind(null,!0),!0):u.run(),v.pause=u.pause.bind(u),v.resume=u.resume.bind(u),v.stop=v,v}function pn(t,e=1/0,n){if(e<=0||!Pe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Be(t))pn(t.value,e,n);else if(X(t))for(let s=0;s<t.length;s++)pn(t[s],e,n);else if(Ri(t)||ai(t))t.forEach(s=>{pn(s,e,n)});else if(Xp(t)){for(const s in t)pn(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&pn(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Hr(t,e,n,s){try{return s?t(...s):t()}catch(i){xa(i,e,n)}}function Vt(t,e,n,s){if(ie(t)){const i=Hr(t,e,n,s);return i&&Yp(i)&&i.catch(r=>{xa(r,e,n)}),i}if(X(t)){const i=[];for(let r=0;r<t.length;r++)i.push(Vt(t[r],e,n,s));return i}}function xa(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Re;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,l,c)===!1)return}a=a.parent}if(r){ms(),Hr(r,null,10,[t,l,c]),gs();return}}Qy(t,n,i,s,o)}function Qy(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const ot=[];let Qt=-1;const li=[];let Wn=null,Zs=0;const Cm=Promise.resolve();let Po=null;function Pi(t){const e=Po||Cm;return t?e.then(this?t.bind(this):t):e}function Xy(t){let e=Qt+1,n=ot.length;for(;e<n;){const s=e+n>>>1,i=ot[s],r=vr(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function uu(t){if(!(t.flags&1)){const e=vr(t),n=ot[ot.length-1];!n||!(t.flags&2)&&e>=vr(n)?ot.push(t):ot.splice(Xy(e),0,t),t.flags|=1,Im()}}function Im(){Po||(Po=Cm.then(Sm))}function Jy(t){X(t)?li.push(...t):Wn&&t.id===-1?Wn.splice(Zs+1,0,t):t.flags&1||(li.push(t),t.flags|=1),Im()}function nd(t,e,n=Qt+1){for(;n<ot.length;n++){const s=ot[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;ot.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Em(t){if(li.length){const e=[...new Set(li)].sort((n,s)=>vr(n)-vr(s));if(li.length=0,Wn){Wn.push(...e);return}for(Wn=e,Zs=0;Zs<Wn.length;Zs++){const n=Wn[Zs];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Wn=null,Zs=0}}const vr=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Sm(t){try{for(Qt=0;Qt<ot.length;Qt++){const e=ot[Qt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Hr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Qt<ot.length;Qt++){const e=ot[Qt];e&&(e.flags&=-2)}Qt=-1,ot.length=0,Em(),Po=null,(ot.length||li.length)&&Sm()}}let at=null,Tm=null;function No(t){const e=at;return at=t,Tm=t&&t.type.__scopeId||null,e}function Le(t,e=at,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&hd(-1);const r=No(e);let o;try{o=t(...i)}finally{No(r),s._d&&hd(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Ae(t,e){if(at===null)return t;const n=Ta(at),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,a,l=Re]=e[i];r&&(ie(r)&&(r={mounted:r,updated:r}),r.deep&&pn(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function bs(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(ms(),Vt(l,n,8,[t.el,a,t,e]),gs())}}const Zy=Symbol("_vte"),km=t=>t.__isTeleport,zn=Symbol("_leaveCb"),co=Symbol("_enterCb");function Am(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Pt(()=>{t.isMounted=!0}),Lm(()=>{t.isUnmounting=!0}),t}const It=[Function,Array],Rm={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:It,onEnter:It,onAfterEnter:It,onEnterCancelled:It,onBeforeLeave:It,onLeave:It,onAfterLeave:It,onLeaveCancelled:It,onBeforeAppear:It,onAppear:It,onAfterAppear:It,onAppearCancelled:It},Pm=t=>{const e=t.subTree;return e.component?Pm(e.component):e},eb={name:"BaseTransition",props:Rm,setup(t,{slots:e}){const n=sg(),s=Am();return()=>{const i=e.default&&fu(e.default(),!0);if(!i||!i.length)return;const r=Nm(i),o=_e(t),{mode:a}=o;if(s.isLeaving)return rl(r);const l=sd(r);if(!l)return rl(r);let c=yr(l,o,s,n,f=>c=f);l.type!==pt&&$s(l,c);let u=n.subTree&&sd(n.subTree);if(u&&u.type!==pt&&!Ss(l,u)&&Pm(n).type!==pt){let f=yr(u,o,s,n);if($s(u,f),a==="out-in"&&l.type!==pt)return s.isLeaving=!0,f.afterLeave=()=>{s.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave,u=void 0},rl(r);a==="in-out"&&l.type!==pt?f.delayLeave=(d,p,y)=>{const _=Om(s,u);_[String(u.key)]=u,d[zn]=()=>{p(),d[zn]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{y(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function Nm(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==pt){e=n;break}}return e}const tb=eb;function Om(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function yr(t,e,n,s,i){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:d,onLeave:p,onAfterLeave:y,onLeaveCancelled:_,onBeforeAppear:w,onAppear:v,onAfterAppear:b,onAppearCancelled:R}=e,O=String(t.key),G=Om(n,t),q=(P,U)=>{P&&Vt(P,s,9,U)},E=(P,U)=>{const re=U[1];q(P,U),X(P)?P.every(B=>B.length<=1)&&re():P.length<=1&&re()},L={mode:o,persisted:a,beforeEnter(P){let U=l;if(!n.isMounted)if(r)U=w||l;else return;P[zn]&&P[zn](!0);const re=G[O];re&&Ss(t,re)&&re.el[zn]&&re.el[zn](),q(U,[P])},enter(P){let U=c,re=u,B=f;if(!n.isMounted)if(r)U=v||c,re=b||u,B=R||f;else return;let ue=!1;const be=P[co]=st=>{ue||(ue=!0,st?q(B,[P]):q(re,[P]),L.delayedLeave&&L.delayedLeave(),P[co]=void 0)};U?E(U,[P,be]):be()},leave(P,U){const re=String(t.key);if(P[co]&&P[co](!0),n.isUnmounting)return U();q(d,[P]);let B=!1;const ue=P[zn]=be=>{B||(B=!0,U(),be?q(_,[P]):q(y,[P]),P[zn]=void 0,G[re]===t&&delete G[re])};G[re]=t,p?E(p,[P,ue]):ue()},clone(P){const U=yr(P,e,n,s,i);return i&&i(U),U}};return L}function rl(t){if(wa(t))return t=cs(t),t.children=null,t}function sd(t){if(!wa(t))return km(t.type)&&t.children?Nm(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&ie(n.default))return n.default()}}function $s(t,e){t.shapeFlag&6&&t.component?(t.transition=e,$s(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function fu(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===ce?(o.patchFlag&128&&i++,s=s.concat(fu(o.children,e,a))):(e||o.type!==pt)&&s.push(a!=null?cs(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}/*! #__NO_SIDE_EFFECTS__ */function du(t,e){return ie(t)?Ge({name:t.name},e,{setup:t}):t}function Mm(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Oo(t,e,n,s,i=!1){if(X(t)){t.forEach((y,_)=>Oo(y,e&&(X(e)?e[_]:e),n,s,i));return}if(nr(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Oo(t,e,n,s.component.subTree);return}const r=s.shapeFlag&4?Ta(s.component):s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Re?a.refs={}:a.refs,f=a.setupState,d=_e(f),p=f===Re?()=>!1:y=>Ce(d,y);if(c!=null&&c!==l&&(je(c)?(u[c]=null,p(c)&&(f[c]=null)):Be(c)&&(c.value=null)),ie(l))Hr(l,a,12,[o,u]);else{const y=je(l),_=Be(l);if(y||_){const w=()=>{if(t.f){const v=y?p(l)?f[l]:u[l]:l.value;i?X(v)&&Zc(v,r):X(v)?v.includes(r)||v.push(r):y?(u[l]=[r],p(l)&&(f[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else y?(u[l]=o,p(l)&&(f[l]=o)):_&&(l.value=o,t.k&&(u[t.k]=o))};o?(w.id=-1,vt(w,n)):w()}}}va().requestIdleCallback;va().cancelIdleCallback;const nr=t=>!!t.type.__asyncLoader,wa=t=>t.type.__isKeepAlive;function nb(t,e){Dm(t,"a",e)}function sb(t,e){Dm(t,"da",e)}function Dm(t,e,n=Xe){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Ca(e,s,n),n){let i=n.parent;for(;i&&i.parent;)wa(i.parent.vnode)&&ib(s,e,n,i),i=i.parent}}function ib(t,e,n,s){const i=Ca(e,t,s,!0);Ia(()=>{Zc(s[e],i)},n)}function Ca(t,e,n=Xe,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{ms();const a=Wr(n),l=Vt(e,n,t,o);return a(),gs(),l});return s?i.unshift(r):i.push(r),r}}const Pn=t=>(e,n=Xe)=>{(!xr||t==="sp")&&Ca(t,(...s)=>e(...s),n)},rb=Pn("bm"),Pt=Pn("m"),ob=Pn("bu"),hu=Pn("u"),Lm=Pn("bum"),Ia=Pn("um"),ab=Pn("sp"),lb=Pn("rtg"),cb=Pn("rtc");function ub(t,e=Xe){Ca("ec",t,e)}const fb="components";function rn(t,e){return hb(fb,t,!0,e)||t}const db=Symbol.for("v-ndc");function hb(t,e,n=!0,s=!1){const i=at||Xe;if(i){const r=i.type;{const a=ex(r,!1);if(a&&(a===e||a===At(e)||a===_a(At(e))))return r}const o=id(i[t]||r[t],e)||id(i.appContext[t],e);return!o&&s?r:o}}function id(t,e){return t&&(t[e]||t[At(e)]||t[_a(At(e))])}function Qe(t,e,n,s){let i;const r=n,o=X(t);if(o||je(t)){const a=o&&Zn(t);let l=!1;a&&(l=!St(t),t=ba(t)),i=new Array(t.length);for(let c=0,u=t.length;c<u;c++)i[c]=e(l?tt(t[c]):t[c],c,void 0,r)}else if(typeof t=="number"){i=new Array(t);for(let a=0;a<t;a++)i[a]=e(a+1,a,void 0,r)}else if(Pe(t))if(t[Symbol.iterator])i=Array.from(t,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(t);i=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];i[l]=e(t[u],u,l,r)}}else i=[];return i}const nc=t=>t?ig(t)?Ta(t):nc(t.parent):null,sr=Ge(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>nc(t.parent),$root:t=>nc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>$m(t),$forceUpdate:t=>t.f||(t.f=()=>{uu(t.update)}),$nextTick:t=>t.n||(t.n=Pi.bind(t.proxy)),$watch:t=>Db.bind(t)}),ol=(t,e)=>t!==Re&&!t.__isScriptSetup&&Ce(t,e),pb={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(ol(s,e))return o[e]=1,s[e];if(i!==Re&&Ce(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&Ce(c,e))return o[e]=3,r[e];if(n!==Re&&Ce(n,e))return o[e]=4,n[e];sc&&(o[e]=0)}}const u=sr[e];let f,d;if(u)return e==="$attrs"&&et(t.attrs,"get",""),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==Re&&Ce(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,Ce(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return ol(i,e)?(i[e]=n,!0):s!==Re&&Ce(s,e)?(s[e]=n,!0):Ce(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==Re&&Ce(t,o)||ol(e,o)||(a=r[0])&&Ce(a,o)||Ce(s,o)||Ce(sr,o)||Ce(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ce(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function rd(t){return X(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let sc=!0;function mb(t){const e=$m(t),n=t.proxy,s=t.ctx;sc=!1,e.beforeCreate&&od(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:p,updated:y,activated:_,deactivated:w,beforeDestroy:v,beforeUnmount:b,destroyed:R,unmounted:O,render:G,renderTracked:q,renderTriggered:E,errorCaptured:L,serverPrefetch:P,expose:U,inheritAttrs:re,components:B,directives:ue,filters:be}=e;if(c&&gb(c,s,null),o)for(const ae in o){const xe=o[ae];ie(xe)&&(s[ae]=xe.bind(n))}if(i){const ae=i.call(n,n);Pe(ae)&&(t.data=jr(ae))}if(sc=!0,r)for(const ae in r){const xe=r[ae],cn=ie(xe)?xe.bind(n,n):ie(xe.get)?xe.get.bind(n,n):tn,Ln=!ie(xe)&&ie(xe.set)?xe.set.bind(n):tn,Wt=le({get:cn,set:Ln});Object.defineProperty(s,ae,{enumerable:!0,configurable:!0,get:()=>Wt.value,set:ft=>Wt.value=ft})}if(a)for(const ae in a)Fm(a[ae],s,n,ae);if(l){const ae=ie(l)?l.call(n):l;Reflect.ownKeys(ae).forEach(xe=>{vo(xe,ae[xe])})}u&&od(u,t,"c");function Te(ae,xe){X(xe)?xe.forEach(cn=>ae(cn.bind(n))):xe&&ae(xe.bind(n))}if(Te(rb,f),Te(Pt,d),Te(ob,p),Te(hu,y),Te(nb,_),Te(sb,w),Te(ub,L),Te(cb,q),Te(lb,E),Te(Lm,b),Te(Ia,O),Te(ab,P),X(U))if(U.length){const ae=t.exposed||(t.exposed={});U.forEach(xe=>{Object.defineProperty(ae,xe,{get:()=>n[xe],set:cn=>n[xe]=cn})})}else t.exposed||(t.exposed={});G&&t.render===tn&&(t.render=G),re!=null&&(t.inheritAttrs=re),B&&(t.components=B),ue&&(t.directives=ue),P&&Mm(t)}function gb(t,e,n=tn){X(t)&&(t=ic(t));for(const s in t){const i=t[s];let r;Pe(i)?"default"in i?r=Tt(i.from||s,i.default,!0):r=Tt(i.from||s):r=Tt(i),Be(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function od(t,e,n){Vt(X(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Fm(t,e,n,s){let i=s.includes(".")?Jm(n,s):()=>n[s];if(je(t)){const r=e[t];ie(r)&&Ns(i,r)}else if(ie(t))Ns(i,t.bind(n));else if(Pe(t))if(X(t))t.forEach(r=>Fm(r,e,n,s));else{const r=ie(t.handler)?t.handler.bind(n):e[t.handler];ie(r)&&Ns(i,r,t)}}function $m(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>Mo(l,c,o,!0)),Mo(l,e,o)),Pe(e)&&r.set(e,l),l}function Mo(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Mo(t,r,n,!0),i&&i.forEach(o=>Mo(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=_b[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const _b={data:ad,props:ld,emits:ld,methods:Qi,computed:Qi,beforeCreate:it,created:it,beforeMount:it,mounted:it,beforeUpdate:it,updated:it,beforeDestroy:it,beforeUnmount:it,destroyed:it,unmounted:it,activated:it,deactivated:it,errorCaptured:it,serverPrefetch:it,components:Qi,directives:Qi,watch:yb,provide:ad,inject:vb};function ad(t,e){return e?t?function(){return Ge(ie(t)?t.call(this,this):t,ie(e)?e.call(this,this):e)}:e:t}function vb(t,e){return Qi(ic(t),ic(e))}function ic(t){if(X(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function it(t,e){return t?[...new Set([].concat(t,e))]:e}function Qi(t,e){return t?Ge(Object.create(null),t,e):e}function ld(t,e){return t?X(t)&&X(e)?[...new Set([...t,...e])]:Ge(Object.create(null),rd(t),rd(e??{})):e}function yb(t,e){if(!t)return e;if(!e)return t;const n=Ge(Object.create(null),t);for(const s in e)n[s]=it(t[s],e[s]);return n}function Um(){return{app:null,config:{isNativeTag:ay,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let bb=0;function xb(t,e){return function(s,i=null){ie(s)||(s=Ge({},s)),i!=null&&!Pe(i)&&(i=null);const r=Um(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:bb++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:nx,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&ie(u.install)?(o.add(u),u.install(c,...f)):ie(u)&&(o.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,d){if(!l){const p=c._ceVNode||$(s,i);return p.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),t(p,u,d),l=!0,c._container=u,u.__vue_app__=c,Ta(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Vt(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=Ps;Ps=c;try{return u()}finally{Ps=f}}};return c}}let Ps=null;function vo(t,e){if(Xe){let n=Xe.provides;const s=Xe.parent&&Xe.parent.provides;s===n&&(n=Xe.provides=Object.create(s)),n[t]=e}}function Tt(t,e,n=!1){const s=Xe||at;if(s||Ps){const i=Ps?Ps._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&ie(e)?e.call(s&&s.proxy):e}}function wb(){return!!(Xe||at||Ps)}const Vm={},Bm=()=>Object.create(Vm),jm=t=>Object.getPrototypeOf(t)===Vm;function Cb(t,e,n,s=!1){const i={},r=Bm();t.propsDefaults=Object.create(null),Hm(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:ym(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Ib(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=_e(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Ea(t.emitsOptions,d))continue;const p=e[d];if(l)if(Ce(r,d))p!==r[d]&&(r[d]=p,c=!0);else{const y=At(d);i[y]=rc(l,a,y,p,t,!1)}else p!==r[d]&&(r[d]=p,c=!0)}}}else{Hm(t,e,i,r)&&(c=!0);let u;for(const f in a)(!e||!Ce(e,f)&&((u=ps(f))===f||!Ce(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(i[f]=rc(l,a,f,void 0,t,!0)):delete i[f]);if(r!==a)for(const f in r)(!e||!Ce(e,f))&&(delete r[f],c=!0)}c&&hn(t.attrs,"set","")}function Hm(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Zi(l))continue;const c=e[l];let u;i&&Ce(i,u=At(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Ea(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=_e(n),c=a||Re;for(let u=0;u<r.length;u++){const f=r[u];n[f]=rc(i,l,f,c[f],t,!Ce(c,f))}}return o}function rc(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=Ce(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ie(l)){const{propsDefaults:c}=i;if(n in c)s=c[n];else{const u=Wr(i);s=c[n]=l.call(null,e),u()}}else s=l;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===ps(n))&&(s=!0))}return s}const Eb=new WeakMap;function Wm(t,e,n=!1){const s=n?Eb:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!ie(t)){const u=f=>{l=!0;const[d,p]=Wm(f,e,!0);Ge(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return Pe(t)&&s.set(t,oi),oi;if(X(r))for(let u=0;u<r.length;u++){const f=At(r[u]);cd(f)&&(o[f]=Re)}else if(r)for(const u in r){const f=At(u);if(cd(f)){const d=r[u],p=o[f]=X(d)||ie(d)?{type:d}:Ge({},d),y=p.type;let _=!1,w=!0;if(X(y))for(let v=0;v<y.length;++v){const b=y[v],R=ie(b)&&b.name;if(R==="Boolean"){_=!0;break}else R==="String"&&(w=!1)}else _=ie(y)&&y.name==="Boolean";p[0]=_,p[1]=w,(_||Ce(p,"default"))&&a.push(f)}}const c=[o,a];return Pe(t)&&s.set(t,c),c}function cd(t){return t[0]!=="$"&&!Zi(t)}const zm=t=>t[0]==="_"||t==="$stable",pu=t=>X(t)?t.map(Xt):[Xt(t)],Sb=(t,e,n)=>{if(e._n)return e;const s=Le((...i)=>pu(e(...i)),n);return s._c=!1,s},Gm=(t,e,n)=>{const s=t._ctx;for(const i in t){if(zm(i))continue;const r=t[i];if(ie(r))e[i]=Sb(i,r,s);else if(r!=null){const o=pu(r);e[i]=()=>o}}},Km=(t,e)=>{const n=pu(e);t.slots.default=()=>n},qm=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},Tb=(t,e,n)=>{const s=t.slots=Bm();if(t.vnode.shapeFlag&32){const i=e._;i?(qm(s,e,n),n&&Jp(s,"_",i,!0)):Gm(e,s)}else e&&Km(t,e)},kb=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Re;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:qm(i,e,n):(r=!e.$stable,Gm(e,i)),o=e}else e&&(Km(t,e),o={default:1});if(r)for(const a in i)!zm(a)&&o[a]==null&&delete i[a]},vt=jb;function Ab(t){return Rb(t)}function Rb(t,e){const n=va();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:p=tn,insertStaticContent:y}=t,_=(m,g,x,T=null,N=null,A=null,H=void 0,j=null,V=!!g.dynamicChildren)=>{if(m===g)return;m&&!Ss(m,g)&&(T=k(m),ft(m,N,A,!0),m=null),g.patchFlag===-2&&(V=!1,g.dynamicChildren=null);const{type:D,ref:ee,shapeFlag:z}=g;switch(D){case Sa:w(m,g,x,T);break;case pt:v(m,g,x,T);break;case ll:m==null&&b(g,x,T,H);break;case ce:B(m,g,x,T,N,A,H,j,V);break;default:z&1?G(m,g,x,T,N,A,H,j,V):z&6?ue(m,g,x,T,N,A,H,j,V):(z&64||z&128)&&D.process(m,g,x,T,N,A,H,j,V,Q)}ee!=null&&N&&Oo(ee,m&&m.ref,A,g||m,!g)},w=(m,g,x,T)=>{if(m==null)s(g.el=a(g.children),x,T);else{const N=g.el=m.el;g.children!==m.children&&c(N,g.children)}},v=(m,g,x,T)=>{m==null?s(g.el=l(g.children||""),x,T):g.el=m.el},b=(m,g,x,T)=>{[m.el,m.anchor]=y(m.children,g,x,T,m.el,m.anchor)},R=({el:m,anchor:g},x,T)=>{let N;for(;m&&m!==g;)N=d(m),s(m,x,T),m=N;s(g,x,T)},O=({el:m,anchor:g})=>{let x;for(;m&&m!==g;)x=d(m),i(m),m=x;i(g)},G=(m,g,x,T,N,A,H,j,V)=>{g.type==="svg"?H="svg":g.type==="math"&&(H="mathml"),m==null?q(g,x,T,N,A,H,j,V):P(m,g,N,A,H,j,V)},q=(m,g,x,T,N,A,H,j)=>{let V,D;const{props:ee,shapeFlag:z,transition:J,dirs:se}=m;if(V=m.el=o(m.type,A,ee&&ee.is,ee),z&8?u(V,m.children):z&16&&L(m.children,V,null,T,N,al(m,A),H,j),se&&bs(m,null,T,"created"),E(V,m,m.scopeId,H,T),ee){for(const Ne in ee)Ne!=="value"&&!Zi(Ne)&&r(V,Ne,null,ee[Ne],A,T);"value"in ee&&r(V,"value",null,ee.value,A),(D=ee.onVnodeBeforeMount)&&qt(D,T,m)}se&&bs(m,null,T,"beforeMount");const ge=Pb(N,J);ge&&J.beforeEnter(V),s(V,g,x),((D=ee&&ee.onVnodeMounted)||ge||se)&&vt(()=>{D&&qt(D,T,m),ge&&J.enter(V),se&&bs(m,null,T,"mounted")},N)},E=(m,g,x,T,N)=>{if(x&&p(m,x),T)for(let A=0;A<T.length;A++)p(m,T[A]);if(N){let A=N.subTree;if(g===A||eg(A.type)&&(A.ssContent===g||A.ssFallback===g)){const H=N.vnode;E(m,H,H.scopeId,H.slotScopeIds,N.parent)}}},L=(m,g,x,T,N,A,H,j,V=0)=>{for(let D=V;D<m.length;D++){const ee=m[D]=j?Gn(m[D]):Xt(m[D]);_(null,ee,g,x,T,N,A,H,j)}},P=(m,g,x,T,N,A,H)=>{const j=g.el=m.el;let{patchFlag:V,dynamicChildren:D,dirs:ee}=g;V|=m.patchFlag&16;const z=m.props||Re,J=g.props||Re;let se;if(x&&xs(x,!1),(se=J.onVnodeBeforeUpdate)&&qt(se,x,g,m),ee&&bs(g,m,x,"beforeUpdate"),x&&xs(x,!0),(z.innerHTML&&J.innerHTML==null||z.textContent&&J.textContent==null)&&u(j,""),D?U(m.dynamicChildren,D,j,x,T,al(g,N),A):H||xe(m,g,j,null,x,T,al(g,N),A,!1),V>0){if(V&16)re(j,z,J,x,N);else if(V&2&&z.class!==J.class&&r(j,"class",null,J.class,N),V&4&&r(j,"style",z.style,J.style,N),V&8){const ge=g.dynamicProps;for(let Ne=0;Ne<ge.length;Ne++){const Ie=ge[Ne],gt=z[Ie],dt=J[Ie];(dt!==gt||Ie==="value")&&r(j,Ie,gt,dt,N,x)}}V&1&&m.children!==g.children&&u(j,g.children)}else!H&&D==null&&re(j,z,J,x,N);((se=J.onVnodeUpdated)||ee)&&vt(()=>{se&&qt(se,x,g,m),ee&&bs(g,m,x,"updated")},T)},U=(m,g,x,T,N,A,H)=>{for(let j=0;j<g.length;j++){const V=m[j],D=g[j],ee=V.el&&(V.type===ce||!Ss(V,D)||V.shapeFlag&70)?f(V.el):x;_(V,D,ee,null,T,N,A,H,!0)}},re=(m,g,x,T,N)=>{if(g!==x){if(g!==Re)for(const A in g)!Zi(A)&&!(A in x)&&r(m,A,g[A],null,N,T);for(const A in x){if(Zi(A))continue;const H=x[A],j=g[A];H!==j&&A!=="value"&&r(m,A,j,H,N,T)}"value"in x&&r(m,"value",g.value,x.value,N)}},B=(m,g,x,T,N,A,H,j,V)=>{const D=g.el=m?m.el:a(""),ee=g.anchor=m?m.anchor:a("");let{patchFlag:z,dynamicChildren:J,slotScopeIds:se}=g;se&&(j=j?j.concat(se):se),m==null?(s(D,x,T),s(ee,x,T),L(g.children||[],x,ee,N,A,H,j,V)):z>0&&z&64&&J&&m.dynamicChildren?(U(m.dynamicChildren,J,x,N,A,H,j),(g.key!=null||N&&g===N.subTree)&&Ym(m,g,!0)):xe(m,g,x,ee,N,A,H,j,V)},ue=(m,g,x,T,N,A,H,j,V)=>{g.slotScopeIds=j,m==null?g.shapeFlag&512?N.ctx.activate(g,x,T,H,V):be(g,x,T,N,A,H,V):st(m,g,V)},be=(m,g,x,T,N,A,H)=>{const j=m.component=Yb(m,T,N);if(wa(m)&&(j.ctx.renderer=Q),Qb(j,!1,H),j.asyncDep){if(N&&N.registerDep(j,Te,H),!m.el){const V=j.subTree=$(pt);v(null,V,g,x)}}else Te(j,m,g,x,N,A,H)},st=(m,g,x)=>{const T=g.component=m.component;if(Vb(m,g,x))if(T.asyncDep&&!T.asyncResolved){ae(T,g,x);return}else T.next=g,T.update();else g.el=m.el,T.vnode=g},Te=(m,g,x,T,N,A,H)=>{const j=()=>{if(m.isMounted){let{next:z,bu:J,u:se,parent:ge,vnode:Ne}=m;{const Gt=Qm(m);if(Gt){z&&(z.el=Ne.el,ae(m,z,H)),Gt.asyncDep.then(()=>{m.isUnmounted||j()});return}}let Ie=z,gt;xs(m,!1),z?(z.el=Ne.el,ae(m,z,H)):z=Ne,J&&_o(J),(gt=z.props&&z.props.onVnodeBeforeUpdate)&&qt(gt,ge,z,Ne),xs(m,!0);const dt=fd(m),zt=m.subTree;m.subTree=dt,_(zt,dt,f(zt.el),k(zt),m,N,A),z.el=dt.el,Ie===null&&Bb(m,dt.el),se&&vt(se,N),(gt=z.props&&z.props.onVnodeUpdated)&&vt(()=>qt(gt,ge,z,Ne),N)}else{let z;const{el:J,props:se}=g,{bm:ge,m:Ne,parent:Ie,root:gt,type:dt}=m,zt=nr(g);xs(m,!1),ge&&_o(ge),!zt&&(z=se&&se.onVnodeBeforeMount)&&qt(z,Ie,g),xs(m,!0);{gt.ce&&gt.ce._injectChildStyle(dt);const Gt=m.subTree=fd(m);_(null,Gt,x,T,m,N,A),g.el=Gt.el}if(Ne&&vt(Ne,N),!zt&&(z=se&&se.onVnodeMounted)){const Gt=g;vt(()=>qt(z,Ie,Gt),N)}(g.shapeFlag&256||Ie&&nr(Ie.vnode)&&Ie.vnode.shapeFlag&256)&&m.a&&vt(m.a,N),m.isMounted=!0,g=x=T=null}};m.scope.on();const V=m.effect=new rm(j);m.scope.off();const D=m.update=V.run.bind(V),ee=m.job=V.runIfDirty.bind(V);ee.i=m,ee.id=m.uid,V.scheduler=()=>uu(ee),xs(m,!0),D()},ae=(m,g,x)=>{g.component=m;const T=m.vnode.props;m.vnode=g,m.next=null,Ib(m,g.props,T,x),kb(m,g.children,x),ms(),nd(m),gs()},xe=(m,g,x,T,N,A,H,j,V=!1)=>{const D=m&&m.children,ee=m?m.shapeFlag:0,z=g.children,{patchFlag:J,shapeFlag:se}=g;if(J>0){if(J&128){Ln(D,z,x,T,N,A,H,j,V);return}else if(J&256){cn(D,z,x,T,N,A,H,j,V);return}}se&8?(ee&16&&Ct(D,N,A),z!==D&&u(x,z)):ee&16?se&16?Ln(D,z,x,T,N,A,H,j,V):Ct(D,N,A,!0):(ee&8&&u(x,""),se&16&&L(z,x,T,N,A,H,j,V))},cn=(m,g,x,T,N,A,H,j,V)=>{m=m||oi,g=g||oi;const D=m.length,ee=g.length,z=Math.min(D,ee);let J;for(J=0;J<z;J++){const se=g[J]=V?Gn(g[J]):Xt(g[J]);_(m[J],se,x,null,N,A,H,j,V)}D>ee?Ct(m,N,A,!0,!1,z):L(g,x,T,N,A,H,j,V,z)},Ln=(m,g,x,T,N,A,H,j,V)=>{let D=0;const ee=g.length;let z=m.length-1,J=ee-1;for(;D<=z&&D<=J;){const se=m[D],ge=g[D]=V?Gn(g[D]):Xt(g[D]);if(Ss(se,ge))_(se,ge,x,null,N,A,H,j,V);else break;D++}for(;D<=z&&D<=J;){const se=m[z],ge=g[J]=V?Gn(g[J]):Xt(g[J]);if(Ss(se,ge))_(se,ge,x,null,N,A,H,j,V);else break;z--,J--}if(D>z){if(D<=J){const se=J+1,ge=se<ee?g[se].el:T;for(;D<=J;)_(null,g[D]=V?Gn(g[D]):Xt(g[D]),x,ge,N,A,H,j,V),D++}}else if(D>J)for(;D<=z;)ft(m[D],N,A,!0),D++;else{const se=D,ge=D,Ne=new Map;for(D=ge;D<=J;D++){const _t=g[D]=V?Gn(g[D]):Xt(g[D]);_t.key!=null&&Ne.set(_t.key,D)}let Ie,gt=0;const dt=J-ge+1;let zt=!1,Gt=0;const Vi=new Array(dt);for(D=0;D<dt;D++)Vi[D]=0;for(D=se;D<=z;D++){const _t=m[D];if(gt>=dt){ft(_t,N,A,!0);continue}let Kt;if(_t.key!=null)Kt=Ne.get(_t.key);else for(Ie=ge;Ie<=J;Ie++)if(Vi[Ie-ge]===0&&Ss(_t,g[Ie])){Kt=Ie;break}Kt===void 0?ft(_t,N,A,!0):(Vi[Kt-ge]=D+1,Kt>=Gt?Gt=Kt:zt=!0,_(_t,g[Kt],x,null,N,A,H,j,V),gt++)}const Cf=zt?Nb(Vi):oi;for(Ie=Cf.length-1,D=dt-1;D>=0;D--){const _t=ge+D,Kt=g[_t],If=_t+1<ee?g[_t+1].el:T;Vi[D]===0?_(null,Kt,x,If,N,A,H,j,V):zt&&(Ie<0||D!==Cf[Ie]?Wt(Kt,x,If,2):Ie--)}}},Wt=(m,g,x,T,N=null)=>{const{el:A,type:H,transition:j,children:V,shapeFlag:D}=m;if(D&6){Wt(m.component.subTree,g,x,T);return}if(D&128){m.suspense.move(g,x,T);return}if(D&64){H.move(m,g,x,Q);return}if(H===ce){s(A,g,x);for(let z=0;z<V.length;z++)Wt(V[z],g,x,T);s(m.anchor,g,x);return}if(H===ll){R(m,g,x);return}if(T!==2&&D&1&&j)if(T===0)j.beforeEnter(A),s(A,g,x),vt(()=>j.enter(A),N);else{const{leave:z,delayLeave:J,afterLeave:se}=j,ge=()=>s(A,g,x),Ne=()=>{z(A,()=>{ge(),se&&se()})};J?J(A,ge,Ne):Ne()}else s(A,g,x)},ft=(m,g,x,T=!1,N=!1)=>{const{type:A,props:H,ref:j,children:V,dynamicChildren:D,shapeFlag:ee,patchFlag:z,dirs:J,cacheIndex:se}=m;if(z===-2&&(N=!1),j!=null&&Oo(j,null,x,m,!0),se!=null&&(g.renderCache[se]=void 0),ee&256){g.ctx.deactivate(m);return}const ge=ee&1&&J,Ne=!nr(m);let Ie;if(Ne&&(Ie=H&&H.onVnodeBeforeUnmount)&&qt(Ie,g,m),ee&6)so(m.component,x,T);else{if(ee&128){m.suspense.unmount(x,T);return}ge&&bs(m,null,g,"beforeUnmount"),ee&64?m.type.remove(m,g,x,Q,T):D&&!D.hasOnce&&(A!==ce||z>0&&z&64)?Ct(D,g,x,!1,!0):(A===ce&&z&384||!N&&ee&16)&&Ct(V,g,x),T&&Ks(m)}(Ne&&(Ie=H&&H.onVnodeUnmounted)||ge)&&vt(()=>{Ie&&qt(Ie,g,m),ge&&bs(m,null,g,"unmounted")},x)},Ks=m=>{const{type:g,el:x,anchor:T,transition:N}=m;if(g===ce){qs(x,T);return}if(g===ll){O(m);return}const A=()=>{i(x),N&&!N.persisted&&N.afterLeave&&N.afterLeave()};if(m.shapeFlag&1&&N&&!N.persisted){const{leave:H,delayLeave:j}=N,V=()=>H(x,A);j?j(m.el,A,V):V()}else A()},qs=(m,g)=>{let x;for(;m!==g;)x=d(m),i(m),m=x;i(g)},so=(m,g,x)=>{const{bum:T,scope:N,job:A,subTree:H,um:j,m:V,a:D}=m;ud(V),ud(D),T&&_o(T),N.stop(),A&&(A.flags|=8,ft(H,m,g,x)),j&&vt(j,g),vt(()=>{m.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},Ct=(m,g,x,T=!1,N=!1,A=0)=>{for(let H=A;H<m.length;H++)ft(m[H],g,x,T,N)},k=m=>{if(m.shapeFlag&6)return k(m.component.subTree);if(m.shapeFlag&128)return m.suspense.next();const g=d(m.anchor||m.el),x=g&&g[Zy];return x?d(x):g};let K=!1;const W=(m,g,x)=>{m==null?g._vnode&&ft(g._vnode,null,null,!0):_(g._vnode||null,m,g,null,null,null,x),g._vnode=m,K||(K=!0,nd(),Em(),K=!1)},Q={p:_,um:ft,m:Wt,r:Ks,mt:be,mc:L,pc:xe,pbc:U,n:k,o:t};return{render:W,hydrate:void 0,createApp:xb(W)}}function al({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function xs({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Pb(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ym(t,e,n=!1){const s=t.children,i=e.children;if(X(s)&&X(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Gn(i[r]),a.el=o.el),!n&&a.patchFlag!==-2&&Ym(o,a)),a.type===Sa&&(a.el=o.el)}}function Nb(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Qm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Qm(e)}function ud(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Ob=Symbol.for("v-scx"),Mb=()=>Tt(Ob);function Ns(t,e,n){return Xm(t,e,n)}function Xm(t,e,n=Re){const{immediate:s,deep:i,flush:r,once:o}=n,a=Ge({},n),l=e&&s||!e&&r!=="post";let c;if(xr){if(r==="sync"){const p=Mb();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=tn,p.resume=tn,p.pause=tn,p}}const u=Xe;a.call=(p,y,_)=>Vt(p,u,y,_);let f=!1;r==="post"?a.scheduler=p=>{vt(p,u&&u.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(p,y)=>{y?p():uu(p)}),a.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const d=Yy(t,e,a);return xr&&(c?c.push(d):l&&d()),d}function Db(t,e,n){const s=this.proxy,i=je(t)?t.includes(".")?Jm(s,t):()=>s[t]:t.bind(s,s);let r;ie(e)?r=e:(r=e.handler,n=e);const o=Wr(this),a=Xm(i,r.bind(s),n);return o(),a}function Jm(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const Lb=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${At(e)}Modifiers`]||t[`${ps(e)}Modifiers`];function Fb(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Re;let i=n;const r=e.startsWith("update:"),o=r&&Lb(s,e.slice(7));o&&(o.trim&&(i=n.map(u=>je(u)?u.trim():u)),o.number&&(i=n.map(ko)));let a,l=s[a=el(e)]||s[a=el(At(e))];!l&&r&&(l=s[a=el(ps(e))]),l&&Vt(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Vt(c,t,6,i)}}function Zm(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!ie(t)){const l=c=>{const u=Zm(c,e,!0);u&&(a=!0,Ge(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(Pe(t)&&s.set(t,null),null):(X(r)?r.forEach(l=>o[l]=null):Ge(o,r),Pe(t)&&s.set(t,o),o)}function Ea(t,e){return!t||!ma(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ce(t,e[0].toLowerCase()+e.slice(1))||Ce(t,ps(e))||Ce(t,e))}function fd(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:p,ctx:y,inheritAttrs:_}=t,w=No(t);let v,b;try{if(n.shapeFlag&4){const O=i||s,G=O;v=Xt(c.call(G,O,u,f,p,d,y)),b=a}else{const O=e;v=Xt(O.length>1?O(f,{attrs:a,slots:o,emit:l}):O(f,null)),b=e.props?a:$b(a)}}catch(O){ir.length=0,xa(O,t,1),v=$(pt)}let R=v;if(b&&_!==!1){const O=Object.keys(b),{shapeFlag:G}=R;O.length&&G&7&&(r&&O.some(Jc)&&(b=Ub(b,r)),R=cs(R,b,!1,!0))}return n.dirs&&(R=cs(R,null,!1,!0),R.dirs=R.dirs?R.dirs.concat(n.dirs):n.dirs),n.transition&&$s(R,n.transition),v=R,No(w),v}const $b=t=>{let e;for(const n in t)(n==="class"||n==="style"||ma(n))&&((e||(e={}))[n]=t[n]);return e},Ub=(t,e)=>{const n={};for(const s in t)(!Jc(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Vb(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?dd(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==s[d]&&!Ea(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?dd(s,o,c):!0:!!o;return!1}function dd(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Ea(n,r))return!0}return!1}function Bb({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const eg=t=>t.__isSuspense;function jb(t,e){e&&e.pendingBranch?X(t)?e.effects.push(...t):e.effects.push(t):Jy(t)}const ce=Symbol.for("v-fgt"),Sa=Symbol.for("v-txt"),pt=Symbol.for("v-cmt"),ll=Symbol.for("v-stc"),ir=[];let bt=null;function C(t=!1){ir.push(bt=t?null:[])}function Hb(){ir.pop(),bt=ir[ir.length-1]||null}let br=1;function hd(t,e=!1){br+=t,t<0&&bt&&e&&(bt.hasOnce=!0)}function tg(t){return t.dynamicChildren=br>0?bt||oi:null,Hb(),br>0&&bt&&bt.push(t),t}function S(t,e,n,s,i,r){return tg(h(t,e,n,s,i,r,!0))}function Ke(t,e,n,s,i){return tg($(t,e,n,s,i,!0))}function Do(t){return t?t.__v_isVNode===!0:!1}function Ss(t,e){return t.type===e.type&&t.key===e.key}const ng=({key:t})=>t??null,yo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?je(t)||Be(t)||ie(t)?{i:at,r:t,k:e,f:!!n}:t:null);function h(t,e=null,n=null,s=0,i=null,r=t===ce?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ng(e),ref:e&&yo(e),scopeId:Tm,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:at};return a?(mu(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=je(n)?8:16),br>0&&!o&&bt&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&bt.push(l),l}const $=Wb;function Wb(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===db)&&(t=pt),Do(t)){const a=cs(t,e,!0);return n&&mu(a,n),br>0&&!r&&bt&&(a.shapeFlag&6?bt[bt.indexOf(t)]=a:bt.push(a)),a.patchFlag=-2,a}if(tx(t)&&(t=t.__vccOpts),e){e=zb(e);let{class:a,style:l}=e;a&&!je(a)&&(e.class=Cn(a)),Pe(l)&&(lu(l)&&!X(l)&&(l=Ge({},l)),e.style=ya(l))}const o=je(t)?1:eg(t)?128:km(t)?64:Pe(t)?4:ie(t)?2:0;return h(t,e,n,s,i,o,r,!0)}function zb(t){return t?lu(t)||jm(t)?Ge({},t):t:null}function cs(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:a,transition:l}=t,c=e?Gb(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&ng(c),ref:e&&e.ref?n&&r?X(r)?r.concat(yo(e)):[r,yo(e)]:yo(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ce?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&cs(t.ssContent),ssFallback:t.ssFallback&&cs(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&s&&$s(u,l.clone(u)),u}function Ue(t=" ",e=0){return $(Sa,null,t,e)}function es(t="",e=!1){return e?(C(),Ke(pt,null,t)):$(pt,null,t)}function Xt(t){return t==null||typeof t=="boolean"?$(pt):X(t)?$(ce,null,t.slice()):Do(t)?Gn(t):$(Sa,null,String(t))}function Gn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:cs(t)}function mu(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(X(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),mu(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!jm(e)?e._ctx=at:i===3&&at&&(at.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ie(e)?(e={default:e,_ctx:at},n=32):(e=String(e),s&64?(n=16,e=[Ue(e)]):n=8);t.children=e,t.shapeFlag|=n}function Gb(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Cn([e.class,s.class]));else if(i==="style")e.style=ya([e.style,s.style]);else if(ma(i)){const r=e[i],o=s[i];o&&r!==o&&!(X(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function qt(t,e,n,s=null){Vt(t,e,7,[n,s])}const Kb=Um();let qb=0;function Yb(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Kb,r={uid:qb++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new nm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Wm(s,i),emitsOptions:Zm(s,i),emit:null,emitted:null,propsDefaults:Re,inheritAttrs:s.inheritAttrs,ctx:Re,data:Re,props:Re,attrs:Re,slots:Re,refs:Re,setupState:Re,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Fb.bind(null,r),t.ce&&t.ce(r),r}let Xe=null;const sg=()=>Xe||at;let Lo,oc;{const t=va(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};Lo=e("__VUE_INSTANCE_SETTERS__",n=>Xe=n),oc=e("__VUE_SSR_SETTERS__",n=>xr=n)}const Wr=t=>{const e=Xe;return Lo(t),t.scope.on(),()=>{t.scope.off(),Lo(e)}},pd=()=>{Xe&&Xe.scope.off(),Lo(null)};function ig(t){return t.vnode.shapeFlag&4}let xr=!1;function Qb(t,e=!1,n=!1){e&&oc(e);const{props:s,children:i}=t.vnode,r=ig(t);Cb(t,s,r,e),Tb(t,i,n);const o=r?Xb(t,e):void 0;return e&&oc(!1),o}function Xb(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,pb);const{setup:s}=n;if(s){ms();const i=t.setupContext=s.length>1?Zb(t):null,r=Wr(t),o=Hr(s,t,0,[t.props,i]),a=Yp(o);if(gs(),r(),(a||t.sp)&&!nr(t)&&Mm(t),a){if(o.then(pd,pd),e)return o.then(l=>{md(t,l)}).catch(l=>{xa(l,t,0)});t.asyncDep=o}else md(t,o)}else rg(t)}function md(t,e,n){ie(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Pe(e)&&(t.setupState=wm(e)),rg(t)}function rg(t,e,n){const s=t.type;t.render||(t.render=s.render||tn);{const i=Wr(t);ms();try{mb(t)}finally{gs(),i()}}}const Jb={get(t,e){return et(t,"get",""),t[e]}};function Zb(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Jb),slots:t.slots,emit:t.emit,expose:e}}function Ta(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(wm(cu(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in sr)return sr[n](t)},has(e,n){return n in e||n in sr}})):t.proxy}function ex(t,e=!0){return ie(t)?t.displayName||t.name:t.name||e&&t.__name}function tx(t){return ie(t)&&"__vccOpts"in t}const le=(t,e)=>Ky(t,e,xr);function ka(t,e,n){const s=arguments.length;return s===2?Pe(e)&&!X(e)?Do(e)?$(t,null,[e]):$(t,e):$(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Do(n)&&(n=[n]),$(t,e,n))}const nx="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ac;const gd=typeof window<"u"&&window.trustedTypes;if(gd)try{ac=gd.createPolicy("vue",{createHTML:t=>t})}catch{}const og=ac?t=>ac.createHTML(t):t=>t,sx="http://www.w3.org/2000/svg",ix="http://www.w3.org/1998/Math/MathML",dn=typeof document<"u"?document:null,_d=dn&&dn.createElement("template"),rx={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?dn.createElementNS(sx,t):e==="mathml"?dn.createElementNS(ix,t):n?dn.createElement(t,{is:n}):dn.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>dn.createTextNode(t),createComment:t=>dn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>dn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{_d.innerHTML=og(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const a=_d.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},$n="transition",ji="animation",gi=Symbol("_vtc"),ag={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},lg=Ge({},Rm,ag),ox=t=>(t.displayName="Transition",t.props=lg,t),gu=ox((t,{slots:e})=>ka(tb,cg(t),e)),ws=(t,e=[])=>{X(t)?t.forEach(n=>n(...e)):t&&t(...e)},vd=t=>t?X(t)?t.some(e=>e.length>1):t.length>1:!1;function cg(t){const e={};for(const B in t)B in ag||(e[B]=t[B]);if(t.css===!1)return e;const{name:n="v",type:s,duration:i,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,y=ax(i),_=y&&y[0],w=y&&y[1],{onBeforeEnter:v,onEnter:b,onEnterCancelled:R,onLeave:O,onLeaveCancelled:G,onBeforeAppear:q=v,onAppear:E=b,onAppearCancelled:L=R}=e,P=(B,ue,be,st)=>{B._enterCancelled=st,jn(B,ue?u:a),jn(B,ue?c:o),be&&be()},U=(B,ue)=>{B._isLeaving=!1,jn(B,f),jn(B,p),jn(B,d),ue&&ue()},re=B=>(ue,be)=>{const st=B?E:b,Te=()=>P(ue,B,be);ws(st,[ue,Te]),yd(()=>{jn(ue,B?l:r),Yt(ue,B?u:a),vd(st)||bd(ue,s,_,Te)})};return Ge(e,{onBeforeEnter(B){ws(v,[B]),Yt(B,r),Yt(B,o)},onBeforeAppear(B){ws(q,[B]),Yt(B,l),Yt(B,c)},onEnter:re(!1),onAppear:re(!0),onLeave(B,ue){B._isLeaving=!0;const be=()=>U(B,ue);Yt(B,f),B._enterCancelled?(Yt(B,d),lc()):(lc(),Yt(B,d)),yd(()=>{B._isLeaving&&(jn(B,f),Yt(B,p),vd(O)||bd(B,s,w,be))}),ws(O,[B,be])},onEnterCancelled(B){P(B,!1,void 0,!0),ws(R,[B])},onAppearCancelled(B){P(B,!0,void 0,!0),ws(L,[B])},onLeaveCancelled(B){U(B),ws(G,[B])}})}function ax(t){if(t==null)return null;if(Pe(t))return[cl(t.enter),cl(t.leave)];{const e=cl(t);return[e,e]}}function cl(t){return dy(t)}function Yt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[gi]||(t[gi]=new Set)).add(e)}function jn(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const n=t[gi];n&&(n.delete(e),n.size||(t[gi]=void 0))}function yd(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let lx=0;function bd(t,e,n,s){const i=t._endId=++lx,r=()=>{i===t._endId&&s()};if(n!=null)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=ug(t,e);if(!o)return s();const c=o+"end";let u=0;const f=()=>{t.removeEventListener(c,d),r()},d=p=>{p.target===t&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),t.addEventListener(c,d)}function ug(t,e){const n=window.getComputedStyle(t),s=y=>(n[y]||"").split(", "),i=s(`${$n}Delay`),r=s(`${$n}Duration`),o=xd(i,r),a=s(`${ji}Delay`),l=s(`${ji}Duration`),c=xd(a,l);let u=null,f=0,d=0;e===$n?o>0&&(u=$n,f=o,d=r.length):e===ji?c>0&&(u=ji,f=c,d=l.length):(f=Math.max(o,c),u=f>0?o>c?$n:ji:null,d=u?u===$n?r.length:l.length:0);const p=u===$n&&/\b(transform|all)(,|$)/.test(s(`${$n}Property`).toString());return{type:u,timeout:f,propCount:d,hasTransform:p}}function xd(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>wd(n)+wd(t[s])))}function wd(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function lc(){return document.body.offsetHeight}function cx(t,e,n){const s=t[gi];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Fo=Symbol("_vod"),fg=Symbol("_vsh"),ux={beforeMount(t,{value:e},{transition:n}){t[Fo]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Hi(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Hi(t,!0),s.enter(t)):s.leave(t,()=>{Hi(t,!1)}):Hi(t,e))},beforeUnmount(t,{value:e}){Hi(t,e)}};function Hi(t,e){t.style.display=e?t[Fo]:"none",t[fg]=!e}const fx=Symbol(""),dx=/(^|;)\s*display\s*:/;function hx(t,e,n){const s=t.style,i=je(n);let r=!1;if(n&&!i){if(e)if(je(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&bo(s,a,"")}else for(const o in e)n[o]==null&&bo(s,o,"");for(const o in n)o==="display"&&(r=!0),bo(s,o,n[o])}else if(i){if(e!==n){const o=s[fx];o&&(n+=";"+o),s.cssText=n,r=dx.test(n)}}else e&&t.removeAttribute("style");Fo in t&&(t[Fo]=r?s.display:"",t[fg]&&(s.display="none"))}const Cd=/\s*!important$/;function bo(t,e,n){if(X(n))n.forEach(s=>bo(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=px(t,e);Cd.test(n)?t.setProperty(ps(s),n.replace(Cd,""),"important"):t[s]=n}}const Id=["Webkit","Moz","ms"],ul={};function px(t,e){const n=ul[e];if(n)return n;let s=At(e);if(s!=="filter"&&s in t)return ul[e]=s;s=_a(s);for(let i=0;i<Id.length;i++){const r=Id[i]+s;if(r in t)return ul[e]=r}return e}const Ed="http://www.w3.org/1999/xlink";function Sd(t,e,n,s,i,r=vy(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Ed,e.slice(6,e.length)):t.setAttributeNS(Ed,e,n):n==null||r&&!Zp(n)?t.removeAttribute(e):t.setAttribute(e,r?"":sn(n)?String(n):n)}function Td(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?og(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Zp(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function mn(t,e,n,s){t.addEventListener(e,n,s)}function mx(t,e,n,s){t.removeEventListener(e,n,s)}const kd=Symbol("_vei");function gx(t,e,n,s,i=null){const r=t[kd]||(t[kd]={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=_x(e);if(s){const c=r[e]=bx(s,i);mn(t,a,c,l)}else o&&(mx(t,a,o,l),r[e]=void 0)}}const Ad=/(?:Once|Passive|Capture)$/;function _x(t){let e;if(Ad.test(t)){e={};let s;for(;s=t.match(Ad);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ps(t.slice(2)),e]}let fl=0;const vx=Promise.resolve(),yx=()=>fl||(vx.then(()=>fl=0),fl=Date.now());function bx(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Vt(xx(s,n.value),e,5,[s])};return n.value=t,n.attached=yx(),n}function xx(t,e){if(X(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Rd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,wx=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?cx(t,s,o):e==="style"?hx(t,n,s):ma(e)?Jc(e)||gx(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Cx(t,e,s,o))?(Td(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Sd(t,e,s,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!je(s))?Td(t,At(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Sd(t,e,s,o))};function Cx(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Rd(e)&&ie(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Rd(e)&&je(n)?!1:e in t}const dg=new WeakMap,hg=new WeakMap,$o=Symbol("_moveCb"),Pd=Symbol("_enterCb"),Ix=t=>(delete t.props.mode,t),Ex=Ix({name:"TransitionGroup",props:Ge({},lg,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=sg(),s=Am();let i,r;return hu(()=>{if(!i.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!Rx(i[0].el,n.vnode.el,o))return;i.forEach(Tx),i.forEach(kx);const a=i.filter(Ax);lc(),a.forEach(l=>{const c=l.el,u=c.style;Yt(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const f=c[$o]=d=>{d&&d.target!==c||(!d||/transform$/.test(d.propertyName))&&(c.removeEventListener("transitionend",f),c[$o]=null,jn(c,o))};c.addEventListener("transitionend",f)})}),()=>{const o=_e(t),a=cg(o);let l=o.tag||ce;if(i=[],r)for(let c=0;c<r.length;c++){const u=r[c];u.el&&u.el instanceof Element&&(i.push(u),$s(u,yr(u,a,s,n)),dg.set(u,u.el.getBoundingClientRect()))}r=e.default?fu(e.default()):[];for(let c=0;c<r.length;c++){const u=r[c];u.key!=null&&$s(u,yr(u,a,s,n))}return $(l,null,r)}}}),Sx=Ex;function Tx(t){const e=t.el;e[$o]&&e[$o](),e[Pd]&&e[Pd]()}function kx(t){hg.set(t,t.el.getBoundingClientRect())}function Ax(t){const e=dg.get(t),n=hg.get(t),s=e.left-n.left,i=e.top-n.top;if(s||i){const r=t.el.style;return r.transform=r.webkitTransform=`translate(${s}px,${i}px)`,r.transitionDuration="0s",t}}function Rx(t,e,n){const s=t.cloneNode(),i=t[gi];i&&i.forEach(a=>{a.split(/\s+/).forEach(l=>l&&s.classList.remove(l))}),n.split(/\s+/).forEach(a=>a&&s.classList.add(a)),s.style.display="none";const r=e.nodeType===1?e:e.parentNode;r.appendChild(s);const{hasTransform:o}=ug(s);return r.removeChild(s),o}const us=t=>{const e=t.props["onUpdate:modelValue"]||!1;return X(e)?n=>_o(e,n):e};function Px(t){t.target.composing=!0}function Nd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const kt=Symbol("_assign"),He={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[kt]=us(i);const r=s||i.props&&i.props.type==="number";mn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=ko(a)),t[kt](a)}),n&&mn(t,"change",()=>{t.value=t.value.trim()}),e||(mn(t,"compositionstart",Px),mn(t,"compositionend",Nd),mn(t,"change",Nd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(t[kt]=us(o),t.composing)return;const a=(r||t.type==="number")&&!/^0\d/.test(t.value)?ko(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===l)||(t.value=l))}},pg={deep:!0,created(t,e,n){t[kt]=us(n),mn(t,"change",()=>{const s=t._modelValue,i=_i(t),r=t.checked,o=t[kt];if(X(s)){const a=tu(s,i),l=a!==-1;if(r&&!l)o(s.concat(i));else if(!r&&l){const c=[...s];c.splice(a,1),o(c)}}else if(Ri(s)){const a=new Set(s);r?a.add(i):a.delete(i),o(a)}else o(mg(t,r))})},mounted:Od,beforeUpdate(t,e,n){t[kt]=us(n),Od(t,e,n)}};function Od(t,{value:e,oldValue:n},s){t._modelValue=e;let i;if(X(e))i=tu(e,s.props.value)>-1;else if(Ri(e))i=e.has(s.props.value);else{if(e===n)return;i=Ls(e,mg(t,!0))}t.checked!==i&&(t.checked=i)}const Nx={created(t,{value:e},n){t.checked=Ls(e,n.props.value),t[kt]=us(n),mn(t,"change",()=>{t[kt](_i(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t[kt]=us(s),e!==n&&(t.checked=Ls(e,s.props.value))}},si={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const i=Ri(e);mn(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?ko(_i(o)):_i(o));t[kt](t.multiple?i?new Set(r):r:r[0]),t._assigning=!0,Pi(()=>{t._assigning=!1})}),t[kt]=us(s)},mounted(t,{value:e}){Md(t,e)},beforeUpdate(t,e,n){t[kt]=us(n)},updated(t,{value:e}){t._assigning||Md(t,e)}};function Md(t,e){const n=t.multiple,s=X(e);if(!(n&&!s&&!Ri(e))){for(let i=0,r=t.options.length;i<r;i++){const o=t.options[i],a=_i(o);if(n)if(s){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=tu(e,a)>-1}else o.selected=e.has(a);else if(Ls(_i(o),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function _i(t){return"_value"in t?t._value:t.value}function mg(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const dl={created(t,e,n){uo(t,e,n,null,"created")},mounted(t,e,n){uo(t,e,n,null,"mounted")},beforeUpdate(t,e,n,s){uo(t,e,n,s,"beforeUpdate")},updated(t,e,n,s){uo(t,e,n,s,"updated")}};function Ox(t,e){switch(t){case"SELECT":return si;case"TEXTAREA":return He;default:switch(e){case"checkbox":return pg;case"radio":return Nx;default:return He}}}function uo(t,e,n,s,i){const o=Ox(t.tagName,n.props&&n.props.type)[i];o&&o(t,e,n,s)}const Mx={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},wr=(t,e)=>{const n=t._withKeys||(t._withKeys={}),s=e.join(".");return n[s]||(n[s]=i=>{if(!("key"in i))return;const r=ps(i.key);if(e.some(o=>o===r||Mx[o]===r))return t(i)})},Dx=Ge({patchProp:wx},rx);let Dd;function Lx(){return Dd||(Dd=Ab(Dx))}const Fx=(...t)=>{const e=Lx().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Ux(s);if(!i)return;const r=e._component;!ie(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,$x(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function $x(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Ux(t){return je(t)?document.querySelector(t):t}function Ld(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,s)}return n}function gn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ld(Object(n),!0).forEach(function(s){ht(t,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ld(Object(n)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(n,s))})}return t}function Vx(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var s=n.call(t,e);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Bx(t){var e=Vx(t,"string");return typeof e=="symbol"?e:e+""}function Uo(t){"@babel/helpers - typeof";return Uo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Uo(t)}function ht(t,e,n){return e=Bx(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function jx(t,e){if(t==null)return{};var n={};for(var s in t)if(Object.prototype.hasOwnProperty.call(t,s)){if(e.indexOf(s)>=0)continue;n[s]=t[s]}return n}function Hx(t,e){if(t==null)return{};var n=jx(t,e),s,i;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)s=r[i],!(e.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(t,s)&&(n[s]=t[s])}return n}var Wx=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},gg={exports:{}};(function(t){(function(e){var n=function(v,b,R){if(!c(b)||f(b)||d(b)||p(b)||l(b))return b;var O,G=0,q=0;if(u(b))for(O=[],q=b.length;G<q;G++)O.push(n(v,b[G],R));else{O={};for(var E in b)Object.prototype.hasOwnProperty.call(b,E)&&(O[v(E,R)]=n(v,b[E],R))}return O},s=function(v,b){b=b||{};var R=b.separator||"_",O=b.split||/(?=[A-Z])/;return v.split(O).join(R)},i=function(v){return y(v)?v:(v=v.replace(/[\-_\s]+(.)?/g,function(b,R){return R?R.toUpperCase():""}),v.substr(0,1).toLowerCase()+v.substr(1))},r=function(v){var b=i(v);return b.substr(0,1).toUpperCase()+b.substr(1)},o=function(v,b){return s(v,b).toLowerCase()},a=Object.prototype.toString,l=function(v){return typeof v=="function"},c=function(v){return v===Object(v)},u=function(v){return a.call(v)=="[object Array]"},f=function(v){return a.call(v)=="[object Date]"},d=function(v){return a.call(v)=="[object RegExp]"},p=function(v){return a.call(v)=="[object Boolean]"},y=function(v){return v=v-0,v===v},_=function(v,b){var R=b&&"process"in b?b.process:b;return typeof R!="function"?v:function(O,G){return R(O,v,G)}},w={camelize:i,decamelize:o,pascalize:r,depascalize:o,camelizeKeys:function(v,b){return n(_(i,b),v)},decamelizeKeys:function(v,b){return n(_(o,b),v,b)},pascalizeKeys:function(v,b){return n(_(r,b),v)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=w:e.humps=w})(Wx)})(gg);var zx=gg.exports,Gx=["class","style"];function Kx(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var s=n.indexOf(":"),i=zx.camelize(n.slice(0,s)),r=n.slice(s+1).trim();return e[i]=r,e},{})}function qx(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function _g(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var s=(t.children||[]).map(function(l){return _g(l)}),i=Object.keys(t.attributes||{}).reduce(function(l,c){var u=t.attributes[c];switch(c){case"class":l.class=qx(u);break;case"style":l.style=Kx(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var r=n.style,o=r===void 0?{}:r,a=Hx(n,Gx);return ka(t.tag,gn(gn(gn({},e),{},{class:i.class,style:gn(gn({},i.style),o)},i.attrs),a),s)}var vg=!1;try{vg=!0}catch{}function Yx(){if(!vg&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function hl(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?ht({},t,e):{}}function Qx(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},ht(ht(ht(ht(ht(ht(ht(ht(ht(ht(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),ht(ht(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(s){return n[s]?s:null}).filter(function(s){return s})}function Fd(t){if(t&&Uo(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Xl.icon)return Xl.icon(t);if(t===null)return null;if(Uo(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var Xx=du({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var s=n.attrs,i=le(function(){return Fd(e.icon)}),r=le(function(){return hl("classes",Qx(e))}),o=le(function(){return hl("transform",typeof e.transform=="string"?Xl.transform(e.transform):e.transform)}),a=le(function(){return hl("mask",Fd(e.mask))}),l=le(function(){return ny(i.value,gn(gn(gn(gn({},r.value),o.value),a.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});Ns(l,function(u){if(!u)return Yx("Could not find one or more icon(s)",i.value,a.value)},{immediate:!0});var c=le(function(){return l.value?_g(l.value.abstract[0],{},s):null});return function(){return c.value}}});/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let yg;const Aa=t=>yg=t,bg=Symbol();function cc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var rr;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(rr||(rr={}));function Jx(){const t=sm(!0),e=t.run(()=>oe({}));let n=[],s=[];const i=cu({install(r){Aa(i),i._a=r,r.provide(bg,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return this._a?n.push(r):s.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const xg=()=>{};function $d(t,e,n,s=xg){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&im()&&by(i),i}function Qs(t,...e){t.slice().forEach(n=>{n(...e)})}const Zx=t=>t(),Ud=Symbol(),pl=Symbol();function uc(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,s)=>t.set(s,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];cc(i)&&cc(s)&&t.hasOwnProperty(n)&&!Be(s)&&!Zn(s)?t[n]=uc(i,s):t[n]=s}return t}const ew=Symbol();function tw(t){return!cc(t)||!t.hasOwnProperty(ew)}const{assign:Hn}=Object;function nw(t){return!!(Be(t)&&t.effect)}function sw(t,e,n,s){const{state:i,actions:r,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=i?i():{});const u=Hy(n.state.value[t]);return Hn(u,r,Object.keys(o||{}).reduce((f,d)=>(f[d]=cu(le(()=>{Aa(n);const p=n._s.get(t);return o[d].call(p,p)})),f),{}))}return l=wg(t,c,e,n,s,!0),l}function wg(t,e,n={},s,i,r){let o;const a=Hn({actions:{}},n),l={deep:!0};let c,u,f=[],d=[],p;const y=s.state.value[t];!r&&!y&&(s.state.value[t]={}),oe({});let _;function w(L){let P;c=u=!1,typeof L=="function"?(L(s.state.value[t]),P={type:rr.patchFunction,storeId:t,events:p}):(uc(s.state.value[t],L),P={type:rr.patchObject,payload:L,storeId:t,events:p});const U=_=Symbol();Pi().then(()=>{_===U&&(c=!0)}),u=!0,Qs(f,P,s.state.value[t])}const v=r?function(){const{state:P}=n,U=P?P():{};this.$patch(re=>{Hn(re,U)})}:xg;function b(){o.stop(),f=[],d=[],s._s.delete(t)}const R=(L,P="")=>{if(Ud in L)return L[pl]=P,L;const U=function(){Aa(s);const re=Array.from(arguments),B=[],ue=[];function be(ae){B.push(ae)}function st(ae){ue.push(ae)}Qs(d,{args:re,name:U[pl],store:G,after:be,onError:st});let Te;try{Te=L.apply(this&&this.$id===t?this:G,re)}catch(ae){throw Qs(ue,ae),ae}return Te instanceof Promise?Te.then(ae=>(Qs(B,ae),ae)).catch(ae=>(Qs(ue,ae),Promise.reject(ae))):(Qs(B,Te),Te)};return U[Ud]=!0,U[pl]=P,U},O={_p:s,$id:t,$onAction:$d.bind(null,d),$patch:w,$reset:v,$subscribe(L,P={}){const U=$d(f,L,P.detached,()=>re()),re=o.run(()=>Ns(()=>s.state.value[t],B=>{(P.flush==="sync"?u:c)&&L({storeId:t,type:rr.direct,events:p},B)},Hn({},l,P)));return U},$dispose:b},G=jr(O);s._s.set(t,G);const E=(s._a&&s._a.runWithContext||Zx)(()=>s._e.run(()=>(o=sm()).run(()=>e({action:R}))));for(const L in E){const P=E[L];if(Be(P)&&!nw(P)||Zn(P))r||(y&&tw(P)&&(Be(P)?P.value=y[L]:uc(P,y[L])),s.state.value[t][L]=P);else if(typeof P=="function"){const U=R(P,L);E[L]=U,a.actions[L]=P}}return Hn(G,E),Hn(_e(G),E),Object.defineProperty(G,"$state",{get:()=>s.state.value[t],set:L=>{w(P=>{Hn(P,L)})}}),s._p.forEach(L=>{Hn(G,o.run(()=>L({store:G,app:s._a,pinia:s,options:a})))}),y&&r&&n.hydrate&&n.hydrate(G.$state,y),c=!0,u=!0,G}/*! #__NO_SIDE_EFFECTS__ */function _s(t,e,n){let s,i;const r=typeof e=="function";typeof t=="string"?(s=t,i=r?n:e):(i=t,s=t.id);function o(a,l){const c=wb();return a=a||(c?Tt(bg,null):null),a&&Aa(a),a=yg,a._s.has(s)||(r?wg(s,e,i,a):sw(s,i,a)),a._s.get(s)}return o.$id=s,o}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const ei=typeof document<"u";function Cg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function iw(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Cg(t.default)}const we=Object.assign;function ml(t,e){const n={};for(const s in e){const i=e[s];n[s]=Bt(i)?i.map(t):t(i)}return n}const or=()=>{},Bt=Array.isArray,Ig=/#/g,rw=/&/g,ow=/\//g,aw=/=/g,lw=/\?/g,Eg=/\+/g,cw=/%5B/g,uw=/%5D/g,Sg=/%5E/g,fw=/%60/g,Tg=/%7B/g,dw=/%7C/g,kg=/%7D/g,hw=/%20/g;function _u(t){return encodeURI(""+t).replace(dw,"|").replace(cw,"[").replace(uw,"]")}function pw(t){return _u(t).replace(Tg,"{").replace(kg,"}").replace(Sg,"^")}function fc(t){return _u(t).replace(Eg,"%2B").replace(hw,"+").replace(Ig,"%23").replace(rw,"%26").replace(fw,"`").replace(Tg,"{").replace(kg,"}").replace(Sg,"^")}function mw(t){return fc(t).replace(aw,"%3D")}function gw(t){return _u(t).replace(Ig,"%23").replace(lw,"%3F")}function _w(t){return t==null?"":gw(t).replace(ow,"%2F")}function Cr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const vw=/\/$/,yw=t=>t.replace(vw,"");function gl(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=Cw(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:Cr(o)}}function bw(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Vd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function xw(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&vi(e.matched[s],n.matched[i])&&Ag(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function vi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Ag(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!ww(t[n],e[n]))return!1;return!0}function ww(t,e){return Bt(t)?Bd(t,e):Bt(e)?Bd(e,t):t===e}function Bd(t,e){return Bt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Cw(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o).join("/")}const Un={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Ir;(function(t){t.pop="pop",t.push="push"})(Ir||(Ir={}));var ar;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ar||(ar={}));function Iw(t){if(!t)if(ei){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),yw(t)}const Ew=/^[^#]+#/;function Sw(t,e){return t.replace(Ew,"#")+e}function Tw(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Ra=()=>({left:window.scrollX,top:window.scrollY});function kw(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=Tw(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function jd(t,e){return(history.state?history.state.position-e:-1)+t}const dc=new Map;function Aw(t,e){dc.set(t,e)}function Rw(t){const e=dc.get(t);return dc.delete(t),e}let Pw=()=>location.protocol+"//"+location.host;function Rg(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),Vd(l,"")}return Vd(n,t)+s+i}function Nw(t,e,n,s){let i=[],r=[],o=null;const a=({state:d})=>{const p=Rg(t,location),y=n.value,_=e.value;let w=0;if(d){if(n.value=p,e.value=d,o&&o===y){o=null;return}w=_?d.position-_.position:0}else s(p);i.forEach(v=>{v(n.value,y,{delta:w,type:Ir.pop,direction:w?w>0?ar.forward:ar.back:ar.unknown})})};function l(){o=n.value}function c(d){i.push(d);const p=()=>{const y=i.indexOf(d);y>-1&&i.splice(y,1)};return r.push(p),p}function u(){const{history:d}=window;d.state&&d.replaceState(we({},d.state,{scroll:Ra()}),"")}function f(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function Hd(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?Ra():null}}function Ow(t){const{history:e,location:n}=window,s={value:Rg(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const f=t.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:Pw()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),i.value=c}catch(p){console.error(p),n[u?"replace":"assign"](d)}}function o(l,c){const u=we({},e.state,Hd(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=we({},i.value,e.state,{forward:l,scroll:Ra()});r(u.current,u,!0);const f=we({},Hd(s.value,l,null),{position:u.position+1},c);r(l,f,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function Mw(t){t=Iw(t);const e=Ow(t),n=Nw(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=we({location:"",base:t,go:s,createHref:Sw.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function Dw(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),Mw(t)}function Lw(t){return typeof t=="string"||t&&typeof t=="object"}function Pg(t){return typeof t=="string"||typeof t=="symbol"}const Ng=Symbol("");var Wd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Wd||(Wd={}));function yi(t,e){return we(new Error,{type:t,[Ng]:!0},e)}function fn(t,e){return t instanceof Error&&Ng in t&&(e==null||!!(t.type&e))}const zd="[^/]+?",Fw={sensitive:!1,strict:!1,start:!0,end:!0},$w=/[.+*?^${}()[\]/\\]/g;function Uw(t,e){const n=we({},Fw,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let f=0;f<c.length;f++){const d=c[f];let p=40+(n.sensitive?.25:0);if(d.type===0)f||(i+="/"),i+=d.value.replace($w,"\\$&"),p+=40;else if(d.type===1){const{value:y,repeatable:_,optional:w,regexp:v}=d;r.push({name:y,repeatable:_,optional:w});const b=v||zd;if(b!==zd){p+=10;try{new RegExp(`(${b})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${y}" (${b}): `+O.message)}}let R=_?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;f||(R=w&&c.length<2?`(?:/${R})`:"/"+R),w&&(R+="?"),i+=R,p+=20,w&&(p+=-8),_&&(p+=-20),b===".*"&&(p+=-50)}u.push(p)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",y=r[d-1];f[y.name]=p&&y.repeatable?p.split("/"):p}return f}function l(c){let u="",f=!1;for(const d of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:y,repeatable:_,optional:w}=p,v=y in c?c[y]:"";if(Bt(v)&&!_)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const b=Bt(v)?v.join("/"):v;if(!b)if(w)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${y}"`);u+=b}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function Vw(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Og(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=Vw(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Gd(s))return 1;if(Gd(i))return-1}return i.length-s.length}function Gd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Bw={type:0,value:""},jw=/[a-zA-Z0-9_]/;function Hw(t){if(!t)return[[]];if(t==="/")return[[Bw]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function f(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),n=1):d();break;case 4:d(),n=s;break;case 1:l==="("?n=2:jw.test(l)?d():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),i}function Ww(t,e,n){const s=Uw(Hw(t.path),n),i=we(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function zw(t,e){const n=[],s=new Map;e=Qd({strict:!1,end:!0,sensitive:!1},e);function i(f){return s.get(f)}function r(f,d,p){const y=!p,_=qd(f);_.aliasOf=p&&p.record;const w=Qd(e,f),v=[_];if("alias"in f){const O=typeof f.alias=="string"?[f.alias]:f.alias;for(const G of O)v.push(qd(we({},_,{components:p?p.record.components:_.components,path:G,aliasOf:p?p.record:_})))}let b,R;for(const O of v){const{path:G}=O;if(d&&G[0]!=="/"){const q=d.record.path,E=q[q.length-1]==="/"?"":"/";O.path=d.record.path+(G&&E+G)}if(b=Ww(O,d,w),p?p.alias.push(b):(R=R||b,R!==b&&R.alias.push(b),y&&f.name&&!Yd(b)&&o(f.name)),Mg(b)&&l(b),_.children){const q=_.children;for(let E=0;E<q.length;E++)r(q[E],b,p&&p.children[E])}p=p||b}return R?()=>{o(R)}:or}function o(f){if(Pg(f)){const d=s.get(f);d&&(s.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&s.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function l(f){const d=qw(f,n);n.splice(d,0,f),f.record.name&&!Yd(f)&&s.set(f.record.name,f)}function c(f,d){let p,y={},_,w;if("name"in f&&f.name){if(p=s.get(f.name),!p)throw yi(1,{location:f});w=p.record.name,y=we(Kd(d.params,p.keys.filter(R=>!R.optional).concat(p.parent?p.parent.keys.filter(R=>R.optional):[]).map(R=>R.name)),f.params&&Kd(f.params,p.keys.map(R=>R.name))),_=p.stringify(y)}else if(f.path!=null)_=f.path,p=n.find(R=>R.re.test(_)),p&&(y=p.parse(_),w=p.record.name);else{if(p=d.name?s.get(d.name):n.find(R=>R.re.test(d.path)),!p)throw yi(1,{location:f,currentLocation:d});w=p.record.name,y=we({},d.params,f.params),_=p.stringify(y)}const v=[];let b=p;for(;b;)v.unshift(b.record),b=b.parent;return{name:w,path:_,params:y,matched:v,meta:Kw(v)}}t.forEach(f=>r(f));function u(){n.length=0,s.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:i}}function Kd(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function qd(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Gw(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Gw(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function Yd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Kw(t){return t.reduce((e,n)=>we(e,n.meta),{})}function Qd(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function qw(t,e){let n=0,s=e.length;for(;n!==s;){const r=n+s>>1;Og(t,e[r])<0?s=r:n=r+1}const i=Yw(t);return i&&(s=e.lastIndexOf(i,s-1)),s}function Yw(t){let e=t;for(;e=e.parent;)if(Mg(e)&&Og(t,e)===0)return e}function Mg({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Qw(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(Eg," "),o=r.indexOf("="),a=Cr(o<0?r:r.slice(0,o)),l=o<0?null:Cr(r.slice(o+1));if(a in e){let c=e[a];Bt(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Xd(t){let e="";for(let n in t){const s=t[n];if(n=mw(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Bt(s)?s.map(r=>r&&fc(r)):[s&&fc(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function Xw(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Bt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const Jw=Symbol(""),Jd=Symbol(""),Pa=Symbol(""),vu=Symbol(""),hc=Symbol("");function Wi(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Kn(t,e,n,s,i,r=o=>o()){const o=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(yi(4,{from:n,to:e})):d instanceof Error?l(d):Lw(d)?l(yi(2,{from:e,to:d})):(o&&s.enterCallbacks[i]===o&&typeof d=="function"&&o.push(d),a())},u=r(()=>t.call(s&&s.instances[i],e,n,c));let f=Promise.resolve(u);t.length<3&&(f=f.then(c)),f.catch(d=>l(d))})}function _l(t,e,n,s,i=r=>r()){const r=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Cg(l)){const u=(l.__vccOpts||l)[e];u&&r.push(Kn(u,n,s,o,a,i))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=iw(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const p=(f.__vccOpts||f)[e];return p&&Kn(p,n,s,o,a,i)()}))}}return r}function Zd(t){const e=Tt(Pa),n=Tt(vu),s=le(()=>{const l=I(t.to);return e.resolve(l)}),i=le(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(vi.bind(null,u));if(d>-1)return d;const p=eh(l[c-2]);return c>1&&eh(u)===p&&f[f.length-1].path!==p?f.findIndex(vi.bind(null,l[c-2])):d}),r=le(()=>i.value>-1&&nC(n.params,s.value.params)),o=le(()=>i.value>-1&&i.value===n.matched.length-1&&Ag(n.params,s.value.params));function a(l={}){if(tC(l)){const c=e[I(t.replace)?"replace":"push"](I(t.to)).catch(or);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:s,href:le(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}function Zw(t){return t.length===1?t[0]:t}const eC=du({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Zd,setup(t,{slots:e}){const n=jr(Zd(t)),{options:s}=Tt(Pa),i=le(()=>({[th(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[th(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&Zw(e.default(n));return t.custom?r:ka("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),Jt=eC;function tC(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function nC(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!Bt(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function eh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const th=(t,e,n)=>t??e??n,sC=du({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Tt(hc),i=le(()=>t.route||s.value),r=Tt(Jd,0),o=le(()=>{let c=I(r);const{matched:u}=i.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=le(()=>i.value.matched[o.value]);vo(Jd,le(()=>o.value+1)),vo(Jw,a),vo(hc,i);const l=oe();return Ns(()=>[l.value,a.value,t.name],([c,u,f],[d,p,y])=>{u&&(u.instances[f]=c,p&&p!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!vi(u,p)||!d)&&(u.enterCallbacks[f]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,f=a.value,d=f&&f.components[u];if(!d)return nh(n.default,{Component:d,route:c});const p=f.props[u],y=p?p===!0?c.params:typeof p=="function"?p(c):p:null,w=ka(d,we({},y,e,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return nh(n.default,{Component:w,route:c})||w}}});function nh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Dg=sC;function iC(t){const e=zw(t.routes,t),n=t.parseQuery||Qw,s=t.stringifyQuery||Xd,i=t.history,r=Wi(),o=Wi(),a=Wi(),l=Vy(Un);let c=Un;ei&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ml.bind(null,k=>""+k),f=ml.bind(null,_w),d=ml.bind(null,Cr);function p(k,K){let W,Q;return Pg(k)?(W=e.getRecordMatcher(k),Q=K):Q=k,e.addRoute(Q,W)}function y(k){const K=e.getRecordMatcher(k);K&&e.removeRoute(K)}function _(){return e.getRoutes().map(k=>k.record)}function w(k){return!!e.getRecordMatcher(k)}function v(k,K){if(K=we({},K||l.value),typeof k=="string"){const x=gl(n,k,K.path),T=e.resolve({path:x.path},K),N=i.createHref(x.fullPath);return we(x,T,{params:d(T.params),hash:Cr(x.hash),redirectedFrom:void 0,href:N})}let W;if(k.path!=null)W=we({},k,{path:gl(n,k.path,K.path).path});else{const x=we({},k.params);for(const T in x)x[T]==null&&delete x[T];W=we({},k,{params:f(x)}),K.params=f(K.params)}const Q=e.resolve(W,K),ke=k.hash||"";Q.params=u(d(Q.params));const m=bw(s,we({},k,{hash:pw(ke),path:Q.path})),g=i.createHref(m);return we({fullPath:m,hash:ke,query:s===Xd?Xw(k.query):k.query||{}},Q,{redirectedFrom:void 0,href:g})}function b(k){return typeof k=="string"?gl(n,k,l.value.path):we({},k)}function R(k,K){if(c!==k)return yi(8,{from:K,to:k})}function O(k){return E(k)}function G(k){return O(we(b(k),{replace:!0}))}function q(k){const K=k.matched[k.matched.length-1];if(K&&K.redirect){const{redirect:W}=K;let Q=typeof W=="function"?W(k):W;return typeof Q=="string"&&(Q=Q.includes("?")||Q.includes("#")?Q=b(Q):{path:Q},Q.params={}),we({query:k.query,hash:k.hash,params:Q.path!=null?{}:k.params},Q)}}function E(k,K){const W=c=v(k),Q=l.value,ke=k.state,m=k.force,g=k.replace===!0,x=q(W);if(x)return E(we(b(x),{state:typeof x=="object"?we({},ke,x.state):ke,force:m,replace:g}),K||W);const T=W;T.redirectedFrom=K;let N;return!m&&xw(s,Q,W)&&(N=yi(16,{to:T,from:Q}),Wt(Q,Q,!0,!1)),(N?Promise.resolve(N):U(T,Q)).catch(A=>fn(A)?fn(A,2)?A:Ln(A):xe(A,T,Q)).then(A=>{if(A){if(fn(A,2))return E(we({replace:g},b(A.to),{state:typeof A.to=="object"?we({},ke,A.to.state):ke,force:m}),K||T)}else A=B(T,Q,!0,g,ke);return re(T,Q,A),A})}function L(k,K){const W=R(k,K);return W?Promise.reject(W):Promise.resolve()}function P(k){const K=qs.values().next().value;return K&&typeof K.runWithContext=="function"?K.runWithContext(k):k()}function U(k,K){let W;const[Q,ke,m]=rC(k,K);W=_l(Q.reverse(),"beforeRouteLeave",k,K);for(const x of Q)x.leaveGuards.forEach(T=>{W.push(Kn(T,k,K))});const g=L.bind(null,k,K);return W.push(g),Ct(W).then(()=>{W=[];for(const x of r.list())W.push(Kn(x,k,K));return W.push(g),Ct(W)}).then(()=>{W=_l(ke,"beforeRouteUpdate",k,K);for(const x of ke)x.updateGuards.forEach(T=>{W.push(Kn(T,k,K))});return W.push(g),Ct(W)}).then(()=>{W=[];for(const x of m)if(x.beforeEnter)if(Bt(x.beforeEnter))for(const T of x.beforeEnter)W.push(Kn(T,k,K));else W.push(Kn(x.beforeEnter,k,K));return W.push(g),Ct(W)}).then(()=>(k.matched.forEach(x=>x.enterCallbacks={}),W=_l(m,"beforeRouteEnter",k,K,P),W.push(g),Ct(W))).then(()=>{W=[];for(const x of o.list())W.push(Kn(x,k,K));return W.push(g),Ct(W)}).catch(x=>fn(x,8)?x:Promise.reject(x))}function re(k,K,W){a.list().forEach(Q=>P(()=>Q(k,K,W)))}function B(k,K,W,Q,ke){const m=R(k,K);if(m)return m;const g=K===Un,x=ei?history.state:{};W&&(Q||g?i.replace(k.fullPath,we({scroll:g&&x&&x.scroll},ke)):i.push(k.fullPath,ke)),l.value=k,Wt(k,K,W,g),Ln()}let ue;function be(){ue||(ue=i.listen((k,K,W)=>{if(!so.listening)return;const Q=v(k),ke=q(Q);if(ke){E(we(ke,{replace:!0,force:!0}),Q).catch(or);return}c=Q;const m=l.value;ei&&Aw(jd(m.fullPath,W.delta),Ra()),U(Q,m).catch(g=>fn(g,12)?g:fn(g,2)?(E(we(b(g.to),{force:!0}),Q).then(x=>{fn(x,20)&&!W.delta&&W.type===Ir.pop&&i.go(-1,!1)}).catch(or),Promise.reject()):(W.delta&&i.go(-W.delta,!1),xe(g,Q,m))).then(g=>{g=g||B(Q,m,!1),g&&(W.delta&&!fn(g,8)?i.go(-W.delta,!1):W.type===Ir.pop&&fn(g,20)&&i.go(-1,!1)),re(Q,m,g)}).catch(or)}))}let st=Wi(),Te=Wi(),ae;function xe(k,K,W){Ln(k);const Q=Te.list();return Q.length?Q.forEach(ke=>ke(k,K,W)):console.error(k),Promise.reject(k)}function cn(){return ae&&l.value!==Un?Promise.resolve():new Promise((k,K)=>{st.add([k,K])})}function Ln(k){return ae||(ae=!k,be(),st.list().forEach(([K,W])=>k?W(k):K()),st.reset()),k}function Wt(k,K,W,Q){const{scrollBehavior:ke}=t;if(!ei||!ke)return Promise.resolve();const m=!W&&Rw(jd(k.fullPath,0))||(Q||!W)&&history.state&&history.state.scroll||null;return Pi().then(()=>ke(k,K,m)).then(g=>g&&kw(g)).catch(g=>xe(g,k,K))}const ft=k=>i.go(k);let Ks;const qs=new Set,so={currentRoute:l,listening:!0,addRoute:p,removeRoute:y,clearRoutes:e.clearRoutes,hasRoute:w,getRoutes:_,resolve:v,options:t,push:O,replace:G,go:ft,back:()=>ft(-1),forward:()=>ft(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:Te.add,isReady:cn,install(k){const K=this;k.component("RouterLink",Jt),k.component("RouterView",Dg),k.config.globalProperties.$router=K,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>I(l)}),ei&&!Ks&&l.value===Un&&(Ks=!0,O(i.location).catch(ke=>{}));const W={};for(const ke in Un)Object.defineProperty(W,ke,{get:()=>l.value[ke],enumerable:!0});k.provide(Pa,K),k.provide(vu,ym(W)),k.provide(hc,l);const Q=k.unmount;qs.add(k),k.unmount=function(){qs.delete(k),qs.size<1&&(c=Un,ue&&ue(),ue=null,l.value=Un,Ks=!1,ae=!1),Q()}}};function Ct(k){return k.reduce((K,W)=>K.then(()=>P(W)),Promise.resolve())}return so}function rC(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>vi(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>vi(c,l))||i.push(l))}return[n,s,i]}function yu(){return Tt(Pa)}function bu(t){return Tt(vu)}const oC={__name:"App",setup(t){return(e,n)=>(C(),S(ce,null,[n[0]||(n[0]=h("header",null,null,-1)),$(I(Dg))],64))}},ye=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},aC={},lC={class:"footer-container"};function cC(t,e){return C(),S("div",lC,e[0]||(e[0]=[h("span",null," Web design by thjnh ",-1)]))}const Nn=ye(aC,[["render",cC],["__scopeId","data-v-373a2f5d"]]),Lg="/hhdonghua/assets/logo-CdjVZ2et.png";var sh={};/**
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
 */const Fg={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const F=function(t,e){if(!t)throw Ni(e)},Ni=function(t){return new Error("Firebase Database ("+Fg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const $g=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},uC=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},xu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,f=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(d=64)),s.push(n[u],n[f],n[d],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray($g(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):uC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||f==null)throw new fC;const d=r<<2|a>>4;if(s.push(d),c!==64){const p=a<<4&240|c>>2;if(s.push(p),f!==64){const y=c<<6&192|f;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class fC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ug=function(t){const e=$g(t);return xu.encodeByteArray(e,!0)},Vo=function(t){return Ug(t).replace(/\./g,"")},Bo=function(t){try{return xu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function dC(t){return Vg(void 0,t)}function Vg(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!hC(n)||(t[n]=Vg(t[n],e[n]));return t}function hC(t){return t!=="__proto__"}/**
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
 */function pC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const mC=()=>pC().__FIREBASE_DEFAULTS__,gC=()=>{if(typeof process>"u"||typeof sh>"u")return;const t=sh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},_C=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Bo(t[1]);return e&&JSON.parse(e)},wu=()=>{try{return mC()||gC()||_C()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Bg=t=>{var e,n;return(n=(e=wu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},vC=t=>{const e=Bg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},jg=()=>{var t;return(t=wu())===null||t===void 0?void 0:t.config},Hg=t=>{var e;return(e=wu())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */function yC(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Vo(JSON.stringify(n)),Vo(JSON.stringify(o)),""].join(".")}/**
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
 */function ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Cu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ut())}function bC(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function xC(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Wg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function wC(){const t=ut();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function CC(){return Fg.NODE_ADMIN===!0}function IC(){try{return typeof indexedDB=="object"}catch{return!1}}function EC(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const SC="FirebaseError";class vs extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=SC,Object.setPrototypeOf(this,vs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gr.prototype.create)}}class Gr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?TC(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new vs(i,a,s)}}function TC(t,e){return t.replace(kC,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const kC=/\{\$([^}]+)}/g;/**
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
 */function Er(t){return JSON.parse(t)}function ze(t){return JSON.stringify(t)}/**
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
 */const zg=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Er(Bo(r[0])||""),n=Er(Bo(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},AC=function(t){const e=zg(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},RC=function(t){const e=zg(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function an(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function bi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function pc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function jo(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Ho(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(ih(r)&&ih(o)){if(!Ho(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function ih(t){return t!==null&&typeof t=="object"}/**
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
 */class PC{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)s[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)s[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const d=s[f-3]^s[f-8]^s[f-14]^s[f-16];s[f]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let f=0;f<80;f++){f<40?f<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):f<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[f]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function NC(t,e){const n=new OC(t,e);return n.subscribe.bind(n)}class OC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");MC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=vl),i.error===void 0&&(i.error=vl),i.complete===void 0&&(i.complete=vl);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function MC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function vl(){}function Na(t,e){return`${t} failed: ${e} argument `}/**
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
 */const DC=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,F(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Oa=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function wt(t){return t&&t._delegate?t._delegate:t}class Us{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Is="[DEFAULT]";/**
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
 */class LC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new zr;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if($C(e))try{this.getOrInitializeService({instanceIdentifier:Is})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Is){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Is){return this.instances.has(e)}getOptions(e=Is){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:FC(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Is){return this.component?this.component.multipleInstances?e:Is:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function FC(t){return t===Is?void 0:t}function $C(t){return t.instantiationMode==="EAGER"}/**
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
 */class UC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new LC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ee||(Ee={}));const VC={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},BC=Ee.INFO,jC={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},HC=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=jC[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Iu{constructor(e){this.name=e,this._logLevel=BC,this._logHandler=HC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?VC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}}const WC=(t,e)=>e.some(n=>t instanceof n);let rh,oh;function zC(){return rh||(rh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function GC(){return oh||(oh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Gg=new WeakMap,mc=new WeakMap,Kg=new WeakMap,yl=new WeakMap,Eu=new WeakMap;function KC(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(ts(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Gg.set(n,t)}).catch(()=>{}),Eu.set(e,t),e}function qC(t){if(mc.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});mc.set(t,e)}let gc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return mc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Kg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ts(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function YC(t){gc=t(gc)}function QC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(bl(this),e,...n);return Kg.set(s,e.sort?e.sort():[e]),ts(s)}:GC().includes(t)?function(...e){return t.apply(bl(this),e),ts(Gg.get(this))}:function(...e){return ts(t.apply(bl(this),e))}}function XC(t){return typeof t=="function"?QC(t):(t instanceof IDBTransaction&&qC(t),WC(t,zC())?new Proxy(t,gc):t)}function ts(t){if(t instanceof IDBRequest)return KC(t);if(yl.has(t))return yl.get(t);const e=XC(t);return e!==t&&(yl.set(t,e),Eu.set(e,t)),e}const bl=t=>Eu.get(t);function JC(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=ts(o);return s&&o.addEventListener("upgradeneeded",l=>{s(ts(o.result),l.oldVersion,l.newVersion,ts(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const ZC=["get","getKey","getAll","getAllKeys","count"],eI=["put","add","delete","clear"],xl=new Map;function ah(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(xl.get(e))return xl.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=eI.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||ZC.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return xl.set(e,r),r}YC(t=>({...t,get:(e,n,s)=>ah(e,n)||t.get(e,n,s),has:(e,n)=>!!ah(e,n)||t.has(e,n)}));/**
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
 */class tI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(nI(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function nI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const _c="@firebase/app",lh="0.11.1";/**
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
 */const Tn=new Iu("@firebase/app"),sI="@firebase/app-compat",iI="@firebase/analytics-compat",rI="@firebase/analytics",oI="@firebase/app-check-compat",aI="@firebase/app-check",lI="@firebase/auth",cI="@firebase/auth-compat",uI="@firebase/database",fI="@firebase/data-connect",dI="@firebase/database-compat",hI="@firebase/functions",pI="@firebase/functions-compat",mI="@firebase/installations",gI="@firebase/installations-compat",_I="@firebase/messaging",vI="@firebase/messaging-compat",yI="@firebase/performance",bI="@firebase/performance-compat",xI="@firebase/remote-config",wI="@firebase/remote-config-compat",CI="@firebase/storage",II="@firebase/storage-compat",EI="@firebase/firestore",SI="@firebase/vertexai",TI="@firebase/firestore-compat",kI="firebase",AI="11.3.1";/**
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
 */const vc="[DEFAULT]",RI={[_c]:"fire-core",[sI]:"fire-core-compat",[rI]:"fire-analytics",[iI]:"fire-analytics-compat",[aI]:"fire-app-check",[oI]:"fire-app-check-compat",[lI]:"fire-auth",[cI]:"fire-auth-compat",[uI]:"fire-rtdb",[fI]:"fire-data-connect",[dI]:"fire-rtdb-compat",[hI]:"fire-fn",[pI]:"fire-fn-compat",[mI]:"fire-iid",[gI]:"fire-iid-compat",[_I]:"fire-fcm",[vI]:"fire-fcm-compat",[yI]:"fire-perf",[bI]:"fire-perf-compat",[xI]:"fire-rc",[wI]:"fire-rc-compat",[CI]:"fire-gcs",[II]:"fire-gcs-compat",[EI]:"fire-fst",[TI]:"fire-fst-compat",[SI]:"fire-vertex","fire-js":"fire-js",[kI]:"fire-js-all"};/**
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
 */const Wo=new Map,PI=new Map,yc=new Map;function ch(t,e){try{t.container.addComponent(e)}catch(n){Tn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function xi(t){const e=t.name;if(yc.has(e))return Tn.debug(`There were multiple attempts to register component ${e}.`),!1;yc.set(e,t);for(const n of Wo.values())ch(n,t);for(const n of PI.values())ch(n,t);return!0}function Su(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ot(t){return t==null?!1:t.settings!==void 0}/**
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
 */const NI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ns=new Gr("app","Firebase",NI);/**
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
 */class OI{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Us("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ns.create("app-deleted",{appName:this._name})}}/**
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
 */const Mi=AI;function qg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:vc,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw ns.create("bad-app-name",{appName:String(i)});if(n||(n=jg()),!n)throw ns.create("no-options");const r=Wo.get(i);if(r){if(Ho(n,r.options)&&Ho(s,r.config))return r;throw ns.create("duplicate-app",{appName:i})}const o=new UC(i);for(const l of yc.values())o.addComponent(l);const a=new OI(n,s,o);return Wo.set(i,a),a}function Yg(t=vc){const e=Wo.get(t);if(!e&&t===vc&&jg())return qg();if(!e)throw ns.create("no-app",{appName:t});return e}function ss(t,e,n){var s;let i=(s=RI[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Tn.warn(a.join(" "));return}xi(new Us(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const MI="firebase-heartbeat-database",DI=1,Sr="firebase-heartbeat-store";let wl=null;function Qg(){return wl||(wl=JC(MI,DI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Sr)}catch(n){console.warn(n)}}}}).catch(t=>{throw ns.create("idb-open",{originalErrorMessage:t.message})})),wl}async function LI(t){try{const n=(await Qg()).transaction(Sr),s=await n.objectStore(Sr).get(Xg(t));return await n.done,s}catch(e){if(e instanceof vs)Tn.warn(e.message);else{const n=ns.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Tn.warn(n.message)}}}async function uh(t,e){try{const s=(await Qg()).transaction(Sr,"readwrite");await s.objectStore(Sr).put(e,Xg(t)),await s.done}catch(n){if(n instanceof vs)Tn.warn(n.message);else{const s=ns.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Tn.warn(s.message)}}}function Xg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const FI=1024,$I=30;class UI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new BI(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=fh();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>$I){const o=jI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Tn.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=fh(),{heartbeatsToSend:s,unsentEntries:i}=VI(this._heartbeatsCache.heartbeats),r=Vo(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return Tn.warn(n),""}}}function fh(){return new Date().toISOString().substring(0,10)}function VI(t,e=FI){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),dh(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),dh(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class BI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return IC()?EC().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await LI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return uh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return uh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function dh(t){return Vo(JSON.stringify({version:2,heartbeats:t})).length}function jI(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function HI(t){xi(new Us("platform-logger",e=>new tI(e),"PRIVATE")),xi(new Us("heartbeat",e=>new UI(e),"PRIVATE")),ss(_c,lh,t),ss(_c,lh,"esm2017"),ss("fire-js","")}HI("");var WI="firebase",zI="11.3.1";/**
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
 */ss(WI,zI,"app");var hh={};const ph="@firebase/database",mh="1.0.12";/**
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
 */let Jg="";function GI(t){Jg=t}/**
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
 */class KI{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ze(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Er(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class qI{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return an(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Zg=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new KI(e)}}catch{}return new qI},ks=Zg("localStorage"),YI=Zg("sessionStorage");/**
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
 */const ci=new Iu("@firebase/database"),QI=function(){let t=1;return function(){return t++}}(),e0=function(t){const e=DC(t),n=new PC;n.update(e);const s=n.digest();return xu.encodeByteArray(s)},Kr=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Kr.apply(null,s):typeof s=="object"?e+=ze(s):e+=s,e+=" "}return e};let lr=null,gh=!0;const XI=function(t,e){F(!0,"Can't turn on custom loggers persistently."),ci.logLevel=Ee.VERBOSE,lr=ci.log.bind(ci)},Je=function(...t){if(gh===!0&&(gh=!1,lr===null&&YI.get("logging_enabled")===!0&&XI()),lr){const e=Kr.apply(null,t);lr(e)}},qr=function(t){return function(...e){Je(t,...e)}},bc=function(...t){const e="FIREBASE INTERNAL ERROR: "+Kr(...t);ci.error(e)},kn=function(...t){const e=`FIREBASE FATAL ERROR: ${Kr(...t)}`;throw ci.error(e),new Error(e)},ct=function(...t){const e="FIREBASE WARNING: "+Kr(...t);ci.warn(e)},JI=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ct("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Tu=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},ZI=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},wi="[MIN_NAME]",Vs="[MAX_NAME]",Ws=function(t,e){if(t===e)return 0;if(t===wi||e===Vs)return-1;if(e===wi||t===Vs)return 1;{const n=_h(t),s=_h(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},eE=function(t,e){return t===e?0:t<e?-1:1},zi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ze(e))},ku=function(t){if(typeof t!="object"||t===null)return ze(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=ze(e[s]),n+=":",n+=ku(t[e[s]]);return n+="}",n},t0=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Ze(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const n0=function(t){F(!Tu(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let f="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),f=f+d}return f.toLowerCase()},tE=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},nE=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function sE(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const iE=new RegExp("^-?(0*)\\d{1,10}$"),rE=-2147483648,oE=2147483647,_h=function(t){if(iE.test(t)){const e=Number(t);if(e>=rE&&e<=oE)return e}return null},Di=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ct("Exception was thrown by user callback.",n),e},Math.floor(0))}},aE=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},cr=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class lE{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,Ot(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){ct(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class cE{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Je("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ct(e)}}class xo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}xo.OWNER="owner";/**
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
 */const Au="5",s0="v",i0="s",r0="r",o0="f",a0=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,l0="ls",c0="p",xc="ac",u0="websocket",f0="long_polling";/**
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
 */class d0{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ks.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ks.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function uE(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function h0(t,e,n){F(typeof e=="string","typeof type must == string"),F(typeof n=="object","typeof params must == object");let s;if(e===u0)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===f0)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);uE(t)&&(n.ns=t.namespace);const i=[];return Ze(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class fE{constructor(){this.counters_={}}incrementCounter(e,n=1){an(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return dC(this.counters_)}}/**
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
 */const Cl={},Il={};function Ru(t){const e=t.toString();return Cl[e]||(Cl[e]=new fE),Cl[e]}function dE(t,e){const n=t.toString();return Il[n]||(Il[n]=e()),Il[n]}/**
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
 */class hE{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Di(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const vh="start",pE="close",mE="pLPCommand",gE="pRTLPCB",p0="id",m0="pw",g0="ser",_E="cb",vE="seg",yE="ts",bE="d",xE="dframe",_0=1870,v0=30,wE=_0-v0,CE=25e3,IE=3e4;class ii{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=qr(e),this.stats_=Ru(n),this.urlFn=l=>(this.appCheckToken&&(l[xc]=this.appCheckToken),h0(n,f0,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new hE(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(IE)),ZI(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Pu((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===vh)this.id=a,this.password=l;else if(o===pE)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[vh]="t",s[g0]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[_E]=this.scriptTagHolder.uniqueCallbackIdentifier),s[s0]=Au,this.transportSessionId&&(s[i0]=this.transportSessionId),this.lastSessionId&&(s[l0]=this.lastSessionId),this.applicationId&&(s[c0]=this.applicationId),this.appCheckToken&&(s[xc]=this.appCheckToken),typeof location<"u"&&location.hostname&&a0.test(location.hostname)&&(s[r0]=o0);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ii.forceAllow_=!0}static forceDisallow(){ii.forceDisallow_=!0}static isAvailable(){return ii.forceAllow_?!0:!ii.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!tE()&&!nE()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ze(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Ug(n),i=t0(s,wE);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[xE]="t",s[p0]=e,s[m0]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ze(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Pu{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=QI(),window[mE+this.uniqueCallbackIdentifier]=e,window[gE+this.uniqueCallbackIdentifier]=n,this.myIFrame=Pu.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Je("frame writing exception"),a.stack&&Je(a.stack),Je(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Je("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[p0]=this.myID,e[m0]=this.myPW,e[g0]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+v0+s.length<=_0;){const o=this.pendingSegs.shift();s=s+"&"+vE+i+"="+o.seg+"&"+yE+i+"="+o.ts+"&"+bE+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(CE)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Je("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const EE=16384,SE=45e3;let zo=null;typeof MozWebSocket<"u"?zo=MozWebSocket:typeof WebSocket<"u"&&(zo=WebSocket);class Mt{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=qr(this.connId),this.stats_=Ru(n),this.connURL=Mt.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[s0]=Au,typeof location<"u"&&location.hostname&&a0.test(location.hostname)&&(o[r0]=o0),n&&(o[i0]=n),s&&(o[l0]=s),i&&(o[xc]=i),r&&(o[c0]=r),h0(e,u0,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ks.set("previous_websocket_failure",!0);try{let s;CC(),this.mySock=new zo(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Mt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&zo!==null&&!Mt.forceDisallow_}static previouslyFailed(){return ks.isInMemoryStorage||ks.get("previous_websocket_failure")===!0}markConnectionHealthy(){ks.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Er(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(F(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=ze(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=t0(n,EE);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(SE))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Mt.responsesRequiredToBeHealthy=2;Mt.healthyTimeout=3e4;/**
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
 */class Tr{static get ALL_TRANSPORTS(){return[ii,Mt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Mt&&Mt.isAvailable();let s=n&&!Mt.previouslyFailed();if(e.webSocketOnly&&(n||ct("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Mt];else{const i=this.transports_=[];for(const r of Tr.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Tr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Tr.globalTransportInitialized_=!1;/**
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
 */const TE=6e4,kE=5e3,AE=10*1024,RE=100*1024,El="t",yh="d",PE="s",bh="r",NE="e",xh="o",wh="a",Ch="n",Ih="p",OE="h";class ME{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=qr("c:"+this.id+":"),this.transportManager_=new Tr(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=cr(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>RE?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>AE?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(El in e){const n=e[El];n===wh?this.upgradeIfSecondaryHealthy_():n===bh?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===xh&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=zi("t",e),s=zi("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ih,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:wh,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ch,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=zi("t",e),s=zi("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=zi(El,e);if(yh in e){const s=e[yh];if(n===OE){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Ch){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===PE?this.onConnectionShutdown_(s):n===bh?this.onReset_(s):n===NE?bc("Server Error: "+s):n===xh?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):bc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Au!==s&&ct("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),cr(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(TE))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):cr(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(kE))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ih,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ks.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class y0{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class b0{constructor(e){this.allowedEvents_=e,this.listeners_={},F(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){F(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Go extends b0{static getInstance(){return new Go}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Cu()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return F(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Eh=32,Sh=768;class Se{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ve(){return new Se("")}function he(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function fs(t){return t.pieces_.length-t.pieceNum_}function De(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Se(t.pieces_,e)}function Nu(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function DE(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function kr(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function x0(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Se(e,0)}function $e(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Se)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new Se(n,0)}function me(t){return t.pieceNum_>=t.pieces_.length}function lt(t,e){const n=he(t),s=he(e);if(n===null)return e;if(n===s)return lt(De(t),De(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function LE(t,e){const n=kr(t,0),s=kr(e,0);for(let i=0;i<n.length&&i<s.length;i++){const r=Ws(n[i],s[i]);if(r!==0)return r}return n.length===s.length?0:n.length<s.length?-1:1}function Ou(t,e){if(fs(t)!==fs(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Et(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(fs(t)>fs(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class FE{constructor(e,n){this.errorPrefix_=n,this.parts_=kr(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Oa(this.parts_[s]);w0(this)}}function $E(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Oa(e),w0(t)}function UE(t){const e=t.parts_.pop();t.byteLength_-=Oa(e),t.parts_.length>0&&(t.byteLength_-=1)}function w0(t){if(t.byteLength_>Sh)throw new Error(t.errorPrefix_+"has a key path longer than "+Sh+" bytes ("+t.byteLength_+").");if(t.parts_.length>Eh)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Eh+") or object contains a cycle "+Es(t))}function Es(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Mu extends b0{static getInstance(){return new Mu}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return F(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Gi=1e3,VE=60*5*1e3,Th=30*1e3,BE=1.3,jE=3e4,HE="server_kill",kh=3;class In extends y0{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=In.nextPersistentConnectionId_++,this.log_=qr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Gi,this.maxReconnectDelay_=VE,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Mu.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Go.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(ze(r)),F(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new zr,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),F(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),F(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;In.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&an(e,"w")){const s=bi(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();ct(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||RC(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Th)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=AC(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),F(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ze(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):bc("Unrecognized action received from server: "+ze(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){F(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Gi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Gi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>jE&&(this.reconnectDelay_=Gi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*BE)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+In.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(f){F(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Je("getToken() completed but was canceled"):(Je("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=d&&d.token,a=new ME(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,p=>{ct(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(HE)},r))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&ct(f),l())}}}interrupt(e){Je("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Je("Resuming connection for reason: "+e),delete this.interruptReasons_[e],pc(this.interruptReasons_)&&(this.reconnectDelay_=Gi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>ku(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new Se(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Je("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=kh&&(this.reconnectDelay_=Th,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Je("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=kh&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Jg.replace(/\./g,"-")]=1,Cu()?e["framework.cordova"]=1:Wg()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Go.getInstance().currentlyOnline();return pc(this.interruptReasons_)&&e}}In.nextPersistentConnectionId_=0;In.nextConnectionId_=0;/**
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
 */class Ma{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new pe(wi,e),i=new pe(wi,n);return this.compare(s,i)!==0}minPost(){return pe.MIN}}/**
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
 */let fo;class C0 extends Ma{static get __EMPTY_NODE(){return fo}static set __EMPTY_NODE(e){fo=e}compare(e,n){return Ws(e.name,n.name)}isDefinedOn(e){throw Ni("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return pe.MIN}maxPost(){return new pe(Vs,fo)}makePost(e,n){return F(typeof e=="string","KeyIndex indexValue must always be a string."),new pe(e,fo)}toString(){return".key"}}const ui=new C0;/**
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
 */class ho{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ye{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Ye.RED,this.left=i??mt.EMPTY_NODE,this.right=r??mt.EMPTY_NODE}copy(e,n,s,i,r){return new Ye(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return mt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return mt.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ye.RED=!0;Ye.BLACK=!1;class WE{copy(e,n,s,i,r){return this}insert(e,n,s){return new Ye(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class mt{constructor(e,n=mt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new mt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ye.BLACK,null,null))}remove(e){return new mt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ye.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ho(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ho(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ho(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ho(this.root_,null,this.comparator_,!0,e)}}mt.EMPTY_NODE=new WE;/**
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
 */function zE(t,e){return Ws(t.name,e.name)}function Du(t,e){return Ws(t,e)}/**
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
 */let wc;function GE(t){wc=t}const I0=function(t){return typeof t=="number"?"number:"+n0(t):"string:"+t},E0=function(t){if(t.isLeafNode()){const e=t.val();F(typeof e=="string"||typeof e=="number"||typeof e=="object"&&an(e,".sv"),"Priority must be a string or number.")}else F(t===wc||t.isEmpty(),"priority of unexpected type.");F(t===wc||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Ah;class qe{static set __childrenNodeConstructor(e){Ah=e}static get __childrenNodeConstructor(){return Ah}constructor(e,n=qe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,F(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),E0(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new qe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:qe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return me(e)?this:he(e)===".priority"?this.priorityNode_:qe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:qe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=he(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(F(s!==".priority"||fs(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,qe.__childrenNodeConstructor.EMPTY_NODE.updateChild(De(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+I0(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=n0(this.value_):e+=this.value_,this.lazyHash_=e0(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===qe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof qe.__childrenNodeConstructor?-1:(F(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=qe.VALUE_TYPE_ORDER.indexOf(n),r=qe.VALUE_TYPE_ORDER.indexOf(s);return F(i>=0,"Unknown leaf type: "+n),F(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}qe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let S0,T0;function KE(t){S0=t}function qE(t){T0=t}class YE extends Ma{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Ws(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return pe.MIN}maxPost(){return new pe(Vs,new qe("[PRIORITY-POST]",T0))}makePost(e,n){const s=S0(e);return new pe(n,new qe("[PRIORITY-POST]",s))}toString(){return".priority"}}const Ve=new YE;/**
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
 */const QE=Math.log(2);class XE{constructor(e){const n=r=>parseInt(Math.log(r)/QE,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ko=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let f,d;if(u===0)return null;if(u===1)return f=t[l],d=n?n(f):f,new Ye(d,f.node,Ye.BLACK,null,null);{const p=parseInt(u/2,10)+l,y=i(l,p),_=i(p+1,c);return f=t[p],d=n?n(f):f,new Ye(d,f.node,Ye.BLACK,y,_)}},r=function(l){let c=null,u=null,f=t.length;const d=function(y,_){const w=f-y,v=f;f-=y;const b=i(w+1,v),R=t[w],O=n?n(R):R;p(new Ye(O,R.node,_,null,b))},p=function(y){c?(c.left=y,c=y):(u=y,c=y)};for(let y=0;y<l.count;++y){const _=l.nextBitIsOne(),w=Math.pow(2,l.count-(y+1));_?d(w,Ye.BLACK):(d(w,Ye.BLACK),d(w,Ye.RED))}return u},o=new XE(t.length),a=r(o);return new mt(s||e,a)};/**
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
 */let Sl;const Xs={};class yn{static get Default(){return F(Xs&&Ve,"ChildrenNode.ts has not been loaded"),Sl=Sl||new yn({".priority":Xs},{".priority":Ve}),Sl}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=bi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof mt?n:null}hasIndex(e){return an(this.indexSet_,e.toString())}addIndex(e,n){F(e!==ui,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(pe.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Ko(s,e.getCompare()):a=Xs;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new yn(u,c)}addToIndexes(e,n){const s=jo(this.indexes_,(i,r)=>{const o=bi(this.indexSet_,r);if(F(o,"Missing index implementation for "+r),i===Xs)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(pe.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Ko(a,o.getCompare())}else return Xs;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new pe(e.name,a))),l.insert(e,e.node)}});return new yn(s,this.indexSet_)}removeFromIndexes(e,n){const s=jo(this.indexes_,i=>{if(i===Xs)return i;{const r=n.get(e.name);return r?i.remove(new pe(e.name,r)):i}});return new yn(s,this.indexSet_)}}/**
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
 */let Ki;class te{static get EMPTY_NODE(){return Ki||(Ki=new te(new mt(Du),null,yn.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&E0(this.priorityNode_),this.children_.isEmpty()&&F(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ki}updatePriority(e){return this.children_.isEmpty()?this:new te(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ki:n}}getChild(e){const n=he(e);return n===null?this:this.getImmediateChild(n).getChild(De(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(F(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new pe(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Ki:this.priorityNode_;return new te(i,o,r)}}updateChild(e,n){const s=he(e);if(s===null)return n;{F(he(e)!==".priority"||fs(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(De(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(Ve,(o,a)=>{n[o]=a.val(e),s++,r&&te.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+I0(this.getPriority().val())+":"),this.forEachChild(Ve,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":e0(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new pe(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new pe(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new pe(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,pe.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,pe.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Yr?-1:0}withIndex(e){if(e===ui||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new te(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ui||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Ve),i=n.getIterator(Ve);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ui?null:this.indexMap_.get(e.toString())}}te.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class JE extends te{constructor(){super(new mt(Du),te.EMPTY_NODE,yn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return te.EMPTY_NODE}isEmpty(){return!1}}const Yr=new JE;Object.defineProperties(pe,{MIN:{value:new pe(wi,te.EMPTY_NODE)},MAX:{value:new pe(Vs,Yr)}});C0.__EMPTY_NODE=te.EMPTY_NODE;qe.__childrenNodeConstructor=te;GE(Yr);qE(Yr);/**
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
 */const ZE=!0;function We(t,e=null){if(t===null)return te.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),F(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new qe(n,We(e))}if(!(t instanceof Array)&&ZE){const n=[];let s=!1;if(Ze(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=We(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new pe(o,l)))}}),n.length===0)return te.EMPTY_NODE;const r=Ko(n,zE,o=>o.name,Du);if(s){const o=Ko(n,Ve.getCompare());return new te(r,We(e),new yn({".priority":o},{".priority":Ve}))}else return new te(r,We(e),yn.Default)}else{let n=te.EMPTY_NODE;return Ze(t,(s,i)=>{if(an(t,s)&&s.substring(0,1)!=="."){const r=We(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(We(e))}}KE(We);/**
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
 */class e2 extends Ma{constructor(e){super(),this.indexPath_=e,F(!me(e)&&he(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Ws(e.name,n.name):r}makePost(e,n){const s=We(e),i=te.EMPTY_NODE.updateChild(this.indexPath_,s);return new pe(n,i)}maxPost(){const e=te.EMPTY_NODE.updateChild(this.indexPath_,Yr);return new pe(Vs,e)}toString(){return kr(this.indexPath_,0).join("/")}}/**
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
 */class t2 extends Ma{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Ws(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return pe.MIN}maxPost(){return pe.MAX}makePost(e,n){const s=We(e);return new pe(n,s)}toString(){return".value"}}const n2=new t2;/**
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
 */function k0(t){return{type:"value",snapshotNode:t}}function Ci(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ar(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Rr(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function s2(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Lu{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){F(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Ar(n,a)):F(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ci(n,s)):o.trackChildChange(Rr(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Ve,(i,r)=>{n.hasChild(i)||s.trackChildChange(Ar(i,r))}),n.isLeafNode()||n.forEachChild(Ve,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Rr(i,r,o))}else s.trackChildChange(Ci(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?te.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Pr{constructor(e){this.indexedFilter_=new Lu(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Pr.getStartPost_(e),this.endPost_=Pr.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new pe(n,s))||(s=te.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=te.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(te.EMPTY_NODE);const r=this;return n.forEachChild(Ve,(o,a)=>{r.matches(new pe(o,a))||(i=i.updateImmediateChild(o,te.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class i2{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Pr(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new pe(n,s))||(s=te.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=te.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=te.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(te.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,te.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const f=this.index_.getCompare();o=(d,p)=>f(p,d)}else o=this.index_.getCompare();const a=e;F(a.numChildren()===this.limit_,"");const l=new pe(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const f=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const p=d==null?1:o(d,l);if(u&&!s.isEmpty()&&p>=0)return r!=null&&r.trackChildChange(Rr(n,s,f)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(Ar(n,f));const _=a.updateImmediateChild(n,te.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(Ci(d.name,d.node)),_.updateImmediateChild(d.name,d.node)):_}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Ar(c.name,c.node)),r.trackChildChange(Ci(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,te.EMPTY_NODE)):e}}/**
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
 */class Fu{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ve}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return F(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return F(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:wi}hasEnd(){return this.endSet_}getIndexEndValue(){return F(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return F(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Vs}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return F(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ve}copy(){const e=new Fu;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function r2(t){return t.loadsAllData()?new Lu(t.getIndex()):t.hasLimit()?new i2(t):new Pr(t)}function Rh(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ve?n="$priority":t.index_===n2?n="$value":t.index_===ui?n="$key":(F(t.index_ instanceof e2,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ze(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=ze(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+ze(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=ze(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+ze(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Ph(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ve&&(e.i=t.index_.toString()),e}/**
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
 */class qo extends y0{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(F(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=qr("p:rest:"),this.listens_={}}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=qo.getListenId_(e,s),a={};this.listens_[o]=a;const l=Rh(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let f=u;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(r,f,!1,s),bi(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=qo.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Rh(e._queryParams),s=e._path.toString(),i=new zr;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Oi(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Er(a.responseText)}catch{ct("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&ct("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class o2{constructor(){this.rootNode_=te.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Yo(){return{value:null,children:new Map}}function A0(t,e,n){if(me(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=he(e);t.children.has(s)||t.children.set(s,Yo());const i=t.children.get(s);e=De(e),A0(i,e,n)}}function Cc(t,e,n){t.value!==null?n(e,t.value):a2(t,(s,i)=>{const r=new Se(e.toString()+"/"+s);Cc(i,r,n)})}function a2(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class l2{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ze(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const Nh=10*1e3,c2=30*1e3,u2=5*60*1e3;class f2{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new l2(e);const s=Nh+(c2-Nh)*Math.random();cr(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Ze(e,(i,r)=>{r>0&&an(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),cr(this.reportStats_.bind(this),Math.floor(Math.random()*2*u2))}}/**
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
 */var Dt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Dt||(Dt={}));function $u(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Uu(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Vu(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Qo{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Dt.ACK_USER_WRITE,this.source=$u()}operationForChild(e){if(me(this.path)){if(this.affectedTree.value!=null)return F(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Se(e));return new Qo(ve(),n,this.revert)}}else return F(he(this.path)===e,"operationForChild called for unrelated child."),new Qo(De(this.path),this.affectedTree,this.revert)}}/**
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
 */class Nr{constructor(e,n){this.source=e,this.path=n,this.type=Dt.LISTEN_COMPLETE}operationForChild(e){return me(this.path)?new Nr(this.source,ve()):new Nr(this.source,De(this.path))}}/**
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
 */class Bs{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Dt.OVERWRITE}operationForChild(e){return me(this.path)?new Bs(this.source,ve(),this.snap.getImmediateChild(e)):new Bs(this.source,De(this.path),this.snap)}}/**
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
 */class Ii{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Dt.MERGE}operationForChild(e){if(me(this.path)){const n=this.children.subtree(new Se(e));return n.isEmpty()?null:n.value?new Bs(this.source,ve(),n.value):new Ii(this.source,ve(),n)}else return F(he(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ii(this.source,De(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class d2{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function h2(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(s2(o.childName,o.snapshotNode))}),qi(t,i,"child_removed",e,s,n),qi(t,i,"child_added",e,s,n),qi(t,i,"child_moved",r,s,n),qi(t,i,"child_changed",e,s,n),qi(t,i,"value",e,s,n),i}function qi(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>m2(t,a,l)),o.forEach(a=>{const l=p2(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function p2(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function m2(t,e,n){if(e.childName==null||n.childName==null)throw Ni("Should only compare child_ events.");const s=new pe(e.childName,e.snapshotNode),i=new pe(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function Da(t,e){return{eventCache:t,serverCache:e}}function ur(t,e,n,s){return Da(new ds(e,n,s),t.serverCache)}function R0(t,e,n,s){return Da(t.eventCache,new ds(e,n,s))}function Xo(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function js(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Tl;const g2=()=>(Tl||(Tl=new mt(eE)),Tl);class Me{static fromObject(e){let n=new Me(null);return Ze(e,(s,i)=>{n=n.set(new Se(s),i)}),n}constructor(e,n=g2()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ve(),value:this.value};if(me(e))return null;{const s=he(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(De(e),n);return r!=null?{path:$e(new Se(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(me(e))return this;{const n=he(e),s=this.children.get(n);return s!==null?s.subtree(De(e)):new Me(null)}}set(e,n){if(me(e))return new Me(n,this.children);{const s=he(e),r=(this.children.get(s)||new Me(null)).set(De(e),n),o=this.children.insert(s,r);return new Me(this.value,o)}}remove(e){if(me(e))return this.children.isEmpty()?new Me(null):new Me(null,this.children);{const n=he(e),s=this.children.get(n);if(s){const i=s.remove(De(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new Me(null):new Me(this.value,r)}else return this}}get(e){if(me(e))return this.value;{const n=he(e),s=this.children.get(n);return s?s.get(De(e)):null}}setTree(e,n){if(me(e))return n;{const s=he(e),r=(this.children.get(s)||new Me(null)).setTree(De(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new Me(this.value,o)}}fold(e){return this.fold_(ve(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_($e(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,ve(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(me(e))return null;{const r=he(e),o=this.children.get(r);return o?o.findOnPath_(De(e),$e(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ve(),n)}foreachOnPath_(e,n,s){if(me(e))return this;{this.value&&s(n,this.value);const i=he(e),r=this.children.get(i);return r?r.foreachOnPath_(De(e),$e(n,i),s):new Me(null)}}foreach(e){this.foreach_(ve(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_($e(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class $t{constructor(e){this.writeTree_=e}static empty(){return new $t(new Me(null))}}function fr(t,e,n){if(me(e))return new $t(new Me(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=lt(i,e);return r=r.updateChild(o,n),new $t(t.writeTree_.set(i,r))}else{const i=new Me(n),r=t.writeTree_.setTree(e,i);return new $t(r)}}}function Ic(t,e,n){let s=t;return Ze(n,(i,r)=>{s=fr(s,$e(e,i),r)}),s}function Oh(t,e){if(me(e))return $t.empty();{const n=t.writeTree_.setTree(e,new Me(null));return new $t(n)}}function Ec(t,e){return zs(t,e)!=null}function zs(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(lt(n.path,e)):null}function Mh(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ve,(s,i)=>{e.push(new pe(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new pe(s,i.value))}),e}function is(t,e){if(me(e))return t;{const n=zs(t,e);return n!=null?new $t(new Me(n)):new $t(t.writeTree_.subtree(e))}}function Sc(t){return t.writeTree_.isEmpty()}function Ei(t,e){return P0(ve(),t.writeTree_,e)}function P0(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(F(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=P0($e(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild($e(t,".priority"),s)),n}}/**
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
 */function La(t,e){return D0(e,t)}function _2(t,e,n,s,i){F(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=fr(t.visibleWrites,e,n)),t.lastWriteId=s}function v2(t,e,n,s){F(s>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:s,visible:!0}),t.visibleWrites=Ic(t.visibleWrites,e,n),t.lastWriteId=s}function y2(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function b2(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);F(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&x2(a,s.path)?i=!1:Et(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return w2(t),!0;if(s.snap)t.visibleWrites=Oh(t.visibleWrites,s.path);else{const a=s.children;Ze(a,l=>{t.visibleWrites=Oh(t.visibleWrites,$e(s.path,l))})}return!0}else return!1}function x2(t,e){if(t.snap)return Et(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Et($e(t.path,n),e))return!0;return!1}function w2(t){t.visibleWrites=N0(t.allWrites,C2,ve()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function C2(t){return t.visible}function N0(t,e,n){let s=$t.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)Et(n,o)?(a=lt(n,o),s=fr(s,a,r.snap)):Et(o,n)&&(a=lt(o,n),s=fr(s,ve(),r.snap.getChild(a)));else if(r.children){if(Et(n,o))a=lt(n,o),s=Ic(s,a,r.children);else if(Et(o,n))if(a=lt(o,n),me(a))s=Ic(s,ve(),r.children);else{const l=bi(r.children,he(a));if(l){const c=l.getChild(De(a));s=fr(s,ve(),c)}}}else throw Ni("WriteRecord should have .snap or .children")}}return s}function O0(t,e,n,s,i){if(!s&&!i){const r=zs(t.visibleWrites,e);if(r!=null)return r;{const o=is(t.visibleWrites,e);if(Sc(o))return n;if(n==null&&!Ec(o,ve()))return null;{const a=n||te.EMPTY_NODE;return Ei(o,a)}}}else{const r=is(t.visibleWrites,e);if(!i&&Sc(r))return n;if(!i&&n==null&&!Ec(r,ve()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Et(c.path,e)||Et(e,c.path))},a=N0(t.allWrites,o,e),l=n||te.EMPTY_NODE;return Ei(a,l)}}}function I2(t,e,n){let s=te.EMPTY_NODE;const i=zs(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Ve,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=is(t.visibleWrites,e);return n.forEachChild(Ve,(o,a)=>{const l=Ei(is(r,new Se(o)),a);s=s.updateImmediateChild(o,l)}),Mh(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=is(t.visibleWrites,e);return Mh(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function E2(t,e,n,s,i){F(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=$e(e,n);if(Ec(t.visibleWrites,r))return null;{const o=is(t.visibleWrites,r);return Sc(o)?i.getChild(n):Ei(o,i.getChild(n))}}function S2(t,e,n,s){const i=$e(e,n),r=zs(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=is(t.visibleWrites,i);return Ei(o,s.getNode().getImmediateChild(n))}else return null}function T2(t,e){return zs(t.visibleWrites,e)}function k2(t,e,n,s,i,r,o){let a;const l=is(t.visibleWrites,e),c=zs(l,ve());if(c!=null)a=c;else if(n!=null)a=Ei(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],f=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let p=d.getNext();for(;p&&u.length<i;)f(p,s)!==0&&u.push(p),p=d.getNext();return u}else return[]}function A2(){return{visibleWrites:$t.empty(),allWrites:[],lastWriteId:-1}}function Jo(t,e,n,s){return O0(t.writeTree,t.treePath,e,n,s)}function Bu(t,e){return I2(t.writeTree,t.treePath,e)}function Dh(t,e,n,s){return E2(t.writeTree,t.treePath,e,n,s)}function Zo(t,e){return T2(t.writeTree,$e(t.treePath,e))}function R2(t,e,n,s,i,r){return k2(t.writeTree,t.treePath,e,n,s,i,r)}function ju(t,e,n){return S2(t.writeTree,t.treePath,e,n)}function M0(t,e){return D0($e(t.treePath,e),t.writeTree)}function D0(t,e){return{treePath:t,writeTree:e}}/**
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
 */class P2{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;F(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),F(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Rr(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Ar(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Ci(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Rr(s,e.snapshotNode,i.oldSnap));else throw Ni("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class N2{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const L0=new N2;class Hu{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new ds(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ju(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:js(this.viewCache_),r=R2(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function O2(t){return{filter:t}}function M2(t,e){F(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),F(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function D2(t,e,n,s,i){const r=new P2;let o,a;if(n.type===Dt.OVERWRITE){const c=n;c.source.fromUser?o=Tc(t,e,c.path,c.snap,s,i,r):(F(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!me(c.path),o=ea(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===Dt.MERGE){const c=n;c.source.fromUser?o=F2(t,e,c.path,c.children,s,i,r):(F(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=kc(t,e,c.path,c.children,s,i,a,r))}else if(n.type===Dt.ACK_USER_WRITE){const c=n;c.revert?o=V2(t,e,c.path,s,i,r):o=$2(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===Dt.LISTEN_COMPLETE)o=U2(t,e,n.path,s,r);else throw Ni("Unknown operation type: "+n.type);const l=r.getChanges();return L2(e,o,l),{viewCache:o,changes:l}}function L2(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Xo(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(k0(Xo(e)))}}function F0(t,e,n,s,i,r){const o=e.eventCache;if(Zo(s,n)!=null)return e;{let a,l;if(me(n))if(F(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=js(e),u=c instanceof te?c:te.EMPTY_NODE,f=Bu(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),f,r)}else{const c=Jo(s,js(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=he(n);if(c===".priority"){F(fs(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const f=Dh(s,n,u,l);f!=null?a=t.filter.updatePriority(u,f):a=o.getNode()}else{const u=De(n);let f;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=Dh(s,n,o.getNode(),l);d!=null?f=o.getNode().getImmediateChild(c).updateChild(u,d):f=o.getNode().getImmediateChild(c)}else f=ju(s,c,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),c,f,u,i,r):a=o.getNode()}}return ur(e,a,o.isFullyInitialized()||me(n),t.filter.filtersNodes())}}function ea(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(me(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),p,null)}else{const p=he(n);if(!l.isCompleteForPath(n)&&fs(n)>1)return e;const y=De(n),w=l.getNode().getImmediateChild(p).updateChild(y,s);p===".priority"?c=u.updatePriority(l.getNode(),w):c=u.updateChild(l.getNode(),p,w,y,L0,null)}const f=R0(e,c,l.isFullyInitialized()||me(n),u.filtersNodes()),d=new Hu(i,f,r);return F0(t,f,n,i,d,a)}function Tc(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new Hu(i,e,r);if(me(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=ur(e,c,!0,t.filter.filtersNodes());else{const f=he(n);if(f===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=ur(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=De(n),p=a.getNode().getImmediateChild(f);let y;if(me(d))y=s;else{const _=u.getCompleteChild(f);_!=null?Nu(d)===".priority"&&_.getChild(x0(d)).isEmpty()?y=_:y=_.updateChild(d,s):y=te.EMPTY_NODE}if(p.equals(y))l=e;else{const _=t.filter.updateChild(a.getNode(),f,y,d,u,o);l=ur(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Lh(t,e){return t.eventCache.isCompleteForChild(e)}function F2(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=$e(n,l);Lh(e,he(u))&&(a=Tc(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=$e(n,l);Lh(e,he(u))||(a=Tc(t,a,u,c,i,r,o))}),a}function Fh(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function kc(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;me(n)?c=s:c=new Me(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((f,d)=>{if(u.hasChild(f)){const p=e.serverCache.getNode().getImmediateChild(f),y=Fh(t,p,d);l=ea(t,l,new Se(f),y,i,r,o,a)}}),c.children.inorderTraversal((f,d)=>{const p=!e.serverCache.isCompleteForChild(f)&&d.value===null;if(!u.hasChild(f)&&!p){const y=e.serverCache.getNode().getImmediateChild(f),_=Fh(t,y,d);l=ea(t,l,new Se(f),_,i,r,o,a)}}),l}function $2(t,e,n,s,i,r,o){if(Zo(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(me(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return ea(t,e,n,l.getNode().getChild(n),i,r,a,o);if(me(n)){let c=new Me(null);return l.getNode().forEachChild(ui,(u,f)=>{c=c.set(new Se(u),f)}),kc(t,e,n,c,i,r,a,o)}else return e}else{let c=new Me(null);return s.foreach((u,f)=>{const d=$e(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),kc(t,e,n,c,i,r,a,o)}}function U2(t,e,n,s,i){const r=e.serverCache,o=R0(e,r.getNode(),r.isFullyInitialized()||me(n),r.isFiltered());return F0(t,o,n,s,L0,i)}function V2(t,e,n,s,i,r){let o;if(Zo(s,n)!=null)return e;{const a=new Hu(s,e,i),l=e.eventCache.getNode();let c;if(me(n)||he(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Jo(s,js(e));else{const f=e.serverCache.getNode();F(f instanceof te,"serverChildren would be complete if leaf node"),u=Bu(s,f)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=he(n);let f=ju(s,u,e.serverCache);f==null&&e.serverCache.isCompleteForChild(u)&&(f=l.getImmediateChild(u)),f!=null?c=t.filter.updateChild(l,u,f,De(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,te.EMPTY_NODE,De(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Jo(s,js(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Zo(s,ve())!=null,ur(e,c,o,t.filter.filtersNodes())}}/**
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
 */class B2{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Lu(s.getIndex()),r=r2(s);this.processor_=O2(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(te.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(te.EMPTY_NODE,a.getNode(),null),u=new ds(l,o.isFullyInitialized(),i.filtersNodes()),f=new ds(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Da(f,u),this.eventGenerator_=new d2(this.query_)}get query(){return this.query_}}function j2(t){return t.viewCache_.serverCache.getNode()}function H2(t){return Xo(t.viewCache_)}function W2(t,e){const n=js(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!me(e)&&!n.getImmediateChild(he(e)).isEmpty())?n.getChild(e):null}function $h(t){return t.eventRegistrations_.length===0}function z2(t,e){t.eventRegistrations_.push(e)}function Uh(t,e,n){const s=[];if(n){F(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Vh(t,e,n,s){e.type===Dt.MERGE&&e.source.queryId!==null&&(F(js(t.viewCache_),"We should always have a full cache before handling merges"),F(Xo(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=D2(t.processor_,i,e,n,s);return M2(t.processor_,r.viewCache),F(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,$0(t,r.changes,r.viewCache.eventCache.getNode(),null)}function G2(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ve,(r,o)=>{s.push(Ci(r,o))}),n.isFullyInitialized()&&s.push(k0(n.getNode())),$0(t,s,n.getNode(),e)}function $0(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return h2(t.eventGenerator_,e,n,i)}/**
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
 */let ta;class U0{constructor(){this.views=new Map}}function K2(t){F(!ta,"__referenceConstructor has already been defined"),ta=t}function q2(){return F(ta,"Reference.ts has not been loaded"),ta}function Y2(t){return t.views.size===0}function Wu(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return F(r!=null,"SyncTree gave us an op for an invalid query."),Vh(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Vh(o,e,n,s));return r}}function V0(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=Jo(n,i?s:null),l=!1;a?l=!0:s instanceof te?(a=Bu(n,s),l=!1):(a=te.EMPTY_NODE,l=!1);const c=Da(new ds(a,l,!1),new ds(s,i,!1));return new B2(e,c)}return o}function Q2(t,e,n,s,i,r){const o=V0(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),z2(o,n),G2(o,n)}function X2(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=hs(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(Uh(c,n,s)),$h(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(Uh(l,n,s)),$h(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!hs(t)&&r.push(new(q2())(e._repo,e._path)),{removed:r,events:o}}function B0(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function rs(t,e){let n=null;for(const s of t.views.values())n=n||W2(s,e);return n}function j0(t,e){if(e._queryParams.loadsAllData())return Fa(t);{const s=e._queryIdentifier;return t.views.get(s)}}function H0(t,e){return j0(t,e)!=null}function hs(t){return Fa(t)!=null}function Fa(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let na;function J2(t){F(!na,"__referenceConstructor has already been defined"),na=t}function Z2(){return F(na,"Reference.ts has not been loaded"),na}let eS=1;class Bh{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Me(null),this.pendingWriteTree_=A2(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function W0(t,e,n,s,i){return _2(t.pendingWriteTree_,e,n,s,i),i?Li(t,new Bs($u(),e,n)):[]}function tS(t,e,n,s){v2(t.pendingWriteTree_,e,n,s);const i=Me.fromObject(n);return Li(t,new Ii($u(),e,i))}function Xn(t,e,n=!1){const s=y2(t.pendingWriteTree_,e);if(b2(t.pendingWriteTree_,e)){let r=new Me(null);return s.snap!=null?r=r.set(ve(),!0):Ze(s.children,o=>{r=r.set(new Se(o),!0)}),Li(t,new Qo(s.path,r,n))}else return[]}function Qr(t,e,n){return Li(t,new Bs(Uu(),e,n))}function nS(t,e,n){const s=Me.fromObject(n);return Li(t,new Ii(Uu(),e,s))}function sS(t,e){return Li(t,new Nr(Uu(),e))}function iS(t,e,n){const s=Gu(t,n);if(s){const i=Ku(s),r=i.path,o=i.queryId,a=lt(r,e),l=new Nr(Vu(o),a);return qu(t,r,l)}else return[]}function sa(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||H0(o,e))){const l=X2(o,e,n,s);Y2(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(r,(d,p)=>hs(p));if(u&&!f){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const p=aS(d);for(let y=0;y<p.length;++y){const _=p[y],w=_.query,v=q0(t,_);t.listenProvider_.startListening(dr(w),Or(t,w),v.hashFn,v.onComplete)}}}!f&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(dr(e),null):c.forEach(d=>{const p=t.queryToTagMap.get($a(d));t.listenProvider_.stopListening(dr(d),p)}))}lS(t,c)}return a}function z0(t,e,n,s){const i=Gu(t,s);if(i!=null){const r=Ku(i),o=r.path,a=r.queryId,l=lt(o,e),c=new Bs(Vu(a),l,n);return qu(t,o,c)}else return[]}function rS(t,e,n,s){const i=Gu(t,s);if(i){const r=Ku(i),o=r.path,a=r.queryId,l=lt(o,e),c=Me.fromObject(n),u=new Ii(Vu(a),l,c);return qu(t,o,u)}else return[]}function Ac(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,p)=>{const y=lt(d,i);r=r||rs(p,y),o=o||hs(p)});let a=t.syncPointTree_.get(i);a?(o=o||hs(a),r=r||rs(a,ve())):(a=new U0,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=te.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((p,y)=>{const _=rs(y,ve());_&&(r=r.updateImmediateChild(p,_))}));const c=H0(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=$a(e);F(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const p=cS();t.queryToTagMap.set(d,p),t.tagToQueryMap.set(p,d)}const u=La(t.pendingWriteTree_,i);let f=Q2(a,e,n,u,r,l);if(!c&&!o&&!s){const d=j0(a,e);f=f.concat(uS(t,e,d))}return f}function zu(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=lt(o,e),c=rs(a,l);if(c)return c});return O0(i,e,r,n,!0)}function oS(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const f=lt(c,n);s=s||rs(u,f)});let i=t.syncPointTree_.get(n);i?s=s||rs(i,ve()):(i=new U0,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new ds(s,!0,!1):null,a=La(t.pendingWriteTree_,e._path),l=V0(i,e,a,r?o.getNode():te.EMPTY_NODE,r);return H2(l)}function Li(t,e){return G0(e,t.syncPointTree_,null,La(t.pendingWriteTree_,ve()))}function G0(t,e,n,s){if(me(t.path))return K0(t,e,n,s);{const i=e.get(ve());n==null&&i!=null&&(n=rs(i,ve()));let r=[];const o=he(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=M0(s,o);r=r.concat(G0(a,l,c,u))}return i&&(r=r.concat(Wu(i,t,s,n))),r}}function K0(t,e,n,s){const i=e.get(ve());n==null&&i!=null&&(n=rs(i,ve()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=M0(s,o),u=t.operationForChild(o);u&&(r=r.concat(K0(u,a,l,c)))}),i&&(r=r.concat(Wu(i,t,s,n))),r}function q0(t,e){const n=e.query,s=Or(t,n);return{hashFn:()=>(j2(e)||te.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?iS(t,n._path,s):sS(t,n._path);{const r=sE(i,n);return sa(t,n,null,r)}}}}function Or(t,e){const n=$a(e);return t.queryToTagMap.get(n)}function $a(t){return t._path.toString()+"$"+t._queryIdentifier}function Gu(t,e){return t.tagToQueryMap.get(e)}function Ku(t){const e=t.indexOf("$");return F(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Se(t.substr(0,e))}}function qu(t,e,n){const s=t.syncPointTree_.get(e);F(s,"Missing sync point for query tag that we're tracking");const i=La(t.pendingWriteTree_,e);return Wu(s,n,i,null)}function aS(t){return t.fold((e,n,s)=>{if(n&&hs(n))return[Fa(n)];{let i=[];return n&&(i=B0(n)),Ze(s,(r,o)=>{i=i.concat(o)}),i}})}function dr(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Z2())(t._repo,t._path):t}function lS(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=$a(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function cS(){return eS++}function uS(t,e,n){const s=e._path,i=Or(t,e),r=q0(t,n),o=t.listenProvider_.startListening(dr(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)F(!hs(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,f)=>{if(!me(c)&&u&&hs(u))return[Fa(u).query];{let d=[];return u&&(d=d.concat(B0(u).map(p=>p.query))),Ze(f,(p,y)=>{d=d.concat(y)}),d}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(dr(u),Or(t,u))}}return o}/**
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
 */class Yu{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Yu(n)}node(){return this.node_}}class Qu{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=$e(this.path_,e);return new Qu(this.syncTree_,n)}node(){return zu(this.syncTree_,this.path_)}}const fS=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},jh=function(t,e,n){if(!t||typeof t!="object")return t;if(F(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return dS(t[".sv"],e,n);if(typeof t[".sv"]=="object")return hS(t[".sv"],e);F(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},dS=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:F(!1,"Unexpected server value: "+t)}},hS=function(t,e,n){t.hasOwnProperty("increment")||F(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&F(!1,"Unexpected increment value: "+s);const i=e.node();if(F(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Y0=function(t,e,n,s){return Xu(e,new Qu(n,t),s)},Q0=function(t,e,n){return Xu(t,new Yu(e),n)};function Xu(t,e,n){const s=t.getPriority().val(),i=jh(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=jh(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new qe(a,We(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new qe(i))),o.forEachChild(Ve,(a,l)=>{const c=Xu(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class Ju{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Zu(t,e){let n=e instanceof Se?e:new Se(e),s=t,i=he(n);for(;i!==null;){const r=bi(s.node.children,i)||{children:{},childCount:0};s=new Ju(i,s,r),n=De(n),i=he(n)}return s}function Fi(t){return t.node.value}function X0(t,e){t.node.value=e,Rc(t)}function J0(t){return t.node.childCount>0}function pS(t){return Fi(t)===void 0&&!J0(t)}function Ua(t,e){Ze(t.node.children,(n,s)=>{e(new Ju(n,t,s))})}function Z0(t,e,n,s){n&&e(t),Ua(t,i=>{Z0(i,e,!0)})}function mS(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Xr(t){return new Se(t.parent===null?t.name:Xr(t.parent)+"/"+t.name)}function Rc(t){t.parent!==null&&gS(t.parent,t.name,t)}function gS(t,e,n){const s=pS(n),i=an(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Rc(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Rc(t))}/**
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
 */const _S=/[\[\].#$\/\u0000-\u001F\u007F]/,vS=/[\[\].#$\u0000-\u001F\u007F]/,kl=10*1024*1024,ef=function(t){return typeof t=="string"&&t.length!==0&&!_S.test(t)},e_=function(t){return typeof t=="string"&&t.length!==0&&!vS.test(t)},yS=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),e_(t)},bS=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Tu(t)||t&&typeof t=="object"&&an(t,".sv")},t_=function(t,e,n,s){s&&e===void 0||Va(Na(t,"value"),e,n)},Va=function(t,e,n){const s=n instanceof Se?new FE(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Es(s));if(typeof e=="function")throw new Error(t+"contains a function "+Es(s)+" with contents = "+e.toString());if(Tu(e))throw new Error(t+"contains "+e.toString()+" "+Es(s));if(typeof e=="string"&&e.length>kl/3&&Oa(e)>kl)throw new Error(t+"contains a string greater than "+kl+" utf8 bytes "+Es(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Ze(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!ef(o)))throw new Error(t+" contains an invalid key ("+o+") "+Es(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);$E(s,o),Va(t,a,s),UE(s)}),i&&r)throw new Error(t+' contains ".value" child '+Es(s)+" in addition to actual children.")}},xS=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const r=kr(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!ef(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(LE);let i=null;for(n=0;n<e.length;n++){if(s=e[n],i!==null&&Et(i,s))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},wS=function(t,e,n,s){const i=Na(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];Ze(e,(o,a)=>{const l=new Se(o);if(Va(i,a,$e(n,l)),Nu(l)===".priority"&&!bS(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),xS(i,r)},n_=function(t,e,n,s){if(!e_(n))throw new Error(Na(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},CS=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),n_(t,e,n)},tf=function(t,e){if(he(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},IS=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ef(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!yS(n))throw new Error(Na(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class ES{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ba(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Ou(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function s_(t,e,n){Ba(t,n),i_(t,s=>Ou(s,e))}function Rt(t,e,n){Ba(t,n),i_(t,s=>Et(s,e)||Et(e,s))}function i_(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(SS(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function SS(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();lr&&Je("event: "+n.toString()),Di(s)}}}/**
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
 */const TS="repo_interrupt",kS=25;class AS{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ES,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Yo(),this.transactionQueueTree_=new Ju,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function RS(t,e,n){if(t.stats_=Ru(t.repoInfo_),t.forceRestClient_||aE())t.server_=new qo(t.repoInfo_,(s,i,r,o)=>{Hh(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Wh(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ze(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new In(t.repoInfo_,e,(s,i,r,o)=>{Hh(t,s,i,r,o)},s=>{Wh(t,s)},s=>{PS(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=dE(t.repoInfo_,()=>new f2(t.stats_,t.server_)),t.infoData_=new o2,t.infoSyncTree_=new Bh({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=Qr(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),nf(t,"connected",!1),t.serverSyncTree_=new Bh({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);Rt(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function r_(t){const n=t.infoData_.getNode(new Se(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function ja(t){return fS({timestamp:r_(t)})}function Hh(t,e,n,s,i){t.dataUpdateCount++;const r=new Se(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=jo(n,c=>We(c));o=rS(t.serverSyncTree_,r,l,i)}else{const l=We(n);o=z0(t.serverSyncTree_,r,l,i)}else if(s){const l=jo(n,c=>We(c));o=nS(t.serverSyncTree_,r,l)}else{const l=We(n);o=Qr(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Si(t,r)),Rt(t.eventQueue_,a,o)}function Wh(t,e){nf(t,"connected",e),e===!1&&DS(t)}function PS(t,e){Ze(e,(n,s)=>{nf(t,n,s)})}function nf(t,e,n){const s=new Se("/.info/"+e),i=We(n);t.infoData_.updateSnapshot(s,i);const r=Qr(t.infoSyncTree_,s,i);Rt(t.eventQueue_,s,r)}function sf(t){return t.nextWriteId_++}function NS(t,e,n){const s=oS(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=We(i).withIndex(e._queryParams.getIndex());Ac(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Qr(t.serverSyncTree_,e._path,r);else{const a=Or(t.serverSyncTree_,e);o=z0(t.serverSyncTree_,e._path,r,a)}return Rt(t.eventQueue_,e._path,o),sa(t.serverSyncTree_,e,n,null,!0),r},i=>(Jr(t,"get for query "+ze(e)+" failed: "+i),Promise.reject(new Error(i))))}function OS(t,e,n,s,i){Jr(t,"set",{path:e.toString(),value:n,priority:s});const r=ja(t),o=We(n,s),a=zu(t.serverSyncTree_,e),l=Q0(o,a,r),c=sf(t),u=W0(t.serverSyncTree_,e,l,c,!0);Ba(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,p)=>{const y=d==="ok";y||ct("set at "+e+" failed: "+d);const _=Xn(t.serverSyncTree_,c,!y);Rt(t.eventQueue_,e,_),Pc(t,i,d,p)});const f=of(t,e);Si(t,f),Rt(t.eventQueue_,f,[])}function MS(t,e,n,s){Jr(t,"update",{path:e.toString(),value:n});let i=!0;const r=ja(t),o={};if(Ze(n,(a,l)=>{i=!1,o[a]=Y0($e(e,a),We(l),t.serverSyncTree_,r)}),i)Je("update() called with empty data.  Don't do anything."),Pc(t,s,"ok",void 0);else{const a=sf(t),l=tS(t.serverSyncTree_,e,o,a);Ba(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const f=c==="ok";f||ct("update at "+e+" failed: "+c);const d=Xn(t.serverSyncTree_,a,!f),p=d.length>0?Si(t,e):e;Rt(t.eventQueue_,p,d),Pc(t,s,c,u)}),Ze(n,c=>{const u=of(t,$e(e,c));Si(t,u)}),Rt(t.eventQueue_,e,[])}}function DS(t){Jr(t,"onDisconnectEvents");const e=ja(t),n=Yo();Cc(t.onDisconnect_,ve(),(i,r)=>{const o=Y0(i,r,t.serverSyncTree_,e);A0(n,i,o)});let s=[];Cc(n,ve(),(i,r)=>{s=s.concat(Qr(t.serverSyncTree_,i,r));const o=of(t,i);Si(t,o)}),t.onDisconnect_=Yo(),Rt(t.eventQueue_,ve(),s)}function LS(t,e,n){let s;he(e._path)===".info"?s=Ac(t.infoSyncTree_,e,n):s=Ac(t.serverSyncTree_,e,n),s_(t.eventQueue_,e._path,s)}function o_(t,e,n){let s;he(e._path)===".info"?s=sa(t.infoSyncTree_,e,n):s=sa(t.serverSyncTree_,e,n),s_(t.eventQueue_,e._path,s)}function FS(t){t.persistentConnection_&&t.persistentConnection_.interrupt(TS)}function Jr(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Je(n,...e)}function Pc(t,e,n,s){e&&Di(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function a_(t,e,n){return zu(t.serverSyncTree_,e,n)||te.EMPTY_NODE}function rf(t,e=t.transactionQueueTree_){if(e||Ha(t,e),Fi(e)){const n=c_(t,e);F(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&$S(t,Xr(e),n)}else J0(e)&&Ua(e,n=>{rf(t,n)})}function $S(t,e,n){const s=n.map(c=>c.currentWriteId),i=a_(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];F(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const f=lt(e,u.path);r=r.updateChild(f,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Jr(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const f=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(Xn(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&f.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Ha(t,Zu(t.transactionQueueTree_,e)),rf(t,t.transactionQueueTree_),Rt(t.eventQueue_,e,u);for(let d=0;d<f.length;d++)Di(f[d])}else{if(c==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{ct("transaction at "+l.toString()+" failed: "+c);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=c}Si(t,e)}},o)}function Si(t,e){const n=l_(t,e),s=Xr(n),i=c_(t,n);return US(t,i,s),s}function US(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=lt(n,l.path);let u=!1,f;if(F(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,f=l.abortReason,i=i.concat(Xn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=kS)u=!0,f="maxretry",i=i.concat(Xn(t.serverSyncTree_,l.currentWriteId,!0));else{const d=a_(t,l.path,o);l.currentInputSnapshot=d;const p=e[a].update(d.val());if(p!==void 0){Va("transaction failed: Data returned ",p,l.path);let y=We(p);typeof p=="object"&&p!=null&&an(p,".priority")||(y=y.updatePriority(d.getPriority()));const w=l.currentWriteId,v=ja(t),b=Q0(y,d,v);l.currentOutputSnapshotRaw=y,l.currentOutputSnapshotResolved=b,l.currentWriteId=sf(t),o.splice(o.indexOf(w),1),i=i.concat(W0(t.serverSyncTree_,l.path,b,l.currentWriteId,l.applyLocally)),i=i.concat(Xn(t.serverSyncTree_,w,!0))}else u=!0,f="nodata",i=i.concat(Xn(t.serverSyncTree_,l.currentWriteId,!0))}Rt(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(f),!1,null))))}Ha(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Di(s[a]);rf(t,t.transactionQueueTree_)}function l_(t,e){let n,s=t.transactionQueueTree_;for(n=he(e);n!==null&&Fi(s)===void 0;)s=Zu(s,n),e=De(e),n=he(e);return s}function c_(t,e){const n=[];return u_(t,e,n),n.sort((s,i)=>s.order-i.order),n}function u_(t,e,n){const s=Fi(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Ua(e,i=>{u_(t,i,n)})}function Ha(t,e){const n=Fi(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,X0(e,n.length>0?n:void 0)}Ua(e,s=>{Ha(t,s)})}function of(t,e){const n=Xr(l_(t,e)),s=Zu(t.transactionQueueTree_,e);return mS(s,i=>{Al(t,i)}),Al(t,s),Z0(s,i=>{Al(t,i)}),n}function Al(t,e){const n=Fi(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(F(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(F(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Xn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?X0(e,void 0):n.length=r+1,Rt(t.eventQueue_,Xr(e),i);for(let o=0;o<s.length;o++)Di(s[o])}}/**
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
 */function VS(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function BS(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):ct(`Invalid query segment '${n}' in query '${t}'`)}return e}const zh=function(t,e){const n=jS(t),s=n.namespace;n.domain==="firebase.com"&&kn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&kn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||JI();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new d0(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new Se(n.pathString)}},jS=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(u,f)),u<f&&(i=VS(t.substring(u,f)));const d=BS(t.substring(Math.min(t.length,f)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const y=e.indexOf(".");s=e.substring(0,y).toLowerCase(),n=e.substring(y+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */const Gh="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",HS=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=Gh.charAt(n%64),n=Math.floor(n/64);F(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Gh.charAt(e[i]);return F(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class WS{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ze(this.snapshot.exportVal())}}class zS{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class f_{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return F(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class af{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return me(this._path)?null:Nu(this._path)}get ref(){return new On(this._repo,this._path)}get _queryIdentifier(){const e=Ph(this._queryParams),n=ku(e);return n==="{}"?"default":n}get _queryObject(){return Ph(this._queryParams)}isEqual(e){if(e=wt(e),!(e instanceof af))return!1;const n=this._repo===e._repo,s=Ou(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+DE(this._path)}}class On extends af{constructor(e,n){super(e,n,new Fu,!1)}get parent(){const e=x0(this._path);return e===null?null:new On(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Mr{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Se(e),s=Dr(this.ref,e);return new Mr(this._node.getChild(n),s,Ve)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Mr(i,Dr(this.ref,s),Ve)))}hasChild(e){const n=new Se(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function fe(t,e){return t=wt(t),t._checkNotDeleted("ref"),e!==void 0?Dr(t._root,e):t._root}function Dr(t,e){return t=wt(t),he(t._path)===null?CS("child","path",e):n_("child","path",e),new On(t._repo,$e(t._path,e))}function Ti(t,e){t=wt(t),tf("push",t._path),t_("push",e,t._path,!0);const n=r_(t._repo),s=HS(n),i=Dr(t,s),r=Dr(t,s);let o;return e!=null?o=qn(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function fi(t){return tf("remove",t._path),qn(t,null)}function qn(t,e){t=wt(t),tf("set",t._path),t_("set",e,t._path,!1);const n=new zr;return OS(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function yt(t,e){wS("update",e,t._path);const n=new zr;return MS(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function Nt(t){t=wt(t);const e=new f_(()=>{}),n=new Wa(e);return NS(t._repo,t,n).then(s=>new Mr(s,new On(t._repo,t._path),t._queryParams.getIndex()))}class Wa{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new WS("value",this,new Mr(e.snapshotNode,new On(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new zS(this,e,n):null}matches(e){return e instanceof Wa?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function GS(t,e,n,s,i){const r=new f_(n,void 0),o=new Wa(r);return LS(t._repo,t,o),()=>o_(t._repo,t,o)}function d_(t,e,n,s){return GS(t,"value",e)}function KS(t,e,n){o_(t._repo,t,null)}K2(On);J2(On);/**
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
 */const qS="FIREBASE_DATABASE_EMULATOR_HOST",Nc={};let YS=!1;function QS(t,e,n,s){t.repoInfo_=new d0(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function XS(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||kn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Je("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=zh(r,i),a=o.repoInfo,l;typeof process<"u"&&hh&&(l=hh[qS]),l?(r=`http://${l}?ns=${a.namespace}`,o=zh(r,i),a=o.repoInfo):o.repoInfo.secure;const c=new cE(t.name,t.options,e);IS("Invalid Firebase Database URL",o),me(o.path)||kn("Database URL must point to the root of a Firebase Database (not including a child path).");const u=ZS(a,t,c,new lE(t,n));return new eT(u,t)}function JS(t,e){const n=Nc[e];(!n||n[t.key]!==t)&&kn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),FS(t),delete n[t.key]}function ZS(t,e,n,s){let i=Nc[e.name];i||(i={},Nc[e.name]=i);let r=i[t.toURLString()];return r&&kn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new AS(t,YS,n,s),i[t.toURLString()]=r,r}class eT{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(RS(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new On(this._repo,ve())),this._rootInternal}_delete(){return this._rootInternal!==null&&(JS(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&kn("Cannot call "+e+" on a deleted database.")}}function h_(t=Yg(),e){const n=Su(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=vC("database");s&&tT(n,...s)}return n}function tT(t,e,n,s={}){t=wt(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&kn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&kn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new xo(xo.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:yC(s.mockUserToken,t.app.options.projectId);r=new xo(o)}QS(i,e,n,r)}/**
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
 */function nT(t){GI(Mi),xi(new Us("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return XS(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),ss(ph,mh,t),ss(ph,mh,"esm2017")}In.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};In.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};nT();function lf(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function p_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const sT=p_,m_=new Gr("auth","Firebase",p_());/**
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
 */const ia=new Iu("@firebase/auth");function iT(t,...e){ia.logLevel<=Ee.WARN&&ia.warn(`Auth (${Mi}): ${t}`,...e)}function wo(t,...e){ia.logLevel<=Ee.ERROR&&ia.error(`Auth (${Mi}): ${t}`,...e)}/**
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
 */function on(t,...e){throw uf(t,...e)}function Ut(t,...e){return uf(t,...e)}function cf(t,e,n){const s=Object.assign(Object.assign({},sT()),{[e]:n});return new Gr("auth","Firebase",s).create(e,{appName:t.name})}function Os(t){return cf(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function rT(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&on(t,"argument-error"),cf(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function uf(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return m_.create(t,...e)}function ne(t,e,...n){if(!t)throw uf(e,...n)}function bn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw wo(e),new Error(e)}function An(t,e){t||bn(e)}/**
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
 */function Oc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function oT(){return Kh()==="http:"||Kh()==="https:"}function Kh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function aT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(oT()||xC()||"connection"in navigator)?navigator.onLine:!0}function lT(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Zr{constructor(e,n){this.shortDelay=e,this.longDelay=n,An(n>e,"Short delay should be less than long delay!"),this.isMobile=Cu()||Wg()}get(){return aT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ff(t,e){An(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class g_{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;bn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;bn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;bn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const cT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const uT=new Zr(3e4,6e4);function df(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function $i(t,e,n,s,i={}){return __(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Oi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},r);return bC()||(c.referrerPolicy="no-referrer"),g_.fetch()(v_(t,t.config.apiHost,n,a),c)})}async function __(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},cT),e);try{const i=new dT(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw po(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw po(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw po(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw po(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw cf(t,u,c);on(t,u)}}catch(i){if(i instanceof vs)throw i;on(t,"network-request-failed",{message:String(i)})}}async function fT(t,e,n,s,i={}){const r=await $i(t,e,n,s,i);return"mfaPendingCredential"in r&&on(t,"multi-factor-auth-required",{_serverResponse:r}),r}function v_(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?ff(t.config,i):`${t.config.apiScheme}://${i}`}class dT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Ut(this.auth,"network-request-failed")),uT.get())})}}function po(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Ut(t,e,s);return i.customData._tokenResponse=n,i}/**
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
 */async function hT(t,e){return $i(t,"POST","/v1/accounts:delete",e)}async function y_(t,e){return $i(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function hr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function pT(t,e=!1){const n=wt(t),s=await n.getIdToken(e),i=hf(s);ne(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:hr(Rl(i.auth_time)),issuedAtTime:hr(Rl(i.iat)),expirationTime:hr(Rl(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Rl(t){return Number(t)*1e3}function hf(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return wo("JWT malformed, contained fewer than 3 sections"),null;try{const i=Bo(n);return i?JSON.parse(i):(wo("Failed to decode base64 JWT payload"),null)}catch(i){return wo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function qh(t){const e=hf(t);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Lr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof vs&&mT(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function mT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class gT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Mc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=hr(this.lastLoginAt),this.creationTime=hr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ra(t){var e;const n=t.auth,s=await t.getIdToken(),i=await Lr(t,y_(n,{idToken:s}));ne(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?b_(r.providerUserInfo):[],a=vT(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Mc(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function _T(t){const e=wt(t);await ra(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function vT(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function b_(t){return t.map(e=>{var{providerId:n}=e,s=lf(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function yT(t,e){const n=await __(t,{},async()=>{const s=Oi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=v_(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",g_.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function bT(t,e){return $i(t,"POST","/v2/accounts:revokeToken",df(t,e))}/**
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
 */class di{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):qh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ne(e.length!==0,"internal-error");const n=qh(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ne(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await yT(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new di;return s&&(ne(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(ne(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(ne(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new di,this.toJSON())}_performRefresh(){return bn("not implemented")}}/**
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
 */function Vn(t,e){ne(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class xn{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=lf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new gT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Mc(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Lr(this,this.stsTokenManager.getToken(this.auth,e));return ne(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return pT(this,e)}reload(){return _T(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new xn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await ra(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ot(this.auth.app))return Promise.reject(Os(this.auth));const e=await this.getIdToken();return await Lr(this,hT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const f=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,p=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,v=(c=n.createdAt)!==null&&c!==void 0?c:void 0,b=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:R,emailVerified:O,isAnonymous:G,providerData:q,stsTokenManager:E}=n;ne(R&&E,e,"internal-error");const L=di.fromJSON(this.name,E);ne(typeof R=="string",e,"internal-error"),Vn(f,e.name),Vn(d,e.name),ne(typeof O=="boolean",e,"internal-error"),ne(typeof G=="boolean",e,"internal-error"),Vn(p,e.name),Vn(y,e.name),Vn(_,e.name),Vn(w,e.name),Vn(v,e.name),Vn(b,e.name);const P=new xn({uid:R,auth:e,email:d,emailVerified:O,displayName:f,isAnonymous:G,photoURL:y,phoneNumber:p,tenantId:_,stsTokenManager:L,createdAt:v,lastLoginAt:b});return q&&Array.isArray(q)&&(P.providerData=q.map(U=>Object.assign({},U))),w&&(P._redirectEventId=w),P}static async _fromIdTokenResponse(e,n,s=!1){const i=new di;i.updateFromServerResponse(n);const r=new xn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await ra(r),r}static async _fromGetAccountInfoResponse(e,n,s){const i=n.users[0];ne(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?b_(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),a=new di;a.updateFromIdToken(s);const l=new xn({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new Mc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,c),l}}/**
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
 */const Yh=new Map;function wn(t){An(t instanceof Function,"Expected a class definition");let e=Yh.get(t);return e?(An(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Yh.set(t,e),e)}/**
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
 */class x_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}x_.type="NONE";const Qh=x_;/**
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
 */function Co(t,e,n){return`firebase:${t}:${e}:${n}`}class hi{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Co(this.userKey,i.apiKey,r),this.fullPersistenceKey=Co("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?xn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new hi(wn(Qh),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||wn(Qh);const o=Co(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const f=xn._fromJSON(e,u);c!==r&&(a=f),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new hi(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new hi(r,e,s))}}/**
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
 */function Xh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(E_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(w_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(T_(e))return"Blackberry";if(k_(e))return"Webos";if(C_(e))return"Safari";if((e.includes("chrome/")||I_(e))&&!e.includes("edge/"))return"Chrome";if(S_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function w_(t=ut()){return/firefox\//i.test(t)}function C_(t=ut()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function I_(t=ut()){return/crios\//i.test(t)}function E_(t=ut()){return/iemobile/i.test(t)}function S_(t=ut()){return/android/i.test(t)}function T_(t=ut()){return/blackberry/i.test(t)}function k_(t=ut()){return/webos/i.test(t)}function pf(t=ut()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function xT(t=ut()){var e;return pf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function wT(){return wC()&&document.documentMode===10}function A_(t=ut()){return pf(t)||S_(t)||k_(t)||T_(t)||/windows phone/i.test(t)||E_(t)}/**
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
 */function R_(t,e=[]){let n;switch(t){case"Browser":n=Xh(ut());break;case"Worker":n=`${Xh(ut())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Mi}/${s}`}/**
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
 */class CT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function IT(t,e={}){return $i(t,"GET","/v2/passwordPolicy",df(t,e))}/**
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
 */const ET=6;class ST{constructor(e){var n,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:ET,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,i,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class TT{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Jh(this),this.idTokenSubscription=new Jh(this),this.beforeStateQueue=new CT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=m_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=wn(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await hi.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await y_(this,{idToken:e}),s=await xn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ot(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ra(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=lT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ot(this.app))return Promise.reject(Os(this));const n=e?wt(e):null;return n&&ne(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ot(this.app)?Promise.reject(Os(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ot(this.app)?Promise.reject(Os(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(wn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await IT(this),n=new ST(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Gr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await bT(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&wn(e)||this._popupRedirectResolver;ne(n,this,"argument-error"),this.redirectPersistenceManager=await hi.create(this,[wn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ne(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=R_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;if(Ot(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&iT(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function za(t){return wt(t)}class Jh{constructor(e){this.auth=e,this.observer=null,this.addObserver=NC(n=>this.observer=n)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let mf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function kT(t){mf=t}function AT(t){return mf.loadJS(t)}function RT(){return mf.gapiScript}function PT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function NT(t,e){const n=Su(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(Ho(r,e??{}))return i;on(i,"already-initialized")}return n.initialize({options:e})}function OT(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(wn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function MT(t,e,n){const s=za(t);ne(s._canInitEmulator,s,"emulator-config-failed"),ne(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=P_(e),{host:o,port:a}=DT(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),LT()}function P_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function DT(t){const e=P_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Zh(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Zh(o)}}}function Zh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function LT(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class N_{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return bn("not implemented")}_getIdTokenResponse(e){return bn("not implemented")}_linkToIdToken(e,n){return bn("not implemented")}_getReauthenticationResolver(e){return bn("not implemented")}}/**
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
 */async function pi(t,e){return fT(t,"POST","/v1/accounts:signInWithIdp",df(t,e))}/**
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
 */const FT="http://localhost";class Hs extends N_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Hs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):on("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=lf(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Hs(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return pi(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,pi(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,pi(e,n)}buildRequest(){const e={requestUri:FT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Oi(n)}return e}}/**
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
 */class gf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class eo extends gf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class _n extends eo{constructor(){super("facebook.com")}static credential(e){return Hs._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _n.credentialFromTaggedObject(e)}static credentialFromError(e){return _n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _n.credential(e.oauthAccessToken)}catch{return null}}}_n.FACEBOOK_SIGN_IN_METHOD="facebook.com";_n.PROVIDER_ID="facebook.com";/**
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
 */class vn extends eo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Hs._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return vn.credential(n,s)}catch{return null}}}vn.GOOGLE_SIGN_IN_METHOD="google.com";vn.PROVIDER_ID="google.com";/**
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
 */class Yn extends eo{constructor(){super("github.com")}static credential(e){return Hs._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yn.credential(e.oauthAccessToken)}catch{return null}}}Yn.GITHUB_SIGN_IN_METHOD="github.com";Yn.PROVIDER_ID="github.com";/**
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
 */class Qn extends eo{constructor(){super("twitter.com")}static credential(e,n){return Hs._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Qn.credential(n,s)}catch{return null}}}Qn.TWITTER_SIGN_IN_METHOD="twitter.com";Qn.PROVIDER_ID="twitter.com";/**
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
 */class ki{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await xn._fromIdTokenResponse(e,s,i),o=ep(s);return new ki({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=ep(s);return new ki({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function ep(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class oa extends vs{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,oa.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new oa(e,n,s,i)}}function O_(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?oa._fromErrorAndOperation(t,r,e,s):r})}async function $T(t,e,n=!1){const s=await Lr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ki._forOperation(t,"link",s)}/**
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
 */async function UT(t,e,n=!1){const{auth:s}=t;if(Ot(s.app))return Promise.reject(Os(s));const i="reauthenticate";try{const r=await Lr(t,O_(s,i,e,t),n);ne(r.idToken,s,"internal-error");const o=hf(r.idToken);ne(o,s,"internal-error");const{sub:a}=o;return ne(t.uid===a,s,"user-mismatch"),ki._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&on(s,"user-mismatch"),r}}/**
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
 */async function VT(t,e,n=!1){if(Ot(t.app))return Promise.reject(Os(t));const s="signIn",i=await O_(t,s,e),r=await ki._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}function BT(t,e,n,s){return wt(t).onIdTokenChanged(e,n,s)}function jT(t,e,n){return wt(t).beforeAuthStateChanged(e,n)}const aa="__sak";/**
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
 */class M_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(aa,"1"),this.storage.removeItem(aa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const HT=1e3,WT=10;class D_ extends M_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=A_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);wT()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,WT):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},HT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}D_.type="LOCAL";const zT=D_;/**
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
 */class L_ extends M_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}L_.type="SESSION";const F_=L_;/**
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
 */function GT(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ga{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Ga(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await GT(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ga.receivers=[];/**
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
 */function _f(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class KT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=_f("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(f){const d=f;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function nn(){return window}function qT(t){nn().location.href=t}/**
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
 */function $_(){return typeof nn().WorkerGlobalScope<"u"&&typeof nn().importScripts=="function"}async function YT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function QT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function XT(){return $_()?self:null}/**
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
 */const U_="firebaseLocalStorageDb",JT=1,la="firebaseLocalStorage",V_="fbase_key";class to{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ka(t,e){return t.transaction([la],e?"readwrite":"readonly").objectStore(la)}function ZT(){const t=indexedDB.deleteDatabase(U_);return new to(t).toPromise()}function Dc(){const t=indexedDB.open(U_,JT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(la,{keyPath:V_})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(la)?e(s):(s.close(),await ZT(),e(await Dc()))})})}async function tp(t,e,n){const s=Ka(t,!0).put({[V_]:e,value:n});return new to(s).toPromise()}async function e6(t,e){const n=Ka(t,!1).get(e),s=await new to(n).toPromise();return s===void 0?null:s.value}function np(t,e){const n=Ka(t,!0).delete(e);return new to(n).toPromise()}const t6=800,n6=3;class B_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Dc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>n6)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return $_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ga._getInstance(XT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await YT(),!this.activeServiceWorker)return;this.sender=new KT(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||QT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Dc();return await tp(e,aa,"1"),await np(e,aa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>tp(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>e6(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>np(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Ka(i,!1).getAll();return new to(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),t6)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}B_.type="LOCAL";const s6=B_;new Zr(3e4,6e4);/**
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
 */function j_(t,e){return e?wn(e):(ne(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class vf extends N_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return pi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return pi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return pi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function i6(t){return VT(t.auth,new vf(t),t.bypassAuthState)}function r6(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),UT(n,new vf(t),t.bypassAuthState)}async function o6(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),$T(n,new vf(t),t.bypassAuthState)}/**
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
 */class H_{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return i6;case"linkViaPopup":case"linkViaRedirect":return o6;case"reauthViaPopup":case"reauthViaRedirect":return r6;default:on(this.auth,"internal-error")}}resolve(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const a6=new Zr(2e3,1e4);async function sp(t,e,n){if(Ot(t.app))return Promise.reject(Ut(t,"operation-not-supported-in-this-environment"));const s=za(t);rT(t,e,gf);const i=j_(s,n);return new As(s,"signInViaPopup",e,i).executeNotNull()}class As extends H_{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,As.currentPopupAction&&As.currentPopupAction.cancel(),As.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){An(this.filter.length===1,"Popup operations only handle one event");const e=_f();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ut(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ut(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,As.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ut(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,a6.get())};e()}}As.currentPopupAction=null;/**
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
 */const l6="pendingRedirect",Io=new Map;class c6 extends H_{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Io.get(this.auth._key());if(!e){try{const s=await u6(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Io.set(this.auth._key(),e)}return this.bypassAuthState||Io.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function u6(t,e){const n=h6(e),s=d6(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function f6(t,e){Io.set(t._key(),e)}function d6(t){return wn(t._redirectPersistence)}function h6(t){return Co(l6,t.config.apiKey,t.name)}async function p6(t,e,n=!1){if(Ot(t.app))return Promise.reject(Os(t));const s=za(t),i=j_(s,e),o=await new c6(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const m6=10*60*1e3;class g6{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!_6(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!W_(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Ut(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=m6&&this.cachedEventUids.clear(),this.cachedEventUids.has(ip(e))}saveEventToCache(e){this.cachedEventUids.add(ip(e)),this.lastProcessedEventTime=Date.now()}}function ip(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function W_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function _6(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return W_(t);default:return!1}}/**
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
 */async function v6(t,e={}){return $i(t,"GET","/v1/projects",e)}/**
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
 */const y6=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,b6=/^https?/;async function x6(t){if(t.config.emulator)return;const{authorizedDomains:e}=await v6(t);for(const n of e)try{if(w6(n))return}catch{}on(t,"unauthorized-domain")}function w6(t){const e=Oc(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!b6.test(n))return!1;if(y6.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const C6=new Zr(3e4,6e4);function rp(){const t=nn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function I6(t){return new Promise((e,n)=>{var s,i,r;function o(){rp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{rp(),n(Ut(t,"network-request-failed"))},timeout:C6.get()})}if(!((i=(s=nn().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=nn().gapi)===null||r===void 0)&&r.load)o();else{const a=PT("iframefcb");return nn()[a]=()=>{gapi.load?o():n(Ut(t,"network-request-failed"))},AT(`${RT()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Eo=null,e})}let Eo=null;function E6(t){return Eo=Eo||I6(t),Eo}/**
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
 */const S6=new Zr(5e3,15e3),T6="__/auth/iframe",k6="emulator/auth/iframe",A6={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},R6=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function P6(t){const e=t.config;ne(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ff(e,k6):`https://${t.config.authDomain}/${T6}`,s={apiKey:e.apiKey,appName:t.name,v:Mi},i=R6.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Oi(s).slice(1)}`}async function N6(t){const e=await E6(t),n=nn().gapi;return ne(n,t,"internal-error"),e.open({where:document.body,url:P6(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:A6,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Ut(t,"network-request-failed"),a=nn().setTimeout(()=>{r(o)},S6.get());function l(){nn().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const O6={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},M6=500,D6=600,L6="_blank",F6="http://localhost";class op{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function $6(t,e,n,s=M6,i=D6){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},O6),{width:s.toString(),height:i.toString(),top:r,left:o}),c=ut().toLowerCase();n&&(a=I_(c)?L6:n),w_(c)&&(e=e||F6,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[p,y])=>`${d}${p}=${y},`,"");if(xT(c)&&a!=="_self")return U6(e||"",a),new op(null);const f=window.open(e||"",a,u);ne(f,t,"popup-blocked");try{f.focus()}catch{}return new op(f)}function U6(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const V6="__/auth/handler",B6="emulator/auth/handler",j6=encodeURIComponent("fac");async function ap(t,e,n,s,i,r){ne(t.config.authDomain,t,"auth-domain-config-required"),ne(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Mi,eventId:i};if(e instanceof gf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",pc(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,f]of Object.entries({}))o[u]=f}if(e instanceof eo){const u=e.getScopes().filter(f=>f!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${j6}=${encodeURIComponent(l)}`:"";return`${H6(t)}?${Oi(a).slice(1)}${c}`}function H6({config:t}){return t.emulator?ff(t,B6):`https://${t.authDomain}/${V6}`}/**
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
 */const Pl="webStorageSupport";class W6{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=F_,this._completeRedirectFn=p6,this._overrideRedirectResult=f6}async _openPopup(e,n,s,i){var r;An((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await ap(e,n,s,Oc(),i);return $6(e,o,_f())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await ap(e,n,s,Oc(),i);return qT(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(An(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await N6(e),s=new g6(e);return n.register("authEvent",i=>(ne(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Pl,{type:Pl},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Pl];o!==void 0&&n(!!o),on(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=x6(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return A_()||C_()||pf()}}const z6=W6;var lp="@firebase/auth",cp="1.9.0";/**
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
 */class G6{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function K6(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function q6(t){xi(new Us("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;ne(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:R_(t)},c=new TT(s,i,r,l);return OT(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),xi(new Us("auth-internal",e=>{const n=za(e.getProvider("auth").getImmediate());return(s=>new G6(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ss(lp,cp,K6(t)),ss(lp,cp,"esm2017")}/**
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
 */const Y6=5*60,Q6=Hg("authIdTokenMaxAge")||Y6;let up=null;const X6=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>Q6)return;const i=n==null?void 0:n.token;up!==i&&(up=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Lc(t=Yg()){const e=Su(t,"auth");if(e.isInitialized())return e.getImmediate();const n=NT(t,{popupRedirectResolver:z6,persistence:[s6,zT,F_]}),s=Hg("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=X6(r.toString());jT(n,o,()=>o(n.currentUser)),BT(n,a=>o(a))}}const i=Bg("auth");return i&&MT(n,`http://${i}`),n}function J6(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}kT({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=Ut("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",J6().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});q6("Browser");const Z6={apiKey:"AIzaSyDReE9mw5-7NXaoCIdc4sVNfF_EgqxW93s",authDomain:"donghuaapi.firebaseapp.com",databaseURL:"https://donghuaapi-default-rtdb.firebaseio.com",projectId:"donghuaapi",storageBucket:"donghuaapi.firebasestorage.app",messagingSenderId:"621954846745",appId:"1:621954846745:web:2ce4962cbe1836a81c9a88",measurementId:"G-RM00X5VKRN"},z_=qg(Z6);Lc(z_);const de=h_(z_),jt=_s("load",()=>{const t=oe(!1),e=yu();return e.beforeEach((n,s,i)=>{t.value=!0,setTimeout(()=>i(),100)}),e.afterEach(()=>{setTimeout(()=>{t.value=!1},100)}),{loading:t}}),e3={};var Fc=null;function t3(t){try{return crypto.getRandomValues(new Uint8Array(t))}catch{}try{return e3.randomBytes(t)}catch{}if(!Fc)throw Error("Neither WebCryptoAPI nor a crypto module is available. Use bcrypt.setRandomFallback to set an alternative");return Fc(t)}function n3(t){Fc=t}function yf(t,e){if(t=t||bf,typeof t!="number")throw Error("Illegal arguments: "+typeof t+", "+typeof e);t<4?t=4:t>31&&(t=31);var n=[];return n.push("$2b$"),t<10&&n.push("0"),n.push(t.toString()),n.push("$"),n.push(ca(t3(Fr),Fr)),n.join("")}function G_(t,e,n){if(typeof e=="function"&&(n=e,e=void 0),typeof t=="function"&&(n=t,t=void 0),typeof t>"u")t=bf;else if(typeof t!="number")throw Error("illegal arguments: "+typeof t);function s(i){Lt(function(){try{i(null,yf(t))}catch(r){i(r)}})}if(n){if(typeof n!="function")throw Error("Illegal callback: "+typeof n);s(n)}else return new Promise(function(i,r){s(function(o,a){if(o){r(o);return}i(a)})})}function K_(t,e){if(typeof e>"u"&&(e=bf),typeof e=="number"&&(e=yf(e)),typeof t!="string"||typeof e!="string")throw Error("Illegal arguments: "+typeof t+", "+typeof e);return $c(t,e)}function q_(t,e,n,s){function i(r){typeof t=="string"&&typeof e=="number"?G_(e,function(o,a){$c(t,a,r,s)}):typeof t=="string"&&typeof e=="string"?$c(t,e,r,s):Lt(r.bind(this,Error("Illegal arguments: "+typeof t+", "+typeof e)))}if(n){if(typeof n!="function")throw Error("Illegal callback: "+typeof n);i(n)}else return new Promise(function(r,o){i(function(a,l){if(a){o(a);return}r(l)})})}function Y_(t,e){for(var n=t.length^e.length,s=0;s<t.length;++s)n|=t.charCodeAt(s)^e.charCodeAt(s);return n===0}function s3(t,e){if(typeof t!="string"||typeof e!="string")throw Error("Illegal arguments: "+typeof t+", "+typeof e);return e.length!==60?!1:Y_(K_(t,e.substring(0,e.length-31)),e)}function i3(t,e,n,s){function i(r){if(typeof t!="string"||typeof e!="string"){Lt(r.bind(this,Error("Illegal arguments: "+typeof t+", "+typeof e)));return}if(e.length!==60){Lt(r.bind(this,null,!1));return}q_(t,e.substring(0,29),function(o,a){o?r(o):r(null,Y_(a,e))},s)}if(n){if(typeof n!="function")throw Error("Illegal callback: "+typeof n);i(n)}else return new Promise(function(r,o){i(function(a,l){if(a){o(a);return}r(l)})})}function r3(t){if(typeof t!="string")throw Error("Illegal arguments: "+typeof t);return parseInt(t.split("$")[2],10)}function o3(t){if(typeof t!="string")throw Error("Illegal arguments: "+typeof t);if(t.length!==60)throw Error("Illegal hash length: "+t.length+" != 60");return t.substring(0,29)}function a3(t){if(typeof t!="string")throw Error("Illegal arguments: "+typeof t);return Q_(t)>72}var Lt=typeof process<"u"&&process&&typeof process.nextTick=="function"?typeof setImmediate=="function"?setImmediate:process.nextTick:setTimeout;function Q_(t){for(var e=0,n=0,s=0;s<t.length;++s)n=t.charCodeAt(s),n<128?e+=1:n<2048?e+=2:(n&64512)===55296&&(t.charCodeAt(s+1)&64512)===56320?(++s,e+=4):e+=3;return e}function l3(t){for(var e=0,n,s,i=new Array(Q_(t)),r=0,o=t.length;r<o;++r)n=t.charCodeAt(r),n<128?i[e++]=n:n<2048?(i[e++]=n>>6|192,i[e++]=n&63|128):(n&64512)===55296&&((s=t.charCodeAt(r+1))&64512)===56320?(n=65536+((n&1023)<<10)+(s&1023),++r,i[e++]=n>>18|240,i[e++]=n>>12&63|128,i[e++]=n>>6&63|128,i[e++]=n&63|128):(i[e++]=n>>12|224,i[e++]=n>>6&63|128,i[e++]=n&63|128);return i}var Js="./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),Bn=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,54,55,56,57,58,59,60,61,62,63,-1,-1,-1,-1,-1,-1,-1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,-1,-1,-1,-1,-1,-1,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,-1,-1,-1,-1,-1];function ca(t,e){var n=0,s=[],i,r;if(e<=0||e>t.length)throw Error("Illegal len: "+e);for(;n<e;){if(i=t[n++]&255,s.push(Js[i>>2&63]),i=(i&3)<<4,n>=e){s.push(Js[i&63]);break}if(r=t[n++]&255,i|=r>>4&15,s.push(Js[i&63]),i=(r&15)<<2,n>=e){s.push(Js[i&63]);break}r=t[n++]&255,i|=r>>6&3,s.push(Js[i&63]),s.push(Js[r&63])}return s.join("")}function X_(t,e){var n=0,s=t.length,i=0,r=[],o,a,l,c,u,f;if(e<=0)throw Error("Illegal len: "+e);for(;n<s-1&&i<e&&(f=t.charCodeAt(n++),o=f<Bn.length?Bn[f]:-1,f=t.charCodeAt(n++),a=f<Bn.length?Bn[f]:-1,!(o==-1||a==-1||(u=o<<2>>>0,u|=(a&48)>>4,r.push(String.fromCharCode(u)),++i>=e||n>=s)||(f=t.charCodeAt(n++),l=f<Bn.length?Bn[f]:-1,l==-1)||(u=(a&15)<<4>>>0,u|=(l&60)>>2,r.push(String.fromCharCode(u)),++i>=e||n>=s)));)f=t.charCodeAt(n++),c=f<Bn.length?Bn[f]:-1,u=(l&3)<<6>>>0,u|=c,r.push(String.fromCharCode(u)),++i;var d=[];for(n=0;n<i;n++)d.push(r[n].charCodeAt(0));return d}var Fr=16,bf=10,c3=16,u3=100,fp=[608135816,2242054355,320440878,57701188,2752067618,698298832,137296536,3964562569,1160258022,953160567,3193202383,887688300,3232508343,3380367581,1065670069,3041331479,2450970073,2306472731],dp=[3509652390,2564797868,805139163,3491422135,3101798381,1780907670,3128725573,4046225305,614570311,3012652279,134345442,2240740374,1667834072,1901547113,2757295779,4103290238,227898511,1921955416,1904987480,2182433518,2069144605,3260701109,2620446009,720527379,3318853667,677414384,3393288472,3101374703,2390351024,1614419982,1822297739,2954791486,3608508353,3174124327,2024746970,1432378464,3864339955,2857741204,1464375394,1676153920,1439316330,715854006,3033291828,289532110,2706671279,2087905683,3018724369,1668267050,732546397,1947742710,3462151702,2609353502,2950085171,1814351708,2050118529,680887927,999245976,1800124847,3300911131,1713906067,1641548236,4213287313,1216130144,1575780402,4018429277,3917837745,3693486850,3949271944,596196993,3549867205,258830323,2213823033,772490370,2760122372,1774776394,2652871518,566650946,4142492826,1728879713,2882767088,1783734482,3629395816,2517608232,2874225571,1861159788,326777828,3124490320,2130389656,2716951837,967770486,1724537150,2185432712,2364442137,1164943284,2105845187,998989502,3765401048,2244026483,1075463327,1455516326,1322494562,910128902,469688178,1117454909,936433444,3490320968,3675253459,1240580251,122909385,2157517691,634681816,4142456567,3825094682,3061402683,2540495037,79693498,3249098678,1084186820,1583128258,426386531,1761308591,1047286709,322548459,995290223,1845252383,2603652396,3431023940,2942221577,3202600964,3727903485,1712269319,422464435,3234572375,1170764815,3523960633,3117677531,1434042557,442511882,3600875718,1076654713,1738483198,4213154764,2393238008,3677496056,1014306527,4251020053,793779912,2902807211,842905082,4246964064,1395751752,1040244610,2656851899,3396308128,445077038,3742853595,3577915638,679411651,2892444358,2354009459,1767581616,3150600392,3791627101,3102740896,284835224,4246832056,1258075500,768725851,2589189241,3069724005,3532540348,1274779536,3789419226,2764799539,1660621633,3471099624,4011903706,913787905,3497959166,737222580,2514213453,2928710040,3937242737,1804850592,3499020752,2949064160,2386320175,2390070455,2415321851,4061277028,2290661394,2416832540,1336762016,1754252060,3520065937,3014181293,791618072,3188594551,3933548030,2332172193,3852520463,3043980520,413987798,3465142937,3030929376,4245938359,2093235073,3534596313,375366246,2157278981,2479649556,555357303,3870105701,2008414854,3344188149,4221384143,3956125452,2067696032,3594591187,2921233993,2428461,544322398,577241275,1471733935,610547355,4027169054,1432588573,1507829418,2025931657,3646575487,545086370,48609733,2200306550,1653985193,298326376,1316178497,3007786442,2064951626,458293330,2589141269,3591329599,3164325604,727753846,2179363840,146436021,1461446943,4069977195,705550613,3059967265,3887724982,4281599278,3313849956,1404054877,2845806497,146425753,1854211946,1266315497,3048417604,3681880366,3289982499,290971e4,1235738493,2632868024,2414719590,3970600049,1771706367,1449415276,3266420449,422970021,1963543593,2690192192,3826793022,1062508698,1531092325,1804592342,2583117782,2714934279,4024971509,1294809318,4028980673,1289560198,2221992742,1669523910,35572830,157838143,1052438473,1016535060,1802137761,1753167236,1386275462,3080475397,2857371447,1040679964,2145300060,2390574316,1461121720,2956646967,4031777805,4028374788,33600511,2920084762,1018524850,629373528,3691585981,3515945977,2091462646,2486323059,586499841,988145025,935516892,3367335476,2599673255,2839830854,265290510,3972581182,2759138881,3795373465,1005194799,847297441,406762289,1314163512,1332590856,1866599683,4127851711,750260880,613907577,1450815602,3165620655,3734664991,3650291728,3012275730,3704569646,1427272223,778793252,1343938022,2676280711,2052605720,1946737175,3164576444,3914038668,3967478842,3682934266,1661551462,3294938066,4011595847,840292616,3712170807,616741398,312560963,711312465,1351876610,322626781,1910503582,271666773,2175563734,1594956187,70604529,3617834859,1007753275,1495573769,4069517037,2549218298,2663038764,504708206,2263041392,3941167025,2249088522,1514023603,1998579484,1312622330,694541497,2582060303,2151582166,1382467621,776784248,2618340202,3323268794,2497899128,2784771155,503983604,4076293799,907881277,423175695,432175456,1378068232,4145222326,3954048622,3938656102,3820766613,2793130115,2977904593,26017576,3274890735,3194772133,1700274565,1756076034,4006520079,3677328699,720338349,1533947780,354530856,688349552,3973924725,1637815568,332179504,3949051286,53804574,2852348879,3044236432,1282449977,3583942155,3416972820,4006381244,1617046695,2628476075,3002303598,1686838959,431878346,2686675385,1700445008,1080580658,1009431731,832498133,3223435511,2605976345,2271191193,2516031870,1648197032,4164389018,2548247927,300782431,375919233,238389289,3353747414,2531188641,2019080857,1475708069,455242339,2609103871,448939670,3451063019,1395535956,2413381860,1841049896,1491858159,885456874,4264095073,4001119347,1565136089,3898914787,1108368660,540939232,1173283510,2745871338,3681308437,4207628240,3343053890,4016749493,1699691293,1103962373,3625875870,2256883143,3830138730,1031889488,3479347698,1535977030,4236805024,3251091107,2132092099,1774941330,1199868427,1452454533,157007616,2904115357,342012276,595725824,1480756522,206960106,497939518,591360097,863170706,2375253569,3596610801,1814182875,2094937945,3421402208,1082520231,3463918190,2785509508,435703966,3908032597,1641649973,2842273706,3305899714,1510255612,2148256476,2655287854,3276092548,4258621189,236887753,3681803219,274041037,1734335097,3815195456,3317970021,1899903192,1026095262,4050517792,356393447,2410691914,3873677099,3682840055,3913112168,2491498743,4132185628,2489919796,1091903735,1979897079,3170134830,3567386728,3557303409,857797738,1136121015,1342202287,507115054,2535736646,337727348,3213592640,1301675037,2528481711,1895095763,1721773893,3216771564,62756741,2142006736,835421444,2531993523,1442658625,3659876326,2882144922,676362277,1392781812,170690266,3921047035,1759253602,3611846912,1745797284,664899054,1329594018,3901205900,3045908486,2062866102,2865634940,3543621612,3464012697,1080764994,553557557,3656615353,3996768171,991055499,499776247,1265440854,648242737,3940784050,980351604,3713745714,1749149687,3396870395,4211799374,3640570775,1161844396,3125318951,1431517754,545492359,4268468663,3499529547,1437099964,2702547544,3433638243,2581715763,2787789398,1060185593,1593081372,2418618748,4260947970,69676912,2159744348,86519011,2512459080,3838209314,1220612927,3339683548,133810670,1090789135,1078426020,1569222167,845107691,3583754449,4072456591,1091646820,628848692,1613405280,3757631651,526609435,236106946,48312990,2942717905,3402727701,1797494240,859738849,992217954,4005476642,2243076622,3870952857,3732016268,765654824,3490871365,2511836413,1685915746,3888969200,1414112111,2273134842,3281911079,4080962846,172450625,2569994100,980381355,4109958455,2819808352,2716589560,2568741196,3681446669,3329971472,1835478071,660984891,3704678404,4045999559,3422617507,3040415634,1762651403,1719377915,3470491036,2693910283,3642056355,3138596744,1364962596,2073328063,1983633131,926494387,3423689081,2150032023,4096667949,1749200295,3328846651,309677260,2016342300,1779581495,3079819751,111262694,1274766160,443224088,298511866,1025883608,3806446537,1145181785,168956806,3641502830,3584813610,1689216846,3666258015,3200248200,1692713982,2646376535,4042768518,1618508792,1610833997,3523052358,4130873264,2001055236,3610705100,2202168115,4028541809,2961195399,1006657119,2006996926,3186142756,1430667929,3210227297,1314452623,4074634658,4101304120,2273951170,1399257539,3367210612,3027628629,1190975929,2062231137,2333990788,2221543033,2438960610,1181637006,548689776,2362791313,3372408396,3104550113,3145860560,296247880,1970579870,3078560182,3769228297,1714227617,3291629107,3898220290,166772364,1251581989,493813264,448347421,195405023,2709975567,677966185,3703036547,1463355134,2715995803,1338867538,1343315457,2802222074,2684532164,233230375,2599980071,2000651841,3277868038,1638401717,4028070440,3237316320,6314154,819756386,300326615,590932579,1405279636,3267499572,3150704214,2428286686,3959192993,3461946742,1862657033,1266418056,963775037,2089974820,2263052895,1917689273,448879540,3550394620,3981727096,150775221,3627908307,1303187396,508620638,2975983352,2726630617,1817252668,1876281319,1457606340,908771278,3720792119,3617206836,2455994898,1729034894,1080033504,976866871,3556439503,2881648439,1522871579,1555064734,1336096578,3548522304,2579274686,3574697629,3205460757,3593280638,3338716283,3079412587,564236357,2993598910,1781952180,1464380207,3163844217,3332601554,1699332808,1393555694,1183702653,3581086237,1288719814,691649499,2847557200,2895455976,3193889540,2717570544,1781354906,1676643554,2592534050,3230253752,1126444790,2770207658,2633158820,2210423226,2615765581,2414155088,3127139286,673620729,2805611233,1269405062,4015350505,3341807571,4149409754,1057255273,2012875353,2162469141,2276492801,2601117357,993977747,3918593370,2654263191,753973209,36408145,2530585658,25011837,3520020182,2088578344,530523599,2918365339,1524020338,1518925132,3760827505,3759777254,1202760957,3985898139,3906192525,674977740,4174734889,2031300136,2019492241,3983892565,4153806404,3822280332,352677332,2297720250,60907813,90501309,3286998549,1016092578,2535922412,2839152426,457141659,509813237,4120667899,652014361,1966332200,2975202805,55981186,2327461051,676427537,3255491064,2882294119,3433927263,1307055953,942726286,933058658,2468411793,3933900994,4215176142,1361170020,2001714738,2830558078,3274259782,1222529897,1679025792,2729314320,3714953764,1770335741,151462246,3013232138,1682292957,1483529935,471910574,1539241949,458788160,3436315007,1807016891,3718408830,978976581,1043663428,3165965781,1927990952,4200891579,2372276910,3208408903,3533431907,1412390302,2931980059,4132332400,1947078029,3881505623,4168226417,2941484381,1077988104,1320477388,886195818,18198404,3786409e3,2509781533,112762804,3463356488,1866414978,891333506,18488651,661792760,1628790961,3885187036,3141171499,876946877,2693282273,1372485963,791857591,2686433993,3759982718,3167212022,3472953795,2716379847,445679433,3561995674,3504004811,3574258232,54117162,3331405415,2381918588,3769707343,4154350007,1140177722,4074052095,668550556,3214352940,367459370,261225585,2610173221,4209349473,3468074219,3265815641,314222801,3066103646,3808782860,282218597,3406013506,3773591054,379116347,1285071038,846784868,2669647154,3771962079,3550491691,2305946142,453669953,1268987020,3317592352,3279303384,3744833421,2610507566,3859509063,266596637,3847019092,517658769,3462560207,3443424879,370717030,4247526661,2224018117,4143653529,4112773975,2788324899,2477274417,1456262402,2901442914,1517677493,1846949527,2295493580,3734397586,2176403920,1280348187,1908823572,3871786941,846861322,1172426758,3287448474,3383383037,1655181056,3139813346,901632758,1897031941,2986607138,3066810236,3447102507,1393639104,373351379,950779232,625454576,3124240540,4148612726,2007998917,544563296,2244738638,2330496472,2058025392,1291430526,424198748,50039436,29584100,3605783033,2429876329,2791104160,1057563949,3255363231,3075367218,3463963227,1469046755,985887462],J_=[1332899944,1700884034,1701343084,1684370003,1668446532,1869963892];function $r(t,e,n,s){var i,r=t[e],o=t[e+1];return r^=n[0],i=s[r>>>24],i+=s[256|r>>16&255],i^=s[512|r>>8&255],i+=s[768|r&255],o^=i^n[1],i=s[o>>>24],i+=s[256|o>>16&255],i^=s[512|o>>8&255],i+=s[768|o&255],r^=i^n[2],i=s[r>>>24],i+=s[256|r>>16&255],i^=s[512|r>>8&255],i+=s[768|r&255],o^=i^n[3],i=s[o>>>24],i+=s[256|o>>16&255],i^=s[512|o>>8&255],i+=s[768|o&255],r^=i^n[4],i=s[r>>>24],i+=s[256|r>>16&255],i^=s[512|r>>8&255],i+=s[768|r&255],o^=i^n[5],i=s[o>>>24],i+=s[256|o>>16&255],i^=s[512|o>>8&255],i+=s[768|o&255],r^=i^n[6],i=s[r>>>24],i+=s[256|r>>16&255],i^=s[512|r>>8&255],i+=s[768|r&255],o^=i^n[7],i=s[o>>>24],i+=s[256|o>>16&255],i^=s[512|o>>8&255],i+=s[768|o&255],r^=i^n[8],i=s[r>>>24],i+=s[256|r>>16&255],i^=s[512|r>>8&255],i+=s[768|r&255],o^=i^n[9],i=s[o>>>24],i+=s[256|o>>16&255],i^=s[512|o>>8&255],i+=s[768|o&255],r^=i^n[10],i=s[r>>>24],i+=s[256|r>>16&255],i^=s[512|r>>8&255],i+=s[768|r&255],o^=i^n[11],i=s[o>>>24],i+=s[256|o>>16&255],i^=s[512|o>>8&255],i+=s[768|o&255],r^=i^n[12],i=s[r>>>24],i+=s[256|r>>16&255],i^=s[512|r>>8&255],i+=s[768|r&255],o^=i^n[13],i=s[o>>>24],i+=s[256|o>>16&255],i^=s[512|o>>8&255],i+=s[768|o&255],r^=i^n[14],i=s[r>>>24],i+=s[256|r>>16&255],i^=s[512|r>>8&255],i+=s[768|r&255],o^=i^n[15],i=s[o>>>24],i+=s[256|o>>16&255],i^=s[512|o>>8&255],i+=s[768|o&255],r^=i^n[16],t[e]=o^n[c3+1],t[e+1]=r,t}function ti(t,e){for(var n=0,s=0;n<4;++n)s=s<<8|t[e]&255,e=(e+1)%t.length;return{key:s,offp:e}}function hp(t,e,n){for(var s=0,i=[0,0],r=e.length,o=n.length,a,l=0;l<r;l++)a=ti(t,s),s=a.offp,e[l]=e[l]^a.key;for(l=0;l<r;l+=2)i=$r(i,0,e,n),e[l]=i[0],e[l+1]=i[1];for(l=0;l<o;l+=2)i=$r(i,0,e,n),n[l]=i[0],n[l+1]=i[1]}function f3(t,e,n,s){for(var i=0,r=[0,0],o=n.length,a=s.length,l,c=0;c<o;c++)l=ti(e,i),i=l.offp,n[c]=n[c]^l.key;for(i=0,c=0;c<o;c+=2)l=ti(t,i),i=l.offp,r[0]^=l.key,l=ti(t,i),i=l.offp,r[1]^=l.key,r=$r(r,0,n,s),n[c]=r[0],n[c+1]=r[1];for(c=0;c<a;c+=2)l=ti(t,i),i=l.offp,r[0]^=l.key,l=ti(t,i),i=l.offp,r[1]^=l.key,r=$r(r,0,n,s),s[c]=r[0],s[c+1]=r[1]}function pp(t,e,n,s,i){var r=J_.slice(),o=r.length,a;if(n<4||n>31)if(a=Error("Illegal number of rounds (4-31): "+n),s){Lt(s.bind(this,a));return}else throw a;if(e.length!==Fr)if(a=Error("Illegal salt length: "+e.length+" != "+Fr),s){Lt(s.bind(this,a));return}else throw a;n=1<<n>>>0;var l,c,u=0,f;typeof Int32Array=="function"?(l=new Int32Array(fp),c=new Int32Array(dp)):(l=fp.slice(),c=dp.slice()),f3(e,t,l,c);function d(){if(i&&i(u/n),u<n)for(var y=Date.now();u<n&&(u=u+1,hp(t,l,c),hp(e,l,c),!(Date.now()-y>u3)););else{for(u=0;u<64;u++)for(f=0;f<o>>1;f++)$r(r,f<<1,l,c);var _=[];for(u=0;u<o;u++)_.push((r[u]>>24&255)>>>0),_.push((r[u]>>16&255)>>>0),_.push((r[u]>>8&255)>>>0),_.push((r[u]&255)>>>0);if(s){s(null,_);return}else return _}s&&Lt(d)}if(typeof s<"u")d();else for(var p;;)if(typeof(p=d())<"u")return p||[]}function $c(t,e,n,s){var i;if(typeof t!="string"||typeof e!="string")if(i=Error("Invalid string / salt: Not a string"),n){Lt(n.bind(this,i));return}else throw i;var r,o;if(e.charAt(0)!=="$"||e.charAt(1)!=="2")if(i=Error("Invalid salt version: "+e.substring(0,2)),n){Lt(n.bind(this,i));return}else throw i;if(e.charAt(2)==="$")r="\0",o=3;else{if(r=e.charAt(2),r!=="a"&&r!=="b"&&r!=="y"||e.charAt(3)!=="$")if(i=Error("Invalid salt revision: "+e.substring(2,4)),n){Lt(n.bind(this,i));return}else throw i;o=4}if(e.charAt(o+2)>"$")if(i=Error("Missing salt rounds"),n){Lt(n.bind(this,i));return}else throw i;var a=parseInt(e.substring(o,o+1),10)*10,l=parseInt(e.substring(o+1,o+2),10),c=a+l,u=e.substring(o+3,o+25);t+=r>="a"?"\0":"";var f=l3(t),d=X_(u,Fr);function p(y){var _=[];return _.push("$2"),r>="a"&&_.push(r),_.push("$"),c<10&&_.push("0"),_.push(c.toString()),_.push("$"),_.push(ca(d,d.length)),_.push(ca(y,J_.length*4-1)),_.join("")}if(typeof n>"u")return p(pp(f,d,c));pp(f,d,c,function(y,_){y?n(y,null):n(null,p(_))},s)}function d3(t,e){return ca(t,e)}function h3(t,e){return X_(t,e)}const mp={setRandomFallback:n3,genSaltSync:yf,genSalt:G_,hashSync:K_,hash:q_,compareSync:s3,compare:i3,getRounds:r3,getSalt:o3,truncates:a3,encodeBase64:d3,decodeBase64:h3},ln=_s("login",()=>{const t=yu(),e=oe(""),n=oe(""),s=oe(""),i=oe(""),r=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,o=oe([]),a=oe(null),l=Gs(),c=async()=>{try{const E=await Nt(fe(de,"users"));if(E.exists()){const L=E.val();o.value=Object.entries(L).map(([P,U])=>({firebaseId:P,...U}))}}catch(E){console.error("❌ Lỗi khi lấy dữ liệu users:",E)}},u=async E=>{const L=Date.now().toString(),P=navigator.userAgent;return await qn(fe(de,`users/${E}/sessions/${L}`),{device:P,lastLogin:new Date().toISOString()}),L},f=async()=>{if(!e.value.trim()||!n.value.trim()){v("Vui lòng nhập tài khoản / mật khẩu");return}if(!r.test(e.value)){v("Email không hợp lệ");return}const E=o.value.find(P=>P.email===e.value.trim());if(!E){v("Tài khoản không tồn tại");return}if(!await mp.compare(n.value.trim(),E.passwordHash)){v("Sai mật khẩu");return}v("Đăng nhập thành công");try{const P=await u(E.firebaseId);localStorage.setItem("sessionId",P),localStorage.setItem("userId",E.firebaseId),a.value=E,await t.push(E.role==="admin"?"/admin/danh-muc":"/")}catch(P){console.error("Lỗi khi lưu session:",P),v("Lỗi khi đăng nhập, vui lòng thử lại")}},d=async()=>{const E=localStorage.getItem("sessionId"),L=localStorage.getItem("userId");if(!E||!L){a.value=null;return}try{if((await Nt(fe(de,`users/${L}/sessions/${E}`))).exists()){const U=await Nt(fe(de,`users/${L}`));U.exists()?a.value={firebaseId:L,...U.val()}:(localStorage.removeItem("sessionId"),localStorage.removeItem("userId"),a.value=null)}else localStorage.removeItem("sessionId"),localStorage.removeItem("userId"),a.value=null}catch(P){console.error("Lỗi khi kiểm tra session:",P)}},p=async()=>{if(!e.value.trim()){v("Vui lòng nhập email");return}if(!r.test(e.value)){v("Email không hợp lệ");return}if(!n.value.trim()||!s.value.trim()){v("Vui lòng nhập mật khẩu và xác nhận mật khẩu");return}if(n.value.length<6){v("Mật khẩu phải có ít nhất 6 ký tự");return}if(n.value!==s.value){v("Vui lòng nhập trùng mật khẩu");return}try{const E=await Nt(fe(de,"users"));if(E.exists()){const U=E.val();if(Object.values(U).some(B=>B.email===e.value.trim())){v("Tài khoản đã tồn tại");return}}const L=await mp.hash(n.value.trim(),10),P={email:e.value.trim(),passwordHash:L,role:"user",sessions:{},favorites:[]};await Ti(fe(de,"users"),P),v("Đăng ký thành công"),await c()}catch(E){console.error("Lỗi khi đăng ký:",E),v("Lỗi khi đăng ký, vui lòng thử lại")}},y=async()=>{const E=localStorage.getItem("sessionId"),L=localStorage.getItem("userId");if(E&&L)try{await qn(fe(de,`users/${L}/sessions/${E}`),null),localStorage.removeItem("sessionId"),localStorage.removeItem("userId"),a.value=null,await t.push("/")}catch(P){console.error("Lỗi khi đăng xuất:",P)}},_=async()=>{const E=localStorage.getItem("userId");if(E)try{await qn(fe(de,`users/${E}/sessions`),{}),localStorage.removeItem("sessionId"),localStorage.removeItem("userId"),a.value=null,await t.push("/")}catch(L){console.error("Lỗi khi đăng xuất tất cả thiết bị:",L)}};let w=null;const v=E=>{i.value=E,w&&clearTimeout(w),w=setTimeout(()=>{i.value=""},1e3)},b=async E=>{var P,U;if(!a.value){v("Vui lòng đăng nhập để thêm vào yêu thích!");return}const L=localStorage.getItem("userId");if(L)try{let re=a.value.favorites||[];const B=re.includes(E);await yt(fe(de,`users/${L}`),{favorites:B?re.filter(be=>be!==E):[...re,E]}),await yt(fe(de,`movies/${E}`),{favorite:B?Math.max(0,(((P=l.movies.find(be=>be.firebaseId===E))==null?void 0:P.favorite)||0)-1):(((U=l.movies.find(be=>be.firebaseId===E))==null?void 0:U.favorite)||0)+1}),B?a.value.favorites=re.filter(be=>be!==E):a.value.favorites.push(E);const ue=l.movies.find(be=>be.firebaseId===E);ue&&(ue.favorite=B?ue.favorite-1:ue.favorite+1)}catch(re){console.error("Lỗi khi cập nhật danh sách yêu thích:",re),v("Đã xảy ra lỗi, vui lòng thử lại")}};return Pt(()=>{c(),d()}),{fetchUsers:c,getUserAvatar:E=>{const L=o.value.find(P=>P.firebaseId==E);return L==null?void 0:L.avatarUrl},getUserName:E=>{const L=o.value.find(P=>P.firebaseId==E);return L==null?void 0:L.name},user:o,currentUser:a,checkLogin:f,checkRegister:p,emailValue:e,passValue:n,checkPassValue:s,alert:i,logout:y,logoutAllDevices:_,toggleFavorite:b,googleSignIn:async()=>{const E=Lc(),L=new vn;try{const U=(await sp(E,L)).user;(await Nt(fe(de,`users/${U.uid}`))).exists()||await qn(fe(de,`users/${U.uid}`),{email:U.email,name:U.displayName,avatarUrl:U.photoURL||"",role:"user",sessions:{},favorites:[]});const B=await u(U.uid);localStorage.setItem("sessionId",B),localStorage.setItem("userId",U.uid),a.value={firebaseId:U.uid,email:U.email,name:U.displayName,avatarUrl:U.photoURL||""},v("Đăng nhập thành công"),await t.push("/")}catch(P){console.error("Lỗi khi đăng nhập Google:",P),v("Đăng nhập Google thất bại")}},facebookSignIn:async()=>{const E=Lc(),L=new _n;try{const U=(await sp(E,L)).user;(await Nt(fe(de,`users/${U.uid}`))).exists()||await qn(fe(de,`users/${U.uid}`),{email:U.email,name:U.displayName,avatarUrl:U.photoURL||"",role:"user",sessions:{},favorites:[]});const B=await u(U.uid);localStorage.setItem("sessionId",B),localStorage.setItem("userId",U.uid),a.value={firebaseId:U.uid,email:U.email,name:U.displayName,avatarUrl:U.photoURL||""},v("Đăng nhập Facebook thành công"),await t.push("/")}catch(P){console.error("Lỗi khi đăng nhập Facebook:",P),v("Đăng nhập Facebook thất bại")}}}}),Gs=_s("Movie",()=>{const t=oe([]),e=jt(),n=ln(),s=async()=>{try{e.loading=!0;const _=await Nt(fe(de,"movies"));_.exists()&&(t.value=Object.entries(_.val()).map(([w,v])=>({...v,firebaseId:w})).sort((w,v)=>v.timestamp-w.timestamp))}catch(_){console.error("Lỗi khi lấy dữ liệu:",_)}finally{e.loading=!1}},i=async(_,w,v,b,R)=>{try{const O=Ti(fe(de,"movies")),G={name:_,genre:w,description:v,favorite:0,image:b,day:R,timestamp:Date.now()};await yt(O,G),t.value.unshift({...G,firebaseId:O.key})}catch(O){console.error("Lỗi khi thêm phim:",O)}},r=async(_,w)=>{try{if(!(await Nt(fe(de,`movies/${_}`))).exists())return;await yt(fe(de,`movies/${_}`),w);const b=t.value.findIndex(R=>R.firebaseId===_);b!==-1&&(t.value[b]={...t.value[b],...w})}catch(v){console.error("Lỗi khi cập nhật phim:",v)}},o=async _=>{try{await fi(fe(de,`movies/${_}`)),t.value=t.value.filter(w=>w.firebaseId!==_)}catch(w){console.error("Lỗi khi xóa phim:",w)}},a=async(_,w,v)=>{try{const b=fe(de,`movies/${_}/chapters/${w}`);await yt(b,{url:v});const R=fe(de,`movies/${_}`),O=await Nt(R);if(O.exists()){const G=O.val();await yt(R,{...G,timestamp:Date.now()}),s()}}catch(b){console.error("Lỗi khi thêm tập:",b)}},l=async()=>{if(!selectedMovie.value||newChap.value.tap===""||!newChap.value.url.trim()){alert("Vui lòng nhập đầy đủ thông tin!");return}await movieStore.addChapToMovie(selectedMovie.value.firebaseId,newChap.value.tap,newChap.value.url),newChap.value={tap:Number(newChap.value.tap)+1,url:""}},c=async(_,w,v)=>{try{const b=fe(de,`movies/${_}/chapters/${w}`);await yt(b,{url:v});const R=t.value.find(O=>O.firebaseId===_);R&&(R.chapters[w].url=v)}catch(b){console.error("Lỗi khi cập nhật tập:",b)}},u=async(_,w)=>{try{await fi(fe(de,`movies/${_}/chapters/${w}`));const v=t.value.find(b=>b.firebaseId===_);v&&delete v.chapters[w]}catch(v){console.error("Lỗi khi xóa tập:",v)}},f=le(()=>!n.currentUser||!n.currentUser.favorites?[]:t.value.filter(_=>n.currentUser.favorites.includes(_.firebaseId))),d=le(()=>(t.value||[]).filter(_=>_.favorite>0).sort((_,w)=>w.favorite-_.favorite));return{movies:t,filterFavorite:f,filterBestFavorite:d,fetchMovies:s,addMovie:i,updateMovie:r,deleteMovie:o,addChapToMovie:a,addNewChap:l,updateChapInMovie:c,deleteChap:u,addComment:async(_,w,v)=>{try{const b=Ti(fe(de,`movies/${_}/comments`)),R={userId:w,content:v,timestamp:Date.now()};await yt(b,R)}catch(b){console.error("Lỗi khi thêm bình luận:",b)}},deleteComment:async(_,w)=>{try{await fi(fe(de,`movies/${_}/comments/${w}`))}catch(v){console.error("Lỗi khi xóa bình luận:",v)}}}}),xf=_s("DanhMuc",()=>{const t=oe([]),e=oe("");return{danhMucs:t,fetchDanhMucs:async()=>{try{const o=await Nt(fe(de,"categories"));if(o.exists()){const a=o.val();t.value=Object.keys(a).map(l=>{var c;return{id:l,name:typeof a[l]=="string"?a[l]:((c=a[l])==null?void 0:c.name)||"Chưa đặt tên"}})}else t.value=[]}catch(o){console.error("Lỗi khi lấy dữ liệu danh mục:",o)}},addDanhMuc:async o=>{if(o.trim())try{const a=Ti(fe(de,"categories"));await qn(a,{name:o}),t.value.push({id:a.key,name:o}),t.value.sort((l,c)=>l.name.localeCompare(c.name)),e.value=""}catch(a){console.error("Lỗi khi thêm danh mục:",a)}},updateDanhMuc:async(o,a)=>{if(a.trim())try{await yt(fe(de,`categories/${o}`),{name:a});const l=t.value.findIndex(c=>c.id===o);l!==-1&&(t.value[l].name=a,t.value.sort((c,u)=>c.name.localeCompare(u.name)))}catch(l){console.error("Lỗi khi cập nhật danh mục:",l)}},deleteDanhMuc:async o=>{try{await fi(fe(de,`categories/${o}`)),t.value=t.value.filter(a=>a.id!==o)}catch(a){console.error("Lỗi khi xóa danh mục:",a)}},nameValue:e}}),Ht=_s("product",()=>{const t=bu(),e=oe(""),n=xf();n.fetchDanhMucs();const s=le(()=>n.danhMucs),i=Gs();i.fetchMovies();const r=le(()=>i.movies),o=q=>r.value.find(E=>E.name===q),a=q=>s.value.find(E=>E.name==q),l=(q,E)=>chap.value.find(L=>L.name===q&&L.tap==E),c=q=>chap.value.filter(E=>E.name===q).sort((E,L)=>L.tap-E.tap),u=le(()=>a(t.params.name)||{}),f=le(()=>o(t.params.name)||{}),d=le(()=>f.value.chapters?Object.entries(f.value.chapters):[]),p=le(()=>d.value.length?Math.max(...d.value.map(([q])=>Number(q)||0)):"0"),y=le(()=>{var E;const q=Number(t.params.id);return isNaN(q)?null:((E=f.value.chapters)==null?void 0:E[q])||null}),_=q=>{const E=o(q);if(!E||!E.chapters)return"Sắp ra mắt";const L=Object.keys(E.chapters).map(Number),P=L.length?Math.max(...L):"Sắp ra mắt";return P=="0"?"Tập Full":"Tập "+P},w=le(()=>r.value.filter(q=>q.genre.toLowerCase()==u.value.name.toLowerCase())),v=q=>{e.value=q,Uc.push({name:"SearchResults",query:{timKiem:e.value}})},b=le(()=>{const q=e.value.trim().toLowerCase();return q?r.value.filter(E=>E.name.toLowerCase().includes(q)):[]}),R=new Date().getDay(),O=le(()=>r.value.filter(q=>q.day==R));return{products:r,txtSearch:e,handleSearch:v,filterProduct:b,detailProduct:o,danhMuc:s,danhMucChoose:a,getDanhMuc:u,filterDanhMuc:w,getDetail:f,numberChap:c,getChaps:d,maxChap:p,getMaxChap:_,getChap:l,chapChoose:y,getCartoonDay:O,fetchData:async q=>{r.value.find(L=>L.name===q)||Uc.push({name:"404"})}}}),p3={class:"header-container"},m3={class:"logo"},g3={class:"search"},_3={class:"container-input"},v3={class:"login"},y3={class:"hamburger"},b3={class:"menu-sign"},x3={__name:"HeaderView",setup(t){const e=oe(""),n=Ht(),s=ln(),i=oe(!1);return(r,o)=>{const a=rn("RouterLink");return C(),S("div",p3,[h("div",m3,[$(a,{to:"/"},{default:Le(()=>o[5]||(o[5]=[h("img",{src:Lg},null,-1)])),_:1})]),h("div",g3,[h("div",_3,[Ae(h("input",{type:"text",placeholder:"Nhập tên phim cần tìm...","onUpdate:modelValue":o[0]||(o[0]=l=>e.value=l),name:"text",class:"input",onKeyup:o[1]||(o[1]=wr(l=>I(n).handleSearch(l.target.value.trim()),["enter"]))},null,544),[[He,e.value]]),(C(),S("svg",{onClick:o[2]||(o[2]=l=>I(n).handleSearch(e.value)),fill:"#ffffff",width:"20px",height:"20px",viewBox:"0 0 1920 1920",xmlns:"http://www.w3.org/2000/svg"},o[6]||(o[6]=[h("path",{d:"M790.588 1468.235c-373.722 0-677.647-303.924-677.647-677.647 0-373.722 303.925-677.647 677.647-677.647 373.723 0 677.647 303.925 677.647 677.647 0 373.723-303.924 677.647-677.647 677.647Zm596.781-160.715c120.396-138.692 193.807-319.285 193.807-516.932C1581.176 354.748 1226.428 0 790.588 0S0 354.748 0 790.588s354.748 790.588 790.588 790.588c197.647 0 378.24-73.411 516.932-193.807l516.028 516.142 79.963-79.963-516.142-516.028Z","fill-rule":"evenodd"},null,-1)])))])]),$(a,{to:"/favorite",class:"favorite"},{default:Le(()=>o[7]||(o[7]=[h("div",null,[h("input",{type:"checkbox",checked:"checked",id:"favorite",name:"favorite-checkbox",value:"favorite-button"}),h("label",{for:"favorite",class:"container"},[h("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-heart"},[h("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})]),h("div",{class:"action"},[h("span",{class:"option-1"},"Phim yêu thích"),h("span",{class:"option-2"},"Phim yêu thích")])])],-1)])),_:1}),h("div",v3,[h("label",y3,[Ae(h("input",{type:"checkbox","onUpdate:modelValue":o[3]||(o[3]=l=>i.value=l)},null,512),[[pg,i.value]]),o[8]||(o[8]=h("svg",{viewBox:"0 0 32 32"},[h("path",{class:"line line-top-bottom",d:"M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"}),h("path",{class:"line",d:"M7 16 27 16"})],-1))]),$(gu,{name:"fade-slide"},{default:Le(()=>[Ae(h("div",b3,[I(s).currentUser?(C(),S("a",{key:1,onClick:o[4]||(o[4]=(...l)=>I(s).logout&&I(s).logout(...l))}," Đăng xuất ")):(C(),Ke(a,{key:0,to:"/login"},{default:Le(()=>o[9]||(o[9]=[Ue(" Đăng nhập ")])),_:1})),I(s).currentUser?(C(),Ke(a,{key:2,to:"/profile"},{default:Le(()=>o[10]||(o[10]=[Ue("Profile")])),_:1})):es("",!0),$(a,{to:"/chatGroup",class:"chat"},{default:Le(()=>o[11]||(o[11]=[Ue("Chat group")])),_:1})],512),[[ux,i.value]])]),_:1})])])}}},Mn=ye(x3,[["__scopeId","data-v-dd50b20b"]]),w3={},C3={class:"loader-container"};function I3(t,e){return C(),S("div",C3,e[0]||(e[0]=[h("div",{class:"loader"},null,-1)]))}const ys=ye(w3,[["render",I3],["__scopeId","data-v-35a23ea6"]]),E3={style:{"background-color":"#23232a"}},S3={class:"nav-container"},T3={class:"menu-menu"},k3={__name:"Navigation",setup(t){const e=Ht();return(n,s)=>{const i=rn("RouterLink");return C(),S("div",E3,[h("div",S3,[h("ul",T3,[(C(!0),S(ce,null,Qe(I(e).danhMuc,(r,o)=>(C(),S("li",{key:o},[$(i,{to:"/danhMuc/"+r.name+"/"+r.id},{default:Le(()=>[Ue(Z(r.name),1)]),_:2},1032,["to"])]))),128))])])])}}},Dn=ye(k3,[["__scopeId","data-v-2c8ddad8"]]),A3=_s("banner",()=>{const t=oe([]),e=async()=>{try{const r=await Nt(fe(de,"banner"));r.exists()&&(t.value=Object.entries(r.val()).map(([o,a])=>({...a,firebaseId:o})))}catch(r){console.error("Lỗi khi lấy dữ liệu:",r)}};return{banners:t,fetchBanners:e,addBanner:async r=>{try{const o=Ti(fe(de,"banner"));await yt(o,r),e()}catch(o){console.error("Lỗi khi thêm banner:",o)}},updateBanner:async(r,o)=>{try{await yt(fe(de,`banner/${r}`),o),e()}catch(a){console.error("Lỗi khi cập nhật banner:",a)}},deleteBanner:async r=>{try{await fi(fe(de,`banner/${r}`)),e()}catch(o){console.error("Lỗi khi xoá banner:",o)}}}}),R3={class:"banner"},P3={class:"carousel-container"},N3=["src","alt"],O3={class:"carousel-content"},M3={class:"indicators"},D3=["onClick"],L3={__name:"about",setup(t){const e=A3(),n=oe(0);let s=null;const i=()=>{n.value=(n.value+1)%e.banners.length},r=()=>{n.value=(n.value-1+e.banners.length)%e.banners.length},o=l=>{n.value=l},a=()=>{s=setInterval(i,3e3)};return Pt(async()=>{await e.fetchBanners(),a()}),Ia(()=>{clearInterval(s)}),Ns(()=>e.banners,()=>{n.value=0}),(l,c)=>{const u=rn("RouterLink");return C(),S("div",R3,[h("div",P3,[h("div",{class:"carousel",style:ya({transform:`translateX(${-n.value*100}%)`,transition:"transform 0.8s ease"})},[(C(!0),S(ce,null,Qe(I(e).banners,f=>(C(),S("div",{key:f.firebaseId,class:"carousel-item"},[$(u,{to:"/cartoon/"+f.title},{default:Le(()=>[h("img",{src:f.image,alt:f.title},null,8,N3),h("div",O3,[h("h2",null,Z(f.title),1),h("p",null,Z(f.subtitle),1)])]),_:2},1032,["to"])]))),128))],4),h("button",{class:"prev",onClick:r},"❮"),h("button",{class:"next",onClick:i},"❯"),h("div",M3,[(C(!0),S(ce,null,Qe(I(e).banners,(f,d)=>(C(),S("span",{key:f.firebaseId,class:Cn({active:d===n.value}),onClick:p=>o(d)},null,10,D3))),128))])])])}}},F3=ye(L3,[["__scopeId","data-v-73fdd8fa"]]),$3={class:"product-main"},U3=["src"],V3={class:"tap"},B3={class:"name-cartoon"},j3={__name:"cardProduct",props:{product:Array},setup(t){const e=Ht();return(n,s)=>(C(),S("div",$3,[(C(!0),S(ce,null,Qe(t.product,i=>(C(),S("div",{class:"product-product",key:i.id},[$(I(Jt),{to:"/cartoon/"+i.name},{default:Le(()=>[h("div",null,[h("img",{src:i.image,alt:"Poster"},null,8,U3),h("span",V3,Z(I(e).getMaxChap(i.name)),1),h("span",B3,Z(i.name),1)])]),_:2},1032,["to"])]))),128))]))}},no=ye(j3,[["__scopeId","data-v-ab282b6c"]]),wf=_s("day",()=>{const t=new Date,e=["Chủ Nhật","Thứ Hai","Thứ Ba","Thứ Tư","Thứ Năm","Thứ Sáu","Thứ Bảy","END"],n=["0","1","2","3","4","5","6","7"],s=le(()=>e[t.getDay()]);return{days:e,dayOfWeek:s,day:n}}),H3={class:"product-container"},W3={class:"fb-title"},z3={key:1,style:{color:"white",padding:"20px"}},G3={__name:"day",setup(t){const e=Ht(),n=wf();return(s,i)=>(C(),S("div",H3,[h("span",W3," Lịch Chiếu Hôm Nay - "+Z(I(n).dayOfWeek),1),I(e).getCartoonDay.length>0?(C(),Ke(no,{key:0,product:I(e).getCartoonDay},null,8,["product"])):(C(),S("span",z3,"Chưa có lịch chiếu phim vào hôm nay !"))]))}},K3=ye(G3,[["__scopeId","data-v-b2626ce4"]]),q3={class:"product-container"},Y3={class:"pagination"},Q3=["disabled"],X3={key:0},J3=["onClick"],Z3={key:1},ek=["disabled"],Nl=9,tk={__name:"product",setup(t){const e=Ht(),n=oe(1),s=le(()=>Math.ceil(e.products.length/Nl)),i=le(()=>Math.max(2,n.value-2)),r=le(()=>Math.min(s.value-1,n.value+2)),o=le(()=>{const f=[];for(let d=i.value;d<=r.value;d++)f.push(d);return f}),a=le(()=>{const f=(n.value-1)*Nl;return e.products.slice(f,f+Nl)}),l=f=>{n.value=f},c=()=>{n.value<s.value&&n.value++},u=()=>{n.value>1&&n.value--};return(f,d)=>(C(),S("div",q3,[d[2]||(d[2]=h("span",{class:"fb-title"},"Mới Nhất",-1)),$(gu,{name:"slide",mode:"out-in"},{default:Le(()=>[(C(),S("div",{class:"product-main",key:n.value},[$(no,{product:a.value},null,8,["product"])]))]),_:1}),h("div",Y3,[h("button",{onClick:u,disabled:n.value===1},"←",8,Q3),h("button",{onClick:d[0]||(d[0]=p=>l(1)),class:Cn({active:n.value===1})},"1",2),i.value>2?(C(),S("span",X3,"...")):es("",!0),(C(!0),S(ce,null,Qe(o.value,p=>(C(),S("button",{key:p,onClick:y=>l(p),class:Cn({active:n.value===p})},Z(p),11,J3))),128)),r.value<s.value-1?(C(),S("span",Z3,"...")):es("",!0),h("button",{onClick:d[1]||(d[1]=p=>l(s.value)),class:Cn({active:n.value===s.value})},Z(s.value),3),h("button",{onClick:c,disabled:n.value===s.value},"→",8,ek)])]))}},nk=ye(tk,[["__scopeId","data-v-708e365f"]]),sk={class:"see-container"},ik={class:"favo"},rk=["src"],ok={__name:"see",setup(t){const e=Gs();return(n,s)=>{const i=rn("RouterLink");return C(),S("div",sk,[s[0]||(s[0]=h("span",{class:"fb-title"}," Yêu thích nhất ",-1)),h("div",ik,[$(Sx,{name:"slide",tag:"div"},{default:Le(()=>[(C(!0),S(ce,null,Qe(I(e).filterBestFavorite.slice(0,5),r=>(C(),S("div",{class:"see-view",key:r.id},[$(i,{to:"/cartoon/"+r.name},{default:Le(()=>[h("div",null,[h("img",{src:r.image},null,8,rk),h("span",null,Z(r.name),1)])]),_:2},1032,["to"])]))),128))]),_:1})])])}}},Ui=ye(ok,[["__scopeId","data-v-53905e34"]]),ak={class:"mainmain"},lk={class:"main"},ck={key:1,class:"main-container"},uk={class:"main-right-container"},fk={__name:"HomeView",setup(t){const e=jt();return(n,s)=>(C(),S(ce,null,[$(Mn),$(Dn),h("div",ak,[h("div",lk,[h("main",null,[I(e).loading?(C(),Ke(ys,{key:0})):(C(),S("div",ck,[$(F3),$(nk),$(K3)]))]),h("div",uk,[$(Ui)])])]),h("footer",null,[$(Nn)])],64))}},dk=ye(fk,[["__scopeId","data-v-3e7c9dbd"]]),hk={class:"chap-container"},pk={key:0,class:"chap-content"},mk={key:1,class:"chap-content"},gk={key:2,class:"chap-content"},_k={class:"des-section"},vk={class:"toggle-btn"},yk={key:0,class:"des"},bk={__name:"Chap",setup(t){const e=Ht(),n=oe(!1),s=()=>{n.value=!n.value};return(i,r)=>(C(),S("div",hk,[r[4]||(r[4]=h("span",{class:"tit"},"Tập",-1)),I(e).getChaps.length===0?(C(),S("div",pk,[$(I(Jt),{to:"/",class:"chap"},{default:Le(()=>r[0]||(r[0]=[Ue("Chưa có tập")])),_:1})])):I(e).maxChap===0?(C(),S("div",mk,[$(I(Jt),{to:"/chap/"+I(e).getDetail.name+"/0",class:"chap"},{default:Le(()=>r[1]||(r[1]=[Ue("Tập Full")])),_:1},8,["to"])])):(C(),S("div",gk,[(C(!0),S(ce,null,Qe(I(e).getChaps.sort((o,a)=>a[0]-o[0]),o=>(C(),Ke(I(Jt),{key:o[0],to:"/chap/"+I(e).getDetail.name+"/"+o[0],class:"chap"},{default:Le(()=>[Ue(Z("Tập "+o[0]),1)]),_:2},1032,["to"]))),128))])),h("div",_k,[h("span",{class:"des-title",onClick:s},[r[2]||(r[2]=Ue(" Mô tả : ")),h("span",vk,Z(n.value?"Thu gọn":"Mở rộng"),1)]),r[3]||(r[3]=h("br",null,null,-1)),$(gu,{name:"fade"},{default:Le(()=>[n.value?(C(),S("span",yk,Z(I(e).getDetail.description||"Chưa có mô tả."),1)):es("",!0)]),_:1})])]))}},Z_=ye(bk,[["__scopeId","data-v-57e54c0a"]]),xk={class:"cmt-container"},wk={class:"head-cmt"},Ck={key:0,class:"noUserCmt"},Ik={key:1,class:"cmt-input"},Ek=["src"],Sk={class:"messageBox"},Tk={class:"cmt-content"},kk={class:"avt"},Ak=["src"],Rk={class:"cmt-item"},Pk={class:"name-cmt"},Nk={class:"cmt-ct"},Ok={__name:"CmtView",setup(t){const e=ln(),n=Gs(),s=Ht(),i=oe(""),r=oe([]),o=h_(),a=()=>{var l;i.value.trim()&&(n.addComment(s.getDetail.firebaseId,(l=e.currentUser)==null?void 0:l.firebaseId,i.value),i.value="")};return Pt(()=>{var c;if(!((c=s.getDetail)!=null&&c.firebaseId))return;const l=fe(o,`movies/${s.getDetail.firebaseId}/comments`);d_(l,u=>{const f=u.val();r.value=f?Object.entries(f).map(([d,p])=>({cmtId:d,...p})).sort((d,p)=>p.timestamp-d.timestamp):[]})}),(l,c)=>{var f;const u=rn("RouterLink");return C(),S("div",xk,[h("div",wk,[c[4]||(c[4]=h("span",{class:"fb-title"},"comments",-1)),I(e).currentUser?(C(),S("div",Ik,[h("img",{src:(f=I(e).currentUser)==null?void 0:f.avatarUrl,alt:"avatar"},null,8,Ek),h("div",Sk,[Ae(h("input",{id:"messageInput","onUpdate:modelValue":c[0]||(c[0]=d=>i.value=d),type:"text",placeholder:"Nhập bình luận..",required:"",onKeyup:wr(a,["enter"])},null,544),[[He,i.value]]),h("button",{id:"sendButton",onClick:a},c[3]||(c[3]=[h("svg",{viewBox:"0 0 664 663",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[h("path",{d:"M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888",stroke:"#6c6c6c","stroke-width":"33.67","stroke-linecap":"round","stroke-linejoin":"round"})],-1)]))])])):(C(),S("div",Ck,[$(u,{to:"/login"},{default:Le(()=>c[1]||(c[1]=[Ue("' Đăng nhập '")])),_:1}),c[2]||(c[2]=Ue(" để bình luận ! "))]))]),h("div",Tk,[h("p",null,Z(r.value.length)+" bình luận",1),(C(!0),S(ce,null,Qe(r.value,d=>(C(),S("div",{class:"cmt",key:l.cmtId},[h("div",kk,[h("img",{src:I(e).getUserAvatar(d.userId)},null,8,Ak)]),h("div",Rk,[h("span",Pk,Z(I(e).getUserName(d.userId)),1),c[5]||(c[5]=h("br",null,null,-1)),h("span",Nk,Z(d.content),1)])]))),128))])])}}},Mk=ye(Ok,[["__scopeId","data-v-78a1a0b3"]]),Dk={class:"product-container"},Lk={class:"product-main"},Fk={class:"product-product"},$k=["src"],Uk={class:"favorite"},Vk={class:"container"},Bk=["checked"],jk={class:"countLove"},Hk={class:"product-detail-right"},Wk={class:"name-cartoon"},zk={class:"tap"},Gk={class:"danhMuc"},Kk={class:"danhMuc"},qk={__name:"ProductView",setup(t){const e=wf(),n=Ht(),s=ln(),i=le(()=>{var l,c;return(c=(l=s.currentUser)==null?void 0:l.favorites)==null?void 0:c.includes(n.getDetail.firebaseId)}),r=yu(),o=async()=>{if(!s.currentUser)return alert("Vui lòng đăng nhập để thêm vào yêu thích!"),r.push("/login");const l=n.getDetail.firebaseId;if(!l){console.error("Lỗi: Không tìm thấy firebaseId của phim!");return}await s.toggleFavorite(l),await s.checkSession()},a=bu();return Pt(()=>{n.fetchData(a.params.name)}),(l,c)=>{const u=rn("RouterLink"),f=rn("font-awesome-icon");return C(),S("div",Dk,[h("div",Lk,[h("div",Fk,[h("div",null,[h("img",{src:I(n).getDetail.image},null,8,$k),h("span",Uk,[h("label",Vk,[h("input",{type:"checkbox",checked:i.value,onClick:o},null,8,Bk),c[0]||(c[0]=h("div",{class:"checkmark"},[h("svg",{viewBox:"0 0 256 256"},[h("rect",{fill:"none",height:"256",width:"256"}),h("path",{d:"M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z","stroke-width":"20px",stroke:"#fff",fill:"none"})])],-1))])]),h("span",jk," Yêu thích: "+Z(I(n).getDetail.favorite||0)+" ❤",1),$(u,{to:"/chap/"+I(n).getDetail.name+"/"+I(n).maxChap,class:"xemPhim"},{default:Le(()=>c[1]||(c[1]=[Ue("Xem phim ")])),_:1},8,["to"])])]),h("div",Hk,[h("span",Wk,Z(I(n).getDetail.name),1),c[2]||(c[2]=h("br",null,null,-1)),h("span",zk,"Tập "+Z(I(n).maxChap==0?"Full":isFinite(I(n).maxChap)?I(n).maxChap:"chưa ra mắt"),1),c[3]||(c[3]=h("br",null,null,-1)),c[4]||(c[4]=Ue()),h("span",Gk,[$(f,{icon:["fas","clock"],class:"text-blue-500 text-2xl"}),Ue(" "+Z(I(e).days[I(n).getDetail.day]=="END"?"Đã kết thúc":I(e).days[I(n).getDetail.day]+" Hàng Tuần"),1)]),c[5]||(c[5]=h("br",null,null,-1)),h("span",Kk,"Thể loại : "+Z(I(n).getDetail.genre),1),c[6]||(c[6]=h("br",null,null,-1))])]),$(Z_),$(Mk)])}}},Yk=ye(qk,[["__scopeId","data-v-5281821a"]]),Qk={class:"mainmain"},Xk={class:"main"},Jk={class:"main-container"},Zk={class:"main-right-container"},e4={__name:"ChooseView",setup(t){const e=jt();return(n,s)=>(C(),S(ce,null,[$(Mn),$(Dn),h("div",Qk,[h("div",Xk,[h("main",null,[h("div",Jk,[I(e).loading?(C(),Ke(ys,{key:0})):(C(),Ke(Yk,{key:1}))])]),h("div",Zk,[$(Ui)])])]),h("footer",null,[$(Nn)])],64))}},t4=ye(e4,[["__scopeId","data-v-23d1c58e"]]),n4={class:"product-container"},s4={class:"fb-title"},i4={__name:"SearchProduct",setup(t){const e=Ht();return(n,s)=>(C(),S("div",n4,[h("span",s4," Bạn đã tìm kiếm : "+Z(I(e).txtSearch),1),$(no,{product:I(e).filterProduct},null,8,["product"])]))}},r4=ye(i4,[["__scopeId","data-v-4581f7db"]]),o4={class:"mainmain"},a4={class:"main"},l4={class:"main-container"},c4={class:"main-right-container"},u4={__name:"SearchView",setup(t){const e=jt();return(n,s)=>(C(),S(ce,null,[$(Mn),$(Dn),h("div",o4,[h("div",a4,[h("main",null,[h("div",l4,[I(e).loading?(C(),Ke(ys,{key:0})):(C(),Ke(r4,{key:1}))])]),h("div",c4,[$(Ui)])])]),h("footer",null,[$(Nn)])],64))}},f4=ye(u4,[["__scopeId","data-v-01e9bfb3"]]),d4={class:"product-container"},h4={class:"fb-title"},p4={__name:"danhMucView",setup(t){const e=jt(),n=Ht();return(s,i)=>(C(),S("div",d4,[h("span",h4,Z(I(n).getDanhMuc.name),1),I(e).loading?(C(),Ke(ys,{key:0})):(C(),Ke(no,{key:1,product:I(n).filterDanhMuc},null,8,["product"]))]))}},m4=ye(p4,[["__scopeId","data-v-e99d1c94"]]),g4={class:"mainmain"},_4={class:"main"},v4={class:"main-container"},y4={class:"main-right-container"},b4={__name:"danhMucView",setup(t){return(e,n)=>(C(),S(ce,null,[$(Mn),$(Dn),h("div",g4,[h("div",_4,[h("main",null,[h("div",v4,[$(m4)])]),h("div",y4,[$(Ui)])])]),h("footer",null,[$(Nn)])],64))}},x4=ye(b4,[["__scopeId","data-v-67d23c71"]]),w4={class:"video-container"},C4={key:0},I4={key:1},E4={class:"video-wrapper"},S4=["src"],T4={__name:"videoView",setup(t){const e=bu(),n=Ht();return(s,i)=>(C(),S("div",w4,[I(n).chapChoose?(C(),S("div",I4,[h("div",E4,[h("iframe",{src:I(n).chapChoose.url,class:"video-player",allowfullscreen:"",title:"Dailymotion Video Player",allow:"web-share"},null,8,S4)]),h("span",null,Z(I(e).params.name)+" - "+Z(I(e).params.id==="0"?"Full":"Tập "+I(e).params.id),1)])):(C(),S("span",C4," Tập "+Z(I(e).params.id==="0"?"Full":I(e).params.id)+' của phim "'+Z(I(e).params.name)+'" sẽ được cập nhật sớm nhất! ',1))]))}},k4=ye(T4,[["__scopeId","data-v-89d1dcbb"]]),A4={class:"mainmain"},R4={class:"main"},P4={class:"main-container"},N4={class:"main-right-container"},O4={__name:"ChapView",setup(t){return(e,n)=>(C(),S(ce,null,[$(Mn),$(Dn),h("div",A4,[h("div",R4,[h("main",null,[h("div",P4,[$(k4),$(Z_)])]),h("div",N4,[$(Ui)])])]),h("footer",null,[$(Nn)])],64))}},M4=ye(O4,[["__scopeId","data-v-4fedebe3"]]),D4=_s("chat",()=>{const t=ln(),e=oe([]),n=oe(""),s=oe(null),i=fe(de,"messages"),r=()=>{d_(i,c=>{if(c.exists()){const u=c.val();e.value=Object.keys(u).map(f=>({msgId:f,...u[f]}))}else e.value=[],console.log("⚠ Không có tin nhắn nào.")})},o=async()=>{if(!n.value.trim())return;if(!t.currentUser){alert("❌ Lỗi: Chưa có user đăng nhập!");return}if(!t.currentUser.firebaseId){console.error("❌ Lỗi: FirebaseId không tồn tại!");return}const c={senderId:t.currentUser.firebaseId,senderName:t.currentUser.name||"Ẩn danh",text:n.value,timestamp:new Date().toISOString()};try{await Ti(fe(de,"messages"),c),n.value="",l()}catch(u){console.error("❌ Lỗi khi gửi tin nhắn:",u)}},a=async c=>{try{console.log(`🗑 Đang xóa tin nhắn ID: ${c}`),await fi(fe(de,`messages/${c}`)),e.value=e.value.filter(u=>u.msgId!==c),console.log("✅ Tin nhắn đã bị xóa!")}catch(u){console.error("❌ Lỗi khi xóa tin nhắn:",u)}},l=()=>{Pi(()=>{s.value&&(s.value.scrollTop=s.value.scrollHeight)})};return Pt(r),Ia(()=>{KS(i)}),{fetchMessages:r,messages:e,messageInput:n,chatContent:s,sendMessage:o,deleteMessage:a}}),L4={class:"chat-container"},F4={class:"chat-group-container"},$4=["onClick"],U4={class:"avt"},V4=["src"],B4={class:"name-mess"},j4={class:"avt"},H4=["src"],W4={class:"messageBox"},z4={__name:"chatGroup",setup(t){const e=D4(),n=ln(),s=oe(null),i=()=>{Pi(()=>{s.value&&(s.value.scrollTop=s.value.scrollHeight)})};return Pt(e.fetchMessages),hu(()=>{i()}),(r,o)=>(C(),S("div",L4,[h("div",F4,[o[4]||(o[4]=h("h3",null,"Group Chat",-1)),h("div",{class:"chat-content",ref_key:"chatContent",ref:s},[(C(!0),S(ce,null,Qe(I(e).messages,a=>{var l,c,u,f,d;return C(),S("div",{key:a.msgId,class:Cn(["message",a.senderId===((l=I(n).currentUser)==null?void 0:l.firebaseId)?"mine":"other","new"])},[a.senderId===((c=I(n).currentUser)==null?void 0:c.firebaseId)?(C(),S("span",{key:0,onClick:p=>I(e).deleteMessage(a.msgId),class:"delete-btn"}," 🗑 ",8,$4)):es("",!0),h("div",U4,[a.senderId!==((u=I(n).currentUser)==null?void 0:u.firebaseId)?(C(),S("img",{key:0,src:I(n).getUserAvatar(a.senderId)||"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWN5C5TKjjkdbFK_9W59jVqfrzfgCFKrtc3g&s"},null,8,V4)):es("",!0)]),h("div",B4,[h("strong",null,Z(I(n).getUserName(a.senderId)||"ẩn danh"),1),h("p",null,Z(a.text),1)]),h("div",j4,[a.senderId===((f=I(n).currentUser)==null?void 0:f.firebaseId)?(C(),S("img",{key:0,src:((d=I(n).currentUser)==null?void 0:d.avatarUrl)||"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWN5C5TKjjkdbFK_9W59jVqfrzfgCFKrtc3g&s"},null,8,H4)):es("",!0)])],2)}),128))],512),h("div",W4,[Ae(h("input",{"onUpdate:modelValue":o[0]||(o[0]=a=>I(e).messageInput=a),placeholder:"Nhập tin nhắn...",type:"text",onKeyup:o[1]||(o[1]=wr((...a)=>I(e).sendMessage&&I(e).sendMessage(...a),["enter"])),id:"messageInput"},null,544),[[He,I(e).messageInput]]),h("button",{onClick:o[2]||(o[2]=(...a)=>I(e).sendMessage&&I(e).sendMessage(...a)),id:"sendButton"},o[3]||(o[3]=[h("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 664 663"},[h("path",{fill:"none",d:"M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"}),h("path",{"stroke-linejoin":"round","stroke-linecap":"round","stroke-width":"33.67",stroke:"#6c6c6c",d:"M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"})],-1)]))])])]))}},G4=ye(z4,[["__scopeId","data-v-1cd95846"]]),K4={class:"mainmain"},q4={class:"main"},Y4={class:"main-container"},Q4={__name:"ChatView",setup(t){const e=jt();return(n,s)=>(C(),S(ce,null,[$(Mn),$(Dn),h("div",K4,[h("div",q4,[h("main",null,[h("div",Y4,[I(e).loading?(C(),Ke(ys,{key:0})):(C(),Ke(G4,{key:1}))])])])]),h("footer",null,[$(Nn)])],64))}},X4=ye(Q4,[["__scopeId","data-v-d4e57beb"]]),J4={class:"alert"},Z4={key:0,class:"form"},e5={class:"inputForm"},t5={class:"inputForm"},n5=["type"],s5={class:"p"},i5={class:"flex-row"},r5={version:"1.1",width:"20",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512",style:{"enable-background":"new 0 0 512 512"},"xml:space":"preserve"},o5={key:1,class:"form"},a5={class:"inputForm"},l5={class:"inputForm"},c5=["type"],u5={class:"inputForm"},f5=["type"],d5={class:"p"},h5={__name:"loginCo",setup(t){const e=ln(),n=oe(!0),s=oe("password"),i=oe("password");return(r,o)=>(C(),S(ce,null,[h("span",J4,Z(I(e).alert),1),n.value?(C(),S("form",Z4,[o[20]||(o[20]=h("div",{class:"flex-column"},[h("label",null,"Email ")],-1)),h("div",e5,[o[14]||(o[14]=h("svg",{height:"20",viewBox:"0 0 32 32",width:"20",xmlns:"http://www.w3.org/2000/svg"},[h("g",{id:"Layer_3","data-name":"Layer 3"},[h("path",{d:"m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"})])],-1)),Ae(h("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=a=>I(e).emailValue=a),class:"input",placeholder:"Nhập email của bạn "},null,512),[[He,I(e).emailValue]])]),o[21]||(o[21]=h("div",{class:"flex-column"},[h("label",null,"Mật khẩu ")],-1)),h("div",t5,[o[16]||(o[16]=h("svg",{height:"20",viewBox:"-64 0 512 512",width:"20",xmlns:"http://www.w3.org/2000/svg"},[h("path",{d:"m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"}),h("path",{d:"m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"})],-1)),Ae(h("input",{type:s.value,"onUpdate:modelValue":o[1]||(o[1]=a=>I(e).passValue=a),class:"input",placeholder:"Nhập mật khẩu của bạn"},null,8,n5),[[dl,I(e).passValue]]),(C(),S("svg",{onClick:o[2]||(o[2]=a=>s.value=="password"?s.value="text":s.value="password"),viewBox:"0 0 576 512",height:"1em",xmlns:"http://www.w3.org/2000/svg"},o[15]||(o[15]=[h("path",{d:"M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"},null,-1)])))]),o[22]||(o[22]=h("div",{class:"flex-row"},[h("div",null,[h("input",{type:"checkbox"}),h("label",null,"Remember me ")]),h("span",{class:"span"},"Quên mật khẩu?")],-1)),h("button",{class:"button-submit",onClick:o[3]||(o[3]=a=>I(e).checkLogin())},"Đăng nhập"),h("p",s5,[o[17]||(o[17]=Ue("Bạn chưa có tài khoản? ")),h("span",{class:"span",onClick:o[4]||(o[4]=a=>n.value=!n.value)},"Đăng kí")]),o[23]||(o[23]=h("p",{class:"p line"},"hoặc",-1)),h("div",i5,[h("button",{class:"btn google",onClick:o[5]||(o[5]=(...a)=>I(e).googleSignIn&&I(e).googleSignIn(...a))},[(C(),S("svg",r5,o[18]||(o[18]=[h("path",{style:{fill:"#FBBB00"},d:`M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256\r
	c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456\r
	C103.821,274.792,107.225,292.797,113.47,309.408z`},null,-1),h("path",{style:{fill:"#518EF8"},d:`M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451\r
	c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535\r
	c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z`},null,-1),h("path",{style:{fill:"#28B446"},d:`M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512\r
	c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771\r
	c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z`},null,-1),h("path",{style:{fill:"#F14336"},d:`M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012\r
	c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0\r
	C318.115,0,375.068,22.126,419.404,58.936z`},null,-1)]))),o[19]||(o[19]=Ue(" Google "))]),h("button",{class:"btn apple",onClick:o[6]||(o[6]=(...a)=>I(e).facebookSignIn&&I(e).facebookSignIn(...a))}," Facebook ")])])):(C(),S("form",o5,[o[30]||(o[30]=h("div",{class:"flex-column"},[h("label",null,"Email ")],-1)),h("div",a5,[o[24]||(o[24]=h("svg",{height:"20",viewBox:"0 0 32 32",width:"20",xmlns:"http://www.w3.org/2000/svg"},[h("g",{id:"Layer_3","data-name":"Layer 3"},[h("path",{d:"m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"})])],-1)),Ae(h("input",{type:"text","onUpdate:modelValue":o[7]||(o[7]=a=>I(e).emailValue=a),class:"input",placeholder:"Nhập email của bạn "},null,512),[[He,I(e).emailValue]])]),o[31]||(o[31]=h("div",{class:"flex-column"},[h("label",null,"Mật khẩu ")],-1)),h("div",l5,[o[26]||(o[26]=h("svg",{height:"20",viewBox:"-64 0 512 512",width:"20",xmlns:"http://www.w3.org/2000/svg"},[h("path",{d:"m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"}),h("path",{d:"m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"})],-1)),Ae(h("input",{type:s.value,"onUpdate:modelValue":o[8]||(o[8]=a=>I(e).passValue=a),class:"input",placeholder:"Nhập mật khẩu của bạn"},null,8,c5),[[dl,I(e).passValue]]),(C(),S("svg",{onClick:o[9]||(o[9]=a=>s.value=="password"?s.value=I(sy):s.value="password"),viewBox:"0 0 576 512",height:"1em",xmlns:"http://www.w3.org/2000/svg"},o[25]||(o[25]=[h("path",{d:"M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"},null,-1)])))]),o[32]||(o[32]=h("div",{class:"flex-column"},[h("label",null,"Nhập lại mật khẩu ")],-1)),h("div",u5,[o[28]||(o[28]=h("svg",{height:"20",viewBox:"-64 0 512 512",width:"20",xmlns:"http://www.w3.org/2000/svg"},[h("path",{d:"m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"}),h("path",{d:"m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"})],-1)),Ae(h("input",{type:i.value,"onUpdate:modelValue":o[10]||(o[10]=a=>I(e).checkPassValue=a),class:"input",placeholder:"Nhập lại mật khẩu của bạn"},null,8,f5),[[dl,I(e).checkPassValue]]),(C(),S("svg",{onClick:o[11]||(o[11]=a=>i.value=="password"?i.value="text":i.value="password"),viewBox:"0 0 576 512",height:"1em",xmlns:"http://www.w3.org/2000/svg"},o[27]||(o[27]=[h("path",{d:"M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"},null,-1)])))]),o[33]||(o[33]=h("div",{class:"flex-row"},[h("div",null,[h("input",{type:"checkbox"}),h("label",null,"Remember me ")]),h("span",{class:"span"},"Quên mật khẩu?")],-1)),h("button",{class:"button-submit",onClick:o[12]||(o[12]=a=>I(e).checkRegister())},"Đăng kí"),h("p",d5,[o[29]||(o[29]=Ue("Bạn đã có tài khoản? ")),h("span",{class:"span",onClick:o[13]||(o[13]=a=>n.value=!n.value)},"Đăng Nhập")])]))],64))}},p5=ye(h5,[["__scopeId","data-v-6efb6d45"]]),m5={class:"mainmain"},g5={class:"main"},_5={class:"main-container"},v5={__name:"LoginView",setup(t){return(e,n)=>(C(),S(ce,null,[$(Mn),$(Dn),h("div",m5,[h("div",g5,[h("main",null,[h("div",_5,[$(p5)])])])]),h("footer",null,[$(Nn)])],64))}},y5=ye(v5,[["__scopeId","data-v-f31f00e7"]]),b5={class:"mainmain"},x5={class:"main"},w5={class:"main-container"},C5={key:1},I5={key:3},E5={__name:"FavoriteView",setup(t){const e=jt(),n=Gs(),s=ln();return(i,r)=>(C(),S(ce,null,[$(Mn),$(Dn),h("div",b5,[h("div",x5,[h("main",null,[h("div",w5,[r[2]||(r[2]=h("span",{class:"fb-title"}," Mục yêu thích ❤️ ",-1)),I(e).loading?(C(),Ke(ys,{key:0})):es("",!0),I(s).currentUser?I(n).filterFavorite.length>0?(C(),Ke(no,{key:2,product:I(n).filterFavorite},null,8,["product"])):(C(),S("div",I5,r[1]||(r[1]=[h("p",{class:"alert"},"Bạn chưa có phim yêu thích nào.",-1)]))):(C(),S("div",C5,r[0]||(r[0]=[h("p",{class:"alert"},"Vui lòng đăng nhập để xem danh sách yêu thích!",-1)])))])]),h("div",{class:Cn(["main-right-container",{active:!I(e).loading}])},[$(Ui,{class:"see"})],2)])]),h("footer",null,[$(Nn)])],64))}},S5=ye(E5,[["__scopeId","data-v-047065c5"]]),T5={},k5={class:"body"},A5={class:"container"},R5={class:"go-back"};function P5(t,e){const n=rn("RouterLink");return C(),S("div",k5,[h("div",A5,[e[1]||(e[1]=h("h2",null,"404",-1)),e[2]||(e[2]=h("h1",null,"Page not found.",-1)),e[3]||(e[3]=h("p",null,"Rất tiếc, có vẻ như chúng tôi không thể tìm thấy trang bạn đang tìm kiếm. Thông thường điều này xảy ra vì của một trang tồn tại trước đó đã bị xóa hoặc bạn đã nhập sai địa chỉ.",-1)),e[4]||(e[4]=h("p",null,"hoặc",-1)),e[5]||(e[5]=h("p",null,"Bạn chưa có quyền để vào các trang quản trị khác",-1)),h("span",R5,[$(n,{to:"/"},{default:Le(()=>e[0]||(e[0]=[Ue("Go back")])),_:1})])])])}const ev=ye(T5,[["render",P5],["__scopeId","data-v-2c526770"]]),N5={class:"allContainer-admin"},O5={key:0},M5={class:"header-container"},D5={class:"logo"},L5={class:"admin-container"},F5={class:"admin-container-left"},$5={class:"list"},U5={class:"admin-container-right"},V5={key:1},B5={__name:"AdminView",setup(t){const e=ln(),n=jt();return n.loading=!0,Pt(async()=>{await e.fetchCurrentUsers(),n.loading=!1,/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)&&screen.orientation&&screen.orientation.lock("landscape").catch(i=>{console.warn("Không thể xoay màn hình:",i)})}),(s,i)=>{var o;const r=rn("RouterView");return C(),S("div",N5,[((o=I(e).currentUser)==null?void 0:o.role)==="admin"?(C(),S("div",O5,[h("div",M5,[h("div",D5,[$(I(Jt),{to:"/"},{default:Le(()=>i[0]||(i[0]=[h("img",{src:Lg},null,-1)])),_:1})])]),h("div",L5,[h("div",F5,[h("div",$5,[$(I(Jt),{to:"/admin/danh-muc"},{default:Le(()=>i[1]||(i[1]=[Ue(" Quản lý danh mục ")])),_:1}),$(I(Jt),{to:"/admin/product"},{default:Le(()=>i[2]||(i[2]=[Ue(" Quản lý phim ")])),_:1}),$(I(Jt),{to:"/admin/chap"},{default:Le(()=>i[3]||(i[3]=[Ue(" Quản lý tập phim ")])),_:1}),$(I(Jt),{to:"/admin/user"},{default:Le(()=>i[4]||(i[4]=[Ue(" Quản lý tài khoản ")])),_:1})])]),h("div",U5,[$(r)])])])):(C(),S("div",V5,[$(ev)]))])}}},j5=ye(B5,[["__scopeId","data-v-de86279d"]]),H5={class:"admin-container"},W5={class:"table"},z5=["onUpdate:modelValue","onKeyup"],G5={key:1},K5=["onClick"],q5=["onClick"],Y5={class:"addContainer"},Q5={__name:"danhMucAdmin",setup(t){const e=xf();Pt(()=>{e.fetchDanhMucs()});const n=async r=>{r.isEditing?await s(r):r.tempName=r.name,r.isEditing=!r.isEditing},s=async r=>{r.tempName.trim()!=""&&r.tempName!=r.name&&await e.updateDanhMuc(r.id,r.tempName)},i=()=>{if(!e.nameValue||e.nameValue.trim()===""){alert("Tên danh mục không được để trống!");return}e.addDanhMuc(e.nameValue)};return(r,o)=>(C(),S("div",H5,[o[3]||(o[3]=h("span",{class:"fb-title"},"Quản lý danh mục",-1)),h("div",W5,[h("ul",null,[o[1]||(o[1]=h("span",null,"Tên danh mục",-1)),(C(!0),S(ce,null,Qe(I(e).danhMucs,a=>(C(),S("li",{key:a.id},[a.isEditing?Ae((C(),S("input",{key:0,"onUpdate:modelValue":l=>a.tempName=l,onKeyup:wr(l=>s(a),["enter"])},null,40,z5)),[[He,a.tempName]]):(C(),S("p",G5,Z(a.name),1))]))),128))]),h("ul",null,[o[2]||(o[2]=h("span",null,"Chức năng",-1)),(C(!0),S(ce,null,Qe(I(e).danhMucs,a=>(C(),S("li",{key:a.id},[h("button",{onClick:l=>n(a)},Z(a.isEditing?"Lưu":"Sửa"),9,K5),h("button",{onClick:l=>I(e).deleteDanhMuc(a.id)},"Xoá",8,q5)]))),128))])]),h("div",Y5,[Ae(h("input",{type:"text",placeholder:"Tên danh mục","onUpdate:modelValue":o[0]||(o[0]=a=>I(e).nameValue=a),onKeyup:wr(i,["enter"])},null,544),[[He,I(e).nameValue]]),h("button",{class:"addTable",onClick:i},"Thêm")])]))}},X5=ye(Q5,[["__scopeId","data-v-db155937"]]),J5={key:1,class:"admin-container"},Z5={class:"addContainer"},eA=["value"],tA=["value"],nA={class:"movie-table"},sA=["onUpdate:modelValue"],iA={key:1},rA=["onUpdate:modelValue"],oA=["value"],aA={key:1},lA=["onUpdate:modelValue"],cA={key:1,class:"p"},uA=["onUpdate:modelValue"],fA=["src"],dA=["onUpdate:modelValue"],hA=["value"],pA={key:1},mA=["onClick"],gA=["onClick"],_A={class:"pagination"},vA=["disabled"],yA=["disabled"],Ol=3,bA={__name:"productAdmin",setup(t){const e=Gs(),n=xf(),s=wf(),i=jt(),r=oe(1),o=oe(""),a=oe(""),l=oe(""),c=oe(""),u=oe("1"),f=async()=>{if(o.value.trim()===""||a.value.trim()===""||l.value.trim()===""||c.value.trim()===""||u.value.trim()===""){alert("Vui lòng điền đầy đủ thông tin phim!");return}await e.addMovie(o.value,a.value,l.value,c.value,u.value),o.value="",a.value="",l.value="",c.value="",u.value=""},d=_=>{_.isEditing?e.updateMovie(_.firebaseId,{name:_.tempName,genre:_.tempTheLoai,description:_.tempDes,image:_.tempImage,day:_.tempDay}):(_.tempName=_.name,_.tempTheLoai=_.genre,_.tempDes=_.description,_.tempImage=_.image,_.tempDay=_.day),_.isEditing=!_.isEditing};Pt(()=>{e.fetchMovies(),n.fetchDanhMucs()});const p=le(()=>{const _=[...e.movies].sort((b,R)=>R.firebaseId.localeCompare(b.firebaseId)),w=(r.value-1)*Ol,v=w+Ol;return _.slice(w,v)}),y=le(()=>Math.ceil(e.movies.length/Ol));return(_,w)=>I(i).loading?(C(),Ke(ys,{key:0})):(C(),S("div",J5,[w[9]||(w[9]=h("span",{class:"fb-title"},"Quản lý phim",-1)),h("div",Z5,[Ae(h("input",{type:"text",placeholder:"Tên phim","onUpdate:modelValue":w[0]||(w[0]=v=>o.value=v)},null,512),[[He,o.value]]),Ae(h("select",{"onUpdate:modelValue":w[1]||(w[1]=v=>a.value=v)},[(C(!0),S(ce,null,Qe(I(n).danhMucs,v=>(C(),S("option",{key:v.firebaseId,value:v.name},Z(v.name),9,eA))),128))],512),[[si,a.value]]),Ae(h("input",{type:"text",placeholder:"Mô tả","onUpdate:modelValue":w[2]||(w[2]=v=>l.value=v)},null,512),[[He,l.value]]),Ae(h("input",{type:"text",placeholder:"Hình ảnh (URL)","onUpdate:modelValue":w[3]||(w[3]=v=>c.value=v)},null,512),[[He,c.value]]),Ae(h("select",{"onUpdate:modelValue":w[4]||(w[4]=v=>u.value=v)},[(C(!0),S(ce,null,Qe(I(s).day,v=>(C(),S("option",{key:v,value:v},Z(I(s).days[v]),9,tA))),128))],512),[[si,u.value]]),h("button",{class:"addTable",onClick:w[5]||(w[5]=v=>f())},"Thêm")]),h("table",nA,[w[8]||(w[8]=h("thead",null,[h("tr",null,[h("th",null,"Tên phim"),h("th",null,"Thể loại"),h("th",null,"Mô tả"),h("th",null,"Hình ảnh"),h("th",null,"Ngày chiếu"),h("th",null,"Yêu thích"),h("th",null,"Chức năng")])],-1)),h("tbody",null,[(C(!0),S(ce,null,Qe(p.value,v=>(C(),S("tr",{key:v.firebaseId},[h("td",null,[v.isEditing?Ae((C(),S("input",{key:0,"onUpdate:modelValue":b=>v.tempName=b},null,8,sA)),[[He,v.tempName]]):(C(),S("p",iA,Z(v.name),1))]),h("td",null,[v.isEditing?Ae((C(),S("select",{key:0,"onUpdate:modelValue":b=>v.tempTheLoai=b},[(C(!0),S(ce,null,Qe(I(n).danhMucs,b=>(C(),S("option",{key:b.firebaseId,value:b.name},Z(b.name),9,oA))),128))],8,rA)),[[si,v.tempTheLoai]]):(C(),S("p",aA,Z(v.genre),1))]),h("td",null,[v.isEditing?Ae((C(),S("input",{key:0,"onUpdate:modelValue":b=>v.tempDes=b},null,8,lA)),[[He,v.tempDes]]):(C(),S("p",cA,Z(v.description),1))]),h("td",null,[v.isEditing?Ae((C(),S("input",{key:0,"onUpdate:modelValue":b=>v.tempImage=b,placeholder:"Nhập URL hình ảnh mới"},null,8,uA)),[[He,v.tempImage]]):(C(),S("img",{key:1,src:v.image,alt:"Hình ảnh phim",class:"movie-img"},null,8,fA))]),h("td",null,[v.isEditing?Ae((C(),S("select",{key:0,"onUpdate:modelValue":b=>v.tempDay=b},[(C(!0),S(ce,null,Qe(I(s).day,b=>(C(),S("option",{key:b,value:b},Z(I(s).days[b]),9,hA))),128))],8,dA)),[[si,v.tempDay]]):(C(),S("p",pA,Z(I(s).days[v.day]),1))]),h("td",null,[h("p",null,Z(v.favorite||0),1)]),h("td",null,[h("button",{onClick:b=>d(v)},Z(v.isEditing?"Lưu":"Sửa"),9,mA),h("button",{onClick:b=>I(e).deleteMovie(v.firebaseId)},"Xoá",8,gA)])]))),128))])]),h("div",_A,[h("button",{onClick:w[6]||(w[6]=v=>r.value--),disabled:r.value===1},"Trang trước",8,vA),h("span",null,"Trang "+Z(r.value)+" / "+Z(y.value),1),h("button",{onClick:w[7]||(w[7]=v=>r.value++),disabled:r.value>=y.value},"Trang sau",8,yA)])]))}},xA=ye(bA,[["__scopeId","data-v-54282bcd"]]),wA={key:1,class:"admin-container"},CA={class:"addContainer"},IA=["value"],EA={class:"movie-table"},SA=["onUpdate:modelValue"],TA=["href"],kA=["onClick"],AA=["onClick"],RA={class:"pagination"},PA=["disabled"],NA=["disabled"],Ml=5,OA={__name:"chapAdmin",setup(t){const e=Gs(),n=jt(),s=oe(null),i=oe({tap:"",url:""}),r=oe({}),o=oe(1);Pt(()=>{e.fetchMovies()});const a=()=>{if(s.value&&s.value.chapters){r.value=Object.fromEntries(Object.entries(s.value.chapters).map(([p,y])=>[p,{...y,isEditing:!1,tempUrl:y.url}]));const d=Math.max(...Object.keys(r.value).map(Number),0);i.value.tap=d+1}else r.value={},i.value.tap=1},l=async()=>{if(!s.value||i.value.tap===""||!i.value.url.trim()){alert("Vui lòng nhập đầy đủ thông tin!");return}await e.addChapToMovie(s.value.firebaseId,i.value.tap,i.value.url),r.value[i.value.tap]={url:i.value.url},i.value.tap=Number(i.value.tap)+1,i.value.url=""},c=async d=>{if(!s.value)return;await e.deleteChap(s.value.firebaseId,d),delete r.value[d];const p=Math.max(...Object.keys(r.value).map(Number),0);i.value.tap=p+1},u=d=>{d.isEditing?e.updateChapInMovie(s.value.firebaseId,d.id,d.tempUrl).then(()=>{d.url=d.tempUrl,alert("Cập nhật tập thành công!")}).catch(p=>{console.error("Lỗi khi cập nhật tập:",p),alert("Có lỗi xảy ra khi cập nhật tập!")}):d.tempUrl=d.url,d.isEditing=!d.isEditing},f=le(()=>{const d=(o.value-1)*Ml,p=d+Ml;return Object.entries(r.value).slice(d,p).map(([y,_])=>({tap:y,..._}))});return(d,p)=>{const y=rn("Loading");return I(n).loading?(C(),Ke(y,{key:0})):(C(),S("div",wA,[p[7]||(p[7]=h("span",{class:"fb-title"},"Quản lý tập",-1)),h("div",CA,[p[5]||(p[5]=h("h3",null,"Thêm tập mới",-1)),Ae(h("select",{"onUpdate:modelValue":p[0]||(p[0]=_=>s.value=_),onChange:a},[(C(!0),S(ce,null,Qe(I(e).movies,_=>(C(),S("option",{key:_.firebaseId,value:_},Z(_.name),9,IA))),128))],544),[[si,s.value]]),Ae(h("input",{type:"number",placeholder:"Số tập","onUpdate:modelValue":p[1]||(p[1]=_=>i.value.tap=_),min:"1"},null,512),[[He,i.value.tap]]),Ae(h("input",{type:"text",placeholder:"URL","onUpdate:modelValue":p[2]||(p[2]=_=>i.value.url=_)},null,512),[[He,i.value.url]]),h("button",{onClick:l},"Thêm tập")]),h("table",EA,[p[6]||(p[6]=h("thead",null,[h("tr",null,[h("th",null,"Tập"),h("th",null,"URL"),h("th",null,"Chức năng")])],-1)),h("tbody",null,[(C(!0),S(ce,null,Qe(f.value,(_,w)=>(C(),S("tr",{key:w},[h("td",null,Z(_.tap),1),h("td",null,[_.isEditing?Ae((C(),S("input",{key:0,"onUpdate:modelValue":v=>_.tempUrl=v},null,8,SA)),[[He,_.tempUrl]]):(C(),S("a",{key:1,href:_.url,target:"_blank",style:{color:"deepskyblue"}},Z(_.url),9,TA))]),h("td",null,[h("button",{onClick:v=>u(w)},Z(_.isEditing?"Lưu":"Sửa"),9,kA),h("button",{onClick:v=>c(_.tap)},"Xoá",8,AA)])]))),128))])]),h("div",RA,[h("button",{onClick:p[3]||(p[3]=_=>o.value--),disabled:o.value===1},"Trước",8,PA),h("span",null,"Trang "+Z(o.value),1),h("button",{onClick:p[4]||(p[4]=_=>o.value++),disabled:o.value*Ml>=Object.keys(r.value).length},"Tiếp",8,NA)])]))}}},MA=ye(OA,[["__scopeId","data-v-4ea35293"]]),DA={},LA={class:"admin-container"};function FA(t,e){return C(),S("div",LA,e[0]||(e[0]=[h("span",{class:"fb-title"},"Quản lý tài khoản ",-1)]))}const $A=ye(DA,[["render",FA],["__scopeId","data-v-9599cb7d"]]),UA={class:"mainmain"},VA={class:"main"},BA={class:"main-container"},jA={key:1,class:"profile-container"},HA={class:"edit-profile"},WA={class:"avt"},zA=["src"],GA={key:1},KA={class:"file-upload"},qA={__name:"ProfileView",setup(t){var c,u;const e=jt(),n=ln(),s=oe(!1),i=oe(((c=n.currentUser)==null?void 0:c.name)??""),r=oe(((u=n.currentUser)==null?void 0:u.avatarUrl)??""),o=async()=>{s.value&&await a(i.value),s.value=!s.value},a=async f=>{var d;try{const p=(d=n.currentUser)==null?void 0:d.firebaseId;if(!p){console.error("Không tìm thấy ID người dùng.");return}await yt(fe(de,`users/${p}`),{name:f}),n.currentUser.name=f,await n.fetchUsers(),console.log("Tên đã được cập nhật!")}catch(p){console.error("Lỗi khi cập nhật tên:",p)}},l=async f=>{const d=f.target.files[0];if(!d){alert("Vui lòng chọn một tệp.");return}const p=new FileReader;p.onload=async()=>{var y;try{const _=(y=n.currentUser)==null?void 0:y.firebaseId;if(!_){alert("Không tìm thấy ID người dùng.");return}const w=p.result;await yt(fe(de,`users/${_}`),{avatarUrl:w}),n.currentUser.avatarUrl=w,r.value=w,console.log("Avatar đã được cập nhật!")}catch(_){console.error("Lỗi khi upload avatar:",_)}},p.readAsDataURL(d)};return(f,d)=>{var p,y;return C(),S(ce,null,[$(Mn),$(Dn),h("div",UA,[h("div",VA,[h("main",null,[h("div",BA,[I(e).loading?(C(),Ke(ys,{key:0})):(C(),S("div",jA,[d[2]||(d[2]=h("span",null,"Thông tin tài khoản",-1)),h("div",HA,[h("div",WA,[h("img",{src:((p=I(n).currentUser)==null?void 0:p.avatarUrl)||"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrY7dJj0QnImGcypj9oBdr9u9joHrxgaKY_g&s",alt:"Avatar",class:"avatar"},null,8,zA),h("p",null,[s.value?Ae((C(),S("input",{key:0,type:"text","onUpdate:modelValue":d[0]||(d[0]=_=>i.value=_)},null,512)),[[He,i.value]]):(C(),S("b",GA,Z(((y=I(n).currentUser)==null?void 0:y.name)??"Chưa có tên"),1)),h("button",{onClick:o,class:"btn-editName"},Z(s.value?"Lưu":"✏️"),1)]),h("div",KA,[d[1]||(d[1]=h("label",{for:"fileInput",class:"custom-upload-btn"}," Chọn ảnh ",-1)),h("input",{id:"fileInput",type:"file",onChange:l,accept:"image/*",class:"hidden-input"},null,32)])])])]))])])])]),h("footer",null,[$(Nn)])],64)}}},YA=ye(qA,[["__scopeId","data-v-66872497"]]),Uc=iC({history:Dw(),scrollBehavior(t,e,n){return n||{top:0,behavior:"smooth"}},routes:[{path:"/",name:"home",component:dk},{path:"/cartoon/:name/",name:"phim",component:t4},{path:"/search",name:"SearchResults",component:f4},{path:"/danhMuc/:name/:id",name:"danhMuc",component:x4},{path:"/chap/:name/:id",name:"chap",component:M4},{path:"/chatGroup/",name:"chat",component:X4},{path:"/login/",name:"login",component:y5},{path:"/favorite/",name:"favorite",component:S5},{path:"/admin/",name:"admin",component:j5,children:[{path:"danh-muc",component:X5},{path:"product",component:xA},{path:"chap",component:MA},{path:"user",component:$A}]},{path:"/:pathMatch(.*)*",name:"404",component:ev},{path:"/profile",name:"profile",component:YA}]}),qa=Fx(oC);ty.add(oy,iy);qa.component("font-awesome-icon",Xx);qa.use(Jx());qa.use(Uc);qa.mount("#app");
