(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{312:function(t,a,s){t.exports=s.p+"assets/img/httpHistory.d1d0d293.png"},313:function(t,a,s){t.exports=s.p+"assets/img/httpRequestHeader.676f6245.png"},314:function(t,a,s){t.exports=s.p+"assets/img/cache1.05d0c27b.png"},679:function(t,a,s){"use strict";s.r(a);var e=s(14),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"http-知识点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-知识点"}},[t._v("#")]),t._v(" Http 知识点")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#_1-http1-x-和-http2-的区别"}},[t._v("1. http1.x 和 http2 的区别")])]),a("li",[a("a",{attrs:{href:"#_2-http-和-https-的区别"}},[t._v("2. http 和 https 的区别")])]),a("li",[a("a",{attrs:{href:"#http-里面的-code-码"}},[t._v("http 里面的 code 码")])]),a("li",[a("a",{attrs:{href:"#nginx-配置跨域的参数"}},[t._v("nginx 配置跨域的参数")]),a("ul",[a("li",[a("a",{attrs:{href:"#说明"}},[t._v("说明")])])])]),a("li",[a("a",{attrs:{href:"#http-报文包含内容"}},[t._v("HTTP 报文包含内容")]),a("ul",[a("li",[a("a",{attrs:{href:"#请求报文结构"}},[t._v("请求报文结构")])]),a("li",[a("a",{attrs:{href:"#请求的头部信息"}},[t._v("请求的头部信息")])]),a("li",[a("a",{attrs:{href:"#响应报文结构"}},[t._v("响应报文结构")])]),a("li",[a("a",{attrs:{href:"#响应的头部信息"}},[t._v("响应的头部信息")])])])]),a("li",[a("a",{attrs:{href:"#http-缓存策略"}},[t._v("http 缓存策略")])]),a("li",[a("a",{attrs:{href:"#http-缓存详解"}},[t._v("http 缓存详解")]),a("ul",[a("li",[a("a",{attrs:{href:"#缓存相关-header"}},[t._v("缓存相关 header")]),a("ul",[a("li",[a("a",{attrs:{href:"#_1-expires"}},[t._v("1. Expires")])]),a("li",[a("a",{attrs:{href:"#_2-last-modified-if-modified-since"}},[t._v("2. Last-Modified && If-Modified-Since")])]),a("li",[a("a",{attrs:{href:"#_3-etag-if-none-match"}},[t._v("3. Etag && If-None-Match")])]),a("li",[a("a",{attrs:{href:"#_2-cache-control"}},[t._v("2. Cache-Control")])])])]),a("li",[a("a",{attrs:{href:"#http-缓存模拟场景"}},[t._v("http 缓存模拟场景")])]),a("li",[a("a",{attrs:{href:"#最后"}},[t._v("最后")])])])]),a("li",[a("a",{attrs:{href:"#三次握手和四次挥手"}},[t._v("三次握手和四次挥手")])]),a("li",[a("a",{attrs:{href:"#memory-cache-和-disk-cache-的区别-除此之外还有别的浏览器缓存吗"}},[t._v("memory cache 和 disk cache 的区别,除此之外还有别的浏览器缓存吗?")]),a("ul",[a("li",[a("a",{attrs:{href:"#浏览器缓存过程"}},[t._v("浏览器缓存过程")])]),a("li",[a("a",{attrs:{href:"#浏览器缓存来源"}},[t._v("浏览器缓存来源")])])])]),a("li",[a("a",{attrs:{href:"#前端缓存机制-如果去掉-etags-last-modefied-cache-control-这些控制缓存的字段-浏览器会怎么处理缓存"}},[t._v("前端缓存机制，如果去掉 etags\\last-modefied\\cache-control 这些控制缓存的字段，浏览器会怎么处理缓存")])]),a("li",[a("a",{attrs:{href:"#说一下-http1-1-的-keep-alive"}},[t._v("说一下 http1.1 的 keep-alive")])]),a("li",[a("a",{attrs:{href:"#http-1-x-keep-alive-与-http-2-多路复用区别"}},[t._v("HTTP/1.x keep-alive 与 HTTP/2 多路复用区别：")])]),a("li",[a("a",{attrs:{href:"#tcp-与-udp-的区别"}},[t._v("tcp 与 udp 的区别")])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"_1-http1-x-和-http2-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-http1-x-和-http2-的区别"}},[t._v("#")]),t._v(" 1. http1.x 和 http2 的区别")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("点击")]),t._v(" "),a("p",[a("img",{attrs:{src:s(312),alt:"Image from alias"}})]),t._v(" "),a("ol",[a("li",[t._v("http2 使用的是二进制传送, http1.X 用的是文本(字符串)传送")]),t._v(" "),a("li",[t._v("http2 支持多路复用")]),t._v(" "),a("li",[t._v("http2 头部压缩 http2 通过 gzip 和 compress 压缩头部再发送, 同时客户端和服务端会同时维护一张表, 所有字典都会记录在表中, 这样后面每次传输只需要传送表里面的索引 id 就行, 通过 id 从表中查询")]),t._v(" "),a("li",[t._v("http2 支持在未经客户端许可的情况下, 主动向客户端推送内容")])])]),t._v(" "),a("h2",{attrs:{id:"_2-http-和-https-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-http-和-https-的区别"}},[t._v("#")]),t._v(" 2. http 和 https 的区别")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("点击")]),t._v(" "),a("ol",[a("li",[t._v("https 需要协议证书(需要钱)")]),t._v(" "),a("li",[t._v("http 协议运行在 TCP 之上, 所有传输的内容都是明文, https 运行在 SSL/TLS 之上, SSL/TLS 运行在 TCP 之上, 所有传输的内容都是经过加密的")]),t._v(" "),a("li",[t._v("http 是对称加密, https 是用了非对称加密+对称加密的方式")]),t._v(" "),a("li",[t._v("https 用的 443 端口, http 用的是 80 端口")])])]),t._v(" "),a("h2",{attrs:{id:"http-里面的-code-码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-里面的-code-码"}},[t._v("#")]),t._v(" http 里面的 code 码")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("点击")]),t._v(" "),a("ol",[a("li",[t._v("2 开头 (请求成功)")])]),t._v(" "),a("ul",[a("li",[t._v("200 成功 服务器已经成功处理了请求")]),t._v(" "),a("li",[t._v("201 已创建 请求成功服务器创建了新的资源")]),t._v(" "),a("li",[t._v("202 已接收 服务器已经接受请求, 但尚未处理")]),t._v(" "),a("li",[t._v("203 非授权信息 服务器已经成功处理了请求, 但返回的信息可能来自另一个源")]),t._v(" "),a("li",[t._v("204 无内容 服务器成功处理了请求, 但没有返回任何内容 表单提交只需要知道成功失败(提高性能)")]),t._v(" "),a("li",[t._v("205 重置内容 服务器成功处理了请求, 但没有返回任何内容")]),t._v(" "),a("li",[t._v("206 部分内容 服务器成功处理了部分请求 (一个范围下载)")])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("3 开头 (请求被重定向) 表示要完成请求, 需要进一步操作")])]),t._v(" "),a("ul",[a("li",[t._v("300 (多种选择)")]),t._v(" "),a("li",[t._v("301 (永久移动) 请求的网页已经永久移动到新位置")]),t._v(" "),a("li",[t._v("302 (临时移动)")]),t._v(" "),a("li",[t._v("303 (查看其他位置)")]),t._v(" "),a("li",[t._v("304 (未修改)")]),t._v(" "),a("li",[t._v("305 (使用代理)")]),t._v(" "),a("li",[t._v("307 (临时重定向)")])]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("4 开头 (请求错误)")])]),t._v(" "),a("ul",[a("li",[t._v("400 (错误请求) 服务器不理解")]),t._v(" "),a("li",[t._v("401 (未授权) 请求要求身份验证")]),t._v(" "),a("li",[t._v("403 (禁止) 服务器拒绝请求")]),t._v(" "),a("li",[t._v("404 (未找到) 服务器找到请求的网页")]),t._v(" "),a("li",[t._v("405 (方法禁用) 禁止请求中指定的方法")]),t._v(" "),a("li",[t._v("406 (不接受)")]),t._v(" "),a("li",[t._v("407 (需要代替授权) 与 401 很像 不过要求请求者授权使用代理")]),t._v(" "),a("li",[t._v("408 (请求超时)")]),t._v(" "),a("li",[t._v("409 (冲突)")]),t._v(" "),a("li",[t._v("410 (已删除)")]),t._v(" "),a("li",[t._v("411 (需要有效长度)")]),t._v(" "),a("li",[t._v("412 (未满足前提条件)")]),t._v(" "),a("li",[t._v("413 (请求实体过大)")]),t._v(" "),a("li",[t._v("414 (请求 url 过长)")]),t._v(" "),a("li",[t._v("415 (不支持的媒体类型)")]),t._v(" "),a("li",[t._v("416 (请求范围不符合要求)")]),t._v(" "),a("li",[t._v("417 (为满足期望值)")])]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[t._v("5 开头 (服务器报错)")])]),t._v(" "),a("ul",[a("li",[t._v("500 (服务器内部错误)")]),t._v(" "),a("li",[t._v("501 (尚未实施)")]),t._v(" "),a("li",[t._v("502 (错误网关)")]),t._v(" "),a("li",[t._v("503 (服务不可用) 通常只是暂时状态")]),t._v(" "),a("li",[t._v("504 (网管超时)")]),t._v(" "),a("li",[t._v("505 (http 版本不受支持) 服务器不支持请求中所用的 http 版本")])])]),t._v(" "),a("h2",{attrs:{id:"nginx-配置跨域的参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-配置跨域的参数"}},[t._v("#")]),t._v(" nginx 配置跨域的参数")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("点击")]),t._v(" "),a("div",{staticClass:"language-nginx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" /")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("add_header")]),t._v(" Access-Control-Allow-Origin *")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("add_header")]),t._v(" Access-Control-Allow-Methods "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GET, POST, OPTIONS'")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token directive"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("add_header")]),t._v(" Access-Control-Allow-Headers "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'DNT X-Mx-ReaToekn,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization'")]),t._v("\n\n  if ("),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$request_method")]),t._v(" = "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'OPTIONS'")]),t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    return 204\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("h4",{attrs:{id:"说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[t._v("#")]),t._v(" 说明")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Access-Control-Allow-Origin: *\n服务器默认不允许跨域.配置上面表示服务器可以接受所有的请求源")])]),t._v(" "),a("li",[a("p",[t._v("Access-Control-Allow-Headers 是为了防止出现以下错误：\nRequest header field Content-Type is not allowed by Access-Control-Allow-Headers in preflight response.")])])]),t._v(" "),a("p",[t._v('这个错误表示当前请求 Content-Type 的值不被支持。其实是我们发起了"application/json"的类型请求导致的。这里涉及到一个概念：预检请求（preflight request）,请看下面"预检请求"的介绍。')]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[a("p",[t._v("Access-Control-Allow-Methods 是为了防止出现以下错误：\nContent-Type is not allowed by Access-Control-Allow-Headers in preflight response.")])]),t._v(" "),a("li",[a("p",[t._v('给 OPTIONS 添加 204 的返回，是为了处理在发送 POST 请求时 Nginx 依然拒绝访问的错误\n发送"预检请求"时，需要用到方法 OPTIONS ,所以服务器需要允许该方法。')])])])]),t._v(" "),a("h2",{attrs:{id:"http-报文包含内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-报文包含内容"}},[t._v("#")]),t._v(" HTTP 报文包含内容")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("点击查看")]),t._v(" "),a("h3",{attrs:{id:"请求报文结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请求报文结构"}},[t._v("#")]),t._v(" 请求报文结构")]),t._v(" "),a("ul",[a("li",[t._v("第一行是请求的 url, 请求的方法还有协议版本")]),t._v(" "),a("li",[t._v("接下来多行都是请求手部的 Header, 每个首部都有首部的 key 值, 以及对应的值")]),t._v(" "),a("li",[t._v("一个空行用来区分首部和内容主体 body")]),t._v(" "),a("li",[t._v("最后是请求的内容主体")])]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("GET http://www.example.com/ HTTP/1.1\nAccept:text/html,application/xhtml+xml,application/xml"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("q")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.9")]),t._v(",image/webp,image/apng,*/*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("q")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.8")]),t._v(",application/signed-exchange"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("v")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("b3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("q")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.9")]),t._v("\nAccept-Encoding: gzip, deflate\nAccept-Language: zh-CN,zh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("q")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.9")]),t._v(",en"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("q")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.8")]),t._v("\nCache-Control: max-age"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\nHost: www.example.com\nIf-Modified-Since: Thu, "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(" Oct "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2019")]),t._v(" 07:18:26 GMT\nIf-None-Match: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3147526947+gzip"')]),t._v("\nProxy-Connection: keep-alive\nUpgrade-Insecure-Requests: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nUser-Agent: Mozilla/5.0 xxx\n\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("param1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("param2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br")])]),a("h3",{attrs:{id:"请求的头部信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请求的头部信息"}},[t._v("#")]),t._v(" 请求的头部信息")]),t._v(" "),a("ul",[a("li",[t._v("Accept 浏览器能够处理的内容类型")]),t._v(" "),a("li",[t._v("Accept-Charset 浏览器能够显示的字符集")]),t._v(" "),a("li",[t._v("Accept-Encoding 浏览器处理的压缩编码")]),t._v(" "),a("li",[t._v("Accept-language 浏览器支持的语言")]),t._v(" "),a("li",[t._v("Connection 浏览器和服务器之间的链接类型")]),t._v(" "),a("li",[t._v("Cookie 当前页面设置的任何 cookie")]),t._v(" "),a("li",[t._v("Host 发送请求页面所在的域")]),t._v(" "),a("li",[t._v("Referer 发送请求页面的 url")]),t._v(" "),a("li",[t._v("User-Agent 浏览器的用户代理字符串")])]),t._v(" "),a("p",[a("img",{attrs:{src:s(313),alt:""}})]),t._v(" "),a("h3",{attrs:{id:"响应报文结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#响应报文结构"}},[t._v("#")]),t._v(" 响应报文结构")]),t._v(" "),a("ul",[a("li",[t._v("第一行包含协议版本, 请求的 code 码, 以及描述, 200 表示请求成功了")]),t._v(" "),a("li",[t._v("下面多行也是首部内容")]),t._v(" "),a("li",[t._v("一个空行分割首部和内容主体")]),t._v(" "),a("li",[t._v("最后是响应的内容主体")])]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("HTTP/1.1 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v(" OK\nAge: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("529651")]),t._v("\nCache-Control: max-age"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("604800")]),t._v("\nConnection: keep-alive\nContent-Encoding: "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("gzip")]),t._v("\nContent-Length: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("648")]),t._v("\nContent-Type: text/html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("charset")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("UTF-8\nDate: Mon, 02 Nov "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(":53:39 GMT\nEtag: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3147526947+ident+gzip"')]),t._v("\nExpires: Mon, 09 Nov "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(":53:39 GMT\nKeep-Alive: "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("timeout")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\nLast-Modified: Thu, "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(" Oct "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2019")]),t._v(" 07:18:26 GMT\nProxy-Connection: keep-alive\nServer: ECS "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sjc/16DF"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nVary: Accept-Encoding\nX-Cache: HIT\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("doctype html"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("html"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("head"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("Example Domain"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/body"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/html"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br")])]),a("h3",{attrs:{id:"响应的头部信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#响应的头部信息"}},[t._v("#")]),t._v(" 响应的头部信息")]),t._v(" "),a("ul",[a("li",[t._v("Age 推算资源创建经过时间")]),t._v(" "),a("li",[t._v("Cache-Control 控制 http 缓存 no-cache, no-store, must-revalidate max-age=2592000")]),t._v(" "),a("li",[t._v("Connection 浏览器和服务器之间的链接类型")]),t._v(" "),a("li",[t._v("Content-Encoding 适用的编码方式")]),t._v(" "),a("li",[t._v("Content-Type 表示后面的文档属于什么 MIME 类型")]),t._v(" "),a("li",[t._v("Date 表示消息发送的时间")]),t._v(" "),a("li",[t._v("ETage 资源的匹配信息")]),t._v(" "),a("li",[t._v("Expires 提供一个日期时间, 响应在该日期时间后被认为失效 该时间是 GMT 时间(格林威治)")]),t._v(" "),a("li",[t._v("Last-Modified 资源的最后日期修改时间")]),t._v(" "),a("li",[t._v("Server 服务器名字")])])]),t._v(" "),a("h2",{attrs:{id:"http-缓存策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-缓存策略"}},[t._v("#")]),t._v(" http 缓存策略")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("点击")]),t._v(" "),a("ul",[a("li",[t._v("Expires 告诉浏览器在该时间之前, 可以直接从缓存中获取, 而无需向服务器获取 注意是 GMT 时间(格林威治)")]),t._v(" "),a("li",[t._v("Cache-Control 优先级高于 Expires, 如果同时设置了 Expires 和 Cache-Control, Expires 会被忽略\n"),a("ul",[a("li",[t._v("no-cache 有缓存 但是不直接使用缓存, 需要经过校验")]),t._v(" "),a("li",[t._v("no-store 完全没有缓存 所有的请求都需要发送校验")])])])])]),t._v(" "),a("h2",{attrs:{id:"http-缓存详解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-缓存详解"}},[t._v("#")]),t._v(" http 缓存详解")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("点击查看")]),t._v(" "),a("h3",{attrs:{id:"缓存相关-header"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存相关-header"}},[t._v("#")]),t._v(" 缓存相关 header")]),t._v(" "),a("h4",{attrs:{id:"_1-expires"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-expires"}},[t._v("#")]),t._v(" 1. Expires")]),t._v(" "),a("blockquote",[a("p",[t._v("响应头, 代表该资源的过期时间")])]),t._v(" "),a("p",[t._v("服务器告诉浏览器资源失效时间")]),t._v(" "),a("p",[t._v("缺点: 缓存过期以后, 不管资源是否改变都会再次去获取资源返回给浏览器")]),t._v(" "),a("p",[t._v("参数很多, 比如 max-age")]),t._v(" "),a("h4",{attrs:{id:"_2-last-modified-if-modified-since"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-last-modified-if-modified-since"}},[t._v("#")]),t._v(" 2. Last-Modified && If-Modified-Since")]),t._v(" "),a("blockquote",[a("p",[t._v("Last-Modified 响应头, 资源最近修改时间, 服务器告诉浏览器\nIf-Modified-Since 请求头, 资源最近修改时间, 浏览器告诉服务器吗就是将 Last-Modified 传给服务器")])]),t._v(" "),a("p",[t._v("为了解决 Expires 的缺点, 服务器会在响应头带上 Last-Modified 给浏览器, 当缓存过期以后, 浏览器会将 Last-Modified 的值同归 If-Modified-Since 字段放在请求头带给服务器, 如果字段没有改变, 返回 304 告诉浏览器继续使用缓存, 如果字段改变了, 服务器会生成新的 Expires 和 Last-Modified 带给浏览器, 如此往复")]),t._v(" "),a("p",[t._v("缺点:")]),t._v(" "),a("ol",[a("li",[t._v("Expires 过期不稳定, 服务器可以随意更改")]),t._v(" "),a("li",[t._v("过期时间只能精确到秒, 这里存在问题, 有个资源 1.js, 当一秒内多次请求的话, 如果在这一秒内, 资源已经改变了很多次了, 那么缓存策略在第二次请求的时候发现最后修改时间没有变化, 就会认为文件没有改变, 这样的话, 浏览器就会收到 304, 但是 1.js 已经修改了, 这样的话拿到的就不准确了")]),t._v(" "),a("li",[t._v("如果服务器上的 1.js 被修改了, 但是内容其实没有变化, 这个时候回因为 Last-Modified 变化而重新获取资源发送给浏览器")])]),t._v(" "),a("h4",{attrs:{id:"_3-etag-if-none-match"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-etag-if-none-match"}},[t._v("#")]),t._v(" 3. Etag && If-None-Match")]),t._v(" "),a("blockquote",[a("p",[t._v("Etag 响应头 服务器发送给浏览器 他是资源的唯一 Id 标识 告诉浏览器资源是否改变\nIf-None-Match 请求头 将 ETag 从浏览器发送给服务器, 服务器判断是否改变, 如果没有改变就返回 304, 否则就获取新的资源返回给浏览器, 并附带新的 Etag")])]),t._v(" "),a("p",[t._v("单独用 Last-Modified(最后修改时间)判断有缺陷, 假如文件修改了, 但是文件内容没变, 对于这种请求, 我们可以使用 Etag 来处理.")]),t._v(" "),a("h4",{attrs:{id:"_2-cache-control"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-cache-control"}},[t._v("#")]),t._v(" 2. Cache-Control")]),t._v(" "),a("blockquote",[a("p",[t._v("请求/响应头 缓存控制字段 精确控制缓存字段")])]),t._v(" "),a("p",[t._v("属于新的缓存方案, 权重比 Expires 搞, 精细化也高很多\n详情可以看"),a("img",{attrs:{src:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Cache-Control",alt:"MDN"}})]),t._v(" "),a("p",[t._v("指令:\npublic 可以被任何对象缓存\nprivate 只能被单个用户缓存, 不能被代理服务器缓存\nno-cache 可以缓存, 但每次都要向服务器发送验证请求(协商缓存)\nno-store 不适用任何缓存")]),t._v(" "),a("h3",{attrs:{id:"http-缓存模拟场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-缓存模拟场景"}},[t._v("#")]),t._v(" http 缓存模拟场景")]),t._v(" "),a("ol",[a("li",[t._v("浏览器请求 1.js")]),t._v(" "),a("li",[t._v("服务器返回 1.js, 同时告诉浏览器 Expires(绝对过期时间), 以及 Cache-Control: publish max-age=10(相对过期时间), 以及 1.js 的最后修改时间 Last-Modified 和文件标识 Etag")]),t._v(" "),a("li",[t._v("10s 内再次请求 1.js, 浏览器不发送请求, 直接使用本地缓存")]),t._v(" "),a("li",[t._v("11s 时, 请求 1.js, 带上最后修改时间 If-Modified-Since(Last-Modified), 以及 If-None-Match(Etag)")]),t._v(" "),a("li",[t._v("服务器收到浏览器的 If-Modified-Since 和 If-None-Match, 则比较 If-None-Match 和服务端的 Etag 的值, 忽略掉 If-Modified-Since")]),t._v(" "),a("li",[t._v("1.js 没有变化, 则服务器返回 304")]),t._v(" "),a("li",[t._v("如此往复")])]),t._v(" "),a("h3",{attrs:{id:"最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最后"}},[t._v("#")]),t._v(" 最后")]),t._v(" "),a("p",[t._v("给资源加载后缀或者使用 webpack 打包的时候使用 hash 值命名也可以起到缓存的作用")])]),t._v(" "),a("h2",{attrs:{id:"三次握手和四次挥手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三次握手和四次挥手"}},[t._v("#")]),t._v(" 三次握手和四次挥手")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("点击查看")]),t._v(" "),a("p",[t._v("第一次握手：建立连接时，客户端发送 syn 包（syn=x）到服务器，并进入 SYN_SENT 状态，等待服务器确认；SYN：同步序列编号（Synchronize Sequence Numbers）。")]),t._v(" "),a("p",[t._v("第二次握手：服务器收到 syn 包，必须确认客户的 SYN（ack=x+1），同时自己也发送一个 SYN 包（syn=y），即 SYN+ACK 包，此时服务器进入 SYN_RECV 状态；")]),t._v(" "),a("p",[t._v("第三次握手：客户端收到服务器的 SYN+ACK 包，向服务器发送确认包 ACK(ack=y+1），此包发送完毕，客户端和服务器进入 ESTABLISHED（TCP 连接成功）状态，完成三次握手。")]),t._v(" "),a("p",[t._v("1）客户端进程发出连接释放报文，并且停止发送数据。释放数据报文首部，FIN=1，其序列号为 seq=u（等于前面已经传送过来的数据的最后一个字节的序号加 1），此时，客户端进入 FIN-WAIT-1（终止等待 1）状态。 TCP 规定，FIN 报文段即使不携带数据，也要消耗一个序号。\n2）服务器收到连接释放报文，发出确认报文，ACK=1，ack=u+1，并且带上自己的序列号 seq=v，此时，服务端就进入了 CLOSE-WAIT（关闭等待）状态。TCP 服务器通知高层的应用进程，客户端向服务器的方向就释放了，这时候处于半关闭状态，即客户端已经没有数据要发送了，但是服务器若发送数据，客户端依然要接受。这个状态还要持续一段时间，也就是整个 CLOSE-WAIT 状态持续的时间。\n3）客户端收到服务器的确认请求后，此时，客户端就进入 FIN-WAIT-2（终止等待 2）状态，等待服务器发送连接释放报文（在这之前还需要接受服务器发送的最后的数据）。\n4）服务器将最后的数据发送完毕后，就向客户端发送连接释放报文，FIN=1，ack=u+1，由于在半关闭状态，服务器很可能又发送了一些数据，假定此时的序列号为 seq=w，此时，服务器就进入了 LAST-ACK（最后确认）状态，等待客户端的确认。\n5）客户端收到服务器的连接释放报文后，必须发出确认，ACK=1，ack=w+1，而自己的序列号是 seq=u+1，此时，客户端就进入了 TIME-WAIT（时间等待）状态。注意此时 TCP 连接还没有释放，必须经过 2∗∗MSL（最长报文段寿命）的时间后，当客户端撤销相应的 TCB 后，才进入 CLOSED 状态。\n6）服务器只要收到了客户端发出的确认，立即进入 CLOSED 状态。同样，撤销 TCB 后，就结束了这次的 TCP 连接。可以看到，服务器结束 TCP 连接的时间要比客户端早一些。")]),t._v(" "),a("p",[t._v("常见面试题\n【问题 1】为什么连接的时候是三次握手，关闭的时候却是四次握手？")]),t._v(" "),a("p",[t._v('答：因为当 Server 端收到 Client 端的 SYN 连接请求报文后，可以直接发送 SYN+ACK 报文。其中 ACK 报文是用来应答的，SYN 报文是用来同步的。但是关闭连接时，当 Server 端收到 FIN 报文时，很可能并不会立即关闭 SOCKET，所以只能先回复一个 ACK 报文，告诉 Client 端，"你发的 FIN 报文我收到了"。只有等到我 Server 端所有的报文都发送完了，我才能发送 FIN 报文，因此不能一起发送。故需要四步握手。')]),t._v(" "),a("p",[t._v("【问题 2】为什么 TIME_WAIT 状态需要经过 2MSL(最大报文段生存时间)才能返回到 CLOSE 状态？")]),t._v(" "),a("p",[t._v("答：虽然按道理，四个报文都发送完毕，我们可以直接进入 CLOSE 状态了，但是我们必须假象网络是不可靠的，有可以最后一个 ACK 丢失。所以 TIME_WAIT 状态就是用来重发可能丢失的 ACK 报文。在 Client 发送出最后的 ACK 回复，但该 ACK 可能丢失。Server 如果没有收到 ACK，将不断重复发送 FIN 片段。所以 Client 不能立即关闭，它必须确认 Server 接收到了该 ACK。Client 会在发送出 ACK 之后进入到 TIME_WAIT 状态。Client 会设置一个计时器，等待 2MSL 的时间。如果在该时间内再次收到 FIN，那么 Client 会重发 ACK 并再次等待 2MSL。所谓的 2MSL 是两倍的 MSL(Maximum Segment Lifetime)。MSL 指一个片段在网络中最大的存活时间，2MSL 就是一个发送和一个回复所需的最大时间。如果直到 2MSL，Client 都没有再次收到 FIN，那么 Client 推断 ACK 已经被成功接收，则结束 TCP 连接。")]),t._v(" "),a("p",[t._v("【问题 3】为什么不能用两次握手进行连接？")]),t._v(" "),a("p",[t._v("答：3 次握手完成两个重要的功能，既要双方做好发送数据的准备工作(双方都知道彼此已准备好)，也要允许双方就初始序列号进行协商，这个序列号在握手过程中被发送和确认。")]),t._v(" "),a("p",[t._v("现在把三次握手改成仅需要两次握手，死锁是可能发生的。作为例子，考虑计算机 S 和 C 之间的通信，假定 C 给 S 发送一个连接请求分组，S 收到了这个分组，并发 送了确认应答分组。按照两次握手的协定，S 认为连接已经成功地建立了，可以开始发送数据分组。可是，C 在 S 的应答分组在传输中被丢失的情况下，将不知道 S 是否已准备好，不知道 S 建立什么样的序列号，C 甚至怀疑 S 是否收到自己的连接请求分组。在这种情况下，C 认为连接还未建立成功，将忽略 S 发来的任何数据分 组，只等待连接确认应答分组。而 S 在发出的分组超时后，重复发送同样的分组。这样就形成了死锁。")]),t._v(" "),a("p",[t._v("【问题 4】如果已经建立了连接，但是客户端突然出现故障了怎么办？")]),t._v(" "),a("p",[t._v("TCP 还设有一个保活计时器，显然，客户端如果出现故障，服务器不能一直等下去，白白浪费资源。服务器每收到一次客户端的请求后都会重新复位这个计时器，时间通常是设置为 2 小时，若两小时还没有收到客户端的任何数据，服务器就会发送一个探测报文段，以后每隔 75 秒钟发送一次。若一连发送 10 个探测报文仍然没反应，服务器就认为客户端出了故障，接着就关闭连接。")])]),t._v(" "),a("h2",{attrs:{id:"memory-cache-和-disk-cache-的区别-除此之外还有别的浏览器缓存吗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#memory-cache-和-disk-cache-的区别-除此之外还有别的浏览器缓存吗"}},[t._v("#")]),t._v(" memory cache 和 disk cache 的区别,除此之外还有别的浏览器缓存吗?")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("点击查看")]),t._v(" "),a("ol",[a("li",[t._v("DNS 缓存")]),t._v(" "),a("li",[t._v("本地缓存（Memory Cache）")]),t._v(" "),a("li",[t._v("Http 缓存（也叫 Disk Cache，分为 强缓存 和 协商缓存）")]),t._v(" "),a("li",[t._v("服务端缓存（CDN 缓存)")]),t._v(" "),a("li",[t._v("Service Worker")])]),t._v(" "),a("p",[t._v('<META HTTP-EQUIV="Pragma" CONTENT="no-store">\n含义是让浏览器不缓存当前页面。但是代理服务器不解析 HTML 内容，一般 应用广泛的是用 HTTP 头信息控制缓存。')]),t._v(" "),a("h4",{attrs:{id:"浏览器缓存过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器缓存过程"}},[t._v("#")]),t._v(" 浏览器缓存过程")]),t._v(" "),a("h5",{attrs:{id:"强缓存-expires-cache-contrl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#强缓存-expires-cache-contrl"}},[t._v("#")]),t._v(" 强缓存 Expires Cache-contrl")]),t._v(" "),a("p",[t._v("Expires: 这个是 HTTP1.0 字段，表示缓存到期时间，是绝对时间（当前时间+缓存时间），在响应消息头设置后，在未过期之前步需要再次请求。\nCache-contrl: 表示缓存的最大有效时间，该时间为相对时间。")]),t._v(" "),a("h5",{attrs:{id:"如何设置-http-header-实现-协商缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何设置-http-header-实现-协商缓存"}},[t._v("#")]),t._v(" 如何设置 HTTP Header 实现 协商缓存")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Etag / If-None-Match\nEtag 是 服务器响应请求时，返回 当前资源文件 的一个唯一标识（由服务器生成，一旦资源有更新就会生成新的 Etag 值）。\nIf-None-Match 是客户端再次发起该请求时，携带 上次请求返回的唯一标识 Etag 值，通过此字段值告诉服务器该资源上次请求返回的唯一标识值。\n服务器收到该请求后，发现该请求头中含有 If-None-Match，则会根据 If-None-Match 的值 与 Etag 的值 做对比，")]),t._v(" "),a("p",[t._v("If-None-Match 与 Etag 的值一致，则 代表 服务端的资源在上一次请求到这次请求的期间未发生更新，可 继续使用缓存文件，无须返回资源，状态码为 304；\nIf-None-Match 与 Etag 的值不一致，则 代表 资源发生过更新，须重新返回资源文件，状态码为 200；")])]),t._v(" "),a("li",[a("p",[t._v("Last-Modified / If-Modified-Since\nLast-Modified 是服务器响应请求时，返回该 资源文件 在服务器 最后被 修改 的时间。（由服务器生成，跟随 服务器 返回响应请求头 返回到客户端）\nIf-Modified-Since 是客户端再次发起该请求时，浏览器自动携带上次请求返回的 Last-Modified 值，通过此字段值告诉服务器该资源上次请求返回的 最后被 修改 的时间。（由开发者手动设置）")])])]),t._v(" "),a("p",[t._v("Etag / If-None-Match 优先级 高于 Last-Modified / If-Modified-Since\n二者同时存在时，则只有 Etag / If-None-Match 生效。")]),t._v(" "),a("p",[a("img",{attrs:{src:s(314),alt:""}})]),t._v(" "),a("h5",{attrs:{id:"强缓存-与-协商缓存-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#强缓存-与-协商缓存-的区别"}},[t._v("#")]),t._v(" 强缓存 与 协商缓存 的区别？")]),t._v(" "),a("p",[t._v("强缓存 不发请求到服务器，所以有时候资源更新了浏览器还不知道，但是协商缓存会发请求到服务器，所以资源是否更新，服务器肯定知道。\n大部分 web 服务器 都 默认 开启协商缓存。")]),t._v(" "),a("h5",{attrs:{id:"刷新-对于-强缓存-和-协商缓存-的影响"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#刷新-对于-强缓存-和-协商缓存-的影响"}},[t._v("#")]),t._v(" 刷新 对于 强缓存 和 协商缓存 的影响？")]),t._v(" "),a("p",[t._v("当 ctrl+f5 强制刷新 网页时，直接 从服务器加载，跳过强缓存和协商缓存。\n浏览器地址栏中写入 URL，先检查 强缓存，若失效则检查 协商缓存。（最快）\n当 f5 刷新 网页时，跳过强缓存，但是会检查 协商缓存。")]),t._v(" "),a("h4",{attrs:{id:"浏览器缓存来源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器缓存来源"}},[t._v("#")]),t._v(" 浏览器缓存来源")]),t._v(" "),a("p",[t._v("从缓存位置（来源）和 缓存查找优先级说，浏览器的缓存可以分为四类（Service Worker、Memory Cache、Disk Cache、Push Cache）")]),t._v(" "),a("p",[t._v("查找浏览器缓存时会按顺序查找: Service Worker —> Memory Cache —> Disk Cache —> Push Cache，当依次查找缓存且都没有命中的时候，才会去请求网络")]),t._v(" "),a("h5",{attrs:{id:"service-worker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#service-worker"}},[t._v("#")]),t._v(" Service Worker")]),t._v(" "),a("p",[t._v("Service Worker 可以直接操作缓存，储存在 Application 中的 Cache Storage")]),t._v(" "),a("p",[t._v("Service Worker 没能命中缓存，则会用 fetch()方法继续获取资源")]),t._v(" "),a("h5",{attrs:{id:"link-rel-preload-与-link-rel-prefetch-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#link-rel-preload-与-link-rel-prefetch-的区别"}},[t._v("#")]),t._v(" <link rel= preload> 与 <link rel= prefetch> 的区别？")]),t._v(" "),a("p",[t._v("preload（预加载） 是一个声明式 fetch，可以强制浏览器在不阻塞 document 的 onload 事件的情况下请求资源；\nprefetch（预读取） 告诉浏览器这个 资源将来可能需要，但是 什么时间 加载 这个资源是由浏览器来决定的；")]),t._v(" "),a("p",[t._v("Tips：preload 加载资源一般是当前页面需要的，prefetch 一般是其它页面有可能用到的资源。")])]),t._v(" "),a("h2",{attrs:{id:"前端缓存机制-如果去掉-etags-last-modefied-cache-control-这些控制缓存的字段-浏览器会怎么处理缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端缓存机制-如果去掉-etags-last-modefied-cache-control-这些控制缓存的字段-浏览器会怎么处理缓存"}},[t._v("#")]),t._v(" 前端缓存机制，如果去掉 etags\\last-modefied\\cache-control 这些控制缓存的字段，浏览器会怎么处理缓存")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("点击")]),t._v(" "),a("p",[t._v("TODO: 不准确\nPush Cache\n“推送缓存”是针对 HTTP/2 标准下的推送资源设定的。推送缓存是 session 级别的，当 session 终止时，缓存也随之释放。在以上三种缓存都没有的情况下，它才会被使用。\nPush Cache 是缓存的最后一道防线。浏览器只有在 Memory Cache、HTTP Cache 和 Service Worker Cache 均未命中的情况下才会去询问 Push Cache。")])]),t._v(" "),a("h2",{attrs:{id:"说一下-http1-1-的-keep-alive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#说一下-http1-1-的-keep-alive"}},[t._v("#")]),t._v(" 说一下 http1.1 的 keep-alive")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("点击查看")]),t._v(" "),a("p",[t._v("随着技术的发展，一个网页需要建立很多次短连接，这大大影响了消息的处理，所以 Http 就提出了持续连接的概念")]),t._v(" "),a("p",[t._v("持久连接的主要好处是避免了短连接的每次连接的三次握手和四次挥手的网络交互。")]),t._v(" "),a("p",[t._v("在 Http 协议的 Header 头，有两个 Tag 可以控制这个 keep-alive， Connection: Keep-Alive 和 Keep-Alive:timeout，它们表示的是保持持续连接状态的时间为 timeout 秒。")])]),t._v(" "),a("h2",{attrs:{id:"http-1-x-keep-alive-与-http-2-多路复用区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-1-x-keep-alive-与-http-2-多路复用区别"}},[t._v("#")]),t._v(" HTTP/1.x keep-alive 与 HTTP/2 多路复用区别：")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("点击")]),t._v(" "),a("ol",[a("li",[t._v("HTTP/1.x 是基于文本的，只能整体去传；HTTP/2 是基于二进制流的，可以分解为独立的帧，交错发送")]),t._v(" "),a("li",[t._v("HTTP/1.x keep-alive 必须按照请求发送的顺序返回响应；HTTP/2 多路复用不按序响应")]),t._v(" "),a("li",[t._v("HTTP/1.x keep-alive 为了解决队头阻塞，将同一个页面的资源分散到不同域名下，开启了多个 TCP 连接；HTTP/2 同域名下所有通信都在单个连接上完成")]),t._v(" "),a("li",[t._v("HTTP/1.x keep-alive 单个 TCP 连接在同一时刻只能处理一个请求（两个请求的生命周期不能重叠）；HTTP/2 单个 TCP 同一时刻可以发送多个请求和响应")])])]),t._v(" "),a("h2",{attrs:{id:"tcp-与-udp-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp-与-udp-的区别"}},[t._v("#")]),t._v(" tcp 与 udp 的区别")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("点击")]),t._v(" "),a("p",[t._v("两者的区别：")]),t._v(" "),a("ol",[a("li",[t._v("TCP是面向连接的，UDP是面向无连接的;")]),t._v(" "),a("li",[t._v("UDP程序结构较简单;")]),t._v(" "),a("li",[t._v("TCP是面向字节流的，UDP是基于数据报的;")]),t._v(" "),a("li",[t._v("TCP保证数据正确性，UDP可能丢包;")]),t._v(" "),a("li",[t._v("TCP保证数据顺序，UDP不保证。")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);