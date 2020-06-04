var hai;
function formValidation(){
    var uid = document.registration.userid;
    var passid = document.registration.passid;
    var uname = document.registration.username;
    var uadd = document.registration.address;
    var ustate = document.registration.state;
    var uzip = document.registration.zip;
    var uemail = document.registration.email;
    var umsex = document.registration.gender;
    if((userid_validation(uid,5,16))&&(allLetter(uname))&&(passid_validation(passid,7,12))&&(alphanumeric(uadd))&&(ValidateEmail(uemail))&&(stateselect(ustate))&&(allnumeric(uzip,ustate))&&(validsex(umsex))){
        return true;
    }
    else{
        return false;
    }
}
function userid_validation(uid,mx,my){
var uid_len = uid.value.length;
if (uid_len == 0 || uid_len >= my || uid_len < mx){
    alert("User Id should not be empty / length be between "+mx+" to "+my);
    uid.focus();
    hai = document.getElementById('k');
    hai.style.background = "linear-gradient(90deg,orange,red)";
    hai.style.display = "none";
    hai.style.display = "inline-block";
    return false;
    }
    hai = document.getElementById('k');
    hai.style.background = "linear-gradient(90deg,orangered,blue)";
    hai.style.display = "none";
    hai.style.display = "inline-block";
return true;
}
function passid_validation(passid,mx,my){
    var passid_len = passid.value.length;
    if (passid_len == 0 ||passid_len >= my || passid_len < mx){
        alert("Password should not be empty / length be between "+mx+" to "+my);
        passid.focus();
        hai = document.getElementById('l');
        hai.style.background = "linear-gradient(90deg,orange,red)";
        hai.style.display = "none";
        hai.style.display = "inline-block"
        return false;
    }
    hai = document.getElementById('l');
    hai.style.background = "linear-gradient(90deg,orangered,blue)";
    hai.style.display = "none";
    hai.style.display = "inline-block";
    return true;
}
function allLetter(uname){ 
    var letters = /^[0-9a-zA-Z]+$/;
    if(uname.value.match(letters)){
        hai = document.getElementById('m');
        hai.style.background = "linear-gradient(90deg,orangered,blue)";
        hai.style.display = "none";
        hai.style.display = "inline-block";
        return true;
    }
    else{
        alert('Username must have alphabet characters and numericals only');
        uname.focus();
        hai = document.getElementById('m');
        hai.style.background = "linear-gradient(90deg,orange,red)";
        hai.style.display = "none";
        hai.style.display = "inline-block"
        return false;
    }
}
function alphanumeric(uadd){ 
    var letters = /^[0-9a-zA-Z]+$/;
    if(uadd.value.match(letters)){
        hai = document.getElementById('n');
        hai.style.background = "linear-gradient(90deg,orangered,blue)";
        hai.style.display = "none";
        hai.style.display = "inline-block";
        return true;
    }
    else{
        alert('User address must have alphanumeric characters only');
        uadd.focus();
        hai = document.getElementById('n');
        hai.style.background = "linear-gradient(90deg,orange,red)";
        hai.style.display = "none";
        hai.style.display = "inline-block"
        return false;
    }
}
function stateselect(ustate){
    if(ustate.value == "Default"){
        alert('Select your state from the list');
        ustate.focus();
        hai = document.getElementById('o');
        hai.style.background = "linear-gradient(90deg,orange,red)";
        hai.style.display = "none";
        hai.style.display = "inline-block"
        return false;
    }
    else{
        hai = document.getElementById('o');
        hai.style.background = "linear-gradient(90deg,orangered,blue)";
        hai.style.display = "none";
        hai.style.display = "inline-block";
        return true;
    }
}
function allnumeric(uzip,ustate){ 
    var numbers = /^[0-9]+$/;
    if(uzip.value.match(numbers)){
        hai = document.getElementById('p');
        hai.style.background = "linear-gradient(90deg,orangered,blue)";
        hai.style.display = "none";
        hai.style.display = "inline-block";
        return true;
    }
    else{
        alert('ZIP code must have numeric characters only');
        uzip.focus();
        hai = document.getElementById('p');
        hai.style.background = "linear-gradient(90deg,orange,red)";
        hai.style.display = "none";
        hai.style.display = "inline-block"
        return false;
    }
}
function ValidateEmail(uemail)
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(uemail.value.match(mailformat)){
        hai = document.getElementById('q');
        hai.style.background = "linear-gradient(90deg,orangered,blue)";
        hai.style.display = "none";
        hai.style.display = "inline-block";
        return true;
    }
    else{
        alert("You have entered an invalid email address!");
        hai = document.getElementById('q');
        hai.style.background = "linear-gradient(90deg,orange,red)";
        hai.style.display = "none";
        hai.style.display = "inline-block"
        return false;
    }
}
function validsex(umsex){
    if(umsex.value == "Default"){
        alert('Select your gender from the list');
        umsex.focus();
        hai = document.getElementById('r');
        hai.style.background = "linear-gradient(90deg,orange,red)";
        hai.style.display = "none";
        hai.style.display = "inline-block"
        return false;
    }
    else{
        hai = document.getElementById('r');
        hai.style.background = "linear-gradient(90deg,orangered,blue)";
        hai.style.display = "none";
        hai.style.display = "inline-block";
        return true;
    }
}