(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{375:function(e,a,n){"use strict";n.r(a);var i=n(14),s=Object(i.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"_5-2-activerecordplugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-activerecordplugin"}},[e._v("#")]),e._v(" 5.2 ActiveRecordPlugin")]),e._v(" "),a("p",[e._v("ActiveRecord exists as a Plugin within JFinal, so when using it, you need to configure the ActiveRecordPlugin in JFinalConfig.")]),e._v(" "),a("p",[e._v("Here's a sample code for the Plugin configuration:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('public class DemoConfig extends JFinalConfig {\n  public void configPlugin(Plugins me) {\n  DruidPlugin dp = new DruidPlugin("jdbc:mysql://localhost/db_name", "userName", "password");\n    me.add(dp);\n    ActiveRecordPlugin arp = new ActiveRecordPlugin(dp);\n    me.add(arp);\n    arp.addMapping("user", User.class);\n    arp.addMapping("article", "article_id", Article.class);\n  }\n}\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br")])]),a("p",[e._v("The above code configures two plugins: DruidPlugin and ActiveRecordPlugin. The former is the druid data source plugin, and the latter supports ActiveRecord. In ActiveRecord, the method addMapping(String tableName, Class<? extends Model> modelClass) is defined, which establishes a mapping relationship between the database table name and the Model.")]),e._v(" "),a("p",[e._v('Furthermore, in the code above, arp.addMapping("user", User.class) assumes the default primary key name for the table is "id". If the primary key name is "user_id", it needs to be specified manually, as in: arp.addMapping("user", "user_id", User.class).')]),e._v(" "),a("p",[e._v("Important: The above arp.addMapping(...) configuration can be automated with the jfinal generator, eliminating the need for manual addition of such configurations. For detailed usage, refer to the documentation: https://www.jfinal.com/doc/5-4.")])])}),[],!1,null,null,null);a.default=s.exports}}]);