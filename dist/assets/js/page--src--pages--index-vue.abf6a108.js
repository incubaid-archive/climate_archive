(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{IGkE:function(t,e,a){"use strict";var s={props:["header"]},n=a("KHd+"),r=Object(n.a)(s,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"py-12 px-4 text-center"},[e("div",{staticClass:"w-full max-w-2xl mx-auto"},[e("span",{staticClass:"text-sm font-semibold"},[t._v(t._s(t.header.title))]),e("h2",{staticClass:"text-4xl mt-2 mb-6 leading-tight font-heading"},[t._v("\n      "+t._s(t.header.subtitle)+"\n    ")]),e("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"mb-8 text-gray-700 leading-relaxed",domProps:{innerHTML:t._s(t.header.content)}}),e("div",[t.header.btn1?e("g-link",{staticClass:"bg-gray-900 learn-button hover:bg-gray-700 text-gray-100 px-5 py-3 mr-3 font-semibold rounded shadow",attrs:{to:t.header.link1}},[t._v(t._s(t.header.btn1))]):t._e(),t.header.btn2?e("g-link",{staticClass:"text-gray-900 bg-transparent hover:underline",attrs:{to:t.header.link2}},[t._v(t._s(t.header.btn2))]):t._e()],1)])])}),[],!1,null,null,null);e.a=r.exports},MtIX:function(t,e,a){"use strict";var s={props:["title","excerpt","altImg","image","button","link"],computed:{img:function(){return this.image?this.image.src?this.image.src:this.image:""}}},n=a("KHd+"),r=Object(n.a)(s,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"py-12 px-4"},[e("div",{staticClass:"flex flex-wrap items-center text-center lg:text-left -mx-2"},[e("div",{staticClass:"lg:w-1/2 px-2 lg:pr-10 mt-10 lg:mt-0 order-1 lg:order-none"},[e("h2",{staticClass:"text-8xl mb-6 leading-tight font-semibold font-heading"},[t._v("\n        "+t._s(t.title)+"\n      ")]),e("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"mb-8 text-gray-700 leading-relaxed",domProps:{innerHTML:t._s(t.excerpt)}}),t.button?e("div",[t.link.includes("http")?e("a",{staticClass:"inline-block py-4 px-8 mr-6 leading-none text-white bg-gray-900 hover:bg-gray-700 font-semibold rounded shadow",attrs:{target:"_blank",href:t.link}},[t._v(t._s(t.button))]):e("a",{staticClass:"inline-block py-4 px-8 mr-6 leading-none text-white bg-gray-900 hover:bg-gray-700 font-semibold rounded shadow",attrs:{href:t.link}},[t._v(t._s(t.button))])]):t._e()]),e("div",{staticClass:"lg:w-1/2 px-2"},[e("g-image",{attrs:{src:t.img,alt:t.altImg}})],1)])])}),[],!1,null,null,null);e.a=r.exports},RRjm:function(t,e,a){"use strict";var s={props:["cta"]},n=a("KHd+"),r=Object(n.a)(s,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"py-12 px-4 text-center"},[e("div",{staticClass:"w-full max-w-2xl mx-auto"},[e("h2",{staticClass:"text-4xl leading-tight font-semibold font-heading"},[t._v("\n      "+t._s(t.cta.title)+"\n    ")]),e("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"mt-6 mb-8 text-gray-700 leading-relaxed",domProps:{innerHTML:t._s(t.cta.content)}}),t.cta.button?e("g-link",{staticClass:"bg-gray-900 learn-button hover:bg-gray-700 text-gray-100 px-5 py-3 mr-3 font-semibold rounded shadow",attrs:{to:t.cta.link}},[t._v(t._s(t.cta.button))]):t._e()],1)])}),[],!1,null,null,null);e.a=r.exports},akyF:function(t,e,a){"use strict";var s={computed:{img:function(){return this.card.image.src?"background-image:url("+this.card.image.src+")":this.card.image}},props:["card"]},n=a("KHd+"),r=Object(n.a)(s,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"lg:py-12 lg:flex lg:justify-center flex flex-col"},[e("div",{staticClass:"bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg"},[e("div",{staticClass:"lg:w-1/2"},[e("div",{staticClass:"h-64 bg-cover lg:rounded-lg lg:h-full",style:t.img})]),e("div",{staticClass:"py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2"},[e("h2",{staticClass:"text-3xl text-gray-700 font-bold"},[t._v(t._s(t.card.title))]),e("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"mt-4 text-gray-700",domProps:{innerHTML:t._s(t.card.content)}}),t.card.button?e("div",{staticClass:"mt-8"},[t.card.link.includes("http")?e("a",{staticClass:"bg-gray-900 learn-button hover:bg-gray-700 text-gray-100 px-5 py-3 font-semibold rounded",attrs:{target:"_blank",href:t.card.link}},[t._v(t._s(t.card.button))]):e("a",{staticClass:"bg-gray-900 learn-button hover:bg-gray-700 text-gray-100 px-5 py-3 font-semibold rounded",attrs:{href:t.card.link}},[t._v(t._s(t.card.button))])]):t._e()])])])])}),[],!1,null,null,null);e.a=r.exports},fuxi:function(t,e,a){"use strict";var s={props:["logos"],methods:{img:t=>t?t.src?t.src:t:""}},n=a("KHd+"),r=Object(n.a)(s,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"pt-8 px-4 text-center"},[t._m(0),e("div",{staticClass:"flex flex-wrap -mx-8"},t._l(t.logos,(function(a,s){return e("g-link",{key:s,staticClass:"w-1/2 md:w-1/6 px-8 mb-8",attrs:{to:a.url}},[e("g-image",{attrs:{src:t.img(a.image)}})],1)})),1)])}),[function(){var t=this._self._c;return t("div",{staticClass:"max-w-2xl mx-auto mb-8"},[t("h2",{staticClass:"text-4xl leading-tight mb-6 font-semibold font-heading"},[this._v("\n      Meet some of our partners\n    ")]),t("p",{staticClass:"text-gray-400 leading-relaxed"})])}],!1,null,null,null);e.a=r.exports},iyQ6:function(t,e,a){"use strict";a.r(e);var s=a("MtIX"),n=a("IGkE"),r=a("akyF"),i=a("RRjm"),l=a("fuxi"),g={props:["news"]},o=a("KHd+"),c=Object(o.a)(g,(function(){var t=this._self._c;return t("div",{staticClass:"bg-white"},[t("div",{staticClass:"max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8"},[t("p",{staticClass:"text-center text-base leading-6 font-semibold uppercase text-gray-600 tracking-wider"},[this._v("\n      "+this._s(this.news.excerpt)+"\n    ")]),t("div",{staticClass:"mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8"},this._l(this.news.partners,(function(e){return t("g-link",{key:e.id,staticClass:"col-span-1 flex justify-center py-8 px-8 m-1 bg-gray-100",attrs:{to:e.path,target:"_blank"}},[t("img",{staticClass:"max-h-12",attrs:{src:e.logo}})])})),1)])])}),[],!1,null,null,null).exports,d=a("phRe"),u={components:{Header:s.a,SolutionsHeader:n.a,NewCard:r.a,CallToAction:i.a,logoShowcase:l.a,InTheNews:c,SignUp:d.a},metaInfo(){return{title:this.$page.markdownPage.title}}},m=null,p=Object(o.a)(u,(function(){var t=this,e=t._self._c;return e("Layout",{attrs:{hideHeader:!0,disableScroll:!0}},[e("Header",{attrs:{title:t.$page.markdownPage.header_title,image:t.$page.markdownPage.header_image,altImg:t.$page.markdownPage.header_altImg,excerpt:t.$page.markdownPage.header_excerpt,button:t.$page.markdownPage.button,link:t.$page.markdownPage.link}}),t.$page.markdownPage.header?e("SolutionsHeader",{attrs:{header:t.$page.markdownPage.header}}):t._e(),t._l(t.$page.markdownPage.cards,(function(t){return e("NewCard",{key:t.id,attrs:{card:t}})})),t.$page.markdownPage.cta?e("CallToAction",{attrs:{cta:t.$page.markdownPage.cta}}):t._e(),t.$page.markdownPage.logos.length>0?e("logoShowcase",{attrs:{logos:t.$page.markdownPage.logos}}):t._e(),t.$page.markdownPage.inTheNews?e("InTheNews",{attrs:{news:t.$page.markdownPage.inTheNews}}):t._e(),t.$page.markdownPage.signup?e("SignUp",{attrs:{signup:t.$page.markdownPage.signup}}):t._e()],2)}),[],!1,null,null,null);"function"==typeof m&&m(p);e.default=p.exports},phRe:function(t,e,a){"use strict";var s={props:["signup"]},n=a("KHd+"),r=Object(n.a)(s,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"py-8 px-4"},[e("div",{staticClass:"flex flex-wrap items-center -mx-4"},[e("div",{staticClass:"w-full lg:w-4/6 px-4 mb-8 lg:mb-0 text-center lg:text-left"},[e("h2",{staticClass:"text-xl font-semibold font-heading"},[t._v("\n        "+t._s(t.signup.title)+"\n      ")])]),e("div",{staticClass:"w-full lg:w-2/6 px-4 text-center"},[e("g-link",{staticClass:"bg-gray-900 learn-button hover:bg-gray-700 text-gray-100 px-5 py-3 mr-3 font-semibold rounded shadow",attrs:{to:t.signup.link1}},[t._v(t._s(t.signup.button1))]),e("g-link",{staticClass:"text-gray-900 bg-transparent hover:underline",attrs:{to:t.signup.link2}},[t._v(t._s(t.signup.button2))])],1)])])}),[],!1,null,null,null);e.a=r.exports}}]);