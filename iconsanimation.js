document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".skills-icons");
  const icons = Array.from(container.children);
  const totalWidth = container.scrollWidth;
  const clone = container.innerHTML;

  // Append clone to the container for seamless infinite scrolling
  container.innerHTML += clone;

  let scrollAmount = 0;

  function scrollContainer() {
    scrollAmount += 1; // Adjust scroll speed as needed
    container.style.transform = `translateX(-${scrollAmount}px)`;

    if (scrollAmount >= totalWidth) {
      scrollAmount = 0; // Reset scroll amount
    }

    requestAnimationFrame(scrollContainer);
  }

  requestAnimationFrame(scrollContainer);
});
