const gridWidth = 16;
const gridHeight = 16;

container = document.querySelector(".container");

for (let i = 0; i < gridWidth; i++) {
  for (let j = 0; j < gridHeight; j++) {
    var gridElement = document.createElement("div");
    gridElement.textContent = `${i}, ${j}`;
    container.appendChild(gridElement);
  }
}