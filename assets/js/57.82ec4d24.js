(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{338:function(e,n,t){"use strict";t.r(n);var a=t(14),s=Object(a.a)({},(function(){var e=this,n=e._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"_2-4-configengine"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-configengine"}},[e._v("#")]),e._v(" 2.4 configEngine")]),e._v(" "),n("p",[e._v("This method is used to configure the Template Engine. Below is a code example:")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('public void configEngine(Engine me) {\n    me.addSharedFunction("/view/common/layout.html");\n    me.addSharedFunction("/view/common/paginate.html");\n    me.addSharedFunction("/view/admin/common/layout.html");\n}\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br")])]),n("p",[e._v("The above method adds three template files, which define template functions, to the template engine. A more detailed introduction can be found in the Template Engine chapter.")]),e._v(" "),n("p",[e._v("Note: The configurations "),n("code",[e._v("me.setToClassPathSourceFactory()")]),e._v(", "),n("code",[e._v("me.setBaseTemplatePath(...)")]),e._v(", and "),n("code",[e._v("me.setDevMode(...)")]),e._v(" should be placed at the beginning since the subsequent configurations like "),n("code",[e._v("me.addSharedFunction(...)")]),e._v(" depend on these initial settings.")]),e._v(" "),n("p",[e._v("Starting from jfinal 4.9.02, a new configuration was added to support Chinese expressions, variable names, method names, and template function names:")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("Engine.setChineseExpression(true);\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("This configuration should be placed before "),n("code",[e._v("addSharedTemplateFunction(...)")]),e._v(" and "),n("code",[e._v("addSqlTemplate(...)")]),e._v(" to ensure it takes effect promptly. This setting is global and applies to all Engine instances.")])])}),[],!1,null,null,null);n.default=s.exports}}]);