// alert("Hello, Tonya");

const svgns = "http://www.w3.org/2000/svg";
const container = document.getElementById( 'field' );

const circle = document.createElementNS(svgns, 'circle');
circle.setAttributeNS(null, 'style', 'fill: green; stroke: lightblue; stroke-width: 1px;' );
circle.setAttributeNS(null, 'cx', 100);
circle.setAttributeNS(null, 'cy', 100);
circle.setAttributeNS(null, 'r', 10);
container.appendChild(circle);

let my_coord_x = 100;
let y = 100;
document.addEventListener('keydown', function(e) {
    switch (e.keyCode) {
        case 37:
           // alert('left');
           my_coord_x -= 10;
            break;
        case 38:
           // alert('up');
           y += 10;
            break;
        case 39:
            my_coord_x += 10;
            // alert('right');
            break;
        case 40:
            y -= 10;
            // alert('down');
            break;
    }
    circle.setAttributeNS(null, 'cx', my_coord_x);
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