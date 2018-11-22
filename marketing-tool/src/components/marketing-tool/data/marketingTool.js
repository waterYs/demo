//line
const lineObj={
  formatter:'<div style="background-color:#00465F;padding:5px 10px;color:#fff;text-align:center;font-size:26px;width:70px;height:45px;line-height:45px;">{b}</div><div style="background-color:#002941;padding:5px 10px;color:#4691AB;text-align:center;font-size:26px;width:70px;height:45px;line-height:45px;">{c}</div>'
}
//dataList
const dataList=[
  {
    'defDeal':{
      'Shopping Mall':'Super brand mall',
      'Theme Name':'Christmas',
      'Time':'21th Dec-26th Dec',
      'Location':'East hall of F1/Golden hall of F3',
      'Target Customers':'Family\n' +
      'Student\n' +
      'White collar',
    },
    'Key_Words':[
      {
        'name':'Christmas',
        'subName':['Light','Snow']
      },
      {
        'name':'Holiday',
        'subName':['Travel','Australia','Japan']
      },
      {
        'name':'Food',
        'subName':['Dinner','Cake']
      },
      {
        'name':'Gift',
        'subName':['Handmade','shopping','cosmetics','Toys']
      },
      {
        'name':'Family',
        'subName':['Travel','Dinner','Furnishing']
      }
    ],
    'Collaborative_Entity':[
      {
        'num':'1',
        'title':'Zo woo wood workshop'
      },
      {
        'num':'2',
        'title':'Hoshinoya resorts'
      },{
        'num':'3',
        'title':'DFS group'
      },
      {
        'num':'4',
        'title':'Quatas airways'
      },
      {
        'num':'5',
        'title':'Disney'
      }
    ],
    'BrandsList':[
      {
        'icon':require('../img/food.svg'),
        'name':'F&B',
        'list':[
          {'name':'Win house','tag':'own'},
          {'name':'Starbucks','tag':'own'},
          {'name':'Le cesar','tag':'own'},
          {'name':'Tsui Wah restraurant','tag':'own'},
          {'name':'Charm','tag':'own'},
          {'name':'Paris baguette','tag':'own'},
          {'name':'Bread talk','tag':'own'}
        ]
      },
      {
        'icon':require('../img/shopping.svg'),
        'name':'Shopping',
        'list':[
          {'name':'M&G shop','tag':'own'},
          {'name':'Uniqlo','tag':'own'},
          {'name':'Muji','tag':'own'},
          {'name':'Hola','tag':'own'},
          {'name':'Swarovski','tag':'own'},
          {'name':'Pandora','tag':'own'},
          {'name':'Sephora','tag':'own'},
          {'name':'JoMalone','tag':''},
          {'name':'Nintendo','tag':''},
          {'name':'Godiva','tag':''},
          {'name':'Cosme Kitchen','tag':''}
        ],
      },
      {
        'icon':require('../img/family.svg'),
        'name':'Beauty',
        'list':[
          {'name':'Dong ying salon','tag':'own'},
          {'name':'Siyanli','tag':'own'},
          {'name':'Azure nail','tag':'own'}
        ]
      },
      {
        'icon':require('../img/beauty.svg'),
        'name':'Family',
        'list':[
          {'name':'Toys r us','tag':'own'},
          {'name':'Peppa pig','tag':''}
        ]
      }
    ],
    'Media_Channel':[
      {
        'name':'Wechat',
        'value':'45'
      },{
        'name':'Weibo',
        'value':'25'
      },{
        'name':'Sohu',
        'value':'15'
      },{
        'name':'Douyin',
        'value':'15'
      }
    ],
    'news':[

    ],
    'KOL':[
      {
        'picture':require('../img/kols/yingguobaojie.jpg'),
        'name':'英国报姐',
        'desc':''
      },{
        'picture':require('../img/kols/sunli.jpeg'),
        'name':'孙俪',
        'desc':''
      },{
        'picture':require('../img/kols/dilireba.jpeg'),
        'name':'迪丽热巴',
        'desc':''
      },{
        'picture':require('../img/kols/xiongbenxiong.jpeg'),
        'name':'熊本熊',
        'desc':''
      }
    ],
    'Sales':{
      'name':['Forecasting','2017'],
      'data':[11670334,8699569.51315],
      'max':100,
      'icon':require('../img/up.svg'),
      'value':'34%'
    },
    'passenger_flow':{
      'name':['Forecasting','2017'],
      'data':[90018,67900],
      'max':100,
      'icon':require('../img/up.svg'),
      'value':'33%'
    },
    'Gender_Ratio':[
      {
        'name':'Male',
        'value':'46'
      },
      {
        'name':'Female',
        'value':'54'
      }
    ],
    'Consumption':{
      'name':['<500','500-1000','1000-5000','5000-10000','10000-50000','>50000'],
      'data':['8','13','22','27','25','5'],
      'max':100,
    },
    'Age_Range':{
      'name':['Youth','Middle-aged','Old-aged'],
      'data':['46','41','13'],
      'max':100,
    },
    'Interest':[
      {
        'name':'Handmade',
        'value':77
      },{
        'name':'Woodcraft',
        'value':40
      },{
        'name':'Shopping',
        'value':65
      },{
        'name':'Dessert',
        'value':44
      },{
        'name':'Family',
        'value':59
      },{
        'name':'Woodcraft',
        'value':51
      },{
        'name':'Cosmetics',
        'value':39
      },{
        'name':'Dinner',
        'value':45
      },{
        'name':'Japan',
        'value':53
      },{
        'name':'Selfie',
        'value':33
      }
    ],
    'Volume_Trend':{
      'type':'in',
      'dataTime':['12-17','12-18','12-19','12-20','12-21','12-22','12-23','12-24','12-25','12-26','12-27','12-28','12-29'],
      'data1':[590,810,1470,1611,1898,2010,2330,2543,2004,1288,980,405,353],
      'data2':[243,243,241,227,200,292,358,405,303,263,256,243,313]
    },
    'Heatmap':[{
      'name':'Super brand mall',
      "lng": 121.499323,
      "lat": 31.236765,
      "count":1
    }]
  },
  {
    'defDeal':{
      'Shopping Mall':'Global Harbor',
      'Theme Name':'Doggy Ding\'s Global Diary',
      'Time':'20th Dec-26th Dec',
      'Location':'Whole Shopping Mall',
      'Target customers':'Student\n' +
      'White collar\n' +
      'Film lover',
    },
    'Key_Words':[
      {
        'name':'Hot air\nbullon',
        'subName':['Christmas\ntree']
      },
      {
        'name':'Hollywood',
        'subName':['Golden\nage','movie','Stars']
      },
      {
        'name':'Jurassic',
        'subName':['dinosaur']
      }
    ],
    'Collaborative_Entity':[
      {
        'num':'1',
        'title':'the golden age of hollywood exhibition'
      },
      {
        'num':'2',
        'title':'Dianping'
      }
    ],
    'BrandsList':[
      {
        'icon':require('../img/food.svg'),
        'name':'F&B',
        'list':[
          {'name':'Du hsiao yueh','tag':'own'},
          {'name':'Bifengtang','tag':'own'},
          {'name':'Zhengqi liaoli','tag':'own'},
          {'name':'Zuotingyouyuan hot pot','tag':'own'}
        ]
      },
      {
        'icon':require('../img/shopping.svg'),
        'name':'Shopping',
        'list':[
          {'name':'Ogawa','tag':'own'},
          {'name':'Coach','tag':'own'},
          {'name':'Michael Kors','tag':'own'},
          {'name':'Polo','tag':'own'},
          {'name':'Tommy hilfiger','tag':'own'},
          {'name':'Lee','tag':'own'},
          {'name':'Levi\'s','tag':'own'},
          {'name':'American Eagle','tag':'own'},
          {'name':'Mo&Co','tag':'own'},
          {'name':'Casio','tag':'own'},
          {'name':'Yeehoo','tag':'own'},
          {'name':'adidas','tag':'own'},
          {'name':'Young Athletes','tag':'own'},
          {'name':'Ovs kids','tag':'own'},
          {'name':'Max mara','tag':''},
          {'name':'Juicy Couture','tag':''},
          {'name':'Sony','tag':''}
        ]
      },
      {
        'icon':require('../img/beauty.svg'),
        'name':'Family',
        'list':[
          {'name':'Kidsland','tag':'own'}
        ]
      }
    ],
    'Media_Channel':[
      {
        'name':'Wechat',
        'value':'61'
      },{
        'name':'Sohu',
        'value':'18'
      },{
        'name':'Other',
        'value':'21'
      }
    ],
    'news':[
      {
        'img':require('../img/news/new2.png'),
        'title':'丁小球的环球日记 环球港双旦活动热力开启',
        'desc':'位于中山北路黄金地段的上海环球港是世界中心城区最大的购物中心，凭借其全新的“商业、旅游、文化”的功能概念和独具特色的购物环境深受消费者的喜爱。',
        'link':'http://fashion.huanqiu.com/zxtg/2017-12/11470015.html',
        'time':'2018-01-01'
      }
    ],
    'KOL':[
      {
        'picture':require('../img/kols/shanghaihuanqiu.jpeg'),
        'name':'上海环球港微博',
        'desc':''
      }
    ],
    'Sales':{
      'name':['Forecasting','2017'],
      'data':[10980150,9989740],
      'max':100,
      'icon':require('../img/up.svg'),
      'value':'10%'
    },
    'passenger_flow':{
      'name':['Forecasting','2017'],
      'data':[89900,89105],
      'max':100,
      'icon':require('../img/up.svg'),
      'value':'0.9%'
    },
    'Gender_Ratio':[
      {
        'name':'Male',
        'value':'42'
      },
      {
        'name':'Female',
        'value':'58'
      }
    ],
    'Consumption':{
      'name':['<500','500-1000','1000-5000','5000-10000','10000-50000','>50000'],
      'data':['8','15','29','25','20','3'],
      'max':100,
    },
    'Age_Range':{
      'name':['Youth','Middle-aged','Old-aged'],
      'data':['52','37','11'],
      'max':100,
    },
    'Interest':[
      {
        'name':'Fashion',
        'value':65
      },{
        'name':'Shopping',
        'value':70
      },{
        'name':'Family',
        'value':49
      },{
        'name':'Classic movie',
        'value':80
      },{
        'name':'Cosmetics',
        'value':39
      },{
        'name':'Selfie',
        'value':55
      },{
        'name':'Cosmetics',
        'value':65
      },{
        'name':'Animal',
        'value':85
      },{
        'name':'Lego',
        'value':40
      },{
        'name':'Gathering',
        'value':51
      }
    ],
    'Volume_Trend': {//2017-data1
      'type':'out',
      'dataTime': ['12-16','12-17','12-18','12-19','12-20','12-21','12-22','12-23','12-24','12-25','12-26','12-27','12-28','12-29'],
      'data1':[829,695,668,627,646,651,813,920,999,839,589,731,734,876],
      'data2':[985,967,884,780,740,785,873,1204,1247,1212,859,775,765,900]
    },
    'Heatmap':[{
      'name':'Global Harbor',
      "lng": 121.412142,
      "lat": 31.233159,
      "count":1
    }]
  },
  {
    'defDeal':{
      'Shopping Mall':'Iapm',
      'Theme Name':'Bear hug Ice garden',
      'Time':'9th Dec-26th Dec',
      'Location':'Atrium of F1',
      'Target customers':'Family\n' +
      'Kids',
    },

    'Key_Words':[
      {
        'name':'Northern\nEurope',
        'subName':['3D','Picture','Drawing\n.polar\nbear']
      },
      {
        'name':'Snow',
        'subName':['Sled','Polar\nBear','Comic']
      },
      {
        'name':'Shopping',
        'subName':['Luxury\nbrand']
      },
      {
        'name':'Hug',
        'subName':['Polar\nBear','wish']
      }
    ],
    'Collaborative_Entity':[
      {
        'num':'1',
        'title':'Marie Desbons-illustrator'
      },
      {
        'num':'2',
        'title':'Nicolas Francescon-illustrator'
      },{
        'num':'3',
        'title':'Marijke Buurlage -illustrator'
      }
    ],
    'BrandsList':[
      {
        'icon':require('../img/shopping.svg'),
        'name':'Shopping',
        'list':[
          {'name':'Fendi','tag':'own'},
          {'name':'Baccarat','tag':'own'},
          {'name':'Citysuper','tag':'own'},
          {'name':'TWG','tag':'own'},
          {'name':'Marijke Buurlage','tag':'own'}
        ]
      }
    ],
    'Media_Channel':[
      {
        'name':'Wechat',
        'value':'48'
      },{
        'name':'Sohu',
        'value':'17'
      },{
        'name':'Other',
        'value':'35'
      }
    ],
    'news':[
      {
        'img':require('../img/news/new3.jpg'),
        'title':'环贸iapm商场「熊抱冰雪圣诞乐园」主题展闪耀开幕 ',
        'desc':'[上海讯2017年12月9日] 由新鸿基地产倾力打造的环贸iapm商场(简称iapm商场)以高端时尚及潮流作为市场定位，配合本地高端生活文化，打造成为沪上首个糅合“品味生活杂志”及“夜行消费购物”模式于一体的i世代高端潮流商场。为追求高端时尚品味的顾客提供最新、最潮的多元化购物体验。为迎接翩然而至的2017圣诞季，iapm商场携手国际知名插画师玛莉﹒黛思邦丝(Marie Desbons)及尼古拉斯﹒弗朗西斯科(Nicolas Francescon)为申城呈现节日大礼，揭开全新圣诞节主题展—“熊抱冰雪圣诞乐园”。是次展览以北极冰雪为灵感，精心呈现梦幻冰雪场景、华美耀目的璀璨圣诞树、憨萌的极地北极熊及神秘温馨的圣诞小屋等立体装置，以浓厚的圣诞气息营造令人驻足的浪漫童话世界。《使徒行者2》人气主角“天堂哥”袁伟豪空降助阵，现场为粉丝献唱，近距离指导粉丝演唱技巧，更与粉丝亲密萌拍，亲和力十足，为iapm商场浓浓圣诞气氛更添暖意。',
        'link':'http://www.mina.com.cn/guona/146796.html',
        'time':'2018-01-12'
      }
    ],
    'KOL':[
      {
        'picture':require('../img/kols/yuanweihao.png'),
        'name':'袁伟豪',
        'desc':''
      }
    ],
    'Sales':{
      'name':['Forecasting','2017'],
      'data':[12550786,11997741],
      'max':100,
      'icon':require('../img/up.svg'),
      'value':'4.6%'
    },
    'passenger_flow':{
      'name':['Forecasting','2017'],
      'data':[64089,61560],
      'max':100,
      'icon':require('../img/up.svg'),
      'value':'4%'
    },
    'Gender_Ratio':[
      {
        'name':'Male',
        'value':'41'
      },
      {
        'name':'Female',
        'value':'59'
      }
    ],
    'Consumption':{
      'name':['<500','500-1000','1000-5000','5000-10000','10000-50000','>50000'],
      'data':['5','11','17','23','33','11'],
      'max':100,
    },
    'Age_Range':{
      'name':['Youth','Middle-aged','Old-aged'],
      'data':['39','52','9'],
      'max':100,
    },
    'Interest':[
      {
        'name':'Art',
        'value':55
      },{
        'name':'Animal',
        'value':45
      },{
        'name':'Luxury brand',
        'value':65
      },{
        'name':'Fashion',
        'value':70
      },{
        'name':'Family',
        'value':60
      },{
        'name':'Selfie',
        'value':55
      },{
        'name':'Shopping',
        'value':75
      },{
        'name':'Design',
        'value':49
      },{
        'name':'TV star',
        'value':67
      }
    ],
    'Volume_Trend': {//2017-data1
      'type':'out',
      'dataTime': ['12-06','12-07','12-08','12-09','12-10','12-11','12-12','12-13','12-14','12-15','12-16','12-17','12-18','12-19','12-20','12-21','12-22','12-23','12-24','12-25','12-26','12-27','12-28','12-29'],
      'data1':[317,395,419,349,308,330,361,337,335,347,340,327,370,340,336,356,371,400,428,421,379,359,325,356],
      'data2':[398,385,431,466,392,371,379,353,390,354,418,357,360,439,445,481,466,530,541,478,419,400,366,372]
    },
    'Heatmap':[{
      'name':'Iapm',
      "lng":121.458686,
      "lat": 31.216305,
      "count":1
    }]
  },
  {
    'defDeal':{
      'Shopping Mall':'Jingan Kerry',
      'Theme Name':'Winter market',
      'Time':'21th Dec-1st Jan',
      'Location':'South Square',
      'Target customers':'Hip pop Lover\n' +
      'Kids\n' +
      'white collar',
    },

    'Key_Words':[
      {
        'name':'Winter market',
        'subName':['gift','gathering','food']
      },
      {
        'name':'Western country',
        'subName':['food','Christmas\ntree']
      },
      {
        'name':'Performance',
        'subName':['Band','dance','DJ','hip pop']
      }
    ],
    'Collaborative_Entity':[
      {
        'num':'1',
        'title':'baby U know-hip pop band'
      },
      {
        'num':'2',
        'title':'somewhat-app'
      }
    ],
    'BrandsList':[
      {
        'icon':require('../img/food.svg'),
        'name':'F&B',
        'list':[
          {'name':'PINTXOS','tag':'own'},
          {'name':'Herbalance','tag':'own'},
          {'name':'take it easy','tag':''},
          {'name':'New york style Steak & Burger','tag':''},
          {'name':'DOE coffee','tag':''},
          {'name':'Manner','tag':''},
          {'name':'Fresh Fruit','tag':''},
          {'name':'Papito','tag':''},
          {'name':'Bumbu','tag':''},
          {'name':'KARTEL','tag':''},
          {'name':'Saboten','tag':''},
          {'name':'QMaku Dolce','tag':''},
        ]
      },
      {
        'icon':require('../img/shopping.svg'),
        'name':'Shopping',
        'list':[
          {'name':'Annaya','tag':'own'},
          {'name':'X JEWELLERY','tag':''},
        ]
      }
    ],
    'Media_Channel':[
      {
        'name':'Wechat',
        'value':'43'
      },{
        'name':'Weibo',
        'value':'27'
      },{
        'name':'Xpps.tv',
        'value':'15'
      },{
        'name':'Other',
        'value':'15'
      }
    ],
    'news':[
      {
        'img':require('../img/news/new4.jpg'),
        'title':'上海静安嘉里中心神秘跨年派对+冬日市集 High到不行',
        'desc':'2017年已进入尾声了跨年、元旦、新年....筒子们准备好怎么迎接新年了没?在这个圣诞与跨年之际，静安嘉里中心给你们放了个大招，准备了超多好玩的圣诞跨年活动，坐等你们来打卡!',
        'link':'http://sh.bendibao.com/tour/20171225/188488.shtm',
        'time':'2018-01-15'
      }
    ],
    'KOL':[
      {
        'picture':require('../img/kols/landuozhifu.jpeg'),
        'name':'懒惰致富集团',
        'desc':''
      },{
        'picture':require('../img/kols/shanghaihuanqiu.jpeg'),
        'name':'双胞胎兄弟',
        'desc':''
      }
    ],
    'Sales':{
      'name':['Forecasting','2017'],
      'data':[8808790,8121165],
      'max':100,
      'icon':require('../img/up.svg'),
      'value':'8%'
    },
    'passenger_flow':{
      'name':['Forecasting','2017'],
      'data':[54120,50480],
      'max':100,
      'icon':require('../img/up.svg'),
      'value':'7%'
    },
    'Gender_Ratio':[
      {
        'name':'Male',
        'value':'49'
      },
      {
        'name':'Female',
        'value':'51'
      }
    ],
    'Consumption':{
      'name':['<500','500-1000','1000-5000','5000-10000','10000-50000','>50000'],
      'data':['6','13','23','31','21','6'],
      'max':100,
    },
    'Age_Range':{
      'name':['Youth','Middle-aged','Old-aged'],
      'data':['52','34','14'],
      'max':100,
    },
    'Interest':[
      {
        'name':'Hip pop',
        'value':60
      },{
        'name':'Western food',
        'value':78
      },{
        'name':'Shopping',
        'value':45
      },{
        'name':'Selfie',
        'value':65
      },{
        'name':'Night market',
        'value':69
      },{
        'name':'Gatherin',
        'value':55
      },{
        'name':'Family',
        'value':38
      },{
        'name':'life style',
        'value':40
      },{
        'name':'Clubing',
        'value':49
      },{
        'name':'Live',
        'value':41
      }
    ],
    'Volume_Trend': {
      'type':'out',
      'dataTime': ['12-18','12-19','12-20','12-21','12-22','12-23','12-24','12-25','12-26','12-27','12-28','12-29','12-30','12-31','01-01','01-02','01-03'],//2018
      'data1':[330,338,330,323,403,386,419,411,333,360,336,332,348,454,279,339,297],
      'data2':[335,393,373,411,486,545,405,384,364,375,343,401,347,324,301,324,339]
    },
    'Heatmap':[{
      'name':'Jingan Kerry',
      "lng":121.450221,
      "lat":31.224572,
      "count":1
    }]
  },
  {
    'defDeal':{
      'Shopping Mall':'Super Brand Mall',
      'Theme Name':'Super Taste',
      'Time':'2018/8/17-2018/8/19',
      'Location':'Golden Road, 4F, Super Brand Mall',
      'Target customers':'Family, Tourist, Student',
    },
    'Key_Words':[
      {
        'name':'Food\nFestival',
        'subName':['the Taste','future\nfood','Michelin\nChef']
      },
      {
        'name':'Summer',
        'subName':['drink','icecream','snack']
      },
      {
        'name':'Party',
        'subName':['performance','star','famous\nrestraurant']
      },
      {
        'name':'Happy Time',
        'subName':['selfie','lucky draw','reality\nshow']
      }
    ],
    'Collaborative_Entity':[
      {
        'num':'1',
        'title':'the Taste'
      },
      {
        'num':'2',
        'title':'Channel Young Media'
      },{
        'num':'3',
        'title':'Sheraton Hotel'
      },
      {
        'num':'4',
        'title':'Ctrip.com'
      },
      {
        'num':'5',
        'title':'Douyin'
      }
    ],
    'BrandsList':[
      {
        'icon':require('../img/food.svg'),
        'name':'F&B',
        'list':[
          {'name':'Heytea','tag':'own'},
          {'name':'the Alley','tag':'own'},
          {'name':'SS Matcha','tag':'own'},
          {'name':'JYJ Noodle Bar','tag':'own'},
          {'name':'Martini','tag':''},
          {'name':'Jinro','tag':''},
          {'name':'Stella Pop Corn','tag':''},
          {'name':'Lady M','tag':''},
          {'name':'Magnum','tag':''},
          {'name':'vital tea','tag':''},
          {'name':'Peter\'s cuisine','tag':''},
          {'name':'Woomy','tag':''}
        ]
      },
      {
        'icon':require('../img/shopping.svg'),
        'name':'Shopping',
        'list':[
          {'name':'Hema','tag':''}
        ]
      },
      {
        'icon':require('../img/ic_telegraphy.svg'),
        'name':'Entertainment',
        'list':[
          {'name':'Stellar Cinema','tag':'own'},
          {'name':'Will\'s','tag':'own'}
        ]
      }
    ],
    'Media_Channel':[
      {
        'name':'Weibo',
        'value':'9'
      },{
        'name':'Wechat',
        'value':'22'
      },{
        'name':'Douyin',
        'value':'63'
      },{
        'name':'Zhihu',
        'value':'6'
      }
    ],
    'news':[

    ],
    'KOL':[
      {
        'picture':require('../img/kols/sophie.jpeg'),
        'name':'Sophie Faldo',
        'desc':'(Great British Bake Off 2017 winner)'
      },{
        'picture':require('../img/kols/luigi.jpeg'),
        'name':' Luigi Taglienti',
        'desc':'(Michelin Chef)'
      },{
        'picture':require('../img/kols/xietingfeng.jpeg'),
        'name':'Nicholas Tse',
        'desc':''
      },{
        'picture':require('../img/kols/ailuochibaole.jpeg'),
        'name':'Etam',
        'desc':'(艾格吃饱了)'
      },{
        'picture':require('../img/kols/rishiji.jpeg'),
        'name':'Food Diaries',
        'desc':'(日食记)'
      },{
        'picture':require('../img/kols/daweiailisi.png'),
        'name':'Alice',
        'desc':'(大胃爱丽丝)'
      }
    ],
    'Sales':{
      'name':['Forecasting','2017'],
      'data':[10532490,8563000],
      'max':100,
      'icon':require('../img/up.svg'),
      'value':'23%'
    },
    'passenger_flow':{
      'name':['Forecasting','2017'],
      'data':[128000,105200],
      'max':100,
      'icon':require('../img/up.svg'),
      'value':'22%'
    },
    'Gender_Ratio':[
      {
        'name':'Male',
        'value':'25'
      },
      {
        'name':'Female',
        'value':'75'
      }
    ],
    'Consumption':{
      'name':['<500','500-1000','1000-5000','5000-10000','10000-50000','>50000'],
      'data':['0','3','9','55','33','0'],
      'max':100,
    },
    'Age_Range':{
      'name':['Youth','Middle-aged','Old-aged'],
      'data':['83','17','0'],
      'max':100,
    },
    'Interest':[
      {
        'name':'live web casting',
        'value':0
      },{
        'name':'makeup',
        'value':0
      },{
        'name':'fitness',
        'value':0
      },{
        'name':'animation',
        'value':0
      },{
        'name':'online shopping',
        'value':0
      },{
        'name':'king\'s glory',
        'value':0
      },{
        'name':'cosplay',
        'value':0
      },{
        'name':'adventure',
        'value':0
      },{
        'name':'snacks',
        'value':0
      },{
        'name':'accessories',
        'value':0
      }
    ],
    'Volume_Trend':{
      'type':'in',
      'dataTime':['08-15','08-16','08-17','08-18','08-19','08-20','08-21'],
      'data1':[2320,2280,4970,3340,2690,2039,1330],
      'data2':[776,732,798,854,825,793,755]
    },
    'Heatmap':[{
      'name':'Super Brand Mall',
      "lng": 121.499323,
      "lat": 31.236765,
      "count":1
    }]
  },
  {
    'defDeal':{
      'Shopping Mall':'K11',
      'Theme Name':'Hennessy & Meals',
      'Time':'2018/5/25-2018/5/27',
      'Location':'K11 Shanghai',
      'Target customers':'Foodie, art youth',
    },
    'Key_Words':[
      {
        'name':'Food Taste',
        'subName':[
          'Shanghai\ncuisine','wine','bite of\nChina','live-cooking\nshow'
        ]
      },
      {
        'name':'Star',
        'subName':[
          'famous\nchef','movie\nstar','tv\npresenter'
        ]
      }
    ],
    'Collaborative_Entity':[
      {
        'num':'1',
        'title':'HYATT ON THE BUND'
      },
      {
        'num':'2',
        'title':'PUDONG SHANGRI-LA HOTEL'
      },{
        'num':'3',
        'title':'FOUR SEASONGS HOTEL HANGZHOU AT WEST LAKE'
      },
      {
        'num':'4',
        'title':'HYATT NINGBO RESORT'
      }
    ],
    'BrandsList':[
      {
        'icon':require('../img/food.svg'),
        'name':'F&B',
        'list':[
          {'name':'Professor Lee by BELLOCO','tag':'own'},
          {'name':'Hungry Lung\'s Kitchen','tag':'own'},
          {'name':'L.A PHO','tag':'own'},
          {'name':'BIANCHI','tag':'own'},
          {'name':'Hennessy V.S.O.P','tag':''},
        ]
      },
      {
        'icon':require('../img/shopping.svg'),
        'name':'Shopping',
        'list':[
          {'name':'LOL','tag':'own'},
          {'name':'Space NK','tag':'own'}
        ]
      }
    ],
    'Media_Channel':[
      {
        'name':'Wechat',
        'value':'23'
      },{
        'name':'Weibo',
        'value':'16'
      },{
        'name':'Douban',
        'value':'42'
      },{
        'name':'Web portal',
        'value':'3'
      },{
        'name':'Zhihu',
        'value':'16'
      }
    ],
    'news':[
      {
        'img':require('../img/news/new6-1.jpeg'),
        'title':'【上海优家荟邀约】相约“食”验室，轩尼诗重新发现中国味 ',
        'desc':'优家荟邀请您在上海K11开启一场轩尼诗之旅这是尊贵的优家荟专场在明星专场之后感受轩尼诗的独特魅力',
        'link':'https://www.sohu.com/a/232522445_170023',
        'time':'2018-03-12'
      },
      {
        'img':require('../img/news/new6-2.jpeg'),
        'title':'全上海的美食大V都在等着给你做饭 ',
        'desc':'如果没有厨房女神董小宛的亲自下厨，史可法在冒辟疆的宴席上大概不会吃得那么痛快，毫不吝啬地称赞其做的虎皮肉为“天下一绝”。而当年在苏州没有吃到张东官做的“糯米鸭子”，吃惯了满族菜口味的乾隆皇帝大概也不会改口，后半辈子大部分胃口都贡献给了江浙菜。',
        'link':'https://mp.weixin.qq.com/s/VFUU7n0sdV3yN3Mg0duUFA',
        'time':'2018-03-15'
      },
      {
        'img':require('../img/news/new6-3.jpg'),
        'title':'热掀【食】验风潮 轩尼诗“重新发现中国味”【食】验室登陆魔都 ',
        'desc':'你或许已经走遍世界，遍尝美味，但一定还没试过这样的体验：当来自法国的轩尼诗干邑与地道中国美味相遇，神奇的“天作之合”随即产生。本月，继广东、福建之后，轩尼诗“重新发现中国味”系列活动隆重登陆江浙地区，携手江南四大名厨，以一席难求的盛筵和限时开放的【食】验室，掀起一场令人瞩目、引人垂涎的【食】验风潮。',
        'link':'http://sh.qq.com/a/20180601/036495.htm',
        'time':'2018-03-16'
      },
      {
        'img':require('../img/news/new6-4.jpg'),
        'title':'轩尼诗“重新发现中国味”热掀全城“食”验风潮',
        'desc':'中新网上海新闻5月31日电(记者  姜煜)本月，继广东、福建之后，轩尼诗“重新发现中国味”系列活动隆重登陆江浙地区，携手江南四大名厨，以一席难求的盛筵和限时开放的“食”验室，掀起一场令人瞩目、引人垂涎的“食”验风潮。',
        'link':'http://www.sh.chinanews.com/wenhua/2018-05-31/39855.shtml',
        'time':'2018-03-17'
      },
      {
        'img':require('../img/news/new6-5.jpeg'),
        'title':'轩尼诗“重新发现中国味”热掀全城「食」验风潮 | HENNESSY & MEALS SHANGHAI GALA DINNER ',
        'desc':'& Meals” is back with another unique culinary journey to revive Hennessy’s deep heritage in China and celebrate the virtuous relationship between the Hennessy cognac and the Chinese cuisine. ',
        'link':'http://www.sohu.com/a/232597147_337817',
        'time':'2018-03-19'
      }
    ],
    'KOL':[
      {
        'picture':require('../img/kols/zhangliang.jpeg'),
        'name':'张亮',
        'desc':'Liang Zhang'
      },{
        'picture':require('../img/kols/zhouyiwei.jpeg'),
        'name':'周一围',
        'desc':'Yiwei Zhou'
      },{
        'picture':require('../img/kols/hehui.jpeg'),
        'name':'何穗',
        'desc':'Shui He'
      },{
        'picture':require('../img/kols/chenxiaoqing.jpeg'),
        'name':'陈晓卿',
        'desc':'Xiaoqing Chen'
      },{
        'picture':require('../img/kols/chenxi.jpeg'),
        'name':'陈曦',
        'desc':'Xi Chen'
      },{
        'picture':require('../img/kols/yantao.jpg'),
        'name':'闫涛',
        'desc':'Tao Yan'
      },{
        'picture':require('../img/kols/dizhulu.jpg'),
        'name':'地主陆',
        'desc':'Landlord Lu'
      },{
        'picture':require('../img/kols/tangqi.jpg'),
        'name':'唐七',
        'desc':'Qi Tang'
      },{
        'picture':require('../img/kols/yufei.jpg'),
        'name':'鱼菲',
        'desc':'Fei Yu'
      },{
        'picture':require('../img/kols/marry.jpg'),
        'name':'Mary',
        'desc':''
      }
    ],
    'Sales':{
      'name':['Forecasting','2017'],
      'data':[8302900,5892900],
      'max':100,
      'icon':require('../img/up.svg'),
      'value':'40%'
    },
    'passenger_flow':{
      'name':['Forecasting','2017'],
      'data':[68200,42580],
      'max':100,
      'icon':require('../img/up.svg'),
      'value':'60%'
    },
    'Gender_Ratio':[
      {
        'name':'Male',
        'value':'39'
      },
      {
        'name':'Female',
        'value':'61'
      }
    ],
    'Consumption':{
      'name':['<500','500-1000','1000-5000','5000-10000','10000-50000','>50000'],
      'data':['0','1','7','32','46','14'],
      'max':100,
    },
    'Age_Range':{
      'name':['Youth','Middle-aged','Old-aged'],
      'data':['58','42','0'],
      'max':100,
    },
    'Interest':[
      {
        'name':'coffee',
        'value':0
      },{
        'name':'family',
        'value':0
      },{
        'name':'travel',
        'value':0
      },{
        'name':'yoga',
        'value':0
      },{
        'name':'pets',
        'value':0
      },{
        'name':'baking',
        'value':0
      },{
        'name':'gardening',
        'value':0
      },{
        'name':'reading',
        'value':0
      },{
        'name':'designer clothesubing',
        'value':0
      },{
        'name':'ballads',
        'value':0
      }
    ],
    'Volume_Trend': {
      'type':'out',
      'dataTime': ['05-23','05-24','05-25','05-26','05-27','05-28','05-29'],
      'data1':[1957,1949,2167,3213,2446,2177,2056],
      'data2':[1029,1232,1264,1134,1171,1056,1100]
    },
    'Heatmap':[{
      'name':'K11',
      "lng":121.473959,
      "lat":31.223215,
      "count":1
    }]
  },
  {
    'defDeal':{
      'Shopping Mall':'Raffles City Changning',
      'Theme Name':'Bon App!',
      'Time':'2017/6/9-2017/6/11',
      'Location':'Ground floor lawn, Raffles City Changning',
      'Target customers':'Friends, lovers, children',
    },
    'Key_Words':[
      {
        'name': 'Food\nFestival',
        'subName': [
          'Popular\nRestraurant','hot dog\neating\ncontest'
        ],
      },
      {
        'name':'Party',
        'subName':[
          'bikini','lucky\ndraw'
        ]
      },
      {
        'name':'Hot Spot',
        'subName':[
          'fashion\nfair','Selfie','Entrance\ngift']
      }
    ],
    'Collaborative_Entity':[
      {
        'num':'1',
        'title':'Skyscanner'
      },
      {
        'num':'2',
        'title':'Storm Music Festival'
      },{
        'num':'3',
        'title':'Westin Hotel'
      },
      {
        'num':'4',
        'title':'Red Door Yoga'
      },{
        'num':'5',
        'title':'Discovery Adventures Moganshan Park'
      },
      {
        'num':'6',
        'title':'Farmonize Farm'
      },
      {
        'num':'7',
        'title':'Mobike'
      }
    ],
    'BrandsList':[
      {
        'icon':require('../img/food.svg'),
        'name':'F&B',
        'list':[
          {'name':'Liquid Laundry','tag':''},
          {'name':'Goose Island','tag':''},
          {'name':'Hennessy Classivm','tag':''},
          {'name':'Leffe','tag':''},
          {'name':'Professor Lee','tag':''},
          {'name':'Ocean Grounds','tag':''},
          {'name':'Spread the bagel','tag':''},
          {'name':'Hungry Lung’s Kitchen','tag':''},
          {'name':'FatBurger','tag':''},
          {'name':'Hatsune','tag':''},
          {'name':'El Santo','tag':''},
          {'name':'Viva!','tag':''},
          {'name':'Nicolson’s Gril','tag':''},
          {'name':'THE ISLES FISH & CHIPS','tag':''},
          {'name':'Zozzo','tag':''},
          {'name':'Bumbu','tag':''},
          {'name':'Porky‘s','tag':''},
          {'name':'Kakadu','tag':''},
          {'name':'Berry & Bowl','tag':''}
        ]
      },
      {
        'icon':require('../img/ic_pharmacy.svg'),
        'name':'Personal care\r\n& Service',
        'list':[
          {'name':'Lan Massage','tag':''},
          {'name':'Ningman SPA','tag':''}
        ]
      }
    ],
    'Media_Channel':[
      {
        'name':'Wechat',
        'value':'75'
      },{
        'name':'Douban',
        'value':'12'
      },{
        'name':'Web portal',
        'value':'7'
      },{
        'name':'Weibo',
        'value':'6'
      }
    ],
    'news':[
      {
        'img':require('../img/news/new7-1.jpg'),
        'title':'魔都最梦幻的美食嘉年华',
        'desc':'今天出来个x师傅，明天冒出个x茶！网红美食的速度总是让人难以跟上步伐， 6月10日-11日，在魔都网红餐厅收割机长宁来福士，Bon App!腹愁者联盟之私BON到月球美食嘉年华约你一起离开地球表面！不但和太阳肩并肩，还能上天插满Flag！',
        'link':'http://www.sohu.com/a/145237724_391502',
        'time':'2018-05-12'
      },
      {
        'img':require('../img/news/new7-2.jpeg'),
        'title':'腹愁者联盟本周末集结长宁来福士 网红美食派对等你来嗨！ ',
        'desc':'向往网红美食已久，但每次都为排队发愁？莫慌，这绝对是个尝遍网红美食的好机会，并且，绝对不需要你排队2小时哦！先给你们剧透一下！',
        'link':'https://mp.weixin.qq.com/s/BHJ2K1aDNlRwSdMjPHGGNw',
        'time':'2018-05-15'
      },
      {
        'img':require('../img/news/new7-3.jpeg'),
        'title':'拼手速！沪上逼格最高美食节【腹愁者联盟】入场券免费拿！',
        'desc':'六一儿童节活动刚结束，包含3张迪士尼乐园门票的大礼刚送出手，小编没想到这么快HnR又要给爸爸妈妈们送免费大福利了，没办法，就是这么爱送东西。',
        'link':'https://mp.weixin.qq.com/s/CeJQPXsqcp96AhN3mXi00w',
        'time':'2018-05-16'
      },
      {
        'img':require('../img/news/new7-4.jpeg'),
        'title':'魔都网红餐厅',
        'desc':'芝士从烤过的两层焦脆面包中间流淌下来，夹着大量牛油果番茄和布拉格火腿，咬一口拉丝拉到外太空，味道好吃到上天，而且绝对不需要你排队6小时！',
        'link':'https://mp.weixin.qq.com/s/jpo6DzVXNx_rJe8JAxBtRA',
        'time':'2018-05-17'
      },
      {
        'img':require('../img/news/new7-5.jpeg'),
        'title':'【活动汇总】震惊！盛夏最佳消暑方式竟然是……和卡丘酱一起看展？！ ',
        'desc':'梅雨过去就是盛夏了，这种时候冷气开放的房间便成了天堂。虽然在宿舍里享受空调的感觉无比惬意，但逛过各种各样展的卡丘酱的经验告诉我们：空调只能使人皮肤变得凉快，参加活动才会使人身心俱醉。这不，卡丘酱又想出去玩了，想不想和卡丘酱一起去呢？',
        'link':'https://mp.weixin.qq.com/s/4mSnMgIpxJoriygHdslHZw',
        'time':'2018-05-18'
      },{
        'img':require('../img/news/new7-6.jpeg'),
        'title':'魔都网红餐厅',
        'desc':'Liquid Laundry牌洗衣液简直是一个实力偶像派，网红工业风的餐厅装修，加上透明玻璃房内整齐排列着功能强大的酿酒缸，落地窗任由阳光洒落，金属质感外壳与现代风格交相辉映，没有去过都不好意思说自己是吃货',
        'link':'https://mp.weixin.qq.com/s/A2z3GEdmAMX7c0JNzJGE6g',
        'time':'2018-05-12'
      }
    ],
    'KOL':[
      {
        'picture':require('../img/kols/davidg.jpeg'),
        'name':'David Guetta',
        'desc':''
      },{
        'picture':require('../img/kols/girlhadid.jpeg'),
        'name':'Gigi hadid',
        'desc':''
      },{
        'picture':require('../img/kols/luyi.jpeg'),
        'name':'路易',
        'desc':'（星尚节目主持人）'
      }
    ],
    'Sales':{
      'name':['Forecasting'],
      'data':[2320900],
      'max':100,
      'icon':'--',
      'value':'--'
    },
    'passenger_flow':{
      'name':['Forecasting'],
      'data':[73200],
      'max':100,
      'icon':'--',
      'value':'--'
    },
    'Gender_Ratio':[
      {
        'name':'Male',
        'value':'62'
      },
      {
        'name':'Female',
        'value':'38'
      }
    ],
    'Consumption':{
      'name':['<500','500-1000','1000-5000','5000-10000','10000-50000','>50000'],
      'data':['0','2','1','36','43','18'],
      'max':100,
    },
    'Age_Range':{
      'name':['Youth','Middle-aged','Old-aged'],
      'data':['52','47','1'],
      'max':100,
    },
    'Interest':[
      {
        'name':'Driving',
        'value':0
      },{
        'name':'outdoor travel',
        'value':0
      },{
        'name':'fashion clothes',
        'value':0
      },{
        'name':'hip hop',
        'value':0
      },{
        'name':'French food',
        'value':0
      },{
        'name':'bars',
        'value':0
      },{
        'name':'Victoria\'s Secret',
        'value':0
      },{
        'name':'electronics',
        'value':0
      },{
        'name':'computer games',
        'value':0
      },{
        'name':'science fiction',
        'value':0
      }
    ],
    'Volume_Trend': {
      'type':'out',
      'dataTime': ['06-07','06-08','06-09','06-10','06-11','06-12','06-13'],
      'data1':[1315,1892,2633,1658,1210,1029,828],
      'data2':[0,0,0,0,0,0,0]
    },
    'Heatmap':[{
      'name':'Raffles City Changning',
      "lng":121.414917,
      "lat":31.217615,
      "count":1
    }]
  },
  {
    'defDeal':{
      'Shopping Mall':'HKRI TaiKoo Hui',
      'Theme Name':'FEAST FOOD FESTIVAL 2018',
      'Time':'2018/4/29-2018/4/30',
      'Location':'Roof Garden, HKRI TaiKoo Hui',
      'Target customers':'Foodies, hipsters, foreigners',
    },

    'Key_Words':[
      {
        'name':'Fashion',
        'subName':[
          'bottled\ncocktails','Future\nSnack'
        ]
      },{
        'name':'Party',
        'subName':[
          'roof\n garden','films','DJ'
        ]
      }
    ],
    'Collaborative_Entity':[
      {
        'num':'1',
        'title':'Social Supply Shanghai'
      },
      {
        'num':'2',
        'title':'Cinker Pictures'
      },{
        'num':'3',
        'title':'Event Bank'
      },
      {
        'num':'4',
        'title':'Mars App'
      }
    ],
    'BrandsList':[
      {
        'icon':require('../img/food.svg'),
        'name':'F&B',
        'list':[
          {'name':'Paris Blanc','tag':'own'},
          {'name':'Bar Constellation','tag':'own'},
          {'name':'CINKER PICTURES','tag':'own'},
          {'name':'seul&SEUL','tag':'own'},
          {'name':'UMI','tag':'own'},
          {'name':'Oatly','tag':''},
          {'name':'Cabreiroá','tag':''}
        ]
      },
    ],
    'Media_Channel':[
      {
        'name':'Weichat',
        'value':'28'
      },{
        'name':'Mobile App',
        'value':'56'
      },{
        'name':'Weibo',
        'value':'12'
      },{
        'name':'Zhihu',
        'value':'4'
      }
    ],
    'news':[
      {
        'img':require('../img/news/new8-1.jpeg'),
        'title':'魔都四月哪里玩，兴业太古汇一大波活动来袭！',
        'desc':'当人们熟悉的菜市场变成了艺术发生的空间，当鸡蛋、面包、蔬菜与水果交织着菜市场给人带来的感官体验，以艺术的表达颠覆着人们对菜市场与日常生活的体验，这样的举动打破了人们长久以来对艺术的距离感与幻觉，让艺术有了被大众欣赏和体验的权利，从而也让艺术有了真正流行起来的可能',
        'link':'https://mp.weixin.qq.com/s/xrTa2iVSTPOclCNVslVarA',
        'time':'2018-06-12'
      },
      {
        'img':require('../img/news/new8-2.jpeg'),
        'title':'CPSH X FEAST 未来露台揭幕',
        'desc':'一年一度的夜宴美食嘉年华 Feast 今年将在上海兴业太古汇的露天广场举办为期两天的“未来食验”活动，由 10 位 Top Chefs 坐镇的美食体验将带来全新惊喜，而现场 DJ 与高品质酒水新品牌则为热闹气氛做足了准备。',
        'link':'https://mp.weixin.qq.com/s/4bsOQoncbAnYgWL7TnTSVw',
        'time':'2018-06-13'
      },
      {
        'img':require('../img/news/new8-3.jpeg'),
        'title':'４月２９-３０日 | FEAST All About The Chefs ',
        'desc':'Bina Hu，给我们带来了Together，这是一家新开的法式亚洲概念餐厅，目前正在筹备中，让我们一起拭目以待吧！Kim Melvin，TheCommune Social食社餐厅和新项目Together的甜品主厨，上海美食界的老面孔',
        'link':'https://mp.weixin.qq.com/s/vdoiqXcV2CbMvRQYfe9nDg',
        'time':'2018-06-14'
      },
      {
        'img':require('../img/news/new8-4.jpeg'),
        'title':'五一怎么过？请不要睡3天，OK？！',
        'desc':'我掐指一算，如果不算上今天还剩的几个小时，我们还有2天就要迎接五一3天小长假啦~（周六加班，周日原本的休息日，里外里不就放1天嘛~）',
        'link':'https://mp.weixin.qq.com/s/zOyALnwKVhiuAU6KQBI_Pw',
        'time':'2018-06-15'
      },
      {
        'img':require('../img/news/new8-5.jpeg'),
        'title':'Feast美食节｜邂逅精致美食，与万千潮人共谱嗲味协奏曲 ',
        'desc':'好看的食物千篇一律有趣的吃法万里挑一在集结数百种美食的混嗲食验室让品尝美味成为生活的仪式感',
        'link':'https://mp.weixin.qq.com/s/OTHlclsHGDFDrxbZStVm8Q',
        'time':'2018-06-16'
      }
    ],
    'KOL':[
      {
        'picture':require('../img/kols/binyu.jpg'),
        'name':'BINA YU',
        'desc':''
      },{
        'picture':require('../img/kols/kinmelv.jpg'),
        'name':'KIM MELVIN',
        'desc':''
      },{
        'picture':require('../img/kols/ailuochibaole.jpeg'),
        'name':'CESAR PEREZ DE ANDA',
        'desc':''
      },{
        'picture':require('../img/kols/chriszhu.jpg'),
        'name':'CHRIS ZHU',
        'desc':''
      },{
        'picture':require('../img/kols/jetlo.jpg'),
        'name':'JET LO',
        'desc':''
      },{
        'picture':require('../img/kols/shanghaiwow.jpg'),
        'name':'ShanghaiWow',
        'desc':''
      }
    ],
    'Sales':{
      'name':['Forecasting'],
      'data':[18200000],
      'max':100,
      'icon':'--',
      'value':'--'
    },
    'passenger_flow':{
      'name':['Forecasting'],
      'data':[53200],
      'max':100,
      'icon':'--',
      'value':'--'
    },
    'Gender_Ratio':[
      {
        'name':'Male',
        'value':'53'
      },
      {
        'name':'Female',
        'value':'47'
      }
    ],
    'Consumption':{
      'name':['<500','500-1000','1000-5000','5000-10000','10000-50000','>50000'],
      'data':['0','0','1','13','32','54'],
      'max':100,
    },
    'Age_Range':{
      'name':['Youth','Middle-aged','Old-aged'],
      'data':['36','48','16'],
      'max':100,
    },
    'Interest':[
      {
        'name':'luxury',
        'value':0
      },{
        'name':'seafood',
        'value':0
      },{
        'name':'fashion week',
        'value':0
      },{
        'name':'classic music',
        'value':0
      },{
        'name':'virtual reality',
        'value':0
      },{
        'name':'corporate management',
        'value':0
      },{
        'name':'inancial investment',
        'value':0
      },{
        'name':'polo',
        'value':0
      },{
        'name':'entrepreneur forum',
        'value':0
      },{
        'name':'sport car club',
        'value':0
      }
    ],
    'Volume_Trend': {
      'type':'out',
      'dataTime': ['04-27','04-28','04-29','04-30','05-01','05-02','05-03'],
      'data1':[748,932,1297,1366,581,433,462],
      'data2':[0,0,0,0,0,0,0]
    },
    'Heatmap':[{
      'name':'HKRI TaiKoo Hui',
      "lng":121.460688,
      "lat":31.230310,
      "count":1
    }]
  },
]
//获取随机颜色
function randomColor1(){
  var r = Math.floor(Math.random()*256);
  var g = Math.floor(Math.random()*256);
  var b = Math.floor(Math.random()*256);

  if(r < 16){
    r = "0"+r.toString(16);
  }else{
    r = r.toString(16);
  }
  if(g < 16){
    g = "0"+g.toString(16);
  }else{
    g = g.toString(16);
  }
  if(b < 16){
    b = "0"+b.toString(16);
  }else{
    b = b.toString(16);
  }
  return "#"+r+g+b;
}
//颜色数组
const colorArr=[
  '#076D76','#B57C2E','#943F39','#154B86','#002941','#943F39'
]
//key word
function keyWordOpt(arr) {
  let opt=[];
  for(let i=0;i<arr.length;i++){
    opt.push({'name':arr[i].name,'subName':arr[i].subName});
  }
  return opt;
}
/**
 * 饼状图
 * @param arr 传入参数
 * @param flag 控制legend 是否显示
 * @returns {{tooltip: {formatter: string}, legend: {orient: string, left: string, top: string, icon: string, textStyle: {color: string}, data: Array}, series: *[]}}
 */
