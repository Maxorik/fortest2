let time = timecontainer.getAttribute('atttime');
time = time.split(':');
    h1.innerHTML = time[0].charAt(0);
    m1.innerHTML = time[0].charAt(1);
    h2.innerHTML = time[1].charAt(0);
    m2.innerHTML = time[1].charAt(1);

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function setnull(a){
    if(a.toString().length < 2){
        return ('0'+a);
    }
    else{return a;}
}

function getrandomtext(){
    let a = getRandomInt(23);
    a=setnull(a);
    let b = getRandomInt(59);
    b=setnull(b);
    return(''+a+b);
}

nostbtn.onclick = function() {
let result = getrandomtext();
let timerofanimation = setInterval( function() {
	h1.innerHTML = getRandomInt(3);
    m1.innerHTML = getRandomInt(9);
    h2.innerHTML = getRandomInt(6);
    m2.innerHTML = getRandomInt(9);
    }, 10);
    
	setTimeout(() => { clearInterval(timerofanimation); 
        h1.innerHTML = result.charAt(0);
        m1.innerHTML = result.charAt(1);
        h2.innerHTML = result.charAt(2);
        m2.innerHTML = result.charAt(3); 
    }, 2000);           //длительность анимации часов
} 