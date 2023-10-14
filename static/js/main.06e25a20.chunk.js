(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{28:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var n=c(10),a=c.n(n),s=c(8),r=c(17),l=c(6),i=c(15),o=c(16),d=function(e){return{type:"currentTodo/SET",payload:e}},j=function(){return{type:"currentTodo/REMOVE"}},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"currentTodo/SET":return t.payload;case"currentTodo/REMOVE":return null;default:return e}},b=c(4),h=function(e){return{type:"filter/QUERY",payload:e}},O=function(e){return{type:"filter/STATUS",payload:e}},m={query:"",status:"all"},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"filter/STATUS":return Object(b.a)(Object(b.a)({},e),{},{status:t.payload});case"filter/QUERY":return Object(b.a)(Object(b.a)({},e),{},{query:t.payload.toLowerCase()});default:return e}},x=c(9),p=function(e){return{type:"todos/SET",payload:e}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"todos/SET"===t.type?[].concat(Object(x.a)(e),Object(x.a)(t.payload)):e},y=Object(l.combineReducers)({currentTodo:u,filter:f,todos:v}),N=Object(l.createStore)(y,Object(i.composeWithDevTools)(Object(l.applyMiddleware)(o.a))),g=c(3),T=c(0),S=(c(25),c(26),c(11)),E=c.n(S),k=s.b,w=s.c,C=c(1),R=function(){var e=k(),t=w((function(e){return e.currentTodo})),c=w((function(e){return e.todos})),n=w((function(e){return e.filter})),a=Object(T.useMemo)((function(){var e=Object(x.a)(c);switch(n.query&&(e=e.filter((function(e){return e.title.toLowerCase().includes(n.query)}))),n.status){case"active":return e.filter((function(e){return!e.completed}));case"completed":return e.filter((function(e){return e.completed}));default:return e}}),[n]);return Object(C.jsx)(C.Fragment,{children:a.length?Object(C.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(C.jsx)("thead",{children:Object(C.jsxs)("tr",{children:[Object(C.jsx)("th",{children:"#"}),Object(C.jsx)("th",{children:Object(C.jsx)("span",{className:"icon",children:Object(C.jsx)("i",{className:"fas fa-check"})})}),Object(C.jsx)("th",{children:"Title"}),Object(C.jsx)("th",{children:" "})]})}),Object(C.jsx)("tbody",{children:a.map((function(c){var n=c.id,a=c.title,s=c.completed,r=n===(null===t||void 0===t?void 0:t.id);return Object(C.jsxs)("tr",{"data-cy":"todo",className:E()({"has-background-info-light":r}),children:[Object(C.jsx)("td",{className:"is-vcentered",children:n}),Object(C.jsx)("td",{className:"is-vcentered",children:s&&Object(C.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(C.jsx)("i",{className:"fas fa-check"})})}),Object(C.jsx)("td",{className:"is-vcentered is-expanded",children:Object(C.jsx)("p",{className:E()({"has-text-success":s,"has-text-danger":!s}),children:a})}),Object(C.jsx)("td",{className:"has-text-right is-vcentered",children:Object(C.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return function(t){e(d(t))}(c)},children:Object(C.jsx)("span",{className:"icon",children:Object(C.jsx)("i",{className:E()("far",{"fa-eye":!r,"fa-eye-slash":r})})})})})]},n)}))})]}):Object(C.jsx)("p",{className:"notification is-warning",children:"There are no todos matching current filter criteria"})})},_=function(){var e=Object(T.useState)(""),t=Object(g.a)(e,2),c=t[0],n=t[1],a=k();return Object(C.jsxs)("form",{className:"field has-addons",onSubmit:function(e){return e.preventDefault()},children:[Object(C.jsx)("p",{className:"control",children:Object(C.jsx)("span",{className:"select",children:Object(C.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){a(O(e.target.value))},children:[Object(C.jsx)("option",{value:"all",children:"All"}),Object(C.jsx)("option",{value:"active",children:"Active"}),Object(C.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(C.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(C.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:c,onChange:function(e){var t=e.target.value;n(t),a(h(t))}}),Object(C.jsx)("span",{className:"icon is-left",children:Object(C.jsx)("i",{className:"fas fa-magnifying-glass"})}),!!c&&Object(C.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(C.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){n(""),a(h(""))}})})]})]})},q=(c(28),function(){return Object(C.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(C.jsx)("div",{className:"Loader__content"})})});function A(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var F=function(){var e=Object(T.useState)(!1),t=Object(g.a)(e,2),c=t[0],n=t[1],a=Object(T.useState)(),s=Object(g.a)(a,2),r=s[0],l=s[1],i=k(),o=w((function(e){return e.currentTodo}));Object(T.useEffect)((function(){var e;n(!0),o&&(e=o.userId,A("/users/".concat(e))).then(l).finally((function(){return n(!1)}))}),[]);return Object(C.jsx)(C.Fragment,{children:o&&Object(C.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(C.jsx)("div",{className:"modal-background"}),c&&Object(C.jsx)(q,{}),r&&Object(C.jsxs)("div",{className:"modal-card",children:[Object(C.jsxs)("header",{className:"modal-card-head",children:[Object(C.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(o.id)}),Object(C.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){i(j())}})]}),Object(C.jsxs)("div",{className:"modal-card-body",children:[Object(C.jsx)("p",{className:"block","data-cy":"modal-title",children:o.title}),Object(C.jsxs)("p",{className:"block","data-cy":"modal-user",children:[o.completed?Object(C.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(C.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(C.jsx)("a",{href:"mailto:".concat(r.email),children:r.name})]})]})]})]})})},L=function(){var e=Object(T.useState)(!1),t=Object(g.a)(e,2),c=t[0],n=t[1],a=w((function(e){return e.todos})),s=w((function(e){return e.currentTodo})),r=k();return Object(T.useEffect)((function(){n(!0),A("/todos").then((function(e){return r(p(e))})).finally((function(){return n(!1)}))}),[]),Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("div",{className:"section",children:Object(C.jsx)("div",{className:"container",children:Object(C.jsxs)("div",{className:"box",children:[Object(C.jsx)("h1",{className:"title",children:"Todos:"}),c&&Object(C.jsx)(q,{}),!!a.length&&Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("div",{className:"block",children:Object(C.jsx)(_,{})}),Object(C.jsx)("div",{className:"block",children:Object(C.jsx)(R,{})})]})]})})}),s&&Object(C.jsx)(F,{})]})},M=function(){return Object(C.jsx)(s.a,{store:N,children:Object(C.jsx)(r.a,{children:Object(C.jsx)(L,{})})})};a.a.render(Object(C.jsx)(M,{}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.06e25a20.chunk.js.map