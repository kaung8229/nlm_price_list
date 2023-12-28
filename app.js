// GET UI
let usernameui = document.getElementById('username');
let passwordui = document.getElementById('password');
let btnsubmit = document.querySelector('.btn-submit');

let profileuser = document.querySelector('.profile');

let loginpage = document.querySelector('.loginpage');
let accesspage = document.querySelector('.accesspage');
let logout = document.querySelector('.logout');


// go back to login page when logout
logout.addEventListener('click',function(){
    loginpage.classList.remove("dnone");
    accesspage.classList.add("dnone");

    // remove access after logout
    localStorage.setItem("access",0);
})


// check access
let getaccess = localStorage.getItem("access");
// console.log(getaccess);
if(getaccess == "1"){
    loginpage.classList.add("dnone");
    accesspage.classList.remove("dnone");
}


// remove error input field style
function removeerror(e){
    e.target.nextElementSibling.style.display = "none";
    e.target.style.borderColor = "#333";
}

btnsubmit.addEventListener('click',function(e){
    e.preventDefault(); // stop form loading

    let username = usernameui.value;
    let password = passwordui.value;

    if(username.trim() != '' && password.trim() != ''){ // check field isn't to be empty
        loginpage.classList.add("dnone");
        accesspage.classList.remove("dnone");

        // after login giving access all the time until browser history clear
        localStorage.setItem("access",1);

    }else{

        if(username.trim() == ''){
            usernameui.nextElementSibling.style.display = 'block';
            usernameui.style.borderColor = 'red'
        }

        if(password.trim() == ''){
            passwordui.nextElementSibling.style.display = 'block';
            passwordui.style.borderColor = 'red'
        }
    }

})

// show or off to logout menu
profileuser.addEventListener('click',function(){
    this.classList.toggle("active");
})

// close logout menu
window.addEventListener('click',function(e){
    // console.log(e.target);
    if(e.target != profileuser){
        profileuser.classList.remove("active");
    }
},true)