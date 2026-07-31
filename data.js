// 冷藏车产品数据库
// 自动发布

const PRODUCT_DATA = [
  {
    "id": "jmc-eluda-100",
    "brand": "江铃",
    "name": "江铃E路达纯电4.2米冷藏车 (100度)",
    "image": "images/jmc-eluda.jpg",
    "powerType": "纯电",
    "basePrice": 150000,
    "sellingPrice": 150000,
    "specs": {
      "底盘": "江铃E路达宽体气刹二类底盘",
      "电池": "宁德时代100.46kWh",
      "电机": "博世167kW(227马力)",
      "制动": "气刹(断气刹)",
      "变速箱": "自动挡",
      "驾驶室": "单排、电动窗、中控锁",
      "质保": "8年/50万km"
    },
    "boxes": [
      {
        "name": "原厂厢体",
        "desc": "玻璃钢外壁+热塑板内壁",
        "price": 33000
      },
      {
        "name": "CIMC中集K2",
        "desc": "高光铝板外壁+VR热塑板内壁，美式全满焊铝地台",
        "price": 38000
      },
      {
        "name": "CIMC中集K2 不锈钢地板",
        "desc": "K2厢体+全满焊不锈钢地板，304不锈钢防滑",
        "price": 42000
      }
    ],
    "defaultAC": {
      "name": "华盛EV600 分体机",
      "price": 0,
      "fullPrice": 16000,
      "temp": "最低-20℃"
    },
    "optionalAC": [
      {
        "name": "华盛EV600MB 一体机",
        "price": 3000,
        "fullPrice": 19000,
        "temp": "最低-22℃"
      },
      {
        "name": "开利PULSOR eCool P6",
        "price": 9000,
        "fullPrice": 25000,
        "temp": "最低-25℃"
      },
      {
        "name": "黑盾HE600F 一体机",
        "price": 9000,
        "fullPrice": 25000,
        "temp": "最低-22℃"
      },
      {
        "name": "松芝EX580",
        "price": 2000,
        "fullPrice": 18000,
        "temp": "最低-22℃"
      },
      {
        "name": "黑盾460Y",
        "price": -1000,
        "fullPrice": 15000,
        "temp": "最低-20℃"
      },
      {
        "name": "华盛EV400 分体机",
        "price": -6000,
        "fullPrice": 10000,
        "temp": "最低-18℃"
      },
      {
        "name": "华盛EV300 分体机",
        "price": -6500,
        "fullPrice": 9500,
        "temp": "最低-15℃"
      },
      {
        "name": "黑盾380Y",
        "price": -7000,
        "fullPrice": 9000,
        "temp": "最低-18℃"
      }
    ],
    "addons": [
      {
        "name": "铝合金尾板 1.5T（畅友力）",
        "price": 8500
      },
      {
        "name": "GPS/4G温度监控",
        "price": 4000
      },
      {
        "name": "铝花纹裙边",
        "price": 1500
      },
      {
        "name": "不锈钢裙边",
        "price": 2000
      },
      {
        "name": "隔温板",
        "price": 1000
      }
    ],
    "otherFees": {
      "insurance": 12000,
      "registration": 2000
    },
    "subsidy": 35000,
    "note": "底盘价15万 + 厢体3.3~4.2万 + 冷机选配，全部为销售价"
  },
  {
    "id": "jmc-eluda-140",
    "brand": "江铃",
    "name": "江铃E路达纯电4.2米冷藏车 (140度)",
    "image": "images/jmc-eluda-wide.jpg",
    "powerType": "纯电",
    "basePrice": 171000,
    "sellingPrice": 171000,
    "specs": {
      "底盘": "江铃E路达宽体气刹水冷二类底盘",
      "电池": "宁德时代140.41kWh",
      "电机": "博世167kW(227马力)",
      "制动": "气刹(断气刹)",
      "变速箱": "自动挡",
      "驾驶室": "宽体、气囊座椅、ADAS包",
      "质保": "8年/50万km"
    },
    "boxes": [
      {
        "name": "原厂厢体",
        "desc": "玻璃钢外壁+热塑板内壁",
        "price": 33000
      },
      {
        "name": "CIMC中集K2",
        "desc": "高光铝板外壁+VR热塑板内壁，美式全满焊铝地台",
        "price": 38000
      },
      {
        "name": "CIMC中集K2 不锈钢地板",
        "desc": "K2厢体+全满焊不锈钢地板，304不锈钢防滑",
        "price": 42000
      }
    ],
    "defaultAC": {
      "name": "华盛EV600 分体机",
      "price": 0,
      "fullPrice": 16000,
      "temp": "最低-20℃"
    },
    "optionalAC": [
      {
        "name": "华盛EV600MB 一体机",
        "price": 3000,
        "fullPrice": 19000,
        "temp": "最低-22℃"
      },
      {
        "name": "开利PULSOR eCool P6",
        "price": 9000,
        "fullPrice": 25000,
        "temp": "最低-25℃"
      },
      {
        "name": "黑盾HE600F 一体机",
        "price": 9000,
        "fullPrice": 25000,
        "temp": "最低-22℃"
      },
      {
        "name": "松芝EX580",
        "price": 2000,
        "fullPrice": 18000,
        "temp": "最低-22℃"
      },
      {
        "name": "黑盾460Y",
        "price": -1000,
        "fullPrice": 15000,
        "temp": "最低-20℃"
      },
      {
        "name": "华盛EV400 分体机",
        "price": -6000,
        "fullPrice": 10000,
        "temp": "最低-18℃"
      },
      {
        "name": "华盛EV300 分体机",
        "price": -6500,
        "fullPrice": 9500,
        "temp": "最低-15℃"
      },
      {
        "name": "黑盾380Y",
        "price": -7000,
        "fullPrice": 9000,
        "temp": "最低-18℃"
      }
    ],
    "addons": [
      {
        "name": "铝合金尾板 1.5T（畅友力）",
        "price": 8500
      },
      {
        "name": "GPS/4G温度监控",
        "price": 4000
      },
      {
        "name": "铝花纹裙边",
        "price": 1500
      },
      {
        "name": "不锈钢裙边",
        "price": 2000
      },
      {
        "name": "隔温板",
        "price": 1000
      }
    ],
    "otherFees": {
      "insurance": 13000,
      "registration": 2000
    },
    "subsidy": 35000,
    "note": "底盘价17.1万 + 厢体3.3~4.2万 + 冷机选配，全部为销售价"
  },
  {
    "id": "aoling-63",
    "brand": "福田奥铃",
    "name": "奥铃智蓝M卡纯电3.8米冷藏车 (63度)",
    "image": "",
    "powerType": "纯电",
    "basePrice": 102000,
    "sellingPrice": 102000,
    "specs": {
      "底盘": "奥铃智蓝M卡二类底盘",
      "电池": "宁德时代63.75kWh",
      "电机": "100kW",
      "轴距": "3300mm",
      "制动": "液压制动",
      "变速箱": "自动挡",
      "质保": "8年/40万km"
    },
    "boxes": [
      {
        "name": "原厂厢体",
        "desc": "玻璃钢外壁+热塑板内壁",
        "price": 28000
      },
      {
        "name": "CIMC中集M",
        "desc": "外壁玻璃钢+内壁热塑板，卡槽式厢板，304不锈钢门框",
        "price": 32000
      }
    ],
    "defaultAC": {
      "name": "华盛EV300 分体机",
      "price": 0,
      "fullPrice": 9500,
      "temp": "最低-15℃"
    },
    "optionalAC": [
      {
        "name": "华盛EV400 分体机",
        "price": 500,
        "fullPrice": 10000,
        "temp": "最低-18℃"
      },
      {
        "name": "黑盾460Y",
        "price": 5500,
        "fullPrice": 15000,
        "temp": "最低-20℃"
      },
      {
        "name": "黑盾380Y",
        "price": -500,
        "fullPrice": 9000,
        "temp": "最低-18℃"
      }
    ],
    "addons": [
      {
        "name": "铝合金尾板 1.5T（畅友力）",
        "price": 8500
      },
      {
        "name": "GPS/4G温度监控",
        "price": 4000
      },
      {
        "name": "隔温板",
        "price": 1000
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
    "id": "aoling-100",
    "brand": "福田奥铃",
    "name": "奥铃智蓝纯电4.2米冷藏车 (100度)",
    "image": "images/foton-42-100.jpg",
    "powerType": "纯电",
    "basePrice": 162000,
    "sellingPrice": 162000,
    "specs": {
      "底盘": "奥铃100.46度多片簧二类底盘",
      "电池": "宁德时代100.46kWh",
      "电机": "167kW",
      "制动": "前盘后楔式制动",
      "变速箱": "自动挡",
      "驾驶室": "气囊座椅、铝合金储气筒",
      "质保": "8年/50万km"
    },
    "boxes": [
      {
        "name": "原厂厢体",
        "desc": "玻璃钢外壁+热塑板内壁",
        "price": 33000
      },
      {
        "name": "CIMC中集K2",
        "desc": "高光铝板外壁+VR热塑板内壁，美式全满焊铝地台",
        "price": 38000
      },
      {
        "name": "CIMC中集K2 不锈钢地板",
        "desc": "K2厢体+全满焊不锈钢地板，304不锈钢防滑",
        "price": 42000
      }
    ],
    "defaultAC": {
      "name": "华盛EV600 分体机",
      "price": 0,
      "fullPrice": 16000,
      "temp": "最低-20℃"
    },
    "optionalAC": [
      {
        "name": "华盛EV600MB 一体机",
        "price": 3000,
        "fullPrice": 19000,
        "temp": "最低-22℃"
      },
      {
        "name": "开利PULSOR eCool P6",
        "price": 9000,
        "fullPrice": 25000,
        "temp": "最低-25℃"
      },
      {
        "name": "黑盾HE600F 一体机",
        "price": 9000,
        "fullPrice": 25000,
        "temp": "最低-22℃"
      },
      {
        "name": "松芝EX580",
        "price": 2000,
        "fullPrice": 18000,
        "temp": "最低-22℃"
      },
      {
        "name": "黑盾460Y",
        "price": -1000,
        "fullPrice": 15000,
        "temp": "最低-20℃"
      },
      {
        "name": "华盛EV400 分体机",
        "price": -6000,
        "fullPrice": 10000,
        "temp": "最低-18℃"
      },
      {
        "name": "华盛EV300 分体机",
        "price": -6500,
        "fullPrice": 9500,
        "temp": "最低-15℃"
      },
      {
        "name": "黑盾380Y",
        "price": -7000,
        "fullPrice": 9000,
        "temp": "最低-18℃"
      }
    ],
    "addons": [
      {
        "name": "铝合金尾板 1.5T（畅友力）",
        "price": 8500
      },
      {
        "name": "GPS/4G温度监控",
        "price": 4000
      },
      {
        "name": "铝花纹裙边",
        "price": 1500
      },
      {
        "name": "不锈钢裙边",
        "price": 2000
      },
      {
        "name": "隔温板",
        "price": 1000
      }
    ],
    "otherFees": {
      "insurance": 12000,
      "registration": 2000
    },
    "subsidy": 35000,
    "note": "底盘价16.2万 + 厢体3.3~4.2万 + 冷机选配，全部为销售价"
  },
  {
    "id": "xiangling-q-ev",
    "brand": "福田祥菱",
    "name": "祥菱Q新能源纯电3.2米冷藏车",
    "image": "",
    "powerType": "纯电",
    "basePrice": 85000,
    "sellingPrice": 85000,
    "specs": {
      "底盘": "祥菱Q新能源底盘+厢体",
      "电池": "宁德时代41.86kWh",
      "货箱": "3050×1630×1670mm",
      "外尺寸": "5365×1835×2675mm",
      "制动": "AEBS",
      "质保": "8年/40万km"
    },
    "boxes": [
      {
        "name": "原厂厢体",
        "desc": "玻璃钢外壁+热塑板内壁，含底盘",
        "price": 0
      }
    ],
    "defaultAC": {
      "name": "黑盾380Y",
      "price": 0,
      "fullPrice": 9000,
      "temp": "最低-18℃"
    },
    "optionalAC": [
      {
        "name": "华盛EV300 分体机",
        "price": 500,
        "fullPrice": 9500,
        "temp": "最低-15℃"
      },
      {
        "name": "松芝SE380 新能源",
        "price": 5500,
        "fullPrice": 14500,
        "temp": "最低-20℃"
      },
      {
        "name": "黑盾460Y",
        "price": 6000,
        "fullPrice": 15000,
        "temp": "最低-20℃"
      }
    ],
    "addons": [
      {
        "name": "GPS/4G温度监控",
        "price": 4000
      },
      {
        "name": "隔温板",
        "price": 1000
      }
    ],
    "otherFees": {
      "insurance": 10000,
      "registration": 2000
    },
    "subsidy": 35000,
    "note": "底盘+厢体整车价，不含冷机"
  },
  {
    "id": "xiangling-m1",
    "brand": "福田祥菱",
    "name": "祥菱M1汽油3.2米冷藏车",
    "image": "",
    "powerType": "燃油",
    "basePrice": 65000,
    "sellingPrice": 65000,
    "specs": {
      "底盘": "祥菱M1底盘+厢体",
      "发动机": "DAM16KL 1.6L 122马力",
      "货箱": "3120×1620×1560mm",
      "外尺寸": "5070×1780×2490mm",
      "变速箱": "手动挡",
      "配置": "空调、倒车影像、中控、电动窗"
    },
    "boxes": [
      {
        "name": "原厂厢体",
        "desc": "玻璃钢外壁+热塑板内壁，含底盘",
        "price": 0
      }
    ],
    "defaultAC": {
      "name": "松芝X1 制冷机组",
      "price": 0,
      "fullPrice": 8500,
      "temp": "最低-15℃"
    },
    "optionalAC": [
      {
        "name": "松芝X3 制冷机组",
        "price": 500,
        "fullPrice": 9000,
        "temp": "最低-15℃"
      }
    ],
    "addons": [
      {
        "name": "GPS/4G温度监控",
        "price": 4000
      },
      {
        "name": "隔温板",
        "price": 1000
      }
    ],
    "otherFees": {
      "insurance": 9000,
      "registration": 2000
    },
    "subsidy": 0,
    "note": "汽油冷藏车，不含国家新能源补贴"
  },
  {
    "id": "aoling-qingchun",
    "brand": "福田奥铃",
    "name": "奥铃青春版燃油4.2米冷藏车",
    "image": "",
    "powerType": "燃油",
    "basePrice": 80000,
    "sellingPrice": 80000,
    "specs": {
      "底盘": "奥铃青春版 6T 二类底盘",
      "发动机": "YN25AL 2.5L",
      "轴距": "3360mm",
      "变速箱": "手动挡",
      "制动": "气刹",
      "载重": "6T"
    },
    "boxes": [
      {
        "name": "原厂厢体",
        "desc": "玻璃钢外壁+热塑板内壁",
        "price": 33000
      },
      {
        "name": "CIMC中集K2",
        "desc": "高光铝板外壁+VR热塑板内壁，美式全满焊铝地台",
        "price": 38000
      },
      {
        "name": "CIMC中集K2 不锈钢地板",
        "desc": "K2厢体+全满焊不锈钢地板，304不锈钢防滑",
        "price": 42000
      }
    ],
    "defaultAC": {
      "name": "松芝X5-S 制冷机组",
      "price": 0,
      "fullPrice": 13000,
      "temp": "最低-18℃"
    },
    "optionalAC": [
      {
        "name": "松芝EX580",
        "price": 5000,
        "fullPrice": 18000,
        "temp": "最低-22℃"
      },
      {
        "name": "松芝X3 制冷机组",
        "price": -4000,
        "fullPrice": 9000,
        "temp": "最低-15℃"
      }
    ],
    "addons": [
      {
        "name": "铝合金尾板 1.5T（畅友力）",
        "price": 8500
      },
      {
        "name": "GPS/4G温度监控",
        "price": 4000
      },
      {
        "name": "铝花纹裙边",
        "price": 1500
      },
      {
        "name": "不锈钢裙边",
        "price": 2000
      },
      {
        "name": "隔温板",
        "price": 1000
      }
    ],
    "otherFees": {
      "insurance": 10000,
      "registration": 2500
    },
    "subsidy": 0,
    "note": "燃油车，不含国家新能源补贴"
  },
  {
    "id": "aoling-vka",
    "brand": "福田奥铃",
    "name": "奥铃V卡燃油3.8米冷藏车",
    "image": "",
    "powerType": "燃油",
    "basePrice": 75000,
    "sellingPrice": 75000,
    "specs": {
      "底盘": "奥铃V卡 二类底盘",
      "发动机": "Q23A 2.3L",
      "轴距": "2900mm",
      "变速箱": "手动挡",
      "货箱": "3.8米"
    },
    "boxes": [
      {
        "name": "原厂厢体",
        "desc": "玻璃钢外壁+热塑板内壁",
        "price": 26000
      },
      {
        "name": "CIMC中集M",
        "desc": "外壁玻璃钢+内壁热塑板，卡槽式厢板",
        "price": 30000
      }
    ],
    "defaultAC": {
      "name": "松芝X3 制冷机组",
      "price": 0,
      "fullPrice": 9000,
      "temp": "最低-15℃"
    },
    "optionalAC": [
      {
        "name": "松芝X5-S 制冷机组",
        "price": 4000,
        "fullPrice": 13000,
        "temp": "最低-18℃"
      },
      {
        "name": "松芝X1 制冷机组",
        "price": -500,
        "fullPrice": 8500,
        "temp": "最低-15℃"
      }
    ],
    "addons": [
      {
        "name": "GPS/4G温度监控",
        "price": 4000
      },
      {
        "name": "隔温板",
        "price": 1000
      }
    ],
    "otherFees": {
      "insurance": 9000,
      "registration": 2000
    },
    "subsidy": 0,
    "note": "燃油车，不含国家新能源补贴"
  }
];
