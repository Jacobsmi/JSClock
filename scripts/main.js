const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const ampm = document.getElementById("am-pm");

// Initial call to get the method running and the recursion started
window.onload = function() {
    setTime();
};


function setTime(){
    var d = new Date()
    
    numHours = d.getHours();
    if (numHours > 12){
        numHours = numHours - 12;
        hours.innerHTML = numHours;
        ampm.innerHTML = "PM"
    }else{
        hours.innerHTML = numHours;
        ampm.innerHTML = "AM"
    }
    
    numMinutes = d.getMinutes();
    if (numMinutes < 10){
        strMinutes = "0"+ numMinutes.toString()
        minutes.innerHTML = strMinutes;
    }else{
        minutes.innerHTML = numMinutes;
    }
    
    numSeconds = d.getSeconds();
    if(numSeconds < 10){
        strSeconds = "0"+ numSeconds.toString();
        seconds.innerHTML = strSeconds;
    }else{
        seconds.innerHTML = numSeconds;
    }
    
    // Wait a second and then reset the time
    setTimeout(setTime, 1000);

}

