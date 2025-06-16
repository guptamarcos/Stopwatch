const stop = document.querySelector(".stop");
const start = document.querySelector(".start");
const reset = document.querySelector(".reset");
const timer = document.querySelector("#time");

let miliCount = 0;
let secCount = 0;
let minCount = 0;
let Interval = null;

start.addEventListener("click", () => {
  // THIS CONDITION PRIMARILY USED TO CORRECT THE BEHAVIOUR OF THE START BUTTON BECAUSE IF WE DON'T ADD THIS 
  // THAN AFTER EACH CLICK ON START BUTTON OUR secCount TIMER WILL BE GO FAST BY EACH CLICK IT WILL COUNT 1 
  // EXTRA SECOND ALONG WITH EACH SECOND DUE TO THIS WE SAW OUR SECOND TIMER NOT WORK PROPERLY
  if(Interval) return;   
  Interval = setInterval(() => {
    miliCount++;
    if(miliCount===100){
        miliCount = 0;
        secCount++;
        if(secCount===60){
          secCount = 0;
          minCount++;
        }
    }
    let mili = miliCount.toString().padStart(2,"0");
    let sec = secCount.toString().padStart(2,"0");
    let min = minCount.toString().padStart(2,"0");
    timer.textContent = min + ":" + sec + ":" + mili;
  },10);
});

stop.addEventListener("click",()=>{
    clearInterval(Interval);
    // TO RESTART THE TIMER WE ADD ON (INTERVAL = NULL) FEATURE
    Interval = null;
    if(timer.textContent !== "00:00:00") start.textContent = "restart";
});
reset.addEventListener("click",()=>{
    clearInterval(Interval);
    start.textContent = "start";
    // TO RESTART THE TIMER WE ADD ON (INTERVAL = NULL) FEATURE
    Interval = null;
    miliCount = 0, minCount = 0; secCount = 0;
    timer.textContent = "00:00:00";
})

