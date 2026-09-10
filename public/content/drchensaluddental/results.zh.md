網站剛上線不久——流量與轉換數據仍在累積中，目前正處於上線後的頭幾週。已可衡量的成果如下：

### 採用與使用情況
我在 Google Search Console 中驗證了網站、提交了網站地圖並要求索引。我也重新取得了診所原本未被管理、已附有真實病患評論的 Google 商家檔案，而非另外建立一個重複的檔案，以免分散既有的評論歷史。

### 效能提升
Lighthouse 的 SEO 分數從 92 提升至 100，無障礙分數從 95 提升至 96。在每一輪修改過程中，Core Web Vitals 始終維持在「良好」範圍內（LCP 約 2.1–2.7 秒，CLS 為 0）。

### 技術成果
我診斷並重建了原本故障的電子郵件整合，將其改為透過 Gmail API 進行 OAuth2 驗證的流程，加入了經過調校、可過濾垃圾訊息但不誤擋真實病患的 Google reCAPTCHA v3，並解決了 reCAPTCHA 標誌與浮動 WhatsApp 按鈕在不同斷點下的介面重疊問題。

[前往 drchensaluddental.cr →](https://drchensaluddental.cr)
