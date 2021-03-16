const menuItem = document.querySelectorAll(".menu_item");
const modalMenu = document.querySelector(".menu_mobile");
let hash = window.location.hash;

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
  scroll(): Scroll to the id section
=========================================*/
function scroll(hash, event) {
  const destination = document.querySelector(hash);

  // If the hash section exists in the current page
  if (destination) {
    const hashOffset = destination.offsetTop - 50;

    jQuery("html,body").animate({
      scrollTop: hashOffset
    }, 500);
  };
};

/*=======================================
  Initialize the settings
=========================================*/
window.addEventListener('load', () => {
  // Scroll to the section if the page URL has a hash
  if(hash) {
    scroll(hash);
  };

  // Set the nav bar
  openNav();

  //  Scroll to the section when a menu link is clicked
  menuItem.forEach(item => {
    item.addEventListener("click", event => {
      var urlId = item.getAttribute("href").split("#");
      hash = "#" + urlId[1];

      scroll(hash);
      closeMenuModal();
    });
  });

  // Change the hamburger menu colour on scroll
  ScrollTrigger.create({
    trigger: ".sec_top",
    start: "bottom 10%",
    end: 99999,
    toggleClass: {targets: ".menu_toggle_btn", className: "scrolled"},
  });
});
