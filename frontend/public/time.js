const chill = document.querySelector(".chill");
const fail = document.querySelector('.false');
const title = document.getElementById('title');
// const bgcolor = document.getElementsById('bg');
const time = document.getElementById("datetime");
const changetext = document.querySelector('.changecolortext');
// const funky = document.querySelector('.funky-theme');

//Day-Night color changing
// var DayNightColors = ['#242928', '#97afca', '#374065', '#574661'];
// funky.addEventListener('click', DayNightCycle()) 
// function DayNightCycle() {
    
//     var now = new Date();
//     var hours = now.getHours();
//     if (20 <= hours && hours < 4) { //Night
//        bgcolor.style.color = DayNightColors;
//     }
//     if (5 <= hours && hours < 8) { //Dawn
//         bgcolor.style.color = DayNightColors[1];
//     }
//     if (9 <= hours && hours < 17) { //Day
//         bgcolor.style.color = DayNightColors[2];
//     }
//     if (18 <= hours && hours < 20) { //Dusk
//         bgcolor.style.color = DayNightColors[3];
//     }
// }

//Random "Just Do It" color
var colors = ['red', 'white', 'purple', "orange", "cyan", "blue", "yellow"];
var colorsfail = ['red', 'white'];
let count = 0;
let check = 0;

function startTime(){
    var dt = new Date();
    time.innerHTML = dt.toLocaleString();
    setTimeout(startTime, 500)
}

startTime();

function Changecolor(){
    if(check == 1){
        var random_colorfail = colorsfail[count];
        count = (count+1)%2;
        fail.style.color = random_colorfail;
        var random_color = colors[Math.floor(Math.random() * colors.length)];
        chill.style.color = random_color;
        title.style.color = random_color;
        setTimeout(Changecolor, 300);
    } else {
        fail.style.color = "red";
        chill.style.color = "red";
        title.style.color = "white";
    }
}

Changecolor();

function addpause(){
    check = (check+1)%2;
    Changecolor();
}


changetext.addEventListener('click', addpause);



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
