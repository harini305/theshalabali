const D = 'C:/Users/Harini/AppData/Local/Temp/claude/d--clone2/59868f5f-6f7e-4326-b92d-a95ce76a2f95/scratchpad/ix/';
export default async ({ send, evalJs, sleep, shot }) => {
  const out = {};
  out.burger = await evalJs(`(()=>{const b=document.querySelector('[data-testid=tinymenu-menubutton]');if(!b)return null;const r=b.getBoundingClientRect();b.click();return [b.outerHTML.slice(0,160),r.left,r.top,r.width,r.height]})()`);
  await sleep(1500); await shot(D + 'mobile-menu.jpg');
  out.items = await evalJs(`[...document.querySelectorAll('#TINY_MENU a')].filter(a=>a.getBoundingClientRect().height>0).map(a=>{const cs=getComputedStyle(a);return [a.innerText.trim(),a.getAttribute('href'),cs.fontFamily.slice(0,30),cs.fontSize,cs.color,Math.round(a.getBoundingClientRect().height)]})`);
  out.overlay = await evalJs(`(()=>{const m=document.querySelector('#TINY_MENU ul, #TINY_MENU [role=menu], #TINY_MENU > div > div');if(!m)return null;const cs=getComputedStyle(m);const r=m.getBoundingClientRect();return [r.left,r.top,r.width,r.height,cs.backgroundColor,cs.transition]})()`);
  return out;
};
