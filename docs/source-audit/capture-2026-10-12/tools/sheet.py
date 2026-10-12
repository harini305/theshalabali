import sys,os
from PIL import Image
d,out,slug=sys.argv[1],sys.argv[2],sys.argv[3]
cols=[]
for w,tw in ((1440,720),(768,384),(390,320)):
    p=os.path.join(d,f'{slug}-{w}.jpg')
    if not os.path.exists(p): continue
    im=Image.open(p); s=tw/im.width; cols.append(im.resize((tw,int(im.height*s))))
H=max(c.height for c in cols); W=sum(c.width for c in cols)+20*len(cols)
sh=Image.new('RGB',(W,H),(200,0,200)); x=0
for c in cols: sh.paste(c,(x,0)); x+=c.width+20
# split into chunks of 2400px height
n=0
for y in range(0,H,2400):
    sh.crop((0,y,W,min(H,y+2400))).save(os.path.join(out,f'{slug}-{n}.jpg'),quality=70); n+=1
print(slug,H,n)
