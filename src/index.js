import "./cssreset.css";
import "./style.css";
import homePage from "./home";
import aboutPage from "./about";
import menuPage from "./menu";

const content = document.querySelector("#content");

document.body.appendChild(homePage());

// const aboutBtn = document.querySelector(".aboutPage");
// aboutBtn.addEventListener("click", () => {
//     content.innerHTML = "";
//     document.body.appendChild(aboutPage());
// });

// const menuBtn = document.querySelector(".menuPage");
// menuBtn.addEventListener("click", () => {
//     content.innerHTML = "";
//     document.body.appendChild(menuPage());
// });
