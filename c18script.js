//////////////////////////////////////// Chronometer:
/*
Chronometer
Write an interactive web page with a button to start and stop a chronometer counting the number of elapsed seconds.
*/

const increaseCounter = () =>{

    const counter = Number(counterElement.textContent);


counterElement.textContent = counter + 1;
};

const counterElement = document.getElementById("counter");

const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
let intervalId;

start.addEventListener("click", e=>{
    if(! intervalId === undefined){
        return;
    }
    else{
        intervalId = setInterval(increaseCounter, 1000);

    }

    
});

stop.addEventListener("click", e=>{
    clearInterval(intervalId);
    intervalId = undefined;
});

reset.addEventListener("click", e=>{
    counterElement.textContent = 0;
    clearInterval(intervalId);
    intervalId = undefined;
});






///////////////////////////////////////////////////////////////////////////////////////
//Animated Bouncing Ball //////////////////////////////////////////////////////////////

const ball = document.getElementById("ball");
const sta = document.getElementById("sta");
const sto = document.getElementById("sto");

let dir = 1;

document.getElementById("frame").style.width = "1000px";

sta.addEventListener("click", e=>{
    requestAnimationFrame(moveBall);
})

moveBall = () =>{
    let xBall = parseFloat(getComputedStyle(ball).left);
    
    if(dir === 1){
        if(xBall < 1000){
        ball.style.left = (xBall + 10) + "px";
        requestAnimationFrame(moveBall);
        } else {
            dir = -1;
            requestAnimationFrame(moveBall);
        }
    } else if( dir !== 1){
        if (xBall > 0){
            ball.style.left = (xBall - 10) + "px";
            requestAnimationFrame(moveBall);
        }   else {
            dir = 1;
            requestAnimationFrame(moveBall);
        }     
    }
}
/*
const ball = document.getElementById("ball");
const sta = document.getElementById("sta");
const sto = document.getElementById("sto");

let dir = 1;

document.getElementById("frame").style.width = "1000px";

sta.addEventListener("click", e=>{
    let plusAnimation = requestAnimationFrame(moveBall);
})

moveBall = () =>{
    let xBall = parseFloat(getComputedStyle(ball).left);
    if(xBall < 1000){
        ball.style.left = (xBall + 10) + "px";
        requestAnimationFrame(moveBall);

    } else if(xBall === 1000){
        let minAnimation = requestAnimationFrame(moveBallMin);

    }
}

moveBallMin = ()=>{
    let xBall = parseFloat(getComputedStyle(ball).left);

    if(xBall > 0) {

        ball.style.left = (xBall - 10) + "px";
        requestAnimationFrame(moveBallMin);
    } else {
        requestAnimationFrame(moveBall);
    }

}
 */