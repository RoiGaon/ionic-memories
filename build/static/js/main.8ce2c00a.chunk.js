(this["webpackJsonpionic-react"]=this["webpackJsonpionic-react"]||[]).push([[1],{56:function(e,t,n){e.exports=n(83)},63:function(e,t,n){var r={"./ion-action-sheet.entry.js":[85,5],"./ion-alert.entry.js":[86,6],"./ion-app_8.entry.js":[87,7],"./ion-avatar_3.entry.js":[88,17],"./ion-back-button.entry.js":[89,18],"./ion-backdrop.entry.js":[90,44],"./ion-button_2.entry.js":[91,19],"./ion-card_5.entry.js":[92,20],"./ion-checkbox.entry.js":[93,21],"./ion-chip.entry.js":[94,22],"./ion-col_3.entry.js":[95,45],"./ion-datetime_3.entry.js":[96,10],"./ion-fab_3.entry.js":[97,23],"./ion-img.entry.js":[98,46],"./ion-infinite-scroll_2.entry.js":[99,47],"./ion-input.entry.js":[100,24],"./ion-item-option_3.entry.js":[101,25],"./ion-item_8.entry.js":[102,26],"./ion-loading.entry.js":[103,27],"./ion-menu_3.entry.js":[104,28],"./ion-modal.entry.js":[105,8],"./ion-nav_2.entry.js":[106,14],"./ion-popover.entry.js":[107,9],"./ion-progress-bar.entry.js":[108,29],"./ion-radio_2.entry.js":[109,30],"./ion-range.entry.js":[110,31],"./ion-refresher_2.entry.js":[111,11],"./ion-reorder_2.entry.js":[112,16],"./ion-ripple-effect.entry.js":[113,48],"./ion-route_4.entry.js":[114,32],"./ion-searchbar.entry.js":[115,33],"./ion-segment_2.entry.js":[116,34],"./ion-select_3.entry.js":[117,35],"./ion-slide_2.entry.js":[118,49],"./ion-spinner.entry.js":[119,13],"./ion-split-pane.entry.js":[120,50],"./ion-tab-bar_2.entry.js":[121,36],"./ion-tab_2.entry.js":[122,15],"./ion-text.entry.js":[123,37],"./ion-textarea.entry.js":[124,38],"./ion-toast.entry.js":[125,39],"./ion-toggle.entry.js":[126,12],"./ion-virtual-scroll.entry.js":[127,51]};function a(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],a=t[0];return n.e(t[1]).then((function(){return n(a)}))}a.keys=function(){return Object.keys(r)},a.id=63,e.exports=a},65:function(e,t,n){var r={"./ion-icon.entry.js":[128,58]};function a(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],a=t[0];return n.e(t[1]).then((function(){return n(a)}))}a.keys=function(){return Object.keys(r)},a.id=65,e.exports=a},70:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(26),l=n.n(o),i=n(20),c=n(2),s=n(50),m=n(13),u=function(){return a.a.createElement(c.o,null,a.a.createElement(c.j,null,a.a.createElement(c.w,null,a.a.createElement(c.v,null,"Bad Memories"),Object(c.F)("ios")&&a.a.createElement(c.d,{slot:"end"},a.a.createElement(c.c,{routerLink:"/new-memory"},a.a.createElement(c.k,{icon:m.a,slot:"icon-only"}))))),a.a.createElement(c.f,null,a.a.createElement("h2",null,"this is bad memories page"),!Object(c.F)("ios")&&a.a.createElement(c.g,{vertical:"bottom",horizontal:"end"},a.a.createElement(c.h,{routerLink:"/new-memory"},a.a.createElement(c.k,{icon:m.a})))))},E=function(){return a.a.createElement(c.o,null,a.a.createElement(c.j,null,a.a.createElement(c.w,null,a.a.createElement(c.v,null,"Good Memories"),Object(c.F)("ios")&&a.a.createElement(c.d,{slot:"end"},a.a.createElement(c.c,{routerLink:"/new-memory"},a.a.createElement(c.k,{icon:m.a,slot:"icon-only"}))))),a.a.createElement(c.f,null,a.a.createElement("h2",null,"this is good memories page"),!Object(c.F)("ios")&&a.a.createElement(c.g,{vertical:"bottom",horizontal:"end"},a.a.createElement(c.h,{routerLink:"/new-memory"},a.a.createElement(c.k,{icon:m.a})))))},y=n(3),j=n.n(y),d=n(12),p=n(25),f=(n(70),n(35)),h=function(){var e=a.a.useState(),t=Object(p.a)(e,2),n=t[0],r=t[1],o=function(){var e=Object(d.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.getPhoto({resultType:f.b.Uri,source:f.c.Camera,quality:80,width:500});case 2:if((t=e.sent)&&t.path&&t.webPath){e.next=5;break}return e.abrupt("return");case 5:r({path:t.path,preview:t.webPath});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a.a.createElement(c.o,null,a.a.createElement(c.j,null,a.a.createElement(c.w,null,a.a.createElement(c.d,{slot:"start"},a.a.createElement(c.b,{defaultHref:"/good-memories"})),a.a.createElement(c.v,null,"Add New Memory"))),a.a.createElement(c.f,null,a.a.createElement(c.i,null,a.a.createElement(c.r,null,a.a.createElement(c.e,null,a.a.createElement(c.m,null,a.a.createElement(c.n,{position:"floating"},"Memory Title"),a.a.createElement(c.l,{type:"text"})))),a.a.createElement(c.r,{className:"ion-text-center"},a.a.createElement(c.e,null,a.a.createElement("div",{className:"image-preview"},n?a.a.createElement("img",{src:n.preview,alt:"Preview"}):a.a.createElement("h3",null,"No Photo Choosen.")),a.a.createElement(c.c,{fill:"clear",onClick:o},a.a.createElement(c.k,{icon:m.c,slot:"start"}),a.a.createElement(c.n,null,"Take Photo")))),a.a.createElement(c.r,{className:"ion-margin-top"},a.a.createElement(c.e,{className:"ion-text-center"},a.a.createElement(c.c,null,"Add Memory"))))))},b=(n(71),n(72),n(73),n(74),n(75),n(76),n(77),n(78),n(79),n(80),n(81),n(82),function(){return a.a.createElement(c.a,null,a.a.createElement(s.a,null,a.a.createElement(c.u,null,a.a.createElement(c.q,null,a.a.createElement(i.b,{path:"/bad-memories",component:u}),a.a.createElement(i.b,{path:"/good-memories",component:E}),a.a.createElement(i.b,{path:"/new-memory",component:h}),a.a.createElement(i.a,{to:"/good-memories"})),a.a.createElement(c.s,{slot:"bottom"},a.a.createElement(c.t,{href:"/good-memories",tab:"good"},a.a.createElement(c.k,{icon:m.j}),a.a.createElement(c.n,null,"Good Memories")),a.a.createElement(c.t,{href:"/bad-memories",tab:"bad"},a.a.createElement(c.k,{icon:m.o}),a.a.createElement(c.n,null,"Bad Memories"))))))});l.a.render(a.a.createElement(b,null),document.getElementById("root"))}},[[56,3,4]]]);
//# sourceMappingURL=main.8ce2c00a.chunk.js.map