// alert("Hello, Tonya");

const container_size = 600;

const n_cell = 60;
const cell_size = container_size/n_cell;

const svgns = "http://www.w3.org/2000/svg";
const container = document.getElementById( 'field' );

let x_snake = [Math.round(Math.random()* n_cell)];
let y_snake = [Math.round(Math.random()* n_cell)];
const r = 0.5 * cell_size;
let snake_length = 1;
const step = 1;
const fill_color = "blue";
const stroke_color = "blue";

//x, y - cell numbers from 0 to 60
function create_circle(x, y, fill_color, stroke_color) {
   // console.log("In create_circl: x=" + x + ", y=" + y);
    const circle = document.createElementNS(svgns, 'circle');
    circle.setAttributeNS(null, 'style', 'fill:' + fill_color + '; stroke:' + stroke_color + '; stroke-width: 1px;' );
    circle.setAttributeNS(null, 'cx', (x + 0.5) * cell_size);
    circle.setAttributeNS(null, 'cy', (y + 0.5) * cell_size);
    circle.setAttributeNS(null, 'r', r);
    return circle;
}

// apple
let x_apple = Math.round(Math.random()* n_cell);
let y_apple = Math.round(Math.random()* n_cell);
const apple = create_circle(x_apple, y_apple, "red", "red");
container.appendChild(apple);


// snake
//const snake_head = create_circle(x_snake, y_snake, "blue", "lightblue");
function init_snake(x_snake, y_snake) {
    const snake = [];
    for (let i = 0; i < x_snake.length; i++) {
        const snake_circle = create_circle(x_snake[i], y_snake[i], "blue", "lightblue");
        snake.push(snake_circle);
        container.appendChild(snake_circle);
    }
    return snake;
}

const snake = init_snake(x_snake, y_snake);

function checkEatApple() {
    if (x_snake[0] == x_apple && y_snake[0] == y_apple) {
        x_apple = Math.round(Math.random()* n_cell);
        y_apple = Math.round(Math.random()* n_cell);
        move_object(apple, x_apple, y_apple);
        return true;
    }
    return false;
    //console.log("X="+x_snake + ", Y=" + y_start_apple + ", apple X="+ x_start_apple + " apple Y=" + y_start_apple);
}

//x, y - cell numbers from 0 to 60
function move_object(circle_obj, x, y) {
    circle_obj.setAttributeNS(null, 'cx', (x + 0.5) * cell_size);
    circle_obj.setAttributeNS(null, 'cy', (y + 0.5) * cell_size);
}
function shift_snake(x_snake, y_snake) {
    const lastCoord = [x_snake[x_snake.length-1], y_snake[y_snake.length-1]];
    for (let i = 1; i < x_snake.length; i++) {
        x_snake[i] = x_snake[i-1];
        y_snake[i] = y_snake[i-1];
    }
    return lastCoord;
}

function move_snake(snake, x_snake, y_snake, needGrow, lastCoord) {
    //move_object(snake[0], x_snake[0], y_snake[0]);
    for (i = 0; i < snake.length; i++) {
        move_object(snake[i], x_snake[i], y_snake[i]);
    }
    if (needGrow) {
        const length = x_snake.length;
        x_snake[length] = lastCoord[0];
        y_snake[length] = lastCoord[1];
        const snake_circle = create_circle(x_snake[length], y_snake[length], "blue", "lightblue");
        snake.push(snake_circle);
        container.appendChild(snake_circle);
    }
}

document.addEventListener('keydown', function(e) {
    let needGrow = false;
    let lastCoord;
    switch (e.keyCode) {
        case 37:
           // alert('left');
           lastCoord = shift_snake(x_snake, y_snake);
            x_snake[0] -= step;
            needGrow =checkEatApple() ;
            break;
        case 38:
           // alert('up');
           lastCoord = shift_snake(x_snake, y_snake);
           y_snake[0] -= step;
           needGrow =checkEatApple();
            break;
        case 39:
            lastCoord = shift_snake(x_snake, y_snake);
            x_snake[0] += step;
            // alert('right');
            needGrow =checkEatApple();
            break;
        case 40:
            lastCoord = shift_snake(x_snake, y_snake);
            y_snake[0] += step;
            // alert('down');
            needGrow =checkEatApple();
            break;
    }
    //move_object(snake[0], x_snake[0], y_snake[0]);
    move_snake(snake, x_snake, y_snake, needGrow, lastCoord);
});





// function eat_apple() {
//     if x_start = x_start_apple && y_start = y_start_apple
// }




