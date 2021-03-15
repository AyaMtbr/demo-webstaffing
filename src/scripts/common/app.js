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
  scroll(): Scroll to the id section when a menu is clicked
=========================================*/
function scroll(hash) {
  // If the url contains a hashtag
  if(hash){
    const HashOffset = $(hash).offset().top - 50;
    jQuery("html,body").animate({
      scrollTop: HashOffset
    }, 500);
  };
};

/*=======================================
  Initialize the settings
=========================================*/
openNav();
scroll(hash);

//  Scroll to the section when a menu link is clicked
menuItem.forEach(item => {
  item.addEventListener("click", event => {
    var urlId = item.getAttribute("href").split("#");
    hash = "#" + urlId[1];

    scroll(hash);
    closeMenuModal();
  });
});
