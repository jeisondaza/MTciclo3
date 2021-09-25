let celdas = document.querySelectorAll('td')
let conteoLbl = document.querySelectorAll('.conteoLbl');

let votos = [0, 0, 0, 0,];

function votar(candidato){
    switch(candidato) {
        case "1":
            votos[0]++;
            conteoLbl[0].innerHTML = votos[0];
            break;
    
        case "2":
            votos[1]++;
            conteoLbl[1].innerHTML = votos[1];
            break;
    
        case "3":
            votos[2]++;
            conteoLbl[2].innerHTML = votos[2];
            break;
    
        case "4":
            votos[3]++;
            conteoLbl[3].innerHTML = votos[3];
            break;
    }
    total = votos.reduce((p, e) => p + e, 0);
}

function mostrar() {
   for (let i = 0; i < votos.length; i++) {
       let porcent = votos[i]/total*100;
       celdas[i].innerHTML = `${votos[i]} (${porcent.toFixed(2)})%`;
   }
   celdas[4].innerHTML = total;
}