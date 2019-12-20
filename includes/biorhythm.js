let datebio = biorhythm.getAttribute('attdate');

biorhythm.innerHTML = "<div id='userdatebio'><div class='btnspot'></div>"
                    + "<div id='datecontentbio'></div>"
                    + "<div class='bioh1 hideit mtopbio'>График биоритмов на "+ datebio +"</div>"
                    + "<div id='graphic' style='display:none;'></div>"
                    + "<div class='bioh1 hideit mtopbio'>Таблица биоритмов на "+ datebio +"</div>"
                    + "<div id='biotable'></div><div class='bioh1 biobtn'>Биоритм на сегодня</div>";

if(biorhythm.hasAttribute('fon')){
    let fonurlhost = document.location.protocol;
    let fonurlsite = document.location.host;
    let fonpath = fonurlhost + '//' + fonurlsite + '/Biorhythm/img/';
    let img = biorhythm.getAttribute('fon');
    biorhythm.style.backgroundImage = 'url(' + fonpath + img + ')';
}

let datecontentbio = document.getElementById('datecontentbio');
let biotable = document.getElementById('biotable');
let hidehh = document.getElementsByClassName('hideit');

setbio(datebio);

let biotodaybtn = document.querySelector('.biobtn');
biotodaybtn.addEventListener('click', function biofortoday(){
    let t = new Date();
    t = ''+t.getFullYear() +'/'+ (t.getMonth()+1) +'/'+ t.getDate();
    document.getElementById('datecontentbio').scrollIntoView(top);
    let mtopbio = document.querySelectorAll('.mtopbio');
    for(let i=0; i<mtopbio.length; i++){
        mtopbio[i].innerHTML = 'График биоритмов на ' + t;
    }
    
    setbio(t);
})


function setbio(thedate){
    graphic.innerHTML = '';
    graphic.style.display = 'block';
    biotable.innerHTML='';

    let userbirth = thedate.split('/');
    userbirth = new Date(userbirth[0], userbirth[1]-1, userbirth[2]);
    let biodate= new Date();
    
    let pi = 3.1415926535;
    let doff = biodate.getTime() - userbirth.getTime();
    let t = Math.floor(doff / 1000 / 60 / 60 / 24);     //кол-во дней между датами t
    let fisb = 23.688437;                               //P1
    let emob = 28.426125;                               //P2
    let intb = 33.163812;                               //P3
    
    let biofis = getgraphicdata( fisb, t, pi );
    let bioemo = getgraphicdata( emob, t, pi );
    let bioint = getgraphicdata( intb, t, pi );
    
    let miniyears = [];
    let years = [];
    for(let i=0; i<30; i++){
        //let k = new Date();
        let k = userbirth;
        k.setDate(k.getDate()+i);
        k.setMonth(k.getMonth()+1);
        let mm =  k.getMonth();
        let formini = k.getDate();
        
        if(mm == 0){
            mm = 12;
        }
        //k = biodate.setDate(biodate.getDate() + i);
        k = k.getDate() + '.' + mm;
        years.push(k);
        miniyears.push(formini);
    }
    
    for(let i=0; i<hidehh.length; i++){
        hidehh[i].style.display = 'block';
    }
    
    if(document.documentElement.clientWidth < 980){
        canvasbio(biofis, bioemo, bioint, miniyears, 7);
    }
    else{
        canvasbio(biofis, bioemo, bioint, years, 10);   
    }
    biotable.innerHTML = settable( biofis, bioemo, bioint, years );
    
}

function setnull(a){
    if(a.toString().length < 2){
        a = '0'+a;
    }
    return a;
}

function getgraphicdata(P, t, pi){
    let arr=[];
    for(let i=1; i< 31; i++){
        let key = Math.sin(2*pi*(t+i)/P)*100;
        key = key.toFixed(2); 
        arr.push(key);
    }
    return arr;
}

function canvasbio(biofis, bioemo, bioint, years, size){
    let dchart = new liteChart("chart", {
                   axisX: {
			         show: true,
                     color: "#e9edf1",
			         width: 2,
			         value: "%",
		          },
                    axisY: {    
                      show: true,
		              color: "#e9edf1",
		              width: 2,
		              value: "",
		              minValue: -100,
		              maxValue: 100
	               },
        fill: null,
		gridX: {
			show: true,
			interval: 10,
			fill: 1,
			label: {
				show: true
			},
			stroke:"#e9edf1",
			width:2,
			dasharray:"0 10.04",
			linecap:"round",
		},
                    labels: {
		              show: true,
		              fontColor: "#000",
		              fontSize: size,
		              fontFamily: "sans-serif",
		              fontWeight: "normal",
	               },
                    point: {
		              show: true,
		              radius: 3,
		              strokeWidth: 3,
		              stroke: "#000",
	               },
                    line: {
		              width: 3,
		              style: "straight",
		              shadow: true,
		              dasharray: null,
	               }
                } );
    dchart.setLabels(years);
    dchart.addLegend({"name": "Физический", "stroke": "red", "fill": "#fff", "values": biofis});
	dchart.addLegend({"name": "Эмоциональный", "stroke": "green", "fill": "#fff", "values": bioemo});
    dchart.addLegend({"name": "Интеллектуальный", "stroke": "blue", "fill": "#fff", "values": bioint});
    let graphic = document.getElementById('graphic');
	dchart.inject(graphic);
	dchart.draw();
}

function settable(biofis, bioemo, bioint, years){
    let headt = "<table id='biotablehere'><tr><td>Дата</td><td style='color:red'>Физический</td><td style='color:green'>Эмоциональный</td><td style='color:blue'>Интеллектуальный</td></tr>";
    let endt = "</table>";
    let midt = '';
    for(let i=0; i<years.length; i++){
        if(i == 0){
            midt += "<tr class='hlight'><td>" + years[i] + "</td><td>" + biofis[i] + "%</td><td>" + bioemo[i] + "%</td><td>" + bioint[i] + "%</td></tr>";
        }
        else midt += "<tr><td>" + years[i] + "</td><td>" + biofis[i] + "%</td><td>" + bioemo[i] + "%</td><td>" + bioint[i] + "%</td></tr>";
    }
    
    return '' + headt + midt + endt;
}
