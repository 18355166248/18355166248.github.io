(window.webpackJsonp=window.webpackJsonp||[]).push([[236],{627:function(o,e,t){"use strict";t.r(e);var i=t(45),c=Object(i.a)({},(function(){var o=this,e=o.$createElement,t=o._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[t("h1",{attrs:{id:"cookie"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cookie"}},[o._v("#")]),o._v(" Cookie")]),o._v(" "),t("h2",{attrs:{id:"本地端口通过谷歌插件设置-cookie-查询不到"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本地端口通过谷歌插件设置-cookie-查询不到"}},[o._v("#")]),o._v(" 本地端口通过谷歌插件设置 cookie 查询不到")]),o._v(" "),t("p",[o._v("2021-08-18 下午遇到了一个坑 钻研了半天找到了问题, 记录一下")]),o._v(" "),t("p",[o._v("大部分公司项目是依靠 cookie 做鉴权登录的. 当你在本地启动一个项目 localhost:8000 的时候, 可能会采用将测试环境的 cookie copy 过来进行本地项目登录")]),o._v(" "),t("p",[o._v("假如你是通过谷歌插件 使用 chorme.cookie.set 命令去设置本地 cookie 的时候, 是没有问题的")]),o._v(" "),t("p",[o._v("但是你去控制台 Application -> Cookies 下面是找不到你刚刚设置的 cookie 的.")]),o._v(" "),t("p",[o._v("更为诡异的是你查看你本地接口的请求头 你会发现请求头里面有这些 cookie")]),o._v(" "),t("p",[o._v("经过多次验证查找, 终于被我找到一部分原因了:")]),o._v(" "),t("ol",[t("li",[t("p",[o._v("虽然你设置的 localhost:3000 但是谷歌浏览器是不会管端口号的, 只会将 cookie 设置到 localhost 域名下")])]),o._v(" "),t("li",[t("p",[o._v("想要看到你设置的 cookie 需要去 谷歌浏览器设置中查看, 地址: chrome://settings/siteData, 在这里你搜索 localhost 就可以看到你设置的 cookie 值了")])]),o._v(" "),t("li",[t("p",[o._v("具体为啥看不到 cookie 其实是因为接口的 response.header 下的 set-cookie 里面的 Path 参数在作怪 这个 Path 限制了只能在 该 path 下才能获取到 cookie 所以你再 Applicaiton 下是看不到别的路径的 cookie 的")])])])])}),[],!1,null,null,null);e.default=c.exports}}]);