(this["webpackJsonpstar-match-game"]=this["webpackJsonpstar-match-game"]||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),c=a.n(r),u=a(3),s=a.n(u),o={sum:function(e){return e.reduce((function(e,t){return e+t}),0)},range:function(e,t){return Array.from({length:t-e+1},(function(t,a){return e+a}))},random:function(e,t){return e+Math.floor(Math.random()*(t-e+1))},randomSumIn:function(e,t){for(var a=[[]],n=[],r=0;r<e.length;r++)for(var c=0,u=a.length;c<u;c++){var s=a[c].concat(e[r]),i=o.sum(s);i<=t&&(a.push(s),n.push(i))}return n[o.random(0,n.length-1)]}},i=o,l=function(e){return c.a.createElement(c.a.Fragment,null,i.range(1,e.count).map((function(e){return c.a.createElement("div",{key:e,className:"star"})})))},m={available:"lightgray",used:"lightgreen",wrong:"lightcoral",candidate:"deepskyblue"},f=function(e){return c.a.createElement("button",{className:"number",style:{backgroundColor:m[e.status]},onClick:function(){return e.onClick(e.number,e.status)}},e.number)},d=function(e){return c.a.createElement("div",{className:"game-done"},c.a.createElement("div",{className:"message",style:{color:"lost"===e.gameStatus?"red":"green"}},"lost"===e.gameStatus?"Game over":"Nice!"),c.a.createElement("button",{onClick:e.onClick},"Play Again"))},g=function(e){var t=function(){var e=Object(r.useState)(i.random(1,9)),t=Object(n.a)(e,2),a=t[0],c=t[1],u=Object(r.useState)(i.range(1,9)),s=Object(n.a)(u,2),o=s[0],l=s[1],m=Object(r.useState)([]),f=Object(n.a)(m,2),d=f[0],g=f[1],b=Object(r.useState)(10),v=Object(n.a)(b,2),h=v[0],E=v[1];Object(r.useEffect)((function(){if(h>0&&o.length>0){var e=setTimeout((function(){return E(h-1)}),1e3);return function(){return clearTimeout(e)}}}));return{stars:a,availableNums:o,candidateNums:d,secondsLeft:h,setGameState:function(e){if(i.sum(e)!==a)g(e);else{var t=o.filter((function(t){return!e.includes(t)}));c(i.randomSumIn(t,9)),l(t),g([])}}}}(),a=t.stars,u=t.availableNums,s=t.candidateNums,o=t.secondsLeft,m=t.setGameState,g=i.sum(s)>a,b=0===u.length?"won":0===o?"lost":"active",v=(u.length,function(e){return u.includes(e)?s.includes(e)?g?"wrong":"candidate":"available":"used"}),h=function(e,t){if("active"===b&&"used"!=t){var a="available"===t?s.concat(e):s.filter((function(t){return t!==e}));m(a)}};return c.a.createElement("div",{className:"game"},c.a.createElement("div",{className:"help"},"Pick 1 or more numbers that sum to the number of stars"),c.a.createElement("div",{className:"body"},c.a.createElement("div",{className:"left"},"active"!==b?c.a.createElement(d,{onClick:e.startNewGame,gameStatus:b}):c.a.createElement(l,{count:a})),c.a.createElement("div",{className:"right"},i.range(1,9).map((function(e){return c.a.createElement(f,{key:e,status:v(e),number:e,onClick:h})})))),c.a.createElement("div",{className:"timer"},"Time Remaining: ",o))},b=(a(9),function(){var e=Object(r.useState)(1),t=Object(n.a)(e,2),a=t[0],u=t[1];return c.a.createElement(g,{key:a,startNewGame:function(){return u(a+1)}})});s.a.render(c.a.createElement(b,null),document.getElementById("root"))},4:function(e,t,a){e.exports=a(10)},9:function(e,t,a){}},[[4,1,2]]]);
//# sourceMappingURL=main.f569f162.chunk.js.map