import json,glob,collections,re,os
core='home baliyogaretreat retreat-packages copy-of-retreat-packages copy-of-darshana-veda-spa darshanavedaspa mumbaistationindiancafe copy-of-villa-rooms copy-of-general copy-of-villa-rooms-1 copy-of-services faqs testamonials'.split()
tc=collections.Counter(); bc=collections.Counter(); btn=collections.Counter(); sz=collections.Counter()
for s in core:
    d=json.load(open(f'shots/{s}-1440.json',encoding='utf-8'))
    for t in d['texts']:
        if re.search('Jero|Smartarget|questions|Hello',t['t']): continue
        tc[t['c']]+=len(t['t']); sz[(t['ff'][:22],t['fs'],t['lh'])]+=len(t['t'])
    for x in d['sections']: bc[x['bg']]+=x['r'][2]*x['r'][3]//1000
    for b in d['buttons']:
        if b['t'] and b['r'][1]>80: btn[(b['bg'],b['border'],b['radius'],b['ff'][:24],b['fs'],b['c'])]+=1
print('TEXT COLORS');[print(' ',v,k) for k,v in tc.most_common(14)]
print('SECTION BG');[print(' ',v,k) for k,v in bc.most_common(10)]
print('BUTTON STYLES');[print(' ',v,k) for k,v in btn.most_common(14)]
print('FONT/SIZE/LH');[print(' ',v,k) for k,v in sz.most_common(30)]
