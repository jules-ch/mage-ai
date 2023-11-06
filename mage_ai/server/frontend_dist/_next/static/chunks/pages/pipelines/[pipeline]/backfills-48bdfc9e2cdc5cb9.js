(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8450],{16488:function(n,e,t){"use strict";t.d(e,{IJ:function(){return v},M8:function(){return y},Vx:function(){return P},XM:function(){return h},_U:function(){return O},eI:function(){return m},gU:function(){return N},lO:function(){return Z},ri:function(){return b},tL:function(){return I},vJ:function(){return _},xH:function(){return T}});var r,i=t(82394),u=t(92083),o=t.n(u),c=t(3917),l=t(4383),a=t(30229),s=t(42122),f=t(86735);function d(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function p(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?d(Object(t),!0).forEach((function(e){(0,i.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var O=function(n){return!!n&&!Object.values(a.U5).includes(n)};function v(n){return null===n||void 0===n?void 0:n.reduce((function(n,e){var t=e.block_uuid,r=e.completed_at,u=e.started_at,c=e.status,l=null;u&&r&&(l=o()(r).valueOf()-o()(u).valueOf());return p(p({},n),{},(0,i.Z)({},t,{runtime:l,status:c}))}),{})}var E,b=function(n){var e=[{description:function(){return"This pipeline will run continuously on an interval or just once."},label:function(){return"Schedule"},uuid:a.Xm.TIME},{description:function(){return"This pipeline will run when a specific event occurs."},label:function(){return"Event"},uuid:a.Xm.EVENT},{description:function(){return"Run this pipeline when you make an API call."},label:function(){return"API"},uuid:a.Xm.API}];return n?e.slice(0,1):e};function T(n){var e=(0,s.gR)(n,[a.gm.INTERVAL,a.gm.TYPE]),t=n[a.gm.INTERVAL];t&&(e["schedule_interval[]"]=encodeURIComponent(t));var r=n[a.gm.TYPE];return r&&(e["schedule_type[]"]=r),e}function m(n){if(!n)return null;var e=new Date(o()(n).valueOf()),t=Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds());return new Date(t)}function P(n){return"string"!==typeof n?n:m(n.split("+")[0]).toISOString().split(".")[0]}!function(n){n.DAY="day",n.HOUR="hour",n.MINUTE="minute",n.SECOND="second"}(E||(E={}));var I=(r={},(0,i.Z)(r,E.DAY,86400),(0,i.Z)(r,E.HOUR,3600),(0,i.Z)(r,E.MINUTE,60),(0,i.Z)(r,E.SECOND,1),r);function N(n){var e=E.SECOND,t=n;return n%86400===0?(t/=86400,e=E.DAY):n%3600===0?(t/=3600,e=E.HOUR):n%60===0&&(t/=60,e=E.MINUTE),{time:t,unit:e}}function _(n,e){return n*I[e]}function h(n,e,t){var r="".concat(n.toISOString().split("T")[0]," ").concat(null===e||void 0===e?void 0:e.hour,":").concat(null===e||void 0===e?void 0:e.minute);if(null!==t&&void 0!==t&&t.includeSeconds&&(r=r.concat(":00")),null!==t&&void 0!==t&&t.localTimezone){var i=o()(n);i.set("hour",+(null===e||void 0===e?void 0:e.hour)||0),i.set("minute",+(null===e||void 0===e?void 0:e.minute)||0),i.set("second",0),r=i.format(c.lE),null!==t&&void 0!==t&&t.convertToUtc&&(r=(0,c.d$)(r,{includeSeconds:null===t||void 0===t?void 0:t.includeSeconds,utcFormat:!0}))}return r}function y(n){var e,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r="",i=!0;return i&&(t?r="".concat(window.origin,"/api/pipeline_schedules/").concat(null===n||void 0===n?void 0:n.id,"/api_trigger"):(r="".concat(window.origin,"/api/pipeline_schedules/").concat(null===n||void 0===n?void 0:n.id,"/pipeline_runs"),null!==n&&void 0!==n&&n.token&&(r="".concat(r,"/").concat(n.token)))),i&&(e=window.location.port)&&(r=r.replace(e,l.QT)),r}function A(n,e,t){return n.match(/[*,-/]/)?{additionalOffset:0,cronValue:n}:function(n,e,t){var r=t.indexOf(n),i=0;if(e<0)for(var u=0;u>e;u--)0===r?(r=t.length-1,i-=1):r-=1;else if(e>0)for(var o=0;o<e;o++)r===t.length-1?(r=0,i+=1):r+=1;return{additionalOffset:i,cronValue:String(t[r]||n)}}(+n,e,t)}var g=(0,f.m5)(60),S=(0,f.m5)(24),j=(0,c.Cs)();function Z(n,e){if(!n)return n;var t=o()().local().format("Z"),r=t.split(":"),i="-"===t[0],u=3===r[0].length?Number(r[0].slice(1)):Number(r[0]),c=Number(r[1]);(i&&!e||!i&&e)&&(u=-u,c=-c);var l=n.split(" "),a=l[0],s=l[1],f=l[2],d=A(a,c,g),p=A(s,u+d.additionalOffset,S);if(l[0]=d.cronValue,l[1]=p.cronValue,0!==(null===p||void 0===p?void 0:p.additionalOffset)){var O=A(f,p.additionalOffset,j);l[2]=O.cronValue}return l.join(" ")}},70320:function(n,e,t){"use strict";t.d(e,{h:function(){return o},q:function(){return u}});var r=t(78419),i=t(53808);function u(){return(0,i.U2)(r.am,null)||!1}function o(n){return"undefined"!==typeof n&&(0,i.t8)(r.am,n),n}},83641:function(n,e,t){"use strict";t.d(e,{I7:function(){return r},IB:function(){return l},VV:function(){return u},_7:function(){return o},rn:function(){return c}});var r,i=t(41143),u="datetime",o="code",c=i.V;!function(n){n.SECOND="second",n.MINUTE="minute",n.HOUR="hour",n.DAY="day",n.WEEK="week",n.MONTH="month",n.YEAR="year",n.CUSTOM="custom"}(r||(r={}));var l=[r.MINUTE,r.HOUR,r.DAY,r.WEEK,r.MONTH,r.YEAR,r.CUSTOM]},41143:function(n,e,t){"use strict";var r;t.d(e,{V:function(){return r}}),function(n){n.CANCELLED="cancelled",n.COMPLETED="completed",n.FAILED="failed",n.INITIAL="initial",n.RUNNING="running",n.UPSTREAM_FAILED="upstream_failed",n.CONDITION_FAILED="condition_failed"}(r||(r={}))},72098:function(n,e,t){"use strict";var r;t.d(e,{U:function(){return r}}),function(n){n.PYSPARK="pysparkkernel",n.PYTHON3="python3"}(r||(r={}))},44265:function(n,e,t){"use strict";t.d(e,{Az:function(){return a},BF:function(){return l},Do:function(){return f},IK:function(){return c},P0:function(){return i},VO:function(){return o},sZ:function(){return s}});var r,i,u=t(82394),o=t(41143).V,c=[o.FAILED,o.COMPLETED,o.RUNNING,o.CANCELLED,o.INITIAL],l=[o.INITIAL,o.RUNNING],a=[o.CANCELLED,o.COMPLETED,o.FAILED],s="__mage_variables",f=(r={},(0,u.Z)(r,o.CANCELLED,"Cancelled"),(0,u.Z)(r,o.COMPLETED,"Done"),(0,u.Z)(r,o.FAILED,"Failed"),(0,u.Z)(r,o.INITIAL,"Ready"),(0,u.Z)(r,o.RUNNING,"Running"),r);!function(n){n.PIPELINE_UUID="pipeline_uuid[]",n.STATUS="status[]",n.TAG="pipeline_tag[]"}(i||(i={}))},30229:function(n,e,t){"use strict";t.d(e,{TR:function(){return p},U5:function(){return l},Wb:function(){return d},Xm:function(){return u},Z4:function(){return a},fq:function(){return c},gm:function(){return s},kJ:function(){return f}});var r,i,u,o=t(82394);!function(n){n.API="api",n.EVENT="event",n.TIME="time"}(u||(u={}));var c,l,a=(r={},(0,o.Z)(r,u.API,(function(){return"API"})),(0,o.Z)(r,u.EVENT,(function(){return"event"})),(0,o.Z)(r,u.TIME,(function(){return"schedule"})),r);!function(n){n.ACTIVE="active",n.INACTIVE="inactive"}(c||(c={})),function(n){n.ONCE="@once",n.HOURLY="@hourly",n.DAILY="@daily",n.WEEKLY="@weekly",n.MONTHLY="@monthly",n.ALWAYS_ON="@always_on"}(l||(l={}));var s,f,d=[l.ONCE,l.HOURLY,l.DAILY,l.WEEKLY,l.MONTHLY];!function(n){n.INTERVAL="frequency[]",n.STATUS="status[]",n.TAG="tag[]",n.TYPE="type[]"}(s||(s={})),function(n){n.CREATED_AT="created_at",n.NAME="name",n.PIPELINE="pipeline_uuid",n.STATUS="status",n.TYPE="schedule_type"}(f||(f={}));var p=(i={},(0,o.Z)(i,f.CREATED_AT,"Created at"),(0,o.Z)(i,f.NAME,"Name"),(0,o.Z)(i,f.PIPELINE,"Pipeline"),(0,o.Z)(i,f.STATUS,"Active"),(0,o.Z)(i,f.TYPE,"Type"),i)},57653:function(n,e,t){"use strict";t.d(e,{$1:function(){return v},G7:function(){return T},LM:function(){return m},Mj:function(){return P},QK:function(){return O},RH:function(){return b},a_:function(){return N},fj:function(){return _},kA:function(){return I},qL:function(){return c},r0:function(){return E}});var r,i,u,o,c,l=t(75582),a=t(82394),s=t(72473),f=t(72098);function d(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function p(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?d(Object(t),!0).forEach((function(e){(0,a.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}!function(n){n.INTEGRATION="integration",n.PYTHON="python",n.PYSPARK="pyspark",n.STREAMING="streaming"}(c||(c={}));var O,v,E,b=(r={},(0,a.Z)(r,c.INTEGRATION,"Integration"),(0,a.Z)(r,c.PYTHON,"Python"),(0,a.Z)(r,c.PYSPARK,"PySpark"),(0,a.Z)(r,c.STREAMING,"Streaming"),r),T=(i={},(0,a.Z)(i,c.INTEGRATION,"Integration"),(0,a.Z)(i,c.PYTHON,"Standard"),(0,a.Z)(i,c.PYSPARK,"PySpark"),(0,a.Z)(i,c.STREAMING,"Streaming"),i),m="all",P=(c.PYTHON,c.INTEGRATION,c.STREAMING,u={},(0,a.Z)(u,m,s.ie),(0,a.Z)(u,c.INTEGRATION,s.YC),(0,a.Z)(u,c.PYTHON,s.El),(0,a.Z)(u,c.STREAMING,s.dB),u);!function(n){n.ACTIVE="active",n.INACTIVE="inactive",n.NO_SCHEDULES="no_schedules",n.RETRY="retry",n.RETRY_INCOMPLETE_BLOCK_RUNS="retry_incomplete_block_runs"}(O||(O={})),function(n){n.GROUP="group_by",n.HISTORY_DAYS="from_history_days",n.NO_TAGS="no_tags",n.STATUS="status[]",n.TAG="tag[]",n.TYPE="type[]"}(v||(v={})),function(n){n.STATUS="status",n.TAG="tag",n.TYPE="type"}(E||(E={}));var I=[O.ACTIVE,O.INACTIVE,O.NO_SCHEDULES],N=(o={},(0,a.Z)(o,c.PYTHON,f.U.PYTHON3),(0,a.Z)(o,c.PYSPARK,f.U.PYSPARK),o),_=Object.entries(N).reduce((function(n,e){var t=(0,l.Z)(e,2),r=t[0],i=t[1];return p(p({},n),{},(0,a.Z)({},i,r))}),{})},11650:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return V}});var r=t(77837),i=t(75582),u=t(38860),o=t.n(u),c=t(82684),l=t(69864),a=t(34376),s=t(82394),f=t(12691),d=t.n(f),p=t(83641),O=t(71180),v=t(48670),E=t(75499),b=t(30160),T=t(72473),m=t(44265),P=t(81655),I=t(70515),N=t(3917),_=t(16488),h=t(50178),y=t(70320),A=t(28598);function g(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function S(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?g(Object(t),!0).forEach((function(e){(0,s.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var j=function(n){var e=n.models,t=n.onClickRow,r=n.pipeline,i=n.selectedRow,u=(0,h.Ct)(),o=(0,y.q)(),c=null===r||void 0===r?void 0:r.uuid,l=o?P.O$:{},a=[{uuid:"Status"},{uuid:"Name"},{uuid:"Type"},{uuid:"Runs"},S(S({},l),{},{uuid:"Backfill"}),S(S({},l),{},{uuid:"Started at"}),S(S({},l),{},{uuid:"Completed at"})];return u||a.push({label:function(){return""},uuid:"edit"}),(0,A.jsx)(E.Z,{columnFlex:[null,1,null,null,null,1,1,null],columns:a,isSelectedRow:function(n){return e[n].id===(null===i||void 0===i?void 0:i.id)},onClickRow:function(n){return t(e[n])},rows:e.map((function(n,e){var t=n.block_uuid,r=n.completed_at,i=n.end_datetime,l=n.id,a=n.name,s=n.start_datetime,f=n.started_at,E=n.status,P=n.total_run_count,h=[(0,A.jsx)(b.ZP,{default:!0,monospace:!0,children:E||"inactive"},"status"),(0,A.jsx)(d(),{as:"/pipelines/".concat(c,"/backfills/").concat(l),href:"/pipelines/[pipeline]/backfills/[...slug]",passHref:!0,children:(0,A.jsx)(v.Z,{bold:!0,sameColorAsText:!0,children:a})},"name"),(0,A.jsx)(b.ZP,{default:!0,monospace:!0,children:t?p._7:p.VV},"type"),(0,A.jsx)(b.ZP,{default:!0,monospace:!0,children:P||0},"runs"),(0,A.jsxs)(b.ZP,{default:!0,monospace:!0,small:!0,children:[s&&i&&(0,A.jsxs)(A.Fragment,{children:[o?(0,N.XG)(s,o):(0,_.Vx)(s),"\xa0-\xa0",o?(0,N.XG)(i,o):(0,_.Vx)(i)]}),!(s&&i)&&(0,A.jsx)(A.Fragment,{children:"\u2014"})]},"backfill"),(0,A.jsx)(b.ZP,{default:!0,monospace:!0,small:!0,title:f?(0,N._6)(f):null,children:f?o?(0,N.XG)(f,o):(0,_.Vx)(f):(0,A.jsx)(A.Fragment,{children:"\u2014"})},"started_at"),(0,A.jsx)(b.ZP,{default:!0,monospace:!0,small:!0,title:r?(0,N._6)(r):null,children:r?o?(0,N.XG)(r,o):(0,_.Vx)(r):(0,A.jsx)(A.Fragment,{children:"\u2014"})},"completed_at")];return u||h.push((0,A.jsx)(O.ZP,{default:!0,disabled:E===m.VO.COMPLETED,iconOnly:!0,linkProps:{as:"/pipelines/".concat(c,"/backfills/").concat(l,"/edit"),href:"/pipelines/[pipeline]/backfills/[...slug]"},noBackground:!0,title:"Edit",children:(0,A.jsx)(T.I8,{default:!0,size:2*I.iI})},"".concat(e,"_edit_button"))),h})),uuid:"pipeline-runs"})},Z=t(93369),k=t(75457),w=t(93808),R=t(38276),C=t(35686),D=t(28795),L=t(15610),Y=t(72619),U=t(69419),M=t(81728);function x(n){var e=n.pipeline,t=(0,a.useRouter)(),r=e.uuid,u=C.ZP.backfills.list({_limit:20,_offset:0,include_run_count:!0,pipeline_uuid:r},{refreshInterval:6e4}).data,o=(0,c.useMemo)((function(){return(null===u||void 0===u?void 0:u.backfills)||[]}),[u]),s=(0,U.iV)(),f=(0,c.useState)(null),d=f[0],p=f[1],O=(0,c.useState)(null),v=O[0],E=O[1];(0,c.useEffect)((function(){null!==s&&void 0!==s&&s.backfill_id?p(null===o||void 0===o?void 0:o.find((function(n){return n.id===Number(s.backfill_id)}))):d&&p(null)}),[o,s,d]);var m=(0,c.useMemo)((function(){var n="/pipelines/".concat(r,"/backfills"),e=[{label:function(){return"Backfills"},linkProps:d?{as:n,href:"/pipelines/[pipeline]/backfills"}:null}];return d&&e.push({label:function(){return d.name}}),e}),[r,d]),P=(0,l.Db)(C.ZP.backfills.pipelines.useCreate(r),{onSuccess:function(n){return(0,Y.wD)(n,{callback:function(n){var e=n.backfill.id;t.push("/pipelines/[pipeline]/backfills/[...slug]","/pipelines/".concat(r,"/backfills/").concat(e,"/edit"))},onErrorCallback:function(n,e){return E({errors:e,response:n})}})}}),N=(0,i.Z)(P,2),_=N[0],h=N[1].isLoading;return(0,A.jsxs)(k.Z,{breadcrumbs:m,errors:v,pageName:D.M.BACKFILLS,pipeline:e,setErrors:E,title:function(n){var e=n.name;return"".concat(e," backfills")},uuid:"".concat(D.M.BACKFILLS,"_").concat(r),children:[(0,A.jsx)(R.Z,{p:I.cd,children:(0,A.jsx)(Z.ZP,{beforeElement:(0,A.jsx)(T.mm,{size:2.5*I.iI}),blackBorder:!0,inline:!0,loading:h,noHoverUnderline:!0,onClick:function(){return _({backfill:{name:(0,M.Y6)()}})},sameColorAsText:!0,uuid:"PipelineDetailPage/Backfills/add_new_backfill",children:"Create new backfill"})}),o&&0===o.length&&(0,A.jsx)(R.Z,{p:I.cd,children:(0,A.jsx)(b.ZP,{bold:!0,default:!0,monospace:!0,muted:!0,children:"No backfills available"})}),(null===o||void 0===o?void 0:o.length)>=1&&(0,A.jsx)(j,{models:o,onClickRow:function(n){var e=n.id;return(0,L.u7)({backfill_id:e})},pipeline:e,selectedRow:d})]})}x.getInitialProps=function(){var n=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.query.pipeline,n.abrupt("return",{pipeline:{uuid:t}});case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();var V=(0,w.Z)(x)},37459:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pipelines/[pipeline]/backfills",function(){return t(11650)}])},80022:function(n,e,t){"use strict";function r(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}t.d(e,{Z:function(){return r}})},15544:function(n,e,t){"use strict";function r(n){return r=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},r(n)}t.d(e,{Z:function(){return r}})},99177:function(n,e,t){"use strict";function r(n,e){return r=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n},r(n,e)}function i(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&r(n,e)}t.d(e,{Z:function(){return i}})},93189:function(n,e,t){"use strict";t.d(e,{Z:function(){return u}});var r=t(12539),i=t(80022);function u(n,e){if(e&&("object"===r(e)||"function"===typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return(0,i.Z)(n)}}},function(n){n.O(0,[2678,1154,844,4267,600,8487,8264,7858,5499,5457,9774,2888,179],(function(){return e=37459,n(n.s=e);var e}));var e=n.O();_N_E=e}]);