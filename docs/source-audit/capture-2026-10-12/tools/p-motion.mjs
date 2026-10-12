export default async ({ evalJs, sleep, send }) => {
  // record animation state of motion elements before & after they scroll into view
  const before = await evalJs(`[...document.querySelectorAll('[data-motion-enter]')].slice(0,40).map(e=>{const cs=getComputedStyle(e);return {id:e.id,enter:e.getAttribute('data-motion-enter'),anim:cs.animationName,dur:cs.animationDuration,delay:cs.animationDelay,ease:cs.animationTimingFunction,op:cs.opacity,tr:cs.transform.slice(0,40),txt:(e.innerText||'').slice(0,30),top:Math.round(e.getBoundingClientRect().top+scrollY)}})`);
  // capture keyframe definitions for the used animation names
  const kf = await evalJs(`(()=>{const out={};for(const ss of document.styleSheets){let rules;try{rules=ss.cssRules}catch(e){continue}for(const r of rules){if(r.type===7&&!out[r.name])out[r.name]=r.cssText.slice(0,400)}}return out})()`);
  const hoverRules = await evalJs(`(()=>{const out=[];for(const ss of document.styleSheets){let rules;try{rules=ss.cssRules}catch(e){continue}for(const r of rules){if(r.selectorText&&/:hover/.test(r.selectorText)&&/(color|background|opacity|transform|border|filter)/.test(r.style.cssText))out.push(r.selectorText.slice(0,120)+' {'+r.style.cssText.slice(0,200)+'}')}}return out.slice(0,80)})()`);
  return { before, usedAnims: [...new Set(before.map(b => b.anim))], keyframes: Object.fromEntries(Object.entries(kf).filter(([k]) => before.some(b => b.anim.includes(k)))), allKeyframeNames: Object.keys(kf), hoverRules };
};
