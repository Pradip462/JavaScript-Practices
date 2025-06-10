const clock = document.getElementById("clock");

//javascript code for controlling the real time digital clock
//Using SetInterval to update the clock every second 



//See the syntax properly as it is very important
//1000 miliseconds = 1 second
setInterval(function(){
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
},1000);