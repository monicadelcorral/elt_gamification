/**
* loadJSON Ejecuta una llamada asíncrona dependiendo del entorno para obtener el cursoJSON
* @param  	function 	callback 	Función de callback del ajax.
* @return 	boolean		False en caso de que no haya callback.
*/
function loadJSON(callback) {
	if (editar || !callback && typeof callback === 'undefined') {
		return false;
	}

	blink.clearCourseJSONCached(window.idcurso);

	// Protection against a non defined promise.
	var coursePromise = blink.getCourse(window.idcurso);
	coursePromise && typeof coursePromise.done === 'function' && coursePromise.done(callback);
}


// ████░██▄░▄██░████░████░████▄░██▄░██░░▄███▄░░██░░
// ██▄░░░▀███▀░░░██░░██▄░░██░██░███▄██░██▀░▀██░██░░
// ██▀░░░▄███▄░░░██░░██▀░░████▀░██▀███░███████░██░░
// ████░██▀░▀██░░██░░████░██░██░██░░██░██░░░██░████


/*!
 * Glide.js v3.5.2
 * (c) 2013-2022 Jędrzej Chałubek (https://github.com/jedrzejchalubek/)
 * Released under the MIT License.
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).Glide=e()}(this,(function(){"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function i(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}function r(t){return r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},r(t)}function o(t,e){return o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},o(t,e)}function s(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function a(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=r(t);if(e){var o=r(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return s(this,n)}}function u(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=r(t)););return t}function c(){return c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var i=u(t,e);if(i){var r=Object.getOwnPropertyDescriptor(i,e);return r.get?r.get.call(arguments.length<3?t:n):r.value}},c.apply(this,arguments)}var l={type:"slider",startAt:0,perView:1,focusAt:0,gap:10,autoplay:!1,hoverpause:!0,keyboard:!0,bound:!1,swipeThreshold:80,dragThreshold:120,perSwipe:"",touchRatio:.5,touchAngle:45,animationDuration:400,rewind:!0,rewindDuration:800,animationTimingFunc:"cubic-bezier(.165, .840, .440, 1)",waitForTransition:!0,throttle:10,direction:"ltr",peek:0,cloningRatio:1,breakpoints:{},classes:{swipeable:"glide--swipeable",dragging:"glide--dragging",direction:{ltr:"glide--ltr",rtl:"glide--rtl"},type:{slider:"glide--slider",carousel:"glide--carousel"},slide:{clone:"glide__slide--clone",active:"glide__slide--active"},arrow:{disabled:"glide__arrow--disabled"},nav:{active:"glide__bullet--active"}}};function f(t){console.error("[Glide warn]: ".concat(t))}function d(t){return parseInt(t)}function h(t){return"string"==typeof t}function v(e){var n=t(e);return"function"===n||"object"===n&&!!e}function p(t){return"function"==typeof t}function m(t){return void 0===t}function g(t){return t.constructor===Array}function y(t,e,n){var i={};for(var r in e)p(e[r])?i[r]=e[r](t,i,n):f("Extension must be a function");for(var o in i)p(i[o].mount)&&i[o].mount();return i}function b(t,e,n){Object.defineProperty(t,e,n)}function w(t,e){var n=Object.assign({},t,e);return e.hasOwnProperty("classes")&&(n.classes=Object.assign({},t.classes,e.classes),e.classes.hasOwnProperty("direction")&&(n.classes.direction=Object.assign({},t.classes.direction,e.classes.direction)),e.classes.hasOwnProperty("type")&&(n.classes.type=Object.assign({},t.classes.type,e.classes.type)),e.classes.hasOwnProperty("slide")&&(n.classes.slide=Object.assign({},t.classes.slide,e.classes.slide)),e.classes.hasOwnProperty("arrow")&&(n.classes.arrow=Object.assign({},t.classes.arrow,e.classes.arrow)),e.classes.hasOwnProperty("nav")&&(n.classes.nav=Object.assign({},t.classes.nav,e.classes.nav))),e.hasOwnProperty("breakpoints")&&(n.breakpoints=Object.assign({},t.breakpoints,e.breakpoints)),n}var _=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e(this,t),this.events=n,this.hop=n.hasOwnProperty}return i(t,[{key:"on",value:function(t,e){if(!g(t)){this.hop.call(this.events,t)||(this.events[t]=[]);var n=this.events[t].push(e)-1;return{remove:function(){delete this.events[t][n]}}}for(var i=0;i<t.length;i++)this.on(t[i],e)}},{key:"emit",value:function(t,e){if(g(t))for(var n=0;n<t.length;n++)this.emit(t[n],e);else this.hop.call(this.events,t)&&this.events[t].forEach((function(t){t(e||{})}))}}]),t}(),k=function(){function t(n){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e(this,t),this._c={},this._t=[],this._e=new _,this.disabled=!1,this.selector=n,this.settings=w(l,i),this.index=this.settings.startAt}return i(t,[{key:"mount",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._e.emit("mount.before"),v(t)?this._c=y(this,t,this._e):f("You need to provide a object on `mount()`"),this._e.emit("mount.after"),this}},{key:"mutate",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return g(t)?this._t=t:f("You need to provide a array on `mutate()`"),this}},{key:"update",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.settings=w(this.settings,t),t.hasOwnProperty("startAt")&&(this.index=t.startAt),this._e.emit("update"),this}},{key:"go",value:function(t){return this._c.Run.make(t),this}},{key:"move",value:function(t){return this._c.Transition.disable(),this._c.Move.make(t),this}},{key:"destroy",value:function(){return this._e.emit("destroy"),this}},{key:"play",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return t&&(this.settings.autoplay=t),this._e.emit("play"),this}},{key:"pause",value:function(){return this._e.emit("pause"),this}},{key:"disable",value:function(){return this.disabled=!0,this}},{key:"enable",value:function(){return this.disabled=!1,this}},{key:"on",value:function(t,e){return this._e.on(t,e),this}},{key:"isType",value:function(t){return this.settings.type===t}},{key:"settings",get:function(){return this._o},set:function(t){v(t)?this._o=t:f("Options must be an `object` instance.")}},{key:"index",get:function(){return this._i},set:function(t){this._i=d(t)}},{key:"type",get:function(){return this.settings.type}},{key:"disabled",get:function(){return this._d},set:function(t){this._d=!!t}}]),t}();function S(){return(new Date).getTime()}function H(t,e,n){var i,r,o,s,a=0;n||(n={});var u=function(){a=!1===n.leading?0:S(),i=null,s=t.apply(r,o),i||(r=o=null)},c=function(){var c=S();a||!1!==n.leading||(a=c);var l=e-(c-a);return r=this,o=arguments,l<=0||l>e?(i&&(clearTimeout(i),i=null),a=c,s=t.apply(r,o),i||(r=o=null)):i||!1===n.trailing||(i=setTimeout(u,l)),s};return c.cancel=function(){clearTimeout(i),a=0,i=r=o=null},c}var O={ltr:["marginLeft","marginRight"],rtl:["marginRight","marginLeft"]};function T(t){if(t&&t.parentNode){for(var e=t.parentNode.firstChild,n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}return[]}function x(t){return!!(t&&t instanceof window.HTMLElement)}var A='[data-glide-el="track"]';var j=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e(this,t),this.listeners=n}return i(t,[{key:"on",value:function(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];h(t)&&(t=[t]);for(var r=0;r<t.length;r++)this.listeners[t[r]]=n,e.addEventListener(t[r],this.listeners[t[r]],i)}},{key:"off",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];h(t)&&(t=[t]);for(var i=0;i<t.length;i++)e.removeEventListener(t[i],this.listeners[t[i]],n)}},{key:"destroy",value:function(){delete this.listeners}}]),t}();var R=["ltr","rtl"],P={">":"<","<":">","=":"="};function C(t,e){return{modify:function(t){return e.Direction.is("rtl")?-t:t}}}function M(t,e){return{modify:function(t){var n=Math.floor(t/e.Sizes.slideWidth);return t+e.Gaps.value*n}}}function z(t,e){return{modify:function(t){return t+e.Clones.grow/2}}}function E(t,e){return{modify:function(n){if(t.settings.focusAt>=0){var i=e.Peek.value;return v(i)?n-i.before:n-i}return n}}}function L(t,e){return{modify:function(n){var i=e.Gaps.value,r=e.Sizes.width,o=t.settings.focusAt,s=e.Sizes.slideWidth;return"center"===o?n-(r/2-s/2):n-s*o-i*o}}}var D=!1;try{var B=Object.defineProperty({},"passive",{get:function(){D=!0}});window.addEventListener("testPassive",null,B),window.removeEventListener("testPassive",null,B)}catch(t){}var W=D,q=["touchstart","mousedown"],I=["touchmove","mousemove"],V=["touchend","touchcancel","mouseup","mouseleave"],G=["mousedown","mousemove","mouseup","mouseleave"];var F='[data-glide-el^="controls"]',N="".concat(F,' [data-glide-dir*="<"]'),Y="".concat(F,' [data-glide-dir*=">"]');function X(t){return v(t)?(e=t,Object.keys(e).sort().reduce((function(t,n){return t[n]=e[n],t[n],t}),{})):(f("Breakpoints option must be an object"),{});var e}var K={Html:function(t,e,n){var i={mount:function(){this.root=t.selector,this.track=this.root.querySelector(A),this.collectSlides()},collectSlides:function(){this.slides=Array.prototype.slice.call(this.wrapper.children).filter((function(e){return!e.classList.contains(t.settings.classes.slide.clone)}))}};return b(i,"root",{get:function(){return i._r},set:function(t){h(t)&&(t=document.querySelector(t)),x(t)?i._r=t:f("Root element must be a existing Html node")}}),b(i,"track",{get:function(){return i._t},set:function(t){x(t)?i._t=t:f("Could not find track element. Please use ".concat(A," attribute."))}}),b(i,"wrapper",{get:function(){return i.track.children[0]}}),n.on("update",(function(){i.collectSlides()})),i},Translate:function(t,e,n){var i={set:function(n){var i=function(t,e,n){var i=[M,z,E,L].concat(t._t,[C]);return{mutate:function(r){for(var o=0;o<i.length;o++){var s=i[o];p(s)&&p(s().modify)?r=s(t,e,n).modify(r):f("Transformer should be a function that returns an object with `modify()` method")}return r}}}(t,e).mutate(n),r="translate3d(".concat(-1*i,"px, 0px, 0px)");e.Html.wrapper.style.mozTransform=r,e.Html.wrapper.style.webkitTransform=r,e.Html.wrapper.style.transform=r},remove:function(){e.Html.wrapper.style.transform=""},getStartIndex:function(){var n=e.Sizes.length,i=t.index,r=t.settings.perView;return e.Run.isOffset(">")||e.Run.isOffset("|>")?n+(i-r):(i+r)%n},getTravelDistance:function(){var n=e.Sizes.slideWidth*t.settings.perView;return e.Run.isOffset(">")||e.Run.isOffset("|>")?-1*n:n}};return n.on("move",(function(r){if(!t.isType("carousel")||!e.Run.isOffset())return i.set(r.movement);e.Transition.after((function(){n.emit("translate.jump"),i.set(e.Sizes.slideWidth*t.index)}));var o=e.Sizes.slideWidth*e.Translate.getStartIndex();return i.set(o-e.Translate.getTravelDistance())})),n.on("destroy",(function(){i.remove()})),i},Transition:function(t,e,n){var i=!1,r={compose:function(e){var n=t.settings;return i?"".concat(e," 0ms ").concat(n.animationTimingFunc):"".concat(e," ").concat(this.duration,"ms ").concat(n.animationTimingFunc)},set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"transform";e.Html.wrapper.style.transition=this.compose(t)},remove:function(){e.Html.wrapper.style.transition=""},after:function(t){setTimeout((function(){t()}),this.duration)},enable:function(){i=!1,this.set()},disable:function(){i=!0,this.set()}};return b(r,"duration",{get:function(){var n=t.settings;return t.isType("slider")&&e.Run.offset?n.rewindDuration:n.animationDuration}}),n.on("move",(function(){r.set()})),n.on(["build.before","resize","translate.jump"],(function(){r.disable()})),n.on("run",(function(){r.enable()})),n.on("destroy",(function(){r.remove()})),r},Direction:function(t,e,n){var i={mount:function(){this.value=t.settings.direction},resolve:function(t){var e=t.slice(0,1);return this.is("rtl")?t.split(e).join(P[e]):t},is:function(t){return this.value===t},addClass:function(){e.Html.root.classList.add(t.settings.classes.direction[this.value])},removeClass:function(){e.Html.root.classList.remove(t.settings.classes.direction[this.value])}};return b(i,"value",{get:function(){return i._v},set:function(t){R.indexOf(t)>-1?i._v=t:f("Direction value must be `ltr` or `rtl`")}}),n.on(["destroy","update"],(function(){i.removeClass()})),n.on("update",(function(){i.mount()})),n.on(["build.before","update"],(function(){i.addClass()})),i},Peek:function(t,e,n){var i={mount:function(){this.value=t.settings.peek}};return b(i,"value",{get:function(){return i._v},set:function(t){v(t)?(t.before=d(t.before),t.after=d(t.after)):t=d(t),i._v=t}}),b(i,"reductor",{get:function(){var e=i.value,n=t.settings.perView;return v(e)?e.before/n+e.after/n:2*e/n}}),n.on(["resize","update"],(function(){i.mount()})),i},Sizes:function(t,e,n){var i={setupSlides:function(){for(var t="".concat(this.slideWidth,"px"),n=e.Html.slides,i=0;i<n.length;i++)n[i].style.width=t},setupWrapper:function(){e.Html.wrapper.style.width="".concat(this.wrapperSize,"px")},remove:function(){for(var t=e.Html.slides,n=0;n<t.length;n++)t[n].style.width="";e.Html.wrapper.style.width=""}};return b(i,"length",{get:function(){return e.Html.slides.length}}),b(i,"width",{get:function(){return e.Html.track.offsetWidth}}),b(i,"wrapperSize",{get:function(){return i.slideWidth*i.length+e.Gaps.grow+e.Clones.grow}}),b(i,"slideWidth",{get:function(){return i.width/t.settings.perView-e.Peek.reductor-e.Gaps.reductor}}),n.on(["build.before","resize","update"],(function(){i.setupSlides(),i.setupWrapper()})),n.on("destroy",(function(){i.remove()})),i},Gaps:function(t,e,n){var i={apply:function(t){for(var n=0,i=t.length;n<i;n++){var r=t[n].style,o=e.Direction.value;r[O[o][0]]=0!==n?"".concat(this.value/2,"px"):"",n!==t.length-1?r[O[o][1]]="".concat(this.value/2,"px"):r[O[o][1]]=""}},remove:function(t){for(var e=0,n=t.length;e<n;e++){var i=t[e].style;i.marginLeft="",i.marginRight=""}}};return b(i,"value",{get:function(){return d(t.settings.gap)}}),b(i,"grow",{get:function(){return i.value*e.Sizes.length}}),b(i,"reductor",{get:function(){var e=t.settings.perView;return i.value*(e-1)/e}}),n.on(["build.after","update"],H((function(){i.apply(e.Html.wrapper.children)}),30)),n.on("destroy",(function(){i.remove(e.Html.wrapper.children)})),i},Move:function(t,e,n){var i={mount:function(){this._o=0},make:function(){var t=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.offset=i,n.emit("move",{movement:this.value}),e.Transition.after((function(){n.emit("move.after",{movement:t.value})}))}};return b(i,"offset",{get:function(){return i._o},set:function(t){i._o=m(t)?0:d(t)}}),b(i,"translate",{get:function(){return e.Sizes.slideWidth*t.index}}),b(i,"value",{get:function(){var t=this.offset,n=this.translate;return e.Direction.is("rtl")?n+t:n-t}}),n.on(["build.before","run"],(function(){i.make()})),i},Clones:function(t,e,n){var i={mount:function(){this.items=[],t.isType("carousel")&&(this.items=this.collect())},collect:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=e.Html.slides,r=t.settings,o=r.perView,s=r.classes,a=r.cloningRatio;if(0!==i.length)for(var u=+!!t.settings.peek,c=o+u+Math.round(o/2),l=i.slice(0,c).reverse(),f=i.slice(-1*c),d=0;d<Math.max(a,Math.floor(o/i.length));d++){for(var h=0;h<l.length;h++){var v=l[h].cloneNode(!0);v.classList.add(s.slide.clone),n.push(v)}for(var p=0;p<f.length;p++){var m=f[p].cloneNode(!0);m.classList.add(s.slide.clone),n.unshift(m)}}return n},append:function(){for(var t=this.items,n=e.Html,i=n.wrapper,r=n.slides,o=Math.floor(t.length/2),s=t.slice(0,o).reverse(),a=t.slice(-1*o).reverse(),u="".concat(e.Sizes.slideWidth,"px"),c=0;c<a.length;c++)i.appendChild(a[c]);for(var l=0;l<s.length;l++)i.insertBefore(s[l],r[0]);for(var f=0;f<t.length;f++)t[f].style.width=u},remove:function(){for(var t=this.items,n=0;n<t.length;n++)e.Html.wrapper.removeChild(t[n])}};return b(i,"grow",{get:function(){return(e.Sizes.slideWidth+e.Gaps.value)*i.items.length}}),n.on("update",(function(){i.remove(),i.mount(),i.append()})),n.on("build.before",(function(){t.isType("carousel")&&i.append()})),n.on("destroy",(function(){i.remove()})),i},Resize:function(t,e,n){var i=new j,r={mount:function(){this.bind()},bind:function(){i.on("resize",window,H((function(){n.emit("resize")}),t.settings.throttle))},unbind:function(){i.off("resize",window)}};return n.on("destroy",(function(){r.unbind(),i.destroy()})),r},Build:function(t,e,n){var i={mount:function(){n.emit("build.before"),this.typeClass(),this.activeClass(),n.emit("build.after")},typeClass:function(){e.Html.root.classList.add(t.settings.classes.type[t.settings.type])},activeClass:function(){var n=t.settings.classes,i=e.Html.slides[t.index];i&&(i.classList.add(n.slide.active),T(i).forEach((function(t){t.classList.remove(n.slide.active)})))},removeClasses:function(){var n=t.settings.classes,i=n.type,r=n.slide;e.Html.root.classList.remove(i[t.settings.type]),e.Html.slides.forEach((function(t){t.classList.remove(r.active)}))}};return n.on(["destroy","update"],(function(){i.removeClasses()})),n.on(["resize","update"],(function(){i.mount()})),n.on("move.after",(function(){i.activeClass()})),i},Run:function(t,e,n){var i={mount:function(){this._o=!1},make:function(i){var r=this;t.disabled||(!t.settings.waitForTransition||t.disable(),this.move=i,n.emit("run.before",this.move),this.calculate(),n.emit("run",this.move),e.Transition.after((function(){r.isStart()&&n.emit("run.start",r.move),r.isEnd()&&n.emit("run.end",r.move),r.isOffset()&&(r._o=!1,n.emit("run.offset",r.move)),n.emit("run.after",r.move),t.enable()})))},calculate:function(){var e=this.move,n=this.length,r=e.steps,o=e.direction,s=1;if("="===o)return t.settings.bound&&d(r)>n?void(t.index=n):void(t.index=r);if(">"!==o||">"!==r)if("<"!==o||"<"!==r){if("|"===o&&(s=t.settings.perView||1),">"===o||"|"===o&&">"===r){var a=function(e){var n=t.index;if(t.isType("carousel"))return n+e;return n+(e-n%e)}(s);return a>n&&(this._o=!0),void(t.index=function(e,n){var r=i.length;if(e<=r)return e;if(t.isType("carousel"))return e-(r+1);if(t.settings.rewind)return i.isBound()&&!i.isEnd()?r:0;if(i.isBound())return r;return Math.floor(r/n)*n}(a,s))}if("<"===o||"|"===o&&"<"===r){var u=function(e){var n=t.index;if(t.isType("carousel"))return n-e;return(Math.ceil(n/e)-1)*e}(s);return u<0&&(this._o=!0),void(t.index=function(e,n){var r=i.length;if(e>=0)return e;if(t.isType("carousel"))return e+(r+1);if(t.settings.rewind)return i.isBound()&&i.isStart()?r:Math.floor(r/n)*n;return 0}(u,s))}f("Invalid direction pattern [".concat(o).concat(r,"] has been used"))}else t.index=0;else t.index=n},isStart:function(){return t.index<=0},isEnd:function(){return t.index>=this.length},isOffset:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;return t?!!this._o&&("|>"===t?"|"===this.move.direction&&">"===this.move.steps:"|<"===t?"|"===this.move.direction&&"<"===this.move.steps:this.move.direction===t):this._o},isBound:function(){return t.isType("slider")&&"center"!==t.settings.focusAt&&t.settings.bound}};return b(i,"move",{get:function(){return this._m},set:function(t){var e=t.substr(1);this._m={direction:t.substr(0,1),steps:e?d(e)?d(e):e:0}}}),b(i,"length",{get:function(){var n=t.settings,i=e.Html.slides.length;return this.isBound()?i-1-(d(n.perView)-1)+d(n.focusAt):i-1}}),b(i,"offset",{get:function(){return this._o}}),i},Swipe:function(t,e,n){var i=new j,r=0,o=0,s=0,a=!1,u=!!W&&{passive:!0},c={mount:function(){this.bindSwipeStart()},start:function(e){if(!a&&!t.disabled){this.disable();var i=this.touches(e);r=null,o=d(i.pageX),s=d(i.pageY),this.bindSwipeMove(),this.bindSwipeEnd(),n.emit("swipe.start")}},move:function(i){if(!t.disabled){var a=t.settings,u=a.touchAngle,c=a.touchRatio,l=a.classes,f=this.touches(i),h=d(f.pageX)-o,v=d(f.pageY)-s,p=Math.abs(h<<2),m=Math.abs(v<<2),g=Math.sqrt(p+m),y=Math.sqrt(m);if(!(180*(r=Math.asin(y/g))/Math.PI<u))return!1;i.stopPropagation(),e.Move.make(h*parseFloat(c)),e.Html.root.classList.add(l.dragging),n.emit("swipe.move")}},end:function(i){if(!t.disabled){var s=t.settings,a=s.perSwipe,u=s.touchAngle,c=s.classes,l=this.touches(i),f=this.threshold(i),d=l.pageX-o,h=180*r/Math.PI;this.enable(),d>f&&h<u?e.Run.make(e.Direction.resolve("".concat(a,"<"))):d<-f&&h<u?e.Run.make(e.Direction.resolve("".concat(a,">"))):e.Move.make(),e.Html.root.classList.remove(c.dragging),this.unbindSwipeMove(),this.unbindSwipeEnd(),n.emit("swipe.end")}},bindSwipeStart:function(){var n=this,r=t.settings,o=r.swipeThreshold,s=r.dragThreshold;o&&i.on(q[0],e.Html.wrapper,(function(t){n.start(t)}),u),s&&i.on(q[1],e.Html.wrapper,(function(t){n.start(t)}),u)},unbindSwipeStart:function(){i.off(q[0],e.Html.wrapper,u),i.off(q[1],e.Html.wrapper,u)},bindSwipeMove:function(){var n=this;i.on(I,e.Html.wrapper,H((function(t){n.move(t)}),t.settings.throttle),u)},unbindSwipeMove:function(){i.off(I,e.Html.wrapper,u)},bindSwipeEnd:function(){var t=this;i.on(V,e.Html.wrapper,(function(e){t.end(e)}))},unbindSwipeEnd:function(){i.off(V,e.Html.wrapper)},touches:function(t){return G.indexOf(t.type)>-1?t:t.touches[0]||t.changedTouches[0]},threshold:function(e){var n=t.settings;return G.indexOf(e.type)>-1?n.dragThreshold:n.swipeThreshold},enable:function(){return a=!1,e.Transition.enable(),this},disable:function(){return a=!0,e.Transition.disable(),this}};return n.on("build.after",(function(){e.Html.root.classList.add(t.settings.classes.swipeable)})),n.on("destroy",(function(){c.unbindSwipeStart(),c.unbindSwipeMove(),c.unbindSwipeEnd(),i.destroy()})),c},Images:function(t,e,n){var i=new j,r={mount:function(){this.bind()},bind:function(){i.on("dragstart",e.Html.wrapper,this.dragstart)},unbind:function(){i.off("dragstart",e.Html.wrapper)},dragstart:function(t){t.preventDefault()}};return n.on("destroy",(function(){r.unbind(),i.destroy()})),r},Anchors:function(t,e,n){var i=new j,r=!1,o=!1,s={mount:function(){this._a=e.Html.wrapper.querySelectorAll("a"),this.bind()},bind:function(){i.on("click",e.Html.wrapper,this.click)},unbind:function(){i.off("click",e.Html.wrapper)},click:function(t){o&&(t.stopPropagation(),t.preventDefault())},detach:function(){if(o=!0,!r){for(var t=0;t<this.items.length;t++)this.items[t].draggable=!1;r=!0}return this},attach:function(){if(o=!1,r){for(var t=0;t<this.items.length;t++)this.items[t].draggable=!0;r=!1}return this}};return b(s,"items",{get:function(){return s._a}}),n.on("swipe.move",(function(){s.detach()})),n.on("swipe.end",(function(){e.Transition.after((function(){s.attach()}))})),n.on("destroy",(function(){s.attach(),s.unbind(),i.destroy()})),s},Controls:function(t,e,n){var i=new j,r=!!W&&{passive:!0},o={mount:function(){this._n=e.Html.root.querySelectorAll('[data-glide-el="controls[nav]"]'),this._c=e.Html.root.querySelectorAll(F),this._arrowControls={previous:e.Html.root.querySelectorAll(N),next:e.Html.root.querySelectorAll(Y)},this.addBindings()},setActive:function(){for(var t=0;t<this._n.length;t++)this.addClass(this._n[t].children)},removeActive:function(){for(var t=0;t<this._n.length;t++)this.removeClass(this._n[t].children)},addClass:function(e){var n=t.settings,i=e[t.index];i&&i&&(i.classList.add(n.classes.nav.active),T(i).forEach((function(t){t.classList.remove(n.classes.nav.active)})))},removeClass:function(e){var n=e[t.index];n&&n.classList.remove(t.settings.classes.nav.active)},setArrowState:function(){if(!t.settings.rewind){var n=o._arrowControls.next,i=o._arrowControls.previous;this.resetArrowState(n,i),0===t.index&&this.disableArrow(i),t.index===e.Run.length&&this.disableArrow(n)}},resetArrowState:function(){for(var e=t.settings,n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];i.forEach((function(t){t.forEach((function(t){t.classList.remove(e.classes.arrow.disabled)}))}))},disableArrow:function(){for(var e=t.settings,n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];i.forEach((function(t){t.forEach((function(t){t.classList.add(e.classes.arrow.disabled)}))}))},addBindings:function(){for(var t=0;t<this._c.length;t++)this.bind(this._c[t].children)},removeBindings:function(){for(var t=0;t<this._c.length;t++)this.unbind(this._c[t].children)},bind:function(t){for(var e=0;e<t.length;e++)i.on("click",t[e],this.click),i.on("touchstart",t[e],this.click,r)},unbind:function(t){for(var e=0;e<t.length;e++)i.off(["click","touchstart"],t[e])},click:function(t){W||"touchstart"!==t.type||t.preventDefault();var n=t.currentTarget.getAttribute("data-glide-dir");e.Run.make(e.Direction.resolve(n))}};return b(o,"items",{get:function(){return o._c}}),n.on(["mount.after","move.after"],(function(){o.setActive()})),n.on(["mount.after","run"],(function(){o.setArrowState()})),n.on("destroy",(function(){o.removeBindings(),o.removeActive(),i.destroy()})),o},Keyboard:function(t,e,n){var i=new j,r={mount:function(){t.settings.keyboard&&this.bind()},bind:function(){i.on("keyup",document,this.press)},unbind:function(){i.off("keyup",document)},press:function(n){var i=t.settings.perSwipe;39===n.keyCode&&e.Run.make(e.Direction.resolve("".concat(i,">"))),37===n.keyCode&&e.Run.make(e.Direction.resolve("".concat(i,"<")))}};return n.on(["destroy","update"],(function(){r.unbind()})),n.on("update",(function(){r.mount()})),n.on("destroy",(function(){i.destroy()})),r},Autoplay:function(t,e,n){var i=new j,r={mount:function(){this.enable(),this.start(),t.settings.hoverpause&&this.bind()},enable:function(){this._e=!0},disable:function(){this._e=!1},start:function(){var i=this;this._e&&(this.enable(),t.settings.autoplay&&m(this._i)&&(this._i=setInterval((function(){i.stop(),e.Run.make(">"),i.start(),n.emit("autoplay")}),this.time)))},stop:function(){this._i=clearInterval(this._i)},bind:function(){var t=this;i.on("mouseover",e.Html.root,(function(){t._e&&t.stop()})),i.on("mouseout",e.Html.root,(function(){t._e&&t.start()}))},unbind:function(){i.off(["mouseover","mouseout"],e.Html.root)}};return b(r,"time",{get:function(){var n=e.Html.slides[t.index].getAttribute("data-glide-autoplay");return d(n||t.settings.autoplay)}}),n.on(["destroy","update"],(function(){r.unbind()})),n.on(["run.before","swipe.start","update"],(function(){r.stop()})),n.on(["pause","destroy"],(function(){r.disable(),r.stop()})),n.on(["run.after","swipe.end"],(function(){r.start()})),n.on(["play"],(function(){r.enable(),r.start()})),n.on("update",(function(){r.mount()})),n.on("destroy",(function(){i.destroy()})),r},Breakpoints:function(t,e,n){var i=new j,r=t.settings,o=X(r.breakpoints),s=Object.assign({},r),a={match:function(t){if(void 0!==window.matchMedia)for(var e in t)if(t.hasOwnProperty(e)&&window.matchMedia("(max-width: ".concat(e,"px)")).matches)return t[e];return s}};return Object.assign(r,a.match(o)),i.on("resize",window,H((function(){t.settings=w(r,a.match(o))}),t.settings.throttle)),n.on("update",(function(){o=X(o),s=Object.assign({},r)})),n.on("destroy",(function(){i.off("resize",window)})),a}},J=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}(s,t);var n=a(s);function s(){return e(this,s),n.apply(this,arguments)}return i(s,[{key:"mount",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return c(r(s.prototype),"mount",this).call(this,Object.assign({},K,t))}}]),s}(k);return J}));





var gameApp = window.gameApp || {};

gameApp.isLoaded = false;

gameApp.config = {};
gameApp.config.isDEV = (ENTORNO === 'DEV');
gameApp.config.hasConnection = true;
gameApp.config.isStudent = false;
gameApp.config.isAnonymous = true;
gameApp.config.animationsDuration = 250;
gameApp.config.bodyClasses = ['gam-body-scoreboard'];
gameApp.config.userScoreIndex = 2;

gameApp.config.tags = {
    gamification_unit: "gamification_unit",
    gamification_bonus : "gamification_bonus",
    gamification_medals_limit_diamonds : "gamification_medals_limit_diamonds_"
}

gameApp.text = {
    gamification_go_to_scoreboard : "Go to Scoreboard",
    gamification_see_details : "See details",
    gamification_score_label : "Diamonds",
    gamification_scoreboard_title: "My Scoreboard",
    gamification_active_learning_kit : "Active Learning Kit",
    gamification_units: "Units",
    gamification_activities: "Activities",
    gamification_completed: "completed",
    gamification_close: "Close",
    gamification_score_brilliant : "Brilliant!",
    gamification_score_brilliant_subtitle : "Top score!",
    gamification_score_great : "Great!",
    gamification_score_great_subtitle : "Try again for a higher score.",
    gamification_score_well_done : "Well done!",
    gamification_score_well_done_subtitle : "Try again for a higher score.",
    gamification_score_not_bad : "Not bad!",
    gamification_score_not_bad_subtitle : "Try again.",
    gamification_score_fail : "Oh no!",
    gamification_score_fail_subtitle : "Try again.",
    gamification_continue : "Continue",
    gamification_try_again : "Try again",
    gamification_ok: "Ok",
    gamification_start_activity : "Go to activity",
    gamification_bonus_locked : "<span>Bonus activity</span> locked!",
    gamification_bonus_unlocked : "<span>Bonus activity</span> unlocked!",
    gamification_bonus_locked_subtitle : "Oops! Complete all the activities on this page to unlock the Bonus activity.",
    gamification_bonus_unlocked_subtitle : "Win 25 bonus diamonds!",
    gamification_medals : "Medals",
    gamification_no_medals : "No medals",
    gamification_medal_new : "New medal",
    gamification_medal_title : "Well done",
    gamification_medal_subtitle_1 : "You completed %1 of the activities!",
    gamification_medal_subtitle_2 : "You completed %1 Bonus activities!",
    gamification_medal_subtitle_3 : "You won %1 diamonds!"
}

gameApp.themeName = "oxford-elt";

gameApp.sounds = {
	0: '../themes/responsive/assets/styles/'+gameApp.themeName+'/ext/sounds/mixkit-neutral-bot-pinbal-tone-3137.mp3',
	1: '../themes/responsive/assets/styles/'+gameApp.themeName+'/ext/sounds/mixkit-bubbly-achievement-tone-3193.mp3',
	2: '../themes/responsive/assets/styles/'+gameApp.themeName+'/ext/sounds/mixkit-unlock-new-item-game-notification-254.mp3',
	3: '../themes/responsive/assets/styles/'+gameApp.themeName+'/ext/sounds/mixkit-mechanical-crate-pick-up-3154.mp3',
}

gameApp.config.tokens = {
    intervals: [
        {
            minPercent: -1,
            maxPercent: 0,
            given: 0,
            title: gameApp.text.gamification_score_fail,
            subtitle: gameApp.text.gamification_score_fail_subtitle,
            sound: gameApp.sounds[0]
        },
        {
            minPercent: 1,
            maxPercent: 24,
            given: 20,
            title: gameApp.text.gamification_score_fail,
            subtitle: gameApp.text.gamification_score_fail_subtitle,
            sound: gameApp.sounds[0]
        },
        {
            minPercent: 25,
            maxPercent: 49,
            given: 40,
            title: gameApp.text.gamification_score_not_bad,
            subtitle: gameApp.text.gamification_score_not_bad_subtitle,
            sound: gameApp.sounds[1]
        },
        {
            minPercent: 50,
            maxPercent: 69,
            given: 60,
            title: gameApp.text.gamification_score_well_done,
            subtitle: gameApp.text.gamification_score_well_done_subtitle,
            sound: gameApp.sounds[1]
        },
        {
            minPercent: 70,
            maxPercent: 99,
            given: 80,
            title: gameApp.text.gamification_score_great,
            subtitle: gameApp.text.gamification_score_great_subtitle,
            sound: gameApp.sounds[1]
        },
        {
            minPercent: 100,
            maxPercent: 100,
            given: 100,
            title: gameApp.text.gamification_score_brilliant,
            subtitle: gameApp.text.gamification_score_brilliant_subtitle,
            sound: gameApp.sounds[1]
        }
    ]
}

gameApp.components = {};

gameApp.courseData = '';

gameApp.userBadges = [];

gameApp.userProgress = [];

gameApp.config.tree = {
    0 : {
      'id' : 'scoreboard',
      'hash' : 'scoreboard',
      'class' : gameApp.config.bodyClasses[0],
      'page' : 'gam-page--scoreboard'
    }
}

gameApp.config.rangeMedalsDiamonds = 100;

gameApp.storage = window.localStorage;


//----------------------------------//
//                                  //
//  BLINK OVERRIDES                 //
//                                  //
//----------------------------------//

gameApp.calculateMedalsDiamonds = function() {
    var tags = blink.gamification.cursoJson.courseTags;
    var tag = tags.find(tag => tag.startsWith(gameApp.config.tags.gamification_medals_limit_diamonds));
    var max = (typeof tag !== 'undefined') ? tag.replace(gameApp.config.tags.gamification_medals_limit_diamonds, '') : 10000;
    var range = gameApp.config.rangeMedalsDiamonds;
    let array = Array(max/range).fill().map((_,i) => i*range + range);

    return array;
}


blink.gamification.getBadgesModel = function() {
    var arrayMedalsDiamonds = gameApp.calculateMedalsDiamonds();
    gameApp.prepareProgressData();

    return [{
        name: "Activities",
        levels: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        calc: function() {
            var activitiesTotalData = gameApp.getAllRegularActivities();
            var activitiesTotal = activitiesTotalData.length;
            var activitiesCompletedData = gameApp.getRegularActivitiesDone(activitiesTotalData);
            var activitiesCompleted = activitiesCompletedData.length;
            return Math.ceil(activitiesCompleted * 100 / activitiesTotal)
        }
    }, {
        name: "Bonus activities",
        levels: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60],
        calc: function(e) {
            var bonusTotalCompletedId = gameApp.getBonusActivitiesDone();
            var bonusCompleted = bonusTotalCompletedId.length;
            return bonusCompleted;
        }
    }, {
        name: "Diamonds",
        levels: arrayMedalsDiamonds,
        calc: function(e) {
            var diamondsEarned = gameApp.getUserScore();
            return diamondsEarned;
        }
    }]
}


//----------------------------------//
//                                  //
//  UTILS                           //
//                                  //
//----------------------------------//

// Start with polyfill
gameApp.startsWith = function(string1,string2) {

    if (!String.prototype.startsWith) {
      String.prototype.startsWith = function(string2, position) {
        position = position || 0;
        return string1.indexOf(searchString, position) === position;
      }
    } else {
      return string1.startsWith(string2)
    }
}



gameApp.getCourseData = function(initial) {

    if ($('body').hasClass('edit')) return;

    var initApp = typeof initial !== 'undefined' ? initial : false;

    // Detect connection in apps
    if (!blink.isApp || (blink.isApp && blink.appVersion >= 4.1)) {
      blink.rest.connection(function(connection) {
        gameApp.config.hasConnection = connection;
      });
    }
  
    loadJSON(function(json) {
        gameApp.courseData = json;

        gameApp.config.isStudent = !blink.user.esAdmin() && !blink.user.esEditor() && !blink.user.esEditorial() && !blink.user.esProfesor() && !blink.user.esSAdmin();
        gameApp.config.isAnonymous = !blink.user.esAdmin() && !blink.user.esEditor() && !blink.user.esEditorial() && !blink.user.esProfesor() && !blink.user.esSAdmin() && !blink.user.esAlumno() && !blink.user.esPadre();

        console.log(gameApp.courseData);
            
        if (initApp) {
            gameApp.initApp();
        }
    });
}

gameApp.prepareProgressData = function() {
    var original = typeof window.actividades !== "undefined" ? window.actividades : [];

    var modified = original.filter(function(item, key) {
        item.id = key.toString();
        return item !== '';
    });

    gameApp.userProgress = modified;
}


gameApp.removeUnusedClass = function(currentClass) {

    var possibleClasses = gameApp.config.bodyClasses.slice(0),
    index = possibleClasses.indexOf(currentClass);
  
    possibleClasses.splice(index, 1);
  
    var $body = $('body');
    $.each(possibleClasses, function(i, v){
      $body.removeClass(v);
    });
  
}

gameApp.openTooltip = function(event, tooltip) {
    event = event || window.event;
    var trigger = event.target || event.srcElement;
    var left = $(trigger).offset().left - 60;

    $(tooltip).css({'left': left}).addClass('--visible');
}

gameApp.closePage = function(treeIndex) {

    var bodyClass = gameApp.config.bodyClasses[treeIndex];
    $('body').removeClass(bodyClass);

    setTimeout(function() {
        var page = $(gameApp.config.tree[treeIndex].page);
        page.remove();
    }, 10)

    history.pushState("", document.title, window.location.pathname + window.location.search);
}

gameApp.goToActivity = function(id) {
    blink.domain.openActivity(id);
}

gameApp.closeActivity = function() {
    if (blink.isApp && !blink.isOfflinePCApp) {
        blink.rest.closeWindow();
        } else {
        if (window.esPopup) {
            window.top.cerrarIframe()
        } else {
            if (modoactual == 'standalone') {
                window.history.back();
            } else {
                closeActivity();
            }
        }
    }

}

gameApp.tabs = function(button, target) {

    button.parent().addClass('--current').siblings().removeClass('--current');
    $(target).addClass('--active').siblings().removeClass('--active');

}

gameApp.detectGamificationUnits = function() {
    var data = gameApp.courseData;

    var gamificationUnits = data.units.filter(function(unit) {
      var tags = typeof unit.tags !== "undefined" ? unit.tags.split(" ") : [];
      return tags.indexOf(gameApp.config.tags.gamification_unit.toLowerCase()) > -1;
    });
  
    return gamificationUnits;
}

gameApp.detectGamificationActivity = function(id) {

    var data = gameApp.courseData;
    var units = data.units;

    var unit = units.filter(function(item) {
        return item.id == id;
    });

    if (!unit.length) return false;

    var tags = typeof unit[0].tags !== "undefined" ? unit[0].tags.split(" ") : [];
    var isGamificationActivity = tags.indexOf(gameApp.config.tags.gamification_unit) > -1;

    return isGamificationActivity;
}

gameApp.tokenActivity = function(id) {

    var data = gameApp.courseData;
    var unit = _.findWhere(data.units, {id: window.idtema.toString()});
    var subunitIx = _.findIndex(unit.subunits, {id: window.idclase.toString()});

    var subunit = unit.subunits[subunitIx];

    if (!subunit) return false;

    var token = typeof subunit.game_token !== 'undefined' ? subunit.game_token : 0;

    return token;
}

gameApp.calculateLevelScoreFromActivity = function(grade) {
    var result = gameApp.config.tokens.intervals.filter(function(interval) {
        return interval.minPercent <= grade && interval.maxPercent >= grade;
    });

    return result[0];
}

gameApp.getGrade = function(id) {
    var id = (typeof id !== 'undefined') ? id : window.idclase;
    var grade = (typeof window.actividades[id] === 'undefined') ? '' : window.actividades[id].clasificacion;
    return grade;
}

gameApp.getScoreFromUnit = function(unit) {

    var score = 0;
    var activitiesDone = gameApp.userProgress;
    
    activitiesDone = activitiesDone.filter(function(activity) {
        var hasScore = (activity.idtema === unit.id) && activity.game_score && activity.game_score !== '';
        if (hasScore) {
            score += activity.game_score;
        }
        return hasScore;
    });

    return score;
}

gameApp.detectBonusActivity = function() {

    var data = blink.gamification.cursoJson;
    var unit = _.findWhere(data.units, {id: window.idtema.toString()});
    var subunit = _.findWhere(unit.subunits, {id: window.idclase.toString()});
    
    if (!subunit) return false;

    var tags = typeof subunit.tags !== "undefined" ? subunit.tags.split(" ") : [];

    var isBonusGamificationActivity = tags.indexOf(gameApp.config.tags.gamification_bonus) > -1;

    return isBonusGamificationActivity;
}

gameApp.getRegularActivitiesFromUnit = function(id) {

    var id = (typeof id !== 'undefined') ? id : window.idtema;

    var data = blink.gamification.cursoJson;
    var unit = _.findWhere(data.units, {id: id.toString()});
    
    var regularActivities = unit.subunits.filter(function(subunit) {
        var tags = typeof subunit.tags !== "undefined" ? subunit.tags.split(" ") : [];
        var tokens = typeof subunit.game_token !== "undefined" ? subunit.game_token : false;
        return tags.indexOf(gameApp.config.tags.gamification_bonus) < 0 && tokens;
    });
    //var unitActivitiesId = _.pluck(regularActivities, 'id');

    return regularActivities;

}

gameApp.getBonusActivitiesFromUnit = function(id) {
    var id = (typeof id !== 'undefined') ? id : window.idtema;
    

    var data = blink.gamification.cursoJson;
    var unit = _.findWhere(data.units, {id: id.toString()});
    
    var bonusActivities = unit.subunits.filter(function(subunit) {
        var tags = typeof subunit.tags !== "undefined" ? subunit.tags.split(" ") : [];
        var tokens = typeof subunit.game_token !== "undefined" ? subunit.game_token : false;
        return tags.indexOf(gameApp.config.tags.gamification_bonus) >= 0 && tokens;
    });

    //var bonusActivitiesId = _.pluck(bonusActivities, 'id');

    return bonusActivities;

}

gameApp.getAllRegularActivities = function() {
    
    var regularActivities = [];
    var data = blink.gamification.cursoJson;
    
    var regularUnits = data.units.filter(function(unit) {
        var tags = typeof unit.tags !== "undefined" ? unit.tags.split(" ") : [];
        return tags.indexOf(gameApp.config.tags.gamification_unit) >= 0;
    });
    
    $.each(regularUnits, function(i, unit) {
        var regularActivitiesFromUnit = gameApp.getRegularActivitiesFromUnit(unit.id);
        if (regularActivitiesFromUnit.length) regularActivities = _.union(regularActivities, regularActivitiesFromUnit);
    });

    return regularActivities;

}

gameApp.getRegularActivitiesDone = function(activities) {
    var regularActivities = (typeof activities !== 'undefined') ? activities : gameApp.getAllRegularActivities();
    var regularActivitiesId = _.pluck(regularActivities, 'id');

    var activitiesDone = gameApp.userProgress;

    activitiesDone = activitiesDone.filter(function(activity) {
        return activity.nota !== '';
    });

    var activitiesDoneId = _.pluck(activitiesDone, 'id');

    var regularActivitiesDoneId = _.intersection(activitiesDoneId.sort(),regularActivitiesId.sort());

    return regularActivitiesDoneId;

}


gameApp.getRegularActivitiesDoneFromUnit = function(id, activitiesTotal) {
  

    var regularActivities = (typeof activitiesTotal !== 'undefined') ? activitiesTotal : gameApp.getRegularActivitiesFromUnit(id);
    var regularActivitiesId = _.pluck(regularActivities, 'id');

    var activitiesDone = gameApp.userProgress;
    activitiesDone = activitiesDone.filter(function(activity) {
        return activity.nota !== '';
    })
    var activitiesDoneId = _.pluck(activitiesDone, 'id');

    var regularActivitiesDone = _.intersection(activitiesDoneId.sort(),regularActivitiesId.sort());

    return regularActivitiesDone;

}

gameApp.getAllBonusActivities = function() {

    var bonusActivities = [];
    var data = blink.gamification.cursoJson;
    
    var gamificationUnits = data.units.filter(function(unit) {
        var tags = typeof unit.tags !== "undefined" ? unit.tags.split(" ") : [];
        return tags.indexOf(gameApp.config.tags.gamification_unit) >= 0;

    });
    
    $.each(gamificationUnits, function(i, unit) {
       
        var bonusActivitiesFromUnit = gameApp.getBonusActivitiesFromUnit(unit.id);
        if (bonusActivitiesFromUnit.length) bonusActivities = _.union(bonusActivities, bonusActivitiesFromUnit);
    });

    return bonusActivities;

}

gameApp.getBonusActivitiesDone = function() {
    
    var bonusActivities = gameApp.getAllBonusActivities();
    var bonusActivitiesId = _.pluck(bonusActivities, 'id');

    var activitiesDone = gameApp.userProgress;
    
    activitiesDone = activitiesDone.filter(function(activity) {
        return activity.nota !== '';
    })
    var activitiesDoneId = _.keys(activitiesDone);

    var bonusActivitiesDone = _.intersection(activitiesDoneId.sort(),bonusActivitiesId.sort()).length;
    
    return bonusActivitiesDone;

}


gameApp.getBonusActivitiesDoneFromUnit = function(id, activitiesTotal) {
  
    var bonusActivities = (typeof activitiesTotal !== 'undefined') ? activitiesTotal : gameApp.getBonusActivitiesFromUnit(id);
    var bonusActivitiesId = _.pluck(bonusActivities, 'id');

    var activitiesDone = gameApp.userProgress;
    activitiesDone = activitiesDone.filter(function(activity) {
        return activity.nota !== '';
    })
    var activitiesDoneId = _.pluck(activitiesDone, 'id');

    var bonusActivitiesDone = _.intersection(activitiesDoneId.sort(),bonusActivitiesId.sort());

    return bonusActivitiesDone;

}


gameApp.detectIfUnitIsComplete = function(id) {
    var isComplete = false;

    var bonusActivities = gameApp.getBonusActivitiesFromUnit(id);
    var bonusActivitiesId = _.pluck(bonusActivities, 'id');
    var regularActivities = gameApp.getRegularActivitiesFromUnit(id);
    var regularActivitiesId = _.pluck(regularActivities, 'id');

    var allActivitiesId = bonusActivitiesId.concat(regularActivitiesId);
    
    var regularActivitiesDoneId = gameApp.getRegularActivitiesDoneFromUnit(id, regularActivities);
    
    var bonusActivitiesDoneId = gameApp.getBonusActivitiesDoneFromUnit(id, bonusActivities);

    var allActivitiesDoneId = regularActivitiesDoneId.concat(bonusActivitiesDoneId);

    isComplete = _.intersection(allActivitiesDoneId.sort(), allActivitiesId.sort());

    return isComplete.length <=  0;
}


gameApp.getAllCompleteUnits = function() {
    
    var data = blink.gamification.cursoJson;
    var unitsComplete = 0;

    var units = data.units.filter(function(unit) {
        var tags = typeof unit.tags !== "undefined" ? unit.tags.split(" ") : [];
        return tags.indexOf(gameApp.config.tags.gamification_bonus) >= 0;
    });

    $.each(units, function(i, unit) {
        if (gameApp.detectIfUnitIsComplete(unit.id)) {
            unitsComplete++;
        }
    });

    return unitsComplete;

}


gameApp.detectBonusIsLocked = function() {
    
    var unitActivities = gameApp.getRegularActivitiesFromUnit();
    var unitActivitiesId = _.pluck(unitActivities, 'id');

    var activitiesDone = gameApp.userProgress;
    activitiesDone = activitiesDone.filter(function(activity) {
        return activity.nota !== '';
    })
    var activitiesDoneId = _.keys(activitiesDone);

    var isUnlocked = _.intersection(activitiesDoneId.sort(),unitActivitiesId.sort()).length === unitActivitiesId.length;
    
    return !isUnlocked;

}

gameApp.getFirstBonusActivity = function(id) {

    var id = (typeof id !== 'undefined') ? id : window.idtema;

    var data = gameApp.courseData;
    var unit = _.findWhere(data.units, {id: id.toString()});
    
    var bonusActivities = unit.subunits.filter(function(subunit) {
        var tags = typeof subunit.tags !== "undefined" ? subunit.tags.split(" ") : [];
        var tokens = typeof subunit.game_token !== "undefined" ? subunit.game_token : false;
        return tags.indexOf(gameApp.config.tags.gamification_bonus) > -1 && tokens;
    });

    var firstBonusActivity = bonusActivities[0];
    return firstBonusActivity;

}

gameApp.getMedalsFromUser = function() {
    var data = blink.gamification.cursoJson;
    var totals = blink.gamification.getBadgesModel();

    var body = '';

    $.each(data.badges, function(i, badge) {
        var controls = '<div class="glide__arrows" data-glide-el="controls"><button class="glide__arrow glide__arrow--left" data-glide-dir="<"><span class="fa fa-chevron-left"></span></button><button class="glide__arrow glide__arrow--right" data-glide-dir=">"><span class="fa fa-chevron-right"></span></button></div>';
        var innerbody = '<div class="glide"><div class="glide__track" data-glide-el="track"><ul class="glide__slides">';
        var title = badge.name;
        var level = badge.level;

        var levelsEarned = totals[i].levels;
        levelsEarned.length = level;

        $.each(levelsEarned, function(x, level) {
            if (x % 5 === 0) {
                innerbody += '<li class="glide__slide"><div class="gam-medals__page">';
            }
            var prefix = i === 0 ? '%' : '';
            var medal = gameApp.components.Medal(i, level, prefix);
            innerbody += medal;

            if ((x + 1) % 5 === 0) {
                innerbody += '</div></li>';
            }
        });

        if (levelsEarned.length <= 0) {
            var medal = gameApp.components.Medal(i, level, '', true);
            innerbody += medal;
        }

        innerbody += '</ul></div>'+controls+'</div>';

        body += '<section class="gam-medals"><header class="gam-medals__header">'+title+'</header><div class="gam-medals__body">'+innerbody+'</div></section>';

    });

    return body;
}

gameApp.getProgressFromUser = function() {
    var body = '<div class="gam-unicard__wrapper">';
    
    var data = gameApp.detectGamificationUnits();

    $.each(data, function(i, unit) {
        var prize = gameApp.getScoreFromUnit(unit);
        var regularActivitiesTotalData = gameApp.getRegularActivitiesFromUnit(unit.id);
        var bonusActivitiesTotalData = gameApp.getBonusActivitiesFromUnit(unit.id);
        
        var activitiesTotal = regularActivitiesTotalData.length + bonusActivitiesTotalData.length;
        var regularActivitiesDone = gameApp.getRegularActivitiesDoneFromUnit(unit.id, regularActivitiesTotalData).length;
        var bonusActivitiesDone = gameApp.getBonusActivitiesDoneFromUnit(unit.id, bonusActivitiesTotalData).length;
        var activitiesDone = regularActivitiesDone + bonusActivitiesDone;

        var notStarted = gameApp.detectUnitNotStarted(unit);

        body += gameApp.components.Unitcard(unit, prize, activitiesTotal, activitiesDone, notStarted)
    });
    body += '</div>';
    
    $('body').removeClass('--loading');

    return body;
}

gameApp.getUserScore = function() {
    var score = 0;

    if (typeof blink.user.coins !== 'undefined') score = blink.user.coins;

    return score;
    
    /*var score = 0;

    var activitiesDone = gameApp.userProgress;
    
    activitiesDone = activitiesDone.filter(function(activity) {
        var hasScore = activity.game_score && activity.game_score !== '';
        if (hasScore) {
            score += activity.game_score;
        }
        return hasScore;
    });
        
    return score;   */
}

