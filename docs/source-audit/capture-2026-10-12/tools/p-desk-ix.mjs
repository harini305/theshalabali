const D = 'C:/Users/Harini/AppData/Local/Temp/claude/d--clone2/59868f5f-6f7e-4326-b92d-a95ce76a2f95/scratchpad/ix/';
export default async ({ send, evalJs, sleep, shot }) => {
  const out = {};
  const pos = async txt => evalJs(`(()=>{const e=[...document.querySelectorAll('#SITE_HEADER p, #SITE_HEADER li, #SITE_HEADER a')].find(x=>x.innerText.trim()===${JSON.stringify(txt)});if(!e)return null;const r=e.getBoundingClientRect();return [r.left+r.width/2,r.top+r.height/2]})()`);
  const hover = async ([x, y]) => send('Input.dispatchMouseEvent', { type: 'mouseMoved', x, y });
  let p = await pos('Accommodation') || await pos('More');
  out.accPos = p;
  if (p) { await hover(p); await sleep(900); await shot(D + 'dropdown-acc.jpg'); out.acc = await evalJs(`[...document.querySelectorAll('#SITE_HEADER a')].filter(a=>{const r=a.getBoundingClientRect();return r.top>60&&r.height>0}).map(a=>{const cs=getComputedStyle(a);const r=a.getBoundingClientRect();return [a.innerText.trim(),Math.round(r.left),Math.round(r.top),Math.round(r.width),Math.round(r.height),cs.backgroundColor,cs.color]})`); }
  // nav hover colour
  const h = await pos('Host a retreat'); await hover(h); await sleep(700);
  out.navHover = await evalJs(`(()=>{const e=[...document.querySelectorAll('#SITE_HEADER p')].find(x=>x.innerText.trim()==='Host a retreat');return [getComputedStyle(e).color, getComputedStyle(e.closest('li')||e).backgroundColor]})()`);
  const m = await pos('More'); out.morePos = m;
  if (m) { await hover(m); await sleep(900); await shot(D + 'dropdown-more.jpg'); out.more = await evalJs(`[...document.querySelectorAll('#SITE_HEADER a')].filter(a=>{const r=a.getBoundingClientRect();return r.top>60&&r.height>0}).map(a=>a.innerText.trim()+' '+a.getAttribute('href'))`); }
  return out;
};
