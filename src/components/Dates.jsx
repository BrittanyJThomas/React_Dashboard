import React from "react";

const day = new Date();
const weekDay = new Array(7);
weekDay[0] = "Sunday";
weekDay[1] = "Monday";
weekDay[2] = "Tuesday";
weekDay[3] = "Wednesday";
weekDay[4] = "Thursday";
weekDay[5] = "Friday";
weekDay[6] = "Saturday";
let dayofWeek = weekDay[day.getDay()];
console.log(dayofWeek);

const month = new Date();
const currentMonth = new Array(12); 
currentMonth[0] = "January";
currentMonth[1] = "February";
currentMonth[2] = "March";
currentMonth[3] = "April";
currentMonth[4] = "May";
currentMonth[5] = "June";
currentMonth[6] = "July";
currentMonth[7] = "August";
currentMonth[8] = "September";
currentMonth[9] = "October";
currentMonth[10] = "November";
currentMonth[11] = "December"; 

let monthofYear = currentMonth[month.getMonth()];
console.log(monthofYear);

let numDay = day.getDate();
console.log(numDay);

let currentYear = new Date().getFullYear();
console.log(currentYear);

function Dates(){
return(
<div>
<p className="headerDateGreeting">
Today is {dayofWeek} {monthofYear} {numDay}, {currentYear} 
</p>
</div>
);
}

export default Dates;