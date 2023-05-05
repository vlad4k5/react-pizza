(this["webpackJsonpreact-pizza"]=this["webpackJsonpreact-pizza"]||[]).push([[0],{43:function(e,t,c){},73:function(e,t,c){"use strict";c.r(t);var i=c(0),n=c.n(i),s=c(18),r=c.n(s),a=(c(43),c(7)),o=c(11),l=c.p+"static/media/pizza-logo.56ac8703.svg",d=c(15),j=c.n(d),u=c(1),b=function(e){var t=e.onClick,c=e.className,i=e.outline,n=e.children;return Object(u.jsx)("button",{onClick:t,className:j()("button",c,{"button--outline":i}),children:n})},h=function(){var e=Object(a.c)((function(e){return e.cart})),t=e.totalPrice,c=e.totalCount;return Object(u.jsx)("header",{className:"header",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(o.b,{to:"/",children:Object(u.jsxs)("div",{className:"header__logo",children:[Object(u.jsx)("img",{width:"38",src:l,alt:"Pizza logo"}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Pizza"}),Object(u.jsx)("p",{children:"\u043d\u0430\u0439\u0441\u043c\u0430\u0447\u043d\u0456\u0448\u0430 \u043f\u0456\u0446\u0430"})]})]})}),Object(u.jsx)("div",{className:"header__cart",children:Object(u.jsx)(b,{className:"button--cart",children:Object(u.jsxs)(o.b,{to:"/cart",children:[Object(u.jsxs)("span",{children:[t," \u0433\u0440\u043d."]}),Object(u.jsx)("div",{className:"button__delimiter"}),Object(u.jsxs)("svg",{viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(u.jsx)("path",{d:"M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),Object(u.jsx)("path",{d:"M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),Object(u.jsx)("path",{d:"M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]}),Object(u.jsx)("span",{children:c})]})})})]})})},p=c(4),O=c(17),x=c(3),m=function(e){var t=e.activeCategory,c=e.items,i=e.onClickCategory;return Object(u.jsx)("div",{className:"categories",children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{className:null===t?"active":"",onClick:function(){return i(null)},children:"\u0412\u0441\u0456"}),c&&c.map((function(e,c){return Object(u.jsx)("li",{className:t===c?"active":"",onClick:function(){return i(c)},children:e},"".concat(e," ").concat(c))}))]})})},C=n.a.memo(m),f=c(13),v=function(e){var t=e.id,c=e.imageUrl,n=e.name,s=e.price,r=e.types,a=e.sizes,o=e.onClickAddPizza,l=(e.addedCount,e.cartItems),d=["\u0442\u043e\u043d\u043a\u0435","\u0442\u0440\u0430\u0434\u0438\u0446\u0456\u0439\u043d\u0435"],h=Object(i.useState)(r[0]),p=Object(f.a)(h,2),O=p[0],x=p[1],m=Object(i.useState)(a[0]),C=Object(f.a)(m,2),v=C[0],y=C[1],z=Object(i.useState)(s[0]),k=Object(f.a)(z,2),g=k[0],w=k[1],_=l.filter((function(e){return e.id===t&&e.size===v&&e.type===d[O]})).reduce((function(e,t){return t.pizzasAdded+e}),0);return Object(u.jsxs)("div",{className:"pizza-block",children:[Object(u.jsx)("img",{className:"pizza-block__image",src:c,alt:"Pizza"}),Object(u.jsx)("h4",{className:"pizza-block__title",children:n}),Object(u.jsxs)("div",{className:"pizza-block__selector",children:[Object(u.jsx)("ul",{children:d.map((function(e,t){return Object(u.jsx)("li",{onClick:function(){return function(e){x(e)}(t)},className:j()({active:O===t,disabled:!r.includes(t)}),children:e},"".concat(e," ").concat(t))}))}),Object(u.jsx)("ul",{children:[25,30,35].map((function(e,t){return Object(u.jsxs)("li",{onClick:function(){return function(e,t){y(e),w(s[t])}(e,t)},className:j()({active:v===e,disabled:!a.includes(e)}),children:[e," \u0441\u043c."]},"".concat(e," ").concat(t))}))})]}),Object(u.jsxs)("div",{className:"pizza-block__bottom",children:[Object(u.jsxs)("div",{className:"pizza-block__price",children:[" ",g," \u0433\u0440\u043d."]}),Object(u.jsxs)(b,{onClick:function(){o({id:t,imageUrl:c,name:n,price:g,size:v,type:d[O]})},className:"button--add",outline:!0,children:[Object(u.jsx)("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(u.jsx)("path",{d:"M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z",fill:"white"})}),Object(u.jsx)("span",{children:"\u0414\u043e\u0434\u0430\u0442\u0438"}),0!==_&&Object(u.jsx)("i",{children:_})]})]})]})},y=n.a.memo(v),z=function(e){var t=e.items,c=e.activeSortType,n=e.onClickSortType,s=Object(i.useState)(!1),r=Object(f.a)(s,2),a=r[0],o=r[1],l=Object(i.useRef)(null),d=t.find((function(e){return e.type===c})).name,j=function(e){(e.path||e.composedPath&&e.composedPath()).includes(l.current)||o(!1)};return Object(i.useEffect)((function(){document.body.addEventListener("click",j)}),[]),Object(u.jsxs)("div",{className:"sort",ref:l,children:[Object(u.jsxs)("div",{className:"sort__label",children:[Object(u.jsx)("svg",{width:"10",height:"6",viewBox:"0 0 10 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:a?"rotate":"",children:Object(u.jsx)("path",{d:"M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z",fill:"#2C2C2C"})}),Object(u.jsx)("b",{children:"\u0421\u043e\u0440\u0442\u0443\u0432\u0430\u043d\u043d\u044f \u0437\u0430:"}),Object(u.jsx)("span",{onClick:function(){o(!a)},children:d})]}),a&&Object(u.jsx)("div",{className:"sort__popup",children:Object(u.jsx)("ul",{children:t.map((function(e,t){return Object(u.jsx)("li",{onClick:function(){return function(e){n(e),o(!1)}({type:e.type,order:e.order})},className:c===e.type?"active":"",children:e.name},"".concat(e.type," ").concat(t))}))})})]})},k=n.a.memo(z),g="filters/SET_SORT_BY",w="filters/SET_CATEGORY",_={category:null,sortBy:{type:"rating",order:"desc"}},L=function(e){return{type:g,payload:e}},N=function(e){return{type:w,payload:e}},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(x.a)(Object(x.a)({},e),{},{sortBy:t.payload});case w:return Object(x.a)(Object(x.a)({},e),{},{category:t.payload});default:return e}},P=c(25),A=c.n(P),E=c(35),M=c(36),V=c.n(M),T="pizzas/SET_PIZZAS",Z="pizzas/SET_LOADING",H={items:[],isLoaded:!1},S=function(e){return{type:T,payload:e}},W=function(e){return{type:Z,payload:e}},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return Object(x.a)(Object(x.a)({},e),{},{items:t.payload,isLoaded:!0});case Z:return Object(x.a)(Object(x.a)({},e),{},{isLoaded:t.payload});default:return e}},D=c(37),I=function(){return window.innerWidth>600?Object(u.jsxs)(D.a,{className:"pizza-block",speed:2,width:280,height:456,viewBox:"0 0 280 456",backgroundColor:"#f2f2f2",foregroundColor:"#ecebeb",children:[Object(u.jsx)("rect",{x:"534",y:"113",rx:"0",ry:"0",width:"88",height:"71"}),Object(u.jsx)("rect",{x:"573",y:"182",rx:"10",ry:"10",width:"150",height:"90"}),Object(u.jsx)("rect",{x:"572",y:"244",rx:"3",ry:"3",width:"150",height:"15"}),Object(u.jsx)("rect",{x:"577",y:"251",rx:"3",ry:"3",width:"90",height:"15"}),Object(u.jsx)("rect",{x:"576",y:"248",rx:"8",ry:"8",width:"80",height:"25"}),Object(u.jsx)("rect",{x:"564",y:"515",rx:"8",ry:"8",width:"32",height:"32"}),Object(u.jsx)("circle",{cx:"135",cy:"125",r:"125"}),Object(u.jsx)("rect",{x:"40",y:"270",rx:"5",ry:"5",width:"200",height:"24"}),Object(u.jsx)("rect",{x:"0",y:"310",rx:"10",ry:"10",width:"280",height:"84"}),Object(u.jsx)("rect",{x:"5",y:"420",rx:"5",ry:"5",width:"90",height:"30"}),Object(u.jsx)("rect",{x:"125",y:"410",rx:"20",ry:"20",width:"150",height:"45"})]}):null},U="cart/ADD_PIZZA_TO_CART",G="cart/DECREASE_PIZZAS_COUNT",J="cart/DELETE_PIZZA_FROM_CART",Y="cart/CLEAR_CART",F={items:[],totalPrice:0,totalCount:0},q=function(e){return{type:U,payload:e}},K=function(e){return{type:G,payload:e}},Q=function(e){return{type:J,payload:e}},X=function(){return{type:Y}},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U:var c=e.items.find((function(e){return e.id===t.payload.id&&e.size===t.payload.size&&e.type===t.payload.type}));if(void 0===c)return Object(x.a)(Object(x.a)({},e),{},{items:[].concat(Object(O.a)(e.items),[Object(x.a)(Object(x.a)({},t.payload),{},{pizzasAdded:1,pizzasTotalPrice:t.payload.price})]),totalPrice:e.totalPrice+t.payload.price,totalCount:e.totalCount+1});var i=e.items.indexOf(c),n=Object(x.a)({},e);return n.items=Object(O.a)(e.items),n.items[i].pizzasAdded+=1,n.items[i].pizzasTotalPrice+=t.payload.price,n.totalCount+=1,n.totalPrice+=n.items[i].price,n;case J:var s=e.items.find((function(e){return e.id===t.payload.id&&e.size===t.payload.size&&e.type===t.payload.type}));if(void 0!==s){var r=e.items.filter((function(e){return e!==s})),a=e.totalPrice-s.pizzasTotalPrice,o=e.totalCount-s.pizzasAdded;return Object(x.a)(Object(x.a)({},e),{},{items:r,totalPrice:a,totalCount:o})}return e;case G:var l=e.items.find((function(e){return e.id===t.payload.id&&e.size===t.payload.size&&e.type===t.payload.type}));if(l&&l.pizzasAdded>1){var d=e.items.indexOf(l),j=Object(x.a)({},e);return j.items[d].pizzasAdded-=1,j.items[d].pizzasTotalPrice-=j.items[d].price,j.totalCount-=1,j.totalPrice-=j.items[d].price,j}return e;case Y:return Object(x.a)(Object(x.a)({},e),{},{items:[],totalCount:0,totalPrice:0});default:return e}},ee=["\u041c\u044f\u0441\u043d\u0456","\u0412\u0435\u0433\u0435\u0442\u0430\u0440\u0456\u0430\u043d\u0441\u044c\u043a\u0456","\u0413\u0440\u0438\u043b\u044c","\u0413\u043e\u0441\u0442\u0440\u0456","\u0417\u0430\u043a\u0440\u0438\u0442\u0456"],te=[{name:"\u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u0456\u0441\u0442\u044e",type:"rating",order:"desc"},{name:"\u0446\u0456\u043d\u043e\u044e",type:"price",order:"asc"},{name:"\u0430\u043b\u0444\u0430\u0432\u0456\u0442\u0443",type:"name",order:"asc"}],ce=function(){var e=Object(a.b)(),t=Object(a.c)((function(e){return e.pizzas.items})),c=Object(a.c)((function(e){return e.cart.items})),n=Object(a.c)((function(e){return e.pizzas.isLoaded})),s=Object(a.c)((function(e){return e.filters})),r=s.category,o=s.sortBy;Object(i.useEffect)((function(){e(function(e,t){return function(){var c=Object(E.a)(A.a.mark((function c(i){var n;return A.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return i(W(!1)),c.next=3,V.a.get("https://my-json-server.typicode.com/vlad4k5/react-pizza/pizzas?".concat(null!==t?"category=".concat(t):"","&_sort=").concat(e.type,"&_order=").concat(e.order));case 3:n=c.sent,i(S(n.data));case 5:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}()}(o,r))}),[e,o,r]);var l=Object(i.useCallback)((function(t){e(N(t))}),[e]),d=Object(i.useCallback)((function(t){e(L(t))}),[e]),j=function(t){e(q(t))};return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("div",{className:"content__top",children:[Object(u.jsx)(C,{activeCategory:r,items:ee,onClickCategory:function(e){return l(e)}}),Object(u.jsx)(k,{onClickSortType:function(e){return d(e)},items:te,activeSortType:o.type})]}),Object(u.jsxs)("h2",{className:"content__title",children:[null===r?"\u0412\u0441\u0456":ee[r]," \u043f\u0456\u0446\u0438"]}),Object(u.jsx)("div",{className:"content__items",children:n?t.map((function(e){return Object(u.jsx)(y,Object(x.a)({cartItems:c,onClickAddPizza:j,addedCount:c.filter((function(t){return t.id===e.id})).reduce((function(e,t){return t.pizzasAdded+e}),0)},e),e.id)})):Object(O.a)(Array(12)).map((function(e,t){return Object(u.jsx)(I,{},t)}))})]})},ie=function(e){var t=e.id,c=e.price,i=e.name,n=e.type,s=e.size,r=e.pizzasAdded,a=e.pizzasTotalPrice,o=e.imageUrl,l=e.onClickPlus,d=e.onClickMinus,j=e.onClickRemovePizza;return Object(u.jsxs)("div",{className:"cart__item",children:[Object(u.jsx)("div",{className:"cart__item-img",children:Object(u.jsx)("img",{className:"pizza-block__image",src:o,alt:"Pizza"})}),Object(u.jsxs)("div",{className:"cart__item-info",children:[Object(u.jsx)("h3",{children:i}),Object(u.jsxs)("p",{children:[n," \u0442\u0456\u0441\u0442\u043e, ",s," \u0441\u043c."]})]}),Object(u.jsxs)("div",{className:"cart__item-count",children:[Object(u.jsx)(b,{className:"button button--circle cart__item-count-minus",onClick:function(){d({id:t,size:s,type:n})},outline:!0,children:Object(u.jsxs)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(u.jsx)("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),Object(u.jsx)("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})]})}),Object(u.jsx)("b",{children:r}),Object(u.jsx)(b,{className:"button button--circle cart__item-count-plus",onClick:function(){l({id:t,imageUrl:o,name:i,price:c,size:s,type:n})},outline:!0,children:Object(u.jsxs)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(u.jsx)("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),Object(u.jsx)("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})]})})]}),Object(u.jsx)("div",{className:"cart__item-price",children:Object(u.jsxs)("b",{children:[a," \u0433\u0440\u043d."]})}),Object(u.jsx)("div",{className:"cart__item-remove",onClick:function(){j({id:t,size:s,type:n})},children:Object(u.jsx)(b,{className:"button button--circle",outline:!0,children:Object(u.jsxs)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(u.jsx)("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),Object(u.jsx)("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})]})})})]})},ne=n.a.memo(ie),se=c.p+"static/media/empty-cart.db905d1f.png",re=function(){var e=Object(a.c)((function(e){return e.cart})),t=e.items,c=e.totalPrice,i=e.totalCount,n=Object(a.b)(),s=function(e){n(q(e))},r=function(e){n(K(e))},l=function(e){n(Q(e))};return Object(u.jsx)("div",{className:"container container--cart",children:0!==t.length?Object(u.jsxs)("div",{className:"cart",children:[Object(u.jsxs)("div",{className:"cart__wrapper",children:[Object(u.jsxs)("div",{className:"cart__top",children:[Object(u.jsxs)("h2",{className:"content__title",children:[Object(u.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(u.jsx)("path",{d:"M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),Object(u.jsx)("path",{d:"M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),Object(u.jsx)("path",{d:"M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]}),"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"]}),Object(u.jsxs)("div",{className:"cart__clear",children:[Object(u.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(u.jsx)("path",{d:"M2.5 5H4.16667H17.5",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),Object(u.jsx)("path",{d:"M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),Object(u.jsx)("path",{d:"M8.33337 9.16667V14.1667",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),Object(u.jsx)("path",{d:"M11.6666 9.16667V14.1667",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"})]}),Object(u.jsx)("span",{onClick:function(){n(X())},children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u0438 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"})]})]}),Object(u.jsx)("div",{className:"content__items",children:t&&t.map((function(e){return Object(u.jsx)(ne,Object(x.a)({onClickPlus:s,onClickMinus:r,onClickRemovePizza:l},e),"".concat(e.id," ").concat(e.size," ").concat(e.type))}))})]}),Object(u.jsxs)("div",{className:"cart__bottom",children:[Object(u.jsxs)("div",{className:"cart__bottom-details",children:[Object(u.jsxs)("span",{children:[" ","\u0412\u0441\u044c\u043e\u0433\u043e \u043f\u0456\u0446: ",Object(u.jsxs)("b",{children:[i," \u0448\u0442."]})," "]}),Object(u.jsxs)("span",{children:[" ","\u0421\u0443\u043c\u0430 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f: ",Object(u.jsxs)("b",{children:[c," \u0433\u0440\u043d."]})," "]})]}),Object(u.jsxs)("div",{className:"cart__bottom-buttons",children:[Object(u.jsxs)(o.b,{to:"/",className:"button button--outline button--add go-back-btn",children:[Object(u.jsx)("svg",{width:"8",height:"14",viewBox:"0 0 8 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(u.jsx)("path",{d:"M7 13L1 6.93015L6.86175 1",stroke:"#D3D3D3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),Object(u.jsx)("span",{children:"\u041f\u043e\u0432\u0435\u0440\u043d\u0443\u0442\u0438\u0441\u044f \u043d\u0430\u0437\u0430\u0434"})]}),Object(u.jsx)("div",{className:"button pay-btn",children:Object(u.jsx)("span",{children:"\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u0438 \u0437\u0430\u0440\u0430\u0437"})})]})]})]}):Object(u.jsxs)("div",{className:"cart cart--empty",children:[Object(u.jsx)("h2",{children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u043e\u0440\u043e\u0436\u043d\u044f \ud83d\ude15"}),Object(u.jsx)("p",{children:"\u041f\u0435\u0440\u0435\u0439\u0434\u0456\u0442\u044c \u043d\u0430 \u0433\u043e\u043b\u043e\u0432\u043d\u0443 \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0443 \u0449\u043e\u0431 \u0434\u043e\u0434\u0430\u0442\u0438 \u043f\u0456\u0446\u0443 \u0434\u043e \u043a\u043e\u0448\u0438\u043a\u0443."}),Object(u.jsx)("img",{src:se,alt:"Empty cart"}),Object(u.jsx)(o.b,{to:"/",className:"button button--black",children:Object(u.jsx)("span",{children:"\u041f\u043e\u0432\u0435\u0440\u043d\u0443\u0442\u0438\u0441\u044f \u043d\u0430\u0437\u0430\u0434"})})]})})},ae=function(){return Object(u.jsxs)("div",{className:"wrapper",children:[Object(u.jsx)(h,{}),Object(u.jsx)("div",{className:"content",children:Object(u.jsxs)(p.c,{children:[Object(u.jsx)(p.a,{exact:!0,path:"/",component:ce}),Object(u.jsx)(p.a,{path:"/cart",component:re})]})})]})},oe=c(20),le=c(38),de=Object(oe.b)({filters:B,pizzas:R,cart:$}),je=Object(oe.c)(de,Object(oe.a)(le.a));r.a.render(Object(u.jsx)(o.a,{children:Object(u.jsx)(a.a,{store:je,children:Object(u.jsx)(ae,{})})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.1b54e49b.chunk.js.map