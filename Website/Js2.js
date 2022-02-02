var canvas = document.querySelector('canvas')
	;
	
canvas.width = 1000;
canvas.height = 600;

var c = canvas.getContext('2d');

console.log(canvas);

for (var i = 0; i < 100; i++) {
    var x = Math.random() * 1000;
    var y = Math.random() * 600;
    var r = Math.random() * 50;
    var color = ['red', 'chartreuse', 'blue', 'fuchsia', 'yellow', 'black', 'grey', 'aliceblue', 'aqua', 'bisque', 'blueviolet', 'green', 'orange', 'pink', 'purple', 'lightpink', 'mediumspringgreen'];
    var strokeStyle = color[Math.floor(Math.random() * color.length)];
    c.beginPath();
    c.arc(x, y, r, 0, Math.PI * 2, false);
    c.strokeStyle = strokeStyle;
    c.stroke();
}
