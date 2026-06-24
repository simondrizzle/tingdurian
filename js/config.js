/**
 * ============================================
 * 婷 Ting — 网站配置
 * ============================================
 */

const SITE_CONFIG = {
  whatsappNumber: '6580679518',
  wechatId: 'W785125739',

  products: [
    {
      id: 1,
      image: 'images/products/musang-king.webp',
      prices: [
        { label: { zh: '3 盒', en: '3 boxes' }, price: '$99' },
        { label: { zh: '5 盒', en: '5 boxes' }, price: '$158' },
      ],
      zh: {
        name: '云顶猫山王榴莲果肉 400g',
        subtitle: 'GENTING HIGHLAND Musang King',
        weight: '400g / 盒 · 云顶猫',
        badge: 'AAA',
      },
      en: {
        name: 'Genting Highland Musang King',
        subtitle: 'Premium Musang King from Genting Highlands',
        weight: '400g / box · Genting',
        badge: 'AAA',
      },
    },
    {
      id: 2,
      image: 'images/products/black-gold.webp',
      prices: [
        { label: { zh: '5 盒', en: '5 boxes' }, price: '$99' },
        { label: { zh: '10 盒', en: '10 boxes' }, price: '$178' },
      ],
      zh: {
        name: '黑金榴莲果肉 400g',
        subtitle: 'BLACK GOLD Durian',
        weight: '400g / 盒',
        badge: '黑金',
      },
      en: {
        name: 'Black Gold Durian',
        subtitle: 'Premium Black Gold Durian',
        weight: '400g / box',
        badge: 'BLACK GOLD',
      },
    },
    {
      id: 3,
      image: 'images/products/red-prawn.webp',
      prices: [
        { label: { zh: '5 盒', en: '5 boxes' }, price: '$88' },
        { label: { zh: '10 盒', en: '10 boxes' }, price: '$158' },
      ],
      zh: {
        name: '红虾榴莲果肉 400g',
        subtitle: 'RED PRAWN Durian',
        weight: '400g / 盒',
        badge: '红虾',
      },
      en: {
        name: 'Red Prawn Durian',
        subtitle: 'Premium Red Prawn Durian',
        weight: '400g / box',
        badge: 'RED PRAWN',
      },
    },
    {
      id: 4,
      image: 'images/products/black-thorn.webp',
      prices: [
        { label: { zh: '2 盒', en: '2 boxes' }, price: '$118' },
        { label: { zh: '4 盒', en: '4 boxes' }, price: '$218' },
      ],
      zh: {
        name: '黑刺王榴莲果肉 400g',
        subtitle: 'BLACK THORN King',
        weight: '400g / 盒',
        badge: '黑刺',
      },
      en: {
        name: 'Black Thorn King',
        subtitle: 'Premium Black Thorn Durian',
        weight: '400g / box',
        badge: 'BLACK THORN',
      },
    },
    {
      id: 5,
      image: 'images/products/golden-phoenix.webp',
      prices: [
        { label: { zh: '5 盒', en: '5 boxes' }, price: '$88' },
        { label: { zh: '10 盒', en: '10 boxes' }, price: '$158' },
      ],
      zh: {
        name: '金凤榴莲果肉 400g',
        subtitle: 'GOLDEN PHOENIX Durian',
        weight: '400g / 盒',
        badge: '金凤',
      },
      en: {
        name: 'Golden Phoenix Durian',
        subtitle: 'Premium Golden Phoenix Durian',
        weight: '400g / box',
        badge: 'GOLDEN',
      },
    },
    {
      id: 6,
      image: 'images/products/durian-cake.webp',
      prices: [
        { label: { zh: '6寸', en: '6 inch' }, price: '$68' },
        { label: { zh: '8寸', en: '8 inch' }, price: '$88' },
      ],
      zh: {
        name: '芋泥千层榴莲蛋糕',
        subtitle: 'Taro Mille Crepe Durian Cake',
        weight: '6寸 / 8寸可选',
        badge: '爆款',
      },
      en: {
        name: 'Taro Mille Crepe Durian Cake',
        subtitle: 'Taro & Durian Mille Crepe',
        weight: '6 / 8 inch',
        badge: 'HOT',
      },
    },
  ],
}  
const products = SITE_CONFIG.products; // 加这行
