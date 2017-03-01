$(function() {

// create a wrapper around native canvas element (with id="c")
var canvas = new fabric.Canvas('fabric-cont');
canvas.setHeight(canvas.getHeight() * 1.5);

var scaleX = 1;
var scaleY = 1;//2;

// create a rectangle object
var rect = new fabric.Rect({
  left: 0,
  top: 0,
  fill: 'red',
  width: 200*scaleX,
  height: 200*scaleY
});

// "add" rectangle onto canvas
canvas.add(rect);

});
