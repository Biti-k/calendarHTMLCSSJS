const calendar = document.getElementById('calendar');
const monthEl = document.getElementById('month');
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();


const drawBlankCalendar = () => {
    for(let i = 0; i < 35; i++){
        const day = document.createElement('div');
        day.classList.add('day');

        const dayText = document.createElement('p');
        dayText.classList.add('day-text');

        const dayNumber = document.createElement('p');
        dayNumber.classList.add('day-number');

        const eventName = document.createElement('small');
        eventName.classList.add('event-name');

        day.appendChild(dayText);
        day.appendChild(dayNumber);
        day.appendChild(eventName);

        calendar.appendChild(day);
    }
}

const updateCalendar = (month, year, events) => {
    const dayElements = document.querySelectorAll('.day');
    const dayMonth = document.getElementById('monthYear');
    const theFirst = new Date();
    theFirst.setMonth(month);
    theFirst.setFullYear(year);


    const theFirstDayOfWeek = theFirst.getDay();
    console.log(theFirstDayOfWeek);
    const monthName = months[month];
    const monthWithYear = `${year} - ${months[month]}`;
    dayMonth.innerText = monthWithYear;
    const daysInMoth = new Date(year, month + 1, 0).getDate();
    console.log(daysInMoth);
    let dayCounter = 1;
    for(let i = 0; i < dayElements.length; i++){
        const day = dayElements[i]
        const dayText = day.querySelector('.day-text');
        dayText.innerText = days[i%7];

        const dayNumber = day.querySelector('.day-number');
        if(i >= theFirstDayOfWeek - 1 && dayCounter <= daysInMoth){
            dayNumber.innerText = dayCounter;
            dayCounter++;
        }else{
            dayNumber.innerText = '';
        }
    }
    
}

const nextMonth = () => {
    currentMonth++;
    if(currentMonth === 12){
        currentMonth = 0;
        currentYear++;
    }
    updateCalendar(currentMonth, currentYear);
    console.log(currentMonth);
};

const previousMonth = () => {
    currentMonth--;
    if(currentMonth === -1){
        currentMonth = 11;
        currentYear--;
    }
    updateCalendar(currentMonth, currentYear);
    console.log(currentMonth);
};


drawBlankCalendar();
console.log(currentMonth, currentYear);
updateCalendar(currentMonth, currentYear);