export function swiper() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        loop: true,
        mousewheel: true,
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".next",
        },
        breakpoints: {
            768: {
                slidesPerView: "auto",  
            },
        }
    });

    const workArea = document.getElementById("works");
    const workSwiper =  document.querySelector("#works article")
    const cursor = document.getElementById("custom-cursor");

    workSwiper.addEventListener("mouseenter", function (e) {
        
        cursor.querySelector("em").style.transform = "translateY(0%)";
        cursor.querySelector("em").innerHTML = "DRAG <span>or</span> SCROLL";
        // cursor.querySelector("em").innerHTML = "SCROLL";
    })
    workSwiper.addEventListener("mouseleave", function (e) {
        cursor.querySelector("em").style.transform = "translateY(-100%)";
    })
    workArea.addEventListener("mousemove", function (e) {
        let cursorX = e.clientX;
        let cursorY = e.clientY;

        cursor.style.left = cursorX + "px";
        cursor.style.top = cursorY + "px";
    })

}
