(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{19:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c.n(n),a=c(14),o=c.n(a),r=c(4),i=(c(19),c(3)),u=c.n(i),d=c(0),j=function(e){return e.products.map((function(e){return Object(d.jsxs)("div",{className:"products",id:e.product_id,children:[Object(d.jsxs)("p",{children:["First Name: ",e.first_name," "]}),Object(d.jsxs)("p",{children:["Last Name: ",e.last_name]}),Object(d.jsxs)("p",{children:["Phone: ",e.phone_number]})]},e.product_id)}))},l=function(e){return console.log(e,"here creating object"),u.a.post("/api/products",e).then((function(e){return e.data}))},b=function(e){var t=e.products,c=Object(n.useState)(""),s=Object(r.a)(c,2),a=s[0],o=s[1],i=Object(n.useState)(""),j=Object(r.a)(i,2),b=j[0],p=j[1],h=Object(n.useState)(""),O=Object(r.a)(h,2),m=O[0],f=O[1];return Object(d.jsxs)("form",{className:"products",onSubmit:function(e){e.preventDefault();u.a.get("".concat("/api/products")).then((function(e){var c={first_name:a,last_name:b,phone_number:m,product_id:t.length++};console.log("here"),l(c),o(""),p(""),f(""),window.location.reload()}))},children:[Object(d.jsx)("h3",{className:"title",children:"Add new Items"}),Object(d.jsx)("div",{children:Object(d.jsx)("input",{value:a,placeholder:"First Name",onChange:function(e){o(e.target.value)}})}),Object(d.jsx)("div",{children:Object(d.jsx)("input",{value:b,placeholder:"Last Name",onChange:function(e){p(e.target.value)}})}),Object(d.jsx)("div",{children:Object(d.jsx)("input",{className:"lastInput",placeholder:"Phone Number",value:m,onChange:function(e){f(e.target.value)}})}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{className:"submit action-button",type:"submit",children:"Submit"})})]})},p=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){u.a.get("".concat("/api/products")).then((function(e){s(e.data)}))}),[]),Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)("h2",{children:"Product List"}),Object(d.jsx)(b,{products:c}),Object(d.jsx)("h2",{children:"Products"}),Object(d.jsx)(j,{products:c})]})};o.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.0aeb7e02.chunk.js.map