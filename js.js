var money, time;
function start(){
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while(money == "" || money == null){
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}

start();

var appData = {
    budget: money,
    timeData: time,
    expenses : {},
    optionalExpenses: {},
    income : [],
    savings: true,
    chooseExpenses: function(){
        for(var i = 0; i < 2; i++){
            var a = prompt("Введите обязательную статью расходов в этом месяце", ""),
                b = prompt("Во сколько обойдется?", "");
        
            if((typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50){
                appData.expenses[a] = b;
            }else{
                i = i - 1;
            }
        }
    },
    detectDayBudget: function(){
        appData.moneyPerDay = (appData.budget/30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function(){
        if(appData.moneyPerDay < 100){
            console.log("Минимальный уровень достатка");
        } else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
            console.log("Средний уровень достатка");
        } else if(appData.moneyPerDay > 2000){
            console.log("Высокий уровень достатка");
        } else {
            console.log("Ошибка");
        }
    },
    checkSavings: function(){
        if(appData.savings == true){
            var save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
    
                appData.monthIncome = save/100/12*percent;
                alert("Доход в месяц с вашего депозита: " + (appData.monthIncome).toFixed());
        }
    },
    chooseOptExpenses: function(){
        for(var i = 0; i < 3; i++){
            var a = prompt("Статья необязательных расходов?"),
                b = i + 1;
            appData.optionalExpenses[b] = a;
        }
    },
    chooseIncome: function(){
        for(var i = 0; i < 1; i++){
            var items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
            if(items == +items){
                i = i - 1;
            }
            if((typeof(items))=== 'string' && items != "" && (typeof(items)) != null){
                appData.income = items.split(', ');
                appData.income.push(prompt("Может что-то еще?"));
                appData.income.sort();
            }else {
                i = i - 1;
            }
            appData.income.forEach(function(item){
                alert("Способы доп. заработка: " + item);
            });
        }
    }
};