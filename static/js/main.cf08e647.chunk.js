(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{12:function(e,a,t){e.exports=t.p+"static/media/about.0f9489d9.svg"},190:function(e,a,t){},198:function(e,a,t){},199:function(e,a,t){},200:function(e,a,t){},201:function(e,a,t){},202:function(e,a,t){},203:function(e,a,t){},204:function(e,a,t){},205:function(e,a,t){},206:function(e,a,t){},207:function(e,a,t){},210:function(e,a,t){},211:function(e,a,t){},212:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=t(26),r=t.n(s),c=t(16),i=t(1),m=t(72),o=t(5),u=t(82),d=(t(89),function(e){var a=e.currencyOptions,t=e.selectedCurrency,n=e.onChangeCurrency,s=e.onChangeAmount,r=e.amount,c=e.disabled;return l.a.createElement(l.a.Fragment,null,l.a.createElement("input",{type:"text",className:"input calc-inp",disabled:c,value:r,onChange:s}),l.a.createElement("div",{className:"select"},l.a.createElement("select",{value:t,name:"slct",id:"slct",onChange:n},a.map((function(e){return l.a.createElement("option",{key:e,value:e},e)})))))}),E=function(){var e,a,t="https://api.exchangeratesapi.io/latest",s=Object(n.useState)([]),r=Object(o.a)(s,2),c=r[0],i=r[1],m=Object(n.useState)(),E=Object(o.a)(m,2),f=E[0],h=E[1],p=Object(n.useState)(),v=Object(o.a)(p,2),b=v[0],N=v[1],g=Object(n.useState)(),y=Object(o.a)(g,2),w=y[0],k=y[1],O=Object(n.useState)(1e3),C=Object(o.a)(O,2),x=C[0],L=C[1],S=Object(n.useState)(!1),j=Object(o.a)(S,2),T=j[0],D=j[1];return T?(a=x,e=x*w):(e=x,a=x/w),Object(n.useEffect)((function(){fetch(t).then((function(e){return e.json()})).then((function(e){var a=Object.keys(e.rates)[26];i([e.base].concat(Object(u.a)(Object.keys(e.rates)))),h(e.base),N(a),k(e.rates[a])}))}),[]),Object(n.useEffect)((function(){null!=f&&null!=b&&fetch("".concat(t,"?base=").concat(f,"&symbols=").concat(b)).then((function(e){return e.json()})).then((function(e){return k(e.rates[b])}))}),[f,b]),l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"head-container"},l.a.createElement("div",{className:"header-content"},l.a.createElement("h3",{className:"head-title"},"A cheaper, faster way to send money abroad."),l.a.createElement("p",{className:"head-text"},"Join over 8 million people and businesses who get a better deal when they send money with the real exchange rate."),l.a.createElement("div",{className:"head-anims"})),l.a.createElement("div",{className:"main-content"},l.a.createElement("div",{className:"calc"},l.a.createElement("form",{id:"calc-form"},l.a.createElement("label",{className:"calc-inp",htmlFor:"calc-inp"},"You send"),l.a.createElement(d,{currencyOptions:c,selectedCurrency:b,onChangeCurrency:function(e){return N(e.target.value)},onChangeAmount:function(e){L(e.target.value),D(!1)},amount:e,disabled:!1})),l.a.createElement("span",{id:"rate"}," "),l.a.createElement("div",{className:"res"},l.a.createElement("form",null,l.a.createElement("label",{className:"calc-out",htmlFor:"calc-out"},"They receive")),l.a.createElement(d,{currencyOptions:c,selectedCurrency:f,onChangeCurrency:function(e){return h(e.target.value)},onChangeAmount:function(e){L(e.target.value),D(!0)},amount:Number(a).toFixed(2),disabled:!0}))),l.a.createElement("button",{onClick:function(){window.alert("This is not an actual business website and you cannot send real money. But, you can visit main website transferwise.com")},className:"get-btn"},"Get Started"))))},f=t(28),h=t.n(f),p=(t(90),function(){var e=Object(n.useCallback)((function(e){}));return l.a.createElement("div",{className:"about-container"},l.a.createElement("div",{className:"about-content"},l.a.createElement("div",{ref:e,className:"about-show"},l.a.createElement("div",{className:"about-text anim"},l.a.createElement("h2",null,"Global support in a range of languages."),l.a.createElement("p",null,"We don\u2019t do complicated, automated systems. We have offices around the world, full of people ready to help you. Whenever you need it."),l.a.createElement("button",{className:"about-btn"},"Find out now")),l.a.createElement("div",{className:"about-img anim"},l.a.createElement("img",{src:h.a,alt:"",className:"ab"})))))}),v=t(73),b=t.n(v),N=t(29),g=t.n(N),y=t(30),w=t.n(y),k=t(12),O=t.n(k),C=t(31),x=t.n(C),L=t(32),S=t.n(L),j=(t(91),function(){return l.a.createElement("div",{id:"instructions",className:"instruction-container"},l.a.createElement("div",{ref:void 0,className:"ins-content"},l.a.createElement("h1",{className:"inst-title anim"},"How to send money from USD to EUR."),l.a.createElement("div",{className:"int-grid"},l.a.createElement("div",{className:"inst-cover"},l.a.createElement("div",{className:"inst-one"},l.a.createElement("img",{src:b.a,alt:"school",className:"inst-img"}),l.a.createElement("h6",null,"1. Register for free."),l.a.createElement("p",null,"Sign up online or in our app for free. All you need is an email address, or a Google or Facebook account."))),l.a.createElement("div",{className:"inst-cover"},l.a.createElement("div",{className:"inst-two"},l.a.createElement("img",{src:g.a,alt:"school",className:"inst-img"}),l.a.createElement("h6",null,"2. Choose an amount to send."),l.a.createElement("p",null,"Tell us how much you want to send. We\u2019ll show you our fees upfront, and tell you when your money should arrive."))),l.a.createElement("div",{className:"inst-cover"},l.a.createElement("div",{className:"inst-three"},l.a.createElement("img",{src:w.a,alt:"school",className:"inst-img"}),l.a.createElement("h6",null,"3. Add recipient\u2019s bank details."),l.a.createElement("p",null,"Fill in the details of your recipient\u2019s bank account. If you don\u2019t know their details, we can request them for you."))),l.a.createElement("div",{className:"inst-cover"},l.a.createElement("div",{className:"inst-four"},l.a.createElement("img",{src:O.a,alt:"school",className:"inst-img"}),l.a.createElement("h6",null,"4. Verify your identity."),l.a.createElement("p",null,"For some currencies, or for large transfers, we need a photo of your ID. This helps us keep your money safe."))),l.a.createElement("div",{className:"inst-cover"},l.a.createElement("div",{className:"inst-five"},l.a.createElement("img",{src:x.a,alt:"school",className:"inst-img"}),l.a.createElement("h6",null,"5. Pay for your transfer."),l.a.createElement("p",null,"Send your money with a bank transfer."))),l.a.createElement("div",{className:"inst-cover"},l.a.createElement("div",{className:"inst-six"},l.a.createElement("img",{src:S.a,alt:"school",className:"inst-img"}),l.a.createElement("h6",null,"6. That\u2019s it."),l.a.createElement("p",null,"We\u2019ll handle the rest. You can track your transfer in your account, and we'll tell your recipient it's coming."))))))}),T=(t(92),function(){return l.a.createElement("div",{className:"review-award-container "},l.a.createElement("div",{ref:void 0,className:"review-awards"},l.a.createElement("div",{className:"review-head"},l.a.createElement("h2",null," TrustPilot score 4.7 out of 5, from 99,056 reviews"),l.a.createElement("p",null,"It\u2019s your money. You can trust us to get it where it needs to be, but don\u2019t take our word for it. Read our reviews.")),l.a.createElement("div",{className:"review-content-tabs"},l.a.createElement("div",{className:"re-cont-tab"},l.a.createElement("i",{className:"fas fa-star"}),l.a.createElement("i",{className:"fas fa-star"}),l.a.createElement("i",{className:"fas fa-star"}),l.a.createElement("i",{className:"fas fa-star"}),l.a.createElement("i",{className:"fas fa-star"}),l.a.createElement("h5",null,"Excellent in all aspects. Fast, safe and easy to use the site. Thank you Transferwise!"),l.a.createElement("span",null,"John and Ann"),l.a.createElement("br",null),l.a.createElement("span",null,"Published 3 minutes ago")),l.a.createElement("div",{className:"re-cont-tab "},l.a.createElement("i",{className:"fas fa-star"}),l.a.createElement("i",{className:"fas fa-star"}),l.a.createElement("i",{className:"fas fa-star"}),l.a.createElement("i",{className:"fas fa-star"}),l.a.createElement("i",{className:"fas fa-star"}),l.a.createElement("h5",null," The best Service ever"),l.a.createElement("span",null,"Zouheir Benghali"),l.a.createElement("br",null),l.a.createElement("span",null,"Published 6 minutes ago")),l.a.createElement("div",{className:"re-cont-tab"},l.a.createElement("i",{className:"fas fa-star"}),l.a.createElement("i",{className:"fas fa-star"}),l.a.createElement("i",{className:"fas fa-star"}),l.a.createElement("i",{className:"fas fa-star"}),l.a.createElement("i",{className:"fas fa-star"}),l.a.createElement("h5",null,"very useful and good service "),l.a.createElement("span",null,"Massimo Buresti"),l.a.createElement("br",null),l.a.createElement("span",null,"Published 11 minutes ago")))))}),D=function(){return l.a.createElement(n.Fragment,null,l.a.createElement("div",{ref:void 0,className:"review-container"},l.a.createElement("h2",{className:"review-title"},"See what the world\u2019s largest publications have to say"),l.a.createElement("div",{className:"review-tabs"},l.a.createElement("div",{className:"tab"},l.a.createElement("div",{className:"tab-img"},"Wired "),l.a.createElement("div",{className:"tab-text"},"Smart tech and sharp thinking are disrupting high-street banks")),l.a.createElement("div",{className:"tab"},l.a.createElement("div",{className:"tab-img"},"Financial Times ")," ",l.a.createElement("div",{className:"tab-text"},"TransferWise is looking to use the internet to spark a digital revolution in current financial services.")),l.a.createElement("div",{className:"tab"},l.a.createElement("div",{className:"tab-img"},"The Economist ")," ",l.a.createElement("div",{className:"tab-text"},"TransferWise takes a machete to the hefty fees that banks levy to send money across borders.")))),l.a.createElement(T,null))},W=t(74),I=t(49),F=t(83),P=t(81),R=t(17);R.defaults.global.legend.display=!1,R.defaults.scale.ticks.display=!1;var A=function(e){Object(F.a)(t,e);var a=Object(P.a)(t);function t(e){var n;return Object(W.a)(this,t),(n=a.call(this,e)).state={chartData:e.chartData},n}return Object(I.a)(t,[{key:"componentDidMount",value:function(){}}]),Object(I.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"chart"},this.props.chart?l.a.createElement(R.Bar,{data:this.state.chartData,options:{title:{display:this.props.displayTitle,text:"Largest Cities In "+this.props.location,fontSize:25},legend:{display:this.props.displayLegend,position:this.props.legendPosition},hover:{mode:"index"},layout:{padding:{left:0,right:0,top:20,bottom:0}}}}):l.a.createElement(R.Line,{data:this.state.chartData,options:{title:{display:this.props.displayTitle,text:"Largest Cities In "+this.props.location,fontSize:25},legend:{display:this.props.displayLegend,position:this.props.legendPosition},hover:{mode:"index"},layout:{padding:{left:0,right:0,top:20,bottom:0}}}}))}}]),t}(n.Component);A.defaultProps={displayTitle:!1,displayLegend:!1,legendPosition:"right",location:"City"};var B=A,M=(t(190),function(){var e=(new Date).toJSON().slice(0,10),a=new Date((new Date).valueOf()-864e5).toJSON().slice(0,10),t=new Date((new Date).valueOf()-1728e5).toJSON().slice(0,10),n=new Date((new Date).valueOf()-2592e5).toJSON().slice(0,10),s=new Date((new Date).valueOf()-3456e5).toJSON().slice(0,10),r={chartData:{labels:[new Date((new Date).valueOf()-432e6).toJSON().slice(0,10),s,n,t,a,e],datasets:[{data:[.848536,.847536,.842525,.845536,.843953,.845737,.834237,.843099,.849401],fill:!0,lineTension:.4,backgroundColor:"rgba(183, 161, 150,0.1)",borderColor:"rgba(255,255,255,1)",borderCapStyle:"",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#000",pointBorderWidth:10,pointHoverRadius:10,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:10,pointRadius:0,pointHitRadius:100,visible:!1}],options:{scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]}}}},c=function(e){console.log(e.target),e.target.parentElement.classList.add("active")},i=function(e){console.log(e.target),e.target.parentElement.classList.remove("active")};return l.a.createElement("div",null,l.a.createElement("div",{className:"showcase-container"},l.a.createElement("div",{className:"showcase-content left"},l.a.createElement("span",{id:"close",onClick:i}),l.a.createElement("div",{className:"show-content"},l.a.createElement("h6",{className:"show-title"},"We use the real exchange rate."),l.a.createElement("div",{className:"show-stats"},l.a.createElement("span",null,"As of 1 min ago, 1 USD \u2192 0.85 EUR"),l.a.createElement("span",null,"Mid market rate ?",l.a.createElement("span",{className:"circle"})))),l.a.createElement("div",{className:"show-cont"},l.a.createElement("div",{className:"show-box"},l.a.createElement(B,{chartData:r.chartData,location:"Massachusetts",legendPosition:"bottom"}))),l.a.createElement("button",{onClick:c,className:"btn-track"},"Zoom")),l.a.createElement("div",{className:"showcase-content side"},l.a.createElement("span",{id:"close",onClick:i}),l.a.createElement("div",{className:"show-content"},l.a.createElement("h6",{className:"show-title"},"We use the real exchange rate."),l.a.createElement("div",{className:"show-stats"},l.a.createElement("span",null,"As of 1 min ago, 1 USD \u2192 0.85 EUR"),l.a.createElement("span",null,"Mid market rate ?",l.a.createElement("span",{className:"circle"})))),l.a.createElement("div",{className:"show-cont"},l.a.createElement("div",{className:"show-box"},l.a.createElement(B,{chartData:r.chartData,location:"Massachusetts",legendPosition:"bottom",chart:!0}))),l.a.createElement("button",{onClick:c,className:"btn-track"},"Zoom"))),l.a.createElement("div",{className:"text-container"},l.a.createElement("div",{className:"show-text"},l.a.createElement("h6",null,"No hidden fees."),l.a.createElement("p",null,"We\u2019re on a mission to bring transparency to finance. We charge as little as possible, and we always show you upfront. No hidden fees. No bad exchange rates. No surprises."))))}),H=t(75),J=t.n(H),U=t(33),Y=(t(198),t(199),function(){return l.a.createElement("div",{className:"main-nav"},l.a.createElement("div",{className:"nav-container"},l.a.createElement("div",{className:"logo"},l.a.createElement("img",{src:J.a,className:"brand",alt:"brand"}),l.a.createElement(U.Link,{to:"/"},l.a.createElement("h5",null,"MoneyTransfer"))),l.a.createElement("ul",{className:"nav-list "},l.a.createElement("li",{className:"nav"},l.a.createElement(U.Link,{className:"nav-link"},"Home")),l.a.createElement("li",{className:"nav"},l.a.createElement(U.Link,{className:"nav-link",to:"instructions"},"Help"))),l.a.createElement("button",{onClick:function(){document.querySelector(".hamburger").classList.toggle("is-active"),document.querySelector(".nav-list").classList.toggle("is-active"),document.querySelector(".main-nav").classList.toggle("is-active")},className:"hamburger hamburger--spin ",type:"button"},l.a.createElement("span",{className:"hamburger-box"},l.a.createElement("span",{className:"hamburger-inner"})))))}),G=t(76),q=t.n(G),K=t(77),z=t.n(K),Z=(t(200),function(){return l.a.createElement("div",{className:"plat-container"},l.a.createElement("div",{ref:void 0,className:"plat-content"},l.a.createElement("div",{className:"plat"},l.a.createElement("div",{className:"plat-head"},l.a.createElement("h1",null,"Get the app."),l.a.createElement("p",null,"Keep track of your transfers on the go with the TransferWise mobile app. Make new or repeat transfers - wherever you are - at the touch of a button.")),l.a.createElement("div",{className:"plat-img"},l.a.createElement("img",{src:q.a,alt:"apple"}),l.a.createElement("img",{src:z.a,alt:"google"})),l.a.createElement("div",{className:"plat-review"},l.a.createElement("div",{className:"plat-re"},l.a.createElement("i",{className:"fas fa-star"}),l.a.createElement("i",{className:"fas fa-star"}),l.a.createElement("i",{className:"fas fa-star"}),l.a.createElement("i",{className:"fas fa-star"}),l.a.createElement("i",{className:"fas fa-star"}),l.a.createElement("span",null,"4.8, 17.5K Ratings")),l.a.createElement("div",{className:"plat-re"},l.a.createElement("i",{className:"fas fa-star"}),l.a.createElement("i",{className:"fas fa-star"}),l.a.createElement("i",{className:"fas fa-star"}),l.a.createElement("i",{className:"fas fa-star"}),l.a.createElement("i",{className:"fas fa-star"}),l.a.createElement("span",null,"4.5, 58.8K Ratings")))),l.a.createElement("div",{className:"hero-img"},l.a.createElement("img",{src:"https://transferwise.com/staticrab/homepage/_next/static/images/no-borderless-64c13228939eadcf44eb79c73b12e796.png",alt:""}))))}),V=(t(201),function(){return l.a.createElement("footer",null,l.a.createElement("div",{className:"footer-container"},l.a.createElement("div",{className:"footer-content"},l.a.createElement("div",{className:"footer-links"},l.a.createElement("ul",{className:"link-list"},l.a.createElement("p",null,"Company and team"),l.a.createElement("li",null,l.a.createElement("button",null,"Company and team"),l.a.createElement("button",null,"News and blog"),l.a.createElement("button",null,"Press"),l.a.createElement("button",null,"Careers"),l.a.createElement("button",null,"Affiliates and partnerships"))),l.a.createElement("ul",{className:"link-list"},l.a.createElement("p",null," Help and support "),l.a.createElement("li",null,l.a.createElement("button",null,"Help centre"),l.a.createElement("button",null,"Mid-market rate"))),l.a.createElement("ul",{className:"link-list"},l.a.createElement("p",null," Learn more"),l.a.createElement("li",null,l.a.createElement("button",null," Send money abroad "),l.a.createElement("button",null,"Mid-market rate"),l.a.createElement("button",null,"Swift/BIC codes"),l.a.createElement("button",null,"Currency converter"),l.a.createElement("button",null,"IBAN codes"),l.a.createElement("button",null,"Rate alerts"),l.a.createElement("button",null,"Compare exchange rates"))),l.a.createElement("ul",{className:"link-list"},l.a.createElement("p",null,"Follow us"),l.a.createElement("button",null,l.a.createElement("i",{className:"fab fa-facebook-f"})),l.a.createElement("button",null,l.a.createElement("i",{className:"fab fa-twitter"})),l.a.createElement("button",null,l.a.createElement("i",{className:"fab fa-instagram"})))),l.a.createElement("div",{className:"footer-showcase"},l.a.createElement("div",{className:"show-list"},l.a.createElement("button",null,"TransferWise"),l.a.createElement("div",{className:"flex"},l.a.createElement("button",null,"Legal"),l.a.createElement("button",null,"Country site map")),l.a.createElement("button",null,"Privacy policy"),l.a.createElement("button",null,"Cookie Policy ")),l.a.createElement("p",null,"\xa9 TransferWise Inc 2020"),l.a.createElement("p",null,"TransferWise Inc. is authorized to operate in most states. In the other states, the program is sponsored by Community Federal Savings Bank, to which we're a service provider.")))))}),_=(t(202),t(203),function(){var e=Object(n.useRef)(new IntersectionObserver((function(e){e[0].isIntersecting?(e[0].target.firstChild.classList.add("anim"),e[0].target.children[1].classList.add("anim")):(e[0].target.firstChild.classList.remove("anim"),e[0].target.children[1].classList.remove("anim"))}),{rootMargin:"0px 0px -300px 0px"})),a=Object(n.useCallback)((function(a){e.current&&null!==a&&e.current.observe(a)}));return l.a.createElement("div",{className:"about-container"},l.a.createElement("div",{className:"about-content"},l.a.createElement("div",{ref:a,className:"about-show"},l.a.createElement("div",{className:"about-text"},l.a.createElement("h2",null,"Global support in a range of languages."),l.a.createElement("p",null,"We don\u2019t do complicated, automated systems. We have offices around the world, full of people ready to help you. Whenever you need it."),l.a.createElement("button",{className:"about-btn"},"Find out now")),l.a.createElement("div",{className:"about-img"},l.a.createElement("img",{src:h.a,alt:"",className:"ab"})))))}),Q=(t(204),function(e){var a=Object(n.useRef)(new IntersectionObserver((function(e){e[0].isIntersecting?(console.log(e[0].target.children[1].children),e[0].target.children[0].classList.add("anim"),e[0].target.children[1].children[0].classList.remove("left"),e[0].target.children[1].children[1].classList.remove("up"),e[0].target.children[1].children[2].classList.remove("right")):(e[0].target.children[0].classList.remove("anim"),e[0].target.children[1].children[0].classList.add("left"),e[0].target.children[1].children[1].classList.add("up"),e[0].target.children[1].children[2].classList.add("right"))}),{threshold:.5})),t=Object(n.useCallback)((function(e){a.current&&null!==e&&a.current.observe(e)}));return l.a.createElement("div",{id:"instructions",className:"instruction-container"},l.a.createElement("div",{ref:t,className:"ins-content"},l.a.createElement("h1",{className:"inst-title"},"How to send money from USD to EUR."),l.a.createElement("div",{className:"int-grid"},l.a.createElement("div",{className:"inst-cover left"},l.a.createElement("div",{className:"inst-one"},l.a.createElement("img",{src:O.a,alt:"school",className:"inst-img"}),l.a.createElement("h6",null,"1. Register for free."),l.a.createElement("p",null,"Sign up online or in our app for free. All you need is an email address, or a Google or Facebook account."))),l.a.createElement("div",{className:"inst-cover up"},l.a.createElement("div",{className:"inst-two"},l.a.createElement("img",{src:g.a,alt:"school",className:"inst-img"}),l.a.createElement("h6",null,"2. Choose an amount to send."),l.a.createElement("p",null,"Tell us how much you want to send. We\u2019ll show you our fees upfront, and tell you when your money should arrive."))),l.a.createElement("div",{className:"inst-cover right"},l.a.createElement("div",{className:"inst-three"},l.a.createElement("img",{src:w.a,alt:"school",className:"inst-img"}),l.a.createElement("h6",null,"3. Add recipient\u2019s bank details."),l.a.createElement("p",null,"Fill in the details of your recipient\u2019s bank account. If you don\u2019t know their details, we can request them for you."))),l.a.createElement("div",{className:"inst-cover"},l.a.createElement("div",{className:"inst-four"},l.a.createElement("img",{src:O.a,alt:"school",className:"inst-img"}),l.a.createElement("h6",null,"4. Verify your identity."),l.a.createElement("p",null,"For some currencies, or for large transfers, we need a photo of your ID. This helps us keep your money safe."))),l.a.createElement("div",{className:"inst-cover"},l.a.createElement("div",{className:"inst-five"},l.a.createElement("img",{src:x.a,alt:"school",className:"inst-img"}),l.a.createElement("h6",null,"5. Pay for your transfer."),l.a.createElement("p",null,"Send your money with a bank transfer."))),l.a.createElement("div",{className:"inst-cover"},l.a.createElement("div",{className:"inst-six"},l.a.createElement("img",{src:S.a,alt:"school",className:"inst-img"}),l.a.createElement("h6",null,"6. That\u2019s it."),l.a.createElement("p",null,"We\u2019ll handle the rest. You can track your transfer in your account, and we'll tell your recipient it's coming."))))))}),X=(t(205),function(){var e=Object(n.useRef)(new IntersectionObserver((function(e){e[0].isIntersecting?(e[0].target.children[0].classList.remove("anim"),e[0].target.children[1].children[0].classList.remove("anim"),e[0].target.children[1].children[1].classList.remove("mid"),e[0].target.children[1].children[2].classList.remove("right")):(e[0].target.children[0].classList.add("anim"),e[0].target.children[1].children[0].classList.add("anim"),e[0].target.children[1].children[1].classList.add("mid"),e[0].target.children[1].children[2].classList.add("right"))}),{threshold:.75})),a=Object(n.useCallback)((function(a){e.current&&null!==a&&e.current.observe(a)}));return l.a.createElement("div",{className:"review-award-container "},l.a.createElement("div",{ref:a,className:"review-awards"},l.a.createElement("div",{className:"review-head"},l.a.createElement("h2",null," TrustPilot score 4.7 out of 5, from 99,056 reviews"),l.a.createElement("p",null,"It\u2019s your money. You can trust us to get it where it needs to be, but don\u2019t take our word for it. Read our reviews.")),l.a.createElement("div",{className:"review-content-tabs"},l.a.createElement("div",{className:"re-cont-tab"},l.a.createElement("i",{className:"fas fa-star"}),l.a.createElement("i",{className:"fas fa-star"}),l.a.createElement("i",{className:"fas fa-star"}),l.a.createElement("i",{className:"fas fa-star"}),l.a.createElement("i",{className:"fas fa-star"}),l.a.createElement("h5",null,"Excellent in all aspects. Fast, safe and easy to use the site. Thank you Transferwise!"),l.a.createElement("span",null,"John and Ann"),l.a.createElement("br",null),l.a.createElement("span",null,"Published 3 minutes ago")),l.a.createElement("div",{className:"re-cont-tab mid"},l.a.createElement("i",{className:"fas fa-star"}),l.a.createElement("i",{className:"fas fa-star"}),l.a.createElement("i",{className:"fas fa-star"}),l.a.createElement("i",{className:"fas fa-star"}),l.a.createElement("i",{className:"fas fa-star"}),l.a.createElement("h5",null," The best Service ever"),l.a.createElement("span",null,"Zouheir Benghali"),l.a.createElement("br",null),l.a.createElement("span",null,"Published 6 minutes ago")),l.a.createElement("div",{className:"re-cont-tab right"},l.a.createElement("i",{className:"fas fa-star"}),l.a.createElement("i",{className:"fas fa-star"}),l.a.createElement("i",{className:"fas fa-star"}),l.a.createElement("i",{className:"fas fa-star"}),l.a.createElement("i",{className:"fas fa-star"}),l.a.createElement("h5",null,"very useful and good service "),l.a.createElement("span",null,"Massimo Buresti"),l.a.createElement("br",null),l.a.createElement("span",null,"Published 11 minutes ago")))))}),$=function(){var e=Object(n.useRef)(new IntersectionObserver((function(e){e[0].isIntersecting?(e[0].target.children[0].classList.remove("anim"),e[0].target.children[1].children[0].classList.remove("up"),e[0].target.children[1].children[1].classList.remove("down"),e[0].target.children[1].children[2].classList.remove("left")):(e[0].target.children[0].classList.add("anim"),e[0].target.children[1].children[0].classList.add("up"),e[0].target.children[1].children[1].classList.add("down"),e[0].target.children[1].children[2].classList.add("left"))}),{threshold:.9})),a=Object(n.useCallback)((function(a){e.current&&null!==a&&e.current.observe(a)}));return l.a.createElement(n.Fragment,null,l.a.createElement("div",{ref:a,className:"review-container"},l.a.createElement("h2",{className:"review-title anim"},"See what the world\u2019s largest publications have to say"),l.a.createElement("div",{className:"review-tabs"},l.a.createElement("div",{className:"tab up"},l.a.createElement("div",{className:"tab-img"},"Wired "),l.a.createElement("div",{className:"tab-text"},"Smart tech and sharp thinking are disrupting high-street banks")),l.a.createElement("div",{className:"tab down"},l.a.createElement("div",{className:"tab-img"},"Financial Times ")," ",l.a.createElement("div",{className:"tab-text"},"TransferWise is looking to use the internet to spark a digital revolution in current financial services.")),l.a.createElement("div",{className:"tab left"},l.a.createElement("div",{className:"tab-img"},"The Economist ")," ",l.a.createElement("div",{className:"tab-text"},"TransferWise takes a machete to the hefty fees that banks levy to send money across borders.")))),l.a.createElement(X,null))},ee=t(78),ae=t.n(ee),te=t(79),ne=t.n(te),le=(t(206),function(){var e=Object(n.useRef)(new IntersectionObserver((function(e){e[0].isIntersecting?(e[0].target.children[0].classList.remove("anim"),e[0].target.children[1].classList.remove("anim")):(e[0].target.children[0].classList.add("anim"),e[0].target.children[1].classList.add("anim"))}),{threshold:.75})),a=Object(n.useCallback)((function(a){e.current&&null!==a&&e.current.observe(a)}));return l.a.createElement("div",{className:"plat-container"},l.a.createElement("div",{ref:a,className:"plat-content"},l.a.createElement("div",{className:"plat"},l.a.createElement("div",{className:"plat-head"},l.a.createElement("h1",null,"Get the app."),l.a.createElement("p",null,"Keep track of your transfers on the go with the TransferWise mobile app. Make new or repeat transfers - wherever you are - at the touch of a button.")),l.a.createElement("div",{className:"plat-img"},l.a.createElement("img",{src:ae.a,alt:"apple"}),l.a.createElement("img",{src:ne.a,alt:"google"})),l.a.createElement("div",{className:"plat-review"},l.a.createElement("div",{className:"plat-re"},l.a.createElement("i",{className:"fas fa-star"}),l.a.createElement("i",{className:"fas fa-star"}),l.a.createElement("i",{className:"fas fa-star"}),l.a.createElement("i",{className:"fas fa-star"}),l.a.createElement("i",{className:"fas fa-star"}),l.a.createElement("span",null,"4.8, 17.5K Ratings")),l.a.createElement("div",{className:"plat-re"},l.a.createElement("i",{className:"fas fa-star"}),l.a.createElement("i",{className:"fas fa-star"}),l.a.createElement("i",{className:"fas fa-star"}),l.a.createElement("i",{className:"fas fa-star"}),l.a.createElement("i",{className:"fas fa-star"}),l.a.createElement("span",null,"4.5, 58.8K Ratings")))),l.a.createElement("div",{className:"hero-img"},l.a.createElement("img",{src:"https://transferwise.com/staticrab/homepage/_next/static/images/no-borderless-64c13228939eadcf44eb79c73b12e796.png",alt:""}))))}),se=(t(207),function(){return l.a.createElement("footer",null,l.a.createElement(le,null),l.a.createElement("div",{className:"footer-container"},l.a.createElement("div",{className:"footer-content"},l.a.createElement("div",{className:"footer-links"},l.a.createElement("ul",{className:"link-list"},l.a.createElement("p",null,"Company and team"),l.a.createElement("li",null,l.a.createElement("button",null,"Company and team"),l.a.createElement("button",null,"News and blog"),l.a.createElement("button",null,"Press"),l.a.createElement("button",null,"Careers"),l.a.createElement("button",null,"Affiliates and partnerships"))),l.a.createElement("ul",{className:"link-list"},l.a.createElement("p",null," Help and support "),l.a.createElement("li",null,l.a.createElement("button",null,"Help centre"),l.a.createElement("button",null,"Mid-market rate"))),l.a.createElement("ul",{className:"link-list"},l.a.createElement("p",null," Learn more"),l.a.createElement("li",null,l.a.createElement("button",null," Send money abroad "),l.a.createElement("button",null,"Mid-market rate"),l.a.createElement("button",null,"Swift/BIC codes"),l.a.createElement("button",null,"Currency converter"),l.a.createElement("button",null,"IBAN codes"),l.a.createElement("button",null,"Rate alerts"),l.a.createElement("button",null,"Compare exchange rates"))),l.a.createElement("ul",{className:"link-list"},l.a.createElement("p",null,"Follow us"),l.a.createElement("button",null,l.a.createElement("i",{className:"fab fa-facebook-f"})),l.a.createElement("button",null,l.a.createElement("i",{className:"fab fa-twitter"})),l.a.createElement("button",null,l.a.createElement("i",{className:"fab fa-instagram"})))),l.a.createElement("div",{className:"footer-showcase"},l.a.createElement("div",{className:"show-list"},l.a.createElement("button",null,"TransferWise"),l.a.createElement("div",{className:"flex"},l.a.createElement("button",null,"Legal"),l.a.createElement("button",null,"Country site map")),l.a.createElement("button",null,"Privacy policy"),l.a.createElement("button",null,"Cookie Policy ")),l.a.createElement("p",null,"\xa9 TransferWise Inc 2020"),l.a.createElement("p",null,"TransferWise Inc. is authorized to operate in most states. In the other states, the program is sponsored by Community Federal Savings Bank, to which we're a service provider.")))))}),re=function(e){return l.a.createElement("div",null,l.a.createElement(Q,{cont:e,pc:e.pc}),l.a.createElement(_,null),l.a.createElement($,null),l.a.createElement(se,null))},ce=function(){var e=Object(n.useState)(!0),a=Object(o.a)(e,2),t=a[0],s=a[1],r=Object(n.useState)(!1),i=Object(o.a)(r,2),u=i[0],d=i[1],f=Object(n.useState)(0),h=Object(o.a)(f,2),v=h[0],b=h[1],N=function(){return b(window.pageYOffset)},g=Object(n.useCallback)((function(e){null!==e?window.addEventListener("scroll",N):null===e&&window.removeEventListener("scroll",N)}));return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{className:"main-header"},l.a.createElement(Y,null),l.a.createElement(E,null)),l.a.createElement(M,null),l.a.createElement("div",{className:"m",id:"m"},l.a.createElement("div",{className:"nav-cont"},l.a.createElement("div",{className:"m-nav"},l.a.createElement("div",{className:"log"},l.a.createElement("h5",null,"Animation")),l.a.createElement("ul",{className:"nav-lis"},l.a.createElement("li",{onClick:function(){d(!1),s(!0)},className:"na ".concat(t?"active":null)},l.a.createElement(c.b,{to:"mp",className:"nav-lin"},"Parallax")),l.a.createElement("li",{onClick:function(){s(!1),d(!0)},className:"na ".concat(u?"active":null)},l.a.createElement(c.b,Object(m.a)({to:"m",className:"nav-lin"},"to","instructions"),"Fade"))))),l.a.createElement("div",{className:"m-s",id:"ms"},u?l.a.createElement(re,{cont:u,pc:t}):null),t?l.a.createElement("div",{ref:g,className:"m-p",id:"mp"},l.a.createElement("div",{className:"m-bg",style:{transform:"translateY(".concat(-.5*v,"px)")}}),l.a.createElement("div",{className:"m-cont",style:{transform:"translateY(".concat(-0*v,"px)")}},l.a.createElement(j,null),l.a.createElement(p,null),l.a.createElement(D,null),l.a.createElement(Z,null),l.a.createElement(V,null))):null))},ie=(t(210),function(){var e=Object(n.useState)(!1),a=Object(o.a)(e,2),t=a[0],s=a[1];return l.a.createElement("header",{className:"main-header sub"},l.a.createElement(Y,null),l.a.createElement("div",{className:"main"},l.a.createElement("p",{className:"sign",align:"center"},"Sign in"),function(){if(t)return l.a.createElement("span",null,"Username does not exist")}(),l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),s(!0)},className:"form1"},l.a.createElement("input",{className:"un ",type:"text",align:"center",placeholder:"Username"}),l.a.createElement("input",{className:"pass",type:"password",align:"center",placeholder:"Password"}),l.a.createElement("button",{type:"submit",className:"submit",align:"center"},"Sign in"))))}),me=function(e){var a=e.hideLoader;return Object(n.useEffect)((function(){a()}),[a]),l.a.createElement(l.a.Fragment,null,l.a.createElement(c.a,null,l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/login",component:ie}),l.a.createElement(i.a,{path:"/",component:ce})),l.a.createElement("div",{className:"space"})))},oe=(t(211),document.querySelector(".sweep-head"));r.a.render(l.a.createElement(me,{hideLoader:function(){return oe.classList.add("sweep--hide")},showLoader:function(){return oe.classList.remove("sweep--hide")}}),document.getElementById("body-wrapper"))},28:function(e,a,t){e.exports=t.p+"static/media/about.3e6a0f21.jpg"},29:function(e,a,t){e.exports=t.p+"static/media/school.5256400b.svg"},30:function(e,a,t){e.exports=t.p+"static/media/money.3bb11a40.svg"},31:function(e,a,t){e.exports=t.p+"static/media/calculator.f64bde51.svg"},32:function(e,a,t){e.exports=t.p+"static/media/report.447e03c3.svg"},73:function(e,a,t){e.exports=t.p+"static/media/bank.49c9d684.svg"},75:function(e,a,t){e.exports=t.p+"static/media/brand.57cf6581.png"},76:function(e,a,t){e.exports=t.p+"static/media/apple.4c6b5dcc.svg"},77:function(e,a,t){e.exports=t.p+"static/media/play.a53de91e.svg"},78:function(e,a,t){e.exports=t.p+"static/media/apple.4c6b5dcc.svg"},79:function(e,a,t){e.exports=t.p+"static/media/play.a53de91e.svg"},84:function(e,a,t){e.exports=t(212)},89:function(e,a,t){},90:function(e,a,t){},91:function(e,a,t){},92:function(e,a,t){}},[[84,1,2]]]);
//# sourceMappingURL=main.cf08e647.chunk.js.map