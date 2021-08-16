document.getElementById('login-submit').addEventListener('click', function(){
    // get user email
    const userMail = document.getElementById('user-email');
    const userMailCollect = userMail.value; 
    // get user password
    const userPass = document.getElementById('user-password');
    const userPassCollect = userPass.value;
    // check email or password.
    if (userMailCollect == 'gunda@gmail.com' && userPassCollect == 'gunda'){
        window.location.href = ('bank-balance.html')
    }else{
       document.write(alert("Please Enter Valid Email or Password")); 
    }
})

