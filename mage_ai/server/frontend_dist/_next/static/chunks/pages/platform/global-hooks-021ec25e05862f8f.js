(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4543],{44374:function(e,o,n){"use strict";n.d(o,{Z:function(){return T}});var t=n(82684),i=n(71180),l=n(94629),r=n(8569),u=n(82394),c=n(12691),a=n.n(c),d=n(38626),s=n(34376),p=n(55485),v=n(48670),f=n(75499),h=n(30160),b=n(35686),m=n(72473),j=n(8193),k={default:!0,monospace:!0},P=n(81728),_=n(3917),g=n(55283),y=n(86735),w=n(70320),x=n(28598);function Z(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.push.apply(n,t)}return n}function O(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?Z(Object(n),!0).forEach((function(o){(0,u.Z)(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))}))}return e}var E=function(e){var o=e.rootProject,n=(0,w.qB)(),i=(0,t.useContext)(d.ThemeContext),l=(0,s.useRouter)(),r=(0,t.useState)(null),u=r[0],c=(r[1],b.ZP.global_hooks.list(O({_format:"with_pipeline_details",include_snapshot_validation:1},o?{root_project:o}:{})).data),Z=(0,t.useMemo)((function(){return(null===c||void 0===c?void 0:c.global_hooks)||[]}),[c]);return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(f.Z,{columnFlex:[null,null,null,null,1,null,null],columns:[{uuid:"UUID"},{uuid:"Resource"},{uuid:"Operation"},{uuid:"Pipeline"},{uuid:"Outputs"},{center:!0,uuid:"Valid"},{rightAligned:!0,uuid:"Snapshotted at"}],onClickRow:function(e,n){var t=null===Z||void 0===Z?void 0:Z[e],i=t.operation_type,r=t.resource_type,u=t.uuid;l.push("/".concat(o?"platform/":"","global-hooks/").concat(u,"?operation_type=").concat(i,"&resource_type=").concat(r))},getObjectAtRowIndex:function(e){return null===Z||void 0===Z?void 0:Z[e]},rows:null===Z||void 0===Z?void 0:Z.map((function(e){var o,l=e.metadata,r=e.operation_type,u=e.outputs,c=e.pipeline,d=e.pipeline_details,s=e.resource_type,f=e.uuid,b=null===c||void 0===c?void 0:c.uuid,w=b?(0,x.jsx)(a(),{as:"/pipelines/".concat(b,"/edit"),href:"/pipelines/[pipeline]/edit",passHref:!0,children:(0,x.jsx)(v.Z,O(O({},k),{},{openNewWindow:!0,children:b}))},"pipeline"):(0,t.createElement)(h.ZP,O(O({},k),{},{key:"pipeline",muted:!0}),"-"),Z=[];if((null===u||void 0===u?void 0:u.length)>=1&&(null===d||void 0===d||null===(o=d.blocks)||void 0===o?void 0:o.length)>=1){var E=(0,y.HK)((null===d||void 0===d?void 0:d.blocks)||[],(function(e){return e.uuid}));null===u||void 0===u||u.forEach((function(e,o){var n;if(null!==e&&void 0!==e&&null!==(n=e.block)&&void 0!==n&&n.uuid){var l,r=null===E||void 0===E?void 0:E[null===e||void 0===e||null===(l=e.block)||void 0===l?void 0:l.uuid];r&&(o>=1&&Z.push((0,t.createElement)(h.ZP,O(O({},k),{},{inline:!0,key:"".concat(null===r||void 0===r?void 0:r.uuid,"-").concat(o,"-comma"),muted:!0}),",\xa0")),Z.push((0,x.jsx)(a(),{as:"/pipelines/".concat(b,"/edit?block_uuid=").concat(null===r||void 0===r?void 0:r.uuid),href:"/pipelines/[pipeline]/edit",passHref:!0,children:(0,x.jsx)(v.Z,O(O({},k),{},{inline:!0,openNewWindow:!0,sameColorAsText:!0,children:(0,x.jsx)(h.ZP,O(O({},k),{},{color:(0,g.qn)(null===r||void 0===r?void 0:r.type,{blockColor:null===r||void 0===r?void 0:r.color,theme:i}).accent,inline:!0,children:null===r||void 0===r?void 0:r.uuid}))}))},"".concat(null===r||void 0===r?void 0:r.uuid,"-").concat(o,"-link"))))}}))}return[(0,t.createElement)(h.ZP,O(O({},k),{},{key:"uuid"}),f),(0,t.createElement)(h.ZP,O(O({},k),{},{key:"resourceType",monospace:!1}),s?(0,P.j3)(s):"-"),(0,t.createElement)(h.ZP,O(O({},k),{},{key:"operationType",monospace:!1}),r?(0,P.vg)(r):"-"),w,(0,x.jsxs)("div",{children:[(null===Z||void 0===Z?void 0:Z.length)>=1&&Z,!(null!==Z&&void 0!==Z&&Z.length)&&(0,x.jsx)(h.ZP,O(O({},k),{},{muted:!0,children:"-"}))]},"outputs"),(0,x.jsx)(p.ZP,{justifyContent:"center",children:null!==l&&void 0!==l&&l.snapshot_valid?(0,x.jsx)(m.Jr,{size:j.Z,success:!0}):(0,x.jsx)(m.uy,{danger:!0,size:j.Z})},"valid"),(0,t.createElement)(h.ZP,O(O({},k),{},{key:"snapshottedAt",rightAligned:!0}),null!==l&&void 0!==l&&l.snapshotted_at?(0,_.XG)(null===l||void 0===l?void 0:l.snapshotted_at,n):"-")]})),selectedRowIndexInternal:u,uuid:"GlobalHooks/Table"})})},C=n(70515),N=n(69419);var T=function(e){var o=e.rootProject,n=(0,t.useState)(!1),u=n[0],c=n[1],a=(0,N.iV)();(0,t.useEffect)((function(){var e=a.new;c(!!e)}),[a]);var d=o?"Platform global hooks":"Global hooks";return(0,x.jsxs)(l.Z,{addProjectBreadcrumbToCustomBreadcrumbs:u,breadcrumbs:u?[{label:function(){return d},linkProps:{href:"/".concat(o?"platform/":"","global-hooks")}},{bold:!0,label:function(){return"New"}}]:null,subheaderChildren:!u&&(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(i.ZP,{beforeIcon:(0,x.jsx)(m.mm,{size:2.5*C.iI}),inline:!0,linkProps:{as:"/".concat(o?"platform/":"","global-hooks?new=1"),href:"/".concat(o?"platform/":"","global-hooks")},noHoverUnderline:!0,primary:!0,sameColorAsText:!0,children:"Add new global hook"})}),title:d,uuid:"GlobalHooks/index",children:[u&&(0,x.jsx)(r.Z,{isNew:u,rootProject:o}),!u&&(0,x.jsx)(E,{rootProject:o})]})}},46751:function(e,o,n){"use strict";n.r(o);var t=n(77837),i=n(38860),l=n.n(i),r=n(44374),u=n(93808),c=n(28598);function a(){return(0,c.jsx)(r.Z,{rootProject:!0})}a.getInitialProps=(0,t.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)}))),o.default=(0,u.Z)(a)},52248:function(e,o,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/platform/global-hooks",function(){return n(46751)}])}},function(e){e.O(0,[2678,1154,844,874,1557,8264,7858,5499,5283,3437,9774,2888,179],(function(){return o=52248,e(e.s=o);var o}));var o=e.O();_N_E=o}]);