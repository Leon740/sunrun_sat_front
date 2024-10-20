import{j as e,r as f,a as N,A as R,u as q}from"./index-CzZb75z9.js";import{L as $,G as E,S as B}from"./Status-DgKJjzpZ.js";import{P as v}from"./position-CtgMU1tI.js";function I({name:s,color:n,onChange:r,isChecked:o=!1,disabled:l=!1}){const d=n==="yellow",i=`${l?"":"cursor-pointer"}`;return e.jsxs("label",{className:`flex flex-row items-center gap-8 ${d?"text-yellow":"text-light_navy"}`,children:[e.jsx("input",{type:"radio",name:s,value:s,checked:o,disabled:l,className:"hidden",onChange:c=>r(c.target.value)}),e.jsx("span",{className:`w-16 h-16 rounded-50 border-2 transition
          ${i}
          ${d?`border-yellow ${o?"bg-yellow":""}`:`border-light_navy ${o?"bg-light_navy":""}`}
          `}),e.jsx("span",{className:`font-roobert_semibold text-20 capitalize ${i}`,children:s})]})}function G({radioGroupValue:s,radioGroupOnChange:n,disabled:r=!1}){const[o,l]=f.useState(s),d=c=>{l(c),n(c)},i=o==="Yes";return e.jsxs("div",{className:"w-full flex flex-col gap-16",children:[e.jsxs("div",{className:"flex flex-row justify-center gap-64",children:[e.jsx(I,{name:"Yes",color:"yellow",onChange:d,isChecked:i,disabled:r}),e.jsx(I,{name:"No",color:"light_navy",onChange:d,isChecked:o==="No",disabled:r})]}),r&&e.jsx("p",{className:"font-roobert_regular text-16 text-red text-center",children:"Can't update your vote since it's less than 1 day notice."}),o&&e.jsx("div",{className:`w-full font-roobert_semibold text-16 text-center p-8 rounded-8 ${i?"text-dark_navy bg-yellow":"text-sky_blue bg-light_navy"}`,children:i?"Let’s knock it out.":"Recharge and do it next time."})]})}function C({children:s}){return s?e.jsx("ul",{className:"flex flex-row flex-wrap gap-16",children:s}):null}function A({children:s,color:n}){return e.jsx("li",{className:`font-roobert_regular text-16 text-dark_navy p-8 rounded-8 ${n}`,children:s})}const U=(s,n)=>{const r=Math.abs(n.getTime()-s.getTime());return Math.ceil(r/(1e3*60*60*24))};function H({_id:s,name:n,date:r,employees:o,activeEmployee:l,allEmployees:d,initialCrews:i,isManager:c}){const[x,p]=f.useState(new Set(o)),[h,k]=f.useState(x.has(l._id)?"Yes":"No");f.useEffect(()=>{p(a=>{const t=new Set(a);return h==="Yes"?t.add(l._id):t.delete(l._id),t})},[h]);const{triggerRequest:P}=N({query:"put",url:`${R.SATURDAY_API_URI}/${s}`}),S=Array.from(x);f.useEffect(()=>{P({reqBody:{name:n,employees:S}})},[x]);const g={};i.forEach(a=>{g[a]={Foreman:{},Lead:{},Installer:{},Electrician:{}}});const _={Foreman:[],Lead:[],Installer:[],Electrician:[]};S.forEach(a=>{const t=d[a];return t.crew!=="unassigned"&&(g[t.crew][t.position]=t),_[t.position].push(t),t});const j=[];Object.entries(g).forEach(([a,t])=>{var m,u,y,b;((m=t.Foreman)!=null&&m._id&&((u=t.Lead)!=null&&u._id)||(y=t.Foreman)!=null&&y._id&&((b=t.Electrician)!=null&&b._id))&&j.push(a)});const T=new Date,[D,Y,L]=r.split("-").map(Number),F=new Date(D,Y,L),O=U(T,F)<2,w=`${r}_${s}`;return e.jsxs("section",{className:"flex flex-col gap-32","aria-label":n,children:[e.jsx("h2",{"aria-label":n,className:"flex justify-center",children:e.jsx($,{name:n,text:"text-20"})}),!c&&e.jsx(G,{radioGroupValue:h,radioGroupOnChange:k,disabled:O}),S.length>0&&e.jsxs(e.Fragment,{children:[e.jsx($,{name:"Sunrunners coming in",text:"text-20"}),j.length>0&&j.map(a=>{const t=g[a],m=`${w}_${a}`;return e.jsx(E,{name:a,children:e.jsx(C,{children:v.map(u=>{const y=t[u.title];if(y._id)return e.jsx(A,{color:u.color,children:y.nickname},`${m}_${y._id}`)})})},m)}),e.jsx(E,{name:"Crews to be determined",children:v.map(a=>{const t=_[a.title].filter(u=>!j.includes(u.crew)),m=`${w}_${a.title}`;return t.length>0&&e.jsx(C,{children:t.map(u=>e.jsx(A,{color:a.color,children:u.nickname},`${m}_${u._id}`))},m)})})]})]})}function M({saturdaysHashTable:s,activeEmployee:n,employeesHashTable:r,isManager:o}){const{allEmployees:l,employeesByPosition:d}=r,i=new Set;return d.Foreman.forEach(c=>{const x=l[c].crew;x!=="unassigned"&&i.add(x)}),e.jsx("div",{className:"grow flex flex-col gap-32",children:Object.entries(s).map(([c,{name:x,date:p,employees:h}])=>e.jsx(H,{_id:c,name:x,date:p,employees:h,activeEmployee:n,allEmployees:l,initialCrews:i,isManager:o},`${p}_${c}`))})}function K(){const[s,n]=f.useState({}),{status:r,triggerRequest:o}=N({query:"get",url:R.SATURDAY_API_URI,onSuccess:c=>{n(c)}});f.useEffect(()=>{o()},[]);const{employee:l,employeesHashTable:d,isManager:i}=q();return s&&d?e.jsx(M,{saturdaysHashTable:s,activeEmployee:l,employeesHashTable:d,isManager:i}):e.jsx(B,{status:r,errorMessage:"Error fetching Saturdays"})}export{K as default};
