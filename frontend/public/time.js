function startTime(){
    var dt = new Date();
    document.getElementById("datetime").innerHTML = dt.toLocaleString();
    setTimeout(startTime, 1000)
}
startTime() 

// function startTime() {
//     const today = new Date();
//     let h = today.getHours();
//     let m = today.getMinutes();
//     let s = today.getSeconds();
//     m = checkTime(m);
//     s = checkTime(s);
//     document.getElementById('datetime').innerHTML =  h + ":" + m + ":" + s;
//     setTimeout(startTime, 1000);
// }
  
// function checkTime(i) {
//     if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
//     return i;
// }
