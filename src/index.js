import "./cssreset.css";
import "./style.css";
import bbqPic from "./ribs.jpg";

function homePage() {
    const content = document.querySelector("#content");
    const header = document.createElement("p");
    const aboutText = document.createElement("p");

    const bbqImg = new Image();
    bbqImg.src = bbqPic;
    bbqImg.classList.add("center");

    header.textContent = "Welcome to Joe BBQ Shack";

    content.appendChild(bbqImg);
    content.appendChild(header);

    return content;
}

document.body.appendChild(homePage());
