let container = document.getElementById("container");
let button = document.querySelector("button");

// to create the squares inside the grid
const createGrid = num => {
  container.innerHTML = "";
  container.style.gridTemplateColumns = `repeat(${num},auto)`;
  for (let i = 0; i < num; i++) {
    for (let n = 0; n < num; n++) {
      let grid = document.createElement("div");
      container.appendChild(grid);
      grid.className = "grid";
    }
  }

  const grids = document.querySelectorAll(".grid");

  for (let i = 0; i < grids.length; i++) {
    grids[i].addEventListener("mouseover", function() {
      grids[i].style.backgroundColor = "orange";
    });
  }
};

// this function to make each grid changes color to orange when mouse is run over

createGrid(16);

const newGrid = () => {
  let userGrid = prompt(
    "Please enter number for how the size of the grid?",
    "16, if you want a 16x16"
  );
  createGrid(userGrid);
};
