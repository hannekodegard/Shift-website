(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{JuWx:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts",function(){return n("atmB")}])},O40h:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var s=n("eVuF"),o=n.n(s);function r(t,e,n,s,r,i,a){try{var c=t[i](a),p=c.value}catch(l){return void n(l)}c.done?e(p):o.a.resolve(p).then(s,r)}function i(t){return function(){var e=this,n=arguments;return new o.a(function(s,o){var i=t.apply(e,n);function a(t){r(i,s,o,a,c,"next",t)}function c(t){r(i,s,o,a,c,"throw",t)}a(void 0)})}}},atmB:function(t,e,n){"use strict";n.r(e);var s=n("ln6h"),o=n.n(s),r=n("O40h"),i=n("kOwS"),a=n("MX0m"),c=n.n(a),p=n("q1tI"),l=n.n(p),u=n("nOHt"),d=n("YFqc"),x=n.n(d),f=n("5Yp1"),m=n("o4p3"),w=n("zgjP"),h=n.n(w),b=l.a.createElement,j=function(t){var e=t.title,n=t.pid,s=t.picture.url,o=void 0===s?"":s,r=t.description;return b(l.a.Fragment,null,b(x.a,{href:"/post/[pid]",as:"/post/".concat(n)},b("a",{className:"jsx-3531342631 post"},b("img",{src:m.a+o,alt:e,className:"jsx-3531342631 post-image"}),b("div",{className:"jsx-3531342631 post-text"},b("h2",{className:"jsx-3531342631 post-title"},e),b("p",{className:"jsx-3531342631 post-description"},r,b("br",{className:"jsx-3531342631"}),b("br",{className:"jsx-3531342631"}))))),b(c.a,{id:"3531342631"},[".post.jsx-3531342631{background-size:cover;background-position:center center;border-radius:5.5px;height:300px;-webkit-flex:1 1 500px;-ms-flex:1 1 500px;flex:1 1 500px;margin:16px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;position:relative;overflow:hidden;}",".post.jsx-3531342631:first-child{-webkit-flex-basis:100%;-ms-flex-preferred-size:100%;flex-basis:100%;height:400px;}",".post-image.jsx-3531342631{width:100%;height:100%;object-fit:cover;object-position:center center;}",".post-text.jsx-3531342631{background-color:#0009;padding:16px 32px;position:absolute;top:calc(100% - 60px);left:0;right:0;bottom:0;-webkit-transition:top 0.2s;transition:top 0.2s;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}",".post-title.jsx-3531342631{margin:16px auto;white-space:pre;min-height:2rem;overflow:hidden;text-overflow:ellipsis;width:100%;}",".post-description.jsx-3531342631{margin:0;text-align:justify;padding:0 calc(50% - 300px);overflow-y:hidden;max-height:186px;mix-blend-mode:screen;position:relative;}",".post-description.jsx-3531342631:after{position:absolute;content:'';left:0;right:0;bottom:0;height:30px;background:linear-gradient(transparent,#000);}",".post.jsx-3531342631:hover>.post-text.jsx-3531342631{top:0;}"]))},g=function(t){var e=t.posts;Object(u.useRouter)();return b(f.a,{url:"https://www.shifthyperloop.com/posts",title:"Shift Hyperloop | Posts"},b("div",{className:"jsx-196844812 title"},b("h1",{className:"jsx-196844812"},"Newsletters and blog posts"),b("hr",{className:"jsx-196844812"})),b("div",{className:"jsx-196844812 posts page-container"},e.map(function(t){return b(j,Object(i.a)({key:t.title},t))})),b("div",{className:"jsx-196844812 bottom-margin"}),b(c.a,{id:"196844812"},[".title.jsx-196844812{margin-top:50px;}",".posts.jsx-196844812{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;padding:16px;}",".bottom-margin.jsx-196844812{height:40px;}","hr.jsx-196844812{width:80%;border-width:1px;border-style:solid;border-radius:2.8px;border-color:#0080c9;margin-bottom:40px;}"]))};g.getInitialProps=Object(r.a)(o.a.mark(function t(){var e,n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h()("https://cms.shifthyperloop.com/posts?_sort=published:desc");case 2:return e=t.sent,t.next=5,e.json();case 5:return n=t.sent,t.abrupt("return",{posts:n.map(function(t){return{pid:t.id,title:t.title,picture:t.picture,description:t.description}})});case 7:case"end":return t.stop()}},t)})),e.default=g},kOwS:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var s=n("UXZV"),o=n.n(s);function r(){return(r=o.a||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t}).apply(this,arguments)}},"m/Gl":function(t,e,n){"use strict";n.r(e),e.default=function(t,e){return e=e||{},new Promise(function(n,s){var o=new XMLHttpRequest,r=[],i=[],a={},c=function(){return{ok:2==(o.status/100|0),statusText:o.statusText,status:o.status,url:o.responseURL,text:function(){return Promise.resolve(o.responseText)},json:function(){return Promise.resolve(JSON.parse(o.responseText))},blob:function(){return Promise.resolve(new Blob([o.response]))},clone:c,headers:{keys:function(){return r},entries:function(){return i},get:function(t){return a[t.toLowerCase()]},has:function(t){return t.toLowerCase()in a}}}};for(var p in o.open(e.method||"get",t,!0),o.onload=function(){o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(t,e,n){r.push(e=e.toLowerCase()),i.push([e,n]),a[e]=a[e]?a[e]+","+n:n}),n(c())},o.onerror=s,o.withCredentials="include"==e.credentials,e.headers)o.setRequestHeader(p,e.headers[p]);o.send(e.body||null)})}},o4p3:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var s="https://cms.shifthyperloop.com"},zgjP:function(t,e,n){t.exports=window.fetch||(window.fetch=n("m/Gl").default||n("m/Gl"))}},[["JuWx",1,0]]]);