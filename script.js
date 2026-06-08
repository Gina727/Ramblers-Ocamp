/**
 * Aegis Global Biotech - 網頁動態核心腳本 (2000s 模擬風格)
 */

/**
 * 切換顯示指定的子頁面
 * @param {string} pageId - 要顯示的區塊 ID (home-page, product-page, team-page, journal-page)
 */
function showPage(pageId) {
    // 找出所有具備 .sub-page 類別的區塊
    var pages = document.querySelectorAll('.sub-page');
    
    // 將所有頁面的 active 樣式移除 (隱藏所有頁面)
    for (var i = 0; i < pages.length; i++) {
        pages[i].classList.remove('active');
    }
    
    // 為指定的頁面加上 active 樣式 (使其顯示)
    var targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    // 當切換頁面時，將視窗捲軸拉回最頂端
    window.scrollTo(0, 0);
}

/**
 * 點擊 VIP 服務時彈出的經典系統對話方塊
 */
function alertVip() {
    alert("【系統安全防護提示】\n\n警告：VIP專屬逆齡換血（GDF11高度活性）精準服務，目前僅對本公司「A類股權贊助會員」與「歐美特定政要成員」開放。\n\n普通終端用戶無法瀏覽此頁面。請立即聯繫您的專屬客戶隱私與健康管理負責人 (Patient Care Officer) Clara Brooks。");
}