gameApp.detectNewMedals = function() {

    var badges = gameApp.userBadges;
    var hasModifications = badges != blink.gamification.cursoJson.badges;

    if (hasModifications) {
        var newBadges = [];
        
        $.each(badges, function(i, v){

            if ((v != blink.gamification.cursoJson.badges[i])) {
                newBadges.push(i);
            }
        });
        
        gameApp.storage.setItem('new-medals', newBadges);
          
        gameApp.userBadges = blink.gamification.cursoJson.badges;
    }
}

gameApp.detectUnitNotStarted = function(unit) {

    var subunits = unit.subunits;
    var subunitsId = _.pluck(subunits, 'id');
    var activitiesDone =  gameApp.userProgress;

    activitiesDone = activitiesDone.filter(function(activity) {
        var hasScore = (activity.idtema === unit.id) && activity.game_score && activity.game_score !== '';
        return hasScore;
    });

    activitiesDone =  _.pluck(activitiesDone, 'id');

    var activitiesDoneFromUnit = _.intersection(activitiesDone.sort(),subunitsId.sort());
    
    return !activitiesDoneFromUnit.length;

}


gameApp.openModal = function(modal, id, extraClassBody) {
   $('body').append(modal);
   $('body').addClass('gam-body--modal');
   $('body').addClass(extraClassBody);
    
   setTimeout(function() {
       $('#'+id).addClass('--open');

       gameApp.playAudio('gam-modal-audio');
   }, gameApp.config.animationsDuration);
}

