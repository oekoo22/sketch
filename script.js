const container = document.querySelector('.container');

// Add 16 divs
/*function createGrid() {
    for (let i = 1; i < 257; i++) {
        
        const div = document.createElement('div');
        //div.classList.add("square");
        div.style.cssText = "border: 1px solid black; height: 35px; width: 35px"; 
        div.classList.add("square"); 
        div.addEventListener("mouseover", () =>{
            div.style.transition = "background-color .7s";
            div.style.backgroundColor = "black";
        });
        container.appendChild(div);
    
    }
}

createGrid();*/


function changeGrid(rows, cols) {
    
    for (i = 0; i < (rows * cols); i++){
        container.style.setProperty('--grid-rows', rows);
        container.style.setProperty('--grid-cols', cols);
        const div = document.createElement('div');
        //div.classList.add("square");
        div.style.cssText = "border: 1px solid black; height: 35px; width: 35px"; 
        div.classList.add("square"); 
        div.addEventListener("mouseover", () =>{
            div.style.transition = "background-color .7s";
            div.style.backgroundColor = "black";
        });
        container.appendChild(div);
    };
  };

  changeGrid(16, 16);




const button = document.getElementById('Btn');
const clearBtn = document.getElementById('clear');

button.addEventListener('click', theNewGrid);
clearBtn.addEventListener('click', clearGrid);

function clearGrid() {
    getNewGrid();
    changeGrid(16, 16);

}
    
function getNewGrid() {
    container.innerText = ''; // clear everything
}

function theNewGrid(){
       getNewGrid();
       let number = prompt("How many squares per side for the new grid?" );
        if (number <= 100) {
            changeGrid(number, number); // pass the number as an argument
        } else {
            number = prompt("Please enter a number lower or equal to 100");
            changeGrid(number, number);
        }
       
};

/* Random Color as a button?
    function randomColor() {
  var generateColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  return generateColor;
}*/
