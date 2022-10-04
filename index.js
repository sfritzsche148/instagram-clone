let lbtn = document.getElementById('Loginbtn');

lbtn.addEventListener('click', function() {

    // Login Name
    let LNinp = document.getElementById('LoginNameInput').value;

    // Login Password
    let LPinp = document.getElementById('LoginPasswordInput').value;

    if (!LNinp&& !LPinp) {
        window.alert('Bitte fülle die Felder aus');
    }else if (LNinp && LPinp) {
        window.location.href = 'http://127.0.0.1:5500/home.html';
        console.log('Username: ' + LNinp);
        console.log('Password: ' + LPinp);
    }
})
