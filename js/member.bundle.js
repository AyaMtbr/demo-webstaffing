(()=>{var t={247:()=>{window.addEventListener("load",(()=>{const t=document.querySelectorAll(".menu_item"),e=document.querySelector(".menu_mobile");function o(){const t=document.querySelector(".menu_toggle_btn");t.addEventListener("click",(()=>{t.classList.add("active"),e.classList.add("opened"),document.querySelector(".menu_toggle_btn.active").addEventListener("click",(()=>{n()}))}))}function n(){const t=document.querySelector(".menu_toggle_btn"),n=t.getAttribute("class").split(" ");"active"===n[n.length-1]&&(t.classList.remove("active"),e.classList.remove("opened"),o())}setTimeout((function(){document.body.classList.remove("slide_in")}),1),o(),t.forEach((t=>{t.addEventListener("click",(e=>{e.preventDefault();const o=t.getAttribute("href"),r=o.split("#")[1],s=document.getElementById(r);if(n(),s){const t=s.offsetTop;window.scrollTo({top:t,behavior:"smooth"})}else document.body.classList.add("slide_in"),setTimeout((function(){window.location=o}),700)}))})),ScrollTrigger.create({trigger:".sec_top",start:"bottom 10%",end:99999,toggleClass:{targets:".menu_toggle_btn",className:"scrolled"}})}))}},e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={exports:{}};return t[n](r,r.exports,o),r.exports}(()=>{"use strict";o(247);window.addEventListener("load",(()=>{gsap.utils.toArray(".anim_text").forEach(((t,e)=>{const o=gsap.fromTo(t,{autoAlpha:0,y:50},{autoAlpha:1,y:0,duration:1});ScrollTrigger.create({trigger:t,start:"top bottom",animation:o,invalidateOnRefresh:!0})})),gsap.utils.toArray(".anim_img_mask").forEach(((t,e)=>{const o=gsap.fromTo(t,{x:0},{x:"100%",duration:1});ScrollTrigger.create({trigger:t,start:"top bottom",animation:o,invalidateOnRefresh:!0})}))}))})()})();