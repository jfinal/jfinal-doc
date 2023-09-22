(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{389:function(e,t,s){"use strict";s.r(t);var n=s(14),a=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h3",{attrs:{id:"_6-5-comments"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-5-comments"}},[e._v("#")]),e._v(" 6.5 Comments")]),e._v(" "),t("p",[e._v("The JFinal Template Engine supports both single-line and multi-line comments. Here's a code example:")]),e._v(" "),t("div",{staticClass:"language-plaintext line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-plaintext"}},[t("code",[e._v("### This is a single-line comment\n\n#--\n   This is the first line of a multi-line comment\n   This is the second line of a multi-line comment\n--#\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br")])]),t("p",[e._v("As shown above, single-line comments use three "),t("code",[e._v("#")]),e._v(" characters, while multi-line comments start with "),t("code",[e._v("#--")]),e._v(" and end with "),t("code",[e._v("--#")]),e._v(".")]),e._v(" "),t("p",[e._v("Unlike traditional template engines, single-line comments here use three characters primarily to reduce the likelihood of conflicts with the text content. Templates can contain highly diverse content, and using three characters significantly lowers the chances of conflicts.")]),e._v(" "),t("p",[t("strong",[e._v("Note for versions before JFinal 4.4")]),e._v(": When a comment is placed on the same line as a directive, the output will remove the newline character following the comment. For example:")]),e._v(" "),t("div",{staticClass:"language-plaintext line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-plaintext"}},[t("code",[e._v('#("AAA") ### This is a comment\nBBB\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("p",[e._v('The output for the above template would be: "AAABBB". If you want the output to strictly adhere to the newlines in the template, place the comment on a separate line, like this:')]),e._v(" "),t("div",{staticClass:"language-plaintext line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-plaintext"}},[t("code",[e._v('### This is a comment, placed on its own line\n#("AAA")\nBBB\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[e._v("The output for this template will strictly follow the newlines, producing:")]),e._v(" "),t("div",{staticClass:"language-plaintext line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-plaintext"}},[t("code",[e._v("AAA\nBBB\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("p",[e._v("The same applies to multi-line comments; simply place them separately.")]),e._v(" "),t("p",[e._v("In all other cases, the output strictly follows the template's newlines. This issue has been resolved in JFinal version 4.4, so it's recommended to upgrade to version 4.4 or higher.")])])}),[],!1,null,null,null);t.default=a.exports}}]);