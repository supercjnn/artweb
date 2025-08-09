import type { ArtPeriod, Artist, Artwork } from '../types';

export const artPeriods: ArtPeriod[] = [
  {
    id: "ancient",
    name: "古典艺术",
    period: "公元前8世纪 - 公元5世纪",
    startYear: -800,
    endYear: 500,
    description: "古希腊和古罗马艺术时期，建立了西方艺术的基础美学原则。希腊艺术追求理想化的人体比例和完美的形式，而罗马艺术则更注重写实和纪念性。",
    characteristics: ["理想化比例", "大理石雕塑", "神话题材", "建筑柱式"],
    image: "/api/placeholder/400/300"
  },
  {
    id: "medieval",
    name: "中世纪艺术",
    period: "5-14世纪",
    startYear: 500,
    endYear: 1400,
    description: "以宗教艺术为主导，包括拜占庭艺术、罗马式艺术和哥特式艺术。艺术服务于宗教教育和精神启发。",
    characteristics: ["宗教题材", "彩色玻璃", "手抄本插画", "教堂建筑"],
    image: "/api/placeholder/400/300"
  },
  {
    id: "renaissance",
    name: "文艺复兴",
    period: "14-17世纪",
    startYear: 1400,
    endYear: 1700,
    description: "人文主义复兴时期，艺术家重新发现古典艺术的美，发展了透视法、解剖学和写实主义技巧。",
    characteristics: ["透视法", "人文主义", "肖像画", "科学精神"],
    image: "/api/placeholder/400/300"
  },
  {
    id: "baroque",
    name: "巴洛克",
    period: "17-18世纪",
    startYear: 1600,
    endYear: 1750,
    description: "反宗教改革的艺术运动，强调戏剧性、情感表达和动态构图。光影对比强烈，装饰繁复。",
    characteristics: ["戏剧性光影", "动态构图", "情感丰富", "装饰华丽"],
    image: "/api/placeholder/400/300"
  },
  {
    id: "neoclassicism",
    name: "新古典主义",
    period: "18-19世纪",
    startYear: 1750,
    endYear: 1850,
    description: "回归古典艺术的理想，强调理性、秩序和道德教化。线条清晰，色彩节制，构图稳定。",
    characteristics: ["理性秩序", "历史题材", "清晰轮廓", "道德教化"],
    image: "/api/placeholder/400/300"
  },
  {
    id: "romanticism",
    name: "浪漫主义",
    period: "18-19世纪",
    startYear: 1800,
    endYear: 1850,
    description: "强调情感、想象力和个人表达。反对新古典主义的理性约束，追求激情和自由。",
    characteristics: ["情感表达", "自然主义", "异国情调", "个人主义"],
    image: "/api/placeholder/400/300"
  },
  {
    id: "impressionism",
    name: "印象派",
    period: "19世纪后期",
    startYear: 1860,
    endYear: 1900,
    description: "革命性的绘画运动，注重捕捉光线和色彩的瞬间变化。户外写生，打破了传统的学院派技法。",
    characteristics: ["光线变化", "户外写生", "色彩分解", "瞬间印象"],
    image: "/api/placeholder/400/300"
  },
  {
    id: "modern",
    name: "现代艺术",
    period: "20世纪",
    startYear: 1900,
    endYear: 2000,
    description: "包括立体主义、表现主义、超现实主义等多种流派。打破传统表现形式，探索艺术的本质。",
    characteristics: ["抽象表现", "形式创新", "概念先行", "多元流派"],
    image: "/api/placeholder/400/300"
  }
];

