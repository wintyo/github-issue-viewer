var U=Object.defineProperty,$=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var D=(e,n,i)=>n in e?U(e,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[n]=i,O=(e,n)=>{for(var i in n||(n={}))R.call(n,i)&&D(e,i,n[i]);if(F)for(var i of F(n))K.call(n,i)&&D(e,i,n[i]);return e},w=(e,n)=>$(e,M(n));import{f as P,d as x,a as Q,r as A,c as C,u as j,o as p,b as k,e as t,w as h,v as N,g as c,F as f,h as q,i as E,p as z,j as J,k as Y,l as W,t as g,m as X,s as Z,I as ee,A as ne,n as te,q as ae,x as ie,y as oe,z as le,D as se}from"./vendor.c2de4c28.js";const re=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const S of u.addedNodes)S.tagName==="LINK"&&S.rel==="modulepreload"&&o(S)}).observe(document,{childList:!0,subtree:!0});function i(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerpolicy&&(u.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?u.credentials="include":a.crossorigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function o(a){if(a.ep)return;a.ep=!0;const u=i(a);fetch(a.href,u)}};re();const ue={formatDate(e,n){const i=e instanceof Date?e:new Date(e);return P(i,n)}};function de(){const e=localStorage.getItem("piniaState");try{return JSON.parse(e||"").github}catch{return{request:{last:5,dateStr:"",fromDataStr:"",toDateStr:""},repository:{owner:"",name:""}}}}const ce=x("github",{state:de,actions:{setRepoOwner(e){this.repository.owner=e},setRepoName(e){this.repository.name=e},setLast(e){this.request.last=e},setDate(e){this.request.dateStr=e},setFromDateStr(e){this.request.fromDataStr=e},setToDateStr(e){this.request.toDateStr=e}}});function me(e){return e!=null}const pe={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"searchIssues"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"searchQuery"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"last"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"search"},arguments:[{kind:"Argument",name:{kind:"Name",value:"query"},value:{kind:"Variable",name:{kind:"Name",value:"searchQuery"}}},{kind:"Argument",name:{kind:"Name",value:"type"},value:{kind:"EnumValue",value:"ISSUE"}},{kind:"Argument",name:{kind:"Name",value:"last"},value:{kind:"Variable",name:{kind:"Name",value:"last"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"edges"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"node"},selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Issue"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"number"}},{kind:"Field",name:{kind:"Name",value:"title"}},{kind:"Field",name:{kind:"Name",value:"url"}},{kind:"Field",name:{kind:"Name",value:"body"}},{kind:"Field",name:{kind:"Name",value:"labels"},arguments:[{kind:"Argument",name:{kind:"Name",value:"last"},value:{kind:"IntValue",value:"10"}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"edges"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"node"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"closed"}},{kind:"Field",name:{kind:"Name",value:"closedAt"}},{kind:"Field",name:{kind:"Name",value:"assignees"},arguments:[{kind:"Argument",name:{kind:"Name",value:"last"},value:{kind:"IntValue",value:"5"}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"edges"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"node"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"login"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"email"}}]}}]}}]}}]}}]}}]}}]}}]}}]};var ke=(e,n)=>{const i=e.__vccOpts||e;for(const[o,a]of n)i[o]=a;return i};const v=e=>(z("data-v-d4ec43bc"),e=e(),J(),e),ve=v(()=>t("h1",null,"Issue Viewer",-1)),Se=v(()=>t("span",null,"GITHUB TOKEN:",-1)),ge=v(()=>t("div",null,"TARGET GITHUB REPOSITORY",-1)),fe={class:"search-area"},he=v(()=>t("div",null,"\u691C\u7D22",-1)),Ne=v(()=>t("span",null,"\u4EF6\u6570:",-1)),ye=["value"],_e=v(()=>t("span",null,"\u671F\u9593:",-1)),be=["value"],Te=v(()=>t("span",null,"\u301C",-1)),Ie=["value"],Fe={key:0},De={key:0,class:"issue-block"},Oe=["href"],we=Q({setup(e){const n=A({githubToken:localStorage.getItem("GITHUB_TOKEN")||""}),i=()=>{localStorage.setItem("GITHUB_TOKEN",n.githubToken)},o=ce(),a=A({repoOwner:o.repository.owner,repoName:o.repository.name}),u=()=>{o.setRepoOwner(a.repoOwner),o.setRepoName(a.repoName)},S=C(()=>{const l=(()=>{const{fromDataStr:d,toDateStr:r}=o.request;if(!d&&!r)return null;const m=d?new Date(d):null,s=r?Y(new Date(r),1):null;return m!=null&&s==null?`closed:>=${m.toISOString()}`:m==null&&s!=null?`closed:<=${s.toISOString()}`:`closed:${m==null?void 0:m.toISOString()}..${s==null?void 0:s.toISOString()}`})();return{searchQuery:[`repo:${o.repository.owner}/${o.repository.name}`,"is:issue","is:closed",l].filter(me).join(" "),last:o.request.last}}),{result:_}=j(pe,S),b=C(()=>{if(_.value==null)return null;const l=W(_.value.search.edges,d=>{const r=d.node.assignees.edges[0];return r?r.node.login:""});return console.log(l),l}),L=l=>{l.currentTarget instanceof HTMLInputElement&&o.setLast(l.currentTarget.valueAsNumber)},V=l=>{l.currentTarget instanceof HTMLInputElement&&o.setFromDateStr(l.currentTarget.value)},B=l=>{l.currentTarget instanceof HTMLInputElement&&o.setToDateStr(l.currentTarget.value)};return(l,d)=>(p(),k("div",null,[ve,t("div",null,[Se,h(t("input",{"onUpdate:modelValue":d[0]||(d[0]=r=>c(n).githubToken=r),type:"password"},null,512),[[N,c(n).githubToken]]),t("button",{onClick:i},"save")]),t("div",null,[ge,h(t("input",{"onUpdate:modelValue":d[1]||(d[1]=r=>c(a).repoOwner=r),placeholder:"Owner"},null,512),[[N,c(a).repoOwner]]),h(t("input",{"onUpdate:modelValue":d[2]||(d[2]=r=>c(a).repoName=r),placeholder:"Name"},null,512),[[N,c(a).repoName]]),t("button",{onClick:u},"save")]),t("div",fe,[he,t("div",null,[Ne,t("input",{value:c(o).request.last,type:"number",onChange:L},null,40,ye)]),t("div",null,[_e,t("input",{value:c(o).request.fromDataStr,type:"date",onChange:V},null,40,be),Te,t("input",{value:c(o).request.toDateStr,type:"date",onChange:B},null,40,Ie)])]),c(b)?(p(),k("div",Fe,[(p(!0),k(f,null,q(c(b),(r,m)=>(p(),k(f,null,[t("h3",null,g(m||"NoBody"),1),t("div",null,[(p(!0),k(f,null,q(r,s=>{var T,I;return p(),k(f,null,[s!=null&&s.node!=null&&s.node.__typename==="Issue"?(p(),k("div",De,[t("a",{href:s.node.url,target:"_blank"},g(s.node.title),9,Oe),t("div",null,[t("span",null,"labels: "+g((I=(T=s.node.labels)==null?void 0:T.edges)==null?void 0:I.map(G=>G.node.name).join(", ")),1)]),t("div",null,"closedAt: "+g(l.$filters.formatDate(s.node.closedAt,"yyyy/MM/dd HH:mm:ss")),1),t("div",null,g(s.node.body),1)])):E("",!0)],64)}),256))])],64))),256))])):E("",!0)]))}});var Ae=ke(we,[["__scopeId","data-v-d4ec43bc"]]);const Ce=localStorage.getItem("GITHUB_TOKEN")||"",qe=X({uri:"https://api.github.com/graphql"}),Ee=Z((e,{headers:n})=>({headers:w(O({},n),{authorization:`Bearer ${Ce}`})})),He=new ee,Le=new ne({link:Ee.concat(qe),cache:He}),y=te({setup(){ae(se,Le)},render:()=>ie(Ae)}),H=oe();y.use(H);y.config.globalProperties.$filters=ue;y.mount("#app");le(H.state,e=>{console.log(e),localStorage.setItem("piniaState",JSON.stringify(e))},{deep:!0});