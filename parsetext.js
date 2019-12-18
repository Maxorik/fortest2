let parser = document.querySelector('.parsetext');


    let allmonth = ['yanvarya', 'fevralya', 'marta', 'aprelya', 'maya', 'iyunya', 'iyulya', 'avgusta', 'sentyabrya', 'oktyabrya', 'noyabrya', 'dekabrya'];

    let thisdate = new Date(2019, 5, 7);
    let weekdays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг','Пятница','Суббота'];
    let options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timezone: 'UTC'
    };

    let alldata = '';
    
    function zodiak(d, m){
        m++;
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
    function getmoonyear(y, m, d){
        let ind = +y - 1900;
        m = parseInt(m);
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
    function getnumoftheday(date, hours){
        //let hoursOfOneWeek = 168; // количество часов в одной неделе
        //let hoursOfOneday = 24;
        // decade = 240
        let hourOfMillisecs = 3600000; // количество миллисекунд в одном часе
        let startTimeOfCurrentYear = (new Date(date.getFullYear(), 0, 1)).getTime(); // время начала текущего года, в миллисекундах
        let currentTime = date.getTime();
        let pastTimeOfStartCurrentYear = currentTime - startTimeOfCurrentYear; // прошедшее время с начала года, в миллисекундах
        return pastTimeOfStartCurrentYear / hourOfMillisecs / hours.toFixed(2) + 1;
    }
    function isworkday(date){
        let d = date.getDay();
        if(d == 0 || d == 6){
            return 'Нерабочий день';
        }
        else{
            return 'Рабочий день';
        }
    }
    function dayinmonth(date){
        let nextmonth = new Date(date.getFullYear(), date.getMonth()+1, date.getDate());
        return Math.round((nextmonth - date) / 1000 / 3600 / 24);
    }
    function timeofyear(date){
        let m = date.getMonth();
        if(m == 0 || m == 1 || m ==11){
            return 'Зима';
        }
        else if(m>1 && m <5){
            return 'Весна';
        }
        else if(m>4 && m <8){
            return 'Весна';
        }
        else if(m>7 && m <11){
            return 'Весна';
        }
    }
    function daysinyear(date){
        let d1 = new Date(date.getFullYear(), 1, 1);
        let d2 = new Date(date.getFullYear(), 2, 1);
        let res = Math.round((d2 - d1) / 1000 / 3600 / 24);
        if(res == 29){
            return '366, високосный год';
        }
        else return '365, не високосный год';
    }
    function toOne(date, tog){
        let arr = [parseInt(date.getDate()), parseInt(date.getMonth()+1), parseInt(date.getFullYear())];        
    let togg = tog;
    if(togg == 'null' || togg==null){
        togg = 0;
    }
    let letter1 = ['а', 'и', 'с', 'ъ'];
    let letter2 = ['б', 'й', 'т', 'ы'];
    let letter3 = ['в', 'к', 'у', 'ь'];
    let letter4 = ['г', 'л', 'ф', 'э'];
    let letter5 = ['д', 'м', 'х', 'ю'];
    let letter6 = ['е', 'н', 'ц', 'я'];
    let letter7 = ['ё', 'о', 'ч'];
    let letter8 = ['ж', 'п', 'ш'];
    let letter9 = ['з', 'р', 'щ'];
    let letter10=['0','1','2','3','4','5','6','7','8','9'];
    let glas = ['а','е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];
    let sogl = ['б', 'в', 'г', 'д', 'ж', 'з', 'й', 'к', 'л', 'м', 'н', 'п', 'р', 'с', 'т',  'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ъ'];
    let book = [letter1, letter2, letter3, letter4, letter5, letter6, letter7, letter8, letter9, letter10];
    let allphrases = 0;
    let toplan = [];
    
    
    for(let i=0; i<arr.length; i++){
        let ival;
        ival = arr[i] + '';
        let letter = 'letter';
        let phrase = 0;
        let arnum=1;
             
        for(let i=0; i<ival.length; i++){   
            for(let j=0; j<book.length; j++){
                if(book[j].indexOf(ival[i]) >= 0){
                    if(j == 9){
                        phrase = phrase + ival[i];
                    }
                     else{
                        if(togg == 0 || togg == 4 || togg == 6){
                            phrase = phrase+j+1;
                        }
                        else if(togg == 1 && sogl.indexOf(ival[i]) == -1){
                            phrase = phrase+j+1;
                        }
                        else if(togg == 2 && glas.indexOf(ival[i]) == -1){
                            phrase = phrase+j+1;
                        }
                    }
                    
                    if(togg == 4 || togg == 5){
                        toplan.push(j+1);   
                    }
                    
                }
            }
            
        }
        allphrases += phrase; 
    }
    
    let res;
    if(togg!=6){
        res = toone(allphrases);
    }
    
    function toone(p){
        p = '' + p;
        p = p.split('');
        let sum = 0;
        for(let i=0; i<p.length; i++){
            p[i] = +p[i];
            sum = sum + p[i];
        }
        if(sum.toString().length>1){
            sum = toone(sum);
        }
        return sum;
    }
    
    if(togg == 5){
        res = toplan;
    }
    
    if(togg == 4){
        let planfisres = 0;
        let planmenres = 0;
        let planemores = 0;
        let planintres = 0; 
        for(let j=0; j<toplan.length; j++){
            if(toplan[j] == 4 || toplan[j] == 5){
                planfisres += toplan[j];
            }
            else if(toplan[j] == 1 || toplan[j] == 8){
                planmenres += toplan[j];
            }
            else if(toplan[j] == 2 || toplan[j] == 3 || toplan[j] == 6){
                planemores += toplan[j];
            }
            else if(toplan[j] == 7 || toplan[j] == 9){
                planintres += toplan[j];
            }
        }
        
        let plansres = [];
        plansres.push(planfisres);
        plansres.push(planmenres);
        plansres.push(planemores);
        plansres.push(planintres);
        
        let resulttoreturn = [];
        for(let j=0; j<plansres.length; j++){
            let b = toone(plansres[j]);
            resulttoreturn.push(b);
        }
        res = resulttoreturn
    }
    
    if(togg == 6){
        res = allphrases;
    }
    
    return res;
}
    function setluckcolor(date){
        let numcolor = toOne(date);
        let colorsarr = ['', 'Красный', 'Желтый', 'Оранжевый', 'Зеленый', 'Голубой', 'Синий', 'Фиолетовый', 'Розовый', 'Бронзовый', 'Серебряный', 'Золотой'];
        return colorsarr[numcolor]; 
    }
    function goodmorning(){
        let s = ['утро', 'день', 'вечер', 'ночь'];
        let res =  Math.floor(Math.random() * Math.floor(4));
        return s[res];
    }
    function propis(date, lang){
        let monthRU,num1_1,num1_2,num2_1_1,num2_1_2,num2_2,num3_1,num3_2,num4_1,num4_2, pyear;
        
        if(lang == "ru"){
            monthRU = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
            num1_1 = ['','первое','второе','третье','четвертое','пятое','шестое','седьмое','восьмое','девятое','десятое','одиннадцатое','двенадцатое','тринадцатое','четырнадцатое','пятнадцатое','шестнадцатое','семнадцатое','восемнадцатое','девятнадцатое'];
            num1_2 = ['первый','второй','третий','четвертый','пятый','шестой','седьмой','восьмой','девятый','десятый','одиннадцатый','двенадцатый','тринадцатый','четырнадцатый','пятнадцатый','шестнадцатый','семнадцатый','восемнадцатый','девятнадцатый'];
            num2_1_1 = ['двадцатое','тридцатое'];
            num2_1_2 = ['двадцатый','тридцатый','сороковой','пятидесятый','шестидесятый','семидесятый','восьмидесятый','девяностый'];
            num2_2 = ['двадцать','тридцать','сорок','пятьдесят','шестьдесят','семьдесят','восемьдесят','девяносто'];
            num3_1 = ['сотый','двухсотый','трехсотый','четырехсотый','пятисотый','шестисотый','семисотый','восьмисотый','девятисотый'];
            num3_2 = ['сто','двести','триста','четыреста','пятьсот','шестьсот','семьсот','восемьсот','девятьсот'];
            num4_1 = ['одна тысяча', 'две тысячи', 'три тысячи'];
            num4_2 = ['одна тысячный', 'двух тысячный','трех тысячный'];
            pyear = 'год';
            
        }
        
        if(lang == 'lat'){
            monthRU =['yanvarya', 'fevralya', 'marta', 'aprelya', 'maya', 'iyunya', 'iyulya', 'avgusta', 'sentyabrya', 'oktyabrya', 'noyabrya', 'dekabrya'];
            num1_1 = ['','pervoe','vtoroe','tret`e','chetvertoe','pyatoe','shestoe','sed`moe','vos`moe','devyatoe','desyatoe','odinnadcatoe','dvenadcatoe','trinadcatoe','chetyrnadcatoe','pyatnadcatoe','shestnadcatoe','semnadcatoe','vosemnadcatoe','devyatnadcatoe'];
            num1_2 = ['pervyj','vtoroj','tretij','chetvertyj','pyatyj','shestoj','sed`moj','vos`moj','devyatyj','desyatyj','odinnadcatyj','dvenadcatyj','trinadcatyj','chetyrnadcatyj','pyatnadcatyj','shestnadcatyj','semnadcatyj','vosemnadcatyj','devyatnadcatyj'];
            num2_1_1 = ['dvadcatoe','tridcatoe'];
            num2_1_2 = ['dvadcatyj','tridcatyj','sorokovoj','pyatidesyatyj','shestidesyatyj','semidesyatyj','vos`midesyatyj','devyanostyj'];
            num2_2 = ['dvadcat','tridcat','sorok','pyat`desyat','shest`desyat','sem`desyat','vosem`desyat','devyanosto'];
            num3_1 = ['sotyj','dvuhsotyj','trekhsotyj','chetyrekhsotyj','pyatisotyj','shestisotyj','semisotyj','vos`misotyj','devyatisotyj'];
            num3_2 = ['sto','dvesti','trista','chetyresta','pyat`sot','shest`sot','sem`sot','vosem`sot','devyat`sot'];
            num4_1 = ['odna tysyacha', 'dve tysyachi', 'tri tysyachi'];
            num4_2 = ['odna tysyachnyj', 'dvuh tysyachnyj','trekh tysyachnyj'];
            pyear = 'god';
        }
        
        let result = '';
        let dd = date.getDate();
        let mm = date.getMonth();
        let yy = ('' + date.getFullYear()).split('');
        
        function setday(day){
            day = +day;
            let strd = day + '';
            if(day<=19){
                return num1_1[day];
            }
           else{
                if(strd.charAt(1) == 0){
                    if(strd.charAt(0)=='2') return num2_1_1[0];
                    else if(strd.charAt(0)=='3') return num2_1_1[1];
                }
                else{
                    let sd = strd.charAt(1);
                    sd = +sd;
                    sd = num1_1[sd];
                    if(strd.charAt(0)=='2'){
                         return num2_2[0] +' '+ sd;
                    }
                    else if (strd.charAt(0)=='3'){
                         return num2_2[1] +' '+ sd;
                    }
                }
            } 
        }
        
        function setyear(year){
            let arry = (year + '').split(',');
            for(let i=0; i<arry.length; i++){
                arry[i] = +arry[i];
            }
            year = +year;
            let res = '';
            let last = arry.length; //4   2001 l-4 l-3 l-2 l-1
            if( arry[last-2] <= 1){                                                             //00 - 19 на конце
                if(arry[last-2]==0 && arry[last-1]==0){                                         //00 на конце
                    res = '';
                }
                else {                                                                          //01 - 19 на конце
                    let l21 = ''+(arry[last-2]) + (arry[last-1]);
                    l21 = +l21;
                    res = num1_2[l21 - 1] + ' ';
                }
            }
            if( arry[last-2] > 1 ){                                                             //20 - 99 на конце
                if(arry[last-1]==0){                                                            //0 на конце
                    let l22 = +arry[last-2];
                    res = num2_1_2[l22-2];
                }
                else res = num2_2[arry[last-2] - 2] + ' ' + num1_2[arry[last-1]-1] + ' ';       //1-9  на конце
            }
            if(last>2){                                                                         //100 - 999
                if(arry[last-2]==0 && arry[last-1]==0 && arry[last-3]!=0){                      //00 на конце
                    res = num3_1[arry[last-3] - 1] + ' ';
                }
                else{
                    res = num3_2[arry[last-3] - 1] + ' ' + res;
                }
            }
            if(last>3){
                if(arry[last-2]==0 && arry[last-1]==0 && arry[last-3]==0){
                    res = num4_2[arry[last-4] - 1] + ' ';
                }
                else{
                    res = num4_1[arry[last-4] - 1] + ' ' + res;
                }
            }
            
            let validateres = res.split(' ');
            for(let i=0; i<validateres.length; i++){
                if(validateres[i] == 'undefined'){
                    validateres[i] = '';
                }
            }
            res = validateres.join(' ');
            return res;
        }
        
        let daypart = setday(dd);
        let monthpart = monthRU[mm];
        let yearpart = setyear(yy);
        
        let final = daypart + ' ' + monthpart + ' ' + yearpart + ' ' + pyear;
        return final;
    }
    function randsleep(){
        let s = ['севере', 'юге', 'востоке', 'западе'];
        let res =  Math.floor(Math.random() * Math.floor(4));
        return s[res];
    }
    function toroman(date){
        let font_ar = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
        let font_rom = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];
        let alldate = ''+date.getDate() + date.getMonth() + date.getFullYear();
        alldate = +alldate;
    
        function to_roman(text) {
            if (!text) return "";
            let rezult = "";
            let n = font_ar.length - 1;
            while (text > 0) {
                if (text >= font_ar[n]) {
                    rezult += font_rom[n];
                    text -= font_ar[n];
                }
                else n--;
            }
            return rezult;
        }
        
        let res = to_roman(date.getDate()) + ' - ' + to_roman(date.getMonth()+1) + ' - ' + to_roman(date.getFullYear());
        return res;
    }
    function toukdate(date){
       // US date format: 3/21/1996, UK date format: 21/3/1996 – делаем шаблон вывода.
        return 'US date format: ' + (date.getMonth()+1) + '/' + date.getDate() + '/' + date.getFullYear() + ', UK date format: ' + date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear();
    }

    for(let i=0; i<1; i++){
        thisdate.setDate(thisdate.getDate()+1);
        let thisday = +thisdate.getDate();
        let thismonth = +thisdate.getMonth();
        let thisyear = +thisdate.getFullYear();
        let urlphrase = 'День ' + thisdate.toLocaleString("ru", options) +  ' года – факты, гороскоп, люди ';
               alldata  = '<h1>' + urlphrase + '</h1><br />'
                        + '<div class="pagepunkt">День недели ' + weekdays[thisdate.getDay()] + '</div><br />'
                        + '<div class="pagepunkt">' + isworkday(thisdate) + '</div><br />'
                        + '<div class="pagepunkt"class="pagepunkt">Порядковый номер дня: ' + parseInt(getnumoftheday(thisdate, 24)) + '</div><br />'
                        + '<div class="pagepunkt"> Порядковый номер недели: ' + parseInt(getnumoftheday(thisdate, 168)) + '</div><br />'
                        + '<div class="pagepunkt"> Номер декады ' + parseInt(getnumoftheday(thisdate, 240)) + '</div><br />'
                        + '<div class="pagepunkt"> Порядковый номер месяца: ' + (thismonth+1) + '</div><br />'
                        + '<div class="pagepunkt"> Сколько в месяце дней: ' + dayinmonth(thisdate) + '</div><br />'
                        + '<div class="pagepunkt"> Время года: ' + timeofyear(thisdate) + ' ЗДЕСЬ БУДЕТ ТЕКСТ ИЗ ФАЙЛА ' + '</div><br />'
                        + '<div class="pagepunkt"> Сколько дней в году: ' + daysinyear(thisdate) + '</div><br />'
                        + '<div class="pagepunkt"> Лунный день и фаза ' + ' ЗДЕСЬ БУДЕТ ТЕКСТ ИЗ ФАЙЛА ' + '</div><br />'
                        + '<div class="pagepunkt" Знак зодиака>' + zodiak(thisday, thismonth) + ' ЗДЕСЬ БУДЕТ ТЕКСТ ИЗ ФАЙЛА ' + '</div><br />'
                        + '<div class="pagepunkt"> Восточный год: ' + getmoonyear(thisyear, thismonth, thisday) + ' ЗДЕСЬ БУДЕТ ТЕКСТ ИЗ ФАЙЛА ' + '</div>'
                        + '<div class="pagepunkt" Славянский знак зодиака>' + zodiak(thisday, thismonth) + ' ЗДЕСЬ БУДЕТ ТЕКСТ ИЗ ФАЙЛА ' + '</div><br />'
                        + '<div class="pagepunkt" Славянский год>' + zodiak(thisday, thismonth) + ' ЗДЕСЬ БУДЕТ ТЕКСТ ИЗ ФАЙЛА ' + '</div><br />'
                        + '<div class="pagepunkt" Тотем>' + ' ЗДЕСЬ БУДЕТ ТЕКСТ ИЗ ФАЙЛА ' + '</div><br />'
                        + '<div class="pagepunkt" Гороскоп друидов>' + ' ЗДЕСЬ БУДЕТ ТЕКСТ ИЗ ФАЙЛА ' + '</div><br />'
                        + '<div class="pagepunkt" Удачный цвет по дате рождения: >' + setluckcolor(thisdate) + '</div><br />'
                        + '<div class="pagepunkt" Дерево по дате рождения: >' + ' НЕТ ДАННЫХ ' + '</div><br />'
                        + '<div class="pagepunkt" Цветок: >' + ' НЕТ ДАННЫХ ' + '</div><br />'
                        + '<div class="pagepunkt" Благовония, которые вам подойдут: >' + ' ЗДЕСЬ БУДЕТ ТЕКСТ ИЗ ФАЙЛА ' + '</div><br />'
                        + '<div class="pagepunkt" Число по дате рождения: >' + toOne(thisdate) + '</div><br />'
                        + '<div class="pagepunkt" Лучше если в вашем номере телефона будут цифры : >' + ' НЕТ ДАННЫХ ' + '</div><br />'
                        + '<div class="pagepunkt" Камень по дате рождания: >' + ' НЕТ ДАННЫХ ' + '</div><br />'
                        + '<div class="pagepunkt" Металл: >' + ' НЕТ ДАННЫХ ' + '</div><br />'
                        + '<div class="pagepunkt" Фигура\Символ\Предмет >' + ' ЗДЕСЬ БУДЕТ ТЕКСТ ИЗ ФАЙЛА ' + '</div><br />'
                        + '<div class="pagepunkt" Число судьбы: >' + toOne(thisdate) + '</div><br />'
                        + '<div class="pagepunkt" Вам соответствует карта Таро >' + ' ЗДЕСЬ БУДЕТ ТЕКСТ ИЗ ФАЙЛА ' + '</div><br />'
                        + '<div class="pagepunkt" Опасность придет от >' + ' ЗДЕСЬ БУДЕТ ТЕКСТ ИЗ ФАЙЛА ' + '</div><br />'
                        + '<div class="pagepunkt" Благоприятные года жизни >' + ' ЗДЕСЬ БУДЕТ ТЕКСТ ИЗ ФАЙЛА ' + '</div><br />'
                        + '<div class="pagepunkt" Опасные года жизни >' + ' ЗДЕСЬ БУДЕТ ТЕКСТ ИЗ ФАЙЛА ' + '</div><br />'
                        + '<div class="pagepunkt" Удачные дни недели: >' + ' НЕТ ДАННЫХ ' + '</div><br />'
                        + '<div class="pagepunkt" Благоприятное время суток: >' + goodmorning() + '</div><br />'
                        + '<div class="pagepunkt" Здоровье >' + ' ЗДЕСЬ БУДЕТ ТЕКСТ ИЗ ФАЙЛА ' + '</div><br />'
                        + '<div class="pagepunkt" Еда >' + ' ЗДЕСЬ БУДЕТ ТЕКСТ ИЗ ФАЙЛА ' + '</div><br />'
                        + '<div class="pagepunkt" Спать лучше на >' + randsleep() + '</div><br />'
                        + '<div class="pagepunkt" Святой по дате рождения: >' + ' НЕТ ДАННЫХ ' + '</div><br />'
                        + '<div class="pagepunkt" Ангел Хранитель: >' + ' НЕТ ДАННЫХ ' + '</div><br />'
                        + '<div class="pagepunkt" Святцы\ именины: >' + ' ЗДЕСЬ БУДЕТ ТЕКСТ ИЗ ФАЙЛА ' + '</div><br />'
                        + '<div class="pagepunkt" Икона по дате рождения: >' + ' НЕТ ДАННЫХ ' + '</div><br />'
                        + '<h2>Амулеты для родившихся' + thisdate.toLocaleString("ru", options) + '</h1><br />'
                        + '<div class="pagepunkt" Амулет любви: >' + ' ЗДЕСЬ БУДЕТ ТЕКСТ ИЗ ФАЙЛА ' + '</div><br />'
                        + '<div class="pagepunkt" Амулет здоровья: >' + ' ЗДЕСЬ БУДЕТ ТЕКСТ ИЗ ФАЙЛА ' + '</div><br />'
                        + '<div class="pagepunkt" Денежный талисман: >' + ' ЗДЕСЬ БУДЕТ ТЕКСТ ИЗ ФАЙЛА ' + '</div><br />'
                        + '<div class="pagepunkt" Талисман для бизнеса: >' + ' ЗДЕСЬ БУДЕТ ТЕКСТ ИЗ ФАЙЛА ' + '</div><br />'
                        + '<div class="pagepunkt" Оберег от порчи: >' + ' ЗДЕСЬ БУДЕТ ТЕКСТ ИЗ ФАЙЛА ' + '</div><br />'
                        + '<div class="pagepunkt" Оберег для семьи: >' + ' ЗДЕСЬ БУДЕТ ТЕКСТ ИЗ ФАЙЛА ' + '</div><br />'
                        + '<h2>Характеристика мужчин, родившихся' + thisdate.toLocaleString("ru", options) + '</h1><br />'
                        + '<div class="pagepunkt" Влюбить мужчину с датой рождения >' + ' ЗДЕСЬ БУДЕТ ТЕКСТ ИЗ ФАЙЛА ' + '</div><br />'
                        + '<div class="pagepunkt" Мужчине лучше, если ваше имя будет на букву: >' + ' ЗДЕСЬ БУДЕТ ТЕКСТ ИЗ ФАЙЛА ' + '</div><br />'
                        + '<div class="pagepunkt" Лучшие года для свадьбы: >' + ' ЗДЕСЬ БУДЕТ ТЕКСТ ИЗ ФАЙЛА ' + '</div><br />'
                        + '<div class="pagepunkt" Лучшие года для рождения детей: >' + ' ЗДЕСЬ БУДЕТ ТЕКСТ ИЗ ФАЙЛА ' + '</div><br />'
                        + '<div class="pagepunkt" Лучшие года для переезда: >' + ' ЗДЕСЬ БУДЕТ ТЕКСТ ИЗ ФАЙЛА ' + '</div><br />'
                        + '<div class="pagepunkt" Лучшие года для  начала дела: >' + ' ЗДЕСЬ БУДЕТ ТЕКСТ ИЗ ФАЙЛА ' + '</div><br />'
                        + '<div class="pagepunkt" Мужчине с датой рождения лучше дарить: >' + ' ЗДЕСЬ БУДЕТ ТЕКСТ ИЗ ФАЙЛА ' + '</div><br />'
                        + '<h2>Характеристика женщин, родившихся' + thisdate.toLocaleString("ru", options) + '</h1><br />'
                        + '<div class="pagepunkt" Влюбить женщину с датой рождения >' + ' ЗДЕСЬ БУДЕТ ТЕКСТ ИЗ ФАЙЛА ' + '</div><br />'
                        + '<div class="pagepunkt" Женщине лучше, если ваше имя будет на букву : >' + ' ЗДЕСЬ БУДЕТ ТЕКСТ ИЗ ФАЙЛА ' + '</div><br />'
                        + '<div class="pagepunkt" Лучшее время для свадьбы: >' + ' ЗДЕСЬ БУДЕТ ТЕКСТ ИЗ ФАЙЛА ' + '</div><br />'
                        + '<div class="pagepunkt" Лучшее время для рождения детей : >' + ' ЗДЕСЬ БУДЕТ ТЕКСТ ИЗ ФАЙЛА ' + '</div><br />'
                        + '<div class="pagepunkt" Лучшее время для переезда: >' + ' ЗДЕСЬ БУДЕТ ТЕКСТ ИЗ ФАЙЛА ' + '</div><br />'
                        + '<div class="pagepunkt" Лучшее время для начала дела: >' + ' ЗДЕСЬ БУДЕТ ТЕКСТ ИЗ ФАЙЛА ' + '</div><br />'
                        + '<div class="pagepunkt" Женщине с датой рождения лучше дарить: >' + ' ЗДЕСЬ БУДЕТ ТЕКСТ ИЗ ФАЙЛА ' + '</div><br />'
                        + '<div class="pagepunkt" Известные люди: >' + ' ЗДЕСЬ БУДЕТ ТЕКСТ ИЗ ФАЙЛА ' + '</div><br />'
                        + '<div class="pagepunkt" Праздники: >' + ' ЗДЕСЬ БУДЕТ ТЕКСТ ИЗ ФАЙЛА ' + '</div><br />'
                        + '<div class="pagepunkt" Прописью эта дата пишется: >' + propis(thisdate, "ru") + '</div><br />'
                        + '<div class="pagepunkt" Римскими цифрами дата пишется: >' + toroman(thisdate) + '</div><br />'
                        + '<div class="pagepunkt" Транслитом эта дата пишется: >' + propis(thisdate, "lat") + '</div><br />'
                        + '<div class="pagepunkt" Формат даты в английском языке: >' + toukdate(thisdate) + '</div><br />'
                                
        let div = document.createElement('div');
        //div.textContent = alldata;
        div.innerHTML = alldata;
        parser.appendChild(div);
    } 

