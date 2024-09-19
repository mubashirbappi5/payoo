

console.log('add addadd')

function logOut() {
    window.location.href = 'index.html'
}

// Handle Add Money button click
document.getElementById('addbtn').addEventListener("click", function(event) {
    event.preventDefault();

    const addmoneyinput = document.getElementById('input-money').value;
    const addmoneynum = parseFloat(addmoneyinput);
    const getpin = document.getElementById('pin-money').value;

    if (getpin === '4343') {
        console.log("add your money");
        const balance = document.getElementById('main-balance').innerText;
        const newbal = parseFloat(balance);
       

        const finalBalance = newbal + addmoneynum;
        console.log(finalBalance);
        document.getElementById('main-balance').innerText = finalBalance;
    } else {
        alert("your pin is wrong");
    }
});

// Show cashout form and hide add money form when Cash Out button is clicked
function casoutclick() {
    document.getElementById('cashout-display').classList.remove('hidden');
    document.getElementById('from-display').classList.add('hidden');
}

// Handle Add Money button click to show the add money form and hide cash out form
document.querySelector('.btn-lg').addEventListener('click', function() {
    document.getElementById('cashout-display').classList.add('hidden');
    document.getElementById('from-display').classList.remove('hidden');
});
