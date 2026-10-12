import sys,struct,zlib,glob,os
for f in sorted(glob.glob(os.path.join(sys.argv[1],'*.woff'))):
    b=open(f,'rb').read()
    n=struct.unpack('>H',b[12:14])[0]
    for i in range(n):
        tag,off,clen,olen,_=struct.unpack('>4sIIII',b[44+i*20:64+i*20])
        if tag!=b'name':continue
        d=b[off:off+clen]; d=zlib.decompress(d) if clen<olen else d
        cnt,so=struct.unpack('>HH',d[2:6]);names={}
        for j in range(cnt):
            pid,eid,lid,nid,ln,o=struct.unpack('>6H',d[6+j*12:18+j*12])
            if nid in(0,1,4,13,14) and nid not in names:
                s=d[so+o:so+o+ln]
                try: names[nid]=s.decode('utf-16-be') if pid in(0,3) else s.decode('latin1')
                except: pass
        print(os.path.basename(f),'|',names.get(1),'|',names.get(4),'|',(names.get(0) or '')[:90],'|',(names.get(13) or '')[:60])
