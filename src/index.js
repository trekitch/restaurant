import "./cssreset.css";
import "./style.css";
import homePage from "./home";
import navBar from "./navbar";

const content = document.querySelector("#content");

document.body.append(navBar());
content.appendChild(homePage());
