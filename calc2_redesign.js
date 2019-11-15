/*
        ВАЖНО!
        В HTML РАЗМЕТКЕ ОБЯЗАТЕЛЬНО ДОЛЖНО БЫТЬ:
        
        <div class='calc2here'></div>
        
        ИМЕННО В ЭТОТ ТЕГ ДОБАВИТСЯ КАЛЬКУЛЯТОР НОМЕР 2
*/
        
        let calc2here = document.getElementsByClassName('calc2here')[0];
        let calc2 = document.createElement('div');
        calc2.innerHTML = "<div class='calcarea'><div class='main_info'><div class='date_heres'><div style='margin-right:10px;'>Дата</div><input type='number' class='small_inp2 s_day22' placeholder='ДД' maxlength='2'><input type='number' class='small_inp2 s_month22' placeholder='ММ' maxlength='2'><input type='number' class='small_inp2 s_year22' placeholder='ГГГГ' maxlength='4'></div><div class='warnings'>Дата введена некорректно</div><div class='interfacecalc'><div class='intbtns'><div class='cntr'><input type='radio' name='rdo' id='opt1' class='hidden-xs-up' checked/><label for='opt1' class='radio'></label><label for='opt1' class='rlabel boldl'>+</label><input type='radio' name='rdo' id='opt2' class='hidden-xs-up'/><label for='opt2' class='radio'></label><label for='opt2' class='rlabel boldl'>-</label></div><div class='howarif'><input type='number' class='calcinp howmuch'></div><div class='intgetwhat'><input type='radio' name='setdataparam' id='opt3' class='hidden-xs-up' checked/><label for='opt3' class='radio'></label><label for='opt3' class='rlabel'>Дней</label><input type='radio' name='setdataparam' id='opt4' class='hidden-xs-up'/><label for='opt4' class='radio'></label><label for='opt4' class='rlabel'>Месяцев</label><input type='radio' name='setdataparam' id='opt5' class='hidden-xs-up'/><label for='opt5' class='radio'></label><label for='opt5' class='rlabel'>Лет</label></div></div><div class='for_btns'><div class='calcbtn totals'>Рассчитать</div><div class='calcbtn resets'>Сбросить</div></div></div><div class='hide_infos'><div class='date_heres dop'><div class='fordatabegs'><div class='begdataheres tohr'></div><div class='begweekheres tohr'></div><div class='begznakheres tohr'></div><div class='begwostyearheres tohr'></div></div></div></div></div>";
        
        calc2here.appendChild(calc2);

        let chplus = document.getElementById('opt1');
        let chminus = document.getElementById('opt2');
        let howmuch = document.getElementsByClassName('howmuch')[0];
        let changeday =document.getElementById('opt3');
        let changemounth = document.getElementById('opt4');
        let changeyear = document.getElementById('opt5');
        let totals = document.getElementsByClassName('totals')[0];
        let resets = document.getElementsByClassName('resets')[0];
        let hideinfos = document.getElementsByClassName('hide_infos')[0];
        
        let begdataheres = document.getElementsByClassName('begdataheres')[0];
        let begweekheres = document.getElementsByClassName('begweekheres')[0];
        let begznakheres = document.getElementsByClassName('begznakheres')[0];
        let begwostyearheres = document.getElementsByClassName('begwostyearheres')[0];

        let s_days22 = document.getElementsByClassName('s_day22')[0];
        let s_month22 = document.getElementsByClassName('s_month22')[0];
        let s_year22 = document.getElementsByClassName('s_year22')[0];

        let mounthsumdays2 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30 ,31];
        
        let today = new Date();
        let td = (today.getDate()).toString();
        let tm = (today.getMonth()).toString();

        s_days22.addEventListener('input', len2, false);
        s_month22.addEventListener('input', len2, false);
        s_year22.addEventListener('input', len4, false);

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


        if(td.length<2){
            td = '0'+td;
        }
        
        if(tm.length<2){
            tm = '0'+tm;
        }
        
        let settoday= today.getFullYear()+'-'+tm+'-'+td;
        s_days22.value = td;
        s_month22.value = +tm+1;
        s_year22.value = today.getFullYear();

        let totals_it = document.getElementsByClassName('totals')[0];
        totals_it.addEventListener('click', totalsdays, false);
        
        let resets_it = document.getElementsByClassName('resets')[0];
        resets_it.addEventListener('click', resetsall, false);
        
        let weekdays2 = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг','Пятница','Суббота'];
        
        function totalsdays(){
            let s_days22v = s_days22.value;
            let s_month22v = s_month22.value;
            let s_year22v = s_year22.value;
            
            if(s_month22v > 12 || s_month22v == ''){
                s_month22.classList.add('border_warning');
                hideinfos.style.opacity = 0;
            }
            
            else if(s_year22v.toString().length<4 || s_year22v == ''){
                s_year22.classList.add('border_warning');
                hideinfos.style.opacity = 0;
            }
            
            else if(s_days22v > mounthsumdays2[s_month22v-1] || s_days22v == ''){
                s_days22.classList.add('border_warning');
                hideinfos.style.opacity = 0;
            }
            
            else {
                let smw2 = document.getElementsByClassName('small_inp2');
                for(let i=0; i<smw2.length; i++){
                    smw2[i].classList.remove('border_warning');
                }
                hideinfos.style.opacity = 1;
            }
            
            
            
            let thedate = [s_year22v, s_month22v, s_days22v];
            let thedate_js = new Date(thedate[0], thedate[1], thedate[2]); // дата начала
            let hownum = howmuch.value;

            if(howmuch.value!=''){
                hideinfos.style.opacity = 1;
                hownum = +hownum;
            }

            if(chplus.checked){
                if(changeday.checked){
                    thedate_js.setDate(thedate_js.getDate()+hownum);
                    if(thedate_js.getMonth() == '00' || thedate_js.getMonth() == '0'){
                        thedate_js.setMonth(thedate_js.getMonth()+1);
                    }
                }   
                else if (changemounth.checked){
                    thedate_js.setMonth(thedate_js.getMonth()+hownum);
                }   
                else if (changeyear.checked){
                    thedate_js.setFullYear(thedate_js.getFullYear()+hownum);
                }   
            }
  
            else if(chminus.checked){
                if(changeday.checked){
                    thedate_js.setDate(thedate_js.getDate()-hownum);
                }   
                else if (changemounth.checked){
                    thedate_js.setMonth(thedate_js.getMonth()-hownum);
                }   
                else if (changeyear.checked){
                    thedate_js.setFullYear(thedate_js.getFullYear()-hownum);
                     if(thedate_js.getMonth() == '00' || thedate_js.getMonth() == '0'){
                        thedate_js.setMonth(thedate_js.getMonth()-1);
                    }
                } 
            }
            
            
            td = (thedate_js.getDate()).toString();
            tm = (thedate_js.getMonth()).toString();

            if(td.length<2){
                td = '0'+td;
            }
        
            if(tm.length<2){
                tm = '0'+tm;
            }
            
            begdataheres.innerHTML = td +'.'+ tm +'.'+ thedate_js.getFullYear();
            begweekheres.innerHTML =  weekdays2[thedate_js.getDay()];
                    
            let d_b_js2 = thedate_js;
            d_b_js2.setMonth(thedate_js.getMonth()-1);

            function getnumoftheday(date, hours){
                //let hoursOfOneWeek = 168; // количество часов в одной неделе
                //let hoursOfOneday = 24;
                let hourOfMillisecs = 3600000; // количество миллисекунд в одном часе
                let startTimeOfCurrentYear = (new Date(date.getFullYear(), 0, 1)).getTime(); // время начала текущего года, в миллисекундах
                let currentTime = date.getTime();
                let pastTimeOfStartCurrentYear = currentTime - startTimeOfCurrentYear; // прошедшее время с начала года, в миллисекундах
                return pastTimeOfStartCurrentYear / hourOfMillisecs / hours.toFixed(2) + 1;
            }
            
            let begnumweek2 = parseInt(getnumoftheday(d_b_js2, 168));
            let begnumday2 = parseInt(getnumoftheday(d_b_js2, 24));
            
            begweekheres.innerHTML += '<br>'+'это ' + begnumday2 + ' день года';
            begweekheres.innerHTML += '<br>'+'это ' + begnumweek2 + ' неделя года';

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
            
            let zodiakv = zodiak(d_b_js2.getDate(), d_b_js2.getMonth());
            begznakheres.innerHTML = zodiakv;
                
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
                    m = parseInt(m);
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
                
                let moonbeg = getmoonyear(thedate_js.getFullYear(), tm, td);
                
                begwostyearheres.textContent = 'Год '+moonbeg;
        
            }
        
        function resetsall(){
            hideinfos.style.opacity = 0;
            howmuch.value='';
            let smw2 = document.getElementsByClassName('small_inp2');
                for(let i=0; i<smw2.length; i++){
                    smw2[i].classList.remove('border_warning');
                     smw2[i].value='';
                }
        }