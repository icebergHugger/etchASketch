let gridSize = 10;
let rainbow;
let colorButtons;

const container = document.querySelector("#container");
createGrid();

function createGrid() {
  for(i = 0; i < gridSize; i++){
    let row = document.createElement("div");
    row.classList.add("row");
    row.setAttribute("style", `height :
    ${container.clientWidth/gridSize}px`)
    container.appendChild(row);
    for(j = 0; j < gridSize; j++){
      let column = document.createElement("div");
      column.classList.add("column");
      column.setAttribute("rowNumber", i);
      column.setAttribute("columnNumber", j);
      column.addEventListener("mouseover", clickResponse);
      column.setAttribute("style", `width :
      ${container.clientWidth/gridSize}px`);
      row.appendChild(column);
    }
  }
}

let colors = document.getElementsByName("color");
let colorValue;

function clickResponse(event){
  for(let i = 0; i < colors.length; i++){
    if(colors[i].checked){
        colorValue = colors[i].value;
    }
  }
    event.target.style.backgroundColor = "";
    event.target.className = "";
    event.target.classList.add("column");
    event.target.classList.add(colorValue);
}

/*
function rainbowColor(){
  let randomColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
  return randomColor;
}
*/

let clearButton = document.querySelector("#clearButton");
clearButton.addEventListener("click", clear);

let sizeButton = document.querySelector("#sizeButton");
sizeButton.addEventListener("click", resize);

let sizeInput = document.querySelector("#sizeInput");
let message = document.querySelector("#errorMessage");


function resize(){
  let newSize = sizeInput.value
  if(isNaN(newSize)){
    message.textContent = "Please select number."
  }else if(newSize === ""){
    message.textContent = "Please write a number."
  }else{
    gridSize = newSize;
    clear();
    message.textContent = ""
  }
}

function clear() {
      var child = container.lastElementChild;
      while (child) {
          container.removeChild(child);
          child = container.lastElementChild;
      }
      createGrid();
}
