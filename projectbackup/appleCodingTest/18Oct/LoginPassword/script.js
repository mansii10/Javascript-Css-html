function start()
{
    for(var index=0;index<document.forms[0].length;index++){
        document.forms[0].elements[index].value="";
    }
}
function passwordCheck() {
    var password1 = document.getElementById('password');
    var password2 = document.getElementById('confirmpassword');
    var message = document.getElementById('confirmMessage');
    var result = true;
    if(password1.value == password2.value ){
        message.style.color = "#003300";
        message.innerHTML = "Password Matches!"
    }else{
        message.style.color ="#800000";
        message.innerHTML = "Password Does Not Match!"
        result = false;
    }
    return result;
}
function DOBCheck() {
    if(document.querySelector('#Birthday').value.length === 10){
        var dateString = document.querySelector('#Birthday').value;
        var parts = dateString.split("/");
        var now = new Date();
        var birthday = new Date(now.getFullYear(),parts[1]-1,parts[0]);
        var age = now.getFullYear()-parts[2];
        if (now<birthday) age--;
        if (age < 14 || age > 150) {
            alert("You must be at least 14 and not older than 150.");
            return false;
        }
        // other validation
        return true;
    }
}
function showInput() {
    document.querySelector('#show').style.display = 'block';
    var firstname = document.querySelector('#firstname') ;

    document.querySelector('#showname').innerHTML = firstname.value;
    var email = document.querySelector('#email');

    document.querySelector('#email1').value = email.value;


    document.querySelector('#firstname1').value = firstname.value;
    var lastname = document.querySelector('#lastname');

    document.querySelector('#lastname1').value = lastname.value;
    var birthday = document.querySelector('#Birthday');

    document.querySelector('#birthday1').value = birthday.value;
}
document.addEventListener('DOMContentLoaded',function() {
    start();
    var inputs = document.querySelectorAll('input');
    for(var i = 0; i < inputs.length; i++){
        inputs[i].addEventListener('dblclick',function(){
            if(this.value !== ''){
                var r = confirm('Are you sure to clear?');
                if(r === true){
                    this.value='';
                }
            }
        });
    }
    document.querySelector('button').addEventListener('click',function(e) {
        console.log(document.querySelector('form').checkValidity());
        if(document.querySelector('form').checkValidity() && passwordCheck() && DOBCheck()){
            e.preventDefault();
            showInput();
        }
    })
})
 
     



