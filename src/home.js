import bbqPic from "./ribs.jpg";

import aboutPage from "./about";

function homePage() {
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

    //creates info blurb section and adds image
    const infosec = document.createElement("div");
    infosec.classList.add("infosec");
    const blurb = document.createElement("div");
    blurb.classList.add("blurb");
    const img = document.createElement("div");

    blurb.innerHTML =
        "<h2>We value you here</h2><br />Lorem ipsum dolor sit amet consectetur adipisicing elit. A impedit sit nemo quasi aliquid asperiores reprehenderit sequi ad, fuga aut suscipit cumque ipsa culpa explicabo et aspernatur nihil! Voluptate, exercitationem.";

    const bbqImg = new Image();
    bbqImg.src = bbqPic;
    img.appendChild(bbqImg);

    infosec.append(blurb, img);

    content.appendChild(header);
    content.appendChild(navbar);
    content.appendChild(infosec);

    const aboutBtn = document.querySelector(".aboutPage");
    aboutBtn.addEventListener("click", () => {
        content.innerHTML = "";
        document.body.appendChild(aboutPage());
    });

    return content;
}

export default homePage;
