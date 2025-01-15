const gridWidth = 16;
const gridHeight = 16;

container = document.querySelector(".container");

function createDivs(width, height) {
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      var gridElement = document.createElement("div");
      gridElement.classList.add("div");
      gridElement.textContent = `${i}, ${j}`;
      container.appendChild(gridElement);
    }
  }
}