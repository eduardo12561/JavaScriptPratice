/* Transformar notas escolares

Crie um algoritmo que transforme as notas do sistemas numérica para sistema de notas em caracteres tipo A B C

* de 90 pra cima - A
* entre 80 - 89 -  B
* entre 70 - 79 -  C
* entre 60 - 69 -  D
* menor que  60 -  E

*/

function getScore(score) {
    let scoreA = score >= 90 && score <= 100
    let scoreB = score >= 80 && score <= 89
    let scoreC = score >= 70 && score <= 79
    let scoreD = score >= 60 && score <= 69
    let scoreE = score < 60 && score >= 0
    
    let scoreFinal;
    
    if (scoreA) {
        scoreFinal = "A"
    } else if (scoreB) {
        scoreFinal = "B"
    } else if (scoreC) {
        scoreFinal = "C"
    } else if (scoreD) {
        scoreFinal = "D"
    } else if (scoreE) {
        scoreFinal = "E"
    }else {
        scoreFinal = "Nota inválida"
    }    

    return scoreFinal

}

console.log(getScore(101));
console.log(getScore(-5));
console.log(getScore(20));
console.log(getScore(35));
console.log(getScore(54));
console.log(getScore(81));
console.log(getScore(61));
console.log(getScore(-120));
console.log(getScore(26));
console.log(getScore(11));
console.log(getScore(84));
