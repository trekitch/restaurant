import "./style.css";
import Restaurant from "./restaurant.jpg";

function homePage() {
    const content = document.querySelector("#content");
    const header = document.createElement("h1");
    const aboutText = document.createElement("p");

    const restaurantPic = new Image();
    restaurantPic.src = Restaurant;

    content.appendChild(restaurantPic);

    return content;
}

document.body.appendChild(homePage());
