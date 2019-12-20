        let timerhere = document.getElementById('timerhere');
        let ivent = '';

        timerhere.innerHTML = "<div id='namehere'></div><div id='clock'></div><div id='texthere'></div><div id='table'></div>";
        
        if(timerhere.hasAttribute('attfon')){
            let fon = timerhere.getAttribute('attfon');
            let fonurlhost = document.location.protocol;
            let fonurlsite = document.location.host;
            let fonpath = fonurlhost + '//' + fonurlsite + '/autopage/img/';
            timerhere.style.backgroundImage = "url('" + fonpath + fon + "')";
        }

        let date = timerhere.getAttribute('attdate');
        let twaswere='', twaswere2='';
        let todaytime = new Date();
        let userdate = date.split('/');
        userdate = new Date(userdate[0], userdate[1]-1, userdate[2]);

        let yearsklon=['год','года','лет'];
        let daysklon=['день','дня','дней'];
        let hoursklon=['час','часа','часов'];
        
        let dotable = timerhere.getAttribute('atttable');


        
        if(dotable == 'yes'){
            table.innerHTML = '<div class="middle">'+'<div id="washere"></div>'
            +'<div class="clockandlabelt"><span id="year_textt" class="dyeart itlabelt">Лет </span><span id="yeart" class="dyeart numlt"></span></div> '                                       
            + '<div class="clockandlabelt"><span id="month_textt" class="dmontht itlabelt">Месяцев </span><span id="montht" class="dmontht numlt"></span></div> '
            + '<div class="clockandlabelt"><span id="week_textt" class="dweek itlabelt">Недель </span><span id="weekt" class="dweekt numlt"></span></div> '                                      
            + '<div class="clockandlabelt"><span id="day_textt" class="ddayt itlabelt">Дней </span><span id="dayt" class="ddayt numlt"></span></div> '
            + '<div class="clockandlabelt"><span id="hour_textt" class="dhourt itlabelt">Часов </span><span id="hourt" class="dhourt numlt"></span></div> '
            + '<div class="clockandlabelt"><span id="min_textt" class="dmint itlabelt">Минут </span><span id="mint" class="dmint numlt"></span></div> '
            + '<div class="clockandlabelt"><span id="sec_textt" class="dsec itlabelt">Секунд </span><span id="sect" class="dsec numlt"></span></div> '+'</div>';}
        
        let m, w, d, H,  S, Y;
            clock.innerHTML = '<div class="clockandlabel"><span id="year" class="dyear numl"></span><span id="year_text" class="dyear itlabel">лет </span></div> '                                       
            + '<div class="clockandlabel"><span id="month" class="dmonth numl"></span><span id="month_text" class="dmonth itlabel">мес </span></div> '                                      
            //+ '<div class="clockandlabel"><span id="week" class="dweek"></span><span id="week_text" class="dweek itlabel">недель </span></div> '
            + '<div class="clockandlabel"><span id="day" class="dday numl"></span><span id="day_text" class="dday itlabel">дней </span></div> '
            + '<div class="clockandlabel"><span id="hour" class="dhour numl"></span><span id="hour_text" class="dhour itlabel">часов </span></div> '
            + '<div class="clockandlabel"><span id="min" class="dmin numl"></span><span id="min_text" class="dmin itlabel">   мин </span></div> '
            + '<div class="clockandlabel"><span id="sec" class="dsec numl"></span><span id="sec_text" class="dsec itlabel">сек </span></div> ';
            
            let year = document.getElementById('year');
            let month = document.getElementById('month');
            //let week = document.getElementById('week');
            let day = document.getElementById('day');
            let hour = document.getElementById('hour');
            let min = document.getElementById('min');
            let sec = document.getElementById('sec');

        if(todaytime<=userdate){
            twaswere='';
            twaswere2 = 'Осталось';        
            let mounthsumdays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30 ,31];       
            
            let lastday = new Date(todaytime.getFullYear(), todaytime.getMonth() + 1, 0);
            let mend = lastday.getDate();
            
            let timerId = setTimeout(function tick() {
                let daybegin = parseInt(todaytime.getDate());
                let dayend = parseInt(userdate.getDate());
                let mounthbegin = parseInt(todaytime.getMonth());
                let mounthend = parseInt(userdate.getMonth());
                let yearbegin = parseInt(todaytime.getFullYear());
                let yearend = parseInt(userdate.getFullYear());
         
                let yearleft = yearend - yearbegin; //лет осталось
                let mounthleft = mounthend - mounthbegin; //месяцев осталось
                let dayleft=0; //дней осталось
  
                let dd = mounthbegin-1; //месяц для массива
                if(dd<0){
                    dd = 0;
                }
                let ee = mounthend-1;
                
                todaytime = new Date();
                let dt = (userdate.getTime() - todaytime.getTime());
                sec.innerHTML = Math.floor(dt / 1000) % 60;                             //добавляем секунды
                min.innerHTML = Math.floor(dt / 1000 / 60) % 60;                        //добавляем минуты
                hour.innerHTML = Math.floor(dt / 1000 / 60 / 60)%24;                    //добавляем часы
                let dddd = Math.floor(dt / 1000 / 60 / 60 / 24)%mend;  
                //week.innerHTML = Math.floor(dt / 1000 / 60 / 60 / 24 /7)%4;
                //let mm = userdate.getMonth() - todaytime.getMonth();
                let mm = Math.floor(dt / 1000 / 60 / 60 / 24 / mend);
                //day.innerHTML = dddd;                                                      //добавляем дни
                

                //let yyyy = userdate.getFullYear() - todaytime.getFullYear();
                let yost = userdate.getFullYear() - todaytime.getFullYear() - 1;
                    if(yost<0){
                        yost = 0;
                    }
                
                if(mm < 0){
                    yost--;
                    mm+=11;
                }
                
                //month.innerHTML = mm;                                                       //добавляем месяцы
                //year.innerHTML = yost;                                                      //добавляем года
                //ост дней: часть в начале и все из конца
                if(mounthend !== mounthbegin){
                    dayleft = +dayend + (mounthsumdays[dd] - daybegin);
                }

                //если в одном месяце
                else if(mounthend == mounthbegin){
                    dayleft = +dayend - daybegin;
                }
                
                //если месяцы разные
                if(mounthend>mounthbegin){
                    if(dayleft > mounthsumdays[ee] || dayleft > mounthsumdays[dd]){
                        dayleft = dayleft - mounthsumdays[dd];
                    }
                    
                    if(daybegin>dayend){
                        mounthleft = mounthleft - 1;
                    }
                }
                
                if(mounthend<mounthbegin){
                    if(dayleft > mounthsumdays[ee] || dayleft > mounthsumdays[dd]){
                        dayleft = dayleft - mounthsumdays[dd];
                    }
                    if(daybegin<dayend){
                        mounthleft = mounthleft + 1;
                    }
                }
                
                //если года разные
                if(yearend > yearbegin){
                    if(mounthend < mounthbegin){
                        yearleft = yearleft -1;
                        mounthleft+=11;
                    }
                    if(mounthend == mounthbegin && dayend<daybegin){
                        yearleft = yearleft -1;
                        mounthleft+=11;
                    }
                    
                    if(dayleft<0){
                        dayleft = dayleft + mounthsumdays[dd];
                    }
                }
                
                //dayleft = dayleft - 1;
                
                
                
                day.innerHTML = dayleft;                                                    //добавляем дни
                month.innerHTML = mounthleft;                                               //добавляем месяцы
                year.innerHTML = yearleft; 
                
                slicenull(year);
                slicenull(month);
            //slicenull(week);
                slicenull(day);
                 sec.innerHTML = setnull(sec.innerHTML);
                min.innerHTML = setnull(min.innerHTML);
                hour.innerHTML = setnull(hour.innerHTML);
                
                day.nextElementSibling.innerHTML = daysklon[getsklon(day.innerHTML)];
                year.nextElementSibling.innerHTML = yearsklon[getsklon(year.innerHTML)];
                hour.nextElementSibling.innerHTML = hoursklon[getsklon(hour.innerHTML)];
                
                if(dotable == 'yes'){
                    gettable(todaytime, userdate);
                }

                timerId = setTimeout(tick, 1000); // (*)
            }, 1000);
                        
        }
        
        else{
            twaswere='';
            twaswere2 = 'Прошло';
            let mounthsumdays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30 ,31];
            
            let timerId = setTimeout(function tick() {
                let daybegin = parseInt(userdate.getDate());
                let dayend = parseInt(todaytime.getDate());
                let mounthbegin = parseInt(userdate.getMonth());
                let mounthend = parseInt(todaytime.getMonth());
                let yearbegin = parseInt(userdate.getFullYear());
                let yearend = parseInt(todaytime.getFullYear());
         
                let yearleft = yearend - yearbegin; //лет осталось
                let mounthleft = mounthend - mounthbegin; //месяцев осталось
                let dayleft=0; //дней осталось
  
                let dd = mounthbegin-1; //месяц для массива
                if(dd<0){
                    dd = 0;
                }
                let ee = mounthend-1;
                
                todaytime = new Date();
                let dt = (todaytime.getTime() - userdate.getTime());
                sec.innerHTML = Math.floor(dt / 1000) % 60;                             //добавляем секунды
                min.innerHTML = Math.floor(dt / 1000 / 60) % 60;                        //добавляем минуты
                hour.innerHTML = Math.floor(dt / 1000 / 60 / 60)%24;                    //добавляем часы
                
                //ост дней: часть в начале и все из конца
                if(mounthend !== mounthbegin){
                    dayleft = +dayend + (mounthsumdays[dd] - daybegin);
                }

                //если в одном месяце
                else if(mounthend == mounthbegin){
                    dayleft = +dayend - daybegin;
                }
                
                //если месяцы разные
                if(mounthend>mounthbegin){
                    if(dayleft > mounthsumdays[ee]){
                        dayleft = dayleft - mounthsumdays[dd];
                    }
                    
                    if(daybegin>dayend){
                        mounthleft = mounthleft - 1;
                    }
                }
                
                if(mounthend<mounthbegin){
                    if(dayleft > mounthsumdays[ee]){
                        dayleft = dayleft - mounthsumdays[dd];
                    }
                    if(daybegin<dayend){
                        mounthleft = mounthleft + 1;
                    }
                }
                
                //если года разные
                if(yearend > yearbegin){
                    if(mounthend < mounthbegin){
                        yearleft = yearleft -1;
                        mounthleft+=11;
                    }
                    if(mounthend == mounthbegin && dayend<daybegin){
                        yearleft = yearleft -1;
                        mounthleft+=11;
                    }
                    
                    if(dayleft<0){
                        dayleft = dayleft + mounthsumdays[dd];
                    }
                }
                
                //dayleft = dayleft - 1;
                
                day.innerHTML = dayleft;                                                    //добавляем дни
                month.innerHTML = mounthleft;                                               //добавляем месяцы
                year.innerHTML = yearleft;                                                  //добавляем года
                
            slicenull(year);
            slicenull(month);
            //slicenull(week);
            slicenull(day);
                sec.innerHTML = setnull(sec.innerHTML);
                min.innerHTML = setnull(min.innerHTML);
                hour.innerHTML = setnull(hour.innerHTML);
                
                day.nextElementSibling.innerHTML = daysklon[getsklon(day.innerHTML)];
                year.nextElementSibling.innerHTML = yearsklon[getsklon(year.innerHTML)];
                hour.nextElementSibling.innerHTML = hoursklon[getsklon(hour.innerHTML)];
                
                if(dotable == 'yes'){
                     gettable(userdate, todaytime);
                }
                
                timerId = setTimeout(tick, 1000); // (*)
            }, 1000);
        
        }
        
        namehere.innerHTML = twaswere + ' ' + ivent + ' ' + twaswere2;

        function slicenull(a){
            let thisclass = a.classList[0];
            let tohide = document.getElementsByTagName('span');
            if(a.textContent == '0' || a.innerHTML == '0' || a.textContent == '00' || a.textContent.indexOf('-') == 0){
                for(let i=0; i<tohide.length; i++){
                    if(tohide[i].classList.contains(thisclass)){
                        tohide[i].style.display = 'none';
                        tohide[i].parentElement.style.backgroundColor = 'transparent';
                    }
                }
                a.style.display = 'none';
                //a.parentElement.style.backgroundColor = 'transparent';
                //a.nextElementSibling.style.display = 'none';
            }
            else{
                for(let i=0; i<tohide.length; i++){
                    if(tohide[i].classList.contains(thisclass)){
                        tohide[i].style.display = 'inline-block';
                        tohide[i].parentElement.style.height = 'auto';
                        //tohide[i].style.backgroundColor = 'transparent';
                    }
                }
                a.style.display = 'inline-block';
                //a.nextElementSibling.style.display = 'inline-block';
            }
        }
        
        function setnull(a){
            if(a.innerHTML){
                if(a.innerHTML.toString().length < 2){
                    return '0' + a.innerHTML;
                }
                else{
                    return a.innerHTML;
                }
            }
            else{
                if(a.toString().length < 2){
                    return '0' + a;
                }
                else{
                    return a;
                }
            }
        }
        
        
        function gettable(datemin, datemax){           
            washere.innerHTML = twaswere2[0].toUpperCase() + twaswere2.slice(1) + ' времени';

            yeart.innerHTML = year.innerHTML;
            let dt = (datemax.getTime() - datemin.getTime());
                sect.innerHTML = Math.floor(dt / 1000);
                mint.innerHTML = Math.floor(dt / 1000 / 60);
                hourt.innerHTML = Math.floor(dt / 1000 / 60 / 60);
                dayt.innerHTML = Math.floor(dt / 1000 / 60 / 60 / 24);  
                montht.innerHTML = Math.floor(dt / 1000 / 60 / 60 / 24 /30);
                weekt.innerHTML = Math.floor(dt / 1000 / 60 / 60 / 24 /7);
                
                let position = document.getElementsByClassName('numlt');
                for(let i=0; i<position.length; i++){
                    if(position[i].textContent == 'NaN' || position[i].textContent == ''){
                        position[i].style.display = 'none';
                        position[i].previousElementSibling.style.display = 'none';
                    }
                    else{
                        position[i].style.display = 'inline-block';
                        position[i].previousElementSibling.style.display = 'inline-block';
                    }
                }
            
            }


function getsklon(num){
    
    num +='';
    if(num.length >= 2 && +num.charAt(num.length-2) == 1){
        return 2;
    }
    
    else{
        num +='';
        if(num.length >= 2){
            num = num.charAt(1);
        }
        else{
            num = num.charAt(0);
        }
        num = parseInt(num);
        
        if(num==1){
            return 0;
        }
        else if(num==2 || num==3 || num==4){
            return 1;
        }
        else if(num==5 || num==6 || num==7 || num==8 || num==9 || num==0){
            return 2;
        }
    }
}

