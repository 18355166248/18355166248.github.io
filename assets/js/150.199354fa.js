(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{536:function(t,n,e){"use strict";e.r(n);var r=e(45),i=Object(r.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"x的平方根"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#x的平方根"}},[t._v("#")]),t._v(" x的平方根")]),t._v(" "),e("p",[t._v("var mySqrt = function(x) {\nif (x < 2) return x;\nlet left = 1,\nright = x;\nwhile (right - left > 1) {\nlet mid = Math.floor((left + right) / 2);\n// 中间值的平方小于x的话, name代表最小值可以变成mid\n// 反之最大值可以变成mid\nif (mid * mid === x) return mid;\nif (mid * mid < x) {\nleft = mid;\n} else {\nright = mid;\n}\n}")]),t._v(" "),e("p",[t._v("return left;\n};")]),t._v(" "),e("p",[t._v("console.log(mySqrt(8));\nconsole.log(mySqrt(5));\nconsole.log(mySqrt(4));")])])}),[],!1,null,null,null);n.default=i.exports}}]);