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

function draw () {
  const hoverDivs = [...document.querySelectorAll('.row')];

  hoverDivs.forEach(hoverDiv => {
    hoverDiv.addEventListener("mouseover", () => {
      hoverDiv.style.backgroundColor = "black";
    });
  });
}

function promptUser() {
  let newSize = parseInt(prompt("Please enter a new number of squares per side", "16"));
  return newSize < 100 ? newSize : 100;
}

createDivs(16,16)

draw();

let button = document.querySelector(".new_grid");
button.addEventListener("click", () => {
  const newSize = promptUser();
  container.innerHTML = "";
  createDivs(newSize, newSize);
  draw();
});