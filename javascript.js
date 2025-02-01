// STORE HTML ELEMENTS IN VAR
const button = document.querySelector("#btn")
const container = document.querySelector("#con");

 // CREATE GRID
function gridcalc(gridsize) {
    let px = (960/(Math.sqrt(gridsize)))-8;

    for ( let i = 0; i < gridsize; i++) {
        let square = document.createElement("div");


        // STYLING OF THE SQUARE
        square.style.width = `${px}px`;
        square.style.height = `${px}px`;
        square.style.backgroundColor = "black";
        square.style.margin = "4px";
        square.style.display = "block";
        square.textContent = "o"
        square.style.minWidth = `${px}px`;
        square.style.minHeight = `${px}px`;

        // ADD HOVER EFFECT
        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = "blue";
        });
        square.addEventListener("mouseleave", () => {
            square.style.backgroundColor = "black";
        });

        // ADD THE ELEMENT TO THE DIV CONTAINER
        container.appendChild(square);  
    }
};

// BUTTON EVENT ON CLICK
button.addEventListener("click", function() {
    let gridsize = prompt("Enter the square number");
    // Convert gridsize to integer and validate
    gridsize = parseInt(gridsize);

    if (isNaN(gridsize) || gridsize <= 0) {
        alert("Please enter a valid number greater than 0.");
    } else {
        gridcalc(gridsize);  // Call gridcalc with the valid gridsize
    }
});
