const defaultNames = [
  "1號", "2號", "3號", "4號", "5號",
  "6號", "7號", "8號", "9號", "10號"
];

function getNames() {
  return JSON.parse(localStorage.getItem("names")) || [...defaultNames];
}

function saveNames(arr) {
  localStorage.setItem("names", JSON.stringify(arr));
}

// 🎲 抽籤（抽過自動消失）
function draw() {
  let names = getNames();
  if (names.length === 0) {
    document.getElementById("result").innerText = "已全部抽完";
    return;
  }
  const idx = Math.floor(Math.random() * names.length);
  const picked = names.splice(idx, 1)[0];
  saveNames(names);

  const r = document.getElementById("result");
  r.innerText = picked;
  r.style.animation = "none";
  r.offsetHeight;
  r.style.animation = null;
}

// 📅 簽到
function renderSign() {
  const list = document.getElementById("list");
  if (!list) return;

  list.innerHTML = "";
  getNames().forEach(name => {
    const btn = document.createElement("button");
    btn.innerText = name;
    btn.onclick = () => {
      btn.classList.add("signed");
      btn.disabled = true;
    };
    list.appendChild(btn);
  });
}

// 👩‍🏫 老師模式：重置
function reset() {
  if (!confirm("確定要重置嗎？")) return;
  saveNames([...defaultNames]);
  location.reload();
}

// 🔀 導頁
function goSign() { location.href = "sign.html"; }
function goLottery() { location.href = "lottery.html"; }

// ⬛ 全螢幕
function toggleFull() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

window.onload = renderSign;
