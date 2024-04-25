(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[951],{9254:function(e,n,t){Promise.resolve().then(t.bind(t,8447))},8447:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return N}});var a=t(7573);let r=e=>{let{children:n,className:t,appName:r,handleAddItem:i}=e;return(0,a.jsx)("button",{className:t,onClick:i,children:n})};var i=t(1145),o=t.n(i),d=t(7653),l=t(5191),s=t(1489);function c(e){let{children:n}=e;return(0,a.jsx)(l.Z,{sx:{width:{xs:"100%",sm:"50%",md:"83%"}},children:(0,a.jsx)(s.Z,{variant:"outlined",children:n})})}var _=t(7875);function u(e){let{setInputValueHandler:n,inputValue:t}=e,r=e=>{n(e.target.value)};return(0,a.jsx)(l.Z,{component:"form",sx:{"& > :not(style)":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off",children:(0,a.jsx)(_.Z,{id:"outlined-basic",label:"Outlined",variant:"outlined",onChange:e=>r(e),value:t})})}var p=t(6813),g=t(1640);function x(e){let{imagePath:n}=e;return(0,a.jsx)(g.Z,{direction:"row",spacing:5,sx:{paddingLeft:2,paddingTop:1},children:(0,a.jsx)(p.Z,{alt:"Remy Sharp",src:n})})}var h=t(5183),m=t(7119),j=t(2217),Z=t(6178),f=t(5338),v=t(417),b=t(5596),C=t(9428),w=t(9015),y=t(3746),k=t(5088),L=t(1885);function S(e){let{items:n,handleChanges:t}=e,[r,i]=(0,d.useState)(null),[o,s]=(0,d.useState)(""),c=async e=>{try{(await L.Z.delete("/api/toDoList",{headers:{"Content-Type":"application/json"},data:{id:e}})).data&&t()}catch(e){console.error("Error deleting todo:",e)}},_=async(e,n)=>{try{(await L.Z.put("/api/toDoList",{id:e,description:n})).data&&t()}catch(e){console.error("Error updating todo:",e)}},u=(e,n)=>{i(e),s(n)},g=e=>{""!==o.trim()&&(_(e,o),i(null))},x=()=>{i(null),s("")},h=e=>{s(e.target.value)};return(0,a.jsx)(l.Z,{sx:{flexGrow:1,maxWidth:1e3},children:(0,a.jsx)(b.ZP,{item:!0,xs:12,md:6,children:(0,a.jsx)(l.Z,{sx:{flexGrow:1},children:(0,a.jsx)(m.Z,{children:n&&n.map(e=>(0,a.jsxs)(j.ZP,{secondaryAction:r===e._id?(0,a.jsxs)(d.Fragment,{children:[(0,a.jsx)(v.Z,{edge:"end","aria-label":"save",onClick:()=>g(e._id),children:(0,a.jsx)(y.Z,{})}),(0,a.jsx)(v.Z,{edge:"end","aria-label":"cancel",onClick:x,children:(0,a.jsx)(k.Z,{})})]}):(0,a.jsxs)(d.Fragment,{children:[(0,a.jsx)(v.Z,{edge:"end","aria-label":"edit",onClick:()=>u(e._id,e.description),children:(0,a.jsx)(w.Z,{})}),(0,a.jsx)(v.Z,{edge:"end","aria-label":"delete",onClick:()=>c(e._id),children:(0,a.jsx)(C.Z,{})})]}),children:[(0,a.jsx)(Z.Z,{children:(0,a.jsx)(p.Z,{children:(0,a.jsx)(w.Z,{})})}),r===e._id?(0,a.jsx)("input",{type:"text",value:o,onChange:h}):(0,a.jsx)(f.Z,{primary:e.description,secondary:null})]},e._id))})})})})}var G=t(9984),E=t(4251);function N(){let{data:e}=(0,E.useSession)(),[n,t]=(0,d.useState)([]),[i,s]=(0,d.useState)(""),[_,p]=(0,d.useState)(!1);(0,d.useEffect)(()=>{var n;g(null==e?void 0:null===(n=e.user)||void 0===n?void 0:n.email)},[_,e]);let g=async e=>{try{let n=await L.Z.get("/api/toDoList",{params:{email:e}});t(n.data.todos)}catch(e){console.error("Error fetching todos:",e)}},m=async()=>{var n;let t=await L.Z.post("/api/toDoList",{description:i,userEmail:null==e?void 0:null===(n=e.user)||void 0===n?void 0:n.email});if(t)return s(""),p(!_),t};return(0,a.jsxs)(c,{children:[(0,a.jsx)(u,{setInputValueHandler:e=>{s(e)},inputValue:i}),(0,a.jsx)(r,{appName:"web",className:o().button,handleAddItem:m,children:"Add"}),(0,a.jsx)(h.Z,{}),(0,a.jsxs)(l.Z,{sx:{flexGrow:1,display:"flex",flexDirection:"row",alignItems:"center"},children:[(0,a.jsx)(x,{imagePath:""}),(0,a.jsx)(b.ZP,{item:!0,xs:12,md:6,marginLeft:5,children:(0,a.jsx)(G.Z,{sx:{mt:4,mb:2},variant:"h6",component:"div",children:"To Do list"})})]}),(0,a.jsx)(S,{items:n,handleChanges:()=>{p(!_)}})]})}},1145:function(e){e.exports={main:"page_main__nw1Wk",description:"page_description__lvaOp",code:"page_code__9AfUJ",hero:"page_hero__7KFOs",heroContent:"page_heroContent__dzLob",grid:"page_grid__JZ9Cz",card:"page_card__Cf__u",content:"page_content___38fW",center:"page_center__NcdcW",circles:"page_circles__13uc1",turborepoWordmarkContainer:"page_turborepoWordmarkContainer__VeGRa",gradient:"page_gradient__Gm6Ic",gradientSmall:"page_gradientSmall__ISB9d",gradientLarge:"page_gradientLarge__jMYhh",glowConic:"page_glowConic__F9x_a",logoGradient:"page_logoGradient__lslN3",backgroundGradient:"page_backgroundGradient__B93RB",button:"page_button__52WaL"}}},function(e){e.O(0,[189,251,440,293,286,744],function(){return e(e.s=9254)}),_N_E=e.O()}]);