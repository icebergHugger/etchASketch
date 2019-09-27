let gridHeight = 30;
let gridWidth = 30;
let color; //3 buttons on bottom that change the color

const container = document.querySelector("#container");
createGrid();

function createGrid() {
  for(i = 0; i < gridHeight; i++){
    let row = document.createElement("div");
    row.classList.add("row");
    row.setAttribute("style", `height :
    ${container.clientWidth/gridHeight}px`)
    container.appendChild(row);
    for(j = 0; j < gridWidth; j++){
      let column = document.createElement("div");
      column.classList.add("column");
      column.setAttribute("rowNumber", i);
      column.setAttribute("columnNumber", j);
      column.addEventListener("mouseover", clickResponse);
      column.setAttribute("style", `width :
      ${container.clientWidth/gridWidth}px`);
      row.appendChild(column);
    }
  }
}

function clickResponse(event){
  event.target.classList.add("blue");
}
