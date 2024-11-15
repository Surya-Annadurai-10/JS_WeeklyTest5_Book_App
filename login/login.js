let localUser = localStorage.getItem("userList");
let localUserarr = JSON.parse(localUser);
// console.log(localUserarr);

let signBtn = document.querySelector(".sign-up");

let email = document.querySelector(".email");
let password = document.querySelector(".password");

function loginValidation(){
  if (email.value == ""){
    alert("Enter your Email !");
    return false;
  }

  if (password.value == ""){
    alert("Enter the Password !");
    return false;
  }
    let Emailresult = localUserarr.some((value) =>{
       if( value.email == email.value){
       if(value.password == password.value){
        console.log("true");
        return true;

       }else{
      
        console.log("false")
        password.style.boxShadow = "0 0 20px rgb(255, 0 , 0)"
         alert("Enter Correct Password");
        return false;
      
       }
      
      
      }
 
    });

    // console.log()

    if(!Emailresult){
     
       email.style.boxShadow = "0 0 20px rgb(255, 0 , 0)"
       alert("Enter Correct email");
       return false;
  }else{
    return true;
  }

    // let passwordResult = localUserarr.some((value) =>{
    //     return  value.password == password.value
   
    //   });

      // console.log(passwordResult)
       
// console.log(Emailresult, passwordResult);

    // if (Emailresult && passwordResult){
    //     return true;
    // }else{
        

    //     if(passwordResult){
           
            
    //     }
    // }

  
   return false;
}


// darkMode---------------------------------------
let darkBall = document.querySelector(".dark-ball");
darkBall.style.left = "1px";
let header = document.querySelector("header");
let sign1 = document.querySelector(".sign1")
let sign2 = document.querySelector(".sign2")

// let signUpBtn = document.querySelector(".sign-up")

let formCon = document.querySelector(".form-container")
let login = document.querySelector(".login")


darkBall.addEventListener("click", () => {
  if (darkBall.style.left == "1px") {
    darkBall.style.left = "34px";
   login.style.color = "#fff"
    // document.querySelector("form-container").style.backgroundColor = "#4F2EE8"
    document.body.style.backgroundColor = "#000";
    document.body.style.color = "#fff";
    header.style.backgroundColor = "#ff0000";
    header.style.color = "#fff";
    formCon.style.backgroundColor = "#000";
    formCon.style.color = "#ffff";
    signBtn.style.backgroundColor = "#ff0000"
sign1.style.color = "#fff"
sign2.style.color = "#fff"

  } else {
    darkBall.style.left = "1px";
    document.body.style.backgroundColor = "#4F2EE8";
    login.style.color = "#4F2EE8"

    header.style.color ="#000"
    header.style.backgroundColor = "#fff";
    formCon.style.backgroundColor = "#fff";
    formCon.style.color ="#000"
    signBtn.style.backgroundColor = "#000"
sign1.style.color = "#000"
sign2.style.color = "#000"
  
  }
});