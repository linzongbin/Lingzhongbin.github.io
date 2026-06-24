# 個人網站 - Personal Portfolio Website

一個專業的個人網站模板，展示了資訊管理專業人士的完整個人檔案。

## 📋 功能特性

### 完整的頁面結構
- **首頁 (index.html)** - 自我介紹和快速統計
- **教育背景 (education.html)** - 學歷、課程和學術成就
- **經驗實習 (experience.html)** - 工作經驗、實習和志願活動
- **專業技能 (skills.html)** - 程式語言、框架和專業領域
- **專案作品 (projects.html)** - 完整的專案展示和開源貢獻
- **文章 (articles.html)** - 技術文章和個人見解
- **獲獎榮譽 (awards.html)** - 學術獎項、競賽獎項和認證
- **活動照片 (photos.html)** - 校園、競賽、工作和生活照片

### 現代化設計
- 響應式設計，支持桌面、平板和移動設備
- 流暢的動畫和過渡效果
- 現代的配色方案和排版
- 優化的用戶界面和交互體驗

### 技術特性
- 純 HTML5、CSS3 和 Vanilla JavaScript
- 無外部框架依賴（無 Bootstrap、無 jQuery）
- 快速加載和優化性能
- 易於自定義和擴展

## 🚀 快速開始

### 1. 文件結構
```
personal-website/
├── index.html              # 首頁
├── education.html          # 教育背景
├── experience.html         # 經驗實習
├── skills.html             # 專業技能
├── projects.html           # 專案作品
├── articles.html           # 文章
├── awards.html             # 獲獎榮譽
├── photos.html             # 活動照片
├── styles.css              # 全局樣式
├── script.js               # JavaScript 功能
└── assets/
    └── images/             # 圖片文件夾
        ├── profile.jpg     # 個人照片
        ├── campus-*.jpg    # 校園活動照片
        ├── work-*.jpg      # 工作相關照片
        └── ...
```

### 2. 使用本地開發服務器

使用 Python：
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

然後打開瀏覽器訪問：`http://localhost:8000`

或使用其他工具：
```bash
# Node.js - http-server
npx http-server

# 或使用 Live Server (VS Code 擴展)
```

### 3. 快速定製

在各個 HTML 文件中查找並修改以下內容：

#### 基本信息
- 搜索 `your.email@example.com` 並替換為你的郵箱
- 搜索 `XX 大學` 並替換為你的學校名稱
- 搜索 `資訊管理` 並替換為你的專業

#### 個人照片
- 將 `assets/images/profile.jpg` 替換為你的照片
- 支持 JPG、PNG、GIF 等格式
- 推薦大小：300x300 像素或以上

#### 社交媒體鏈接
在每個頁面的頁尾編輯：
```html
<a href="https://github.com/your-username" target="_blank">🐙</a>
<a href="https://linkedin.com/in/your-profile" target="_blank">💼</a>
<a href="https://twitter.com/your-handle" target="_blank">🐦</a>
<a href="https://facebook.com/your-page" target="_blank">📘</a>
```

## 🎨 自定義樣式

### 修改色彩方案

在 `styles.css` 頂部編輯 CSS 變數：
```css
:root {
  --primary-color: #2c3e50;    /* 主色調 */
  --secondary-color: #3498db;  /* 次要色 */
  --accent-color: #e74c3c;     /* 強調色 */
  --light-bg: #ecf0f1;         /* 淺色背景 */
  --dark-text: #2c3e50;        /* 深色文字 */
  --light-text: #7f8c8d;       /* 淺色文字 */
}
```

### 修改字體

編輯 CSS 中的 font-family：
```css
body {
  font-family: 'Your Font Name', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
```

### 調整布局

各主要部分的寬度控制：
```css
.container {
  max-width: 1200px;  /* 修改最大寬度 */
  padding: 0 2rem;    /* 修改內邊距 */
}
```

## 📝 內容編輯指南

### 添加新的技能
在 `skills.html` 中，複製一個 `.card` 或 `.skill-item` 並修改。

### 添加新的專案
在 `projects.html` 中，複製一個 `.project-card` 並填入信息。

### 添加新的文章
在 `articles.html` 中，複製一個 `.article-card` 並添加內容。

### 添加新照片
在 `photos.html` 中的相應部分複製 `.photo-item` 並修改。

## 🔧 高級功能

### 技能進度條動畫
技能進度條在用戶滾動到該部分時自動動畫，通過 Intersection Observer 實現。

### 計數器動畫
統計數字在用戶查看時自動計數，營造動態感。

### 照片模態框
點擊照片可以放大查看，使用原生 JavaScript 實現。

### 平滑導航
頁面之間有平滑的過渡效果，同頁內鏈接平滑滾動。

## 📱 響應式設計

- **桌面**：1200px+ 完整布局
- **平板**：768px-1199px 優化布局
- **手機**：小於 768px 移動優化

所有組件都進行了響應式設計測試。

## ♿ 無障礙性

- 語義化 HTML 標籤
- 適當的文字對比度
- 可鍵盤導航
- 圖片替代文字

## 🚀 部署

### GitHub Pages
1. 創建 GitHub 倉庫 `username.github.io`
2. 將所有文件上傳到倉庫
3. 訪問 `https://username.github.io`

### Netlify
1. 連接 GitHub 倉庫
2. 自動部署
3. 獲得自定義域名

### 傳統主機
1. 將所有文件上傳到主機
2. 確保有正確的文件權限
3. 訪問你的域名

## 📋 檢查清單

在發布前，確保完成以下事項：

- [ ] 替換所有個人信息
- [ ] 上傳個人照片到 `assets/images/`
- [ ] 更新所有社交媒體鏈接
- [ ] 檢查所有鏈接是否正常工作
- [ ] 測試在不同設備上的顯示
- [ ] 測試在不同瀏覽器中的兼容性
- [ ] 優化圖片大小以提高加載速度
- [ ] 檢查拼寫和語法

## 🆘 常見問題

### Q: 如何添加更多導航菜單項？
A: 編輯每個 HTML 文件中 `<nav>` 部分的 `<ul>` 列表。

### Q: 如何更改字體大小？
A: 編輯 `styles.css` 中的 `font-size` 屬性。

### Q: 如何添加自己的分析工具？
A: 在每個頁面的 `</body>` 前添加分析代碼，例如 Google Analytics。

### Q: 如何使照片更快加載？
A: 使用圖片壓縮工具（如 TinyPNG）減小圖片大小。

## 📄 許可證

此模板為自由使用，可自由修改和分發。

## 🤝 貢獻

如果有改進建議或發現問題，歡迎反饋。

---

**製作日期**：2024 年 6 月  
**版本**：1.0

祝你展示你的個人品牌！ 🌟