gameApp.closeModal = function(idModal, extraClassBody) {
    $('#'+idModal).removeClass('--open');

    setTimeout(function() {
        $('#'+idModal).remove();
        $('body').removeClass('gam-body--modal');
        $('body').removeClass(extraClassBody);
    }, gameApp.config.animationsDuration);
}

//----------------------------------//
//                                  //
//  Hash Navigation                 //
//                                  //
//----------------------------------//


var hashDistributorTimeout;
gameApp.hashDistributor = function(currentHash,updateHash) {

    clearTimeout(hashDistributorTimeout);

    var timeToWait = 200;

    if (currentHash.startsWith(gameApp.config.tree[0].hash)) { //Scoreboard

        var tab = currentHash.replace(gameApp.config.tree[0].hash, '');
        hashDistributorTimeout = setTimeout(function() {gameApp.loadScoreboard(tab,updateHash)}, timeToWait);

    }  
}

gameApp.updateHash = function(currentHash) {
  window.location.hash = currentHash;
}

gameApp.loadByHash = function(currentHash) {

  if ($('body').hasClass('edit')) return;

  var currentHash = currentHash.replace('#',''),
  updateHash = false;

  gameApp.hashDistributor(currentHash, updateHash);

}

gameApp.onChangeHash = function() {

  if ($('body').hasClass('edit')) return;

  var currentHash = window.location.hash.replace('#',''),
  updateHash = false;

  gameApp.hashDistributor(currentHash, updateHash);

}

