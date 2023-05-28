var canvas = document.getElementById("canvas"); // this only finds the first element
// var canvas_list = document.getElementsByTagName("canvas"); // this finds all elements, use for let to iterate
// console.log(canvas);

var ctx = canvas.getContext("2d");
var particlesOnScreen = 300;
var particlesArray = [];
var w,h;
w = canvas.width = window.innerWidth;
h = canvas.height = window.innerHeight;

function random(min, max) {
    return min + Math.random() * (max - min + 1);
};

function clientResize(ev){
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
};
window.addEventListener("resize", clientResize);

function createSnowFlakes() {
    for(var i = 0; i < particlesOnScreen; i++){
        particlesArray.push({
            x: Math.random() * w,  
            y: Math.random() * h,  
            opacity: Math.random(),
            speedX: random(-0.25, 0.25),  
            speedY: random(0.25, 0.5),
            radius:random(1, 6),
        })
    }
};

function drawSnowFlakes(){
    for(var i = 0; i < particlesArray.length; i++){    
        var gradient = ctx.createRadialGradient(  
            particlesArray[i].x,   
            particlesArray[i].y,   
            0,                     
            particlesArray[i].x,   
            particlesArray[i].y,   
            particlesArray[i].radius  
            );

            gradient.addColorStop(0, "rgba(255, 102, 102," + particlesArray[i].opacity + ")");  // red
            gradient.addColorStop(.8, "rgba(255, 240, 245," + particlesArray[i].opacity + ")");  // white
            gradient.addColorStop(1, "rgba(255, 155, 155," + particlesArray[i].opacity + ")");   // pink
          
            ctx.beginPath(); 
            ctx.arc(
            particlesArray[i].x,  
            particlesArray[i].y,  
            particlesArray[i].radius,  
            0,                         
            Math.PI*2,                 
            false                     
            );

        ctx.fillStyle = gradient;   
        ctx.fill();                 
    }
};

function moveSnowFlakes(){
    for (var i = 0; i < particlesArray.length; i++) {
        particlesArray[i].x += particlesArray[i].speedX;     
        particlesArray[i].y += particlesArray[i].speedY;     

        if (particlesArray[i].y > h) {
            particlesArray[i].x = Math.random() * w;
            particlesArray[i].y = -50;
        }
    }
};

function updateSnowFall  () {
    ctx.clearRect(0, 0, w, h);
    drawSnowFlakes();
    moveSnowFlakes();
};

setInterval(updateSnowFall,15);
createSnowFlakes();