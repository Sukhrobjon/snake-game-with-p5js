// constructor function

function Snake() {
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;
    // keep track of how many food snake ate
    this.total = 0
    // increase the snake size
    this.tail = []

    // eat function
    this.eat = function(pos) {
        let d = dist(this.x, this.y, pos.x, pos.y);
        if (d < 1) {
            this.total++;
            return true;
        } else {
            return false;
        }
    }

    this.death = function() {
        // check if head touched any part of the snake
        for (let i = 0; i < this.tail.length; i++) {
            let pos = this.tail[i];
            let d = dist(this.x, this.y, pos.x, pos.y);
            // it hit itself
            if (d < 1) {
                // reset the snake
                this.total = 0;
                this.tail = [];
            }
        }
    }
    // change the directions of x and y
    this.direction = function(x, y) {
        this.xspeed = x;
        this.yspeed = y;
    }
    // update the speed
    this.update = function () {
        
        // expand the snake
        
        for (let i = 0; i < this.tail.length - 1; i++) {
            this.tail[i] = this.tail[i + 1];
        }
        
        if (this.total >= 1) {
            this.tail[this.total - 1] = createVector(this.x, this.y);
        }
        

        this.x = this.x + this.xspeed*scl;
        this.y = this.y + this.yspeed*scl;

        // stop the snake going off bounds
        this.x = constrain(this.x, 0, width-scl)
        this.y = constrain(this.y, 0, height-scl)
    }

    // draw rectangle
    this.show = function () {
        // draw the whole snake(tail)
        // color
        fill(255);
        for (let i = 0; i < this.tail.length; i++) {
            rect(this.tail[i].x, this.tail[i].y, scl, scl);
        }
        rect(this.x, this.y, scl, scl);
        
    }


}