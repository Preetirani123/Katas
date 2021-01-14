const talkingCalendar = function(date) {
  
  var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  let year = date.substring(0,4);
  let month = date.substring(5,7);
  let day = date.substring(8,10);
  
  if (day[0] == 0){
    day = day.substring(1);
  }

  if(day == 1 || day == 21 || day == 31) {
    day += 'st';
  } else if(day == 2 || day == 22) {
    day += 'nd';
  } else if(day == 3 || day == 23) {
    day += 'rd';
  } else {
    day += 'th';
  }
  
  let monthTitle = monthNames[month-1];

  return monthTitle + " " + day + ", " + year;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));