(this.webpackJsonpbubbly=this.webpackJsonpbubbly||[]).push([[0],[,,,,function(e,s,t){e.exports={menu:"Nav_menu__IfrtA",active:"Nav_active__NXcNd",toggle:"Nav_toggle__s1iRi"}},,,,,,,,,function(e,s,t){e.exports={dialogs:"Messages_dialogs__MZbf_",items:"Messages_items__3vJjK",item:"Messages_item__errjG",messages:"Messages_messages__3e7j4",message:"Messages_message__1UBXj"}},function(e,s,t){e.exports={active:"Dialog_active__PVGiJ"}},,function(e,s,t){e.exports={header:"Header_header__3n6fz"}},function(e,s,t){e.exports={item:"Post_item__3tyi0"}},function(e,s,t){e.exports={profile:"Profile_profile__p89-9"}},function(e,s,t){},,,,,function(e,s,t){},function(e,s,t){},,,,,function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){"use strict";t.r(s);var a=t(1),i=t.n(a),c=t(15),n=t.n(c),j=(t(24),t(25),t(7)),r=t(2),l=t(16),o=t.n(l),d=t(0);var m=function(){return Object(d.jsx)("header",{className:o.a.header,children:Object(d.jsx)("img",{src:"",alt:""})})},b=t(10),u=t(4),x=t.n(u),O=t(38),g=t(39),v=t(40),p=t(41),h=t(42);var f=function(){var e=Object(a.useState)(!1),s=Object(b.a)(e,2);return s[0],s[1],Object(d.jsxs)("div",{className:x.a.menu,children:[Object(d.jsx)("div",{className:x.a.toggle,onClick:function(){document.getElementsByClassName(x.a.menu)[0].classList.toggle(x.a.active)},children:Object(d.jsx)("img",{src:"https://s3.cdn.teleprogramma.pro/wp-content/uploads/2020/10/eb77e4164e70efbb52e007935ab57ec5.jpg"})}),Object(d.jsxs)("ul",{className:x.a.nav,children:[Object(d.jsx)("li",{className:x.a.item,style:{"--i":0},children:Object(d.jsx)(j.b,{activeClassName:x.a.active,to:"/",children:Object(d.jsx)(O.a,{})})}),Object(d.jsx)("li",{className:x.a.item,style:{"--i":1},children:Object(d.jsx)(j.b,{activeClassName:x.a.active,to:"/messages",children:Object(d.jsx)(g.a,{})})}),Object(d.jsx)("li",{className:x.a.item,style:{"--i":2},children:Object(d.jsx)(j.b,{activeClassName:x.a.active,to:"/news",children:Object(d.jsx)(v.a,{})})}),Object(d.jsx)("li",{className:x.a.item,style:{"--i":3},children:Object(d.jsx)(j.b,{activeClassName:x.a.active,to:"/music",children:Object(d.jsx)(p.a,{})})}),Object(d.jsx)("li",{className:x.a.item,style:{"--i":4},children:Object(d.jsx)(j.b,{activeClassName:x.a.active,to:"/settings",children:Object(d.jsx)(h.a,{})})})]})]})},_=t(17),N=t.n(_);var C=function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:N.a.item,children:e.message}),Object(d.jsxs)("div",{children:["Likes: ",e.likesCount]})]})};t(30),t(31);var y=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("textarea",{}),Object(d.jsx)("button",{children:"add post"})]})};var M=function(e){var s=e.posts.map((function(e){return Object(d.jsx)(C,{message:e.postMessage,id:e.id,likesCount:e.likesCount})}));return Object(d.jsxs)("div",{children:["My posts",Object(d.jsx)(y,{}),Object(d.jsx)("div",{children:s})]})},k=t(18),w=t.n(k);t(32);var P=function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:"img wallpaper"}),Object(d.jsx)("div",{children:"ava+descr"})]})};var B=function(e){return Object(d.jsxs)("div",{className:w.a.profile,children:[Object(d.jsx)(P,{}),Object(d.jsx)(M,{posts:e.posts})]})};t(33);var F=function(){return Object(d.jsx)("div",{children:"Music"})},J=t(14),L=t.n(J);var S=function(e){var s="/messages/"+e.id;return Object(d.jsx)("div",{className:L.a.item,children:Object(d.jsx)(j.b,{activeClassName:L.a.active,to:s,children:e.name})})},I=t(19),D=t.n(I);var E=function(e){return Object(d.jsx)("div",{className:D.a.message,children:e.message})},G=t(13),T=t.n(G);var X=function(e){var s=e.dialogs.map((function(e){return Object(d.jsx)(S,{name:e.name,id:e.id})})),t=e.messages.map((function(e){return Object(d.jsx)(E,{message:e.message,id:e.id})}));return Object(d.jsxs)("div",{className:T.a.dialogs,children:[Object(d.jsx)("div",{className:T.a.items,children:s}),Object(d.jsx)("div",{className:T.a.messages,children:t})]})};t(34);var q=function(){return Object(d.jsx)("div",{children:"News"})};t(35);var z=function(){return Object(d.jsx)("div",{children:"Settings"})};var A=function(e){return Object(d.jsx)(j.a,{children:Object(d.jsxs)("div",{className:"app-wrapper",children:[Object(d.jsx)(m,{}),Object(d.jsx)(f,{}),Object(d.jsx)("div",{className:"app-wrapper-content",children:Object(d.jsxs)(r.c,{children:[Object(d.jsx)(r.a,{path:"/",element:Object(d.jsx)(B,{posts:e.posts})}),Object(d.jsx)(r.a,{path:"/messages",element:Object(d.jsx)(X,{messages:e.messages,dialogs:e.dialogs})}),Object(d.jsx)(r.a,{path:"/music",element:Object(d.jsx)(F,{})}),Object(d.jsx)(r.a,{path:"/news",element:Object(d.jsx)(q,{})}),Object(d.jsx)(r.a,{path:"/settings",element:Object(d.jsx)(z,{})})]})})]})})},H=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,43)).then((function(s){var t=s.getCLS,a=s.getFID,i=s.getFCP,c=s.getLCP,n=s.getTTFB;t(e),a(e),i(e),c(e),n(e)}))},K={dialogs:[{id:1,name:"user1"},{id:2,name:"user2"},{id:3,name:"user3"},{id:4,name:"user4"}],messages:[{id:1,message:"hi"},{id:2,message:"hiyi"},{id:3,message:"yo"},{id:4,message:"qwerty"}],posts:[{id:0,postMessage:"post1",likesCount:2},{id:1,postMessage:"post2",likesCount:3},{id:2,postMessage:"post3",likesCount:4},{id:2,postMessage:"post4",likesCount:5}]};n.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(A,{posts:K.posts,dialogs:K.dialogs,messages:K.messages})}),document.getElementById("root")),H()}],[[36,1,2]]]);
//# sourceMappingURL=main.160a0844.chunk.js.map