import{m}from"./marked.esm-DK8KC6kv.js";import{d as p,r as l,w as g,c as a,o as r,_ as v,b,a as e,g as f,t as u}from"./index-CMclMgpj.js";const h=`# 测试标题\r
\r
测试内容\r
\r
\`\`\`javascript\r
console.log('?')\r
\`\`\`\r
\r
> 测试内容\r
`,k=`# 测试标题2\r
\r
测试内容2\r
\r
\`\`\`javascript\r
console.log('？')\r
\`\`\`\r
\r
> 测试内容2\r
`,w=["innerHTML"],x=p({__name:"MarkdownViewer",props:{content:{type:String,required:!0}},setup(c){const t=c,n=l("");return g(()=>t.content,async s=>{n.value=await m.parse(s)},{immediate:!0}),(s,i)=>(r(),a("div",{class:"markdown-content",innerHTML:n.value},null,8,w))}}),y=v(x,[["__scopeId","data-v-56718adc"]]),B={class:"blogs"},V={key:0,class:"blog-container"},M={class:"navigation"},j=["disabled"],C={class:"post-count"},N=["disabled"],P={key:1,class:"no-posts"},I=p({__name:"BlogsView",setup(c){const t=l([]),n=l(0);b(async()=>{const d=Object.assign({"/md_blogs/first-post.md":h,"/md_blogs/second-post.md":k});t.value=Object.entries(d).map(([o,_])=>({title:_.split(`
`)[0].replace("#","").trim(),content:_,filename:o.split("/").pop()||"unknown.md"}))});function s(){n.value<t.value.length-1&&n.value++}function i(){n.value>0&&n.value--}return(d,o)=>(r(),a("main",B,[o[0]||(o[0]=e("h1",null,"Blogs",-1)),t.value.length>0?(r(),a("div",V,[e("div",M,[e("button",{onClick:i,disabled:n.value===0}," Previous ",8,j),e("span",C,u(n.value+1)+" / "+u(t.value.length),1),e("button",{onClick:s,disabled:n.value===t.value.length-1}," Next ",8,N)]),f(y,{content:t.value[n.value].content},null,8,["content"])])):(r(),a("div",P," No blog posts found. "))]))}}),S=v(I,[["__scopeId","data-v-0f004aad"]]);export{S as default};
