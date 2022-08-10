const container = document.querySelector('.container');

// Add 16 divs
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


const button = document.getElementById('Btn');

button.addEventListener('click', theNewGrid);
    
function getNewGrid() {
    container.innerText = ''; // clear everything
}

function theNewGrid(){
       getNewGrid();
       let number = prompt("How many squares per side for the new grid?" );
      
       createGrid(number); // pass the number as an argument
};

