let name = document.querySelector(".name");
let email = document.querySelector(".email");
let password = document.querySelector(".password");
let confirmPass = document.querySelector(".confirm");
let btn = document.querySelector(".sign-up");
let formContainer = document.querySelector(".form-container");
let main = document.querySelector("main");

// darkMode---------------------------------------
let darkBall = document.querySelector(".dark-ball");
darkBall.style.left = "1px";
let header = document.querySelector("header");
let sign1 = document.querySelector(".sign1")
let sign2 = document.querySelector(".sign2")

// let signUpBtn = document.querySelector(".sign-up")

// let formCon = document.querySelector(".form-container")





darkBall.addEventListener("click", () => {
  if (darkBall.style.left == "1px") {
    darkBall.style.left = "34px";
   
    // document.querySelector("form-container").style.backgroundColor = "#4F2EE8"
    document.body.style.backgroundColor = "#000";
    document.body.style.color = "#fff";
    header.style.backgroundColor = "#ff0000";
    header.style.color = "#fff";
    formContainer.style.backgroundColor = "#000";
    formContainer.style.color = "#ffff";
    btn.style.backgroundColor = "#ff0000"
sign1.style.color = "#fff"
sign2.style.color = "#fff"

  } else {
    darkBall.style.left = "1px";
    document.body.style.backgroundColor = "#4F2EE8";
    // document.body.style.backgroundColor = "#000";
    // document.body.style.color = "#fff";
    header.style.color ="#000"
    header.style.backgroundColor = "#fff";
    formContainer.style.backgroundColor = "#fff";
    formContainer.style.color ="#000"
    btn.style.backgroundColor = "#000"
sign1.style.color = "#000"
sign2.style.color = "#000"
  
  }
});


function validation(){
    if (name.value == ""){
        alert("Enter your Name");
        return false;
    }
    
    if (email.value == ""){
        alert("Enter your email");
        return false;

    }

    if (password.value == ""){
        alert("Enter your password")
        return false;

    }

    if (confirmPass.value == ""){
        alert("Enter your Confirm Password")
        return false;

    }

    if (password.value == confirmPass.value){
   
       if(register()){
        // console.log("36")
        return true;
       }else{
        // console.log("false")
        return false;

       }
     
    }

    return false;
}

let arr = [];



function register(){

    let userObj = {
        id : Number(new Date()),
        name : name.value,
        email : email.value,
        password : password.value,

    }

  console.log(userObj);
  name.value = "";
  email.value = "";
  password.value = "";
  confirmPass.value = "";


  if(localStorage.getItem("userList") == null){
    console.log("ls")
    arr.push(userObj);
    // console.log(userObj)
    // console.log("hi")
    localStorage.setItem("userList" , JSON.stringify(arr))
    return true;
  }else{
    let get = JSON.parse(localStorage.getItem("userList"));

    let userExists = get.some((value) =>{
      // console.log(value.email , userObj.email)
       return  value.email == userObj.email;
    });

    //  console.log(userExists );


     if (userExists ){
      alert("User Already Exists !!")
      return false;
     }else{
      get.push(userObj);
      localStorage.setItem("userList" , JSON.stringify(get));
      return true;
     }
  
   

  }






}

// localStorage.clear()
console.log(localStorage.getItem("userList"))


