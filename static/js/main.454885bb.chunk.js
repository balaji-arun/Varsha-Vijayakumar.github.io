(this.webpackJsonpcontact=this.webpackJsonpcontact||[]).push([[0],{22:function(e,t,a){e.exports=a(47)},47:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),c=a(21),r=a.n(c),o=(a(27),a(7)),u=a(48),m=a(49),i=a(50),s=a(51),E=a(52),d=function(e){var t=e.id,a=e.upd,n=l.a.useState(""),c=Object(o.a)(n,2),r=c[0],d=c[1],p=l.a.useState(""),h=Object(o.a)(p,2),f=h[0],b=h[1];return l.a.createElement(u.a,null,l.a.createElement(m.a,null,l.a.createElement(i.a,null,l.a.createElement(s.a,{placeholder:"Contact Name",onChange:function(e){return d(e.target.value)},value:r})),l.a.createElement(i.a,null,l.a.createElement(s.a,{placeholder:"Phone Number",min:0,max:9999999999,type:"number",step:"1",onChange:function(e){return b(e.target.value)},value:f})),l.a.createElement(E.a,{color:"primary",onClick:function(){a(r,f,t)}},"Save")))},p=a(53),h=a(54),f=function(e){var t=e.list,a=e.Delete,n=e.upd,c=l.a.useState(!1),r=Object(o.a)(c,2),i=r[0],s=r[1],f=l.a.useState(""),b=Object(o.a)(f,2),g=b[0],C=b[1],y=l.a.useState(1),v=Object(o.a)(y,2),S=v[0],O=v[1];return l.a.createElement(u.a,null,l.a.createElement(m.a,null,l.a.createElement(p.a,{sm:"12",md:{size:6,offset:8}},l.a.createElement(h.a,{striped:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Phone_Number"),l.a.createElement("th",null,"Action1"),l.a.createElement("th",null,"Action2"))),!0===i?l.a.createElement(d,{id:g,upd:n}):null,l.a.createElement("tbody",null,t.map((function(e){return l.a.createElement("tr",{key:e._id},l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.phone),l.a.createElement("td",null,l.a.createElement(E.a,{onClick:function(){a(e._id)}},"Del")),l.a.createElement("td",null,S%2!==0?l.a.createElement(E.a,{color:"primary",onClick:function(){console.log("entered"),O(S+1),s(!0),C(e._id)}},"Edit"):l.a.createElement(E.a,{color:"primary",onClick:function(){O(S+1),s("false")}},"Cancle")))})))))))},b=a(9),g=a.n(b),C=a(55),y=a(56),v=function(){var e=l.a.useState("False"),t=Object(o.a)(e,2),a=t[0],n=t[1],c=l.a.useState(""),r=Object(o.a)(c,2),d=r[0],h=r[1],b=l.a.useState(""),v=Object(o.a)(b,2),S=v[0],O=v[1],j=l.a.useState([]),k=Object(o.a)(j,2),x=k[0],N=k[1],F=l.a.useState(1),_=Object(o.a)(F,2),w=_[0],A=_[1],D=function(){g.a.get("http://localhost:3001/con").then((function(e){N(e.data)}))};l.a.useEffect(D,[]);return l.a.createElement(u.a,null,l.a.createElement(m.a,null,l.a.createElement(p.a,{xs:"6"},l.a.createElement("h1",null,l.a.createElement(C.a,{color:"secondary"},"Contact Form")),l.a.createElement(p.a,{xs:"auto"},l.a.createElement(i.a,null,l.a.createElement(y.a,{addonType:"prepend"},"Contact Name:"),l.a.createElement(s.a,{placeholder:"For.eg:Ria",onChange:function(e){return h(e.target.value)},value:d})),l.a.createElement(i.a,null,l.a.createElement(y.a,{addonType:"prepend"},"Phone Number:"),l.a.createElement(s.a,{placeholder:"For.eg:9820938902",min:0,max:9999999999,type:"number",step:"1",onChange:function(e){return O(e.target.value)},value:S})),l.a.createElement(E.a,{color:"primary",onClick:function(){!function(e,t){g.a.post("http://localhost:3001/add",{name:e,phone:t}).then((function(e){D(),h(""),O("")})).catch((function(e){console.log(e)}))}(d,S)}},"Add"),"  ",w%2!==0?l.a.createElement(E.a,{color:"primary",onClick:function(){A(w+1),n("true")}},"Show list"):l.a.createElement(E.a,{color:"primary",onClick:function(){A(w+1),n("false")}},"Hide list"),"true"===a?l.a.createElement(f,{list:x,Delete:function(e){g.a.delete("http://localhost:3001/del/"+e).then((function(t){200===t.status&&"OK"===t.statusText&&(N(x.filter((function(t){return t.id!==e}))),D())})).catch((function(e){return console.log(e)}))},upd:function(e,t,a){g.a.put("http://localhost:3001/update/"+a,{name:e,phone:t}).then((function(e){D(),h(""),O("")})).catch((function(e){return console.log(e)}))}}):null))))};r.a.render(l.a.createElement(v,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.454885bb.chunk.js.map