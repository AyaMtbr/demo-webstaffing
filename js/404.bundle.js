window.addEventListener("load",(()=>{const e=document.querySelectorAll(".menu_item"),t=document.querySelector(".menu_mobile");function o(){const e=document.querySelector(".menu_toggle_btn");e.addEventListener("click",(()=>{e.classList.add("active"),t.classList.add("opened"),document.querySelector(".menu_toggle_btn.active").addEventListener("click",(()=>{n()}))}))}function n(){const e=document.querySelector(".menu_toggle_btn"),n=e.getAttribute("class").split(" ");"active"===n[n.length-1]&&(e.classList.remove("active"),t.classList.remove("opened"),o())}setTimeout((function(){document.body.classList.remove("slide_in")}),1),o(),e.forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault();const o=e.getAttribute("href"),c=o.split("#")[1],s=document.getElementById(c);if(n(),s){const e=s.offsetTop;window.scrollTo({top:e,behavior:"smooth"})}else document.body.classList.add("slide_in"),setTimeout((function(){window.location=o}),700)}))})),ScrollTrigger.create({trigger:".sec_top",start:"bottom 10%",end:99999,toggleClass:{targets:".menu_toggle_btn",className:"scrolled"}})}));