function navBar() {
    //creates the header
    const header = document.createElement("div");
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
    header.append(heading, navbar);

    return header;
}

export default navBar;
