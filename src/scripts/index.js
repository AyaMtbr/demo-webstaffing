import "./common/app";
import {revealText, revealImage, animateSlogan} from "./common/scroll_anime";

window.addEventListener('load', () => {
  // Scroll animations
  revealText();
  revealImage();
  animateSlogan();
});
