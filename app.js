const divider = document.querySelector(".divider");
const frontContainer = document.querySelector(".img-container-front");
const container = document.querySelector(".container");

container.addEventListener("mousemove", function (element) {
  let xPosition = element.clientX - container.offsetLeft;
  if (xPosition > 0 && xPosition < container.offsetWidth) {
    frontContainer.style.width = xPosition + "px";
    divider.style.left = xPosition + "px";
  }
});
