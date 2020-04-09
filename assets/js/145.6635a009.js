(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{452:function(t,s,a){"use strict";a.r(s);var i=a(7),e=Object(i.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"growi-v3-5-x-へのアップグレード"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#growi-v3-5-x-へのアップグレード","aria-hidden":"true"}},[t._v("#")]),t._v(" GROWI v3.5.x へのアップグレード")]),t._v(" "),a("p",[t._v("v3.5 では、スキーマバージョンが 2 のプラグインをサポートしなくなり、スキーマバージョン 3 のプラグインのみ動作するようになりました。")]),t._v(" "),a("p",[t._v("また、以下の3つの機能が"),a("strong",[t._v("廃止")]),t._v("されました。")]),t._v(" "),a("ul",[a("li",[t._v("Basic 認証")]),t._v(" "),a("li",[t._v("Crowi Classic 認証機構")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://medium.com/crowi-book/crowi-v1-5-0-5a62e7c6be90",target:"_blank",rel:"noopener noreferrer"}},[t._v("Crowi Template 記法"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"プラグインについて"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#プラグインについて","aria-hidden":"true"}},[t._v("#")]),t._v(" プラグインについて")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://hub.docker.com/r/weseek/growi/",target:"_blank",rel:"noopener noreferrer"}},[t._v("公式の Docker イメージ"),a("OutboundLink")],1),t._v("を利用しているシステムには影響はありません")])]),t._v(" "),a("p",[t._v("公式プラグインである "),a("a",{attrs:{href:"https://github.com/weseek/growi-plugin-lsx",target:"_blank",rel:"noopener noreferrer"}},[t._v("weseek/growi-plugin-lsx"),a("OutboundLink")],1),t._v(" と "),a("a",{attrs:{href:"https://github.com/weseek/growi-plugin-pukiwiki-like-linker",target:"_blank",rel:"noopener noreferrer"}},[t._v("weseek/growi-plugin-pukiwiki-like-linker\n"),a("OutboundLink")],1),t._v(" は、スキーマバージョン 3 でリリースされた v3.0.0 へアップグレードしてください。")]),t._v(" "),a("h3",{attrs:{id:"プラグインアップグレード手順"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#プラグインアップグレード手順","aria-hidden":"true"}},[t._v("#")]),t._v(" プラグインアップグレード手順")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("yarn upgrade growi-plugin-lsx --latest\nyarn upgrade growi-plugin-pukiwiki-like-linker --latest\n")])])]),a("h2",{attrs:{id:"basic-認証廃止について"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-認証廃止について","aria-hidden":"true"}},[t._v("#")]),t._v(" Basic 認証廃止について")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("GROWI の管理画面上で Basic 認証を設定していなかったシステムには影響はありません")])]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("GROWI の管理画面上で Basic 認証を設定していたシステムは、アップグレード後 Basic 認証で守られなくなります")])]),t._v(" "),a("h3",{attrs:{id:"アップグレード前にチェックすべきこと"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#アップグレード前にチェックすべきこと","aria-hidden":"true"}},[t._v("#")]),t._v(" アップグレード前にチェックすべきこと")]),t._v(" "),a("ul",{staticClass:"contains-task-list"},[a("li",{staticClass:"task-list-item"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" GROWI の管理画面(セキュリティ設定)で、Basic 認証を設定しているか")]),t._v(" "),a("li",{staticClass:"task-list-item"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" GROWI の管理画面(セキュリティ設定)で、ゲストユーザーへのアクセスはどのような設定になっているか\n"),a("ul",{staticClass:"contains-task-list"},[a("li",{staticClass:"task-list-item"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" ゲストによる閲覧を許している場合、既存ページに機密性の高い情報はないか")])])])]),t._v(" "),a("h3",{attrs:{id:"代替手段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代替手段","aria-hidden":"true"}},[t._v("#")]),t._v(" 代替手段")]),t._v(" "),a("ul",[a("li",[t._v("Basic 認証が必要な場合は、別途 Apache や nginx 等によるリバースプロキシの設置を検討してください")])]),t._v(" "),a("h2",{attrs:{id:"crowi-classic-認証機構廃止について"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#crowi-classic-認証機構廃止について","aria-hidden":"true"}},[t._v("#")]),t._v(" Crowi Classic 認証機構廃止について")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Passport 認証機構を利用していたシステムは影響ありません")])]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("Crowi Classic 認証機構を利用していた場合、各ユーザーが行っていた Google OAuth 認証連携の設定は無効になります")])]),t._v(" "),a("h3",{attrs:{id:"影響"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#影響","aria-hidden":"true"}},[t._v("#")]),t._v(" 影響")]),t._v(" "),a("ul",[a("li",[t._v("GROWI v3.5.x 以降、デフォルトで自動的に Passport 認証機構を利用するようになります")]),t._v(" "),a("li",[t._v("ユーザー名/E-mail とパスワードによるログインを行っていたユーザーは、これまで同様の操作でログイン可能です")]),t._v(" "),a("li",[t._v("Google OAuth 認証連携は無効になります\n"),a("ul",[a("li",[t._v("ユーザー名/Email とパスワードを忘れているユーザーはログインできなくなります")])])])]),t._v(" "),a("h3",{attrs:{id:"アップグレード前にチェックすべきこと-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#アップグレード前にチェックすべきこと-2","aria-hidden":"true"}},[t._v("#")]),t._v(" アップグレード前にチェックすべきこと")]),t._v(" "),a("ul",{staticClass:"contains-task-list"},[a("li",{staticClass:"task-list-item"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" Google OAuth によるログインを常用しているユーザーがいないか\n"),a("ul",{staticClass:"contains-task-list"},[a("li",{staticClass:"task-list-item"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" 当該ユーザーの中に、ユーザー名/Email とパスワードを忘れているユーザーがいないか\n"),a("ul",{staticClass:"contains-task-list"},[a("li",{staticClass:"task-list-item"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" 当該ユーザーにパスワードの再発行を行い、正常にログインできることを確認したか")])])])])]),t._v(" "),a("li",{staticClass:"task-list-item"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" v3.5 以降へのバージョンアップ前に Passport 認証機構への切り替え期間を設けられないか")])]),t._v(" "),a("h3",{attrs:{id:"代替手段-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代替手段-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 代替手段")]),t._v(" "),a("ul",[a("li",[t._v("Passport 認証機構への切り替え後、管理画面(セキュリティ設定)で新たに Google OAuth の設定を行う")])]),t._v(" "),a("h2",{attrs:{id:"crowi-template-記法廃止について"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#crowi-template-記法廃止について","aria-hidden":"true"}},[t._v("#")]),t._v(" Crowi Template 記法廃止について")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("Crowi Template 記法は処理されなくなります")])]),t._v(" "),a("h3",{attrs:{id:"アップグレード前にチェックすべきこと-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#アップグレード前にチェックすべきこと-3","aria-hidden":"true"}},[t._v("#")]),t._v(" アップグレード前にチェックすべきこと")]),t._v(" "),a("ul",{staticClass:"contains-task-list"},[a("li",{staticClass:"task-list-item"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",disabled:"",type:"checkbox"}}),t._v(" Crowi Template 記法を常用しているユーザーがいないか")])]),t._v(" "),a("h3",{attrs:{id:"代替手段-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代替手段-3","aria-hidden":"true"}},[t._v("#")]),t._v(" 代替手段")]),t._v(" "),a("ul",[a("li",[t._v("GROWI が搭載している「同一階層テンプレート」「下位層テンプレート」での運用を検討してください")])])])},[],!1,null,null,null);s.default=e.exports}}]);