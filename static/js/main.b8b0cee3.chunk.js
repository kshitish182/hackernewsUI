(this.webpackJsonphackernewsui=this.webpackJsonphackernewsui||[]).push([[0],{33:function(e,t,a){e.exports=a(62)},38:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(28),o=a.n(c),l=a(6),s=(a(38),function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"header container"},r.a.createElement("div",{className:"col-left"},r.a.createElement("h1",{className:"header__main-header"},r.a.createElement(l.b,{to:"/news-feed",title:"home"},"hackernewsUI")))))}),i=a(1),m=a(2),u=a.n(m),p=a(8),f=a(3),d=a(30),E=a.n(d).a.create({baseURL:"https://hacker-news.firebaseio.com/v0",headers:{"content-type":"application/json"}}),h=function(){var e=Object(p.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.get(t);case 3:return a=e.sent,e.abrupt("return",a);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(p.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h("/topstories.json?print=pretty");case 2:if(t=e.sent){e.next=5;break}return e.abrupt("return",console.log("empty"));case 5:return e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(p.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h("/item/".concat(t,".json?print+pretty"));case 2:if(a=e.sent){e.next=5;break}return e.abrupt("return",console.log("empty"));case 5:return e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function v(e){if(!e||e>w())return"N/A";var t=Math.floor((w()-e)/60),a=Math.floor(t/60),n=Math.floor(a/24);return n>30?"".concat(a," month(s) ago"):a>24?"".concat(n," day(s) ago"):t>60?"".concat(a," hour(s) ago"):t>1?"".concat(t," minutes ago"):"less than a minute ago"}var w=function(){return Math.floor((new Date).getTime()/1e3)},k=function(e){var t=e.listItemData,a=r.a.useState(!1),n=Object(f.a)(a,2),c=n[0],o=n[1],s=r.a.useState(null),i=Object(f.a)(s,2),m=i[0],d=i[1],E=r.a.createElement("li",{className:"list__item preloader-block"},r.a.createElement("div",{className:"preloader-block__content"}),r.a.createElement("div",{className:"preloader-block__content sm mt--5"}));return r.a.useEffect((function(){Object(p.a)(u.a.mark((function e(){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.next=3,b(t);case 3:a=e.sent,d(a.data),o(!1);case 6:case"end":return e.stop()}}),e)})))()}),[t]),r.a.createElement(r.a.Fragment,null,c?E:m&&r.a.createElement("li",{className:"list__item"},r.a.createElement(l.b,{to:{pathname:"/news-feed/".concat(m.id),state:{newsItemData:m}}},r.a.createElement("h2",{className:"text--header"},m.title),r.a.createElement("div",{className:"text--secondary"},"Score: ",r.a.createElement("span",{className:"separator"},m.score),"By: ",r.a.createElement("span",{className:"separator"},m.by," "),v(m.time)))))},N=a(12),x=a(31),y=a(17),_=function(e){var t=e.ListComponent;return t&&"function"!==typeof t?r.a.createElement(r.a.Fragment,null):r.a.createElement(t,e)},j=function(e){var t=e.ActionBarComponent;return t&&"function"!==typeof t?r.a.createElement(r.a.Fragment,null):r.a.createElement(t,e)},O=function(){return r.a.createElement("div",null,"Page Not Found !!!")},I=function(e){var t=e.dataArray,a=e.pageLimit,n=e.paginationItem,c=e.paginationActionBar,o=void 0===c?"":c,l=e.goToPage,s=void 0===l?0:l,i=r.a.useState(null),m=Object(f.a)(i,2),u=m[0],p=m[1],d=r.a.useState(0),E=Object(f.a)(d,2),h=E[0],g=E[1];r.a.useEffect((function(){if(s)return g(s-1)}),[g,s]),r.a.useEffect((function(){return p(function(e){var t={},n=0,r=[];return e.forEach((function(e,c){c%a===0&&0!==c&&(r=[],n++),r=[].concat(Object(y.a)(r),[e]),t=Object(x.a)({},t,Object(N.a)({},n,Object(y.a)(r)))})),t}(t))}),[t]);var b=!!u&&h===Object.keys(u).length-1,v=!!u&&Object.keys(u).length-1,w=!!u&&h>=0&&h<=Object.keys(u).length-1,k=o&&"function"===typeof o?r.a.createElement(j,{ActionBarComponent:o,currentPageIndex:h,isLastPage:b,lastPage:v}):r.a.createElement("div",{className:"pagination__action-bar"},!!h&&r.a.createElement("button",{className:"btn-left-arrow",onClick:function(){return g(h-1)}}),r.a.createElement("div",{className:"circular-index"},h+1),b?r.a.createElement(r.a.Fragment,null):r.a.createElement("button",{className:"btn-right-arrow",onClick:function(){return g(h+1)}}));return r.a.createElement(r.a.Fragment,null,w?r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:"pagination list list--news-feed"},!!u&&u[h].map((function(e,t){return r.a.createElement(_,{key:t,listItemData:e,ListComponent:n})}))),k):r.a.createElement(O,null))},F=r.a.createElement("div",{className:"flex-wrapper flex-wrapper--ctr empty-state"},r.a.createElement("div",{className:"loader-wrapper"},r.a.createElement("div",{className:"loader"})),r.a.createElement("div",{className:"text--secondary"},"Loading Feed")),S=function(e){var t=e.lastPage,a=e.isLastPage,n=e.currentPageIndex;return r.a.createElement("div",{className:"pagination__action-bar"},!!n&&r.a.createElement(l.b,{to:"news-feed?page=".concat(1),className:"btn--icon btn--pagination left"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-chevrons-left",width:"44",height:"44",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"#2c3e50",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},r.a.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),r.a.createElement("polyline",{points:"11 7 6 12 11 17"}),r.a.createElement("polyline",{points:"17 7 12 12 17 17"}))),!!n&&r.a.createElement(l.b,{to:"news-feed?page=".concat(n)},r.a.createElement("button",{className:"btn-left-arrow"})),r.a.createElement("div",{className:"circular-index"},n+1),e.isLastPage?r.a.createElement(r.a.Fragment,null):r.a.createElement(l.b,{to:"news-feed?page=".concat(n+2)},r.a.createElement("button",{className:"btn-right-arrow"})),a?r.a.createElement(r.a.Fragment,null):r.a.createElement(l.b,{to:"news-feed?page=".concat(t+1),className:"btn--icon btn--pagination right"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-chevrons-right",width:"44",height:"44",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"#2c3e50",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},r.a.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),r.a.createElement("polyline",{points:"7 7 12 12 7 17"}),r.a.createElement("polyline",{points:"13 7 18 12 13 17"}))))},L=function(e){var t=r.a.useState([]),a=Object(f.a)(t,2),n=a[0],c=a[1],o=r.a.useState(!1),l=Object(f.a)(o,2),s=l[0],m=l[1],d=new URLSearchParams(Object(i.g)().search).get("page");return r.a.useEffect((function(){function e(){return(e=Object(p.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.next=3,g();case 3:t=e.sent,c(t.data),m(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),s?F:r.a.createElement(I,{dataArray:n,paginationItem:k,paginationActionBar:S,pageLimit:10,goToPage:d})},P=a(32),B=function e(t){var a=t.commentId,n=r.a.useState(null),c=Object(f.a)(n,2),o=c[0],l=c[1],s=r.a.useState(!1),i=Object(f.a)(s,2),m=i[0],d=i[1],E=r.a.createElement("li",{className:"list__item"},r.a.createElement("div",{className:"comment-block preloader-block"},r.a.createElement("div",{className:"preloader-block__content sm"}),r.a.createElement("div",{className:"preloader-block__content comment-block__comment"})));return r.a.useEffect((function(){!function(){var e=Object(p.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.next=3,b(a);case 3:t=e.sent,d(!1),l(t.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[a]),console.log(o&&o.time),r.a.createElement(r.a.Fragment,null,m?E:o&&o.text&&r.a.createElement("li",{className:"list__item"},r.a.createElement("div",{className:"comment-block"},r.a.createElement("div",{className:"text--secondary"},r.a.createElement("span",{className:"separator text--bold"},o.by),r.a.createElement("span",null,v(o.time))),r.a.createElement("div",{className:"comment-block__comment",dangerouslySetInnerHTML:{__html:Object(P.sanitize)(o.text)}})),o.kids&&r.a.createElement("ul",{className:"list list--comment-feed"},o.kids.map((function(t,a){return r.a.createElement(e,{key:"news-comment-".concat(t),commentId:t})})))))},M=function(e){r.a.useEffect((function(){e.location&&e.location.state&&e.location.state.newsItemData&&c(e.location.state.newsItemData)}),[e.location]);var t=r.a.useState(""),a=Object(f.a)(t,2),n=a[0],c=a[1];return r.a.createElement(r.a.Fragment,null,n&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"text--header text--lg"},r.a.createElement("a",{className:"newsItem__header",href:n.url,target:"_blank",title:n.url,rel:"noopener noreferrer"},n.title)),r.a.createElement("h3",{className:"text--header text--md mx--30"},"Comments"),r.a.createElement("ul",{className:"list list--comment-feed"},n.kids&&n.kids.length?n.kids.map((function(e){return r.a.createElement(B,{key:"news-comment-".concat(e),commentId:e})})):r.a.createElement("div",{className:"text--secondary"},"No comments found"))))},A=function(){return r.a.createElement("main",{className:"main-content container"},r.a.createElement("div",{className:"col-mid col-mid--dashboard"},r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:"/",render:function(){return r.a.createElement(i.a,{to:"/news-feed?page=1"})}}),r.a.createElement(i.b,{exact:!0,path:"/news-feed/:id",component:M}),r.a.createElement(i.b,{exact:!0,path:"/news-feed",component:L}))))},C=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s,null),r.a.createElement(A,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,{basename:"hackernewsUI"},r.a.createElement(C,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.b8b0cee3.chunk.js.map