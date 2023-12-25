// GET UI
let usernameui = document.getElementById('username');
let passwordui = document.getElementById('password');
let btnsubmit = document.querySelector('.btn-submit');

let profileuser = document.querySelector('.profile');


// remove error input field style
function removeerror(e){
    e.target.nextElementSibling.style.display = "none";
    e.target.style.borderColor = "#333";
}

btnsubmit.addEventListener('click',function(e){

    let username = usernameui.value;
    let password = passwordui.value;

    if(username.trim() != '' && password.trim() != ''){ // check field isn't to be empty
        console.log("Access");
    }else{
        e.preventDefault(); // stop form loading when error

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