function validate(){
var userid=document.getElementById("userid");
var password=document.getElementById("password");
var confirmPassword=document.getElementById("c-password");
var email=document.getElementById("email")

document.getElementById('userid-error').innerHTML="";
document.getElementById('password-error').innerHTML="";
document.getElementById('c-password-error').innerHTML="";
document.getElementById('email-error').innerHTML="";

var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


if(userid.value.trim()===""){
    document.getElementById('userid-error').innerHTML="Name is required"
    userid.style.border="1px solid red"
    return false
}else if(!email.value.trim().match(emailRegex)){
    document.getElementById('email-error').innerHTML="please fill valid email address";
    return false
}else if(password.value.trim()===""){
    document.getElementById('password-error').innerHTML='password is required'
    password.style.border="1px solid red"
    return false
}else if(password.value.trim().length<8){
    document.getElementById('password-error').innerHTML='keep minimum password length'
    password.style.border="1px solid red"
    return false
}else if(password.value.trim()!==confirmPassword.value.trim()){
    document.getElementById('c-password-error').innerHTML='check password'
    confirmPassword.style.border="1px solid red"
    password.style.border="1px solid red"
    return false
}else{
    userid.style.border="1px solid green";
password.style.border="1px solid green";
confirmPassword.style.border="1px solid green"
    return true;
}
}