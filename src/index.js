import "./cssreset.css";
import "./style.css";
import homePage from "./home";
import navBar from "./navbar";
import footer from "./footer";

const content = document.querySelector("#content");
const container = document.createElement("div");
container.classList.add("container");

document.body.appendChild(navBar());
content.appendChild(container);

container.append(homePage());
document.body.append(footer());
