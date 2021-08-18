(this["webpackJsonpreact-pizza"]=this["webpackJsonpreact-pizza"]||[]).push([[0],{43:function(e,t,c){},73:function(e,t,c){"use strict";c.r(t);var i=c(19),n=c.n(i),s=(c(43),c(7)),r=c(11),a=c.p+"static/media/pizza-logo.56ac8703.svg",o=c(15),l=c.n(o),d=c(1),j=function(e){var t=e.onClick,c=e.className,i=e.outline,n=e.children;return Object(d.jsx)("button",{onClick:t,className:l()("button",c,{"button--outline":i}),children:n})},u=function(){var e=Object(s.c)((function(e){return e.cart})),t=e.totalPrice,c=e.totalCount;return Object(d.jsx)("header",{className:"header",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(r.b,{to:"/",children:Object(d.jsxs)("div",{className:"header__logo",children:[Object(d.jsx)("img",{width:"38",src:a,alt:"Pizza logo"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"React Pizza"}),Object(d.jsx)("p",{children:"\u0441\u0430\u043c\u0430\u044f \u0432\u043a\u0443\u0441\u043d\u0430\u044f \u043f\u0438\u0446\u0446\u0430 \u0432\u043e \u0432\u0441\u0435\u043b\u0435\u043d\u043d\u043e\u0439"})]})]})}),Object(d.jsx)("div",{className:"header__cart",children:Object(d.jsx)(j,{className:"button--cart",children:Object(d.jsxs)(r.b,{to:"/cart",children:[Object(d.jsxs)("span",{children:[t," \u0433\u0440\u043d."]}),Object(d.jsx)("div",{className:"button__delimiter"}),Object(d.jsxs)("svg",{viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(d.jsx)("path",{d:"M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),Object(d.jsx)("path",{d:"M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),Object(d.jsx)("path",{d:"M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]}),Object(d.jsx)("span",{children:c})]})})})]})})},b=c(4),h=c(17),p=c(3),O=c(0),x=c.n(O),m=x.a.memo((function(e){var t=e.activeCategory,c=e.items,i=e.onClickCategory;return Object(d.jsx)("div",{className:"categories",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{className:null===t?"active":"",onClick:function(){return i(null)},children:"\u0412\u0441\u0435"}),c&&c.map((function(e,c){return Object(d.jsx)("li",{className:t===c?"active":"",onClick:function(){return i(c)},children:e},"".concat(e," ").concat(c))}))]})})})),C=c(13),f=x.a.memo((function(e){var t=e.id,c=e.imageUrl,i=e.name,n=e.price,s=e.types,r=e.sizes,a=e.onClickAddPizza,o=(e.addedCount,e.cartItems),u=["\u0442\u043e\u043d\u043a\u043e\u0435","\u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043e\u043d\u043d\u043e\u0435"],b=Object(O.useState)(s[0]),h=Object(C.a)(b,2),p=h[0],x=h[1],m=Object(O.useState)(r[0]),f=Object(C.a)(m,2),v=f[0],y=f[1],z=Object(O.useState)(n[0]),k=Object(C.a)(z,2),w=k[0],g=k[1],_=o.filter((function(e){return e.id===t&&e.size===v&&e.type===u[p]})).reduce((function(e,t){return t.pizzasAdded+e}),0);return Object(d.jsxs)("div",{className:"pizza-block",children:[Object(d.jsx)("img",{className:"pizza-block__image",src:c,alt:"Pizza"}),Object(d.jsx)("h4",{className:"pizza-block__title",children:i}),Object(d.jsxs)("div",{className:"pizza-block__selector",children:[Object(d.jsx)("ul",{children:u.map((function(e,t){return Object(d.jsx)("li",{onClick:function(){return function(e){x(e)}(t)},className:l()({active:p===t,disabled:!s.includes(t)}),children:e},"".concat(e," ").concat(t))}))}),Object(d.jsx)("ul",{children:[25,30,35].map((function(e,t){return Object(d.jsxs)("li",{onClick:function(){return function(e,t){y(e),g(n[t])}(e,t)},className:l()({active:v===e,disabled:!r.includes(e)}),children:[e," \u0441\u043c."]},"".concat(e," ").concat(t))}))})]}),Object(d.jsxs)("div",{className:"pizza-block__bottom",children:[Object(d.jsxs)("div",{className:"pizza-block__price",children:[" ",w," \u0433\u0440\u043d."]}),Object(d.jsxs)(j,{onClick:function(){a({id:t,imageUrl:c,name:i,price:w,size:v,type:u[p]})},className:"button--add",outline:!0,children:[Object(d.jsx)("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(d.jsx)("path",{d:"M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z",fill:"white"})}),Object(d.jsx)("span",{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}),0!==_&&Object(d.jsx)("i",{children:_})]})]})]})})),v=x.a.memo((function(e){var t=e.items,c=e.activeSortType,i=e.onClickSortType,n=Object(O.useState)(!1),s=Object(C.a)(n,2),r=s[0],a=s[1],o=Object(O.useRef)(null),l=t.find((function(e){return e.type===c})).name,j=function(e){(e.path||e.composedPath&&e.composedPath()).includes(o.current)||a(!1)};return Object(O.useEffect)((function(){document.body.addEventListener("click",j)}),[]),Object(d.jsxs)("div",{className:"sort",ref:o,children:[Object(d.jsxs)("div",{className:"sort__label",children:[Object(d.jsx)("svg",{width:"10",height:"6",viewBox:"0 0 10 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:r?"rotate":"",children:Object(d.jsx)("path",{d:"M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z",fill:"#2C2C2C"})}),Object(d.jsx)("b",{children:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430 \u043f\u043e:"}),Object(d.jsx)("span",{onClick:function(){a(!r)},children:l})]}),r&&Object(d.jsx)("div",{className:"sort__popup",children:Object(d.jsx)("ul",{children:t.map((function(e,t){return Object(d.jsx)("li",{onClick:function(){return function(e){i(e),a(!1)}({type:e.type,order:e.order})},className:c===e.type?"active":"",children:e.name},"".concat(e.type," ").concat(t))}))})})]})})),y="filters/SET_SORT_BY",z="filters/SET_CATEGORY",k={category:null,sortBy:{type:"rating",order:"desc"}},w=function(e){return{type:y,payload:e}},g=function(e){return{type:z,payload:e}},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(p.a)(Object(p.a)({},e),{},{sortBy:t.payload});case z:return Object(p.a)(Object(p.a)({},e),{},{category:t.payload});default:return e}},L=c(25),N=c.n(L),E=c(35),B=c(36),P=c.n(B),A="pizzas/SET_PIZZAS",M="pizzas/SET_LOADING",T={items:[],isLoaded:!1},V=function(e){return{type:A,payload:e}},Z=function(e){return{type:M,payload:e}},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return Object(p.a)(Object(p.a)({},e),{},{items:t.payload,isLoaded:!0});case M:return Object(p.a)(Object(p.a)({},e),{},{isLoaded:t.payload});default:return e}},H=c(37),R=function(){return window.innerWidth>420?Object(d.jsxs)(H.a,{className:"pizza-block",speed:2,width:280,height:456,viewBox:"0 0 280 456",backgroundColor:"#f2f2f2",foregroundColor:"#ecebeb",children:[Object(d.jsx)("rect",{x:"534",y:"113",rx:"0",ry:"0",width:"88",height:"71"}),Object(d.jsx)("rect",{x:"573",y:"182",rx:"10",ry:"10",width:"150",height:"90"}),Object(d.jsx)("rect",{x:"572",y:"244",rx:"3",ry:"3",width:"150",height:"15"}),Object(d.jsx)("rect",{x:"577",y:"251",rx:"3",ry:"3",width:"90",height:"15"}),Object(d.jsx)("rect",{x:"576",y:"248",rx:"8",ry:"8",width:"80",height:"25"}),Object(d.jsx)("rect",{x:"564",y:"515",rx:"8",ry:"8",width:"32",height:"32"}),Object(d.jsx)("circle",{cx:"135",cy:"125",r:"125"}),Object(d.jsx)("rect",{x:"40",y:"270",rx:"5",ry:"5",width:"200",height:"24"}),Object(d.jsx)("rect",{x:"0",y:"310",rx:"10",ry:"10",width:"280",height:"84"}),Object(d.jsx)("rect",{x:"5",y:"420",rx:"5",ry:"5",width:"90",height:"30"}),Object(d.jsx)("rect",{x:"125",y:"410",rx:"20",ry:"20",width:"150",height:"45"})]}):null},W="cart/ADD_PIZZA_TO_CART",D="cart/DECREASE_PIZZAS_COUNT",I="cart/DELETE_PIZZA_FROM_CART",U="cart/CLEAR_CART",G={items:[],totalPrice:0,totalCount:0},J=function(e){return{type:W,payload:e}},X=function(e){return{type:D,payload:e}},Y=function(e){return{type:I,payload:e}},F=function(){return{type:U}},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case W:var c=e.items.find((function(e){return e.id===t.payload.id&&e.size===t.payload.size&&e.type===t.payload.type}));if(void 0===c)return Object(p.a)(Object(p.a)({},e),{},{items:[].concat(Object(h.a)(e.items),[Object(p.a)(Object(p.a)({},t.payload),{},{pizzasAdded:1,pizzasTotalPrice:t.payload.price})]),totalPrice:e.totalPrice+t.payload.price,totalCount:e.totalCount+1});var i=e.items.indexOf(c),n=Object(p.a)({},e);return n.items=Object(h.a)(e.items),n.items[i].pizzasAdded+=1,n.items[i].pizzasTotalPrice+=t.payload.price,n.totalCount+=1,n.totalPrice+=n.items[i].price,n;case I:var s=e.items.find((function(e){return e.id===t.payload.id&&e.size===t.payload.size&&e.type===t.payload.type}));if(void 0!==s){var r=e.items.filter((function(e){return e!==s})),a=e.totalPrice-s.pizzasTotalPrice,o=e.totalCount-s.pizzasAdded;return Object(p.a)(Object(p.a)({},e),{},{items:r,totalPrice:a,totalCount:o})}return e;case D:var l=e.items.find((function(e){return e.id===t.payload.id&&e.size===t.payload.size&&e.type===t.payload.type}));if(l&&l.pizzasAdded>1){var d=e.items.indexOf(l),j=Object(p.a)({},e);return j.items[d].pizzasAdded-=1,j.items[d].pizzasTotalPrice-=j.items[d].price,j.totalCount-=1,j.totalPrice-=j.items[d].price,j}return e;case U:return Object(p.a)(Object(p.a)({},e),{},{items:[],totalCount:0,totalPrice:0});default:return e}},K=["\u041c\u044f\u0441\u043d\u044b\u0435","\u0412\u0435\u0433\u0435\u0442\u0430\u0440\u0438\u0430\u043d\u0441\u043a\u0438\u0435","\u0413\u0440\u0438\u043b\u044c","\u041e\u0441\u0442\u0440\u044b\u0435","\u0417\u0430\u043a\u0440\u044b\u0442\u044b\u0435"],Q=[{name:"\u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0441\u0442\u0438",type:"rating",order:"desc"},{name:"\u0446\u0435\u043d\u0435",type:"price",order:"asc"},{name:"\u0430\u043b\u0444\u0430\u0432\u0438\u0442\u0443",type:"name",order:"asc"}],$=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.pizzas.items})),c=Object(s.c)((function(e){return e.cart.items})),i=Object(s.c)((function(e){return e.pizzas.isLoaded})),n=Object(s.c)((function(e){return e.filters})),r=n.category,a=n.sortBy;Object(O.useEffect)((function(){e(function(e,t){return function(){var c=Object(E.a)(N.a.mark((function c(i){var n;return N.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return i(Z(!1)),c.next=3,P.a.get("https://my-json-server.typicode.com/vlad4k5/react-pizza/pizzas?".concat(null!==t?"category=".concat(t):"","&_sort=").concat(e.type,"&_order=").concat(e.order));case 3:n=c.sent,i(V(n.data));case 5:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}()}(a,r))}),[e,a,r]);var o=Object(O.useCallback)((function(t){e(g(t))}),[e]),l=Object(O.useCallback)((function(t){e(w(t))}),[e]),j=function(t){e(J(t))};return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("div",{className:"content__top",children:[Object(d.jsx)(m,{activeCategory:r,items:K,onClickCategory:function(e){return o(e)}}),Object(d.jsx)(v,{onClickSortType:function(e){return l(e)},items:Q,activeSortType:a.type})]}),Object(d.jsxs)("h2",{className:"content__title",children:[null===r?"\u0412\u0441\u0435":K[r]," \u043f\u0438\u0446\u0446\u044b"]}),Object(d.jsx)("div",{className:"content__items",children:i?t.map((function(e){return Object(d.jsx)(f,Object(p.a)({cartItems:c,onClickAddPizza:j,addedCount:c.filter((function(t){return t.id===e.id})).reduce((function(e,t){return t.pizzasAdded+e}),0)},e),e.id)})):Object(h.a)(Array(12)).map((function(e,t){return Object(d.jsx)(R,{},t)}))})]})},ee=x.a.memo((function(e){var t=e.id,c=e.price,i=e.name,n=e.type,s=e.size,r=e.pizzasAdded,a=e.pizzasTotalPrice,o=e.imageUrl,l=e.onClickPlus,u=e.onClickMinus,b=e.onClickRemovePizza;return Object(d.jsxs)("div",{className:"cart__item",children:[Object(d.jsx)("div",{className:"cart__item-img",children:Object(d.jsx)("img",{className:"pizza-block__image",src:o,alt:"Pizza"})}),Object(d.jsxs)("div",{className:"cart__item-info",children:[Object(d.jsx)("h3",{children:i}),Object(d.jsxs)("p",{children:[n," \u0442\u0435\u0441\u0442\u043e, ",s," \u0441\u043c."]})]}),Object(d.jsxs)("div",{className:"cart__item-count",children:[Object(d.jsx)(j,{className:"button button--circle cart__item-count-minus",onClick:function(){u({id:t,size:s,type:n})},outline:!0,children:Object(d.jsxs)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(d.jsx)("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),Object(d.jsx)("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})]})}),Object(d.jsx)("b",{children:r}),Object(d.jsx)(j,{className:"button button--circle cart__item-count-plus",onClick:function(){l({id:t,imageUrl:o,name:i,price:c,size:s,type:n})},outline:!0,children:Object(d.jsxs)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(d.jsx)("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),Object(d.jsx)("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})]})})]}),Object(d.jsx)("div",{className:"cart__item-price",children:Object(d.jsxs)("b",{children:[a," \u0433\u0440\u043d."]})}),Object(d.jsx)("div",{className:"cart__item-remove",onClick:function(){b({id:t,size:s,type:n})},children:Object(d.jsx)(j,{className:"button button--circle",outline:!0,children:Object(d.jsxs)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(d.jsx)("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),Object(d.jsx)("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})]})})})]})})),te=c.p+"static/media/empty-cart.db905d1f.png",ce=function(){var e=Object(s.c)((function(e){return e.cart})),t=e.items,c=e.totalPrice,i=e.totalCount,n=Object(s.b)(),a=function(e){n(J(e))},o=function(e){n(X(e))},l=function(e){n(Y(e))};return Object(d.jsx)("div",{className:"container container--cart",children:0!==t.length?Object(d.jsxs)("div",{className:"cart",children:[Object(d.jsxs)("div",{className:"cart__wrapper",children:[Object(d.jsxs)("div",{className:"cart__top",children:[Object(d.jsxs)("h2",{className:"content__title",children:[Object(d.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(d.jsx)("path",{d:"M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),Object(d.jsx)("path",{d:"M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),Object(d.jsx)("path",{d:"M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]}),"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"]}),Object(d.jsxs)("div",{className:"cart__clear",children:[Object(d.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(d.jsx)("path",{d:"M2.5 5H4.16667H17.5",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),Object(d.jsx)("path",{d:"M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),Object(d.jsx)("path",{d:"M8.33337 9.16667V14.1667",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),Object(d.jsx)("path",{d:"M11.6666 9.16667V14.1667",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"})]}),Object(d.jsx)("span",{onClick:function(){n(F())},children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043a\u043e\u0440\u0437\u0438\u043d\u0443"})]})]}),Object(d.jsx)("div",{className:"content__items",children:t&&t.map((function(e){return Object(d.jsx)(ee,Object(p.a)({onClickPlus:a,onClickMinus:o,onClickRemovePizza:l},e),"".concat(e.id," ").concat(e.size," ").concat(e.type))}))})]}),Object(d.jsxs)("div",{className:"cart__bottom",children:[Object(d.jsxs)("div",{className:"cart__bottom-details",children:[Object(d.jsxs)("span",{children:[" \u0412\u0441\u0435\u0433\u043e \u043f\u0438\u0446\u0446: ",Object(d.jsxs)("b",{children:[i," \u0448\u0442."]})," "]}),Object(d.jsxs)("span",{children:[" \u0421\u0443\u043c\u043c\u0430 \u0437\u0430\u043a\u0430\u0437\u0430: ",Object(d.jsxs)("b",{children:[c," \u0433\u0440\u043d."]})," "]})]}),Object(d.jsxs)("div",{className:"cart__bottom-buttons",children:[Object(d.jsxs)(r.b,{to:"/",className:"button button--outline button--add go-back-btn",children:[Object(d.jsx)("svg",{width:"8",height:"14",viewBox:"0 0 8 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(d.jsx)("path",{d:"M7 13L1 6.93015L6.86175 1",stroke:"#D3D3D3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),Object(d.jsx)("span",{children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"})]}),Object(d.jsx)("div",{className:"button pay-btn",children:Object(d.jsx)("span",{children:"\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u044c \u0441\u0435\u0439\u0447\u0430\u0441"})})]})]})]}):Object(d.jsxs)("div",{className:"cart cart--empty",children:[Object(d.jsx)("h2",{children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430\u044f \ud83d\ude15"}),Object(d.jsxs)("p",{children:["\u0412\u0435\u0440\u043e\u044f\u0442\u043d\u0435\u0439 \u0432\u0441\u0435\u0433\u043e, \u0432\u044b \u043d\u0435 \u0437\u0430\u043a\u0430\u0437\u044b\u0432\u0430\u043b\u0438 \u0435\u0449\u0451 \u043f\u0438\u0446\u0446\u0443.",Object(d.jsx)("br",{}),"\u0414\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u0437\u0430\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u0438\u0446\u0446\u0443, \u043f\u0435\u0440\u0435\u0439\u0434\u0438 \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443."]}),Object(d.jsx)("img",{src:te,alt:"Empty cart"}),Object(d.jsx)(r.b,{to:"/",className:"button button--black",children:Object(d.jsx)("span",{children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"})})]})})},ie=function(){return Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsx)(u,{}),Object(d.jsx)("div",{className:"content",children:Object(d.jsxs)(b.c,{children:[Object(d.jsx)(b.a,{exact:!0,path:"/",component:$}),Object(d.jsx)(b.a,{path:"/cart",component:ce})]})})]})},ne=c(18),se=c(38),re=Object(ne.b)({filters:_,pizzas:S,cart:q}),ae=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ne.c,oe=Object(ne.d)(re,ae(Object(ne.a)(se.a)));n.a.render(Object(d.jsx)(r.a,{children:Object(d.jsx)(s.a,{store:oe,children:Object(d.jsx)(ie,{})})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.11e01d8b.chunk.js.map