/* ## Sistema de gasots familiar

Crie um objeto que possuirá 2 propriedades, ambas do tipo array;

    * receitas: []
    * despesas: []
    
Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo

*/


let family = {
    incomes: [1200, 1200, 250.46, 360.45], //receitas
    expenses: [320.34, 128.46, 176.87, 1450.00, 2000] //despesas
}

function sum(array) {
    let total = 0;

    for(let value of array) {
        total += value
    }
    return total
}


function calculateBalance() {
    const calculateIncomes = sum(family.incomes);
    const calculateExpenses = sum(family.expenses);

    const total = calculateIncomes - calculateExpenses

    const itsOk = total >= 0

    let balanceText = "negativo"

    if (itsOk) {
        balanceText = "Positivo"
    }

    console.log(`Seu saldo é ${balanceText}: R$${total.toFixed(2)}`);
}

calculateBalance();