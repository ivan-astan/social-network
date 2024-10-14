"use strict";(self.webpackChunksocial_network=self.webpackChunksocial_network||[]).push([[905],{3178:(e,r,t)=>{t.r(r),t.d(r,{default:()=>m});var o=t(5043),a=t(4455),s=t(8088),n=t(8122),l=t(6990);const c="ChatPage_chatContainer__aVU5c";var i=t(3003),d=t(7786),u=t(579);const f=o.memo((e=>{let{messagesData:r,bottomOfChatRef:t}=e;const a=r.map(((e,r)=>(0,u.jsxs)(o.Fragment,{children:[(0,u.jsx)(s.A,{isDeletable:!1,message:e.message,name:e.userName,logo:e.photo,id:e.userId}),(0,u.jsx)("div",{ref:t})]},`${e.userId}-${e.timestamp}-${r}`)));return(0,u.jsx)(u.Fragment,{children:a.length>0?a:(0,u.jsx)("p",{children:"No messages yet."})})})),m=(0,l.A)((()=>{const[e,r]=(0,o.useState)(!0),t=(0,i.wA)(),s=(0,i.d4)((e=>e.chat.messages)),l=(0,i.d4)((e=>e.chat.isFetching)),m=(0,i.d4)((e=>e.chat.status)),v=(0,o.useRef)(null),p=(0,o.useRef)(null);(0,o.useEffect)((()=>{t((0,d._i)())}),[t]),(0,o.useEffect)((()=>{v.current&&e&&v.current.scrollIntoView()}),[s]);return l?(0,u.jsx)(n.A,{}):(0,u.jsxs)("div",{children:[(0,u.jsx)("div",{className:c,ref:p,onScroll:()=>{const e=p.current;if(e){const t=e.scrollTop,o=e.scrollHeight,a=e.clientHeight;r(o-t-a<=500)}},children:(0,u.jsx)(f,{messagesData:s,bottomOfChatRef:v})}),(0,u.jsx)(a.A,{ws:!0,friendId:0,login:null,status:m})]})}))},3768:(e,r,t)=>{t.d(r,{A:()=>s});var o=t(9662),a=t(579);const s=(0,o.A)((0,a.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete")},1045:(e,r,t)=>{t.d(r,{A:()=>y});var o=t(5043),a=t(8387),s=t(8610),n=t(4535),l=t(6870),c=t(8249),i=t(9662),d=t(579);const u=(0,i.A)((0,d.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var f=t(2532),m=t(2372);function v(e){return(0,m.Ay)("MuiAvatar",e)}(0,f.A)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);var p=t(4162);const h=(0,n.Ay)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[t.variant],t.colorDefault&&r.colorDefault]}})((0,l.A)((e=>{let{theme:r}=e;return{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:r.typography.fontFamily,fontSize:r.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(r.vars||r).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:{color:(r.vars||r).palette.background.default,...r.vars?{backgroundColor:r.vars.palette.Avatar.defaultBg}:{backgroundColor:r.palette.grey[400],...r.applyStyles("dark",{backgroundColor:r.palette.grey[600]})}}}]}}))),g=(0,n.Ay)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,r)=>r.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),A=(0,n.Ay)(u,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,r)=>r.fallback})({width:"75%",height:"75%"});const y=o.forwardRef((function(e,r){const t=(0,c.b)({props:e,name:"MuiAvatar"}),{alt:n,children:l,className:i,component:u="div",slots:f={},slotProps:m={},imgProps:y,sizes:w,src:b,srcSet:x,variant:C="circular",...R}=t;let j=null;const k=function(e){let{crossOrigin:r,referrerPolicy:t,src:a,srcSet:s}=e;const[n,l]=o.useState(!1);return o.useEffect((()=>{if(!a&&!s)return;l(!1);let e=!0;const o=new Image;return o.onload=()=>{e&&l("loaded")},o.onerror=()=>{e&&l("error")},o.crossOrigin=r,o.referrerPolicy=t,o.src=a,s&&(o.srcset=s),()=>{e=!1}}),[r,t,a,s]),n}({...y,src:b,srcSet:x}),S=b||x,M=S&&"error"!==k,D={...t,colorDefault:!M,component:u,variant:C};delete D.ownerState;const N=(e=>{const{classes:r,variant:t,colorDefault:o}=e,a={root:["root",t,o&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,s.A)(a,v,r)})(D),[P,F]=(0,p.A)("img",{className:N.img,elementType:g,externalForwardedProps:{slots:f,slotProps:{img:{...y,...m.img}}},additionalProps:{alt:n,src:b,srcSet:x,sizes:w},ownerState:D});return j=M?(0,d.jsx)(P,{...F}):l||0===l?l:S&&n?n[0]:(0,d.jsx)(A,{ownerState:D,className:N.fallback}),(0,d.jsx)(h,{as:u,className:(0,a.A)(N.root,i),ref:r,...R,ownerState:D,children:j})}))},6494:(e,r,t)=>{t.d(r,{A:()=>m});var o=t(5043),a=t(8387),s=t(8610),n=t(4535),l=t(8249),c=t(2532),i=t(2372);function d(e){return(0,i.Ay)("MuiCardContent",e)}(0,c.A)("MuiCardContent",["root"]);var u=t(579);const f=(0,n.Ay)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,r)=>r.root})({padding:16,"&:last-child":{paddingBottom:24}}),m=o.forwardRef((function(e,r){const t=(0,l.b)({props:e,name:"MuiCardContent"}),{className:o,component:n="div",...c}=t,i={...t,component:n},m=(e=>{const{classes:r}=e;return(0,s.A)({root:["root"]},d,r)})(i);return(0,u.jsx)(f,{as:n,className:(0,a.A)(m.root,o),ownerState:i,ref:r,...c})}))},2110:(e,r,t)=>{t.d(r,{A:()=>v});var o=t(5043),a=t(8387),s=t(8610),n=t(4535),l=t(8249),c=t(1596),i=t(2532),d=t(2372);function u(e){return(0,d.Ay)("MuiCard",e)}(0,i.A)("MuiCard",["root"]);var f=t(579);const m=(0,n.Ay)(c.A,{name:"MuiCard",slot:"Root",overridesResolver:(e,r)=>r.root})({overflow:"hidden"}),v=o.forwardRef((function(e,r){const t=(0,l.b)({props:e,name:"MuiCard"}),{className:o,raised:n=!1,...c}=t,i={...t,raised:n},d=(e=>{const{classes:r}=e;return(0,s.A)({root:["root"]},u,r)})(i);return(0,f.jsx)(m,{className:(0,a.A)(d.root,o),elevation:n?8:void 0,ref:r,ownerState:i,...c})}))}}]);
//# sourceMappingURL=905.a6088cfd.chunk.js.map