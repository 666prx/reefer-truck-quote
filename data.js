// 冷藏车产品数据库
// 自动发布

const PRODUCT_DATA = [
  {
    "id": "jmc-eluda",
    "brand": "江铃",
    "name": "江铃E路达纯电4.2米冷藏车",
    "image": "",
    "powerType": "纯电",
    "basePrice": 228000,
    "sellingPrice": 228000,
    "specs": {
      "电机": "博世167kW(227马力)",
      "电池": "宁德时代100.46kWh",
      "续航": "打冷220-240km",
      "厢体容积": "18m³",
      "载重": "1.1T",
      "制动": "气刹",
      "变速箱": "自动挡",
      "质保": "8年/50万km"
    },
    "boxes": [
      {
        "name": "CIMC中集K2",
        "desc": "高光铝板外壁+VR热塑板内壁，美式全满焊铝地台",
        "price": 0
      }
    ],
    "defaultAC": {
      "name": "华盛火星EV600",
      "price": 0,
      "temp": "最低-20℃"
    },
    "optionalAC": [
      {
        "name": "升级开利(Carrier)冷机",
        "price": 8000
      },
      {
        "name": "升级松芝冷机",
        "price": 5000
      },
      {
        "name": "升级黑盾冷机",
        "price": 4000
      },
      {
        "name": "升级英维克冷机",
        "price": 6000
      }
    ],
    "addons": [
      {
        "name": "铝合金尾板(1.5T)",
        "price": 14500
      },
      {
        "name": "食品运输智联监控(GPS/4G/温度/驾驶分析)",
        "price": 4000
      }
    ],
    "otherFees": {
      "insurance": 12000,
      "registration": 2000
    },
    "subsidy": 35000,
    "note": ""
  },
  {
    "id": "foton-38",
    "brand": "福田",
    "name": "福田智蓝纯电3.8米冷藏车",
    "image": "",
    "powerType": "纯电",
    "basePrice": 157000,
    "sellingPrice": 157000,
    "specs": {
      "电机": "北汽福田100kW(135马力)",
      "电池": "宁德时代63.75kWh",
      "续航": "打冷180-200km",
      "厢体容积": "14m³",
      "载重": "1.575T",
      "制动": "液刹",
      "变速箱": "自动挡",
      "质保": "8年/40万km"
    },
    "boxes": [
      {
        "name": "CIMC中集M",
        "desc": "外壁玻璃钢+内壁热塑板，卡槽式厢板",
        "price": 0
      }
    ],
    "defaultAC": {
      "name": "华盛火星EV380",
      "price": 0,
      "temp": "最低-18℃"
    },
    "optionalAC": [
      {
        "name": "升级松芝冷机",
        "price": 5000
      },
      {
        "name": "升级英维克冷机",
        "price": 6000
      }
    ],
    "addons": [
      {
        "name": "食品运输智联监控(GPS/4G/温度/驾驶分析)",
        "price": 4000
      }
    ],
    "otherFees": {
      "insurance": 11500,
      "registration": 2000
    },
    "subsidy": 35000,
    "note": ""
  },
  {
    "id": "foton-42-100",
    "brand": "福田",
    "name": "福田智蓝纯电4.2米冷藏车(100度)",
    "image": "",
    "powerType": "纯电",
    "basePrice": 206000,
    "sellingPrice": 206000,
    "specs": {
      "电机": "北汽福田167kW(227马力)",
      "电池": "宁德时代100.46kWh",
      "续航": "打冷200-220km",
      "厢体容积": "18m³",
      "载重": "0.99T",
      "制动": "气刹",
      "变速箱": "自动挡",
      "质保": "8年/50万km"
    },
    "boxes": [
      {
        "name": "原厂箱体",
        "desc": "玻璃钢外壁+热塑板内壁",
        "price": 0
      },
      {
        "name": "升级CIMC中集K2",
        "desc": "高光铝板外壁+VR热塑板内壁，美式全满焊铝地台",
        "price": 11000
      }
    ],
    "defaultAC": {
      "name": "华盛火星EV600",
      "price": 0,
      "temp": "最低-20℃"
    },
    "optionalAC": [
      {
        "name": "升级松芝冷机",
        "price": 5000
      },
      {
        "name": "升级黑盾冷机",
        "price": 4000
      },
      {
        "name": "升级英维克冷机",
        "price": 6000
      }
    ],
    "addons": [
      {
        "name": "铝合金尾板(1.5T)",
        "price": 14500
      },
      {
        "name": "食品运输智联监控(GPS/4G/温度/驾驶分析)",
        "price": 4000
      }
    ],
    "otherFees": {
      "insurance": 12000,
      "registration": 2000
    },
    "subsidy": 35000,
    "note": "原厂落地¥234,500 / 中集落地¥245,500"
  },
  {
    "id": "foton-42-120",
    "brand": "福田",
    "name": "福田智蓝纯电4.2米冷藏车(120度)",
    "image": "",
    "powerType": "纯电",
    "basePrice": 227000,
    "sellingPrice": 227000,
    "specs": {
      "电机": "北汽福田167kW(227马力)",
      "电池": "宁德时代120.23kWh",
      "续航": "打冷260-280km",
      "厢体容积": "18m³",
      "载重": "0.99T",
      "制动": "气刹",
      "变速箱": "自动挡",
      "质保": "8年/50万km"
    },
    "boxes": [
      {
        "name": "原厂箱体",
        "desc": "玻璃钢外壁+热塑板内壁",
        "price": 0
      },
      {
        "name": "升级CIMC中集K2",
        "desc": "高光铝板外壁+VR热塑板内壁，美式全满焊铝地台",
        "price": 10300
      }
    ],
    "defaultAC": {
      "name": "华盛火星EV600",
      "price": 0,
      "temp": "最低-20℃"
    },
    "optionalAC": [
      {
        "name": "升级松芝冷机",
        "price": 5000
      },
      {
        "name": "升级黑盾冷机",
        "price": 4000
      },
      {
        "name": "升级英维克冷机",
        "price": 6000
      }
    ],
    "addons": [
      {
        "name": "铝合金尾板(1.5T)",
        "price": 14500
      },
      {
        "name": "食品运输智联监控(GPS/4G/温度/驾驶分析)",
        "price": 4000
      }
    ],
    "otherFees": {
      "insurance": 12000,
      "registration": 2000
    },
    "subsidy": 35000,
    "note": "原厂落地¥255,500 / 中集落地¥265,800"
  },
  {
    "id": "foton-ouhang",
    "brand": "福田",
    "name": "福田欧航6.8米燃油冷藏车",
    "image": "",
    "powerType": "燃油",
    "basePrice": 256800,
    "sellingPrice": 256800,
    "specs": {
      "发动机": "福康F4.5NS6B240A 4.5L 240马力",
      "变速箱": "8挡法士特手动",
      "厢体容积": "38.5m³",
      "载重": "9.9T",
      "燃料": "柴油国VI",
      "油箱": "300L铝合金",
      "制动": "前后鼓式",
      "轮胎": "11R22.5 18PR"
    },
    "boxes": [
      {
        "name": "CIMC中集K2",
        "desc": "高光铝板外壁+VR热塑板内壁，可选不锈钢地板",
        "price": 0
      }
    ],
    "defaultAC": {
      "name": "开利1100分体式",
      "price": 0,
      "temp": "标配冷机"
    },
    "optionalAC": [],
    "addons": [],
    "otherFees": {
      "insurance": 16000,
      "registration": 3000
    },
    "subsidy": 0,
    "note": ""
  },
  {
    "id": "foton-hybrid",
    "brand": "福田",
    "name": "福田欧马可智蓝插电混动4.2米",
    "image": "",
    "powerType": "混动",
    "basePrice": 217800,
    "sellingPrice": 217800,
    "specs": {
      "发动机": "欧康2.5L 158马力",
      "电机": "福田FTTBP070A 98马力",
      "综合马力": "256匹",
      "电池": "盟固利锰酸锂14kWh",
      "续航": "油电混合长续航",
      "厢体容积": "18m³",
      "载重": "1.02T",
      "变速箱": "自动挡",
      "制动": "气刹"
    },
    "boxes": [
      {
        "name": "CIMC中集K2",
        "desc": "高光铝板外壁+VR热塑板内壁，正压灌注式发泡",
        "price": 0
      }
    ],
    "defaultAC": {
      "name": "松芝EV490分体式",
      "price": 0,
      "temp": "最低-18℃"
    },
    "optionalAC": [],
    "addons": [],
    "otherFees": {
      "insurance": 12000,
      "registration": 2000
    },
    "subsidy": 35000,
    "note": "国家补贴35,000元需确认混动是否适用"
  },
  {
    "id": "yihui-v02",
    "brand": "翼晖",
    "name": "翼晖V02纯电3.2米冷藏车",
    "image": "",
    "powerType": "纯电",
    "basePrice": 108000,
    "sellingPrice": 108000,
    "specs": {
      "电机": "远程智芯60kW(82马力)",
      "电池": "智芯46.08kWh",
      "续航": "打冷180-200km",
      "厢体容积": "9m³",
      "载重": "1.13T",
      "制动": "液刹(前盘后鼓)",
      "充电": "快充≈40分钟",
      "质保": "6年/30万km"
    },
    "boxes": [
      {
        "name": "重庆原厂箱体",
        "desc": "外壁玻璃钢+内壁热塑板",
        "price": 0
      }
    ],
    "defaultAC": {
      "name": "黑盾HE380",
      "price": 0,
      "temp": "最低-18℃"
    },
    "optionalAC": [],
    "addons": [
      {
        "name": "食品运输智联监控(GPS/4G/温度/驾驶分析)",
        "price": 4000
      }
    ],
    "otherFees": {
      "insurance": 11000,
      "registration": 2000
    },
    "subsidy": 35000,
    "note": ""
  },
  {
    "id": "yihui-v01",
    "brand": "翼晖",
    "name": "翼晖面包V01纯电2.5米冷藏车",
    "image": "",
    "powerType": "纯电",
    "basePrice": 123500,
    "sellingPrice": 123500,
    "specs": {
      "电机": "远程智芯60kW(81马力)",
      "电池": "国轩41.93kWh",
      "续航": "打冷180-200km",
      "厢体容积": "5m³",
      "载重": "1.095T",
      "充电": "快充≈40分钟",
      "质保": "6年/30万km"
    },
    "boxes": [
      {
        "name": "重庆原厂箱体",
        "desc": "面包式一体车厢",
        "price": 0
      }
    ],
    "defaultAC": {
      "name": "黑盾HE380",
      "price": 0,
      "temp": "最低-18℃"
    },
    "optionalAC": [],
    "addons": [
      {
        "name": "食品运输智联监控(GPS/4G/温度/驾驶分析)",
        "price": 4000
      }
    ],
    "otherFees": {
      "insurance": 11500,
      "registration": 2000
    },
    "subsidy": 35000,
    "note": ""
  }
];
