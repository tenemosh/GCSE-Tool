/* per-user storage namespace: progress, XP and scores are kept separately for each profile on this device */
(()=>{const S=Storage.prototype,g=S.getItem,s=S.setItem,r=S.removeItem,P=/^(bm_prog3|sjb_|sjs_|hub_xp|hub_best)/;let U=null;try{U=g.call(localStorage,'hub_cur')}catch(e){}
const k=x=>U&&P.test(x)?'u:'+U+':'+x:x;S.getItem=function(x){return g.call(this,this===localStorage?k(x):x)};S.setItem=function(x,v){return s.call(this,this===localStorage?k(x):x,v)};S.removeItem=function(x){return r.call(this,this===localStorage?k(x):x)};})();
