(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+iuc":function(e,t,n){n("wgeU"),n("FlQf"),n("bBy9"),n("B9jh"),n("dL40"),n("xvv9"),n("V+O7"),e.exports=n("WEpk").Set},"/0+H":function(e,t,n){"use strict";var r=n("hfKm"),i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};r(t,"__esModule",{value:!0});var o=i(n("q1tI")),s=n("lwAK");function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,i=void 0!==r&&r,o=e.hasQuery;return n||i&&(void 0!==o&&o)}t.isInAmpMode=u,t.useAmp=function(){return u(o.default.useContext(s.AmpStateContext))}},"0tVQ":function(e,t,n){n("FlQf"),n("VJsP"),e.exports=n("WEpk").Array.from},"2PDY":function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},"3niX":function(e,t,n){"use strict";t.__esModule=!0,t.flush=function(){var e=o.cssRules();return o.flush(),e},t.default=void 0;var r,i=n("q1tI");var o=new(((r=n("SevZ"))&&r.__esModule?r:{default:r}).default),s=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).prevProps={},n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.dynamic=function(e){return e.map((function(e){var t=e[0],n=e[1];return o.computeId(t,n)})).join(" ")};var i=r.prototype;return i.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},i.componentWillUnmount=function(){o.remove(this.props)},i.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&o.remove(this.prevProps),o.add(this.props),this.prevProps=this.props),null},r}(i.Component);t.default=s},"8Kt/":function(e,t,n){"use strict";var r=n("ttDY"),i=n("hfKm"),o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};i(t,"__esModule",{value:!0});var s=o(n("q1tI")),u=o(n("Xuae")),a=n("lwAK"),c=n("FYa8"),l=n("/0+H");function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[s.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(s.default.createElement("meta",{name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1"})),t}function h(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===s.default.Fragment?e.concat(s.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=f;var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=s.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(h,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new r,t=new r,n=new r,i={};return function(o){var s=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var u=o.key.slice(o.key.indexOf("$")+1);e.has(u)?s=!1:e.add(u)}switch(o.type){case"title":case"base":t.has(o.type)?s=!1:t.add(o.type);break;case"meta":for(var a=0,c=d.length;a<c;a++){var l=d[a];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?s=!1:n.add(l);else{var f=o.props[l],h=i[l]||new r;h.has(f)?s=!1:(h.add(f),i[l]=h)}}}return s}}()).reverse().map((function(e,t){var n=e.key||t;return s.default.cloneElement(e,{key:n})}))}var v=u.default();function m(e){var t=e.children;return s.default.createElement(a.AmpStateContext.Consumer,null,(function(e){return s.default.createElement(c.HeadManagerContext.Consumer,null,(function(n){return s.default.createElement(v,{reduceComponentsToState:p,handleStateChange:n,inAmpMode:l.isInAmpMode(e)},t)}))}))}m.rewind=v.rewind,t.default=m},"8iia":function(e,t,n){var r=n("QMMT"),i=n("RRc/");e.exports=function(e){return function(){if(r(this)!=e)throw TypeError(e+"#toJSON isn't generic");return i(this)}}},"8oxB":function(e,t){var n,r,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function u(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"===typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var a,c=[],l=!1,f=-1;function h(){l&&a&&(l=!1,a.length?c=a.concat(c):f=-1,c.length&&d())}function d(){if(!l){var e=u(h);l=!0;for(var t=c.length;t;){for(a=c,c=[];++f<t;)a&&a[f].run();f=-1,t=c.length}a=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function v(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new p(e,t)),1!==c.length||l||u(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=v,i.addListener=v,i.once=v,i.off=v,i.removeListener=v,i.removeAllListeners=v,i.emit=v,i.prependListener=v,i.prependOnceListener=v,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},"9kyW":function(e,t,n){"use strict";e.exports=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0}},B9jh:function(e,t,n){"use strict";var r=n("Wu5q"),i=n("n3ko");e.exports=n("raTm")("Set",(function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(e){return r.def(i(this,"Set"),e=0===e?0:e,e)}},r)},IP1Z:function(e,t,n){"use strict";var r=n("2faE"),i=n("rr1i");e.exports=function(e,t,n){t in e?r.f(e,t,i(0,n)):e[t]=n}},MX0m:function(e,t,n){e.exports=n("3niX")},PQJW:function(e,t,n){var r=n("d04V"),i=n("yLu3");e.exports=function(e){if(i(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return r(e)}},RNiq:function(e,t,n){"use strict";n.r(t);var r=n("p0XB"),i=n.n(r);var o=n("d04V"),s=n.n(o),u=n("yLu3"),a=n.n(u);function c(e){return function(e){if(i()(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(a()(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return s()(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var l=n("XXOK"),f=n.n(l);function h(e,t){return function(e){if(i()(e))return e}(e)||function(e,t){if(a()(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],r=!0,i=!1,o=void 0;try{for(var s,u=f()(e);!(r=(s=u.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(c){i=!0,o=c}finally{try{r||null==u.return||u.return()}finally{if(i)throw o}}return n}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var d=n("MX0m"),p=n.n(d),v=n("q1tI"),m=n.n(v),y=n("8Kt/"),g=n.n(y),_=m.a.createElement,w=16,S=w/2,b={" ":[null,0],s:[0,255],d:[1,255],f:[2,255],w:[0,122],e:[1,122],r:[2,122]},x=3,j="   wersdf".split(""),R="hjkl".split(""),k="\u2190\u2193\u2191\u2192".split(""),T=["ArrowLeft","ArrowDown","ArrowUp","ArrowRight"].map((function(e){return e.toLowerCase()}));function N(e){return"rgb("+e.join(",")+")"}function C(e){return e*w}function A(e){return e+S}function O(e){return A(C(e))}function M(e){return e.getContext("2d")}var E=[40,30],F=function(){return _("div",{style:{width:w/2}})};t.default=function(){var e=Object(v.useRef)([0,0,1,1]),t=Object(v.useState)([0,0]),n=t[0],r=(t[1],Object(v.useState)(!1)),i=r[0],o=r[1],s=Object(v.useState)(!1),u=(s[0],s[1],Object(v.useRef)({})),a=Object(v.useRef)([0,0,0]),l=Object(v.useRef)(!1),f=Object(v.useRef)(!1),d=Object(v.useRef)(null),m=Object(v.useRef)(null),y=Object(v.useRef)(null),I=Object(v.useRef)(null),D=Object(v.useRef)(null),P=Object(v.useRef)(null),z=Object(v.useRef)(null),B=Object(v.useRef)(l.current),L=Object(v.useRef)(null);function H(){var e=E[0],t=E[1],n=m.current,r=M(n);if(r.clearRect(0,0,n.width,n.height),i){r.strokeStyle="#bbb",r.lineWidth=1;for(var o=0;o<t;o++)for(var s=0;s<e;s++)r.strokeRect(O(s),O(o),w,w)}}function U(){var t=h(e.current,4),n=t[0],r=t[1],i=t[2],o=t[3],s=y.current,u=M(s);u.clearRect(0,0,s.width,s.height),u.lineWidth=1,u.strokeStyle="black",u.strokeRect(O(n)-1.5,O(r)-1.5,C(i)+3,C(o)+3),u.lineWidth=2,u.strokeStyle="cyan",u.strokeRect(O(n)-0,O(r)-0,C(i)+0,C(o)+0)}function W(){for(var e=M(I.current),t=[0,0,0],n=0;n<j.length;n++){var r=j[n],i=b[r],o=n%x,s=Math.floor(n/x),u=t.slice();u[i[0]]=i[1],e.fillStyle=N(u),e.fillRect(C(4*o),C(2*s),4*w,2*w)}}function q(){var e=a.current,t=P.current,n=M(t);n.fillStyle=N(e),n.fillStyle=n.fillRect(0,0,t.width,t.height),(l.current&&!f.current||!l.current&&f.current)&&(n.lineWidth=2,n.strokeStyle="black",n.strokeRect(0,0,t.width-0,t.height-0),n.strokeStyle="cyan",n.strokeRect(2,2,t.width-4,t.height-4)),B.current.childNodes[4].innerHTML=l.current?"off":"on";var r=D.current,i=M(r);i.clearRect(0,0,r.width,r.height);for(var o=0;o<j.length;o++){var s=j[o],u=b[s];if(e[null===u[0]?o:u[0]]===u[1]){var c=o%x,h=Math.floor(o/x);i.strokeStyle="white",i.lineWidth=1,i.strokeRect(C(4*c)+.5,C(2*h)+.5,4*w-1,2*w-1),i.strokeStyle="black",i.lineWidth=1,i.strokeRect(C(4*c)+1.5,C(2*h)+1.5,4*w-3,2*w-3)}}for(var d=z.current.childNodes,p=0;p<j.length;p++)d[p].innerHTML=j[p];for(var v=0;v<e.length;v++){var m=e[v];0===m?d[v].innerHTML="0":122===m?d[v+3].innerHTML="122":255===m&&(d[v+6].innerHTML="255")}}function X(e){u.current[e]=!0,V(e,{repeat:!1})}function J(e){setTimeout((function(){u.current[e]=!1,V(null,null)}),0)}function K(){var e=L.current,t=M(e);t.fillStyle="#aaa",t.fillRect(0,0,e.width,e.height);var n=u.current;function r(e,n){t.strokeStyle="white",t.strokeStyle="black",t.lineWidth=2,t.strokeRect(C(3*e)+1,C(2*n)+1,3*w-2,2*w-2)}n.h&&r(0,0),n.j&&r(1,0),n.k&&r(2,0),n.l&&r(3,0),n.arrowleft&&r(0,1),n.arrowdown&&r(1,1),n.arrowup&&r(2,1),n.arrowright&&r(3,1)}function V(t,n){var r=e.current,i=E[0],s=E[1],h=u.current;if("g"===t)o((function(e){return!e}));else if("p"===t){var p=document.createElement("a"),v=d.current,m=document.createElement("canvas");m.width=v.width-2*S,m.height=v.height-2*S;var y=m.getContext("2d");y.fillStyle="white",y.drawImage(v,-S,-S),m.toBlob((function(e){p.setAttribute("download","rgb-"+(new Date).toISOString().slice(0,-4).replace(/-/g,"").replace(/:/g,"").replace(/_/g,"").replace(/\./g,"")+"Z.png"),p.setAttribute("href",URL.createObjectURL(e)),p.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window}))}))}K();var g=r.slice();(h.h||h.arrowleft)&&r[0]>=1&&(g[0]-=1),(h.j||h.arrowdown)&&r[1]+1<=s-1&&(g[1]+=1),(h.k||h.arrowup)&&r[1]>=1&&(g[1]-=1),(h.l||h.arrowright)&&r[0]+1<=i-1&&(g[0]+=1),e.current=g;var _=0,w=0,b=0;h.r&&(b=122),h.e&&(w=122),h.w&&(_=122),h.f&&(b=255),h.d&&(w=255),h.s&&(_=255);var x=[_,w,b];if(a.current=x,f.current=!1,h[" "]&&(f.current=!0),"t"!==t||n.repeat||(l.current=!l.current),U(),l.current&&!f.current||!l.current&&f.current){var j=M(d.current);j.fillStyle=N(x),j.fillRect.apply(j,c(g.slice(0,2).map((function(e){return O(e)}))).concat(c(g.slice(2).map((function(e){return C(e)})))))}q()}function Z(e){u.current[e.key.toLowerCase()]=!0,V(e.key,e)}function G(e){u.current[e.key.toLowerCase()]=!1;var t=e.key.toLowerCase(),n=j.slice();n.push(" "),n.push("backspace"),-1!==n.indexOf(t)&&V(null,e);var r="hjkl".split("");r.push("arrowleft","arrowdown","arrowup","arrowright"),-1!==r.indexOf(t)&&V(null,e)}Object(v.useEffect)((function(){H()}),[i]),Object(v.useEffect)((function(){var e=d.current;e.width=C(Q)+2*S,e.height=C(Y)+2*S;var t=M(e);t.fillStyle="white",t.fillRect(A(0),A(0),C(Q),C(Y));var n=m.current;n.width=C(Q)+2*S,n.height=C(Y)+2*S,H();var r=y.current;r.width=C(Q)+2*S,r.height=C(Y)+2*S,U();var i=I.current;i.width=C(12),i.height=C(6),W();var o=D.current;o.width=C(12),o.height=C(6),W();var s=P.current;s.width=C(14),s.height=C(2),q();var u=L.current;u.width=C(12),u.height=C(4),K(),V(null,null)}),[]),Object(v.useEffect)((function(){return window.addEventListener("keydown",Z),window.addEventListener("keyup",G),function(){window.removeEventListener("keydown",Z),window.removeEventListener("keyup",G)}}),[n]);var Q=E[0],Y=E[1],$="Pixel-paint using keyboard controls.";return _("div",{className:"jsx-1674335784"},_(g.a,null,_("meta",{charSet:"UTF-8",className:"jsx-1674335784"}),_("title",{className:"jsx-1674335784"},"Rgb"),_("link",{rel:"shortcut icon",href:"/favicon.png",className:"jsx-1674335784"}),_("meta",{name:"viewport",content:"width=".concat(C(E[0]+1),", initial-scale=1"),className:"jsx-1674335784"}),_("meta",{name:"theme-color",content:"#000000",className:"jsx-1674335784"}),_("title",{className:"jsx-1674335784"},"Rgb"),_("meta",{name:"description",content:$,className:"jsx-1674335784"}),_("meta",{property:"og:title",content:"Rgb",className:"jsx-1674335784"}),_("meta",{property:"og:description",content:$,className:"jsx-1674335784"}),_("meta",{property:"og:image",content:"https://rgb.constraint.systems/rgb.png",className:"jsx-1674335784"}),_("meta",{property:"og:url",content:"https://rgb.constraint.systems",className:"jsx-1674335784"}),_("meta",{name:"twitter:card",content:"summary_large_image",className:"jsx-1674335784"})),_("div",{style:{width:C(40),margin:"0 auto",paddingTop:w/2,paddingBottom:w/2},className:"jsx-1674335784"},_("div",{style:{paddingLeft:w/2,paddingRight:w/2},className:"jsx-1674335784"},_("div",{style:{position:"relative",display:"flex",lineHeight:C(2)+"px",textAlign:"center"},className:"jsx-1674335784"},_("div",{style:{width:C(2),background:"#bbb",cursor:"default"},onMouseDown:function(){X("g")},onMouseUp:function(){J("g")},onTouchStart:function(e){X("g"),e.preventDefault()},onTouchEnd:function(e){J("g"),e.preventDefault()},className:"jsx-1674335784"},"g"),_(F,null),_("div",{className:"jsx-1674335784"},i?"hide":"show"," grid"),_(F,null),_(F,null),_("div",{style:{width:C(2),background:"#bbb",cursor:"default"},onMouseDown:function(){X("p")},onMouseUp:function(){J("p")},onTouchStart:function(e){X("p"),e.preventDefault()},onTouchEnd:function(e){J("p"),e.preventDefault()},className:"jsx-1674335784"},"p"),_(F,null),_("div",{className:"jsx-1674335784"},"save image as png"))),_("div",{style:{position:"relative"},className:"jsx-1674335784"},_("canvas",{ref:d,className:"jsx-1674335784"}),_("canvas",{style:{position:"absolute",left:0,top:0},ref:m,className:"jsx-1674335784"}),_("canvas",{style:{position:"absolute",left:0,top:0},ref:y,className:"jsx-1674335784"})),_("div",{style:{padding:w/2,display:"flex",marginTop:-w/2},className:"jsx-1674335784"},_("div",{style:{position:"relative",lineHeight:0,marginRight:w},className:"jsx-1674335784"},_("canvas",{ref:I,className:"jsx-1674335784"}),_("canvas",{ref:D,style:{position:"absolute",left:0,top:0},className:"jsx-1674335784"}),_("div",{ref:z,style:{position:"absolute",left:0,top:0,width:C(12),height:C(6),display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gridTemplateRows:"1fr 1fr 1fr",textAlign:"center",color:"white",lineHeight:C(2)+"px",cursor:"default",userSelect:"none"},className:"jsx-1674335784"},j.map((function(e){return _("div",{key:e,onMouseDown:function(){X(e)},onMouseUp:function(){J(e)},onTouchStart:function(t){X(e),t.preventDefault()},onTouchEnd:function(t){J(e),t.preventDefault()},className:"jsx-1674335784"},e)})))),_("div",{className:"jsx-1674335784"},_("div",{ref:B,style:{display:"flex",lineHeight:C(2)+"px"},className:"jsx-1674335784"},"Paint"),_("div",{style:{position:"relative",lineHeight:0,marginRight:w},className:"jsx-1674335784"},_("canvas",{ref:P,className:"jsx-1674335784"}),_("div",{style:{position:"absolute",left:0,top:0,width:"100%",height:"100%",lineHeight:C(2)+"px",color:"black",WebkitTextStroke:"2px black",textAlign:"center"},className:"jsx-1674335784"},"Space"),_("div",{style:{position:"absolute",left:0,top:0,width:"100%",height:"100%",lineHeight:C(2)+"px",color:"white",textAlign:"center",cursor:"default",userSelect:"none"},onMouseDown:function(){X(" ")},onMouseUp:function(){J(" ")},onTouchStart:function(e){X(" "),e.preventDefault()},onTouchEnd:function(e){J(" "),e.preventDefault()},className:"jsx-1674335784"},"Space")),_("div",{ref:B,style:{width:C(14),display:"flex",lineHeight:C(2)+"px"},className:"jsx-1674335784"},_("div",{style:{width:C(2),background:"#bbb",cursor:"default",textAlign:"center"},onMouseDown:function(){X("t")},onMouseUp:function(){J("t")},onTouchStart:function(e){X("t"),e.preventDefault()},onTouchEnd:function(e){J("t"),e.preventDefault()},className:"jsx-1674335784"},"t"),_(F,null),_("div",{className:"jsx-1674335784"},"turn paint lock"),_(F,null),_("div",{className:"jsx-1674335784"}))),_("div",{className:"jsx-1674335784"},_("div",{style:{lineHeight:C(2)+"px"},className:"jsx-1674335784"},"Navigation"),_("div",{style:{position:"relative",lineHeight:0},className:"jsx-1674335784"},_("canvas",{ref:L,className:"jsx-1674335784"}),_("div",{style:{position:"absolute",left:0,top:0,width:C(12),display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gridTemplateRows:"1fr 1fr",textAlign:"center",lineHeight:C(2)+"px",cursor:"default",userSelect:"none"},className:"jsx-1674335784"},R.map((function(e){return _("div",{onMouseDown:function(){X(e)},onMouseUp:function(){J(e)},onTouchStart:function(t){X(e),t.preventDefault()},onTouchEnd:function(t){J(e),t.preventDefault()},className:"jsx-1674335784"},e)})),k.map((function(e,t){return _("div",{onMouseDown:function(){X(T[t])},onMouseUp:function(){J(T[t])},onTouchStart:function(e){X(T[t]),e.preventDefault()},onTouchEnd:function(e){J(T[t]),e.preventDefault()},className:"jsx-1674335784"},e)})))))),_("div",{style:{paddingLeft:w/2,paddingRight:w/2},className:"jsx-1674335784"},_("div",{style:{position:"relative",display:"flex",lineHeight:C(2)+"px",textAlign:"center"},className:"jsx-1674335784"},_("div",{className:"jsx-1674335784"},_("a",{href:"https://github.com/constraint-systems/rgb",target:"_blank",style:{color:"inherit"},className:"jsx-1674335784"},"view source"))))),_(p.a,{id:"1674335784"},["@font-face{font-family:'custom';src:url('/fonts/IBMPlexMono-Regular.woff2') format('woff2'), url('/fonts/IBMPlexMono-Regular.woff') format('woff');}","@font-face{font-family:'custom';src:url('/fonts/IBMPlexMono-Italic.woff2') format('woff2'), url('/fonts/IBMPlexMono-Italic.woff') format('woff');font-style:italic;}","html,body{padding:0;margin:0;font-family:'custom',monospace;}","body{background:#ddd;}","*{box-sizing:border-box;}"]))}},"RRc/":function(e,t,n){var r=n("oioR");e.exports=function(e,t){var n=[];return r(e,!1,n.push,n,t),n}},SevZ:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=o(n("9kyW")),i=o(n("bVZc"));function o(e){return e&&e.__esModule?e:{default:e}}var s=function(){function e(e){var t=void 0===e?{}:e,n=t.styleSheet,r=void 0===n?null:n,o=t.optimizeForSpeed,s=void 0!==o&&o,u=t.isBrowser,a=void 0===u?"undefined"!==typeof window:u;this._sheet=r||new i.default({name:"styled-jsx",optimizeForSpeed:s}),this._sheet.inject(),r&&"boolean"===typeof s&&(this._sheet.setOptimizeForSpeed(s),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=a,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var n=this.getIdAndRules(e),r=n.styleId,i=n.rules;if(r in this._instancesCounts)this._instancesCounts[r]+=1;else{var o=i.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[r]=o,this._instancesCounts[r]=1}},t.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[n]),delete this._instancesCounts[n]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return n[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,n){if(!n)return"jsx-"+t;var i=String(n),o=t+i;return e[o]||(e[o]="jsx-"+(0,r.default)(t+"-"+i)),e[o]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(n,r){this._isBrowser||(r=r.replace(/\/style/gi,"\\/style"));var i=n+r;return t[i]||(t[i]=r.replace(e,n)),t[i]}},t.getIdAndRules=function(e){var t=this,n=e.children,r=e.dynamic,i=e.id;if(r){var o=this.computeId(i,r);return{styleId:o,rules:Array.isArray(n)?n.map((function(e){return t.computeSelector(o,e)})):[this.computeSelector(o,n)]}}return{styleId:this.computeId(i),rules:Array.isArray(n)?n:[n]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=s},TbGu:function(e,t,n){var r=n("fGSI"),i=n("PQJW"),o=n("2PDY");e.exports=function(e){return r(e)||i(e)||o()}},"V+O7":function(e,t,n){n("aPfg")("Set")},VJsP:function(e,t,n){"use strict";var r=n("2GTP"),i=n("Y7ZC"),o=n("JB68"),s=n("sNwI"),u=n("NwJ3"),a=n("tEej"),c=n("IP1Z"),l=n("fNZA");i(i.S+i.F*!n("TuGD")((function(e){Array.from(e)})),"Array",{from:function(e){var t,n,i,f,h=o(e),d="function"==typeof this?this:Array,p=arguments.length,v=p>1?arguments[1]:void 0,m=void 0!==v,y=0,g=l(h);if(m&&(v=r(v,p>2?arguments[2]:void 0,2)),void 0==g||d==Array&&u(g))for(n=new d(t=a(h.length));t>y;y++)c(n,y,m?v(h[y],y):h[y]);else for(f=g.call(h),n=new d;!(i=f.next()).done;y++)c(n,y,m?s(f,v,[i.value,y],!0):i.value);return n.length=y,n}})},Wu5q:function(e,t,n){"use strict";var r=n("2faE").f,i=n("oVml"),o=n("XJU/"),s=n("2GTP"),u=n("EXMj"),a=n("oioR"),c=n("MPFp"),l=n("UO39"),f=n("TJWN"),h=n("jmDH"),d=n("6/1s").fastKey,p=n("n3ko"),v=h?"_s":"size",m=function(e,t){var n,r=d(t);if("F"!==r)return e._i[r];for(n=e._f;n;n=n.n)if(n.k==t)return n};e.exports={getConstructor:function(e,t,n,c){var l=e((function(e,r){u(e,l,t,"_i"),e._t=t,e._i=i(null),e._f=void 0,e._l=void 0,e[v]=0,void 0!=r&&a(r,n,e[c],e)}));return o(l.prototype,{clear:function(){for(var e=p(this,t),n=e._i,r=e._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete n[r.i];e._f=e._l=void 0,e[v]=0},delete:function(e){var n=p(this,t),r=m(n,e);if(r){var i=r.n,o=r.p;delete n._i[r.i],r.r=!0,o&&(o.n=i),i&&(i.p=o),n._f==r&&(n._f=i),n._l==r&&(n._l=o),n[v]--}return!!r},forEach:function(e){p(this,t);for(var n,r=s(e,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(e){return!!m(p(this,t),e)}}),h&&r(l.prototype,"size",{get:function(){return p(this,t)[v]}}),l},def:function(e,t,n){var r,i,o=m(e,t);return o?o.v=n:(e._l=o={i:i=d(t,!0),k:t,v:n,p:r=e._l,n:void 0,r:!1},e._f||(e._f=o),r&&(r.n=o),e[v]++,"F"!==i&&(e._i[i]=o)),e},getEntry:m,setStrong:function(e,t,n){c(e,t,(function(e,n){this._t=p(e,t),this._k=n,this._l=void 0}),(function(){for(var e=this._k,t=this._l;t&&t.r;)t=t.p;return this._t&&(this._l=t=t?t.n:this._t._f)?l(0,"keys"==e?t.k:"values"==e?t.v:[t.k,t.v]):(this._t=void 0,l(1))}),n?"entries":"values",!n,!0),f(t)}}},Xuae:function(e,t,n){"use strict";var r=n("/HRN"),i=n("ZDA2"),o=n("/+P4"),s=n("K47E"),u=n("WaGi"),a=n("N9n2"),c=n("TbGu"),l=n("ttDY");n("hfKm")(t,"__esModule",{value:!0});var f=n("q1tI"),h=!1;t.default=function(){var e,t=new l;function n(n){e=n.props.reduceComponentsToState(c(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(c){function l(e){var u;return r(this,l),u=i(this,o(l).call(this,e)),h&&(t.add(s(u)),n(s(u))),u}return a(l,c),u(l,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),u(l,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),l}(f.Component)}},bVZc:function(e,t,n){"use strict";(function(e){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}t.__esModule=!0,t.default=void 0;var r="undefined"!==typeof e&&e.env&&!0,i=function(e){return"[object String]"===Object.prototype.toString.call(e)},o=function(){function e(e){var t=void 0===e?{}:e,n=t.name,o=void 0===n?"stylesheet":n,u=t.optimizeForSpeed,a=void 0===u?r:u,c=t.isBrowser,l=void 0===c?"undefined"!==typeof window:c;s(i(o),"`name` must be a string"),this._name=o,this._deletedRulePlaceholder="#"+o+"-deleted-rule____{}",s("boolean"===typeof a,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=a,this._isBrowser=l,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var f=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=f?f.getAttribute("content"):null}var t,o,u,a=e.prototype;return a.setOptimizeForSpeed=function(e){s("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),s(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},a.isOptimizeForSpeed=function(){return this._optimizeForSpeed},a.inject=function(){var e=this;if(s(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(r||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"===typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},a.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},a.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},a.insertRule=function(e,t){if(s(i(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var n=this.getSheet();"number"!==typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(u){return r||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var o=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,o))}return this._rulesCount++},a.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var n=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(o){r||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var i=this._tags[e];s(i,"old rule at index `"+e+"` not found"),i.textContent=t}return e},a.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];s(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},a.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},a.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},a.makeStyleTag=function(e,t,n){t&&s(i(t),"makeStyleTag acceps only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var o=document.head||document.getElementsByTagName("head")[0];return n?o.insertBefore(r,n):o.appendChild(r),r},t=e,(o=[{key:"length",get:function(){return this._rulesCount}}])&&n(t.prototype,o),u&&n(t,u),e}();function s(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=o}).call(this,n("8oxB"))},d04V:function(e,t,n){e.exports=n("0tVQ")},dL40:function(e,t,n){var r=n("Y7ZC");r(r.P+r.R,"Set",{toJSON:n("8iia")("Set")})},fGSI:function(e,t,n){var r=n("p0XB");e.exports=function(e){if(r(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},lwAK:function(e,t,n){"use strict";var r=n("hfKm"),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};r(t,"__esModule",{value:!0});var o=i(n("q1tI"));t.AmpStateContext=o.createContext({})},ttDY:function(e,t,n){e.exports=n("+iuc")},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])},xvv9:function(e,t,n){n("cHUd")("Set")}},[["vlRD",1,2,0]]]);