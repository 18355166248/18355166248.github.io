(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{436:function(n,t,e){"use strict";e.r(t);var r=e(45),l=Object(r.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"_114-二叉树展开为链表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_114-二叉树展开为链表"}},[n._v("#")]),n._v(" 114. 二叉树展开为链表")]),n._v(" "),e("p",[n._v("var flatten = function(root) {\nconst arr = []")]),n._v(" "),e("p",[n._v("dfs(root)\nfor (let i = 1; i < arr.length; i++) {\nconst prev = arr[i - 1],\ncur = arr[i]\nprev.left = null\nprev.right = cur\n}")]),n._v(" "),e("p",[n._v("function dfs(node) {\nif (!node) return null")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("arr.push(node)\ndfs(node.left)\ndfs(node.right)\n\nreturn node\n")])])]),e("p",[n._v("}\n}\nconsole.log(\nflatten({\nval: 1,\nleft: {\nval: 2,\nleft: {\nval: 3,\n},\nright: {\nval: 4,\n},\n},\nright: {\nval: 5,\nright: {\nval: 6,\n},\n},\n})\n)\nfunction TreeNode(val, left, right) {\nthis.val = val === undefined ? 0 : val\nthis.left = left === undefined ? null : left\nthis.right = right === undefined ? null : right\n}")])])}),[],!1,null,null,null);t.default=l.exports}}]);