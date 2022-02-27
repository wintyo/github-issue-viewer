var $=Object.defineProperty,F=Object.defineProperties;var G=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var I=(e,o,s)=>o in e?$(e,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[o]=s,N=(e,o)=>{for(var s in o||(o={}))U.call(o,s)&&I(e,s,o[s]);if(b)for(var s of b(o))R.call(o,s)&&I(e,s,o[s]);return e},O=(e,o)=>F(e,G(o));import{d as x,a as K,r as D,c as k,u as M,g as V,o as p,b as m,e as t,w as _,v as y,f as c,F as v,h as w,i as P,p as Q,j,k as J,t as f,l as z,s as Y,I as W,A as X,m as Z,n as ee,q as te,x as oe,y as ne,D as re}from"./vendor.ae15d35f.js";const se=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const u of n)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function s(n){const u={};return n.integrity&&(u.integrity=n.integrity),n.referrerpolicy&&(u.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?u.credentials="include":n.crossorigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(n){if(n.ep)return;n.ep=!0;const u=s(n);fetch(n.href,u)}};se();function ae(){const e=localStorage.getItem("piniaState");try{return JSON.parse(e||"").github}catch{return{request:{last:5,dateStr:"",fromDataStr:"",toDateStr:""},repository:{owner:"",name:""}}}}const le=x("github",{state:ae,actions:{setRepoOwner(e){this.repository.owner=e},setRepoName(e){this.repository.name=e},setLast(e){this.request.last=e},setDate(e){this.request.dateStr=e},setFromDateStr(e){this.request.fromDataStr=e},setToDateStr(e){this.request.toDateStr=e}}});function ue(e){return e!=null}var ie=(e,o)=>{const s=e.__vccOpts||e;for(const[r,n]of o)s[r]=n;return s};const d=e=>(Q("data-v-6cfce4b5"),e=e(),j(),e),ce=d(()=>t("h1",null,"Issue Viewer",-1)),de=d(()=>t("span",null,"GITHUB TOKEN:",-1)),pe=d(()=>t("div",null,"TARGET GITHUB REPOSITORY",-1)),me={class:"search-area"},he=d(()=>t("div",null,"\u691C\u7D22",-1)),ge=d(()=>t("span",null,"\u4EF6\u6570:",-1)),fe=["value"],_e=d(()=>t("span",null,"\u671F\u9593:",-1)),ye=["value"],ve=d(()=>t("span",null,"\u301C",-1)),Se=["value"],Te={key:0},be={class:"issue-block"},Ie=["href"],Ne=K({setup(e){const o=D({githubToken:localStorage.getItem("GITHUB_TOKEN")||""}),s=()=>{localStorage.setItem("GITHUB_TOKEN",o.githubToken)},r=le(),n=D({repoOwner:r.repository.owner,repoName:r.repository.name}),u=()=>{r.setRepoOwner(n.repoOwner),r.setRepoName(n.repoName)},h=k(()=>{const l=(()=>{const{fromDataStr:i,toDateStr:a}=r.request;return!i&&!a?null:a?i?`closed:${i}..${a}`:`closed:<=${a}`:`closed:>=${i}`})();return{searchQuery:[`repo:${r.repository.owner}/${r.repository.name}`,"is:issue","is:closed",l].filter(ue).join(" "),last:r.request.last}}),{result:S}=M(V`
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
  `,h),T=k(()=>{if(S.value==null)return null;const l=J(S.value.search.edges,i=>{const a=i.node.assignees.edges[0];return a?a.node.login:""});return console.log(l),l}),L=l=>{l.currentTarget instanceof HTMLInputElement&&r.setLast(l.currentTarget.valueAsNumber)},E=l=>{l.currentTarget instanceof HTMLInputElement&&r.setFromDateStr(l.currentTarget.value)},A=l=>{l.currentTarget instanceof HTMLInputElement&&r.setToDateStr(l.currentTarget.value)};return(l,i)=>(p(),m("div",null,[ce,t("div",null,[de,_(t("input",{"onUpdate:modelValue":i[0]||(i[0]=a=>c(o).githubToken=a),type:"password"},null,512),[[y,c(o).githubToken]]),t("button",{onClick:s},"save")]),t("div",null,[pe,_(t("input",{"onUpdate:modelValue":i[1]||(i[1]=a=>c(n).repoOwner=a),placeholder:"Owner"},null,512),[[y,c(n).repoOwner]]),_(t("input",{"onUpdate:modelValue":i[2]||(i[2]=a=>c(n).repoName=a),placeholder:"Name"},null,512),[[y,c(n).repoName]]),t("button",{onClick:u},"save")]),t("div",me,[he,t("div",null,[ge,t("input",{value:c(r).request.last,type:"number",onChange:L},null,40,fe)]),t("div",null,[_e,t("input",{value:c(r).request.fromDataStr,type:"date",onChange:E},null,40,ye),ve,t("input",{value:c(r).request.toDateStr,type:"date",onChange:A},null,40,Se)])]),c(T)?(p(),m("div",Te,[(p(!0),m(v,null,w(c(T),(a,B)=>(p(),m(v,null,[t("h3",null,f(B||"NoBody"),1),t("div",null,[(p(!0),m(v,null,w(a,g=>(p(),m("div",be,[t("a",{href:g.node.url,target:"_blank"},f(g.node.title),9,Ie),t("div",null,[t("span",null,"labels: "+f(g.node.labels.edges.map(H=>H.node.name).join(", ")),1)]),t("div",null,"closedAt: "+f(g.node.closedAt),1),t("div",null,f(g.node.body),1)]))),256))])],64))),256))])):P("",!0)]))}});var Oe=ie(Ne,[["__scopeId","data-v-6cfce4b5"]]);const De=localStorage.getItem("GITHUB_TOKEN")||"",ke=z({uri:"https://api.github.com/graphql"}),we=Y((e,{headers:o})=>({headers:O(N({},o),{authorization:`Bearer ${De}`})})),Ce=new W,qe=new X({link:we.concat(ke),cache:Ce}),C=Z({setup(){ee(re,qe)},render:()=>te(Oe)}),q=oe();C.use(q);C.mount("#app");ne(q.state,e=>{console.log(e),localStorage.setItem("piniaState",JSON.stringify(e))},{deep:!0});
