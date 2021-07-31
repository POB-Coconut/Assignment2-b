(this["webpackJsonpassignment2-b"]=this["webpackJsonpassignment2-b"]||[]).push([[0],{30:function(t,e,n){},38:function(t,e,n){},39:function(t,e,n){},40:function(t,e,n){},41:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n(22),c=n.n(r),s=(n(30),n(4)),i=n(5),o=n(7),d=n(6),u=n(2),l=n(12),h=n(18),p=n.n(h),j=n(23),b=n(8),g=n(13),f=n(0),O=function(t){Object(o.a)(n,t);var e=Object(d.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var t=this;return Object(f.jsx)("ul",{children:this.props.paginatedProducts.map((function(e){var n=e.title,a=e.id;return e.isNotInterested?Object(f.jsx)("li",{className:"products-list__product not-interested",children:Object(f.jsx)("h2",{children:n})},a):Object(f.jsx)("li",{className:"products-list__product card",onClick:function(){t.props.getProductDetail(a),t.props.updateRecentViews(a)},children:Object(f.jsx)(g.b,{to:"/product/".concat(a),children:Object(f.jsx)("h2",{children:n})})},a)}))})}}]),n}(a.Component),v=function(t){Object(o.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).product=a.props.curProduct,a}return Object(i.a)(n,[{key:"render",value:function(){var t=this;return Object(f.jsxs)("main",{className:"product-detail card",children:[Object(f.jsxs)("div",{className:"product-detail__about",children:[Object(f.jsx)("h2",{children:this.product.title}),Object(f.jsx)("div",{className:"card bar"}),Object(f.jsxs)("h3",{children:["\ube0c\ub79c\ub4dc: ",this.product.brand]}),Object(f.jsxs)("p",{children:["\uac00\uaca9: ",this.product.price]})]}),Object(f.jsx)("button",{className:"btn-large card",onClick:function(){t.props.setIsNotInterested(t.product.id),t.props.shuffleProduct(),t.props.updateRecentViews(t.product.id)},children:"\uad00\uc2ec\uc5c6\uc74c"}),Object(f.jsx)("button",{className:"btn-large card",onClick:function(){t.props.shuffleProduct()},children:"\ub79c\ub364\uc0c1\ud488\uc870\ud68c"})]})}}]),n}(a.Component),m=function(t){Object(o.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).goToPrevPage=a.goToPrevPage.bind(Object(b.a)(a)),a.goToNextPage=a.goToNextPage.bind(Object(b.a)(a)),a}return Object(i.a)(n,[{key:"goToPrevPage",value:function(){var t=this.props.page-1;t<0&&(t=this.props.paginatedProducts.length-1),this.props.setPage(t)}},{key:"goToNextPage",value:function(){var t=this.props.page+1;t>this.props.paginatedProducts.length-1&&(t=0),this.props.setPage(t)}},{key:"render",value:function(){var t=this;return Object(f.jsxs)("div",{children:[Object(f.jsx)("button",{className:"btn-small card",type:"button",onClick:this.goToPrevPage,children:"prev"}),this.props.paginatedProducts.map((function(e,n){return Object(f.jsx)("button",{className:"btn-small card ".concat(n===t.props.page&&"clicked"),type:"button",onClick:function(){return t.props.setPage(n)},children:n+1},n)})),Object(f.jsx)("button",{className:"btn-small card",type:"button",onClick:this.goToNextPage,children:"next"})]})}}]),n}(a.Component),x=function(t){Object(o.a)(n,t);var e=Object(d.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var t=this;return Object(f.jsxs)("dl",{className:"card",onClick:function(){return t.props.goShowDetail(t.props.item.isNotInterested,t.props.item.id)},children:[Object(f.jsx)("dd",{className:"card-brand",children:this.props.item.brand}),Object(f.jsx)("dd",{className:"card-title",children:this.props.item.title}),Object(f.jsxs)("dd",{className:"card-price",children:["\\",this.props.item.price]}),Object(f.jsxs)("dd",{className:"card-date",children:[Object(f.jsx)("span",{children:"\uc811\uc18d \ub85c\uadf8:"}),Object(f.jsx)("span",{children:"".concat(this.props.date.hour,"\uc2dc ").concat(this.props.date.min,"\ubd84 ").concat(this.props.date.sec,"\ucd08")})]})]})}}]),n}(a.Component),P=(n(38),function(t){var e=Math.ceil(t.length/10);return Array.from({length:e},(function(e,n){var a=10*n;return t.slice(a,a+10)}))}),k=function(t){Object(o.a)(n,t);var e=Object(d.a)(n);function n(){var t;return Object(s.a)(this,n),(t=e.call(this)).state={isLoading:!1,products:[],currentProduct:null,recentViews:[],page:0,paginatedProducts:[],pathId:1},t.getProductDetail=t.getProductDetail.bind(Object(b.a)(t)),t.updateRecentViews=t.updateRecentViews.bind(Object(b.a)(t)),t.setIsNotInterested=t.setIsNotInterested.bind(Object(b.a)(t)),t.shuffleProduct=t.shuffleProduct.bind(Object(b.a)(t)),t.setPage=t.setPage.bind(Object(b.a)(t)),t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=Object(j.a)(p.a.mark((function t(){var e,n,a,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.setState({isLoading:!0}),t.prev=1,t.next=4,fetch("".concat("https://pob-coconut.github.io/Assignment2-b/","/data/productData.json"));case 4:return e=t.sent,t.next=7,e.json();case 7:if(n=t.sent,e.ok){t.next=10;break}throw new Error("Failed to fetch data, please check your API or Internet connetction");case 10:a=n.map((function(t,e){return t.id=e+1,t.isNotInterested=!1,t})),this.setPathId(),r=this.state.pathId-1||0,this.setState({products:a}),this.setState({currentProduct:a[r],isLoading:!1}),this.setPage(Math.ceil((r+1)/10)-1),this.updatePaginatedProducts(),t.next=23;break;case 19:t.prev=19,t.t0=t.catch(1),this.setState({isLoading:!1}),console.error(t.t0);case 23:case"end":return t.stop()}}),t,this,[[1,19]])})));return function(){return t.apply(this,arguments)}}()},{key:"shuffleProduct",value:function(){var t=this.state.products.filter((function(t){return!1===t.isNotInterested})),e=Math.floor(Math.random()*(t.length-0)+0);this.setState({currentProduct:t[e]}),this.updateRecentViews(t[e].id)}},{key:"setIsNotInterested",value:function(t){var e=this.state.products.map((function(e){return e.id===t&&(e.isNotInterested=!0),e}));this.setState({products:e})}},{key:"getProductDetail",value:function(t){var e=this.state.products.find((function(e){return e.id===t}));this.setPathId(),this.setState({currentProduct:e})}},{key:"updateRecentViews",value:function(t){var e=this.state.recentViews.filter((function(e){return e.id!==t})),n=this.state.products.find((function(e){return e.id===t})),a=new Date,r=Object(l.a)(Object(l.a)({},n),{},{date:a});e.unshift(r),this.setState({recentViews:e}),this.setLocalStorage(e)}},{key:"setLocalStorage",value:function(t){localStorage.removeItem("data"),localStorage.setItem("data",JSON.stringify(t))}},{key:"setPathId",value:function(){var t=+window.location.pathname.split("/")[2];this.setState({pathId:t})}},{key:"setPage",value:function(t){this.setState({page:t}),this.updatePaginatedProducts()}},{key:"updatePaginatedProducts",value:function(){this.setState((function(t){return{paginatedProducts:P(t.products)[t.page]}}))}},{key:"render",value:function(){return this.state.isLoading||!this.state.currentProduct?null:Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)(v,{curProduct:this.state.currentProduct,setIsNotInterested:this.setIsNotInterested,shuffleProduct:this.shuffleProduct,updateRecentViews:this.updateRecentViews},this.state.currentProduct.id),Object(f.jsxs)("aside",{className:"products-list",children:[Object(f.jsx)(O,{paginatedProducts:this.state.paginatedProducts,getProductDetail:this.getProductDetail,updateRecentViews:this.updateRecentViews}),Object(f.jsx)(m,{paginatedProducts:this.state.paginatedProducts,setPage:this.setPage,page:this.state.page})]})]})}}]),n}(a.Component),N=n(25),S=(n(39),function(t){var e=new Map;return t.forEach((function(t){e.set(t.brand,!0)})),e}),y=(new Date).getDate(),w=JSON.parse(localStorage.getItem("data")||"[]").filter((function(t){return new Date(t.date).getDate()===y})).sort((function(t,e){return t.id-e.id})),I=function(t){Object(o.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).goShowDetail=a.goShowDetail.bind(Object(b.a)(a)),a.state={data:w.slice(),brand:S(w),originData:[],interestToggle:!1,priceSortToggle:0,recentSortToggle:!1},a}return Object(i.a)(n,[{key:"getData",value:function(){var t=this;return this.state.data.filter((function(e){return t.state.brand.get(e.brand)&&(!t.state.interestToggle||e.isNotInterested)}))}},{key:"onFilterBrand",value:function(t){var e=this.state.brand;e.set(t,!e.get(t)),this.setState(Object(l.a)(Object(l.a)({},this.state),{},{brand:e}))}},{key:"onInterset",value:function(){this.setState(Object(l.a)(Object(l.a)({},this.state),{},{interestToggle:!this.state.interestToggle}))}},{key:"onSortCheap",value:function(){var t=this.state,e=t.priceSortToggle,n=t.data,a=(e+1)%3;this.setState(Object(l.a)(Object(l.a)({},this.state),{},{recentSortToggle:!1,priceSortToggle:a,data:0===a?w.slice():1===a?n.sort((function(t,e){return t.price-e.price})):n.sort((function(t,e){return e.price-t.price}))}))}},{key:"onSortRecent",value:function(){var t=this.state,e=t.recentSortToggle,n=t.data;this.setState(Object(l.a)(Object(l.a)({},this.state),{},{priceSortToggle:0,recentSortToggle:!e,data:e?w.slice():n.sort((function(t,e){return new Date(e.date)-new Date(t.date)}))}))}},{key:"goShowDetail",value:function(t,e){t?alert("\uad00\uc2ec\uc5c6\ub294 \uc81c\ud488\uc785\ub2c8\ub2e4."):this.props.history.push("/product/".concat(e))}},{key:"render",value:function(){var t=this;return Object(f.jsx)("div",{id:"recent-page",children:Object(f.jsxs)("div",{className:"recent-container",children:[Object(f.jsx)("div",{className:"header card inline-block",children:" \ucd5c\uadfc \uc870\ud68c \uc774\ub825"}),Object(f.jsxs)("div",{className:"header",children:[Object(f.jsxs)("div",{className:"filter",children:[Object(f.jsx)("span",{children:"\ube0c\ub79c\ub4dc \ud544\ud130: "}),Array.from(this.state.brand.entries()).map((function(e){var n=Object(N.a)(e,2),a=n[0],r=n[1];return Object(f.jsxs)("label",{className:"card "+(r?"clicked":""),children:[a,Object(f.jsx)("input",{type:"checkbox",defaultChecked:r,onChange:function(){t.onFilterBrand(a)}})]},a)}))]}),Object(f.jsxs)("div",{className:"option",children:[Object(f.jsx)("span",{children:"\uc635\uc158: "}),Object(f.jsxs)("label",{className:"card "+(this.state.interestToggle?"clicked":""),children:["\uad00\uc2ec\uc5c6\ub294 \uc0c1\ud488 \uc81c\uac70",Object(f.jsx)("input",{type:"checkbox",onChange:function(e){return t.onInterset()}})]}),Object(f.jsx)("button",{className:"card "+(this.state.recentSortToggle?"clicked":""),onClick:function(){return t.onSortRecent()},children:"\ucd5c\uadfc \uc870\ud68c \uc21c"}),Object(f.jsx)("button",{className:"card "+(this.state.priceSortToggle?"clicked":""),onClick:function(){return t.onSortCheap()},children:2===this.state.priceSortToggle?"\uac00\uaca9 \ub192\uc740\uc21c":"\uac00\uaca9 \ub0ae\uc740\uc21c"})]})]}),Object(f.jsx)("div",{className:"data",children:this.getData(this.state.data).map((function(e){var n=new Date(e.date),a=n.getHours(),r=n.getMinutes(),c=n.getSeconds();return Object(f.jsx)(x,{item:e,goShowDetail:t.goShowDetail,date:{hour:a,min:r,sec:c}},e.id)}))})]})})}}]),n}(a.Component),D=(n(40),function(t){Object(o.a)(n,t);var e=Object(d.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"error-page",children:[Object(f.jsx)("h1",{children:"Lost your way?"}),Object(f.jsxs)("p",{children:["Sorry, we can't find that page. Error 404",Object(f.jsx)("br",{}),"You'll find lots to explore on the home page"]}),Object(f.jsx)(g.b,{className:"error-page--btn",to:"/",children:Object(f.jsx)("span",{children:"Back Home"})})]})}}]),n}(a.Component)),T=function(t){Object(o.a)(n,t);var e=Object(d.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(f.jsxs)(u.c,{children:[Object(f.jsx)(u.a,{exact:!0,path:["/","/product","/product/:id"],component:k}),Object(f.jsx)(u.a,{exact:!0,path:"/recentList",component:I}),Object(f.jsx)(u.a,{path:"*",component:D})]})}}]),n}(a.Component);c.a.render(Object(f.jsx)(g.a,{basename:"Assignment2-b",children:Object(f.jsx)(T,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.8d7ea944.chunk.js.map