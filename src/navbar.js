import homePage from "./home";
import aboutPage from "./about";
import menuPage from "./menu";
import contactPage from "./contact.js";

function navBar() {
    //creates the header
    const content = document.querySelector("#content");
    const heading = document.createElement("div");

    heading.textContent = "Tre's Famous BBQ Emporium";
    heading.classList.add("header");
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
    content.append(heading);
    content.append(navbar);

    const homeBtn = document.querySelector(".homePage");
    homeBtn.addEventListener("click", () => {
        const container = document.querySelector(".container");
        const navBtns = document.querySelector(".navbar").childNodes;
        navBtns.forEach((element) => {
            element.classList.remove("active");
        });
        container.innerHTML = "";
        container.append(homePage());
        home.classList.add("active");
    });

    const aboutBtn = document.querySelector(".aboutPage");
    aboutBtn.addEventListener("click", () => {
        const container = document.querySelector(".container");
        const navBtns = document.querySelector(".navbar").childNodes;
        navBtns.forEach((element) => {
            element.classList.remove("active");
        });
        container.innerHTML = "";
        container.append(aboutPage());
        about.classList.add("active");
    });

    const menuBtn = document.querySelector(".menuPage");
    menuBtn.addEventListener("click", () => {
        const container = document.querySelector(".container");
        const navBtns = document.querySelector(".navbar").childNodes;
        navBtns.forEach((element) => {
            element.classList.remove("active");
        });
        container.innerHTML = "";
        container.append(menuPage());
        menu.classList.add("active");
    });

    const contactBtn = document.querySelector(".contactPage");
    contactBtn.addEventListener("click", () => {
        const container = document.querySelector(".container");
        const navBtns = document.querySelector(".navbar").childNodes;
        navBtns.forEach((element) => {
            element.classList.remove("active");
        });
        container.innerHTML = "";
        container.append(contactPage());
        contact.classList.add("active");
    });

    return content;
}

export default navBar;
