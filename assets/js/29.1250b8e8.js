(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{312:function(e,n,a){"use strict";a.r(n);var t=a(14),s=Object(t.a)({},(function(){var e=this,n=e._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"_1-3-deploying-under-jfinal-undertow"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-deploying-under-jfinal-undertow"}},[e._v("#")]),e._v(" 1.3 Deploying under jfinal-undertow")]),e._v(" "),n("h3",{attrs:{id:"_1-specify-that-the-package-is-of-type-jar"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-specify-that-the-package-is-of-type-jar"}},[e._v("#")]),e._v(" 1. Specify that the package is of type jar.")]),e._v(" "),n("p",[e._v("Modify the pom.xml file and change the value of the packaging tag to jar.")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("<packaging>jar</packaging\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("Strongly recommended: It is highly recommended to download jfinal_demo_for_maven.zip from the home page, from which you can get the pom.xml, package.xml, jfinal.sh and other configuration files and script files covered in this chapter. You can save a lot of learning cost.")]),e._v(" "),n("h3",{attrs:{id:"_2-add-the-maven-jar-plugin-plugin"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-add-the-maven-jar-plugin-plugin"}},[e._v("#")]),e._v(" 2. Add the maven-jar-plugin plugin.")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('<! --\n\tConfiguration files in a jar package have higher priority than "files of the same name" in the config directory.\n\tTherefore, you need to exclude the configuration files from the src/main/resources directory in the jar package, or else the config directory will not be used when deploying.\n\tOtherwise, the configuration file with the same name in the config directory will not take effect when deployed.\n --\x3e\n<plugin>\n    <groupId>org.apache.maven.plugins</groupId>\n    <artifactId>maven-jar-plugin</artifactId\n    <version>2.6</version\n    <configuration\n        <excludes\n            <exclude>*.txt</exclude\n            <exclude>*.xml</exclude\n            <exclude>*.properties</exclude\n            <exclude>exclude_file_name_here</exclude\n            <exclude>exclude_path_here/</exclude\n        </excludes\n    </configuration\n</plugin\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br"),n("span",{staticClass:"line-number"},[e._v("17")]),n("br"),n("span",{staticClass:"line-number"},[e._v("18")]),n("br"),n("span",{staticClass:"line-number"},[e._v("19")]),n("br")])]),n("p",[e._v("maven-jar-plugin is only to avoid typing the configuration file into a jar package, if it is typed into a fatjar package, you do not need to add this plugin.")]),e._v(" "),n("h3",{attrs:{id:"_3-add-the-maven-assembly-plugin-plugin"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-add-the-maven-assembly-plugin-plugin"}},[e._v("#")]),e._v(" 3. Add the maven-assembly-plugin plugin")]),e._v(" "),n("p",[e._v("Modify pom.xml and add the maven-assembly-plugin plugin under the plugins tag as follows")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("<! -- \n    Use mvn clean package to package the assembly. \n    For more information, please refer to the official documentation at http://maven.apache.org/plugins/maven-assembly-plugin/single-mojo.html.\n--\x3e\n<plugin>\n  <groupId>org.apache.maven.plugins</groupId>\n  <artifactId>maven-assembly-plugin</artifactId\n  <version>3.1.0</version>\n  <executions\n    <execution>\n    <id>make-assembly</id>\n    <phase>package</phase\n    <goals\n      <goal>single</goal\n    </goals\n \n    <configuration\n      <! -- Name of the file generated by the package --\x3e\n      <finalName>${project.artifactId}</finalName\n      <! -- Whether compressed files such as jar are compressed when they are packaged into zip, tar.gz, set to false to speed up packaging --\x3e\n      <recompressZippedFiles>false</recompressZippedFiles\n      <! -- Whether to append the id value defined in release.xml to the generated files --\x3e <appendAssemblyId>false</recompressZippedFiles> <!\n      <appendAssemblyId>true</appendAssemblyId\n      <! -- Points to the package description file package.xml --\x3e\n      <descriptors\n        <descriptor>package.xml</descriptor>\n      </descriptors\n      <! -- Base directory for package output --\x3e\n      <outputDirectory>${project.build.directory}/</outputDirectory\n      </configuration\n      </execution\n    </executions\n</plugin\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br"),n("span",{staticClass:"line-number"},[e._v("17")]),n("br"),n("span",{staticClass:"line-number"},[e._v("18")]),n("br"),n("span",{staticClass:"line-number"},[e._v("19")]),n("br"),n("span",{staticClass:"line-number"},[e._v("20")]),n("br"),n("span",{staticClass:"line-number"},[e._v("21")]),n("br"),n("span",{staticClass:"line-number"},[e._v("22")]),n("br"),n("span",{staticClass:"line-number"},[e._v("23")]),n("br"),n("span",{staticClass:"line-number"},[e._v("24")]),n("br"),n("span",{staticClass:"line-number"},[e._v("25")]),n("br"),n("span",{staticClass:"line-number"},[e._v("26")]),n("br"),n("span",{staticClass:"line-number"},[e._v("27")]),n("br"),n("span",{staticClass:"line-number"},[e._v("28")]),n("br"),n("span",{staticClass:"line-number"},[e._v("29")]),n("br"),n("span",{staticClass:"line-number"},[e._v("30")]),n("br"),n("span",{staticClass:"line-number"},[e._v("31")]),n("br"),n("span",{staticClass:"line-number"},[e._v("32")]),n("br"),n("span",{staticClass:"line-number"},[e._v("33")]),n("br")])]),n("p",[e._v("maven-assembly-plugin is the official packaging plugin provided by maven, it is very functional and can be configured with many parameters for customized builds, for more detailed documentation refer to its official documentation: http://maven.apache.org/plugins/maven-assembly-plugin/ single-mojo.html")]),e._v(" "),n("h3",{attrs:{id:"_4-add-the-package-xml-file"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-add-the-package-xml-file"}},[e._v("#")]),e._v(" 4. Add the package.xml file.")]),e._v(" "),n("p",[e._v("Add package.xml file in the root directory of the project, which is the package description file specified in the descriptor tag of the above maven-assembly-plugin, with the following contents:")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('<?xml version="1.0" encoding="UTF-8"? <?xml version="1.0" encoding="UTF-8"?\n<assembly xmlns="http://maven.apache.org/ASSEMBLY/2.0.0"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="http://maven.apache.org/ASSEMBLY/2.0.0 http://maven.apache.org/xsd/assembly-2.0.0.xsd">\n\t\n  <! -- assembly \n    assembly Packaging Configuration For more configuration, please refer to the official documentation:\n    http://maven.apache.org/plugins/maven-assembly-plugin/assembly.html\n  --\x3e\n\t\n  <id>release</id>\n\t\n  <! --\n      Set the format of the package, you can set multiple formats at the same time, commonly used formats are: dir, zip, tar, tar.gz.\n      The dir format allows you to test the package locally.\n      zip format is easy to unpack and run under windows system.\n      tar, tar.gz format is easy to unpack under linux system.\n  --\x3e\n  <formats\n    <format>dir</format\n    <format>zip</format\n    <! -- <format>tar.gz</format> --\x3e\n  </formats\n \n  <! -- Setting true when hitting zip generates a root directory in the zip package, setting false when hitting dir lesser directories --\x3e\n  <includeBaseDirectory>true</includeBaseDirectory\n\t\n  <fileSets\n    <! -- src/main/resources all copied to config directory --\x3e\n    <fileSet>\n      <directory>${basedir}/src/main/resources</directory\n      <outputDirectory>config</outputDirectory\n    </fileSet\n\t\t\n    <! -- src/main/webapp copy all to webapp directory --\x3e\n    <fileSet>\n      <directory>${basedir}/src/main/webapp</directory>\n      <outputDirectory>webapp</outputDirectory\n    </fileSet\n \n    <! -- Copy the script files under the project root to the root directory --\x3e\n    <fileSet>\n      <directory>${basedir}</directory\n      <outputDirectory>. /</outputDirectory\n      <fileMode>755</fileMode\n      <lineEnding>unix</lineEnding\n      <includes\n        <include>*.sh</include\n      </includes\n    </fileSet\n    \n    <fileSet>\n      <directory>${basedir}</directory>\n      <outputDirectory>. /</outputDirectory\n      <fileMode>755</fileMode\n      <lineEnding>windows</lineEnding\n      <includes\n        <include>*.bat</include\n      </includes\n    </fileSet>\n    \n  </fileSets\t\n \n  <! -- copy dependent jar packages to lib directory --\x3e\n  <dependencySets>\n    <dependencySet\n      <outputDirectory>lib</outputDirectory\t\t\t\n    </dependencySet> <dependencySets> <dependencySet\n  </dependencySets\n\t\n</assembly\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br"),n("span",{staticClass:"line-number"},[e._v("17")]),n("br"),n("span",{staticClass:"line-number"},[e._v("18")]),n("br"),n("span",{staticClass:"line-number"},[e._v("19")]),n("br"),n("span",{staticClass:"line-number"},[e._v("20")]),n("br"),n("span",{staticClass:"line-number"},[e._v("21")]),n("br"),n("span",{staticClass:"line-number"},[e._v("22")]),n("br"),n("span",{staticClass:"line-number"},[e._v("23")]),n("br"),n("span",{staticClass:"line-number"},[e._v("24")]),n("br"),n("span",{staticClass:"line-number"},[e._v("25")]),n("br"),n("span",{staticClass:"line-number"},[e._v("26")]),n("br"),n("span",{staticClass:"line-number"},[e._v("27")]),n("br"),n("span",{staticClass:"line-number"},[e._v("28")]),n("br"),n("span",{staticClass:"line-number"},[e._v("29")]),n("br"),n("span",{staticClass:"line-number"},[e._v("30")]),n("br"),n("span",{staticClass:"line-number"},[e._v("31")]),n("br"),n("span",{staticClass:"line-number"},[e._v("32")]),n("br"),n("span",{staticClass:"line-number"},[e._v("33")]),n("br"),n("span",{staticClass:"line-number"},[e._v("34")]),n("br"),n("span",{staticClass:"line-number"},[e._v("35")]),n("br"),n("span",{staticClass:"line-number"},[e._v("36")]),n("br"),n("span",{staticClass:"line-number"},[e._v("37")]),n("br"),n("span",{staticClass:"line-number"},[e._v("38")]),n("br"),n("span",{staticClass:"line-number"},[e._v("39")]),n("br"),n("span",{staticClass:"line-number"},[e._v("40")]),n("br"),n("span",{staticClass:"line-number"},[e._v("41")]),n("br"),n("span",{staticClass:"line-number"},[e._v("42")]),n("br"),n("span",{staticClass:"line-number"},[e._v("43")]),n("br"),n("span",{staticClass:"line-number"},[e._v("44")]),n("br"),n("span",{staticClass:"line-number"},[e._v("45")]),n("br"),n("span",{staticClass:"line-number"},[e._v("46")]),n("br"),n("span",{staticClass:"line-number"},[e._v("47")]),n("br"),n("span",{staticClass:"line-number"},[e._v("48")]),n("br"),n("span",{staticClass:"line-number"},[e._v("49")]),n("br"),n("span",{staticClass:"line-number"},[e._v("50")]),n("br"),n("span",{staticClass:"line-number"},[e._v("51")]),n("br"),n("span",{staticClass:"line-number"},[e._v("52")]),n("br"),n("span",{staticClass:"line-number"},[e._v("53")]),n("br"),n("span",{staticClass:"line-number"},[e._v("54")]),n("br"),n("span",{staticClass:"line-number"},[e._v("55")]),n("br"),n("span",{staticClass:"line-number"},[e._v("56")]),n("br"),n("span",{staticClass:"line-number"},[e._v("57")]),n("br"),n("span",{staticClass:"line-number"},[e._v("58")]),n("br"),n("span",{staticClass:"line-number"},[e._v("59")]),n("br"),n("span",{staticClass:"line-number"},[e._v("60")]),n("br"),n("span",{staticClass:"line-number"},[e._v("61")]),n("br"),n("span",{staticClass:"line-number"},[e._v("62")]),n("br"),n("span",{staticClass:"line-number"},[e._v("63")]),n("br"),n("span",{staticClass:"line-number"},[e._v("64")]),n("br"),n("span",{staticClass:"line-number"},[e._v("65")]),n("br"),n("span",{staticClass:"line-number"},[e._v("66")]),n("br"),n("span",{staticClass:"line-number"},[e._v("67")]),n("br"),n("span",{staticClass:"line-number"},[e._v("68")]),n("br"),n("span",{staticClass:"line-number"},[e._v("69")]),n("br"),n("span",{staticClass:"line-number"},[e._v("70")]),n("br"),n("span",{staticClass:"line-number"},[e._v("71")]),n("br")])]),n("p",[e._v("The packaging description file is part of the maven-assembly-plugin. The description file makes it very easy to control the details of the packaging actions. For more detailed documentation, see http://maven.apache.org/plugins/maven-assembly-plugin/assembly. html")]),e._v(" "),n("h3",{attrs:{id:"_5-add-the-startup-script-to-the-root-directory-of-your-project"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-add-the-startup-script-to-the-root-directory-of-your-project"}},[e._v("#")]),e._v(" 5. Add the startup script to the root directory of your project.")]),e._v(" "),n("p",[e._v("Note: The following scripts are provided in the jfinal demo for maven project downloaded from the right side of the jfinal official home page. Copy the jfinal.sh / jfinal.bat to your own project and modify the MAIN_CLASS variable, then you can put it into use.")]),e._v(" "),n("p",[e._v("The Linux startup script, jfinal.sh, looks like this:")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('/bin/bash /bin/bash\n# --------------------------------------------------------------\n# /bin/bash #\n# Instructions for use:\n# 1: Before using this script, you need to change the MAIN_CLASS value to point to the actual startup class.\n# # 1: Before using this script, you need to modify the MAIN_CLASS value to point to the actual startup class.\n# 2: Use the command line . /jfinal.sh start | stop | restart to start/shutdown/restart the project.  \n# /jfinal.sh start | stop | restart\n# 3: JAVA_OPTS can be overridden by passing parameters like undertow.port and undertow.host via -D.\n# The same values in the config file can also be found in undertow.resourcePath, undertow.ioThreads, etc. # 4: JAVA_OPTS can be overridden by passing -D to undertow.port and undertow.host,\n# undertow.workerThreads can be passed in via -D, which minimizes the need to\n# The need to modify the undertow configuration file is minimized\n# This feature minimizes the need to # modify the undertow configuration file.\n# 4: JAVA_OPTS can be passed standard java command line arguments, such as -Xms256m -Xmx1024m and other common arguments.\n# 5: Function start()\n# 5: The start() function gives you 4 ways to start your project on the command line, follow the hints in the comments to choose the right one.\n#The function start() gives you 4 command lines to start your project.\n# --------------------------------------------------------------\n \n# Startup entry class, change here if this script file is used in another project.\nMAIN_CLASS=com.yourpackage.YourMainClass\n \nif [[ "$MAIN_CLASS" == "com.yourpackage.YourMainClass" ]]; then\n    echo "Please change the value of MAIN_CLASS to your own startup class before executing this script."\n\texit 0\nexit 0\n \nCOMMAND="$1"\n \nif [[ "$COMMAND" ! = "start" ]] && [[ "$COMMAND" ! = "stop" ]] && [[ "$COMMAND" ! = "restart" ]]; then\n\techo "Usage: $0 start | stop | restart"\n\texit 0\nexit 0\n \n \n# Java command line parameters, according to the need to open the following configuration, change to their own needs, pay attention to the equal sign before and after there can not be spaces\n# Java_OPTS="-Xms256m -Xmx1024m -Dundertow.port=80 -Dundertow.host=0.0.0.0"\n# JAVA_OPTS="-Dundertow.port=80 -Dundertow.host=0.0.0.0"\n \n# Generate the class path value\nAPP_BASE_PATH=$(cd `dirname $0`; pwd)\nCP=${APP_BASE_PATH}/config:${APP_BASE_PATH}/lib/*\n \nfunction start()\n{\n    # Run as a background process and output information on the console\n    java -Xverify:none ${JAVA_OPTS} -cp ${CP} ${MAIN_CLASS} &\n \n    # Run as a background process and do not output information on the console\n    # nohup java -Xverify:none ${JAVA_OPTS} -cp ${CP} ${MAIN_CLASS} >/dev/null 2>&1 &\n \n    # Run as a background process and output the information to the output.log file\n    # nohup java -Xverify:none ${JAVA_OPTS} -cp ${CP} ${MAIN_CLASS} > output.log &\n \n    # run as a non-background process, mostly used in development, shortcut ctrl + c to stop the service\n    # java -Xverify:none ${JAVA_OPTS} -cp ${CP} ${MAIN_CLASS}\n}\n \nfunction stop()\n{\n    # Support for clustered deployments\n    kill `pgrep -f ${APP_BASE_PATH}` 2>/dev/null\n    \n    # The kill command calls the onStop() method without the -9 parameter, so it is recommended to use the -9 parameter if you don\'t need it.\n    # kill `pgrep -f ${MAIN_CLASS}` 2>/dev/null\n \n    # The following code is equivalent to the above\n    # kill $(pgrep -f ${MAIN_CLASS}) 2>/dev/null\n}\n \nif [[ "$COMMAND" == "start" ]]; then\n\tstart\nelif [[ "$COMMAND" == "stop" ]]; then\n    stop\nstart elif [[ "$COMMAND" == "stop" ]]; then stop\n    stop\n    stop elif [[ "$COMMAND == "stop" ]]; then stop else\nstop\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br"),n("span",{staticClass:"line-number"},[e._v("17")]),n("br"),n("span",{staticClass:"line-number"},[e._v("18")]),n("br"),n("span",{staticClass:"line-number"},[e._v("19")]),n("br"),n("span",{staticClass:"line-number"},[e._v("20")]),n("br"),n("span",{staticClass:"line-number"},[e._v("21")]),n("br"),n("span",{staticClass:"line-number"},[e._v("22")]),n("br"),n("span",{staticClass:"line-number"},[e._v("23")]),n("br"),n("span",{staticClass:"line-number"},[e._v("24")]),n("br"),n("span",{staticClass:"line-number"},[e._v("25")]),n("br"),n("span",{staticClass:"line-number"},[e._v("26")]),n("br"),n("span",{staticClass:"line-number"},[e._v("27")]),n("br"),n("span",{staticClass:"line-number"},[e._v("28")]),n("br"),n("span",{staticClass:"line-number"},[e._v("29")]),n("br"),n("span",{staticClass:"line-number"},[e._v("30")]),n("br"),n("span",{staticClass:"line-number"},[e._v("31")]),n("br"),n("span",{staticClass:"line-number"},[e._v("32")]),n("br"),n("span",{staticClass:"line-number"},[e._v("33")]),n("br"),n("span",{staticClass:"line-number"},[e._v("34")]),n("br"),n("span",{staticClass:"line-number"},[e._v("35")]),n("br"),n("span",{staticClass:"line-number"},[e._v("36")]),n("br"),n("span",{staticClass:"line-number"},[e._v("37")]),n("br"),n("span",{staticClass:"line-number"},[e._v("38")]),n("br"),n("span",{staticClass:"line-number"},[e._v("39")]),n("br"),n("span",{staticClass:"line-number"},[e._v("40")]),n("br"),n("span",{staticClass:"line-number"},[e._v("41")]),n("br"),n("span",{staticClass:"line-number"},[e._v("42")]),n("br"),n("span",{staticClass:"line-number"},[e._v("43")]),n("br"),n("span",{staticClass:"line-number"},[e._v("44")]),n("br"),n("span",{staticClass:"line-number"},[e._v("45")]),n("br"),n("span",{staticClass:"line-number"},[e._v("46")]),n("br"),n("span",{staticClass:"line-number"},[e._v("47")]),n("br"),n("span",{staticClass:"line-number"},[e._v("48")]),n("br"),n("span",{staticClass:"line-number"},[e._v("49")]),n("br"),n("span",{staticClass:"line-number"},[e._v("50")]),n("br"),n("span",{staticClass:"line-number"},[e._v("51")]),n("br"),n("span",{staticClass:"line-number"},[e._v("52")]),n("br"),n("span",{staticClass:"line-number"},[e._v("53")]),n("br"),n("span",{staticClass:"line-number"},[e._v("54")]),n("br"),n("span",{staticClass:"line-number"},[e._v("55")]),n("br"),n("span",{staticClass:"line-number"},[e._v("56")]),n("br"),n("span",{staticClass:"line-number"},[e._v("57")]),n("br"),n("span",{staticClass:"line-number"},[e._v("58")]),n("br"),n("span",{staticClass:"line-number"},[e._v("59")]),n("br"),n("span",{staticClass:"line-number"},[e._v("60")]),n("br"),n("span",{staticClass:"line-number"},[e._v("61")]),n("br"),n("span",{staticClass:"line-number"},[e._v("62")]),n("br"),n("span",{staticClass:"line-number"},[e._v("63")]),n("br"),n("span",{staticClass:"line-number"},[e._v("64")]),n("br"),n("span",{staticClass:"line-number"},[e._v("65")]),n("br"),n("span",{staticClass:"line-number"},[e._v("66")]),n("br"),n("span",{staticClass:"line-number"},[e._v("67")]),n("br"),n("span",{staticClass:"line-number"},[e._v("68")]),n("br"),n("span",{staticClass:"line-number"},[e._v("69")]),n("br"),n("span",{staticClass:"line-number"},[e._v("70")]),n("br"),n("span",{staticClass:"line-number"},[e._v("71")]),n("br"),n("span",{staticClass:"line-number"},[e._v("72")]),n("br"),n("span",{staticClass:"line-number"},[e._v("73")]),n("br"),n("span",{staticClass:"line-number"},[e._v("74")]),n("br"),n("span",{staticClass:"line-number"},[e._v("75")]),n("br"),n("span",{staticClass:"line-number"},[e._v("76")]),n("br"),n("span",{staticClass:"line-number"},[e._v("77")]),n("br"),n("span",{staticClass:"line-number"},[e._v("78")]),n("br")])]),n("p",[e._v("Note that you have to change the value of the MAIN_CLASS variable in the above content according to the project's entry class, and the same applies to the jfinal.bat script on Windows.")]),e._v(" "),n("p",[e._v("Start the project with the command . /jfinal.sh start")]),e._v(" "),n("p",[e._v("Shut down the project: . /jfinal.sh stop")]),e._v(" "),n("p",[e._v("Restart the project: . /jfinal.sh restart")]),e._v(" "),n("p",[e._v('Special Note: When using the above command line, first use mvn clean package to package the project, and then use the cd command to jump to the directory of the package to execute the command. Instead of cd jumping to the root directory of the project, many people make this mistake. See the next subsection, "6. Packaging", for more information on packaging.')]),e._v(" "),n("p",[e._v("For the sake of space, I won't post the windows script here, you can download the jfinal demo on the right side of the homepage of the official website to get it. The latest version of the script can be downloaded here: https://gitee.com/jfinal/jfinal-undertow")]),e._v(" "),n("p",[e._v("How to use the windows script is as follows:")]),e._v(" "),n("p",[e._v("Start project command: jfinal.bat start")]),e._v(" "),n("p",[e._v("Close the project: jfinal.bat stop")]),e._v(" "),n("p",[e._v("Restart the project: jfinal.bat restart")]),e._v(" "),n("p",[e._v("Note: linux, mac under the script file line feed characters must be '\\n', while under windows must be \"\\r\\n\", otherwise the script can not be executed, and will output unintelligible error messages, difficult to troubleshoot. How to check the line break character in the script file is shown in the document: https://www.jfinal.com/doc/1-5")]),e._v(" "),n("p",[e._v("Highly recommended: It is highly recommended to download jfinal_demo_for_maven.zip from the home page, from which you can get the configuration files and script files such as pom.xml, package.xml, jfinal.sh, and so on, which are covered in the above 5 subsections. Make sure you download the latest version.")]),e._v(" "),n("h3",{attrs:{id:"_6-packaging"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-packaging"}},[e._v("#")]),e._v(" 6. Packaging")]),e._v(" "),n("p",[e._v("Open the command line terminal, cd command to enter the root directory of the project, and run the following command to package the project.")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("mvn clean package\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("p",[e._v("After executing the above package command, the xxx.zip file will appear in the target directory under the project root, unzip the zip file with the command line . /jfinal.sh start to run it.")]),e._v(" "),n("p",[e._v("In addition to the zip file, a directory will be created under the target, use the command line . /jfinal.sh start to start the project. The contents of this directory are identical to the contents of the zip file.")]),e._v(" "),n("h3",{attrs:{id:"_7-deployment"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-deployment"}},[e._v("#")]),e._v(" 7. Deployment")]),e._v(" "),n("p",[e._v("Upload the zip file generated by the above packing commands to the server and decompress it to complete the deployment work. The biggest advantage of developing a project based on jfinal-undertow is that you don't need to download, install, and configure a server such as tomcat.")]),e._v(" "),n("h3",{attrs:{id:"_8-fatjar-packaging-and-deployment"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_8-fatjar-packaging-and-deployment"}},[e._v("#")]),e._v(" 8. fatjar packaging and deployment")]),e._v(" "),n("p",[e._v("fatjar packaging refers to the project of all classes, all resources and all jar package dependencies are packaged into a single jar package, packaged independent jar package can be easily copied, deployed, run, very suitable for microservices project development, but also very suitable for no web resources or very few web resources project!")]),e._v(" "),n("p",[e._v("You can download jfinal-demo-for-maven from the homepage of the official website, which has a document describing this method in detail under the doc directory, and will add the fatjar packaging method in the documentation channel.")]),e._v(" "),n("h3",{attrs:{id:"_9-the-main-advantages-of-jfinal-undertow"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_9-the-main-advantages-of-jfinal-undertow"}},[e._v("#")]),e._v(" 9, the main advantages of jfinal-undertow")]),e._v(" "),n("p",[e._v("1: very fast startup, startup speed than tomcat 5 to 8 times faster. jfinal.com official website startup time within 1.5 seconds")]),e._v(" "),n("p",[e._v("2: Undertow is an open source product of Red Hat and is Wildfly's default web server, with a Java web server market share higher than Jetty and second only to Tomcat.")]),e._v(" "),n("p",[e._v("3: minimalist and subtle hot deployment design, to achieve extremely fast and lightweight hot deployment, so that the development experience to upgrade another level")]),e._v(" "),n("p",[e._v("4: performance is higher than tomcat, jetty, can replace tomcat, jetty for production environments")]),e._v(" "),n("p",[e._v("5: undertow for embedded and born , can be directly used for production environment deployment , deployment without downloading services , no need to configure services , very suitable for microservices development, deployment")]),e._v(" "),n("p",[e._v("6: Say goodbye to web.xml, say goodbye to tomcat, say goodbye to jetty, save a lot of packaging and deployment time. Make development, packaging, deployment become a happy thing!")]),e._v(" "),n("p",[e._v("7: feature-rich , support classHotSwap, WebSocket, gzip compression, servlet, filter, sessionHotSwap and other features .")]),e._v(" "),n("p",[e._v("8: support fatjar and non-fatjar packaging mode, easy to support microservices")]),e._v(" "),n("p",[e._v("9: development, packaging, deployment integration , the whole process does not need to adjust or modify any part of the project , the real realization of high-speed development from the high-speed deployment .")])])}),[],!1,null,null,null);n.default=s.exports}}]);