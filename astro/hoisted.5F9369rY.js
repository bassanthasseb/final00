import"./hoisted.qDnz6oth.js";import"./hoisted.xGUHk6_V.js";import"./navigation.MRQ7dh1c.js";import"./index.es.3QVITkr_.js";import"./jwt.29ZsqLlk.js";import"./resource-progress.WiwNbDeh.js";import"./http.kuYOMQBZ.js";import"./roadmap.mY9zKeY8.js";import"./index.2T9xAa-2.js";import"./index.rS7vpNfE.js";import"./page.WSJoHwTn.js";import"./popup.xZrd6hzK.js";import"./dom.PQSz9BVV.js";import"./browser.nocSzYoH.js";document.querySelectorAll("[faq-question]").forEach(o=>{o.addEventListener("click",()=>{document.querySelectorAll("[faq-answer]").forEach(e=>{e.classList.add("hidden")});const i=o.nextElementSibling;i&&i.classList.remove("hidden")})});class r{constructor(){this.topicSearchId="search-topic-input",this.onDOMLoaded=this.onDOMLoaded.bind(this),this.init=this.init.bind(this),this.filterTopicNodes=this.filterTopicNodes.bind(this)}get topicSearchEl(){return document.getElementById(this.topicSearchId)}filterTopicNodes(i){const e=i.target.value.trim().toLowerCase();if(!e){document.querySelectorAll("[data-topic]").forEach(t=>t.classList.remove("hidden"));return}document.querySelectorAll("[data-topic]").forEach(t=>t.classList.add("hidden")),document.querySelectorAll(`[data-topic*="${e}"]`).forEach(t=>t.classList.remove("hidden"))}onDOMLoaded(){this.topicSearchEl&&this.topicSearchEl.addEventListener("keyup",this.filterTopicNodes)}init(){window.addEventListener("DOMContentLoaded",this.onDOMLoaded)}}const c=new r;c.init();