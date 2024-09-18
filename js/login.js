console.log("cheak js ");

document.getElementById("btnid").addEventListener("click", function (event) {
    event.preventDefault()
    console.log("login button field")

    const phoneNumber = document.getElementById('phone-num').value
    console.log(phoneNumber)
});
