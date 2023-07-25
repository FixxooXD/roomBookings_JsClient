const guestName = document.getElementById("guestName")
const Location = document.getElementById("location")
const startDate = document.getElementById("startDate")
const endDate = document.getElementById("endDate")
const peopleCount = document.getElementById("peopleCount")
const roomType = document.getElementById("room");
// const paymentMethod = document.getElementById("paymentMethod").value


var form = document.getElementById("formId");
function submitForm(event) {
   event.preventDefault();

    const bookings = {
      guest: guestName.value,
      start_date: startDate.value,
      end_date: endDate.value,
      area: Location.value,
      roomType: roomType.value,
      people_count: peopleCount.value
    }
    // console.log(bookings);
    // getting the previous stored array of object
     const bookingDetails = JSON.parse(sessionStorage.getItem("BookingDetails") || "[]");
     bookingDetails.push(bookings)
     sessionStorage.setItem("BookingDetails", JSON.stringify(bookingDetails));

    confirm("Booking Sucessfull")
    if (confirm) {
      location.href = "../index.html";
    }else{
      console.log("err");
    }
  }
form.addEventListener('submit', submitForm);