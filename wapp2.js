let wapp2 = document.getElementById('wapp2');

//текст на зеленом фоне. <b> - жирный текст
wapp2.innerHTML = "<div class='cross'>&times;</div><div class='wapp_logo'></div><div class='wapp_txt'>Нажми и получи работу <b>прямо сейчас!</b></div>";

let phone2 = wapp2.getAttribute('number');
let txt = document.querySelector('.wapp_txt');
let logo = document.querySelector('.wapp_logo');

//текст исходящего сообщения от пользователя  %20 - знак пробела
let message = 'Добрый день!%20Прошу%20проконсультировать%20меня%20касательно%20открытых%20вакансий';
let path2 = 'https://wa.me/' + phone2 + '/?text=' + message;

wapp2.addEventListener('click', function call_wapp(event){
    let t = event.target;
    if(!t.classList.contains('cross')){
        let win = window.open(path2, '_blank');
        win.focus();
    }
})

let cross = document.querySelector('.cross');
cross.addEventListener('click', function hide_wapp(){
    wapp2.style.display = 'none';
})

//стили десктопа
wapp2.style.position = 'absolute';
wapp2.style.bottom = '0';
wapp2.style.left = '0';
wapp2.style.width = '20%';  //ширина зеленого окна
wapp2.style.height = '10%'; //высота
wapp2.style.backgroundColor = '#15a259';
wapp2.style.borderTopRightRadius = '20px';
wapp2.style.display = 'flex';
wapp2.style.justifyContent = 'space-around';
wapp2.style.alignItems = 'center';
wapp2.style.cursor = 'pointer';

//картинка - логотип вотсап
logo.style.width='60px'; //ширина
logo.style.height='60px';   //высота
logo.style.backgroundImage='url(https://s8.hostingkartinok.com/uploads/images/2020/02/8cf1817b5bdad421935faa508ed53261.png)'; //хост с картинкой
logo.style.backgroundSize='cover';

txt.style.color = '#fff';
txt.style.textAlign = 'justify';
txt.style.width = '50%';

//крестик
cross.style.background = '#d6d6d3'; //фон
cross.style.padding = '2px 8px';
cross.style.borderRadius = '100%';
cross.style.border = '1px solid #000';
cross.style.position = 'absolute';
cross.style.top = '-42%';
cross.style.left = '90%';
cross.style.cursor = 'pointer';

//стили телефон
if(window.matchMedia('(max-width: 980px)').matches){
    wapp2.style.width = '80%';  //ширина зеленого окна
    wapp2.style.height = '10%'; //высота
    wapp2.style.minHeight = '160px';
    logo.style.width = '160px';   //ширина картинки
    logo.style.height = '160px';  //высота
    txt.style.fontSize = '2.5em';
    cross.style.fontSize = '3em';
}



