const defaultNames = [
  "1號","2號","3號","4號","5號",
  "6號","7號","8號","9號","10號"
];

function getNames() {
  return JSON.parse(localStorage.getItem("names")) || [...defaultNames];
}

function saveNames(arr) {
  localStorage.setItem("names", JSON.stringify(arr));
}

// 🎤 隨機點名（點過可消失）
function pick() {
  let names = getNames();
  if (names.length === 0) {
    show("已全部點名");
    return;
  }
  const idx = Math.floor(Math.random() * names.length);
  const name = names.splice(idx, 1)[0];
  saveNames(names);
  show(name);
}

// 👥 自動分組
function group() {
  let names = getNames();
  if (names.length === 0) {
    show("名單為空");
    return;
  }

  const groupCount = prompt("要分成幾組？", "2");
  if (!groupCount) return;

  let groups = Array.from({ length: groupCount }, () => []);
  names.forEach((n, i) => {
    groups[i % groupCount].push(n);
  });

  let html = groups.map((g, i) =>
    `第 ${i + 1} 組：${g.join("、")}`
  ).join("<br><br>");

  document.getElementById("display").innerHTML = html;
}

// 🔄 老師模式：重置
function reset() {
  if (!confirm("確定要重置所有名單？")) return;
  saveNames([...defaultNames]);
  show("已重置");
}

// 🖥 顯示
function show(text) {
  const d = document.getElementById("display");
  d.innerHTML = text;
  d.style.animation = "none";
  d.offsetHeight;
  d.style.animation = null;
}

// ⬛ 全螢幕
function toggleFull() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}
