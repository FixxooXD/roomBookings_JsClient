const email = document.getElementById("Email")
const password = document.getElementById("Password")

var form = document.getElementById("formId");
function submitForm(event) {
   event.preventDefault();
    console.log(password);
    console.log(email);

    const users = JSON.parse(sessionStorage.getItem("users") || "[]");
    
    users.map(user => {
      if(user.password === password.value && user.email === email.value){
        confirm("Login Successfull!")
        if (confirm) {
          location.href = "../index.html";
        }else{
          console.log("err");
        }
      }else{
        alert("Incorrect credentials")
      }
    })

  }
 form.addEventListener('submit', submitForm);
