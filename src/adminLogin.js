const userName = document.getElementById("username")
const password = document.getElementById("Password")

var form = document.getElementById("formId");
function submitForm(event) {
   event.preventDefault();
 
      if( "admin" === userName.value && "admin@123" === password.value){
        confirm("Login Successfull")
        if (confirm) {
          location.href = "../Webpages/booked.html";
        }else{
          console.log("err");
        }
           
      }else{
        alert("Incorrect credentials")
      }
    }
    
 form.addEventListener('submit', submitForm);
