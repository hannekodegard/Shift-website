(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"2wwy":function(e,t,n){e.exports=n("nhzr")},E8gZ:function(e,t,n){var r=n("jmDH"),o=n("w6GO"),a=n("NsO/"),i=n("NV0k").f;e.exports=function(e){return function(t){for(var n,s=a(t),u=o(s),c=u.length,l=0,p=[];c>l;)n=u[l++],r&&!i.call(s,n)||p.push(e?[n,s[n]]:s[n]);return p}}},O40h:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n("eVuF"),o=n.n(r);function a(e,t,n,r,a,i,s){try{var u=e[i](s),c=u.value}catch(l){return void n(l)}u.done?t(c):o.a.resolve(c).then(r,a)}function i(e){return function(){var t=this,n=arguments;return new o.a(function(r,o){var i=e.apply(t,n);function s(e){a(i,r,o,s,u,"next",e)}function u(e){a(i,r,o,s,u,"throw",e)}s(void 0)})}}},YykV:function(e,t,n){"use strict";n.r(t);var r=n("ln6h"),o=n.n(r),a=n("O40h"),i=n("2wwy"),s=n.n(i),u=n("MX0m"),c=n.n(u),l=n("q1tI"),p=n.n(l),f=n("nOHt"),m=n("5Yp1"),x=n("zgjP"),d=n.n(x),w=n("o4p3"),b=p.a.createElement,h=function(e){var t=e.name,n=e.picture.url,r=void 0===n?"":n,o=e.title;e.email,e.group;return b("div",{className:"jsx-1340211395"},b("img",{src:w.a+r,className:"jsx-1340211395"}),b("h3",{className:"jsx-1340211395"},t),b("h4",{className:"jsx-1340211395"},o),b(c.a,{id:"1340211395"},["div.jsx-1340211395{-webkit-flex:0 1 300px;-ms-flex:0 1 300px;flex:0 1 300px;text-align:center;}","img.jsx-1340211395{border-radius:50%;height:200px;width:200px;object-fit:cover;object-position:top;}","img.jsx-1340211395,h3.jsx-1340211395{margin-bottom:-10px;}","h4.jsx-1340211395{color:#0080c9;margin-bottom:30px;}"]))},g=function(e){var t=e.members,n=void 0===t?[]:t,r=e.title;return b("div",{className:"jsx-3374736108 group"},b("h1",{className:"jsx-3374736108 group-titles"},r),b("hr",{className:"jsx-3374736108"}),b("div",{className:"jsx-3374736108 group-members"},n.map(function(e){return b(h,e)})),b(c.a,{id:"3374736108"},["hr.jsx-3374736108{width:80%;border-width:2px;border-style:solid;border-radius:2.5px;border-color:#0080c9;margin-bottom:75px;}",".group-titles.jsx-3374736108{margin-bottom:2px;margin-top:10px;}",".group.jsx-3374736108{margin:100px auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column nowrap;-ms-flex-flow:column nowrap;flex-flow:column nowrap;max-width:1200px;}",".group-members.jsx-3374736108{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}","h1.jsx-3374736108{text-align:center;}"]))},v=function(e){var t=e.members,n=void 0===t?[]:t,r=(Object(f.useRouter)(),Object(l.useState)({})),o=r[0],a=r[1];return Object(l.useEffect)(function(){var e={Board:{title:"The Board",description:"...",members:[]},Electrical:{title:"Electrical Team",description:"...",members:[]}};n.forEach(function(t){t.group in e&&e[t.group].members.push(t)}),a(e)},[n]),b(m.a,{url:"https://www.shifthyperloop.com/team",title:"Shift Hyperloop | Team"},b("div",{className:"jsx-1444181952 image-container"},b("img",{src:"/Shift-team-2020.jpg",className:"jsx-1444181952 team-photo"}),b("h1",{className:"jsx-1444181952 title"},"Meet our awesome team!")),b("div",{className:"jsx-1444181952 page-container"},s()(o).map(function(e){return b(g,e)})),b(c.a,{id:"1444181952"},["body{background-image:linear-gradient(45deg,#01020b,#020610);background-repeat:no-repeat;background-size:cover;background-size:9px 48px;}","h1{font-size:50px;}","div{position:center;}",".team-photo{max-width:100%;}",".image-container{position:relative;text-align:center;color:white;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;}",".image-container::before{content:'';position:absolute;left:0;right:0;top:0;bottom:0;background:linear-gradient(63deg,#fff1 23%,transparent 23%) 1px 0, linear-gradient(63deg,transparent 74%,#fff1 78%), linear-gradient( 63deg, transparent 34%, #fff1 38%, #fff1 58%, transparent 62% ), transparent;background-size:10px 48px;}",".title{position:absolute;bottom:calc(40% - 10px);left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);text-shadow:2px 2px #000;overflow:hidden;white-space:nowrap;}",".group-titles{text-align:center;}"]))};v.getInitialProps=Object(a.a)(o.a.mark(function e(){var t,n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d()("https://cms.shifthyperloop.com/teammember2020s");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",{members:n.map(function(e){var t={url:"/uploads/8ac2288649f74d3b88a87126ebb489dc.jpg"};return null!==e.picture&&(t=e.picture),{name:e.name,picture:t,group:e.group,title:e.title,email:e.email}})});case 7:case"end":return e.stop()}},e)})),t.default=v},fW1p:function(e,t,n){var r=n("Y7ZC"),o=n("E8gZ")(!1);r(r.S,"Object",{values:function(e){return o(e)}})},"m/Gl":function(e,t,n){"use strict";n.r(t),t.default=function(e,t){return t=t||{},new Promise(function(n,r){var o=new XMLHttpRequest,a=[],i=[],s={},u=function(){return{ok:2==(o.status/100|0),statusText:o.statusText,status:o.status,url:o.responseURL,text:function(){return Promise.resolve(o.responseText)},json:function(){return Promise.resolve(JSON.parse(o.responseText))},blob:function(){return Promise.resolve(new Blob([o.response]))},clone:u,headers:{keys:function(){return a},entries:function(){return i},get:function(e){return s[e.toLowerCase()]},has:function(e){return e.toLowerCase()in s}}}};for(var c in o.open(t.method||"get",e,!0),o.onload=function(){o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(e,t,n){a.push(t=t.toLowerCase()),i.push([t,n]),s[t]=s[t]?s[t]+","+n:n}),n(u())},o.onerror=r,o.withCredentials="include"==t.credentials,t.headers)o.setRequestHeader(c,t.headers[c]);o.send(t.body||null)})}},nhzr:function(e,t,n){n("fW1p"),e.exports=n("WEpk").Object.values},o4p3:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r="https://cms.shifthyperloop.com"},uBm1:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/team",function(){return n("YykV")}])},zgjP:function(e,t,n){e.exports=window.fetch||(window.fetch=n("m/Gl").default||n("m/Gl"))}},[["uBm1",1,0]]]);