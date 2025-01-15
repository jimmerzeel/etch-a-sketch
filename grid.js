const nofCells = 16;
const maxGridWidth = 960;

container = document.querySelector(".container");

function createDivs(nofCells) {
  const squareSize = maxGridWidth / nofCells;

  for (let i = 0; i < nofCells; i++) {
    let column = document.createElement("div");
    column.classList.add("column");

    for (let j = 0; j < nofCells; j++) {
      let row = document.createElement("div");
      row.classList.add("row");

      row.style.width = `${squareSize}px`;
      row.style.height = `${squareSize}px`;

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

createDivs(nofCells);
draw();

let button = document.querySelector(".new_grid");
button.addEventListener("click", () => {
  const newSize = promptUser();
  container.innerHTML = "";
  createDivs(newSize, newSize);
  draw();
});