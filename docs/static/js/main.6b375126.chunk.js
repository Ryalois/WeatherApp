(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[0],{16:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var o=n(2),r=n.n(o),a=n(7),i=n.n(a),d=(n(16),n(3)),c=n.n(d),l=n(8),s=n(9),m=n(1),u=n(11),h=n(10),y=n(5);n(6);function b(e,t,n,o,r){for(var a=e.clientX,i=e.clientY,d=1*(e.offsetX-e.target.clientWidth/2)/e.target.clientWidth,c=1*(e.offsetY-e.target.clientHeight/2)/e.target.clientHeight,l=function(e){var t=document.createElement("div");t.className="puff",t.style.backgroundColor="rgb("+n+","+o+","+r+")",t.style.setProperty("--scale",.5+Math.random()/2),t.style.setProperty("--x",a/window.innerWidth*100+"vw"),t.style.setProperty("--y",i/window.innerHeight*100+"vh"),t.style.setProperty("--nx",a/window.innerWidth*100+15*(-.25+Math.random()+d)+"vw"),t.style.setProperty("--ny",i/window.innerHeight*100+15*(Math.random()/2-.25+c)+"vh"),document.body.appendChild(t),setTimeout((function(){document.body.removeChild(t)}),500+1500*Math.random())},s=0;s<2;s++)l()}function g(e,t,n,o,r){var a=document.getElementsByClassName(t);Array.from(a).forEach((function(e){document.body.removeChild(e)}));var i=e.clientX,d=e.clientY,c=1;/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(c=3);for(var l=function(e){var t=document.createElement("div");t.className="puff",t.style.backgroundColor="rgb("+n+","+o+","+r+")",t.style.setProperty("--scale",.5+Math.random()),t.style.setProperty("--x",i/window.innerWidth*100+"vw"),t.style.setProperty("--y",d/window.innerHeight*100+"vh"),t.style.setProperty("--nx",i/window.innerWidth*100+5*(2*Math.random()-.5)+"vw"),t.style.setProperty("--ny",d/window.innerHeight*100+5*(-.5+Math.random())+"vh"),document.body.appendChild(t),setTimeout((function(){document.body.removeChild(t)}),500+1500*Math.random())},s=0;s<3+5*Math.random()-c;s++)l()}function p(e,t,n,o,r,a,i){var d=20*Math.random()+50,c=-r/100*d,l=e,s=document.createElement("div");s.className="particle "+i,s.onmouseenter=function(r){var d=l;!function c(){l<=.3?(g(r,i,t,n,o),setTimeout(p(e,t,n,o,0,a,i),1e4)):l>d-.01&&setTimeout((function(){l-=.001,s.style.width=24*l+"vmin",s.style.height=20*l+"vmin",m.style.width=24*l-4+"vmin",m.style.height=20*l-4+"vmin",c()}),10)}(),b(r,0,t,n,o)},s.onmouseleave=function(r){var d=l;!function c(){l<=.3?(g(r,i,t,n,o),setTimeout(p(e,t,n,o,0,a,i),1e3+1e4*Math.random())):l>d-.01&&setTimeout((function(){l-=.001,s.style.width=24*l+"vmin",s.style.height=20*l+"vmin",m.style.width=24*l-4+"vmin",m.style.height=20*l-4+"vmin",c()}),10)}(),b(r,0,t,n,o)},s.onclick=function(r){g(r,i,t,n,o),setTimeout(p(e,t,n,o,0,a,i),1e3*Math.random())},s.style.backgroundColor="rgb("+t+","+n+","+o+")",s.style.width=24*e+"vmin",s.style.height=20*e+"vmin",s.style.setProperty("--y",-a+"vh"),s.style.setProperty("--duration",d+"s"),s.style.animationDelay=c+"s",document.body.appendChild(s);var m=document.createElement("div");m.className="innerparticle "+i,m.onmouseenter=function(r){var d=l;!function c(){l<=.3?(g(r,i,t,n,o),setTimeout(p(e,t,n,o,0,a,i),1e3+1e4*Math.random())):l>d-.01&&setTimeout((function(){l-=.001,s.style.width=24*l+"vmin",s.style.height=20*l+"vmin",m.style.width=24*l-4+"vmin",m.style.height=20*l-4+"vmin",c()}),10)}(),b(r,0,t,n,o)},m.onmouseleave=function(r){var d=l;!function c(){l<=.3?(g(r,i,t,n,o),setTimeout(p(e,t,n,o,0,a,i),1e3+1e4*Math.random())):l>d-.01&&setTimeout((function(){l-=.001,s.style.width=24*l+"vmin",s.style.height=20*l+"vmin",m.style.width=24*l-4+"vmin",m.style.height=20*l-4+"vmin",c()}),10)}(),b(r,0,t,n,o)},m.onclick=function(r){g(r,i,t,n,o),setTimeout(p(e,t,n,o,0,a,i),1e3+1e4*Math.random())},m.style.width=24*e-4+"vmin",m.style.height=20*e-4+"vmin",m.style.backgroundColor="rgb("+(t-20)+","+(n-20)+","+(o-20)+")",m.style.setProperty("--y","calc("+-a+"vh + 2vmin)"),m.style.setProperty("--x","2vmin"),m.style.setProperty("--duration",d+"s"),m.style.animationDelay=c+"s",document.body.appendChild(m)}function v(e,t,n,o){var r=document.createElement("div");r.className="droplet",r.style.backgroundColor="rgb("+t+","+n+","+o+")",r.style.width=e*e*3+"vmin",r.style.height=e*e*2.5+"vmin",r.style.animationDelay=2*-Math.random()+"s",r.style.setProperty("--x",120*Math.random()-20+"vw"),r.style.setProperty("--duration",(Math.random()+2)*e+"s"),document.body.appendChild(r)}var f=function(e){var t=document.getElementsByClassName("particle");Array.from(t).forEach((function(e){document.body.removeChild(e)}));var n=document.getElementsByClassName("innerparticle");Array.from(n).forEach((function(e){document.body.removeChild(e)}));var o=document.getElementsByClassName("droplet");Array.from(o).forEach((function(e){document.body.removeChild(e)}));var r=2;switch(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(r=5),e){case"Snow":if(document.getElementById("App").style.backgroundColor="rgb(119, 119, 119)",document.getElementById("bottombackground").style.backgroundColor="rgb(109, 109, 109)",document.getElementById("weather").style.backgroundColor="rgb(235, 235, 235)",document.getElementById("innerweather").style.backgroundColor="rgb(189, 189, 189)",2===r)for(var a=0;a<30/r;a++){p(Math.random()+.5,99,99,99,100*Math.random(),100*Math.random(),a)}for(var i=0;i<25/r;i++){v(1+Math.random()/2,235,235,235)}break;case"Thunderstorm":case"Rain":case"Drizzle":if(document.getElementById("App").style.backgroundColor="rgb(119, 119, 119)",document.getElementById("bottombackground").style.backgroundColor="rgb(109, 109, 109)",document.getElementById("weather").style.backgroundColor="rgb(99, 99, 99)",document.getElementById("innerweather").style.backgroundColor="rgb(59, 59, 59)",document.getElementById("bottombackground").style.clipPath="polygon(62% 50%, 79% 46%, 100% 38%, 100% 100%, 0 100%, 0 46%, 18% 49%, 36% 41%, 49% 44%)",2===r)for(var d=0;d<30/r;d++){p(Math.random()+.5,99,99,99,100*Math.random(),100*Math.random(),d)}for(var c=0;c<25/r;c++){v(.75+Math.random()/3,100,148,237)}break;case"Clouds":document.getElementById("App").style.backgroundColor="rgb(199, 199, 199)",document.getElementById("bottombackground").style.backgroundColor="rgb(189, 189, 189)",document.getElementById("weather").style.backgroundColor="rgb(159, 159, 159)",document.getElementById("innerweather").style.backgroundColor="rgb(119, 119, 119)",document.getElementById("bottombackground").style.clipPath="polygon(62% 50%, 79% 46%, 100% 38%, 100% 100%, 0 100%, 0 46%, 18% 49%, 36% 41%, 49% 44%)";for(var l=0;l<50/r;l++){p(Math.random()+.5,159,159,159,100*Math.random(),100*Math.random(),l)}break;case"Fog":case"Smoke":case"Ash":document.getElementById("App").style.backgroundColor="rgb(100, 148, 237)",document.getElementById("bottombackground").style.backgroundColor="rgb(189, 189, 189)",document.getElementById("weather").style.backgroundColor="rgb(159, 159, 159)",document.getElementById("innerweather").style.backgroundColor="rgb(119, 119, 119)",document.getElementById("bottombackground").style.clipPath="polygon(69% 70%, 83% 65%, 100% 64%, 100% 100%, 0 100%, 0 75%, 15% 70%, 31% 73%, 48% 70%)";for(var s=0;s<40/r;s++){p(2*Math.random()+.5*r/2,159,159,159,100*Math.random(),50*Math.random()-5*(r-2),s)}break;case"Mist":document.getElementById("App").style.backgroundColor="rgb(100, 148, 237)",document.getElementById("bottombackground").style.backgroundColor="rgb(90, 138, 227)",document.getElementById("weather").style.backgroundColor="rgb(235, 235, 235)",document.getElementById("innerweather").style.backgroundColor="rgb(189, 189, 189)",document.getElementById("bottombackground").style.clipPath="polygon(69% 70%, 83% 65%, 100% 64%, 100% 100%, 0 100%, 0 75%, 15% 70%, 31% 73%, 48% 70%)";for(var m=0;m<40/r;m++){p(2*Math.random()+.5*r/2,235,235,235,100*Math.random(),40*Math.random()-5*(r-2),m)}break;case"Haze":case"Dust":case"Sand":document.getElementById("App").style.backgroundColor="rgb(100, 148, 237)",document.getElementById("bottombackground").style.backgroundColor="rgb(235, 215, 185)",document.getElementById("weather").style.backgroundColor="rgb(225, 205, 175)",document.getElementById("innerweather").style.backgroundColor="rgb(185, 165, 135)",document.getElementById("bottombackground").style.clipPath="polygon(69% 70%, 83% 65%, 100% 64%, 100% 100%, 0 100%, 0 75%, 15% 70%, 31% 73%, 48% 70%)";for(var u=0;u<40/r;u++){p(2*Math.random()+.5*r/2,225,205,175,100*Math.random(),50*Math.random()-5*(r-2),u)}break;default:document.getElementById("App").style.backgroundColor="rgb(100, 148, 237)",document.getElementById("bottombackground").style.backgroundColor="rgb(90, 138, 227)",document.getElementById("weather").style.backgroundColor="rgb(255, 235, 0)",document.getElementById("innerweather").style.backgroundColor="rgb(209, 189, 0)",document.getElementById("bottombackground").style.clipPath="polygon(62% 50%, 79% 46%, 100% 38%, 100% 100%, 0 100%, 0 46%, 18% 49%, 36% 41%, 49% 44%)";for(var h=0;h<10/r;h++){p(Math.random()+.2,235,235,235,100*Math.random(),100*Math.random(),h)}}},w=n(0);function C(e){return k.apply(this,arguments)}function k(){return(k=Object(y.a)(c.a.mark((function e(t){var n,o,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"7f3acbb06dc37fbe907967270e2dabc9",e.next=3,fetch("https://api.openweathermap.org/data/2.5/weather?q="+t+"&appid=7f3acbb06dc37fbe907967270e2dabc9");case 3:if(!1!==(n=e.sent).ok){e.next=9;break}return o={main:{humidity:404,temp:404},weather:[{main:"City doesn't exist"}]},e.abrupt("return",o);case 9:return e.next=11,n.json();case 11:return r=e.sent,e.abrupt("return",r);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(){return(j=Object(y.a)(c.a.mark((function e(t,n){var o,r,a,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"7f3acbb06dc37fbe907967270e2dabc9",e.next=3,fetch("https://api.openweathermap.org/geo/1.0/reverse?lat="+n+"&lon="+t+"&limit=1&appid=7f3acbb06dc37fbe907967270e2dabc9");case 3:if(!1!==(o=e.sent).ok){e.next=9;break}return r={main:{humidity:404,temp:404},weather:[{main:"City doesn't exist"}]},e.abrupt("return",r);case 9:return e.next=11,o.json();case 11:return a=e.sent,e.next=14,C(a[0].name);case 14:return i=e.sent,console.log(a,i),e.abrupt("return",i);case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(e){if(404===e.humidity)return Object(w.jsx)("div",{id:"weather",children:Object(w.jsx)("div",{id:"innerweather",children:Object(w.jsxs)("p",{id:"temperature",children:["This city",Object(w.jsx)("br",{}),"doesn't exist"]})})});if("Celsius"===e.tempunit)var t=Math.round(e.temp-273.15).toString()+"\xb0C";return"Fahrenheit"===e.tempunit&&(t=Math.round(9*(e.temp-273.15)/5+32).toString()+"\xb0F"),"Kelvin"===e.tempunit&&(t=Math.round(e.temp).toString()+"\xb0K"),Object(w.jsx)("div",{id:"weather",children:Object(w.jsxs)("div",{id:"innerweather",children:[Object(w.jsxs)("p",{id:"temperature",children:[" ",t," "]}),Object(w.jsxs)("p",{children:[" humidity ",e.humidity,"% ",Object(w.jsx)("br",{})," ",e.weather," "]})]})})}var E=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var o;return Object(l.a)(this,n),(o=t.call(this,e)).state={value:"London",humidity:0,temp:0,tempunit:"Celsius",weather:""},o.handleChange=o.handleChange.bind(Object(m.a)(o)),o.onChangeValue=o.onChangeValue.bind(Object(m.a)(o)),o.handleSubmit=o.handleSubmit.bind(Object(m.a)(o)),o.weatherCurrentLocation=o.weatherCurrentLocation.bind(Object(m.a)(o)),o}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.weatherCurrentLocation()}},{key:"weatherCurrentLocation",value:function(){var e=this;navigator.geolocation?navigator.geolocation.getCurrentPosition((function(t){(function(e,t){return j.apply(this,arguments)})(t.coords.longitude,t.coords.latitude).then((function(t){e.setState({value:t.name,temp:t.main.temp,humidity:t.main.humidity,weather:t.weather[0].main}),f(e.state.weather)}))})):C(this.state.value).then((function(t){e.setState({temp:t.main.temp,humidity:t.main.humidity,weather:t.weather[0].main}),f(e.state.weather)}))}},{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"onChangeValue",value:function(e){this.setState({tempunit:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this;""!==this.state.value&&C(this.state.value).then((function(e){t.setState({temp:e.main.temp,humidity:e.main.humidity,weather:e.weather[0].main}),f(t.state.weather)})),e.preventDefault()}},{key:"render",value:function(){return Object(w.jsxs)("div",{className:"App",id:"App",children:[Object(w.jsxs)("div",{id:"nav",children:[Object(w.jsx)("button",{disabled:!0===navigator.geolocation,onClick:this.weatherCurrentLocation,children:"  "}),Object(w.jsxs)("form",{id:"input",onSubmit:this.handleSubmit,children:[Object(w.jsx)("input",{type:"text",id:"textinput",placeholder:"City Name",value:this.state.value,onChange:this.handleChange}),Object(w.jsxs)("select",{id:"tempform",name:"tempunit",onChange:this.onChangeValue,children:[Object(w.jsx)("option",{value:"Celsius",children:"\xb0C"}),Object(w.jsx)("option",{value:"Fahrenheit",children:"\xb0F"}),Object(w.jsx)("option",{value:"Kelvin",children:"\xb0K"})]})]})]}),Object(w.jsx)("div",{id:"bottombackground"}),Object(w.jsx)(M,{temp:this.state.temp,humidity:this.state.humidity,weather:this.state.weather,tempunit:this.state.tempunit})]})}}]),n}(r.a.Component),B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,o=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),o(e),r(e),a(e),i(e)}))};i.a.render(Object(w.jsx)(r.a.StrictMode,{children:Object(w.jsx)(E,{})}),document.getElementById("root")),B()},6:function(e,t,n){}},[[19,1,2]]]);
//# sourceMappingURL=main.6b375126.chunk.js.map