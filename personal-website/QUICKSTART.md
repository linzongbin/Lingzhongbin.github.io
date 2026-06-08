# 🚀 快速開始指南

## 什麼是個人網站？

這是一個完整的、功能齊全的個人網站，旨在展示你的：
- 自我介紹和照片
- 教育背景和學術成就
- 工作經驗和實習經歷
- 專業技能和技術知識
- 完成的項目作品
- 技術文章和見解
- 獲得的獎項和認證
- 參與的活動照片

## 📂 文件結構說明

```
personal-website/          # 網站主文件夾
│
├── index.html             # 首頁 - 開始從這裡！
├── education.html         # 教育背景頁面
├── experience.html        # 工作經驗和實習頁面
├── skills.html            # 專業技能頁面
├── projects.html          # 專案作品頁面
├── articles.html          # 技術文章頁面
├── awards.html            # 獲獎與榮譽頁面
├── photos.html            # 活動照片頁面
│
├── styles.css             # 所有頁面的樣式（美觀設計）
├── script.js              # 所有頁面的功能（交互效果）
│
├── README.md              # 詳細文檔
├── QUICKSTART.md          # 本文件
│
└── assets/                # 資源文件夾
    └── images/            # 放置你的照片這裡
        ├── profile.jpg    # 個人照片
        ├── campus-1.jpg   # 校園活動照片
        ├── work-1.jpg     # 工作照片
        └── ...
```

## ⚡ 5 分鐘快速開始

### 第 1 步：在本地查看

1. 打開命令行/終端
2. 進入網站文件夾：
   ```bash
   cd c:\Users\User\Documents\U1333113\personal-website
   ```

3. 啟動本地服務器：
   ```bash
   # 如果你有 Python 3
   python -m http.server 8000
   
   # 或者使用 Python 2
   python -m SimpleHTTPServer 8000
   ```

4. 打開瀏覽器訪問：
   ```
   http://localhost:8000
   ```

### 第 2 步：個性化內容

#### 2.1 修改基本信息

打開 **index.html**，查找以下內容並替換：

- `你好！我是一位熱情的資訊管理專業學生` → 替換成你的自我介紹
- `資訊管理專業｜熱情編程者｜終身學習者` → 替換成你的標語
- `your.email@example.com` → 替換成你的郵箱

#### 2.2 更換個人照片

1. 準備一張個人照片（JPG 或 PNG）
2. 重命名為 `profile.jpg`
3. 放到 `assets/images/` 文件夾
4. 完成！網站會自動顯示

#### 2.3 填充各頁面內容

| 文件 | 說明 | 修改內容 |
|------|------|---------|
| **education.html** | 教育背景 | 學校名稱、GPA、課程、獎項 |
| **experience.html** | 工作經驗 | 公司名稱、職位、工作描述、成就 |
| **skills.html** | 技能 | 程式語言、框架、熟練度 |
| **projects.html** | 項目 | 項目名稱、描述、技術棧、連結 |
| **articles.html** | 文章 | 文章標題、日期、摘要、內容 |
| **awards.html** | 獎項 | 獎項名稱、日期、描述 |
| **photos.html** | 照片 | 添加活動照片（支持占位圖） |

#### 2.4 修改社交媒體鏈接

在頁面底部找到頁尾部分，修改：
```html
<a href="https://github.com/你的用戶名" target="_blank">🐙</a>
<a href="https://linkedin.com/in/你的檔案" target="_blank">💼</a>
<a href="https://twitter.com/你的手柄" target="_blank">🐦</a>
<a href="https://facebook.com/你的頁面" target="_blank">📘</a>
```

## 🎨 簡單的自定義

### 更改配色

打開 **styles.css**，找到最上面的顏色定義：

```css
:root {
  --primary-color: #2c3e50;    /* 深藍色 - 主色調 */
  --secondary-color: #3498db;  /* 天藍色 - 次要色 */
  --accent-color: #e74c3c;     /* 紅色 - 強調色 */
}
```

試試這些顏色組合：

**現代紫色**
```css
--primary-color: #5a3d7a;
--secondary-color: #8e44ad;
--accent-color: #f39c12;
```

