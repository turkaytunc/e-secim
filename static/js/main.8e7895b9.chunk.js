(this["webpackJsonpe-secim"]=this["webpackJsonpe-secim"]||[]).push([[0],{179:function(e,t,n){},180:function(e,t,n){},181:function(e,t,n){},182:function(e,t,n){},187:function(e,t,n){},188:function(e,t,n){},194:function(e,t){},196:function(e,t){},207:function(e,t){},209:function(e,t){},236:function(e,t){},238:function(e,t){},239:function(e,t){},244:function(e,t){},246:function(e,t){},265:function(e,t){},277:function(e,t){},280:function(e,t){},284:function(e,t,n){},285:function(e,t,n){},390:function(e,t,n){},391:function(e,t,n){},392:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),i=n.n(a),r=n(169),s=n.n(r),o=(n(179),n(180),n(181),function(){return Object(c.jsxs)("footer",{className:"footer-container","data-testid":"footer-container",children:[Object(c.jsx)("div",{className:"copyright-container",children:"\xa9 2020 T\xfcrkay TUN\xc7 - Atakan ERT\xdcRK - Atakan KARA\xc7ALI"}),Object(c.jsx)("div",{className:"faq-container",children:"Proje Dan\u0131\u015fman\u0131: Dr. \xd6\u011fr. \xdcyesi Derya ALSANCAK ARDA"})]})}),u=(n(182),n.p+"static/media/vote.de516f35.jpg"),l=n(22),d=function(){return Object(c.jsxs)("nav",{className:"header-container",children:[Object(c.jsxs)("div",{className:"corp-container",children:[Object(c.jsx)("img",{src:u,alt:"corp-logo"}),Object(c.jsx)("input",{className:"nav-search-box",type:"search",placeholder:"Size nas\u0131l yard\u0131mc\u0131 olabilirim?"})]}),Object(c.jsxs)("div",{className:"button-container",children:[Object(c.jsx)(l.b,{to:"/e-secim/",children:Object(c.jsx)("button",{className:"nav-button",children:"Anasayfa"})}),Object(c.jsx)(l.b,{to:"/e-secim/signup",children:Object(c.jsx)("button",{className:"nav-button",children:"\xdcye Ol"})}),Object(c.jsx)(l.b,{to:"/e-secim/login",children:Object(c.jsx)("button",{className:"nav-button",children:"Giri\u015f Yap"})}),Object(c.jsx)(l.b,{to:"/e-secim/results",children:Object(c.jsx)("button",{className:"nav-button",children:"Sonu\xe7lar"})})]})]})},j=n(4),b=(n(187),function(){return Object(c.jsx)("div",{children:Object(c.jsx)("div",{className:"homepage-project-title",children:"Elektronik Se\xe7im Uygulamas\u0131na Ho\u015f Geldiniz."})})}),p=n(5),f=(n(188),n(59)),m=n.n(f),O=n(44),h=function(e,t){switch(t.type){case"ADD_TC":return Object(O.a)(Object(O.a)({},e),{},{tc:t.payload});case"ADD_TC_HASH":return Object(O.a)(Object(O.a)({},e),{},{tcHash:t.payload});default:return e}},x={tc:"",tcHash:"",hasVote:!0},v=function(e,t){var n=e.user;return{user:h(n,t)}},g=i.a.createContext({state:x,dispatch:function(){return null}}),y=function(e){var t=i.a.useReducer(v,x),n=Object(p.a)(t,2),a=n[0],r=n[1];return Object(c.jsx)(g.Provider,{value:{state:a,dispatch:r},children:e.children})},N=n(14),k=n.n(N),S=n(24),A=function(){var e=Object(S.a)(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://secim.webde.biz.tr/api/secim/isuservalid",{method:"POST",headers:{"Content-Type":"application/json;charset=UTF-8"},body:JSON.stringify({hashedUserInfo:t})}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(S.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://secim.webde.biz.tr/api/secim/getlistofaday");case 3:return t=e.sent,e.abrupt("return",t.json());case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",[]);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),C=(n(284),n.p+"static/media/erturk.408fb7a2.jpg"),w=n.p+"static/media/karacali.9dfddec0.jpg",D=n.p+"static/media/tunc.b539cd90.jpg",z=n.p+"static/media/ph.da7e4202.jpg",E=function(e){var t=e.el,n=e.selectedOption,a=e.setSelectedOption,i=e.imgArr;return Object(c.jsxs)("div",{className:"candidate",children:[Object(c.jsx)("img",{className:"candidate-img",src:i[t.adayNo-1]||z,alt:"candidate"}),Object(c.jsxs)("label",{className:"candidate-label",children:[Object(c.jsx)("input",{onChange:function(e){return a(e.target.value)},type:"radio",name:"aday","data-testid":"vote-input-action-".concat(t.adayNo),value:t.adayNo,checked:n==="".concat(t.adayNo)}),t.adayAd]})]},t.adayNo)},F=[C,D,w],H=function(e){var t=e.candidates,n=e.setVoteResponseCode,i=Object(a.useContext)(g).state,r=Object(a.useState)(""),s=Object(p.a)(r,2),o=s[0],u=s[1],l=function(){""!==o&&function(e,t,n){var c=m()(e+t).toString();return fetch("https://secim.webde.biz.tr/api/secim/oykullan/",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({AuthenticationValue:n,SifreliOyu:c})})}(i.user.tc,o,i.user.tcHash).then((function(e){return n(e.status.toString())}))};return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"candidates-container",children:t.map((function(e){return Object(c.jsx)(E,{el:e,selectedOption:o,setSelectedOption:u,imgArr:F},e.adayNo)}))}),Object(c.jsx)("button",{"data-testid":"vote-action",className:"vote-button",onClick:function(){return l()},children:"Oy Ver"})]})},B=function(e){var t=e.confirmed,n=t?"Oyunuz Ba\u015far\u0131yla Kaydedildi.":"Oy Kullanma Hakk\u0131n\u0131z Yok!",a=t?"green":"red";return Object(c.jsxs)("div",{style:{fontSize:"1.5em"},children:[Object(c.jsx)("div",{style:{color:a},children:n}),Object(c.jsx)("div",{children:"Sonu\xe7 Ekran\u0131na Y\xf6nlendiriliyorsunuz."}),Object(c.jsx)("div",{children:"L\xfctfen Bekleyiniz..."})]})},K=function(){var e=Object(a.useState)([]),t=Object(p.a)(e,2),n=t[0],i=t[1],r=Object(a.useState)(""),s=Object(p.a)(r,2),o=s[0],u=s[1],l=Object(j.f)();return Object(a.useEffect)((function(){(function(){var e=Object(S.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T();case 2:t=e.sent,i(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(a.useEffect)((function(){var e;return"200"!==o&&"400"!==o||(e=setTimeout((function(){l.push("/e-secim/results")}),3e3)),function(){clearTimeout(e)}}),[o,l]),Object(c.jsx)("div",{children:""===o?Object(c.jsx)(H,{candidates:n,setVoteResponseCode:u}):"400"===o?Object(c.jsx)(B,{confirmed:!1}):Object(c.jsx)(B,{confirmed:!0})})},R=function(e,t){return 11!==e.length?"L\xfctfen ge\xe7erli bir tc kimlik numaras\u0131 giriniz!":t.length<5?"\u015eifre minimum 5 karakter i\xe7ermelidir!":""},G=function(){var e=Object(a.useState)(""),t=Object(p.a)(e,2),n=t[0],i=t[1],r=Object(a.useState)(""),s=Object(p.a)(r,2),o=s[0],u=s[1],l=Object(a.useState)(0),d=Object(p.a)(l,2),j=d[0],b=d[1],f=Object(a.useContext)(g),O=f.state,h=f.dispatch,x=Object(a.useState)(""),v=Object(p.a)(x,2),y=v[0],N=v[1];return Object(a.useEffect)((function(){var e;return 401===j&&(e=setTimeout((function(){b(0)}),3e3)),function(){clearTimeout(e)}}),[j,O]),Object(c.jsx)(c.Fragment,{children:200===j?Object(c.jsx)(K,{}):Object(c.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),N(R(n,o));var t=m()(n+o).toString();A(t).then((function(e){return e.json()})).then((function(e){return b(e.status)})).catch((function(e){return console.log(e)})),h({type:"ADD_TC",payload:n}),h({type:"ADD_TC_HASH",payload:t}),i(""),u("")}(e)},className:"login-form-container",children:[Object(c.jsx)("div",{className:"signup-title-container",children:Object(c.jsx)("p",{children:"Giri\u015f Yap"})}),Object(c.jsxs)("div",{className:"login-input-container",children:[Object(c.jsxs)("label",{className:"login-tc-label",htmlFor:"tc-kimlik-no",children:["TC Kimlik No",Object(c.jsx)("input",{type:"text",name:"tc-kimlik-no",id:"tc-kimlik-no","data-testid":"login-tc-input",value:n,onChange:function(e){return i(e.target.value)},onFocus:function(){return N("")}})]}),Object(c.jsxs)("label",{className:"login-password-label",htmlFor:"sifre",children:["\u015eifre",Object(c.jsx)("input",{type:"password",name:"sifre",id:"sifre","data-testid":"login-password-input",value:o,onChange:function(e){return u(e.target.value)},onFocus:function(){return N("")}})]})]}),y&&Object(c.jsx)("div",{style:{color:"red",paddingBottom:"1em"},children:y}),401===j?Object(c.jsx)("div",{style:{color:"red"},children:"Eksik veya hatal\u0131 giri\u015f yapt\u0131n\u0131z!"}):null,Object(c.jsx)("button",{className:"login-submit-button","data-testid":"login-submit-button",type:"submit",children:"Giri\u015f Yap"})]})})},_=function(){var e=Object(S.a)(k.a.mark((function e(t,n){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://secim.webde.biz.tr/api/developerhelper/secmenekle",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({tcNo:t,sifre:n})}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),J=(n(285),function(){var e=Object(a.useState)(""),t=Object(p.a)(e,2),n=t[0],i=t[1],r=Object(a.useState)(""),s=Object(p.a)(r,2),o=s[0],u=s[1],l=Object(a.useState)(""),d=Object(p.a)(l,2),b=d[0],f=d[1],m=Object(a.useState)(""),O=Object(p.a)(m,2),h=O[0],x=O[1],v=Object(j.f)();return Object(a.useEffect)((function(){var e,t=!0;return h&&t&&(e=setTimeout((function(){x("")}),3e3),i(""),u("")),function(){clearTimeout(e),t=!1}}),[h]),Object(c.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),f(R(n,o)),_(n,o).then((function(e){400!==e.status&&v.push("/e-secim/login")})).catch((function(e){e&&x("B\xf6yle bir kullan\u0131c\u0131 mevcut...")}))}(e)},className:"signup-form-container",children:[Object(c.jsx)("div",{className:"signup-title-container",children:Object(c.jsx)("p",{children:"\xdcye Ol"})}),Object(c.jsxs)("div",{className:"signup-input-container",children:[Object(c.jsxs)("label",{className:"signup-tc-label",htmlFor:"tc-kimlik-no",children:["TC Kimlik No",Object(c.jsx)("input",{type:"text",name:"tc-kimlik-no",id:"tc-kimlik-no","data-testid":"signup-tc-input",value:n,onChange:function(e){return i(e.target.value)},onFocus:function(){return f("")}})]}),Object(c.jsxs)("label",{className:"signup-password-label",htmlFor:"sifre",children:["\u015eifre",Object(c.jsx)("input",{type:"password",name:"sifre",id:"sifre","data-testid":"signup-password-input",value:o,onChange:function(e){return u(e.target.value)},onFocus:function(){return f("")}})]})]}),b&&Object(c.jsx)("div",{style:{color:"red",paddingBottom:"1em"},children:b}),h&&Object(c.jsx)("div",{style:{color:"red",paddingBottom:"1em"},children:h}),Object(c.jsx)("button",{className:"signup-submit-button","data-testid":"signup-submit-button",type:"submit",children:"\xdcye Ol"})]})}),P=function(){return fetch("https://secim.webde.biz.tr/api/secim/secimsonuclari").then((function(e){return e.json()}))},V=n(171),Y=(n(390),function(e){var t=e.voteData,n={labels:e.candidates,datasets:[{label:"Oylar",data:t,backgroundColor:["rgba(196, 37, 9, 0.2)","rgba(54, 162, 250, 0.2)","rgba(255, 206, 86, 0.2)","rgba(182, 255, 86, 0.2)","rgba(255, 86, 247, 0.2)","rgba(255, 120, 86, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgb(182, 255, 86)","rgb(255, 86, 247)","rgb(255, 120, 86)"],borderWidth:1}]};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"results-header",children:[Object(c.jsx)("div",{children:"Se\xe7im Sonu\xe7lar\u0131"}),Object(c.jsx)("div",{className:"results-header-span",children:"G\xfcncellenme aral\u0131\u011f\u0131 5 saniyedir."})]}),Object(c.jsx)(V.a,{data:n,options:{scales:{yAxes:[{ticks:{beginAtZero:!0,stepSize:1}}]}},type:"bar"})]})}),L=(n(391),[{aday:{adayNo:0,adayAd:"Sonu\xe7lar G\xfcncelleniyor..."},adligiOySayisi:0}]),U=function(){var e=Object(a.useState)(L),t=Object(p.a)(e,2),n=t[0],i=t[1];return Object(a.useEffect)((function(){P().then((function(e){return i(e)}))}),[]),Object(a.useEffect)((function(){var e;return e=setTimeout((function(){P().then((function(e){return i(e)}))}),5e3),function(){clearTimeout(e)}}),[n]),Object(c.jsx)("div",{className:"results-container",children:Object(c.jsx)(Y,{voteData:n.map((function(e){return e.adligiOySayisi})),candidates:n.map((function(e){return e.aday.adayAd}))})})};var I=function(){return Object(c.jsx)(l.a,{children:Object(c.jsxs)("div",{className:"app","data-testid":"application",children:[Object(c.jsx)(d,{}),Object(c.jsx)("main",{className:"main-container",children:Object(c.jsxs)(j.c,{children:[Object(c.jsx)(j.a,{exact:!0,path:"/e-secim/",component:b}),Object(c.jsx)(j.a,{path:"/e-secim/login",component:G}),Object(c.jsx)(j.a,{path:"/e-secim/signup",component:J}),Object(c.jsx)(j.a,{path:"/e-secim/results",component:U})]})}),Object(c.jsx)(o,{})]})})};s.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(y,{children:Object(c.jsx)(I,{})})}),document.getElementById("root"))}},[[392,1,2]]]);
//# sourceMappingURL=main.8e7895b9.chunk.js.map