(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{339:function(n,s,e){"use strict";e.r(s);var a=e(14),i=Object(a.a)({},(function(){var n=this,s=n._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h1",{attrs:{id:"_2-5-configplugin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-configplugin"}},[n._v("#")]),n._v(" 2.5 configPlugin")]),n._v(" "),s("p",[n._v("This method is used to configure JFinal's Plugin. The code below sets up the Druid database connection pool plugin and the ActiveRecord database access plugin. With this configuration, you can easily operate the database in the application using ActiveRecord.")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v('public void configPlugin(Plugins me) {\n    DruidPlugin dp = new DruidPlugin(jdbcUrl, userName, password);\n    me.add(dp);\n    \n    ActiveRecordPlugin arp = new ActiveRecordPlugin(dp);\n    arp.addMapping("user", User.class);\n    me.add(arp);\n}\n')])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br")])]),s("p",[n._v("JFinal's plugin architecture is one of its main extension methods, allowing for easy creation and application of plugins in projects.")])])}),[],!1,null,null,null);s.default=i.exports}}]);