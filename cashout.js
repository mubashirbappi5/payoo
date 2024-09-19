document.getElementById('cashoutbtn').addEventListener("click",function(e){
    e.preventDefault()
    const cashoutMoneyinput = document.getElementById('cashout-money').value
    const cashoutMoney = parseFloat(cashoutMoneyinput);
    const cashoutPin = document.getElementById('cashout-pin').value
    
    
    if(cashoutPin === '4343'){
        const mainBalence = document.getElementById('main-balance').innerText
        const mainBalencenum = parseFloat(mainBalence);
        
        const newBalence = mainBalencenum - cashoutMoney;
        
        document.getElementById('main-balance').innerText = newBalence
    }
    else{
        alert('something is wrong try again ')
    }
   
})