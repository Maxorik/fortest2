/*
        ВАЖНО!
        В HTML РАЗМЕТКЕ ОБЯЗАТЕЛЬНО ДОЛЖНО БЫТЬ:
        
         <div class='shortinfo' atttotal='38' attoper='+' attdate='day'></div>
        
        где atttotal - количество (число)
        attoper - ставим + или -
        attdate - ставим day, month или year (прибавить/отнять дни, месяцы или годы)
        
        ИМЕННО В ЭТОТ ТЕГ ДОБАВИТСЯ КАЛЬКУЛЯТОР НОМЕР 4
*/
        function includeCSS(aFile){
            let style = window.document.createElement('link')
            style.href = aFile
            style.rel = 'stylesheet'
            document.head.appendChild(style)
        }

        includeCSS('calcstyles.css')
        
        
        let options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            //weekday: 'long',
            timezone: 'UTC'
        };
        
        let shortinfo = document.getElementsByClassName('shortinfo');
        for(let i=0; i<shortinfo.length; i++){
            let calc4here = document.getElementsByClassName('shortinfo')[i];
            let calc4 = document.createElement('div');
            calc4.className='blockcont';
            calc4.innerHTML = "<div class='calc4'><div class='calc4cont'></div><div class='calc4total'><div class='datecalc'></div><div class='anothercalc'><div class='zodiachere'></div><div class='moonyearhere'></div></div></div></div>";
            calc4here.appendChild(calc4);
            setshort(shortinfo[i]);
        }

        
        function setshort(elem){
            let target = elem;
            let total = +target.getAttribute('atttotal'); //сколько
            let operation = target.getAttribute('attoper'); //плюс или минус
            let whatday = target.getAttribute('attdate'); //дней или иесяцев или лет
            
            let cont1 = target.querySelector('div[class="calc4cont"]');//Какой день будет через 200 дней ?
            let cont2 = target.querySelector('div[class="datecalc"]'); //Это будет 27 мая 2020 г. Среда
            
            let waswill; //был/будет через
            let howmuch; //(сколько) 12
            let sklon; //склоняем дня|дней|день
            let was; //назад (если нужно)
            let waswill2; //Это было/Это будет
            let fordate; //(рассчитанная дата) 26.12.2019
            let forweekday; //(день недели) Пятница
            let zodiachere = target.querySelector('div[class="zodiachere"]'); //(знак зодиака) Овен
            let moonyearhere = target.querySelector('div[class="moonyearhere"]'); //(Лунный год) Черного Водяного Кролика
            
            let wd; //1 - day; 2 - month; 3 - year
            let weekdays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг','Пятница','Суббота'];
            
            let today = new Date();
            
            if(operation == '+'){
                waswill = ' будет через ';
                waswill2 = ' Это будет ';
                was='';
                                
                if(whatday == 'day'){
                    wd = 1;
                    today.setDate(today.getDate()+total);
                } 
                
                else if(whatday == 'month'){
                     wd = 2;
                    today.setMonth(today.getMonth()+total);
                } 
                
                else if(whatday == 'year'){
                     wd = 3;
                    today.setFullYear(today.getFullYear()+total);
                } 
                
            }
            
            
            else if(operation == '-'){
                waswill = ' был ';
                waswill2 = ' Это было ';
                was = ' назад ';
                
                if(whatday == 'day'){
                    wd = 1;
                    today.setDate(today.getDate()-total);
                } 
                
                else if(whatday == 'month'){
                    wd = 2;
                    today.setMonth(today.getMonth()-total);
                } 
                
                else if(whatday == 'year'){
                    wd = 3;
                    today.setFullYear(today.getFullYear()-total);
                }
                
            }

            td = (today.getDate()).toString();
            tm = (today.getMonth()).toString();

            if(td.length<2){
                td = '0'+td;
            }
        
            if(tm.length<2){
                tm = '0'+tm;
            }
            
            fordate = today.toLocaleString("ru", options);
            forweekday = weekdays[today.getDay()];
            
            function zodiak(d, m){
                    if (m==1 && d>=21 || m==2 && d<=19) return "Водолей (21.01 - 19.02)";
                    else if (m==2 && d>=20 || m==3 && d<=20) return "Рыбы (20.02 - 20.03)";
                    else if (m==3 && d>=21 || m==4 && d<=20) return "Овен (21.03 - 20.04)";
                    else if (m==4 && d>=21 || m==5 && d<=21) return "Телец (21.04 - 21.05)";
                    else if (m==5 && d>=22 || m==6 && d<=21) return "Близнецы (22.05 - 21.06)";
                    else if (m==6 && d>=22 || m==7 && d<=22) return "Рак (22.06 - 22.07)";
                    else if (m==7 && d>=23 || m==8 && d<=21) return "Лев (23.07 - 21.08)";
                    else if (m==8 && d>=22 || m==9 && d<=23) return "Дева (22.08 - 23.09)";
                    else if (m==9 && d>=24 || m==10 && d<=23) return "Весы (24.09 - 23.10)";
                    else if (m==10 && d>=24 || m==11 && d<=22) return "Скорпион (24.10 - 22.11)";
                    else if (m==11 && d>=23 || m==12 && d<=22) return "Стрелец (23.11 - 22.12)";
                    else if (m==12 && d>=22 || m==1 && d<=20) return "Козерог (22.12 - 20.01)";
                }
            
            let zodiakv = zodiak(today.getDate(), today.getMonth()+1);
            zodiachere.textContent = 'Знак зодиака ' + zodiakv;
            
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
                
                let moonbeg = getmoonyear(today.getFullYear(), tm, td);
                        
                let last = total.toString().slice(-1);
                if(last == 2 || last == 3 || last == 4){
                    if(wd==1){
                        sklon = 'дня';
                    }
                    else if(wd==2){
                        sklon = 'месяца';
                    }
                    else if(wd==3){
                        sklon = 'года';
                    }
                }
                if(last == 5 || last == 6 || last == 7 || last == 8 || last == 9 || last == 0){
                    if(wd==1){
                        sklon = 'дней';
                    }
                    else if(wd==2){
                        sklon = 'месяцев';
                    }
                    else if(wd==3){
                        sklon = 'лет';
                    }
                }
            
                if(last == 1){
                    if(wd==1){
                        sklon = 'день';
                    }
                    else if(wd==2){
                        sklon = 'месяце';
                    }
                    else if(wd==3){
                        sklon = 'год';
                    }
                }
            
                let last2 = total.toString().slice(-2);
            
                if(last2 == 11 || last2 == 12 || last2 == 13 || last2 == 14 || last2 == 15 || last2 == 16 || last2 == 17 || last2 == 18 || last2 == 19){
                    if(wd==1){
                        sklon = 'дней';
                    }
                    else if(wd==2){
                        sklon = 'месяцев';
                    }
                    else if(wd==3){
                        sklon = 'лет';
                    }
                }
            
            function getnumoftheday(date, hours){
                //let hoursOfOneWeek = 168; // количество часов в одной неделе
                //let hoursOfOneday = 24;
                let hourOfMillisecs = 3600000; // количество миллисекунд в одном часе
                let startTimeOfCurrentYear = (new Date(date.getFullYear(), 0, 1)).getTime(); // время начала текущего года, в миллисекундах
                let currentTime = date.getTime();
                let pastTimeOfStartCurrentYear = currentTime - startTimeOfCurrentYear; // прошедшее время с начала года, в миллисекундах
                return pastTimeOfStartCurrentYear / hourOfMillisecs / hours.toFixed(2) + 1;
            }
            
            let begnumweek4 = parseInt(getnumoftheday(today, 168));
            let begnumday4 = parseInt(getnumoftheday(today, 24));
                    
                cont1.innerHTML = 'Какой день' + ' ';
                cont1.innerHTML += waswill + ' ';
                cont1.innerHTML += total + ' ';
                cont1.innerHTML += sklon + ' ';
                cont1.innerHTML += was + '?';
            
                cont2.innerHTML = waswill2 + ' ';
                cont2.innerHTML += fordate + ', ';
                cont2.innerHTML += forweekday;
                cont2.innerHTML += '<br>' + begnumday4 + ' день года';
                cont2.innerHTML += '<br>' + begnumweek4 + ' неделя года';
                
                moonyearhere.textContent = 'Год '+moonbeg;
        }