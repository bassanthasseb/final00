import{j as e}from"./jsx-runtime.hJzLw87X.js";import{r as t}from"./index.TBYTbSNu.js";import{u as C}from"./use-keydown.xXqo6bcR.js";import{u as F}from"./use-outside-click.ZVJDf3ba.js";import{b as de}from"./http.kuYOMQBZ.js";import{i as G}from"./jwt.29ZsqLlk.js";import{g as pe,u as _,a as A,b as B,i as me}from"./resource-progress.WiwNbDeh.js";import{p as z,s as ue}from"./page.WSJoHwTn.js";import{s as O}from"./popup.xZrd6hzK.js";import{u as Y}from"./use-toast.g_ZHNYU9.js";import{S as K}from"./Spinner.OJ_JJIYt.js";import{C as ge}from"./chevron-down.1Yx0gWkM.js";import{s as xe,m as he}from"./markdown.AEFCR4Nx.js";import{c as fe}from"./classname.FPT-7uOX.js";import{g as be}from"./browser.nocSzYoH.js";import{G as ye,a as we}from"./GoogleIcon.5JPDiU4T.js";import{X as D}from"./x.IGy8lYK3.js";import{F as je,B as ve}from"./file-text.J-62YmSP.js";import"./roadmap.mY9zKeY8.js";import"./index.2T9xAa-2.js";import"./index.rS7vpNfE.js";import"./toast.21LYZN4o.js";import"./createLucideIcon.bqzTQrq-.js";import"./bundle-mjs.jRY21tqg.js";function ke(d){t.useEffect(()=>{function s(i){const{resourceType:l,resourceId:o,topicId:m,isCustomResource:h=!1}=i.detail;d({resourceType:l,resourceId:o,topicId:m,isCustomResource:h})}return window.addEventListener("roadmap.topic.click",s),window.addEventListener("best-practice.topic.click",s),window.addEventListener("roadmap.node.click",s),()=>{window.removeEventListener("roadmap.topic.click",s),window.removeEventListener("best-practice.topic.click",s),window.removeEventListener("roadmap.node.click",s)}},[])}function Ne(d){t.useEffect(()=>{function s(i){const{resourceType:l,resourceId:o,topicId:m}=i.detail;d({resourceType:l,resourceId:o,topicId:m})}return window.addEventListener("roadmap.topic.toggle",s),window.addEventListener("best-practice.topic.toggle",s),()=>{window.removeEventListener("best-practice.topic.toggle",s)}},[])}const T={done:"bg-green-500",learning:"bg-yellow-500",pending:"bg-gray-300",skipped:"bg-black",removed:""};function Se(d){const{topicId:s,resourceId:i,resourceType:l,onClose:o}=d,m=Y(),[h,f]=t.useState(!0),[r,p]=t.useState("pending"),[y,u]=t.useState(!1),w=t.useRef(null);F(w,()=>{u(!1)});const I=t.useMemo(()=>!G(),[]);t.useEffect(()=>{!s||!i||!l||(f(!0),pe({topicId:s,resourceId:i,resourceType:l}).then(g=>{f(!1),p(g)}).catch(console.error))},[s,i,l]),C("d",()=>{if(r==="done"){o();return}a("done")},[r]),C("l",()=>{if(r==="learning"){o();return}a("learning")},[r]),C("s",()=>{if(r==="skipped"){o();return}a("skipped")},[r]),C("r",()=>{if(console.log(r),r==="pending"){o();return}a("pending")},[r]);const a=g=>{if(I){o(),O();return}f(!0),_({topicId:s,resourceId:i,resourceType:l},g).then(()=>{p(g),o(),A(s,g),B()}).catch(k=>{m.error(k.message||"Error updating progress"),console.error(k)}).finally(()=>{f(!1)})},j=["pending","learning","done"].includes(r),E=["skipped","pending","learning"].includes(r),$=["done","skipped","pending"].includes(r),v=["skipped","done","learning"].includes(r);return h?e.jsxs("button",{className:"inline-flex cursor-default items-center rounded-md border border-gray-300 bg-white p-1 px-2 text-sm text-black",children:[e.jsx(K,{className:"h-4 w-4"}),e.jsx("span",{className:"ml-2",children:"Updating Status.."})]}):e.jsxs("div",{className:"relative inline-flex rounded-md border border-gray-300",children:[e.jsxs("span",{className:"inline-flex cursor-default items-center  p-1 px-2 text-sm text-black",children:[e.jsx("span",{className:"flex h-2 w-2",children:e.jsx("span",{className:`relative inline-flex h-2 w-2 rounded-full ${T[r]}`})}),e.jsx("span",{className:"ml-2 capitalize",children:r==="learning"?"In Progress":r})]}),e.jsxs("button",{className:"inline-flex cursor-pointer items-center rounded-br-md rounded-tr-md border-l border-l-gray-300 bg-gray-100 p-1 px-2 text-sm text-black hover:bg-gray-200",onClick:()=>u(!0),children:[e.jsx("span",{className:"mr-0.5",children:"Update Status"}),e.jsx(ge,{className:"h-4 w-4"})]}),y&&e.jsxs("div",{className:"absolute right-0 top-full mt-1 flex min-w-[160px] flex-col divide-y rounded-md border border-gray-200 bg-white shadow-md [&>button:first-child]:rounded-t-md [&>button:last-child]:rounded-b-md",ref:w,children:[E&&e.jsxs("button",{className:"inline-flex justify-between px-3 py-1.5 text-left text-sm text-gray-800 hover:bg-gray-100",onClick:()=>a("done"),children:[e.jsxs("span",{children:[e.jsx("span",{className:`mr-2 inline-block h-2 w-2 rounded-full ${T.done}`}),"Done"]}),e.jsx("span",{className:"text-xs text-gray-500",children:"D"})]}),$&&e.jsxs("button",{className:"inline-flex justify-between px-3 py-1.5 text-left text-sm text-gray-800 hover:bg-gray-100",onClick:()=>a("learning"),children:[e.jsxs("span",{children:[e.jsx("span",{className:`mr-2 inline-block h-2 w-2 rounded-full ${T.learning}`}),"In Progress"]}),e.jsx("span",{className:"text-xs text-gray-500",children:"L"})]}),v&&e.jsxs("button",{className:"inline-flex justify-between px-3 py-1.5 text-left text-sm text-gray-800 hover:bg-gray-100",onClick:()=>a("pending"),children:[e.jsxs("span",{children:[e.jsx("span",{className:`mr-2 inline-block h-2 w-2 rounded-full ${T.pending}`}),"Reset"]}),e.jsx("span",{className:"text-xs text-gray-500",children:"R"})]}),j&&e.jsxs("button",{className:"inline-flex justify-between px-3 py-1.5 text-left text-sm text-gray-800 hover:bg-gray-100",onClick:()=>a("skipped"),children:[e.jsxs("span",{children:[e.jsx("span",{className:`mr-2 inline-block h-2 w-2 rounded-full ${T.skipped}`}),"Skip"]}),e.jsx("span",{className:"text-xs text-gray-500",children:"S"})]})]})]})}function Te(d){const{className:s}=d;return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",className:s,children:e.jsx("path",{d:"M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.488 3.45.029 5.804 0 12c.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0C23.512 20.55 23.971 18.196 24 12c-.029-6.185-.484-8.549-4.385-8.816zM9 16V8l8 3.993L9 16z"})})}const Ce={article:"bg-yellow-200",course:"bg-green-200",opensource:"bg-blue-200",podcast:"bg-purple-200",video:"bg-pink-200",website:"bg-red-200"};function Ze(d){const{canSubmitContribution:s,isEmbed:i=!1,resourceTitle:l}=d,[o,m]=t.useState(!1),[h,f]=t.useState(""),[r,p]=t.useState(!1),[y,u]=t.useState(!1),[w,I]=t.useState(!1),[a,j]=t.useState(""),[E,$]=t.useState(""),[v,g]=t.useState(""),[k,V]=t.useState(""),[P,X]=t.useState([]),J=Y(),{secret:M}=be(),Q=t.useMemo(()=>!G(),[]),U=t.useRef(null),[W,Z]=t.useState(""),[ee,te]=t.useState(""),[se,re]=t.useState("roadmap");if(F(U,()=>{p(!1)}),C("Escape",()=>{p(!1)}),Ne(({topicId:n,resourceType:N,resourceId:x})=>{if(Q){O();return}z.set("Updating"),me({topicId:n,resourceId:x,resourceType:N}).then(c=>_({topicId:n,resourceId:x,resourceType:N},c?"pending":"done")).then(({done:c=[]})=>{A(n,c.includes(n)?"done":"pending"),B()}).catch(c=>{J.error(c.message),console.error(c)}).finally(()=>{z.set("")})}),ke(({topicId:n,resourceType:N,resourceId:x,isCustomResource:c})=>{j(""),u(!0),p(!0),ue.set(!0),Z(n),re(N),te(x);const q=n.replaceAll(":","/");let R=N==="roadmap"?`/${x}/${q}`:`/best-practices/${x}/${q}`;c&&(R=`https://api.roadmap.sh/v1-get-node-content/${x}/${n}${M?`?secret=${M}`:""}`),de(R,{},{...!c&&{headers:{Accept:"text/html"}}}).then(({response:b})=>{if(!b){j("Topic not found."),u(!1);return}let L="";if(c){X(b?.links||[]),g(b?.title||"");const S=xe(b.description||"");L=he(S,!1)}else{L=b;const S=new DOMParser().parseFromString(L,"text/html"),ie=S.querySelectorAll("a"),le=S.querySelector("[data-github-url]")?.dataset?.githubUrl||"",ce=S.querySelector("h1");f(le),m(ie.length>=3),V(ce?.textContent||"")}u(!1),$(L)}).catch(b=>{j("Something went wrong. Please try again later."),u(!1)})}),t.useEffect(()=>{r&&U?.current?.focus()},[r]),!r)return null;const ne=E?.length>0||P?.length>0||v,H=l?.toLowerCase()?.replace(/\s+?roadmap/ig,""),oe=`https://www.google.com/search?q=${k?.toLowerCase()} guide for ${H}`,ae=`https://www.youtube.com/results?search_query=${k?.toLowerCase()} for ${H}`;return e.jsxs("div",{className:"relative z-50",children:[e.jsxs("div",{ref:U,tabIndex:0,className:"fixed right-0 top-0 z-40 h-screen w-full overflow-y-auto bg-white p-4 focus:outline-0 sm:max-w-[600px] sm:p-6",children:[y&&e.jsx("div",{className:"flex w-full justify-center",children:e.jsx(K,{outerFill:"#d1d5db",className:"h-6 w-6 sm:h-12 sm:w-12",innerFill:"#2563eb"})}),!w&&!y&&!a&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mb-2",children:[!i&&e.jsx(Se,{topicId:W,resourceId:ee,resourceType:se,onClose:()=>{p(!1)}}),e.jsx("button",{type:"button",id:"close-topic",className:"absolute right-2.5 top-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900",onClick:()=>{p(!1)},children:e.jsx(D,{className:"h-5 w-5"})})]}),ne?e.jsxs("div",{className:"prose prose-h1:text-balance prose-quoteless prose-h1:mb-2.5 prose-h1:mt-7 prose-h2:mb-3 prose-h2:mt-0 prose-h3:mb-[5px] prose-h3:mt-[10px] prose-p:mb-2 prose-p:mt-0 prose-blockquote:font-normal prose-blockquote:not-italic prose-blockquote:text-gray-700 prose-li:m-0 prose-li:mb-0.5",children:[v&&e.jsx("h1",{children:v}),e.jsx("div",{id:"topic-content",dangerouslySetInnerHTML:{__html:E}})]}):e.jsxs("div",{className:"flex h-[calc(100%-38px)] flex-col items-center justify-center",children:[e.jsx(je,{className:"h-16 w-16 text-gray-300"}),e.jsx("p",{className:"mt-2 text-lg font-medium text-gray-500",children:"Empty Content"})]}),P.length>0&&e.jsx("ul",{className:"mt-6 space-y-1",children:P.map(n=>e.jsx("li",{children:e.jsxs("a",{href:n.url,target:"_blank",className:"font-medium underline",children:[e.jsx("span",{className:fe("mr-2 inline-block rounded px-1.5 py-1 text-xs uppercase no-underline",Ce[n.type]),children:n.type.charAt(0).toUpperCase()+n.type.slice(1)}),n.title]})}))}),s&&!o&&h&&e.jsxs("div",{className:"mt-8 mb-12 flex-1 border-t text-gray-400 text-sm",children:[e.jsxs("div",{className:"mt-3 mb-4",children:[e.jsx("p",{className:"",children:"Can't find what you're looking for? Try these pre-filled search queries:"}),e.jsxs("div",{className:"mt-3 flex gap-2  text-gray-700",children:[e.jsxs("a",{href:oe,target:"_blank",className:"text-xs flex items-center gap-2 rounded-md border border-gray-300 px-3 py-1.5 pl-2 hover:border-gray-700 hover:bg-gray-100",children:[e.jsx(ye,{className:"h-4 w-4"}),"Google"]}),e.jsxs("a",{href:ae,target:"_blank",className:"text-xs flex items-center gap-2 rounded-md border border-gray-300 px-3 py-1.5 pl-2 hover:border-gray-700 hover:bg-gray-100",children:[e.jsx(Te,{className:"h-4 w-4 text-red-500"}),"YouTube"]})]})]}),e.jsx("p",{className:"mb-2 mt-2 leading-relaxed",children:"Help us improve this introduction and submit a link to a good article, podcast, video, or any other self-vetted resource that helped you understand this topic better."}),e.jsxs("a",{href:h,target:"_blank",className:"flex w-full items-center justify-center rounded-md bg-gray-800 p-2 text-sm text-white transition-colors hover:bg-black hover:text-white disabled:bg-green-200 disabled:text-black",children:[e.jsx(we,{className:"mr-2 inline-block h-4 w-4 text-white"}),"Edit this Content"]})]})]}),!w&&!y&&a&&e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",id:"close-topic",className:"absolute right-2.5 top-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900",onClick:()=>{p(!1),I(!1)},children:e.jsx(D,{className:"h-5 w-5"})}),e.jsxs("div",{className:"flex h-full flex-col items-center justify-center",children:[e.jsx(ve,{className:"h-16 w-16 text-red-500"}),e.jsx("p",{className:"mt-2 text-lg font-medium text-red-500",children:a})]})]})]}),e.jsx("div",{className:"fixed inset-0 z-30 bg-gray-900 bg-opacity-50 dark:bg-opacity-80"})]})}export{Ze as TopicDetail};
