import json,glob,collections,re,os
c=collections.Counter(); pages=collections.defaultdict(set)
for f in glob.glob('shots/*-1440.json')+glob.glob('shots/*-390.json'):
    d=json.load(open(f,encoding='utf-8'))
    for t in d['texts']:
        if re.search('Jero|Smartarget|questions|Hello',t['t']): continue
        k=t['ff']; c[k]+=len(t['t']); pages[k].add(os.path.basename(f).rsplit('-',1)[0])
for k,v in c.most_common(): print(v,k,sorted(pages[k])[:8])
