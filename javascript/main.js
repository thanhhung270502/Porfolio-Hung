const skill__selector = document.querySelectorAll(".skill__selector");
const skill__item = document.querySelectorAll(".skill__item");

skill__selector.forEach((value, index) => {
    value.onclick = () => {
        for (let i = 0; i < 6; i++) {
            skill__selector[i].classList.remove("skill_selector-active");
        }
        value.classList.add("skill_selector-active");
        if (index == 0) {
            for (let i = 0; i < 15; i++) {
                skill__item[i].style.display = "block";
            }
        }
        else {
            for (let i = 0; i < 15; i++) {
                skill__item[i].style.display = "None";
            }
            if (index == 1) {
                for (let i = 0; i < 8; i++) {
                    skill__item[i].style.display = "block";
                }
            }
            else if (index == 2) {
                for (let i = 8; i < 10; i++) {
                    skill__item[i].style.display = "block";
                }
            }
            else if (index == 3) {
                skill__item[10].style.display = "block";
            }
            else if (index == 4) {
                for (let i = 11; i < 13; i++) {
                    skill__item[i].style.display = "block";
                }
            }
            else if (index == 5) {
                for (let i = 13; i < 15; i++) {
                    skill__item[i].style.display = "block";
                }
            }
        }
    }
})