function mediaOpt(arr,flag) {
  let len=arr.length;
  let data1=[],data2=[],centerArr=[],show1=false,show2=false;
  for(let i=0;i<len;i++){
    let itemColor={
      'normal':{'color':colorArr[i]}
    }
    data1.push(arr[i]['name']);
    data2.push({name:arr[i]['name'],value:arr[i]['value'],itemStyle:itemColor});
  }
  if(flag==false){
    data1=[];
    centerArr=['55%','45%'];
    show1=true;
    show2=true;
  }else{
    centerArr=['60%', '40%'];
    show1=false;
    show2=false;
  }
  let opt={
    tooltip : {
      formatter: "<div style='font-size:26px;text-align:center;line-height:40px;background-color:#143C5C;padding:10px;'><span style='font-size:22px;color:#CFFEFF'>{b}</span><br/><span style='font-size:26px;color:#fff;'>{d}%</span></div>",
      padding:0
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      top:'5',
      icon: 'circle',
      textStyle: {
        color: '#687493',
        fontSize:'24'
      },
      data:data1
    },
    series : [
      {
        type: 'pie',
        radius : '60%',
        center:centerArr,
        // roseType:true,//拉丁
        data:data2,
        label: {
          normal: {
            position: '',
            fontSize:'24'
          }
        },
        itemStyle: {
          emphasis: {
            shadowBlur: 0,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
            borderColor:'red',
            borderWidth:'5px',
            borderType:'solid'
          },
          normal : {
            label : {
              show : show1
            },
            labelLine : {
              show : show2
            }
          },
        }
      }
    ]
  }
  return opt;
}
/**
 *
 * @param obj 返回的条形图对象
 * @param flag1 是否显示底层label
 * @param flag2 是否显示上层label
 * @param flag3 是否将label显示到上面
 * @returns {{tooltip: {show: boolean, formatter: string}, grid: {left: string, top: string, bottom: string, right: string}, xAxis: *[], yAxis: *[], series: *[]}}
 */
