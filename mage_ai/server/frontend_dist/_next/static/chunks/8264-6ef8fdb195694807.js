"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8264],{82571:function(n,e,t){var r=t(21831),o=t(82394),i=t(12691),c=t.n(i),l=t(82684),d=t(34376),a=t(58036),u=t(15338),s=t(97618),f=t(55485),h=t(64888),p=t(93369),g=t(82359),m=t(38276),v=t(30160),b=t(12468),x=t(35686),y=t(72473),w=t(68899),j=t(8059),k=t(70515),O=t(96409),I=t(86735),Z=t(28598);function _(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function P(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?_(Object(t),!0).forEach((function(e){(0,o.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):_(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var C=3*k.iI;e.Z=function(n){var e=n.aligned,t=n.navigationItems,o=n.showMore,i=n.visible,_=(0,d.useRouter)().pathname,S=x.ZP.projects.list().data,N=(0,l.useMemo)((function(){var n;return null===S||void 0===S||null===(n=S.projects)||void 0===n?void 0:n[0]}),[S]),E=(0,l.useMemo)((function(){return function(n){var e=n.project,t=[{Icon:y.$l,id:"files",label:function(){return"Files"},linkProps:{href:"/files"}},{Icon:y.zQ,id:"templates",label:function(){return"Templates"},linkProps:{href:"/templates"}},{Icon:y.Pt,id:"version-control",label:function(){return"Version control"},linkProps:{href:"/version-control"}},{Icon:y.oI,id:"terminal",label:function(){return"Terminal"},linkProps:{href:"/terminal"}},{Icon:y.Zr,id:"settings",label:function(){return"Settings"},linkProps:{href:"/settings"}}];return(0,O.v)(e,g.d.COMPUTE_MANAGEMENT)&&(t=(0,I.Hk)({Icon:y.Hm,id:"compute",label:function(){return"Compute management (beta)"},linkProps:{href:"/compute"}},4,t)),[{id:"main",items:[{Icon:y.G6,id:"overview",label:function(){return"Overview"},linkProps:{href:"/overview"}},{Icon:y.vd,id:"pipelines",label:function(){return"Pipelines"},linkProps:{href:"/pipelines"}},{Icon:y.Bf,id:"triggers",label:function(){return"Triggers"},linkProps:{href:"/triggers"}},{Icon:y.Pf,id:"pipeline-runs",label:function(){return"Pipeline runs"},linkProps:{href:"/pipeline-runs"}},{Icon:y.ie,id:"global-data-products",label:function(){return"Global data products"},linkProps:{href:"/global-data-products"}}]},{id:"misc",items:t}]}({project:N})}),[N]),M=(0,l.useCallback)((function(n,t){var r,l,d,a=n.Icon,u=n.IconSelected,g=n.disabled,x=n.id,y=n.isSelected,O=n.label,I=n.linkProps,S=n.onClick,N=y?y(_,n):!!_.match(new RegExp("^/".concat(x,"[/]*"))),E=N&&u?u:a,M=null===O||void 0===O?void 0:O(),B={primary:!E,selected:o&&N,showMore:o,withGradient:u};N&&u?(l=(0,Z.jsx)("div",{style:{height:C,width:C},children:(0,Z.jsx)(E,{muted:!0,size:C})}),(o||i)&&(l=(0,Z.jsx)(w.E7,P(P({},B),{},{children:(0,Z.jsx)(E,{muted:!0,size:C})}))),r=(0,Z.jsx)(h.Z,{backgroundGradient:j.yr,backgroundPanel:!0,basic:!0,borderWidth:2,disabled:g,linkProps:I,onClick:S,paddingUnits:1,children:l}),o&&(r=l)):(!N||N&&!u)&&(l=(0,Z.jsx)(w.E7,P(P({},B),{},{children:E?(0,Z.jsx)(E,{muted:!N,size:C}):(0,Z.jsx)(v.ZP,{children:"Edit"})})),r=(0,Z.jsx)(p.ZP,{disabled:g,inline:!0,linkProps:I,noHoverUnderline:!0,noPadding:!0,onClick:S,primary:N,sameColorAsText:!0,uuid:"VerticalNavigation/".concat(x),children:l}),o&&(r=l)),d="right"===e?(0,Z.jsxs)(f.ZP,{alignItems:"center",fullWidth:!0,justifyContent:"flex-end",children:[(0,Z.jsx)(s.Z,{flex:1,justifyContent:"flex-end",children:(0,Z.jsx)(v.ZP,{noWrapping:!0,children:M})}),(0,Z.jsx)(m.Z,{mr:2}),l]}):(0,Z.jsxs)(f.ZP,{alignItems:"center",children:[l,(0,Z.jsx)(m.Z,{mr:2}),(0,Z.jsx)(s.Z,{flex:1,children:(0,Z.jsx)(v.ZP,{noWrapping:!0,children:M})})]});var A,z=(0,Z.jsx)(w.J8,{href:"#",onClick:S,selected:N,children:d});return I&&(z=(0,Z.jsx)(c(),P(P({},I),{},{passHref:!0,children:z}))),"right"===e&&(r=(0,Z.jsx)(f.ZP,{alignItems:"center",fullWidth:!0,justifyContent:"flex-end",children:r})),A=i?z:o?r:(0,Z.jsx)(b.Z,{appearBefore:"right"===e,height:5*k.iI,label:M,size:null,widthFitContent:!0,children:r}),(0,Z.jsx)(m.Z,{mt:o&&i?0:t>=1?k.cd:0,children:A},"button-".concat(x))}),[e,_,o,i]),B=(0,l.useMemo)((function(){var n=[];return(t||E).forEach((function(e,t){var o=e.id,c=e.items;(null===c||void 0===c?void 0:c.length)>=1?(t>=1&&n.push((0,Z.jsx)(m.Z,{my:i?k.cd:k.cd+1,children:(0,Z.jsx)(u.Z,{light:!0})},o)),n.push.apply(n,(0,r.Z)(c.map((function(n,e){return M(n,e)}))))):n.push(M(e,t))})),n}),[M,E,t,i]);return(0,Z.jsx)(a.Z,{children:B})}},68899:function(n,e,t){t.d(e,{E7:function(){return b},HS:function(){return v},Hn:function(){return y},J8:function(){return x},Nk:function(){return p},k1:function(){return h},lm:function(){return m}});var r=t(82684),o=t(38626),i=t(38276),c=t(44897),l=t(42631),d=t(46684),a=t(70515),u=t(47041),s=t(91437),f=t(28598),h=a.cd*a.iI+5*a.iI+a.cd*a.iI+1,p=o.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-ecogjt-0"})(["display:flex;flex-direction:row;height:calc(100vh - ","px);position:fixed;top:","px;width:100%;",""],d.Mz,d.Mz,(function(n){return"\n    background-color: ".concat((n.theme.background||c.Z.background).page,";\n  ")})),g=o.default.div.withConfig({displayName:"indexstyle__VerticalNavigationStyleComponent",componentId:"sc-ecogjt-1"})(["height:100%;"," "," "," @keyframes animate-in{0%{width:","px;}100%{width:","px;}}"," ",""],(function(n){return"\n    background-color: ".concat((n.theme.background||c.Z.background).panel,";\n  ")}),(function(n){return!n.borderless&&"right"!==n.aligned&&"\n    border-right: 1px solid ".concat((n.theme.borders||c.Z.borders).medium,";\n  ")}),(function(n){return!n.borderless&&"right"===n.aligned&&"\n    border-left: 1px solid ".concat((n.theme.borders||c.Z.borders).medium,";\n  ")}),21*a.iI,34*a.iI,(function(n){return n.showMore&&n.visible&&"\n    &:hover {\n      animation: animate-in 100ms linear forwards;\n      position: fixed;\n      z-index: 100;\n    }\n  "}),(function(n){return n.showMore&&n.visible&&"right"===n.aligned&&"\n    &:hover {\n      right: 0;\n      top: ".concat(d.Mz,"px;\n    }\n  ")}));function m(n){var e=n.aligned,t=n.borderless,o=n.children,c=n.showMore,l=(0,r.useRef)(null),d=(0,r.useState)(!1),u=d[0],s=d[1];return(0,f.jsx)(g,{aligned:e,borderless:t&&!u,onMouseEnter:c?function(){clearTimeout(l.current),l.current=setTimeout((function(){s(!0)}),300)}:null,onMouseLeave:c?function(){clearTimeout(l.current),s(!1)}:null,showMore:c,visible:u,children:(0,f.jsx)(i.Z,{px:c&&u?0:a.cd,py:c&&u?1:a.cd,children:r.cloneElement(o,{showMore:c,visible:u})})})}var v=o.default.div.withConfig({displayName:"indexstyle__SubheaderStyle",componentId:"sc-ecogjt-2"})(["position:sticky;top:0;width:100%;z-index:3;"," ",""],(function(n){return"\n    background-color: ".concat((n.theme.background||c.Z.background).page,";\n    border-bottom: 1px solid ").concat((n.theme.borders||c.Z.borders).medium,";\n  ")}),(function(n){return!n.noPadding&&"\n    padding: ".concat(a.cd*a.iI,"px;\n  ")})),b=(o.default.div.withConfig({displayName:"indexstyle__ContentStyle",componentId:"sc-ecogjt-3"})([""," overflow:auto;",""],u.w5,(function(n){return"\n    height: calc(100vh - ".concat(d.Mz+(n.heightOffset||0),"px);\n  ")})),o.default.div.withConfig({displayName:"indexstyle__NavigationItemStyle",componentId:"sc-ecogjt-4"})(["align-items:center;border-radius:","px;display:flex;height:","px;justify-content:center;padding:","px;width:","px;"," "," "," ",""],l.n_,5*a.iI,a.iI,5*a.iI,(function(n){return n.primary&&"\n    ".concat((0,s.eR)(),"\n    background: ").concat((n.theme||c.Z).chart.backgroundPrimary,";\n    border: 1px solid ").concat((n.theme||c.Z).feature.active,";\n\n    &:hover {\n      background-color: ").concat((n.theme||c.Z).interactive.linkSecondary,";\n    }\n  ")}),(function(n){return n.selected&&!n.withGradient&&"\n    background-color: ".concat((n.theme.interactive||c.Z.interactive).linkPrimary,";\n  ")}),(function(n){return n.selected&&n.withGradient&&"\n    background-color: ".concat((n.theme.background||c.Z.background).codeTextarea,";\n  ")}),(function(n){return!n.selected&&n.showMore&&"\n    background-color: ".concat((n.theme.interactive||c.Z.interactive).defaultBackground,";\n  ")}))),x=o.default.a.withConfig({displayName:"indexstyle__NavigationLinkStyle",componentId:"sc-ecogjt-5"})([""," display:block;padding:","px ","px;"," ",""],(0,s.eR)(),1*a.iI,a.iI*a.cd,(function(n){return!n.selected&&"\n    &:hover {\n      background-color: ".concat((n.theme.interactive||c.Z.interactive).hoverBackground,";\n    }\n  ")}),(function(n){return n.selected&&"\n    background-color: ".concat((n.theme.interactive||c.Z.interactive).linkPrimaryHover,";\n  ")})),y=o.default.div.withConfig({displayName:"indexstyle__ImageStyle",componentId:"sc-ecogjt-6"})(["background-position:0 0;background-repeat:no-repeat;background-size:contain;height:","px;width:","px;"," ",""],12*a.iI,12*a.iI,(function(n){return"\n    background-image: url(".concat(n.imageUrl,");\n  ")}),(function(n){return n.size&&"\n    height: ".concat(n.size,"px;\n    width: ").concat(n.size,"px;\n  ")}))},2842:function(n,e,t){t.d(e,{E$:function(){return C},MK:function(){return x},MP:function(){return Z},Md:function(){return u},OM:function(){return m},On:function(){return W},PZ:function(){return b},Ru:function(){return _},S9:function(){return z},VW:function(){return h},W7:function(){return k},Wi:function(){return g},YJ:function(){return I},Zj:function(){return M},Zt:function(){return a},aH:function(){return E},bC:function(){return B},dN:function(){return s},ff:function(){return P},l8:function(){return p},lU:function(){return A},rS:function(){return N},uX:function(){return v},v7:function(){return S},ve:function(){return f},ym:function(){return O}});var r=t(38626),o=t(44897),i=t(42631),c=t(46684),l=t(70515),d=t(47041),a=64*l.iI,u=30*l.iI,s=21.25*l.iI,f=35*l.iI,h=.5*l.iI,p=13*l.iI,g=3*l.cd*l.iI,m=6*l.iI,v=2*l.cd*3*l.iI,b=r.default.div.withConfig({displayName:"indexstyle__InlineContainerStyle",componentId:"sc-1lxpneo-0"})(["position:relative;",""],(function(n){return n.height&&"\n    height: ".concat(n.height,"px;\n  ")})),x=(r.default.div.withConfig({displayName:"indexstyle__HeaderStyle",componentId:"sc-1lxpneo-1"})(["position:fixed;z-index:3;"," "," ",""],(function(n){return"\n    border-bottom: 1px solid ".concat((n.theme.monotone||o.Z.monotone).grey200,";\n  ")}),(function(n){return!n.beforeVisible&&"\n    width: 100%;\n  "}),(function(n){return n.beforeVisible&&"\n    left: ".concat(f,"px;\n    width: calc(100% - ").concat(f,"px);\n  ")})),r.default.div.withConfig({displayName:"indexstyle__NewHeaderStyle",componentId:"sc-1lxpneo-2"})(["height:","px;position:fixed;top:0;width:100%;z-index:4;"],c.Mz)),y=(r.default.div.withConfig({displayName:"indexstyle__TabStyle",componentId:"sc-1lxpneo-3"})(["border-top-left-radius:","px;border-top-right-radius:","px;padding:","px ","px;position:relative;top:1px;"," "," ",""],i.n_,i.n_,1*l.iI,2*l.iI,(function(n){return"\n    border-left: 1px solid ".concat((n.theme.monotone||o.Z.monotone).grey200,";\n    border-right: 1px solid ").concat((n.theme.monotone||o.Z.monotone).grey200,";\n    border-top: 1px solid ").concat((n.theme.monotone||o.Z.monotone).grey200,";\n  ")}),(function(n){return!n.first&&"\n    margin-left: ".concat(1*l.iI,"px;\n  ")}),(function(n){return n.selected&&"\n    border-bottom: 1px solid ".concat((n.theme.monotone||o.Z.monotone).white,";\n  ")})),(0,r.css)(["z-index:2;"," "," ",""],(function(n){return"\n    height: calc(100% - ".concat("undefined"===typeof n.heightOffset?v:n.heightOffset,"px);\n  ")}),(function(n){return n.inline&&"\n    position: absolute;\n  "}),(function(n){return!n.inline&&"\n    background-color: ".concat((n.theme.background||o.Z.background).panel,";\n    position: fixed;\n    top: ").concat("undefined"===typeof n.heightOffset?v:n.heightOffset,"px;\n  ")}))),w=(0,r.css)([""," height:100%;overflow:auto;position:relative;z-index:2;",""],d.w5,(function(n){return"undefined"!==typeof n.verticalOffset&&null!==n.verticalOffset&&"\n    height: calc(100% - ".concat(n.verticalOffset+(n.heightOffset||0),"px);\n    top: ").concat(n.verticalOffset,"px;\n  ")})),j=(0,r.css)(["position:absolute;width:","px;z-index:6;&:hover{","}"," "," ",""],h,(function(n){return!n.disabled&&"\n      border-color: ".concat((n.theme.text||o.Z.text).fileBrowser," !important;\n    ")}),(function(n){return"\n    height: calc(100% + ".concat((null===n||void 0===n?void 0:n.top)||0,"px);\n    top: -").concat((null===n||void 0===n?void 0:n.top)||0,"px;\n  ")}),(function(n){return!n.disabled&&"\n    cursor: col-resize;\n  "}),(function(n){return n.active&&!n.disabled&&"\n    border-color: ".concat((n.theme.text||o.Z.text).fileBrowser," !important;\n  ")})),k=r.default.div.withConfig({displayName:"indexstyle__AsideHeaderStyle",componentId:"sc-1lxpneo-4"})(["border-bottom:1px solid transparent;height:","px;z-index:4;"," "," "," "," ",""],m,(0,d.y$)(),(function(n){return"\n    background-color: ".concat((n.theme.background||o.Z.background).panel,";\n    top: ").concat((null===n||void 0===n?void 0:n.top)||0,"px;\n  ")}),(function(n){return!n.visible&&"\n    border-left: 1px solid transparent;\n    border-right: 1px solid transparent;\n    border-bottom-color: ".concat((n.theme.borders||o.Z.borders).medium," !important;\n  ")}),(function(n){return n.contained&&"\n    border-left-color: ".concat((n.theme.borders||o.Z.borders).medium," !important;\n  ")}),(function(n){return!n.inline&&"\n    position: fixed;\n  "})),O=r.default.div.withConfig({displayName:"indexstyle__AsideHeaderInnerStyle",componentId:"sc-1lxpneo-5"})(["display:flex;flex:1;overflow:auto;padding:0 ","px;"," ",""],2*l.iI,(0,d.y$)(),(function(n){return n.noPadding&&"\n    padding: 0;\n  "})),I=r.default.div.withConfig({displayName:"indexstyle__AsideSubheaderStyle",componentId:"sc-1lxpneo-6"})(["border-bottom:1px solid transparent;height:","px;overflow-x:auto;position:absolute;top:","px;"," "," ",""],g,g,(0,d.y$)(),(function(n){return"\n    background-color: ".concat((n.theme.background||o.Z.background).table,";\n  ")}),(function(n){return!n.visible&&"\n    border-color: ".concat((n.theme.borders||o.Z.borders).medium," !important;\n  ")})),Z=r.default.aside.withConfig({displayName:"indexstyle__BeforeStyle",componentId:"sc-1lxpneo-7"})([""," left:0;"],y),_=r.default.div.withConfig({displayName:"indexstyle__BeforeInnerStyle",componentId:"sc-1lxpneo-8"})([""," overflow:hidden;&:hover{overflow:auto;}",""],w,(function(n){return n.contained&&"\n    border-left: 1px solid ".concat((n.theme.borders||o.Z.borders).medium," !important;\n  ")})),P=r.default.aside.withConfig({displayName:"indexstyle__AfterStyle",componentId:"sc-1lxpneo-9"})([""," right:0;"],y),C=r.default.div.withConfig({displayName:"indexstyle__AfterInnerStyle",componentId:"sc-1lxpneo-10"})([""," "," ",""],w,(function(n){return n.overflow&&"\n    overflow: ".concat(n.overflow,";\n  ")}),(function(n){return n.heightMinus&&"\n    height: calc(100% - ".concat(n.heightMinus,"px);\n  ")})),S=r.default.div.withConfig({displayName:"indexstyle__DraggableStyle",componentId:"sc-1lxpneo-11"})([""," "," ",""],j,(function(n){return"undefined"!==typeof n.left&&"\n    border-left: 1px solid ".concat((n.theme.borders||o.Z.borders).medium,";\n    left: ").concat(n.left,"px;\n  ")}),(function(n){return"undefined"!==typeof n.right&&"\n    border-right: 1px solid ".concat((n.theme.borders||o.Z.borders).medium,";\n    right: ").concat(n.right,"px;\n  ")})),N=r.default.div.withConfig({displayName:"indexstyle__MainWrapper",componentId:"sc-1lxpneo-12"})(["height:100%;z-index:1;",""],(function(n){return"\n    background-color: ".concat((n.theme.background||o.Z.background).codeArea,";\n    position: ").concat(n.inline?"absolute":"fixed",";\n  ")})),E=r.default.div.withConfig({displayName:"indexstyle__MainContentStyle",componentId:"sc-1lxpneo-13"})(["z-index:2;"," ",""],(function(n){return"\n    height: calc(100% - ".concat(n.headerOffset||0,"px);\n    position: ").concat(n.inline?"relative":"fixed",";\n  ")}),(function(n){return!n.inline&&"\n    top: ".concat(n.headerOffset||0,"px;\n  ")})),M=r.default.div.withConfig({displayName:"indexstyle__MainContentInnerStyle",componentId:"sc-1lxpneo-14"})([""," height:100%;overflow:auto;"],d.w5),B=r.default.div.withConfig({displayName:"indexstyle__NavigationStyle",componentId:"sc-1lxpneo-15"})(["position:relative;"]),A=r.default.div.withConfig({displayName:"indexstyle__NavigationInnerStyle",componentId:"sc-1lxpneo-16"})(["height:100%;position:fixed;z-index:6;"," ",""],(function(n){return"left"===n.aligned&&"\n    border-right: 1px solid ".concat((n.theme.borders||o.Z.borders).medium,";\n    left: 0;\n  ")}),(function(n){return"right"===n.aligned&&"\n    border-left: 1px solid ".concat((n.theme.borders||o.Z.borders).medium,";\n    right: 0;\n  ")})),z=r.default.div.withConfig({displayName:"indexstyle__NavigationContainerStyle",componentId:"sc-1lxpneo-17"})([""," overflow:auto;position:absolute;width:fit-content;"," "," "," ",""],d.w5,(function(n){return"\n    height: calc(100vh - ".concat(n.heightOffset,"px);\n  ")}),(function(n){return n.fullWidth&&"\n    width: calc(100% - ".concat(n.widthOffset||0,"px);\n  ")}),(function(n){return n.widthOffset&&"left"===n.aligned&&"\n    left: ".concat(n.widthOffset,"px;\n  ")}),(function(n){return n.widthOffset&&"right"===n.aligned&&"\n    right: ".concat(n.widthOffset,"px;\n  ")})),W=r.default.div.withConfig({displayName:"indexstyle__AsideFooterStyle",componentId:"sc-1lxpneo-18"})(["border-left:1px solid transparent;border-right:1px solid transparent;border-top:1px solid transparent;position:fixed;z-index:3;"," "," "," "," ",""],(function(n){return"\n    border-top-color: ".concat((n.theme.borders||o.Z.borders).medium," !important;\n  ")}),(function(n){return!n.inline&&"\n    background-color: ".concat((n.theme.background||o.Z.background).panel,";\n  ")}),(function(n){return n.contained&&"\n    border-left-color: ".concat((n.theme.borders||o.Z.borders).medium," !important;\n  ")}),(function(n){return("undefined"===typeof n.bottom||null===n.bottom)&&"\n    bottom: 0;\n  "}),(function(n){return"undefined"!==typeof n.bottom&&null!==n.bottom&&"\n    bottom: ".concat(n.bottom,"px;\n  ")}))},62547:function(n,e,t){var r=t(82684),o=t(1887),i=t.n(o),c=t(71180),l=t(58036),d=t(97618),a=t(55485),u=t(38276),s=t(12468),f=t(82571),h=t(2842),p=t(72473),g=t(53808),m=t(70515),v=t(68899),b=t(19183),x=t(28598);e.Z=function(n){var e=n.after,t=n.afterFooter,o=n.afterFooterBottomOffset,y=n.afterHeader,w=n.afterHeaderOffset,j=n.afterHeightOffset,k=n.afterHidden,O=n.afterInnerHeightMinus,I=n.afterMousedownActive,Z=n.afterNavigationItems,_=n.afterOverflow,P=n.afterSubheader,C=n.afterWidth,S=void 0===C?0:C,N=n.before,E=n.beforeFooter,M=n.beforeHeader,B=n.beforeHeaderOffset,A=n.beforeHeightOffset,z=n.beforeHidden,W=n.beforeMousedownActive,H=n.beforeNavigationItems,D=n.beforeWidth,T=void 0===D?0:D,F=n.children,R=n.contained,L=n.header,U=n.headerOffset,G=void 0===U?0:U,V=n.height,K=n.hideAfterCompletely,$=n.hideBeforeCompletely,q=n.inline,X=n.leftOffset,J=void 0===X?0:X,Y=n.mainContainerHeader,Q=n.mainContainerRef,nn=n.navigationShowMore,en=n.setAfterHidden,tn=n.setAfterMousedownActive,rn=n.setAfterWidth,on=n.setBeforeHidden,cn=n.setBeforeMousedownActive,ln=n.setBeforeWidth,dn=n.uuid,an=(0,b.i)().width,un=(0,r.useRef)(null),sn=(0,r.useRef)(null),fn=(0,r.useRef)(null),hn=(0,r.useRef)(null),pn=(0,r.useCallback)((function(){var n=!k;null===en||void 0===en||en(n),(0,g.t8)(dn||g.zg,n)}),[k,en,dn]),gn=(0,r.useCallback)((function(){var n=!z;null===on||void 0===on||on(n),(0,g.t8)(dn||g.Uu,n)}),[z,on,dn]);(0,r.useEffect)((function(){var n,e,t,r,o=function(n){var e,t;((null===fn||void 0===fn||null===(e=fn.current)||void 0===e||null===(t=e.getBoundingClientRect)||void 0===t?void 0:t.call(e))||{}).x;if(an){var r=n.x;r+h.l8>an-S&&(r=an-S-h.l8),r-=2*J,ln(Math.max(r,h.dN))}},i=function(n){var e,t;n.offsetX>=n.target.offsetWidth-h.VW&&n.offsetX<=n.target.offsetWidth+h.VW&&(null===cn||void 0===cn||cn(!0),n.preventDefault(),null===(e=document)||void 0===e||null===(t=e.addEventListener)||void 0===t||t.call(e,"mousemove",o,!1))},c=function(){var n,e;null===cn||void 0===cn||cn(!1),null===(n=document)||void 0===n||null===(e=n.removeEventListener)||void 0===e||e.call(n,"mousemove",o,!1)};return null===hn||void 0===hn||null===(n=hn.current)||void 0===n||null===(e=n.addEventListener)||void 0===e||e.call(n,"mousedown",i,!1),null===(t=document)||void 0===t||null===(r=t.addEventListener)||void 0===r||r.call(t,"mouseup",c,!1),function(){var n,e,t,r;null===hn||void 0===hn||null===(n=hn.current)||void 0===n||null===(e=n.removeEventListener)||void 0===e||e.call(n,"mousedown",i,!1),null===(t=document)||void 0===t||null===(r=t.removeEventListener)||void 0===r||r.call(t,"mouseup",c,!1),c()}}),[S,z,J,fn,hn,cn,ln,an]),(0,r.useEffect)((function(){var n,e,t,r,o=function(n){var e,t;((null===un||void 0===un||null===(e=un.current)||void 0===e||null===(t=e.getBoundingClientRect)||void 0===t?void 0:t.call(e))||{}).x;if(an){var r=an-n.x;r+h.l8>an-T&&(r=an-T-h.l8),rn(Math.max(r,h.Md))}},i=function(n){var e,t;n.offsetX>=-1*h.VW&&n.offsetX<=h.VW&&(null===tn||void 0===tn||tn(!0),n.preventDefault(),null===(e=document)||void 0===e||null===(t=e.addEventListener)||void 0===t||t.call(e,"mousemove",o,!1))},c=function(){var n,e;null===tn||void 0===tn||tn(!1),null===(n=document)||void 0===n||null===(e=n.removeEventListener)||void 0===e||e.call(n,"mousemove",o,!1)};return null===sn||void 0===sn||null===(n=sn.current)||void 0===n||null===(e=n.addEventListener)||void 0===e||e.call(n,"mousedown",i,!1),null===(t=document)||void 0===t||null===(r=t.addEventListener)||void 0===r||r.call(t,"mouseup",c,!1),function(){var n,e,t,r;null===sn||void 0===sn||null===(n=sn.current)||void 0===n||null===(e=n.removeEventListener)||void 0===e||e.call(n,"mousedown",i,!1),null===(t=document)||void 0===t||null===(r=t.removeEventListener)||void 0===r||r.call(t,"mouseup",c,!1),c()}}),[k,T,un,sn,tn,rn,an]);var mn=K&&k,vn=mn?0:k?4*m.iI:S,bn=$&&z?0:z?4*m.iI:T,xn="calc(100% - ".concat(bn+vn+J,"px)"),yn=(0,r.useMemo)((function(){return(null===Z||void 0===Z?void 0:Z.length)>=1}),[Z]),wn=(0,r.useMemo)((function(){return(0,x.jsxs)(x.Fragment,{children:[(en||y)&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(h.W7,{inline:q,style:{width:yn?vn-(v.k1-1):vn},top:R?G:h.Wi,visible:k,children:(0,x.jsxs)(a.ZP,{alignItems:"center",fullHeight:!0,fullWidth:!0,children:[(0,x.jsxs)(d.Z,{children:[(0,x.jsx)(u.Z,{pl:k?1:2}),(0,x.jsxs)(c.ZP,{noBackground:!0,noBorder:!0,noPadding:!0,onClick:function(){return pn()},children:[k&&(0,x.jsx)(p.s$,{neutral:!0,size:2*m.iI}),!k&&(0,x.jsx)(p._Q,{neutral:!0,size:2*m.iI})]})]}),!k&&y]})}),!k&&P&&(0,x.jsx)(h.YJ,{style:{width:yn?vn-(v.k1+1):vn},visible:k,children:P})]}),(0,x.jsx)(h.E$,{heightMinus:O,noScrollbarTrackBackground:!0,overflow:_,ref:un,verticalOffset:y?P?h.Wi+j:w||j:null,children:!k&&e}),t&&!k&&(0,x.jsx)(h.On,{bottom:q?o:null,inline:q,style:{overflow:k?"visible":"hidden",width:vn},children:t})]})}),[e,t,o,y,w,j,k,_,P,vn,R,yn,G,q,un,en,pn]),jn=(0,r.useMemo)((function(){return(null===H||void 0===H?void 0:H.length)>=1}),[H]),kn=(0,r.useRef)(null),On=(0,r.useMemo)((function(){var n,e;return(0,x.jsxs)(x.Fragment,{children:[(on||M)&&(0,x.jsx)(h.W7,{contained:R,inline:q,style:{overflow:z?"visible":"hidden",width:jn?bn-(v.k1+2):bn},top:R?G:h.Wi,visible:z,children:(0,x.jsxs)(a.ZP,{alignItems:"center",fullHeight:!0,fullWidth:!0,justifyContent:"space-between",children:[(0,x.jsxs)(h.ym,{noPadding:!0,children:[(0,x.jsx)(u.Z,{pl:z?1:0}),!z&&M]}),(0,x.jsxs)(d.Z,{children:[on&&(0,x.jsx)(s.Z,{appearAbove:!z,appearBefore:!z,block:!0,label:z?"Show sidebar":"Hide sidebar",size:null,widthFitContent:!0,children:(0,x.jsxs)(c.ZP,{noBackground:!0,noBorder:!0,noPadding:!0,onClick:function(){return gn()},children:[z&&(0,x.jsx)(p._Q,{neutral:!0,size:2*m.iI}),!z&&(0,x.jsx)(p.s$,{neutral:!0,size:2*m.iI})]})},z?"before-is-hidden":"before-is-visible"),(0,x.jsx)(u.Z,{pr:z?1:2})]})]})}),(0,x.jsx)(h.Ru,{contained:R&&!q,heightOffset:E?null===kn||void 0===kn||null===(n=kn.current)||void 0===n||null===(e=n.getBoundingClientRect())||void 0===e?void 0:e.height:null,noScrollbarTrackBackground:!0,ref:fn,verticalOffset:M?B||A:null,children:!z&&N}),E&&(0,x.jsx)(h.On,{contained:R,ref:kn,style:{overflow:z?"visible":"hidden",width:bn},children:E})]})}),[N,E,kn,M,B,A,z,bn,R,G,jn,q,fn,on,gn]),In=(0,r.useMemo)((function(){return(0,x.jsxs)(x.Fragment,{children:[(I&&!k||W&&!z)&&(0,x.jsx)(i(),{children:(0,x.jsx)("style",{dangerouslySetInnerHTML:{__html:"\n                body {\n                  cursor: col-resize;\n                }\n              "}})}),L&&(0,x.jsx)(h.MK,{children:L}),N&&(0,x.jsxs)(h.MP,{heightOffset:A,inline:q,style:{left:J,width:bn},children:[(0,x.jsx)(h.v7,{active:W,disabled:z,ref:hn,right:0,top:R?0:h.Wi}),jn&&(0,x.jsxs)(h.bC,{children:[!z&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(h.lU,{aligned:"left",children:(0,x.jsx)(v.lm,{aligned:"left",borderless:!0,showMore:nn,children:(0,x.jsx)(f.Z,{aligned:"left",navigationItems:H})})}),(0,x.jsx)(h.S9,{aligned:"left",fullWidth:!0,heightOffset:A,widthOffset:v.k1+1,children:On})]}),z&&On]}),!jn&&On]}),(0,x.jsxs)(h.rS,{inline:q,style:{left:bn+J,width:xn},children:[Y,(0,x.jsx)(h.aH,{headerOffset:R?G:(Y?h.uX:h.Wi)+G,inline:q,style:{width:q?null:xn},children:(0,x.jsx)(h.Zj,{noScrollbarTrackBackground:!0,ref:Q,children:F})})]}),e&&!mn&&(0,x.jsxs)(h.ff,{heightOffset:j,inline:q,style:{width:vn},children:[(0,x.jsx)(h.v7,{active:I,disabled:k,left:0,ref:sn,top:R?0:h.Wi}),yn&&(0,x.jsxs)(h.bC,{children:[!k&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(h.lU,{aligned:"right",children:(0,x.jsx)(v.lm,{aligned:"right",borderless:!0,showMore:nn,children:(0,x.jsx)(f.Z,{aligned:"right",navigationItems:Z})})}),(0,x.jsx)(h.S9,{aligned:"right",fullWidth:!0,heightOffset:j,widthOffset:v.k1+1,children:wn})]}),k&&wn]}),!yn&&wn]})]})}),[e,wn,j,k,I,Z,vn,On,A,z,W,H,bn,F,R,yn,jn,L,G,q,J,Y,Q,xn,nn,sn,hn,mn]);return(0,x.jsxs)(l.Z,{children:[q&&(0,x.jsx)(h.PZ,{height:V,children:In}),!q&&In]})}},93808:function(n,e,t){t.d(e,{Z:function(){return _}});var r=t(77837),o=t(26304),i=t(62243),c=t(29385),l=t(80022),d=t(99177),a=t(93189),u=t(15544),s=t(82394),f=t(38860),h=t.n(f),p=t(82684),g=t(56663),m=t.n(g),v=t(40761),b=t(34661),x=t(36105),y=t(50178),w=t(69419),j=t(28598),k=["auth"];function O(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function I(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?O(Object(t),!0).forEach((function(e){(0,s.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function Z(n){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var t,r=(0,u.Z)(n);if(e){var o=(0,u.Z)(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return(0,a.Z)(this,t)}}function _(n){return function(e){(0,d.Z)(a,e);var t=Z(a);function a(){var n;(0,i.Z)(this,a);for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return n=t.call.apply(t,[this].concat(r)),(0,s.Z)((0,l.Z)(n),"state",{auth:new v.Z(n.props.token)}),n}return(0,c.Z)(a,[{key:"componentDidMount",value:function(){this.setState({auth:new v.Z(this.props.token)})}},{key:"render",value:function(){var e=this.props,t=(e.auth,(0,o.Z)(e,k));return(0,j.jsx)(n,I({auth:this.state.auth},t))}}],[{key:"getInitialProps",value:function(){var e=(0,r.Z)(h().mark((function e(t){var r,o,i,c,l,d,a,u,s;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=m()(t),o=(0,y.ex)(t),i=o.id,c=r[b.Mv],l=r[x.qt],d=new v.Z(c),a=I(I({},t),{},{auth:d,currentGroupId:i,theme:l}),(0,y.YB)(t)&&d.isExpired&&(console.log("OAuth token has expired."),u=I(I({},t.query),{},{redirect_url:t.asPath}),(0,w.nL)("/sign-in?".concat((0,w.uM)(u)),t.res)),!n.getInitialProps){e.next=12;break}return e.next=10,n.getInitialProps(a);case 10:return s=e.sent,e.abrupt("return",I(I({},s),{},{auth:d,currentGroupId:i,theme:l}));case 12:return e.abrupt("return",a);case 13:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}]),a}(p.Component)}},82359:function(n,e,t){var r,o;t.d(e,{d:function(){return r},k:function(){return o}}),function(n){n.ADD_NEW_BLOCK_V2="add_new_block_v2",n.COMPUTE_MANAGEMENT="compute_management",n.DATA_INTEGRATION_IN_BATCH_PIPELINE="data_integration_in_batch_pipeline",n.INTERACTIONS="interactions",n.NOTEBOOK_BLOCK_OUTPUT_SPLIT_VIEW="notebook_block_output_split_view",n.LOCAL_TIMEZONE="display_local_timezone",n.OPERATION_HISTORY="operation_history"}(r||(r={})),function(n){n.MAIN="main",n.STANDALONE="standalone",n.SUB="sub"}(o||(o={}))},64888:function(n,e,t){var r=t(82394),o=t(26304),i=t(38626),c=t(71180),l=t(44897),d=t(42631),a=t(8059),u=t(70515),s=t(28598),f=["backgroundGradient","backgroundPanel","borderWidth","children","compact","paddingUnits","paddingUnitsHorizontal","paddingUnitsVertical"];function h(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function p(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?h(Object(t),!0).forEach((function(e){(0,r.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var g=i.default.div.withConfig({displayName:"GradientButton__ButtonContentStyle",componentId:"sc-1gzx4r1-0"})(["border-radius:","px;height:fit-content;"," ",""],d.n_,(function(n){return!n.backgroundPanel&&"\n    background-color: ".concat((n.theme.background||l.Z.background).page,";\n  ")}),(function(n){return n.backgroundPanel&&"\n    background-color: ".concat((n.theme.background||l.Z.background).panel,";\n  ")}));e.Z=function(n){var e=n.backgroundGradient,t=void 0===e?a.TD:e,r=n.backgroundPanel,i=n.borderWidth,l=void 0===i?1:i,d=n.children,h=n.compact,m=n.paddingUnits,v=n.paddingUnitsHorizontal,b=void 0===v?1.5:v,x=n.paddingUnitsVertical,y=void 0===x?1.25:x,w=(0,o.Z)(n,f),j=b,k=y;return m&&(j=m,k=m),h&&(j*=.75,k*=.75),(0,s.jsx)(c.ZP,p(p({},w),{},{backgroundGradient:t,noPadding:!0,padding:"".concat(l,"px"),pointerEventsEnabled:!0,children:(0,s.jsx)(g,{backgroundPanel:r,children:(0,s.jsx)("div",{style:{paddingBottom:k*u.iI-l,paddingLeft:j*u.iI-l,paddingRight:j*u.iI-l,paddingTop:k*u.iI-l},children:d})})}))}},24944:function(n,e,t){t.d(e,{HL:function(){return d},lZ:function(){return a},qZ:function(){return l}});var r=t(38626),o=t(44897),i=t(42631),c=t(70515),l=r.default.div.withConfig({displayName:"indexstyle__DividerContainerStyle",componentId:"sc-uiq3r3-0"})([""," ",""],(function(n){return n.short&&"\n    width: ".concat(21*c.iI,"px;\n  ")}),(function(n){return!n.short&&"\n    width: 100%;\n  "})),d=r.default.div.withConfig({displayName:"indexstyle__DividerStyle",componentId:"sc-uiq3r3-1"})(["height:1px;"," "," "," "," "," ",""],(function(n){return!(n.light||n.medium)&&"\n    background-color: ".concat((n.theme.monotone||o.Z.monotone).grey200,";\n  ")}),(function(n){return n.muted&&"\n    background-color: ".concat((n.theme.monotone||o.Z.monotone).grey500,";\n  ")}),(function(n){return n.light&&"\n    background-color: ".concat((n.theme.borders||o.Z.borders).light,";\n  ")}),(function(n){return n.medium&&"\n    background-color: ".concat((n.theme.borders||o.Z.borders).medium,";\n  ")}),(function(n){return n.prominent&&"\n    background-color: ".concat((n.theme.monotone||o.Z.monotone).grey300,";\n  ")}),(function(n){return n.black&&"\n    background-color: ".concat((n.theme.monotone||o.Z.monotone).black,";\n  ")})),a=r.default.div.withConfig({displayName:"indexstyle__VerticalDividerStyle",componentId:"sc-uiq3r3-2"})(["width:1px;align-self:stretch;"," ",""],(function(n){return"\n    border-left: ".concat(i.YF,"px ").concat(i.M8," ").concat((n.theme||o.Z).interactive.defaultBorder,";\n  ")}),(function(n){var e=n.right;return"number"===typeof e&&"\n    position: relative;\n    right: ".concat(e,"px;\n  ")}))},15338:function(n,e,t){var r=t(82394),o=t(26304),i=(t(82684),t(38276)),c=t(24944),l=t(28598),d=["short"];function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function u(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){(0,r.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}e.Z=function(n){var e=n.short,t=void 0!==e&&e,r=(0,o.Z)(n,d);return(0,l.jsx)(c.qZ,{short:t,children:(0,l.jsx)(i.Z,u(u({},r),{},{children:(0,l.jsx)(c.HL,u({},r))}))})}},8059:function(n,e,t){t.d(e,{eW:function(){return v},Hv:function(){return l},FI:function(){return p},Sr:function(){return d},rK:function(){return h},TD:function(){return a},R2:function(){return u},AK:function(){return s},yr:function(){return m},J:function(){return f},RK:function(){return g}});var r=t(79633),o="#FF144D",i="#DEBB92",c="#2A60FE",l="linear-gradient(90deg, #4F49F1, #A260F5)",d="linear-gradient(90deg, ".concat(i,", ").concat("#CBFE00",")"),a="linear-gradient(90deg, ".concat(o,", #C86DD7)"),u="linear-gradient(90deg, ".concat("#95ECE2",", ").concat(c,")"),s="linear-gradient(90deg, ".concat("#9B6CA7",", ").concat(i,")"),f="linear-gradient(90deg, ".concat("#C72400",", ").concat(i,")"),h="linear-gradient(100.38deg, ".concat(o," 41.11%, #FF9559 86.99%)"),p="linear-gradient(100.38deg, #37A46F 41.11%, #67B2F8 86.99%)",g=("linear-gradient(100.38deg, ".concat("#6B50D7"," 41.11%, #677FFF 86.99%)"),"linear-gradient(100.38deg, ".concat(c," 41.11%, #B880FF 86.99%)")),m="linear-gradient(90deg, ".concat(r.t4," 20.13%, #2AB2FE)"),v="linear-gradient(90deg, ".concat(r.Ck," 0%, ").concat(r.t4," 53.13%, ").concat(r.X_," 100%)")},96409:function(n,e,t){function r(n,e){var t;return!(null===n||void 0===n||null===(t=n.features)||void 0===t||!t[e])}t.d(e,{v:function(){return r}})},98464:function(n,e,t){var r=t(82684);e.Z=function(n){var e=(0,r.useRef)();return(0,r.useEffect)((function(){e.current=n}),[n]),e.current}}}]);