/* comu.js — biblioteca estàndard de les figures de pista del projecte geom.
 *
 * Carregar SEMPRE després de hand-draw.js i abans del fitxer de figures:
 *   <script src="hand-draw.js"></script>
 *   <script src="comu.js"></script>
 *   <script src="figures-NN.js"></script>
 *
 * Aquest és el codi EXACTE amb què es van generar les figures fig-001..013.
 * No el reescriguis "equivalent": qualsevol canvi en el nombre o l'ordre de
 * crides a rand() desplaça el flux pseudoaleatori i el lot 1 deixa de ser
 * reproduïble.
 */

const SANG='#b0453a', INK='#1a1a1a', PAPER='#faf6ec';
function mk(id,w,h){const c=document.createElement('canvas');c.id=id;c.width=w;c.height=h;
  document.body.appendChild(c);const x=c.getContext('2d');x.fillStyle=PAPER;x.fillRect(0,0,w,h);return x;}
function lbl(ctx,t,x,y,col,size,style){ctx.font=(style||'italic ')+(size||30)+'px Georgia';
  ctx.fillStyle=col||SANG;ctx.fillText(t,x,y);}
// Soroll gaussià de mitjana 0 (Box-Muller). L'escala s'expressa com a % de la
// dimensió característica de la figura: 1% = el que una mà no encerta quan ha de
// clavar 90° o repetir una longitud (v. tècnica §1.4).
function gauss(hd){let u=0,v=0;while(u===0)u=hd.rand();while(v===0)v=hd.rand();
  return Math.sqrt(-2*Math.log(u))*Math.cos(2*Math.PI*v);}
function jit(hd,p,scale,pct){const k=scale*((pct||1)/100);
  return {x:p.x+gauss(hd)*k, y:p.y+gauss(hd)*k};}
function quad(hd,x,y,w,h,scale,opts){       // rectangle "de mà": cap angle exactament 90°
  const c=[{x:x,y:y},{x:x+w,y:y},{x:x+w,y:y+h},{x:x,y:y+h}].map(p=>jit(hd,p,scale));
  for(let i=0;i<4;i++)hd.handSegment(c[i].x,c[i].y,c[(i+1)%4].x,c[(i+1)%4].y,opts||{lineWidth:3.2,color:INK});
  return c;}
function onSeg(p,q,f){return {x:p.x+(q.x-p.x)*f, y:p.y+(q.y-p.y)*f};}
function lblC(ctx,t,cx,cy,col,size){const S=size||30;ctx.font='italic '+S+'px Georgia';
  ctx.fillStyle=col||SANG;const m=ctx.measureText(t);ctx.fillText(t,cx-m.width/2,cy+S*0.34);}
function angleMark(hd,vx,vy,ax,ay,bx,by,r,n,col){
  const a0=Math.atan2(ay-vy,ax-vx),a1=Math.atan2(by-vy,bx-vx);
  let d=a1-a0;while(d>Math.PI)d-=2*Math.PI;while(d<-Math.PI)d+=2*Math.PI;
  for(let k=0;k<n;k++)hd.handEllipse(vx,vy,r+k*8,r+k*8,
    {startAngle:a0,endAngle:a0+d,passes:1,lineWidth:2,irregularity:0.015,color:col||SANG});}
// marca d'igualtat: ratlleta travessera al mig d'un segment
function tick(hd,x0,y0,x1,y1,col){
  const mx=(x0+x1)/2,my=(y0+y1)/2,dx=x1-x0,dy=y1-y0,L=Math.hypot(dx,dy);
  const px=-dy/L*13,py=dx/L*13;
  hd.handSegment(mx-px,my-py,mx+px,my+py,{lineWidth:2.4,passes:1,overshoot:1,color:col||SANG});}
// angle recte
function rightAngle(hd,vx,vy,ux,uy,wx,wy,s,col){
  const n1=Math.hypot(ux-vx,uy-vy),n2=Math.hypot(wx-vx,wy-vy);
  const a={x:vx+(ux-vx)/n1*s,y:vy+(uy-vy)/n1*s},b={x:vx+(wx-vx)/n2*s,y:vy+(wy-vy)/n2*s};
  const c={x:a.x+b.x-vx,y:a.y+b.y-vy};
  hd.handSegment(a.x,a.y,c.x,c.y,{lineWidth:2,passes:1,overshoot:1,color:col||SANG});
  hd.handSegment(c.x,c.y,b.x,b.y,{lineWidth:2,passes:1,overshoot:1,color:col||SANG});}
