import{_ as U}from"./C6FTE_yn.js";import{_ as C}from"./BV8FuBbn.js";import{_ as z}from"./DBJgW9Y7.js";import{_ as N,g as V}from"./Copy6EHo.js";import{v as E,x as w,d as A,y as k,j as B,J,K,o as t,c as s,F as x,f as h,n as u,a as g,w as M,C as c,g as m,G as f,D as i,E as O,t as S,U as D,ac as F,b as $,u as G}from"./YJu4pVuE.js";import{u as I}from"./DElnJ2nN.js";import{_ as q}from"./DlAUqK2U.js";import{_ as H}from"./MUtz3sD4.js";import{_ as R,a as T}from"./CAwnwYPN.js";import"./DumaPke3.js";const Q={wrapper:"relative w-full flex items-center justify-between",container:"flex items-center min-w-0",inner:"min-w-0",base:"group relative w-full flex items-center gap-1.5 px-2.5 py-3.5 rounded-md font-medium text-sm focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 disabled:cursor-not-allowed disabled:opacity-75",before:"before:absolute before:inset-x-0 before:inset-y-2 before:inset-px before:rounded-md hover:before:bg-gray-50 dark:hover:before:bg-gray-800/50",after:"after:absolute after:bottom-0 after:inset-x-2.5 after:block after:h-[2px] after:mt-2",active:"text-gray-900 dark:text-white after:bg-primary-500 dark:after:bg-primary-400 after:rounded-full",inactive:"text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white",label:"truncate relative",icon:{base:"flex-shrink-0 w-5 h-5 relative",active:"text-gray-700 dark:text-gray-200",inactive:"text-gray-400 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-200"},avatar:{base:"flex-shrink-0",size:"2xs"},badge:{base:"flex-shrink-0 ml-auto relative rounded",color:"gray",variant:"solid",size:"xs"}},W=E(w.ui.strategy,w.ui.horizontalNavigation,Q),X=A({components:{UIcon:C,UAvatar:U,UBadge:z,ULink:N},inheritAttrs:!1,props:{links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:n,attrs:l}=I("horizontalNavigation",k(e,"ui"),W,k(e,"class")),o=B(()=>Array.isArray(e.links[0])?e.links:[e.links]);return{ui:n,attrs:l,sections:o,getULinkProps:V,twMerge:J,twJoin:K}}}),Y={key:0,class:"sr-only"};function Z(e,n,l,o,p,y){const d=U,b=C,v=z,L=N;return t(),s("nav",f({class:e.ui.wrapper},e.attrs),[(t(!0),s(x,null,h(e.sections,(j,_)=>(t(),s("ul",{key:`section${_}`,class:u(e.ui.container)},[(t(!0),s(x,null,h(j,(a,P)=>(t(),s("li",{key:`section${_}-${P}`,class:u(e.ui.inner)},[g(L,f({ref_for:!0},e.getULinkProps(a),{class:[e.ui.base,e.ui.before,e.ui.after],"active-class":e.ui.active,"inactive-class":e.ui.inactive,onClick:a.click,onKeyup:n[0]||(n[0]=D(r=>r.target.blur(),["enter"]))}),{default:M(({isActive:r})=>[c(e.$slots,"avatar",{link:a,isActive:r},()=>[a.avatar?(t(),m(d,f({key:0,ref_for:!0},{size:e.ui.avatar.size,...a.avatar},{class:[e.ui.avatar.base]}),null,16,["class"])):i("",!0)]),c(e.$slots,"icon",{link:a,isActive:r},()=>[a.icon?(t(),m(b,{key:0,name:a.icon,class:u(e.twMerge(e.twJoin(e.ui.icon.base,r?e.ui.icon.active:e.ui.icon.inactive),a.iconClass))},null,8,["name","class"])):i("",!0)]),c(e.$slots,"default",{link:a,isActive:r},()=>[a.label?(t(),s("span",{key:0,class:u(e.twMerge(e.ui.label,a.labelClass))},[r?(t(),s("span",Y," Current page: ")):i("",!0),O(" "+S(a.label),1)],2)):i("",!0)]),c(e.$slots,"badge",{link:a,isActive:r},()=>[a.badge?(t(),m(v,f({key:0,ref_for:!0},{size:e.ui.badge.size,color:e.ui.badge.color,variant:e.ui.badge.variant,...typeof a.badge=="string"||typeof a.badge=="number"?{label:a.badge}:a.badge},{class:e.ui.badge.base}),null,16,["class"])):i("",!0)])]),_:2},1040,["class","active-class","inactive-class","onClick"])],2))),128))],2))),128))],16)}const ee=q(X,[["render",Z]]),ae={class:"mt-12 flex w-full flex-col md:mt-16 lg:mt-0 lg:flex-col-reverse"},te={class:"layout-px grid grid-cols-1 lg:grid-cols-[70%_30%]"},me=A({__name:"index",setup(e){const{navList:n}=F(),l=B(()=>{var o;return((o=n.value.find(p=>p.key==="news"))==null?void 0:o.links)||[]});return(o,p)=>{const y=ee,d=H,b=R,v=T;return t(),s("div",null,[$("div",ae,[g(y,{links:G(l),ui:{wrapper:"lg:layout-px lg:mt-3 lg:w-[75.5%]",container:"w-full justify-evenly lg:justify-start lg:border-b lg:border-normal-100",base:"py-5 tracking-widest before:hidden lg:px-7 lg:pb-3",active:"text-xl font-medium text-normal-950",after:"after:h-1 max-lg:after:hidden",inactive:"text-xl text-normal"}},null,8,["links"]),g(d,{class:"!mt-0 lg:!mt-16"})]),$("div",te,[g(b,{class:"px-2 py-6 lg:px-0 lg:pr-14 lg:pt-0"}),o.$viewport.isGreaterOrEquals("lg")?(t(),m(v,{key:0,class:"-mt-6"})):i("",!0)])])}}});export{me as default};
