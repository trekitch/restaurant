import "./cssreset.css";
import "./style.css";
import homePage from "./home";
import aboutPage from "./about";
import menuPage from "./menu";
import navBar from "./navbar";
import contactPage from "./contact.js";

const content = document.querySelector("#content");

content.append(navBar(), homePage());

const homeBtn = document.querySelector(".homePage");
homeBtn.addEventListener("click", () => {
    content.innerHTML = "";
    content.append(navBar(), homePage());
});

const aboutBtn = document.querySelector(".aboutPage");
aboutBtn.addEventListener("click", () => {
    content.innerHTML = "";
    content.append(navBar(), aboutPage());
});

const menuBtn = document.querySelector(".menuPage");
menuBtn.addEventListener("click", () => {
    content.innerHTML = "";
    content.append(navBar(), menuPage());
});

const contactBtn = document.querySelector(".contactPage");
contactBtn.addEventListener("click", () => {
    content.innerHTML = "";
    content.append(navBar(), contactPage());
});
