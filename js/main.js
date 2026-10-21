const players = [
  { dorsal: 1, name: "Escandell", pos: "Porteros", role: "PORTERO", flag: "🇪🇸" },
  { dorsal: 3, name: "Pomares", pos: "Defensas", role: "LATERAL", flag: "🇪🇸" },
  { dorsal: 6, name: "Sibo", pos: "Medios", role: "PIVOTE", flag: "🇬🇭" },
  { dorsal: 8, name: "Cazorla", pos: "Medios", role: "MEDIAPUNTA · C", flag: "🇪🇸", captain: true },
  { dorsal: 9, name: "Viñas", pos: "Delanteros", role: "DELANTERO", flag: "🇺🇾" },
  { dorsal: 10, name: "Seoane", pos: "Medios", role: "MEDIO", flag: "🇪🇸" },
  { dorsal: 15, name: "Luengo", pos: "Defensas", role: "CENTRAL", flag: "🇪🇸" },
  { dorsal: 21, name: "Colombatto", pos: "Medios", role: "MEDIO", flag: "🇦🇷" },
];

const timeline = [
  { year: "1926", title: "Fundación", desc: "Nace el Real Oviedo de la fusión de dos clubes." },
  { year: "1930s", title: "Delantera Eléctrica", desc: "Lángara, Casuco, Gallart... El fútbol más veloz." },
  { year: "1963", title: "Tercer puesto", desc: "La mejor Liga de la historia." },
  { year: "1991", title: "UEFA", desc: "Noche mágica europea contra el Génova." },
  { year: "2003-12", title: "Infierno y renacer", desc: "12.000 accionistas salvaron al club." },
  { year: "2025", title: "Ascenso a Primera", desc: "22 años después, volvimos." },
  { year: "2026", title: "Centenario", desc: "100 años de orgullo, valor y garra." },
];

// Mobile menu
const hamb = document.getElementById('hamb');
const mobile = document.getElementById('mobile');
const mobileClose = document.getElementById('mobileClose');
if(hamb && mobile){
  hamb.addEventListener('click', ()=> mobile.classList.add('open'));
  mobileClose.addEventListener('click', ()=> mobile.classList.remove('open'));
  mobile.addEventListener('click', (e)=>{ if(e.target===mobile) mobile.classList.remove('open') });
}

// Countdown
const countdownEl = document.getElementById('countdown');
function updateCountdown(){
  const target = new Date("2026-10-26T18:30:00").getTime();
  let diff = target - Date.now();
  if(diff < 0) diff = 0;
  const d = Math.floor(diff/86400000);
  const h = Math.floor((diff%86400000)/3600000);
  const m = Math.floor((diff%3600000)/60000);
  const s = Math.floor((diff%60000)/1000);
  if(countdownEl) countdownEl.innerHTML = `<span>${d}d</span> <span>${h}h</span> <span>${m}m</span> <span>${s}s</span>`;
}
setInterval(updateCountdown,1000);
updateCountdown();

// Players render + filter
const playersGrid = document.getElementById('playersGrid');
const filterBtns = document.querySelectorAll('.filter');

function renderPlayers(filter="Todos"){
  if(!playersGrid) return;
  const filtered = filter==="Todos" ? players : players.filter(p=>p.pos===filter);
  playersGrid.innerHTML = filtered.map(p=>`
    <div class="p-card">
      <div class="dorsal">${p.dorsal}</div>
      <div class="role">${p.role}</div>
      <div class="name">${p.flag} ${p.name} ${p.captain? '©':''}</div>
      <div class="foot"><span>${p.pos}</span><span>#${p.dorsal}</span></div>
    </div>
  `).join('');
}

filterBtns.forEach(b=>{
  b.addEventListener('click', ()=>{
    filterBtns.forEach(x=>x.classList.remove('active'));
    b.classList.add('active');
    renderPlayers(b.dataset.pos);
  });
});
renderPlayers();

// Timeline render
const tlTrack = document.getElementById('tlTrack');
if(tlTrack){
  tlTrack.innerHTML = timeline.map(t=>`
    <div class="tl-item">
      <div class="tl-year">${t.year}</div>
      <div class="tl-title">${t.title}</div>
      <div class="tl-desc">${t.desc}</div>
    </div>
  `).join('');
}

// Newsletter demo
const newsletterBtn = document.getElementById('newsletterBtn');
if(newsletterBtn){
  newsletterBtn.addEventListener('click', ()=>{
    const input = document.getElementById('newsletterInput');
    if(input && input.value){
      alert(`¡Gracias, oviedista! Te llegará la previa al: ${input.value}`);
      input.value='';
    }
  });
}
