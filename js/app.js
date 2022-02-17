// function monthlyCost(sector){
//     const costText = document.getElementById(sector + '-cost');
//     const costAmount = parseFloat(costText.value);
//     if(costAmount > 0){
//         return costAmount;
//     }
//     else{
//         const errorMessage = document.getElementById('error-message');
//         errorMessage.style.display = 'block';
//     }
// }
// function inputValue(){
//     const incomeText = document.getElementById('income');
//     const incomeAmount = parseFloat(incomeText.value);
//     return incomeAmount;
// }
// function cost(){
//     const foodCost = monthlyCost('food');
//     const rentCost = monthlyCost('rent');
//     const clothCost = monthlyCost('cloth');
//     const expenseCost = foodCost + rentCost + clothCost;
//     return expenseCost;
// }
// document.getElementById('expense').addEventListener('click', function(){
//     const income = inputValue();
//     if(income > cost()){
//         const totalExpense = document.getElementById('total-expense');
//         totalExpense.innerText = cost();
//         const calculate = income - cost();
//         const balance = document.getElementById('balance');
//         balance.innerText = calculate;
//     }
//     else{
//         const errMessage = document.getElementById('err-message');
//         errMessage.style.display = 'block';
//     }
//     console.log(cost());
// })
// document.getElementById('save').addEventListener('click', function(){
//     const saveInputText = document.getElementById('save-input');
//     const saveInput = parseFloat(saveInputText.value);
//     const incomeTotal = inputValue();
//     const savingBalance = (incomeTotal / 100) * saveInput;
//     const remainBalance = incomeTotal - cost();
//     if(remainBalance > savingBalance){
//         const saveBalance = document.getElementById('save-amount');
//         saveBalance.innerText = savingBalance;
//         const remainBalanceText = document.getElementById('remaining-balance');
//         remainBalanceText.innerText = remainBalance - savingBalance;

//     }
//     else{
//         const errorMsg = document.getElementById('error-msg');
//         errorMsg.style.display = 'block';
//     }


    
//     console.log(saveInput);
// })