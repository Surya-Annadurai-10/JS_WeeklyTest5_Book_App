let name = document.querySelector(".name")
let email = document.querySelector(".email")
let password = document.querySelector(".password")  
let confirmPass = document.querySelector(".confirm")
let btn = document.querySelector(".sign-up")  ;
let formContainer = document.querySelector(".form-container");
let main = document.querySelector("main");


btn.addEventListener("click",(event)=>{
    // console.log("hi")
    // event.preventDefault();
    if (name.value == ""){
        alert("Enter Your Name !!");
        return;
    }else if (email.value == ""){
        alert("Enter Your email !!");
        return;

    }else if (password.value == ""){
        alert("Enter Password !!")
        return;

    }
let arr = [];
    if(password.value.length > 5 && confirmPass.value.length > 5){
        if (password.value == confirmPass.value){
         let obj = {
            id : Number(new Date()),
            name : name.value,
            email : email.value,
            password : password.value
         }

        

         
        if(JSON.parse(localStorage.getItem("user")) == null){
         arr.push(obj);
         localStorage.setItem("user" , JSON.stringify(arr));
            //  return;
        }else{
            let user = JSON.parse(localStorage.getItem("user"));

            user.forEach((value) =>{
                if(email.value == value.email){
                    alert("This Email already Exists")
                    return;
                }
            });

            user.push(obj);
            localStorage.setItem("user", JSON.stringify(user));
            alert("Congratulations !! Your Registration is Successfull !!")
            return;
          
        }
       }
    }else{
        alert("Please enter atleast 6 character to set the Strong password")
    }

    if (password.value == confirm.value){
         console.log(password.value.length);
    }

    name.value = ""
    email.value = ""
    password.value = ""
    confirmPass.value = ""
});


// 
// localStorage.clear()

let darkBall = document.querySelector(".dark-ball")
darkBall.style.left = "1px";

darkBall.addEventListener("click" , () =>{
   if (darkBall.style.left == "1px"){
    darkBall.style.left = "34px"
    document.querySelector("header").style.backgroundColor = "#4F2EE8";
    // document.querySelector("form-container").style.backgroundColor = "#4F2EE8"
    document.body.style.backgroundColor = "#000";
    document.body.style.color = "#fff";
    document.querySelector("header").style.borderColor = "#fff"
    document.querySelectorAll(".see-more").forEach((value) =>{
        value.style.color = "#fff"
    })

   }else{
    darkBall.style.left = "1px";
    document.body.style.backgroundColor = "#4F2EE8";
    document.body.style.color = "#000";
    document.querySelector("header").style.borderColor = "#000"
    document.querySelectorAll(".see-more").forEach((value) =>{
        value.style.color = "#000"
    })

   }
});