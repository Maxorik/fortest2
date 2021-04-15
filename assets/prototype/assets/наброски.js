// создание chords.min
function parse_chords() {
    let results,
        my_chords = [];
    
    var xhr = new XMLHttpRequest();
    xhr.open('GET', './chords.json', false);
    xhr.send();
    if (xhr.status != 200) {
        results = JSON.parse(xhr.responseText).chords;
    }
    
    console.log(results);
    
    for(list in results) {   
        let chord_list = results[list];     // аккорд определенного вида, напр. С
        for(chord in chord_list) {
            let chord_list_params = chord_list[chord];  // инфа об аккорде
            my_chords.push({
                'type': chord_list_params.key,
                'name': chord_list_params.key + chord_list_params.suffix,
                'tabs': chord_list_params.positions[0].frets.join(','),
                'bare': chord_list_params.positions[0].barres.join(''),
                'lad':  chord_list_params.positions[0].baseFret
            })
        }
    }
    
    console.log(my_chords);
    
    json_here.innerHTML = JSON.stringify(my_chords);
}

/** вернуть сетку аккорда
*   Строка с разметкой струны:
        <circle stroke-width="0.25" stroke="#444" fill="#444" cx="10" cy="30" r="4"></circle>
    cx="10" - смещение кружочка по Х (для струн 6-1: 0,10,20,30,40,50) = n*10
    cy="30" - по У                   (для ладов 1-4: 6,18,30,42)       = n*6
    r="4"   - радиус. Открытая струна r=2, зажатая r=4
    
    X - глушение струны (у нее лад = -1)
        <text font-size="0.7rem" fill="#444" font-family="Verdana" text-anchor="middle" x="0" y="-2">x</text>
    x="0" - изменять для определенной струны. 0 - для первой
    
    Баррэ складывается из трех элементов: два кружка (конец и начало) и палка между ними.
    Палка:
    <rect fill="#444" x="0" y="38" width="50" height="8"></rect>
    x - начало палки, как и смещение кружка = (для струн 6-1: 0,10,20,30,40,50)
    y - лад                                   (для ладов 1-4: 2,14,26,38)      
    width - размер, 10 * (кол-во струн - 1)
    
*/

function getChordGridSvg() {
//<svg viewBox="0 0 80 70">
//	<g transform="translate(13, 13)">
//		<g>
//			<path stroke="#444" stroke-width="0.25" stroke-linecap="square" stroke-linejoin="square" d="M 0 0 H 50 M 0 12 H 50 M 0 24 H 50 M 0 36 H 50 M 0 48 H 50M 0 0 V 48 M 10 0 V 48 M 20 0 V 48 M 30 0 V 48 M 40 0 V 48 M 50 0 V 48"></path>
//			<path stroke="#444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M 0 0 H 50"></path>
//                ИЛИ для баррэ\не первого лада
//          <text font-size="0.25rem" fill="#444" font-family="Verdana" x="-11" y="8">3fr</text> ----- 3fr - параметр lad
//		</g>
//		    <text font-size="0.7rem" fill="#444" font-family="Verdana" text-anchor="middle" x="0" y="-2">x</text>
//		<g>
//			<circle stroke-width="0.25" stroke="#444" fill="#444" cx="10" cy="30" r="4"></circle>
//		</g>
//		<g>
//			<circle stroke-width="0.25" stroke="#444" fill="#444" cx="20" cy="18" r="4"></circle>
//		</g>
//		<g>
//			<circle stroke-width="0.25" stroke="#444" fill="transparent" cx="30" cy="-4" r="2"></circle>
//		</g>
//		<g>
//			<circle stroke-width="0.25" stroke="#444" fill="#444" cx="40" cy="6.5" r="4"></circle>
//		</g>
//		<g>
//			<circle stroke-width="0.25" stroke="#444" fill="transparent" cx="50" cy="-4" r="2"></circle>
//		</g>
    
//    БАРРЭ
//    <g>
//			<circle stroke-width="0.25" stroke="#444" fill="#444" cx="0" cy="42" r="4"></circle>
//			<circle stroke-width="0.25" stroke="#444" fill="#444" cx="50" cy="42" r="4"></circle>
//			<rect fill="#444" x="0" y="38" width="50" height="8.25"></rect>
//		</g>
//	</g>
//</svg>
    let grid = '<svg viewBox="0 0 80 70"><g transform="translate(13, 13)"><g><path stroke="#444" stroke-width="0.25" stroke-linecap="square" stroke-linejoin="square" d="M 0 0 H 50 M 0 12 H 50 M 0 24 H 50 M 0 36 H 50 M 0 48 H 50M 0 0 V 48 M 10 0 V 48 M 20 0 V 48 M 30 0 V 48 M 40 0 V 48 M 50 0 V 48"></path><path stroke="#444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M 0 0 H 50"></path></g> <text font-size="0.7rem" fill="#444" font-family="Verdana" text-anchor="middle" x="0" y="-2">x</text><g><circle stroke-width="0.25" stroke="#444" fill="#444" cx="10" cy="30" r="4"></circle></g><g><circle stroke-width="0.25" stroke="#444" fill="#444" cx="20" cy="18" r="4"></circle></g><g><circle stroke-width="0.25" stroke="#444" fill="transparent" cx="30" cy="-4" r="2"></circle></g><g><circle stroke-width="0.25" stroke="#444" fill="#444" cx="40" cy="6.5" r="4"></circle></g><g><circle stroke-width="0.25" stroke="#444" fill="transparent" cx="50" cy="-4" r="2"></circle></g></g></svg>';
}