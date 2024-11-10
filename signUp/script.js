let name = document.querySelector(".name")
let email = document.querySelector(".email")
let password = document.querySelector(".password")  
let confirmPass = document.querySelector(".confirm")
let btn = document.querySelector(".sign-up")  ;
let formContainer = document.querySelector(".form-container");
let main = document.querySelector("main");

// window.onload = ()=>{
//     // let div = document.createElement("div");
//    formContainer.innerHTML =`
//     <form action="" >
//             <div class="input">
//                 <input autocomplete="on" class="name" type="text" placeholder="Enter Your Name">
//             </div>
//             <div class="input">
//                 <input autocomplete="on"  class="email"type="email" placeholder="Enter email">
//             </div>
//             <div class="input">
//                 <input autocomplete="on"  class="password"type="password" placeholder="Enter Password">
//             </div>
//             <div class="input">
//                 <input autocomplete="on"  class="confirm"type="password" placeholder="Confirm Password">
//             </div>
    
    
//             <button onclick ="btn(event)" class="sign-up">
//                 <p>Sign Up</p>
//                 <div class="button-bg"></div>
//             </button>
        
             
//         </form>

         
//    `
// // div.appendChild(formContainer)
// //    main.appendChild(formContainer);



// }

btn.addEventListener("click",(event)=>{
    // console.log("hi")
    event.preventDefault();
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
                }else{
                    user.push(obj);
                    localStorage.setItem("user", JSON.stringify(user));
                }
            })
          
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

let signUp = document.querySelector(".sign1");
let signIn = document.querySelector(".sign2");
console.log(signUp)

 signIn.addEventListener ("click",(event)=>{
    formContainer.remove();
    let div = document.createElement("div");
    div.classList.add("form-container");
    // form.setAttribute("Action" , "./")
    div.innerHTML = `
    <h1 class="login">Login Credentials</h1>
    <div class = "form">
     <form action="" >
        <div class="input">
            <input autocomplete="on"  class="email"type="email" placeholder="Enter email">
        </div>
        <div class="input">
            <input autocomplete="on"  class="password"type="password" placeholder="Enter Password">
        </div>
        <button class="sign-up">
            <p>Sign Up</p>
            <div class="button-bg"></div>
        </button>
    </form>
    </div>
    `
    main.appendChild(div);
});

// 
// localStorage.clear()