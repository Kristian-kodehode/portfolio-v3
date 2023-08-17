document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".accordion-item");
  let activeItem = null;

  accordionItems.forEach((item) => {
    const header = item.querySelector(".accordion-header");

    header.addEventListener("click", () => {
      const content = item.querySelector(".accordion-content");

      if (activeItem && activeItem !== item) {
        activeItem
          .querySelector(".accordion-content")
          .classList.remove("active");
      }

      content.classList.toggle("active");
      activeItem = item;
    });
  });
});

/* OLD
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
        console.log("IsActive 1");
      } else {
        if (activeItem) {
          activeItem
            .querySelector(".accordion-content")
            .classList.remove("active");
        }
        content.classList.add("active");
        activeItem = item;
        console.log("IsActive 3");
      }
    });
  });
});
*/
