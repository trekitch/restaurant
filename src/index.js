import "./cssreset.css";
import "./style.css";
import homePage from "./home";
import aboutPage from "./about";

const content = document.querySelector("#content");

document.body.appendChild(homePage());

const aboutBtn = document.querySelector(".aboutPage");
aboutBtn.addEventListener("click", () => {
    content.innerHTML = "";
    document.body.appendChild(aboutPage());
});
