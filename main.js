// 入口導向（之後你會接到真正頁面）
function go(type) {
  if (type === "games") {
    alert("🎮 遊戲大廳（之後接 40 款遊戲）");
  }
  if (type === "lottery") {
    alert("🎲 抽籤 / 📅 簽到 系統");
  }
  if (type === "classroom") {
    alert("🏫 課堂活動系統");
  }
}

// 全螢幕切換
function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

// 平板自動放大提示
window.addEventListener("load", () => {
  console.log("互動遊戲大廳已載入");
});
