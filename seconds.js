let stopwatch = document.getElementById('stopwatch');
stopwatch.innerHTML = "<div class='swclock'></div>"
                    + "<div class='swtime'>"
                    + "<div class='swh'>00</div>:"
                    + "<div class='swm'>00</div>:"
                    + "<div class='sws'>00</div>."
                    + "<div class='swms'>000</div>"
                    + "</div>"
                    + "<div class='swinterface'>"
                    + "<div class='swbtn swstart'>Старт</div>"
                    + "<div class='swbtn swpause'>Пауза</div>"
                    + "<div class='swbtn swreset'>Сброс</div>"
                    + "</div>";

let wekkdayssw = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг','Пятница','Суббота'];
let monthAllsw = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
let forswclock = document.getElementsByClassName('swclock')[0];
let swstart = document.querySelector('.swstart');
let swpause = document.querySelector('.swpause');
let swreset = document.querySelector('.swreset');
let swh = document.querySelector('.swh');
let swm = document.querySelector('.swm');
let sws = document.querySelector('.sws');
let swms = document.querySelector('.swms');
let timebufer='00:00:00:000';
let swstate = 0;

swstart.addEventListener('click', runtimer);
swpause.addEventListener('click', pausetimer);
swreset.addEventListener('click', resettimer);

let swclockupdate = setTimeout(function clockup(){
    let swnow = new Date();
    let hh = swnow.getHours();
    let mm = swnow.getMinutes();
    let wd = wekkdayssw[swnow.getDay()];
    let dd = swnow.getDate();
    let MM = monthAllsw[swnow.getMonth()];
    
    forswclock.innerHTML = setnull(hh) + ':' + setnull(mm) + '<br />' + '<p class="swdate">Сегодня: ' + wd + ', ' + parseInt(dd) + ' ' + MM+'</p>';
    swclockupdate = setTimeout(clockup, 1000); 
},1000)

function runtimer(){
    swstate = 1;
    swstart.style.display = 'none';
    swpause.style.display = 'block';
    let getbufer = timebufer.split(':');
    let starttime = new Date();
    
    swh.innerHTML = getbufer[0];
    swm.innerHTML = getbufer[1];
    sws.innerHTML = getbufer[2];
    swms.innerHTML = getbufer[3];
    
    let runsw = setTimeout(function runthis(){
        if(swstate == 1){
            let futuretime = new Date();
            let diff = futuretime - starttime;
            
            let t4 = (+getbufer[3]+diff);
            let t3 = (+getbufer[2] + t4 /1000);
            let t2 = (+getbufer[1] + t3 / 60);
            let t1 = (+getbufer[0] + t2 / 60)%24;
            t4=t4%999;
            t3=t3%60;
            t2=t2%60;
            t1 = parseInt(t1);
            t2 = parseInt(t2);
            t3 = parseInt(t3);
            t4 = parseInt(t4);
        
            swh.innerHTML = setnull(t1);
            swm.innerHTML = setnull(t2);
            sws.innerHTML = setnull(t3);
            swms.innerHTML = setnull(t4,3);
            runsw = setTimeout(runthis, 16);
        } 
    },16)
}

function pausetimer(){
    swstate = 2;
    let p1 = swh.innerHTML;
    let p2 = swm.innerHTML;
    let p3 = sws.innerHTML;
    let p4 = swms.innerHTML;
    timebufer = ''+p1+':'+p2+':'+p3+':'+p4;
    swstart.style.display = 'block';
    swpause.style.display = 'none';
    
}

function resettimer(){
    swstate = 2;
    timebufer='00:00:00:000';
    swstart.style.display = 'block';
    swpause.style.display = 'none';
    let getbufer = timebufer.split(':');
    swh.innerHTML = getbufer[0];
    swm.innerHTML = getbufer[1];
    sws.innerHTML = getbufer[2];
    swms.innerHTML = getbufer[3];
}

function setnull(a,l){
    let d=2;
    if(l==3){
        d=3;
    }
    if(a.innerHTML){
        if(a.innerHTML.toString().length < d){
            return '0' + a.innerHTML;
        }
        else{
            return a.innerHTML;
        }
    }
    else{
        if(a.toString().length < d){
            return '0' + a;
        }
        else{
            return a;
        }
    }
}
