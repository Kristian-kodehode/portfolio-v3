let colorThemes = {};
let currentTheme = localStorage.getItem("currentTheme") || "light"; // Get the last selected theme from local storage

const toggleButton = document.getElementById("menuIcon");

const applyTheme = (theme) => {
  const selectedTheme = colorThemes[theme];

  if (selectedTheme) {
    document.documentElement.style.setProperty(
      "--col-primary",
      selectedTheme["col-primary"]
    );
    document.documentElement.style.setProperty(
      "--col-primary80",
      selectedTheme["col-primary80"]
    );
    document.documentElement.style.setProperty(
      "--col-primary10",
      selectedTheme["col-primary10"]
    );
    document.documentElement.style.setProperty(
      "--col-secondary",
      selectedTheme["col-secondary"]
    );
    document.documentElement.style.setProperty(
      "--col-secondary80",
      selectedTheme["col-secondary80"]
    );
    document.documentElement.style.setProperty(
      "--col-shadow",
      selectedTheme["col-shadow"]
    );
    document.documentElement.style.setProperty(
      "--url-image",
      `url("${selectedTheme["url-image"]}")`
    );

    // Store the current theme in local storage
    localStorage.setItem("currentTheme", theme);
  } else {
    console.log(`Theme "${theme}" not found`);
  }
};

// Fetch color themes from JSON
const fetchColorThemes = async () => {
  try {
    const response = await fetch("color-themes.json");
    const data = await response.json();
    colorThemes = data.themes;
    applyTheme(currentTheme); // Apply default theme after fetching
  } catch (error) {
    console.log("Error fetching color themes:", error);
  }
};

fetchColorThemes();

// Toggle the theme
toggleButton.addEventListener("click", () => {
  currentTheme = currentTheme === "light" ? "dark" : "light"; // Toggle between themes
  applyTheme(currentTheme); // Apply the new theme
});
