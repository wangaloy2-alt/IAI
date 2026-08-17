/**
 * 试卷数据（示例）
 * --------------------------------------------------------------------------
 * 这是资料中心的"数据库"。Claude 扩展时：
 *   1. 直接在此数组里增删对象即可新增 / 下架资料；
 *   2. 后续若接后端，把本文件换成 fetch('/api/papers') 即可，字段保持一致。
 *
 * 字段说明：
 *   id          唯一标识（字符串）
 *   title       资料标题
 *   year        年份，如 2026
 *   region      地区，如 浙江 / 湖北 / 福建 / 河南 / 全国
 *   examType    考试类型，如 月考 / 一模 / 二模 / 联考 / 首考 / 质检 / 开学考
 *   source      命题方 / 来源，如 湖北十一校、台州名校联盟、IAI 命题组
 *   paperTypes  包含的题型数组，用于"题型"筛选
 *   hasAudio    是否含听力音频
 *   hasAnswer   是否含答案
 *   hasVocab    是否含词汇整理
 *   date        发布/适用月份，如 2026-03
 *   original    是否为 IAI 原创命题（原创命题栏目据此筛选）
 *   tags        额外标签，参与搜索
 *   downloadUrl 下载地址（暂用 '#'，后续接网盘/小程序/对象存储）
 */

const PAPERS = [
  {
    id: "hubei-11school-2026-03",
    title: "武汉二中命题 · 湖北十一校 2026 届高三三月月考英语试题",
    year: 2026,
    region: "湖北",
    examType: "月考",
    source: "湖北十一校",
    paperTypes: ["听力", "阅读", "完形", "七选五", "作文"],
    hasAudio: true,
    hasAnswer: true,
    hasVocab: true,
    date: "2026-03",
    original: false,
    tags: ["武汉二中", "十一校联考", "三月月考"],
    downloadUrl: "#"
  },
  {
    id: "taizhou-mingxiao-2023-12",
    title: "24 届台州名校联盟 12 月高三年级联合模拟测试英语",
    year: 2023,
    region: "浙江",
    examType: "联考",
    source: "台州名校联盟",
    paperTypes: ["听力", "阅读", "完形", "语法", "作文"],
    hasAudio: true,
    hasAnswer: true,
    hasVocab: false,
    date: "2023-12",
    original: false,
    tags: ["台州", "名校联盟", "12月模拟"],
    downloadUrl: "#"
  },
  {
    id: "zhejiang-shoukao-2024",
    title: "浙江首考英语（2024 届）真题 + 听力音频 + 答案",
    year: 2024,
    region: "浙江",
    examType: "首考",
    source: "浙江省考试院",
    paperTypes: ["听力", "阅读", "完形", "七选五", "作文"],
    hasAudio: true,
    hasAnswer: true,
    hasVocab: true,
    date: "2024-01",
    original: false,
    tags: ["浙江首考", "1月", "真题"],
    downloadUrl: "#"
  },
  {
    id: "iai-union-2-2023",
    title: "IAI English 第二次联考（原创命题）全套试卷",
    year: 2023,
    region: "全国",
    examType: "联考",
    source: "IAI 命题组",
    paperTypes: ["听力", "阅读", "完形", "作文"],
    hasAudio: true,
    hasAnswer: true,
    hasVocab: true,
    date: "2023-05",
    original: true,
    tags: ["IAI原创", "联考", "自命题"],
    downloadUrl: "#"
  },
  {
    id: "iai-app-predict-2023",
    title: "IAI English 原创 · 2023 高考新课标 I 卷应用文预测 2 篇",
    year: 2023,
    region: "全国",
    examType: "预测",
    source: "IAI 命题组",
    paperTypes: ["作文"],
    hasAudio: false,
    hasAnswer: true,
    hasVocab: false,
    date: "2023-04",
    original: true,
    tags: ["IAI原创", "应用文", "押题", "新课标I卷"],
    downloadUrl: "#"
  },
  {
    id: "fujian-quanzhou-2026-01",
    title: "福建省泉州市 2026 届高中毕业班质量监测（一）英语试题",
    year: 2026,
    region: "福建",
    examType: "质检",
    source: "泉州教科院",
    paperTypes: ["听力", "阅读", "完形", "七选五", "作文"],
    hasAudio: true,
    hasAnswer: true,
    hasVocab: true,
    date: "2026-01",
    original: false,
    tags: ["泉州", "质量监测", "一检"],
    downloadUrl: "#"
  },
  {
    id: "zhengzhou-2nd-2026",
    title: "郑州市 2026 年高中毕业年级第二次质量预测英语试卷",
    year: 2026,
    region: "河南",
    examType: "二模",
    source: "郑州教研室",
    paperTypes: ["听力", "阅读", "完形", "七选五", "作文"],
    hasAudio: true,
    hasAnswer: true,
    hasVocab: false,
    date: "2026-04",
    original: false,
    tags: ["郑州", "二模", "质量预测"],
    downloadUrl: "#"
  },
  {
    id: "zhejiang-mingxiao-2026-term",
    title: "浙江省名校协作体 2026 届高三下学期开学考试英语试题",
    year: 2026,
    region: "浙江",
    examType: "开学考",
    source: "浙江名校协作体",
    paperTypes: ["听力", "阅读", "完形", "七选五", "作文"],
    hasAudio: true,
    hasAnswer: true,
    hasVocab: true,
    date: "2026-02",
    original: false,
    tags: ["浙江", "名校协作体", "开学考"],
    downloadUrl: "#"
  }
];

// 兼容浏览器全局与模块环境
if (typeof window !== "undefined") window.PAPERS = PAPERS;
if (typeof module !== "undefined" && module.exports) module.exports = PAPERS;
