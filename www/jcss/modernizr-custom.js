/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-cssall-cssfilters-csstransforms-csstransforms3d-csstransitions-textalignlast-wrapflow-setclasses !*/
!function(e,t,n){function r(e,t){return typeof e===t}function s(){var e,t,n,s,i,o,a;for(var f in x)if(x.hasOwnProperty(f)){if(e=[],t=x[f],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(s=r(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)o=e[i],a=o.split("."),1===a.length?Modernizr[a[0]]=s:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=s),y.push((s?"":"no-")+a.join("-"))}}function i(e){var t=w.className,n=Modernizr._config.classPrefix||"";if(S&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),S?w.className.baseVal=t:w.className=t)}function o(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):S?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function a(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function f(){var e=t.body;return e||(e=o(S?"svg":"body"),e.fake=!0),e}function l(e,n,r,s){var i,a,l,u,d="modernizr",p=o("div"),c=f();if(parseInt(r,10))for(;r--;)l=o("div"),l.id=s?s[r]:d+(r+1),p.appendChild(l);return i=o("style"),i.type="text/css",i.id="s"+d,(c.fake?c:p).appendChild(i),c.appendChild(p),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),p.id=d,c.fake&&(c.style.background="",c.style.overflow="hidden",u=w.style.overflow,w.style.overflow="hidden",w.appendChild(c)),a=n(p,e),c.fake?(c.parentNode.removeChild(c),w.style.overflow=u,w.offsetHeight):p.parentNode.removeChild(p),!!a}function u(e,t){return!!~(""+e).indexOf(t)}function d(e,t){return function(){return e.apply(t,arguments)}}function p(e,t,n){var s;for(var i in e)if(e[i]in t)return n===!1?e[i]:(s=t[e[i]],r(s,"function")?d(s,n||t):s);return!1}function c(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(t,r){var s=t.length;if("CSS"in e&&"supports"in e.CSS){for(;s--;)if(e.CSS.supports(c(t[s]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];s--;)i.push("("+c(t[s])+":"+r+")");return i=i.join(" or "),l("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function v(e,t,s,i){function f(){d&&(delete N.style,delete N.modElem)}if(i=r(i,"undefined")?!1:i,!r(s,"undefined")){var l=m(e,s);if(!r(l,"undefined"))return l}for(var d,p,c,v,h,g=["modernizr","tspan","samp"];!N.style&&g.length;)d=!0,N.modElem=o(g.shift()),N.style=N.modElem.style;for(c=e.length,p=0;c>p;p++)if(v=e[p],h=N.style[v],u(v,"-")&&(v=a(v)),N.style[v]!==n){if(i||r(s,"undefined"))return f(),"pfx"==t?v:!0;try{N.style[v]=s}catch(y){}if(N.style[v]!=h)return f(),"pfx"==t?v:!0}return f(),!1}function h(e,t,n,s,i){var o=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+E.join(o+" ")+o).split(" ");return r(t,"string")||r(t,"undefined")?v(a,t,s,i):(a=(e+" "+L.join(o+" ")+o).split(" "),p(a,t,n))}function g(e,t,r){return h(e,n,n,t,r)}var y=[],x=[],C={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){x.push({name:e,fn:t,options:n})},addAsyncTest:function(e){x.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=C,Modernizr=new Modernizr;var w=t.documentElement;Modernizr.addTest("cssall","all"in w.style);var S="svg"===w.nodeName.toLowerCase(),_=C._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];C._prefixes=_;var b="CSS"in e&&"supports"in e.CSS,T="supportsCSS"in e;Modernizr.addTest("supports",b||T);var P=C.testStyles=l,z="Moz O ms Webkit",E=C._config.usePrefixes?z.split(" "):[];C._cssomPrefixes=E;var A=function(t){var r,s=_.length,i=e.CSSRule;if("undefined"==typeof i)return n;if(!t)return!1;if(t=t.replace(/^@/,""),r=t.replace(/-/g,"_").toUpperCase()+"_RULE",r in i)return"@"+t;for(var o=0;s>o;o++){var a=_[o],f=a.toUpperCase()+"_"+r;if(f in i)return"@-"+a.toLowerCase()+"-"+t}return!1};C.atRule=A;var L=C._config.usePrefixes?z.toLowerCase().split(" "):[];C._domPrefixes=L;var k={elem:o("modernizr")};Modernizr._q.push(function(){delete k.elem});var N={style:k.elem.style};Modernizr._q.unshift(function(){delete N.style}),C.testAllProps=h,C.testAllProps=g,Modernizr.addTest("cssfilters",function(){if(Modernizr.supports)return g("filter","blur(2px)");var e=o("a");return e.style.cssText=_.join("filter:blur(2px); "),!!e.style.length&&(t.documentMode===n||t.documentMode>9)}),Modernizr.addTest("textalignlast",g("textAlignLast")),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&g("transform","scale(1)",!0)}),Modernizr.addTest("csstransforms3d",function(){var e=!!g("perspective","1px",!0),t=Modernizr._config.usePrefixes;if(e&&(!t||"webkitPerspective"in w.style)){var n,r="#modernizr{width:0;height:0}";Modernizr.supports?n="@supports (perspective: 1px)":(n="@media (transform-3d)",t&&(n+=",(-webkit-transform-3d)")),n+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",P(r+n,function(t){e=7===t.offsetWidth&&18===t.offsetHeight})}return e}),Modernizr.addTest("csstransitions",g("transition","all",!0));var j=C.prefixed=function(e,t,n){return 0===e.indexOf("@")?A(e):(-1!=e.indexOf("-")&&(e=a(e)),t?h(e,t,n):h(e,"pfx"))};Modernizr.addTest("wrapflow",function(){var e=j("wrapFlow");if(!e||S)return!1;var t=e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-"),r=o("div"),s=o("div"),i=o("span");s.style.cssText="position: absolute; left: 50px; width: 100px; height: 20px;"+t+":end;",i.innerText="X",r.appendChild(s),r.appendChild(i),w.appendChild(r);var a=i.offsetLeft;return w.removeChild(r),s=i=r=n,150==a}),s(),i(y),delete C.addTest,delete C.addAsyncTest;for(var O=0;O<Modernizr._q.length;O++)Modernizr._q[O]();e.Modernizr=Modernizr}(window,document);