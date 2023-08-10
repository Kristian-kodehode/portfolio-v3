const themeSelect = document.getElementById("themeSelect");
const prevThemeButton = document.getElementById("prevTheme");
const nextThemeButton = document.getElementById("nextTheme");
let colorThemes = []; // Store your color themes here
let currentThemeIndex = 0;

// Fetch color themes from the JSON data
const fetchColorThemes = async () => {
  try {
    // Replace the URL with the correct path to your JSON file
    const response = await fetch("color-themes.json");
    colorThemes = await response.json();
    changeColors(); // Apply default theme
  } catch (error) {
    console.log("Error fetching color themes:", error);
  }
};

// Handle previous theme button click
prevThemeButton.addEventListener("click", () => {
  if (currentThemeIndex > 0) {
    currentThemeIndex -= 1;
    changeColors();
  }
});

// Handle next theme button click
nextThemeButton.addEventListener("click", () => {
  if (currentThemeIndex < colorThemes.length - 1) {
    currentThemeIndex += 1;
    changeColors();
  }
});

// Function to apply the selected theme
const changeColors = () => {
  const currentTheme = colorThemes[currentThemeIndex];
  // Set CSS variables using currentTheme values
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

fetchColorThemes();

/*
/////////////////////////
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
////////////////////
*/

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
