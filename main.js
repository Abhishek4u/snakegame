



function init() {
    canvas = document.getElementById("mycanvas");
    H = canvas.height = 500;
    W = canvas.width = 500; 
    pen = canvas.getContext('2d');
    game_over = false;
    rect = {
        x:20,
        y:20,
        w:40,
        h:40,
        speed:10,
    }
    
} 
function draw() {
    pen.clearRect(0,0,W,H)
    pen.fillStyle = 'cyan';
    pen.fillRect(rect.x,rect.y,rect.w,rect.h);
    
   
}
function update() {
    
    rect.x += rect.speed;
    if(rect.x > W - rect.w || rect.x < 0) {
        rect.speed *= -1;
        // swapping bw +ve and negative every time it comes
    }
}
function gameloop() {
    if(game_over == true) {
        clearInterval(f);
    }
    draw();
    update();
}

init();
gameloop();

var f = setInterval(gameloop,100);