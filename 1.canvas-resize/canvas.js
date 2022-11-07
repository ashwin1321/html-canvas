var canvas = document.querySelector('canvas');  // grab a element

//full window lai canvas banauna lai
canvas.width = window.innerWidth;  // set width
canvas.height = window.innerHeight;  // set height

// drawing in canvas
var c = canvas.getContext('2d');

// c.fillRect(x,y,width,height)       // where and what dimensions
c.fillRect(100, 100, 100, 100);
c.fillRect(500, 100, 100, 100);
console.log(canvas)