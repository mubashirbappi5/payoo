

document.getElementById("btnid").addEventListener("click", function (event) {
    event.preventDefault()
    console.log("login button field")

    const phoneNumber = document.getElementById('phone-num').value
    console.log(phoneNumber)
    const pin = document.getElementById('pin-num').value
    console.log(pin)

    if(phoneNumber === '01851516736' && pin ==='4343'){
        console.log('login sucessful')
        window.location.href = 'home.html'
        
    }
    else{
        alert("phone number or pin incorrect")
    }
});
