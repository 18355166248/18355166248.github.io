(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{530:function(e,s,t){"use strict";t.r(s);var n=t(45),a=Object(n.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"schedule并发限制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#schedule并发限制"}},[e._v("#")]),e._v(" schedule并发限制")]),e._v(" "),t("p",[e._v("class Scheduler {\nconstructor() {\nthis.max = 2;\nthis.taskNum = 0;\nthis.cacheList = [];\n}\nadd(promiseCreator) {\nreturn new Promise((resolve) => {\nif (this.taskNum < 2) {\nthis.taskNum++;")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("    promiseCreator().then((res) => {\n      resolve(res);\n      this.taskNum--;\n      this.clearCache();\n    });\n  } else {\n    this.cacheList.push({ cb: promiseCreator, resolve });\n    // this.cacheList.unshift({ cb: promiseCreator, resolve });\n  }\n});\n")])])]),t("p",[e._v("}")]),e._v(" "),t("p",[e._v("clearCache() {\nif (this.cacheList.length > 0) {\nconst { cb, resolve } = this.cacheList[0];\nthis.cacheList.splice(0, 1);\ncb().then((res) => {\nresolve(res);\nthis.taskNum--;\nthis.clearCache();\n});")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("  // for (let i = this.cacheList.length - 1; i >= 0; i--) {\n  //   this.taskNum++;\n  //   const { cb, resolve } = this.cacheList[i];\n  //   cb().then((res) => {\n  //     resolve(res);\n  //     this.taskNum--;\n  //     this.cacheList.splice(i, 1);\n  //     this.clearCache();\n  //   });\n\n  //   if (this.taskNum === 2) break;\n  // }\n}\n")])])]),t("p",[e._v("}\n}")]),e._v(" "),t("p",[e._v("const timeout = (time) =>\nnew Promise((resolve) => {\nsetTimeout(resolve, time);\n});")]),e._v(" "),t("p",[e._v("const scheduler = new Scheduler();")]),e._v(" "),t("p",[e._v("const addTask = (time, order) => {\nscheduler\n.add(() => timeout(time))")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v(".then(() => console.log(order));\n")])])]),t("p",[e._v("};")]),e._v(" "),t("p",[e._v('addTask(1000, "1");')]),e._v(" "),t("p",[e._v('addTask(500, "2");')]),e._v(" "),t("p",[e._v('addTask(300, "3");')]),e._v(" "),t("p",[e._v('addTask(400, "4");')])])}),[],!1,null,null,null);s.default=a.exports}}]);