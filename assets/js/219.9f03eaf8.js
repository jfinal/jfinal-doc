(window.webpackJsonp=window.webpackJsonp||[]).push([[219],{501:function(s,n,e){"use strict";e.r(n);var a=e(14),t=Object(a.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"_8-4-非web环境使用redisplugin"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_8-4-非web环境使用redisplugin"}},[s._v("#")]),s._v(" 8.4 非web环境使用RedisPlugin")]),s._v(" "),n("p",[s._v("RedisPlugin也可以在非web环境下使用，只需引入jfinal.jar然后多调用一下redisPlugin.start()即可，以下是代码示例：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('public class RedisTest {\n  public static void main(String[] args) {\n    RedisPlugin rp = new RedisPlugin("myRedis", "localhost");\n    // 与web下唯一区别是需要这里调用一次start()方法\n    rp.start();\n \n    Redis.use().set("key", "value");\n    Redis.use().get("key");\n  }\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);