window.addEventListener("hashchange", gameApp.onChangeHash, false);


//----------------------------------//
//                                  //
//  Audios                          //
//                                  //
//----------------------------------//

gameApp.playAudio = function(audioID) {
    setTimeout(function(){
        var audio = document.getElementById(audioID)
        if(audio){
            audio.play();
        }
    }, 200);
}


//----------------------------------//
//                                  //
//  Components                      //
//                                  //
//----------------------------------//

gameApp.components.Button = function(icon, text, onclick, extraClasses) {
    var iconClass = (icon) ? 'gam-button--icon --icon--'+icon : '';
    var extraClasses = (extraClasses) ? extraClasses : '';

    var button = '<button class="gam-button '+iconClass+' '+extraClasses+'" onclick="'+onclick+'"><span class="gam-button__text">'+text+'</span></button>';
    
    var component = button;

    return component;
}

gameApp.components.ButtonScoreboard = function() {
    var button = '<button class="gam-button gam-button--icon --icon--price" onclick="gameApp.openTooltip(event, \'#gam-tooltip-scoreboard\');"><span class="gam-button__text">'+gameApp.text.gamification_go_to_scoreboard+'</span></button>';
    
    var component = button;

    return component;
}

gameApp.components.ScoreBadge = function(prize) {
    var score = (typeof prize !== 'undefined') ? prize : gameApp.getUserScore();
    var component = '<div class="gam-score"><span class="gam-score__label">'+gameApp.text.gamification_score_label+'</span><span class="gam-score__total">'+score+'</span></div>';

    return component;

}

