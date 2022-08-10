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

button.addEventListener('click', theNewGrid);
    
function getNewGrid() {
    container.innerText = ''; // clear everything
}

function theNewGrid(){
       getNewGrid();
       let number = prompt("How many squares per side for the new grid?" );
      
       changeGrid(number, number); // pass the number as an argument
};

