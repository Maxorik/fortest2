let sovtable = document.getElementById('zodsovmtable');
let tds = document.querySelectorAll('td');
for(let i=0; i<tds.length; i++){
    let v = tds[i].textContent;
    if(!tds[i].classList.contains('cal')){
        if(v>0 && v<30){
        tds[i].style.backgroundColor = 'red';
    }
    else if(v>=30 && v<70){
         tds[i].style.backgroundColor = 'yellow';
    }
    else if(v>=70 && v<101){
         tds[i].style.backgroundColor = 'green';
    }
    else{
        tds[i].style.backgroundColor = 'beige';
    }
    }
    
}


let cleft = document.querySelector('.cleft');
let cright = document.querySelector('.cright');
cleft.addEventListener('click', setmonth);
cright.addEventListener('click', setmonth);

function setmonth(event){
    let t = event.target;
    let monthset = ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];
    let calhead = document.querySelector('.calhead');
    let arr = calhead.innerHTML.split(' ');
    let pos = monthset.indexOf(arr[0]);
    let calendarnew = document.querySelector('.fordyncal');
    if(t.classList.contains('cleft')){
        let newpos = pos-1;
        let newyearc = arr[1];
        if(newpos<0){
            newpos = 11;
            newyearc--;
        }
        
        calhead.innerHTML = monthset[newpos] + ' ' + newyearc;
        calendarnew.innerHTML = createCalendar(newyearc, newpos, 1);
    }
    if(t.classList.contains('cright')){
        let newpos = pos+1;
        let newyearc = arr[1];
        if(newpos>11){
            newpos = 0;
            newyearc++;
        }

        calhead.innerHTML = monthset[newpos] + ' ' + newyearc;
        calendarnew.innerHTML = createCalendar(newyearc, newpos, 1);
    }
    
   
    
    function createCalendar(year, month) {
            let monthc = ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];
            let mon = month;
            let d = new Date(year, mon);
            table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';
            for (let i = 0; i < getDay(d); i++) {
                table += '<td></td>';
            }
             while (d.getMonth() == mon) {
             table += '<td class="cal" style="text-align:center; padding:10px; background-color:beige !important;">' + d.getDate() + '</td>';

             if (getDay(d) % 7 == 6) { 
                table += '</tr><tr>';
             }
                d.setDate(d.getDate() + 1);
             }
             if (getDay(d) != 0) {
                for (let i = getDay(d); i < 7; i++) {
                    table += '<td></td>';
                }
             }
            table += '</tr></table>';
            return table;
        }
        function getDay(date) { 
            let day = date.getDay();
            if (day == 0) day = 7; 
            return day - 1;
        }
}