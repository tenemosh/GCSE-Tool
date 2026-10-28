(()=>{const $=s=>document.querySelector(s),ls={g:k=>{try{return localStorage.getItem(k)}catch(e){return null}},s:(k,v)=>{try{localStorage.setItem(k,v)}catch(e){}}};
let xp=+ls.g('hub_xp')||0,streak=0,best=+ls.g('hub_best')||0;
const root=document.documentElement;if(ls.g('hub_dark')!=='0')root.classList.add('dark');
const hd=$('#hdrq');if(hd){const x=document.createElement('span');x.id='hubxp';hd.parentNode.insertBefore(x,hd)}
const paint=()=>{const x=$('#hubxp');if(x)x.innerHTML=`⭐ Lv ${Math.floor(xp/100)+1}<i><b style="width:${xp%100}%"></b></i>${streak>1?'🔥'+streak:''}`};paint();
const tb=document.createElement('button');tb.id='hubtheme';tb.title='Dark / light mode';tb.textContent=root.classList.contains('dark')?'☀️':'🌙';
tb.onclick=()=>{const d=root.classList.toggle('dark');tb.textContent=d?'☀️':'🌙';ls.s('hub_dark',d?'1':'0')};document.body.appendChild(tb);
const ts=document.createElement('div');ts.id='hubtoast';document.body.appendChild(ts);let tt;
const toast=m=>{ts.textContent=m;ts.classList.add('show');clearTimeout(tt);tt=setTimeout(()=>ts.classList.remove('show'),1700)};
const cv=document.createElement('canvas');cv.id='hubfx';document.body.appendChild(cv);const c=cv.getContext('2d');let ps=[],run=0;
const rs=()=>{cv.width=innerWidth;cv.height=innerHeight};rs();addEventListener('resize',rs);
function boom(x,y,n){const col=['#6366f1','#a855f7','#ec4899','#f59e0b','#10b981','#06b6d4'];for(let i=0;i<n;i++){const a=Math.random()*6.28,v=4+Math.random()*7;ps.push({x,y,vx:Math.cos(a)*v,vy:Math.sin(a)*v-5,r:3+Math.random()*4,c:col[i%6],l:70+Math.random()*30,rot:Math.random()*6})}if(!run){run=1;requestAnimationFrame(step)}}
function step(){c.clearRect(0,0,cv.width,cv.height);ps=ps.filter(p=>p.l-->0);ps.forEach(p=>{p.vy+=.28;p.x+=p.vx;p.y+=p.vy;p.vx*=.99;p.rot+=.2;c.globalAlpha=Math.min(1,p.l/30);c.fillStyle=p.c;c.save();c.translate(p.x,p.y);c.rotate(p.rot);c.fillRect(-p.r,-p.r/2,p.r*2,p.r);c.restore()});ps.length?requestAnimationFrame(step):(run=0,c.clearRect(0,0,cv.width,cv.height))}
const cheer=['Nice one! 🎯','Spot on! ✨','Brilliant! 🚀','You got it! 💪','Easy work! 😎'];
let last=null;document.addEventListener('click',e=>{const o=e.target.closest('.opt');if(!o||o.disabled)return;last=o;
setTimeout(()=>{if(!document.body.contains(last)&&!document.querySelector('.opt.ok,.opt.no'))return;
const bad=document.querySelector('.opt.no'),good=document.querySelector('.opt.ok');
if(bad){streak=0;paint();tick()}else if(good){tick();streak++;const lv=Math.floor(xp/100);xp+=10+Math.min(streak,10);ls.s('hub_xp',xp);if(streak>best){best=streak;ls.s('hub_best',best)}
const r=good.getBoundingClientRect();boom(r.left+r.width/2,r.top+r.height/2,streak%5===0?120:36);
toast(streak>=3?`🔥 ${streak} in a row!`:cheer[streak%5]);if(Math.floor(xp/100)>lv){toast(`🎉 Level ${lv+2} unlocked!`);boom(innerWidth/2,innerHeight/3,160)}paint()}},80)},true);
document.addEventListener('keydown',e=>{if(/INPUT|TEXTAREA|SELECT/.test(e.target.tagName)||e.ctrlKey||e.metaKey)return;const k=e.key.toLowerCase(),i='abcd'.indexOf(k)>=0?'abcd'.indexOf(k):'1234'.indexOf(k);
const os=[...document.querySelectorAll('.tab-content.active .opt')];
if(i>=0&&k.length===1&&os[i]&&!os[i].disabled){os[i].click();return}
if(k==='enter'||k==='arrowright'){const b=[...document.querySelectorAll('.tab-content.active .btn-p')].find(b=>/^(next|finish|check|submit)/i.test(b.textContent.trim()));if(b){e.preventDefault();b.click()}}});
const hint=document.createElement('style');hint.textContent='.opt{position:relative}';document.head.appendChild(hint);

const deco=()=>document.querySelectorAll('main [style*="linear-gradient"]').forEach(el=>{if(el.dataset.d||!el.matches('.rounded-3xl,.rounded-2xl'))return;el.dataset.d=1;const m=(el.getAttribute('style').match(/#[0-9a-f]{6}/gi)||['#6366f1','#a855f7']);el.style.setProperty('--c1',m[0]);el.style.setProperty('--c2',m[1]||m[0]);el.classList.add(el.matches('.rounded-3xl')?'ghero':'gcard')});
let q=0;const go=()=>{cancelAnimationFrame(q);q=requestAnimationFrame(()=>{deco();bento();document.querySelectorAll('.tab-content.active .grid').forEach(g=>{if(g.dataset.s)return;g.dataset.s=1;[...g.children].forEach((c,i)=>c.style.setProperty('--i',Math.min(i,12)))})})};
new MutationObserver(go).observe(document.querySelector('main'),{childList:true,subtree:true,attributes:true,attributeFilter:['class']});go();
document.addEventListener('pointermove',e=>{const c=e.target.closest&&e.target.closest('.gcard,.card,.nc');if(c){const r=c.getBoundingClientRect();c.style.setProperty('--mx',e.clientX-r.left+'px');c.style.setProperty('--my',e.clientY-r.top+'px')}});

const key='hub_xp_day',td=()=>new Date().toISOString().slice(0,10),yd=()=>new Date(Date.now()-864e5).toISOString().slice(0,10);
const day=()=>{let d={};try{d=JSON.parse(ls.g(key))||{}}catch(e){}return d};
function tick(){const t=td(),d=day();if(d.d!==t){d.s=d.d===yd()?(d.s||0)+1:1;d.d=t;d.n=0}d.n=(d.n||0)+1;ls.s(key,JSON.stringify(d));bento(1)}
const who=()=>{try{const u=JSON.parse(localStorage.getItem('hub_users')||'[]'),c=localStorage.getItem('hub_cur');return u.find(x=>x.id===c)||{n:'',a:'👋'}}catch(e){return{n:'',a:'👋'}}};
const ring=(id,p,t,c1,c2)=>`<svg viewBox="0 0 100 100"><defs><linearGradient id="${id}"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient></defs><circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" opacity=".12" stroke-width="9"/><circle cx="50" cy="50" r="42" fill="none" stroke="url(#${id})" stroke-width="9" stroke-linecap="round" stroke-dasharray="263.9" stroke-dashoffset="${263.9*(1-Math.min(1,p))}" transform="rotate(-90 50 50)" style="transition:stroke-dashoffset .8s"/><text x="50" y="57" text-anchor="middle" class="rt">${t}</text></svg>`;
function bento(f){const h=document.getElementById('home');if(!h)return;let b=document.getElementById('bento');if(b&&!f)return;if(!b){b=document.createElement('div');b.id='bento';h.prepend(b)}
const d=day(),n=d.d===td()?d.n||0:0,st=(d.d===td()||d.d===yd())?d.s||0:0,hr=new Date().getHours(),u=who(),lv=Math.floor(xp/100)+1,last=ls.g('hub_xp_last');
let ln='',lt='';try{if(last==='biz'){ln='Business';lt='📈'}else if(last&&SJ[last]){ln=SJ[last].n;lt=SJ[last].e}}catch(e){}
b.innerHTML=`<div class="bt w" style="--i:0"><span class="fl">🔥 ${st} day streak</span><h3 style="margin-top:.9rem">Good ${hr<12?'morning':hr<18?'afternoon':'evening'}${u.n?', '+u.n.replace(/[<>&]/g,''):''} ${u.a}</h3><p class="sb">${n>=20?'Daily goal smashed. Legend. 🎉':n?`${20-n} more questions to hit today's goal.`:'Answer 20 questions today to light up your streak.'}</p>${ln?`<button class="btn btn-p" onclick="${last==='biz'?"openSub('biz')":`goSj('${last}')`}">${lt} Continue ${ln} →</button>`:'<span class="sb">Pick a subject below to begin.</span>'}</div>
<div class="bt r" style="--i:1">${ring('ga',n/20,n+'/20','#34d399','#06b6d4')}<div><span class="lb">Daily goal</span><b>${Math.min(n,20)} / 20</b></div></div>
<div class="bt r" style="--i:2">${ring('gb',(xp%100)/100,'Lv '+lv,'#6366f1','#ec4899')}<div><span class="lb">Level</span><b>${xp%100} / 100 XP</b></div></div>`}
{const og=window.goSj,oo=window.openSub;if(og)window.goSj=function(k){ls.s('hub_xp_last',k);return og.apply(this,arguments)};if(oo)window.openSub=function(k){ls.s('hub_xp_last',k);return oo.apply(this,arguments)}}
setTimeout(()=>bento(1),200);
})();
