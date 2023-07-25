const namee = document.getElementById("Name")
const email = document.getElementById("Email")
const address = document.getElementById("Address")
const mobile = document.getElementById("Mobile")
const password = document.getElementById("Password")
const confirmPassword = document.getElementById("confirmPassword");
// const paymentMethod = document.getElementById("paymentMethod").value


var form = document.getElementById("formId");
function submitForm(event) {
   event.preventDefault();
    if (password.value === confirmPassword.value) {
        const bookings = {
                name: namee.value,
                email: email.value,
                address: address.value,
                mobile: mobile.value,
                password: password.value,
                confirmPassword: confirmPassword.value
              }
              console.log(bookings);
            //   getting the previous stored array of object
               const users = JSON.parse(sessionStorage.getItem("users") || "[]");
               users.push(bookings)
               sessionStorage.setItem("users", JSON.stringify(users))
               confirm("SignedUp sucessfully")
               if (confirm) {
                location.href = "../Webpages/Login.html";
              }else{
                console.log("err");
              }
    }
    else{
        alert("please check Password & Confirm password")
        // console.log("yes");
    }
  }
 form.addEventListener('submit', submitForm);
