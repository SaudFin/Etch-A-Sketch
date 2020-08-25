let container = document.getElementById("container");

const createGrid = () => {
  for (let i = 0; i < 16; i++) {
    for (let n = 0; n < 16; n++) {
      let grid = document.createElement("div");
      grid.className = "grid";
      container.appendChild(grid);
    }
  }
};
createGrid();

let grids = document.getElementsByClassName("grid");
for (let i = 0; i < grids.length; i++) {
  grids[i].addEventListener("mouseover", function(event) {
    event.target.style.backgroundColor = "orange";
  });
}

// grids.addEventListener;
