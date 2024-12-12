export function swiper() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        // spaceBetween: 10,
        loop: true,
        mousewheel: true,
        // freeMode: true, // 슬라이드의 자유 이동 활성화
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
                //   spaceBetween: 30,   
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
