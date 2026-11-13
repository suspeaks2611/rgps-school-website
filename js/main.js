document.documentElement.classList.add('js-motion');
document.addEventListener('DOMContentLoaded',()=>{
 const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.primary-nav');
 if(toggle&&nav){toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!open));toggle.setAttribute('aria-label',open?'Open navigation':'Close navigation');nav.classList.toggle('is-open',!open)});nav.addEventListener('click',e=>{if(e.target.closest('a')){nav.classList.remove('is-open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open navigation')}});document.addEventListener('keydown',e=>{if(e.key==='Escape'){nav.classList.remove('is-open');toggle.setAttribute('aria-expanded','false')}})}
 const year=document.querySelector('[data-year]');if(year)year.textContent=new Date().getFullYear();
 const top=document.querySelector('.back-top');if(top){const update=()=>top.classList.toggle('is-visible',window.scrollY>450);window.addEventListener('scroll',update,{passive:true});update();top.addEventListener('click',()=>window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'}))}
 document.querySelectorAll('img').forEach(img=>{img.addEventListener('error',()=>{img.classList.add('image-failed');img.alt=(img.alt||'Image')+' (temporarily unavailable)';img.style.background='#e9eff5';img.style.minHeight='150px';},{once:true})});
});
