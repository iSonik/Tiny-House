(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(4051)}])},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(2648).Z,o=n(7273).Z,l=r(n(7294)),a=n(1003),i=n(7795),s=n(4465),c=n(2692),u=n(8245),f=n(9246),d=n(227),p=n(3468);let h=new Set;function v(e,t,n,r){if(a.isLocalURL(t)){if(!r.bypassPrefetchedCheck){let o=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,l=t+"%"+n+"%"+o;if(h.has(l))return;h.add(l)}Promise.resolve(e.prefetch(t,n,r)).catch(e=>{})}}function b(e){return"string"==typeof e?e:i.formatUrl(e)}let y=l.default.forwardRef(function(e,t){let n,r;let{href:i,as:h,children:y,prefetch:m,passHref:x,replace:j,shallow:g,scroll:k,locale:_,onClick:C,onMouseEnter:N,onTouchStart:w,legacyBehavior:E=!1}=e,M=o(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=y,E&&("string"==typeof n||"number"==typeof n)&&(n=l.default.createElement("a",null,n));let O=!1!==m,P=l.default.useContext(c.RouterContext),L=l.default.useContext(u.AppRouterContext),T=null!=P?P:L,S=!P,{href:I,as:R}=l.default.useMemo(()=>{if(!P){let e=b(i);return{href:e,as:h?b(h):e}}let[t,n]=a.resolveHref(P,i,!0);return{href:t,as:h?a.resolveHref(P,h):n||t}},[P,i,h]),z=l.default.useRef(I),B=l.default.useRef(R);E&&(r=l.default.Children.only(n));let D=E?r&&"object"==typeof r&&r.ref:t,[H,K,U]=f.useIntersection({rootMargin:"200px"}),A=l.default.useCallback(e=>{(B.current!==R||z.current!==I)&&(U(),B.current=R,z.current=I),H(e),D&&("function"==typeof D?D(e):"object"==typeof D&&(D.current=e))},[R,D,I,U,H]);l.default.useEffect(()=>{T&&K&&O&&v(T,I,R,{locale:_})},[R,I,K,_,O,null==P?void 0:P.locale,T]);let X={ref:A,onClick(e){E||"function"!=typeof C||C(e),E&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),T&&!e.defaultPrevented&&function(e,t,n,r,o,i,s,c,u,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!a.isLocalURL(n)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:i,locale:c,scroll:s}):t[o?"replace":"push"](r||n,{forceOptimisticNavigation:!f})};u?l.default.startTransition(h):h()}(e,T,I,R,j,g,k,_,S,O)},onMouseEnter(e){E||"function"!=typeof N||N(e),E&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),T&&(O||!S)&&v(T,I,R,{locale:_,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){E||"function"!=typeof w||w(e),E&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),T&&(O||!S)&&v(T,I,R,{locale:_,priority:!0,bypassPrefetchedCheck:!0})}};if(!E||x||"a"===r.type&&!("href"in r.props)){let Z=void 0!==_?_:null==P?void 0:P.locale,q=(null==P?void 0:P.isLocaleDomain)&&d.getDomainLocale(R,Z,null==P?void 0:P.locales,null==P?void 0:P.domainLocales);X.href=q||p.addBasePath(s.addLocale(R,Z,null==P?void 0:P.defaultLocale))}return E?l.default.cloneElement(r,X):l.default.createElement("a",Object.assign({},M,X),n)});t.default=y,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:s}=e,c=s||!l,[u,f]=r.useState(!1),[d,p]=r.useState(null);r.useEffect(()=>{if(l){if(!c&&!u&&d&&d.tagName){let e=function(e,t,n){let{id:r,observer:o,elements:l}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=i.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=a.get(r)))return t;let o=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:l,elements:o},i.push(n),a.set(n,t),t}(n);return l.set(e,t),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),a.delete(r);let t=i.findIndex(e=>e.root===r.root&&e.margin===r.margin);t>-1&&i.splice(t,1)}}}(d,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!u){let r=o.requestIdleCallback(()=>f(!0));return()=>o.cancelIdleCallback(r)}},[d,c,n,t,u]);let h=r.useCallback(()=>{f(!1)},[]);return[p,u,h]};var r=n(7294),o=n(4686);let l="function"==typeof IntersectionObserver,a=new Map,i=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4051:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(5893);n(7475),n(9105);var o=n(7294),l=n(1664),a=n.n(l);function i(){let[e,t]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{function e(){t(window.pageYOffset>100)}return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]),(0,r.jsx)("nav",{className:"sticky-top ".concat(e?"hidden":""),style:{backgroundColor:"transparent",justifyContent:"center"},children:(0,r.jsxs)("div",{className:"linkDiv",style:{paddingTop:"0px",marginTop:"-1px",paddingBottom:"10px"},children:[(0,r.jsx)("div",{className:"link",children:(0,r.jsx)(a(),{href:"/",className:"paper-btn btn-primary text-decoration-none text-black",children:"Haus"})}),(0,r.jsx)("div",{className:"link",children:(0,r.jsx)(a(),{href:"/skizze",className:"paper-btn btn-primary text-decoration-none text-black",children:"Skizzen"})}),(0,r.jsx)("div",{className:"link",children:(0,r.jsx)(a(),{href:"/harteArbeit",className:"paper-btn btn-primary text-decoration-none text-black",children:"Bautechnik"})}),(0,r.jsx)("div",{className:"link",children:(0,r.jsx)(a(),{href:"/material",className:"paper-btn btn-primary text-decoration-none text-black",children:"Material"})})]})})}function s(){return(0,r.jsx)("div",{children:(0,r.jsx)("div",{className:"fixed-bottom text-secondary bg-black",style:{display:"flex",justifyContent:"right",opacity:.8},children:(0,r.jsxs)("div",{className:"footerButtons",style:{marginBottom:"-15px"},children:[(0,r.jsx)(a(),{href:"/datenschutz",className:" paper-btn btn-small text-decoration-none",style:{backgroundColor:"transparent",color:"white"},children:"Datenschutz"}),(0,r.jsx)(a(),{href:"/impressum",className:" paper-btn btn-small text-decoration-none",style:{backgroundColor:"transparent",color:"white"},children:"Impressum"})]})})})}function c(e){let{children:t}=e;return(0,r.jsxs)("div",{children:[(0,r.jsx)(i,{}),(0,r.jsx)("div",{className:"container",children:t}),(0,r.jsx)(s,{})]})}n(3260);var u=function(e){let{Component:t,pageProps:n}=e;return(0,r.jsx)(c,{children:(0,r.jsx)(t,{pageProps:n})})}},3260:function(){},9105:function(){},7475:function(){},1664:function(e,t,n){e.exports=n(1551)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(880)}),_N_E=e.O()}]);