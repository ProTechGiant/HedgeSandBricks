(this.webpackJsonphedgesandbricks=this.webpackJsonphedgesandbricks||[]).push([[23],{123:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.headertitle,a=e.headerimg;e.subheader&&e.subheader;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"breadcrumb-area bg-overlay-2",style:{backgroundImage:'url("/'+a+'")',height:"500px"}},r.a.createElement("div",{className:"container "},r.a.createElement("div",{className:"breadcrumb-inner "},r.a.createElement("div",{className:"section-title text-center"},r.a.createElement("h2",{className:"page-title mt-4",style:{textTransform:"capitalize"}},t))))))}},131:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},76:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}a.d(t,"a",(function(){return n}))},77:function(e,t,a){"use strict";function n(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,t,a){return t&&n(e.prototype,t),a&&n(e,a),e}a.d(t,"a",(function(){return r}))},78:function(e,t,a){"use strict";var n=a(94);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,c=void 0;try{for(var l,o=e[Symbol.iterator]();!(n=(l=o.next()).done)&&(a.push(l.value),!t||a.length!==t);n=!0);}catch(i){r=!0,c=i}finally{try{n||null==o.return||o.return()}finally{if(r)throw c}}return a}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}a.d(t,"a",(function(){return r}))},80:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(96);function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Object(n.a)(e,t)}},81:function(e,t,a){"use strict";var n=a(92),r=a(98);function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var l=a(99);function o(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?Object(l.a)(e):t}function i(e){return function(){var t,a=Object(n.a)(e);if(Object(r.a)()){var c=Object(n.a)(this).constructor;t=Reflect.construct(a,arguments,c)}else t=a.apply(this,arguments);return o(this,t)}}a.d(t,"a",(function(){return i}))},83:function(e,t,a){"use strict";var n=a(76),r=a(77),c=a(80),l=a(81),o=a(0),i=a.n(o);a(45),t.a=function(e){return function(t){Object(c.a)(o,t);var a=Object(l.a)(o);function o(){var e;Object(n.a)(this,o);for(var t=arguments.length,r=new Array(t),c=0;c<t;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={isDisconnected:!1},e.handleConnectionChange=function(){if("online"!==(navigator.onLine?"online":"offline"))return e.setState({isDisconnected:!0});var t=setInterval((function(){fetch("//google.com",{mode:"no-cors"}).then((function(){e.setState({isDisconnected:!1},(function(){return clearInterval(t)}))})).catch((function(){return e.setState({isDisconnected:!0})}))}),2e3)},e}return Object(r.a)(o,[{key:"componentDidMount",value:function(){this.handleConnectionChange(),window.addEventListener("online",this.handleConnectionChange),window.addEventListener("offline",this.handleConnectionChange)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("online",this.handleConnectionChange),window.removeEventListener("offline",this.handleConnectionChange)}},{key:"render",value:function(){var t=this.state.isDisconnected;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",null,t&&i.a.createElement("div",{className:"navbar-top"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-12 text-center"},"Please check your internet connection...",i.a.createElement("div",{className:"msin"},i.a.createElement("div",{className:"cont_principal"},i.a.createElement("div",{className:"cont_error"},i.a.createElement("h1",null,"Oops"),i.a.createElement("p",null,"Network connection is lost")),i.a.createElement("div",{className:"cont_aura_1"}),i.a.createElement("div",{className:"cont_aura_2"}))))))),i.a.createElement(e,this.props)))}}]),o}(o.Component)}},84:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(1),r=a.n(n),c=a(4),l=a(6),o=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(l.a,"/api/user/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"".concat(localStorage.getItem("token"))}}).then((function(e){return e.json()})).catch((function(e){return e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},85:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(83);t.a=Object(c.a)((function(){return r.a.createElement("div",null)}))},86:function(e,t,a){"use strict";var n=a(1),r=a.n(n),c=a(4),l=a(78),o=a(0),i=a.n(o),s=a(7),u=a(23),m=a(84),f=a(24),d=a(25),p=a(26),b=a(85);a(87);t.a=function(){var e=Object(s.g)(),t=Object(f.c)((function(e){return e.user})),a=t.user,n=(t.isAuth,Object(s.f)()),v=Object(o.useState)(!1),E=Object(l.a)(v,2),h=(E[0],E[1]),g=Object(o.useState)(!1),y=Object(l.a)(g,2),N=y[0],w=y[1],j=Object(o.useState)(""),O=Object(l.a)(j,2),S=O[0],x=O[1],k=Object(f.b)();Object(o.useEffect)((function(){w(localStorage.getItem("token")),C()}),[N]);var C=function(){h(!0);try{Object(m.a)().then((function(e){e?(console.log("asdfasdfasdf",e),k(Object(d.c)({data:e})),h(!1)):h(!1)}))}catch(e){console.log(e)}},_=function(){var e=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:""==S?n.push("/"):(t.preventDefault(),a={address:S},console.log("search formdata",a),k(Object(p.b)(a)),n.push("/search/filter"));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return i.a.createElement("div",{className:"navbar-area navbar-area-3 "},i.a.createElement(b.a,null),i.a.createElement("nav",{className:"navbar navbar-expand-lg"},i.a.createElement("div",{className:"container nav-container"},i.a.createElement("div",{className:"responsive-mobile-menu"},i.a.createElement("button",{className:"menu toggle-btn d-block d-lg-none","data-target":"#dkt_main_menu","aria-expanded":"false","aria-label":"Toggle navigation"},i.a.createElement("span",{className:"icon-left"}),i.a.createElement("span",{className:"icon-right"}))),i.a.createElement("div",{className:"logo"},i.a.createElement(u.b,{to:"/"},i.a.createElement("img",{src:"/assets/img/mainImg.png",alt:" image ",width:200}))),i.a.createElement("div",{className:"collapse navbar-collapse",id:"dkt_main_menu"},i.a.createElement("ul",{className:"navbar-nav menu-open text-center"},i.a.createElement("li",null,i.a.createElement(u.b,{className:"".concat("/house-timing"==e.pathname?"active":""),to:"/house-timing",style:{fontSize:"13px"}},"OPEN HOUSE")),i.a.createElement("li",null,i.a.createElement(u.b,{className:"".concat("/about"==e.pathname?"active":""),to:"/about",style:{fontSize:"13px"}},"ABOUT US")),i.a.createElement("li",null,i.a.createElement(u.b,{className:"".concat("/services"==e.pathname?"active":""),to:"/services",style:{fontSize:"13px"}},"SERVICES")),null!==N?i.a.createElement("li",null,i.a.createElement(u.b,{className:"".concat("/chat"==e.pathname?"active":""),to:"/chat",style:{fontSize:"13px"}},"INBOX")):null,i.a.createElement("li",null,i.a.createElement(u.b,{className:"".concat("/faq"==e.pathname?"active":""),to:"/faq",style:{fontSize:"13px"}},"FAQ")),i.a.createElement("li",null,i.a.createElement(u.b,{className:"".concat("/blog"==e.pathname?"active":""),to:"/blog",style:{fontSize:"13px"}},"BLOG")),i.a.createElement("li",null,i.a.createElement(u.b,{className:"".concat("/contact"==e.pathname?"active":""),to:"/contact",style:{fontSize:"13px"}},"CONTACT US")),N?null:i.a.createElement(i.a.Fragment,null,i.a.createElement("li",null,i.a.createElement(u.b,{className:"".concat("/sign-in"==e.pathname?"active":""),to:"/sign-in",style:{fontSize:"13px"}},"SIGNIN")),i.a.createElement("li",null,i.a.createElement(u.b,{className:"".concat("/sign-up"==e.pathname?"active":""),to:"/sign-up",style:{fontSize:"13px"}},"SIGNUP"))),N&&i.a.createElement(i.a.Fragment,null,i.a.createElement("li",{className:"menu-item-has-children current-menu-item "},i.a.createElement(u.b,{to:"#"},i.a.createElement("img",{htmlFor:"imageUpload",width:"45px",src:"https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg",style:{height:"45px",objectFit:"cover",borderRadius:"50px"}})),i.a.createElement("ul",{className:"sub-menu"},i.a.createElement("li",null,i.a.createElement(u.b,{to:"#",style:{fontSize:"13px",textTransform:"uppercase"}},null==a.fname?null:i.a.createElement("b",null," Hi. ",null===a||void 0===a?void 0:a.fname))),i.a.createElement("li",{className:"".concat("/profile"==e.pathname?"active":"")},i.a.createElement(u.b,{to:"/profile",style:{fontSize:"13px",textTransform:"uppercase"}},"my Profile")),i.a.createElement("li",{className:"".concat("/my/properties/sale"==e.pathname?"active":"")},i.a.createElement(u.b,{to:"/my/properties/sale",style:{fontSize:"13px"}},"SALE LIST")),i.a.createElement("li",{className:"".concat("/my/properties/rent"==e.pathname?"active":"")},i.a.createElement(u.b,{to:"/my/properties/rent",style:{fontSize:"13px"}},"RENT LIST"))," ",i.a.createElement("li",null,i.a.createElement(u.b,{to:"#",style:{fontSize:"13px"},onClick:function(){k(Object(d.g)()),window.location.reload(!1),n.push("/")}},"LOGOUT"))))),i.a.createElement("li",null,i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-12 col-lg-12 col-sm-12 col-12 ",style:{borderBottomLeftRadius:"5px",borderTopLeftRadius:"5px",textAlign:"center",display:"flex"}},i.a.createElement("div",{className:"single-input-inner-home "},i.a.createElement("input",{type:"text",placeholder:"Search by Address",value:S,onChange:function(e){x(e.target.value)}})),i.a.createElement("button",{type:"submit",onClick:_,style:{border:"none",background:"#FFFFFF",borderBottomRightRadius:"10px",borderTopRightRadius:"10px"}},i.a.createElement("i",{className:"fa fa-search mr-1"}))))))))))}},87:function(e,t,a){},89:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(23);t.a=function(){return Object(n.useEffect)((function(){var e=document.createElement("script");e.async=!0,e.src="/assets/js/main.js",document.body.appendChild(e)}),[]),r.a.createElement("footer",{className:"footer-area style-two "},r.a.createElement("div",{className:"blog-page-area p-4"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-4 col-md-6 col-12"},r.a.createElement("div",{className:"widget widget_about "},r.a.createElement("div",{className:"mb-4"},r.a.createElement("img",{src:"/assets/img/mainImg.png",alt:" image ",height:80})),r.a.createElement("div",{className:"details"},r.a.createElement("div",{className:"top-margin _20-pixels"},r.a.createElement("p",{className:"small-white"},"Hedgesandbricks is Real estate property consisting of land and the buildings on it, easy to customize and easy to create your property listings.")),r.a.createElement("div",{className:"top-margin _15-pixels mt-4",style:{display:"flex",flexDirection:"row",listStyle:"none",justifyContent:"space-between"}},r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.facebook.com/solverwp/"},r.a.createElement("i",{className:"fab fa-facebook-f","aria-hidden":"true"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.twitter.com/solverwp/"},r.a.createElement("i",{className:"fab fa-twitter","aria-hidden":"true"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.instagram.com/solverwp/"},r.a.createElement("i",{className:"fab fa-instagram","aria-hidden":"true"}))))))),r.a.createElement("div",{className:"col-lg-6 col-md-6 col-6"},r.a.createElement("div",{className:"widget widget_nav_menu"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(c.b,{to:"/about"},r.a.createElement("b",null,"MENU"))),r.a.createElement("li",null,r.a.createElement(c.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(c.b,{to:"/about"},"About Us")),r.a.createElement("li",null,r.a.createElement(c.b,{to:"/services"},"Services")),r.a.createElement("li",null,r.a.createElement(c.b,{to:"/faq"},"Faq")),r.a.createElement("li",null,r.a.createElement(c.b,{to:"/blog"},"Blog")),r.a.createElement("li",null,r.a.createElement(c.b,{to:"/contact"},"Contact Us")))))))))}},92:function(e,t,a){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}a.d(t,"a",(function(){return n}))},94:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(97);function r(e,t){if(e){if("string"===typeof e)return Object(n.a)(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Object(n.a)(e,t):void 0}}},96:function(e,t,a){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}a.d(t,"a",(function(){return n}))},97:function(e,t,a){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}a.d(t,"a",(function(){return n}))},98:function(e,t,a){"use strict";function n(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}a.d(t,"a",(function(){return n}))},984:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(86),l=a(123),o=a(1),i=a.n(o),s=a(4),u=a(78),m=a(258),f=a.n(m),d=a(23),p=a(6),b=a(7),v=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),o=Object(u.a)(l,2),m=o[0],v=o[1];Object(b.f)();Object(n.useEffect)((function(){c(!0),E()}),[]);var E=function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("token"),e.next=3,fetch("".concat(p.a,"/blog/show"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:t}}).then((function(e){return e.json()})).then((function(e){console.log("res data",e.data),c(!1),v(e.data)})).catch((function(e){c(!1),console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a?r.a.createElement("div",{className:"property-page-area pd-top-120 pd-bottom-90 "},r.a.createElement("div",{className:"container "},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-md-12 col-12 text-center"}," ",r.a.createElement("i",{className:"fa fa-spinner fa-spin",style:{fontSize:"15px",marginRight:"5px",color:"black"}}))))):r.a.createElement("div",{className:"blog-page-area",style:{backgroundColor:"#F2F3F5"}},r.a.createElement("div",{className:"container pt-4"},r.a.createElement("div",{className:"row"},(null===m||void 0===m?void 0:m.length)>0&&(null===m||void 0===m?void 0:m.map((function(e,t){var a,n;return r.a.createElement("div",{className:"col-lg-6",key:t},r.a.createElement("div",{className:"single-blog-inner"},r.a.createElement("div",{className:"thumb"},r.a.createElement(d.b,{to:"/blog-details/".concat(null===e||void 0===e?void 0:e._id)},r.a.createElement("img",{src:"".concat(p.a,"/").concat(null===e||void 0===e||null===(a=e.images)||void 0===a||null===(n=a[0])||void 0===n?void 0:n.path),alt:"img",height:300,width:620,style:{objectFit:"cover"}}))),r.a.createElement("div",{className:"details"},r.a.createElement("h3",null,r.a.createElement(d.b,{to:"/blog-details/".concat(null===e||void 0===e?void 0:e._id)},null===e||void 0===e?void 0:e.title)),r.a.createElement("ul",{className:"meta-inner"},r.a.createElement("li",null,r.a.createElement("img",{src:"/assets/img/icon/1.png",alt:"img"})," ","By Admin"),r.a.createElement("li",null,r.a.createElement("img",{src:"/assets/img/icon/3.png",alt:"img"}),f()(null===e||void 0===e?void 0:e.createdAt).format("LL"))),r.a.createElement("p",null,null===e||void 0===e?void 0:e.description.substring(0,54)),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-7"},r.a.createElement("div",{className:"author-inner"},r.a.createElement("img",{src:"/assets/img/blog/author1.png",alt:"img"}),r.a.createElement("span",null,"By Admin"))),r.a.createElement("div",{className:"col-5 align-self-center text-right"},r.a.createElement(d.b,{className:"read-more",to:"/blog-details/".concat(null===e||void 0===e?void 0:e._id)},"Read More ",r.a.createElement("i",{className:"la la-arrow-right"})))))))}))))))},E=a(89);t.default=function(){return r.a.createElement("div",null,r.a.createElement(c.a,null),r.a.createElement(l.a,{headerimg:"assets/img/blog.jpeg"}),r.a.createElement(v,null),r.a.createElement(E.a,null))}},99:function(e,t,a){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}a.d(t,"a",(function(){return n}))}}]);
//# sourceMappingURL=23.b65a02ed.chunk.js.map