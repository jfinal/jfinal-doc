(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{313:function(e,a,n){"use strict";n.r(a);var t=n(14),s=Object(t.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"_1-7-deployment-under-tomcat"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-7-deployment-under-tomcat"}},[e._v("#")]),e._v(" 1.7 Deployment under tomcat")]),e._v(" "),a("h3",{attrs:{id:"_0-check-web-xml-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-check-web-xml-configuration"}},[e._v("#")]),e._v(" 0. Check web.xml configuration")]),e._v(" "),a("p",[e._v("A few students develop using jfinal-undertow and deploy with tomcat. However, jfinal-undertow doesn't require the web.xml file, leading to deployment failures in tomcat.")]),e._v(" "),a("p",[e._v("Therefore, when deploying under tomcat, you need to check if the web.xml exists and ensure that it is configured correctly. The configuration format is as follows:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<?xml version="1.0" encoding="UTF-8"?>\n<web-app xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://java.sun.com/xml/ns/javaee" xmlns:web="http://java.sun.com/xml/ns/javaee/web-app_2_5.xsd" xsi:schemaLocation="http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-app_2_5.xsd" id="WebApp_ID" version="2.5">\n  <display-name>jfinal offical website</display-name>\n  \n  <filter>\n    <filter-name>jfinal</filter-name>\n    <filter-class>com.jfinal.core.JFinalFilter</filter-class>\n    <init-param>\n       <param-name>configClass</param-name>\n       <param-value>demo.DemoConfig</param-value>\n    </init-param>\n  </filter>\n  \n  <filter-mapping>\n    <filter-name>jfinal</filter-name>\n    <url-pattern>/*</url-pattern>\n  </filter-mapping>\n \n</web-app>\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br")])]),a("p",[e._v("Note: The "),a("code",[e._v("para-value")]),e._v(" configuration depends on your project's specific XxxConfig package name and class name. Ensure to modify it accordingly. The rest of the configurations can be copied as is.")]),e._v(" "),a("h3",{attrs:{id:"_1-specify-the-packaging-type-as-war"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-specify-the-packaging-type-as-war"}},[e._v("#")]),e._v(" 1. Specify the packaging type as war")]),e._v(" "),a("p",[e._v("Modify the pom.xml file and change the value of the packaging tag to war.")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("<packaging>war</packaging>\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"_2-remove-jfinal-undertow-and-jetty-server-dependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-remove-jfinal-undertow-and-jetty-server-dependencies"}},[e._v("#")]),e._v(" 2. Remove jfinal-undertow and jetty-server dependencies")]),e._v(" "),a("p",[e._v("Modify the pom.xml file and delete all dependencies related to jfinal-undertow and jetty-server, otherwise, there will be conflicts when deployed in tomcat.")]),e._v(" "),a("h3",{attrs:{id:"_3-add-servlet-api-dependency"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-add-servlet-api-dependency"}},[e._v("#")]),e._v(" 3. Add servlet API dependency")]),e._v(" "),a("p",[e._v("If your project code uses the servlet API, you need to add the following dependency for packaging:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("<dependency>\n    <groupId>javax.servlet</groupId>\n    <artifactId>javax.servlet-api</artifactId>\n    <version>4.0.1</version>\n    <scope>provided</scope>\n</dependency>\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br")])]),a("p",[e._v("You can add this dependency when prompted during packaging. If packaging passes without issues, you can ignore it.")]),e._v(" "),a("h3",{attrs:{id:"_4-packaging"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-packaging"}},[e._v("#")]),e._v(" 4. Packaging")]),e._v(" "),a("p",[e._v("Open the console, navigate to the project root directory, and execute the following command to create a war package:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mvn clean package\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"_5-deployment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-deployment"}},[e._v("#")]),e._v(" 5. Deployment")]),e._v(" "),a("p",[e._v("Projects developed with jfinal are standard java web projects, so there's nothing special about the deployment process. Some deployment tips can be found in this blog post: https://my.oschina.net/jfinal/blog/353062")]),e._v(" "),a("p",[e._v("Note: This section only introduces development under jfinal-undertow or jetty-server and deployment under tomcat. Only in these two modes do you need to remove their dependencies. If you are using the traditional java web development method, you don't need to pay attention to this section. Please especially note the special statement: https://www.jfinal.com/doc/1-11")])])}),[],!1,null,null,null);a.default=s.exports}}]);