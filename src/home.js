import bbqPic from "./images/ribs.jpg";

function homePage() {
    const component = document.querySelector("div");
    //creates info blurb section and adds image
    const infosec = document.createElement("div");
    infosec.classList.add("infosec");
    infosec.classList.add("container");
    const blurb = document.createElement("div");
    blurb.classList.add("blurb");
    const img = document.createElement("div");

    blurb.innerHTML =
        "<h2>We value you here</h2><br />Lorem ipsum dolor sit amet consectetur adipisicing elit. A impedit sit nemo quasi aliquid asperiores reprehenderit sequi ad, fuga aut suscipit cumque ipsa culpa explicabo et aspernatur nihil! Voluptate, exercitationem.";

    const bbqImg = new Image();
    bbqImg.src = bbqPic;
    img.appendChild(bbqImg);

    infosec.append(blurb, img);

    component.appendChild(infosec);

    return infosec;
}

export default homePage;
