(window.webpackJsonp=window.webpackJsonp||[]).push([[309],{714:function(s,t,n){"use strict";n.r(t);var a=n(45),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"jenkins-介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#jenkins-介绍"}},[s._v("#")]),s._v(" Jenkins 介绍")]),s._v(" "),n("p",[s._v("Jenkins 是一款开源 CI&CD 软件，用于自动化各种任务，包括构建、测试和部署软件。")]),s._v(" "),n("p",[s._v("Jenkins 支持各种运行方式，可通过系统包、Docker 或者通过一个独立的 Java 程序。")]),s._v(" "),n("h3",{attrs:{id:"前置需要"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前置需要"}},[s._v("#")]),s._v(" 前置需要")]),s._v(" "),n("ol",[n("li",[s._v("Java 8 ( JRE 或者 JDK 都可以)")]),s._v(" "),n("li",[s._v("Docker （导航到网站顶部的 Get Docker 链接以访问适合您平台的 Docker 下载）(也可以不需要, 使用安装包就行)")])]),s._v(" "),n("h3",{attrs:{id:"安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),n("p",[s._v("去官网下载包 或者 docker 安装, 安装过程中可能会有权限问题, 我再 Mac 上安装的时候, 后期遇到很多权限问题这里给出几个解决办法:")]),s._v(" "),n("ol",[n("li",[s._v("sudo chmod -R 777 需要赋予权限的文件夹路径"),n("text-line",{attrs:{txt:"(一定要加 sudo)"}})],1),s._v(" "),n("li",[s._v("右击文件夹或者文件, 选择显示简介, 设置权限读与写")])]),s._v(" "),n("h3",{attrs:{id:"注意点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#注意点"}},[s._v("#")]),s._v(" 注意点")]),s._v(" "),n("ol",[n("li",[s._v("默认是 8080 端口 localhost:8080, 可以修改! 如果需要需改, 不仅可以在 jenkins 登录后的页面的系统设置里面修改, 也可以在文件中进行修改!")])]),s._v(" "),n("h4",{attrs:{id:"xml-设定文件方式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#xml-设定文件方式"}},[s._v("#")]),s._v(" xml 设定文件方式")]),s._v(" "),n("p",[s._v("通过如下 xml 设定文件即可修改 Jenkins 的 root URL")]),s._v(" "),n("ul",[n("li",[s._v("文件名称: jenkins.model.JenkinsLocationConfiguration.xml")]),s._v(" "),n("li",[s._v("放置路径: ${JENKINS_HOME}")]),s._v(" "),n("li",[s._v("起效方式: Jenkins 服务重启之后")]),s._v(" "),n("li",[s._v("文件内容示例")])]),s._v(" "),n("div",{staticClass:"language-xml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token prolog"}},[s._v("<?xml version='1.1' encoding='UTF-8'?>")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("jenkins.model.JenkinsLocationConfiguration")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("adminAddress")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("643546122@qq.com"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("adminAddress")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("jenkinsUrl")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("http://localhost:8080"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("jenkinsUrl")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("jenkins.model.JenkinsLocationConfiguration")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[n("a",{attrs:{href:"https://blog.csdn.net/liumiaocn/article/details/94379257",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考地址"),n("OutboundLink")],1)]),s._v(" "),n("h3",{attrs:{id:"常用方法快捷命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#常用方法快捷命令"}},[s._v("#")]),s._v(" 常用方法快捷命令")]),s._v(" "),n("ol",[n("li",[s._v("安装包安装的 Jenkins, 修改默认端口的方法：")])]),s._v(" "),n("ul",[n("li",[s._v("先关闭 jenkins ;")]),s._v(" "),n("li",[s._v("命令行下修改端口：sudo defaults write /Library/Preferences/org.jenkins-ci httpPort 7071")]),s._v(" "),n("li",[s._v("启动 jenkins： sudo launchctl load /Library/LaunchDaemons/org.jenkins-ci.plist")]),s._v(" "),n("li",[s._v("停止 jenkins：sudo launchctl unload /Library/LaunchDaemons/org.jenkins-ci.plist")])]),s._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[s._v("用 brew 安装的的 Jenkins, 修改默认端口的方法：")])]),s._v(" "),n("ul",[n("li",[s._v("打开文件 vi /usr/local/opt/jenkins/homebrew.mxcl.jenkins.plist 修改默认端口号")]),s._v(" "),n("li",[s._v("启动 jenkins： brew services start jenkins")]),s._v(" "),n("li",[s._v("停止 jenkins：brew services stop jenkins")]),s._v(" "),n("li",[s._v("重启 Jenkins：brew services restart jenkins")]),s._v(" "),n("li",[s._v("更新：切换到目录 cd ~/.jenkins，然后用最新下载的 war 包替换文件夹中的 war")])]),s._v(" "),n("ol",{attrs:{start:"3"}},[n("li",[s._v("修改 jenkins wrokSpace 目录 "),n("text-line",{attrs:{text:"注意：在 Jenkins 运行时是不能更改的. 请先将 Jenkins 停止运行。"}})],1)]),s._v(" "),n("ul",[n("li",[n("p",[s._v("/Library/LaunchDaemons #编缉里面的 jenkinshome 和 username\nsudo vim org.jenkins-ci.plist")])]),s._v(" "),n("li",[n("p",[s._v("修改环境变量 (变量名: JENKINS_HOME)")])]),s._v(" "),n("li",[n("p",[s._v("在启动 Web 容器之前设置 JENKINS_HOME 环境变量.")]),s._v(" "),n("p",[s._v("用 root 用户登录\n编辑 profile 文件：vi ~/.zshrc\n在最后加入：export JENKINS_HOME=xxxx\n保存，退出后执行：source ~/.zshrc\n让配置生效")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);