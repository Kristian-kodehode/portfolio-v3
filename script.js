let currentThemeIndex = 0;
let colorThemes = [];

// THEME CHANGE LOGIC
const fetchColorThemes = async () => {
  try {
    const response = await fetch("color-themes.json");
    colorThemes = await response.json();
  } catch (error) {
    console.log("Error fetching color themes:", error);
  }
};

const changeColors = () => {
  if (colorThemes.length === 0) {
    console.log("Color themes not loaded yet.");
    return;
  }

  const themeIndex = parseInt(document.getElementById("themeSelect").value);
  currentThemeIndex = themeIndex;
  const currentTheme = colorThemes[currentThemeIndex];

  // Set CSS variables
  document.documentElement.style.setProperty(
    "--col-primary",
    currentTheme["col-primary"]
  );
  document.documentElement.style.setProperty(
    "--col-primary80",
    currentTheme["col-primary80"]
  );
  document.documentElement.style.setProperty(
    "--col-secondary",
    currentTheme["col-secondary"]
  );
  document.documentElement.style.setProperty(
    "--col-secondary80",
    currentTheme["col-secondary80"]
  );
};
document.getElementById("themeSelect").addEventListener("change", changeColors);

fetchColorThemes();

/*





// UI CARDS DISTRIBUTION
*/
import { projects } from "./projectsData.js";

const projectContainer = document.getElementById("ui-cards-container");

const projectCards = projects.map((project) => {
  const card = document.createElement("div");
  card.classList.add("project-card");
  card.setAttribute("key", project.id);

  // Create other elements for the UI cards (image, heading, description)

  const iconsContainer = document.createElement("div");

  const addIcon = (iconClass) => {
    const icon = document.createElement("i");
    icon.classList.add(iconClass);
    iconsContainer.appendChild(icon);
  };

  switch (true) {
    case project.showIcon1:
      addIcon("fa-icon1"); // Replace 'fa-icon1' with the appropriate class for icon 1
      break;
    case project.showIcon2:
      addIcon("fa-icon2"); // Replace 'fa-icon2' with the appropriate class for icon 2
      break;
    case project.showIcon3:
      addIcon("fa-icon3"); // Replace 'fa-icon3' with the appropriate class for icon 3
      break;
    case project.showIcon4:
      addIcon("fa-icon4"); // Replace 'fa-icon4' with the appropriate class for icon 4
      break;
    case project.showIcon5:
      addIcon("fa-icon5"); // Replace 'fa-icon5' with the appropriate class for icon 5
      break;
    default:
      break;
  }

  card.appendChild(iconsContainer);

  // Create the button with the link from the 'buttonLink' property
  const buttonLink = document.createElement("a");
  buttonLink.href = project.buttonLink;
  buttonLink.target = "_blank";

  const button = document.createElement("button");
  button.classList.add("ui-card-button");
  button.textContent = "Experience Project";

  buttonLink.appendChild(button);
  card.appendChild(buttonLink);

  return card;
});

projectContainer.append(...projectCards);

/*





// ACCORDIAN LOGIG
*/
document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".accordion-item");
  let activeItem = null;

  accordionItems.forEach(function (item) {
    const header = item.querySelector(".accordion-header");

    header.addEventListener("click", function () {
      const content = item.querySelector(".accordion-content");
      const isActive = content.classList.contains("active");

      if (isActive) {
        content.classList.remove("active");
        activeItem = null;
      } else {
        if (activeItem) {
          activeItem
            .querySelector(".accordion-content")
            .classList.remove("active");
        }
        content.classList.add("active");
        activeItem = item;
      }
    });
  });
});
