(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{523:function(n,e,o){"use strict";o.r(e);var t=o(45),l=Object(t.a)({},(function(){var n=this,e=n.$createElement,o=n._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[o("h1",{attrs:{id:"deepclone深拷贝"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#deepclone深拷贝"}},[n._v("#")]),n._v(" deepClone深拷贝")]),n._v(" "),o("p",[n._v('const obj = {\na: [1, 2, null],\nb: {\nc: 2,\nd: function() {\nthis.c = 3;\nconsole.log("obj.b.d");\n},\ne: undefined,\n},\ne: null,\nf: () => {\nconsole.log("hello");\n},\ng: undefined,\n};\nobj.target = obj;')]),n._v(" "),o("p",[n._v('// 首先考虑是不是对象 如果不是对象 就直接返回赋值\n// 数组类型判断也是对象 所以在还得二次判断是不是数组, 进行初始化数据格式\n// for in 循环遍历对象(数组)进行赋值\n// 可能存在循环引用, 所以需要用一个哈希缓存之前设置过的对象(数组)\nfunction deepClone(obj, map = new WeakMap()) {\nif (typeof obj === "object" && obj !== null) {\nconst cloneObj = Array.isArray ? [] : {};')]),n._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[n._v("if (map.get(obj)) return map.get(obj);\n\nmap.set(obj, cloneObj);\nfor (const key in obj) {\n  cloneObj[key] = deepClone(obj[key], map);\n}\n\nreturn cloneObj;\n")])])]),o("p",[n._v("} else {\nreturn obj;\n}\n}")]),n._v(" "),o("p",[n._v("const cloneObj1 = deepClone(obj);\n// obj.f = 666;\nconsole.log(cloneObj1);")])])}),[],!1,null,null,null);e.default=l.exports}}]);