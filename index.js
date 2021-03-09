function validate(){
    var username = document.getElementById('username').value
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var cpassword = document.getElementById('cpassword').value

    console.log(username + email + password + cpassword);

    checkusername(username)
    checkemail(email)
    checkpassword(password)
    checkpasswordmatch(password, cpassword)

    //username validation
}
function checkusername(username){
    if(username.length > 7){
    document.getElementById('username').classList.add('success');
    document.getElementById('username').classList.replace('error', 'success');
    document.getElementById('username-error').innerText = ''
}
else{
    document.getElementById('username').classList.add('error');
    document.getElementById('username-error').innerText = 'username must be 8 characters long'
}
}
//email validation
function checkemail(email){
    if(email.length > 7 && email.includes('@gmail.com')){
    document.getElementById('email').classList.add('success');
    document.getElementById('email').classList.replace('error', 'success');
    document.getElementById('email-error').innerText = ''
}
else{
    document.getElementById('email').classList.add('error');
    document.getElementById('email-error').innerText = 'email must include @gmail.com and 8 characters long'
}
}
//password validation
function checkpassword(password){
    if(password.length > 7){
    document.getElementById('password').classList.add('success');
    document.getElementById('password').classList.replace('error', 'success');
    document.getElementById('password-error').innerText = ''
}
else{
    document.getElementById('password').classList.add('error');
    document.getElementById('password-error').innerText = 'password must be 8 characters long'
}

}

//checkpasswordmatch
function checkpasswordmatch(password, cpassword){
    if(password == cpassword && password != ''){
    document.getElementById('cpassword').classList.add('success');
    document.getElementById('cpassword').classList.replace('error', 'success');
    document.getElementById('cpassword-error').innerText = ''
    }
    else{
        document.getElementById('cpassword').classList.add('error');
        document.getElementById('cpassword-error').innerText = 'password not matching'
    }

}
