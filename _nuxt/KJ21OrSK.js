import{d as f}from"./BZ63tDAu.js";import{s as m,r as h,j as d}from"./B3PM-gVu.js";const x=(a,n,I=!0)=>{const i=m("form-events",void 0),e=m("form-group",void 0),t=m("form-inputs",void 0);e&&(!I||a.legend?e.inputId.value=void 0:a!=null&&a.id&&(e.inputId.value=a==null?void 0:a.id),t&&(t.value[e.name.value]=e.inputId.value));const z=h(!1);function c(l,v){i&&i.emit({type:l,path:v})}function F(){c("blur",e==null?void 0:e.name.value),z.value=!0}function g(){c("change",e==null?void 0:e.name.value)}const b=f(()=>{(z.value||e!=null&&e.eagerValidation.value)&&c("input",e==null?void 0:e.name.value)},300);return{inputId:d(()=>(a==null?void 0:a.id)??(e==null?void 0:e.inputId.value)),name:d(()=>(a==null?void 0:a.name)??(e==null?void 0:e.name.value)),size:d(()=>{var v;const l=n.size[e==null?void 0:e.size.value]?e==null?void 0:e.size.value:null;return(a==null?void 0:a.size)??l??((v=n.default)==null?void 0:v.size)}),color:d(()=>{var l;return(l=e==null?void 0:e.error)!=null&&l.value?"red":a==null?void 0:a.color}),emitFormBlur:F,emitFormInput:b,emitFormChange:g}};export{x as u};