let wapp = document.getElementById('wapp');
let phone = wapp.getAttribute('number');
let path = 'https://wa.me/' + phone;
wapp.innerHTML = '<a href="'+path+'" class="pulse-button" target="_blank"></a>';

/*
let styles = document.createElement("link");
styles.rel="stylesheet";
styles.href = myurl+"/includes/wapp.css";
document.getElementsByTagName("head")[0].appendChild(styles);
*/