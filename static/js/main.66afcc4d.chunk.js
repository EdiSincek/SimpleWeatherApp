(this.webpackJsonpweatherapp=this.webpackJsonpweatherapp||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(0),l=n.n(c),a=n(4),s=n.n(a),o=(n(10),n(2)),i=(n(5),n(1));var r=function(){var e="ff1136e05adb4b15a24152225210212",t="http://api.weatherapi.com/v1/current.json",n=Object(c.useState)(null),l=Object(o.a)(n,2),a=l[0],s=l[1],r=Object(c.useState)(""),u=Object(o.a)(r,2),j=u[0],h=u[1],b=Object(c.useState)(null),O=Object(o.a)(b,2),d=O[0],m=O[1];return Object(i.jsxs)("div",{children:[Object(i.jsx)("input",{className:"inText",type:"text",onChange:function(e){h(e.target.value)}}),Object(i.jsx)("div",{className:"btnDiv",children:Object(i.jsx)("button",{className:"searchBtn",onClick:function(){m(null),fetch(t+"?key="+e+"&q="+j).then((function(e){return e.json()})).then((function(e){null!=e.error?(m(1),console.log("ERROR")):s(e),console.log(e)}))},children:"SEARCH"})}),Object(i.jsxs)("div",{className:"results",children:[Object(i.jsx)("h2",{className:"temp",children:null===a||1===d?null:a.current.temp_c+"\xb0C"}),Object(i.jsxs)("h2",{className:"location",children:[null===a||1===d?null:a.location.name+", "+a.location.country," "]}),Object(i.jsxs)("h2",{className:"localTime",children:[null===a||1===d?null:"Local time: "+a.location.localtime," "]})]})]})};s.a.render(Object(i.jsx)(l.a.StrictMode,{children:Object(i.jsx)(r,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.66afcc4d.chunk.js.map