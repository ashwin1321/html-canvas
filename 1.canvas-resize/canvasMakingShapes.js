var canvas = document.querySelector('canvas');  // grab a element

//full window lai canvas banauna lai
canvas.width = window.innerWidth;  // set width
canvas.height = window.innerHeight;  // set height

// drawing in canvas
var c = canvas.getContext('2d');

// DRAWING RECTANGLE
c.fillStyle = "blue";
// c.fillRect(x,y,width,height)       // where and what dimensions
c.fillRect(100, 100, 100, 100);
c.fillStyle = "purple"     // yesko talako sab yei color ko hunxa
c.fillRect(500, 100, 100, 100);
c.fillStyle = ('tomato')
c.fillRect(500, 300, 100, 100);
console.log(canvas)


// DRAWING LINE
c.beginPath();
// c.moveTo(x,y)
c.moveTo(50, 300);  // starting point to the line
c.lineTo(300, 100)
c.lineTo(400, 300)
// can create as many lineTo

c.strokeStyle = "green";  // giving color to line
c.stroke()          // call this function to draw the line



// DRAWING ARCH/CIRCLE
// c.arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, counterclockwise?: boolean | undefined):
// c.beginPath()           // yo nabhaye agadi ko sangai jodinxa
// c.arc(300, 300, 50, 0, Math.PI * 2, false)
// c.strokeStyle = "lime"
// c.stroke()

for (i = 0; i < 100; i++) {

    x = Math.random() * window.innerWidth;
    y = Math.random() * window.innerHeight;

    c.beginPath()           // yo nabhaye agadi ko sangai jodinxa
    c.arc(x, y, 40, 0, Math.PI * 2, false);
    c.strokeStyle = "blue";
    c.stroke();
}