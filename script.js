const colorInput = document.getElementById('color');
const weight = document.getElementById('weight');
const clear = document.getElementById('clear');
const paths = [];
let currentPath = [];

function setup() {
     //canvas based on the window size, leaving space for the sidebar
    createCanvas(window.innerWidth - 60, window.innerHeight);  // 60px for sidebar width
    background(255);
}

function draw() {
    noFill();
    
    if(mouseIsPressed){
        const point = {
            x: mouseX,
            y: mouseY,
            color: colorInput.value,
            weight: weight.value
        };
        currentPath.push(point);
    }

    paths.forEach(path => {
        beginShape();
        path.forEach(point => {
            stroke(point.color);
            strokeWeight(point.weight);
            vertex(point.x, point.y);
        });
        endShape();
    });
}

//  a new path when mouse is pressed
function mousePressed() {
    currentPath = [];
    paths.push(currentPath);
}

// Clear the canvas when the clear button is pressed
clear.addEventListener('click', () => {
    paths.splice(0);  // Empty the paths array
    background(255);  // Clear the canvas
});

// Resize the canvas if the window is resized
function windowResized() {
    resizeCanvas(window.innerWidth - 60, window.innerHeight);  // Adjust canvas size 
}
