# 婷 Ting 榴莲 — 手机版产品展示网站

偏向手机端的榴莲产品展示页，支持通过 **WhatsApp** 和 **微信** 直接下单联系。

## 本地预览

在项目文件夹中双击打开 `index.html`，或使用本地服务器：

```bash
# Python
python -m http.server 8080

# Node.js (需安装 npx)
npx serve .
```

浏览器访问 `http://localhost:8080`

## 自定义配置

编辑 `js/config.js`：

| 字段 | 说明 |
|------|------|
| `whatsappNumber` | WhatsApp 号码，国际格式不含 `+`（当前：`6580679518`） |
| `wechatId` | 微信号（当前：`W785125739`） |
| `products` | 产品列表：名称、描述、价格、图片等 |

### 产品图片

当前使用的是 `images/products/` 里的卡通榴莲图。换成实拍时：

1. 把照片放进 `images/products/`（如 `musang.jpg`）
2. 在 `config.js` 里把对应产品的 `image` 改为本地路径：

```js
image: 'images/products/musang.jpg',
```

3. GitHub Desktop **Commit + Push** 即可更新网站

## 下单流程

- **WhatsApp**：点击绿色按钮，自动打开 WhatsApp 并填入预填订单消息
- **微信**：点击绿色微信按钮，弹出微信号，一键复制后去微信添加好友下单

## 文件结构

```
├── index.html      # 主页面
├── css/style.css   # 样式
├── js/
│   ├── config.js   # 配置（改这里）
│   └── main.js     # 交互逻辑
└── images/         # 产品图片（自行添加）
```

## 部署

将整个文件夹上传到任意静态托管服务即可，例如：

- GitHub Pages
- Netlify / Vercel
- 云服务器 Nginx

无需后端，纯静态 HTML/CSS/JS。

## 当前已录入产品

- 云顶高山猫山王 AAA（3盒 $99 / 5盒 $158）
- 彭亨老树40年黑金猫山王（5盒 $99 / 10盒 $178）
- 柔佛红虾（5盒 $88 / 10盒 $138）
- 黑刺（5盒 $89 / 10盒 $148）
- 金凤（5盒 $99 / 10盒 $178）
- 今日特别套餐：芋泥/巧克力蛋糕 + 榴莲一起送货（$49）
