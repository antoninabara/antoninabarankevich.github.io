// alert("Hello, Tonya");

const svgns = "http://www.w3.org/2000/svg";
const container = document.getElementById( 'field' );
let x = 100;
let y = 100;
const x_start = 100;
const y_start = 100;
const r = 10;
const step = 2 * r;
const fill_color = "blue";
const stroke_color = "lightblue"

const circle = document.createElementNS(svgns, 'circle');
circle.setAttributeNS(null, 'style', 'fill: ' + fill_color + '; stroke:' + stroke_color + '; stroke-width: 1px;' );
circle.setAttributeNS(null, 'cx', x_start);
circle.setAttributeNS(null, 'cy', y_start);
circle.setAttributeNS(null, 'r', r);
container.appendChild(circle);

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
    circle.setAttributeNS(null, 'cx', x);
    circle.setAttributeNS(null, 'cy', y);
});







// for (var x = 0; x < 500; x += 50) {
//     for (var y = 0; y < 300; y += 50) {
//     var circle = document.createElementNS(svgns, 'circle');
//     circle.setAttributeNS(null, 'cx', x);
//     circle.setAttributeNS(null, 'cy', y);
//     circle.setAttributeNS(null, 'r', 50);
//     circle.setAttributeNS(null, 'style', 'fill: none; stroke: lightblue; stroke-width: 1px;' );
//     container.appendChild(circle);
//     }
// }




// for (var x = 0; x < 500; x += 50) {
//     for (var y = 0; y < 300; y += 50) {
//         var circle = document.createElementNS(svgns, 'circle');
//         circle.setAttributeNS(null, 'cx', x);
//         circle.setAttributeNS(null, 'cy', y);
//         circle.setAttributeNS(null, 'r', 50);
//         circle.setAttributeNS(null, 'style', 'fill: none; stroke: lightblue; stroke-width: 1px;' );
//         container.appendChild(circle);
//     }
// }