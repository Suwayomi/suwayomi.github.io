(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{409:function(t,e,i){},410:function(t,e){t.exports=function(t){return null==t}},411:function(t,e,i){},412:function(t,e,i){},413:function(t,e,i){},414:function(t,e,i){},415:function(t,e,i){},416:function(t,e,i){},424:function(t,e,i){"use strict";i.r(e);var a=i(397),s={name:"SidebarGroup",components:{DropdownTransition:i(431).a},props:["item","open","collapsable","depth"],beforeCreate(){this.$options.components.SidebarLinks=i(424).default},methods:{isActive:a.e}},n=(i(444),i(30)),r=Object(n.a)(s,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?e("RouterLink",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[e("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?e("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):e("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[e("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?e("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),e("DropdownTransition",[t.open||!t.collapsable?e("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,"sidebar-depth":t.item.sidebarDepth,"initial-open-group-index":t.item.initialOpenGroupIndex,depth:t.depth+1}}):t._e()],1)],1)}),[],!1,null,null,null).exports;function o(t,e,i,a,s){const n={props:{to:e,activeClass:"",exactActiveClass:""},class:{active:a,"sidebar-link":!0}};return s>2&&(n.style={"padding-left":s+"rem"}),t("RouterLink",n,i)}function l(t,e,i,s,n,r=1){return!e||r>n?null:t("ul",{class:"sidebar-sub-headers"},e.map(e=>{const c=Object(a.e)(s,i+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[o(t,i+"#"+e.slug,e.title,c,e.level-1),l(t,e.children,i,s,n,r+1)])}))}var c={functional:!0,props:["item","sidebarDepth"],render(t,{parent:{$page:e,$site:i,$route:s,$themeConfig:n,$themeLocaleConfig:r},props:{item:c,sidebarDepth:p}}){const u=Object(a.e)(s,c.path),h="auto"===c.type?u||c.children.some(t=>Object(a.e)(s,c.basePath+"#"+t.slug)):u,d="external"===c.type?function(t,e,i){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[i,t("OutboundLink")])}(t,c.path,c.title||c.path):o(t,c.path,c.title||c.path,h),g=[e.frontmatter.sidebarDepth,p,r.sidebarDepth,n.sidebarDepth,1].find(t=>void 0!==t),f=r.displayAllHeaders||n.displayAllHeaders;if("auto"===c.type)return[d,l(t,c.children,c.basePath,s,g)];if((h||f)&&c.headers&&!a.d.test(c.path)){return[d,l(t,Object(a.c)(c.headers),c.path,s,g)]}return d}};i(445);function p(t,e){if("group"===e.type){const i=e.path&&Object(a.e)(t,e.path),s=e.children.some(e=>"group"===e.type?p(t,e):"page"===e.type&&Object(a.e)(t,e.path));return i||s}return!1}var u={name:"SidebarLinks",components:{SidebarGroup:r,SidebarLink:Object(n.a)(c,void 0,void 0,!1,null,null,null).exports},props:["items","depth","sidebarDepth","initialOpenGroupIndex"],data(){return{openGroupIndex:this.initialOpenGroupIndex||0}},watch:{$route(){this.refreshIndex()}},created(){this.refreshIndex()},methods:{refreshIndex(){const t=function(t,e){for(let i=0;i<e.length;i++){const a=e[i];if(p(t,a))return i}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive(t){return Object(a.e)(this.$route,t.regularPath)}}},h=Object(n.a)(u,(function(){var t=this,e=t._self._c;return t.items.length?e("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(i,a){return e("li",{key:a},["group"===i.type?e("SidebarGroup",{attrs:{item:i,open:a===t.openGroupIndex,collapsable:i.collapsable||i.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(a)}}}):e("SidebarLink",{attrs:{"sidebar-depth":t.sidebarDepth,item:i}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=h.exports},439:function(t,e,i){"use strict";i(409)},440:function(t,e,i){"use strict";i(411)},441:function(t,e,i){var a=i(25),s=i(8),n=i(20);t.exports=function(t){return"string"==typeof t||!s(t)&&n(t)&&"[object String]"==a(t)}},442:function(t,e,i){"use strict";i(412)},443:function(t,e,i){"use strict";i(413)},444:function(t,e,i){"use strict";i(414)},445:function(t,e,i){"use strict";i(415)},446:function(t,e,i){"use strict";i(416)},455:function(t,e,i){"use strict";var a={name:"BookOpenVariantIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},s=i(30),n=Object(s.a)(a,(function(){var t=this,e=t._self._c;return e("span",t._b({staticClass:"material-design-icon book-open-variant-icon",attrs:{"aria-hidden":!t.title,"aria-label":t.title,role:"img"},on:{click:function(e){return t.$emit("click",e)}}},"span",t.$attrs,!1),[e("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M17.5 14.33C18.29 14.33 19.13 14.41 20 14.57V16.07C19.38 15.91 18.54 15.83 17.5 15.83C15.6 15.83 14.11 16.16 13 16.82V15.13C14.17 14.6 15.67 14.33 17.5 14.33M13 12.46C14.29 11.93 15.79 11.67 17.5 11.67C18.29 11.67 19.13 11.74 20 11.9V13.4C19.38 13.24 18.54 13.16 17.5 13.16C15.6 13.16 14.11 13.5 13 14.15M17.5 10.5C15.6 10.5 14.11 10.82 13 11.5V9.84C14.23 9.28 15.73 9 17.5 9C18.29 9 19.13 9.08 20 9.23V10.78C19.26 10.59 18.41 10.5 17.5 10.5M21 18.5V7C19.96 6.67 18.79 6.5 17.5 6.5C15.45 6.5 13.62 7 12 8V19.5C13.62 18.5 15.45 18 17.5 18C18.69 18 19.86 18.16 21 18.5M17.5 4.5C19.85 4.5 21.69 5 23 6V20.56C23 20.68 22.95 20.8 22.84 20.91C22.73 21 22.61 21.08 22.5 21.08C22.39 21.08 22.31 21.06 22.25 21.03C20.97 20.34 19.38 20 17.5 20C15.45 20 13.62 20.5 12 21.5C10.66 20.5 8.83 20 6.5 20C4.84 20 3.25 20.36 1.75 21.07C1.72 21.08 1.68 21.08 1.63 21.1C1.59 21.11 1.55 21.12 1.5 21.12C1.39 21.12 1.27 21.08 1.16 21C1.05 20.89 1 20.78 1 20.65V6C2.34 5 4.18 4.5 6.5 4.5C8.83 4.5 10.66 5 12 6C13.34 5 15.17 4.5 17.5 4.5Z"}},[t.title?e("title",[t._v(t._s(t.title))]):t._e()])])])}),[],!1,null,null,null);e.a=n.exports},456:function(t,e,i){"use strict";var a={name:"CloudDownloadIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},s=i(30),n=Object(s.a)(a,(function(){var t=this,e=t._self._c;return e("span",t._b({staticClass:"material-design-icon cloud-download-icon",attrs:{"aria-hidden":!t.title,"aria-label":t.title,role:"img"},on:{click:function(e){return t.$emit("click",e)}}},"span",t.$attrs,!1),[e("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M17,13L12,18L7,13H10V9H14V13M19.35,10.03C18.67,6.59 15.64,4 12,4C9.11,4 6.6,5.64 5.35,8.03C2.34,8.36 0,10.9 0,14A6,6 0 0,0 6,20H19A5,5 0 0,0 24,15C24,12.36 21.95,10.22 19.35,10.03Z"}},[t.title?e("title",[t._v(t._s(t.title))]):t._e()])])])}),[],!1,null,null,null);e.a=n.exports},460:function(t,e,i){"use strict";i.r(e);var a=i(454),s=i(425),n=i(432),r=i(401);function o(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var l={name:"Navbar",components:{SidebarButton:n.a,NavLinks:r.a,SearchBox:s.a,AlgoliaSearchBox:{}},data:()=>({linksWrapMaxWidth:null}),computed:{algolia(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}},mounted(){const t=parseInt(o(this.$el,"paddingLeft"))+parseInt(o(this.$el,"paddingRight")),e=()=>{document.documentElement.clientWidth<719?this.linksWrapMaxWidth=null:this.linksWrapMaxWidth=this.$el.offsetWidth-t-(this.$refs.siteName&&this.$refs.siteName.offsetWidth||0)};e(),window.addEventListener("resize",e,!1)}},c=(i(439),i(30)),p=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("header",{staticClass:"navbar"},[e("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),e("RouterLink",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?e("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?e("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),e("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?e("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?e("SearchBox"):t._e(),t._v(" "),e("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null).exports,u=i(410),h=i.n(u),d=i(397),g={name:"PageEdit",computed:{lastUpdated(){return this.$page.lastUpdated},lastUpdatedText(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},editLink(){const t=h()(this.$page.frontmatter.editLink)?this.$site.themeConfig.editLinks:this.$page.frontmatter.editLink,{repo:e,docsDir:i="",docsBranch:a="master",docsRepo:s=e}=this.$site.themeConfig;return t&&s&&this.$page.relativePath?this.createEditLink(e,s,i,a,this.$page.relativePath):null},editLinkText(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink(t,e,i,a,s){if(/bitbucket.org/.test(e)){return e.replace(d.a,"")+"/src"+`/${a}/`+(i?i.replace(d.a,"")+"/":"")+s+`?mode=edit&spa=0&at=${a}&fileviewer=file-view-default`}if(/gitlab.com/.test(e)){return e.replace(d.a,"")+"/-/edit"+`/${a}/`+(i?i.replace(d.a,"")+"/":"")+s}return(d.i.test(e)?e:"https://github.com/"+e).replace(d.a,"")+"/edit"+`/${a}/`+(i?i.replace(d.a,"")+"/":"")+s}}},f=(i(440),Object(c.a)(g,(function(){var t=this,e=t._self._c;return e("footer",{staticClass:"page-edit"},[t.editLink?e("div",{staticClass:"edit-link"},[e("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),e("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?e("div",{staticClass:"last-updated"},[e("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),e("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()])}),[],!1,null,null,null).exports),b=(i(174),i(441)),m=i.n(b),v={name:"PageNav",props:["sidebarItems"],computed:{prev(){return _(C.PREV,this)},next(){return _(C.NEXT,this)}}};const C={NEXT:{resolveLink:function(t,e){return k(t,e,1)},getThemeLinkConfig:({nextLinks:t})=>t,getPageLinkConfig:({frontmatter:t})=>t.next},PREV:{resolveLink:function(t,e){return k(t,e,-1)},getThemeLinkConfig:({prevLinks:t})=>t,getPageLinkConfig:({frontmatter:t})=>t.prev}};function _(t,{$themeConfig:e,$page:i,$route:a,$site:s,sidebarItems:n}){const{resolveLink:r,getThemeLinkConfig:o,getPageLinkConfig:l}=t,c=o(e),p=l(i),u=h()(p)?c:p;return!1===u?void 0:m()(u)?Object(d.k)(s.pages,u,a.path):r(i,n)}function k(t,e,i){const a=[];!function t(e,i){for(let a=0,s=e.length;a<s;a++)"group"===e[a].type?t(e[a].children||[],i):i.push(e[a])}(e,a);for(let e=0;e<a.length;e++){const s=a[e];if("page"===s.type&&s.path===decodeURIComponent(t.path))return a[e+i]}}var x=v,$=(i(442),{components:{PageEdit:f,PageNav:Object(c.a)(x,(function(){var t=this,e=t._self._c;return t.prev||t.next?e("div",{staticClass:"page-nav"},[e("p",{staticClass:"inner"},[t.prev?e("span",{staticClass:"prev"},[t._v("\n      ←\n      "),"external"===t.prev.type?e("a",{staticClass:"prev",attrs:{href:t.prev.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n\n        "),e("OutboundLink")],1):e("RouterLink",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n      ")])],1):t._e(),t._v(" "),t.next?e("span",{staticClass:"next"},["external"===t.next.type?e("a",{attrs:{href:t.next.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n\n        "),e("OutboundLink")],1):e("RouterLink",{attrs:{to:t.next.path}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n      ")]),t._v("\n      →\n    ")],1):t._e()])]):t._e()}),[],!1,null,null,null).exports},props:["sidebarItems"]}),L=(i(443),Object(c.a)($,(function(){var t=this._self._c;return t("main",{staticClass:"page"},[this._t("top"),this._v(" "),t("Content",{staticClass:"theme-default-content"}),this._v(" "),t("PageEdit"),this._v(" "),t("PageNav",this._b({},"PageNav",{sidebarItems:this.sidebarItems},!1)),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null).exports),S={name:"Sidebar",components:{SidebarLinks:i(424).default,NavLinks:r.a},props:["items"]},y=(i(446),Object(c.a)(S,(function(){var t=this._self._c;return t("aside",{staticClass:"sidebar"},[t("NavLinks"),this._v(" "),this._t("top"),this._v(" "),t("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null).exports),O={name:"Layout",components:{Home:a.a,Page:L,Sidebar:y,Navbar:p},data:()=>({isSidebarOpen:!1}),computed:{shouldShowNavbar(){const{themeConfig:t}=this.$site,{frontmatter:e}=this.$page;return!1!==e.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar(){const{frontmatter:t}=this.$page;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems(){return Object(d.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses(){const t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted(){this.$router.afterEach(()=>{this.isSidebarOpen=!1})},methods:{toggleSidebar(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd(t){const e=t.changedTouches[0].clientX-this.touchStart.x,i=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(i)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},w=Object(c.a)(O,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?e("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),e("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),e("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t.$page.frontmatter.home?e("Home"):e("Page",{attrs:{"sidebar-items":t.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom")]},proxy:!0}],null,!0)})],1)}),[],!1,null,null,null);e.default=w.exports}}]);