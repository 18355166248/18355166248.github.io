(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{527:function(t,a,n){"use strict";n.r(a);var e=n(45),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"numadd"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#numadd"}},[t._v("#")]),t._v(" numAdd")]),t._v(" "),n("p",[t._v('let a = "9007199254740991";\nlet b = "1234567899999999999";')]),t._v(" "),n("p",[t._v("function add(a, b) {\nlet maxLength = Math.max(a.length, b.length);")]),t._v(" "),n("p",[t._v("a = a.padStart(maxLength, 0);\nb = b.padStart(maxLength, 0);")]),t._v(" "),n("p",[t._v('let t = 0;\nlet f = 0;\nlet sum = "";\nfor (let i = maxLength - 1; i >= 0; i--) {\nt = parseFloat(a[i]) + parseFloat(b[i]) + f;\nf = Math.floor(t / 10);')]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("sum = (t % 10) + sum;\n")])])]),n("p",[t._v("}")]),t._v(" "),n("p",[t._v('if (f > 1) {\nsum = "1" + sum;\n}')]),t._v(" "),n("p",[t._v("return sum;\n}")]),t._v(" "),n("p",[t._v("console.log(add(a, b));")])])}),[],!1,null,null,null);a.default=s.exports}}]);