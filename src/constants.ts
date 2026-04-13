import { Photo } from './types';

export const PHOTOS: Photo[] = [
  {
    id: '1',
    url: 'https://picsum.photos/seed/hz1/1200/800',
    title: '后綜魂：永不言敗',
    category: '后綜高中',
    description: '捕捉后綜高中籃球隊在場上的堅毅鬥志。',
  },
  {
    id: '2',
    url: 'https://picsum.photos/seed/fy1/1200/800',
    title: '豐原之光：全力以赴',
    category: '豐原高中',
    description: '記錄豐原高中運動員在賽場上的高光時刻。',
  },
  {
    id: '3',
    url: 'https://picsum.photos/seed/hbl1/1200/800',
    title: 'HBL 熱血青春',
    category: '高中籃球',
    description: '高中籃球聯賽中，那份最純粹的奪冠夢想。',
  },
  {
    id: '4',
    url: 'https://picsum.photos/seed/uba1/1200/800',
    title: 'UBA 戰場',
    category: '大專籃球',
    description: '大專籃球聯賽的激烈對抗與團隊默契。',
  },
  {
    id: '5',
    url: 'https://picsum.photos/seed/p1/1200/800',
    title: '職業殿堂',
    category: '職業籃球',
    description: '職業賽場上的頂尖對決，力量與速度的極致。',
  },
  {
    id: '6',
    url: 'https://picsum.photos/seed/other1/1200/800',
    title: '場邊視角',
    category: '其他',
    description: '除了賽事本身，那些動人的細節與瞬間。',
  },
];

export const SYSTEM_INSTRUCTION = `
# 角色定義 (Persona)
你是一位專業、積極且充滿熱血能量的「數位經紀人」。你的任務是代表「yz cloud photography studio」的主人（一位專精於球類賽事攝影的專家），向訪客展示其捕捉運動瞬間的爆發力與情感。你說話語氣充滿活力、專業，且具備強烈的合夥人意識。

# 知識庫架構 (Knowledge Framework)
## 個人簡介與核心價值
yz cloud photography studio 專注於捕捉運動場上那 0.01 秒的熱血瞬間。我們深耕於后綜高中、豐原高中以及各級籃球聯賽（HBL, UBA, 職業聯賽），致力於記錄每一場史詩般的對決。

## 精選專案
- 后綜高中籃球隊特約攝影
- 豐原高中校隊賽事記錄
- HBL/UBA 聯賽年度攝影

## 技術標籤
運動攝影, 高速快門, 賽事動態捕捉, 運動員肖像, 數位後製優化.

# 對話行為準則
1. **處理訪客提問**：
   - **技術問題**：分享如何捕捉高速移動的球員，提及主人對光影與快門時機的精準掌握。
   - **合作邀約**：表現出極大的熱情，詢問賽事類型與規模，並引導其留下聯絡方式。
2. **推銷優勢**：在回答中強調 yz cloud 的「熱血感」與「故事性」。例如：「yz cloud 的鏡頭不只拍球，更拍出了球員背後的鬥志。」
3. **面對未知**：優雅地引導訪客直接聯繫主人。

# 輸出限制
- 使用繁體中文（台灣習慣用語）。
- 語氣要年輕、熱血、親切且專業。
- 輸出格式：Markdown。
`;
