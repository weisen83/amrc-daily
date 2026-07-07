fetch('market.json').then(r=>r.json()).then(d=>{
document.getElementById('date').innerText=d.date;
let h='';
d.sections.forEach(s=>{h+=`<div class="card"><h2>${s.title}</h2><pre>${s.text}</pre><button onclick="copyText('${s.text}')">複製</button></div>`});
h+=`<div class="card"><h2>LINE公告</h2><pre>${d.line}</pre><button onclick="copyText('${d.line}')">複製</button></div>`;
document.getElementById('content').innerHTML=h;
});
function copyText(t){navigator.clipboard.writeText(t);alert('已複製');}