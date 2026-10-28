(()=>{const LS=localStorage,raw=(k)=>{try{return LS.getItem(k)}catch(e){return null}},put=(k,v)=>{try{LS.setItem(k,v)}catch(e){}};
const AV=['🦊','🐼','🦁','🐙','🦄','🐸','🚀','⚡','🎧','🧠','🔥','🌟'];
let users=[];try{users=JSON.parse(raw('hub_users'))||[]}catch(e){}
const cur=raw('hub_cur'),me=users.find(u=>u.id===cur);
const save=()=>put('hub_users',JSON.stringify(users));
const css=document.createElement('style');css.textContent=`
#wl{position:fixed;inset:0;z-index:200;display:grid;place-items:center;padding:1rem;background:radial-gradient(700px 400px at 80% 0,rgba(168,85,247,.35),transparent 60%),radial-gradient(600px 400px at 0 100%,rgba(99,102,241,.4),transparent 60%),rgba(8,11,20,.88);backdrop-filter:blur(14px);animation:wf .4s}
@keyframes wf{from{opacity:0}}
#wl .bx{width:min(26rem,100%);background:var(--card);color:var(--ink);border:1px solid var(--line);border-radius:1.6rem;padding:2rem;box-shadow:0 40px 80px -30px #000;animation:up .5s cubic-bezier(.2,.8,.2,1)}
#wl h2{font-size:1.6rem;font-weight:800;line-height:1.1}#wl p{color:var(--mut);font-size:.9rem;margin:.5rem 0 1.2rem}
#wl .logo{display:grid;place-items:center;width:3rem;height:3rem;border-radius:1rem;color:#fff;font-size:1.3rem;margin-bottom:1rem;background:linear-gradient(135deg,#6366f1,#a855f7);box-shadow:0 12px 24px -8px rgba(124,58,237,.7)}
#wl input{width:100%;padding:.85rem 1rem;border:1.5px solid var(--line);border-radius:.9rem;background:var(--bg);color:var(--ink);font-size:1rem;font-weight:600;outline:none;transition:.15s}#wl input:focus{border-color:var(--acc);box-shadow:0 0 0 4px color-mix(in srgb,var(--acc) 18%,transparent)}
#wl .av{display:grid;grid-template-columns:repeat(6,1fr);gap:.4rem;margin:1rem 0}#wl .av button{aspect-ratio:1;border-radius:.8rem;border:1.5px solid var(--line);background:var(--bg);font-size:1.3rem;cursor:pointer;transition:.15s}#wl .av button:hover{transform:translateY(-2px)}#wl .av button.on{border-color:var(--acc);background:color-mix(in srgb,var(--acc) 14%,var(--card));transform:scale(1.08)}
#wl .er{color:#e11d48;font-size:.8rem;font-weight:600;min-height:1.1rem;margin-top:.4rem}
#wl .go{width:100%;justify-content:center;margin-top:.4rem;padding:.85rem}
#wl .pk{display:grid;gap:.5rem;margin-bottom:.8rem;max-height:40vh;overflow:auto}#wl .pk button{display:flex;align-items:center;gap:.8rem;padding:.8rem 1rem;border-radius:1rem;border:1.5px solid var(--line);background:var(--bg);color:var(--ink);font-weight:700;cursor:pointer;text-align:left;transition:.15s}#wl .pk button:hover{border-color:var(--acc);transform:translateY(-2px)}#wl .pk span{font-size:1.5rem}
#uchip{display:inline-flex;align-items:center;gap:.5rem;margin-right:.6rem;padding:.25rem .75rem .25rem .3rem;border-radius:99px;border:1px solid var(--line);background:var(--card);font-size:.8rem;font-weight:700;color:var(--ink);cursor:pointer;transition:.15s}#uchip:hover{border-color:var(--acc)}#uchip b{display:grid;place-items:center;width:1.7rem;height:1.7rem;border-radius:50%;background:linear-gradient(135deg,#6366f1,#a855f7);font-size:.95rem}
#umenu{position:fixed;z-index:120;min-width:12.5rem;padding:.4rem;border-radius:1rem;background:var(--card);border:1px solid var(--line);box-shadow:0 24px 50px -16px rgba(0,0,0,.4);animation:up .25s}#umenu button{display:block;width:100%;text-align:left;padding:.6rem .8rem;border-radius:.6rem;font-size:.85rem;font-weight:600;color:var(--ink);cursor:pointer}#umenu button:hover{background:color-mix(in srgb,var(--acc) 10%,var(--card))}#umenu .d{color:#e11d48}`;
document.head.appendChild(css);
const E=(t,c,x)=>{const e=document.createElement(t);if(c)e.className=c;if(x!=null)e.textContent=x;return e};
const norm=n=>n.trim().replace(/\s+/g,' ');
const pick=id=>{put('hub_cur',id);location.reload()};
function gate(mode){const w=E('div');w.id='wl';const b=E('div','bx');w.appendChild(b);document.body.appendChild(w);
 const first=!users.length;
 if(mode==='pick'){b.append(E('h2',0,'Who\'s revising?'),E('p',0,'Pick your profile to carry on where you left off.'));const l=E('div','pk');users.forEach(u=>{const x=E('button');x.append(E('span',0,u.a),E('div',0,u.n));x.onclick=()=>pick(u.id);l.appendChild(x)});b.appendChild(l);const n=E('button','btn btn-s go','+ New profile');n.onclick=()=>{w.remove();gate('new')};b.appendChild(n);return}
 const lg=E('div','logo','✦');let av=AV[Math.floor(Math.random()*AV.length)];
 const inp=E('input');inp.placeholder='e.g. Alex, Priya, Zed';inp.maxLength=16;inp.autocomplete='off';
 const er=E('div','er'),ag=E('div','av');
 AV.forEach(a=>{const x=E('button',a===av?'on':'',a);x.onclick=()=>{av=a;[...ag.children].forEach(c=>c.classList.toggle('on',c===x))};ag.appendChild(x)});
 const go=E('button','btn btn-p go',first?'Let\'s go →':'Create profile →');
 const done=()=>{const n=norm(inp.value);if(n.length<2)return er.textContent='Pick a name with at least 2 characters.';if(!/^[\p{L}\p{N} _\-.]+$/u.test(n))return er.textContent='Use letters, numbers, spaces, _ - or . only.';
  const id=n.toLowerCase();if(users.some(u=>u.id===id))return er.textContent='That name is taken on this device. Try another.';
  if(first)Object.keys(LS).filter(k=>/^(bm_prog3|sjb_|sjs_|hub_xp|hub_best)/.test(k)).forEach(k=>put('u:'+id+':'+k,LS.getItem(k)));
  users.push({id,n,a:av});save();pick(id)};
 go.onclick=done;inp.onkeydown=e=>{if(e.key==='Enter')done()};
 b.append(lg,E('h2',0,first?'Welcome! Choose your username':'New profile'),E('p',0,'Your progress, XP and scores are saved on this device under your name.'),inp,er,E('p',0,'Choose an avatar'),ag,go);
 if(users.length){const bk=E('button','btn btn-s go','← Back');bk.onclick=()=>{w.remove();gate('pick')};b.appendChild(bk)}
 setTimeout(()=>inp.focus(),80)}
if(!me){gate(users.length?'pick':'new');return}
const hx=document.getElementById('hubxp'),hdr=document.getElementById('hdrq');
const chip=E('button');chip.id='uchip';const bb=E('b',0,me.a);chip.append(bb,document.createTextNode(me.n));
(hx||hdr).parentNode.insertBefore(chip,hx||hdr);
chip.onclick=e=>{e.stopPropagation();const old=document.getElementById('umenu');if(old)return old.remove();const m=E('div');m.id='umenu';const r=chip.getBoundingClientRect();m.style.top=r.bottom+8+'px';m.style.left=Math.max(8,Math.min(r.left,innerWidth-210))+'px';
 const it=(t,f,c)=>{const x=E('button',c||'',t);x.onclick=f;m.appendChild(x)};
 it('🔄 Switch user',()=>{put('hub_cur','');location.reload()});
 it('✏️ Rename',()=>{const n=norm(prompt('New username:',me.n)||'');if(!n||n===me.n)return;const id=n.toLowerCase();if(n.length<2||n.length>16||(id!==me.id&&users.some(u=>u.id===id)))return alert('That name is not available.');
  Object.keys(LS).filter(k=>k.startsWith('u:'+me.id+':')).forEach(k=>{put('u:'+id+':'+k.slice(me.id.length+3),LS.getItem(k));LS.removeItem(k)});me.id=id;me.n=n;save();put('hub_cur',id);location.reload()});
 it('🗑️ Reset my progress',()=>{if(!confirm('Reset all progress, XP and scores for '+me.n+'? This cannot be undone.'))return;Object.keys(LS).filter(k=>k.startsWith('u:'+me.id+':')).forEach(k=>LS.removeItem(k));location.reload()},'d');
 document.body.appendChild(m);setTimeout(()=>document.addEventListener('click',()=>m.remove(),{once:true}),0)};
setTimeout(()=>{const t=document.getElementById('hubtoast');if(t){t.textContent='Welcome back, '+me.n+' '+me.a;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2200)}},500);
})();
