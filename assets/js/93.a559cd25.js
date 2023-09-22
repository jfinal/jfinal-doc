(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{374:function(t,a,e){"use strict";e.r(a);var s=e(14),n=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_5-4-generator-and-javabean"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-generator-and-javabean"}},[t._v("#")]),t._v(" 5.4 Generator and JavaBean")]),t._v(" "),a("h3",{attrs:{id:"_1-using-the-generator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-using-the-generator"}},[t._v("#")]),t._v(" 1. Using the Generator")]),t._v(" "),a("p",[t._v("The ActiveRecord module of JFinal provides a Generator utility class within the "),a("code",[t._v("com.jfinal.plugin.activerecord.generator")]),t._v(" package. This can automatically generate Model, BaseModel, MappingKit, and DataDictionary files.")]),t._v(" "),a("p",[t._v("After generation, the Model will merge with the JavaBean, immediately obtaining getter and setter methods, adhering to traditional JavaBean standards. This provides all the advantages of traditional JavaBeans, removing the need to remember column names during development.")]),t._v(" "),a("p",[t._v("Here's an example of how to use the generator:")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The package used by the model (MappingKit uses the default package)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" modelPackageName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"com.xxx.common.model"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The package used by the base model")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" baseModelPackageName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" modelPackageName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('".base"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Path to save the base model file")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" baseModelOutputDir "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getProperty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user.dir"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/src/main/java/"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" baseModelPackageName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token char"}},[t._v("'.'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token char"}},[t._v("'/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Path to save the model file (MappingKit and DataDictionary files use the default save path)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" modelOutputDir "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" baseModelOutputDir "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/.."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Output path: "')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" baseModelOutputDir"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Create the generator")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Generator")]),t._v(" gen "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Generator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getDataSource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" baseModelPackageName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" baseModelOutputDir"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" modelPackageName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" modelOutputDir"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Set the database dialect")]),t._v("\ngen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setDialect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MysqlDialect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Generate field comments in the getter and setter methods")]),t._v("\ngen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setGenerateRemarks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Start generating the code")]),t._v("\ngen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("generate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br")])]),a("p",[t._v("The parameters "),a("code",[t._v("baseModelPackageName")]),t._v(", "),a("code",[t._v("baseModelOutputDir")]),t._v(", "),a("code",[t._v("modelPackageName")]),t._v(", and "),a("code",[t._v("modelOutputDir")]),t._v(" represent the package name of the base model, the output path of the base model, the package name of the model, and the output path of the model, respectively. Typically, only the "),a("code",[t._v("modelPackageName")]),t._v(" needs to be configured, as the other parameters can be generated based on it.")]),t._v(" "),a("p",[t._v("It's recommended to download the "),a("code",[t._v("jfinal-demo")]),t._v(" project from the official JFinal website, which provides a ready-to-use generator: http://www.jfinal.com")]),t._v(" "),a("p",[t._v("The generator has various setter configuration methods that allow for easy control over the generated results. For instance:")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Specify the template file for generating the base model")]),t._v("\ngenerator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setBaseModelTemplate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Specify the template file for generating the model")]),t._v("\ngenerator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setModelTemplate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Specify the template file for generating the MappingKit")]),t._v("\ngenerator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setMappingKitTemplate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("h3",{attrs:{id:"_2-related-generated-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-related-generated-files"}},[t._v("#")]),t._v(" 2. Related Generated Files")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("BaseModel")]),t._v(": A base class meant to be extended by the final Model. All getter and setter methods are generated in this file. BaseModel is automatically generated and doesn't require manual maintenance. If the database structure changes, simply regenerate it.")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("MappingKit")]),t._v(": Generates the mapping between tables and Models. It also generates configurations for primary and composite keys, eliminating the need for any boilerplate mapping code in "),a("code",[t._v("configPlugin(Plugins me)")]),t._v(".")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("DataDictionary")]),t._v(": This generates a data dictionary that provides details about all the fields in a database table, such as field name, type, length, remarks, and whether it's a primary key.")])])]),t._v(" "),a("h3",{attrs:{id:"_3-filtering-and-excluding-tables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-filtering-and-excluding-tables"}},[t._v("#")]),t._v(" 3. Filtering and Excluding Tables")]),t._v(" "),a("p",[t._v("From JFinal 5.0.0, the Generator provides "),a("code",[t._v("addBlacklist(blacklist)")]),t._v(" and "),a("code",[t._v("addWhitelist(whitelist)")]),t._v(" methods to add tables to a whitelist or blacklist. Tables in the blacklist will be excluded from generation, while only those in the whitelist will be generated.")]),t._v(" "),a("p",[t._v("For versions prior to JFinal 5.0.0, a custom filtering mechanism was used.")]),t._v(" "),a("h3",{attrs:{id:"_4-main-advantages-of-using-the-generator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-main-advantages-of-using-the-generator"}},[t._v("#")]),t._v(" 4. Main Advantages of Using the Generator")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Utilize a vast array of third-party tools designed for Beans, like Jackson and Freemarker.")])]),t._v(" "),a("li",[a("p",[t._v("Rapidly adapt to database table changes, streamline refactoring, improve development efficiency, and enhance code quality.")])]),t._v(" "),a("li",[a("p",[t._v("No need to remember database column names, thanks to IDE code hints, reducing cognitive overhead and preventing typos.")])]),t._v(" "),a("li",[a("p",[t._v("BaseModel design ensures the final Model remains clean and is quickly refactored when table structures change.")])]),t._v(" "),a("li",[a("p",[t._v("Automatic table-to-Model mapping.")])]),t._v(" "),a("li",[a("p",[t._v("Automatic primary and composite key name identification and mapping.")])]),t._v(" "),a("li",[a("p",[t._v("The "),a("code",[t._v("MappingKit")]),t._v(" contains all mapping code, keeping "),a("code",[t._v("JFinalConfig")]),t._v(" clean and concise.")])])]),t._v(" "),a("h3",{attrs:{id:"_5-considerations-after-merging-model-with-bean"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-considerations-after-merging-model-with-bean"}},[t._v("#")]),t._v(" 5. Considerations after Merging Model with Bean")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("JSP templates will rely on the Bean's getter method for output.")])]),t._v(" "),a("li",[a("p",[t._v("In the Controller, "),a("code",[t._v("getModel()")]),t._v(" requires form field names to correspond to database column names. Meanwhile, "),a("code",[t._v("getBean()")]),t._v(" relies on setter methods.")])]),t._v(" "),a("li",[a("p",[t._v("Many third-party tools like Jackson and Fastjson rely on the Bean's getter methods. Hence, only after merging can one use Jackson or Fastjson.")])]),t._v(" "),a("li",[a("p",[t._v("When converting a Model to JSON data using "),a("code",[t._v("JFinalJson")]),t._v(", the JSON's keyName is the original database column name. In contrast, tools like Jackson or Fastjson will convert column names to camelCase based on the getter methods.")])])]),t._v(" "),a("h3",{attrs:{id:"_6-common-issues"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-common-issues"}},[t._v("#")]),t._v(" 6. Common Issues")]),t._v(" "),a("p",[t._v("When using the generator with the SQL Server database, system tables might be fetched. These tables should be filtered out. The specific method can be found at: http://www.jfinal.com/share/211.")])])}),[],!1,null,null,null);a.default=n.exports}}]);