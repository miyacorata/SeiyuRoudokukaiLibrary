var books = [
    {
        "title": "手袋を買いに",
        "author": "新美南吉",
        "seiyu": "悠木碧",
        "tweet_url": "https://twitter.com/staff_aoi/status/1247690722494431234"
    },
    {
        "title": "うんちがでない",
        "author": "アサミンゴス",
        "seiyu": "今井麻美",
        "tweet_url": "https://twitter.com/asamingosu/status/1247868351830884352"
    },
    {
        "title": "春の詩集",
        "author": "河井酔茗",
        "seiyu": "園崎未恵",
        "tweet_url": "https://twitter.com/Sonozaki_mie/status/1247873669889585152"
    },
    {
        "title": "気絶人形",
        "author": "原民喜",
        "seiyu": "高橋李依",
        "tweet_url": "https://twitter.com/taka8rie/status/1247803315989012481"
    },
    {
        "title": "桃太郎",
        "author": "楠山正雄",
        "seiyu": "梶裕貴",
        "tweet_url": "https://twitter.com/KAJI__OFFICIAL/status/1247856499927289859"
    },
    {
        "title": "おやすみなさい、またあした",
        "author": "井ノ上奈々",
        "seiyu": "井ノ上奈々,市来光弘",
        "tweet_url": "https://twitter.com/inouenana/status/1247895580786843648"
    },
    {
        "title": "注文の多い料理店",
        "author": "宮沢賢治",
        "seiyu": "居留守かりん",
        "tweet_url": "https://twitter.com/mosimosi_irusu/status/1247856825350774784"
    },
    /*{
        "title": "よだかの星",
        "author": "宮沢賢治",  // ツイートが参照できなくなりましたので掲載を取り下げます
        "seiyu": "民安ともえ",
        "tweet_url": "https://twitter.com/tammy_now/status/1247918302019502080"
    },*/
    {
        "title": "彼岸花の教導",
        "author": "片喰藤火",
        "seiyu": "東北きりたん",
        "tweet_url": "https://twitter.com/touka_katabami/status/1247902296601591808"
    },
    {
        "title": "鬼護の石",
        "author": "片喰藤火",
        "seiyu": "東北きりたん",
        "tweet_url": "https://twitter.com/touka_katabami/status/1247902202984681472"
    },
    {
        "title": "自我ぜんまい",
        "author": "片喰藤火",
        "seiyu": "東北きりたん",
        "tweet_url": "https://twitter.com/touka_katabami/status/1247902037179654145"
    },
    {
        "title": "明日",
        "author": "新美南吉",
        "seiyu": "高倉裕貴",
        "tweet_url": "https://twitter.com/takani_takakura/status/1247912946451148800"
    },
    {
        "title": "うさぎとかえるの盆山",
        "author": "河野佑紀",
        "seiyu": "河野佑紀",
        "tweet_url": "https://twitter.com/kawano_awano/status/1247856900143591425"
    },
    {
        "title": "幸福が遠すぎたら",
        "author": "寺山修司",
        "seiyu": "太田彩華",
        "tweet_url": "https://twitter.com/ota__ayaka/status/1247944063573094401"
    },
    {
        "title": "かくれんぼ",
        "author": "村山籌子",
        "seiyu": "琴音有波",
        "tweet_url": "https://twitter.com/kotone_akv/status/1248191171572236290"
    },
    {
        "title": "やまなし",
        "author": "宮沢賢治",
        "seiyu": "すさつな",
        "tweet_url": "https://twitter.com/9y_vi/status/1247824531978219520"
    },
    {
        "title": "飴だま",
        "author": "新美南吉",
        "seiyu": "伊藤拓海",
        "tweet_url": "https://twitter.com/S_Ito_tak/status/1247829898481131523"
    },
    /*{
        "title": "ねこのおはなし",
        "author": "よこみぞゆり",    // 著作権の問題により掲載できません
        "seiyu": "上池仁容",
        "tweet_url": "https://twitter.com/1vu13LPK90dd3XK/status/1247962576354336769"
    },*/
    {
        "title": "きのこ会議",
        "author": "夢野久作",
        "seiyu": "あきやまかおる",
        "tweet_url": "https://twitter.com/hakokao/status/1248006222684422144"
    },
    {
        "title": "雪の女王",
        "author": "アンデルセン",
        "seiyu": "蒼樹里緒",
        "tweet_url": "https://twitter.com/ao_rio/status/1248042992067203072"
    },
    {
        "title": "西遊記",
        "author": "作者不詳",
        "seiyu": "蒼樹里緒",
        "tweet_url": "https://twitter.com/ao_rio/status/1248052339404967936"
    },
    {
        "title": "星の王子様(あのときの王子くん)", // カッコ内は青空文庫図書カードに基づくものです
        "author": "サン＝テグジュペリ",
        "seiyu": "時計ウサギ",
        "tweet_url": "https://twitter.com/tokeirabbit2/status/1248044479245946880"
    },
    {
        "title": "ねずみの嫁入り",
        "author": "楠山正雄",
        "seiyu": "一条光",
        "tweet_url": "https://twitter.com/IchijoHikari/status/1247879163513417729"
    },
    {
        "title": "注文の多い料理店",
        "author": "宮沢賢治",
        "seiyu": "湯浅開登っ！",
        "tweet_url": "https://twitter.com/yuasa_kaito__/status/1248073073502257152"
    },
    {
        "title": "桃太郎",
        "author": "不詳",
        "seiyu": "劇団シアトリカルカンパニー",
        "tweet_url": "https://twitter.com/KANAZYOGADEKIN/status/1248073782276718592"
    },
    {
        "title": "関頭",
        "author": "不詳",
        "seiyu": "劇団シアトリカルカンパニー",
        "tweet_url": "https://twitter.com/KANAZYOGADEKIN/status/1248073782276718592"
    },
    {
        "title": "去年の木",
        "author": "新美南吉",
        "seiyu": "南條愛乃",
        "tweet_url": "https://twitter.com/nanjolno/status/1248074523498270720"
    },
    {
        "title": "人魚姫",
        "author": "アンデルセン",
        "seiyu": "蒼樹里緒",
        "tweet_url": "https://twitter.com/ao_rio/status/1248077704613613568"
    },
    {
        "title": "ラプンツェル",
        "author": "グリム兄弟",
        "seiyu": "蒼樹里緒",
        "tweet_url": "https://twitter.com/ao_rio/status/1248081990030524416"
    },
    {
        "title": "どんぐりと山猫",
        "author": "宮沢賢治",
        "seiyu": "ささきのぞみ",
        "tweet_url": "https://twitter.com/nozooooo/status/1248114663469940737"
    },
    {
        "title": "蜘蛛の糸",
        "author": "芥川龍之介",
        "seiyu": "牧野魁人",
        "tweet_url": "https://twitter.com/PlayNow_act/status/1248115821177712640"
    },
    {
        "title": "雨降り坊主",
        "author": "夢野久作",
        "seiyu": "佐藤瑠伊",
        "tweet_url": "https://twitter.com/Rui_sato8822/status/1248116935004319744"
    },
    {
        "title": "ちらちら光れ小い星",
        "author": "ジェーン・テイラー",
        "seiyu": "SAIGO",
        "tweet_url": "https://twitter.com/SAIGOSPOON/status/1248125919719378946"
    },
    {
        "title": "ヘンゼルとグレーテル",
        "author": "グリム兄弟",
        "seiyu": "蒼樹里緒",
        "tweet_url": "https://twitter.com/ao_rio/status/1248127201448349696"
    },
    {
        "title": "記念日",
        "author": "小橋達也",
        "seiyu": "小橋達也",
        "tweet_url": "https://twitter.com/kuma_tatsuya/status/1248128509706268673"
    },
    {
        "title": "注文の多い料理店",
        "author": "宮沢賢治",
        "seiyu": "伊東健人,駒田航",
        "tweet_url": "https://twitter.com/mogurabook/status/1248128544082776065"
    },
    {
        "title": "デンデンムシノ カナシミ",
        "author": "新美南吉",
        "seiyu": "丸山なぎ沙",
        "tweet_url": "https://twitter.com/Maruyamanagisa/status/1247873154845798401"
    },
    {
        "title": "すずの兵隊",
        "author": "アンデルセン",
        "seiyu": "蒼樹里緒",
        "tweet_url": "https://twitter.com/ao_rio/status/1248134663333236737"
    },
    {
        "title": "懐中時計",
        "author": "夢野久作",
        "seiyu": "HEAR公式の中の人",
        "tweet_url": "https://twitter.com/hear_jp/status/1248135795623387138"
    },
    {
        "title": "赤ずきん",
        "author": "グリム兄弟",
        "seiyu": "蒼樹里緒",
        "tweet_url": "https://twitter.com/ao_rio/status/1248137444018417666"
    },
    {
        "title": "青い時計台",
        "author": "	小川未明",
        "seiyu": "屑星こ乃恵",
        "tweet_url": "https://twitter.com/Kzbs_kne/status/1248138011801300992"
    },
    {
        "title": "キャラメルと飴玉",
        "author": "夢野久作",
        "seiyu": "丸山なぎ沙",
        "tweet_url": "https://twitter.com/Maruyamanagisa/status/1248138014066270209"
    },
    {
        "title": "青い鳥",
        "author": "モーリス・メーテルリンク",
        "seiyu": "蒼樹里緒",
        "tweet_url": "https://twitter.com/ao_rio/status/1248139381585530882"
    },
    {
        "title": "星の銀貨",
        "author": "グリム兄弟",
        "seiyu": "蒼樹里緒",
        "tweet_url": "https://twitter.com/ao_rio/status/1248146442545278983"
    },
    {
        "title": "白鳥の王子",
        "author": "グリム兄弟",
        "seiyu": "蒼樹里緒",
        "tweet_url": "https://twitter.com/ao_rio/status/1248147802179297283"
    },
    {
        "title": "双子の星",
        "author": "宮沢賢治",
        "seiyu": "あきやまかおる",
        "tweet_url": "https://twitter.com/hakokao/status/1248147943535697922"
    },
    {
        "title": "ねむたくなる昔話",
        "author": "森のえほん館編集部",
        "seiyu": "蒼樹里緒",
        "tweet_url": "https://twitter.com/ao_rio/status/1248150639491727360"
    },
    {
        "title": "オズの魔法使い",
        "author": "ライマン・フランク・ボーム",
        "seiyu": "蒼樹里緒",
        "tweet_url": "https://twitter.com/ao_rio/status/1248153168891936769"
    },
    /*{
        "title": "猫がネズミを追いかける訳",
        "author": "福娘童話集？",  // 著作権の問題により掲載できません
        "seiyu": "じみぃ",
        "tweet_url": "https://twitter.com/jimydera01/status/1248154303740575745"
    },*/
    {
        "title": "和尚さんと小僧",
        "author": "楠山正雄",
        "seiyu": "平田えみ",
        "tweet_url": "https://twitter.com/mimimimiking9/status/1248154560037699585"
    },
    {
        "title": "ねずみの嫁入り",
        "author": "楠山正雄",
        "seiyu": "丸山エレキ",
        "tweet_url": "https://twitter.com/ereki724/status/1248154579528593408"
    },
    {
        "title": "デンデンムシノカナシミ",
        "author": "新美南吉",
        "seiyu": "一龍斎春水",
        "tweet_url": "https://twitter.com/itiryusai/status/1248155013219639298"
    },
    {
        "title": "大きな木の下で",
        "author": "渡辺浩弐",
        "seiyu": "秋長由佳梨",
        "tweet_url": "https://twitter.com/akinaga_yukari/status/1248157763869401095"
    },
    {
        "title": "はじめてのお散歩",
        "author": "真鍋智和",
        "seiyu": "三五美奈子,真鍋智和",
        "tweet_url": "https://twitter.com/minasango/status/1248158724000067585"
    },
    {
        "title": "グロリア・スコット号",
        "author": "アーサー・コナン・ドイル",
        "seiyu": "大橋隆昌",
        "tweet_url": "https://twitter.com/takamasa0084/status/1248162774661730305"
    },
    /*{
        "title": "白くまのおはなし",
        "author": "よこみぞゆり",    // 著作権の問題により掲載できません
        "seiyu": "かみいけまさよし",
        "tweet_url": "https://twitter.com/1vu13LPK90dd3XK/status/1248163265185644544"
    },*/
    {
        "title": "雨ニモマケズ",
        "author": "宮沢賢治",
        "seiyu": "森脇陸三",
        "tweet_url": "https://twitter.com/crazybox_staff/status/1248161857585569792"
    },
    {
        "title": "注文の多い料理店",
        "author": "宮沢賢治",
        "seiyu": "狛茉璃奈",
        "tweet_url": "https://twitter.com/kmtn62/status/1248173807443083264"
    },
    {
        "title": "クラリネットを吹く男",
        "author": "小川未明",
        "seiyu": "橋爪紋佳",
        "tweet_url": "https://twitter.com/kuma_ga_suki/status/1248174881251790850"
    },
    {
        "title": "オツベルと象",
        "author": "宮沢賢治",
        "seiyu": "髙宮千尋",
        "tweet_url": "https://twitter.com/chihiro_to_1000/status/1248176194035396610"
    },
    {
        "title": "どじょうと金魚",
        "author": "小川未明",
        "seiyu": "中村源太",
        "tweet_url": "https://twitter.com/genta_5014/status/1248114157716570112"
    },
    {
        "title": "星の銀貨",
        "author": "グリム兄弟",
        "seiyu": "荒井杏子",
        "tweet_url": "https://twitter.com/arai_kyoko/status/1248201896889741312"
    },
    {
        "title": "きつねと団子",
        "author": "石燕鴎",
        "seiyu": "穂積知佳",
        "tweet_url": "https://twitter.com/chika_ten_h/status/1248206278515539968"
    },
    {
        "title": "カラタチ",
        "author": "石川かおり",
        "seiyu": "穂積知佳",
        "tweet_url": "https://twitter.com/chika_ten_h/status/1248206577166778368"
    },
    {
        "title": "はにわさん",
        "author": "へにゃらぽっちぽー",
        "seiyu": "穂積知佳",
        "tweet_url": "https://twitter.com/chika_ten_h/status/1248206940783575041"
    },
    {
        "title": "星の海のアリス",
        "author": "穂積知佳",
        "seiyu": "穂積知佳",
        "tweet_url": "https://twitter.com/chika_ten_h/status/1248207193448386560"
    },

];

const booksLastUpdate = "2020-04-09T12:22:35.897Z";

/* Template

{
    "title": "",
    "author": "",
    "seiyu": "",
    "tweet_url": ""
},

*/
