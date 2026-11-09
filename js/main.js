const PHONE='201070665683',$=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const wa=t=>`https://wa.me/${PHONE}?text=${encodeURIComponent(t)}`;
const hi='أهلاً، شفت موقعك وعايز أعمل موقع لبراندي.';
['wa1','wa2','wafab'].forEach(i=>$('#'+i).href=wa(hi));
// language
const AR={},PH={};
$$('[data-i]').forEach(e=>AR[e.dataset.i]=e.textContent);
$$('[data-ph]').forEach(e=>PH[e.dataset.ph]=e.placeholder);
let lang='ar';
function setLang(l){lang=l;const en=l==='en';
 document.documentElement.lang=l;document.documentElement.dir=en?'ltr':'rtl';
 $$('[data-i]').forEach(e=>e.textContent=en?EN[e.dataset.i]:AR[e.dataset.i]);
 $$('[data-ph]').forEach(e=>e.placeholder=en?EN[e.dataset.ph]:PH[e.dataset.ph]);
 $('#lang').textContent=en?'عربي':'EN';
 try{localStorage.lang=l}catch(e){}}
$('#lang').onclick=()=>setLang(lang==='ar'?'en':'ar');
try{if(localStorage.lang==='en')setLang('en')}catch(e){}
// form -> whatsapp
$('#f').onsubmit=e=>{e.preventDefault();const d=new FormData(e.target),en=lang==='en';
 const t=en?`Hi, I'm ${d.get('n')}.\nBrand: ${d.get('b')}\nNeed: ${d.get('t')}\nIdea: ${d.get('m')}`
 :`أهلاً، أنا ${d.get('n')}.\nالبراند: ${d.get('b')}\nالمطلوب: ${d.get('t')}\nالفكرة: ${d.get('m')}`;
 window.open(wa(t),'_blank')};
const calm=matchMedia('(prefers-reduced-motion:reduce)').matches;
// scroll progress
addEventListener('scroll',()=>{const h=document.documentElement;
 $('#bar').style.transform=`scaleX(${scrollY/(h.scrollHeight-innerHeight)})`},{passive:true});
if(!calm){
 // reveal
 const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('on');io.unobserve(x.target)}}),{threshold:.15});
 $$('.card,.steps li,.work>*,details,h2').forEach(e=>{e.classList.add('rv');io.observe(e)});
 // glow follows pointer
 addEventListener('pointermove',e=>{const g=$('#glow');g.style.left=e.clientX+'px';g.style.top=e.clientY+'px'});
 // tilt
 $$('[data-tilt]').forEach(el=>{
  el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
   el.style.transform=`perspective(800px) rotateY(${x*8}deg) rotateX(${-y*8}deg)`});
  el.addEventListener('pointerleave',()=>el.style.transform='')});
}
// counters
const co=new IntersectionObserver(es=>es.forEach(x=>{if(!x.isIntersecting)return;co.unobserve(x.target);
 const to=+x.target.dataset.to;if(calm){x.target.textContent=to;return}
 let s=null;const f=t=>{s??=t;const p=Math.min((t-s)/1200,1);x.target.textContent=Math.round(to*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)};requestAnimationFrame(f)}));
$$('[data-to]').forEach(e=>co.observe(e));
