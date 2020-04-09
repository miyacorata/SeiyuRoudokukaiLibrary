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
    {
        "title": "よだかの星",
        "author": "宮沢賢治",
        "seiyu": "民安ともえ",
        "tweet_url": "https://twitter.com/tammy_now/status/1247918302019502080"
    },
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
        "tweet_url": "https://twitter.com/kotone_akv/status/1247934110430982146"
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

];

/* Template

{
    "title": "",
    "author": "",
    "seiyu": "",
    "tweet_url": ""
},

*/