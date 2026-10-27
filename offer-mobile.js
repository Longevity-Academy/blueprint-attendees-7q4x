(function(){
 'use strict';
 const rail=document.querySelector('#offer .lp-bul');
 if(!rail)return;
 rail.id='courseBenefitsRail';rail.tabIndex=0;
 rail.setAttribute('aria-label','What your course includes. Swipe or use the arrow buttons.');
 const intro=document.createElement('p');intro.className='benefit-summary';
 intro.textContent='18 live classes · 6 pillars · CGM included · Your personal protocol';
 rail.before(intro);
 const controls=document.createElement('div');controls.className='benefit-controls';
 controls.innerHTML='<button type="button" data-benefit-step="-1" aria-label="Previous course benefit" aria-controls="courseBenefitsRail">←</button><span><span class="benefit-count" aria-live="polite">1 / 4</span><span class="benefit-hint">Swipe to explore</span></span><button type="button" data-benefit-step="1" aria-label="Next course benefit" aria-controls="courseBenefitsRail">→</button>';
 rail.after(controls);
 function index(){const step=rail.firstElementChild.getBoundingClientRect().width+12;return Math.max(0,Math.min(rail.children.length-1,Math.round(rail.scrollLeft/step)))}
 function update(){const i=index();controls.querySelector('.benefit-count').textContent=(i+1)+' / '+rail.children.length;controls.querySelector('[data-benefit-step="-1"]').disabled=i===0;controls.querySelector('[data-benefit-step="1"]').disabled=i===rail.children.length-1}
 function move(n){const i=Math.max(0,Math.min(rail.children.length-1,index()+n));rail.scrollTo({left:rail.children[i].offsetLeft-rail.firstElementChild.offsetLeft,behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth'})}
 controls.addEventListener('click',e=>{const b=e.target.closest('[data-benefit-step]');if(b)move(Number(b.dataset.benefitStep))});
 rail.addEventListener('keydown',e=>{if(e.target===rail&&['ArrowLeft','ArrowRight'].includes(e.key)){e.preventDefault();move(e.key==='ArrowRight'?1:-1)}});
 rail.addEventListener('scroll',update,{passive:true});addEventListener('resize',update);update();
 const wa=document.querySelector('#et-bumpyard-widget img');
 if(wa)wa.src=new URL('blueprint/assets/wa/whatsapp.svg',document.currentScript.src).href;
})();
