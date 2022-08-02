let home_section = document.getElementById("home_section");
let intro_section = document.getElementById("intro_section");

setTimeout(() => {
  home_section.setAttribute("class", "invisible");
  intro_section.setAttribute("class", "invisible");
  home_section.removeAttribute("class", "invisible");
  home_section.setAttribute("class", "home");
}, 2000);
