canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");

color="blue";

var width_of_line=10;
var mouseEvent="empty";
var last_position_of_x, last_position_of_y;

//codes for mouseleave
canvas.addEventListener("mouseleave",my_mouse_leave);
function my_mouse_leave(e){
console.log("mouseleave");
mouseEvent="mouseleave";
}

//codes for mouseup
canvas.addEventListener("mouseup",my_mouse_up);
function my_mouse_up(e){
console.log("mouseup");
mouseEvent="mouseup";
}

//codes for mousedown
canvas.addEventListener("mousedown",my_mouse_down);
function my_mouse_down(e){
console.log("mousedown");
mouseEvent="mousedown";
}

//codes for mousedown-mousemove
canvas.addEventListener("mousemove",my_mouse_move);
function my_mouse_move(e){
current_position_of_x=e.clientX-canvas.offsetLeft;
current_position_of_y=e.clientY-canvas.offsetTop;

if(mouseEvent=="mousedown"){
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width_of_line;
ctx.moveTo(last_position_of_x,last_position_of_y);
ctx.lineTo(current_position_of_x,current_position_of_y);
ctx.stroke();


}
last_position_of_x=current_position_of_x;
last_position_of_y=current_position_of_y;
}




//codes for touch event class83. this section of codes will only work for mobile screens
var width=screen.width;
new_canvas_width=screen.width-70;
new_canvas_height=screen.height-300;

if(width<992){
    document.getElementById("mycanvas").width=new_canvas_width;
    document.getElementById("mycanvas").height=new_canvas_height;
    document.body.style.overflow="hidden";
}
//codes for event touch start(click)
canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e){
last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
last_position_of_y=e.touches[0].clientY-canvas.offsetTop;
}

//codes for  event  touch move
canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e){
current_position_of_mx=e.touches[0].clientX-canvas.offsetLeft;
current_position_of_my=e.touches[0].clientY-canvas.offsetTop;
//codes for drawing a line
ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=4;
ctx.moveTo(last_position_of_x,last_position_of_y);
ctx.lineTo(current_position_of_mx,current_position_of_my);
ctx.stroke();
last_position_of_x=current_position_of_mx;
last_position_of_y=current_position_of_my;
}
