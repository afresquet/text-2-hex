(this["webpackJsonptext-2-hex"]=this["webpackJsonptext-2-hex"]||[]).push([[0],{38:function(e,t,a){e.exports=a(47)},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),l=a.n(c),o=a(81),i=a(76),u=a(14),s=a(80),d=r.a.createContext({}),m=function(e){var t=e.children,a=Object(n.useState)(),c=Object(u.a)(a,2),l=c[0],o=c[1];Object(n.useEffect)((function(){var e=localStorage.getItem("dictionary");if(e){var t=new Map(JSON.parse(e));o(t)}}),[]);var i=Object(n.useCallback)((function(e){var t=JSON.stringify(Array.from(e.entries()));localStorage.setItem("dictionary",t),o(e)}),[]);return r.a.createElement(d.Provider,{value:{dictionary:l,setDictionary:i}},t)},v=function(){var e=Object(n.useContext)(d),t=e.dictionary,a=e.setDictionary,c=Object(n.useCallback)((function(e){var t,n=null===(t=e.target.files)||void 0===t?void 0:t.item(0);if(n){var r=new FileReader;r.readAsText(n,"utf-8"),r.onload=function(e){var t;if(null===(t=e.target)||void 0===t?void 0:t.result){for(var n=JSON.parse(e.target.result),r=new Map,c=0,l=Object.entries(n);c<l.length;c++){var o=Object(u.a)(l[c],2),i=o[0],s=o[1];r.set(i,s)}a(r)}},r.onerror=function(e){console.error(e)}}}),[a]);return r.a.createElement("div",null,r.a.createElement(i.a,{variant:"h5"},t?"Replace the Hex Dictionary:":"Upload a Hex Dictionary:"),r.a.createElement(s.a,{onChange:c,type:"file",style:{marginBottom:24}}))},f=a(82),E=a(34),b=a.n(E),g=function(){var e=Object(n.useContext)(d).dictionary,t=Object(n.useState)(""),a=Object(u.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(""),s=Object(u.a)(o,2),m=s[0],v=s[1],E=Object(n.useState)(""),g=Object(u.a)(E,2),h=g[0],O=g[1];Object(n.useEffect)((function(){v(c.split("").reduce((function(t,a,n){return 0===n?null===e||void 0===e?void 0:e.get(a):t+" "+(null===e||void 0===e?void 0:e.get(a))}),""))}),[e,c]),Object(n.useEffect)((function(){O(c.split("").reduce((function(t,a,n){return 0===n?null===e||void 0===e?void 0:e.get(a):(null===e||void 0===e?void 0:e.get(a))+t}),""))}),[e,c]);var p=Object(n.useCallback)((function(e){b()(e)}),[]);return r.a.createElement("div",null,e&&r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{value:c,onChange:function(e){return l(e.target.value)},disabled:!e,variant:"outlined",multiline:!0,fullWidth:!0,placeholder:"Enter text here...",style:{marginBottom:24}}),c&&r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{variant:"h5"},"HEX Codes:"),r.a.createElement("span",{onClick:function(){return p(m)}},r.a.createElement(i.a,null,m)),r.a.createElement(i.a,{variant:"h5"},"PNATCH:"),r.a.createElement("span",{onClick:function(){return p(h)}},r.a.createElement(i.a,{style:{wordWrap:"break-word"}},h)))))};var h=function(){return r.a.createElement(o.a,null,r.a.createElement(i.a,{variant:"h1",align:"center"},"Text 2 Hex"),r.a.createElement(i.a,{align:"center"},"Created by ",r.a.createElement("a",{href:"https://github.com/afresquet"},"afresquet")),r.a.createElement(v,null),r.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m,null,r.a.createElement(h,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.cd0f5f13.chunk.js.map