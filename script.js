function goToRegister() {
    const url = "register.html"
    window.open( url)
}

function hidePassword() {
   const pw = document.querySelector("#password");
   const togglePassword = document.querySelector('#togglePassword');

    if( pw.type === "password") {
        pw.type = "text"
        togglePassword.classList.remove("fa-eye-slash")
        togglePassword.classList.add("fa-eye");
    } else {
        pw.type = "password"

        togglePassword.classList.remove("fa-eye")
        togglePassword.classList.add("fa-eye-slash");
    }

    togglePassword.classList.toggle("far fa-eye")


}


function hidePass() {
    const pw = document.querySelector("#pass");
    const togglePass = document.querySelector('#togglePass');
 
     if( pw.type === "password") {
         pw.type = "text"
         togglePass.classList.remove("fa-eye-slash")
         togglePass.classList.add("fa-eye");
     } else {
         pw.type = "password"
 
         togglePass.classList.remove("fa-eye")
         togglePass.classList.add("fa-eye-slash");
     }
 
     togglePass.classList.toggle("far fa-eye")
 
 
 }

 const form = document.querySelector("#form");
 const password1 = document.querySelector("#password");
 const password2 = document.querySelector("#pass");
 const messageContainer = document.querySelector(".message-container");
 const message = document.querySelector("#message");

 let isValid = false;
 let passwordMatch = false;

 function validateForm() {
     isValid = form.checkValidity();
     console.log(isValid);

     if(!isValid) {
        message.textContent = "Fill out all details correctly";
        message.style.color = "red";
        messageContainer.style.border = "2px solid"
        messageContainer.style.borderColor = "red";
        return;
     } 

     if( password1.value === password2.value) {
        passwordMatch = true;
        message.textContent = "Registration Successful";
        message.style.color = "green";
        messageContainer.style.border = "2px solid"
        messageContainer.style.borderColor = "green";
     } else {
         passwordMatch = false;
         message.textContent = "Make sure password Match";
         message.style.color = "red";
         messageContainer.style.border = "2px solid"
         messageContainer.style.borderColor = "red";
         return;
     }


     if(isValid && passwordMatch) {
        
     message.textContent = "Registration Successful";
     message.style.color = "green";
     messageContainer.style.border = "2px solid"
     messageContainer.style.borderColor = "green";

     const url = "Todo.html"
     window.open(url);
     }



 }





 function processForm(a) {
    a.preventDefault();

    validateForm();
    const user = {
        name: form.fullname.value,
        username: form.username.value,
        email: form.email.value,
        password: form.password.value,
        confirmpassword: form.confirmpassword.value,
        phone: form.phone.value
    
    };
    if(isValid && passwordMatch) {
        // storeData();
        // console.log(user.name);

        localStorage.setItem("name", user.name)
        localStorage.setItem("password", user.password)

        console.log(localStorage.getItem("name"));
        console.log(localStorage.getItem("password"));
    }
   
 }

 function Login() {
     const usernameLogin = document.querySelector("#usernameLogin");
     const passwordLogin =  document.querySelector("#passwordLog");
     const messagecon = document.querySelector(".message-con");
     const messageText = document.querySelector("#message-text")
     const loginForm = document.querySelector("#loginForm")

     isValid = loginForm.checkValidity();

     
    

     console.log(usernameLogin.value);
     console.log(passwordLogin);

    //  if(usernameLogin.value === localStorage.getItem("name")  && passwordLogin.value === localStorage.getItem("password") ) {
    //     //  alert("welcome")
    //     messageText.textContent = "Login successful"
    //     messageText.style.color = "green"
    //     messagecon.style.border = "2px solid green"
    //     // const url = "Todo.html"
    //     //  window.open(url)

    //  } else {
    //     messageText.textContent = "Pls fill the form correctly"
    //     messageText.style.color = "red"
    //     messagecon.style.border = "2px solid"
    //     messagecon.style.borderColor = "red"
    //     //  alert ("Pls fill in the from correctly")

    //  }

     if(!isValid) {
        messageText.textContent = "Fill out all details correctly";
        messageText.style.color = "red";
        messagecon.style.border = "2px solid"
        messagecon.style.borderColor = "red";
        return;
     } else if(usernameLogin.value === localStorage.getItem("name")  && passwordLogin.value === localStorage.getItem("password") ) {
        //  alert("welcome")
        messageText.textContent = "Login successful"
        messageText.style.color = "green"
        messagecon.style.border = "2px solid green"
        const url = "Todo.html"
         window.open(url)

     

     } else {
        messageText.textContent = "Pls fill the form correctly"
        messageText.style.color = "red"
        messagecon.style.border = "2px solid"
        messagecon.style.borderColor = "red"
        //  alert ("Pls fill in the from correctly")
     }
 }

 const welcomeuser = document.querySelector("#user-welcome");

 welcomeuser.textContent = "Welcome " + localStorage.getItem("name")
 
 console.log(welcomeuser)

 



 form.addEventListener('submit', processForm);