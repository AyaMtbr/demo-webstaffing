/*=======================================
  revealText(): Show text blocks
=========================================*/
export function revealText () {
  const sectionsText = gsap.utils.toArray(".anim_text");

  sectionsText.forEach((section, i) => {
    const anim = gsap.fromTo(section, {autoAlpha: 0, y: 50}, {autoAlpha: 1, y: 0, duration: 1});

      ScrollTrigger.create ({
        trigger: section,
        start: "top 90%",
        animation: anim,
        }
    );
  });
}

/*=======================================
  revealImage(): Show images
=========================================*/
export function revealImage () {
  const sectionsImg = gsap.utils.toArray(".anim_img_mask");

  sectionsImg.forEach((section, i) => {
    const anim = gsap.fromTo(section, {x: 0}, {x: '100%', duration: 1});

      ScrollTrigger.create ({
        trigger: section,
        start: "top 80%",
        animation: anim,
        }
    );
  });
}

/*=======================================
  animateSlogan(): Change the slogan colour
=========================================*/
export function animateSlogan() {
  ScrollTrigger.create({
    trigger: ".block_members",
    start: "top center",
    end: 99999,
    scrub: true,
    toggleClass: {targets: ".anim_color", className: "active"},
  });
}