export const artists: Artist[] = [
  {
    id: "leonardo",
    name: "列奥纳多·达·芬奇",
    period: "文艺复兴盛期",
    nationality: "意大利",
    lifespan: "1452-1519",
    birthYear: 1452,
    deathYear: 1519,
    description: "文艺复兴时期最伟大的天才之一，集艺术家、发明家、科学家于一身。他的作品体现了文艺复兴时期人文主义的理想。",
    styles: ["写实主义", "sfumato技法", "解剖学研究"],
    masterworks: ["蒙娜丽莎", "最后的晚餐", "维特鲁威人", "岩间圣母"],
    portrait: "/api/placeholder/400/300"
  },
  {
    id: "michelangelo",
    name: "米开朗基罗·博纳罗蒂",
    period: "文艺复兴盛期",
    nationality: "意大利",
    lifespan: "1475-1564",
    birthYear: 1475,
    deathYear: 1564,
    description: "雕塑家、画家、建筑师和诗人。以其对人体结构的深刻理解和纪念碑式的艺术风格而闻名。",
    styles: ["雕塑", "壁画", "建筑设计"],
    masterworks: ["大卫", "西斯廷教堂天顶画", "圣母哀子", "摩西"],
    portrait: "/api/placeholder/400/300"
  },
  {
    id: "van-gogh",
    name: "文森特·梵高",
    period: "后印象派",
    nationality: "荷兰",
    lifespan: "1853-1890",
    birthYear: 1853,
    deathYear: 1890,
    description: "后印象派的代表画家，以其强烈的情感表达和独特的绘画风格影响了20世纪的艺术发展。",
    styles: ["表现主义", "厚涂法", "动态笔触"],
    masterworks: ["星夜", "向日葵", "自画像", "阿尔勒的卧室"],
    portrait: "/api/placeholder/400/300"
  },
  {
    id: "picasso",
    name: "巴勃罗·毕加索",
    period: "现代艺术",
    nationality: "西班牙",
    lifespan: "1881-1973",
    birthYear: 1881,
    deathYear: 1973,
    description: "20世纪最具影响力的艺术家之一，立体主义的创始人，艺术风格经历了多个重要变革期。",
    styles: ["立体主义", "蓝色时期", "粉红色时期"],
    masterworks: ["阿维尼翁的少女", "格尔尼卡", "三个乐师", "哭泣的女人"],
    portrait: "/api/placeholder/400/300"
  },
  {
    id: "monet",
    name: "克洛德·莫奈",
    period: "印象派",
    nationality: "法国",
    lifespan: "1840-1926",
    birthYear: 1840,
    deathYear: 1926,
    description: "印象派的创始人之一，致力于捕捉光线和大气的变化，开创了现代艺术的新纪元。",
    styles: ["印象派", "光线研究", "色彩分析"],
    masterworks: ["印象·日出", "睡莲", "鲁昂大教堂", "干草垛"],
    portrait: "/api/placeholder/400/300"
  },
  {
    id: "raphael",
    name: "拉斐尔·桑齐奥",
    period: "文艺复兴盛期",
    nationality: "意大利",
    lifespan: "1483-1520",
    birthYear: 1483,
    deathYear: 1520,
    description: "文艺复兴三杰之一，以其和谐优美的绘画风格和圣母像而闻名，代表了文艺复兴艺术的理想美。",
    styles: ["古典主义", "和谐构图", "理想美"],
    masterworks: ["雅典学院", "西斯廷圣母", "美丽的园丁", "教皇利奥十世像"],
    portrait: "/api/placeholder/400/300"
  }
];

export const artworks: Artwork[] = [
  {
    id: "mona-lisa",
    title: "蒙娜丽莎",
    artist: "列奥纳多·达·芬奇",
    artistId: "leonardo",
    year: "1503-1519",
    medium: "木板油画",
    description: "世界上最著名的肖像画，以神秘的微笑和精湛的sfumato技法而闻名。",
    image: "/api/placeholder/400/300",
    dimensions: "77 × 53 cm",
    location: "卢浮宫博物馆，巴黎",
    periodId: "renaissance"
  },
  {
    id: "starry-night",
    title: "星夜",
    artist: "文森特·梵高",
    artistId: "van-gogh",
    year: "1889",
    medium: "布面油画",
    description: "梵高在圣雷米疗养院创作的代表作，展现了艺术家内心的激情和对宇宙的感知。",
    image: "/api/placeholder/400/300",
    dimensions: "73.7 × 92.1 cm",
    location: "现代艺术博物馆，纽约",
    periodId: "impressionism"
  },
  {
    id: "guernica",
    title: "格尔尼卡",
    artist: "巴勃罗·毕加索",
    artistId: "picasso",
    year: "1937",
    medium: "布面油画",
    description: "立体主义风格的反战杰作，表现了战争的残酷和人类的痛苦。",
    image: "/api/placeholder/400/300",
    dimensions: "349 × 776 cm",
    location: "索菲亚王后国家艺术中心博物馆，马德里",
    periodId: "modern"
  },
  {
    id: "david",
    title: "大卫",
    artist: "米开朗基罗",
    artistId: "michelangelo",
    year: "1501-1504",
    medium: "大理石雕塑",
    description: "文艺复兴时期雕塑艺术的巅峰之作，展现了理想化的男性人体美。",
    image: "/api/placeholder/400/300",
    dimensions: "高度: 517 cm",
    location: "学院美术馆，佛罗伦萨",
    periodId: "renaissance"
  },
  {
    id: "impression-sunrise",
    title: "印象·日出",
    artist: "克洛德·莫奈",
    artistId: "monet",
    year: "1872",
    medium: "布面油画",
    description: "印象派运动的开山之作，为印象派命名的重要作品。",
    image: "/api/placeholder/400/300",
    dimensions: "48 × 63 cm",
    location: "马蒙坦美术馆，巴黎",
    periodId: "impressionism"
  },
  {
    id: "school-of-athens",
    title: "雅典学院",
    artist: "拉斐尔",
    artistId: "raphael",
    year: "1509-1511",
    medium: "壁画",
    description: "文艺复兴时期最重要的壁画之一，展现了古希腊哲学家的聚会场景。",
    image: "/api/placeholder/400/300",
    dimensions: "500 × 770 cm",
    location: "梵蒂冈博物馆，梵蒂冈城",
    periodId: "renaissance"
  }
];