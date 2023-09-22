(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{413:function(a,s,n){"use strict";n.r(s);var e=n(14),t=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"_1-6-jetty-server-下开发"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-jetty-server-下开发"}},[a._v("#")]),a._v(" 1.6 jetty-server 下开发")]),a._v(" "),s("h3",{attrs:{id:"_1、创建标准的-maven-项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、创建标准的-maven-项目"}},[a._v("#")]),a._v(" 1、创建标准的 maven 项目")]),a._v(" "),s("p",[a._v("与 jfinal undertow 相关小节完全一样")]),a._v(" "),s("h3",{attrs:{id:"_2、添加-jetty-server-与-jfinal-依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、添加-jetty-server-与-jfinal-依赖"}},[a._v("#")]),a._v(" 2、添加 jetty server 与 jfinal 依赖")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("<dependency>\n    <groupId>com.jfinal</groupId>\n    <artifactId>jfinal</artifactId>\n    <version>5.1.2</version>\n</dependency>\n \n<dependency>\n    <groupId>com.jfinal</groupId>\n    <artifactId>jetty-server</artifactId>\n    <version>2019.3</version>\n    <scope>provided</scope>\n</dependency>\n \n\x3c!-- 下面的依赖仅在使用 JSP 时才需要 --\x3e\n<dependency>\n    <groupId>org.eclipse.jetty</groupId>\n    <artifactId>jetty-jsp</artifactId>\n    <version>9.2.26.v20180806</version>\n    <scope>provided</scope>\n</dependency>\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br")])]),s("p",[a._v("jetty-server 依赖的 scope 为 provided，仅用于开发阶段，部署时不需要，打包时也会自动跳过。")]),a._v(" "),s("p",[a._v("这里特别注意一下：如果是使用 IDEA 开发，scope 仍然得设置成为 compile，否则提示缺少 jar 包，在打包的时候记得要改回 provided，避免打进一些不需要的 jar 包")]),a._v(" "),s("h3",{attrs:{id:"_3、添加-java-文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、添加-java-文件"}},[a._v("#")]),a._v(" 3、添加 java 文件")]),a._v(" "),s("p",[a._v("与 jfinal undertow 相关小节几乎一样，仅仅是 main 方法中的内容有所不同，如下：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('public static void main(String[] args) {\n    JFinal.start("src/main/webapp", 80, "/", 5);\n}\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("h3",{attrs:{id:"_4、-web-xml-中添加-jfinalfilter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、-web-xml-中添加-jfinalfilter"}},[a._v("#")]),a._v(" 4､ web.xml 中添加 JFinalFilter")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('<?xml version="1.0" encoding="UTF-8"?>\n<web-app xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://java.sun.com/xml/ns/javaee" xmlns:web="http://java.sun.com/xml/ns/javaee/web-app_2_5.xsd" xsi:schemaLocation="http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-app_2_5.xsd" id="WebApp_ID" version="2.5">\n  <display-name>jfinal offical website</display-name>\n  \n  <filter>\n    <filter-name>jfinal</filter-name>\n    <filter-class>com.jfinal.core.JFinalFilter</filter-class>\n    <init-param>\n       <param-name>configClass</param-name>\n       <param-value>demo.DemoConfig</param-value>\n    </init-param>\n  </filter>\n  \n  <filter-mapping>\n    <filter-name>jfinal</filter-name>\n    <url-pattern>/*</url-pattern>\n  </filter-mapping>\n \n</web-app>\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br")])]),s("p",[a._v("jetty-server、tomcat 下开发需要配置上述 xml 文件。")]),a._v(" "),s("h3",{attrs:{id:"_5、启动项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5、启动项目"}},[a._v("#")]),a._v(" 5、启动项目")]),a._v(" "),s("p",[a._v("与 jfinal undertow 相关小节完全一样")]),a._v(" "),s("h3",{attrs:{id:"_6、开启浏览器看效果"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6、开启浏览器看效果"}},[a._v("#")]),a._v(" 6、开启浏览器看效果")]),a._v(" "),s("p",[a._v("与 jfinal undertow 相关小节完全一样")]),a._v(" "),s("h3",{attrs:{id:"_7、常见问题解决"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7、常见问题解决"}},[a._v("#")]),a._v(" 7、常见问题解决：")]),a._v(" "),s("p",[a._v("1：出现 NoClassDefFoundError 异常")]),a._v(" "),s("p",[a._v("原因之一是 maven 本地库下载的 jar 文件数据有错误。看一下异常中是哪个类文件抛出的 NoClassDefFoundError，在本地 maven 库中删掉其目录，让 maven 从中心库中重新下载一次即可，例如使用的 jfinal-3.6 版本，就删掉 maven repository 中的 /com/jfinal/jfinal 目录下面的 3.6 子目录。")]),a._v(" "),s("p",[a._v("原因之二是对同一个 jar 包，引入了多个不同版本，删掉其中多余的即可\n以上问题本质上与 jfinal 无关，纯属 Java 开发时碰到的基础性异常")])])}),[],!1,null,null,null);s.default=t.exports}}]);