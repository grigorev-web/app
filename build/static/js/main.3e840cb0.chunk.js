(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{11:function(n,t,e){"use strict";e.r(t);var c=e(1),a=e.n(c),r=e(3),s=e.n(r),i=e(4),o=(e(9),e(0));function u(n){return Object(o.jsx)("ul",{children:n.data.result.news.map((function(n,t){return Object(o.jsx)("li",{children:n},t)}))})}var l=function(){var n=a.a.useState({loading:!1,result:{news:["\u041d\u043e\u0432\u043e\u0441\u0442\u0435\u0439 \u043d\u0435\u0442\u0443"]}}),t=Object(i.a)(n,2),e=t[0],r=t[1];return Object(c.useEffect)((function(){return console.log(e)})),Object(o.jsxs)("div",{className:"App",children:[Object(o.jsxs)("p",{children:["result:","production"]}),Object(o.jsx)("button",{onClick:function(){r({loading:!0,result:{news:["\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."]}}),fetch("/wp-admin/admin-ajax.php"+function(n){var t=new URLSearchParams;for(var e in n)t.append(e,n[e]);return"?"+t.toString()}({action:"test",name:"kolya",named:"Kolyan"})).then((function(n){return n.json()})).then((function(n){r(n?{loading:!1,result:n}:{loading:!1,result:{news:["\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438"]}})}))},children:"load"}),Object(o.jsxs)("p",{children:["status:",e.loading?"loading...":""]}),Object(o.jsx)("h2",{children:"\u041d\u043e\u0432\u043e\u0441\u0442\u0438"}),Object(o.jsx)(u,{data:e})]})};s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(l,{})}),document.getElementById("root"))},9:function(n,t,e){}},[[11,1,2]]]);
//# sourceMappingURL=main.3e840cb0.chunk.js.map