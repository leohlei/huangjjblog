(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{412:function(t,s,a){"use strict";a.r(s);var n=a(56),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"css-重要概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-重要概念"}},[t._v("#")]),t._v(" css 重要概念")]),t._v(" "),a("h4",{attrs:{id:"bfc-布局概念及作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bfc-布局概念及作用"}},[t._v("#")]),t._v(" BFC 布局概念及作用")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("BFC 是块级格式化上下文，它是一个独立渲染区域，规定了区域内如何布局，并且与这个区域外部毫无关系。")])]),t._v(" "),a("li",[a("p",[t._v("BFC 触发条件")]),t._v(" "),a("ul",[a("li",[t._v("float 的值不为 none")]),t._v(" "),a("li",[t._v("overflow 的值不为 visible")]),t._v(" "),a("li",[t._v("display 的值为 inline-block，table-cell, table-caption")]),t._v(" "),a("li",[t._v("position 的值为 absolute 和 fixed")])])]),t._v(" "),a("li",[a("p",[t._v("BFC 的作用")]),t._v(" "),a("ul",[a("li",[t._v("自适应两栏布局")]),t._v(" "),a("li",[t._v("可以阻止元素被浮动元素覆盖")]),t._v(" "),a("li",[t._v("可以包含浮动元素-清除内部浮动")]),t._v(" "),a("li",[t._v("分属不同 BFC 之时可以阻止 margin 重叠")])])])]),t._v(" "),a("h4",{attrs:{id:"盒模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#盒模型"}},[t._v("#")]),t._v(" 盒模型")]),t._v(" "),a("blockquote",[a("p",[t._v("盒模型有两种，w3c 和 IE 盒子模型")])]),t._v(" "),a("ol",[a("li",[t._v("W3C 定义的盒模型包括 margin、border、padding、content，元素的宽度 width=content 的宽度")]),t._v(" "),a("li",[t._v("IE 盒模型与 W3C 盒模型的唯一区别就是元素的宽度，元素的 width=border + padding + content")])]),t._v(" "),a("blockquote",[a("p",[t._v("对盒模型的理解")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("IE 定义的盒模型较为合理，所以在 css3 中新增了 box-sizing，包含两个属性 content-box 和 border-box。")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("content-box")]),t._v(" 元素的 width = content")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("border-box")]),t._v(" 元素的 width = border + padding + content")])])])]),t._v(" "),a("li",[a("p",[t._v("对于行内元素 margin-top/margin-bottom 对于上下元素无效，margin-left/margin-right 有效")]),t._v(" "),a("p",[t._v("对于相邻的块级元素 margin-top 和 margin-bottom 两者叠加按照一定的规则")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("都是整数 margin 值取两者的最大值")])]),t._v(" "),a("li",[a("p",[t._v("都是负数 margin 值取最小值")])]),t._v(" "),a("li",[a("p",[t._v("两者正负相反，margin 值取两者之和")])])])])]),t._v(" "),a("h4",{attrs:{id:"移动端根据设计稿宽度适配-px-转-rem"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移动端根据设计稿宽度适配-px-转-rem"}},[t._v("#")]),t._v(" 移动端根据设计稿宽度适配 px 转 rem")]),t._v(" "),a("blockquote",[a("p",[t._v("为了计算方便，一般建议 1rem = 100px(设计稿 px)，要换算这样的比例需要设置 html 对应的 fontSize，计算规则如下：\nfontSize = 屏幕宽度 / 设计稿宽度 * 基本宽度\n如果基本宽度是 100，那么 1rem = 100px(设计稿 px)")]),t._v(" "),a("p",[t._v("假如设计稿宽度是 750px , 开发以 iphone6/7/8 为例，宽度是 375，如果想 1rem=100px(设计稿 px)，那么 fontSize = 375/750*100 = 50px;")]),t._v(" "),a("p",[t._v("以下代码可以按设计稿适配 1rem = 100px;")])]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("meta name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"viewport"')]),t._v(" content"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"width=device-width,initial-scale=1.0"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" baseSize "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1rem === 100px")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" baseWidth "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("750")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设计稿宽度 640 750 1080")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" fontSize "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("clientWidth "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" baseWidth "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" baseSize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toFixed")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementsByTagName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"html"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fontSize "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fontSize\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("h5",{attrs:{id:"常用样式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用样式"}},[t._v("#")]),t._v(" 常用样式")]),t._v(" "),a("ol",[a("li",[t._v("特殊图形")]),t._v(" "),a("li",[t._v("文本省略")]),t._v(" "),a("li",[t._v("1px 实现")])])])}),[],!1,null,null,null);s.default=e.exports}}]);