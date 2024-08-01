const time=document.querySelector("#time");
const stop=document.querySelector("#stop");
const start=document.querySelector("#start");
const reset=document.querySelector("#reset");
let[seconds,minutes,hour]=[0,0,0];
let timer=null;
 const stopwatch=()=>{
    seconds++;
    if(seconds===60){
        minutes++;
        seconds=0;
        if(minutes==60){
            hour++;
            minutes=0;
        }
    }
    let h=hour<10?"0"+hour:hour;
    let m=minutes<10?"0"+minutes:minutes;
    let s=seconds<10?"0"+seconds:seconds;
    time.innerHTML=h+":"+m+":"+s;
 }
 const watch=()=>{
    if(timer!==null){
        clearInterval(timer);
    }
    timer=setInterval(stopwatch,1000);
 }
let a= start.addEventListener("click",()=>{
    watch();
});
const watchstop=()=>{
    clearInterval(timer);
}
const watchreset=()=>{
    clearInterval(timer);
    [seconds,minutes,hour]=[0,0,0];
    time.innerHTML="00:00:00"
}
let b= stop.addEventListener("click",()=>{
    watchstop();
});
let c= reset.addEventListener("click",()=>{
    watchreset();
});