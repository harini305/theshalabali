import json,glob,os,re,collections
ids=collections.defaultdict(set)
mbp=json.load(open('/d/clone2/docs/source-audit/media-by-page.json'.replace('/d/','D:/'),encoding='utf-8'))
for k,v in mbp.items():
    for p in v: ids[k].add(p)
vids=collections.defaultdict(set)
for f in glob.glob('shots/*.json'):
    slug=os.path.basename(f).rsplit('-',1)[0]
    d=json.load(open(f,encoding='utf-8'))
    for im in d['images']+d['bgImages']:
        m=re.search(r'media/([0-9a-f]{6}_[0-9a-f]+(?:~mv2)?(?:f\d+)?\.[a-zA-Z0-9]+|[0-9a-f]{32}\.(?:png|jpg))',im['src'])
        if m: ids[m.group(1)].add(slug)
    for v in d['videos']:
        m=re.search(r'video/([0-9a-f]{6}_[0-9a-f]+)/',v['src'])
        if m: vids[m.group(1)].add(slug)
json.dump({'images':{k:sorted(v) for k,v in ids.items()},'videos':{k:sorted(v) for k,v in vids.items()}},open('asset-ids.json','w'),indent=1)
own=[k for k in ids if k.startswith('4c89f1_')]
print('all',len(ids),'owner',len(own),'other prefixes',collections.Counter(k[:6] for k in ids if not k.startswith('4c89f1')).most_common(8))
print('videos',dict(vids))
