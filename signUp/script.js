let name = document.querySelector(".name");
let email = document.querySelector(".email");
let password = document.querySelector(".password");
let confirmPass = document.querySelector(".confirm");
let btn = document.querySelector(".sign-up");
let formContainer = document.querySelector(".form-container");
let main = document.querySelector("main");


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
        return true;
       }else{
        return false;
       }
       
    }
}

let arr = [];

function register(){
    let userObj = {
        id : Number(new Date()),
        name : name.value,
        email : email.value,
        password : password.value,

    }

  // console.log(userObj);
  name.value = ""
  password.value = ""
  email.value = ""
  confirmPass.value = ""

  if(localStorage.getItem("userList") == null){
    arr.push(userObj);
    localStorage.setItem("userList" , JSON.stringify(arr))
  return true;
  }else{
    let get = JSON.parse(localStorage.getItem("userList"));

    let userExists = get.some((value) =>{
      console.log(value.email , userObj.email)
        value.email == userObj.email;
    });

    // let idExists = get.some((value) =>{
    //   console.log(value.id , userObj.id)

    //   value.id == userObj.id;
    //  })

     console.log(userExists , idExists);

     if (userExists ){
      alert("User Already Exists !!")
      return false;
     }else{
      get.push(userObj);
      localStorage.setItem("userList" , JSON.stringify(get));
      return true;
     }
  
  }
  // console.log(arr) 





}

// localStorage.clear()
console.log(localStorage.getItem("user"))


































// let obj;
// let arr = [];
// let user;

// function validation() {
//   event.preventDefault();
//   if (name.value == "") {
//     alert("Enter Your Name !!");
//     return false;
//   } else if (email.value == "") {
//     alert("Enter Your email !!");
//     return false;
//   } else if (password.value == "") {
//     alert("Enter Password !!");
//     return false;
//   } else {
//     if (check()) {
//       alert("Congratulations !! Your Registration is Successfull !!");
//       return true;
//     }
//   }

//   name.value = "";
//   email.value = "";
//   password.value = "";
//   confirmPass.value = "";
// }

// function check() {
//   if (password.value.length > 5 && confirmPass.value.length > 5) {
//     if (password.value == confirmPass.value) {
//       obj = {
//         id: Number(new Date()),
//         name: name.value,
//         email: email.value,
//         password: password.value,
//       };

//       if (JSON.parse(localStorage.getItem("user")) == null) {
//         arr.push(obj);
//         localStorage.setItem("user", JSON.stringify(arr));
//         //  return;
//       } else {
//         user = JSON.parse(localStorage.getItem("user"));

//         let emailExists = user.some((ele) => {
//           return ele.email == obj.email;
//         });

//         let idExists = user.some((ele) => {
//           return ele.id == obj.id;
//         });

//         if (emailExists && idExists) {
//           alert("User Already Exists");
//           return false;
//         } else {
//           user.push(obj);
//           localStorage.setItem("user", JSON.stringify(user));
//           return true;
//         }
//         // for(let value of user){
//         //     if(email.value == value.email){
//         //         alert("This Email already Exists ! Please try with different Email !");
//         //         console.log("hi")
//         //         return false;

//         //     }
//         // };
//       }
//     }
//   } else {
//     alert("Please enter atleast 6 character to set the Strong password");
//   }

//   if (password.value == confirm.value) {
//     console.log(password.value.length);
//   }
// }

// //
// // localStorage.clear()


// darkMode---------------------------------------
let darkBall = document.querySelector(".dark-ball");
darkBall.style.left = "1px";
let header = document.querySelector("header");
let sign1 = document.querySelector(".sign1")
let sign2 = document.querySelector(".sign2")

let signUpBtn = document.querySelector(".sign-up")

let formCon = document.querySelector(".form-container")





darkBall.addEventListener("click", () => {
  if (darkBall.style.left == "1px") {
    darkBall.style.left = "34px";
   
    // document.querySelector("form-container").style.backgroundColor = "#4F2EE8"
    document.body.style.backgroundColor = "#000";
    document.body.style.color = "#fff";
    header.style.backgroundColor = "#ff0000";
    header.style.color = "#fff";
    formCon.style.backgroundColor = "#000";
    formCon.style.color = "#ffff";
    signUpBtn.style.backgroundColor = "#ff0000"
sign1.style.color = "#fff"
sign2.style.color = "#fff"

  } else {
    darkBall.style.left = "1px";
    document.body.style.backgroundColor = "#4F2EE8";
    // document.body.style.backgroundColor = "#000";
    // document.body.style.color = "#fff";
    header.style.color ="#000"
    header.style.backgroundColor = "#fff";
    formCon.style.backgroundColor = "#fff";
    formCon.style.color ="#000"
    signUpBtn.style.backgroundColor = "#000"
sign1.style.color = "#000"
sign2.style.color = "#000"
  
  }
});
