export function rotate() {
    let btns = document.querySelectorAll(".btn > div");
    let prev = document.querySelectorAll(".btn .prev");
    let next = document.querySelectorAll(".btn .next");
    let rotBox = document.querySelector(".rot__box");
    let cardBoxs = document.querySelectorAll(".card__box")
    let cards = document.querySelectorAll(".card")
    let i = 0;
    let rotDeg = 60; // 한번에 돌아가는 각도


    // 화면에 보이는 card 제어
    function viewCard(dir, idx) {
        console.log(idx);
        // console.log(dir);
        cardBoxs.forEach((card) => {
            card.style.zIndex = "0";
            cardBoxs[idx + 1].style.zIndex = "1";
            if (dir === "prev") {
                card.style.opacity = "0";
                cardBoxs[0].style.opacity = "1";
            }
            if (dir === "next") {
                card.style.opacity = "1";
                cardBoxs[0].style.opacity = "0";
            }
        })
    }

    // card 회전 움직임
    function prevCard() {
        if (i > 0) {
            rotBox.style.transform = `rotate(${-150 + (-((i - 1) * rotDeg))}deg)`;
        } else {
            cardBoxs.forEach((cardBox, idx) => {
                cardBox.style.transitionDelay = `0s`
            })
            rotBox.style.transform = `rotate(0deg)`;
            viewCard("prev", i);
        }
    }
    function nextCard() {
        if (i === 0) {
            cardBoxs.forEach((cardBox, idx) => {
                cardBox.style.transitionDelay = ` ${0.1 * idx}s`;
            });
            rotBox.style.transform = `rotate(-150deg)`
        } else {
            rotBox.style.transform = `rotate(${-150 + (-(i * rotDeg))}deg)`;
        }
        viewCard("next", i);
    }
    btns.forEach((btn) => {
        btn.addEventListener("click", function () {
            let btnValue = this.getAttribute('value');
            // console.log(btnValue);
            // console.log(rotDeg);
            if (btnValue === "next" && i < cards.length) {
                nextCard();
                i++;
                // console.log(i);
            } else if (btnValue === "prev" && i > 0) {
                i--;
                // console.log(i);
                prevCard();
            }
        })
    })
}