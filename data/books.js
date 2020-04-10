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
    {
        "title": "トロッコ",
        "author": "芥川龍之介",
        "seiyu": "稲村透",
        "tweet_url": "https://twitter.com/t_inamura0913/status/1248224466536103936"
    },
    {
        "title": "やまなし(二、十二月)",
        "author": "宮沢賢治",
        "seiyu": "ジャリソン",
        "tweet_url": "https://twitter.com/garrison5da/status/1248226097927344129"
    },
    {
        "title": "キャラメルと飴玉",
        "author": "夢野久作",
        "seiyu": "名塚佳織",
        "tweet_url": "https://twitter.com/nazukakaori/status/1248230710059528195"
    },
    {
        "title": "おおかみと七ひきのこどもやぎ",
        "author": "グリム兄弟",
        "seiyu": "豊崎愛生,高垣彩陽,寿美菜子,戸松遥",
        "tweet_url": "https://twitter.com/sphere_PS/status/1248232435818496001"
    },
    {
        "title": "猿蟹合戦",
        "author": "芥川龍之介",
        "seiyu": "桜木章人",
        "tweet_url": "https://twitter.com/akito_sakuragi/status/1248235540954009602"
    },
    {
        "title": "オタク向けの『アメニモマケズ』",
        "author": "おのでらさん", // すごく微妙なラインの気がしています
        "seiyu": "なす",
        "tweet_url": "https://twitter.com/na_cil/status/1248237627548946432"
    },
    {
        "title": "すやすやおやすみ",
        "author": "森のえほん館編集部,倉沢はすみ",
        "seiyu": "蒼樹里緒",
        "tweet_url": "https://twitter.com/ao_rio/status/1248244448837787648"
    },
    {
        "title": "きのこ会議",
        "author": "夢野久作",
        "seiyu": "上田燿司",
        "tweet_url": "https://twitter.com/yo_z_ueda/status/1248197793174319104"
    },
    {
        "title": "猫の草紙",
        "author": "楠山正雄",
        "seiyu": "Rita",
        "tweet_url": "https://twitter.com/Ritaco25/status/1248253882834157568"
    },
    {
        "title": "記憶",
        "author": "麻草郁",
        "seiyu": "矢野くるみ",
        "tweet_url": "https://twitter.com/yanokurumi/status/1248268244265271296"
    },
    {
        "title": "オツベルと象",
        "author": "宮沢賢治",
        "seiyu": "くまかつみ",
        "tweet_url": "https://twitter.com/kumakatsu0411/status/1248277852325203973"
    },
    {
        "title": "おひさまのたまご",
        "author": "エルサ・ベスコフ",
        "seiyu": "川上千尋",
        "tweet_url": "https://twitter.com/chihiroKWKM/status/1247861870670667776"
    },
    {
        "title": "飴だま",
        "author": "新美南吉",
        "seiyu": "川原慶久,佐土原かおり",
        "tweet_url": "https://twitter.com/nekemodamstar/status/1248296416146907136",  // 川原慶久さん
        //"tweet_url": "https://twitter.com/sadoharakaori/status/1248296996521181184" // 佐土原かおりさん
    },
    {
        "title": "あめくん",
        "author": "村山籌子",
        "seiyu": "園崎未恵",
        "tweet_url": "https://twitter.com/Sonozaki_mie/status/1248299549765947392"
    },
    {
        "title": "死なない蛸",
        "author": "萩原俊太郎",
        "seiyu": "あきやまかおる",
        "tweet_url": "https://twitter.com/hakokao/status/1248334410119696384"
    },
    {
        "title": "オズの魔法使い",
        "author": "ライマン・フランク・ボーム",
        "seiyu": "安田愛実, 他",
        "tweet_url": "https://twitter.com/aimi_aibo/status/1248383388563587072"
    },
    {
        "title": "桃太郎",
        "author": "楠山正雄",
        "seiyu": "ネコおじ",
        "tweet_url": "https://twitter.com/nekooji1103/status/1248385762413826057"
    },
    {
        "title": "ねずみの嫁入り",
        "author": "楠山正雄",
        "seiyu": "加藤雅人",
        "tweet_url": "https://twitter.com/miyabi6411/status/1248409527008899072"
    },
    /*{
        "title": "ほらふき男爵 シカのサクランボウ",
        "author": "福娘童話集（ビュルガーの童話)",
        "seiyu": "長島真祐",  // 著作権の問題により掲載できません
        "tweet_url": "https://twitter.com/akibaron/status/1248420079949115393"
    },*/
    {
        "title": "やまなし",
        "author": "宮沢賢治",
        "seiyu": "日高のり子",
        "tweet_url": "https://twitter.com/nonko_hidaka531/status/1248445598195277825"
    },
    {
        "title": "むりつむり",
        "author": "鈴",
        "seiyu": "内田彩",
        "tweet_url": "https://twitter.com/aya_uchida/status/1248446855668588545"
    },
    {
        "title": "金太郎",
        "author": "倉沢はすみ",
        "seiyu": "蒼樹里緒",
        "tweet_url": "https://twitter.com/ao_rio/status/1248449702846066688"
    },
    {
        "title": "さるかに合戦",
        "author": "倉沢はすみ",
        "seiyu": "蒼樹里緒",
        "tweet_url": "https://twitter.com/ao_rio/status/1248451624227360768"
    },
    {
        "title": "注文の多い料理店",
        "author": "宮沢賢治",
        "seiyu": "安野朱璃",
        "tweet_url": "https://twitter.com/akari_anno/status/1248454068537659394"
    },
    {
        "title": "マッチ売りの少女",
        "author": "アンデルセン",
        "seiyu": "添心",
        "tweet_url": "https://twitter.com/tenshi10422/status/1248455336324771842"
    },
    {
        "title": "かぐや姫",
        "author": "平井里奈",
        "seiyu": "蒼樹里緒",
        "tweet_url": "https://twitter.com/ao_rio/status/1248457846917750786"
    },
    {
        "title": "ねずみのすもう",
        "author": "石原桃子 (新潟県民話より)",
        "seiyu": "蒼樹里緒",
        "tweet_url": "https://twitter.com/ao_rio/status/1248460837569757190"
    },
    {
        "title": "夢十夜　〜第一夜〜",
        "author": "夏目漱石",
        "seiyu": "じゅんぺい",
        "tweet_url": "https://twitter.com/Junpei_peiJun/status/1248499558889345025"
    },
    {
        "title": "電信柱と妙な男",
        "author": "小川未明",
        "seiyu": "菱田盛之",
        "tweet_url": "https://twitter.com/Nurikabesan/status/1248499982354632704"
    },
    {
        "title": "お化けとまちがえた話",
        "author": "小川未明",
        "seiyu": "狐崎あやめ",
        "tweet_url": "https://twitter.com/kozakiayame/status/1248508394761121797"
    },
    {
        "title": "浦島太郎",
        "author": "楠山正雄",
        "seiyu": "かみいけまさよし",
        "tweet_url": "https://twitter.com/1vu13LPK90dd3XK/status/1248520325823782913"
    },
    {
        "title": "キャラメルと飴玉",
        "author": "夢野久作",
        "seiyu": "寳田真奈美",
        "tweet_url": "https://twitter.com/mana_dreamingir/status/1248528226944561152"
    },
    {
        "title": "星の銀貨",
        "author": "グリム兄弟",
        "seiyu": "佐藤瑞花",
        "tweet_url": "https://twitter.com/mzk48_310/status/1248529970105704453"
    },
    {
        "title": "はちとくま",
        "author": "村山籌子",
        "seiyu": "橋爪紋佳",
        "tweet_url": "https://twitter.com/kuma_ga_suki/status/1248534184303312896"
    },

];

const booksLastUpdate = "2020-04-10T09:43:03.887Z";

/* Template

{
    "title": "",
    "author": "",
    "seiyu": "",
    "tweet_url": ""
},

*/
