let finalCount = document.getElementsByClassName('cell');
let conteo = document.getElementsByClassName('card__count')
let votos = [0, 0, 0, 0];

function votar(params) {
    switch (params) {
        case '1':
            votos[0]++
            conteo[0].innerHTML = votos[0];
            break;
        case '2':
            votos[1]++
            conteo[1].innerHTML = votos[1];
            break;
        case '3':
            votos[2]++
            conteo[2].innerHTML = votos[2];
            break;
        case '4':
            votos[3]++
            conteo[3].innerHTML = votos[3];
            break;
    }
}


function redBtn(){
    let total = votos.reduce((p, e) => p + e);
    for (let i = 0; i < votos.length; i++) {
        let porcentaje = votos[i] / total * 100;
        finalCount[i].innerHTML = `${votos[i]} (${porcentaje.toFixed(2)})%`;
    }
    finalCount[4].innerHTML = total;
}