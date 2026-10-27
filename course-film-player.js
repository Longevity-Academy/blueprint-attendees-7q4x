(function(){
 'use strict';
 const video=document.getElementById('julie-approved-film');
 if(!video)return;
 const script=document.currentScript;
 // Local course-film copy: course/faculty/CGM closing cards, not the event adaptation.
 video.src=new URL('lp/julie-film-720p.mp4',script.src).href;
 video.poster=new URL('blueprint/assets/julie-approved-4k-poster.jpg',script.src).href;
 video.autoplay=true;video.muted=true;video.playsInline=true;video.controls=true;
 video.preload='metadata';video.removeAttribute('data-playback');
 video.setAttribute('aria-label','Julie Gibson Clark introduces the Longevity Blueprint course');
 video._julieRequestPlay=function(){const p=video.play();if(p)p.catch(()=>{video.dataset.playback='tap-to-play'})};
 video.addEventListener('playing',()=>{video.dataset.playback='playing'});
 video.addEventListener('loadeddata',video._julieRequestPlay,{once:true});
 video._julieRequestPlay();
})();
