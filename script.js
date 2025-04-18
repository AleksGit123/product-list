let sun = document.querySelector(".fa-sun");
let moon = document.querySelector(".fa-moon");
let theme_change_btn = document.querySelector(".theme_change");

theme_change_btn.addEventListener("click", () => {
    if(!moon.classList.contains("dark")){
        dark_mode_on();
        moon.classList.add("dark");
        sun.classList.add("light");
        moon.classList.remove("moon");
        sun.classList.remove("sun");
    }
    else{
        dark_mode_off();
        moon.classList.remove("dark");
        sun.classList.remove("light");
        moon.classList.add("moon");
        sun.classList.add("sun");
    }
});

let dark_mode_on = function(){
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "";
    link.id = "dark_theme"
    document.head.appendChild(link);
}

let dark_mode_off = function(){
    const dark_link = document.getElementById("dark_theme");
    document.head.removeChild(dark_link);
}

// .theme_change_btn.addEventListener("mouseout")