import{r as i,u as g,a as m,b as p,R as f,j as e,A as x}from"./index-CzZb75z9.js";import{G as I,I as S,S as h}from"./Status-DgKJjzpZ.js";import{F as b}from"./FormButton-3as50PDl.js";function E(){const[s,o]=i.useState(""),r=t=>{o(t)},a=s.length>1,{employee:n,setEmployee:l}=g(),{status:c,triggerRequest:u}=m({query:"get",url:`${x.SIGNIN_API_URI}/${s}`,onSuccess:t=>{l(t)}}),d=p();return i.useEffect(()=>{n._id&&d(f.profile)},[n]),e.jsx("div",{className:"grow flex items-center",children:e.jsxs("form",{className:"w-full flex flex-col gap-32",children:[e.jsx(I,{name:"id",children:e.jsx(S,{isEditable:!0,id:"id",value:s,handleOnChange:r})}),e.jsx(h,{status:c,errorMessage:"No employee found",successMessage:"Signing in ..."}),e.jsx(b,{type:"submit",ariaLabel:"Sign In",disabled:!a,className:a?"opacity-1":"opacity-75",bg:"bg-white",handleOnClick:u,icon:"arrow",iconClassName:"-rotate-90 order-1",label:"Sign In"})]})})}export{E as default};
