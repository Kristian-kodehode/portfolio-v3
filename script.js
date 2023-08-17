/*

document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".accordion-item");

  let activeItem = null;

  accordionItems.forEach(function (item) {
    const header = item.querySelector(".accordion-header");
    const icons = item.querySelector(".accordian-icons");

    header.addEventListener("click", function () {
      const content = item.querySelector(".accordion-content");
      const isActive = content.classList.contains("active");

      if (isActive) {
        content.classList.remove("active");
        icons.style.transform = "rotate(0deg)";
        activeItem = null;
      } else {
        if (activeItem) {
          activeItem
            .querySelector(".accordion-content")
            .classList.remove("active");
          icons.style.transform = "rotate(0deg)";
        }
        content.classList.add("active");
        icons.style.transform = "rotate(180deg)";
        activeItem = item;
      }
    });
  });
});
*/
document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".accordion-item");

  let activeItem = null;

  accordionItems.forEach(function (item) {
    const header = item.querySelector(".accordion-header");
    const icons = item.querySelector(".accordian-icons");

    header.addEventListener("click", function () {
      const content = item.querySelector(".accordion-content");
      const isActive = content.classList.contains("active");

      if (isActive) {
        content.classList.remove("active");
        icons.style.transform = "rotate(0deg)";
        activeItem = null;
      } else {
        if (activeItem) {
          activeItem
            .querySelector(".accordion-content")
            .classList.remove("active");
          activeItem.querySelector(".accordian-icons").style.transform =
            "rotate(0deg)";
        }
        content.classList.add("active");
        icons.style.transform = "rotate(180deg)";
        activeItem = item;
      }
    });
  });
});
