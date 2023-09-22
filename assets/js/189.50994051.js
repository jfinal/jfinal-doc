(window.webpackJsonp=window.webpackJsonp||[]).push([[189],{470:function(s,n,a){"use strict";a.r(n);var e=a(14),t=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"_5-15-独立使用-activerecord"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-15-独立使用-activerecord"}},[s._v("#")]),s._v(" 5.15 独立使用 ActiveRecord")]),s._v(" "),n("p",[s._v("ActiveRecordPlugin可以独立于java web 环境运行在任何普通的java程序中，使用方式极度简单，相对于web项目只需要手动调用一下其start() 方法即可立即使用。以下是代码示例：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('public class ActiveRecordTest {\n  public static void main(String[] args) {\n    DruidPlugin dp = new DruidPlugin("localhost", "userName", "password");\n    ActiveRecordPlugin arp = new ActiveRecordPlugin(dp);\n    arp.addMapping("blog", Blog.class);\n    \n    // 与 jfinal web 环境唯一的不同是要手动调用一次相关插件的start()方法\n    dp.start();\n    arp.start();\n    \n    // 通过上面简单的几行代码，即可立即开始使用\n    new Blog().set("title", "title").set("content", "cxt text").save();\n    Blog.dao.findById(123);\n  }\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("p",[s._v("注意：ActiveRecordPlugin所依赖的其它插件也必须手动调用一下start()方法，如上例中的dp.start()。\njfinal 的 activerecord 模块已被独立发布到了 maven 库，如果只想使用 jfinal activerecord 模块而不想引入整个 jfinal 的可以使用下面的坐标：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("<dependency>\n    <groupId>com.jfinal</groupId>\n    <artifactId>activerecord</artifactId>\n    <version>5.1.2</version>\n</dependency>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("独立使用该模块的用法与在 jfinal 中使用时完全一样")]),s._v(" "),n("p",[s._v("特别注意：activerecord 模块中包含了 enjoy template 模块，如果要使用 enjoy 模板引擎，直接使用就好，无需引入 enjoy template 模块的 maven 依赖，否则会造成冲突。\n如果是与 spring boot 整合使用，可以参考这篇文章：https://blog.csdn.net/suxiaoqiuking/article/details/78999857")])])}),[],!1,null,null,null);n.default=t.exports}}]);