const works = [
  {
    key: "blockbreaker",
    title: "ブロック崩し",
    image: "img/BlockBreak.png",
    link: "Game1.html?key=blockbreaker",
    date: "2025-07-30",
    genre: "アクション",
    summary: "ブロックを壊して、ハイスコアを狙いましょう",
    discript:`ブロック崩しです。
              バーに落ちてくるボールをあて、ブロックめがけて跳ね返し、ブロックが壊れることでスコアが加算されます
              ブロックを壊すと一定確率でアイテムが生成され、それがバーに当たるとランダムな効果が発動します`,
    operation: "矢印キーで左右の操作",
    other: `破壊したブロックの数や、到達した最高ステージなどのランキング機能あり
            \nTop画面のRenameからプレイヤー名を変更できます`,
    ranking: "ランキング機能あり",
    iframeSrc: "https://itch.io/embed-upload/14479922?color=333333"
  },
  {
    key:"PartyMatch",
    title: "政党マッチングアプリ",
    image: "img/Match.png",
    link: "Game1.html?key=PartyMatch",
    date: "2025-06-27",
    genre: "診断",
    summary: "政党との相性を診断できるアプリです",
    discript:`質問に答えていくことで、架空の政党との価値観を比較できます
              10個の質問と、1つの重要論点チェックがあります
              価値観の比較は、グラフで比べることができます`,
    operation: "クリックで回答を選ぶ",
    other: `質問の回答によって、回答者のパラメータが変動します
            重要論点にチェックをいれることで、パラメータに重みづけが発生します`,
    ranking: "",
    iframeSrc: "https://makuta1610.github.io/PartyMatch/"
  },
  {
    key:"Shooter",
    title: "シューティングゲーム",
    image: "img/Shooting.png",
    link: "Game1.html?key=Shooter",
    date: "2025-08-01",
    genre: "シューティング、アクション",
    summary: "宇宙戦闘機で隕石を破壊し、地球を守ろう。",
    discript:`宇宙戦闘機で隕石めがけてビームを放ち、地球を守りましょう
              戦闘機または地球のHPが0になるとゲームオーバーです
              一定数隕石を破壊すると、巨大隕石が現れ、それを撃破するとステージアップします
              隕石を破壊し貯まったポイントで、アイテムの購入や戦闘機の性能アップができます`,
    operation: `矢印キーで上下左右に移動
                Aキーでビーム射出
                Pキーでポーズメニュー
                各種キーでアイテムを使用(ボタンクリックでも使用可能)`,
    other: `これまでの総スコアや到達ステージなどのランキング機能あり
            ゲーム開始時に以前のプレイ記録があれば、続きからスタート可能`,
    ranking: "あり",
    iframeSrc: "https://itch.io/embed-upload/14480114?color=333333"
  },
  {
    key:"Janken",
    title: "じゃんけんに勝つためのアプリ",
    image: "img/Choki_icn.jpg",
    link: "Game1.html?key=Janken",
    date: "2025-07-01",
    genre: "データベース、シミュレーション",
    summary: "じゃんけんに勝つためにデータを集めましょう",
    discript:`誰かとじゃんけんする時に、自分が出した手を順に選択し、最後に勝敗を選択すれば、自分と相手の手を記録します
              自分やこれまでの対戦相手のデータから、勝率やよく出す手などを見ることができます
              データを用いて、対戦相手を模したAIとシミュレーションができます`,
    operation: "クリック操作",
    other: `環境：Windows
            アプリ種別：.NET MAUI
            DB：SQLite、ローカルに保存されます`,
    ranking: "データなし",
    iframeSrc: "iFrameLink.html",
    exURL:"https://www.dropbox.com/scl/fi/ronvjqk4rtuk4309w5ikt/.zip?rlkey=tdw6q86nfdmg50wj5aj0e291n&dl=0"
  },
    {
    key:"Nazotoki",
    title: "謎解き",
    image: "img/nazosam.png",
    link: "Nazo.html",
    date: "2025-08-05",
    genre: "謎解き",
    summary: "謎を解いて部屋を脱出しよう",
    discript:`各部屋に鍵や扉を開けるパスワードが隠されている
              謎を解いて、鍵やパスワードを手に入れよう`,
    operation: "キー入力、マウス操作、画像保存",
    other: `環境：GoogleCrome
            アプリ種別：ブラウザゲーム
            画像の保存や、ドラッグ操作による移動などあり`,
    ranking: "データなし",
    iframeSrc: "Nazo.html",
    exURL:"https://www.dropbox.com/scl/fi/ronvjqk4rtuk4309w5ikt/.zip?rlkey=tdw6q86nfdmg50wj5aj0e291n&dl=0"
  },
    {
    key: "shogi",
    title: "将棋",
    image: "img/shogi.png",
    link: "Game1.html?key=shogi",
    date: "2025-08-19",
    genre: "ボードゲーム",
    summary: "オンライン2人対戦ができる将棋です",
    discript:`4桁のIDでルームを作成し、2人参加することでゲームができます。
              ソロプレイでは、教師あり学習を行ったAIと対局ができます`,
    operation: "クリックで駒の移動先を選択",
    other: `二歩は禁止していますが、打ち歩詰めや先日手などは禁止できていません。
            Top画面のRenameからプレイヤー名を変更できます`,
    ranking: "ランキング機能なし",
    iframeSrc: "https://itch.io/embed-upload/14710592?color=333333"
  },
];