gameApp.components.TooltipScoreboard = function() {
    
    var score = gameApp.components.ScoreBadge();
    var buttonScoreboard = gameApp.components.Button(false, gameApp.text.gamification_see_details, false, 'gam-js-goToScoreboard');
    
    var scoreboardSummary = '<div class="gam-scoreboard-summary">'+score+buttonScoreboard+'</div>';
    
    var tooltip = '<div class="gam-tooltip" id="gam-tooltip-scoreboard"><div class="gam-tooltip__inner">'+scoreboardSummary+'</div></div>';

    var component = tooltip;

    return component;
}

gameApp.components.TokensBadge = function(tokens) {
    
    var badge = '<div class="gam-score-badge"><div class="gam-score-badge__inner">'+tokens+'</div></div>';
    var component = badge;
    
    return component;
}

gameApp.components.Modal = function(id, header, body, footer, extraClasses) {

    var component = '<div class="gam-modal '+extraClasses+'" id="'+id+'"><div class="gam-modal__inner"><div class="gam-modal__header">'+header+'</div><div class="gam-modal__body">'+body+'</div><div class="gam-modal__footer">'+footer+'</div></div></div>';
    return component;
}

gameApp.components.Medal = function(type, achievement, suffix, empty) {
    var emptyClass = (empty) ? '--empty' : '';
    var label = (empty) ? gameApp.text.gamification_no_medals : achievement+suffix;
    var component = '<div class="gam-medal --'+type+' '+emptyClass+'"><div class="gam-medal__icon"></div><div class="gam-medal__label">'+label+'</div></div>';
    return component;

}

