(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{195:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(201),c=a(204),i=a(205),l=a.n(i),s=a(197),m=function(e){var t=e.title,a=e.description,n=e.image,o=e.pathname,i=e.article;return r.a.createElement(s.b,{query:d,render:function(e){var c=e.site.siteMetadata,s=c.defaultTitle,m=c.titleTemplate,u=c.defaultDescription,d=c.siteUrl,p=c.defaultImage,b=c.twitterUsername,E={title:t||s,description:a||u,image:""+d+(n||p),url:""+d+(o||"/")};return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{title:E.title,titleTemplate:m},r.a.createElement("meta",{name:"description",content:E.description}),r.a.createElement("meta",{name:"image",content:E.image}),E.url&&r.a.createElement("meta",{property:"og:url",content:E.url}),!i?null:r.a.createElement("meta",{property:"og:type",content:"article"}),E.title&&r.a.createElement("meta",{property:"og:title",content:E.title}),E.description&&r.a.createElement("meta",{property:"og:description",content:E.description}),E.image&&r.a.createElement("meta",{property:"og:image",content:E.image}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),b&&r.a.createElement("meta",{name:"twitter:creator",content:b}),E.title&&r.a.createElement("meta",{name:"twitter:title",content:E.title}),E.description&&r.a.createElement("meta",{name:"twitter:description",content:E.description}),E.image&&r.a.createElement("meta",{name:"twitter:image",content:E.image})))},data:c})},u=m;m.defaultProps={title:null,description:null,image:null,pathname:null,article:!1};var d="1387910276";t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(u,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},196:function(e,t,a){var n;e.exports=(n=a(198))&&n.default||n},197:function(e,t,a){"use strict";a.d(t,"b",function(){return s});var n=a(0),r=a.n(n),o=a(66),c=a.n(o);a.d(t,"a",function(){return c.a});a(196),a(9).default.enqueue;var i=r.a.createContext({});function l(e){var t=e.staticQueryData,a=e.data,n=e.query,o=e.render,c=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,c&&o(c),!c&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var s=function(e){var t=e.data,a=e.query,n=e.render,o=e.children;return r.a.createElement(i.Consumer,null,function(e){return r.a.createElement(l,{data:t,query:a,render:n||o,staticQueryData:e})})}},198:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),r=a.n(n),o=a(91);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null}},199:function(e,t,a){e.exports=a.p+"static/logo-large-c93a1b872c82ab29982171b5ef055984.svg"},200:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTMgMThoMTh2LTJIM3Yyem0wLTVoMTh2LTJIM3Yyem0wLTd2MmgxOFY2SDN6Ii8+PC9zdmc+"},201:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(197),c=a(199),i=a.n(c),l=a(200),s=a.n(l);var m=function(e){var t,a;function n(){return e.apply(this,arguments)||this}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var c=n.prototype;return c.openSidebar=function(){document.getElementById("sidebar").style.display="block"},c.closeSidebar=function(){document.getElementById("sidebar").style.display="none"},c.render=function(){var e=this.props.page;return this.props.smallScreen?r.a.createElement("div",{className:"sidebar"},r.a.createElement("button",{onClick:this.openSidebar,className:"sidebar-button-off"},r.a.createElement("img",{src:s.a,alt:"Menu",className:"menu-icon"})),r.a.createElement("div",{class:"sidebar-inner",style:{display:"none"},id:"sidebar",onClick:this.closeSidebar},r.a.createElement("button",{className:"sidebar-button-on"},r.a.createElement("img",{src:s.a,alt:"Menu",className:"menu-icon"})),r.a.createElement(o.a,{to:"/",className:"sidebar-link"},r.a.createElement("button",{className:"sidebar-item"},"HOME")),r.a.createElement(o.a,{to:"/work",className:"sidebar-link"},r.a.createElement("button",{className:"sidebar-item"},"WORK")),r.a.createElement(o.a,{to:"/about",className:"sidebar-link"},r.a.createElement("button",{className:"sidebar-item"},"ABOUT")),r.a.createElement(o.a,{to:"/contact",className:"sidebar-link"},r.a.createElement("button",{className:"sidebar-item"},"CONTACT")))):r.a.createElement("header",{className:"header"},r.a.createElement(o.a,{to:"/"},r.a.createElement("button",{className:"home"===e?"button-active":"button"},"HOME")),r.a.createElement(o.a,{to:"/work"},r.a.createElement("button",{className:"work"===e?"button-active":"button"},"WORK")),r.a.createElement(o.a,{to:"/"},r.a.createElement("img",{src:i.a,alt:"Crafty Logo",className:"logo"})),r.a.createElement(o.a,{to:"/about"},r.a.createElement("button",{className:"about"===e?"button-active":"button"},"ABOUT")),r.a.createElement(o.a,{to:"/contact"},r.a.createElement("button",{className:"contact"===e?"button-active":"button"},"CONTACT")))},n}(n.Component);var u=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("a",{href:"https://simplecode.io",className:"footer-text"},"© ",(new Date).getFullYear()," "," Simplecode. All rights reserved."))},n}(n.Component);a(202);var d=function(e){var t,a;function n(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={smallScreen:!1},t}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var o=n.prototype;return o.componentDidMount=function(){window.addEventListener("resize",this.resize.bind(this)),this.resize()},o.resize=function(){this.setState({smallScreen:window.innerWidth<=840})},o.render=function(){var e=this.props,t=e.children,a=e.page;return r.a.createElement("div",{className:"main"},r.a.createElement(m,{page:a,smallScreen:this.state.smallScreen}),r.a.createElement("div",null,t),r.a.createElement(u,null))},n}(n.Component);t.a=d},204:function(e){e.exports={data:{site:{siteMetadata:{defaultTitle:"Crafty Co | Web Development",titleTemplate:"%s",defaultDescription:"We're on a mission to make the web beautiful.",siteUrl:"https://demos.simplecode.io/gatsby/crafty",defaultImage:"/logo.png",twitterUsername:"@Simplecodehq"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-756d0073d866999009c2.js.map