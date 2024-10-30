import{d as Te,r as D,j as H,p as Lt,m as je,i as G,F as Je,k as Me,q as Ft,s as Qe,v as nr,x as bt,y as wt,a3 as ir,l as Pt,A as Ne,o as ce,g as Ot,w as ve,a as We,n as de,C as xt,b as Et,T as St,G as Ve,c as qe,D as Ae,B as sr,H as lr}from"./B3PM-gVu.js";import{t as ur,i as De,q as pr,N as fr,E as cr,w as vr,n as Rt,l as dr,d as U}from"./BdG6otRd.js";import{d as Ze,o as x,E as _e,a as ne,w as mr,h as gr,A as et,i as ge,f as Ue,u as Xe,P as te,e as X,N as $t,b as ee,c as Ge,s as hr}from"./BXy2g18_.js";import{s as yr}from"./BnAAbIKt.js";import{b as br,u as wr}from"./z4KQ9JW1.js";import{g as At}from"./BZ63tDAu.js";import{_ as Pr}from"./DlAUqK2U.js";const Or={wrapper:"relative",container:"z-50 group",trigger:"inline-flex w-full",width:"",background:"bg-white dark:bg-gray-900",shadow:"shadow-lg",rounded:"rounded-md",ring:"ring-1 ring-gray-200 dark:ring-gray-800",base:"overflow-hidden focus:outline-none relative",transition:{enterActiveClass:"transition ease-out duration-200",enterFromClass:"opacity-0 translate-y-1",enterToClass:"opacity-100 translate-y-0",leaveActiveClass:"transition ease-in duration-150",leaveFromClass:"opacity-100 translate-y-0",leaveToClass:"opacity-0 translate-y-1"},overlay:{base:"fixed inset-0 transition-opacity z-50",background:"bg-gray-200/75 dark:bg-gray-800/75",transition:{enterActiveClass:"ease-out duration-200",enterFromClass:"opacity-0",enterToClass:"opacity-100",leaveActiveClass:"ease-in duration-150",leaveFromClass:"opacity-100",leaveToClass:"opacity-0"}},popper:{strategy:"fixed"},default:{openDelay:0,closeDelay:0},arrow:br};var xr=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(xr||{});let Ht=Symbol("PopoverContext");function tt(e){let t=Qe(Ht,null);if(t===null){let r=new Error(`<${e} /> is missing a parent <${Wt.name} /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,tt),r}return t}let Er=Symbol("PopoverGroupContext");function It(){return Qe(Er,null)}let Nt=Symbol("PopoverPanelContext");function Sr(){return Qe(Nt,null)}let Wt=Te({name:"Popover",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:t,attrs:r,expose:n}){var a;let l=D(null);n({el:l,$el:l});let i=D(1),o=D(null),s=D(null),f=D(null),u=D(null),b=H(()=>Ze(l)),O=H(()=>{var p,m;if(!x(o)||!x(u))return!1;for(let k of document.querySelectorAll("body > *"))if(Number(k==null?void 0:k.contains(x(o)))^Number(k==null?void 0:k.contains(x(u))))return!0;let g=_e(),S=g.indexOf(x(o)),$=(S+g.length-1)%g.length,A=(S+1)%g.length,C=g[$],B=g[A];return!((p=x(u))!=null&&p.contains(C))&&!((m=x(u))!=null&&m.contains(B))}),d={popoverState:i,buttonId:D(null),panelId:D(null),panel:u,button:o,isPortalled:O,beforePanelSentinel:s,afterPanelSentinel:f,togglePopover(){i.value=ne(i.value,{0:1,1:0})},closePopover(){i.value!==1&&(i.value=1)},close(p){d.closePopover();let m=p?p instanceof HTMLElement?p:p.value instanceof HTMLElement?x(p):x(d.button):x(d.button);m==null||m.focus()}};Lt(Ht,d),ur(H(()=>ne(i.value,{0:De.Open,1:De.Closed})));let E={buttonId:d.buttonId,panelId:d.panelId,close(){d.closePopover()}},v=It(),h=v==null?void 0:v.registerPopover,[w,y]=pr(),P=fr({mainTreeNodeRef:v==null?void 0:v.mainTreeNodeRef,portals:w,defaultContainers:[o,u]});function c(){var p,m,g,S;return(S=v==null?void 0:v.isFocusWithinPopoverGroup())!=null?S:((p=b.value)==null?void 0:p.activeElement)&&(((m=x(o))==null?void 0:m.contains(b.value.activeElement))||((g=x(u))==null?void 0:g.contains(b.value.activeElement)))}return je(()=>h==null?void 0:h(E)),cr((a=b.value)==null?void 0:a.defaultView,"focus",p=>{var m,g;p.target!==window&&p.target instanceof HTMLElement&&i.value===0&&(c()||o&&u&&(P.contains(p.target)||(m=x(d.beforePanelSentinel))!=null&&m.contains(p.target)||(g=x(d.afterPanelSentinel))!=null&&g.contains(p.target)||d.closePopover()))},!0),vr(P.resolveContainers,(p,m)=>{var g;d.closePopover(),mr(m,gr.Loose)||(p.preventDefault(),(g=x(o))==null||g.focus())},H(()=>i.value===0)),()=>{let p={open:i.value===0,close:d.close};return G(Je,[G(y,{},()=>et({theirProps:{...e,...r},ourProps:{ref:l},slot:p,slots:t,attrs:r,name:"Popover"})),G(P.MainTreeNode)])}}}),$r=Te({name:"PopoverButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:null}},inheritAttrs:!1,setup(e,{attrs:t,slots:r,expose:n}){var a;let l=(a=e.id)!=null?a:`headlessui-popover-button-${ge()}`,i=tt("PopoverButton"),o=H(()=>Ze(i.button));n({el:i.button,$el:i.button}),Me(()=>{i.buttonId.value=l}),Ft(()=>{i.buttonId.value=null});let s=It(),f=s==null?void 0:s.closeOthers,u=Sr(),b=H(()=>u===null?!1:u.value===i.panelId.value),O=D(null),d=`headlessui-focus-sentinel-${ge()}`;b.value||je(()=>{i.button.value=x(O)});let E=yr(H(()=>({as:e.as,type:t.type})),O);function v(p){var m,g,S,$,A;if(b.value){if(i.popoverState.value===1)return;switch(p.key){case ee.Space:case ee.Enter:p.preventDefault(),(g=(m=p.target).click)==null||g.call(m),i.closePopover(),(S=x(i.button))==null||S.focus();break}}else switch(p.key){case ee.Space:case ee.Enter:p.preventDefault(),p.stopPropagation(),i.popoverState.value===1&&(f==null||f(i.buttonId.value)),i.togglePopover();break;case ee.Escape:if(i.popoverState.value!==0)return f==null?void 0:f(i.buttonId.value);if(!x(i.button)||($=o.value)!=null&&$.activeElement&&!((A=x(i.button))!=null&&A.contains(o.value.activeElement)))return;p.preventDefault(),p.stopPropagation(),i.closePopover();break}}function h(p){b.value||p.key===ee.Space&&p.preventDefault()}function w(p){var m,g;e.disabled||(b.value?(i.closePopover(),(m=x(i.button))==null||m.focus()):(p.preventDefault(),p.stopPropagation(),i.popoverState.value===1&&(f==null||f(i.buttonId.value)),i.togglePopover(),(g=x(i.button))==null||g.focus()))}function y(p){p.preventDefault(),p.stopPropagation()}let P=Rt();function c(){let p=x(i.panel);if(!p)return;function m(){ne(P.value,{[U.Forwards]:()=>te(p,X.First),[U.Backwards]:()=>te(p,X.Last)})===Ge.Error&&te(_e().filter(g=>g.dataset.headlessuiFocusGuard!=="true"),ne(P.value,{[U.Forwards]:X.Next,[U.Backwards]:X.Previous}),{relativeTo:x(i.button)})}m()}return()=>{let p=i.popoverState.value===0,m={open:p},{...g}=e,S=b.value?{ref:O,type:E.value,onKeydown:v,onClick:w}:{ref:O,id:l,type:E.value,"aria-expanded":i.popoverState.value===0,"aria-controls":x(i.panel)?i.panelId.value:void 0,disabled:e.disabled?!0:void 0,onKeydown:v,onKeyup:h,onClick:w,onMousedown:y};return G(Je,[et({ourProps:S,theirProps:{...t,...g},slot:m,attrs:t,slots:r,name:"PopoverButton"}),p&&!b.value&&i.isPortalled.value&&G(Ue,{id:d,features:Xe.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:c})])}}}),Ar=Te({name:"PopoverPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},focus:{type:Boolean,default:!1},id:{type:String,default:null}},inheritAttrs:!1,setup(e,{attrs:t,slots:r,expose:n}){var a;let l=(a=e.id)!=null?a:`headlessui-popover-panel-${ge()}`,{focus:i}=e,o=tt("PopoverPanel"),s=H(()=>Ze(o.panel)),f=`headlessui-focus-sentinel-before-${ge()}`,u=`headlessui-focus-sentinel-after-${ge()}`;n({el:o.panel,$el:o.panel}),Me(()=>{o.panelId.value=l}),Ft(()=>{o.panelId.value=null}),Lt(Nt,o.panelId),je(()=>{var y,P;if(!i||o.popoverState.value!==0||!o.panel)return;let c=(y=s.value)==null?void 0:y.activeElement;(P=x(o.panel))!=null&&P.contains(c)||te(x(o.panel),X.First)});let b=dr(),O=H(()=>b!==null?(b.value&De.Open)===De.Open:o.popoverState.value===0);function d(y){var P,c;switch(y.key){case ee.Escape:if(o.popoverState.value!==0||!x(o.panel)||s.value&&!((P=x(o.panel))!=null&&P.contains(s.value.activeElement)))return;y.preventDefault(),y.stopPropagation(),o.closePopover(),(c=x(o.button))==null||c.focus();break}}function E(y){var P,c,p,m,g;let S=y.relatedTarget;S&&x(o.panel)&&((P=x(o.panel))!=null&&P.contains(S)||(o.closePopover(),((p=(c=x(o.beforePanelSentinel))==null?void 0:c.contains)!=null&&p.call(c,S)||(g=(m=x(o.afterPanelSentinel))==null?void 0:m.contains)!=null&&g.call(m,S))&&S.focus({preventScroll:!0})))}let v=Rt();function h(){let y=x(o.panel);if(!y)return;function P(){ne(v.value,{[U.Forwards]:()=>{var c;te(y,X.First)===Ge.Error&&((c=x(o.afterPanelSentinel))==null||c.focus())},[U.Backwards]:()=>{var c;(c=x(o.button))==null||c.focus({preventScroll:!0})}})}P()}function w(){let y=x(o.panel);if(!y)return;function P(){ne(v.value,{[U.Forwards]:()=>{let c=x(o.button),p=x(o.panel);if(!c)return;let m=_e(),g=m.indexOf(c),S=m.slice(0,g+1),$=[...m.slice(g+1),...S];for(let A of $.slice())if(A.dataset.headlessuiFocusGuard==="true"||p!=null&&p.contains(A)){let C=$.indexOf(A);C!==-1&&$.splice(C,1)}te($,X.First,{sorted:!1})},[U.Backwards]:()=>{var c;te(y,X.Previous)===Ge.Error&&((c=x(o.button))==null||c.focus())}})}P()}return()=>{let y={open:o.popoverState.value===0,close:o.close},{focus:P,...c}=e,p={ref:o.panel,id:l,onKeydown:d,onFocusout:i&&o.popoverState.value===0?E:void 0,tabIndex:-1};return et({ourProps:p,theirProps:{...t,...c},attrs:t,slot:y,slots:{...r,default:(...m)=>{var g;return[G(Je,[O.value&&o.isPortalled.value&&G(Ue,{id:f,ref:o.beforePanelSentinel,features:Xe.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:h}),(g=r.default)==null?void 0:g.call(r,...m),O.value&&o.isPortalled.value&&G(Ue,{id:u,ref:o.afterPanelSentinel,features:Xe.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:w})])]}},features:$t.RenderStrategy|$t.Static,visible:O.value,name:"PopoverPanel"})}}});function L(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function oe(e){var t=L(e).Element;return e instanceof t||e instanceof Element}function F(e){var t=L(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function rt(e){if(typeof ShadowRoot>"u")return!1;var t=L(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}var re=Math.max,Be=Math.min,ie=Math.round;function Ye(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function Vt(){return!/^((?!chrome|android).)*safari/i.test(Ye())}function se(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);var n=e.getBoundingClientRect(),a=1,l=1;t&&F(e)&&(a=e.offsetWidth>0&&ie(n.width)/e.offsetWidth||1,l=e.offsetHeight>0&&ie(n.height)/e.offsetHeight||1);var i=oe(e)?L(e):window,o=i.visualViewport,s=!Vt()&&r,f=(n.left+(s&&o?o.offsetLeft:0))/a,u=(n.top+(s&&o?o.offsetTop:0))/l,b=n.width/a,O=n.height/l;return{width:b,height:O,top:u,right:f+b,bottom:u+O,left:f,x:f,y:u}}function ot(e){var t=L(e),r=t.pageXOffset,n=t.pageYOffset;return{scrollLeft:r,scrollTop:n}}function Cr(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function kr(e){return e===L(e)||!F(e)?ot(e):Cr(e)}function V(e){return e?(e.nodeName||"").toLowerCase():null}function Y(e){return((oe(e)?e.ownerDocument:e.document)||window.document).documentElement}function at(e){return se(Y(e)).left+ot(e).scrollLeft}function q(e){return L(e).getComputedStyle(e)}function nt(e){var t=q(e),r=t.overflow,n=t.overflowX,a=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+a+n)}function Dr(e){var t=e.getBoundingClientRect(),r=ie(t.width)/e.offsetWidth||1,n=ie(t.height)/e.offsetHeight||1;return r!==1||n!==1}function Br(e,t,r){r===void 0&&(r=!1);var n=F(t),a=F(t)&&Dr(t),l=Y(t),i=se(e,a,r),o={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(n||!n&&!r)&&((V(t)!=="body"||nt(l))&&(o=kr(t)),F(t)?(s=se(t,!0),s.x+=t.clientLeft,s.y+=t.clientTop):l&&(s.x=at(l))),{x:i.left+o.scrollLeft-s.x,y:i.top+o.scrollTop-s.y,width:i.width,height:i.height}}function it(e){var t=se(e),r=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function Le(e){return V(e)==="html"?e:e.assignedSlot||e.parentNode||(rt(e)?e.host:null)||Y(e)}function qt(e){return["html","body","#document"].indexOf(V(e))>=0?e.ownerDocument.body:F(e)&&nt(e)?e:qt(Le(e))}function he(e,t){var r;t===void 0&&(t=[]);var n=qt(e),a=n===((r=e.ownerDocument)==null?void 0:r.body),l=L(n),i=a?[l].concat(l.visualViewport||[],nt(n)?n:[]):n,o=t.concat(i);return a?o:o.concat(he(Le(i)))}function Tr(e){return["table","td","th"].indexOf(V(e))>=0}function Ct(e){return!F(e)||q(e).position==="fixed"?null:e.offsetParent}function jr(e){var t=/firefox/i.test(Ye()),r=/Trident/i.test(Ye());if(r&&F(e)){var n=q(e);if(n.position==="fixed")return null}var a=Le(e);for(rt(a)&&(a=a.host);F(a)&&["html","body"].indexOf(V(a))<0;){var l=q(a);if(l.transform!=="none"||l.perspective!=="none"||l.contain==="paint"||["transform","perspective"].indexOf(l.willChange)!==-1||t&&l.willChange==="filter"||t&&l.filter&&l.filter!=="none")return a;a=a.parentNode}return null}function we(e){for(var t=L(e),r=Ct(e);r&&Tr(r)&&q(r).position==="static";)r=Ct(r);return r&&(V(r)==="html"||V(r)==="body"&&q(r).position==="static")?t:r||jr(e)||t}var j="top",I="bottom",N="right",M="left",st="auto",Pe=[j,I,N,M],le="start",be="end",Mr="clippingParents",zt="viewport",me="popper",Lr="reference",kt=Pe.reduce(function(e,t){return e.concat([t+"-"+le,t+"-"+be])},[]),Ut=[].concat(Pe,[st]).reduce(function(e,t){return e.concat([t,t+"-"+le,t+"-"+be])},[]),Fr="beforeRead",Rr="read",Hr="afterRead",Ir="beforeMain",Nr="main",Wr="afterMain",Vr="beforeWrite",qr="write",zr="afterWrite",Ur=[Fr,Rr,Hr,Ir,Nr,Wr,Vr,qr,zr];function Xr(e){var t=new Map,r=new Set,n=[];e.forEach(function(l){t.set(l.name,l)});function a(l){r.add(l.name);var i=[].concat(l.requires||[],l.requiresIfExists||[]);i.forEach(function(o){if(!r.has(o)){var s=t.get(o);s&&a(s)}}),n.push(l)}return e.forEach(function(l){r.has(l.name)||a(l)}),n}function Gr(e){var t=Xr(e);return Ur.reduce(function(r,n){return r.concat(t.filter(function(a){return a.phase===n}))},[])}function Yr(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function Kr(e){var t=e.reduce(function(r,n){var a=r[n.name];return r[n.name]=a?Object.assign({},a,n,{options:Object.assign({},a.options,n.options),data:Object.assign({},a.data,n.data)}):n,r},{});return Object.keys(t).map(function(r){return t[r]})}function Jr(e,t){var r=L(e),n=Y(e),a=r.visualViewport,l=n.clientWidth,i=n.clientHeight,o=0,s=0;if(a){l=a.width,i=a.height;var f=Vt();(f||!f&&t==="fixed")&&(o=a.offsetLeft,s=a.offsetTop)}return{width:l,height:i,x:o+at(e),y:s}}function Qr(e){var t,r=Y(e),n=ot(e),a=(t=e.ownerDocument)==null?void 0:t.body,l=re(r.scrollWidth,r.clientWidth,a?a.scrollWidth:0,a?a.clientWidth:0),i=re(r.scrollHeight,r.clientHeight,a?a.scrollHeight:0,a?a.clientHeight:0),o=-n.scrollLeft+at(e),s=-n.scrollTop;return q(a||r).direction==="rtl"&&(o+=re(r.clientWidth,a?a.clientWidth:0)-l),{width:l,height:i,x:o,y:s}}function Xt(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&rt(r)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function Ke(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Zr(e,t){var r=se(e,!1,t==="fixed");return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}function Dt(e,t,r){return t===zt?Ke(Jr(e,r)):oe(t)?Zr(t,r):Ke(Qr(Y(e)))}function _r(e){var t=he(Le(e)),r=["absolute","fixed"].indexOf(q(e).position)>=0,n=r&&F(e)?we(e):e;return oe(n)?t.filter(function(a){return oe(a)&&Xt(a,n)&&V(a)!=="body"}):[]}function eo(e,t,r,n){var a=t==="clippingParents"?_r(e):[].concat(t),l=[].concat(a,[r]),i=l[0],o=l.reduce(function(s,f){var u=Dt(e,f,n);return s.top=re(u.top,s.top),s.right=Be(u.right,s.right),s.bottom=Be(u.bottom,s.bottom),s.left=re(u.left,s.left),s},Dt(e,i,n));return o.width=o.right-o.left,o.height=o.bottom-o.top,o.x=o.left,o.y=o.top,o}function W(e){return e.split("-")[0]}function ue(e){return e.split("-")[1]}function lt(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Gt(e){var t=e.reference,r=e.element,n=e.placement,a=n?W(n):null,l=n?ue(n):null,i=t.x+t.width/2-r.width/2,o=t.y+t.height/2-r.height/2,s;switch(a){case j:s={x:i,y:t.y-r.height};break;case I:s={x:i,y:t.y+t.height};break;case N:s={x:t.x+t.width,y:o};break;case M:s={x:t.x-r.width,y:o};break;default:s={x:t.x,y:t.y}}var f=a?lt(a):null;if(f!=null){var u=f==="y"?"height":"width";switch(l){case le:s[f]=s[f]-(t[u]/2-r[u]/2);break;case be:s[f]=s[f]+(t[u]/2-r[u]/2);break}}return s}function Yt(){return{top:0,right:0,bottom:0,left:0}}function Kt(e){return Object.assign({},Yt(),e)}function Jt(e,t){return t.reduce(function(r,n){return r[n]=e,r},{})}function ut(e,t){t===void 0&&(t={});var r=t,n=r.placement,a=n===void 0?e.placement:n,l=r.strategy,i=l===void 0?e.strategy:l,o=r.boundary,s=o===void 0?Mr:o,f=r.rootBoundary,u=f===void 0?zt:f,b=r.elementContext,O=b===void 0?me:b,d=r.altBoundary,E=d===void 0?!1:d,v=r.padding,h=v===void 0?0:v,w=Kt(typeof h!="number"?h:Jt(h,Pe)),y=O===me?Lr:me,P=e.rects.popper,c=e.elements[E?y:O],p=eo(oe(c)?c:c.contextElement||Y(e.elements.popper),s,u,i),m=se(e.elements.reference),g=Gt({reference:m,element:P,strategy:"absolute",placement:a}),S=Ke(Object.assign({},P,g)),$=O===me?S:m,A={top:p.top-$.top+w.top,bottom:$.bottom-p.bottom+w.bottom,left:p.left-$.left+w.left,right:$.right-p.right+w.right},C=e.modifiersData.offset;if(O===me&&C){var B=C[a];Object.keys(A).forEach(function(k){var K=[N,I].indexOf(k)>=0?1:-1,J=[j,I].indexOf(k)>=0?"y":"x";A[k]+=B[J]*K})}return A}var Bt={placement:"bottom",modifiers:[],strategy:"absolute"};function Tt(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function to(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,n=r===void 0?[]:r,a=t.defaultOptions,l=a===void 0?Bt:a;return function(o,s,f){f===void 0&&(f=l);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},Bt,l),modifiersData:{},elements:{reference:o,popper:s},attributes:{},styles:{}},b=[],O=!1,d={state:u,setOptions:function(w){var y=typeof w=="function"?w(u.options):w;v(),u.options=Object.assign({},l,u.options,y),u.scrollParents={reference:oe(o)?he(o):o.contextElement?he(o.contextElement):[],popper:he(s)};var P=Gr(Kr([].concat(n,u.options.modifiers)));return u.orderedModifiers=P.filter(function(c){return c.enabled}),E(),d.update()},forceUpdate:function(){if(!O){var w=u.elements,y=w.reference,P=w.popper;if(Tt(y,P)){u.rects={reference:Br(y,we(P),u.options.strategy==="fixed"),popper:it(P)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(A){return u.modifiersData[A.name]=Object.assign({},A.data)});for(var c=0;c<u.orderedModifiers.length;c++){if(u.reset===!0){u.reset=!1,c=-1;continue}var p=u.orderedModifiers[c],m=p.fn,g=p.options,S=g===void 0?{}:g,$=p.name;typeof m=="function"&&(u=m({state:u,options:S,name:$,instance:d})||u)}}}},update:Yr(function(){return new Promise(function(h){d.forceUpdate(),h(u)})}),destroy:function(){v(),O=!0}};if(!Tt(o,s))return d;d.setOptions(f).then(function(h){!O&&f.onFirstUpdate&&f.onFirstUpdate(h)});function E(){u.orderedModifiers.forEach(function(h){var w=h.name,y=h.options,P=y===void 0?{}:y,c=h.effect;if(typeof c=="function"){var p=c({state:u,name:w,instance:d,options:P}),m=function(){};b.push(p||m)}})}function v(){b.forEach(function(h){return h()}),b=[]}return d}}var Ce={passive:!0};function ro(e){var t=e.state,r=e.instance,n=e.options,a=n.scroll,l=a===void 0?!0:a,i=n.resize,o=i===void 0?!0:i,s=L(t.elements.popper),f=[].concat(t.scrollParents.reference,t.scrollParents.popper);return l&&f.forEach(function(u){u.addEventListener("scroll",r.update,Ce)}),o&&s.addEventListener("resize",r.update,Ce),function(){l&&f.forEach(function(u){u.removeEventListener("scroll",r.update,Ce)}),o&&s.removeEventListener("resize",r.update,Ce)}}const Qt={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:ro,data:{}};function oo(e){var t=e.state,r=e.name;t.modifiersData[r]=Gt({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const ao={name:"popperOffsets",enabled:!0,phase:"read",fn:oo,data:{}};var no={top:"auto",right:"auto",bottom:"auto",left:"auto"};function io(e,t){var r=e.x,n=e.y,a=t.devicePixelRatio||1;return{x:ie(r*a)/a||0,y:ie(n*a)/a||0}}function jt(e){var t,r=e.popper,n=e.popperRect,a=e.placement,l=e.variation,i=e.offsets,o=e.position,s=e.gpuAcceleration,f=e.adaptive,u=e.roundOffsets,b=e.isFixed,O=i.x,d=O===void 0?0:O,E=i.y,v=E===void 0?0:E,h=typeof u=="function"?u({x:d,y:v}):{x:d,y:v};d=h.x,v=h.y;var w=i.hasOwnProperty("x"),y=i.hasOwnProperty("y"),P=M,c=j,p=window;if(f){var m=we(r),g="clientHeight",S="clientWidth";if(m===L(r)&&(m=Y(r),q(m).position!=="static"&&o==="absolute"&&(g="scrollHeight",S="scrollWidth")),m=m,a===j||(a===M||a===N)&&l===be){c=I;var $=b&&m===p&&p.visualViewport?p.visualViewport.height:m[g];v-=$-n.height,v*=s?1:-1}if(a===M||(a===j||a===I)&&l===be){P=N;var A=b&&m===p&&p.visualViewport?p.visualViewport.width:m[S];d-=A-n.width,d*=s?1:-1}}var C=Object.assign({position:o},f&&no),B=u===!0?io({x:d,y:v},L(r)):{x:d,y:v};if(d=B.x,v=B.y,s){var k;return Object.assign({},C,(k={},k[c]=y?"0":"",k[P]=w?"0":"",k.transform=(p.devicePixelRatio||1)<=1?"translate("+d+"px, "+v+"px)":"translate3d("+d+"px, "+v+"px, 0)",k))}return Object.assign({},C,(t={},t[c]=y?v+"px":"",t[P]=w?d+"px":"",t.transform="",t))}function so(e){var t=e.state,r=e.options,n=r.gpuAcceleration,a=n===void 0?!0:n,l=r.adaptive,i=l===void 0?!0:l,o=r.roundOffsets,s=o===void 0?!0:o,f={placement:W(t.placement),variation:ue(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:a,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,jt(Object.assign({},f,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:i,roundOffsets:s})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,jt(Object.assign({},f,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const Zt={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:so,data:{}};function lo(e){var t=e.state;Object.keys(t.elements).forEach(function(r){var n=t.styles[r]||{},a=t.attributes[r]||{},l=t.elements[r];!F(l)||!V(l)||(Object.assign(l.style,n),Object.keys(a).forEach(function(i){var o=a[i];o===!1?l.removeAttribute(i):l.setAttribute(i,o===!0?"":o)}))})}function uo(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(n){var a=t.elements[n],l=t.attributes[n]||{},i=Object.keys(t.styles.hasOwnProperty(n)?t.styles[n]:r[n]),o=i.reduce(function(s,f){return s[f]="",s},{});!F(a)||!V(a)||(Object.assign(a.style,o),Object.keys(l).forEach(function(s){a.removeAttribute(s)}))})}}const po={name:"applyStyles",enabled:!0,phase:"write",fn:lo,effect:uo,requires:["computeStyles"]};var fo=[Qt,ao,Zt,po],co={left:"right",right:"left",bottom:"top",top:"bottom"};function ke(e){return e.replace(/left|right|bottom|top/g,function(t){return co[t]})}var vo={start:"end",end:"start"};function Mt(e){return e.replace(/start|end/g,function(t){return vo[t]})}function mo(e,t){t===void 0&&(t={});var r=t,n=r.placement,a=r.boundary,l=r.rootBoundary,i=r.padding,o=r.flipVariations,s=r.allowedAutoPlacements,f=s===void 0?Ut:s,u=ue(n),b=u?o?kt:kt.filter(function(E){return ue(E)===u}):Pe,O=b.filter(function(E){return f.indexOf(E)>=0});O.length===0&&(O=b);var d=O.reduce(function(E,v){return E[v]=ut(e,{placement:v,boundary:a,rootBoundary:l,padding:i})[W(v)],E},{});return Object.keys(d).sort(function(E,v){return d[E]-d[v]})}function go(e){if(W(e)===st)return[];var t=ke(e);return[Mt(e),t,Mt(t)]}function ho(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var a=r.mainAxis,l=a===void 0?!0:a,i=r.altAxis,o=i===void 0?!0:i,s=r.fallbackPlacements,f=r.padding,u=r.boundary,b=r.rootBoundary,O=r.altBoundary,d=r.flipVariations,E=d===void 0?!0:d,v=r.allowedAutoPlacements,h=t.options.placement,w=W(h),y=w===h,P=s||(y||!E?[ke(h)]:go(h)),c=[h].concat(P).reduce(function(ae,z){return ae.concat(W(z)===st?mo(t,{placement:z,boundary:u,rootBoundary:b,padding:f,flipVariations:E,allowedAutoPlacements:v}):z)},[]),p=t.rects.reference,m=t.rects.popper,g=new Map,S=!0,$=c[0],A=0;A<c.length;A++){var C=c[A],B=W(C),k=ue(C)===le,K=[j,I].indexOf(B)>=0,J=K?"width":"height",T=ut(t,{placement:C,boundary:u,rootBoundary:b,altBoundary:O,padding:f}),R=K?k?N:M:k?I:j;p[J]>m[J]&&(R=ke(R));var Oe=ke(R),Q=[];if(l&&Q.push(T[B]<=0),o&&Q.push(T[R]<=0,T[Oe]<=0),Q.every(function(ae){return ae})){$=C,S=!1;break}g.set(C,Q)}if(S)for(var xe=E?3:1,Fe=function(z){var fe=c.find(function(Se){var Z=g.get(Se);if(Z)return Z.slice(0,z).every(function(Re){return Re})});if(fe)return $=fe,"break"},pe=xe;pe>0;pe--){var Ee=Fe(pe);if(Ee==="break")break}t.placement!==$&&(t.modifiersData[n]._skip=!0,t.placement=$,t.reset=!0)}}const yo={name:"flip",enabled:!0,phase:"main",fn:ho,requiresIfExists:["offset"],data:{_skip:!1}};function bo(e,t,r){var n=W(e),a=[M,j].indexOf(n)>=0?-1:1,l=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,i=l[0],o=l[1];return i=i||0,o=(o||0)*a,[M,N].indexOf(n)>=0?{x:o,y:i}:{x:i,y:o}}function wo(e){var t=e.state,r=e.options,n=e.name,a=r.offset,l=a===void 0?[0,0]:a,i=Ut.reduce(function(u,b){return u[b]=bo(b,t.rects,l),u},{}),o=i[t.placement],s=o.x,f=o.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=s,t.modifiersData.popperOffsets.y+=f),t.modifiersData[n]=i}const Po={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:wo};function Oo(e){return e==="x"?"y":"x"}function ye(e,t,r){return re(e,Be(t,r))}function xo(e,t,r){var n=ye(e,t,r);return n>r?r:n}function Eo(e){var t=e.state,r=e.options,n=e.name,a=r.mainAxis,l=a===void 0?!0:a,i=r.altAxis,o=i===void 0?!1:i,s=r.boundary,f=r.rootBoundary,u=r.altBoundary,b=r.padding,O=r.tether,d=O===void 0?!0:O,E=r.tetherOffset,v=E===void 0?0:E,h=ut(t,{boundary:s,rootBoundary:f,padding:b,altBoundary:u}),w=W(t.placement),y=ue(t.placement),P=!y,c=lt(w),p=Oo(c),m=t.modifiersData.popperOffsets,g=t.rects.reference,S=t.rects.popper,$=typeof v=="function"?v(Object.assign({},t.rects,{placement:t.placement})):v,A=typeof $=="number"?{mainAxis:$,altAxis:$}:Object.assign({mainAxis:0,altAxis:0},$),C=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,B={x:0,y:0};if(m){if(l){var k,K=c==="y"?j:M,J=c==="y"?I:N,T=c==="y"?"height":"width",R=m[c],Oe=R+h[K],Q=R-h[J],xe=d?-S[T]/2:0,Fe=y===le?g[T]:S[T],pe=y===le?-S[T]:-g[T],Ee=t.elements.arrow,ae=d&&Ee?it(Ee):{width:0,height:0},z=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Yt(),fe=z[K],Se=z[J],Z=ye(0,g[T],ae[T]),Re=P?g[T]/2-xe-Z-fe-A.mainAxis:Fe-Z-fe-A.mainAxis,_t=P?-g[T]/2+xe+Z+Se+A.mainAxis:pe+Z+Se+A.mainAxis,He=t.elements.arrow&&we(t.elements.arrow),er=He?c==="y"?He.clientTop||0:He.clientLeft||0:0,pt=(k=C==null?void 0:C[c])!=null?k:0,tr=R+Re-pt-er,rr=R+_t-pt,ft=ye(d?Be(Oe,tr):Oe,R,d?re(Q,rr):Q);m[c]=ft,B[c]=ft-R}if(o){var ct,or=c==="x"?j:M,ar=c==="x"?I:N,_=m[p],$e=p==="y"?"height":"width",vt=_+h[or],dt=_-h[ar],Ie=[j,M].indexOf(w)!==-1,mt=(ct=C==null?void 0:C[p])!=null?ct:0,gt=Ie?vt:_-g[$e]-S[$e]-mt+A.altAxis,ht=Ie?_+g[$e]+S[$e]-mt-A.altAxis:dt,yt=d&&Ie?xo(gt,_,ht):ye(d?gt:vt,_,d?ht:dt);m[p]=yt,B[p]=yt-_}t.modifiersData[n]=B}}const So={name:"preventOverflow",enabled:!0,phase:"main",fn:Eo,requiresIfExists:["offset"]};var $o=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,Kt(typeof t!="number"?t:Jt(t,Pe))};function Ao(e){var t,r=e.state,n=e.name,a=e.options,l=r.elements.arrow,i=r.modifiersData.popperOffsets,o=W(r.placement),s=lt(o),f=[M,N].indexOf(o)>=0,u=f?"height":"width";if(!(!l||!i)){var b=$o(a.padding,r),O=it(l),d=s==="y"?j:M,E=s==="y"?I:N,v=r.rects.reference[u]+r.rects.reference[s]-i[s]-r.rects.popper[u],h=i[s]-r.rects.reference[s],w=we(l),y=w?s==="y"?w.clientHeight||0:w.clientWidth||0:0,P=v/2-h/2,c=b[d],p=y-O[u]-b[E],m=y/2-O[u]/2+P,g=ye(c,m,p),S=s;r.modifiersData[n]=(t={},t[S]=g,t.centerOffset=g-m,t)}}function Co(e){var t=e.state,r=e.options,n=r.element,a=n===void 0?"[data-popper-arrow]":n;a!=null&&(typeof a=="string"&&(a=t.elements.popper.querySelector(a),!a)||Xt(t.elements.popper,a)&&(t.elements.arrow=a))}const ko={name:"arrow",enabled:!0,phase:"main",fn:Ao,effect:Co,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},Do=to({defaultModifiers:[...fo,Po,yo,So,Zt,Qt,ko]});function Bo({locked:e=!1,overflowPadding:t=8,offsetDistance:r=8,offsetSkid:n=0,gpuAcceleration:a=!0,adaptive:l=!0,scroll:i=!0,resize:o=!0,arrow:s=!1,placement:f,strategy:u},b){const O=D(null),d=D(null),E=D(null);return Me(()=>{je(v=>{if(!d.value||!O.value&&!(b!=null&&b.value))return;const h=At(d),w=At(O);if(!(h instanceof HTMLElement)||!w)return;const y={modifiers:[{name:"flip",enabled:!e},{name:"preventOverflow",options:{padding:t}},{name:"offset",options:{offset:[n,r]}},{name:"computeStyles",options:{adaptive:l,gpuAcceleration:a}},{name:"eventListeners",options:{scroll:i,resize:o}},{name:"arrow",enabled:s}]};f&&(y.placement=f),u&&(y.strategy=u),E.value=Do(w,h,y),v(E.value.destroy)})}),[O,d,E]}const ze=nr(bt.ui.strategy,bt.ui.popover,Or),To=Te({components:{HPopover:Wt,HPopoverButton:$r,HPopoverPanel:Ar},inheritAttrs:!1,props:{mode:{type:String,default:"click",validator:e=>["click","hover"].includes(e)},open:{type:Boolean,default:void 0},disabled:{type:Boolean,default:!1},openDelay:{type:Number,default:()=>ze.default.openDelay},closeDelay:{type:Number,default:()=>ze.default.closeDelay},overlay:{type:Boolean,default:!1},popper:{type:Object,default:()=>({})},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:open"],setup(e,{emit:t}){const{ui:r,attrs:n}=wr("popover",wt(e,"ui"),ze,wt(e,"class")),a=H(()=>ir(e.mode==="hover"?{offsetDistance:0}:{},e.popper,r.value.popper)),[l,i]=Bo(a.value),o=D(null),s=D(null);let f=null,u=null;Me(()=>{var w,y;const v=(w=o.value)==null?void 0:w.$.provides;if(!v)return;const h=Object.getOwnPropertySymbols(v);s.value=h.length&&v[h[0]],e.open&&((y=s.value)==null||y.togglePopover())});const b=H(()=>{var y,P,c;if(e.mode!=="hover")return{};const v=((y=e.popper)==null?void 0:y.offsetDistance)||((P=r.value.popper)==null?void 0:P.offsetDistance)||8,h=(c=a.value.placement)==null?void 0:c.split("-")[0],w=`${v}px`;return h==="top"||h==="bottom"?{paddingTop:w,paddingBottom:w}:h==="left"||h==="right"?{paddingLeft:w,paddingRight:w}:{paddingTop:w,paddingBottom:w,paddingLeft:w,paddingRight:w}});function O(v){!v.cancelable||!s.value||(s.value.popoverState===0?s.value.closePopover():s.value.togglePopover())}function d(){e.mode!=="hover"||!s.value||(u&&(clearTimeout(u),u=null),s.value.popoverState!==0&&(f=f||setTimeout(()=>{s.value.togglePopover&&s.value.togglePopover(),f=null},e.openDelay)))}function E(){e.mode!=="hover"||!s.value||(f&&(clearTimeout(f),f=null),s.value.popoverState!==1&&(u=u||setTimeout(()=>{s.value.closePopover&&s.value.closePopover(),u=null},e.closeDelay)))}return Pt(()=>e.open,(v,h)=>{s.value&&(h===void 0||v===h||(v?s.value.popoverState=0:s.value.closePopover()))}),Pt(()=>{var v;return(v=s.value)==null?void 0:v.popoverState},(v,h)=>{h===void 0||v===h||t("update:open",v===0)}),hr(()=>lr()),{ui:r,attrs:n,popover:o,popper:a,trigger:l,container:i,containerStyle:b,onTouchStart:O,onMouseEnter:d,onMouseLeave:E}}}),jo=["disabled"];function Mo(e,t,r,n,a,l){const i=Ne("HPopoverButton"),o=Ne("HPopoverPanel"),s=Ne("HPopover");return ce(),Ot(s,Ve({ref:"popover",class:e.ui.wrapper},e.attrs,{onMouseleave:e.onMouseLeave}),{default:ve(({open:f,close:u})=>[We(i,{ref:"trigger",as:"div",disabled:e.disabled,class:de(e.ui.trigger),role:"button",onMouseenter:e.onMouseEnter,onTouchstartPassive:e.onTouchStart},{default:ve(()=>[xt(e.$slots,"default",{open:f,close:u},()=>[Et("button",{disabled:e.disabled}," Open ",8,jo)])]),_:2},1032,["disabled","class","onMouseenter","onTouchstartPassive"]),e.overlay?(ce(),Ot(St,Ve({key:0,appear:""},e.ui.overlay.transition),{default:ve(()=>[f?(ce(),qe("div",{key:0,class:de([e.ui.overlay.base,e.ui.overlay.background])},null,2)):Ae("",!0)]),_:2},1040)):Ae("",!0),f?(ce(),qe("div",{key:1,ref:"container",class:de([e.ui.container,e.ui.width]),style:sr(e.containerStyle),onMouseenter:t[0]||(t[0]=(...b)=>e.onMouseEnter&&e.onMouseEnter(...b))},[We(St,Ve({appear:""},e.ui.transition),{default:ve(()=>[Et("div",null,[e.popper.arrow?(ce(),qe("div",{key:0,"data-popper-arrow":"",class:de(Object.values(e.ui.arrow))},null,2)):Ae("",!0),We(o,{class:de([e.ui.base,e.ui.background,e.ui.ring,e.ui.rounded,e.ui.shadow]),static:""},{default:ve(()=>[xt(e.$slots,"panel",{open:f,close:u})]),_:2},1032,["class"])])]),_:2},1040)],38)):Ae("",!0)]),_:3},16,["class","onMouseleave"])}const Vo=Pr(To,[["render",Mo]]);export{Vo as _,ao as a,I as b,Zt as c,ut as d,Qt as e,po as f,yo as g,So as h,ko as i,M as l,Po as o,to as p,N as r,j as t};