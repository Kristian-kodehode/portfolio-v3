let currentThemeIndex = 0;
let colorThemes = [];

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
};

document.getElementById("themeSelect").addEventListener("change", changeColors);

fetchColorThemes();

// ACCORDIAN LOGIG
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
