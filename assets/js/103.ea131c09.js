(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{385:function(e,a,s){"use strict";s.r(a);var t=s(14),n=Object(t.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"_6-3-expressions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-expressions"}},[e._v("#")]),e._v(" 6.3 Expressions")]),e._v(" "),a("p",[e._v("The Enjoy Template Engine's expression rules are generally in line with Java's expression rules, with only a few intuitive extensions aimed at improving the developer experience.")]),e._v(" "),a("p",[e._v("One key point to reiterate about expressions is that they are directly integrated with Java. Grasping this point will allow you to understand 90% of the template engine's usage. Here are some code examples:")]),e._v(" "),a("div",{staticClass:"language-plaintext line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plaintext"}},[a("code",[e._v('123 + "abc"\n"abcd".substring(0, 1)\nuserList.get(0).getName()\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("In the above code, the first and second lines are used exactly the same way as in Java expressions. In the third line, assuming "),a("code",[e._v("userList")]),e._v(" contains "),a("code",[e._v("User")]),e._v(" objects and that "),a("code",[e._v("User")]),e._v(" has a "),a("code",[e._v("getName()")]),e._v(" method, you can call an object's methods just like you would in Java, as long as you know the type of the variable.")]),e._v(" "),a("h3",{attrs:{id:"_1-expressions-with-basic-java-rules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-expressions-with-basic-java-rules"}},[e._v("#")]),e._v(" 1. Expressions With Basic Java Rules")]),e._v(" "),a("ul",[a("li",[e._v("Arithmetic operations: "),a("code",[e._v("+ - * / % ++ --")])]),e._v(" "),a("li",[e._v("Comparison operations: "),a("code",[e._v("> >= < <= == !=")]),e._v(" (basic usage is the same, enhancements will be discussed later)")]),e._v(" "),a("li",[e._v("Logical operations: "),a("code",[e._v("! && ||")])]),e._v(" "),a("li",[e._v("Ternary expression: "),a("code",[e._v("? :")])]),e._v(" "),a("li",[e._v("Null constant: "),a("code",[e._v("null")])]),e._v(" "),a("li",[e._v("String constant: "),a("code",[e._v('"jfinal club"')])]),e._v(" "),a("li",[e._v("Boolean constant: "),a("code",[e._v("true false")])]),e._v(" "),a("li",[e._v("Numeric constant: "),a("code",[e._v("123 456F 789L 0.1D 0.2E10")])]),e._v(" "),a("li",[e._v("Array access: "),a("code",[e._v("array[i]")]),e._v(" (Maps are enhanced to support "),a("code",[e._v("map[key]")]),e._v(")")]),e._v(" "),a("li",[e._v("Property access: "),a("code",[e._v("object.field")]),e._v(" (Maps are enhanced to support "),a("code",[e._v("map.key")]),e._v(")")]),e._v(" "),a("li",[e._v("Method call: "),a("code",[e._v("object.method(p1, p2…, pn)")]),e._v(" (Supports variable parameters)")])]),e._v(" "),a("p",[e._v("Comma expression: "),a("code",[e._v('123, 1>2, null, "abc", 3+6')]),e._v(" (The value of the comma expression is the value of the last expression)")]),e._v(" "),a("p",[a("strong",[e._v("Pro Tip")]),e._v(": If a key in a map from the Java side is in Chinese, you can access it using "),a("code",[e._v('map["中文"]')]),e._v(" instead of "),a("code",[e._v("map.中文")]),e._v(", as the engine will treat it as "),a("code",[e._v("object.field")]),e._v(", which by default doesn't support Chinese characters. You can enable it via "),a("code",[e._v("Engine.setChineseExpression(true)")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"_2-property-access"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-property-access"}},[e._v("#")]),e._v(" 2. Property Access")]),e._v(" "),a("p",[e._v("Due to the frequent use of property access expressions in the template engine, intuitive extensions have been made. For example, with "),a("code",[e._v("user.name")]),e._v(":")]),e._v(" "),a("ul",[a("li",[e._v("If "),a("code",[e._v("user.getName()")]),e._v(" exists, it takes precedence.")]),e._v(" "),a("li",[e._v("If "),a("code",[e._v("user")]),e._v(" has a public "),a("code",[e._v("name")]),e._v(" attribute, it will be used.")]),e._v(" "),a("li",[e._v("If "),a("code",[e._v("user")]),e._v(" is a subclass of "),a("code",[e._v("Model")]),e._v(", "),a("code",[e._v('user.get("name")')]),e._v(" will be called.")]),e._v(" "),a("li",[e._v("If "),a("code",[e._v("user")]),e._v(" is a "),a("code",[e._v("Record")]),e._v(", "),a("code",[e._v('user.get("name")')]),e._v(" will be called.")]),e._v(" "),a("li",[e._v("If "),a("code",[e._v("user")]),e._v(" is a "),a("code",[e._v("Map")]),e._v(", "),a("code",[e._v('user.get("name")')]),e._v(" will be called.")])]),e._v(" "),a("p",[e._v("In addition, array length can be accessed via "),a("code",[e._v("array.length")]),e._v(", just like in Java.")]),e._v(" "),a("p",[e._v("Lastly, you can extend property access using the "),a("code",[e._v("FieldGetter")]),e._v(" abstract class. For instance, the following configuration supports calling a boolean "),a("code",[e._v("isGirl()")]),e._v(" method via the "),a("code",[e._v("user.girl")]),e._v(" expression:")]),e._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Engine")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("addFieldGetterToFirst")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[e._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("jfinal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("template"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("expr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("ast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")])]),e._v("FieldGetters"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("IsMethodFieldGetter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"_3-method-calls"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-method-calls"}},[e._v("#")]),e._v(" 3. Method Calls")]),e._v(" "),a("p",[e._v("The template engine is designed to be directly integrated with Java, allowing you to call any public method on an object in the template. The rules are consistent with how you call methods in Java. For example:")]),e._v(" "),a("div",{staticClass:"language-plaintext line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plaintext"}},[a("code",[e._v('#("ABCDE".substring(0, 3))\n#(girl.getAge())\n#(list.size())\n#(map.get(key))\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("p",[e._v("In the first line, the "),a("code",[e._v("substring(0, 3)")]),e._v(" method on the "),a("code",[e._v("String")]),e._v(' object is called, and the output is "ABC". The second line can be called when the '),a("code",[e._v("girl")]),e._v(" object has a "),a("code",[e._v("getAge()")]),e._v(" method. The third line can be called assuming "),a("code",[e._v("map")]),e._v(" is a "),a("code",[e._v("Map")]),e._v(" type.")]),e._v(" "),a("p",[e._v("In short, you can directly call any public method that an object owns in the template expression. The method call supports variable parameters, e.g., "),a("code",[e._v("obj.find(String sql, Object … args)")]),e._v(".")]),e._v(" "),a("p",[e._v("Since the object method call is directly integrated with Java, the learning curve is zero, and you immediately gain a powerful extension mechanism.")]),e._v(" "),a("h3",{attrs:{id:"_4-static-property-access"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-static-property-access"}},[e._v("#")]),e._v(" 4. Static Property Access")]),e._v(" "),a("p",[e._v('Starting from JFinal 5.0.2, this expression is "disabled" by default and needs to be enabled with the following configuration:')]),e._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[e._v("engine"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("setStaticFieldExpression")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Static properties defined in Java code can be accessed in the template. For example:")]),e._v(" "),a("div",{staticClass:"language-plaintext line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plaintext"}},[a("code",[e._v("#if(x.status == com.demo.common.model.Account::STATUS_LOCK_ID)\n   <span>(Account Locked)</span>\n#end\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("Here, the static property is accessed using the class name followed by a double colon and the static property name. This way, you can avoid using specific constant values in the template, making it easier to refactor code later.")]),e._v(" "),a("p",[e._v("Note that the property must be declared as "),a("code",[e._v("public static")]),e._v(" to be accessible. Also, it doesn't have to be "),a("code",[e._v("final")]),e._v(".")]),e._v(" "),a("p",[e._v("If a static property is frequently used, you can add it as a shared object via "),a("code",[e._v("addSharedObject(...)")]),e._v(" and then refer to it using the field expression, which saves some code. For example, you can first configure the shared object like this:")]),e._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("public")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("void")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("configEngine")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Engine")]),e._v(" me"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    me"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("addSharedObject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Account"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Account")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("And then, you can use the field expression to replace the original static property access expression in the template:")]),e._v(" "),a("div",{staticClass:"language-plaintext line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plaintext"}},[a("code",[e._v("#if(x.status == Account.STATUS_LOCK_ID)\n   <span>(Account Locked)</span>\n#end\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("h3",{attrs:{id:"_5-static-method-calls"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-static-method-calls"}},[e._v("#")]),e._v(" 5. Static Method Calls")]),e._v(" "),a("p",[e._v('Starting from JFinal 5.0.2, this expression is "disabled" by default and needs to be enabled with the following configuration:')]),e._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[e._v("engine"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("setStaticMethodExpression")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("The Enjoy Template Engine can call static methods in a very simple manner. Here's an example:")]),e._v(" "),a("div",{staticClass:"language-plaintext line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plaintext"}},[a("code",[e._v("#if(com.jfinal.kit.StrKit::isBlank(title))\n   ....\n#end\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("The usage is consistent with static property access; you just replace the static property name with the static method name and add a pair of parentheses and parameters: "),a("code",[e._v("Class Name + :: + Method Name(Parameters)")]),e._v(". Static method calls support variable parameters. And like static properties, the methods being called must be "),a("code",[e._v("public static")]),e._v(".")]),e._v(" "),a("p",[e._v("If you find it cumbersome to write out the package name, you can add the method as a shared method using "),a("code",[e._v("me.addSharedMethod(...)")]),e._v(", and then you can call it directly using the method name without even needing the class name.")]),e._v(" "),a("p",[e._v("Additionally, you can also call methods on static properties. For example:")]),e._v(" "),a("div",{staticClass:"language-plaintext line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plaintext"}},[a("code",[e._v("(com.jfinal.MyKit::me).method(paras)\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("In the above code, you first use a pair of parentheses to enclose the static property access expression and then call its method. The parentheses here are only to change the priority of the expression.")]),e._v(" "),a("h3",{attrs:{id:"_6-optional-chaining-operator-new-in-5-0-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-optional-chaining-operator-new-in-5-0-0"}},[e._v("#")]),e._v(" 6. Optional Chaining Operator "),a("code",[e._v("?.")]),e._v(" (New in 5.0.0)")]),e._v(" "),a("p",[e._v("JFinal 5.0.0 introduced the optional chain operator, which can be used as follows:")]),e._v(" "),a("div",{staticClass:"language-plaintext line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plaintext"}},[a("code",[e._v("# When article is null, title is not accessed and null is returned\narticle?.title\n\n# Can be used for method calls\narticle?.getTitle()\n\n# Can be used for chained operations\npage?.list?.size()\n\n# Can be used after a method call to avoid exceptions if getList() returns null\npage?.getList()?.size()\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br")])]),a("p",[e._v("The optional chaining operator can be used when you're accessing a field or calling a method on an object that might be null, thereby preventing exceptions. Note that this operator will always return "),a("code",[e._v("null")]),e._v(" if the object is "),a("code",[e._v("null")]),e._v('. If you need to return other default values, you can use the "null-coalescing safe access operator" discussed in the next section.')]),e._v(" "),a("h3",{attrs:{id:"_7-null-coalescing-safe-access-operator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-null-coalescing-safe-access-operator"}},[e._v("#")]),e._v(" 7. Null-Coalescing Safe Access Operator")]),e._v(" "),a("p",[e._v("The Enjoy Template Engine has introduced the null-coalescing operator from Swift and C#, with some very natural extensions. The expression symbol for this is two closely placed question marks: "),a("code",[e._v("??")]),e._v(". Here's a code example:")]),e._v(" "),a("div",{staticClass:"language-plaintext line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plaintext"}},[a("code",[e._v('seoTitle ?? "JFinal Community"\nobject.field ??\nobject.method() ??\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("The first line is equivalent in functionality to Swift, where if "),a("code",[e._v("seoTitle")]),e._v(" is "),a("code",[e._v("null")]),e._v(", the whole expression takes the value of the following expression. The second line provides null-safe property access for "),a("code",[e._v("object.field")]),e._v(", meaning the expression won't throw an exception if "),a("code",[e._v("object")]),e._v(" is "),a("code",[e._v("null")]),e._v(", and its value will be "),a("code",[e._v("null")]),e._v(".")]),e._v(" "),a("p",[e._v("The third line is similar to the second but uses a method call instead of property access. Here as well, if "),a("code",[e._v("object")]),e._v(" is "),a("code",[e._v("null")]),e._v(", the expression will not throw an exception, and its value will be "),a("code",[e._v("null")]),e._v(".")]),e._v(" "),a("p",[e._v("Of course, null-coalescing and null-safety can be naturally mixed, as shown below:")]),e._v(" "),a("div",{staticClass:"language-plaintext line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plaintext"}},[a("code",[e._v('object.field ?? "Default Value"\nobject.method() ?? value\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("In these lines, if the null-safe property or method call returns "),a("code",[e._v("null")]),e._v(", the entire expression will take the value from the variable after the "),a("code",[e._v("??")]),e._v(".")]),e._v(" "),a("p",[a("strong",[e._v("Special Note")]),e._v(": The "),a("code",[e._v("??")]),e._v(" operator has higher precedence than arithmetic operators ("),a("code",[e._v("+")]),e._v(", "),a("code",[e._v("-")]),e._v(", "),a("code",[e._v("*")]),e._v(", "),a("code",[e._v("/")]),e._v(", "),a("code",[e._v("%")]),e._v(") but lower precedence than unary operators ("),a("code",[e._v("!")]),e._v(", "),a("code",[e._v("++")]),e._v(", "),a("code",[e._v("--")]),e._v("). To forcibly change the precedence, use parentheses.")]),e._v(" "),a("h3",{attrs:{id:"_8-single-quoted-strings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-single-quoted-strings"}},[e._v("#")]),e._v(" 8. Single-Quoted Strings")]),e._v(" "),a("p",[e._v("Given that the Template Engine is often used for HTML applications, support for single-quoted strings has been added. For example:")]),e._v(" "),a("div",{staticClass:"language-plaintext line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plaintext"}},[a("code",[e._v("<a href=\"/\" class=\"#(menu == 'index' ? 'current' : 'normal')\"\n   Home\n</a>\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("In the above code, single-quoted strings are used three times within a ternary expression. This is convenient because it can work in conjunction with outer double quotes, or vice versa.")]),e._v(" "),a("p",[e._v("This design is very beneficial when writing string expressions within existing single or double quotes in template files.")]),e._v(" "),a("h3",{attrs:{id:"_9-enhanced-equality-and-inequality-expressions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-enhanced-equality-and-inequality-expressions"}},[e._v("#")]),e._v(" 9. Enhanced Equality and Inequality Expressions")]),e._v(" "),a("p",[e._v("The equality ("),a("code",[e._v("==")]),e._v(") and inequality ("),a("code",[e._v("!=")]),e._v(") expressions perform a "),a("code",[e._v("left.equals(right)")]),e._v(" comparison, so you can directly compare strings. For example:")]),e._v(" "),a("div",{staticClass:"language-plaintext line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plaintext"}},[a("code",[e._v('#if(nickName == "james")\n  ...\n#end\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[a("strong",[e._v("Note")]),e._v(": The "),a("code",[e._v("Controller.keepPara(...)")]),e._v(" method will convert any data to "),a("code",[e._v("String")]),e._v(" before passing it to the view layer. Hence, two "),a("code",[e._v("Integer")]),e._v(" types that could be compared using the equality expression become uncomparable after "),a("code",[e._v("keepPara(...)")]),e._v(", as it becomes a comparison between "),a("code",[e._v("String")]),e._v(" and "),a("code",[e._v("Integer")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"_10-enhanced-boolean-expressions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-enhanced-boolean-expressions"}},[e._v("#")]),e._v(" 10. Enhanced Boolean Expressions")]),e._v(" "),a("p",[e._v("Boolean expressions have been enhanced to reduce code input. The rules, in order of priority, are as follows:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("null")]),e._v(" returns "),a("code",[e._v("false")])]),e._v(" "),a("li",[a("code",[e._v("boolean")]),e._v(" types return their original value")]),e._v(" "),a("li",[e._v("Strings and any objects inheriting from "),a("code",[e._v("CharSequence")]),e._v(" return "),a("code",[e._v("length > 0")])]),e._v(" "),a("li",[e._v("Everything else returns "),a("code",[e._v("true")])])]),e._v(" "),a("p",[e._v("These rules can reduce the amount of code in templates. For example:")]),e._v(" "),a("div",{staticClass:"language-plaintext line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plaintext"}},[a("code",[e._v("#if(user && user.id == x.userId)\n  ...\n#end\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("In this code, the "),a("code",[e._v("user")]),e._v(" expression effectively replaces the Java expression "),a("code",[e._v("user != null")]),e._v(", thus reducing code. Of course, if you use the "),a("code",[e._v("??")]),e._v(" operator, it can be even simpler: "),a("code",[e._v("if (user.id ?? == x.userId)")])]),e._v(" "),a("h3",{attrs:{id:"_11-map-definition-expressions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_11-map-definition-expressions"}},[e._v("#")]),e._v(" 11. Map Definition Expressions")]),e._v(" "),a("p",[e._v("The most useful scenario for defining a Map expression is to provide a very flexible way of passing parameters when calling methods or functions, especially when the names and numbers of parameters are not determined. Here is the basic usage:")]),e._v(" "),a("div",{staticClass:"language-plaintext line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plaintext"}},[a("code",[e._v('#set(map = {k1:123, "k2":"abc", "k3":object})\n#(map.k1)\n#(map.k2)\n#(map["k1"])\n#(map["k2"])\n#(map.get("k1"))\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br")])]),a("p",[e._v("In this example, a Map is defined using a pair of curly braces, with each element defined in the form of "),a("code",[e._v("key: value")]),e._v(". Multiple elements are separated by commas.")]),e._v(" "),a("p",[e._v("Keys can only be valid Java variable identifiers or String constant values. Note that using an identifier like "),a("code",[e._v("k1")]),e._v(" rather than a String constant like "),a("code",[e._v('"k1"')]),e._v(" is just for convenience in writing; it's equivalent to a string and doesn't evaluate the identifier "),a("code",[e._v("k1")]),e._v(".")]),e._v(" "),a("p",[e._v("The code uses the "),a("code",[e._v("#set")]),e._v(" directive to assign the defined variable to the "),a("code",[e._v("map")]),e._v(" variable. The second and third lines use "),a("code",[e._v("object.field")]),e._v(" for value access, while the fourth and fifth lines use "),a("code",[e._v("map[key]")]),e._v(" for value access. The sixth line is consistent with Java expression usage.")]),e._v(" "),a("p",[a("strong",[e._v("Special Note")]),e._v(": In the above code, if you try to access the value using "),a("code",[e._v("map[k1]")]),e._v(", "),a("code",[e._v("k1")]),e._v(" will first be evaluated, resulting in "),a("code",[e._v("null")]),e._v(". Therefore, the code uses "),a("code",[e._v('map["k1"]')]),e._v(" to access the value.")]),e._v(" "),a("p",[e._v("Additionally, Map retrieval also supports value retrieval during definition:")]),e._v(" "),a("div",{staticClass:"language-plaintext line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plaintext"}},[a("code",[e._v("#({1:'Buy for yourself', 2:'Follow purchase'}.get(1))\n#({1:'Buy for yourself', 2:'Follow purchase'}[2])\n\n### Use with double question marks to support default values\n#({1:'Buy for yourself', 2:'Follow purchase'}.get(999) ?? 'Others')\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("p",[e._v("The keys here are "),a("code",[e._v("int")]),e._v(" constants, supported from JFinal version 3.4.")]),e._v(" "),a("h3",{attrs:{id:"_12-array-definition-expressions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_12-array-definition-expressions"}},[e._v("#")]),e._v(" 12. Array Definition Expressions")]),e._v(" "),a("p",[e._v("Let's go straight to an example:")]),e._v(" "),a("div",{staticClass:"language-plaintext line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plaintext"}},[a("code",[e._v("// Define the array 'array' and assign default values to its elements\n#set(array = [123, \"abc\", true])\n\n// Get the value at index 1, output: \"abc\"\n#(array[1])\n\n// Assign 'false' to the element at index 1 and output it\n#(array[1] = false, array[1])\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br")])]),a("p",[e._v("This code demonstrates array definition, initialization, data retrieval, and assignment. The last line does not use the "),a("code",[e._v("#set")]),e._v(" directive, meaning array definition expressions can be used in any directive internally (Map definition expressions can do the same).")]),e._v(" "),a("p",[e._v("Array definition expressions can use any expression for element initialization, including variables, method call return values, etc.:")]),e._v(" "),a("div",{staticClass:"language-plaintext line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plaintext"}},[a("code",[e._v('#set(array = [123, "abc", true, a && b || c, 1 + 2, obj.doIt(x)])\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"_13-range-array-definition-expressions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_13-range-array-definition-expressions"}},[e._v("#")]),e._v(" 13. Range Array Definition Expressions")]),e._v(" "),a("p",[e._v("Let's go straight to an example:")]),e._v(" "),a("div",{staticClass:"language-plaintext line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plaintext"}},[a("code",[e._v("#for(x : [1..10])\n   #(x)\n#end\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("In this example, the expression "),a("code",[e._v("[1..10]")]),e._v(" defines a range array containing integers from 1 to 10. This is typically useful for frontend development, where you might want to iterate over a set of static data without having to retrieve it from the backend.")]),e._v(" "),a("p",[e._v("Additionally, descending range arrays are also supported, like "),a("code",[e._v("[10..1]")]),e._v(", which will define an array of integers from 10 down to 1.")]),e._v(" "),a("h3",{attrs:{id:"_14-comma-expressions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_14-comma-expressions"}},[e._v("#")]),e._v(" 14. Comma Expressions")]),e._v(" "),a("p",[e._v("An expression that combines multiple expressions separated by commas is known as a comma expression. The value of a comma expression is the value of the last expression in the sequence. For example, the value of the comma expression "),a("code",[e._v("1+2, 3*4")]),e._v(" is 12.")]),e._v(" "),a("h3",{attrs:{id:"_15-removed-operators-from-java"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_15-removed-operators-from-java"}},[e._v("#")]),e._v(" 15. Removed Operators from Java")]),e._v(" "),a("p",[e._v("Considering the use-cases for template engines, bitwise operators have been removed to avoid complexity and to keep the template engine straightforward, thus also potentially improving performance.")]),e._v(" "),a("h3",{attrs:{id:"_16-summary-of-expressions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_16-summary-of-expressions"}},[e._v("#")]),e._v(" 16. Summary of Expressions")]),e._v(" "),a("p",[e._v("The various expression capabilities described above are primarily extensions built on top of Java expression rules for enhanced development experience. You can also ignore these specific capabilities and use them as you would Java expressions, thus eliminating the learning curve.")]),e._v(" "),a("p",[e._v("The aforementioned extensions built on top of Java expression rules serve two main purposes:")]),e._v(" "),a("ol",[a("li",[e._v("They are added based on actual use-cases of template engines, such as single-quoted strings.")]),e._v(" "),a("li",[e._v("They are improvements over verbose Java syntax. For example, string comparisons like "),a("code",[e._v('str == "james"')]),e._v(" replace "),a("code",[e._v('str.equals("james")')]),e._v(".")])]),e._v(" "),a("p",[e._v("Therefore, these extensions are both valuable and necessary.")])])}),[],!1,null,null,null);a.default=n.exports}}]);