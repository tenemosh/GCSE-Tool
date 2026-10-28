(()=>{const c=document.createElement('canvas');c.id='siteSky';document.body.prepend(c);['','b'].forEach(k=>{const d=document.createElement('div');d.className='shoot '+k;document.body.prepend(d)});
const rg=s=>{let a=s;return()=>{a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}},sp={};
const spr=col=>{if(sp[col])return sp[col];const k=document.createElement('canvas');k.width=k.height=128;const g=k.getContext('2d'),r=g.createRadialGradient(64,64,0,64,64,64);r.addColorStop(0,col+'ff');r.addColorStop(.3,col+'77');r.addColorStop(.65,col+'22');r.addColorStop(1,col+'00');g.fillStyle=r;g.fillRect(0,0,128,128);return sp[col]=k};
function draw(){const W=innerWidth,H=innerHeight,d=Math.min(devicePixelRatio||1,1.5);c.width=W*d;c.height=H*d;const g=c.getContext('2d');g.setTransform(d,0,0,d,0,0);const R=rg('site');
 const bg=g.createLinearGradient(0,0,0,H);bg.addColorStop(0,'#02030a');bg.addColorStop(.5,'#080c28');bg.addColorStop(.86,'#16224d');bg.addColorStop(1,'#2b2149');g.fillStyle=bg;g.fillRect(0,0,W,H);
 const cx=W*.5,cy=H*1.12,rx=W*.66,ry=H*1.02,pt=(u,off)=>{const a=Math.PI+.2+u*(Math.PI-.4),x=cx+rx*Math.cos(a),y=cy+ry*Math.sin(a),nx=Math.cos(a)/rx,ny=Math.sin(a)/ry,l=Math.hypot(nx,ny);return[x+nx/l*off,y+ny/l*off]};
 const cool=['#8b5cf6','#a855f7','#ec4899','#38bdf8','#6366f1','#c084fc'],warm=['#fbbf24','#fb923c','#f59e0b'];
 g.globalCompositeOperation='lighter';const sc=Math.max(W,H)/1400;
 for(let i=0;i<140;i++){const u=R(),[x,y]=pt(u,(R()-.5)*H*.22),w=u>.72,col=w?warm[i%3]:cool[i%6],r=(70+R()*190)*sc;g.globalAlpha=(.08+R()*.18)*(w?1.2:1);g.drawImage(spr(col),x-r,y-r,2*r,2*r)}
 {const[x,y]=pt(.86,0),r=380*sc;g.globalAlpha=.34;g.drawImage(spr('#fbbf24'),x-r,y-r,2*r,2*r);g.globalAlpha=.3;g.drawImage(spr('#fff1c9'),x-r*.4,y-r*.4,r*.8,r*.8)}
 for(let i=0;i<26;i++){const[x,y]=pt(R(),(R()-.5)*H*.2),r=(30+R()*60)*sc;g.globalAlpha=.4;g.drawImage(spr('#ec4899'),x-r,y-r,2*r,2*r)}
 for(let i=0;i<12;i++){const x=R()*W,y=R()*H*.7,r=(160+R()*260)*sc;g.globalAlpha=.07+R()*.07;g.drawImage(spr(['#6d28d9','#2563eb','#c026d3','#0ea5e9'][i%4]),x-r,y-r,2*r,2*r)}
 g.globalCompositeOperation='source-over';for(let i=0;i<48;i++){const[x,y]=pt(R(),(R()-.5)*H*.12),r=(40+R()*100)*sc;g.globalAlpha=.25+R()*.25;g.drawImage(spr('#02030a'),x-r,y-r,2*r,2*r)}
 g.globalCompositeOperation='lighter';const cols=['#cfe0ff','#ffffff','#ffe9cc','#bcd2ff','#ffd3e8'],n=Math.round(W*H/520),big=[];
 for(let i=0;i<n;i++){let x,y;if(R()<.6){[x,y]=pt(R(),(R()+R()+R()-1.5)*H*.3)}else{x=R()*W;y=R()*H}const q=R(),z=.6+q*q*1.6;g.globalAlpha=.2+.8*q**2.5;g.fillStyle=cols[i%5];g.fillRect(x,y,z,z);if(q>.996)big.push([x,y])}
 big.forEach(([x,y])=>{g.globalAlpha=.8;g.drawImage(spr('#cfe0ff'),x-9,y-9,18,18);g.globalAlpha=.5;g.fillStyle='#fff';g.fillRect(x-12,y-.5,24,1);g.fillRect(x-.5,y-12,1,24)});
 g.globalCompositeOperation='source-over';g.globalAlpha=1;const hz=g.createLinearGradient(0,H*.78,0,H);hz.addColorStop(0,'rgba(90,150,210,0)');hz.addColorStop(.7,'rgba(240,130,150,.18)');hz.addColorStop(1,'rgba(255,160,90,.34)');g.fillStyle=hz;g.fillRect(0,H*.78,W,H*.22);
 const hill=(o,amp,fr,ph,c1,c2)=>{const gr=g.createLinearGradient(0,H*.86,0,H);gr.addColorStop(0,c1);gr.addColorStop(1,c2);g.fillStyle=gr;g.beginPath();g.moveTo(0,H);for(let x=0;x<=W;x+=5)g.lineTo(x,H*o-amp*(Math.sin(x*fr+ph)*.6+Math.sin(x*fr*2.3+ph*1.7)*.3+Math.sin(x*fr*5.1)*.1));g.lineTo(W,H);g.fill()};
 hill(.935,30,.0032,1,'#1b2554','#0c1130');hill(.965,22,.0052,3,'#0b1030','#070a1e');hill(.99,14,.0078,5,'#04050c','#02030a')}
draw();let t;addEventListener('resize',()=>{clearTimeout(t);t=setTimeout(draw,200)})})();
