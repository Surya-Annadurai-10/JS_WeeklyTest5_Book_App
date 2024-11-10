let localUser = localStorage.getItem("user");
let localUserarr = JSON.parse(localUser);
// console.log(localUserarr);

let signBtn = document.querySelector(".sign-up");

let email = document.querySelector(".email");
let password = document.querySelector(".password");

signBtn.addEventListener("click" , (e) =>{
    // e.preventDefault();
    console.log(email.value);

    localUserarr.forEach((value) =>{
        if(email.value == value.email && password.value == value.password){
            alert("Login Successfull !!")
        return
        }

        if (email.value == value.email){
            alert("Enter Correct Password !!")
            return;
        }

        if(password.value == value.password){
            alert("Enter Correct Email !!")
            return;
        
        }
    });

    

})