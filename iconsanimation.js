document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".skills-icons");
  const icons = Array.from(container.children);
  const totalWidth = container.scrollWidth;

  // Clone the icons to create a seamless infinite scroll effect
  icons.forEach((icon) => {
    const clone = icon.cloneNode(true);
    container.appendChild(clone);
  });

  let scrollAmount = 0;

  function scrollContainer() {
    scrollAmount += 0.5; // Adjust scroll speed as needed
    container.style.transform = `translateX(-${scrollAmount}px)`;

    if (scrollAmount >= totalWidth) {
      scrollAmount = 0; // Reset scroll amount
    }

    requestAnimationFrame(scrollContainer);
  }

  requestAnimationFrame(scrollContainer);
});
