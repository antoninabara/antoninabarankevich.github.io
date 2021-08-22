// alert("Hello, Tonya");

const container_size = 600;

const n_cell = 60;
const cell_size = container_size/n_cell;

const svgns = "http://www.w3.org/2000/svg";
const container = document.getElementById( 'field' );

const x_start = Math.round(Math.random()* n_cell);
const y_start = Math.round(Math.random()* n_cell);
const r = 1 * cell_size;
const step = cell_size;
const fill_color = "blue";
const stroke_color = "lightblue";

//x, y - cell numbers from 0 to 60
function create_circle(x, y, fill_color, stroke_color) {
    const circle = document.createElementNS(svgns, 'circle');
    circle.setAttributeNS(null, 'style', 'fill:' + fill_color + '; stroke:' + stroke_color + '; stroke-width: 1px;' );
    circle.setAttributeNS(null, 'cx', x * cell_size);
    circle.setAttributeNS(null, 'cy', y * cell_size);
    circle.setAttributeNS(null, 'r', r);
    return circle;
}

// apple
const x_start_apple = Math.round(Math.random()* n_cell);
const y_start_apple = Math.round(Math.random()* n_cell);
const apple = create_circle(x_start_apple, y_start_apple, "red", "red");
container.appendChild(apple);



//snake
const snake = create_circle(x_start, y_start, "blue", "lightblue");
container.appendChild(snake);

let x = x_start * cell_size;
let y = y_start * cell_size;
document.addEventListener('keydown', function(e) {
    switch (e.keyCode) {
        case 37:
           // alert('left');
            x -= step;
            break;
        case 38:
           // alert('up');
           y -= step;
            break;
        case 39:
            x += step;
            // alert('right');
            break;
        case 40:
            y += step;
            // alert('down');
            break;
    }
    snake.setAttributeNS(null, 'cx', x);
    snake.setAttributeNS(null, 'cy', y);
});






