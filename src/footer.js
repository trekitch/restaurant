import githubPic from "./images/github-light.png";

function footer() {
    const footer = document.createElement("footer");
    footer.textContent = "Created by: Tre'von Kichen";
    const githubLink = document.createElement("a");
    githubLink.setAttribute("href", "https://github.com/trekitch");
    const githubImg = new Image();
    githubImg.src = githubPic;
    githubLink.appendChild(githubImg);

    footer.appendChild(githubLink);

    return footer;
}

export default footer;
