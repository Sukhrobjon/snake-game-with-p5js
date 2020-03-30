var s;
var scl = 20;
// food "object"
var food;

function setup() {
    createCanvas(600, 600);
    s = new Snake();
    // slowdown the fram
    frameRate(10);
    // creat the food using vector
    pickLocation();
}

// insert the food on the same grid as snake
function pickLocation() {
    var rows = floor(height/scl);
    var cols = floor(width/scl);
    // draw the food
    food = createVector(floor(random(cols)), floor(random(rows)));

    // expand the food back out
    food.mult(scl);
}

function draw() {
    background(51);
    // eat the food
    if (s.eat(food)) {
        // relocate new food
        pickLocation();
    }
    s.death()
    s.update();
    s.show();
    // color the snake
    fill(255, 0, 255);
    rect(food.x, food.y, scl, scl);

}

// adding global event to control the snake with
// up, down, left, right arrows
function keyPressed() {
    if (keyCode == UP_ARROW ) {
        // x stays the same only y changes negative
        s.direction(0, -1)
    } else if (keyCode == DOWN_ARROW) {
        // x stays the same only y changes positively
        s.direction(0, 1)
    } else if (keyCode == RIGHT_ARROW) {
        // snake moves along x axis
        s.direction(1, 0)
    } else if (keyCode == LEFT_ARROW) {
        // snake moves along opposite x axis
        s.direction(-1, 0)
    }
}


function mousePressed() {
    s.total++;
}