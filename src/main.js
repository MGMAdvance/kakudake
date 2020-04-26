const kana = [
    ["おはようございます","ohayougozaimasu"],
    ["いいえ", "iie"]
  ];

function init(){
    document.getElementById("kana").innerHTML = kana[ randomize() ][0];

    let typing = document.getElementById("type");
    typing.addEventListener('keypress', confirm, false);
}

function change(){
    document.getElementById("type").value = "";
    document.getElementById("kana").innerHTML = kana[ randomize() ][0];
}

function randomize(){
    return Math.floor(Math.random() * kana.length);
}

function getIndexKana(){
    let gana = document.getElementById("kana");
    let id = kana.findIndex(phrase => phrase[0] == gana.innerHTML);

    return id;
}

function check(){
    let type = document.getElementById("type");
    let id = getIndexKana();

    if ( type.value == kana[id][1] ){
        return true;
    }

    return false;
}

function confirm(evt){
    let charCode = evt.charCode;

    if( charCode == 13 ){
        evt.preventDefault();
        
        if ( check() ){
            change();
        }else{
            alert("Errooooww!!");
        }
    }
}

init();

