(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{423:function(t,n,r){"use strict";r.r(n);var e=r(45),o=Object(e.a)({},(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"_111-最长单词"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_111-最长单词"}},[t._v("#")]),t._v(" 111.最长单词")]),t._v(" "),r("p",[t._v("function longWord(words) {\nwords.sort((a, b) => a.length - b.length);\nconst wordsSet = new Set(words);")]),t._v(" "),r("p",[t._v("for (let i = words.length - 1; i >= 0; i--) {\nconst word = words[i];\nwordsSet.delete(word);")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[t._v("if (find(wordsSet, word)) return word;\n")])])]),r("p",[t._v("}")]),t._v(" "),r("p",[t._v('return "";\n}')]),t._v(" "),r("p",[t._v("function find(set, word) {\nif (!word || word.length === 0) return true;")]),t._v(" "),r("p",[t._v("for (let i = 0; i < word.length; i++) {\nif (set.has(word.substring(0, i + 1)) && find(set, word.substring(i + 1)))\nreturn true;\n}\n}")]),t._v(" "),r("p",[t._v('const a = ["cat", "banana", "dog", "nana", "walk", "walker", "dogwalker"];')]),t._v(" "),r("p",[t._v("console.log(longWord(a));")])])}),[],!1,null,null,null);n.default=o.exports}}]);