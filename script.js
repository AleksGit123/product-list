let sun = document.querySelector(".fa-sun");
let moon = document.querySelector(".fa-moon");
let theme_change_btn = document.querySelector(".theme_change");

theme_change_btn.addEventListener("click", () => {
    if(!moon.classList.contains("dark")){
        moon.classList.add("dark");
        sun.classList.add("light");
        moon.classList.remove("moon");
        sun.classList.remove("sun");
    }
    else{
        moon.classList.remove("dark");
        sun.classList.remove("light");
        moon.classList.add("moon");
        sun.classList.add("sun");
    }
});
