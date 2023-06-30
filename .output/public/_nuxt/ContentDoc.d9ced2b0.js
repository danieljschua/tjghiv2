import{f as h,g as a,h as d,n as C,u as w,i as v,j as D,k as x,l as S,m as r}from"./entry.495e9e24.js";import _ from"./ContentRenderer.f27978fb.js";import k from"./ContentQuery.d1ae2cd5.js";import"./ContentRendererMarkdown.4ceb1d62.js";import"./index.a6ef77ff.js";import"./preview.588b68c8.js";import"./query.48628e27.js";import"./utils.67e1c107.js";const y=(u,e=d())=>{const f=h(u),p=v();a(()=>h(u),(t=f)=>{if(!e.path||!t)return;const n=Object.assign({},(t==null?void 0:t.head)||{});n.meta=[...n.meta||[]],n.link=[...n.link||[]];const c=n.title||(t==null?void 0:t.title);c&&(n.title=c),p.public.content.host;const s=(n==null?void 0:n.description)||(t==null?void 0:t.description);s&&n.meta.filter(i=>i.name==="description").length===0&&n.meta.push({name:"description",content:s}),n!=null&&n.image||(t==null||t.image),C(()=>w(n))},{immediate:!0})},q=D({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:!0}},render(u){const e=x(),{tag:f,excerpt:p,path:m,query:t,head:n}=u,c={...t||{},path:m||(t==null?void 0:t.path)||S(d().path),find:"one"},s=(i,o)=>r("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:i,data:o},null,2));return r(k,c,{default:e!=null&&e.default?({data:i,refresh:o,isPartial:g})=>{var l;return n&&y(i),(l=e.default)==null?void 0:l.call(e,{doc:i,refresh:o,isPartial:g,excerpt:p,...this.$attrs})}:({data:i})=>(n&&y(i),r(_,{value:i,excerpt:p,tag:f,...this.$attrs},{empty:o=>e!=null&&e.empty?e.empty(o):s("default",i)})),empty:i=>{var o;return((o=e==null?void 0:e.empty)==null?void 0:o.call(e,i))||r("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":i=>{var o;return((o=e==null?void 0:e["not-found"])==null?void 0:o.call(e,i))||r("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}}),T=q;export{T as default};