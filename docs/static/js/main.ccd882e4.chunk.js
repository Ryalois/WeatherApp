(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[0],{16:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(6),d=n.n(a),l=(n(16),n(4)),c=n.n(l),i=n(7),u=n(8),m=n(2),s=n(11),b=n(10),h=n(9);n(5);function g(e,t,n,r,o){var a=100*Math.random()/o-100/o-10,d=20*Math.random()+50,l=-Math.random()*d,c=document.createElement("div");c.className="particle",c.style.backgroundColor="rgb("+t+","+n+","+r+")",c.style.width=24*e+"vmin",c.style.height=20*e+"vmin",c.style.setProperty("--y",a+"vh"),c.style.setProperty("--duration",d+"s"),c.style.animationDelay=l+"s",document.body.appendChild(c);var i=document.createElement("div");i.className="innerparticle",i.style.width=24*e-4+"vmin",i.style.height=20*e-4+"vmin",i.style.backgroundColor="rgb("+(t-20)+","+(n-20)+","+(r-20)+")",i.style.setProperty("--y","calc("+a+"vh + 2vmin)"),i.style.setProperty("--x","2vmin"),i.style.setProperty("--duration",d+"s"),i.style.animationDelay=l+"s",document.body.appendChild(i)}function y(e,t,n,r){var o=document.createElement("div");o.className="particle",o.style.animationName="rain",o.style.backgroundColor="rgb("+t+","+n+","+r+")",o.style.width=e*e*3+"vmin",o.style.height=e*e*2.5+"vmin",o.style.animationDelay=2*-Math.random()+"s",o.style.setProperty("--x",120*Math.random()-20+"vw"),o.style.setProperty("--duration",(Math.random()+2)*e+"s"),o.style.clipPath="polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",o.style.zIndex=3,document.body.appendChild(o)}var p=function(e){var t=document.getElementsByClassName("particle");Array.from(t).forEach((function(e){document.body.removeChild(e)}));var n=document.getElementsByClassName("innerparticle");if(Array.from(n).forEach((function(e){document.body.removeChild(e)})),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))var r=3;else r=1;switch(e){case"Snow":document.getElementById("App").style.backgroundColor="rgb(119, 119, 119)",document.getElementById("bottombackground").style.backgroundColor="rgb(109, 109, 109)",document.getElementById("weather").style.backgroundColor="rgb(235, 235, 235)",document.getElementById("innerweather").style.backgroundColor="rgb(189, 189, 189)";for(var o=0;o<30/r;o++){g(Math.random()+.5,99,99,99,1)}for(var a=0;a<25/r;a++){y(1+Math.random()/2,235,235,235)}break;case"Thunderstorm":case"Rain":case"Drizzle":document.getElementById("App").style.backgroundColor="rgb(119, 119, 119)",document.getElementById("bottombackground").style.backgroundColor="rgb(109, 109, 109)",document.getElementById("weather").style.backgroundColor="rgb(99, 99, 99)",document.getElementById("innerweather").style.backgroundColor="rgb(59, 59, 59)",document.getElementById("bottombackground").style.clipPath="polygon(62% 50%, 79% 46%, 100% 38%, 100% 100%, 0 100%, 0 46%, 18% 49%, 36% 41%, 49% 44%)";for(var d=0;d<25/r;d++){y(.75+Math.random()/3,100,148,237)}for(var l=0;l<30/r;l++){g(Math.random()+.5,99,99,99,1)}break;case"Clouds":document.getElementById("App").style.backgroundColor="rgb(199, 199, 199)",document.getElementById("bottombackground").style.backgroundColor="rgb(189, 189, 189)",document.getElementById("weather").style.backgroundColor="rgb(159, 159, 159)",document.getElementById("innerweather").style.backgroundColor="rgb(119, 119, 119)",document.getElementById("bottombackground").style.clipPath="polygon(62% 50%, 79% 46%, 100% 38%, 100% 100%, 0 100%, 0 46%, 18% 49%, 36% 41%, 49% 44%)";for(var c=0;c<50/r;c++){g(Math.random()+.5,159,159,159,1)}break;case"Fog":case"Smoke":case"Ash":document.getElementById("App").style.backgroundColor="rgb(100, 148, 237)",document.getElementById("bottombackground").style.backgroundColor="rgb(189, 189, 189)",document.getElementById("weather").style.backgroundColor="rgb(159, 159, 159)",document.getElementById("innerweather").style.backgroundColor="rgb(119, 119, 119)",document.getElementById("bottombackground").style.clipPath="polygon(69% 70%, 83% 65%, 100% 64%, 100% 100%, 0 100%, 0 75%, 15% 70%, 31% 73%, 48% 70%)";for(var i=0;i<30/r;i++){g(2*Math.random()+.5,159,159,159,4)}break;case"Mist":document.getElementById("App").style.backgroundColor="rgb(100, 148, 237)",document.getElementById("bottombackground").style.backgroundColor="rgb(90, 138, 227)",document.getElementById("weather").style.backgroundColor="rgb(235, 235, 235)",document.getElementById("innerweather").style.backgroundColor="rgb(189, 189, 189)",document.getElementById("bottombackground").style.clipPath="polygon(69% 70%, 83% 65%, 100% 64%, 100% 100%, 0 100%, 0 75%, 15% 70%, 31% 73%, 48% 70%)";for(var u=0;u<30/r;u++){g(2*Math.random()+.5,235,235,235,6)}break;case"Haze":case"Dust":case"Sand":document.getElementById("App").style.backgroundColor="rgb(100, 148, 237)",document.getElementById("bottombackground").style.backgroundColor="rgb(235, 215, 185)",document.getElementById("weather").style.backgroundColor="rgb(225, 205, 175)",document.getElementById("innerweather").style.backgroundColor="rgb(185, 165, 135)",document.getElementById("bottombackground").style.clipPath="polygon(69% 70%, 83% 65%, 100% 64%, 100% 100%, 0 100%, 0 75%, 15% 70%, 31% 73%, 48% 70%)";for(var m=0;m<30/r;m++){g(2*Math.random()+.5,225,205,175,4)}break;default:document.getElementById("App").style.backgroundColor="rgb(100, 148, 237)",document.getElementById("bottombackground").style.backgroundColor="rgb(90, 138, 227)",document.getElementById("weather").style.backgroundColor="rgb(255, 235, 0)",document.getElementById("innerweather").style.backgroundColor="rgb(209, 189, 0)",document.getElementById("bottombackground").style.clipPath="polygon(62% 50%, 79% 46%, 100% 38%, 100% 100%, 0 100%, 0 46%, 18% 49%, 36% 41%, 49% 44%)";for(var s=0;s<10/r;s++){g(Math.random()+.2,235,235,235,1)}}},v=n(0);function k(e){return C.apply(this,arguments)}function C(){return(C=Object(h.a)(c.a.mark((function e(t){var n,r,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"7f3acbb06dc37fbe907967270e2dabc9",e.next=3,fetch("https://api.openweathermap.org/data/2.5/weather?q="+t+"&appid=7f3acbb06dc37fbe907967270e2dabc9");case 3:if(!1!==(n=e.sent).ok){e.next=9;break}return r={main:{humidity:404,temp:404},weather:[{main:"Error city does not exist"}]},e.abrupt("return",r);case 9:return e.next=11,n.json();case 11:return o=e.sent,e.abrupt("return",o);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){if("Celsius"===e.tempunit)var t=Math.round(e.temp-273.15).toString()+"\xb0C";return"Fahrenheit"===e.tempunit&&(t=Math.round(9*(e.temp-273.15)/5+32).toString()+"\xb0F"),"Kelvin"===e.tempunit&&(t=Math.round(e.temp).toString()+"\xb0K"),Object(v.jsx)("div",{id:"weather",children:Object(v.jsxs)("div",{id:"innerweather",children:[Object(v.jsxs)("p",{id:"temperature",children:[" ",t," "]}),Object(v.jsxs)("p",{children:[" humidity ",e.humidity,"% ",Object(v.jsx)("br",{})," ",e.weather," "]})]})})}var E=function(e){Object(s.a)(n,e);var t=Object(b.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).state={value:"London",humidity:0,temp:0,tempunit:"Celsius",weather:""},r.handleChange=r.handleChange.bind(Object(m.a)(r)),r.onChangeValue=r.onChangeValue.bind(Object(m.a)(r)),r.handleSubmit=r.handleSubmit.bind(Object(m.a)(r)),r}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;k(this.state.value).then((function(t){e.setState({temp:t.main.temp,humidity:t.main.humidity,weather:t.weather[0].main}),p(e.state.weather)}))}},{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"onChangeValue",value:function(e){this.setState({tempunit:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this;k(this.state.value).then((function(e){t.setState({temp:e.main.temp,humidity:e.main.humidity,weather:e.weather[0].main}),p(t.state.weather)})),e.preventDefault()}},{key:"render",value:function(){return Object(v.jsxs)("div",{className:"App",id:"App",children:[Object(v.jsxs)("form",{id:"input",onSubmit:this.handleSubmit,children:[Object(v.jsx)("input",{type:"text",id:"textinput",placeholder:"City Name",value:this.state.value,onChange:this.handleChange}),Object(v.jsxs)("select",{id:"tempform",name:"tempunit",onChange:this.onChangeValue,children:[Object(v.jsx)("option",{value:"Celsius",children:"\xb0C"}),Object(v.jsx)("option",{value:"Fahrenheit",children:"\xb0F"}),Object(v.jsx)("option",{value:"Kelvin",children:"\xb0K"})]})]}),Object(v.jsx)("div",{id:"bottombackground"}),Object(v.jsx)(f,{temp:this.state.temp,humidity:this.state.humidity,weather:this.state.weather,tempunit:this.state.tempunit})]})}}]),n}(o.a.Component),j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,a=t.getLCP,d=t.getTTFB;n(e),r(e),o(e),a(e),d(e)}))};d.a.render(Object(v.jsx)(o.a.StrictMode,{children:Object(v.jsx)(E,{})}),document.getElementById("root")),j()},5:function(e,t,n){}},[[19,1,2]]]);
//# sourceMappingURL=main.ccd882e4.chunk.js.map