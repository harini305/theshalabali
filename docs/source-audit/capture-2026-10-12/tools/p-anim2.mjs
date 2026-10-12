export default async ({ evalJs, sleep }) => {
  const q = `[...document.querySelectorAll('body *')].filter(e=>{const a=getComputedStyle(e).animationName;return a&&a!=='none'}).map(e=>{const cs=getComputedStyle(e);return {id:e.id,cls:String(e.getAttribute('class')||'').slice(0,40),anim:cs.animationName,dur:cs.animationDuration,delay:cs.animationDelay,ease:cs.animationTimingFunction,txt:(e.innerText||'').slice(0,30),top:Math.round(e.getBoundingClientRect().top+scrollY)}})`;
  const a0 = await evalJs(q);
  const h = await evalJs('document.documentElement.scrollHeight');
  const seen = [];
  for (let y = 0; y < h; y += 300) { await evalJs(`scrollTo(0,${y})`); await sleep(120); const r = await evalJs(q); if(!Array.isArray(r)){seen.push({err:r});break;} r.forEach(x => { if (!seen.find(s => s.id === x.id && s.anim === x.anim)) seen.push({ ...x, atScroll: y }); }); }
  const kf = await evalJs(`(()=>{const o={};for(const ss of document.styleSheets){let r;try{r=ss.cssRules}catch(e){continue}for(const x of r){if(x.type===7&&/motion|DjtvJd|U4gKpz/.test(x.name))o[x.name]=x.cssText.slice(0,300)}}return o})()`);
  const tr = await evalJs(`[...document.querySelectorAll('[data-motion-part],[data-motion-enter]')].slice(0,5).map(e=>e.outerHTML.slice(0,200))`);
  return { initial: a0.length, seen: seen.slice(0, 60), kf, tr };
};
