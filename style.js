date = new Date();
const hr = document.getElementById('hr')
const min = document.getElementById('min')
const sec = document.getElementById('sec')
const weekday = document.getElementById('weekday')
const CDate =document.getElementById('CDate')


date = new Date();

//weakday
const ArrayOfDay = ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];
const day = ArrayOfDay[date.getDay()]  
console.log(day)

//date month year
const CurrentDate = date.getDate()
console.log(CurrentDate)
const ArrayOfMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const month = ArrayOfMonth[date.getMonth()];
console.log(month)
const Year = date.getFullYear()
console.log(Year)

setInterval(() => {
    date = new Date();

//weakday
const ArrayOfDay = ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];
const day = ArrayOfDay[date.getDay()]  
console.log(day)

//date month year
const CurrentDate = date.getDate()
console.log(CurrentDate)
const ArrayOfMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const month = ArrayOfMonth[date.getMonth()];
console.log(month)
const Year = date.getFullYear()
console.log(Year)

//Time
const hour = date.getHours()
const minute = date.getMinutes()
const second = date.getSeconds()
     
H = hour*30+minute/2
M = minute*6
S = second*6
    
hr.style.transform = `rotate(${H}deg)`;
min.style.transform = `rotate(${M}deg)`;
sec.style.transform = `rotate(${S}deg)`;
weekday.innerHTML = day
CDate.innerHTML = CurrentDate+" "+month+" "+Year

}, 1000);
