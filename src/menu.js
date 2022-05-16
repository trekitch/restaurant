import steakPic from "./steak.jpg";
import chickenPic from "./chicken.jpg";
import ribPic from "./ribs2.jpg";
import burgerPic from "./burger.jpg";

import homePage from "./home";
import aboutPage from "./about";

function menuPage() {
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

    const menuTitle = document.createElement("h1");
    menuTitle.textContent = "Menu";

    const menuList = document.createElement("div");
    menuList.classList.add("menuList");

    const ribItem = document.createElement("div");
    const ribText = document.createElement("p");
    const ribImg = new Image();
    ribImg.src = ribPic;
    ribItem.classList.add("items");
    ribText.textContent = "Ribs";
    ribItem.append(ribText, ribImg);

    const steakItem = document.createElement("div");
    const steakText = document.createElement("p");
    const steakImg = new Image();
    steakImg.src = steakPic;
    steakItem.classList.add("items");
    steakText.textContent = "Steak";
    steakItem.append(steakText, steakImg);

    const burgerItem = document.createElement("div");
    const burgerText = document.createElement("p");
    const burgerImg = new Image();
    burgerImg.src = burgerPic;
    burgerItem.classList.add("items");
    burgerText.textContent = "Steaks";
    burgerItem.append(burgerText, burgerImg);

    const chickenItem = document.createElement("div");
    const chickenText = document.createElement("p");
    const chickenImg = new Image();
    chickenImg.src = chickenPic;
    chickenItem.classList.add("items");
    chickenText.textContent = "Chicken";
    chickenItem.append(chickenText, chickenImg);

    menuList.append(ribItem, steakItem, burgerItem, chickenItem);

    content.appendChild(menuList);

    // const homeBtn = document.querySelector(".homePage");
    // homeBtn.addEventListener("click", () => {
    //     content.innerHTML = "";
    //     document.body.appendChild(homePage());
    // });

    // const aboutBtn = document.querySelector(".aboutPage");
    // aboutBtn.addEventListener("click", () => {
    //     content.innerHTML = "";
    //     document.body.appendChild(aboutPage());
    // });

    return content;
}

export default menuPage();
