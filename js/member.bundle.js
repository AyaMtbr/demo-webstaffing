(()=>{var t={247:()=>{window.addEventListener("load",(()=>{const t=document.querySelectorAll(".menu_item"),e=document.querySelector(".menu_mobile"),o=document.querySelector(".up_btn"),r=document.body.offsetHeight;function n(){const t=document.querySelector(".menu_toggle_btn");t.addEventListener("click",(()=>{t.classList.add("active"),e.classList.add("opened"),document.querySelector(".menu_toggle_btn.active").addEventListener("click",(()=>{s()}))}))}function s(){const t=document.querySelector(".menu_toggle_btn"),o=t.getAttribute("class").split(" ");"active"===o[o.length-1]&&(t.classList.remove("active"),e.classList.remove("opened"),n())}setTimeout((function(){document.body.classList.remove("fade_in")}),500),n(),t.forEach((t=>{t.addEventListener("click",(e=>{e.preventDefault();const o=t.getAttribute("href"),r=o.split("#")[1],n=document.getElementById(r);if(s(),n){const t=n.offsetTop;window.scrollTo({top:t,behavior:"smooth"})}else document.body.classList.add("fade_in"),setTimeout((function(){window.location=o}),500)}))})),o.addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})})),ScrollTrigger.create({trigger:".sec_top",start:"top"+r,end:99999,toggleClass:{targets:".up_btn",className:"scrolled"}}),ScrollTrigger.create({trigger:".sec_top",start:"bottom 10%",end:99999,toggleClass:{targets:".menu_toggle_btn",className:"scrolled"}})}))}},e={};function o(r){if(e[r])return e[r].exports;var n=e[r]={exports:{}};return t[r](n,n.exports,o),n.exports}(()=>{"use strict";o(247);window.addEventListener("load",(()=>{gsap.utils.toArray(".anim_text").forEach(((t,e)=>{const o=gsap.fromTo(t,{autoAlpha:0,y:50},{autoAlpha:1,y:0,duration:1});ScrollTrigger.create({trigger:t,start:"top bottom",animation:o,invalidateOnRefresh:!0})})),gsap.utils.toArray(".anim_img_mask").forEach(((t,e)=>{const o=gsap.fromTo(t,{x:0},{x:"100%",duration:1});ScrollTrigger.create({trigger:t,start:"top bottom",animation:o,invalidateOnRefresh:!0})}))}))})()})();