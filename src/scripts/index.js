import "./common/app";
import {revealText, revealImage, animateSlogan} from "./common/scroll_anime";

window.addEventListener('DOMContentLoaded', () => {
  // Scroll animations
  revealText();
  revealImage();
  animateSlogan();
});
