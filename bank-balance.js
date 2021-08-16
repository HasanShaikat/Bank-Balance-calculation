document.getElementById('diposit-btn').addEventListener('click', function(){
    // get the amount deposited
    const depositInput = document.getElementById('diposit-amount');
    const depositInputAmmount = depositInput.value;
    const newDepositAmount = parseFloat(depositInputAmmount);
    
    const depositTotal = document.getElementById('deposit-total');
    const currentDepositAmount = depositTotal.innerText;
    const previousDepositAmount = parseFloat(currentDepositAmount);
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    
    depositTotal.innerText = newDepositTotal;

    // get update balance amount
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalAmount = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(balanceTotalAmount);
    const newBalanceTotal = previousBalanceAmount+newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;

    //clear the deposit input field 
    depositInput.value = '';
})

document.getElementById('withdraw-btn').addEventListener('click', function (){
    const withdrawAmount = document.getElementById('withdraw-amount');
    const withdrawAmountText = withdrawAmount.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    

    //Set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal= parseFloat(previousWithdrawText);
    const newWithdrawTotal= previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

     // get update balance amount
     const balanceTotal = document.getElementById('balance-total');
     const balanceTotalAmount = balanceTotal.innerText;
     const previousBalanceAmount = parseFloat(balanceTotalAmount);
     const newBalanceTotal = previousBalanceAmount-newWithdrawAmount ;
     balanceTotal.innerText = newBalanceTotal;
 
     //clear the deposit input field 
     withdrawAmount.value = '';
 })