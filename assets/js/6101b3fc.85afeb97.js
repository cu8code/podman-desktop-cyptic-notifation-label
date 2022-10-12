/*! For license information please see 6101b3fc.85afeb97.js.LICENSE.txt */
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[248],{544:function(t,e,r){var n=r(7378),o=r(161);e.Z=function(){function t(){var t;if(document&&document.documentElement){var e=document.documentElement;"dark"===(null==(t=e.dataset)?void 0:t.theme)?(e.classList.add("dark"),setTimeout((function(){e.classList.add("dark")}),100)):(e.classList.remove("dark"),setTimeout((function(){e.classList.remove("dark")}),100))}}return(0,n.useEffect)((function(){o.Z.canUseDOM&&t()}),[o.Z.canUseDOM]),(0,n.useEffect)((function(){if(o.Z.canUseDOM){var e=new MutationObserver((function(e){e.forEach((function(e){("data-rh"===e.attributeName&&"attributes"==e.type||"data-theme"===e.attributeName&&"attributes"==e.type)&&t()}))}));return e.observe(document.documentElement,{attributes:!0,childList:!1,subtree:!1}),function(){e.disconnect()}}}),[o.Z.canUseDOM]),n.createElement("div",null)}},3963:function(t,e,r){r.r(e),r.d(e,{LinuxDownloads:function(){return m},default:function(){return p}});var n=r(4305),o=r(3127),a=r(353),i=r(9821),c=r(7378),l=r(544),s=r(1884),u=r(9072),f=r(1436),h=r(1417);function d(){return(d=(0,o.Z)((0,n.Z)().mark((function t(e){var r,o,a,i,c,l,s,u;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.github.com/repos/containers/podman-desktop/releases/latest");case 2:return r=t.sent,t.next=5,r.json();case 5:if(o=t.sent,a=o.assets,1===(i=a.filter((function(t){return t.name.endsWith(".tar.gz")}))).length){t.next=10;break}throw new Error("Unable to grab .tar.gz");case 10:if(c=i[0],1===(l=a.filter((function(t){return t.name.endsWith(".flatpak")}))).length){t.next=14;break}throw new Error("Unable to grab .flatpak");case 14:s=l[0],u={version:o.name,binary:c.browser_download_url,flatpak:s.browser_download_url},e(u);case 17:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(){var t=(0,c.useState)({version:"",binary:"",flatpak:""}),e=t[0],r=t[1];return(0,c.useEffect)((function(){!function(t){d.apply(this,arguments)}(r)}),[]),c.createElement("section",{className:" dark:bg-zinc-800 bg-zinc-200 py-24 dark:text-gray-300 text-gray-700"},c.createElement("div",{className:"w-5/6 mx-auto"},c.createElement("div",{className:"flex rounded-lg bg-zinc-300 dark:bg-zinc-700 bg-opacity-60 p-8 flex-col md:flex-row  "},c.createElement("div",{className:"flex align-middle items-center mb-3 flex-col "},c.createElement(u.G,{size:"8x",icon:h.qJE}),c.createElement("div",{className:"inline-flex items-center justify-center rounded-full  flex-shrink-0"}),c.createElement("h2",{className:" text-lg title-font font-medium"},"Linux")),c.createElement("div",{className:"h-full flex w-full flex-col align-middle items-center"},c.createElement("div",{className:"flex flex-col align-middle items-center"},c.createElement("div",{className:"items-center text-center"},c.createElement("p",{className:"flex justify-center"},c.createElement("svg",{width:"50px",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor"},c.createElement("path",{d:"M12 2.604l-.43.283L0 10.459v6.752l6.393 4.184L12 17.725l5.607 3.671L24 17.211v-6.752L12 2.604zm0 .828l5.434 3.556-2.717 1.778L12 10.545l-2.717-1.78-2.717-1.777L12 3.432zM6.39 7.104l5.434 3.556-5.408 3.54-5.434-3.557 5.409-3.54zm11.22 0l5.431 3.554-5.434 3.557-5.433-3.555 5.435-3.556zM.925 10.867l5.379 3.52a.123.08 0 00.027.013v5.647l-5.406-3.54v-5.64zm11.213.115l5.408 3.54v5.664l-5.408-3.54v-5.664z"}))),c.createElement("p",{className:"text-base "},"Using"," ",c.createElement("a",{className:"text-purple-500",href:"https://flathub.org/apps/details/io.podman_desktop.PodmanDesktop"},"FlatHub")," ","? Install in one command:"),c.createElement("p",{className:"text-base dark:text-purple-300 text-purple-700"},c.createElement(u.G,{size:"1x",icon:f.Jw3,className:"mr-2"}),"flatpak install --user flathub io.podman_desktop.PodmanDesktop",c.createElement("button",{title:"Copy To Clipboard",className:"mr-5"}," ",c.createElement(u.G,{size:"xs",icon:f.O4,className:"ml-3  cursor-pointer text-3xl  text-white-500",onClick:function(){navigator.clipboard.writeText("flatpak install --user flathub io.podman_desktop.PodmanDesktop")}})))),c.createElement("div",{className:"pt-8 space-x-4"},c.createElement(s.Z,{className:"no-underline hover:no-underline inline-flex text-white hover:text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-sm",to:e.flatpak},c.createElement(u.G,{size:"1x",icon:f.q7m,className:"mr-2"}),"Flatpak"),c.createElement(s.Z,{className:"no-underline hover:no-underline inline-flex text-white hover:text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-sm",to:e.binary},c.createElement(u.G,{size:"1x",icon:f.q7m,className:"mr-2"}),"zip")),c.createElement("div",{className:"font-light mt-4"},"Version ",e.version))))))}function p(){var t=(0,a.Z)().siteConfig;return c.createElement(i.Z,{title:t.title,description:"Downloads for macOS"},c.createElement(l.Z,null),c.createElement("main",{className:"h-screen"},c.createElement(m,null)))}},3127:function(t,e,r){function n(t,e,r,n,o,a,i){try{var c=t[a](i),l=c.value}catch(s){return void r(s)}c.done?e(l):Promise.resolve(l).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function c(t){n(i,o,a,c,l,"next",t)}function l(t){n(i,o,a,c,l,"throw",t)}c(void 0)}))}}r.d(e,{Z:function(){return o}})},4305:function(t,e,r){r.d(e,{Z:function(){return o}});var n=r(4923);function o(){o=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(z){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,a=Object.create(o.prototype),i=new N(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return O()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=E(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=f(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===h)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(t,r,i),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(z){return{type:"throw",arg:z}}}t.wrap=u;var h={};function d(){}function m(){}function p(){}var v={};s(v,i,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(_([])));g&&g!==e&&r.call(g,i)&&(v=g);var x=p.prototype=d.prototype=Object.create(v);function w(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function o(a,i,c,l){var s=f(t[a],t,i);if("throw"!==s.type){var u=s.arg,h=u.value;return h&&"object"==(0,n.Z)(h)&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){o("next",t,c,l)}),(function(t){o("throw",t,c,l)})):e.resolve(h).then((function(t){u.value=t,c(u)}),(function(t){return o("throw",t,c,l)}))}l(s.arg)}var a;this._invoke=function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return a=a?a.then(n,n):n()}}function E(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=f(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function _(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return m.prototype=p,s(x,"constructor",p),s(p,"constructor",m),m.displayName=s(p,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,s(t,l,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},w(b.prototype),s(b.prototype,c,(function(){return this})),t.AsyncIterator=b,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new b(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(x),s(x,l,"Generator"),s(x,i,(function(){return this})),s(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=_,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:_(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}}}]);