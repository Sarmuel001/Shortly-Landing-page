const hamburger = document.querySelector(".hamburger");
const hamburger = document.querySelector(".nav-menu");

hamburger.addEventListener("click",() => { 
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".link").forEach(n => n.addEventListener("Click",() => { 
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}
))
