import{_ as ce,P as O,K as j,O as D,S as te,T as ra,U as oa,p as F,m as G,j as de,g as U,W as ia,A as J,y as ve,X as ca,Y as z,H as L,o as C,Z as q,$ as da,a0 as va,a1 as Le,a2 as fa,a3 as se,a4 as ne,a5 as Me,C as t,a6 as Z,G as fe,a7 as ma,a8 as Ne,I as W,b as $e,a9 as je,k as K,l as me,n as ge,q as ye,r as Fe,s as Ge,aa as Ue,V as B,E as Q,D as He,ab as ga,ac as De,ad as ya,ae as ha,af as qe,ag as xe,ah as Sa,ai as ba,aj as ka,ak as _a,al as Ca,am as pe,an as Va,e as Ia,ao as xa,ap as pa,aq as za,B as Pa,ar as wa,v as Aa,u as Ta,as as Ra,at as Ba,au as Ea,av as Oa,L as M,Q as le,N as ze,aw as ue,c as he,h as We,M as La,ax as Ma,F as Na,ay as Ke,az as $a,aA as ja}from"./index-BrCn9I6v.js";import{m as Fa,b as Ga,i as Ua,V as Pe,M as ae,c as we,d as Ha,a as Da,e as qa,f as Wa,o as Ka,r as Xa}from"./VTextField-DwH69Ytn.js";const Ya=e=>(ra("data-v-46a3f786"),e=e(),oa(),e),Ja={class:"info-block d-flex justify-center align-center pa-2"},Qa=Ya(()=>D("span",{class:"mr-2"},"使用者暱稱：",-1)),Za={__name:"Info",props:{username:{type:String,required:!0}},setup(e){return(u,a)=>(O(),j("div",Ja,[Qa,D("span",null,te(e.username),1)]))}},et=ce(Za,[["__scopeId","data-v-46a3f786"]]),at=F({alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...Fa(),...G(),...de(),...Ga()},"VImg"),tt=U()({name:"VImg",directives:{intersect:Ua},props:at(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,u){let{emit:a,slots:l}=u;const{backgroundColorClasses:n,backgroundColorStyles:c}=ia(J(e,"color")),{roundedClasses:r}=ve(e),i=ca("VImg"),s=z(""),o=L(),d=z(e.eager?"loading":"idle"),y=z(),V=z(),k=C(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),S=C(()=>k.value.aspect||y.value/V.value||0);q(()=>e.src,()=>{P(d.value!=="idle")}),q(S,(m,b)=>{!m&&b&&o.value&&w(o.value)}),da(()=>P());function P(m){if(!(e.eager&&m)&&!(va&&!m&&!e.eager)){if(d.value="loading",k.value.lazySrc){const b=new Image;b.src=k.value.lazySrc,w(b,null)}k.value.src&&Le(()=>{var b;a("loadstart",((b=o.value)==null?void 0:b.currentSrc)||k.value.src),setTimeout(()=>{var h;if(!i.isUnmounted)if((h=o.value)!=null&&h.complete){if(o.value.naturalWidth||x(),d.value==="error")return;S.value||w(o.value,null),d.value==="loading"&&f()}else S.value||w(o.value),A()})})}}function f(){var m;i.isUnmounted||(A(),w(o.value),d.value="loaded",a("load",((m=o.value)==null?void 0:m.currentSrc)||k.value.src))}function x(){var m;i.isUnmounted||(d.value="error",a("error",((m=o.value)==null?void 0:m.currentSrc)||k.value.src))}function A(){const m=o.value;m&&(s.value=m.currentSrc||m.src)}let I=-1;fa(()=>{clearTimeout(I)});function w(m){let b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const h=()=>{if(clearTimeout(I),i.isUnmounted)return;const{naturalHeight:R,naturalWidth:ee}=m;R||ee?(y.value=ee,V.value=R):!m.complete&&d.value==="loading"&&b!=null?I=window.setTimeout(h,b):(m.currentSrc.endsWith(".svg")||m.currentSrc.startsWith("data:image/svg+xml"))&&(y.value=1,V.value=1)};h()}const N=C(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),X=()=>{var h;if(!k.value.src||d.value==="idle")return null;const m=t("img",{class:["v-img__img",N.value],style:{objectPosition:e.position},src:k.value.src,srcset:k.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:o,onLoad:f,onError:x},null),b=(h=l.sources)==null?void 0:h.call(l);return t(ae,{transition:e.transition,appear:!0},{default:()=>[ne(b?t("picture",{class:"v-img__picture"},[b,m]):m,[[Ne,d.value==="loaded"]])]})},_=()=>t(ae,{transition:e.transition},{default:()=>[k.value.lazySrc&&d.value!=="loaded"&&t("img",{class:["v-img__img","v-img__img--preload",N.value],style:{objectPosition:e.position},src:k.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),T=()=>l.placeholder?t(ae,{transition:e.transition,appear:!0},{default:()=>[(d.value==="loading"||d.value==="error"&&!l.error)&&t("div",{class:"v-img__placeholder"},[l.placeholder()])]}):null,E=()=>l.error?t(ae,{transition:e.transition,appear:!0},{default:()=>[d.value==="error"&&t("div",{class:"v-img__error"},[l.error()])]}):null,Y=()=>e.gradient?t("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,$=z(!1);{const m=q(S,b=>{b&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{$.value=!0})}),m())})}return se(()=>{const m=Pe.filterProps(e);return ne(t(Pe,fe({class:["v-img",{"v-img--booting":!$.value},n.value,r.value,e.class],style:[{width:ma(e.width==="auto"?y.value:e.width)},c.value,e.style]},m,{aspectRatio:S.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>t(Z,null,[t(X,null,null),t(_,null,null),t(Y,null,null),t(T,null,null),t(E,null,null)]),default:l.default}),[[Me("intersect"),{handler:P,options:e.options},null,{once:!0}]])}),{currentSrc:s,image:o,state:d,naturalWidth:y,naturalHeight:V}}}),lt=F({start:Boolean,end:Boolean,icon:W,image:String,text:String,...G(),...$e(),...de(),...je(),...K(),...me(),...ge({variant:"flat"})},"VAvatar"),ie=U()({name:"VAvatar",props:lt(),setup(e,u){let{slots:a}=u;const{themeClasses:l}=ye(e),{colorClasses:n,colorStyles:c,variantClasses:r}=Fe(e),{densityClasses:i}=Ge(e),{roundedClasses:s}=ve(e),{sizeClasses:o,sizeStyles:d}=Ue(e);return se(()=>t(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},l.value,n.value,i.value,s.value,o.value,r.value,e.class],style:[c.value,d.value,e.style]},{default:()=>[a.default?t(Q,{key:"content-defaults",defaults:{VImg:{cover:!0,image:e.image},VIcon:{icon:e.icon}}},{default:()=>[a.default()]}):e.image?t(tt,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?t(B,{key:"icon",icon:e.icon},null):e.text,He(!1,"v-avatar")]})),{}}});function Ae(e){const a=Math.abs(e);return Math.sign(e)*(a/((1/.501-2)*(1-a)+1))}function Te(e){let{selectedElement:u,containerSize:a,contentSize:l,isRtl:n,currentScrollOffset:c,isHorizontal:r}=e;const i=r?u.clientWidth:u.clientHeight,s=r?u.offsetLeft:u.offsetTop,o=n&&r?l-s-i:s,d=a+c,y=i+o,V=i*.4;return o<=c?c=Math.max(o-V,0):d<=y&&(c=Math.min(c-(d-y-V),l-a)),c}function nt(e){let{selectedElement:u,containerSize:a,contentSize:l,isRtl:n,isHorizontal:c}=e;const r=c?u.clientWidth:u.clientHeight,i=c?u.offsetLeft:u.offsetTop,s=n&&c?l-i-r/2-a/2:i+r/2-a/2;return Math.min(l-a,Math.max(0,s))}const st=Symbol.for("vuetify:v-slide-group"),Xe=F({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:st},nextIcon:{type:W,default:"$next"},prevIcon:{type:W,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},...G(),...ga(),...K(),...De({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),Re=U()({name:"VSlideGroup",props:Xe(),emits:{"update:modelValue":e=>!0},setup(e,u){let{slots:a}=u;const{isRtl:l}=ya(),{displayClasses:n,mobile:c}=ha(e),r=qe(e,e.symbol),i=z(!1),s=z(0),o=z(0),d=z(0),y=C(()=>e.direction==="horizontal"),{resizeRef:V,contentRect:k}=xe(),{resizeRef:S,contentRect:P}=xe(),f=C(()=>r.selected.value.length?r.items.value.findIndex(v=>v.id===r.selected.value[0]):-1),x=C(()=>r.selected.value.length?r.items.value.findIndex(v=>v.id===r.selected.value[r.selected.value.length-1]):-1);if(Sa){let v=-1;q(()=>[r.selected.value,k.value,P.value,y.value],()=>{cancelAnimationFrame(v),v=requestAnimationFrame(()=>{if(k.value&&P.value){const g=y.value?"width":"height";o.value=k.value[g],d.value=P.value[g],i.value=o.value+1<d.value}if(f.value>=0&&S.value){const g=S.value.children[x.value];f.value===0||!i.value?s.value=0:e.centerActive?s.value=nt({selectedElement:g,containerSize:o.value,contentSize:d.value,isRtl:l.value,isHorizontal:y.value}):i.value&&(s.value=Te({selectedElement:g,containerSize:o.value,contentSize:d.value,isRtl:l.value,currentScrollOffset:s.value,isHorizontal:y.value}))}})})}const A=z(!1);let I=0,w=0;function N(v){const g=y.value?"clientX":"clientY";w=(l.value&&y.value?-1:1)*s.value,I=v.touches[0][g],A.value=!0}function X(v){if(!i.value)return;const g=y.value?"clientX":"clientY",p=l.value&&y.value?-1:1;s.value=p*(w+I-v.touches[0][g])}function _(v){const g=d.value-o.value;s.value<0||!i.value?s.value=0:s.value>=g&&(s.value=g),A.value=!1}function T(){V.value&&(V.value[y.value?"scrollLeft":"scrollTop"]=0)}const E=z(!1);function Y(v){if(E.value=!0,!(!i.value||!S.value)){for(const g of v.composedPath())for(const p of S.value.children)if(p===g){s.value=Te({selectedElement:p,containerSize:o.value,contentSize:d.value,isRtl:l.value,currentScrollOffset:s.value,isHorizontal:y.value});return}}}function $(v){E.value=!1}function m(v){var g;!E.value&&!(v.relatedTarget&&((g=S.value)!=null&&g.contains(v.relatedTarget)))&&h()}function b(v){S.value&&(y.value?v.key==="ArrowRight"?h(l.value?"prev":"next"):v.key==="ArrowLeft"&&h(l.value?"next":"prev"):v.key==="ArrowDown"?h("next"):v.key==="ArrowUp"&&h("prev"),v.key==="Home"?h("first"):v.key==="End"&&h("last"))}function h(v){var g,p,Ce,Ve,Ie;if(S.value)if(!v)(g=ba(S.value)[0])==null||g.focus();else if(v==="next"){const H=(p=S.value.querySelector(":focus"))==null?void 0:p.nextElementSibling;H?H.focus():h("first")}else if(v==="prev"){const H=(Ce=S.value.querySelector(":focus"))==null?void 0:Ce.previousElementSibling;H?H.focus():h("last")}else v==="first"?(Ve=S.value.firstElementChild)==null||Ve.focus():v==="last"&&((Ie=S.value.lastElementChild)==null||Ie.focus())}function R(v){const g=s.value+(v==="prev"?-1:1)*o.value;s.value=ka(g,0,d.value-o.value)}const ee=C(()=>{let v=s.value>d.value-o.value?-(d.value-o.value)+Ae(d.value-o.value-s.value):-s.value;s.value<=0&&(v=Ae(-s.value));const g=l.value&&y.value?-1:1;return{transform:`translate${y.value?"X":"Y"}(${g*v}px)`,transition:A.value?"none":"",willChange:A.value?"transform":""}}),re=C(()=>({next:r.next,prev:r.prev,select:r.select,isSelected:r.isSelected})),oe=C(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!c.value;case!0:return i.value||Math.abs(s.value)>0;case"mobile":return c.value||i.value||Math.abs(s.value)>0;default:return!c.value&&(i.value||Math.abs(s.value)>0)}}),ke=C(()=>Math.abs(s.value)>0),_e=C(()=>d.value>Math.abs(s.value)+o.value);return se(()=>t(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!y.value,"v-slide-group--has-affixes":oe.value,"v-slide-group--is-overflowing":i.value},n.value,e.class],style:e.style,tabindex:E.value||r.selected.value.length?-1:0,onFocus:m},{default:()=>{var v,g,p;return[oe.value&&t("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!ke.value}],onClick:()=>ke.value&&R("prev")},[((v=a.prev)==null?void 0:v.call(a,re.value))??t(we,null,{default:()=>[t(B,{icon:l.value?e.nextIcon:e.prevIcon},null)]})]),t("div",{key:"container",ref:V,class:"v-slide-group__container",onScroll:T},[t("div",{ref:S,class:"v-slide-group__content",style:ee.value,onTouchstartPassive:N,onTouchmovePassive:X,onTouchendPassive:_,onFocusin:Y,onFocusout:$,onKeydown:b},[(g=a.default)==null?void 0:g.call(a,re.value)])]),oe.value&&t("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!_e.value}],onClick:()=>_e.value&&R("next")},[((p=a.next)==null?void 0:p.call(a,re.value))??t(we,null,{default:()=>[t(B,{icon:l.value?e.prevIcon:e.nextIcon},null)]})])]}})),{selected:r.selected,scrollTo:R,scrollOffset:s,focus:h}}}),Ye=Symbol.for("vuetify:v-chip-group"),ut=F({column:Boolean,filter:Boolean,valueComparator:{type:Function,default:_a},...Xe(),...G(),...De({selectedClass:"v-chip--selected"}),...K(),...me(),...ge({variant:"tonal"})},"VChipGroup");U()({name:"VChipGroup",props:ut(),emits:{"update:modelValue":e=>!0},setup(e,u){let{slots:a}=u;const{themeClasses:l}=ye(e),{isSelected:n,select:c,next:r,prev:i,selected:s}=qe(e,Ye);return Ca({VChip:{color:J(e,"color"),disabled:J(e,"disabled"),filter:J(e,"filter"),variant:J(e,"variant")}}),se(()=>{const o=Re.filterProps(e);return t(Re,fe(o,{class:["v-chip-group",{"v-chip-group--column":e.column},l.value,e.class],style:e.style}),{default:()=>{var d;return[(d=a.default)==null?void 0:d.call(a,{isSelected:n,select:c,next:r,prev:i,selected:s.value})]}})}),{}}});const rt=F({activeClass:String,appendAvatar:String,appendIcon:W,closable:Boolean,closeIcon:{type:W,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:W,ripple:{type:[Boolean,Object],default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:pe(),onClickOnce:pe(),...Va(),...G(),...$e(),...Ia(),...xa(),...de(),...pa(),...je(),...K({tag:"span"}),...me(),...ge({variant:"tonal"})},"VChip"),Be=U()({name:"VChip",directives:{Ripple:za},props:rt(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,u){let{attrs:a,emit:l,slots:n}=u;const{t:c}=Pa(),{borderClasses:r}=wa(e),{colorClasses:i,colorStyles:s,variantClasses:o}=Fe(e),{densityClasses:d}=Ge(e),{elevationClasses:y}=Aa(e),{roundedClasses:V}=ve(e),{sizeClasses:k}=Ue(e),{themeClasses:S}=ye(e),P=Ta(e,"modelValue"),f=Ra(e,Ye,!1),x=Ba(e,a),A=C(()=>e.link!==!1&&x.isLink.value),I=C(()=>!e.disabled&&e.link!==!1&&(!!f||e.link||x.isClickable.value)),w=C(()=>({"aria-label":c(e.closeLabel),onClick(_){_.stopPropagation(),P.value=!1,l("click:close",_)}}));function N(_){var T;l("click",_),I.value&&((T=x.navigate)==null||T.call(x,_),f==null||f.toggle())}function X(_){(_.key==="Enter"||_.key===" ")&&(_.preventDefault(),N(_))}return()=>{const _=x.isLink.value?"a":e.tag,T=!!(e.appendIcon||e.appendAvatar),E=!!(T||n.append),Y=!!(n.close||e.closable),$=!!(n.filter||e.filter)&&f,m=!!(e.prependIcon||e.prependAvatar),b=!!(m||n.prepend),h=!f||f.isSelected.value;return P.value&&ne(t(_,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":I.value,"v-chip--filter":$,"v-chip--pill":e.pill},S.value,r.value,h?i.value:void 0,d.value,y.value,V.value,k.value,o.value,f==null?void 0:f.selectedClass.value,e.class],style:[h?s.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,href:x.href.value,tabindex:I.value?0:void 0,onClick:N,onKeydown:I.value&&!A.value&&X},{default:()=>{var R;return[He(I.value,"v-chip"),$&&t(Ha,{key:"filter"},{default:()=>[ne(t("div",{class:"v-chip__filter"},[n.filter?t(Q,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},n.filter):t(B,{key:"filter-icon",icon:e.filterIcon},null)]),[[Ne,f.isSelected.value]])]}),b&&t("div",{key:"prepend",class:"v-chip__prepend"},[n.prepend?t(Q,{key:"prepend-defaults",disabled:!m,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},n.prepend):t(Z,null,[e.prependIcon&&t(B,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&t(ie,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),t("div",{class:"v-chip__content","data-no-activator":""},[((R=n.default)==null?void 0:R.call(n,{isSelected:f==null?void 0:f.isSelected.value,selectedClass:f==null?void 0:f.selectedClass.value,select:f==null?void 0:f.select,toggle:f==null?void 0:f.toggle,value:f==null?void 0:f.value.value,disabled:e.disabled}))??e.text]),E&&t("div",{key:"append",class:"v-chip__append"},[n.append?t(Q,{key:"append-defaults",disabled:!T,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},n.append):t(Z,null,[e.appendIcon&&t(B,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&t(ie,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),Y&&t("button",fe({key:"close",class:"v-chip__close",type:"button"},w.value),[n.close?t(Q,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},n.close):t(B,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[Me("ripple"),I.value&&e.ripple,null]])}}}),ot={class:"message-container mb-3",align:"end"},it={key:0,class:"mx-3 rounded msg-border-user"},ct={key:1,class:"d-flex mx-2"},dt={class:"d-flex flex-column align-center"},vt={class:"mx-3 rounded msg-border-service"},ft={__name:"MessageContainer",props:{messages:{type:Array,required:!0},username:{type:String,required:!0}},setup(e){const u=L(),a=e;q(a.messages,()=>{l()}),q(a.username,n=>{console.log("WATCH: ",n)});const l=()=>{Le(()=>{u.value.scrollTo({top:u.value.offsetHeight})})};return(n,c)=>(O(),j("div",ot,[D("div",{class:"message-block my-3",ref_key:"messageContainer",ref:u},[(O(!0),j(Z,null,Ea(e.messages,r=>(O(),j("div",{class:Oa(["d-flex flex-row align-center my-2",r.username===e.username?"justify-end":null]),key:r.key},[r.username===e.username?(O(),j("span",it,[t(Be,null,{default:M(()=>[le(te(r.message),1)]),_:2},1024)])):ze("",!0),r.username!==e.username?(O(),j("div",ct,[D("div",dt,[t(ie,{class:"rounded-circle avatar-border",size:"36"},{default:M(()=>[t(B,{class:"face-agent-icon"},{default:M(()=>[le("mdi-emoticon-cool-outline")]),_:1})]),_:1}),D("span",null,te(r.username),1)]),D("span",vt,[t(Be,{color:"secondary"},{default:M(()=>[le(te(r.message),1)]),_:2},1024)])])):ze("",!0)],2))),128))],512)]))}},mt=ce(ft,[["__scopeId","data-v-c4ef4903"]]),Je=ue.reduce((e,u)=>(e[u]={type:[Boolean,String,Number],default:!1},e),{}),Qe=ue.reduce((e,u)=>{const a="offset"+he(u);return e[a]={type:[String,Number],default:null},e},{}),Ze=ue.reduce((e,u)=>{const a="order"+he(u);return e[a]={type:[String,Number],default:null},e},{}),Ee={col:Object.keys(Je),offset:Object.keys(Qe),order:Object.keys(Ze)};function gt(e,u,a){let l=e;if(!(a==null||a===!1)){if(u){const n=u.replace(e,"");l+=`-${n}`}return e==="col"&&(l="v-"+l),e==="col"&&(a===""||a===!0)||(l+=`-${a}`),l.toLowerCase()}}const yt=["auto","start","end","center","baseline","stretch"],ht=F({cols:{type:[Boolean,String,Number],default:!1},...Je,offset:{type:[String,Number],default:null},...Qe,order:{type:[String,Number],default:null},...Ze,alignSelf:{type:String,default:null,validator:e=>yt.includes(e)},...G(),...K()},"VCol"),St=U()({name:"VCol",props:ht(),setup(e,u){let{slots:a}=u;const l=C(()=>{const n=[];let c;for(c in Ee)Ee[c].forEach(i=>{const s=e[i],o=gt(c,i,s);o&&n.push(o)});const r=n.some(i=>i.startsWith("v-col-"));return n.push({"v-col":!r||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),n});return()=>{var n;return We(e.tag,{class:[l.value,e.class],style:e.style},(n=a.default)==null?void 0:n.call(a))}}}),Se=["start","end","center"],ea=["space-between","space-around","space-evenly"];function be(e,u){return ue.reduce((a,l)=>{const n=e+he(l);return a[n]=u(),a},{})}const bt=[...Se,"baseline","stretch"],aa=e=>bt.includes(e),ta=be("align",()=>({type:String,default:null,validator:aa})),kt=[...Se,...ea],la=e=>kt.includes(e),na=be("justify",()=>({type:String,default:null,validator:la})),_t=[...Se,...ea,"stretch"],sa=e=>_t.includes(e),ua=be("alignContent",()=>({type:String,default:null,validator:sa})),Oe={align:Object.keys(ta),justify:Object.keys(na),alignContent:Object.keys(ua)},Ct={align:"align",justify:"justify",alignContent:"align-content"};function Vt(e,u,a){let l=Ct[e];if(a!=null){if(u){const n=u.replace(e,"");l+=`-${n}`}return l+=`-${a}`,l.toLowerCase()}}const It=F({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:aa},...ta,justify:{type:String,default:null,validator:la},...na,alignContent:{type:String,default:null,validator:sa},...ua,...G(),...K()},"VRow"),xt=U()({name:"VRow",props:It(),setup(e,u){let{slots:a}=u;const l=C(()=>{const n=[];let c;for(c in Oe)Oe[c].forEach(r=>{const i=e[r],s=Vt(c,r,i);s&&n.push(s)});return n.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),n});return()=>{var n;return We(e.tag,{class:["v-row",l.value,e.class],style:e.style},(n=a.default)==null?void 0:n.call(a))}}}),pt={__name:"MessageInput",props:{username:{type:String,required:!0}},setup(e){const u=L(),a=L(""),l=L(!1);let n=L(!0);const c=e,r=()=>{try{n.value=!1,qa(c.username,a.value),setTimeout(()=>{n.value=!0},1e3),a.value=""}catch(s){console.log("error: ",s)}i()},i=()=>{var s;(s=u.value)==null||s.focus()};return(s,o)=>(O(),La(xt,{class:"px-2 pb-2 send-message-block","no-gutters":"",align:"center"},{default:M(()=>[t(St,{class:"d-flex align-center"},{default:M(()=>[t(Da,{ref_key:"messageInput",ref:u,modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=d=>a.value=d),outlined:"","hide-details":"",dense:"",placeholder:"請輸入訊息",variant:"outlined",onKeyup:o[1]||(o[1]=Ma(d=>r(),["enter"]))},null,8,["modelValue"]),t(Na,{class:"ml-2 mr-0 elevation-0",fab:"",dark:"","x-small":"",color:a.value===""?"gray":"primary",loading:l.value,disabled:a.value===""||!Ke(n),onClick:o[2]||(o[2]=d=>r())},{default:M(()=>[t(B,null,{default:M(()=>[le("mdi-send")]),_:1})]),_:1},8,["color","loading","disabled"])]),_:1})]),_:1}))}},zt=ce(pt,[["__scopeId","data-v-d32f8107"]]),At={__name:"Chat",setup(e){let u=0,a=L([]);const l=L(""),n=ja();return $a(()=>{l.value=n.query.username,u=Wa().unix(),Ka(Xa,c=>{if(c.exists()){let r=1;c.forEach(i=>{c.size===r&&i.key!==null&&Number(i.key)>=u&&a.value.push(i.val()),r++})}else a.value=[]},c=>{console.log(c)})}),(c,r)=>(O(),j(Z,null,[t(et,{username:l.value},null,8,["username"]),t(mt,{messages:Ke(a),username:l.value},null,8,["messages","username"]),t(zt,{username:l.value},null,8,["username"])],64))}};export{At as default};