gameApp.components.ProgressBoard = function(title, completed, total, label) {
    var component = '<div class="gam-progressboard"><h3 class="gam-progressboard__title">'+title+'</h3><div class="gam-progressboard__score">'+completed+'/'+total+'</div><div class="gam-progressboard__label">'+label+'</div></div>';
    return component;
}

gameApp.components.Unitcard = function(unit, prize, activitiesTotal, activitiesDone, notStarted) {
    var notStartedClass = (notStarted) ? '--not-started' : '';
    var activitiesDone = (notStarted) ? '-' : activitiesDone;
    var title = unit.title;
    prize = (notStarted) ? '-' : prize;
    var score = gameApp.components.ScoreBadge(prize);
    var progress = gameApp.components.ProgressBoard(gameApp.text.gamification_activities, activitiesDone, activitiesTotal, gameApp.text.gamification_completed);
    var component = '<article class="gam-unitcard '+notStartedClass+'"><div class="gam-unitcard__inner"><header class="gam-unitcard__header "><h3 class="gam-title--2">'+title+'</h3></header><div class="gam-unitcard__body">'+score+progress+'</div></article>';
    return component;

}

//----------------------------------//
//                                  //
//  Gamification Modals             //
//                                  //
//----------------------------------//


gameApp.createModalScore = function(tokens, grade) {

    var result = gameApp.calculateLevelScoreFromActivity(grade);

    var title = result.title;
    var subtitle = result.subtitle;
    var given = tokens * result.given / 100;
    var soundFile = result.sound;

    var suffix = window.idtema;
    var id = 'gam-modal-score-'+suffix;
    var sound = '<div style="display: none"><audio id="gam-modal-audio"><source src="' + soundFile + '" type="audio/mpeg"></audio></div>';

    var header = '<h1 class="gam-title">'+title+'</h1>'+sound;
    var prize = '<div class="gam-prize">'+gameApp.text.gamification_score_label+'<span>'+given+'</span></div>';
    var message = '<div class="gam-subtitle">'+subtitle+'</div>';
    var body = prize+message;
    
    var detectIfBonusIsOpen = !gameApp.detectBonusIsLocked();

    var newMedals = gameApp.storage.getItem('new-medals');

    var actionsContinue = (newMedals) ?
            "gameApp.closeModal('"+id+"'); gameApp.createModalMedal('"+newMedals[0]+"', 'gameApp.closeActivity()')"
        :
            "gameApp.closeModal('"+id+"'); gameApp.closeActivity()"
        ;

    var buttonRepeat = gameApp.components.Button(false, gameApp.text.gamification_try_again, "gameApp.closeModal('"+id+"')", false);
    var buttonContinueNotBonus = gameApp.components.Button(false, gameApp.text.gamification_continue, actionsContinue, false);
    var buttonContinueBonus = gameApp.components.Button(false, gameApp.text.gamification_continue, "gameApp.closeModal('"+id+"'); gameApp.createModalBonus()", false);

    var buttonContinue = (detectIfBonusIsOpen) ? buttonContinueBonus : buttonContinueNotBonus ;
    
    var footer = (grade !== 100) ? buttonRepeat+buttonContinue : buttonContinue;

    var extraClasses = 'gam-modal-prize';

    var modal = gameApp.components.Modal(id, header, body, footer, extraClasses);


    gameApp.openModal(modal, id);

}

