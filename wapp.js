let wapp2 = document.getElementById('wapp2');

wapp2.innerHTML = "<div class='cross'>&times;</div><div class='wapp_logo'></div><div class='wapp_txt'>Нажми и получи работу <b>прямо сейчас!</b></div>";

let phone2 = wapp2.getAttribute('number');
let txt = document.querySelector('.wapp_txt');
let logo = document.querySelector('.wapp_logo');
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


wapp2.style.position = 'absolute';
wapp2.style.bottom = '0';
wapp2.style.left = '0';
wapp2.style.width = '20%';
wapp2.style.height = '10%';
wapp2.style.backgroundColor = '#15a259';
wapp2.style.borderTopRightRadius = '20px';
wapp2.style.display = 'flex';
wapp2.style.justifyContent = 'space-around';
wapp2.style.alignItems = 'center';
wapp2.style.cursor = 'pointer';

logo.style.width='60px';
logo.style.height='60px';
logo.style.backgroundImage='url(https://s8.hostingkartinok.com/uploads/images/2020/02/8cf1817b5bdad421935faa508ed53261.png)';
logo.style.backgroundSize='cover';

txt.style.color = '#fff';
txt.style.textAlign = 'justify';
txt.style.width = '50%';

cross.style.background = '#d6d6d3';
cross.style.padding = '2px 6px';
cross.style.borderRadius = '100%';
cross.style.border = '1px solid #000';
cross.style.position = 'absolute';
cross.style.top = '-42%';
cross.style.left = '90%';
cross.style.cursor = 'pointer';


if(window.matchMedia('(max-width: 980px)').matches){
    wapp2.style.width = '80%';
    wapp2.style.height = '10%';
    logo.width = '200px';
    logo.height = '200px';
    txt.style.fontSize = '2.5em';
    cross.style.top = '-35%';
    cross.style.fontSize = '3em';
}



