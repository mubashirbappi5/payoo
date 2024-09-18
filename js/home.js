console.log('add addadd')
function logOut(){
    window.location.href = 'index.html'
}

function adddisplay(){
    const addscreen = document.getElementById('from-display')
    addscreen.classList.remove('hidden')
}


document.getElementById('addbtn').addEventListener("click",function(event){
    event.preventDefault();
    

    const addmoneyinput = document.getElementById('input-money').value
    const addmoneynum = parseFloat(addmoneyinput)
   
    const getpin =  document.getElementById('pin-money').value 
    


    if(getpin === '4343'){
        console.log("add your money")
        const balance = document.getElementById('main-balance').innerText
        const newbal = parseFloat(balance)
        console.log(typeof newbal)
       
        const finalBalance = newbal + addmoneynum;
        console.log(finalBalance)
        document.getElementById('main-balance').innerText = finalBalance
    }
    else{
        alert("your pin is wrong")
    }


})