gameApp.createModalBonus = function() {

    var isLocked = gameApp.detectBonusIsLocked();

    var title = (isLocked) ? gameApp.text.gamification_bonus_locked :  gameApp.text.gamification_bonus_unlocked;
    var subtitle = (isLocked) ? gameApp.text.gamification_bonus_locked_subtitle :  gameApp.text.gamification_bonus_unlocked_subtitle;
    
    var extraClassBody = (isLocked) ? 'gam--locked' : '';
    
    var suffix = window.idtema;
    var id = 'gam-modal-bonus-'+suffix;
    var soundFile = (isLocked) ? gameApp.sounds[2] : gameApp.sounds[3];
    var sound = '<div style="display: none"><audio id="gam-modal-audio"><source src="' + soundFile + '" type="audio/mpeg"></audio></div>';
    var header = '<h1 class="gam-title">'+title+'</h1>'+sound;
    var lock = '<div class="gam-lock"><span class="gam-lock__top"></span></div>';
    var message = '<div class="gam-subtitle">'+subtitle+'</div>';
    var body = lock+message;

    var bonusId = gameApp.getFirstBonusActivity().id;
    var insideBonus = bonusId === window.idclase.toString();

    var newMedals = gameApp.storage.getItem('new-medals');

    var actionsStart = (newMedals) ?
            "gameApp.closeModal('"+id+"'); gameApp.createModalMedal('"+newMedals[0]+"', 'gameApp.closeActivity()')"
        : (!newMedals && insideBonus) ?
            "gameApp.closeModal('"+id+"')"
        : 
            "gameApp.closeModal('"+id+"'); gameApp.goToActivity('"+bonusId+"')"
        ;

    var actionsContinue = (newMedals) ?
            "gameApp.closeModal('"+id+"'); gameApp.createModalMedal('"+newMedals[0]+"', 'gameApp.closeActivity()')"
        : 
            "gameApp.closeModal('"+id+"'); gameApp.closeActivity(); )"
        ;

    var extraClassesButton = (insideBonus) ? extraClassBody : '';

    var buttonStartActivity = gameApp.components.Button(false, gameApp.text.gamification_ok, actionsStart, false, extraClassesButton);

    var buttonContinue = (!insideBonus || (insideBonus && isLocked)) ? gameApp.components.Button(false, gameApp.text.gamification_continue, actionsContinue, false) : '';
    
    var footer = (isLocked) ? buttonContinue : buttonStartActivity+buttonContinue;

    var extraClasses = (isLocked) ? 'gam-modal-lock --locked' : 'gam-modal-lock --unlocked';



    var modal = gameApp.components.Modal(id, header, body, footer, extraClasses);
    
    gameApp.openModal(modal, id, extraClassBody);

}


gameApp.createModalMedal = function(type, actionContinue) {
    var type = Number(type);
    var level = blink.gamification.cursoJson.badges[type].level;
    var prize = blink.gamification.getBadgesModel()[type].levels[level];

    var title = gameApp.text.gamification_medal_new;
    var titleSec = gameApp.text.gamification_medal_title;
    var subtitleString = (type === 0) ? gameApp.text.gamification_medal_subtitle_1 : (type === 1) ? gameApp.text.gamification_medal_subtitle_2 : gameApp.text.gamification_medal_subtitle_3;
    var subtitle = subtitleString.replace('%1', prize);

    var id = 'gam-modal-bonus-'+type;
    var soundFile = gameApp.sounds[0];
    var sound = '<div style="display: none"><audio id="gam-modal-audio"><source src="' + soundFile + '" type="audio/mpeg"></audio></div>';
    var header = '<h1 class="gam-title">'+title+'</h1>'+sound;
    var medal = '<div class="gam-medal --'+type+'"></div>';
    var message = '<div class="gam-title--2">'+titleSec+'</div>';
    message += '<div class="gam-subtitle">'+subtitle+'</div>';
    var body = medal+message;

    var newMedals = gameApp.storage.getItem('new-medals');

    var nextMedal = newMedals.split(",").filter(function(item) {
        return item != type;
    });

    nextMedal = _.compact(nextMedal);    
    gameApp.storage.setItem('new-medals', nextMedal);

    var actions = (nextMedal.length) ?
            "gameApp.closeModal('"+id+"'); gameApp.createModalMedal('"+nextMedal[0]+"', '"+actionContinue+"')"
        :
            "gameApp.closeModal('"+id+"'); "+actionContinue+";"
        ;


    var buttonContinue = gameApp.components.Button(false, gameApp.text.gamification_ok, actions, false);
    
    var footer = buttonContinue;

    var extraClasses = 'gam-modal-medal --type-'+type+' --level-'+level;

    var modal = gameApp.components.Modal(id, header, body, footer, extraClasses);
    
    gameApp.openModal(modal, id);

}


//----------------------------------//
//                                  //
//  Initializers                    //
//                                  //
//----------------------------------//


