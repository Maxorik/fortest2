let wapp = document.getElementById('wapp');
let phone = wapp.getAttribute('number');
let path = 'https://wa.me/' + phone;
wapp.innerHTML = '<a href="'+path+'" class="pulse-button" target="_blank"></a>';

let pulsebutton = document.querySelector('.pulse-button');
wapp.style.margin = '0 auto';
wapp.style.position = 'absolute';
wapp.style.bottom = '1.5em';
wapp.style.left = '2em';
pulsebutton.style.position='fixed';
pulsebutton.style.bottom='20px';
pulsebutton.style.marginLeft='-20px';
pulsebutton.style.marginTop='-20px';
pulsebutton.style.display= 'block';
pulsebutton.style.width='3em';
pulsebutton.style.height= '3em';
pulsebutton.style.fontSize='1.3em';
pulsebutton.style.color='#fff';
pulsebutton.style.textShadow='0 1px 0 #1f4c76';
pulsebutton.style.border='1px solid #fff';
pulsebutton.style.boxShadow='0 0 0 0 rgba(90, 153, 220, 0.7), inset 0 1px 0 #abcbe9';
pulsebutton.style.borderRadius='100%';
pulsebutton.style.background='#fff';
pulsebutton.style.cursor='pointer';
pulsebutton.style.backgroundRepeat= 'no-repeat';
pulsebutton.style.backgroundSize='3em 3em';
pulsebutton.style.backgroundImage = 'url(https://s8.hostingkartinok.com/uploads/images/2020/01/b3d895dbcf28042c2694ad49872363ee.png)';
pulsebutton.style.webkitAnimation = 'pulse 1s infinite cubic-bezier(0.6, 0, 0, 1)';

let cssAnimation = document.createElement('style');
cssAnimation.type = 'text/css';
let rules = document.createTextNode('@-webkit-keyframes pulse {'+
'to{box-shadow:0 0 0 15px rgba(90, 153, 220, 0), inset 0 1px 0 #abcbe9}'+
'}');
cssAnimation.appendChild(rules);
document.getElementsByTagName("head")[0].appendChild(cssAnimation);


if(window.matchMedia('(max-width: 980px)').matches){
	wapp.style.left = '3em';
    pulsebutton.style.width='5em';
    pulsebutton.style.height= '5em';
    pulsebutton.style.backgroundSize='5em 5em';
}



