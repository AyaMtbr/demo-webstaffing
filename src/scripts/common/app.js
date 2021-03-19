window.addEventListener('load', () => {
  const menuItem = document.querySelectorAll(".menu_item");
  const modalMenu = document.querySelector(".menu_mobile");
  const upBtn = document.querySelector(".up_btn");
  const viewHeight = document.body.offsetHeight;

  /*=======================================
    openNav(): Open the nav on mbile view
  =========================================*/
  function openNav() {
    const toggleBtn = document.querySelector(".menu_toggle_btn");

    toggleBtn.addEventListener("click", () => {
      toggleBtn.classList.add("active");
      modalMenu.classList.add("opened");

      closeNav();
    })
  };

  /*=======================================
    closeMenuModal(): Close the menu modal on mbile view
  =========================================*/
  function closeMenuModal() {
    const toggleBtn = document.querySelector(".menu_toggle_btn");
    const toggleBtnClass = toggleBtn.getAttribute("class").split(' ');
    const lastClassName = toggleBtnClass[toggleBtnClass.length -1];

    // If the modal menu is open
    if (lastClassName === "active" ) {
      toggleBtn.classList.remove("active");
      modalMenu.classList.remove("opened");

      openNav();
    };
  };

  /*=======================================
    closeNav(): Close the menu on mbile view
  =========================================*/
  function closeNav() {
    const toggleBtn = document.querySelector(".menu_toggle_btn.active");

    // Close the modal when the hamburger is clicked
    toggleBtn.addEventListener("click", () => {
      closeMenuModal();
    });
  }

  /*=======================================
    Initialize the settings
  =========================================*/
  setTimeout(function () {
    document.body.classList.remove('slide_in');
  }, 1);

  // Set the nav bar
  openNav();

  // Add animations to the menu links
  menuItem.forEach(item => {
    item.addEventListener("click", event => {
      event.preventDefault();
      const url = item.getAttribute("href");
      const hash = url.split("#")[1];
      const destination = document.getElementById(hash);

      closeMenuModal();

      // If the hash section exists in the current page
      if (destination) {
        const hashOffset = destination.offsetTop;

        window.scrollTo({
          top: hashOffset,
          behavior: "smooth"
        })
      // If the hash section exists in other page
      } else {
        document.body.classList.add('slide_in');
        setTimeout(function () {
          window.location = url;
        }, 700);
      };
    });
  });

  // Add function to the back-to-top button
  upBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  // Show the back-to-top button on scroll
  ScrollTrigger.create({
    trigger: ".sec_top",
    start: "top" + viewHeight,
    end: 99999,
    toggleClass: {targets: ".up_btn", className: "scrolled"},
  });

  // Change the hamburger menu colour on scroll
  ScrollTrigger.create({
    trigger: ".sec_top",
    start: "bottom 10%",
    end: 99999,
    toggleClass: {targets: ".menu_toggle_btn", className: "scrolled"},
  });
});
