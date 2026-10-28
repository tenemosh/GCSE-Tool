(()=>{const KEY='hub_xp_stars',TH=[3,10,25],COL={biz:'#818cf8',bio:'#34d399',chem:'#22d3ee',phys:'#fbbf24',mat:'#f472b6',cs:'#60a5fa',eng:'#fb7185',fr:'#a78bfa',geo:'#4ade80',rs:'#fb923c'};
const ld=()=>{try{return JSON.parse(localStorage.getItem(KEY))||{}}catch(e){return{}}};let data=ld();const sv=()=>{try{localStorage.setItem(KEY,JSON.stringify(data))}catch(e){}};
const tier=c=>TH.filter(x=>c>=x).length;
let subs=null;
function rng(s){let a=0;for(const ch of s)a=(a*31+ch.charCodeAt(0))|0;return()=>{a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
function build(){if(subs)return subs;subs=[];const add=(k,n,e,u)=>{if(u.length)subs.push({k,n,e,col:COL[k]||'#a5b4fc',tops:u})};
 add('biz','Business','📈',Object.keys(Q).map(u=>({t:u,l:UN[u]||u})));
 Object.keys(SJ).forEach(k=>add(k,SJ[k].n,SJ[k].e,[...new Set(pool(k).map(q=>q.u))].map(t=>({t,l:t}))));
 const N=subs.length;subs.forEach((s,i)=>{const y=1-(i+.5)*2/N,r=Math.sqrt(1-y*y),ph=i*2.39996;s.x=300*Math.cos(ph)*r;s.y=300*y;s.z=300*Math.sin(ph)*r;const R=rng(s.k);
  s.tops.forEach(t=>{const a=R()*6.283,b=Math.acos(2*R()-1),d=85*Math.cbrt(R());t.x=s.x+d*Math.sin(b)*Math.cos(a);t.y=s.y+d*Math.cos(b);t.z=s.z+d*Math.sin(b)*Math.sin(a);t.sd=R()*6.283;t.s=s});
  s.ln=[];s.tops.forEach((t,i)=>{if(!i)return;let m=0,md=1e9;for(let j=0;j<i;j++){const o=s.tops[j],d=(o.x-t.x)**2+(o.y-t.y)**2+(o.z-t.z)**2;if(d<md){md=d;m=j}}s.ln.push([t,s.tops[m]])})});
 return subs}
const get=(s,t)=>data[s.k+'|'+t.t]||[0,0],mast=(s,t)=>Math.min(1,get(s,t)[0]/TH[2]);
const stats=()=>{build();let lit=0,tot=0,m=0;subs.forEach(s=>s.tops.forEach(t=>{tot++;if(get(s,t)[0]>0)lit++;m+=mast(s,t)}));return{lit,tot,pct:Math.round(100*m/tot)}};
let idx=null;const index=()=>{if(idx)return idx;idx=[];const p=(k,q,t)=>{const n=String(q.q).split('||').pop().trim();if(n.length>=8)idx.push([n,k,t])};Object.keys(Q).forEach(u=>Q[u].forEach(q=>p('biz',q,u)));Object.keys(SJ).forEach(k=>pool(k).forEach(q=>p(k,q,q.u)));return idx};
let last='';
function rec(card,ok){const tx=card.textContent;if(tx===last)return;last=tx;let b=null,bl=0;index().forEach(r=>{if(r[0].length>bl&&tx.includes(r[0])){b=r;bl=r[0].length}});if(!b)return;
 const key=b[1]+'|'+b[2],d=data[key]||(data[key]=[0,0]),ot=tier(d[0]);d[1]++;if(ok)d[0]++;sv();
 if(tier(d[0])>ot){build();const s=subs.find(x=>x.k===b[1]),t=s&&s.tops.find(x=>x.t===b[2]),to=document.getElementById('hubtoast');if(to&&t){setTimeout(()=>{to.textContent=(ot?'⭐ Ring added: ':'✨ Star lit: ')+t.l+' · '+s.n;to.classList.add('show');setTimeout(()=>to.classList.remove('show'),2600)},1900)}}tile()}
document.addEventListener('click',e=>{const o=e.target.closest('.opt');if(!o||o.disabled)return;setTimeout(()=>{const bad=document.querySelector('.opt.no'),el=bad||document.querySelector('.opt.ok');if(el)rec(el.closest('.card')||el.parentElement,!bad)},90)},true);
const css=document.createElement('style');css.textContent=`#cn{position:fixed;inset:0;z-index:150;display:none;background:#04050c;color:#eef1ff;font-family:Inter,sans-serif}#cn canvas{position:absolute;inset:0;width:100%;height:100%;cursor:grab;touch-action:none}#cn canvas:active{cursor:grabbing}
#cn .tp{position:absolute;left:0;right:0;top:0;display:flex;justify-content:space-between;align-items:flex-start;padding:1.2rem 1.4rem;pointer-events:none}#cn h2{font:800 1.6rem 'Plus Jakarta Sans',Inter,sans-serif;letter-spacing:-.03em}#cn .sb{color:#9aa4c7;font-size:.85rem;margin-top:.2rem}
#cn .x{pointer-events:auto;width:2.6rem;height:2.6rem;border-radius:50%;border:1px solid rgba(255,255,255,.15);background:rgba(255,255,255,.07);color:#fff;font-size:1.1rem;cursor:pointer;backdrop-filter:blur(10px)}
#cn .lg{position:absolute;right:1.2rem;top:5.2rem;bottom:4rem;width:15rem;overflow:auto;display:flex;flex-direction:column;gap:.4rem}
#cn .lg button{display:block;text-align:left;padding:.6rem .8rem;border-radius:.9rem;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.05);backdrop-filter:blur(12px);color:#eef1ff;font-size:.8rem;font-weight:700;cursor:pointer;transition:.2s}#cn .lg button:hover{background:rgba(255,255,255,.12);transform:translateX(-3px)}
#cn .lg i{display:block;height:.28rem;border-radius:9px;background:rgba(255,255,255,.12);margin-top:.4rem;overflow:hidden}#cn .lg i b{display:block;height:100%;border-radius:9px}#cn .lg span{float:right;color:#9aa4c7;font-weight:600}
#cn .ft{position:absolute;left:0;right:0;bottom:1rem;text-align:center;color:#7f8aaf;font-size:.78rem;pointer-events:none}
#cn .tt{position:absolute;pointer-events:none;display:none;max-width:16rem;padding:.6rem .8rem;border-radius:.8rem;background:rgba(10,12,28,.92);border:1px solid rgba(255,255,255,.15);font-size:.78rem;line-height:1.4;backdrop-filter:blur(10px)}#cn .tt b{display:block;font-size:.85rem}
@media(max-width:700px){#cn .lg{top:auto;bottom:2.6rem;left:.6rem;right:.6rem;width:auto;flex-direction:row;height:auto;overflow-x:auto}#cn .lg button{flex:none;min-width:9rem}}
#cn .fl2{position:absolute;top:4.3rem;left:50%;transform:translateX(-50%);display:flex;gap:.3rem;padding:.25rem;border-radius:99px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);backdrop-filter:blur(12px)}#cn .fl2 button{padding:.35rem .85rem;border-radius:99px;font-size:.75rem;font-weight:700;color:#9aa4c7;cursor:pointer;transition:.2s}#cn .fl2 button.on{background:#fff;color:#0b1020}
#cn .dp{position:absolute;left:1.2rem;top:5.2rem;width:16.5rem;padding:1.1rem;border-radius:1.2rem;background:rgba(10,12,28,.78);border:1px solid rgba(255,255,255,.14);backdrop-filter:blur(16px);display:none;animation:up .35s}#cn .dp h3{font:800 1.3rem 'Plus Jakarta Sans',Inter,sans-serif;letter-spacing:-.02em;margin:.25rem 0 .8rem}#cn .dp .k{font-size:.7rem;font-weight:800;letter-spacing:.09em;text-transform:uppercase}
#cn .rg{display:flex;gap:.4rem;align-items:center;margin-bottom:.8rem}#cn .rg i{width:1.4rem;height:.4rem;border-radius:9px;background:rgba(255,255,255,.15)}#cn .rg span{font-size:.75rem;color:#9aa4c7;margin-left:.3rem}
#cn .nm{display:grid;grid-template-columns:repeat(3,1fr);gap:.4rem;margin-bottom:.8rem}#cn .nm div{background:rgba(255,255,255,.06);border-radius:.7rem;padding:.55rem .3rem;font-size:.65rem;color:#9aa4c7;text-align:center}#cn .nm b{display:block;font-size:1.15rem;color:#fff}
#cn .dp p{font-size:.8rem;color:#b6bedb;margin-bottom:.9rem;line-height:1.45}#cn .dp .go{width:100%;padding:.75rem;border-radius:.85rem;font-weight:800;font-size:.85rem;color:#fff;background:linear-gradient(135deg,#6366f1,#ec4899);cursor:pointer;transition:.2s}#cn .dp .go:hover{transform:translateY(-2px);box-shadow:0 12px 26px -10px #ec4899}
#cn .st{position:absolute;left:50%;bottom:2.5rem;transform:translateX(-50%);display:flex;gap:1.5rem;padding:.7rem 1.4rem;border-radius:1rem;background:rgba(8,10,26,.65);border:1px solid rgba(255,255,255,.1);backdrop-filter:blur(14px);font-size:.66rem;color:#9aa4c7;text-align:center;white-space:nowrap}#cn .st b{display:block;font-size:.95rem;color:#fff;margin-bottom:.1rem}
#cn .lg .nx{border-color:rgba(236,72,153,.55)!important;background:linear-gradient(135deg,rgba(99,102,241,.3),rgba(236,72,153,.22))!important}
@media(max-width:700px){#cn .st{display:none}#cn .dp{left:.6rem;right:.6rem;top:auto;bottom:6.6rem;width:auto}#cn .fl2{top:4.1rem}}
html.cn-open body>*:not(#cn){visibility:hidden}html.cn-open body::before{display:none}#cn *{backdrop-filter:none!important}#cn .lg button,#cn .fl2,#cn .st,#cn .x{background:rgba(14,17,38,.88)!important}#cn::after{content:"";position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse at 50% 45%,transparent 52%,rgba(2,3,9,.6))}#cnbtn span{margin-left:.35rem}@media(max-width:700px){#cnbtn span{display:none}}`;document.head.appendChild(css);
let DPRC=1.5,sel=null,flt='all',zT=1,ov,cv,cx,tt,W,H,yaw=.6,pit=-.25,zm=1,ty=null,tp=null,drag=null,idle=0,hov=null,raf=0,scr=[],dust=[],T=0;
let SK=null,PAN=null,PAN2=null,LAND=null,spr={},shoot=null,lt=performance.now(),fa=16,low=0;
const PW=4096,PH=2048,PPR=PW/6.2832,cr=(a,b)=>[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]],nz=v=>{const l=Math.hypot(v[0],v[1],v[2])||1;return[v[0]/l,v[1]/l,v[2]/l]};
function sprite(c){if(spr[c])return spr[c];const k=document.createElement('canvas');k.width=k.height=128;const g=k.getContext('2d'),r=g.createRadialGradient(64,64,0,64,64,64);r.addColorStop(0,c+'ff');r.addColorStop(.3,c+'77');r.addColorStop(.65,c+'22');r.addColorStop(1,c+'00');g.fillStyle=r;g.fillRect(0,0,128,128);return spr[c]=k}
function skyInit(){const R=rng('milkyway'),n=nz([.1,.62,.78]),e1=nz(cr(n,[0,0,1])),e2=cr(n,e1),a0=1.25,pt=(a,g)=>nz([e1[0]*Math.cos(a)+e2[0]*Math.sin(a)+n[0]*g,e1[1]*Math.cos(a)+e2[1]*Math.sin(a)+n[1]*g,e1[2]*Math.cos(a)+e2[2]*Math.sin(a)+n[2]*g]);
 const wr=a=>Math.abs(((a-a0+Math.PI)%6.283+6.283)%6.283-Math.PI),xy=v=>[(Math.atan2(v[0],-v[2])/6.2832+.5)*PW,PH/2+Math.asin(Math.max(-1,Math.min(1,v[1])))*PPR];
 const mk=()=>{const k=document.createElement('canvas');k.width=PW;k.height=PH;return[k,k.getContext('2d')]},[k1,g]=mk(),[k2,h]=mk();
 const spot=(c,v,s,al,ctx=g,sx=1)=>{const[x,y]=xy(v),r=s*PPR*1.6;ctx.globalAlpha=al;[-PW,0,PW].forEach(o=>{if(x+o>-r*2&&x+o<PW+r*2){ctx.save();ctx.translate(x+o,y);ctx.scale(sx,1);ctx.drawImage(sprite(c),-r,-r,2*r,2*r);ctx.restore()}})};
 g.globalCompositeOperation='lighter';const warm=['#fbbf24','#fb923c','#f59e0b'],cool=['#8b5cf6','#a855f7','#ec4899','#38bdf8','#6366f1','#c084fc'];
 spot('#fbbf24',pt(a0,0),.62,.32);spot('#fff1c9',pt(a0,0),.3,.38);
 for(let i=0;i<150;i++){const a=R()*6.283,w=wr(a)<.9,c=w?warm[Math.floor(R()*3)]:cool[Math.floor(R()*6)];spot(c,pt(a,(R()-.5)*.28),.06+R()*.2,(.1+R()*.22)*(w?1.15:1))}
 for(let i=0;i<30;i++)spot('#ec4899',pt(R()*6.283,(R()-.5)*.32),.025+R()*.05,.4);
 g.globalCompositeOperation='source-over';for(let i=0;i<80;i++)spot('#02030a',pt(R()*6.283,(R()-.5)*.14),.035+R()*.1,.26+R()*.3);
 const air=g.createLinearGradient(0,PH*.62,0,PH);air.addColorStop(0,'rgba(60,200,170,0)');air.addColorStop(.5,'rgba(60,200,170,.1)');air.addColorStop(1,'rgba(80,140,230,0)');g.globalAlpha=1;g.fillStyle=air;g.fillRect(0,PH*.62,PW,PH*.38);
 g.globalCompositeOperation='lighter';const cols=['#cfe0ff','#ffffff','#ffe9cc','#bcd2ff','#ffd3e8'],big=[];
 for(let i=0;i<13000;i++){let v;if(R()<.74){const a=R()*6.283;v=pt(a,(R()+R()+R()-1.5)*.34*(1+1.6*Math.exp(-(wr(a)**2)/.5)))}else{const a=R()*6.283,b=Math.acos(2*R()-1);v=[Math.sin(b)*Math.cos(a),Math.cos(b),Math.sin(b)*Math.sin(a)]}
  const q=R(),[x,y]=xy(v),z=.6+q*q*1.7;g.globalAlpha=.18+.82*q**2.5;g.fillStyle=cols[i%5];g.fillRect(x,y,z,z);if(q>.995)big.push([x,y])}
 big.forEach(([x,y])=>{g.globalAlpha=.8;g.drawImage(sprite('#cfe0ff'),x-9,y-9,18,18);g.globalAlpha=.5;g.fillStyle='#fff';g.fillRect(x-13,y-.5,26,1);g.fillRect(x-.5,y-13,1,26)});
 spot('#ffd9a0',[Math.sin(2.2)*.8,.5,-Math.cos(2.2)*.8],.05,.5);spot('#fff4d6',[Math.sin(2.2)*.8,.5,-Math.cos(2.2)*.8],.014,1);spot('#c9d6ff',[Math.sin(4.1)*.9,.28,-Math.cos(4.1)*.9],.05,.55,g,2.6);
 h.globalCompositeOperation='lighter';for(let i=0;i<3600;i++){const a=R()*6.283,b=Math.acos(2*R()-1),[x,y]=xy([Math.sin(b)*Math.cos(a),Math.cos(b),Math.sin(b)*Math.sin(a)]);h.globalAlpha=.15+.4*R();h.fillStyle=cols[i%5];h.fillRect(x,y,1,1)}
 PAN=k1;PAN2=k2;SK=1}
function drawSky(){if(!SK)skyInit();const f=Math.min(H*.6,680),sc=f/PPR,w=PW*sc,hh=PH*sc,sh=f*Math.tan(pit*.6),lh=LAND?LAND.height:H*.24,hy=H-lh*.5,g=cx.createLinearGradient(0,0,0,H);
 g.addColorStop(0,'#02030a');g.addColorStop(.5,'#080c28');g.addColorStop(.85,'#142049');g.addColorStop(1,'#2b2149');cx.globalCompositeOperation='source-over';cx.globalAlpha=1;cx.fillStyle=g;cx.fillRect(0,0,W,H);
 const tile=(im,sp,sy,k)=>{const b=W/2-w*k/2-yaw*f*sp,ww=w*k,x0=((b%ww)+ww)%ww-ww;for(let x=x0;x<W;x+=ww)cx.drawImage(im,x,H/2+sh*sy-hh*k/2,ww,hh*k)};
 tile(PAN2,.9,.9,1);cx.globalCompositeOperation='lighter';tile(PAN,1,1,1);cx.globalCompositeOperation='source-over';
 const hg=cx.createLinearGradient(0,hy-H*.38,0,hy);hg.addColorStop(0,'rgba(60,150,200,0)');hg.addColorStop(.6,'rgba(90,150,210,.14)');hg.addColorStop(.88,'rgba(240,130,150,.24)');hg.addColorStop(1,'rgba(255,160,90,.42)');cx.fillStyle=hg;cx.fillRect(0,hy-H*.38,W,H*.38+lh);
 if(LAND)cx.drawImage(LAND,0,H-lh);
 if(!shoot&&Math.random()<.004)shoot={x:Math.random()*W*.8,y:Math.random()*H*.35,l:0};if(shoot){const s=shoot,k=s.l++,x=s.x+k*16,y=s.y+k*6,gr=cx.createLinearGradient(x,y,x-90,y-34);gr.addColorStop(0,'rgba(255,255,255,'+(1-k/30)+')');gr.addColorStop(1,'rgba(255,255,255,0)');cx.strokeStyle=gr;cx.lineWidth=1.6;cx.beginPath();cx.moveTo(x,y);cx.lineTo(x-90,y-34);cx.stroke();if(k>30)shoot=null}}
function buildLand(){const w=W,h=Math.round(H*.24),k=document.createElement('canvas');k.width=w;k.height=h;const g=k.getContext('2d');
 const layer=(o,amp,fr,ph,c1,c2,rim)=>{const gr=g.createLinearGradient(0,h*.3,0,h),y=x=>h*o-amp*(Math.sin(x*fr+ph)*.6+Math.sin(x*fr*2.3+ph*1.7)*.3+Math.sin(x*fr*5.1)*.1);gr.addColorStop(0,c1);gr.addColorStop(1,c2);g.fillStyle=gr;g.beginPath();g.moveTo(0,h);for(let x=0;x<=w;x+=4)g.lineTo(x,y(x));g.lineTo(w,h);g.fill();
  if(rim){g.strokeStyle=rim;g.lineWidth=1.3;g.beginPath();for(let x=0;x<=w;x+=4)x?g.lineTo(x,y(x)):g.moveTo(x,y(x));g.stroke()}};
 layer(.5,26,.0032,1,'#1b2554','#0c1130','rgba(255,170,120,.28)');const m=g.createLinearGradient(0,0,0,h*.7);m.addColorStop(0,'rgba(120,150,220,0)');m.addColorStop(1,'rgba(120,150,220,.1)');g.fillStyle=m;g.fillRect(0,0,w,h*.7);
 layer(.68,22,.0052,3,'#0c1130','#070a1e','rgba(150,130,200,.12)');layer(.86,15,.0078,5,'#04050c','#02030a');return LAND=k}

const D=760,F=760,pr=(x,y,z)=>{const cy=Math.cos(yaw),sy=Math.sin(yaw),cp=Math.cos(pit),sp=Math.sin(pit),x1=x*cy+z*sy,z1=-x*sy+z*cy,y1=y*cp-z1*sp,z2=y*sp+z1*cp,s=F*zm/(D-z2);return[W/2+x1*s,H/2+y1*s,s,z2]};
const size=()=>{const r=Math.min(devicePixelRatio||1,DPRC);W=innerWidth;H=innerHeight;cv.width=W*r;cv.height=H*r;cx.setTransform(r,0,0,r,0,0);buildLand()};
function mk(){ov=document.createElement('div');ov.id='cn';ov.innerHTML='<canvas></canvas><div class="tp"><div><h2>🌌 Your Constellation</h2><div class="sb"></div></div><button class="x" aria-label="Close">✕</button></div><div class="fl2"></div><div class="lg"></div><div class="dp"></div><div class="st"></div><div class="ft">Drag to rotate · Scroll to zoom · Click a star for details · Double-click to reset</div><div class="tt"></div>';document.body.appendChild(ov);
 cv=ov.querySelector('canvas');cx=cv.getContext('2d');tt=ov.querySelector('.tt');ov.querySelector('.x').onclick=close;addEventListener('resize',()=>ov.style.display=='block'&&size());
 
 cv.onpointerdown=e=>{drag={x:e.clientX,y:e.clientY,m:0};cv.setPointerCapture(e.pointerId);ty=null;idle=0};
 cv.onpointermove=e=>{if(drag){const dx=e.clientX-drag.x,dy=e.clientY-drag.y;drag.m+=Math.abs(dx)+Math.abs(dy);yaw+=dx*.006;pit=Math.max(-.8,Math.min(.8,pit+dy*.006));drag.x=e.clientX;drag.y=e.clientY;return}
  idle=0;hov=null;let bd=16;scr.forEach(p=>{const d=Math.hypot(p.x-e.clientX,p.y-e.clientY);if(d<bd){bd=d;hov=p}});cv.style.cursor=hov?'pointer':'grab';
  if(hov){const[c,t]=get(hov.s,hov.t),n=tier(c);tt.style.display='block';tt.style.left=Math.min(e.clientX+16,W-260)+'px';tt.style.top=e.clientY+16+'px';
   tt.innerHTML=`<b>${hov.s.e} ${hov.t.l}</b>${hov.s.n}<br>`+(t?`${c} correct of ${t} answered (${Math.round(100*c/t)}%)<br>${n<3?'Next ring at '+TH[n]+' correct':'⭐ Fully mastered'}`:'Not lit yet. Answer questions on this topic to light it.')}else tt.style.display='none'};
 cv.onpointerup=()=>{if(drag&&drag.m<6){sel=hov?{s:hov.s,t:hov.t}:null;panel();if(sel)fly(sel.t)}drag=null};cv.ondblclick=()=>{ty=.6;tp=-.25;zT=1;sel=null;panel()};
 cv.onwheel=e=>{e.preventDefault();zT=Math.max(.55,Math.min(2.2,zT*(e.deltaY>0?.92:1.08)))};
 addEventListener('keydown',e=>{if(e.key==='Escape'&&ov.style.display==='block')close()})}
const RK=[[0,'Observer'],[3,'Stargazer'],[15,'Navigator'],[35,'Cartographer'],[55,'Astronomer'],[80,'Celestial']];
const fly=o=>{ty=Math.atan2(-o.x,o.z);tp=Math.max(-.8,Math.min(.8,Math.atan2(o.y,Math.hypot(o.x,o.z))))};
const okf=(s,t)=>{const[c,a]=get(s,t);return flt==='all'||(flt==='unlit'&&!c)||(flt==='mast'&&c>=TH[2])||(flt==='weak'&&a>=3&&c/a<.6)};
function nextStar(){let b=null,bs=9;subs.forEach(s=>s.tops.forEach(t=>{const[c,a]=get(s,t),v=mast(s,t)+(a>=3&&c/a<.6?-1:0);if(v<bs){bs=v;b={s,t}}}));return b}
function panel(){const d=ov.querySelector('.dp');if(!sel){d.style.display='none';return}const{s,t}=sel,[c,a]=get(s,t),n=tier(c);d.style.display='block';
 d.innerHTML=`<div class="k" style="color:${s.col}">${s.e} ${s.n}</div><h3>${t.l}</h3><div class="rg">${[0,1,2].map(i=>`<i style="${i<n?'background:'+s.col+';box-shadow:0 0 10px '+s.col:''}"></i>`).join('')}<span>${n}/3 rings</span></div><div class="nm"><div><b>${c}</b>correct</div><div><b>${a}</b>answered</div><div><b>${a?Math.round(100*c/a)+'%':'–'}</b>accuracy</div></div><p>${n<3?`${TH[n]-c} more correct answer${TH[n]-c>1?'s':''} for the next ring.`:'⭐ Mastered. Revisit now and then to keep it sharp.'}</p><button class="go">Revise this topic →</button>`;
 d.querySelector('.go').onclick=()=>{close();s.k==='biz'?openSub('biz'):goSj(s.k)}}
function legend(){const st=stats();let rk='Observer';RK.forEach(r=>{if(st.pct>=r[0])rk=r[1]});let rings=0,cl=0,ms=0,ca=0,at=0;
 subs.forEach(s=>{let all=1;s.tops.forEach(t=>{const[c,a]=get(s,t);rings+=tier(c);ca+=c;at+=a;if(c>=TH[2])ms++;if(!c)all=0});cl+=all});
 ov.querySelector('.sb').innerHTML=`Rank <b style="color:#c7d2fe">${rk}</b> · ${st.pct}% of the sky mastered`;
 ov.querySelector('.st').innerHTML=[['★',st.lit+'/'+st.tot,'stars lit'],['◎',rings,'rings earned'],['✦',cl+'/'+subs.length,'clusters complete'],['💎',ms,'mastered'],['🎯',at?Math.round(100*ca/at)+'%':'–','accuracy']].map(x=>`<div><b>${x[0]} ${x[1]}</b>${x[2]}</div>`).join('');
 const f=ov.querySelector('.fl2');f.innerHTML='';[['all','All'],['unlit','Unlit'],['weak','Needs work'],['mast','Mastered']].forEach(([k,l])=>{const b=document.createElement('button');b.textContent=l;b.className=flt===k?'on':'';b.onclick=()=>{flt=k;legend()};f.appendChild(b)});
 const l=ov.querySelector('.lg');l.innerHTML='';const nx=nextStar();
 if(nx){const b=document.createElement('button');b.className='nx';b.innerHTML=`🎯 Next up<br><span style="float:none;color:#eef1ff">${nx.t.l}</span><span style="float:none;display:block">${nx.s.n}</span>`;b.onclick=()=>{sel=nx;panel();fly(nx.t)};l.appendChild(b)}
 subs.forEach(s=>{const lit=s.tops.filter(t=>get(s,t)[0]>0).length,m=s.tops.reduce((a,t)=>a+mast(s,t),0)/s.tops.length,b=document.createElement('button');
  b.innerHTML=`<span>${lit}/${s.tops.length}</span>${s.e} ${s.n}<i><b style="width:${Math.max(3,m*100)}%;background:${s.col}"></b></i>`;b.onclick=()=>fly(s);l.appendChild(b)});panel()}
addEventListener('keydown',e=>{if(!ov||ov.style.display!=='block')return;const k=e.key;if(k==='ArrowLeft')yaw-=.12;else if(k==='ArrowRight')yaw+=.12;else if(k==='ArrowUp')pit=Math.max(-.8,pit-.1);else if(k==='ArrowDown')pit=Math.min(.8,pit+.1);else if(k==='+'||k==='=')zT=Math.min(2.2,zT*1.15);else if(k==='-')zT=Math.max(.55,zT/1.15);idle=0});
function loop(){raf=requestAnimationFrame(loop);const nw=performance.now(),dt=nw-lt;lt=nw;fa+=(Math.min(dt,100)-fa)*.05;T+=.016;if(!low&&T>2&&fa>26){low=1;DPRC=1;size()}zm+=(zT-zm)*.1;
 if(ty!==null){let d=((ty-yaw+Math.PI)%6.283+6.283)%6.283-Math.PI;yaw+=d*.08;pit+=(tp-pit)*.08;if(Math.abs(d)<.003&&Math.abs(tp-pit)<.003)ty=null}else if(!drag&&!hov&&!sel&&++idle>240)yaw+=.0016;
 drawSky();cx.globalCompositeOperation='lighter';scr=[];
 subs.forEach(s=>{const p=pr(s.x,s.y,s.z),m=s.tops.reduce((a,t)=>a+mast(s,t),0)/s.tops.length,r=185*p[2];cx.globalAlpha=Math.min(1,(.06+.5*m)*(s.tops.some(t=>okf(s,t))?1:.25));cx.drawImage(sprite(s.col),p[0]-r,p[1]-r,2*r,2*r)});
 subs.forEach(s=>{cx.strokeStyle=s.col;cx.lineWidth=1;s.ln.forEach(([a,b])=>{const A=pr(a.x,a.y,a.z),B=pr(b.x,b.y,b.z),m=Math.min(mast(s,a),mast(s,b));cx.globalAlpha=(.07+.5*m)*(okf(s,a)&&okf(s,b)?1:.25);cx.beginPath();cx.moveTo(A[0],A[1]);cx.lineTo(B[0],B[1]);cx.stroke()})});
 const all=[],lab=[];subs.forEach(s=>s.tops.forEach(t=>all.push([pr(t.x,t.y,t.z),s,t])));all.sort((a,b)=>a[0][3]-b[0][3]);
 all.forEach(([p,s,t])=>{const c=get(s,t)[0],m=mast(s,t),n=tier(c),sc=p[2],tw=1+.1*Math.sin(T*2+t.sd*9),dep=Math.max(.35,Math.min(1,(p[3]+500)/800))*(okf(s,t)?1:.2),r=(2.4+5.5*m)*sc*tw,isS=sel&&sel.t===t,X=p[0],Y=p[1];scr.push({x:X,y:Y,s,t});
  if(c>0){const R5=r*5;cx.globalAlpha=(.5+.5*m)*dep;cx.drawImage(sprite(s.col),X-R5,Y-R5,2*R5,2*R5);cx.globalAlpha=dep;cx.drawImage(sprite('#ffffff'),X-r,Y-r,2*r,2*r)}
  else{cx.globalAlpha=.55*dep;cx.strokeStyle='#8e99c4';cx.lineWidth=1;cx.beginPath();cx.arc(X,Y,2.6*sc,0,6.283);cx.stroke()}
  if(n){cx.strokeStyle=s.col;cx.lineWidth=1;for(let i=0;i<n;i++){const rr=r+5+i*5,rot=.5+i*.4+T*.15*(i+1),an=T*(1.2+i*.5)+t.sd;cx.globalAlpha=.55*dep;cx.beginPath();cx.ellipse(X,Y,rr,rr*.45,rot,0,6.283);cx.stroke();
   const ex=rr*Math.cos(an),ey=rr*.45*Math.sin(an);cx.globalAlpha=dep;cx.fillStyle='#fff';cx.fillRect(X+ex*Math.cos(rot)-ey*Math.sin(rot)-1,Y+ex*Math.sin(rot)+ey*Math.cos(rot)-1,2.4*sc,2.4*sc)}}
  if(n===3){cx.globalAlpha=.8*dep;cx.fillStyle='#fff';const L=r*3.6;cx.fillRect(X-L,Y-.5,L*2,1);cx.fillRect(X-.5,Y-L,1,L*2)}
  if(isS||hov&&hov.t===t){cx.globalAlpha=1;cx.strokeStyle='#fff';cx.lineWidth=1.5;cx.beginPath();cx.arc(X,Y,r+9+(isS?2*Math.sin(T*5):0),0,6.283);cx.stroke()}
  if((zm>1.15&&dep>.4)||isS||(hov&&hov.t===t))lab.push([X,Y+r+18*sc,t.l.length>26?t.l.slice(0,25)+'…':t.l,dep])});
 cx.globalCompositeOperation='source-over';cx.textAlign='center';cx.lineJoin='round';cx.strokeStyle='rgba(2,3,10,.75)';cx.lineWidth=3;
 lab.forEach(([x,y,l,d])=>{cx.globalAlpha=Math.min(1,d+.25);cx.font='600 11px Inter,sans-serif';cx.strokeText(l,x,y);cx.fillStyle='#e8ecff';cx.fillText(l,x,y)});
 subs.forEach(s=>{const p=pr(s.x,s.y+108,s.z),dep=Math.max(.15,Math.min(1,(p[3]+500)/700)),m=s.tops.reduce((a,t)=>a+mast(s,t),0)/s.tops.length,tx=s.e+' '+s.n+' · '+Math.round(m*100)+'%';cx.globalAlpha=dep;cx.font=`700 ${Math.round(12*p[2]+1)}px Inter,sans-serif`;cx.strokeText(tx,p[0],p[1]);cx.fillStyle='#f1f4ff';cx.fillText(tx,p[0],p[1])});cx.globalAlpha=1}
function open(){document.documentElement.classList.add('cn-open');build();if(!ov)mk();sel=null;zm=.5;zT=1;ov.style.display='block';size();legend();cancelAnimationFrame(raf);loop()}
function close(){document.documentElement.classList.remove('cn-open');ov.style.display='none';cancelAnimationFrame(raf);tt.style.display='none';tile()}
const btn=document.createElement('button');btn.id='cnbtn';btn.className='btn btn-s';btn.style.cssText='padding:.35rem .8rem;font-size:.8rem;margin-right:.6rem';btn.innerHTML='🌌<span>Constellation</span>';btn.onclick=open;
const anchor=document.getElementById('uchip')||document.getElementById('hubxp')||document.getElementById('hdrq');if(anchor)anchor.parentNode.insertBefore(btn,anchor);
function tile(){const b=document.getElementById('bento');if(!b)return;const st=stats();let t=document.getElementById('cntile');if(!t){t=document.createElement('button');t.id='cntile';t.className='bt';t.style.cssText='grid-column:1/-1;text-align:left;cursor:pointer;background:radial-gradient(500px 160px at 90% 50%,rgba(99,102,241,.28),transparent 70%),var(--glass)';t.onclick=open;b.appendChild(t)}
 t.innerHTML=`<span class="lb">Constellation</span><h3 style="font-size:1.2rem;margin:.3rem 0 .2rem">🌌 ${st.lit} of ${st.tot} stars lit</h3><p class="sb" style="margin:0 0 .7rem">Every correct answer lights up a topic. Open the 3D map to see your whole sky.</p><div class="bar"><i style="width:${Math.max(2,st.pct)}%"></i></div>`}
new MutationObserver(()=>{if(document.getElementById('bento')&&!document.getElementById('cntile'))tile()}).observe(document.body,{childList:true,subtree:true});tile();
})();
