"use strict";(self.webpackChunksocial_network=self.webpackChunksocial_network||[]).push([[605],{4455:(A,f,v)=>{v.d(f,{A:()=>J});v(5043);const e="SendMessage_SendMessage__Yz56f";var x=v(1906),n=v(4858),D=v(8347),s=v(3003),P=v(8671),i=v(7786),w=v(579);const J=A=>{const f=(0,s.wA)(),{register:v,handleSubmit:J,reset:H,formState:{errors:g}}=(0,n.mN)({});return(0,w.jsxs)("form",{onSubmit:J((v=>{A.ws&&"open"==A.status?(f((0,i.ID)(v.messageText)),H()):""!==v.messageText.trim()&&(f((0,D._z)(A.friendId,v.messageText)),H())})),className:e,children:[(0,w.jsx)(P.A,{error:!!g.messageText,id:"outlined-basic",label:"Message",variant:"filled",autoComplete:"off",...v("messageText",{required:!0})}),(0,w.jsx)(x.A,{variant:"contained",type:"submit",disabled:!!A.ws&&"open"!=A.status,children:"Send"})]})}},8088:(A,f,v)=>{v.d(f,{A:()=>g});v(5043);var e=v(5475),x=v(2110),n=v(1045),D=v(6494),s=v(5865),P=v(7392),i=v(3768);var w=v(3003),J=v(8347),H=v(579);const g=A=>{const f=A.messageId||2,v=(0,w.wA)(),g=()=>(0,H.jsxs)(x.A,{variant:"outlined",style:{display:"flex",marginBottom:"10px"},children:[(0,H.jsx)(n.A,{src:A.logo,sx:{width:70,height:70}}),(0,H.jsxs)(D.A,{style:{flex:"1"},children:[(0,H.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,H.jsxs)("div",{children:[(0,H.jsx)(s.A,{variant:"subtitle1",children:A.name}),(0,H.jsx)(s.A,{variant:"body2",color:"textSecondary",children:A.time})]}),A.isDeletable&&(0,H.jsx)(P.A,{size:"small",onClick:()=>v((0,J.RC)(f)),children:(0,H.jsx)(i.A,{fontSize:"small"})})]}),(0,H.jsxs)("div",{style:{display:"flex",alignItems:"center",marginTop:"5px"},children:[(0,H.jsx)(s.A,{variant:"body1",style:{flex:"1"},children:A.message}),A.messageId&&(0,H.jsx)("img",{style:{width:"20px",marginLeft:"10px"},src:A.viewed?"data:image/png;base64,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":"data:image/png;base64,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",alt:A.viewed?"viewed":"sended"})]})]})]});return A.link?(0,H.jsx)(e.k2,{to:`/messages/${A.id}`,onClick:()=>v((0,J.rC)(A.id)),children:(0,H.jsx)(g,{})}):(0,H.jsx)("div",{children:(0,H.jsx)(g,{})})}},6990:(A,f,v)=>{v.d(f,{A:()=>s});var e=v(5043),x=v(3003),n=v(3216),D=v(579);const s=A=>f=>{const v=(0,x.d4)((A=>A.login.isLogined)),s=(0,n.Zp)();return(0,e.useEffect)((()=>{v||s("/login")}),[v,s]),(0,D.jsx)(A,{...f})}}}]);
//# sourceMappingURL=605.4a63d304.chunk.js.map