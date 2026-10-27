(function(){
 'use strict';
 function enrollmentURL(){
  const u=new URL(location.href);
  const root=u.pathname.split('/blueprint-attendees-7q4x/')[0]+'/blueprint-attendees-7q4x/';
  u.pathname=root+'blueprint/';u.hash='';
  const code=document.getElementById('codeInput')?.value||window.LLA_PROMO?.code||u.searchParams.get('code')||'JULIE249';
  if(['JULIE249','MASTERCLASS-VIP'].includes(code.trim().toUpperCase()))u.searchParams.set('code',code.trim().toUpperCase());
  u.searchParams.set('plan','monthly');u.searchParams.set('enroll','1');return u.href;
 }
 function apply(){
  const hero=document.getElementById('hero'),pillars=document.getElementById('learn-com'),syllabus=document.getElementById('syllabus'),offer=document.getElementById('offer');
  document.getElementById('vip')?.remove();
  if(hero&&pillars&&syllabus&&offer){
   if(hero.nextElementSibling!==pillars)hero.insertAdjacentElement('afterend',pillars);
   if(pillars.nextElementSibling!==syllabus)pillars.insertAdjacentElement('afterend',syllabus);
   if(syllabus.nextElementSibling!==offer)syllabus.insertAdjacentElement('afterend',offer);
  }
  document.querySelectorAll('#hero .pdp-cine-cta,header .fn-nav-pill,#mockBar a').forEach(a=>{
   a.href=enrollmentURL();a.dataset.enrollCourse='1';if(a.textContent!=='Enroll now')a.textContent='Enroll now';
  });
  const bar=document.getElementById('mockBar');
  if(bar){bar.classList.add('on');const title=bar.querySelector('.l i');if(title)title.textContent='The Longevity Blueprint';const label=bar.querySelector('.l b');if(label)label.textContent='$79 month 1';}
  if(hero&&!document.getElementById('heroCouponNote')){
   const cta=hero.querySelector('.pdp-cine-cta');
   if(cta)cta.insertAdjacentHTML('afterend','<p id="heroCouponNote">Masterclass credit · <b>JULIE249</b> / <b>MASTERCLASS-VIP</b></p>');
  }
 }
 window.addEventListener('click',e=>{
  if(!e.target.closest('[data-enroll-course]'))return;
  e.preventDefault();e.stopImmediatePropagation();
  const modal=document.getElementById('enrollModal');
  if(location.pathname.includes('/blueprint/')&&modal){modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';}
  else location.assign(enrollmentURL());
 },true);
 apply();document.addEventListener('DOMContentLoaded',apply);window.addEventListener('load',apply);
 setTimeout(apply,1300);setTimeout(apply,3000);
})();
