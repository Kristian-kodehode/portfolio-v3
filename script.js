const themeRadios = document.querySelectorAll(
  '.theme-radios input[type="radio"]'
);
let colorThemes = []; // Initialize the colorThemes variable
let currentThemeIndex = 0;

// Fetch color themes from the JSON data
const fetchColorThemes = async () => {
  try {
    const response = await fetch("color-themes.json");
    colorThemes = await response.json();
    applyTheme(currentThemeIndex); // Apply default theme after fetching
  } catch (error) {
    console.log("Error fetching color themes:", error);
  }
};

// Apply the selected theme based on the radio button's value
const applyThemeFromRadio = () => {
  const selectedThemeIndex = parseInt(
    document.querySelector('.theme-radios input[type="radio"]:checked').value
  );
  applyTheme(selectedThemeIndex);
};

// Apply the selected theme
const applyTheme = (themeIndex) => {
  const selectedTheme = colorThemes[themeIndex];

  document.documentElement.style.setProperty(
    "--col-primary",
    selectedTheme["col-primary"]
  );
  document.documentElement.style.setProperty(
    "--col-primary80",
    selectedTheme["col-primary80"]
  );
  document.documentElement.style.setProperty(
    "--col-secondary",
    selectedTheme["col-secondary"]
  );
  document.documentElement.style.setProperty(
    "--col-secondary80",
    selectedTheme["col-secondary80"]
  );

  currentThemeIndex = themeIndex;
};

// Attach change event listeners to radio buttons
themeRadios.forEach((radio) => {
  radio.addEventListener("change", applyThemeFromRadio);
});

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
