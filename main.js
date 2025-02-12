import { link } from "./src/js/link.js"
import { swiper } from "./src/js/swiper.js"
import { rotate } from "./src/js/rotate.js"
import { about } from "./src/js/about.js"
import { graphic } from "./src/js/graphic.js"
import { footer } from "./src/js/footer.js"
import { home } from "./src/js/home.js"

window.addEventListener('load', function () {
    swiper();
    rotate();
    about();
    graphic();
    footer();
    home();
    link();
})