const today = new Date();
const yyyy = today.getFullYear();
const mm = String(today.getMonth() + 1).padStart(2, "0");
const dd = String(today.getDate()).padStart(2, "0");
const dateText = `${yyyy}/${mm}/${dd}`;
document.getElementById("today").textContent = dateText;

const risk = "以上僅為市場觀點與教育分享，不構成投資建議。請自行控管風險。";

const content = [
  {
    title: "LINE 社群公告",
    badge: "主版本",
    text: `【AMRC｜每日市場觀點】
日期：${dateText}

一、黃金 XAUUSD
今日黃金先以區間結構觀察為主，重點放在亞洲盤高低點與前一日關鍵價位。
若突破後量能無法延續，需留意假突破與回收型態。

二、美股 / NASDAQ
NASDAQ 短線觀察科技股動能是否延續。
若指數上漲但成交量與市場廣度不足，追高風險會提高。

三、BTC
BTC 目前仍受風險資產情緒影響。
短線重點觀察壓力區是否有效站穩，若無法延續，容易回測下方流動性區。

今日觀察重點：
1. 黃金是否突破關鍵區間。
2. 美股科技股動能是否延續。
3. BTC 是否站穩壓力區上方。
4. 進場前等待確認，不追價。

風險提醒：
${risk}`
  },
  {
    title: "Threads 文案",
    badge: "短文版",
    text: `今天市場先看三件事：

1. 黃金：區間突破是否有效。
2. 美股：科技股動能是否延續。
3. BTC：壓力區能否站穩。

交易不是每天都要出手。
真正重要的是：等市場給訊號，而不是自己想像訊號。

${risk}`
  },
  {
    title: "IG 貼文文案",
    badge: "貼文版",
    text: `【AMRC 每日市場觀點】

今天不急著追價，先看市場是否真的有延續性。

黃金：觀察區間高低點是否被有效突破。
美股：留意科技股動能與成交量是否同步。
BTC：注意壓力區是否站穩，避免假突破。

今日提醒：
看懂結構，比猜方向重要。

${risk}`
  },
  {
    title: "直播提醒",
    badge: "晚上使用",
    text: `【AMRC 直播提醒】

今晚 21:00 直播盤面解析。

今日重點：
1. 黃金區間與突破結構
2. 美股 / NASDAQ 盤勢觀察
3. BTC 關鍵壓力與支撐
4. Order Flow 進場邏輯拆解

有問題可以先整理，直播中一起看。`
  }
];

const cards = document.getElementById("cards");

function copyText(text, btn) {
  navigator.clipboard.writeText(text).then(() => {
    const old = btn.textContent;
    btn.textContent = "已複製";
    setTimeout(() => btn.textContent = old, 1200);
  }).catch(() => {
    alert("複製失敗，請手動選取文字複製。");
  });
}

content.forEach((item) => {
  const card = document.createElement("article");
  card.className = "card";

  const header = document.createElement("div");
  header.className = "card-header";
  header.innerHTML = `<h2 class="card-title">${item.title}</h2><span class="badge">${item.badge}</span>`;

  const body = document.createElement("div");
  body.className = "content";
  body.textContent = item.text;

  const actions = document.createElement("div");
  actions.className = "actions";

  const copyBtn = document.createElement("button");
  copyBtn.textContent = "複製";
  copyBtn.addEventListener("click", () => copyText(item.text, copyBtn));

  const selectBtn = document.createElement("button");
  selectBtn.className = "secondary";
  selectBtn.textContent = "選取文字";
  selectBtn.addEventListener("click", () => {
    const range = document.createRange();
    range.selectNodeContents(body);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  });

  actions.appendChild(copyBtn);
  actions.appendChild(selectBtn);
  card.appendChild(header);
  card.appendChild(body);
  card.appendChild(actions);
  cards.appendChild(card);
});
