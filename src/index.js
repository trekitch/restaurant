import "./cssreset.css";
import "./style.css";
import homePage from "./home";
import aboutPage from "./about";
import menuPage from "./menu";

const content = document.querySelector("#content");

//creates the header
const header = document.createElement("div");

header.textContent = "Tre's Famous BBQ Emporium";
header.classList.add("header");
//creates the nav bar and items in the nav
const navbar = document.createElement("ul");
const home = document.createElement("li");
const about = document.createElement("li");
const menu = document.createElement("li");
const contact = document.createElement("li");

home.textContent = "Home";
home.classList.add("homePage");

about.textContent = "About";
about.classList.add("aboutPage");

menu.textContent = "Menu";
menu.classList.add("menuPage");

contact.textContent = "Contact";
contact.classList.add("contactPage");
navbar.classList.add("navbar");
navbar.append(home, about, menu, contact);

content.append(header, navbar, homePage());

const homeBtn = document.querySelector(".homePage");
homeBtn.addEventListener("click", () => {
    content.innerHTML = "";
    content.append(header, navbar, homePage());
});

const aboutBtn = document.querySelector(".aboutPage");
aboutBtn.addEventListener("click", () => {
    content.innerHTML = "";
    content.append(header, navbar, aboutPage());
});

const menuBtn = document.querySelector(".menuPage");
menuBtn.addEventListener("click", () => {
    content.innerHTML = "";
    content.append(header, navbar, menuPage());
});
