(this["webpackJsonpbudget-tracker"]=this["webpackJsonpbudget-tracker"]||[]).push([[0],{13:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r.n(n),i=r(7),a=r.n(i),s=(r(6),r(2)),j=r(4),o=r(5),b=r(0);function l(){var e=Object(n.useState)({salary:"",propertyPrice:"",interestRate:"",mortgageTerm:"",deposit:""}),t=Object(o.a)(e,2),r=t[0],c=t[1],i=Object(n.useState)(""),a=Object(o.a)(i,2),l=a[0],d=a[1];function p(e){var t=e.target,n=t.name,i=t.value;c(Object(j.a)(Object(j.a)({},r),{},Object(s.a)({},n,i))),console.log(r)}return Object(b.jsxs)("section",{id:"form",children:[Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(){var e=r.propertyPrice-r.deposit,t=r.interestRate/12/100,n=e*t,c=Math.pow(1+t,12*r.mortgageTerm),i=n*c/(c-1);i=i.toFixed(2),d(i)}()},action:"/action_page.php",children:[Object(b.jsx)("label",{children:"Salary: "}),Object(b.jsx)("input",{type:"text",id:"username",name:"salary",value:r.salary,onChange:p}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{children:"Property price: "}),Object(b.jsx)("input",{type:"text",id:"propertyPrice",name:"propertyPrice",value:r.propertyPrice,onChange:p}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{children:"Mortgage interest rate: "}),Object(b.jsx)("input",{type:"text",id:"interestRate",name:"interestRate",value:r.interestRate,onChange:p}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{children:"Mortgage term (years): "})," ",Object(b.jsx)("input",{type:"text",id:"mortgageTerm",name:"mortgageTerm",value:r.mortgageTerm,onChange:p}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{children:"Deposit: "}),Object(b.jsx)("input",{type:"text",id:"deposit",name:"deposit",value:r.deposit,onChange:p}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"submit",value:"Submit"})]}),Object(b.jsx)("div",{children:Object(b.jsxs)("p",{children:["Monthly Repayments ",Object(b.jsxs)("span",{id:"monthlyRepayments",children:["\xa3",l]})]})})]})}r.p;var d=r.p+"static/media/fullDesign.4ea8077a.svg";function p(){return Object(b.jsxs)("section",{id:"hero",children:[Object(b.jsxs)("div",{className:"heroTextContainer",children:[Object(b.jsx)("h1",{className:"heroTitle",children:"Simple UK budget tracker."}),Object(b.jsx)("h2",{className:"heroSubTitle",children:"Understand how to make your money work for you."}),Object(b.jsx)("a",{id:"getStarted",href:"#form",children:"GET STARTED"})]}),Object(b.jsx)("div",{id:"designsContainer",children:Object(b.jsx)("img",{id:"fullDesign",src:d})})]})}var u=r.p+"static/media/quickmathslogo.0507ab28.png";function h(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{id:"logo",src:u}),Object(b.jsx)("p",{children:"QuickMaths"}),Object(b.jsx)("p",{children:"free"})]})}var x=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("header",{}),Object(b.jsx)(h,{}),Object(b.jsx)(p,{}),Object(b.jsx)(l,{})]})},O=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,14)).then((function(t){var r=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;r(e),n(e),c(e),i(e),a(e)}))};a.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(x,{})}),document.getElementById("root")),O()},6:function(e,t,r){}},[[13,1,2]]]);
//# sourceMappingURL=main.aa424c95.chunk.js.map