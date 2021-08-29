// alert("Hello, Tonya");

const container_size = 600;

const n_cell = 60;
const cell_size = container_size/n_cell;

const svgns = "http://www.w3.org/2000/svg";
const container = document.getElementById( 'field' );

let x_snake = Math.round(Math.random()* n_cell);
let y_snake = Math.round(Math.random()* n_cell);
const r = 0.5 * cell_size;
const step = 1;
const fill_color = "blue";
const stroke_color = "lightblue";

//x, y - cell numbers from 0 to 60
function create_circle(x, y, fill_color, stroke_color) {
    console.log("In create_circl: x=" + x + ", y=" + y);
    const circle = document.createElementNS(svgns, 'circle');
    circle.setAttributeNS(null, 'style', 'fill:' + fill_color + '; stroke:' + stroke_color + '; stroke-width: 1px;' );
    circle.setAttributeNS(null, 'cx', x * cell_size);
    circle.setAttributeNS(null, 'cy', y * cell_size);
    circle.setAttributeNS(null, 'r', r);
    return circle;
}

// apple
let x_start_apple = Math.round(Math.random()* n_cell);
let y_start_apple = Math.round(Math.random()* n_cell);
const apple = create_circle(x_start_apple, y_start_apple, "red", "red");
container.appendChild(apple);



//snake
const snake = create_circle(x_snake, y_snake, "blue", "lightblue");
container.appendChild(snake);

function checkEatApple() {
    if (x_snake == x_start_apple && y_snake == y_start_apple) {
        x_start_apple = Math.round(Math.random()* n_cell);
        y_start_apple = Math.round(Math.random()* n_cell);
        move_object(apple, x_start_apple, y_start_apple);
    }
    console.log("X="+x_snake + ", Y=" + y_start_apple + ", apple X="+ x_start_apple + " apple Y=" + y_start_apple);
}

//x, y - cell numbers from 0 to 60
function move_object(circle_obj, x, y) {
    circle_obj.setAttributeNS(null, 'cx', (x + 0.5) * cell_size);
    circle_obj.setAttributeNS(null, 'cy', (y + 0.5) * cell_size);
}
document.addEventListener('keydown', function(e) {
    switch (e.keyCode) {
        case 37:
           // alert('left');
            x_snake -= step;
            checkEatApple() ;
            break;
        case 38:
           // alert('up');
           y_snake -= step;
           checkEatApple();
            break;
        case 39:
            x_snake += step;
            // alert('right');
            checkEatApple();
            break;
        case 40:
            y_snake += step;
            // alert('down');
            checkEatApple();
            break;
    }
    move_object(snake, x_snake, y_snake);
});





// function eat_apple() {
//     if x_start = x_start_apple && y_start = y_start_apple
// }




