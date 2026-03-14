/* BOOKING POPUP OPEN */

function openPopup(){

let popup = document.getElementById("popup");

if(popup){
popup.style.display="block";
}

}

/* BOOKING POPUP CLOSE */

function closePopup(){

let popup = document.getElementById("popup");

if(popup){
popup.style.display="none";
}

}

/* WHATSAPP BOOKING */

function sendBooking(){

let name=document.getElementById("name").value;

let phone=document.getElementById("phone").value;

if(name=="" || phone==""){

alert("Please enter your name and phone number");

return;

}

let message="Hello ACCU Hotels, I want to book a room.%0AName: "+name+"%0APhone: "+phone;

window.open("https://wa.me/919009690032?text="+message);

}