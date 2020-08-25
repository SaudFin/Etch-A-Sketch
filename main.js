let container = document.getElementById("container");

const createGrid = () => {
  for (let i = 0; i < 16; i++) {
    for (let n = 0; n < 16; n++) {
      let grid = document.createElement("div");
      grid.className = "grid";
      console.log(container);
      container.appendChild(grid);
    }
  }
};

createGrid();