function consumptionOpt(obj,flag1,flag2,flag3) {
  let data1=[],data2=[],max=[],xMax=0,obj1={};
  let nameLen=obj['name'],dataLen=obj['data'];
  let symboj1='%';
  let str=[],str1=[];
  let num1=0,leftStr='',rightStr='25%';
  for(let i=nameLen.length-1;i>=0;i--){
    data1.push(obj['name'][i]);
    data2.push(parseInt(obj['data'][i]));
    max.push(obj['max']);
  }

  for(let k=0;k<data2.length;k++){
    num1+=data2[k];
  }
  if(flag1==false&&flag2==true){
    xMax=0;
  }else{
    xMax=max;
  }
  if(flag3==false){
    symboj1='%';
    obj1={
      textStyle: {
        "color": '#A6B5CD',
        fontSize:'22',
      },
      show: true
    }
    leftStr='30%'
    if(flag1==false&&flag2==true){
      leftStr='39%'
    }
  }else{
    symboj1=0;
    obj1={
      textStyle: {
        "color": '#52ADCF',
        fontSize:'22',
      },
      show: true,
      align: 'left',
      verticalAlign: 'bottom',
      padding: [0, 0, 15, 8],
    }
    leftStr='5%';
    rightStr='35%';
  }

  let opt={
      tooltip: {
        show: true,
        formatter: "<div style='font-size:26px;line-height: 30px;'>{b} {c}"+symboj1+"</div>"
      },
      grid: {
        left:leftStr,
        top: '5%',
        bottom: '0',
        right: rightStr
      },
      xAxis: [{
        type: 'value',
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisLabel: {
          show: false
        },
        splitLine: {
          show: false
        }
      }],
      yAxis: [{
        type: 'category',
        data:data1,
        nameTextStyle: {
          color: '#b7ce9e',
          fontSize:'24',
          opacity:0.5
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisLabel:obj1,
      }],
      series: [{
        name: ' ',
        type: 'bar',
        barWidth: 16,
        silent: true,
        itemStyle: {
          normal: {
            color: '#475567',
            opacity:0.5
          }
        },
        label: {
          normal: {
            show: flag1,
            position:'right',
            formatter:function(params){
              return Math.round(data2[params.dataIndex]/xMax[0]*100)+"%";
              // let index=params[dataIndex];
              // return data2[index]/xMax*100+'%';
            },
            textStyle:{
              color:'#ffffff',
              fontSize:'24'
            },
          },

        },
        barGap: '-100%',
        barCategoryGap: '50%',
        data:xMax,

      }, {
        name: ' ',
        type: 'bar',
        barWidth: 16,
        data:data2,
        label: {
          normal: {
            show: flag2,
            position: 'right',
            // formatter: '{c}'+symboj1,
            formatter:function (params) {
              let v1=parseInt(params.value);
              let num=v1.toString();
              let str=[],str2='';
              for(let i=num.length-1;i>=0;i--){
                str.push(num[i]);
              }
              for(let j=str.length-1;j>=0;j--){
                if(j%3==0&&j>0){
                  str2+=str[j]+',';
                }else{
                  str2+=str[j];
                }

              }
              if(symboj1==''){
                return str2;
              }else {
                return parseInt(v1/num1*100)+''+symboj1;
              }

            },
            color:'#fff',
            fontSize:'24'
          }
        },
        itemStyle:{
          normal:{
            color:"#076D76"
          }
        }
      }]
    };
  let opt1=Object.assign(opt,obj);
  return opt1;
}
//Interest
function cloundOpt(arr) {
  let colorArr=['#BC6D1C','#D34E31','#B31616','#0DA185','#2D96D3','#5B89A1'];
  let opt={
    grid: {
      top: "5%",
      left: "5%",
      right: "5%",
      bottom: "5%"
    },
    title: {
      text: "词云图",
      show: false
    },
    tooltip: {
      position: "top",
      formatter: function(params) {
        let v=params.data.value;
        let name=params.data.name;
        let str='';
        if(v==0){
          str=name;
        }else{
          str=v;
        }
        return str;
      }
    },
    series: [
      {
        type: "wordCloud",
        gridSize: 8,
        sizeRange: [12, 60],
        textRotation: [0, 0],
        rotationRange: [0,0],
        rotationStep: 45,
        shape:'circle',
        top: "top",
        left: "left",
        right: "right",
        bottom: "bottom",
        width: "100%",
        height: "90%",
        drawOutOfBound: false,
        textStyle: {
          normal: {
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            color: function () {
              let num=parseInt(Math.random()*6);
              // Random color
              // return 'rgb(' + [
              //   Math.round(Math.random() * 160),
              //   Math.round(Math.random() * 160),
              //   Math.round(Math.random() * 160)
              // ].join(',') + ')';
              return colorArr[num]
            }
          },
          emphasis: {
            shadowBlur: 10,
            shadowColor: '#333'
          }
        },
        data: arr
      }
    ]
  }
  return opt;
}
//Volume Trend
function trendOpt(obj){
  let name1='',name2='';
  if(obj['type']=='in'){
    if(obj['data2'].length>0){
      name1='2017';
      name2='2018'
    }
  }else {
    if(obj['data2'].length>0){
      name1='2016';
      name2='2017'
    }
  }
  if(obj['data2'].length==0){
    name1=''
  }
  let opt={
    title: {
      text: 'Volume Trend',
      left: '0%',
      textStyle:{
        color:'#52ADCF',
      }
    },
    legend:{
      left:'0%',
      top:'8%',
      itemHeight:6,
      textStyle:{
        color:'#fff',
        fontSize:'22'
      },
      data:[{
        name:name1,
        icon:'rect',
      },{
        name:name2,
        icon:'rect'
      }],
    },
    grid:{
      left:'10%',
      right:'5%',
      top:'20%',
      bottom:'10%'
    },
    tooltip:{
      formatter:lineObj.formatter,
      padding:0
    },
    xAxis: {
      boundaryGap: false,
      axisLabel: {
        color:'#667DA3',
        textStyle:{
          fontSize:20
        }
      },
      axisLine: {
        onZero: false,
        lineStyle:{
          color:'#586C8D'
        }
      },
      axisTick: {
        show: false
      },

      data:obj['dataTime'],
    },
    yAxis: {
      splitNumber:0,
      axisLabel: {
        color:'#667DA3',
        textStyle:{
          fontSize:20
        }
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitLine:{
        show:false
      },

    },
    series: [{
      name:name1,
      type: 'line',
      symbolSize:5,
      data:obj['data2'],
      itemStyle:{
        normal:{
          color:'#076D76'
        }
      },
    }, {
      name:name2,
      type: 'line',
      symbolSize:5,
      data:obj['data1'],
      itemStyle:{
        normal:{
          color:'#BC6D1C',
          fontSize:'24'
        }
      }
    },]
  };
  return opt;
}
const state={
  ulPos:false,
  listDetail:[
    {
      ch1: {
        //defDeal
        defDeal: dataList[0]['defDeal'],
        //key words
        keyChartOption: keyWordOpt(dataList[0]['Key_Words']),
        //collaList
        collaList: dataList[0]['Collaborative_Entity'],
        //Brands_in
        bransList: dataList[0]['BrandsList'],
        //media
        mediaOpt: mediaOpt(dataList[0]['Media_Channel'],true),
        //news
        newsArr:dataList[0]['news'],
        //kol
        kolList: dataList[0]['KOL'],
        //sale
        saleOpt: consumptionOpt(dataList[0]['Sales'], false, true, true),
        //passenger_flow
        passenOpt: consumptionOpt(dataList[0]['passenger_flow'], false, true, true),
        //Gender_Ratio
        genderOpt: mediaOpt(dataList[0]['Gender_Ratio'],false),
        //Consumption
        consuOpt: consumptionOpt(dataList[0]['Consumption'], true, false, false),
        //Age_Range
        ageRangeOpt: consumptionOpt(dataList[0]['Age_Range'], false, true, false),
        //Interest
        cloundOpt: cloundOpt(dataList[0]['Interest']),
        //Volume_Trend
        trendOpt:trendOpt(dataList[0]['Volume_Trend']),
        //Heatmap
        heatmap:dataList[0]['Heatmap']
      }
    },
    {
      do1:{
        //defDeal
        defDeal: dataList[1]['defDeal'],
        //key words
        keyChartOption: keyWordOpt(dataList[1]['Key_Words']),
        //collaList
        collaList: dataList[1]['Collaborative_Entity'],
        //Brands_in
        bransList: dataList[1]['BrandsList'],
        //media
        mediaOpt: mediaOpt(dataList[1]['Media_Channel'],true),
        //news
        newsArr:dataList[1]['news'],
        //kol
        kolList: dataList[1]['KOL'],
        //sale
        saleOpt: consumptionOpt(dataList[1]['Sales'], false, true, true),
        //passenger_flow
        passenOpt: consumptionOpt(dataList[1]['passenger_flow'], false, true, true),
        //Gender_Ratio
        genderOpt: mediaOpt(dataList[1]['Gender_Ratio'],false),
        //Consumption
        consuOpt: consumptionOpt(dataList[1]['Consumption'], true, false, false),
        //Age_Range
        ageRangeOpt: consumptionOpt(dataList[1]['Age_Range'], false, true, false),
        //Interest
        cloundOpt: cloundOpt(dataList[1]['Interest']),
        //Volume_Trend
        trendOpt:trendOpt(dataList[1]['Volume_Trend']),
        //Heatmap
        heatmap:dataList[1]['Heatmap']
      }
    },
    {
      be1:{
        //defDeal
        defDeal: dataList[2]['defDeal'],
        //key words
        keyChartOption: keyWordOpt(dataList[2]['Key_Words']),
        //collaList
        collaList: dataList[2]['Collaborative_Entity'],
        //Brands_in
        bransList:dataList[2]['BrandsList'],
        //media
        mediaOpt: mediaOpt(dataList[2]['Media_Channel'],true),
        //news
        newsArr:dataList[2]['news'],
        //kol
        kolList: dataList[2]['KOL'],
        //sale
        saleOpt: consumptionOpt(dataList[2]['Sales'], false, true, true),
        //passenger_flow
        passenOpt: consumptionOpt(dataList[2]['passenger_flow'], false, true, true),
        //Gender_Ratio
        genderOpt: mediaOpt(dataList[2]['Gender_Ratio'],false),
        //Consumption
        consuOpt: consumptionOpt(dataList[2]['Consumption'], true, false, false),
        //Age_Range
        ageRangeOpt: consumptionOpt(dataList[2]['Age_Range'], false, true, false),
        //Interest
        cloundOpt: cloundOpt(dataList[2]['Interest']),
        //Volume_Trend
        trendOpt:trendOpt(dataList[2]['Volume_Trend']),
        //Heatmap
        heatmap:dataList[2]['Heatmap']
      }
    },
    {
      wi1:{
        //defDeal
        defDeal: dataList[3]['defDeal'],
        //key words
        keyChartOption: keyWordOpt(dataList[3]['Key_Words']),
        //collaList
        collaList: dataList[3]['Collaborative_Entity'],
        //Brands_in
        bransList:dataList[3]['BrandsList'],
        //media
        mediaOpt: mediaOpt(dataList[3]['Media_Channel'],true),
        //news
        newsArr:dataList[3]['news'],
        //kol
        kolList: dataList[3]['KOL'],
        //sale
        saleOpt: consumptionOpt(dataList[3]['Sales'], false, true, true),
        //passenger_flow
        passenOpt: consumptionOpt(dataList[3]['passenger_flow'], false, true, true),
        //Gender_Ratio
        genderOpt: mediaOpt(dataList[3]['Gender_Ratio'],false),
        //Consumption
        consuOpt: consumptionOpt(dataList[3]['Consumption'], true, false, false),
        //Age_Range
        ageRangeOpt: consumptionOpt(dataList[3]['Age_Range'], false, true, false),
        //Interest
        cloundOpt: cloundOpt(dataList[3]['Interest']),
        //Volume_Trend
        trendOpt:trendOpt(dataList[3]['Volume_Trend']),
        //Heatmap
        heatmap:dataList[3]['Heatmap']
      }
    },
    {
      su1:{
        //defDeal
        defDeal: dataList[4]['defDeal'],
        //key words
        keyChartOption: keyWordOpt(dataList[4]['Key_Words']),
        //collaList
        collaList: dataList[4]['Collaborative_Entity'],
        //Brands_in
        bransList:dataList[4]['BrandsList'],
        //media
        mediaOpt: mediaOpt(dataList[4]['Media_Channel'],true),
        //news
        newsArr:dataList[4]['news'],
        //kol
        kolList: dataList[4]['KOL'],
        //sale
        saleOpt: consumptionOpt(dataList[4]['Sales'], false, true, true),
        //passenger_flow
        passenOpt: consumptionOpt(dataList[4]['passenger_flow'], false, true, true),
        //Gender_Ratio
        genderOpt: mediaOpt(dataList[4]['Gender_Ratio'],false),
        //Consumption
        consuOpt: consumptionOpt(dataList[4]['Consumption'], true, false, false),
        //Age_Range
        ageRangeOpt: consumptionOpt(dataList[4]['Age_Range'], false, true, false),
        //Interest
        cloundOpt: cloundOpt(dataList[4]['Interest']),
        //Volume_Trend
        trendOpt:trendOpt(dataList[4]['Volume_Trend']),
        //Heatmap
        heatmap:dataList[4]['Heatmap']
      }
    },
    {
      he1:{
        //defDeal
        defDeal: dataList[5]['defDeal'],
        //key words
        keyChartOption: keyWordOpt(dataList[5]['Key_Words']),
        //collaList
        collaList: dataList[5]['Collaborative_Entity'],
        //Brands_in
        bransList:dataList[5]['BrandsList'],
        //media
        mediaOpt: mediaOpt(dataList[5]['Media_Channel'],true),
        //news
        newsArr:dataList[5]['news'],
        //kol
        kolList: dataList[5]['KOL'],
        //sale
        saleOpt: consumptionOpt(dataList[5]['Sales'], false, true, true),
        //passenger_flow
        passenOpt: consumptionOpt(dataList[5]['passenger_flow'], false, true, true),
        //Gender_Ratio
        genderOpt: mediaOpt(dataList[5]['Gender_Ratio'],false),
        //Consumption
        consuOpt: consumptionOpt(dataList[5]['Consumption'], true, false, false),
        //Age_Range
        ageRangeOpt: consumptionOpt(dataList[5]['Age_Range'], false, true, false),
        //Interest
        cloundOpt: cloundOpt(dataList[5]['Interest']),
        //Volume_Trend
        trendOpt:trendOpt(dataList[5]['Volume_Trend']),
        //Heatmap
        heatmap:dataList[5]['Heatmap']
      }
    },
    {
      bo1:{
        //defDeal
        defDeal: dataList[6]['defDeal'],
        //key words
        keyChartOption: keyWordOpt(dataList[6]['Key_Words']),
        //collaList
        collaList: dataList[6]['Collaborative_Entity'],
        //Brands_in
        bransList: dataList[6]['BrandsList'],
        //media
        mediaOpt: mediaOpt(dataList[6]['Media_Channel'],true),
        //news
        newsArr:dataList[6]['news'],
        //kol
        kolList: dataList[6]['KOL'],
        //sale
        saleOpt: consumptionOpt(dataList[6]['Sales'], false, true, true),
        //passenger_flow
        passenOpt: consumptionOpt(dataList[6]['passenger_flow'], false, true, true),
        //Gender_Ratio
        genderOpt: mediaOpt(dataList[6]['Gender_Ratio'],false),
        //Consumption
        consuOpt: consumptionOpt(dataList[6]['Consumption'], true, false, false),
        //Age_Range
        ageRangeOpt: consumptionOpt(dataList[6]['Age_Range'], false, true, false),
        //Interest
        cloundOpt: cloundOpt(dataList[6]['Interest']),
        //Volume_Trend
        trendOpt:trendOpt(dataList[6]['Volume_Trend']),
        //Heatmap
        heatmap:dataList[6]['Heatmap']
      }
    },
    {
      fe1:{
        //defDeal
        defDeal: dataList[7]['defDeal'],
        //key words
        keyChartOption: keyWordOpt(dataList[7]['Key_Words']),
        //collaList
        collaList: dataList[7]['Collaborative_Entity'],
        //Brands_in
        bransList: dataList[7]['BrandsList'],
        //media
        mediaOpt: mediaOpt(dataList[7]['Media_Channel'],true),
        //news
        newsArr:dataList[7]['news'],
        //kol
        kolList: dataList[7]['KOL'],
        //sale
        saleOpt: consumptionOpt(dataList[7]['Sales'], false, true, true),
        //passenger_flow
        passenOpt: consumptionOpt(dataList[7]['passenger_flow'], false, true, true),
        //Gender_Ratio
        genderOpt: mediaOpt(dataList[7]['Gender_Ratio'],false),
        //Consumption
        consuOpt: consumptionOpt(dataList[7]['Consumption'], true, false, false),
        //Age_Range
        ageRangeOpt: consumptionOpt(dataList[7]['Age_Range'], false, true, false),
        //Interest
        cloundOpt: cloundOpt(dataList[7]['Interest']),
        //Volume_Trend
        trendOpt:trendOpt(dataList[7]['Volume_Trend']),
        //Heatmap
        heatmap:dataList[7]['Heatmap']
      }
    }
  ],
  recom:{
    listArr_jieri:[
      {
        'img':require('../img/shendan1.jpg'),
        'title':'Christmas',
        'title-desc':'ch1',
      },{
        'img':require('../img/meshi.jpg'),
        'title':"Super Taste",
        'title-desc':'su1',
      },
      {
        'img':require('../img/wansheng.jpg'),
        'title':'Halloween',
        'title-desc':'',
      },{
        'img':require('../img/qixi.jpg'),
        'title':"Valentine's Day",
        'title-desc':'',
      },{
        'img':require('../img/ertong.jpg'),
        'title':"Children's day",
        'title-desc':'',
      },{
        'img':require('../img/nvwang.jpg'),
        'title':'Queen is coming',
        'title-desc':'',
      }
    ],
    listArr_copet:[
      {
        'img':require('../img/gl.jpeg'),
        'title':"Doggy Ding's Global Diary",
        'title-desc':'do1',
      },{
        'img':require('../img/ch2.jpg'),
        'title':'Bear hug Ice garden',
        'title-desc':'be1',
      },
      {
        'img':require('../img/ji.jpeg'),
        'title':'Winter market',
        'title-desc':'wi1',
      },{
        'img':require('../img/kl.jpeg'),
        'title':'Hennessy & Meals',
        'title-desc':'he1',
      },{
        'img':require('../img/ra.jpeg'),
        'title':'Bon App!',
        'title-desc':'bo1',
      },{
        'img':require('../img/hk.jpeg'),
        'title':'FEAST FOOD FESTIVAL 2018',
        'title-desc':'fe1',
      }
    ],
    listArr_su:[
      {
        'img':require('../img/ch1.jpg'),
        'title':'Christmas',
        'title-desc':'ch1',
      },{
        'img':require('../img/ms1.jpg'),
        'title':"Super Taste",
        'title-desc':'su1',
      }
    ],
    listArr_gl:[
      {
        'img':require('../img/gl.jpeg'),
        'title':"Doggy Ding's Global Diary",
        'title-desc':'do1',
      }
    ],
    listArr_ia:[
      {
        'img':require('../img/ch2.jpg'),
        'title':'Bear hug Ice garden',
        'title-desc':'be1',
      }
    ],
    listArr_ji:[
      {
        'img':require('../img/ji.jpeg'),
        'title':'Winter market',
        'title-desc':'wi1',
      }
    ],
    listArr_k1:[
      {
        'img':require('../img/kl.jpeg'),
        'title':'Hennessy & Meals',
        'title-desc':'he1',
      }
    ],
    listArr_ra:[
      {
        'img':require('../img/ra.jpeg'),
        'title':'Bon App!',
        'title-desc':'bo1',
      }
    ],
    listArr_hk:[
      {
        'img':require('../img/hk.jpeg'),
        'title':'FEAST FOOD FESTIVAL 2018',
        'title-desc':'fe1',
      }
    ],
    listArr_ch:[
      {
        'img':require('../img/ch1.jpg'),
        'title':'Christmas',
        'title-desc':'ch1',
      }
    ],
    listArr_ch_rev:[
      {
        'img':require('../img/gl.jpeg'),
        'title':"Doggy Ding's Global Diary",
        'title-desc':'do1',
      },{
        'img':require('../img/ch2.jpg'),
        'title':'Bear hug Ice garden',
        'title-desc':'be1',
      },
      {
        'img':require('../img/ji.jpeg'),
        'title':'Winter market',
        'title-desc':'wi1',
      }
    ],

    listArr_fo:[
      {
        'img':require('../img/ms1.jpg'),
        'title':'Super Taste',
        'title-desc':'su1',
      }
    ],
    listArr_fo_rev:[
      {
        'img':require('../img/kl.jpeg'),
        'title':'Hennessy & Meals',
        'title-desc':'he1',
      },
      {
        'img':require('../img/ra.jpeg'),
        'title':'Bon App!',
        'title-desc':'bo1',
      },{
        'img':require('../img/hk.jpeg'),
        'title':'FEAST FOOD FESTIVAL 2018',
        'title-desc':'fe1',
      }
    ],
  },
  compet:{

  },
}
export default state
