let win = 0
let loss = 0
let saldo = win - loss

function partidaRanking (saldo){
    let ranking = ""

    if(resultado <= 10){
        ranking = "Ferro"
    } else if (resultado >= 11 && resultado <=20){
        ranking = "Bronze"
    } else if(resultado >= 21 && resultado <= 50){
        ranking = "Prata"
    } else if (resultado >= 51 && resultado <= 80){
        ranking = "Ouro"
    } else if (resultado >= 81 && resultado <=90){
        ranking = "Diamante"
    } else if(resultado >= 91 && resultado <= 100){
        ranking = "Lendário"
    } else {
        ranking = "Imortal"
    }
        
return ranking
}

console.log(`O nível do jogador é ${partidaRanking} `)