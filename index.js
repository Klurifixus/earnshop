var made = 40;
var spent = 65;

function dailyBattle(){
    console.log("Today I made $" + made)
    console.log("Today I spent $" + spent)
    var totalMoney = made - spent
    
    if (totalMoney >= 0){
        console.log("Total money for today $" + totalMoney)
        console.log("I won today's battle.")
    }
    if (totalMoney < 0){
        totalMoney = totalMoney * -1
        console.log("Total money for today - $" + totalMoney)
        console.log("I failed today's battle.")
    }
}

