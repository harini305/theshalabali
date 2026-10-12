const D = 'C:/Users/Harini/AppData/Local/Temp/claude/d--clone2/59868f5f-6f7e-4326-b92d-a95ce76a2f95/scratchpad/ix/';
export default async ({ send, evalJs, sleep, shot }) => {
  const out = {};
  out.galleries = await evalJs(`[...document.querySelectorAll('[data-testid*=gallery i],[class*=gallery i],[id^=comp-][data-testid=slide-show-gallery]')].filter(g=>g.getBoundingClientRect().width>200).slice(0,8).map(g=>{const r=g.getBoundingClientRect();return [g.id,g.getAttribute('data-testid'),(g.getAttribute('class')||'').slice(0,50),Math.round(r.top+scrollY),Math.round(r.width),Math.round(r.height),g.querySelectorAll('img').length,!!g.querySelector('[aria-label*=next i],[data-testid*=arrow i],button')]})`);
  const img = await evalJs(`(()=>{const i=[...document.querySelectorAll('img')].filter(i=>i.getBoundingClientRect().width>150)[2];i.scrollIntoView({block:'center'});const r=i.getBoundingClientRect();return [r.left+r.width/2,r.top+r.height/2,i.src.slice(0,90)]})()`);
  await sleep(800); out.clicked = img;
  await send('Input.dispatchMouseEvent', { type: 'mousePressed', x: img[0], y: img[1], button: 'left', clickCount: 1 });
  await send('Input.dispatchMouseEvent', { type: 'mouseReleased', x: img[0], y: img[1], button: 'left', clickCount: 1 });
  await sleep(2000); await shot(D + 'gallery-click.jpg');
  out.after = await evalJs(`({url:location.href, dialogs:[...document.querySelectorAll('[role=dialog],[data-testid*=lightbox i],[class*=fullscreen i],[id*=POPUPS]')].filter(e=>e.getBoundingClientRect().width>0).map(e=>(e.getAttribute('data-testid')||e.id||e.getAttribute('class')).slice(0,60))})`);
  return out;
};
