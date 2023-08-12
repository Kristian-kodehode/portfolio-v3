const themeRadios = document.querySelectorAll(
  '.theme-radios input[type="radio"]'
);
const menuIcon = document.getElementById("menuIcon");
const themeMenu = document.getElementById("themeMenu");
const overlay = document.getElementById("overlay");

// Toggle the theme menu's visibility and overlay
menuIcon.addEventListener("click", () => {
  themeMenu.classList.toggle("expanded");
  overlay.style.display = "block";
});

// Close the theme menu and overlay when clicking outside
window.addEventListener("click", (event) => {
  if (!themeMenu.contains(event.target) && !menuIcon.contains(event.target)) {
    themeMenu.classList.remove("expanded");
    overlay.style.display = "none";
  }
});

// Close the theme menu and overlay when clicking on overlay
overlay.addEventListener("click", () => {
  themeMenu.classList.remove("expanded");
  overlay.style.display = "none";
});
//UPDATED
overlay.addEventListener("touchstart", () => {
  themeMenu.classList.remove("expanded");
  overlay.style.display = "none";
});

//

//

//

let colorThemes = [];
let currentThemeIndex = 0;

// Fetch color themes from JSON
const fetchColorThemes = async () => {
  try {
    const response = await fetch("color-themes.json");
    colorThemes = await response.json();
    applyTheme(currentThemeIndex); // Apply default theme after fetching
  } catch (error) {
    console.log("Error fetching color themes:", error);
  }
};

const applyThemeFromRadio = () => {
  const selectedThemeIndex = parseInt(
    document.querySelector('.theme-radios input[type="radio"]:checked').value
  );
  applyTheme(selectedThemeIndex);
};

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
  document.documentElement.style.setProperty(
    "--col-shadow",
    selectedTheme["col-shadow"]
  );
  document.documentElement.style.setProperty(
    "--url-image",
    `url("${selectedTheme["url-image"]}")`
  );

  currentThemeIndex = themeIndex;
};

// Attach change event listeners to radio buttons
themeRadios.forEach((radio) => {
  radio.addEventListener("change", applyThemeFromRadio);
});

fetchColorThemes();
