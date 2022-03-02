var $=Object.defineProperty,F=Object.defineProperties;var G=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var O=(e,t,r)=>t in e?$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,w=(e,t)=>{for(var r in t||(t={}))U.call(t,r)&&O(e,r,t[r]);if(D)for(var r of D(t))M.call(t,r)&&O(e,r,t[r]);return e},N=(e,t)=>F(e,G(t));import{f as R,d as K,a as P,r as k,c as C,u as V,g as x,o as m,b as h,e as o,w as _,v as S,h as d,F as v,i as q,j as Q,p as j,k as z,l as J,m as Y,t as y,n as W,s as X,I as Z,A as ee,q as te,x as oe,y as ne,z as re,B as se,D as ae}from"./vendor.3053fe20.js";const le=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const u of n)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function r(n){const u={};return n.integrity&&(u.integrity=n.integrity),n.referrerpolicy&&(u.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?u.credentials="include":n.crossorigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(n){if(n.ep)return;n.ep=!0;const u=r(n);fetch(n.href,u)}};le();const ue={formatDate(e,t){const r=e instanceof Date?e:new Date(e);return R(r,t)}};function ie(){const e=localStorage.getItem("piniaState");try{return JSON.parse(e||"").github}catch{return{request:{last:5,dateStr:"",fromDataStr:"",toDateStr:""},repository:{owner:"",name:""}}}}const ce=K("github",{state:ie,actions:{setRepoOwner(e){this.repository.owner=e},setRepoName(e){this.repository.name=e},setLast(e){this.request.last=e},setDate(e){this.request.dateStr=e},setFromDateStr(e){this.request.fromDataStr=e},setToDateStr(e){this.request.toDateStr=e}}});function de(e){return e!=null}var pe=(e,t)=>{const r=e.__vccOpts||e;for(const[s,n]of t)r[s]=n;return r};const g=e=>(j("data-v-44a6b49e"),e=e(),z(),e),ge=g(()=>o("h1",null,"Issue Viewer",-1)),me=g(()=>o("span",null,"GITHUB TOKEN:",-1)),he=g(()=>o("div",null,"TARGET GITHUB REPOSITORY",-1)),fe={class:"search-area"},ye=g(()=>o("div",null,"\u691C\u7D22",-1)),_e=g(()=>o("span",null,"\u4EF6\u6570:",-1)),Se=["value"],ve=g(()=>o("span",null,"\u671F\u9593:",-1)),Te=["value"],be=g(()=>o("span",null,"\u301C",-1)),Ie=["value"],De={key:0},Oe={class:"issue-block"},we=["href"],Ne=P({setup(e){const t=k({githubToken:localStorage.getItem("GITHUB_TOKEN")||""}),r=()=>{localStorage.setItem("GITHUB_TOKEN",t.githubToken)},s=ce(),n=k({repoOwner:s.repository.owner,repoName:s.repository.name}),u=()=>{s.setRepoOwner(n.repoOwner),s.setRepoName(n.repoName)},f=C(()=>{const a=(()=>{const{fromDataStr:i,toDateStr:l}=s.request;if(!i&&!l)return null;const p=i?new Date(i):null,c=l?J(new Date(l),1):null;return p!=null&&c==null?`closed:>=${p.toISOString()}`:p==null&&c!=null?`closed:<=${c.toISOString()}`:`closed:${p==null?void 0:p.toISOString()}..${c==null?void 0:c.toISOString()}`})();return{searchQuery:[`repo:${s.repository.owner}/${s.repository.name}`,"is:issue","is:closed",a].filter(de).join(" "),last:s.request.last}}),{result:b}=V(x`
    query searchIssues($searchQuery: String!, $last: Int) {
      search(query: $searchQuery, type: ISSUE, last: $last) {
        edges {
          node {
            ... on Issue {
              id
              number
              title
              url
              body
              labels(last: 10) {
                edges {
                  node {
                    id
                    name
                  }
                }
              }
              closed
              closedAt
              assignees(last: 5) {
                edges {
                  node {
                    id
                    login
                    name
                    email
                  }
                }
              }
            }
          }
        }
      }
    }
  `,f),I=C(()=>{if(b.value==null)return null;const a=Y(b.value.search.edges,i=>{const l=i.node.assignees.edges[0];return l?l.node.login:""});return console.log(a),a}),L=a=>{a.currentTarget instanceof HTMLInputElement&&s.setLast(a.currentTarget.valueAsNumber)},B=a=>{a.currentTarget instanceof HTMLInputElement&&s.setFromDateStr(a.currentTarget.value)},E=a=>{a.currentTarget instanceof HTMLInputElement&&s.setToDateStr(a.currentTarget.value)};return(a,i)=>(m(),h("div",null,[ge,o("div",null,[me,_(o("input",{"onUpdate:modelValue":i[0]||(i[0]=l=>d(t).githubToken=l),type:"password"},null,512),[[S,d(t).githubToken]]),o("button",{onClick:r},"save")]),o("div",null,[he,_(o("input",{"onUpdate:modelValue":i[1]||(i[1]=l=>d(n).repoOwner=l),placeholder:"Owner"},null,512),[[S,d(n).repoOwner]]),_(o("input",{"onUpdate:modelValue":i[2]||(i[2]=l=>d(n).repoName=l),placeholder:"Name"},null,512),[[S,d(n).repoName]]),o("button",{onClick:u},"save")]),o("div",fe,[ye,o("div",null,[_e,o("input",{value:d(s).request.last,type:"number",onChange:L},null,40,Se)]),o("div",null,[ve,o("input",{value:d(s).request.fromDataStr,type:"date",onChange:B},null,40,Te),be,o("input",{value:d(s).request.toDateStr,type:"date",onChange:E},null,40,Ie)])]),d(I)?(m(),h("div",De,[(m(!0),h(v,null,q(d(I),(l,p)=>(m(),h(v,null,[o("h3",null,y(p||"NoBody"),1),o("div",null,[(m(!0),h(v,null,q(l,c=>(m(),h("div",Oe,[o("a",{href:c.node.url,target:"_blank"},y(c.node.title),9,we),o("div",null,[o("span",null,"labels: "+y(c.node.labels.edges.map(A=>A.node.name).join(", ")),1)]),o("div",null,"closedAt: "+y(a.$filters.formatDate(c.node.closedAt,"yyyy/MM/dd HH:mm:ss")),1),o("div",null,y(c.node.body),1)]))),256))])],64))),256))])):Q("",!0)]))}});var ke=pe(Ne,[["__scopeId","data-v-44a6b49e"]]);const Ce=localStorage.getItem("GITHUB_TOKEN")||"",qe=W({uri:"https://api.github.com/graphql"}),He=X((e,{headers:t})=>({headers:N(w({},t),{authorization:`Bearer ${Ce}`})})),Le=new Z,Be=new ee({link:He.concat(qe),cache:Le}),T=te({setup(){oe(ae,Be)},render:()=>ne(ke)}),H=re();T.use(H);T.config.globalProperties.$filters=ue;T.mount("#app");se(H.state,e=>{console.log(e),localStorage.setItem("piniaState",JSON.stringify(e))},{deep:!0});
