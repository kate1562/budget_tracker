(this["webpackJsonpbudget-tracker"]=this["webpackJsonpbudget-tracker"]||[]).push([[0],{13:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r.n(n),a=r(7),i=r.n(a),s=(r(6),r(2)),j=r(4),o=r(5),b=r(0);function l(){var e=Object(n.useState)({salary:"",propertyPrice:"",interestRate:"",mortgageTerm:"",deposit:""}),t=Object(o.a)(e,2),r=t[0],c=t[1],a=Object(n.useState)(""),i=Object(o.a)(a,2),l=i[0],d=i[1];function p(e){var t=e.target,n=t.name,a=t.value;c(Object(j.a)(Object(j.a)({},r),{},Object(s.a)({},n,a))),console.log(r)}return Object(b.jsxs)("section",{id:"form",children:[Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(){var e=r.propertyPrice-r.deposit,t=r.interestRate/12/100,n=e*t,c=Math.pow(1+t,12*r.mortgageTerm);d(n*c/(c-1))}()},action:"/action_page.php",children:[Object(b.jsx)("label",{children:"Salary: "}),Object(b.jsx)("input",{type:"text",id:"username",name:"salary",value:r.salary,onChange:p}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{children:"Property price: "}),Object(b.jsx)("input",{type:"text",id:"propertyPrice",name:"propertyPrice",value:r.propertyPrice,onChange:p}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{children:"Mortgage interest rate: "}),Object(b.jsx)("input",{type:"text",id:"interestRate",name:"interestRate",value:r.interestRate,onChange:p}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{children:"Mortgage term (years): "})," ",Object(b.jsx)("input",{type:"text",id:"mortgageTerm",name:"mortgageTerm",value:r.mortgageTerm,onChange:p}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{children:"Deposit: "}),Object(b.jsx)("input",{type:"text",id:"deposit",name:"deposit",value:r.deposit,onChange:p}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"submit",value:"Submit"})]}),Object(b.jsx)("div",{children:Object(b.jsxs)("p",{children:["Monthly Repayments ",Object(b.jsx)("span",{id:"monthlyRepayments",children:l})]})})]})}r.p;var d=r.p+"static/media/fullDesign.4ea8077a.svg";function p(){return Object(b.jsxs)("section",{id:"hero",children:[Object(b.jsx)("div",{id:"designsContainer",children:Object(b.jsx)("img",{id:"fullDesign",src:d})}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{className:"heroTitle",children:"Simple UK budget tracker."}),Object(b.jsx)("h2",{className:"heroSubTitle",children:"Understand how to make your money work for you."}),Object(b.jsx)("a",{id:"getStarted",href:"#form",children:"GET STARTED"})]})]})}var u=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("header",{}),Object(b.jsx)(p,{}),Object(b.jsx)(l,{})]})},O=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,14)).then((function(t){var r=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;r(e),n(e),c(e),a(e),i(e)}))};i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(u,{})}),document.getElementById("root")),O()},6:function(e,t,r){}},[[13,1,2]]]);
//# sourceMappingURL=main.4781fa53.chunk.js.map