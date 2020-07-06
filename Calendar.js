let today = new Date();
let currentMonth = today.getMonth();
let  currentYear = today.getFullYear();
let selectYear = document.getElementById('year');
let selectMonth = document.getElementById('month');

let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];

let monthandyear = document.getElementById('monthandyear');
showCalendar(currentMonth, currentYear);

function previous(){
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear ;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1 ;
    showCalendar(currentMonth, currentYear);
}

function next() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear ;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);
}

function jump() {
    currentMonth = parseInt(selectMonth.value);
    currentYear = parseInt(selectYear.value);
    showCalendar(currentMonth, currentYear);
}

function showCalendar(month, year) {
    let firstDay = (new Date(year, month)).getDay();

    // to clear the calendar body after every changes
    let tb1 = document.getElementById('calendar-body');
    tb1.innerHTML = "";
// Current Month and year shown in card header
    monthandyear.innerHTML = months[month] + ' ' + year;
    selectYear.value = year;
    selectMonth.value = month;

    // creating all cells
    let date = 1;
    for(let i =  0; i < 6; i ++) {
        // Six rows of calendar
        let row = document.createElement("tr");
        // for making date cells
        for(let j = 0; j < 7; j++) {
            if(i === 0 && j < firstDay){
                // for empty cell values before the firstday
                let cell = document.createElement("td");
                let cellValue = document.createTextNode("");
                cell.appendChild(cellValue);
                row.appendChild(cell);
            }
            else if(date > dayInMonth(year, month)){
                // for going to next row
                break;
            }
            else{
                let cell = document.createElement("td");
                let cellValue = document.createTextNode(date);
                if(year === today.getFullYear() && month === today.getMonth() && date === today.getDate()){
                    cell.classList.add("active");
                    cell.classList.add("bg-info");
                    // Color's today date
                }
                cell.appendChild(cellValue);
                row.appendChild(cell);
                date++ ;
            }
        }
        tb1.appendChild(row);
        // appending each row into calendar body.
    }
}
// check how many days in a month 
function dayInMonth(iyear, imonth) {
    return 32 - new Date(iyear, imonth, 32).getDate();
}
