// GET UI
let usernameui = document.getElementById('username');
let passwordui = document.getElementById('password');
let btnsubmit = document.querySelector('.btn-submit');

function hideerror(e){
    e.target.nextElementSibling.style.display = "none";
    e.target.style.borderColor = "#333";
}

btnsubmit.addEventListener('click',function(e){

    let username = usernameui.value;
    let password = passwordui.value;

    if(username.trim() != '' && password.trim() != ''){
        console.log("Access");
    }else{
        e.preventDefault();

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
