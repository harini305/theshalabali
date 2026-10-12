import urllib.request, json, concurrent.futures as cf
ids=[l.strip() for l in open('img-ids.txt') if l.strip()]
def head(u):
    try:
        r=urllib.request.urlopen(urllib.request.Request(u,method='HEAD',headers={'User-Agent':'Mozilla/5.0'}),timeout=30)
        return r.status, r.headers.get('Content-Type'), int(r.headers.get('Content-Length') or 0)
    except urllib.error.HTTPError as e: return e.code,None,0
    except Exception as e: return str(e)[:40],None,0
res={}
with cf.ThreadPoolExecutor(12) as ex:
    for i,r in zip(ids, ex.map(lambda i: head('https://static.wixstatic.com/media/'+i), ids)): res[i]=r
# videos
vids=[l.strip() for l in open('vid-ids.txt') if l.strip()]
vres={}
for v in vids:
    vres[v]={q:head(f'https://video.wixstatic.com/video/{v}/{q}/mp4/file.mp4') for q in ('1080p','720p','480p','360p')}
json.dump({'images':res,'videos':vres},open('head-results.json','w'),indent=1)
from collections import Counter
print(Counter(r[0] for r in res.values()))
print('non200',[ (k,v) for k,v in res.items() if v[0]!=200])
print('total MB of 200s', sum(v[2] for v in res.values() if v[0]==200)/1e6)
for v,q in vres.items(): print(v, {k:(x[0], round(x[2]/1e6,1)) for k,x in q.items()})
