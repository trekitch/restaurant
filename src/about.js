import familyPic from "./family.jpg";
import foodPic from "./food.jpg";
import friendsPic from "./friends.jpg";
import homePage from "./home";

function aboutPage() {
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

    const aboutUsTitle = document.createElement("h1");
    aboutUsTitle.textContent = "About Us";
    const aboutUsText = document.createElement("div");
    aboutUsText.classList.add("infosec");
    aboutUsText.classList.add("blurb");
    aboutUsText.textContent =
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At neque porro eveniet aliquam earum veritatis adipisci magnam, tenetur quisquam voluptas doloremque qui amet facilis voluptatibus repellat provident quis id soluta?";

    const dummyText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi animi repellendus dolores quis quibusdam delectus consectetur saepe ducimus quam totam. Quis vero sapiente tempora natus ea doloribus nemo velit animi!";

    const valuesTitle = document.createElement("h2");
    valuesTitle.textContent = "Our Values";

    const valuesSection = document.createElement("div");

    const familySec = document.createElement("div");

    const familyTitle = document.createElement("p");
    familyTitle.classList.add("title");
    familyTitle.textContent = "Family";
    familySec.classList.add("infosec");

    const familyBlurb = document.createElement("div");
    familyBlurb.classList.add("blurb");
    const familyBlurbText = document.createElement("p");
    familyBlurbText.textContent = dummyText;
    familyBlurb.append(familyTitle, familyBlurbText);
    familySec.appendChild(familyBlurb);

    const familyImg = new Image();
    familyImg.src = familyPic;

    familySec.appendChild(familyImg);

    const friendsSec = document.createElement("div");

    const friendsImg = new Image();
    friendsImg.src = friendsPic;

    friendsSec.appendChild(friendsImg);

    const friendsTitle = document.createElement("p");
    friendsTitle.classList.add("title");
    friendsTitle.textContent = "Friends";
    friendsSec.classList.add("infosec");

    const friendsBlurb = document.createElement("div");
    friendsBlurb.classList.add("blurb");
    const friendsBlurbText = document.createElement("p");
    friendsBlurbText.textContent = dummyText;
    friendsBlurb.append(friendsTitle, dummyText);
    friendsSec.append(friendsBlurb);

    const foodSec = document.createElement("div");

    const foodTitle = document.createElement("p");
    foodTitle.classList.add("title");
    foodTitle.textContent = "Food";
    foodSec.classList.add("infosec");

    const foodBlurb = document.createElement("div");
    foodBlurb.classList.add("blurb");
    const foodBlurbText = document.createElement("p");
    foodBlurbText.textContent = dummyText;
    foodBlurb.append(foodTitle, dummyText);
    foodSec.append(foodBlurb);

    const foodImg = new Image();
    foodImg.src = foodPic;

    foodSec.appendChild(foodImg);

    valuesSection.append(familySec, friendsSec, foodSec);

    content.appendChild(header);
    content.appendChild(navbar);
    content.append(aboutUsTitle, aboutUsText, valuesTitle, valuesSection);

    const homeBtn = document.querySelector(".homePage");
    homeBtn.addEventListener("click", () => {
        content.innerHTML = "";
        document.body.appendChild(homePage());
    });

    return content;
}

export default aboutPage;
