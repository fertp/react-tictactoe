(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{13:function(e,t,c){},8:function(e,t,c){"use strict";c.r(t);var n=c(7),r=c(3),s=c(1),a=c(6),i=c.n(a),o=(c(13),c(0)),u=function(e){return Object(o.jsx)("button",{className:"square",onClick:e.onClick,children:e.value})},l=function(e){var t=e.squares,c=e.onClick,n=function(e){return Object(o.jsx)(u,{value:t[e],onClick:function(){return c(e)}})};return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"board-row",children:[n(0),n(1),n(2)]}),Object(o.jsxs)("div",{className:"board-row",children:[n(3),n(4),n(5)]}),Object(o.jsxs)("div",{className:"board-row",children:[n(6),n(7),n(8)]})]})},j=function(e){var t,c=Object(s.useState)([{squares:Array(9).fill(null)}]),a=Object(r.a)(c,2),i=a[0],u=a[1],j=Object(s.useState)(0),d=Object(r.a)(j,2),O=d[0],h=d[1],v=Object(s.useState)(!0),f=Object(r.a)(v,2),x=f[0],m=f[1],g=i,k=g[O],q=b(k.squares),N=g.map((function(e,t){var c=t?"Go to move #"+t:"Go to game start";return Object(o.jsx)("li",{children:Object(o.jsx)("button",{onClick:function(){return function(e){h(e),m(e%2===0)}(t)},children:c})},t)}));return t=q?"Winner "+q:"Next player: "+(x?"X":"O"),Object(o.jsxs)("div",{className:"game",children:[Object(o.jsx)("div",{className:"game-board",children:Object(o.jsx)(l,{squares:k.squares,onClick:function(e){return function(e){var t=i.slice(0,O+1),c=t[t.length-1].squares.slice();b(c)||c[e]||(c[e]=x?"X":"O",u([].concat(Object(n.a)(t),[{squares:c}])),h(t.length),m(!x))}(e)}})}),Object(o.jsxs)("div",{className:"game-info",children:[Object(o.jsx)("div",{children:t}),Object(o.jsx)("ol",{children:N})]})]})};function b(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],c=0;c<t.length;c++){var n=Object(r.a)(t[c],3),s=n[0],a=n[1],i=n[2];if(e[s]&&e[s]===e[a]&&e[s]===e[i])return e[s]}return null}i.a.render(Object(o.jsx)(j,{}),document.getElementById("root"))}},[[8,1,2]]]);
//# sourceMappingURL=main.56adccbd.chunk.js.map