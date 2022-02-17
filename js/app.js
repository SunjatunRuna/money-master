// declare a function for food, rent and cloth cost
function monthlyCost(sector){
    const costText = document.getElementById(sector + '-cost');
    const costAmount = parseFloat(costText.value);
    if((costAmount > 0) && (costAmount != isNaN)){
        return costAmount;
    }
    else{
        const errorMessage = document.getElementById('error-message');
        errorMessage.style.display = 'block';
    }
}

//declare a function and take input value
function inputValue(){
    const incomeText = document.getElementById('income');
    const incomeAmount = parseFloat(incomeText.value);
    return incomeAmount;
}

// declare a function for total expense
function costAmount(){
    const foodCost = monthlyCost('food');
    const rentCost = monthlyCost('rent');
    const clothCost = monthlyCost('cloth');
    const expenseAmount = foodCost + rentCost + clothCost;
    return expenseAmount;
}

//calculate button event handler
document.getElementById('expense').addEventListener('click', function(){
    if(!isNaN(costAmount())){
        const income = inputValue();
        if(income > costAmount()){
            const totalExpense = document.getElementById('total-expense');
            totalExpense.innerText = costAmount();
            const calculate = income - costAmount();
            const balance = document.getElementById('balance');
            balance.innerText = calculate;
        }
        else{
            const errMessage = document.getElementById('err-message');
            errMessage.style.display = 'block';
        }
    }
})

//save button event handler
document.getElementById('save').addEventListener('click', function(){
    const saveInputText = document.getElementById('save-input');
    const saveInput = parseFloat(saveInputText.value);
    const incomeTotal = inputValue();
    const savingBalance = (incomeTotal / 100) * saveInput;
    const remainBalance = incomeTotal - costAmount();
    if(remainBalance > savingBalance){
        const saveBalance = document.getElementById('save-amount');
        saveBalance.innerText = savingBalance;
        const remainBalanceText = document.getElementById('remaining-balance');
        remainBalanceText.innerText = remainBalance - savingBalance;

    }
    else{
        const errorMsg = document.getElementById('error-msg');
        errorMsg.style.display = 'block';
    }
})