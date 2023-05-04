(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{463:function(t,n,a){"use strict";a.r(n);var e=a(45),s=Object(e.a)({},(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_39-组合总和"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_39-组合总和"}},[t._v("#")]),t._v(" 39. 组合总和")]),t._v(" "),a("p",[t._v("// 给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。\n// candidates 中的数字可以无限制重复被选取。\n// 说明：\n// 所有数字（包括 target）都是正整数。\n// 解集不能包含重复的组合。\nvar combinationSum = function(candidates, target) {\nif (candidates.length === 0) return [];\ncandidates = candidates.sort((a, b) => a - b);\nconst totalArr = [];")]),t._v(" "),a("p",[t._v("function dfs(arr, res, start) {\nfor (let i = start; i < candidates.length; i++) {\nconst sum = res + candidates[i];\nif (sum === target) {\ntotalArr.push([...arr, candidates[i]]);\nbreak;\n} else if (sum > target) {\nbreak;\n} else {\ndfs([...arr, candidates[i]], sum, i);\n}\n}\n}")]),t._v(" "),a("p",[t._v("dfs([], 0, 0);")]),t._v(" "),a("p",[t._v("return totalArr;\n};\n// console.log(combinationSum([2, 3, 6, 7], 7));\n// console.log(combinationSum([2, 3, 5], 8));\nconsole.log(combinationSum([2, 7, 6, 3, 5, 1], 9));")])])}),[],!1,null,null,null);n.default=s.exports}}]);