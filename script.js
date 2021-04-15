const url = 'https://velum-songs-library-default-rtdb.firebaseio.com/tracks.json';

// выпадающий список
    document.addEventListener('DOMContentLoaded', function() {
        let elems = document.querySelectorAll('select');
        let instances = M.FormSelect.init(elems, {});
    });

/**
*  init page
**/
document.addEventListener('DOMContentLoaded', function() {    
    //добавить события на выпадашки
    document.querySelectorAll('.float_list_elem').forEach(function(item, index, array) {
        array[index].addEventListener('click', (e) => {
            addHtmlElement(e.target.id);
        })
    });  
    
    // кнопки-выпадашки
    const chords = document.getElementById('btn_list_chords');
    let instances = M.FloatingActionButton.init(chords, {
        direction: 'bottom',
        hoverEnabled: false
    });
    
    btn_get.addEventListener('click', getStore);
    btn_set.addEventListener('click', storeAdd);
  });

/**
*  Подгружаем список песен с апи
**/
async function getStore() {
    let response = await fetch(url);
    let text = await response.json(); 
    console.log(text);
    document.getElementById('songs').innerHTML = '';
    
    for(key in text){
        document.getElementById('songs').innerHTML += key + '<input style="margin: 3px" id=del__' +key+ ' type="button" value="del" class="delete_btn">' + '<input style="margin: 3px" id=edit__' +key+ ' type="button" value="edit" class="edit_btn">' + '<br/>';
    }
    
    let edit_btns = document.querySelectorAll('.edit_btn');
    let delete_btns = document.querySelectorAll('.delete_btn');

    for(let i=0; i<edit_btns.length; i++) {
        edit_btns[i].addEventListener('click', editStore);
        delete_btns[i].addEventListener('click', deleteStore);
    }
}

/**
*  Добавить песню
**/
async function storeAdd() {
    let new_song = {
        "name": document.getElementById('song_name').value,
        "chords": {
            "куплет": document.getElementById('chords_kuplet').value,
            "припев": document.getElementById('chords_pripev').value,
        },
        "rhythm": {
            "куплет": document.getElementById('rhythm_kuplet').value,
            "припев": document.getElementById('rhythm_pripev').value,
        },
        "text": document.getElementById('song_text').value,
        "video": document.getElementById('song_youtube').value,
    }
    
    let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(new_song)
    });
}

/**
*  Редактировать песню
**/
async function editStore(e) {
    const song_id = e.target.id.split('__')[1];
    
    let edit_song = {
        "name": document.getElementById('song_name').value,
        "chords": {
            "куплет": document.getElementById('chords_kuplet').value,
            "припев": document.getElementById('chords_pripev').value,
        },
        "rhythm": {
            "куплет": document.getElementById('rhythm_kuplet').value,
            "припев": document.getElementById('rhythm_pripev').value,
        },
        "text": document.getElementById('song_text').value,
        "video": document.getElementById('song_youtube').value,
    }
    
    let response = await fetch('https://velum-songs-library-default-rtdb.firebaseio.com/tracks/' + song_id + '.json', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(edit_song)
    });
}

/**
*  Удалить песню
**/
async function deleteStore(e) {
    const song_id = e.target.id.split('__')[1];
    let response = await fetch('https://velum-songs-library-default-rtdb.firebaseio.com/tracks/' + song_id + '.json', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        }
    });
    
    await getStore();
}

/**
*   Добавить элемент на форму
**/
function addHtmlElement(id) {
    let btn_del_html = '<a class="waves-effect waves-light btn"><i class="material-icons left">delete</i></a>', 
        htmlText = '',
        chord_store = '',
        type_text_html = '<p class="flow-text">' + htmlText + '</p>',
        new_chord_list_html = '<div class="input-field" style="70px"><select class="icons" id='chords'>'
    
//    <div class="input-field">
//        <select class="icons" id='chords'>
//          <option value="" disabled selected>Выберите аккорд</option>
//          <option value="Am" data-icon="images/sample-1.jpg" class="left">Am</option>
//          <option value="Dm" data-icon="images/office.jpg" class="left">Dm</option>
//          <option value="G" data-icon="images/yuna.jpg" class="left">G</option>
//        </select>
//        <label>Добавить аккорд</label>
//      </div>
    
    switch(id) {
        case 'btn_add_chords_another': 
            htmlText = 'Прочее';
            break;
        case 'btn_add_chords_bridge': 
            htmlText = 'Бридж';
            break;
        case 'btn_add_chords_chorus': 
            htmlText = 'Припев';
            break;
        case 'btn_add_chords_couplet': 
            htmlText = 'Куплет';
            break;
        default:
            htmlText = 'Прочее';
            break;
    }
        
}