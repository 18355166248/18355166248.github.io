(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{551:function(n,e,s){"use strict";s.r(e);var r=s(45),t=Object(r.a)({},(function(){var n=this,e=n.$createElement,s=n._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h1",{attrs:{id:"发布订阅"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发布订阅"}},[n._v("#")]),n._v(" 发布订阅")]),n._v(" "),s("p",[n._v("class EventBus {\nconstructor() {\nthis.task = {};\n}")]),n._v(" "),s("p",[n._v("on = function (key, cb) {\nif (Array.isArray(this.task[key])) {\nthis.task[key].push(cb);\n} else {\nthis.task[key] = [cb];\n}\n};\nemit = function () {\nvar key = arguments[0];\nvar args = Array.prototype.slice.call(arguments, 1);\nvar cbArr = this.task[key];\nif (Array.isArray(cbArr) && cbArr.length > 0) {\ncbArr.forEach((cb) => {\ncb(args);\n});\n}\n};")]),n._v(" "),s("p",[n._v("removeOn = function (key, cb) {\nvar cbArr = this.task[key];\nif (!Array.isArray(cbArr)) return;")]),n._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[n._v("for (let i = 0; i < cbArr.length; i++) {\n  if (cbArr[i] === cb) {\n    cbArr.splice(i, 1);\n    break;\n  }\n}\n")])])]),s("p",[n._v("};\n}")]),n._v(" "),s("p",[n._v("const message = new EventBus();")]),n._v(" "),s("p",[n._v("function fn1() {\nconsole.log('fn1', [...arguments]);\n}")]),n._v(" "),s("p",[n._v("function fn2() {\nconsole.log('fn2', [...arguments]);\n}")]),n._v(" "),s("p",[n._v("message.on('messageClick', fn1);")]),n._v(" "),s("p",[n._v("message.on('messageClick', fn2);")]),n._v(" "),s("p",[n._v("message.emit('messageClick', 1, 2, 3, 4);")]),n._v(" "),s("p",[n._v("message.removeOn('messageClick', fn1);")]),n._v(" "),s("p",[n._v("message.emit('messageClick', 1, 2, 3, 4);")])])}),[],!1,null,null,null);e.default=t.exports}}]);