**清爽綠色**
```css
--primary-color: #27ae60;
--secondary-color: #16a085;
--accent-color: #e67e22;
```

**優雅深灰**
```css
--primary-color: #34495e;
--secondary-color: #2c3e50;
--accent-color: #c0392b;
```

### 更改字體

在 **styles.css** 中找到 `font-family`，試試這些字體：

```css
/* 現代簡潔 */
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

/* 專業商務 */
font-family: 'Georgia', serif;

/* 時尚現代 */
font-family: 'Trebuchet MS', sans-serif;
```

## 📸 添加照片到網站

### 方法 1：本地照片（推薦）

1. 準備你的照片
2. 放到 `assets/images/` 文件夾
3. 在 HTML 中引用：
   ```html
   <img src="assets/images/你的照片.jpg" alt="描述">
   ```

### 方法 2：在線照片

直接使用圖片 URL：
```html
<img src="https://example.com/photo.jpg" alt="描述">
```

### 方法 3：佔位圖

如果沒有照片，網站會自動顯示佔位圖：
```html
<img src="assets/images/photo.jpg" alt="照片"
     onerror="this.src='https://via.placeholder.com/300x250?text=Your+Text'">
```

## 🌐 發布到網絡

### 方案 1：GitHub Pages（免費，推薦）

1. 創建 GitHub 賬號（如果沒有）
2. 創建新倉庫名為 `username.github.io`
3. 上傳所有網站文件
4. 訪問 `https://username.github.io`

### 方案 2：Netlify（免費）

1. 訪問 netlify.com
2. 連接 GitHub
3. 選擇倉庫
4. 自動部署完成！

### 方案 3：購買域名

1. 去 Namecheap、GoDaddy 等網站
2. 購買域名（如 yourname.com）
3. 配置 DNS 指向你的主機
4. 完成！

## 🔧 常見問題

### Q：怎麼更改頁面標題？
A：在每個 HTML 文件的 `<title>` 標籤中修改。例如：
```html
<title>我的個人網站</title>
```

### Q：怎麼添加新頁面？
A：複製一個現有的 HTML 文件，修改內容，在導航欄添加鏈接。

### Q：為什麼照片沒有顯示？
A：檢查圖片路徑是否正確，或使用佔位圖功能。

### Q：怎麼加快網站速度？
A：壓縮圖片（使用 TinyPNG），刪除不需要的內容。

### Q：可以在手機上查看嗎？
A：可以！網站完全響應式，支持所有設備。

## 📋 完成清單

在發布前檢查：

- [ ] 所有個人信息已更新
- [ ] 個人照片已上傳
- [ ] 所有社交媒體鏈接已更新
- [ ] 檢查所有鏈接是否工作
- [ ] 在手機上測試過
- [ ] 在不同瀏覽器測試過
- [ ] 圖片已優化（不超過 5MB）
- [ ] 拼寫檢查無誤

## 🎯 下一步

1. **個性化內容** - 填充你的真實信息
2. **上傳照片** - 添加你的個人和活動照片
3. **優化頁面** - 調整色彩和字體
4. **本地測試** - 在瀏覽器中檢查
5. **發布到網絡** - 選擇你喜歡的託管方案

## 💡 提示

- 保持內容最新 - 定期更新你的信息
- 高質量照片 - 使用清晰、專業的照片
- 簡潔描述 - 避免過長的文本
- 一致的風格 - 保持設計的統一性
- 搜索優化 - 在 HTML 中加入合適的關鍵詞

## 🆘 需要幫助？

- 查看 **README.md** 獲得詳細文檔
- 檢查 HTML 文件中的註釋
- 查看 styles.css 中的 CSS 註釋
- 嘗試使用瀏覽器的開發者工具（F12）

---

祝你打造專業的個人品牌！🌟

**有問題？快速檢查清單：**
- ✅ 文件都在正確位置嗎？
- ✅ 本地服務器運行中嗎？
- ✅ 使用了正確的 URL（http://localhost:8000）？
- ✅ 瀏覽器緩存了嗎？試試 Ctrl+F5 刷新
