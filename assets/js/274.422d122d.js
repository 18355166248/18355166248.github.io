(window.webpackJsonp=window.webpackJsonp||[]).push([[274],{703:function(a,s,t){"use strict";t.r(s);var e=t(45),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"正则表达式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式"}},[a._v("#")]),a._v(" 正则表达式")]),a._v(" "),t("p",[a._v("正则表达式（Regular Expression 或 Regex），是用于定义某种特定搜索模式的字符组合。正则表达式可用于匹配、查找和替换文本中的字符，进行输入数据的验证，查找英文单词的拼写错误等。")]),a._v(" "),t("h3",{attrs:{id:"调试工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#调试工具"}},[a._v("#")]),a._v(" 调试工具")]),a._v(" "),t("ol",[t("li",[a._v("Regex101（https://regex101.com/）")]),a._v(" "),t("li",[a._v("Regexr（https://regexr.com/）")])]),a._v(" "),t("h2",{attrs:{id:"开始"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开始"}},[a._v("#")]),a._v(" 开始")]),a._v(" "),t("h3",{attrs:{id:"_1-flags-标志符或修饰符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-flags-标志符或修饰符"}},[a._v("#")]),a._v(" 1. Flags（标志符或修饰符）")]),a._v(" "),t("p",[a._v("Flags 写在结束的/之后，可以影响整个正则表达式的匹配行为。常见的 flags 有：")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("g：全局匹配（global）；正则表达式默认只会返回第一个匹配结果，使用标志符 g 则可以返回所有匹配")])]),a._v(" "),t("li",[t("p",[a._v("i：忽略大小写（case-insensitive）；在匹配时忽略英文字母的大小写")])]),a._v(" "),t("li",[t("p",[a._v("m：多行匹配（multiline）；将开始和结束字符（^和$）视为在多行上工作，即分别匹配每一行（由 \\n 或 \\r 分割）的开始和结束，而不只是只匹配整个输入字符串的最开始和最末尾处")])])]),a._v(" "),t("h3",{attrs:{id:"_2-character-sets-字符集合"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-character-sets-字符集合"}},[a._v("#")]),a._v(" 2. Character Sets（字符集合）")]),a._v(" "),t("p",[a._v("用于匹配字符集合中的任意一个字符，常见的字符集有：")]),a._v(" "),t("ol",[t("li",[t("p",[a._v('[xyz]：匹配 "x"或"y"'),t("code",[a._v('"z"')])])]),a._v(" "),t("li",[t("p",[a._v('[^xyz]：补集，匹配除 "x" "y" "z"的其他字符')])]),a._v(" "),t("li",[t("p",[a._v('[a-z]：匹配从 "a" 到 "z" 的任意字符')])]),a._v(" "),t("li",[t("p",[a._v('[^a-n]：补集，匹配除 "a" 到 "n" 的其他字符')])]),a._v(" "),t("li",[t("p",[a._v('[A-Z]：匹配从 "A" 到 "Z" 的任意字符')])]),a._v(" "),t("li",[t("p",[a._v('[0-9]：匹配从 "0" 到 "9" 的任意数字')])])]),a._v(" "),t("h3",{attrs:{id:"_3-quantifiers-量词"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-quantifiers-量词"}},[a._v("#")]),a._v(" 3. Quantifiers (量词)")]),a._v(" "),t("p",[a._v("在实际使用中，我们常常需要匹配同一类型的字符多次，比如匹配11位的手机号，我们不可能将 [0-9] 写11遍，此时我们可以使用Quantifiers来实现重复匹配。")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("{n}：匹配 n 次")])]),a._v(" "),t("li",[t("p",[a._v("{n,m}：匹配 n-m 次")])]),a._v(" "),t("li",[t("p",[a._v("{n,}：匹配 >=n 次")])]),a._v(" "),t("li",[t("p",[a._v("?：匹配 0 || 1 次")])]),a._v(" "),t("li",[t("p",[a._v("*：匹配 >=0 次，等价于 {0,}")])]),a._v(" "),t("li",[t("p",[a._v("+：匹配 >=1 次，等价于 {1,}")])])]),a._v(" "),t("h3",{attrs:{id:"_4-metacharacters-元字符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-metacharacters-元字符"}},[a._v("#")]),a._v(" 4. Metacharacters（元字符）")]),a._v(" "),t("p",[a._v("在正则表达式中有一些具有特殊含义的字母，被称为元字符，简言之，元字符就是描述字符的字符，它用于对字符表达式的内容、转换及各种操作信息进行描述。")]),a._v(" "),t("p",[a._v("常见的元字符有：")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("\\d：匹配任意数字，等价于 [0-9]")])]),a._v(" "),t("li",[t("p",[a._v("\\D：匹配任意非数字字符；\\d 的补集  除了[0-9]")])]),a._v(" "),t("li",[t("p",[a._v("\\w：匹配任意基本拉丁字母表中的字母和数字，以及下划线；等价于 [A-Za-z0-9_]")])]),a._v(" "),t("li",[t("p",[a._v("\\W：匹配任意非基本拉丁字母表中的字母和数字，以及下划线；\\w 的补集")])]),a._v(" "),t("li",[t("p",[a._v("\\s：匹配一个空白符，包括空格、制表符、换页符、换行符和其他Unicode空格")])]),a._v(" "),t("li",[t("p",[a._v("\\S：匹配一个非空白符；\\s的补集")])]),a._v(" "),t("li",[t("p",[a._v('\\b：匹配一个零宽单词边界，如一个字母与一个空格之间；例如，/\\bno/匹配"at noon"中的"no"，/ly\\b/ 匹配"possibly yesterday."中的"ly"')])]),a._v(" "),t("li",[t("p",[a._v('\\B：匹配一个零宽非单词边界，如两个字母之间或两个空格之间；例如，/\\Bon/ 匹配"at noon"中的"on"，/ye\\B/ 匹配"possibly yesterday."中的"ye"')])]),a._v(" "),t("li",[t("p",[a._v("\\t：匹配一个水平制表符（tab)")])]),a._v(" "),t("li",[t("p",[a._v("\\n：匹配一个换行符（newline)")])]),a._v(" "),t("li",[t("p",[a._v("\\r：匹配一个回车符（carriage return)")])]),a._v(" "),t("li",[t("p",[a._v("\\f: 换页符")])])]),a._v(" "),t("h3",{attrs:{id:"_5-special-characters-特殊字符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-special-characters-特殊字符"}},[a._v("#")]),a._v(" 5. Special Characters (特殊字符)")]),a._v(" "),t("p",[a._v("正则中存在一些特殊字符，它们不会按照字面意思进行匹配，而有特殊的意义，比如前文讲过用于量词的?、*、+。其他常见的特殊字符有：")]),a._v(" "),t("ol",[t("li",[t("p",[a._v('\\：转义字符，可以将普通字符转成特殊字符。比如 \\w；也可以将特殊字符转成字面意思，比如 +匹配 "+"')])]),a._v(" "),t("li",[t("p",[a._v(".：匹配任意单个字符，但是换行符除外：\\n, \\r, \\u2028 或 \\u2029；在字符集中（[.]），无特殊含义，即表示 '.' 的字面意思")])]),a._v(" "),t("li",[t("p",[a._v('|：替换字符（alternate character），匹配 | 前或后的表达式。比如需要同时匹配"bear"和"pear"，可以使用 /(b|p)ear/ 或者/bear|pear/；但是不能用 /b|pear/，该表达式只能匹配 "b" 和 "pear"')])]),a._v(" "),t("li",[t("p",[a._v('^：匹配输入的开始。比如，/^A/ 不匹配"an Apple" 中的 "A"，但匹配 "An apple" 中的 "A"')])]),a._v(" "),t("li",[t("p",[a._v('$：匹配输入的结尾。比如，/t$/ 不匹配"eater" 中的 "t"，但匹配 "eat" 中的 "t"。^ 和 $ 在表单验证时常需要使用，因为需要验证从开始到结尾的一个完整输入，而不是匹配输入中的某一段')])])]),a._v(" "),t("h3",{attrs:{id:"_6-groups-分组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-groups-分组"}},[a._v("#")]),a._v(" 6. Groups（分组）")]),a._v(" "),t("ol",[t("li",[t("p",[a._v('(xyz)：捕获分组（Capturing Group），匹配并捕获匹配项；例如，/(foo)/ 匹配且捕获"foo bar." 中的"foo"。被匹配的子字符串可以在结果数组的元素 [1], ..., [n] 中找到，或在被定义的 RegExp 对象的属性 $1, ..., $9 中找到')])]),a._v(" "),t("li",[t("p",[a._v("(?:xyz)：非捕获分组（Non-capturing Group），匹配但不会捕获匹配项；匹配项不能再次被访问到")])]),a._v(" "),t("li",[t("p",[a._v('\\n：n 是一个正整数，表示反向引用（back reference），指向正则表达式中第n个括号（从左开始数）中匹配的子字符串；例如/apple(,)\\sorange\\1/ 匹配"apple,orange,cherry, peach." 中的"apple,orange,"')])])]),a._v(" "),t("h3",{attrs:{id:"_7-assertion-断言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-assertion-断言"}},[a._v("#")]),a._v(" 7. Assertion（断言）")]),a._v(" "),t("ol",[t("li",[t("p",[a._v('x(?=y)：仅匹配被y跟随的x；例如，/bruce(?=wayne)/，如果"bruce"后面跟着wayne，则匹配之。/bruce(?=wayne|banner)/ ，如果"bruce"后面跟着"wayne"或者banner，则匹配之。但是"wayne" 和"banner" 都不会在匹配结果中出现')])]),a._v(" "),t("li",[t("p",[a._v('x(?!y)：仅匹配不被y跟随的x；例如，/\\d+(?!.)/ 只会匹配不被 "." 跟随的数字。')])])]),a._v(" "),t("p",[a._v('/\\d+(?!.)/.exec(\'3.141\') 匹配"141"，而不是"3.141"')]),a._v(" "),t("h3",{attrs:{id:"_8-pattern-、-pattern-、-pattern-、-pattern-和-pattern"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-pattern-、-pattern-、-pattern-、-pattern-和-pattern"}},[a._v("#")]),a._v(" 8. (?:pattern)、(?=pattern)、(?!pattern)、(?<=pattern)和(?<!pattern)")]),a._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[a._v("展开")]),a._v(" "),t("h4",{attrs:{id:"pattern"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pattern"}},[a._v("#")]),a._v(" (?:pattern)#")]),a._v(" "),t("p",[a._v("()表示捕获分组，()会把每个分组里的匹配的值保存起来，从左向右，以分组的左括号为标志，第一个出现的分组的组号为1，第二个为2，以此类推")]),a._v(" "),t("p",[a._v("(?:)表示非捕获分组，和捕获分组唯一的区别在于，非捕获分组匹配的值不会保存起来")]),a._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("a "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"123abc456ww"')]),a._v("\nreg "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[a._v("([0-9]*)([a-z]*)([0-9]*)")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[a._v("/")])]),a._v("\na"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("match")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("reg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// ['123abc456', '123', 'abc', '456', index: 0, input: '123abc456ww', groups: undefined]")]),a._v("\n\nreg2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[a._v("(?:[0-9]*)([a-z]*)([0-9]*)")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[a._v("/")])]),a._v("\na"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("match")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("reg2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// ['123abc456', 'abc', '456', index: 0, input: '123abc456ww', groups: undefined]")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br")])]),t("p",[a._v("可以看到 (?:[0-9]"),t("em",[a._v(") 匹配的第一个 [0-9]")]),a._v("  没有保存下来，即没有保存匹配到的“123”，而([0-9]*)则保存了下来。")]),a._v(" "),t("h4",{attrs:{id:"pattern-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pattern-2"}},[a._v("#")]),a._v(" (?=pattern)#")]),a._v(" "),t("p",[a._v("正向肯定预查（look ahead positive assert），匹配pattern前面的位置。这是一个非获取匹配，也就是说，该匹配不需要获取供以后使用。")]),a._v(" "),t("p",[a._v('例如，"Windows(?=95|98|NT|2000)"能匹配"Windows2000"中的"Windows"，但不能匹配"Windows3.1"中的"Windows"。预查不消耗字符，也就是说，在一个匹配发生后，在最后一次匹配之后立即开始下一次匹配的搜索，而不是从包含预查的字符之后开始。')]),a._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("a "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'window12345'")]),a._v("\nreg "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[a._v("window(?=123)")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[a._v("/")])]),a._v("\na"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("match")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("reg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// ['window', index: 0, input: 'window12345', groups: undefined]")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("h4",{attrs:{id:"pattern-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pattern-3"}},[a._v("#")]),a._v(" (?!pattern)#")]),a._v(" "),t("p",[a._v("正向否定预查(negative assert)，在任何不匹配pattern的字符串开始处匹配查找字符串。这是一个非获取匹配，也就是说，该匹配不需要获取供以后使用。")]),a._v(" "),t("p",[a._v("简单说，以 xxx(?!pattern)为例，就是捕获不以pattern结尾的内容xxx")]),a._v(" "),t("p",[a._v('例如"Windows(?!95|98|NT|2000)"能匹配"Windows3.1"中的"Windows"，但不能匹配"Windows2000"中的"Windows"。预查不消耗字符，也就是说，在一个匹配发生后，在最后一次匹配之后立即开始下一次匹配的搜索，而不是从包含预查的字符之后开始。')]),a._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("a "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'window123window456'")]),a._v("\nreg "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[a._v("window(?!12)")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[a._v("/")])]),a._v("\na"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("match")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("reg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// ['window', index: 9, input: 'window123window456', groups: undefined]")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 注意这里的 index 是9")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("h4",{attrs:{id:"pattern-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pattern-4"}},[a._v("#")]),a._v(" (?<=pattern)#")]),a._v(" "),t("p",[a._v("反向(look behind)肯定预查，与正向肯定预查类似，只是方向相反。")]),a._v(" "),t("p",[a._v("简单说，以(?<=pattern)xxx为例，就是捕获以pattern开头的内容xxx。")]),a._v(" "),t("p",[a._v('例如，"(?<=95|98|NT|2000)Windows"能匹配"2000Windows"中的"Windows"，但不能匹配"3.1Windows"中的"Windows"。')]),a._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("a "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'window123window456'")]),a._v("\nreg "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[a._v("(?<=123)window")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[a._v("/")])]),a._v("\na"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("match")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("reg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// ['window', index: 9, input: 'window123window456', groups: undefined]")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("h4",{attrs:{id:"pattern-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pattern-5"}},[a._v("#")]),a._v(" (?<pattern)#")]),a._v(" "),t("p",[a._v("简单说，以(?<!pattern)xxx为例，就是捕获不以pattern开头的内容xxx。")]),a._v(" "),t("p",[a._v('反向否定预查，与正向否定预查类似，只是方向相反。例如"(?<!95|98|NT|2000)Windows"能匹配"3.1Windows"中的"Windows"，但不能匹配"2000Windows"中的"Windows"。')]),a._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("a "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'window123window456'")]),a._v("\nreg "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[a._v("(?<!123)window")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[a._v("/")])]),a._v("\na"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("match")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("reg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// ['window', index: 0, input: 'window123window456', groups: undefined]")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);