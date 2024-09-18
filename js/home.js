console.log('add addadd')
document.getElementById('addbtn').addEventListener("click",function(event){
    event.preventDefault();
    console.log("btn working");

    const addmoneyinput = document.getElementById('input-money').value
    console.log(addmoneyinput)
    const getpin =  document.getElementById('pin-money').value
    console.log(getpin)


})