let win = 0
let loss = 0
let saldo = win - loss

function partidaRanking (saldo){
    let ranking = ""

    if(saldo <= 10){
        ranking = "Ferro"
    } else if (saldo >= 11 && saldo <=20){
        ranking = "Bronze"
    } else if(saldo >= 21 && saldo <= 50){
        ranking = "Prata"
    } else if (saldo >= 51 && saldo <= 80){
        ranking = "Ouro"
    } else if (saldo >= 81 && saldo <=90){
        ranking = "Diamante"
    } else if(saldo >= 91 && saldo <= 100){
        ranking = "Lendário"
    } else {
        ranking = "Imortal"
    }
        
return ranking
}

console.log("O nível do jogador é " + partidaRanking())
