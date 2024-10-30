import{d as L,o as g,g as v,w as b,C as m,Q as S,R as k,G as y,h as P,b as N,ae as F,af as U}from"./YJu4pVuE.js";import{_ as $}from"./DlAUqK2U.js";const C=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function w(t,i){i?i={...C,...i}:i=C;const a=A(i);return a.dispatch(t),a.toString()}const j=Object.freeze(["prototype","__proto__","constructor"]);function A(t){let i="",a=new Map;const r=e=>{i+=e};return{toString(){return i},getContext(){return a},dispatch(e){return t.replacer&&(e=t.replacer(e)),this[e===null?"null":typeof e](e)},object(e){if(e&&typeof e.toJSON=="function")return this.object(e.toJSON());const n=Object.prototype.toString.call(e);let s="";const f=n.length;f<10?s="unknown:["+n+"]":s=n.slice(8,f-1),s=s.toLowerCase();let d=null;if((d=a.get(e))===void 0)a.set(e,a.size);else return this.dispatch("[CIRCULAR:"+d+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(e))return r("buffer:"),r(e.toString("utf8"));if(s!=="object"&&s!=="function"&&s!=="asyncfunction")this[s]?this[s](e):t.ignoreUnknown||this.unkown(e,s);else{let o=Object.keys(e);t.unorderedObjects&&(o=o.sort());let u=[];t.respectType!==!1&&!B(e)&&(u=j),t.excludeKeys&&(o=o.filter(l=>!t.excludeKeys(l)),u=u.filter(l=>!t.excludeKeys(l))),r("object:"+(o.length+u.length)+":");const c=l=>{this.dispatch(l),r(":"),t.excludeValues||this.dispatch(e[l]),r(",")};for(const l of o)c(l);for(const l of u)c(l)}},array(e,n){if(n=n===void 0?t.unorderedArrays!==!1:n,r("array:"+e.length+":"),!n||e.length<=1){for(const d of e)this.dispatch(d);return}const s=new Map,f=e.map(d=>{const o=A(t);o.dispatch(d);for(const[u,c]of o.getContext())s.set(u,c);return o.toString()});return a=s,f.sort(),this.array(f,!1)},date(e){return r("date:"+e.toJSON())},symbol(e){return r("symbol:"+e.toString())},unkown(e,n){if(r(n),!!e&&(r(":"),e&&typeof e.entries=="function"))return this.array(Array.from(e.entries()),!0)},error(e){return r("error:"+e.toString())},boolean(e){return r("bool:"+e)},string(e){r("string:"+e.length+":"),r(e)},function(e){r("fn:"),B(e)?this.dispatch("[native]"):this.dispatch(e.toString()),t.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(e.name)),t.respectFunctionProperties&&this.object(e)},number(e){return r("number:"+e)},xml(e){return r("xml:"+e.toString())},null(){return r("Null")},undefined(){return r("Undefined")},regexp(e){return r("regex:"+e.toString())},uint8array(e){return r("uint8array:"),this.dispatch(Array.prototype.slice.call(e))},uint8clampedarray(e){return r("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(e))},int8array(e){return r("int8array:"),this.dispatch(Array.prototype.slice.call(e))},uint16array(e){return r("uint16array:"),this.dispatch(Array.prototype.slice.call(e))},int16array(e){return r("int16array:"),this.dispatch(Array.prototype.slice.call(e))},uint32array(e){return r("uint32array:"),this.dispatch(Array.prototype.slice.call(e))},int32array(e){return r("int32array:"),this.dispatch(Array.prototype.slice.call(e))},float32array(e){return r("float32array:"),this.dispatch(Array.prototype.slice.call(e))},float64array(e){return r("float64array:"),this.dispatch(Array.prototype.slice.call(e))},arraybuffer(e){return r("arraybuffer:"),this.dispatch(new Uint8Array(e))},url(e){return r("url:"+e.toString())},map(e){r("map:");const n=[...e];return this.array(n,t.unorderedSets!==!1)},set(e){r("set:");const n=[...e];return this.array(n,t.unorderedSets!==!1)},file(e){return r("file:"),this.dispatch([e.name,e.size,e.type,e.lastModfied])},blob(){if(t.ignoreUnknown)return r("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return r("domwindow")},bigint(e){return r("bigint:"+e.toString())},process(){return r("process")},timer(){return r("timer")},pipe(){return r("pipe")},tcp(){return r("tcp")},udp(){return r("udp")},tty(){return r("tty")},statwatcher(){return r("statwatcher")},securecontext(){return r("securecontext")},connection(){return r("connection")},zlib(){return r("zlib")},context(){return r("context")},nodescript(){return r("nodescript")},httpparser(){return r("httpparser")},dataview(){return r("dataview")},signal(){return r("signal")},fsevent(){return r("fsevent")},tlswrap(){return r("tlswrap")}}}const q="[native code] }",z=q.length;function B(t){return typeof t!="function"?!1:Function.prototype.toString.call(t).slice(-z)===q}function K(t,i,a={}){return t===i||w(t,a)===w(i,a)}const p={to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1}},H={as:{type:String,default:"button"},type:{type:String,default:"button"},disabled:{type:Boolean,default:null},active:{type:Boolean,default:void 0},exact:{type:Boolean,default:!1},exactQuery:{type:Boolean,default:!1},exactHash:{type:Boolean,default:!1},inactiveClass:{type:String,default:void 0}},T=t=>Object.keys(p).reduce((a,r)=>(t[r]!==void 0&&(a[r]=t[r]),a),{}),D=t=>[...Object.keys(p),...Object.keys(H),"ariaLabel"].reduce((a,r)=>(t[r]!==void 0&&(a[r]=t[r]),a),{}),R=L({inheritAttrs:!1,props:{...p,as:{type:String,default:"button"},type:{type:String,default:"button"},disabled:{type:Boolean,default:null},active:{type:Boolean,default:void 0},exact:{type:Boolean,default:!1},exactQuery:{type:Boolean,default:!1},exactHash:{type:Boolean,default:!1},inactiveClass:{type:String,default:void 0}},setup(t){function i(a,r,{isActive:e,isExactActive:n}){return t.exactQuery&&!K(a.query,r.query)||t.exactHash&&a.hash!==r.hash?t.inactiveClass:t.exact&&n||!t.exact&&e?t.activeClass:t.inactiveClass}return{resolveLinkClass:i}}}),Q=["href","aria-disabled","role","rel","target","tabindex","onClick"];function V(t,i,a,r,e,n){const s=U;return t.to?(g(),v(s,y({key:1},t.$props,{custom:""}),{default:b(({route:f,href:d,target:o,rel:u,navigate:c,isActive:l,isExactActive:h,isExternal:x})=>[N("a",y(t.$attrs,{href:t.disabled?void 0:d,"aria-disabled":t.disabled?"true":void 0,role:t.disabled?"link":void 0,rel:u,target:o,class:t.active!==void 0?t.active?t.activeClass:t.inactiveClass:t.resolveLinkClass(f,t._.provides[F]||t.$route,{isActive:l,isExactActive:h}),tabindex:t.disabled?-1:void 0,onClick:O=>!x&&!t.disabled&&c(O)}),[m(t.$slots,"default",S(k({isActive:t.active!==void 0?t.active:t.exact?h:l})))],16,Q)]),_:3},16)):(g(),v(P(t.as),y({key:0,type:t.type,disabled:t.disabled},t.$attrs,{class:t.active?t.activeClass:t.inactiveClass}),{default:b(()=>[m(t.$slots,"default",S(k({isActive:t.active})))]),_:3},16,["type","disabled","class"]))}const E=$(R,[["render",V]]);export{E as _,T as a,D as g,p as n};
