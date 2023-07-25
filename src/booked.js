const fetchData = () => {
  // Via local Storage
  const GuestName = localStorage.getItem("GUESTNAME");
  const Location = localStorage.getItem("LOCATION");
  const Start_Date = localStorage.getItem("START_DATE");
  const End_Date = localStorage.getItem("END_DATE");
  const People_count = localStorage.getItem("PEOPLE_COUNT");

  const name = sessionStorage.getItem("NAME");
  const surname = sessionStorage.getItem("SURNAME");

  document.getElementById("guest-name").innerHTML = GuestName;

  document.getElementById("location").innerHTML = Location;

  document.getElementById("start-date").innerHTML = Start_Date;

  document.getElementById("end-date").innerHTML = End_Date;

  document.getElementById("people-count").innerHTML = People_count;
};

function load() {
  const bookingDetails = JSON.parse(sessionStorage.getItem("BookingDetails") || "[]");

  const myList = document.getElementById("list");

  for (i = 0; i < bookingDetails.length; i++) {
    var newRow = myList.insertRow(-1);
    cell1 = newRow.insertCell(0);
    cell2 = newRow.insertCell(1);
    cell3 = newRow.insertCell(2);
    cell4 = newRow.insertCell(3);
    cell5 = newRow.insertCell(4);
    cell6 = newRow.insertCell(5);
    cell7 = newRow.insertCell(6);

    cell1.appendChild(document.createTextNode(i + 1));
    cell2.appendChild(document.createTextNode(bookingDetails[i].guest));
    cell3.appendChild(document.createTextNode(bookingDetails[i].area));
    cell4.appendChild(document.createTextNode(bookingDetails[i].roomType));
    cell5.appendChild(document.createTextNode(bookingDetails[i].people_count));
    cell6.appendChild(document.createTextNode(bookingDetails[i].start_date));
    cell7.appendChild(document.createTextNode(bookingDetails[i].end_date));
  }
}

window.onload = load;
