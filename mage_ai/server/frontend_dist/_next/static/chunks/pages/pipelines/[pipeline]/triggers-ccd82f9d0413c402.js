(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4249],{48381:function(e,n,t){"use strict";var r=t(82684),i=t(31882),o=t(55485),u=t(30160),l=t(86735),c=t(28598);n.Z=function(e){var n=e.onClickTag,t=e.tags,a=void 0===t?[]:t,s=(0,r.useMemo)((function(){return(null===a||void 0===a?void 0:a.length)||0}),[a]),d=(0,r.useMemo)((function(){return(0,l.YC)(a||[],"uuid")}),[a]);return(0,c.jsx)(o.ZP,{alignItems:"center",flexWrap:"wrap",children:null===d||void 0===d?void 0:d.reduce((function(e,t){return e.push((0,c.jsx)("div",{style:{marginBottom:2,marginRight:s>=2?4:0,marginTop:2},children:(0,c.jsx)(i.Z,{onClick:n?function(){return n(t)}:null,small:!0,children:(0,c.jsx)(u.ZP,{children:t.uuid})})},"tag-".concat(t.uuid))),e}),[])})}},31743:function(e,n,t){"use strict";var r=t(82394),i=t(75582),o=t(12691),u=t.n(o),l=t(82684),c=t(69864),a=t(34376),s=t(71180),d=t(50724),p=t(55485),f=t(48670),g=t(30229),h=t(89515),v=t(38276),m=t(75499),x=t(48381),b=t(30160),j=t(69650),y=t(12468),O=t(35686),Z=t(72473),_=t(81655),w=t(72191),P=t(41143),I=t(70515),C=t(31608),k=t(16488),E=t(3917),S=t(50178),T=t(72619),N=t(3314),D=t(70320),A=t(28598);function R(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function L(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?R(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):R(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var M=1.5*I.iI;n.Z=function(e){var n=e.disableActions,t=e.fetchPipelineSchedules,r=e.highlightRowOnHover,o=e.includeCreatedAtColumn,I=e.includePipelineColumn,R=e.pipeline,B=e.pipelineSchedules,V=e.pipelineTriggersByName,U=e.selectedSchedule,F=e.setErrors,H=e.setSelectedSchedule,Y=e.stickyHeader,G=null===R||void 0===R?void 0:R.uuid,z=(0,a.useRouter)(),q=(0,l.useRef)({}),X=(0,l.useState)(null),W=X[0],J=X[1],K=(0,l.useState)(0),Q=K[0],$=K[1],ee=(0,l.useState)(0),ne=ee[0],te=ee[1],re=(0,D.q)(),ie=re?_.O$:{},oe=(0,c.Db)((function(e){return O.ZP.pipeline_schedules.useUpdate(e.id)({pipeline_schedule:e})}),{onSuccess:function(e){return(0,T.wD)(e,{callback:function(){null===t||void 0===t||t()},onErrorCallback:function(e,n){return F({errors:n,response:e})}})}}),ue=(0,i.Z)(oe,1)[0],le=(0,c.Db)((function(e){return O.ZP.pipeline_schedules.useDelete(e)()}),{onSuccess:function(e){return(0,T.wD)(e,{callback:function(){null===t||void 0===t||t(),G?z.push("/pipelines/[pipeline]/triggers","/pipelines/".concat(G,"/triggers")):null===t||void 0===t||t()},onErrorCallback:function(e,n){return F({errors:n,response:e})}})}}),ce=(0,i.Z)(le,1)[0],ae=[],se=[];return n||(ae.push.apply(ae,[null,null]),se.push.apply(se,[{uuid:"Active"},{uuid:"Type"}])),ae.push.apply(ae,[1,2]),se.push.apply(se,[{uuid:"Name"},{uuid:"Description"}]),n||(ae.push.apply(ae,[null]),se.push({uuid:"Frequency"})),ae.push.apply(ae,[1,1,null]),se.push.apply(se,[L(L({},ie),{},{uuid:"Next run date"}),{uuid:"Latest status"},{uuid:"Runs"}]),n||(ae.push.apply(ae,[1]),se.push({uuid:"Tags"})),ae.push.apply(ae,[null]),se.push({uuid:"Logs"}),n||(0,S.Ct)()||(ae.push.apply(ae,[null]),se.push({label:function(){return""},uuid:"edit/delete"})),!n&&I&&(se.splice(2,0,{uuid:"Pipeline"}),ae.splice(2,0,1)),!n&&o&&(se.splice(5,0,L(L({},ie),{},{uuid:"Created at"})),ae.splice(5,0,null)),(0,A.jsx)(C.cl,{overflowVisible:!0,children:0===B.length?(0,A.jsx)(v.Z,{px:3,py:1,children:(0,A.jsx)(b.ZP,{bold:!0,default:!0,monospace:!0,muted:!0,children:"No triggers available"})}):(0,A.jsx)(m.Z,{columnFlex:ae,columns:se,highlightRowOnHover:r,isSelectedRow:function(e){return B[e].id===(null===U||void 0===U?void 0:U.id)},onClickRow:H?function(e){return null===H||void 0===H?void 0:H(B[e])}:null,rowVerticalPadding:6,rows:B.map((function(e,t){var r=e.id,i=e.created_at,c=e.description,a=e.next_pipeline_run_date,m=e.pipeline_runs_count,O=e.pipeline_uuid,C=e.last_pipeline_run_status,T=e.name,D=e.schedule_interval,R=e.status,L=e.tags,B=g.fq.ACTIVE===R,U=(0,k._U)(D),F=G||O;q.current[r]=(0,l.createRef)();var H,Y=null!==V&&void 0!==V&&V[T]?(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(v.Z,{mr:1}),(0,A.jsx)(y.Z,{block:!0,label:"This trigger is saved in code.",size:M,widthFitContent:!0,children:(0,A.jsx)(Z.EK,{default:!0,size:M})})]}):null,X=[];n?X.push.apply(X,[(0,A.jsxs)(p.ZP,{alignItems:"center",children:[(0,A.jsx)(b.ZP,{bold:!0,children:T}),Y]},"trigger_name_".concat(t))]):X.push.apply(X,[(0,A.jsx)(y.Z,{block:!0,label:R,size:20,widthFitContent:!0,children:(0,A.jsx)(j.Z,{checked:B,compact:!0,onCheck:function(n){(0,N.j)(n),ue({id:e.id,status:B?g.fq.INACTIVE:g.fq.ACTIVE})},purpleBackground:!0})},"trigger_enabled_".concat(t)),(0,A.jsx)(b.ZP,{default:!0,monospace:!0,children:null===(H=g.Z4[e.schedule_type])||void 0===H?void 0:H.call(g.Z4)},"trigger_type_".concat(t)),(0,A.jsxs)(p.ZP,{alignItems:"center",children:[(0,A.jsx)(u(),{as:"/pipelines/".concat(F,"/triggers/").concat(r),href:"/pipelines/[pipeline]/triggers/[...slug]",passHref:!0,children:(0,A.jsx)(f.Z,{bold:!0,onClick:function(e){(0,N.j)(e),z.push("/pipelines/[pipeline]/triggers/[...slug]","/pipelines/".concat(F,"/triggers/").concat(r))},sky:!0,children:T})}),Y]},"trigger_name_".concat(t))]);return X.push.apply(X,[(0,A.jsx)(b.ZP,{default:!0,children:c},"trigger_description_".concat(t))]),n||X.push((0,A.jsx)(b.ZP,{default:!0,monospace:!0,children:re&&U?(0,k.lO)(D):D},"trigger_frequency_".concat(t))),X.push.apply(X,[(0,A.jsx)(b.ZP,{monospace:!0,small:!0,title:a?"UTC: ".concat(a.slice(0,19)):null,children:a?re?(0,E.XG)(a,re):(0,E.d$)(a,{includeSeconds:!0,utcFormat:!0}):(0,A.jsx)(A.Fragment,{children:"\u2014"})},"trigger_next_run_date_".concat(t)),(0,A.jsx)(b.ZP,{danger:P.V.FAILED===C,default:!C,monospace:!0,success:P.V.COMPLETED===C,warning:P.V.CANCELLED===C,children:C||"N/A"},"latest_run_status_".concat(t)),(0,A.jsx)(b.ZP,{default:!0,monospace:!0,children:m},"trigger_run_count_".concat(t))]),n||X.push((0,A.jsx)("div",{children:(0,A.jsx)(x.Z,{tags:null===L||void 0===L?void 0:L.map((function(e){return{uuid:e}}))})},"pipeline_tags_".concat(t))),X.push((0,A.jsx)(s.ZP,{default:!0,iconOnly:!0,noBackground:!0,onClick:function(){return z.push("/pipelines/".concat(F,"/logs?pipeline_schedule_id[]=").concat(r))},children:(0,A.jsx)(Z.UL,{default:!0,size:w.bL})},"logs_button_".concat(t))),n||(0,S.Ct)()||X.push((0,A.jsxs)(p.ZP,{children:[(0,A.jsx)(s.ZP,{default:!0,iconOnly:!0,noBackground:!0,onClick:function(){return z.push("/pipelines/".concat(F,"/triggers/").concat(r,"/edit"))},title:"Edit",children:(0,A.jsx)(Z.I8,{default:!0,size:w.bL})}),(0,A.jsx)(v.Z,{mr:1}),(0,A.jsx)(s.ZP,{default:!0,iconOnly:!0,noBackground:!0,onClick:function(){var e,n,t,i;J(r),$((null===(e=q.current[r])||void 0===e||null===(n=e.current)||void 0===n?void 0:n.offsetTop)||0),te((null===(t=q.current[r])||void 0===t||null===(i=t.current)||void 0===i?void 0:i.offsetLeft)||0)},ref:q.current[r],title:"Delete",children:(0,A.jsx)(Z.rF,{default:!0,size:w.bL})}),(0,A.jsx)(d.Z,{onClickOutside:function(){return J(null)},open:W===r,children:(0,A.jsx)(h.Z,{danger:!0,left:(ne||0)-_.nH,onCancel:function(){return J(null)},onClick:function(){J(null),ce(r)},title:"Are you sure you want to delete the trigger ".concat(T,"?"),top:(Q||0)-(t<=1?_.oz:_.OK),width:_.Xx})})]},"edit_delete_buttons_".concat(t))),!n&&I&&X.splice(2,0,(0,A.jsx)(b.ZP,{default:!0,monospace:!0,children:F},"pipeline_name_".concat(t))),!n&&o&&X.splice(5,0,(0,A.jsx)(b.ZP,{default:!0,monospace:!0,small:!0,title:i?(0,E._6)(i):null,children:(0,E.XG)(null===i||void 0===i?void 0:i.slice(0,19),re)},"created_at_".concat(t))),X})),stickyHeader:Y,uuid:"pipeline-triggers"})})}},16488:function(e,n,t){"use strict";t.d(n,{IJ:function(){return h},M8:function(){return w},Vx:function(){return j},XM:function(){return _},_U:function(){return g},eI:function(){return b},gU:function(){return O},lO:function(){return E},ri:function(){return m},tL:function(){return y},vJ:function(){return Z},xH:function(){return x}});var r,i=t(82394),o=t(92083),u=t.n(o),l=t(3917),c=t(4383),a=t(30229),s=t(42122),d=t(86735);function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var g=function(e){return!!e&&!Object.values(a.U5).includes(e)};function h(e){return null===e||void 0===e?void 0:e.reduce((function(e,n){var t=n.block_uuid,r=n.completed_at,o=n.started_at,l=n.status,c=null;o&&r&&(c=u()(r).valueOf()-u()(o).valueOf());return f(f({},e),{},(0,i.Z)({},t,{runtime:c,status:l}))}),{})}var v,m=function(e){var n=[{description:function(){return"This pipeline will run continuously on an interval or just once."},label:function(){return"Schedule"},uuid:a.Xm.TIME},{description:function(){return"This pipeline will run when a specific event occurs."},label:function(){return"Event"},uuid:a.Xm.EVENT},{description:function(){return"Run this pipeline when you make an API call."},label:function(){return"API"},uuid:a.Xm.API}];return e?n.slice(0,1):n};function x(e){var n=(0,s.gR)(e,[a.gm.INTERVAL,a.gm.TYPE]),t=e[a.gm.INTERVAL];t&&(n["schedule_interval[]"]=encodeURIComponent(t));var r=e[a.gm.TYPE];return r&&(n["schedule_type[]"]=r),n}function b(e){if(!e)return null;var n=new Date(u()(e).valueOf()),t=Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds());return new Date(t)}function j(e){return"string"!==typeof e?e:b(e.split("+")[0]).toISOString().split(".")[0]}!function(e){e.DAY="day",e.HOUR="hour",e.MINUTE="minute",e.SECOND="second"}(v||(v={}));var y=(r={},(0,i.Z)(r,v.DAY,86400),(0,i.Z)(r,v.HOUR,3600),(0,i.Z)(r,v.MINUTE,60),(0,i.Z)(r,v.SECOND,1),r);function O(e){var n=v.SECOND,t=e;return e%86400===0?(t/=86400,n=v.DAY):e%3600===0?(t/=3600,n=v.HOUR):e%60===0&&(t/=60,n=v.MINUTE),{time:t,unit:n}}function Z(e,n){return e*y[n]}function _(e,n,t){var r="".concat(e.toISOString().split("T")[0]," ").concat(null===n||void 0===n?void 0:n.hour,":").concat(null===n||void 0===n?void 0:n.minute);if(null!==t&&void 0!==t&&t.includeSeconds&&(r=r.concat(":00")),null!==t&&void 0!==t&&t.localTimezone){var i=u()(e);i.set("hour",+(null===n||void 0===n?void 0:n.hour)||0),i.set("minute",+(null===n||void 0===n?void 0:n.minute)||0),i.set("second",0),r=i.format(l.lE),null!==t&&void 0!==t&&t.convertToUtc&&(r=(0,l.d$)(r,{includeSeconds:null===t||void 0===t?void 0:t.includeSeconds,utcFormat:!0}))}return r}function w(e){var n,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r="",i=!0;return i&&(t?r="".concat(window.origin,"/api/pipeline_schedules/").concat(null===e||void 0===e?void 0:e.id,"/api_trigger"):(r="".concat(window.origin,"/api/pipeline_schedules/").concat(null===e||void 0===e?void 0:e.id,"/pipeline_runs"),null!==e&&void 0!==e&&e.token&&(r="".concat(r,"/").concat(e.token)))),i&&(n=window.location.port)&&(r=r.replace(n,c.QT)),r}function P(e,n,t){return e.match(/[*,-/]/)?{additionalOffset:0,cronValue:e}:function(e,n,t){var r=t.indexOf(e),i=0;if(n<0)for(var o=0;o>n;o--)0===r?(r=t.length-1,i-=1):r-=1;else if(n>0)for(var u=0;u<n;u++)r===t.length-1?(r=0,i+=1):r+=1;return{additionalOffset:i,cronValue:String(t[r]||e)}}(+e,n,t)}var I=(0,d.m5)(60),C=(0,d.m5)(24),k=(0,l.Cs)();function E(e,n){if(!e)return e;var t=u()().local().format("Z"),r=t.split(":"),i="-"===t[0],o=3===r[0].length?Number(r[0].slice(1)):Number(r[0]),l=Number(r[1]);(i&&!n||!i&&n)&&(o=-o,l=-l);var c=e.split(" "),a=c[0],s=c[1],d=c[2],p=P(a,l,I),f=P(s,o+p.additionalOffset,C);if(c[0]=p.cronValue,c[1]=f.cronValue,0!==(null===f||void 0===f?void 0:f.additionalOffset)){var g=P(d,f.additionalOffset,k);c[2]=g.cronValue}return c.join(" ")}},44265:function(e,n,t){"use strict";t.d(n,{Az:function(){return a},BF:function(){return c},Do:function(){return d},IK:function(){return l},P0:function(){return i},VO:function(){return u},sZ:function(){return s}});var r,i,o=t(82394),u=t(41143).V,l=[u.FAILED,u.COMPLETED,u.RUNNING,u.CANCELLED,u.INITIAL],c=[u.INITIAL,u.RUNNING],a=[u.CANCELLED,u.COMPLETED,u.FAILED],s="__mage_variables",d=(r={},(0,o.Z)(r,u.CANCELLED,"Cancelled"),(0,o.Z)(r,u.COMPLETED,"Done"),(0,o.Z)(r,u.FAILED,"Failed"),(0,o.Z)(r,u.INITIAL,"Ready"),(0,o.Z)(r,u.RUNNING,"Running"),r);!function(e){e.PIPELINE_UUID="pipeline_uuid[]",e.STATUS="status[]",e.TAG="pipeline_tag[]"}(i||(i={}))},30229:function(e,n,t){"use strict";t.d(n,{TR:function(){return f},U5:function(){return c},Wb:function(){return p},Xm:function(){return o},Z4:function(){return a},fq:function(){return l},gm:function(){return s},kJ:function(){return d}});var r,i,o,u=t(82394);!function(e){e.API="api",e.EVENT="event",e.TIME="time"}(o||(o={}));var l,c,a=(r={},(0,u.Z)(r,o.API,(function(){return"API"})),(0,u.Z)(r,o.EVENT,(function(){return"event"})),(0,u.Z)(r,o.TIME,(function(){return"schedule"})),r);!function(e){e.ACTIVE="active",e.INACTIVE="inactive"}(l||(l={})),function(e){e.ONCE="@once",e.HOURLY="@hourly",e.DAILY="@daily",e.WEEKLY="@weekly",e.MONTHLY="@monthly",e.ALWAYS_ON="@always_on"}(c||(c={}));var s,d,p=[c.ONCE,c.HOURLY,c.DAILY,c.WEEKLY,c.MONTHLY];!function(e){e.INTERVAL="frequency[]",e.STATUS="status[]",e.TAG="tag[]",e.TYPE="type[]"}(s||(s={})),function(e){e.CREATED_AT="created_at",e.NAME="name",e.PIPELINE="pipeline_uuid",e.STATUS="status",e.TYPE="schedule_type"}(d||(d={}));var f=(i={},(0,u.Z)(i,d.CREATED_AT,"Created at"),(0,u.Z)(i,d.NAME,"Name"),(0,u.Z)(i,d.PIPELINE,"Pipeline"),(0,u.Z)(i,d.STATUS,"Active"),(0,u.Z)(i,d.TYPE,"Type"),i)},31882:function(e,n,t){"use strict";var r=t(38626),i=t(71180),o=t(55485),u=t(30160),l=t(44897),c=t(72473),a=t(70515),s=t(61896),d=t(28598),p=r.default.div.withConfig({displayName:"Chip__ChipStyle",componentId:"sc-1ok73g-0"})(["display:inline-block;"," "," "," "," "," ",""],(function(e){return!e.primary&&"\n    background-color: ".concat((e.theme.background||l.Z.background).tag,";\n  ")}),(function(e){return e.primary&&"\n    background-color: ".concat((e.theme.chart||l.Z.chart).primary,";\n  ")}),(function(e){return!e.small&&"\n    border-radius: ".concat((a.iI+s.Al)/2,"px;\n    height: ").concat(1.5*a.iI+s.Al,"px;\n    padding: ").concat(a.iI/1.5,"px ").concat(1.25*a.iI,"px;\n  ")}),(function(e){return e.small&&"\n    border-radius: ".concat((a.iI/2+s.Al)/2,"px;\n    height: ").concat(s.Al+a.iI/2+2,"px;\n    padding: ").concat(a.iI/4,"px ").concat(a.iI,"px;\n  ")}),(function(e){return e.xsmall&&"\n    border-radius: ".concat((a.iI/1+s.Al)/1,"px;\n    height: ").concat(20,"px;\n    padding: 4px 6px;\n  ")}),(function(e){return e.border&&"\n    border: 1px solid ".concat((e.theme.content||l.Z.content).muted,";\n  ")}));n.Z=function(e){var n=e.border,t=e.children,r=e.disabled,l=e.label,s=e.monospace,f=e.onClick,g=e.primary,h=e.small,v=e.xsmall;return(0,d.jsx)(p,{border:n,primary:g,small:h,xsmall:v,children:(0,d.jsx)(i.ZP,{basic:!0,disabled:r,noBackground:!0,noPadding:!0,onClick:f,transparent:!0,children:(0,d.jsxs)(o.ZP,{alignItems:"center",children:[t,l&&(0,d.jsx)(u.ZP,{monospace:s,small:h,xsmall:v,children:l}),!r&&f&&(0,d.jsx)("div",{style:{marginLeft:2}}),!r&&f&&(0,d.jsx)(c.x8,{default:g,muted:!g,size:h?a.iI:1.25*a.iI})]})})})}},46732:function(e,n,t){"use strict";var r=t(82394),i=t(26304),o=(t(82684),t(50724)),u=t(70374),l=t(28598),c=["children","items","open","onClickCallback","onClickOutside","parentRef","uuid","zIndex"];function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.Z=function(e){var n=e.children,t=e.items,r=e.open,a=e.onClickCallback,d=e.onClickOutside,p=e.parentRef,f=e.uuid,g=e.zIndex,h=(0,i.Z)(e,c),v=(0,l.jsxs)("div",{style:{position:"relative",zIndex:(d?3:2)+(g||0)},children:[(0,l.jsx)("div",{ref:p,children:n}),(0,l.jsx)(u.Z,s(s({},h),{},{items:t,onClickCallback:a,open:r,parentRef:p,uuid:f}))]});return d?(0,l.jsx)(o.Z,{onClickOutside:d,open:!0,children:v}):v}},35185:function(e,n,t){"use strict";var r=t(82394),i=t(91835),o=(t(82684),t(38626)),u=t(44897),l=t(42631),c=t(70515),a=t(28598);function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var p=o.default.div.withConfig({displayName:"ProgressBar__ProgressBarContainerStyle",componentId:"sc-10x9ojc-0"})(["border-radius:","px;height:","px;overflow:hidden;position:relative;width:100%;",""],l.BG,.75*c.iI,(function(e){return"\n    background-color: ".concat((e.theme.monotone||u.Z.monotone).grey200,";\n  ")})),f=o.default.div.withConfig({displayName:"ProgressBar__ProgressBarStyle",componentId:"sc-10x9ojc-1"})(["height:inherit;position:absolute;"," "," "," ",""],(function(e){return!e.danger&&"\n    background-color: ".concat((e.theme.progress||u.Z.progress).positive,";\n  ")}),(function(e){return e.progress&&"\n    width: ".concat(e.progress,"%;\n  ")}),(function(e){return e.danger&&"\n    background-color: ".concat((e.theme.progress||u.Z.progress).negative,";\n  ")}),(function(e){return e.animateProgress&&"\n    animation: animate-progress ".concat(e.animateProgress.duration,"ms linear forwards;\n\n    @keyframes animate-progress {\n      0% {\n        width: ").concat(e.animateProgress.start,"%;\n      }\n\n      100% {\n        width: ").concat(e.animateProgress.end,"%;\n      }\n    }\n  ")}));n.Z=function(e){var n=(0,i.Z)({},e);return(0,a.jsx)(p,d(d({},n),{},{children:(0,a.jsx)(f,d({},n))}))}},72191:function(e,n,t){"use strict";t.d(n,{_k:function(){return o},bL:function(){return i},l2:function(){return u}});var r=t(70515),i=(r.iI,2*r.iI),o=2.5*r.iI,u=3*r.iI},18213:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return Ce}});var r=t(77837),i=t(75582),o=t(82394),u=t(38860),l=t.n(u),c=t(12691),a=t.n(c),s=t(82684),d=t(69864),p=t(34376),f=t(35247),g=t(15338),h=t(93369),v=t(48670),m=t(55072),x=t(75457),b=t(30229),j=t(93808),y=t(82359),O=t(71180),Z=t(55485),_=t(85854),w=t(65956),P=t(38276),I=t(75499),C=t(30160),k=t(35576),E=t(17488),S=t(69650),T=t(44897),N=t(38626),D=t(42631),A=t(70515),R=N.default.div.withConfig({displayName:"indexstyle__ToggleStyle",componentId:"sc-f9kt7n-0"})(["padding:","px ","px;border-radius:","px;",""],1.5*A.iI,2*A.iI,D.n_,(function(e){return"\n    border: 1px solid ".concat((e.theme||T.Z).borders.light,";\n    background-color: ").concat((e.theme||T.Z).background.popup,";\n  ")})),L=t(81728),M=t(8916),B=t(28598);function V(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function U(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?V(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):V(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var F="".concat(A.iI,"px ").concat(3*A.iI,"px");var H=function(e){var n=e.initialPipelineSchedulePayload,t=e.onCancel,r=e.onSuccess,u=e.variables,l=(0,s.useState)(!1),c=l[0],a=l[1],d=(0,s.useState)({}),p=d[0],f=d[1],g=(0,s.useState)(u||{}),h=g[0],v=g[1],m=(0,s.useMemo)((function(){return U(U({},n),{},{name:(0,L.Y6)(),variables:c?(0,M.e7)(h):null})}),[n,c,h]),x=function(e,n){var t={borderless:!0,key:"variable_uuid_input_".concat(e),monospace:!0,onChange:function(n){n.preventDefault(),v((function(t){return U(U({},t),{},(0,o.Z)({},e,n.target.value))}))},paddingHorizontal:0,placeholder:"Variable value",value:n};return p[e]?(0,B.jsx)(k.Z,U(U({},t),{},{rows:1,value:n})):(0,B.jsx)(E.Z,U({},t))};return(0,s.useEffect)((function(){var e=Object.entries(h).reduce((function(e,n){var t=(0,i.Z)(n,2),r=t[0],u=t[1],l=(0,L.Pb)(u)&&"object"===typeof JSON.parse(u)&&!Array.isArray(JSON.parse(u))&&null!==JSON.parse(u);return U(U({},e),{},(0,o.Z)({},r,l))}),{});f(e)}),[]),(0,B.jsxs)(w.Z,{footer:(0,B.jsxs)(Z.ZP,{alignItems:"center",fullWidth:!0,justifyContent:"flex-end",children:[(0,B.jsx)(O.ZP,{onClick:function(){r({pipeline_schedule:m}),t()},padding:F,primaryAlternate:!0,children:"Run now"}),(0,B.jsx)(P.Z,{mr:1}),(0,B.jsx)(O.ZP,{borderColor:T.Z.background.page,onClick:t,padding:F,secondary:!0,children:"Cancel"})]}),header:(0,B.jsx)(_.Z,{level:5,children:"Run pipeline now"}),maxHeight:"90vh",minWidth:85*A.iI,subtitle:"Creates a new trigger and immediately runs the current pipeline once.",children:[(0,B.jsx)(R,{children:(0,B.jsxs)(Z.ZP,{alignItems:"center",children:[(0,B.jsx)(P.Z,{mr:2,children:(0,B.jsx)(S.Z,{checked:c,onCheck:a})}),(0,B.jsx)(C.ZP,{bold:!0,large:!0,children:"Overwrite runtime variables"})]})}),c&&h&&Object.entries(h).length>0&&(0,B.jsx)(P.Z,{mt:2,children:(0,B.jsx)(I.Z,{columnFlex:[null,1],columns:[{uuid:"Variable"},{uuid:"Value"}],rows:Object.entries(h).map((function(e){var n=(0,i.Z)(e,2),t=n[0],r=n[1];return[(0,B.jsx)(C.ZP,{default:!0,monospace:!0,children:t},"variable_".concat(t)),x(t,r)]}))})})]})},Y=t(97618),G=t(72473),z=t(47041),q=t(91437),X=N.default.div.withConfig({displayName:"indexstyle__TableStyle",componentId:"sc-pu8csx-0"})([""," overflow-y:auto;position:relative;width:100%;z-index:3;border-radius:","px;"," "," "," ",""],z.w5,D.n_,(function(e){return"\n    background-color: ".concat((e.theme.background||T.Z.background).page,";\n  ")}),(function(e){return e.height&&"\n    height: ".concat(e.height,"px;\n  ")}),(function(e){return e.flex&&"\n    flex: 1;\n  "}),(function(e){return(e.noBorder||e.noBorderRadius)&&"\n    border-radius: 0;\n  "})),W=N.default.div.withConfig({displayName:"indexstyle__ColumnHeaderRowStyle",componentId:"sc-pu8csx-1"})(["border-top-left-radius:","px;border-top-right-radius:","px;position:sticky;top:0;width:100%;z-index:2;"," "," ",""],D.n_,D.n_,(function(e){return"\n    background-color: ".concat((e.theme.background||T.Z.background).panel,";\n  ")}),(function(e){return!e.noBorder&&"\n    border: 1px solid ".concat((e.theme.interactive||T.Z.interactive).defaultBorder,";\n  ")}),(function(e){return(e.noBorder||e.noBorderRadius)&&"\n    border-radius: 0;\n  "})),J=N.default.div.withConfig({displayName:"indexstyle__ColumnHeaderCellStyle",componentId:"sc-pu8csx-2"})([""," ",""],(function(e){return!e.small&&"\n    padding: ".concat(1.5*A.iI,"px;\n  ")}),(function(e){return e.small&&"\n    padding: ".concat(1.5*A.iI,"px;\n  ")})),K=N.default.div.withConfig({displayName:"indexstyle__RowTitleStyle",componentId:"sc-pu8csx-3"})([""," "," ",""],(function(e){return"\n    background-color: ".concat((e.theme.background||T.Z.background).header,";\n    border: 1px solid ").concat((e.theme.interative||T.Z.interactive).defaultBorder,";\n  ")}),(function(e){return!e.small&&"\n    padding: ".concat(1.5*A.iI,"px;\n  ")}),(function(e){return e.small&&"\n    padding: ".concat(1.5*A.iI,"px;\n  ")})),Q=N.default.div.withConfig({displayName:"indexstyle__RowStyle",componentId:"sc-pu8csx-4"})([""," "," "," ",""],(0,q.eR)(),(function(e){return"\n    background-color: ".concat((e.theme.background||T.Z.background).page,";\n    border-top: none;\n    border-bottom: none;\n  ")}),(function(e){return!e.noBorder&&"\n    border-bottom: 1px solid ".concat((e.theme.interactive||T.Z.interactive).defaultBorder,";\n    border-left: 1px solid ").concat((e.theme.interactive||T.Z.interactive).defaultBorder,";\n    border-right: 1px solid ").concat((e.theme.interactive||T.Z.interactive).defaultBorder,";\n  ")}),(function(e){return e.finalRow&&!e.noBorderRadius&&"\n    border-bottom-left-radius: ".concat(D.n_,"px;\n    border-bottom-right-radius: ").concat(D.n_,"px;\n  ")})),$=N.default.div.withConfig({displayName:"indexstyle__TextStyle",componentId:"sc-pu8csx-5"})(["p{cursor:pointer;}"]),ee=N.default.div.withConfig({displayName:"indexstyle__RowCellStyle",componentId:"sc-pu8csx-6"})(["width:100%;z-index:0;"," "," "," "," ",""],(function(e){return!e.first&&"\n    border-left: 1px solid ".concat((e.theme.background||T.Z.background).page,";\n  ")}),(function(e){return!e.small&&"\n    padding: ".concat(1.5*A.iI,"px;\n  ")}),(function(e){return e.small&&"\n    padding: ".concat(1.5*A.iI,"px;\n  ")}),(function(e){return e.textColor&&"\n    & p {\n      color: ".concat(e.textColor,";\n    }\n  ")}),(function(e){return e.vanish&&"\n    border: none;\n    padding: 0 !important;\n    width: 0% !important;\n    height: 100% !important;\n    background-color: ".concat((e.theme.background||T.Z.background).page," !important;\n  ")})),ne=t(35185);var te=function(e){var n,t=e.cellIndex,r=e.danger,i=e.flex,o=e.render,u=e.rowGroupIndex,l=e.rowIndex,c=e.selected,a=e.small,d=e.showBackground,p=e.showProgress,f=e.textColor,g=e.value,h=e.vanish,m=(0,s.useState)(!1),x=m[0],b=m[1],j=Array.isArray(g);return n=o?o(g):"function"===typeof g?g({selected:c}):j?(0,B.jsxs)(Y.Z,{alignItems:"start",flexDirection:"row",justifyContent:"space-between",children:[(0,B.jsxs)(C.ZP,{small:a,textOverflow:!0,title:g[0],children:[x&&(0,B.jsx)(B.Fragment,{children:"".concat(g[0]," & ").concat(g.length-1," more")}),!x&&(0,B.jsx)(B.Fragment,{children:g.map((function(e){return(0,B.jsx)("div",{children:e},e)}))})]}),(0,B.jsxs)(v.Z,{onClick:function(){return b(!x)},children:[x&&(0,B.jsx)(G.K5,{muted:!0,size:2*A.iI}),!x&&(0,B.jsx)(G.ol,{muted:!0,size:2*A.iI})]})]}):p?(0,B.jsx)(Z.ZP,{alignItems:"center",fullHeight:!0,fullWidth:!0,children:(0,B.jsx)(ne.Z,{danger:g<80,progress:g})}):(0,B.jsx)(C.ZP,{bold:r,danger:r,small:a,textOverflow:!0,title:g,children:g}),(0,B.jsx)(Y.Z,{flex:i,textOverflow:!0,children:(0,B.jsx)(ee,{first:0===t,showBackground:d,small:a,textColor:f,vanish:h,children:!h&&(0,B.jsxs)(B.Fragment,{children:[n," "]})})},"cell-".concat(u,"-").concat(l,"-").concat(t,"-").concat(g))};var re=function(e){var n=e.columnFlexNumbers,t=e.columnHeaders,r=e.height,i=e.isTextSelectionRequired,o=e.noBorder,u=e.noBorderRadius,l=e.onClickRow,c=e.onHoverRow,a=e.renderRowCellByIndex,d=e.rowGroupData,p=void 0===d?[]:d,f=e.selectedRowIndexes,g=e.small,h=e.flex,m=e.warnings,x=void 0===m?[]:m,b=(0,s.useMemo)((function(){return p.length}),[p]);return(0,B.jsxs)(X,{flex:h,height:r,noBorder:o,noBorderRadius:u,noScrollbarTrackBackground:!0,children:[(0,B.jsx)(W,{noBorder:o,noBorderRadius:u,children:(0,B.jsx)(Z.ZP,{alignItems:"center",children:t.map((function(e,t){var r=e.Icon,i=e.label;return(0,B.jsx)(Y.Z,{flex:n[t],children:(0,B.jsx)(J,{first:0===t,small:g,children:(0,B.jsxs)(Z.ZP,{alignItems:"center",children:[r&&(0,B.jsx)(G.Jr,{}),r&&(0,B.jsx)(P.Z,{mr:1}),(0,B.jsx)(C.ZP,{bold:!0,children:i})]})})},i)}))})}),p&&p.map((function(e,t){var r,s=e.title,d=e.rowData,p=s||t,h=[];s&&(r=(0,B.jsx)(K,{small:g,children:(0,B.jsx)(C.ZP,{bold:!0,children:s})}));var m=null===d||void 0===d?void 0:d.length;return null===d||void 0===d||d.forEach((function(e,r){var s=e.columnTextColors,d=e.columnValues,j=e.danger,y=e.uuid,O=(null===f||void 0===f?void 0:f[0])===t&&(null===f||void 0===f?void 0:f[1])===r,_=[],w=x.find((function(e){return e.name===d[0]})),P=w&&(0,L.HD)(d[1])?(0,L.Tz)(d[1]):d[1],I=w&&w.compare(P,w.val);null===d||void 0===d||d.forEach((function(e,i,o){var u=null===a||void 0===a?void 0:a[i],l=s?s[i]:void 0;Array.isArray(e)?_.push((0,B.jsx)(te,{cellIndex:i,flex:n[i],render:u,rowGroupIndex:t,rowIndex:r,selected:O,showBackground:r%2===1,showProgress:e[0],small:g,textColor:l,value:e[1]},i)):"undefined"===typeof e?(_.pop(),i=o.length+1,_.push((0,B.jsx)(te,{cellIndex:i,danger:j,flex:n[i],render:u,rowGroupIndex:t,rowIndex:r,selected:O,showBackground:r%2===1,small:g,textColor:l,value:e,vanish:!0},i))):_.push((0,B.jsx)(te,{cellIndex:i,danger:I||j,flex:n[i],render:u,rowGroupIndex:t,rowIndex:r,selected:O,showBackground:r%2===1,small:g,textColor:l,value:e},i))}));var C=(0,B.jsx)(Z.ZP,{textOverflow:!0,children:_});h.push((0,B.jsxs)(Q,{finalRow:b-1===t&&m-1===r,hasHover:!!c,noBorder:o,noBorderRadius:u,onMouseEnter:function(){return null===c||void 0===c?void 0:c({rowGroupIndex:t,rowIndex:r,uuid:y})},selected:O,children:[l&&(i?(0,B.jsx)($,{onClick:function(){return l({rowGroupIndex:t,rowIndex:r,uuid:y})},role:"cell",children:C}):(0,B.jsx)(v.Z,{block:!0,noHoverUnderline:!0,noOutline:!0,onClick:function(){return l({rowGroupIndex:t,rowIndex:r,uuid:y})},preventDefault:!0,children:C})),!l&&C]},"row-group-".concat(p,"-row-").concat(r)))})),(0,B.jsxs)("div",{children:[r,h]},p)}))]})},ie=N.default.div.withConfig({displayName:"indexstyle__ContainerStyle",componentId:"sc-1xgfh62-0"})(["display:flex;flex-direction:column;height:","px;border-bottom:1px solid ",";"],(function(e){return e.height}),T.Z.borders.medium),oe=t(79633);var ue=function(e){var n=e.height,t=e.scheduleType,r=e.variables,o=e.variablesOverride,u=[];Object.entries(r).forEach((function(e){var n=(0,i.Z)(e,2),t=n[0],r=n[1],l=null===o||void 0===o?void 0:o[t];u.push({uuid:t,value:(0,M.FS)(l||r)})})),(0,M.JZ)(u,t);var l=Object.keys(r).length;return(0,B.jsx)(ie,{height:n,children:r&&(0,B.jsx)(re,{columnFlexNumbers:[1,1],columnHeaders:[{label:"Runtime variable (".concat(l,")")},{label:"Value"}],noBorderRadius:!0,rowGroupData:[{rowData:u.map((function(e){var n=e.uuid,t=e.value;return{columnTextColors:[oe.Or,void 0],columnValues:[n,t],uuid:n}}))}],small:!0})})},le=t(4190),ce=t(12717),ae=t(85544),se=t(31743),de=t(35686),pe=t(83784),fe=t(28795),ge=t(81066),he=t(24944),ve=t(3917),me=t(69419),xe=t(16488),be=t(86735),je=t(42122),ye=t(50178),Oe=t(72619),Ze=t(70320),_e=t(89538);function we(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Pe(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?we(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):we(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function Ie(e){var n=e.pipeline,t=(0,p.useRouter)(),r=(0,ye.Ct)(),u=n.uuid,l=(0,s.useState)(null),c=l[0],j=l[1],O=(0,s.useState)(null),Z=O[0],_=O[1],w=(0,s.useState)(!1),I=w[0],k=w[1],E=de.ZP.projects.list().data,S=(0,s.useMemo)((function(){var e;return null===E||void 0===E||null===(e=E.projects)||void 0===e?void 0:e[0]}),[E]),T=((0,s.useMemo)((function(){var e;return(0,Ze.h)(null===S||void 0===S||null===(e=S.features)||void 0===e?void 0:e[y.d.LOCAL_TIMEZONE])}),[null===S||void 0===S?void 0:S.features]),de.ZP.client_pages.detail("pipeline_schedule:create",{"pipelines[]":[u]},{},{key:"Triggers/Edit/".concat(u)}).data),N=(0,s.useMemo)((function(){return null===T||void 0===T?void 0:T.client_page}),[T]),D=(0,s.useMemo)((function(){var e,n;return null===N||void 0===N||null===(e=N.components)||void 0===e||null===(n=e.find((function(e){return"create_with_interactions_component"===e.uuid})))||void 0===n?void 0:n.enabled}),[N]),R=(0,s.useMemo)((function(){return null===N||void 0===N?void 0:N.disabled}),[N]),V=de.ZP.variables.pipelines.list(u,{global_only:!0},{revalidateOnFocus:!1}).data,U=null===V||void 0===V?void 0:V.variables,F=(0,me.iV)(),Y=(0,me.DQ)(F,[b.gm.INTERVAL,b.gm.STATUS,b.gm.TAG,b.gm.TYPE]),z=(0,xe.xH)(Y),q=null!==F&&void 0!==F&&F.page?F.page:0,X=de.ZP.pipeline_schedules.pipelines.list(u,Pe(Pe({},z),{},{_limit:m.Q,_offset:(null!==F&&void 0!==F&&F.page?F.page:0)*m.Q}),{refreshInterval:7500}),W=X.data,J=X.mutate,K=(0,s.useMemo)((function(){return(null===W||void 0===W?void 0:W.pipeline_schedules)||[]}),[W]),Q=function(e){return(0,d.Db)(de.ZP.pipeline_schedules.pipelines.useCreate(u),{onSuccess:function(n){return(0,Oe.wD)(n,{callback:function(n){var t=n.pipeline_schedule.id;null===e||void 0===e||e(t)},onErrorCallback:function(e,n){return j({errors:n,response:e})}})}})},$=Q((function(e){return t.push("/pipelines/[pipeline]/triggers/[...slug]","/pipelines/".concat(null===n||void 0===n?void 0:n.uuid,"/triggers/").concat(e,"/edit"))})),ee=(0,i.Z)($,2),ne=ee[0],te=ee[1].isLoading,re=Q(J),ie=(0,i.Z)(re,2),oe=ie[0],we=ie[1].isLoading,Ie=(0,s.useMemo)((function(){var e;return null===(e=(0,M.wx)(U,(function(e){return e.uuid===pe.C})))||void 0===e?void 0:e.reduce((function(e,n){var t=n.uuid,r=n.value;return Pe(Pe({},e),{},(0,o.Z)({},t,r))}),{})}),[U]),Ce=(0,L.Y6)(),ke=(0,s.useMemo)((function(){return{name:Ce,schedule_interval:b.U5.ONCE,schedule_type:b.Xm.TIME,start_time:(0,ve.d$)((new Date).toISOString(),{dayAgo:!0,utcFormat:!0}),status:b.fq.ACTIVE}}),[Ce]),Ee=(0,_e.dd)((function(){return(0,B.jsx)(H,{initialPipelineSchedulePayload:ke,onCancel:Ne,onSuccess:oe,variables:Ie})}),{},[U,Ie],{background:!0,uuid:"run_pipeline_now_popup"}),Se=(0,i.Z)(Ee,2),Te=Se[0],Ne=Se[1],De=(0,s.useState)(),Ae=De[0],Re=De[1],Le=(0,s.useMemo)((function(){var e=null===Ae||void 0===Ae?void 0:Ae.variables,n=!(0,je.Qr)(Ie);return function(t){var i=80;if(n){var o=Object.keys(Ie).length;i=46+43*Math.min(5,o)+1}var l=t.height-i;return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(f.ZP,Pe(Pe({},t),{},{enablePorts:!1,height:l,noStatus:!0})),n&&(0,B.jsx)(ue,{height:i,scheduleType:null===Ae||void 0===Ae?void 0:Ae.schedule_type,variables:Ie,variablesOverride:e}),!n&&(0,B.jsxs)(P.Z,{p:A.cd,children:[(0,B.jsx)(C.ZP,{children:"This pipeline has no runtime variables."}),!r&&(0,B.jsxs)(P.Z,{mt:1,children:[(0,B.jsx)(a(),{as:"/pipelines/".concat(u,"/edit?sideview=variables"),href:"/pipelines/[pipeline]/edit",passHref:!0,children:(0,B.jsx)(v.Z,{primary:!0,children:"Click here"})})," ",(0,B.jsx)(C.ZP,{inline:!0,children:"to add variables to this pipeline."})]})]})]})}}),[r,u,null===Ae||void 0===Ae?void 0:Ae.schedule_type,null===Ae||void 0===Ae?void 0:Ae.variables,Ie]),Me=(0,s.useMemo)((function(){var e;return(null===W||void 0===W||null===(e=W.metadata)||void 0===e?void 0:e.count)||[]}),[W]),Be=de.ZP.pipeline_triggers.pipelines.list(u).data,Ve=(0,s.useMemo)((function(){return(0,be.HK)((null===Be||void 0===Be?void 0:Be.pipeline_triggers)||[],(function(e){return e.name}))}),[Be]);(0,s.useEffect)((function(){var e=((null===Be||void 0===Be?void 0:Be.pipeline_triggers)||[]).find((function(e){var n=e.settings;return null===n||void 0===n?void 0:n.invalid_schedule_interval}));_(e?{displayMessage:'Schedule interval for Trigger (in code) "'.concat(null===e||void 0===e?void 0:e.name,'"')+" is invalid. Please check your cron expression\u2019s syntax in the pipeline\u2019s triggers.yaml file."}:null)}),[null===Be||void 0===Be?void 0:Be.pipeline_triggers]);var Ue=de.ZP.tags.list().data,Fe=(0,s.useMemo)((function(){return(0,be.YC)((null===Ue||void 0===Ue?void 0:Ue.tags)||[],(function(e){return e.uuid}))}),[Ue]),He=de.ZP.pipeline_interactions.detail(D&&u,{filter_for_permissions:1}),Ye=He.data,Ge=(He.mutate,de.ZP.interactions.pipeline_interactions.list(D&&u)),ze=Ge.data,qe=(Ge.mutate,de.ZP.pipelines.detail(D&&u).data),Xe=(0,s.useMemo)((function(){return(null===Ye||void 0===Ye?void 0:Ye.pipeline_interaction)||{}}),[Ye]),We=((0,s.useMemo)((function(){return(null===ze||void 0===ze?void 0:ze.interactions)||[]}),[ze]),(0,s.useMemo)((function(){var e;return D&&(null===(e=Object.keys((null===Xe||void 0===Xe?void 0:Xe.blocks)||{}))||void 0===e?void 0:e.length)>=1}),[D,Xe])),Je=(0,s.useMemo)((function(){return We&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(P.Z,{ml:"12px"}),(0,B.jsx)(he.lZ,{}),(0,B.jsx)(P.Z,{ml:"12px"}),(0,B.jsx)(h.ZP,Pe(Pe({},ge.B),{},{Icon:G.yd,inline:!0,onClick:function(){return k(!0)},uuid:"Create trigger with no-code",children:"Create trigger with no-code"}))]})}),[We,k]),Ke=(0,s.useMemo)((function(){return(0,B.jsx)(ae.Z,{addButtonProps:!R&&{isLoading:te,label:"New trigger",onClick:function(){return ne({pipeline_schedule:{name:(0,L.Y6)()}})}},filterOptions:{frequency:Object.values(b.U5),status:Object.values(b.fq),tag:Fe.map((function(e){return e.uuid})),type:Object.values(b.Xm)},filterValueLabelMapping:{status:Object.values(b.fq).reduce((function(e,n){return Pe(Pe({},e),{},(0,o.Z)({},n,(0,L.kC)(n)))}),{}),tag:Fe.reduce((function(e,n){var t=n.uuid;return Pe(Pe({},e),{},(0,o.Z)({},t,t))}),{}),type:b.Z4},onClickFilterDefaults:function(){t.push("/pipelines/[pipeline]/triggers","/pipelines/".concat(u,"/triggers"))},query:Y,resetPageOnFilterApply:!0,secondaryButtonProps:!R&&{disabled:r,isLoading:we,label:"Run @once",onClick:(0,je.Qr)(Ie)?function(){return oe({pipeline_schedule:ke})}:Te,tooltip:"Creates an @once trigger and runs pipeline immediately"},showDivider:!R,children:Je})}),[ne,oe,R,te,we,r,Je,ke,u,Y,t,Te,Fe,Ie]),Qe=(0,s.useMemo)((function(){var e=[];return I?e.push.apply(e,[{label:function(){return"Triggers"},onClick:function(){return k(!1)}},{bold:!0,label:function(){return"New trigger"}}]):e.push({label:function(){return"Triggers"}}),e}),[I,k]);return I?(0,B.jsx)(ce.Z,{creatingWithLimitation:!0,errors:c,onCancel:function(){return k(!1)},pipeline:null===qe||void 0===qe?void 0:qe.pipeline,project:S,setErrors:j,useCreateScheduleMutation:Q}):(0,B.jsx)(x.Z,{breadcrumbs:Qe,buildSidekick:!I&&Le,errors:c||Z,pageName:fe.M.TRIGGERS,pipeline:n,setErrors:j,subheader:!I&&Ke,title:function(e){var n=e.name;return"".concat(n," triggers")},uuid:"".concat(fe.M.TRIGGERS,"_").concat(u),children:!I&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(g.Z,{light:!0}),W?(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(se.Z,{fetchPipelineSchedules:J,pipeline:n,pipelineSchedules:K,pipelineTriggersByName:Ve,selectedSchedule:Ae,setErrors:j,setSelectedSchedule:Re}),(0,B.jsx)(P.Z,{p:2,children:(0,B.jsx)(m.ZP,{maxPages:9,onUpdate:function(e){var n=Number(e),r=Pe(Pe({},F),{},{page:n>=0?n:0});t.push("/pipelines/[pipeline]/triggers","/pipelines/".concat(u,"/triggers?").concat((0,me.uM)(r)))},page:Number(q),totalPages:Math.ceil(Me/m.Q)})})]}):(0,B.jsx)(P.Z,{m:2,children:(0,B.jsx)(le.Z,{inverted:!0,large:!0})})]})})}Ie.getInitialProps=function(){var e=(0,r.Z)(l().mark((function e(n){var t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.query.pipeline,e.abrupt("return",{pipeline:{uuid:t}});case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();var Ce=(0,j.Z)(Ie)},40183:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pipelines/[pipeline]/triggers",function(){return t(18213)}])}},function(e){e.O(0,[2678,1154,844,8224,1124,341,9161,4495,9302,4267,600,8487,8264,7858,5499,3932,5457,5389,1769,5544,6333,9774,2888,179],(function(){return n=40183,e(e.s=n);var n}));var n=e.O();_N_E=n}]);