import { projectsData } from "./projectsData.js";
const uiCardsContainer = document.getElementById("ui-cards-container");
document.addEventListener("DOMContentLoaded", function () {
  // Create UI Card
  function createProjectCard(project) {
    const card = document.createElement("div");
    card.classList.add("ui-card");

    // Create Image
    const img = document.createElement("img");
    img.classList.add("ui-card-image");
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
    // Create A-tag
    const link = document.createElement("a");
    link.href = project.githubLink;
    link.target = "_blank";
    // Create Button inside a-tag
    const button = document.createElement("button");
    button.classList.add("ui-card-button");
    link.appendChild(button);
    // Create class and text inside button
    const githubIcon = document.createElement("i");
    githubIcon.classList.add(
      "custom-hover-icon",
      "fa-brands",
      "fa-github",
      "svg-items"
    );
    button.appendChild(githubIcon);
    const buttonText = document.createTextNode("Experience Project");
    button.appendChild(buttonText);

    buttonsContainer.appendChild(link);

    return card;
  }

  // Check if the container exists and the projectsData object is available
  if (uiCardsContainer && projectsData && projectsData.projects) {
    const projectCards = projectsData.projects.map(createProjectCard);
    projectCards.forEach((card) => uiCardsContainer.appendChild(card));
  }
});
