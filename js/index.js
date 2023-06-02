document.addEventListener("DOMContentLoaded", function () {
    const name = document.querySelector(".name");
    const message = document.querySelector(".message");
    const toast = document.querySelector(".toast");
    const cross = document.querySelector(".toast__button");

    // таймаут на появление тостера
        const slideRight = function () {
        toast.style.display = "flex"
        toast.classList.toggle('slide-right');
        };
        setTimeout(slideRight, 2000);

    // анимация закрытия
    const slideLeft = function () {
        toast.classList.add("slide-left");
        setTimeout(function() {
        toast.classList.remove("slide-left");
        }, 1000);
    };

    // функция для скрытия toast
    const toastDisplayNone = function () {
        toast.style.display = "none"
    };

    // слушатель события на анимацию закрытия
    cross.addEventListener("click", function () {
        slideLeft();
        setTimeout(toastDisplayNone, 1000);
    });

    }); 