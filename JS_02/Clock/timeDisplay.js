let currentTime;
function updateTime() {
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let second=currentTime.getSeconds();
    if (minutes < 10) minutes = '0' + minutes;
    let timeString = hours + ':' + minutes+':'+second;
    document.getElementById('time').innerText = timeString;
   renderClock(hours,minutes,second);
}

function updateDate() {
    const weekdays = ['MONDAY', 'TUESDAY', 'WENESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];
    const months = ['JAN', 'FED', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    let weekdayIndex = currentTime.getDay();
    let monthIndex = currentTime.getMonth();
    let date = currentTime.getDate();
    let weekday = weekdays[weekdayIndex];
    let month = months[monthIndex];
    let dateString = weekday + ', ' + month + ' ' + date;
    document.getElementById('day').innerText = dateString;
}
function renderClock(hours,minutes,second){
    secondRatio=second/60;
    minnutesRatio=(minutes+secondRatio)/60;
    if(hours>12)hours-=12;
    hourRatio=(hours+ minnutesRatio)/12;
    document.getElementById('second-hand').style.transform = "rotate("+converDege(secondRatio)+"deg)";
    document.getElementById('minute-hand').style.transform = "rotate("+converDege(minnutesRatio)+"deg)";
    document.getElementById('hour-hand').style.transform = "rotate("+converDege(hourRatio)+"deg)";

}
function converDege(ratio){
return ratio*360-180;
}
setInterval(() => {
    currentTime=new Date();
    updateTime();
    updateDate();
}, 1000);