import{u as y,r as g,a as S,A as k,j as e}from"./index-DlmjVwnz.js";import{A as w}from"./Avatar-CDgnlrtF.js";import{I as r,S as C}from"./Status-BB7JGQYO.js";import{G as t,F as I}from"./FormButton-DWslFWn8.js";import{P as v,C as P}from"./CrewSelect-Cgdne2Uh.js";import"./position-CtgMU1tI.js";function L(){const{employee:a,setEmployee:c}=y(),m=["branch","employeeId"],{firstname:n,lastname:u}=a,p={firstname:n,lastname:u},[o,d]=g.useState(a.nickname||n),x=s=>{d(s)},{position:l}=a,E={label:l,value:l},{crew:i}=a,f={label:i,value:i},b={...a,nickname:o},{status:j,triggerRequest:h}=S({query:"put",url:`${k.EMPLOYEE_API_URI}/${a._id}`,body:b,onSuccess:s=>{c(s)}});return e.jsxs("form",{className:"w-full flex flex-col gap-32",children:[e.jsx(w,{name:p,isEditable:!1}),e.jsx(t,{name:"nickname",children:e.jsx(r,{id:"nickname",value:o,handleOnChange:x,isEditable:!0})}),e.jsx(t,{name:"position",children:e.jsx(v,{activePosition:E,isEditable:!1})}),e.jsx(t,{name:"crew",children:e.jsx(P,{activeCrew:f,isEditable:!1})}),m.map(s=>e.jsx(t,{name:s,children:e.jsx(r,{id:s,value:a[s],isEditable:!1})},`field_${s}`)),e.jsx(C,{status:j,errorMessage:"Error updating Employee.",successMessage:"Employee was successfully updated.",className:"mt-32"}),e.jsx(I,{type:"submit",ariaLabel:"Update my data",bg:"bg-white",className:"mt-32",handleOnClick:h,icon:"done",label:"Update"})]})}export{L as default};