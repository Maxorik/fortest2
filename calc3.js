/*
        ВАЖНО!
        В HTML РАЗМЕТКЕ ОБЯЗАТЕЛЬНО ДОЛЖНО БЫТЬ:
        
        <div class='calc3here'></div>
        
        ИМЕННО В ЭТОТ ТЕГ ДОБАВИТСЯ КАЛЬКУЛЯТОР НОМЕР 3
*/
        function includeCSS(aFile){
            let style = window.document.createElement('link')
            style.href = aFile
            style.rel = 'stylesheet'
            document.head.appendChild(style)
        }

        includeCSS('calcstyles.css')
        
        //<input type='date' class='date_beg3 calcinp' min='1900-01-01' max='2100-12-31'>
//<input type='number' class='small_inp3 s_day3' placeholder='ДД'><input type='number' class='small_inp3 s_month3' placeholder='ММ'><input type='number' class='small_inp3 s_year3' placeholder='ГГГГ'>


        let calc3here = document.getElementsByClassName('calc3here')[0];
        let calc3 = document.createElement('div');
        calc3.innerHTML = "<div class='calcarea'><div class='main_info'><div class='date_here'><div>Начальная дата</div><input type='number' class='small_inp3 s_day33' placeholder='ДД' maxlength='2'><input type='number' class='small_inp3 s_month33' placeholder='ММ' maxlength='2'><input type='number' class='small_inp3 s_year33' placeholder='ГГГГ' maxlength='4'></div><div class='for_btns'><div class='calcbtn total3'>Рассчитать</div><div class='calcbtn reset3'>Сбросить</div></div></div><div class='hide_info3'><div class='date_here'><div>Времени между датами</div><div class='days'><div class='small_info'><label>лет</label><input type='text' class='calcinp small_inp s_year3' readonly></div><div class='small_info'><label>месяцев</label><input type='text' class='calcinp small_inp s_mounth3' readonly></div><div class='small_info'><label>дней</label><input type='text' class='calcinp small_inp s_days3' readonly></div></div></div><div class='date_here'><div class='l'>Прошло дней до</div><span class='fortoday'></span><div class='days'><input type='text' class='calcinp small_inp s_dayall3' readonly></div></div><div class='date_here dop'><div class='fordatabeg'><div class='begdatahere3 tohr'></div><div class='begweekhere3 tohr'></div><div class='begznakhere3 tohr'></div><div class='begwostyearhere3 tohr'></div></div><div class='fordataend'><div class='enddatahere3 tohr'></div><div class='endweekhere3 tohr'></div><div class='endznakhere3 tohr'></div><div class='endwostyearhere3 tohr'></div></div></div></div></div>";
        
        calc3here.appendChild(calc3);
        

        let s_days33 = document.getElementsByClassName('s_day33')[0];
        let s_month33 = document.getElementsByClassName('s_month33')[0];
        let s_year33 = document.getElementsByClassName('s_year33')[0];
        
        let s_year3 = document.getElementsByClassName('s_year3')[0];
        let s_mounth3 = document.getElementsByClassName('s_mounth3')[0];
        let s_days3 = document.getElementsByClassName('s_days3')[0];
        let dayall3 = document.getElementsByClassName('s_dayall3')[0];
        let hideinfo3 = document.getElementsByClassName('hide_info3')[0];
    
        let begdatahere3 = document.getElementsByClassName('begdatahere3')[0];
        let begznakhere3 = document.getElementsByClassName('begznakhere3')[0];
        let begwostyearhere3 = document.getElementsByClassName('begwostyearhere3')[0];
        let begmoondayhere3 = document.getElementsByClassName('begmoondayhere3')[0];
        let enddatahere3 = document.getElementsByClassName('enddatahere3')[0];
        let endznakhere3 = document.getElementsByClassName('endznakhere3')[0];
        let endwostyearhere3 = document.getElementsByClassName('endwostyearhere3')[0];
        let endmoondayhere3= document.getElementsByClassName('endmoondayhere3')[0];
        let begweekhere3 = document.getElementsByClassName('begweekhere3')[0];
        let endweekhere3 = document.getElementsByClassName('endweekhere3')[0];
        let fortoday = document.getElementsByClassName('fortoday')[0];
        
        let total3 = document.getElementsByClassName('total3')[0];
        total3.addEventListener('click', totaldays, false);
        
        let reset3 = document.getElementsByClassName('reset3')[0];
        reset3.addEventListener('click', resetall, false);
        
        let mounthsumdays3 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30 ,31];
        let weekdays3 = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг','Пятница','Суббота'];

        s_days33.addEventListener('input', len2, false);
        s_month33.addEventListener('input', len2, false);
        s_year33.addEventListener('input', len4, false);

        function len2(event){
            let target = event.target;
            if(target.value.length == 2){
                let sibl = target.nextElementSibling;
                target.blur();
                sibl.focus();
            }
        }

        function len4(event){
            let target = event.target;
            if(target.value.length == 4){
                let sibl = target.parentElement.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.firstElementChild;
                target.blur();
                sibl.focus();
            }
        }
        
        function totaldays(){
            let s_days3v = s_days33.value;
            let s_month3v = s_month33.value;
            let s_year3v = s_year33.value;
            
            if(s_month3v > 12 || s_month3v == ''){
                s_month33.classList.add('border_warning');
                hideinfo3.style.opacity = 0;
            }
            
            else if(s_year3v.toString().length<4 || s_year3v == ''){
                s_year33.classList.add('border_warning');
                hideinfo3.style.opacity = 0;
            }
            
            else if(s_days3v > mounthsumdays3[s_month3v-1] || s_days3v == ''){
                s_days33.classList.add('border_warning');
                hideinfo3.style.opacity = 0;
            }
            
            else {
                let smw3 = document.getElementsByClassName('small_inp3');
                for(let i=0; i<smw3.length; i++){
                    smw3[i].classList.remove('border_warning');
                }
                hideinfo3.style.opacity = 1;
            }
            
            
            s_year3.value='';
            s_mounth3.value ='';
            s_days3.value = '';
            
            let d_b = [s_year3v, s_month3v, s_days3v];
            let d_e = [];
            let second=1000, minute=second*60, hour=minute*60, day=hour*24, week=day*7;    
            
            let d_b_js = new Date(d_b[0], d_b[1]-1, d_b[2]); // дата начала
            let d_e_js = new Date(); // дата конца
            
            d_e.push(d_e_js.getFullYear());
            d_e.push(d_e_js.getMonth() + 1);
            d_e.push(d_e_js.getDate()); 
            
            if (d_e_js<d_b_js){
                hideinfo3.style.opacity = 0;
            }
            
            let wdb = d_b_js.getDay();
            let wde = d_e_js.getDay();
            begweekhere3.innerHTML = weekdays3[wdb];
            endweekhere3.innerHTML = weekdays3[wde];
            
            function getnumoftheday(date, hours){
                //let hoursOfOneWeek = 168; // количество часов в одной неделе
                //let hoursOfOneday = 24;
                let hourOfMillisecs = 3600000; // количество миллисекунд в одном часе
                let startTimeOfCurrentYear = (new Date(date.getFullYear(), 0, 1)).getTime(); // время начала текущего года, в миллисекундах
                let currentTime = date.getTime();
                let pastTimeOfStartCurrentYear = currentTime - startTimeOfCurrentYear; // прошедшее время с начала года, в миллисекундах
                return pastTimeOfStartCurrentYear / hourOfMillisecs / hours.toFixed(2) + 1;
            }
            
            let begnumweek3 = parseInt(getnumoftheday(d_b_js, 168));
            let endnumweek3 = parseInt(getnumoftheday(d_e_js, 168));
            let begnumday3 = parseInt(getnumoftheday(d_b_js, 24));
            let endnumday3 = parseInt(getnumoftheday(d_e_js, 24));
            
            begweekhere3.innerHTML += '<br>'+'это ' + begnumday3 + ' день года';
            endweekhere3.innerHTML += '<br>'+'это ' + endnumday3 + ' день года';
            
            begweekhere3.innerHTML += '<br>'+'это ' + begnumweek3 + ' неделя года';
            endweekhere3.innerHTML += '<br>'+'это ' + endnumweek3 + ' неделя года';
            
            let timediff = d_e_js - d_b_js; //мс всего, надо делить на day
            
            //дата начала меньше даты конца
            if(d_b<d_e){  
                let daybegin = parseInt(d_b[2]);
                let dayend = parseInt(d_e[2]);
                let mounthbegin = parseInt(d_b[1]);
                let mounthend = parseInt(d_e[1]);
                let yearbegin = parseInt(d_b[0]);
                let yearend = parseInt(d_e[0]);
                
                let yearleft = yearend - yearbegin; //лет осталось
                let mounthleft = mounthend - mounthbegin; //месяцев осталось
                let dayleft = 0; //дней осталось
  
                let dd = mounthbegin-1; //месяц для массива
                let ee = mounthend-1;

                //определение зодиака
                function zodiak(d, m){
                    if (m==1 && d>=21 || m==2 && d<=19) return "Водолей" + '<br />'+ "(21.01 - 19.02)";
                    else if (m==2 && d>=20 || m==3 && d<=20) return "Рыбы" + '<br />'+ "(20.02 - 20.03)";
                    else if (m==3 && d>=21 || m==4 && d<=20) return "Овен" + '<br />'+ "(21.03 - 20.04)";
                    else if (m==4 && d>=21 || m==5 && d<=21) return "Телец" + '<br />'+ "(21.04 - 21.05)";
                    else if (m==5 && d>=22 || m==6 && d<=21) return "Близнецы" + '<br />'+ "(22.05 - 21.06)";
                    else if (m==6 && d>=22 || m==7 && d<=22) return "Рак" + '<br />'+ "(22.06 - 22.07)";
                    else if (m==7 && d>=23 || m==8 && d<=21) return "Лев" + '<br />'+ "(23.07 - 21.08)";
                    else if (m==8 && d>=22 || m==9 && d<=23) return "Дева" + '<br />'+ "(22.08 - 23.09)";
                    else if (m==9 && d>=24 || m==10 && d<=23) return "Весы" + '<br />'+ "(24.09 - 23.10)";
                    else if (m==10 && d>=24 || m==11 && d<=22) return "Скорпион" + '<br />'+ "(24.10 - 22.11)";
                    else if (m==11 && d>=23 || m==12 && d<=22) return "Стрелец" + '<br />'+ "(23.11 - 22.12)";
                    else if (m==12 && d>=22 || m==1 && d<=20) return "Козерог" + '<br />'+ "(22.12 - 20.01)";
                }
            
                let zodiakbeg = zodiak(daybegin, mounthbegin);
                let zodiakend = zodiak(dayend, mounthend);
                
                begznakhere3.innerHTML = zodiakbeg;
                endznakhere3.innerHTML = zodiakend;
                    
                //ост дней: часть в начале и все из конца
                if(mounthend !== mounthbegin){
                    dayleft = dayend + (mounthsumdays3[dd] - daybegin);
                }
                
                //если в одном месяце
                else if(mounthend == mounthbegin){
                    dayleft = dayend - daybegin;
                }
                
                //если месяцы разные
                if(mounthend>mounthbegin){
                    if(dayleft > mounthsumdays3[ee]){
                        dayleft = dayleft - mounthsumdays3[dd];
                    }
                    
                    if(daybegin>dayend){
                        mounthleft = mounthleft - 1;
                    }
                }
                
                if(mounthend<mounthbegin){
                    if(dayleft > mounthsumdays3[ee]){
                        dayleft = dayleft - mounthsumdays3[dd];
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
                        dayleft = dayleft + mounthsumdays3[dd];
                    }
                }
                
                //если daybegin больше dayend
                if(daybegin>dayend){
                   dayleft = dayleft - 1;
                }
                
                if(daybegin<dayend){
                    dayleft = dayleft - 1;
                }
                
                //учет високосных лет
                let yearmin = yearend - yearbegin;
                let vyears = Math.floor(yearmin/4);
                
                //присваиваем в инпуты
                if(yearleft != 0){
                    s_year3.value = yearleft;
                }
                
                if(mounthleft != 0){
                    s_mounth3.value = mounthleft;
                }
                
                s_days3.value = dayleft;
                dayall3.value = parseInt(timediff/day); 
                
                /*ssssssssssssssssssssssssssssssssssssssssssssssssssssss*/
                
                let td = (d_e_js.getDate()).toString();
                let tm = (d_e_js.getMonth() + 1).toString();

                if(td.length<2){
                    td = '0'+td;
                }
        
                if(tm.length<2){
                    tm = '0'+tm;
                }

                begdatahere3.textContent = d_b[2]+'.'+d_b[1]+'.'+d_b[0];
                enddatahere3.textContent = td + '.' + tm + '.' + d_e[0];
                
                //лунный год              
                let yeardates = [
'31 1 Белой Металлической Крысы (Мыши)',
'19 2 Белого Металлического Быка',
'08 2 Черного Водяного Тигра',
'29 1 Черного Водяного Кролика',
'16 2 Сине-Зеленого Деревянного Дракона',
'04 2 Сине-Зеленой Деревянной Змеи',
'25 1 Красной Огненной Лошади',
'13 2 Красной Огненной Овцы',
'02 2 Желтой Земляной Обезьяны',
'22 1 Желтого Земляного Петуха',
'10 2 Белой Металлической Собаки',
'30 1 Белой Металлической Свиньи (Кабана)',
'18 2 Черной Водяной Крысы (Мыши)',
'06 2 Черного Водяного Быка',
'26 1 Сине-Зеленого Деревянного Тигра',
'14 2 Сине-Зеленого Деревянного Кролика',
'03 2 Красного Огненного Дракона',
'23 1 Красной Огненной Змеи',
'11 2 Желтой Земляной Лошади',
'01 2 Желтой Земляной Овцы',
'20 2 Белой Металлической Обезьяны',
'08 2 Белого Металлического Петуха',
'28 1 Черной Водяной Собаки',
'16 2 Черной Водяной Свиньи (Кабана)',
'05 2 Сине-Зеленой Деревянной Крысы (Мыши)',
'14 1 Сине-Зеленого Деревянного Быка',
'13 2 Красного Огненного Тигра',
'02 2 Красного Огненного Кролика',
'23 1 Желтого Земляного Дракона',
'10 2 Желтой Земляной Змеи',
'30 1 Белой Металлической Лошади',
'17 2 Белой Металлической Овцы',
'06 2 Черной Водяной Обезьяны',
'26 1 Черного Водяного Петуха',
'14 2 Сине-Зеленой Деревянной Собаки',
'04 2 Сине-Зеленой Деревянной Свиньи (Кабана)',
'24 1 Красной Огненной Крысы (Мыши)',
'11 2 Красного Огненного Быка',
'31 1 Желтого Земляной Тигра',
'19 2 Желтого Земляного Кролика',
'08 2 Белого Металлического Дракона',
'27 1 Белой Металлической Змеи',
'15 2 Черной Водяной Лошади',
'05 2 Черной Водяной Овцы',
'25 1 Сине-Зеленой Деревянной Обезьяны',
'13 2 Сине-Зеленого Деревянного Петуха',
'02 2 Красной Огненной Собаки',
'22 1 Красной Огненной Свиньи (Кабана)',
'10 2 Желтой Земляной Крысы (Мыши)',
'29 1 Желтого Земляного Быка',
'17 2 Белого Металлического Тигра',
'06 2 Белого Металлического Кролика',
'27 1 Черного Водяной Дракона',
'14 2 Черной Водяной Змеи',
'03 2 Сине-Зеленой Деревянной Лошади',
'24 1 Сине-Зеленой Деревянной Овцы',
'12 2 Красной Огненной Обезьяны',
'31 1 Красного Огненного Петуха',
'18 2 Желтой Земляной Собаки',
'08 2 Желтой Земляной Свиньи (Кабана)',
'28 1 Белой Металлической Крысы (Мыши)',
'15 2 Белого Металлического Быка',
'05 2 Черного Водяного Тигра',
'25 1 Черного Водяного Кролика',
'13 2 Сине-Зеленого Деревянного Дракона',
'02 2 Сине-Зеленой Деревянной Змеи',
'21 1 Красной Огненной Лошади',
'09 2 Красной Огненной Овцы',
'30 1 Желтой Земляной Обезьяны',
'17 2 Желтого Земляного Петуха',
'06 2 Белой Металлической Собаки',
'27 1 Белой Металлической Свиньи (Кабана)',
'15 2 Черной Водяной Крысы (Мыши)',
'03 2 Черного Водяного Быка',
'23 1 Сине-Зеленого Деревянного Тигра',
'11 2 Сине-Зеленого Деревянного Кролика',
'31 1 Красного Огненного Дракона',
'18 2 Красной Огненной Змеи',
'07 2 Желтой Земляной Лошади',
'28 1 Желтой Земляной Овцы',
'16 2 Белой Металлической Обезьяны',
'05 2 Белого Металлического Петуха',
'25 1 Черной Водяной Собаки',
'13 2 Черной Водяной Свиньи (Кабана)',
'02 2 Сине-Зеленой Деревянной Крысы (Мыши)',
'20 2 Сине-Зеленого Деревянного Быка',
'09 2 Красного Огненного Тигра',
'29 1 Красного Огненного Кролика',
'17 2 Желтого Земляного Дракона',
'06 2 Желтой Земляной Змеи',
'27 1 Белой Металлической Лошади',
'15 2 Белой Металлической Овцы',
'04 2 Черной Водяной Обезьяны',
'23 1 Черного Водяного Петуха',
'10 2 Сине-Зеленой Деревянной Собаки',
'31 1 Сине-Зеленой Деревянной Свиньи (Кабана)',
'19 2 Красной Огненной Крысы (Мыши)',
'07 2 Красного Огненного Быка',
'27 1 Желтого Земляной Тигра',
'16 2 Желтого Земляного Кролика',
'05 2 Белого Металлического Дракона',
'14 1 Белой Металлической Змеи',
'12 2 Черной Водяной Лошади',
'01 2 Черной Водяной Овцы',
'22 1 Сине-Зеленой Деревянной Обезьяны',
'09 2 Сине-Зеленого Деревянного Петуха',
'29 1 Красной Огненной Собаки',
'18 2 Красной Огненной Свиньи (Кабана)',
'07 2 Желтой Земляной Крысы (Мыши)',
'26 1 Желтого Земляного Быка',
'10 2 Белого Металлического Тигра',
'03 2 Белого Металлического Кролика',
'23 1 Черного Водяной Дракона',
'10 2 Черной Водяной Змеи',
'31 1 Сине-Зеленой Деревянной Лошади',
'19 2 Сине-Зеленой Деревянной Овцы',
'09 2 Красной Огненной Обезьяны',
'28 1 Красного Огненного Петуха',
'16 2 Желтой Земляной Собаки',
'05 2 Желтой Земляной Свиньи (Кабана)',
'25 1 Белой Металлической Крысы (Мыши)',
'12 2 Белого Металлического Быка',
'01 2 Черного Водяного Тигра',
'22 1 Черного Водяного Кролика',
'10 2 Сине-Зеленого Деревянного Дракона',
'29 1 Сине-Зеленой Деревянной Змеи',
'17 2 Красной Огненной Лошади',
'06 2 Красной Огненной Овцы',
'26 1 Желтой Земляной Обезьяны',
'13 2 Желтого Земляного Петуха',
'09 2 Белой Металлической Собаки',
'23 1 Белой Металлической Свиньи (Кабана)',
'11 2 Черной Водяной Крысы (Мыши)',
'31 1 Черного Водяного Быка',
'19 2 Сине-Зеленого Деревянного Тигра',
'08 2 Сине-Зеленого Деревянного Кролика',
'28 1 Красного Огненного Дракона',
'15 2 Красной Огненной Змеи',
'04 2 Желтой Земляной Лошади',
'24 1 Желтой Земляной Овцы',
'12 2 Белой Металлической Обезьяны',
'1 2 Белого Металлического Петуха',
'22 1 Черной Водяной Собаки',
'10 2 Черной Водяной Свиньи (Кабана)',
'30 1 Сине-Зеленой Деревянной Крысы (Мыши)',
'17 2 Сине-Зеленого Деревянного Быка',
'6 2 Красного Огненного Тигра',
'26 1 Красного Огненного Кролика',
'14 2 Желтого Земляного Дракона',
'2 2 Желтой Земляной Змеи',
'23 1 Белой Металлической Лошади',
'11 2 Белой Металлической Овцы',
'1 2 Черной Водяной Обезьяны',
'19 2 Черного Водяного Петуха',
'8 2 Сине-Зеленой Деревянной Собаки',
'28 1 Сине-Зеленой Деревянной Свиньи (Кабана)',
'15 2 Красной Огненной Крысы (Мыши)',
'4 2 Красного Огненного Быка',
'24 1 Желтого Земляной Тигра',
'12 2 Желтого Земляного Кролика',
'2 2 Белого Металлического Дракона',
'21 1 Белой Металлической Змеи',
'9 2 Черной Водяной Лошади',
'29 1 Черной Водяной Овцы',
'17 2 Сине-Зеленой Деревянной Обезьяны',
'5 2 Сине-Зеленого Деревянного Петуха',
'26 1 Красной Огненной Собаки',
'14 2 Красной Огненной Свиньи (Кабана)',
'3 2 Желтой Земляной Крысы (Мыши)',
'23 1 Желтого Земляного Быка',
'11 2 Белого Металлического Тигра',
'31 1 Белого Металлического Кролика',
'19 2 Черного Водяной Дракона',
'7 2 Черной Водяной Змеи',
'27 1 Сине-Зеленой Деревянной Лошади',
'15 2 Сине-Зеленой Деревянной Овцы',
'5 2 Красной Огненной Обезьяны',
'24 1 Красного Огненного Петуха',
'12 2 Желтой Земляной Собаки',
'2 2 Желтой Земляной Свиньи (Кабана)',
'22 1 Белой Металлической Крысы (Мыши)',
'9 2 Белого Металлического Быка',
'29 1 Черного Водяного Тигра',
'17 2 Черного Водяного Кролика',
'6 2 Сине-Зеленого Деревянного Дракона',
'26 1 Сине-Зеленой Деревянной Змеи',
'14 2 Красной Огненной Лошади',
'3 2 Красной Огненной Овцы',
'24 1 Желтой Земляной Обезьяны',
'10 2 Желтого Земляного Петуха',
'30 1 Белой Металлической Собаки',
'18 2 Белой Металлической Свиньи (Кабана)',
'7 2 Черной Водяной Крысы (Мыши)',
'27 1 Черного Водяного Быка',
'15 2 Сине-Зеленого Деревянного Тигра',
'5 2 Сине-Зеленого Деревянного Кролика',
'25 1 Красного Огненного Дракона',
'12 2 Красной Огненной Змеи',
'1 2 Желтой Земляной Лошади',
'21 1 Желтой Земляной Овцы',
'9 2 Белой Металлической Обезьяны'
    ];
                
                function getmoonyear(y, m, d){
                    let ind = +y - 1900;
                    let needyear = yeardates[ind].split(' ');
                    if(d>=needyear[0] && m==needyear[1] || m>needyear[1]){
                        let narr = needyear.splice(2,4);
                        return narr.join(' ');
                    }
                    else{
                        ind--;
                        needyear = yeardates[ind].split(' ');
                        let narr = needyear.splice(2,4);
                        return narr.join(' ');
                    }
                }
                
                let moonbeg = getmoonyear(yearbegin, mounthbegin, daybegin);
                let moonend = getmoonyear(yearend, mounthend, dayend);
                
                begwostyearhere3.textContent = 'Год '+moonbeg;
                endwostyearhere3.textContent = 'Год '+moonend;
                
                fortoday.innerHTML = td + '.' + tm + '.' + d_e[0];
        
            }
            
            else {
                hideinfo3.style.opacity = 0;
            }
            
        }
        
        function resetall(){
            hideinfo3.style.opacity = 0;
            let smw3 = document.getElementsByClassName('small_inp3');
                for(let i=0; i<smw3.length; i++){
                    smw3[i].classList.remove('border_warning');
                     smw3[i].value='';
                }
        }
      