gameApp.initShortcutScoreboard = function() {

    if ($('#gam-tooltip-scoreboard').length) return;
    //var button = gameApp.components.ButtonScoreboard();
    var tooltip = gameApp.components.TooltipScoreboard();

    var navbar = $('.navbar');

    //navbar.prepend(button).append(tooltip);
    navbar.append(tooltip);

}

gameApp.initScoreboard = function() {

    if ($('body').hasClass('edit')) return;

    var hash = gameApp.config.tree[0].hash;
    var currentHash = window.location.hash;
    currentHash = currentHash.replace('#','');
    
    if (currentHash !== '' && currentHash === hash) {
        gameApp.loadByHash(currentHash);
        var bodyClass = gameApp.config.bodyClasses[0];
        $('body').addClass(bodyClass);
        gameApp.removeUnusedClass(bodyClass);
    }
}

gameApp.loadScoreboard = function() {

    if ($('.gam-page--scoreboard').length) {
        $('.gam-page--scoreboard').remove();
    }

    var skeleton = '<section class="gam-page gam-page--scoreboard"></section>';
    
    $('body').append(skeleton);
    
    // Header
    var score = gameApp.components.ScoreBadge();
    var unitsTotalData = gameApp.detectGamificationUnits();
    var unitsTotal = unitsTotalData.length;
    var unitsCompleted = gameApp.getAllCompleteUnits();
    var activitiesTotalData = gameApp.getAllRegularActivities();
    var activitiesTotal = activitiesTotalData.length;
    var activitiesCompletedData = gameApp.getRegularActivitiesDone(activitiesTotalData);
    var activitiesCompleted = activitiesCompletedData.length;

    //var learningKitUnits = '<div class="gam-progressboard"><h3 class="gam-progressboard__title">'+gameApp.text.gamification_units+'</h3><div class="gam-progressboard__score">'+unitsCompleted+'/'+unitsTotal+'</div><div class="gam-progressboard__label">'+gameApp.text.gamification_completed+'</div></div>';
    //var learningKitActivities = '<div class="gam-progressboard"><h3 class="gam-progressboard__title">'+gameApp.text.gamification_activities+'</h3><div class="gam-progressboard__score">'+activitiesCompleted+'/'+activitiesTotal+'</div><div class="gam-progressboard__label">'+gameApp.text.gamification_completed+'</div></div>';
    var learningKitUnits = gameApp.components.ProgressBoard(gameApp.text.gamification_units, unitsCompleted, unitsTotal, gameApp.text.gamification_completed);
    var learningKitActivities = gameApp.components.ProgressBoard(gameApp.text.gamification_activities, activitiesCompleted, activitiesTotal, gameApp.text.gamification_completed);
    var learningKit = '<div class="gam-learning-kit"><h2 class="gam-title--3">'+gameApp.text.gamification_active_learning_kit+'</h2><div class="gam-progressboard__wrapper">'+learningKitUnits+learningKitActivities+'</div></div>';

    var topheader = '<div class="gam-page__header__top --placeholder"></div><div class="gam-page__header__top"><h1 class="gam-title">'+gameApp.text.gamification_scoreboard_title+'</h1><button class="gam-button" onclick="gameApp.closePage(0);">'+gameApp.text.gamification_close+'</button></div>';
    var bottomheader = '<div class="gam-page__header__bottom">'+score+learningKit+'</div>';
    var header = '<header class="gam-page__header"><div class="gam-page__header__inner">'+topheader+bottomheader+'</div></header>';

    $('.gam-page--scoreboard').append(header);

    var body = '<div class="gam-tabs"><div class="gam-tabs__list"><ul><li class="--current"><a href="#gam-medals" class="ox-js-tabs">'+gameApp.text.gamification_medals+'</a></li><li><a href="#gam-units" class="ox-js-tabs">'+gameApp.text.gamification_units+'</a></li></ul></div><div class="gam-tabs__content"><div class="gam-tabs__content__item --active --loading" id="gam-medals"></div><div class="gam-tabs__content__item --loading" id="gam-units"></div></div></div>';
    $('.gam-page--scoreboard').append(body);

    gameApp.loadScoreboardContent();

}

gameApp.loadScoreboardContent = function() {
    var bodyMedals = gameApp.getMedalsFromUser();
    var bodyUnits = gameApp.getProgressFromUser();

    $('#gam-medals').append(bodyMedals).removeClass('--loading');

    var sliders = document.querySelectorAll('.glide');

    for (var i = 0; i < sliders.length; i++) {
        var glide = new Glide(sliders[i], {
            type: 'slide',
            startAt: 0,
            perView: 1,
            perSwipe: 1,
            cloningRatio: 0
        });
        function DisableControls(Glide, Components, Events) {
            var PREV_CONTROL_SELECTOR = "[data-glide-dir='<']";
            var NEXT_CONTROL_SELECTOR = "[data-glide-dir='>']";
            var component = {
              buildAfter() {
                this.prevBtn = Components.Html.root.querySelector(PREV_CONTROL_SELECTOR);
                this.nextBtn = Components.Html.root.querySelector(NEXT_CONTROL_SELECTOR);
              },
              handleDisable() {
                var perView = Glide.settings.perView;
                var slidesCount = Components.Html.slides.length;
          
                this.prevBtn.disabled = (Glide.index <= 0);
                this.nextBtn.disabled = (Glide.index >= slidesCount - perView);

                if (this.prevBtn.disabled) {
                    this.prevBtn.classList.add('--disabled');
                } else {
                    this.prevBtn.classList.remove('--disabled');
                }

                if (this.nextBtn.disabled) {
                    this.nextBtn.classList.add('--disabled');
                } else {
                    this.nextBtn.classList.remove('--disabled');
                }
              },
            };
          
            Events.on("build.after", function () {
              component.buildAfter();
              component.handleDisable();
            });
            Events.on("run.after", function () {
              component.handleDisable();
            });
            return component;
          }
          

        glide.mount({ DisableControls: DisableControls });

    }

    $('#gam-units').append(bodyUnits).removeClass('--loading');
}

gameApp.initBonusActivity = function() {
    if (gameApp.config.isStudent) {
        gameApp.createModalBonus();
    }
}

gameApp.initActivity = function(id) {
    console.log("Gamification Activity loaded");

    var tokens = gameApp.tokenActivity(window.idcurso);

    var isBonus = gameApp.detectBonusActivity();

    if (isBonus) {
        gameApp.initBonusActivity();
    }

    if (tokens > 0) {
        var currentSection = blink.activity.currentSection;
        var header = $('#slider-item-'+currentSection+' .header');
        var badge = gameApp.components.TokensBadge(tokens);
        header.find('.gam-score-badge').remove();
        header.append(badge);
    }

    blink.events.on('slide:update:after section:shown', function() {
        if (tokens > 0) {
            var currentSection = blink.activity.currentSection;
            var header = $('#slider-item-'+currentSection+' .header');
            var badge = gameApp.components.TokensBadge(tokens);
            header.find('.gam-score-badge').remove();
            header.append(badge);
        }
    });

    blink.events.on('slide:update:correct', function() {
        console.log("Slide:update:correct");

        if (gameApp.config.isStudent) {
            var grade = gameApp.getGrade();
            gameApp.createModalScore(tokens, grade);    
        }

    });

    blink.events.on('gamification:badges:calculated', function() {
        console.log("gamification:badges:calculated");

        if (gameApp.config.isStudent) {
            //var grade = gameApp.getGrade();
            //gameApp.createModalScore(tokens, grade);  
            
            gameApp.detectNewMedals();


        }

    });

}

gameApp.initApp = function() {
    console.log("initApp");

    gameApp.courseData = blink.gamification.cursoJson;
    gameApp.userBadges = blink.gamification.cursoJson.badges;
    
    gameApp.prepareProgressData();

    gameApp.config.isStudent = !blink.user.esAdmin() && !blink.user.esEditor() && !blink.user.esEditorial() && !blink.user.esProfesor() && !blink.user.esSAdmin();
    gameApp.config.isAnonymous = !blink.user.esAdmin() && !blink.user.esEditor() && !blink.user.esEditorial() && !blink.user.esProfesor() && !blink.user.esSAdmin() && !blink.user.esAlumno() && !blink.user.esPadre();

    var ishtmlBook = $('body').hasClass('body_htmlBook');
    var isActivity = $('body').hasClass('body_clase');
    var isGamificationActivity = gameApp.detectGamificationActivity(window.idtema);
        
    if (isActivity && isGamificationActivity) {
        gameApp.initActivity(window.idtema);   
    }
    gameApp.initShortcutScoreboard();
    gameApp.initScoreboard();
    
    
    gameApp.isLoaded = true;

}

  

jQuery(function() { 

    var dataLoaded = gameApp.courseData !== '';
    
    blink.events.on('gamification:init', function() {
        if (!gameApp.isLoaded) {
            gameApp.initApp();
        }
    });

    /*if (dataLoaded) {
        gameApp.initApp();
    } else {
        gameApp.getCourseData(true);
    }*/

    console.log("Testing3");

    $('body').on('click', '.gam-js-goToScoreboard', function(e) {
        e.preventDefault();
        window.location.hash = gameApp.config.tree[0].hash;
    });

    $('body').on('click', function(event) {
        $target = $(event.target);
        if(!$target.closest('.gam-tooltip').length && !$target.closest('.gam-button').length) {
            $('.gam-tooltip.--visible').removeClass('--visible');
        }
    });


    /*$('body').on('click', '.js-correct', function(e) {
        var tokens = gameApp.tokenActivity(window.idcurso);
        gameApp.createModalScore(tokens, 0);
    });*/

    $('body').on('click', '.ox-js-tabs', function(e) {
        e.preventDefault();
        var button = $(this);
        var target = $(this).attr('href');

        gameApp.tabs(button, target);
    });


    blink.events.on('gamification:usercoins:update', function() {
        gameApp.prepareProgressData();
    });

});
