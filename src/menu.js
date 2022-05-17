import steakPic from "./images/steak.jpg";
import chickenPic from "./images/chicken.jpg";
import ribPic from "./images/ribs2.jpg";
import burgerPic from "./images/burger.jpg";

function menuPage() {
    const component = document.createElement("div");
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

    component.appendChild(menuList);

    return component;
}

export default menuPage;
