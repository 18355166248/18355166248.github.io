(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{456:function(s,n,i){"use strict";i.r(n);var d=i(45),e=Object(d.a)({},(function(){var s=this,n=s.$createElement,i=s._self._c||n;return i("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[i("h1",{attrs:{id:"_29-两数相除"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_29-两数相除"}},[s._v("#")]),s._v(" 29. 两数相除")]),s._v(" "),i("p",[s._v("// 给定两个整数，被除数 dividend 和除数 divisor。将两数相除，要求不使用乘法、除法和 mod 运算符。")]),s._v(" "),i("p",[s._v("const { number } = require('yargs')")]),s._v(" "),i("p",[s._v("// 返回被除数 dividend 除以除数 divisor 得到的商。")]),s._v(" "),i("p",[s._v("// 整数除法的结果应当截去（truncate）其小数部分，例如：truncate(8.345) = 8 以及 truncate(-2.7335) = -2")]),s._v(" "),i("p",[s._v("var divide = function(dividend, divisor) {\nif (dividend === -2147483648 && divisor === -1) return 2147483648")]),s._v(" "),i("p",[s._v("let sum = 0,\nt = 0,\nsums = 0,\nts = 0,\nsumss = 0,\ntss = 0,\nres = 0")]),s._v(" "),i("p",[s._v("const flat = dividend ^ divisor\ndividend = dividend < 0 ? dividend : -dividend\ndivisor = divisor < 0 ? divisor : -divisor")]),s._v(" "),i("p",[s._v("while (dividend <= divisor) {\nsum += divisor\nt--\nsums += sum\nts += t\nsumss += sums\ntss += ts\nif (dividend - sumss < 0 && sumss < 0) {\nconsole.log(11, tss)\nres += tss\ndividend -= sumss\n} else {\nres--\ndividend -= divisor\nsum = 0\nt = 0\nsums = 0\nts = 0\nsumss = 0\ntss = 0\n}\n}")]),s._v(" "),i("p",[s._v("return flat < 0 ? -res : res\n}")]),s._v(" "),i("p",[s._v("// console.log(divide(10, 3))\nconsole.log(divide(100, 3))\n// console.log(divide(7, 3))\n// console.log(divide(7, -3))\n// console.log(divide(0, 1))\n// console.log(divide(-1, 1))\n// console.log(divide(-1, -1))\n// console.log(divide(-2147483648, -1))")])])}),[],!1,null,null,null);n.default=e.exports}}]);