import { projectsData } from "./projectsData.js";
const uiCardsContainer = document.getElementById("ui-cards-container");
document.addEventListener("DOMContentLoaded", function () {
  // Create UI Card
  function createProjectCard(project) {
    const card = document.createElement("a");
    card.href = project.liveLink;
    card.target = "_blank";

    card.classList.add("ui-card");

    // Create Image
    const img = document.createElement("img");
    img.classList.add("ui-card-image");
    img.title = "Go to GitHub Repo";
    img.src = project.img;
    img.alt = "project image";
    card.appendChild(img);

    // Create Text Container
    const textContainer = document.createElement("div");
    textContainer.classList.add("ui-card-text-container");
    card.appendChild(textContainer);
    // Create Heading
    const heading = document.createElement("h3");
    heading.classList.add("ui-card-heading");
    heading.textContent = project.heading;
    textContainer.appendChild(heading);
    // Create Description
    const description = document.createElement("p");
    description.classList.add("ui-card-paragraph");
    description.textContent = project.description;
    textContainer.appendChild(description);
    // Create Icons Container
    const icons = document.createElement("span");
    icons.classList.add("ui-card-icons");
    textContainer.appendChild(icons);
    // Create Icons based on Boolean true / false in data
    if (project.showHtml) {
      const htmlIcon = document.createElement("i");
      htmlIcon.classList.add("ui-icon", "fa-brands", "fa-html5");
      icons.appendChild(htmlIcon);
    }

    if (project.showCss) {
      const cssIcon = document.createElement("i");
      cssIcon.classList.add("ui-icon", "fa-brands", "fa-css3-alt");
      icons.appendChild(cssIcon);
    }

    if (project.showJs) {
      const jsIcon = document.createElement("i");
      jsIcon.classList.add("ui-icon", "fa-brands", "fa-square-js");
      icons.appendChild(jsIcon);
    }

    if (project.showReact) {
      const reactIcon = document.createElement("i");
      reactIcon.classList.add(
        "ui-icon",
        "fa-brands",
        "fa-react",
        "custom2-icon"
      );
      icons.appendChild(reactIcon);
    }

    if (project.showFigma) {
      const figmaIcon = document.createElement("i");
      figmaIcon.classList.add("ui-icon", "fa-brands", "fa-figma");
      icons.appendChild(figmaIcon);
    }

    // Create Button Container
    const buttonsContainer = document.createElement("div");
    buttonsContainer.classList.add("ui-card-buttons-container");
    textContainer.appendChild(buttonsContainer);

    // Create Button - Github Repo
    const linkGithub = document.createElement("a");
    linkGithub.title = "Go to Live View";
    linkGithub.href = project.githubLink;
    linkGithub.target = "_blank";
    // Create Button inside a-tag
    const button = document.createElement("button");
    button.classList.add("ui-card-button");
    linkGithub.appendChild(button);
    // Create class and text inside button
    const githubIcon = document.createElement("i");

    githubIcon.classList.add(
      "custom-hover-icon",
      "fa-brands",
      "fa-github",
      "svg-items"
    );
    button.appendChild(githubIcon);
    const buttonText = document.createTextNode("GitHub Repo");
    button.appendChild(buttonText);

    //////////////////////////
    //Create Button 2 - Live View
    const linkLive = document.createElement("a");
    linkLive.title = "Go to Live View";
    linkLive.href = project.liveLink;
    linkLive.target = "_blank";

    // Create Button inside a-tag
    const button2 = document.createElement("button");
    button2.classList.add("ui-card-button");
    linkLive.appendChild(button2);

    // Create class and text inside button
    const liveIcon = document.createElement("i");
    liveIcon.classList.add(
      "custom-hover-icon",
      "fa-solid",
      "fa-globe",
      "svg-items"
    );
    button2.appendChild(liveIcon);
    const button2Text = document.createTextNode("Live View");
    button2.appendChild(button2Text);

    buttonsContainer.appendChild(linkGithub);
    buttonsContainer.appendChild(linkLive);

    return card;
  }

  // Check if the container exists and the projectsData object is available
  if (uiCardsContainer && projectsData && projectsData.projects) {
    const projectCards = projectsData.projects.map(createProjectCard);
    projectCards.forEach((card) => uiCardsContainer.appendChild(card));
  }
});
