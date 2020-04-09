(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{474:function(a,t,e){"use strict";e.r(t);var r=e(7),s=Object(r.a)({},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"hackmd-codimd-連携"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hackmd-codimd-連携","aria-hidden":"true"}},[a._v("#")]),a._v(" HackMD(CodiMD)連携")]),a._v(" "),e("p",[e("img",{attrs:{src:"/assets/images/hackmd-demo.gif",alt:"HackMD Demo"}})]),a._v(" "),e("h2",{attrs:{id:"概要"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#概要","aria-hidden":"true"}},[a._v("#")]),a._v(" 概要")]),a._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://hackmd.io",target:"_blank",rel:"noopener noreferrer"}},[a._v("HackMD"),e("OutboundLink")],1),a._v(" は、チームで単一の Markdown 同時多人数編集を行うにはとても優れたツールです。")]),a._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/hackmdio/codimd",target:"_blank",rel:"noopener noreferrer"}},[a._v("CodiMD"),e("OutboundLink")],1),a._v(" は HackMD からフォークした OSS です。")]),a._v(" "),e("li",[a._v("GROWI を HackMD/CodiMD と連携させることで、GROWI 管理下のドキュメントを同時に多人数で編集することができるようになります。")])]),a._v(" "),e("h2",{attrs:{id:"仕組み"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#仕組み","aria-hidden":"true"}},[a._v("#")]),a._v(" 仕組み")]),a._v(" "),e("ul",[e("li",[a._v("GROWI に HackMD/CodiMD 連携設定をすることで、HackMD/CodiMD のエディタを iframe 内に借りる形で表示できます。")]),a._v(" "),e("li",[a._v("ページのデータは "),e("a",{attrs:{href:"https://developer.mozilla.org/ja/docs/Web/API/Window/postMessage",target:"_blank",rel:"noopener noreferrer"}},[a._v("window.postMessage"),e("OutboundLink")],1),a._v(" を介して共有されます。")])]),a._v(" "),e("h2",{attrs:{id:"growi-docker-compose-で新しく-hackmd-codimd-コンテナを立てる"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#growi-docker-compose-で新しく-hackmd-codimd-コンテナを立てる","aria-hidden":"true"}},[a._v("#")]),a._v(" "),e("router-link",{attrs:{to:"/ja/admin-guide/getting-started/docker-compose.html"}},[a._v("growi-docker-compose")]),a._v(" で新しく HackMD(CodiMD) コンテナを立てる")],1),a._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/weseek/growi-docker-compose/tree/master/examples/integrate-with-hackmd",target:"_blank",rel:"noopener noreferrer"}},[a._v("こちら"),e("OutboundLink")],1),a._v(" の Example を利用します。")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/weseek/growi-docker-compose/blob/master/examples/integrate-with-hackmd/README.md",target:"_blank",rel:"noopener noreferrer"}},[a._v("README.md"),e("OutboundLink")],1),a._v(" の内容に従ってセットアップします。")]),a._v(" "),e("ol",[e("li",[e("code",[a._v("examples/integrate-with-hackmd/docker-compose.override.yml")]),a._v(" を用意")]),a._v(" "),e("li",[a._v("GROWI コンテナに環境変数を設定\n"),e("ul",[e("li",[e("code",[a._v("HACKMD_URI")]),a._v(": GROWI のクライアントを実行するブラウザからアクセス可能な CodiMD の URI")]),a._v(" "),e("li",[e("code",[a._v("HACKMD_URI_FOR_SERVER")]),a._v(": GROWI サーバーからアクセス可能な CodiMD の URI\n"),e("ul",[e("li",[a._v("設定されなかった場合は "),e("code",[a._v("HACKMD_URI")]),a._v(" を利用します")])])])])]),a._v(" "),e("li",[a._v("CodiMD コンテナに環境変数を設定\n"),e("ul",[e("li",[e("code",[a._v("GROWI_URI")]),a._v(": GROWI のクライアントを実行するブラウザからアクセス可能な GROWI の URI")])])]),a._v(" "),e("li",[a._v("コンテナの起動")]),a._v(" "),e("li",[a._v("GROWI の管理画面の「アプリ設定」から、サイトURL設定を行う\n"),e("ul",[e("li",[a._v("GROWI のクライアントを実行するブラウザからアクセス可能な GROWI の URI を入力")]),a._v(" "),e("li",[a._v("あるいは環境変数 "),e("code",[a._v("APP_SITE_URL")]),a._v(" で設定することもできる")])])])]),a._v(" "),e("h2",{attrs:{id:"既存の-hackmd-codimd-と連携する"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#既存の-hackmd-codimd-と連携する","aria-hidden":"true"}},[a._v("#")]),a._v(" 既存の HackMD(CodiMD) と連携する")]),a._v(" "),e("h3",{attrs:{id:"growi-の設定"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#growi-の設定","aria-hidden":"true"}},[a._v("#")]),a._v(" GROWI の設定")]),a._v(" "),e("ol",[e("li",[a._v("以下の環境変数を設定\n"),e("ul",[e("li",[e("code",[a._v("HACKMD_URI")]),a._v(": GROWI のクライアントを実行するブラウザからアクセス可能な CodiMD の URI")]),a._v(" "),e("li",[e("code",[a._v("HACKMD_URI_FOR_SERVER")]),a._v(": GROWI サーバーからアクセス可能な CodiMD の URI\n"),e("ul",[e("li",[a._v("設定されなかった場合は "),e("code",[a._v("HACKMD_URI")]),a._v(" を利用します")])])])])]),a._v(" "),e("li",[a._v("再起動")]),a._v(" "),e("li",[a._v("GROWI の管理画面の「アプリ設定」から、サイトURL設定を行う\n"),e("ul",[e("li",[a._v("GROWI のクライアントを実行するブラウザからアクセス可能な GROWI の URI を入力")]),a._v(" "),e("li",[a._v("あるいは環境変数 "),e("code",[a._v("APP_SITE_URL")]),a._v(" で設定することもできる")])])])]),a._v(" "),e("h3",{attrs:{id:"hackmd-codimd-の設定"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hackmd-codimd-の設定","aria-hidden":"true"}},[a._v("#")]),a._v(" HackMD(CodiMD) の設定")]),a._v(" "),e("ol",[e("li",[a._v("以下の環境変数を設定\n"),e("ul",[e("li",[e("code",[a._v("GROWI_URI")]),a._v(": GROWI のクライアントを実行するブラウザからアクセス可能な GROWI の URI")])])]),a._v(" "),e("li",[a._v("GROWI agent for HackMD を読み込むため、ejs を編集\n"),e("ul",[e("li",[e("code",[a._v("/codimd/public/views/codimd/head.ejs")]),a._v(" の末尾に以下を追加"),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("script src"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"<%= process.env.GROWI_URI %>/_hackmd/load-styles"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("script"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])])]),a._v(" "),e("li",[e("code",[a._v("/codimd/public/views/codimd/foot.ejs")]),a._v(" の末尾に以下を追加"),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("script src"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"<%= process.env.GROWI_URI %>/_hackmd/load-agent"')]),a._v(" defer"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("script"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])])])])]),a._v(" "),e("li",[a._v("再起動")])]),a._v(" "),e("h2",{attrs:{id:"動作確認"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#動作確認","aria-hidden":"true"}},[a._v("#")]),a._v(" 動作確認")]),a._v(" "),e("h3",{attrs:{id:"growi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#growi","aria-hidden":"true"}},[a._v("#")]),a._v(" GROWI")]),a._v(" "),e("ul",[e("li",[a._v("任意の編集可能なページを表示した際に、HackMD タブが表示されていることを確認")])]),a._v(" "),e("h3",{attrs:{id:"hackmd-codimd"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hackmd-codimd","aria-hidden":"true"}},[a._v("#")]),a._v(" HackMD(CodiMD)")]),a._v(" "),e("ul",[e("li",[a._v("任意の編集可能なページを表示した際に、ブラウザのコンソールに以下のようなログが表示されていることを確認"),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("[GROWI] Loading styles for HackMD is not processed because currently not in iframe\n[GROWI] Loading agent for HackMD is not processed because currently not in iframe\n")])])])])]),a._v(" "),e("h2",{attrs:{id:"トラブルシュート"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#トラブルシュート","aria-hidden":"true"}},[a._v("#")]),a._v(" トラブルシュート")]),a._v(" "),e("h3",{attrs:{id:"growi-で-hackmd-タブが表示されない"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#growi-で-hackmd-タブが表示されない","aria-hidden":"true"}},[a._v("#")]),a._v(" GROWI で HackMD タブが表示されない")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("HACKMD_URI")]),a._v(" に正しい値がセットされていることを確認してください")])]),a._v(" "),e("h3",{attrs:{id:"「start-to-edit-with-hackmd」ボタン押下時にエラー"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#「start-to-edit-with-hackmd」ボタン押下時にエラー","aria-hidden":"true"}},[a._v("#")]),a._v(" 「Start to edit with HackMD」ボタン押下時にエラー")]),a._v(" "),e("h4",{attrs:{id:"error-connecting-to-a-non-hackmd-server"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#error-connecting-to-a-non-hackmd-server","aria-hidden":"true"}},[a._v("#")]),a._v(" Error: Connecting to a non-HackMD server")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("HACKMD_URI_FOR_SERVER")]),a._v(" に正しい値がセットされていることを確認してください")]),a._v(" "),e("li",[a._v("GROWI サーバーから HackMD/CodiMD に対する疎通を確認してください")])]),a._v(" "),e("h4",{attrs:{id:"growi-client-failed-to-connect-to-growi-agent-for-hackmd"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#growi-client-failed-to-connect-to-growi-agent-for-hackmd","aria-hidden":"true"}},[a._v("#")]),a._v(" GROWI client failed to connect to GROWI agent for HackMD")]),a._v(" "),e("ul",[e("li",[a._v("GROWI のサイトURLに正しい値がセットされていることを確認してください")]),a._v(" "),e("li",[a._v("既存の HackMD/CodiMD に変更を加えている場合、以下を確認してください\n"),e("ul",[e("li",[a._v("head.ejs, foot.ejs に記述した内容が正しいこと")]),a._v(" "),e("li",[a._v("HackMD/CodiMD のソース中に挿入された script タグの src のURLに正常にアクセスできる(css, javascript をロードできる)こと")])])])])])},[],!1,null,null,null);t.default=s.exports}}]);