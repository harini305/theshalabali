export default async ({ evalJs, sleep }) => {
  const q = `(()=>{const c={};const ex=[];document.querySelectorAll('body *').forEach(e=>{const cs=getComputedStyle(e);const a=cs.animationName;if(!a||a==='none')return;c[a]=(c[a]||0)+1;if(ex.length<25&&!/spin|load|pulse|U4gKpz|DjtvJd/i.test(a))ex.push({id:e.id,anim:a,dur:cs.animationDuration,delay:cs.animationDelay,ease:cs.animationTimingFunction,fill:cs.animationFillMode,txt:(e.innerText||'').slice(0,40),top:Math.round(e.getBoundingClientRect().top+scrollY)})});return {c,ex}})()`;
  const r0 = await evalJs(q);
  const h = await evalJs('document.documentElement.scrollHeight');
  const later = [];
  for (let y = 300; y < h; y += 400) { await evalJs(`scrollTo(0,${y})`); await sleep(150); const r = await evalJs(q); later.push({ y, c: r.c, ex: r.ex.filter(x => !r0.ex.find(z => z.id === x.id)).slice(0, 6) }); }
  const trans = await evalJs(`[...document.querySelectorAll('a,button,img,[data-testid=linkElement]')].map(e=>getComputedStyle(e).transition).filter(t=>t&&!/^all 0s/.test(t)).slice(0,15)`);
  return { r0, later, trans };
};
