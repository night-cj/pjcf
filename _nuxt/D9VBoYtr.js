import{at as t,a7 as n,a1 as e}from"./B3PM-gVu.js";const u=t((a,i)=>{if(a.path==="/admin/login")return;const{token:r}=n();if(!r.value)return e("/admin/login",{replace:!0});if(a.path==="/admin")return e("/admin/about/honor",{replace:!0})});export{u as default};
