import{m as b}from"./marked.esm-DK8KC6kv.js";import{d as _,r as d,w as f,c,o,a,_ as u,b as k,F as v,e as h,f as y}from"./index-MVSkaSem.js";const j="/assets/embrace%20the%20darkness-DRrdmPpp.jpg",S=Object.freeze(Object.defineProperty({__proto__:null,default:j},Symbol.toStringTag,{value:"Module"})),I="/assets/takino%20and%20black-DvNQdg0y.jpg",O=Object.freeze(Object.defineProperty({__proto__:null,default:I},Symbol.toStringTag,{value:"Module"})),w="来德国之后画的第一张画。",B="之前画的头像。",D={class:"illustration-container"},M={class:"image-container"},$=["src","alt"],x=["innerHTML"],P=_({__name:"IllustrationDisplay",props:{imageSrc:{type:String,required:!0},description:{type:String,required:!0}},setup(n){const i=n,e=d("");return f(()=>i.description,async t=>{e.value=await b.parse(t)},{immediate:!0}),(t,s)=>(o(),c("div",D,[a("div",M,[a("img",{src:n.imageSrc,alt:n.description,class:"illustration-image"},null,8,$)]),a("div",{class:"description markdown-content",innerHTML:e.value},null,8,x)]))}}),T=u(P,[["__scopeId","data-v-00f36aa2"]]),F={class:"illustration"},L={class:"illustrations-list"},N=_({__name:"IllustrationView",setup(n){const i=d([]);return k(async()=>{const e=Object.assign({"/illustrations/embrace the darkness.jpg":S,"/illustrations/takino and black.jpg":O});i.value=Object.entries(e).map(([t,s])=>{const r=t.split("/").slice(0,-1).join("/"),p=t.split("/").slice(-1)[0].split(".")[0],m=`${r}/${p}.md`,l=s.default;try{const g=Object.assign({"/illustrations/embrace the darkness.md":w,"/illustrations/takino and black.md":B})[m];return{imageSrc:l,description:g}}catch{return{imageSrc:l,description:""}}})}),(e,t)=>(o(),c("main",F,[t[0]||(t[0]=a("h1",null,"Illustration",-1)),a("div",L,[(o(!0),c(v,null,h(i.value,(s,r)=>(o(),y(T,{key:r,imageSrc:s.imageSrc,description:s.description},null,8,["imageSrc","description"]))),128))])]))}}),z=u(N,[["__scopeId","data-v-f02c0374"]]);export{z as default};
