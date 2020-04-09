(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{522:function(t,s,a){"use strict";a.r(s);var n=a(7),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"getting-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started","aria-hidden":"true"}},[t._v("#")]),t._v(" Getting Started")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("This chapter introduces development enviroment "),a("strong",[t._v("specifically used in WESEEK, Inc")]),t._v(".\nGenerally, some of the tools and configurations are not required for developing GROWI.")])]),t._v(" "),a("h2",{attrs:{id:"set-up-merge-tool"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-up-merge-tool","aria-hidden":"true"}},[t._v("#")]),t._v(" Set up Merge Tool")]),t._v(" "),a("ol",[a("li",[t._v("Install P4Merge (Helix Visual Client (P4V))\n"),a("ul",[a("li",[t._v("Download and install P4Merge from "),a("a",{attrs:{href:"https://www.perforce.com/downloads/helix-visual-client-p4v",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.perforce.com/downloads/helix-visual-client-p4v"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("Sign up if you don't have an account.")])])]),t._v(" "),a("li",[t._v("Set up P4Merge\n"),a("ul",[a("li",[t._v('On Diff tab, select any 2 files and press "OK".')]),t._v(" "),a("li",[t._v("Edit -> Preferences\n"),a("ul",[a("li",[t._v('For "Character encoding", select either "Unicode (UTF-8, no BOM)" or "Unicode(UTF-8)".')]),t._v(" "),a("li",[t._v('For "Line ending type", select "UNIX (LF).')])])])])])]),t._v(" "),a("h2",{attrs:{id:"set-up-git-client"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-up-git-client","aria-hidden":"true"}},[t._v("#")]),t._v(" Set up Git Client")]),t._v(" "),a("ol",[a("li",[t._v("Install SourceTree\n"),a("ul",[a("li",[t._v("Download and install SourceTree from "),a("a",{attrs:{href:"https://www.atlassian.com/software/sourcetree",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.atlassian.com/software/sourcetree"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v('If SourceTree shows a dialog, "We were not able to locate a Git install on our system already", select "Download an embedded version of Git for SourceTree alone to use".')])])]),t._v(" "),a("li",[t._v("Set up SourceTree\n"),a("ol",[a("li",[t._v("Open a terminal from SourceTree.")]),t._v(" "),a("li",[t._v("Disable autoCRLF.\n"),a("ul",[a("li",[t._v("Execute the following command "),a("code",[t._v("git config --global core.autoCRLF false")]),t._v(".")])])]),t._v(" "),a("li",[t._v("Set up your account.\n"),a("ul",[a("li",[t._v("Tool > Options > General")]),t._v(" "),a("li",[t._v('Set "Default user information".')])])]),t._v(" "),a("li",[t._v("Set P4Merge for Merge Tool\n"),a("ul",[a("li",[t._v("Tool > Options > Diff")]),t._v(" "),a("li",[t._v('In "External Diff / Merge" section, select "P4Merge" for "Merge Tool".')])])]),t._v(" "),a("li",[t._v("Set Default Encoding\n"),a("ul",[a("li",[t._v("Tool > Options > General")]),t._v(" "),a("li",[t._v('In "Repo Settings" section, select "utf-8" for "Default text encoding".')])])])])])]),t._v(" "),a("h2",{attrs:{id:"set-up-node-js-environment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-up-node-js-environment","aria-hidden":"true"}},[t._v("#")]),t._v(" Set up Node.js Environment")]),t._v(" "),a("p",[t._v("Test environment (CI) uses "),a("code",[t._v("node:12")]),t._v(". Use the version Node.js, npm, and Yarn compatible with "),a("code",[t._v("node:12")]),t._v(".")]),t._v(" "),a("tabs",[a("tab",{attrs:{name:"Windows"}},[a("ol",[a("li",[a("p",[t._v('Install "nvm-windows" (version manager for Node.js, npm)')]),t._v(" "),a("ul",[a("li",[t._v("Download "),a("code",[t._v("nvm-setup.zip")]),t._v(" from "),a("a",{attrs:{href:"https://github.com/coreybutler/nvm-windows/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/coreybutler/nvm-windows/releases"),a("OutboundLink")],1),t._v(" and execute")])])]),t._v(" "),a("li",[a("p",[t._v("Install Node.js and npm (lookup latest version of 12.x from "),a("a",{attrs:{href:"https://nodejs.org/en/download/releases/)",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://nodejs.org/en/download/releases/)"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-cmd extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("nvm install 12.x.x\nnvm use 12.x.x\n")])])])]),t._v(" "),a("li",[a("p",[t._v("Install Yarn")]),t._v(" "),a("ul",[a("li",[t._v("Download and install Yarn from "),a("a",{attrs:{href:"https://yarnpkg.com/ja/docs/install",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://yarnpkg.com/ja/docs/install"),a("OutboundLink")],1)])])])])]),t._v(" "),a("tab",{attrs:{name:"Mac"}},[a("ol",[a("li",[a("p",[t._v("Install nvm")]),t._v(" "),a("ul",[a("li",[t._v("Follow "),a("a",{attrs:{href:"https://github.com/nvm-sh/nvm",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/nvm-sh/nvm"),a("OutboundLink")],1),t._v(" and install nvm.")])])]),t._v(" "),a("li",[a("p",[t._v("Install Node.js, npm")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("nvm "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" 12.x.x\nnvm use 12.x.x\n")])])])])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Install Yarn")]),t._v(" "),a("ul",[a("li",[t._v("Install according to the manual from "),a("a",{attrs:{href:"https://classic.yarnpkg.com/en/docs/install/#mac-stable",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://classic.yarnpkg.com/en/docs/install/#mac-stable"),a("OutboundLink")],1)])])])])])],1),t._v(" "),a("h3",{attrs:{id:"confirm-versions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#confirm-versions","aria-hidden":"true"}},[t._v("#")]),t._v(" Confirm Versions")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ node -v\nv12.14.0\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" -v\n6.13.4\n$ yarn -v\n1.19.1\n")])])]),a("h2",{attrs:{id:"set-up-source-code-editor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-up-source-code-editor","aria-hidden":"true"}},[t._v("#")]),t._v(" Set up Source Code Editor")]),t._v(" "),a("ol",[a("li",[t._v("Install Visual Studio Code.")]),t._v(" "),a("li",[t._v("Install extensions.\n"),a("ul",[a("li",[t._v("How to install extensions\n"),a("ul",[a("li",[a("code",[t._v("Ctrl + Shift + P")]),t._v(' -> select "Extensions: Show Recommended Extensions"')])])])])])]),t._v(" "),a("h2",{attrs:{id:"set-up-dependent-middlewares"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-up-dependent-middlewares","aria-hidden":"true"}},[t._v("#")]),t._v(" Set up Dependent Middlewares")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("Only if your environment does not support Docker, go through the following steps.")])]),t._v(" "),a("ol",[a("li",[t._v("Install VirtualBox\n"),a("ul",[a("li",[t._v("Download and install VirtualBox from "),a("a",{attrs:{href:"https://www.virtualbox.org/wiki/Downloads",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.virtualbox.org/wiki/Downloads"),a("OutboundLink")],1),t._v(".\n"),a("ul",[a("li",[t._v("Version "),a("code",[t._v("6.0.8")])])])]),t._v(" "),a("li",[t._v("No Extension Packs are required.")])])]),t._v(" "),a("li",[t._v("Install Vagrant\n"),a("ul",[a("li",[a("p",[t._v("nload and install Vagrant from "),a("a",{attrs:{href:"https://www.vagrantup.com/downloads.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.vagrantup.com/downloads.html"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("Create Vagrantfile")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Vagrant")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("configure")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n  config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("box "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"chaifeng/ubuntu-18.04-docker-19.03"')]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("### provision")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("### change mirror to Japanese location")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#config.vm.provision "shell", inline: <<-SHELL')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#  sed -i.bak -e "s%http://archive.ubuntu.com/ubuntu/%http://ftp.iij.ad.jp/pub/linux/ubuntu/archive/%g" /etc/apt/sources.list')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#SHELL")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("### install apt packages")]),t._v("\n  config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("provision "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"shell"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" preserve_order"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" inline"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SHELL")]),t._v("\n    apt"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("get update "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" apt"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("get install "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("q "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("y tmux git nano less\n  "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SHELL")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("### install docker-compose")]),t._v("\n  config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("provision "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"shell"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" preserve_order"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" inline"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SHELL")]),t._v("\n    curl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("sL "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://github.com/docker/compose/releases/download/1.25.0/docker-compose-$(uname -s)-$(uname -m)"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("o "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("usr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("local"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("bin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("docker"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("compose\n    chmod "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("usr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("local"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("bin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("docker"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("compose\n  "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SHELL")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("### clone git repos")]),t._v("\n  config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("provision "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"shell"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" privileged"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" inline"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SHELL")]),t._v("\n    git "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("C")]),t._v(" growi"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("docker"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("compose pull "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" git clone https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("weseek"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("growi"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("docker"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("compose\n  "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SHELL")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## port forwarding")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Proxy")]),t._v("\n  config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("network "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"forwarded_port"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" guest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" host"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" host_ip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),t._v("\n  config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("network "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"forwarded_port"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" guest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" host"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" host_ip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# App")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#config.vm.network "forwarded_port", guest: 3000, host: 3000, host_ip: "127.0.0.1"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# App2")]),t._v("\n  config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("network "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"forwarded_port"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" guest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3010")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" host"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3010")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" host_ip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# MongoDB")]),t._v("\n  config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("network "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"forwarded_port"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" guest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("27017")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" host"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("27017")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" host_ip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Redis")]),t._v("\n  config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("network "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"forwarded_port"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" guest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6379")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" host"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6379")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" host_ip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ElasticSearch")]),t._v("\n  config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("network "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"forwarded_port"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" guest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" host"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" host_ip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# elasticsearch-head")]),t._v("\n  config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("network "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"forwarded_port"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" guest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" host"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" host_ip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# MariaDB")]),t._v("\n  config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("network "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"forwarded_port"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" guest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3306")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" host"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3306")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" host_ip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# phpMyAdmin")]),t._v("\n  config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("network "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"forwarded_port"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" guest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" host"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" host_ip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Provider Options")]),t._v("\n  config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("provider "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"virtualbox"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("vb"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n    vb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("customize "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"modifyvm"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"--memory"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"4096"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])])])])])])],1)},[],!1,null,null,null);s.default=e.exports}}]);