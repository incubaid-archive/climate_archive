(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{EYh5:function(t,a,e){},IGkE:function(t,a,e){"use strict";var s={props:["header"]},i=e("KHd+"),l=Object(i.a)(s,(function(){var t=this,a=t._self._c;return a("section",{staticClass:"py-12 px-4 text-center"},[a("div",{staticClass:"w-full max-w-2xl mx-auto"},[a("span",{staticClass:"text-sm font-semibold"},[t._v(t._s(t.header.title))]),a("h2",{staticClass:"text-4xl mt-2 mb-6 leading-tight font-heading"},[t._v("\n      "+t._s(t.header.subtitle)+"\n    ")]),a("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"mb-8 text-gray-700 leading-relaxed",domProps:{innerHTML:t._s(t.header.content)}}),a("div",[t.header.btn1?a("g-link",{staticClass:"bg-gray-900 learn-button hover:bg-gray-700 text-gray-100 px-5 py-3 mr-3 font-semibold rounded shadow",attrs:{to:t.header.link1}},[t._v(t._s(t.header.btn1))]):t._e(),t.header.btn2?a("g-link",{staticClass:"text-gray-900 bg-transparent hover:underline",attrs:{to:t.header.link2}},[t._v(t._s(t.header.btn2))]):t._e()],1)])])}),[],!1,null,null,null);a.a=l.exports},J21R:function(t,a,e){var s={"./image_name.png":"ijPK"};function i(t){var a=l(t);return e(a)}function l(t){if(!e.o(s,t)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return s[t]}i.keys=function(){return Object.keys(s)},i.resolve=l,t.exports=i,i.id="J21R"},LEEx:function(t,a,e){},MtIX:function(t,a,e){"use strict";var s={props:["title","excerpt","altImg","image","button","link"],computed:{img:function(){return this.image?this.image.src?this.image.src:this.image:""}}},i=e("KHd+"),l=Object(i.a)(s,(function(){var t=this,a=t._self._c;return a("section",{staticClass:"py-12 px-4"},[a("div",{staticClass:"flex flex-wrap items-center text-center lg:text-left -mx-2"},[a("div",{staticClass:"lg:w-1/2 px-2 lg:pr-10 mt-10 lg:mt-0 order-1 lg:order-none"},[a("h2",{staticClass:"text-8xl mb-6 leading-tight font-semibold font-heading"},[t._v("\n        "+t._s(t.title)+"\n      ")]),a("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"mb-8 text-gray-700 leading-relaxed",domProps:{innerHTML:t._s(t.excerpt)}}),t.button?a("div",[t.link.includes("http")?a("a",{staticClass:"inline-block py-4 px-8 mr-6 leading-none text-white bg-gray-900 hover:bg-gray-700 font-semibold rounded shadow",attrs:{target:"_blank",href:t.link}},[t._v(t._s(t.button))]):a("a",{staticClass:"inline-block py-4 px-8 mr-6 leading-none text-white bg-gray-900 hover:bg-gray-700 font-semibold rounded shadow",attrs:{href:t.link}},[t._v(t._s(t.button))])]):t._e()]),a("div",{staticClass:"lg:w-1/2 px-2"},[a("g-image",{attrs:{src:t.img,alt:t.altImg}})],1)])])}),[],!1,null,null,null);a.a=l.exports},RRjm:function(t,a,e){"use strict";var s={props:["cta"]},i=e("KHd+"),l=Object(i.a)(s,(function(){var t=this,a=t._self._c;return a("section",{staticClass:"py-12 px-4 text-center"},[a("div",{staticClass:"w-full max-w-2xl mx-auto"},[a("h2",{staticClass:"text-4xl leading-tight font-semibold font-heading"},[t._v("\n      "+t._s(t.cta.title)+"\n    ")]),a("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"mt-6 mb-8 text-gray-700 leading-relaxed",domProps:{innerHTML:t._s(t.cta.content)}}),t.cta.button?a("g-link",{staticClass:"bg-gray-900 learn-button hover:bg-gray-700 text-gray-100 px-5 py-3 mr-3 font-semibold rounded shadow",attrs:{to:t.cta.link}},[t._v(t._s(t.cta.button))]):t._e()],1)])}),[],!1,null,null,null);a.a=l.exports},akyF:function(t,a,e){"use strict";var s={computed:{img:function(){return this.card.image.src?"background-image:url("+this.card.image.src+")":this.card.image}},props:["card"]},i=e("KHd+"),l=Object(i.a)(s,(function(){var t=this,a=t._self._c;return a("div",[a("div",{staticClass:"lg:py-12 lg:flex lg:justify-center flex flex-col"},[a("div",{staticClass:"bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg"},[a("div",{staticClass:"lg:w-1/2"},[a("div",{staticClass:"h-64 bg-cover lg:rounded-lg lg:h-full",style:t.img})]),a("div",{staticClass:"py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2"},[a("h2",{staticClass:"text-3xl text-gray-700 font-bold"},[t._v(t._s(t.card.title))]),a("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"mt-4 text-gray-700",domProps:{innerHTML:t._s(t.card.content)}}),t.card.button?a("div",{staticClass:"mt-8"},[t.card.link.includes("http")?a("a",{staticClass:"bg-gray-900 learn-button hover:bg-gray-700 text-gray-100 px-5 py-3 font-semibold rounded",attrs:{target:"_blank",href:t.card.link}},[t._v(t._s(t.card.button))]):a("a",{staticClass:"bg-gray-900 learn-button hover:bg-gray-700 text-gray-100 px-5 py-3 font-semibold rounded",attrs:{href:t.card.link}},[t._v(t._s(t.card.button))])]):t._e()])])])])}),[],!1,null,null,null);a.a=l.exports},ccEe:function(t,a,e){"use strict";e("LEEx")},eSm4:function(t,a,e){"use strict";e("EYh5")},fuxi:function(t,a,e){"use strict";var s={props:["logos"],methods:{img:t=>t?t.src?t.src:t:""}},i=e("KHd+"),l=Object(i.a)(s,(function(){var t=this,a=t._self._c;return a("section",{staticClass:"pt-8 px-4 text-center"},[t._m(0),a("div",{staticClass:"flex flex-wrap -mx-8"},t._l(t.logos,(function(e,s){return a("g-link",{key:s,staticClass:"w-1/2 md:w-1/6 px-8 mb-8",attrs:{to:e.url}},[a("g-image",{attrs:{src:t.img(e.image)}})],1)})),1)])}),[function(){var t=this._self._c;return t("div",{staticClass:"max-w-2xl mx-auto mb-8"},[t("h2",{staticClass:"text-4xl leading-tight mb-6 font-semibold font-heading"},[this._v("\n      Meet some of our partners\n    ")]),t("p",{staticClass:"text-gray-400 leading-relaxed"})])}],!1,null,null,null);a.a=l.exports},ijPK:function(t,a){t.exports={type:"image",mimeType:"image/png",src:"/climate_archive/assets/static/image_name.82a2fbd.83cd44f1190394b57de798f5c9bd7931.png",size:{width:480,height:480},sizes:"(max-width: 480px) 100vw, 480px",srcset:["/climate_archive/assets/static/image_name.82a2fbd.83cd44f1190394b57de798f5c9bd7931.png 480w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 480 480' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-7d1539613d2c63b50eb458dc95c70f4e'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-7d1539613d2c63b50eb458dc95c70f4e)' width='480' height='480' xlink:href='data:image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAEAAAABACAIAAAAlC%2baJAAAACXBIWXMAAC4jAAAuIwF4pT92AAAB40lEQVRo3u2WSWsCQRCF8///iBf1pl5UFFxj3MaJ%2b4I6RlwQFZeLJvmwyZBDCAnk0JJXh6amZw799XtVNQ9vdx4PAhCAAAQgAAEIQAACEIAABCAAAQhAAPcN8PrLkAJ/B2Cu83Q6eZ738oPgs/V6bRHA9XplzWaz1Wq10%2bm4rvv8bQwGg3g8vlwufXgrFGg0Go7jJBKJWq1Wr9efPsXjLUqlUqVSSafTrVar1%2btNJhO7ALjaTCZjjoVJLpeLKVajjy/UbrdDqG63O51OrQMoFArz%2bZwkl8uxsgkGK54pl8sUCfl%2bv8djlgLk83kA8FKxWMRF5i2OwjkcF9%2bfz%2bfD4YDT7FVgNpuRLxYLs4lbADCf0XmSySS1Sw3YC2COxUo7cm7hzziSzWYTCoXQB1PZWMTGQs1mE8fzGAgEKFz/iCahvlOp1HA4tBGAjhmJRHCI2cdIaMLb7XbLudEEME4Pp40KtNvtWCwWjUbNVKbbjMfjcDgcDAbNBOj3%2b5CMRiOomAPW1YDpLYhAQqOk52AhJoN55PqRiITTw8CXFilgJhTG4JrRwb0FRsIn/iO91f/FYJ%2bBbd2vxPF4xBXeR0xv4X0V7K9WK/1OC0AAAhCAAAQgAAEIQAACEIAABCAAAQjgXwO8A7hFdMkvglRqAAAAAElFTkSuQmCC' /%3e%3c/svg%3e"}},phRe:function(t,a,e){"use strict";var s={props:["signup"]},i=e("KHd+"),l=Object(i.a)(s,(function(){var t=this,a=t._self._c;return a("section",{staticClass:"py-8 px-4"},[a("div",{staticClass:"flex flex-wrap items-center -mx-4"},[a("div",{staticClass:"w-full lg:w-4/6 px-4 mb-8 lg:mb-0 text-center lg:text-left"},[a("h2",{staticClass:"text-xl font-semibold font-heading"},[t._v("\n        "+t._s(t.signup.title)+"\n      ")])]),a("div",{staticClass:"w-full lg:w-2/6 px-4 text-center"},[a("g-link",{staticClass:"bg-gray-900 learn-button hover:bg-gray-700 text-gray-100 px-5 py-3 mr-3 font-semibold rounded shadow",attrs:{to:t.signup.link1}},[t._v(t._s(t.signup.button1))]),a("g-link",{staticClass:"text-gray-900 bg-transparent hover:underline",attrs:{to:t.signup.link2}},[t._v(t._s(t.signup.button2))])],1)])])}),[],!1,null,null,null);a.a=l.exports},zwLt:function(t,a,e){"use strict";e.r(a);var s=e("akyF"),i=e("MtIX"),l={props:["slides"],data:()=>({activeIndex:0}),methods:{setActive(t){this.activeIndex=t}}},n=e("KHd+"),r=Object(n.a)(l,(function(){var t=this,a=t._self._c;return a("div",{staticClass:"my-12"},[a("nav",{staticClass:"inline-block w-1/4 border-r-2 border-gray-200"},t._l(t.slides,(function(e,s){return a("a",{key:s,staticClass:"mt-1 capitalize group flex items-center px-3 py-2 text-sm leading-5 font-medium hover:text-gray-900 focus:outline-none border-blue-500 hover:bg-gray-100 transition ease-in-out duration-150",class:{"border-r-3 border-blue-500 hover:bg-gray-100":t.activeIndex===s},attrs:{href:"#"+s},on:{click:function(a){return t.setActive(s)}}},[a("span",[t._v(" "+t._s(e.title)+" ")])])})),0),a("div",{staticClass:"content inline-block h-full w-3/4 align-top p-5 transition ease-in-out duration-150"},[a("div",{staticClass:"hidden",staticStyle:{display:"block"},attrs:{id:t.slides[t.activeIndex]}},[t.slides[t.activeIndex].image?a("g-image",{attrs:{src:t.slides[t.activeIndex].image,alt:t.slides[t.activeIndex].title}}):t._e(),a("p",[t._v(t._s(t.slides[t.activeIndex].excerpt))])],1)])])}),[],!1,null,null,null).exports,o={props:["contacts"]},d=Object(n.a)(o,(function(){var t=this,a=t._self._c;return a("div",{staticClass:"bg-white"},[a("div",{staticClass:"max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8"},[a("div",{staticClass:"grid grid-cols-1 gap-16"},[a("div",{staticClass:"lg:grid lg:grid-cols-3 lg:gap-8"},[a("h2",{staticClass:"text-4xl mb-6 leading-tight font-semibold font-heading"},[t._v("\n          Get in touch\n        ")]),a("div",{staticClass:"mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2"},t._l(t.contacts,(function(e,s){return a("div",{key:s},[a("h4",{staticClass:"text-lg leading-6 font-medium text-gray-700"},[t._v("\n              "+t._s(e.title)+"\n            ")]),a("div",{staticClass:"mt-2 text-base leading-6 text-gray-500"},[a("div",[t._v("\n                "+t._s(e.mail)+"\n              ")])]),a("div",{staticClass:"mt-1"},[t._v("\n              "+t._s(e.phone)+"\n            ")])])})),0)])])]),a("div",{staticClass:"border-t-2 border-gray-100"})])}),[],!1,null,null,null).exports,c=e("IGkE"),g={props:["HIWData","main"]},m=Object(n.a)(g,(function(){var t=this,a=t._self._c;return a("section",{staticClass:"py-12 px-4"},[a("div",{staticClass:"flex flex-wrap items-center text-center lg:text-left -mx-2"},[a("div",{staticClass:"lg:w-1/2 px-2"},[a("g-image",{staticClass:"g-image g-image--lazy g-image--loading",attrs:{src:t.main.image.src,alt:t.main.title}})],1),a("div",{staticClass:"lg:w-1/2 px-2 lg:pl-16 mt-10 lg:mt-0"},[a("h2",{staticClass:"text-4xl px-4 mb-4 leading-tight font-semibold font-heading"},[t._v("\n        "+t._s(t.main.title)+"\n      ")]),t._l(t.HIWData,(function(e,s){return a("div",{key:s,staticClass:"p-4 mb-4",class:{"rounded shadow-md":s%2!=0}},[a("h3",{staticClass:"text-2xl mb-2 font-semibold font-heading"},[t._v("\n          "+t._s(e.title)+"\n        ")]),a("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"text-gray-700 leading-relaxed",domProps:{innerHTML:t._s(e.content)}})])}))],2)])])}),[],!1,null,null,null).exports,p={props:["products","main"],methods:{img:t=>t?t.src?t.src:t:""}},u=(e("ccEe"),Object(n.a)(p,(function(){var t=this,a=t._self._c;return a("div",{staticClass:"py-12 mb-5"},[a("div",{staticClass:"w-full text-center"},[null!==t.main?a("p",{staticClass:"text-sm tracking-widest text-gray-700"},[t._v(t._s(t.main.subtitle))]):t._e(),null!==t.main?a("h1",{staticClass:"text-4xl mt-2 mb-6 leading-tight font-heading"},[t._v("\n      "+t._s(t.main.title)+"\n    ")]):t._e()]),a("div",{staticClass:"grid grid-cols-1 gap-4 sm:grid-cols-3"},t._l(t.products,(function(e,s){return a("div",{key:s,staticClass:"p-2 sm:p-0 text-center cursor-pointer"},[a("div",{staticClass:"m-auto max-w-sm rounded overflow-hidden shadow-lg hover:bg-white transition duration-500 bg-white"},[a("div",{staticClass:"px-2 py-2"},[a("g-image",{staticClass:"py-4",attrs:{src:t.img(e.image)}}),a("p",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"text-gray-700 text-base",domProps:{innerHTML:t._s(e.content)}})],1)])])})),0)])}),[],!1,null,"07c22014",null).exports),x={props:["main","features"]},v=Object(n.a)(x,(function(){var t=this,a=t._self._c;return a("section",{staticClass:"py-12 px-4"},[a("h2",{staticClass:"text-4xl text-center mb-12 font-semibold font-heading"},[t._v("\n    "+t._s(t.main.title)+"\n  ")]),a("div",{staticClass:"flex flex-wrap -mx-4 mb-6"},t._l(t.features,(function(e){return a("div",{key:e.id,staticClass:"lg:w-1/2 px-4 mb-6 text-center"},[e.svg?a("g-image",{staticClass:"w-10 h-10 mx-auto",attrs:{src:e.svg.src,alt:e.svg}}):t._e(),a("h3",{staticClass:"text-xl my-3 font-semibold font-heading"},[t._v("\n        "+t._s(e.title)+"\n      ")]),a("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"text-sm text-gray-700 leading-relaxed",domProps:{innerHTML:t._s(e.content)}})],1)})),0),t.main.btn?a("div",{staticClass:"text-center"},[a("g-link",{staticClass:"bg-gray-900 learn-button hover:bg-gray-700 text-gray-100 px-5 py-3 mr-3 font-semibold rounded shadow",attrs:{to:t.main.link}},[t._v(t._s(t.main.btn))]),a("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"text-sm text-gray-400 mt-5",domProps:{innerHTML:t._s(t.main.content)}})],1):t._e()])}),[],!1,null,null,null).exports,h=e("fuxi"),w=e("RRjm"),b=e("phRe"),f={props:["main","sections"]},C=Object(n.a)(f,(function(){var t=this,a=t._self._c;return a("section",{staticClass:"py-12 px-4 text-center"},[a("h2",{staticClass:"text-4xl mb-2 leading-tight font-semibold font-heading"},[t._v("\n    "+t._s(t.main.title)+"\n  ")]),a("p",{staticClass:"text-gray-600"},[t._v(t._s(t.main.description))]),a("div",{staticClass:"flex flex-wrap items-center -mx-8 mt-12 mb-2"},t._l(t.sections,(function(e,s){return a("div",{key:s,staticClass:"lg:w-1/3 px-8 mb-8"},[a("g-image",{staticClass:"w-1/2 mx-auto mb-8 h-32",attrs:{src:e.svg.src,alt:e.title}}),a("h3",{staticClass:"text-2xl mb-4 font-semibold font-heading"},[a("span",[t._v(t._s(e.title))])]),a("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"text-gray-700",domProps:{innerHTML:t._s(e.content)}})],1)})),0),a("div",[t.main.button?a("g-link",{staticClass:"bg-gray-900 learn-button hover:bg-gray-700 text-gray-100 px-5 py-3 mr-3 font-semibold rounded shadow",attrs:{to:t.main.link}},[t._v(t._s(t.main.button))]):t._e()],1)])}),[],!1,null,null,null).exports,_={props:["roadmap"]},y=Object(n.a)(_,(function(){var t=this,a=t._self._c;return a("div",{staticClass:"container bg-gray-200 mx-auto w-full h-full"},[a("div",{staticClass:"relative wrap overflow-hidden p-10 h-full"},[a("div",{staticClass:"border-2-2 absolute border-opacity-20 border-gray-700 h-full border",staticStyle:{left:"50%"}}),t._l(t.roadmap,(function(e,s){return a("div",{key:s,staticClass:"mb-8 flex justify-between items-center w-full",class:{"flex-row-reverse left-timeline":s%2!=0,"right-timeline":s%2==0}},[a("div",{staticClass:"order-1 w-5/12"}),a("div",{staticClass:"z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full"},[a("h1",{staticClass:"mx-auto font-semibold text-lg text-white"},[t._v("\n          "+t._s(s+1)+"\n        ")])]),a("div",{staticClass:"order-1 rounded-lg shadow-xl w-5/12 px-6 py-4",class:{"bg-red-400":s%2!=0,"bg-gray-400":s%2==0}},[a("h3",{staticClass:"mb-3 font-bold text-xl",class:{"text-white":s%2!=0,"text-gray-800":s%2==0}},[t._v("\n          "+t._s(e.title)+"\n        ")]),a("p",{staticClass:"text-sm leading-snug tracking-wide text-opacity-100",class:{"text-white":s%2!=0,"text-gray-800":s%2==0}},[t._v("\n          "+t._s(e.excerpt)+"\n        ")])])])}))],2)])}),[],!1,null,null,null).exports,k={props:["main","pricingPlans"]},A=Object(n.a)(k,(function(){var t=this,a=t._self._c;return a("div",{staticClass:"bg-white"},[a("div",{staticClass:"max-w-screen-xl mx-auto py-24 px-4 sm:px-6 lg:px-8"},[a("div",{staticClass:"sm:flex sm:flex-col sm:align-center"},[a("h1",{staticClass:"text-5xl leading-none font-extrabold text-gray-900 sm:text-center"},[t._v("\n        "+t._s(t.main.title)+"\n      ")]),a("p",{staticClass:"mt-5 text-xl leading-7 text-gray-500 sm:text-center"},[t._v("\n        "+t._s(t.main.excerpt)+"\n      ")]),a("div",{staticClass:"relative self-center mt-6 bg-gray-100 rounded-lg p-0.5 flex sm:mt-8"},[a("button",{staticClass:"relative w-1/2 bg-white border-gray-200 rounded-md shadow-sm py-2 text-sm leading-5 font-medium text-gray-700 whitespace-no-wrap hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue focus:z-10 active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150 sm:w-auto sm:px-8",attrs:{type:"button"}},[t._v("\n          "+t._s(t.main.button1)+"\n        ")]),a("button",{staticClass:"relative w-1/2 border border-transparent rounded-md py-2 text-sm leading-5 font-medium text-gray-700 whitespace-no-wrap hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue focus:z-10 active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150 sm:w-auto sm:px-8",attrs:{type:"button"}},[t._v("\n          "+t._s(t.main.button2)+"\n        ")])])]),a("div",{staticClass:"mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4"},t._l(t.pricingPlans,(function(e,s){return a("div",{key:s,staticClass:"border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200"},[a("div",{staticClass:"p-6"},[a("h2",{staticClass:"text-lg leading-6 font-medium text-gray-900"},[t._v("\n            "+t._s(e.title)+"\n          ")]),a("p",{staticClass:"mt-4 text-sm leading-5 text-gray-500"},[t._v("\n            "+t._s(e.excerpt)+"\n          ")]),a("p",{staticClass:"mt-8"},[a("span",{staticClass:"text-4xl leading-10 font-extrabold text-gray-900"},[t._v(t._s(e.price))]),a("span",{staticClass:"text-base leading-6 font-medium text-gray-500"},[t._v("/"+t._s(e.duration))])]),a("g-link",{staticClass:"mt-8 w-full text-center bg-gray-800 border border-gray-800 rounded-md py-2 text-sm leading-5 font-semibold text-white hover:bg-gray-700 focus:outline-none focus:shadow-outline-gray transition duration-150 ease-in-out",attrs:{type:"button",to:e.link}},[t._v("\n            "+t._s(e.button)+"\n          ")])],1),a("div",{staticClass:"pt-6 pb-8 px-6"},[a("h3",{staticClass:"text-xs leading-4 font-medium text-gray-900 tracking-wide uppercase"},[t._v("\n            "+t._s(e.includeTitle)+"\n          ")]),a("ul",{staticClass:"mt-6 space-y-4"},t._l(e.options,(function(e){return a("li",{key:e.id,staticClass:"flex space-x-3"},[a("svg",{staticClass:"flex-shrink-0 h-5 w-5 text-green-500",attrs:{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clip-rule":"evenodd"}})]),a("span",{staticClass:"text-sm leading-5 text-gray-500"},[t._v(t._s(e))])])})),0)])])})),0)])])}),[],!1,null,null,null).exports,P={props:["plans"]},$=Object(n.a)(P,(function(){var t=this,a=t._self._c;return a("div",{staticClass:"bg-white"},[a("div",{staticClass:"max-w-screen-xl mx-auto bg-white py-16 sm:py-24 sm:px-6 lg:px-8"},[a("div",{staticClass:"max-w-2xl mx-auto lg:hidden"},t._l(t.plans,(function(e){return a("table",{key:e.id,staticClass:"mt-8 w-full"},[a("caption",{staticClass:"bg-gray-100 border-t border-gray-200 py-3 px-4 text-sm leading-5 font-medium text-gray-900 text-left"},[t._v("\n          "+t._s(e.title)+"\n        ")]),t._l(e.rows,(function(e){return a("tbody",{key:e.id,staticClass:"divide-y divide-gray-200"},[a("tr",{staticClass:"border-t border-gray-200"},[a("th",{staticClass:"py-5 px-4 text-sm leading-5 font-normal text-gray-500 text-left",attrs:{scope:"row"}},[t._v("\n              "+t._s(e.title)+"\n            ")]),"include"==e.firstCol?a("td",{staticClass:"py-5 pr-4"},[a("svg",{staticClass:"ml-auto h-5 w-5 text-green-500",attrs:{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clip-rule":"evenodd"}})]),a("span",{staticClass:"sr-only"},[t._v("Yes")])]):"none"==e.firstCol?a("td",{staticClass:"py-5 pr-4"},[a("svg",{staticClass:"ml-auto h-5 w-5 text-gray-400",attrs:{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clip-rule":"evenodd"}})]),a("span",{staticClass:"sr-only"},[t._v("No")])]):a("td",{staticClass:"py-5 pr-4"},[a("span",{staticClass:"block text-sm leading-5 text-gray-700 text-right"},[t._v(t._s(e.firstCol))])]),"include"==e.secCol?a("td",{staticClass:"py-5 pr-4"},[a("svg",{staticClass:"ml-auto h-5 w-5 text-green-500",attrs:{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clip-rule":"evenodd"}})]),a("span",{staticClass:"sr-only"},[t._v("Yes")])]):"none"==e.secCol?a("td",{staticClass:"py-5 pr-4"},[a("svg",{staticClass:"ml-auto h-5 w-5 text-gray-400",attrs:{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clip-rule":"evenodd"}})]),a("span",{staticClass:"sr-only"},[t._v("No")])]):a("td",{staticClass:"py-5 pr-4"},[a("span",{staticClass:"block text-sm leading-5 text-gray-700 text-right"},[t._v(t._s(e.secCol))])]),"include"==e.thirdCol?a("td",{staticClass:"py-5 pr-4"},[a("svg",{staticClass:"ml-auto h-5 w-5 text-green-500",attrs:{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clip-rule":"evenodd"}})]),a("span",{staticClass:"sr-only"},[t._v("Yes")])]):"none"==e.thirdCol?a("td",{staticClass:"py-5 pr-4"},[a("svg",{staticClass:"ml-auto h-5 w-5 text-gray-400",attrs:{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clip-rule":"evenodd"}})]),a("span",{staticClass:"sr-only"},[t._v("No")])]):a("td",{staticClass:"py-5 pr-4"},[a("span",{staticClass:"block text-sm leading-5 text-gray-700 text-right"},[t._v(t._s(e.thirdCol))])])])])}))],2)})),0),a("div",{staticClass:"hidden lg:block"},[a("table",{staticClass:"w-full h-px table-fixed"},[t._m(0),t._l(t.plans,(function(e){return a("tbody",{key:e.id,staticClass:"border-t border-gray-200 divide-y divide-gray-200"},[a("tr",[a("th",{staticClass:"bg-gray-100 py-3 pl-6 text-sm leading-5 font-medium text-gray-900 text-left",attrs:{colspan:"4",scope:"colgroup"}},[t._v("\n              "+t._s(e.title)+"\n            ")])]),t._l(e.rows,(function(e){return a("tr",{key:e.id},[a("th",{staticClass:"py-5 px-6 text-sm leading-5 font-normal text-gray-500 text-left",attrs:{scope:"row"}},[t._v("\n              "+t._s(e.title)+"\n            ")]),"include"==e.firstCol?a("td",{staticClass:"py-5 px-6"},[a("svg",{staticClass:"h-5 w-5 text-green-500",attrs:{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clip-rule":"evenodd"}})])]):"none"==e.firstCol?a("td",{staticClass:"py-5 px-6"},[a("svg",{staticClass:"h-5 w-5 text-gray-400",attrs:{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clip-rule":"evenodd"}})])]):a("td",{staticClass:"py-5 px-6"},[a("span",{staticClass:"block text-sm leading-5 text-gray-700"},[t._v(t._s(e.firstCol))])]),"include"==e.secCol?a("td",{staticClass:"py-5 px-6"},[a("svg",{staticClass:"h-5 w-5 text-green-500",attrs:{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clip-rule":"evenodd"}})]),a("span",{staticClass:"sr-only"},[t._v("Included in Essential")])]):"none"==e.secCol?a("td",{staticClass:"py-5 px-6"},[a("svg",{staticClass:"h-5 w-5 text-gray-400",attrs:{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clip-rule":"evenodd"}})])]):a("td",{staticClass:"py-5 px-6"},[a("span",{staticClass:"block text-sm leading-5 text-gray-700"},[t._v(t._s(e.secCol))])]),"include"==e.thirdCol?a("td",{staticClass:"py-5 px-6"},[a("svg",{staticClass:"h-5 w-5 text-green-500",attrs:{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clip-rule":"evenodd"}})]),a("span",{staticClass:"sr-only"},[t._v("Included in Premium")])]):"none"==e.thirdCol?a("td",{staticClass:"py-5 px-6"},[a("svg",{staticClass:"h-5 w-5 text-gray-400",attrs:{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clip-rule":"evenodd"}})])]):a("td",{staticClass:"py-5 px-6"},[a("span",{staticClass:"block text-sm leading-5 text-gray-700"},[t._v(t._s(e.thirdCol))])])])}))],2)}))],2)])])])}),[function(){var t=this._self._c;return t("thead",[t("tr",[t("th",{staticClass:"pb-4 px-6 text-sm leading-5 font-medium text-gray-900 text-left",attrs:{scope:"col"}},[t("span",{staticClass:"sr-only"},[this._v("Feature by")]),t("span",[this._v("Plans")])]),t("th",{staticClass:"w-1/4 pb-4 px-6 text-lg leading-6 font-medium text-gray-900 text-left",attrs:{scope:"col"}},[this._v("\n              Basic\n            ")]),t("th",{staticClass:"w-1/4 pb-4 px-6 text-lg leading-6 font-medium text-gray-900 text-left",attrs:{scope:"col"}},[this._v("\n              Essential\n            ")]),t("th",{staticClass:"w-1/4 pb-4 px-6 text-lg leading-6 font-medium text-gray-900 text-left",attrs:{scope:"col"}},[this._v("\n              Premium\n            ")])])])}],!1,null,null,null).exports,j={props:["brand"],computed:{image(){return this.brand.image.src?this.brand.image.src:e("J21R")("./"+this.brand.image)}}},I=Object(n.a)(j,(function(){var t=this,a=t._self._c;return a("div",{staticClass:"bg-white"},[a("div",{staticClass:"max-w-screen-xl mx-auto py-16"},[a("div",{staticClass:"brandpanel rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4"},[a("div",{staticClass:"pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20"},[a("div",{staticClass:"lg:self-center"},[a("h2",{staticClass:"text-3xl leading-9 font-extrabold text-white sm:text-3xl sm:leading-10"},[a("span",{staticClass:"block"},[t._v(t._s(t.brand.title))]),t.brand.subtitle?a("span",{staticClass:"block"},[t._v(t._s(t.brand.subtitle))]):t._e()]),a("p",{staticClass:"mt-4 text-lg leading-6 text-white"},[t._v("\n            "+t._s(t.brand.excerpt)+"\n          ")]),a("g-link",{staticClass:"mt-8 bg-white border border-transparent rounded-md shadow px-6 py-3 inline-flex items-center text-base leading-6 font-medium text-gray-900 hover:text-indigo-500 hover:bg-gray-50 transition duration-150 ease-in-out",attrs:{to:t.brand.sourceUrl}},[t._v(t._s(t.brand.btnTxt))])],1)]),a("div",{staticClass:"relative pb-3/5 -mt-6 md:pb-1/2"},[a("g-image",{staticClass:"absolute brandpanel inset-0 w-full h-full transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20",attrs:{src:t.image,alt:t.brand.title}})],1)])])])}),[],!1,null,null,null).exports,M={components:{NewCard:s.a,Header:i.a,VerticalNav:r,GetInTouch:d,SolutionsHeader:c.a,HowItWorks:m,ShowcaseProducts:u,Features:v,logoShowcase:h.a,CallToAction:w.a,SignUp:b.a,Comparison:C,Roadmap:y,FourTiersWithToggle:A,WithComparisonTable:$,BrandPanel:I},metaInfo(){return{title:this.$page.markdownPage.title}},mounted(){console.log(this.$page.markdownPage)}},H=(e("eSm4"),null),O=Object(n.a)(M,(function(){var t=this,a=t._self._c;return a("Layout",{attrs:{hideHeader:!0,disableScroll:!0}},[a("div",{staticClass:"container sm:pxi-0 mx-auto overflow-x-hidden py-5"},["contact"!==t.$page.markdownPage.id&&t.$page.markdownPage.header_title&&""!=t.$page.markdownPage.header_title?a("Header",{attrs:{title:t.$page.markdownPage.header_title,image:t.$page.markdownPage.header_image,altImg:t.$page.markdownPage.header_altImg,excerpt:t.$page.markdownPage.header_excerpt}}):t._e(),t.$page.markdownPage.slides&&t.$page.markdownPage.slides.length>0?a("VerticalNav",{attrs:{slides:t.$page.markdownPage.slides}}):t._e(),t.$page.markdownPage.header?a("SolutionsHeader",{attrs:{header:t.$page.markdownPage.header}}):t._e(),t.$page.markdownPage.solution_image?a("g-image",{staticClass:"m-auto my-4",attrs:{src:t.$page.markdownPage.solution_image.src}}):t._e(),t._l(t.$page.markdownPage.cards,(function(t){return a("NewCard",{key:t.id,attrs:{card:t}})})),t.$page.markdownPage.howItWorks.length>0?a("HowItWorks",{attrs:{HIWData:t.$page.markdownPage.howItWorks,main:t.$page.markdownPage.howItWorksMain}}):t._e(),t.$page.markdownPage.features.length>0?a("Features",{attrs:{main:t.$page.markdownPage.featuresMain,features:t.$page.markdownPage.features}}):t._e(),t.$page.markdownPage.comparisonSecs&&t.$page.markdownPage.comparisonSecs.length>0?a("Comparison",{attrs:{main:t.$page.markdownPage.comparisonMain,sections:t.$page.markdownPage.comparisonSecs}}):t._e(),t.$page.markdownPage.productData&&t.$page.markdownPage.productData.length>0?a("ShowcaseProducts",{attrs:{main:t.$page.markdownPage.productsMain,products:t.$page.markdownPage.productData}}):t._e(),t.$page.markdownPage.roadmap.length>0?a("Roadmap",{attrs:{roadmap:t.$page.markdownPage.roadmap}}):t._e(),t.$page.markdownPage.pricingPlans.length>0?a("FourTiersWithToggle",{attrs:{main:t.$page.markdownPage.pricing_plansMain,pricingPlans:t.$page.markdownPage.pricingPlans}}):t._e(),t.$page.markdownPage.plans.length>0?a("WithComparisonTable",{attrs:{plans:t.$page.markdownPage.plans}}):t._e(),t.$page.markdownPage.logos.length>0?a("logoShowcase",{attrs:{logos:t.$page.markdownPage.logos}}):t._e(),t.$page.markdownPage.brandPanel?a("BrandPanel",{attrs:{brand:t.$page.markdownPage.brandPanel}}):t._e(),t.$page.markdownPage.cta?a("CallToAction",{attrs:{cta:t.$page.markdownPage.cta}}):t._e(),t.$page.markdownPage.signup?a("SignUp",{attrs:{signup:t.$page.markdownPage.signup}}):t._e(),t.$page.markdownPage.contactData.length>0?a("GetInTouch",{attrs:{contacts:t.$page.markdownPage.contactData}}):t._e()],2)])}),[],!1,null,"3ae29a2a",null);"function"==typeof H&&H(O);a.default=O.exports}}]);