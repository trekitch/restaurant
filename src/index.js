import "./style.css";
import bbqPic from "./ribs.jpg";

function homePage() {
    const content = document.querySelector("#content");
    const header = document.createElement("h1");
    const aboutText = document.createElement("p");

    header.textContent = "This is a header";
    content.appendChild(header);

    const bbqImg = new Image();
    bbqImg.src = bbqPic;

    content.appendChild(bbqImg);

    return content;
}

document.body.appendChild(homePage());
