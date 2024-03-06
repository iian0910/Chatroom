import{m as F,a as j,b as q,c as O,d as U,e as M,f as G,u as H,g as J,h as K,i as Q,j as W,k as X,l as Y,n as Z,o as ee,V as te,p as x,q as p,r as V,s as ae,t as le,w as _,v as se}from"./VTextField-DpmOWKKb.js";import{g as P,c as ne,a as oe,m as S,h as re,p as ie,I as ue,b as ce,d as de,u as ve,e as f,f as me,t as fe,i as ye,j as a,k as ke,r as y,l as be,w as v,n as ge,o as xe,q as Ve,s as C,v as h,x as _e}from"./index-CmT_3dTZ.js";import"./_commonjsHelpers-Cpj98o6Y.js";function Ce(e){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",o=arguments.length>2?arguments[2]:void 0;return P()({name:o??ne(oe(e.replace(/__/g,"-"))),props:{tag:{type:String,default:u},...S()},setup(t,r){let{slots:l}=r;return()=>{var s;return re(t.tag,{class:[e,t.class],style:t.style},(s=l.default)==null?void 0:s.call(l))}}})}const he=Ce("v-alert-title"),pe=["success","info","warning","error"],Pe=ie({border:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:ue,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>pe.includes(e)},...S(),...F(),...j(),...q(),...O(),...U(),...M(),...ce(),...de(),...G({variant:"flat"})},"VAlert"),Se=P()({name:"VAlert",props:Pe(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0},setup(e,u){let{emit:o,slots:t}=u;const r=ve(e,"modelValue"),l=f(()=>{if(e.icon!==!1)return e.type?e.icon??`$${e.type}`:e.icon}),s=f(()=>({color:e.color??e.type,variant:e.variant})),{themeClasses:n}=me(e),{colorClasses:i,colorStyles:d,variantClasses:w}=H(s),{densityClasses:B}=J(e),{dimensionStyles:L}=K(e),{elevationClasses:T}=Q(e),{locationStyles:I}=W(e),{positionClasses:z}=X(e),{roundedClasses:A}=Y(e),{textColorClasses:R,textColorStyles:$}=Z(fe(e,"borderColor")),{t:D}=ye(),k=f(()=>({"aria-label":D(e.closeLabel),onClick(m){r.value=!1,o("click:close",m)}}));return()=>{const m=!!(t.prepend||l.value),N=!!(t.title||e.title),E=!!(t.close||e.closable);return r.value&&a(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${e.border===!0?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},n.value,i.value,B.value,T.value,z.value,A.value,w.value,e.class],style:[d.value,L.value,I.value,e.style],role:"alert"},{default:()=>{var b,g;return[ee(!1,"v-alert"),e.border&&a("div",{key:"border",class:["v-alert__border",R.value],style:$.value},null),m&&a("div",{key:"prepend",class:"v-alert__prepend"},[t.prepend?a(x,{key:"prepend-defaults",disabled:!l.value,defaults:{VIcon:{density:e.density,icon:l.value,size:e.prominent?44:28}}},t.prepend):a(te,{key:"prepend-icon",density:e.density,icon:l.value,size:e.prominent?44:28},null)]),a("div",{class:"v-alert__content"},[N&&a(he,{key:"title"},{default:()=>{var c;return[((c=t.title)==null?void 0:c.call(t))??e.title]}}),((b=t.text)==null?void 0:b.call(t))??e.text,(g=t.default)==null?void 0:g.call(t)]),t.append&&a("div",{key:"append",class:"v-alert__append"},[t.append()]),E&&a("div",{key:"close",class:"v-alert__close"},[t.close?a(x,{key:"close-defaults",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var c;return[(c=t.close)==null?void 0:c.call(t,{props:k.value})]}}):a(p,ke({key:"close-btn",icon:e.closeIcon,size:"x-small",variant:"text"},k.value),null)])]}})}}}),we={class:"login-block"},Be=Ve("div",{class:"text-center mt-8"},"請輸入暱稱：",-1),ze={__name:"Login",setup(e){const u=_e(),o=y(""),t=y([]),r=y(!1),l=async s=>{le(se,n=>{if(n.exists())n.forEach(i=>{if(i.val()===s)r.value=!0;else{r.value=!1;const d=n.val();d.push(s),t.value=d,_(t.value)}});else{const i=[];i.push(s),t.value=i,_(t.value)}s!==""&&!r.value&&u.push({path:"/Chatroom/Chat",query:{username:o.value}})},{onlyOnce:!0})};return(s,n)=>(C(),be("div",we,[Be,a(V,{class:"mx-auto my-8","max-width":"300px",width:"300px"},{default:v(()=>[a(ae,{density:"comfortable",variant:"outlined","hide-details":"auto",modelValue:o.value,"onUpdate:modelValue":n[0]||(n[0]=i=>o.value=i),modelModifiers:{trim:!0},placeholder:"請輸入使用者暱稱"},null,8,["modelValue"])]),_:1}),a(V,{class:"mx-auto my-8","max-width":"300px",width:"300px"},{default:v(()=>[a(p,{color:"info",block:"",fab:"",disabled:o.value==="",onClick:n[1]||(n[1]=i=>l(o.value))},{default:v(()=>[h(" 開始聊天 ")]),_:1},8,["disabled"])]),_:1}),r.value?(C(),ge(Se,{key:0,color:"#C51162",icon:"mdi mdi-content-duplicate",theme:"dark",border:""},{default:v(()=>[h(" 使用者暱稱重複! ")]),_:1})):xe("",!0)]))}};export{ze as default};
