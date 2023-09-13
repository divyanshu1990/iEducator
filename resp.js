burger = document.querySelector(".burger");
navbar = document.querySelector(".navbar");
navlist = document.querySelector(".nav-list");
rightnav = document.querySelector(".rightnav");

burger.addEventListener("click", () => {
  rightnav.classlist.toggle("v-class-resp");
  nav - list.classlist.toggle("v-class-resp");
  navbar.classlist.toggle("h-nav-resp");
});
