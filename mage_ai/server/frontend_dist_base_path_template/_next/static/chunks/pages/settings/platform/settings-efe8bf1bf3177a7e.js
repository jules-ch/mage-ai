(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3112],{88543:function(e,n,t){"use strict";t.d(n,{S:function(){return Z},Z:function(){return P}});var r=t(82684),i=t(15338),o=t(97618),c=t(55485),d=t(85854),l=t(65956),a=t(82394),s=t(44085),u=t(38276),f=t(30160),h=t(17488),p=t(69650),g=t(72473),j=t(8193),x=t(70515),m=t(28598);function v(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?v(Object(t),!0).forEach((function(n){(0,a.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var Z=function(e){var n,t=e.children,r=e.description,i=e.invalid,d=e.large,l=void 0===d||d,a=e.selectInput,v=e.textInput,Z=e.title,P=e.toggleSwitch,y=e.warning;return(0,m.jsx)(u.Z,{p:x.cd,children:(0,m.jsxs)(c.ZP,{alignItems:"center",children:[(0,m.jsxs)(c.ZP,{flexDirection:"column",children:[(0,m.jsxs)(f.ZP,{danger:i,default:!0,large:l,warning:y,children:[Z," ",i&&(0,m.jsx)(f.ZP,{danger:!0,inline:!0,large:l,children:"is required"})]}),r&&"string"===typeof r&&(0,m.jsx)(f.ZP,{muted:!0,small:!0,children:r}),r&&"string"!==typeof r&&r]}),(0,m.jsx)(u.Z,{mr:x.cd}),(0,m.jsxs)(o.Z,{flex:1,justifyContent:"flex-end",children:[t,v&&(0,m.jsx)(h.Z,b({afterIcon:(0,m.jsx)(g.I8,{}),afterIconClick:function(e,n){var t;null===n||void 0===n||null===(t=n.current)||void 0===t||t.focus()},afterIconSize:j.Z,alignRight:!0,autoComplete:"off",large:l,noBackground:!0,noBorder:!0,fullWidth:!0,paddingHorizontal:0,paddingVertical:0,setContentOnMount:!0},v)),a&&(0,m.jsx)(s.Z,b(b({},a),{},{afterIcon:(0,m.jsx)(g._M,{}),afterIconSize:j.Z,alignRight:!0,autoComplete:"off",large:l,noBackground:!0,noBorder:!0,paddingHorizontal:0,paddingVertical:0,setContentOnMount:!0,children:null===a||void 0===a||null===(n=a.options)||void 0===n?void 0:n.map((function(e){var n=e.label,t=e.value;return(0,m.jsx)("option",{value:t,children:n||t},t)}))})),P&&(0,m.jsx)(p.Z,{checked:!(null===P||void 0===P||!P.checked),compact:!0,onCheck:null===P||void 0===P?void 0:P.onCheck})]})]})})},P=function(e){var n=e.children,t=e.description,a=e.headerChildren,s=e.title;return(0,m.jsxs)(l.Z,{noPadding:!0,children:[(0,m.jsx)(u.Z,{p:x.cd,children:(0,m.jsxs)(c.ZP,{alignItems:"center",children:[(0,m.jsxs)(o.Z,{flex:1,flexDirection:"column",children:[(0,m.jsx)(d.Z,{level:4,children:s}),t&&"string"===typeof t&&(0,m.jsx)(u.Z,{mt:1,children:(0,m.jsx)(f.ZP,{muted:!0,children:t})}),t&&"string"!==typeof t&&t]}),a]})}),r.Children.map(n,(function(e,n){return(0,m.jsxs)("div",{children:[(0,m.jsx)(i.Z,{light:!0}),e]},"".concat(s,"-").concat(n))}))]})}},8193:function(e,n,t){"use strict";t.d(n,{N:function(){return l},Z:function(){return d}});var r=t(38626),i=t(44897),o=t(42631),c=t(70515),d=2*c.iI,l=r.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-1ck7mzt-0"})(["border-radius:","px;padding:","px;",""],o.n_,c.cd*c.iI,(function(e){return"\n    background-color: ".concat((e.theme.background||i.Z.background).codeArea,";\n  ")}))},65956:function(e,n,t){"use strict";var r=t(38626),i=t(55485),o=t(38276),c=t(30160),d=t(44897),l=t(42631),a=t(47041),s=t(70515),u=t(28598),f=(0,r.css)(["padding:","px;padding-bottom:","px;padding-top:","px;"],2*s.iI,1.5*s.iI,1.5*s.iI),h=r.default.div.withConfig({displayName:"Panel__PanelStyle",componentId:"sc-1ct8cgl-0"})(["border-radius:","px;overflow:hidden;"," "," "," "," "," "," "," "," "," "," "," ",""],l.n_,(function(e){return e.fullWidth&&"\n    width: 100%;\n  "}),(function(e){return!e.borderless&&"\n    border: 1px solid ".concat((e.theme.interactive||d.Z.interactive).defaultBorder,";\n  ")}),(function(e){return e.success&&"\n    background-color: ".concat((e.theme.background||d.Z.background).successLight,";\n  ")}),(function(e){return e.success&&!e.borderless&&"\n    border: 1px solid ".concat((e.theme.background||d.Z.background).success,";\n  ")}),(function(e){return!e.dark&&!e.success&&"\n    background-color: ".concat((e.theme.background||d.Z.background).panel,";\n  ")}),(function(e){return e.dark&&"\n    background-color: ".concat((e.theme.background||d.Z.background).content,";\n  ")}),(function(e){return!e.fullHeight&&"\n    height: fit-content;\n  "}),(function(e){return e.maxHeight&&"\n    max-height: ".concat(e.maxHeight,";\n  ")}),(function(e){return e.maxWidth&&"\n    max-width: ".concat(e.maxWidth,"px;\n  ")}),(function(e){return e.minWidth&&"\n    min-width: ".concat(e.minWidth,"px;\n\n    @media (max-width: ").concat(e.minWidth,"px) {\n      min-width: 0;\n    }\n  ")}),(function(e){return e.borderless&&"\n    border: none;\n  "}),(function(e){return e.overflowVisible&&"\n    overflow: visible;\n  "})),p=r.default.div.withConfig({displayName:"Panel__HeaderStyle",componentId:"sc-1ct8cgl-1"})(["border-top-left-radius:","px;border-top-right-radius:","px;"," "," "," ",""],l.n_,l.n_,(function(e){return"\n    background-color: ".concat((e.theme.background||d.Z.background).chartBlock,";\n    border-bottom: 1px solid ").concat((e.theme.interactive||d.Z.interactive).defaultBorder,";\n  ")}),(function(e){return e.height&&"\n    height: ".concat(e.height,"px;\n  ")}),f,(function(e){return e.headerPaddingVertical&&"\n    padding-bottom: ".concat(e.headerPaddingVertical,"px;\n    padding-top: ").concat(e.headerPaddingVertical,"px;\n  ")})),g=r.default.div.withConfig({displayName:"Panel__ContentStyle",componentId:"sc-1ct8cgl-2"})(["overflow-y:auto;padding:","px;height:100%;"," "," "," "," ",""],1.75*s.iI,a.w5,(function(e){return e.height&&"\n    height: ".concat(e.height,"px;\n  ")}),(function(e){return e.maxHeight&&"\n    max-height: calc(".concat(e.maxHeight," - ").concat(15*s.iI,"px);\n  ")}),(function(e){return e.noPadding&&"\n    padding: 0;\n  "}),(function(e){return e.overflowVisible&&"\n    overflow: visible;\n  "})),j=r.default.div.withConfig({displayName:"Panel__FooterStyle",componentId:"sc-1ct8cgl-3"})(["border-style:",";border-top-width:","px;padding:","px;"],l.M8,l.YF,1.75*s.iI);n.Z=function(e){var n=e.borderless,t=e.children,r=e.containerRef,d=e.contentContainerRef,l=e.dark,a=e.footer,s=e.fullHeight,f=void 0===s||s,x=e.fullWidth,m=void 0===x||x,v=e.header,b=e.headerHeight,Z=e.headerIcon,P=e.headerPaddingVertical,y=e.headerTitle,w=e.maxHeight,k=e.maxWidth,O=e.minWidth,I=e.noPadding,C=e.overflowVisible,S=e.subtitle,_=e.success;return(0,u.jsxs)(h,{borderless:n,dark:l,fullHeight:f,fullWidth:m,maxHeight:w,maxWidth:k,minWidth:O,overflowVisible:C,ref:r,success:_,children:[(v||y)&&(0,u.jsxs)(p,{headerPaddingVertical:P,height:b,children:[v&&v,y&&(0,u.jsx)(i.ZP,{alignItems:"center",justifyContent:"space-between",children:(0,u.jsxs)(i.ZP,{alignItems:"center",children:[Z&&Z,(0,u.jsx)(o.Z,{ml:Z?1:0,children:(0,u.jsx)(c.ZP,{bold:!0,default:!0,children:y})})]})})]}),(0,u.jsxs)(g,{maxHeight:w,noPadding:I,overflowVisible:C,ref:d,children:[S&&"string"===typeof S&&(0,u.jsx)(o.Z,{mb:2,children:(0,u.jsx)(c.ZP,{default:!0,children:S})}),S&&"string"!==typeof S&&S,t]}),a&&(0,u.jsx)(j,{children:a})]})}},80754:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return D}});var r=t(77837),i=t(38860),o=t.n(i),c=t(93808),d=t(82394),l=t(75582),a=t(82684),s=t(69864),u=t(21764),f=t(32013),h=t(98777),p=t(71180),g=t(15338),j=t(55485),x=t(88543),m=t(38276),v=t(30160),b=t(35686),Z=t(77417),P=t(72473),y=t(70515),w=t(81728),k=t(42122),O=t(72619),I=t(23780),C=t(28598);function S(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function _(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?S(Object(t),!0).forEach((function(n){(0,d.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):S(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var H=function(){var e,n=(0,I.VI)(null,{},[],{uuid:"Platform/Settings"}),t=((0,l.Z)(n,1)[0],(0,Z.Z)()),r=t.project,i=t.rootProject,o=(0,a.useState)(null),c=o[0],S=o[1],H=(0,a.useState)(!1),N=(H[0],H[1]),W=(0,a.useState)(null),B=W[0],D=W[1],V=(0,a.useCallback)((function(e){S(e),N(!0)}),[S,N]);(0,a.useEffect)((function(){i&&!c&&S(null===i||void 0===i?void 0:i.platform_settings),r&&!B&&D(null===r||void 0===r?void 0:r.name)}),[i]);var E=(0,a.useMemo)((function(){var e=(0,w.RA)((0,w.Y6)());return(0,C.jsx)(p.ZP,{beforeIcon:(0,C.jsx)(P.mm,{}),compact:!0,small:!0,onClick:function(){return V((function(n){return _(_({},n),{},{projects:_(_({},null===c||void 0===c?void 0:c.projects),{},(0,d.Z)({},e,{}))})}))},secondary:!0,children:"Register project"})}),[c]),R=(0,s.Db)(b.ZP.projects.useUpdate(null===i||void 0===i?void 0:i.name),{onSuccess:function(e){return(0,O.wD)(e,{callback:function(e){var n=e.project;V((function(e){return _(_({},e),n)})),u.Am.success("Platform settings successfully saved.",{position:u.Am.POSITION.BOTTOM_RIGHT,toastId:"platform-settings-success-".concat(null===n||void 0===n?void 0:n.name)})}})}}),T=(0,l.Z)(R,2),M=T[0],F=T[1].isLoading;return(0,C.jsxs)(m.Z,{p:y.cd,children:[(0,C.jsx)(x.Z,{title:"Projects",headerChildren:(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(m.Z,{ml:y.cd}),E]}),children:(0,C.jsx)(f.Z,{noBorder:!0,noBoxShadow:!0,visibleMappingForced:Object.keys((null===c||void 0===c?void 0:c.projects)||{}).reduce((function(e,n,t){return _(_({},e),{},(0,d.Z)({},String(t),!0))}),{}),children:Object.entries((null===c||void 0===c?void 0:c.projects)||{}).map((function(e){var n=(0,l.Z)(e,2),t=n[0],r=n[1],i=r.path,o=r.uuid;return(0,C.jsxs)(h.Z,{noBorderRadius:!0,noPaddingContent:!0,title:(0,C.jsx)(j.ZP,{alignItems:"center",children:(0,C.jsx)(v.ZP,{large:!0,monospace:!0,children:t})}),titleXPadding:y.cd*y.iI,titleYPadding:y.cd*y.iI,children:[(0,C.jsx)(x.S,{title:"Name",description:"Unique name of project.",textInput:{fullWidth:!1,monospace:!0,placeholder:t,onChange:function(e){return V((function(n){return _(_({},n),{},{projects:_(_({},null===c||void 0===c?void 0:c.projects),{},(0,d.Z)({},t,_(_({},r),{},{uuid:e.target.value})))})}))},value:o}}),(0,C.jsx)(x.S,{title:"Path",description:(0,C.jsxs)(v.ZP,{muted:!0,small:!0,children:["Relative path to the project directory starting from the root project directory.",(0,C.jsx)("br",{}),"If blank, the default path will be the project name."]}),textInput:{fullWidth:!1,monospace:!0,placeholder:t,onChange:function(e){return V((function(n){return _(_({},n),{},{projects:_(_({},null===c||void 0===c?void 0:c.projects),{},(0,d.Z)({},t,_(_({},r),{},{path:e.target.value})))})}))},value:i||""}}),(0,C.jsx)(x.S,{title:"Currently selected project",description:"The currently selected project.",toggleSwitch:{checked:t===B,onCheck:function(){return D(t===B?null:t)}}}),(0,C.jsx)(g.Z,{light:!0}),(0,C.jsx)(x.S,{children:(0,C.jsx)(p.ZP,{compact:!0,noBorder:!0,onClick:function(){V((function(e){return _(_({},e),{},{projects:(0,k.gR)(null===c||void 0===c?void 0:c.projects,[t])})}))},small:!0,children:"Deregister project"})})]},t)}))})}),(0,C.jsx)(m.Z,{mt:y.HN}),(0,C.jsx)(x.Z,{title:"Features",children:(0,C.jsx)(x.S,{title:"Override all project features",description:(0,C.jsxs)(v.ZP,{muted:!0,small:!0,children:["If this setting is toggled, the feature flags that are set from the root project",(0,C.jsx)("br",{}),"will override the feature flags of all sub-projects."]}),toggleSwitch:{checked:null===c||void 0===c||null===(e=c.features)||void 0===e?void 0:e.override,onCheck:function(){return V((function(e){var n;return _(_({},e),{},{features:_(_({},null===e||void 0===e?void 0:e.features),{},{override:!(null!==c&&void 0!==c&&null!==(n=c.features)&&void 0!==n&&n.override)})})}))}}})}),(0,C.jsx)(m.Z,{my:y.HN,children:(0,C.jsxs)(j.ZP,{alignItems:"center",justifyContent:"space-between",children:[(0,C.jsx)("div",{}),(0,C.jsx)(p.ZP,{beforeIcon:(0,C.jsx)(P.vc,{}),loading:F,onClick:function(){return M({project:{activate_project:B,platform_settings:c,root_project:!0}})},primary:!0,children:"Save settings"})]})})]})},N=t(28274),W=t(24755);function B(){return(0,C.jsx)(N.Z,{uuidItemSelected:W.B2.SETTINGS,uuidWorkspaceSelected:W.Pl.PROJECT_PLATFORM,children:(0,C.jsx)(H,{})})}B.getInitialProps=(0,r.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)})));var D=(0,c.Z)(B)},39863:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/settings/platform/settings",function(){return t(80754)}])}},function(e){e.O(0,[2678,1154,844,874,1557,8264,7858,8432,9774,2888,179],(function(){return n=39863,e(e.s=n);var n}));var n=e.O();_N_E=n}]);