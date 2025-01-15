const gridWidth = 16;
const gridHeight = 16;

container = document.querySelector(".container");

function createDivs(width, height) {
  for (let i = 0; i < width; i++) {
    let column = document.createElement("div");
    column.classList.add("column");

    for (let j = 0; j < height; j++) {
      let row = document.createElement("div");
      row.classList.add("row");
      column.appendChild(row);
    }
    container.appendChild(column);
  }
}