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
    key:"Work_C",
    title: "制作物C(データなし)",
    image: "party_match.png",
    link: "Game1.html?key=Work_C",
    date: "2025-04-29",
    genre: "データなし",
    summary: "データなし",
    discript:"データなし",
    operation: "データなし",
    other: "データなし",
    ranking: "データなし",
    iframeSrc: "データなし"
  },
  {
    key:"Work_D",
    title: "制作物D(データなし)",
    image: "party_match.png",
    link: "Game1.html?key=Work_D",
    date: "2025-04-21",
    genre: "データなし",
    summary: "データなし",
    discript:"データなし",
    operation: "データなし",
    other: "データなし",
    ranking: "データなし",
    iframeSrc: "データなし"
  },
];