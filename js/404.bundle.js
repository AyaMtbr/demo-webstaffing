window.addEventListener("load",(()=>{const e=document.querySelectorAll(".menu_item"),t=document.querySelector(".menu_mobile"),o=document.querySelector(".up_btn"),n=document.body.offsetHeight;function c(){const e=document.querySelector(".menu_toggle_btn");e.addEventListener("click",(()=>{e.classList.add("active"),t.classList.add("opened"),document.querySelector(".menu_toggle_btn.active").addEventListener("click",(()=>{s()}))}))}function s(){const e=document.querySelector(".menu_toggle_btn"),o=e.getAttribute("class").split(" ");"active"===o[o.length-1]&&(e.classList.remove("active"),t.classList.remove("opened"),c())}setTimeout((function(){document.body.classList.remove("fade_in")}),500),c(),e.forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault();const o=e.getAttribute("href"),n=o.split("#")[1],c=document.getElementById(n);if(s(),c){const e=c.offsetTop;window.scrollTo({top:e,behavior:"smooth"})}else document.body.classList.add("fade_in"),setTimeout((function(){window.location=o}),500)}))})),o.addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})})),ScrollTrigger.create({trigger:".sec_top",start:"top"+n,end:99999,toggleClass:{targets:".up_btn",className:"scrolled"}}),ScrollTrigger.create({trigger:".sec_top",start:"bottom 10%",end:99999,toggleClass:{targets:".menu_toggle_btn",className:"scrolled"}})}));