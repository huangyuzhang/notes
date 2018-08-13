(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{175:function(s,t,a){"use strict";a.r(t);var e=a(0),n=Object(e.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[s._m(0),s._v(" "),s._m(1),s._v(" "),s._m(2),s._v(" "),a("p",[s._v("下载git服务："),a("a",{attrs:{href:"https://git-scm.com/downloads",target:"_blank",rel:"noopener noreferrer"}},[s._v("git官网"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("网站会自动检测你的操作系统匹配的版本，下载后按照引导进行安装即可；Linux系统通过命令行进行安装，如：")]),s._v(" "),s._m(3),s._m(4),s._v(" "),s._m(5),s._m(6),s._v(" "),a("p",[s._v("由于 GitHub 的私有仓库收收费的，而如果我们并不想要开源当前的项目，我们就可以通过以下方法在服务器上建立一个私有的 git 仓库。")]),s._v(" "),a("p",[s._v("以本地编写的网站项目为例，以下教程将展示如何为现有项目创建 git 仓库，并推送至远程服务器的 git 仓库，最后再网站服务器下载存储在远程 git 仓库的网站项目。")]),s._v(" "),a("p",[s._v("（远程仓库和网站服务器不需要是同一台服务器）")]),s._v(" "),s._m(7),s._v(" "),s._m(8),s._v(" "),s._m(9),s._v(" "),s._m(10),s._m(11),s._v(" "),s._m(12),s._v(" "),s._m(13),a("p",[s._v("添加一下代码：")]),s._v(" "),s._m(14),s._m(15),s._v(" "),a("p",[s._v("进入项目所在根目录，初始化 git 仓库。")]),s._v(" "),s._m(16),a("p",[s._v("将项目现有文件加入stage。")]),s._v(" "),s._m(17),a("p",[s._v("提交当前更改。")]),s._v(" "),s._m(18),s._m(19),s._v(" "),s._m(20),s._v(" "),s._m(21),s._m(22),s._v(" "),s._m(23),s._v(" "),s._m(24),a("p",[s._v("至此，我们就成功的将本地的项目存放到远程服务器的git仓库，并在远程服务器成功获取存放在git仓库中的项目。")]),s._v(" "),s._m(25),s._v(" "),a("p",[s._v("日后即可按照以下操作快速将本地网站同步到网站服务器，以 vuepress 为例：")]),s._v(" "),s._m(26),s._m(27),s._m(28),s._v(" "),s._m(29),s._v(" "),s._m(30),a("p",[s._v("这是由于远程库中的更改与本地的更改有冲突。\ngit的提示已经非常明确了，告诉我们要么把我们的更新进行commit要么就先stash本地更新。")]),s._v(" "),a("p",[s._v("第一种方法，stash：")]),s._v(" "),s._m(31),a("p",[s._v("第二种方法：放弃本地的修改，直接覆盖")]),s._v(" "),s._m(32),s._m(33),s._v(" "),a("p",[s._v("Gogs提供类似于 GitHub 的开源服务，并且易于部署，项目地址："),a("a",{attrs:{href:"https://gogs.io/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Gogs：一款极易搭建的自助 Git 服务"),a("OutboundLink")],1)])])},[function(){var s=this.$createElement,t=this._self._c||s;return t("h1",{attrs:{id:"git-服务器搭建及配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-服务器搭建及配置","aria-hidden":"true"}},[this._v("#")]),this._v(" git 服务器搭建及配置")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("代码规范")]),this._v(" "),t("p",[this._v("远程服务器命令前有符号“$”，本地服务器则没有")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"git-服务安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-服务安装","aria-hidden":"true"}},[this._v("#")]),this._v(" git 服务安装")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("$ yum "),t("span",{attrs:{class:"token function"}},[this._v("install")]),this._v(" "),t("span",{attrs:{class:"token function"}},[this._v("git")]),this._v("\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"git-操作指令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-操作指令","aria-hidden":"true"}},[this._v("#")]),this._v(" git 操作指令")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token comment"}},[s._v("# git 状态")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" status\n\n"),a("span",{attrs:{class:"token comment"}},[s._v("# git 状态")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" status -s\n\n"),a("span",{attrs:{class:"token comment"}},[s._v("# git 进入到指定分制")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout "),a("span",{attrs:{class:"token operator"}},[s._v("<")]),s._v("branch"),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"git-远程服务器配置及连接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-远程服务器配置及连接","aria-hidden":"true"}},[this._v("#")]),this._v(" git 远程服务器配置及连接")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"远程-git-仓库创建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#远程-git-仓库创建","aria-hidden":"true"}},[this._v("#")]),this._v(" 远程 git 仓库创建")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("通过 ssh 连接服务器，假设已经有一个统一存放 git 库的父文件夹，位于"),t("code",[this._v("/home/git")]),this._v("，在其中为项目"),t("code",[this._v("myweb")]),this._v("创建一个 git 仓库 "),t("code",[this._v("myweb.git")]),this._v("。")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("目录结构为 "),t("code",[this._v("/home/git/myweb.git")]),this._v("。")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{attrs:{class:"token function"}},[s._v("cd")]),s._v(" /home/git\n$ "),a("span",{attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" myweb.git\n$ "),a("span",{attrs:{class:"token function"}},[s._v("cd")]),s._v(" myweb.git\n$ "),a("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" init --bare\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[a("code",[s._v("git init")]),s._v("命令会在当前项目目录中创建一个"),a("code",[s._v(".git")]),s._v("文件夹作为当前项目的 git；")]),s._v(" "),a("p",[a("code",[s._v("git init --bare")]),s._v("命令直接将当前文件夹创建为 git 仓库，不会创建"),a("code",[s._v(".git")]),s._v("文件夹。")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h4",{attrs:{id:"远程服务器允许接受push请求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#远程服务器允许接受push请求","aria-hidden":"true"}},[this._v("#")]),this._v(" 远程服务器允许接受push请求")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{attrs:{class:"token function"}},[s._v("cd")]),s._v(" .git\n$ "),a("span",{attrs:{class:"token function"}},[s._v("vi")]),s._v(" config\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("[receive]\n\tdenyCurrentBranch = ignore\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br"),t("span",{staticClass:"line-number"},[this._v("2")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"本地-git-仓库创建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本地-git-仓库创建","aria-hidden":"true"}},[this._v("#")]),this._v(" 本地 git 仓库创建")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{attrs:{class:"token function"}},[this._v("git")]),this._v(" init\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{attrs:{class:"token function"}},[this._v("git")]),this._v(" add "),t("span",{attrs:{class:"token keyword"}},[this._v(".")]),this._v("\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{attrs:{class:"token function"}},[this._v("git")]),this._v(" commit -m "),t("span",{attrs:{class:"token string"}},[this._v('"add git"')]),this._v("\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("为远程服务器地址设置别名")]),s._v(" "),a("p",[s._v("为远程服务器地址设置别名可以方便日后的连接。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" remote add "),a("span",{attrs:{class:"token operator"}},[s._v("<")]),s._v("name"),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{attrs:{class:"token operator"}},[s._v("<")]),s._v("url"),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("如")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" remote add myweb ssh://ipaddress/path/myweb.git"),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("日后当需要连接到该服务器下的"),a("code",[s._v("myweb")]),s._v("git仓库时，只需要通过别名即可快速调用，如：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" push myweb master\n"),a("span",{attrs:{class:"token comment"}},[s._v("# 等同于")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" push ssh://ipaddress/path/myweb.git master\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("查看该git仓库中已经保存的别名：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" remote\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("将项目"),t("code",[this._v("push")]),this._v("推送到远程服务器中指定的 git 仓库（项目别名设置参考上方提示）：")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" push "),a("span",{attrs:{class:"token operator"}},[s._v("<")]),s._v("项目别名"),a("span",{attrs:{class:"token operator"}},[s._v(">")]),s._v(" master\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"网站服务器pull项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#网站服务器pull项目","aria-hidden":"true"}},[this._v("#")]),this._v(" 网站服务器"),t("code",[this._v("pull")]),this._v("项目")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("之后我们进入网站所在根目录，以将存放在git仓库"),t("code",[this._v("home/git/myweb.git")]),this._v("的项目"),t("code",[this._v("pull")]),this._v("到网站服务器目录"),t("code",[this._v("/home/www/myweb.com")]),this._v("为例：")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{attrs:{class:"token function"}},[s._v("cd")]),s._v(" /home/www/myweb.com\n$ "),a("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" pull myweb master\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"流程化操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#流程化操作","aria-hidden":"true"}},[this._v("#")]),this._v(" 流程化操作")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token comment"}},[s._v("# 本地 项目编辑完成")]),s._v("\nvuepress build "),a("span",{attrs:{class:"token keyword"}},[s._v(".")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("# vuepress 编译")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" add "),a("span",{attrs:{class:"token keyword"}},[s._v(".")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("# stage 编译的文件")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),a("span",{attrs:{class:"token string"}},[s._v('"操作记录"')]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("# 提交修改并记录")]),s._v("\n"),a("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" push myweb master "),a("span",{attrs:{class:"token comment"}},[s._v("# push 到远程 git 服务器")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token comment"}},[s._v("# 网站服务器")]),s._v("\n$ "),a("span",{attrs:{class:"token function"}},[s._v("cd")]),s._v(" /home/myweb.com "),a("span",{attrs:{class:"token comment"}},[s._v("# 进入网页服务器项目页面")]),s._v("\n$ "),a("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" pull myweb master "),a("span",{attrs:{class:"token comment"}},[s._v("# 从远程 git 服务器 pull 项目文件")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"常见问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常见问题","aria-hidden":"true"}},[this._v("#")]),this._v(" 常见问题")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"pull-冲突"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pull-冲突","aria-hidden":"true"}},[this._v("#")]),this._v(" pull 冲突")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("Please, commit your changes or stash them before you can merge.  \nAborting\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br"),t("span",{staticClass:"line-number"},[this._v("2")]),t("br")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" stash\n$ "),a("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" pull\n$ "),a("span",{attrs:{class:"token function"}},[s._v("git")]),s._v(" stash pop\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{attrs:{class:"token function"}},[this._v("git")]),this._v(" reset --hard\n"),t("span",{attrs:{class:"token function"}},[this._v("git")]),this._v(" pull myweb master\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br"),t("span",{staticClass:"line-number"},[this._v("2")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"附录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#附录","aria-hidden":"true"}},[this._v("#")]),this._v(" 附录")])}],!1,null,null,null);n.options.__file="git.md";t.default=n.exports}}]);