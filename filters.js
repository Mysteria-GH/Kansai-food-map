/**
 * filter.js
 * 包含所有美食地圖的篩選標準與分類定義
 */

// --- 基礎分類定義 ---
export const FOOD_TYPES = [
    { id: 'ramen', label: '拉麵' },
    { id: 'sukiyaki', label: '壽喜燒' },
    { id: 'yakiniku', label: '燒肉' },
    { id: 'sushi', label: '壽司' },
    { id: 'ricebowl', label: '丼飯' },
    { id: 'curry', label: '咖哩' }, 
    { id: 'eel', label: '鰻魚' },
    { id: 'cafe', label: '咖啡廳' },
    { id: 'other', label: '其它' }
];

// --- 特徵篩選定義 ---
export const SPECIAL_TYPES = [
    { id: 'wagyu', label: '和牛' },
    { id: 'beef_tongue', label: '牛舌' },
    { id: 'all_you_can_eat', label: '吃到飽' },
    { id: 'hamburger', label: '漢堡排' }, 
    { id: 'izakaya', label: '居酒屋' },
    { id: 'lunch', label: '午間套餐' },
    { id: 'kissaten', label: '喫茶' }
];

// --- 篩選邏輯函式 ---

// 檢查是否為吃到飽
export const checkIsAllYouCanEat = (shop) => {
    const text = (shop.name || '') + (shop.displayName || '');
    const keywords = ['吃到飽', '食べ放題', '放題'];
    return keywords.some(k => text.includes(k));
};

// 檢查是否為和牛 (包含牛舌)
export const checkIsWagyu = (shop) => {
    const text = (shop.name || '') + (shop.displayName || '');
    const keywords = ['和牛', 'Wagyu', '神戶牛', '神戸牛', '但馬牛', '近江牛', '宮崎牛', '仙台牛', '黒毛', '黑毛', '牛舌'];
    return keywords.some(k => text.includes(k));
};

// 檢查是否為牛舌
export const checkIsBeefTongue = (shop) => {
    const text = (shop.name || '') + (shop.displayName || '');
    const keywords = ['牛舌', '牛タン', 'タン'];
    return keywords.some(k => text.includes(k));
};

// 檢查是否為漢堡排
export const checkIsHamburger = (shop) => {
    if (shop.type && shop.type.includes('hamburger')) return true;
    const text = (shop.name || '') + (shop.displayName || '');
    const keywords = ['漢堡排', 'ハンバーグ', 'Hamburg'];
    return keywords.some(k => text.includes(k));
};

// 檢查是否為居酒屋
export const checkIsIzakaya = (shop) => {
    if (shop.type && shop.type.includes('izakaya')) return true;
    const text = (shop.name || '') + (shop.displayName || '');
    const keywords = ['居酒屋', '串燒', '焼き鳥', 'おでん', '串', '酒場', 'Izakaya', 'Yakitori'];
    return keywords.some(k => text.includes(k));
};

// 檢查是否為午間套餐 (不分大小寫)
export const checkIsLunch = (shop) => {
    const text = (shop.name || '') + (shop.displayName || '');
    const keywords = ['午間', 'lunch', 'ランチ', '午餐'];
    return keywords.some(k => text.toLowerCase().includes(k));
};

// 檢查是否為喫茶 (不分大小寫)
export const checkIsKissaten = (shop) => {
    const text = (shop.name || '') + (shop.displayName || '');
    const keywords = ['喫茶', 'afternoon tea', '甜點', 'dessert', 'tea', 'cafe', 'coffee'];
    return keywords.some(k => text.toLowerCase().includes(k));
};
