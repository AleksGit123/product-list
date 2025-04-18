const sun = document.querySelector(".fa-sun");
const moon = document.querySelector(".fa-moon");
const theme_change_btn = document.querySelector(".theme_change");
const bodyTag = document.body;

theme_change_btn.addEventListener("click", () => {
    if(!moon.classList.contains("dark")){
        dark_mode_on();
        moon.classList.add("dark");
        sun.classList.add("light");
        moon.classList.remove("moon");
        sun.classList.remove("sun");
    }
    else{
        dark_mode_off()
        moon.classList.remove("dark");
        sun.classList.remove("light");
        moon.classList.add("moon");
        sun.classList.add("sun");
    }
});

let dark_mode_on = function(){
    bodyTag.classList.add("darkmode");
    bodyTag.style.backgroundColor = "#0d1b2a";
}
// console.log(dark_mode_on());

let dark_mode_off = function(){
    bodyTag.classList.remove("darkmode");
    bodyTag.style.backgroundColor = "#fcf9f7";
}
// console.log(dark_mode_off());

// .theme_change_btn.addEventListener("mouseout")